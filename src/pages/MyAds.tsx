import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { RouteComponentProps } from '@reach/router';
import {
  QueryOrderBy,
  useAdsForUserQuery,
  AdsForUserQuery,
} from '../generated/graphql';
import { BackButton } from '../components/BackButton';
import { Order } from '../components/FilterAds/Order';
import { InfiniteScroll } from '../containers/InfiniteScrollFetch';
import { myInfo } from '../cache';
import { CardWine } from '../components/Cards/CardWine';
import { AdsWineResult } from '../types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';
import { PurpleCheckbox } from '../components/FilterAds';
import { Loading } from '../components/Loading';
import { ApolloQueryResult } from '@apollo/client';

const MyAds: React.FC<RouteComponentProps> = () => {
  const me = myInfo();
  const [order, setOrder] = React.useState<QueryOrderBy>(
    QueryOrderBy.CreatedAtDesc
  );
  const [pageCount, setPageCount] = React.useState<number>(0);
  const { data, loading, error, fetchMore } = useAdsForUserQuery({
    variables: {
      offset: 0,
      limit: 4,
      orderBy: QueryOrderBy.CreatedAtDesc,
      user: me?._id as string,
      isActive: undefined,
    },
    onError: (error) => console.error(error),
    onCompleted: ({ adsForUser }) => {
      setPageCount(adsForUser?.pageCount as number);
    },
  });
  const [hideNotActive, setHideNotActive] = React.useState<boolean>(false);
  const [isLoadFetchMore, setIsLoadFetchMore] = React.useState<boolean>(false);
  const [isLoadOrder, setIsLoadOrder] = React.useState<boolean>(false);
  const handleShowAll = () => {
    setHideNotActive(!hideNotActive);
  };

  React.useEffect(() => {
    const loadMore = async () => {
      setIsLoadOrder(true);
      try {
        const result: ApolloQueryResult<AdsForUserQuery> = await fetchMore({
          variables: {
            orderBy: order,
            limit: data?.adsForUser?.ads?.length,
            isActive: hideNotActive,
          },
        });
        setIsLoadOrder(false);
        result.data.adsForUser?.pageCount !== pageCount &&
          setPageCount(result.data.adsForUser?.pageCount as number);
      } catch (e) {
        console.error(e);
      }
    };

    if (data?.adsForUser?.ads?.length && fetchMore) {
      void loadMore();
    }
  }, [order]);

  if (loading) {
    return <Loading />;
  }

  if (!me?._id || error) return <div>error</div>;

  if (data?.adsForUser?.ads?.length === 0) {
    return <div>Non hai ancora creato annunci</div>;
  }
  if (data?.adsForUser?.ads?.length) {
    const handleFetchMore = async () => {
      setIsLoadFetchMore(true);
      if (fetchMore && data?.adsForUser?.ads?.length) {
        try {
          await fetchMore({
            variables: {
              offset: data?.adsForUser?.ads?.length,
              orderBy: order,
              isActive: hideNotActive,
            },
          });
          setIsLoadFetchMore(false);
          data.adsForUser?.pageCount !== pageCount &&
            setPageCount(data.adsForUser?.pageCount as number);
        } catch (e) {
          setIsLoadFetchMore(false);
          console.error(e);
        }
      }
    };
    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <BackButton />
        <br />
        <Typography color='primary' component='h3' variant='h5'>
          Gli annunci che hai creato
        </Typography>
        <br />
        <Order setOrder={setOrder} order={order} />
        <Divider />
        <FormControlLabel
          control={
            <PurpleCheckbox
              checked={hideNotActive}
              onChange={handleShowAll}
              name='showAll'
            />
          }
          label='Nascondi gli annunci inattivi'
        />
        {isLoadOrder ? (
          <Loading />
        ) : (
          <InfiniteScroll
            fetchMore={handleFetchMore}
            isVisible={data?.adsForUser?.ads?.length < pageCount}
            isLoading={isLoadFetchMore}
          >
            {' '}
            {data?.adsForUser?.ads
              ?.filter((ad) => {
                if (hideNotActive) {
                  return ad?.isActive === hideNotActive;
                } else {
                  return ad;
                }
              })
              .map((ad) => (
                <CardWine key={ad && ad._id} ad={ad as AdsWineResult} />
              ))}
          </InfiniteScroll>
        )}
      </Container>
    );
  }
  return <div>gravissimo errore</div>;
};

export default MyAds;
