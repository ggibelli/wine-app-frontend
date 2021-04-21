import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { RouteComponentProps } from '@reach/router';
import {
  NegotiationDetailsFragment,
  NegotiationsQuery,
  QueryOrderBy,
  useNegotiationsQuery,
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
  const [order, setOrder] = React.useState<QueryOrderBy>(
    QueryOrderBy.CreatedAtDesc
  );
  const { data, loading, error, fetchMore } = useNegotiationsQuery({
    variables: {
      offset: 0,
      limit: 4,
      orderBy: order,
      isConcluded: false,
    },
    onCompleted: ({ negotiations }) =>
      setNegotiations(negotiations?.negotiations),
    onError: (error) => console.log(error),
  });
  const [negotiations, setNegotiations] = React.useState<
    DeepExtractType<NegotiationsQuery, ['negotiations']>['negotiations']
  >([]);

  const [isShowAll, setIsShowAll] = React.useState<boolean>(false);
  const [isLoadFetchMore, setIsLoadFetchMore] = React.useState<boolean>(false);
  const [isLoadOrder, setIsLoadOrder] = React.useState<boolean>(false);
  const handleShowAll = async () => {
    setIsLoadOrder(true);
    if (isShowAll && fetchMore) {
      setIsShowAll(false);
      const { data } = await fetchMore({
        variables: {
          offset: 0,
          limit: 4,
          orderBy: order,
          isConcluded: false,
        },
      });
      setNegotiations(data.negotiations?.negotiations);
      setIsLoadOrder(false);
    }
    if (fetchMore && !isShowAll) {
      try {
        setIsShowAll(true);
        const { data } = await fetchMore({
          variables: { limit: negotiations?.length, isConcluded: true },
        });
        setNegotiations([
          ...(negotiations as []),
          ...(data.negotiations?.negotiations as []),
        ]);

        setIsLoadOrder(false);
      } catch (e) {
        notification({
          type: 'error',
          message: 'Errore durante il caricamento delle trattative',
        });
      }
    }
  };

  const isVisible =
    (negotiations?.length as number) <
    (data?.negotiations?.pageCount as number);

  React.useEffect(() => {
    if (negotiations?.length && fetchMore) {
      setIsLoadOrder(true);

      fetchMore({
        variables: {
          orderBy: order,
          limit: negotiations?.length,
          isConcluded: isShowAll,
        },
      })
        .then(({ data }) => {
          setIsLoadOrder(false);
          setNegotiations(data.negotiations?.negotiations);
        })
        .catch((e) => console.log(e));
    }
  }, [order]);
  if (loading) {
    return <Loading />;
  }
  if (error) return <div>{error.message}</div>;
  if (negotiations?.length === 0) {
    return <div>Non hai ancora aperto trattative</div>;
  }
  if (negotiations?.length && data?.negotiations?.negotiations?.length !== 0) {
    const handleFetchMore = async () => {
      setIsLoadFetchMore(true);
      if (fetchMore) {
        try {
          const { data } = await fetchMore({
            variables: {
              offset: negotiations.length,
              orderBy: order,
              isConcluded: isShowAll,
            },
          });
          console.log(data);
          setNegotiations([
            ...negotiations,
            ...(data.negotiations?.negotiations as []),
          ]);
          setIsLoadFetchMore(false);
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
        {isLoadOrder ? (
          <Loading />
        ) : (
          <InfiniteScroll
            fetchMore={handleFetchMore}
            isVisible={isVisible}
            isLoading={isLoadFetchMore}
          >
            {negotiations.map((negotiation) => (
              <CardNegotiation
                key={negotiation?._id}
                negotiation={negotiation as NegotiationDetailsFragment}
              />
            ))}
          </InfiniteScroll>
        )}
      </Container>
    );
  }
  return <div>Grave errore</div>;
};

export default Negotiations;
