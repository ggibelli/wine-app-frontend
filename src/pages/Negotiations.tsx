import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { RouteComponentProps } from '@reach/router';
import {
  NegotiationDetailsFragment,
  NegotiationsQuery,
  QueryOrderBy,
  useNegotiationsLazyQuery,
} from '../generated/graphql';
import { CardNegotiation } from '../components/Cards/CardNegotiation';
import { BackButton } from '../components/BackButton';
import { Order } from '../components/FilterAds/Order';
import { InfiniteScroll } from '../containers/InfiniteScrollFetch';
import { DeepExtractType } from 'ts-deep-extract-types';
import { notification } from '../cache';
import { PurpleCheckbox } from '../components/FilterAds';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';
import { Loading } from '../components/Loading';

const Negotiations: React.FC<RouteComponentProps> = () => {
  const [lazyNegotiations, result] = useNegotiationsLazyQuery({
    onError: (error) => console.log(error),
  });
  const [negotiations, setNegotiations] = React.useState<
    DeepExtractType<NegotiationsQuery, ['negotiations']>['negotiations']
  >([]);
  const [order, setOrder] = React.useState<QueryOrderBy>(
    QueryOrderBy.CreatedAtDesc
  );
  const [isShowAll, setIsShowAll] = React.useState<boolean>(false);
  const handleShowAll = () => {
    if (isShowAll && result.refetch) {
      void result.refetch({
        offset: 0,
        limit: 4,
        orderBy: order,
        isConcluded: false,
      });
      setIsShowAll(false);
    }
    if (result.fetchMore && !isShowAll) {
      try {
        void result.fetchMore({
          variables: { limit: negotiations?.length, isConcluded: true },
        });
        setIsShowAll(true);
      } catch (e) {
        notification({
          type: 'error',
          message: 'Errore durante il caricamento delle trattative',
        });
      }
    }
  };

  React.useEffect(() => {
    void lazyNegotiations({
      variables: {
        offset: 0,
        limit: 4,
        orderBy: order,
        isConcluded: false,
      },
    });
  }, []);
  const isVisible =
    negotiations?.length !== result.data?.negotiations?.pageCount;
  React.useEffect(() => {
    if (result.data?.negotiations?.negotiations?.length) {
      const negotiationsData = result.data?.negotiations.negotiations;
      if (!isShowAll) {
        setNegotiations(negotiationsData?.filter((n) => !n?.isConcluded));
      } else {
        setNegotiations(negotiationsData);
      }
    }
  }, [result.data]);
  React.useEffect(() => {
    if (result.fetchMore) {
      result
        .fetchMore({
          variables: {
            orderBy: order,
            limit: negotiations?.length,
            isConcluded: isShowAll,
          },
        })
        .catch((e) => console.log(e));
    }
  }, [order]);
  if (result.loading) {
    return <Loading />;
  }
  if (negotiations?.length === 0) {
    return <div>Non hai ancora aperto trattative</div>;
  }
  if (
    negotiations?.length &&
    result.data?.negotiations?.negotiations?.length !== 0
  ) {
    const handleFetchMore = () => {
      if (result.fetchMore) {
        try {
          void result.fetchMore({
            variables: {
              offset: result.data?.negotiations?.negotiations?.length,
              orderBy: order,
              isConcluded: isShowAll,
            },
          });
        } catch (e) {
          console.log(e);
        }
      }
    };

    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <BackButton />

        <br />
        <Typography color='primary' component='h3' variant='h5'>
          Le tue trattative attive
        </Typography>
        <br />
        <Order setOrder={setOrder} order={order} />
        <Divider />
        <FormControlLabel
          control={
            <PurpleCheckbox
              checked={isShowAll}
              onChange={handleShowAll}
              name='showAll'
            />
          }
          label='Mostra anche le trattative chiuse'
        />
        <InfiniteScroll
          fetchMore={handleFetchMore}
          isVisible={isVisible}
          isLoading={result.loading}
        >
          {negotiations.map((negotiation) => (
            <CardNegotiation
              key={negotiation?._id}
              negotiation={negotiation as NegotiationDetailsFragment}
            />
          ))}
        </InfiniteScroll>
      </Container>
    );
  }
  if (result.data?.negotiations?.negotiations?.length === 0) {
    return <div>Non ci sono negoziazioni attive</div>;
  }
  return <div>Grave errore</div>;
};

export default Negotiations;
