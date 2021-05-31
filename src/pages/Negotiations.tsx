import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { RouteComponentProps } from '@reach/router';
import {
  NegotiationDetailsFragment,
  QueryOrderBy,
  useNegotiationsQuery,
} from '../generated/graphql';
import { CardNegotiation } from '../components/Cards/CardNegotiation';
import { BackButton } from '../components/BackButton';
import { Order } from '../components/FilterAds/Order';
import { InfiniteScroll } from '../containers/InfiniteScrollFetch';
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
    onError: (error) => console.error(error),
  });
  const [isShowAll, setIsShowAll] = React.useState<boolean>(false);
  const [isLoadFetchMore, setIsLoadFetchMore] = React.useState<boolean>(false);
  const [isLoadOrder, setIsLoadOrder] = React.useState<boolean>(false);
  const handleShowAll = async () => {
    if (isShowAll) {
      setIsShowAll(!isShowAll);
      return;
    }
    setIsLoadOrder(true);
    if (fetchMore && !isShowAll) {
      try {
        setIsShowAll(true);
        await fetchMore({
          variables: {
            limit: data?.negotiations?.negotiations?.length,
            isConcluded: true,
          },
        });
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
    (data?.negotiations?.negotiations?.length as number) <
    (data?.negotiations?.pageCount as number);
  React.useEffect(() => {
    if (data?.negotiations?.negotiations?.length && fetchMore) {
      setIsLoadOrder(true);

      fetchMore({
        variables: {
          orderBy: order,
          limit: data?.negotiations?.negotiations?.length,
          isConcluded: isShowAll,
        },
      })
        .then(() => {
          setIsLoadOrder(false);
        })
        .catch((e) => {
          setIsLoadOrder(false);

          console.error(e);
        });
    }
  }, [order]);

  if (loading) {
    return <Loading />;
  }
  if (error) return <div>{error.message}</div>;
  if (data?.negotiations?.negotiations?.length === 0) {
    return <div>Non hai trattative attive</div>;
  }
  if (data?.negotiations?.negotiations?.length) {
    const handleFetchMore = async () => {
      setIsLoadFetchMore(true);
      if (fetchMore) {
        try {
          await fetchMore({
            variables: {
              offset: data?.negotiations?.negotiations?.length,
              orderBy: order,
              isConcluded: isShowAll,
            },
          });
          setIsLoadFetchMore(false);
        } catch (e) {
          console.error(e);
          setIsLoadFetchMore(false);
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
            {data?.negotiations?.negotiations
              .filter((negotiation) =>
                !isShowAll
                  ? negotiation?.isConcluded === isShowAll
                  : negotiation
              )
              .map((negotiation) => (
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
