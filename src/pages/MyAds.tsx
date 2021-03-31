import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { RouteComponentProps } from '@reach/router';
import {
  QueryOrderBy,
  useAdsForUserLazyQuery,
  AdsWineQuery,
} from '../generated/graphql';
import { BackButton } from '../components/BackButton';
import { Order } from '../components/FilterAds/Order';
import { InfiniteScroll } from '../components/InfiniteScrollFetch';
import { myInfo } from '../cache';
import { DeepExtractType } from 'ts-deep-extract-types';
import { CardWine } from '../components/CardWine';
import { AdsWineResult } from '../types';

export const MyAds: React.FC<RouteComponentProps> = () => {
  const me = myInfo();
  const [ads, setAds] = React.useState<
    DeepExtractType<AdsWineQuery, ['ads']>['ads']
  >([]);
  const [order, setOrder] = React.useState<QueryOrderBy>(
    QueryOrderBy.CreatedAtDesc
  );
  const [query, result] = useAdsForUserLazyQuery({
    variables: {
      offset: 0,
      limit: 4,
      orderBy: QueryOrderBy.CreatedAtDesc,
      user: me?._id as string,
    },
    onError: (error) => console.log(error),
  });
  React.useEffect(() => {
    if (me?._id) {
      query();
    }
  }, [me]);
  React.useEffect(() => {
    if (result.data?.adsForUser) {
      setAds(result.data.adsForUser.ads);
    }
  }, [result.data]);
  React.useEffect(() => {
    if (ads && ads.length && result.fetchMore) {
      result
        .fetchMore({
          variables: { orderBy: order, limit: ads.length },
        })
        .catch((e) => console.log(e));
    }
  }, [order]);
  if (ads?.length) {
    const handleFetchMore = async () => {
      if (result.fetchMore) {
        try {
          await result.fetchMore({
            variables: {
              offset: result.data?.adsForUser?.ads?.length,
              orderBy: order,
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
          Gli annunci che hai creato
        </Typography>
        <br />
        <Order setOrder={setOrder} order={order} />
        <InfiniteScroll
          fetchMore={handleFetchMore}
          isVisible={ads.length !== result.data?.adsForUser?.pageCount}
          isLoading={result.loading}
        >
          {' '}
          {ads &&
            ads.map((ad) => (
              <CardWine key={ad && ad._id} ad={ad as AdsWineResult} />
            ))}
        </InfiniteScroll>
      </Container>
    );
  }
  return <Skeleton />;
};
