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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';
import { PurpleCheckbox } from '../components/FilterAds';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { useStyles } from '../utils/styleHook';

const MyAds: React.FC<RouteComponentProps> = () => {
  const me = myInfo();
  const [active, setActive] = React.useState<true | undefined>(undefined);
  const [ads, setAds] = React.useState<
    DeepExtractType<AdsWineQuery, ['ads']>['ads']
  >([]);
  const [adsFiltered, setAdsFiltered] = React.useState<
    DeepExtractType<AdsWineQuery, ['ads']>['ads']
  >([]);
  const [order, setOrder] = React.useState<QueryOrderBy>(
    QueryOrderBy.CreatedAtDesc
  );
  const classes = useStyles();
  const [hideNotActive, setHideNotActive] = React.useState<boolean>(false);
  const [query, result] = useAdsForUserLazyQuery({
    variables: {
      offset: 0,
      limit: 4,
      orderBy: QueryOrderBy.CreatedAtDesc,
      user: me?._id as string,
      isActive: active,
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
  React.useEffect(() => {
    setAdsFiltered(ads);
    if (hideNotActive && ads?.length) {
      setAdsFiltered(ads?.filter((a) => a?.isActive));
    }
  }, [hideNotActive, ads]);
  const handleChange = () => {
    setHideNotActive(!hideNotActive);
    if (hideNotActive) {
      setActive(undefined);
      setAdsFiltered(ads);
    } else {
      setActive(true);
    }
  };

  if (result.loading) {
    return (
      <>
        <Backdrop
          data-testid='loading'
          className={classes.backdrop}
          open={result.loading}
        >
          <CircularProgress color='inherit' />
        </Backdrop>
      </>
    );
  }

  if (ads?.length === 0) {
    return <div>Non hai ancora creato annunci</div>;
  }

  if (ads?.length) {
    const handleFetchMore = async () => {
      if (result.fetchMore) {
        try {
          await result.fetchMore({
            variables: {
              offset: adsFiltered?.length,
              orderBy: order,
              isActive: active,
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
        <Divider />
        <FormControlLabel
          control={
            <PurpleCheckbox
              checked={hideNotActive}
              onChange={handleChange}
              name='showAll'
            />
          }
          label='Nascondi gli annunci inattivi'
        />
        <InfiniteScroll
          fetchMore={handleFetchMore}
          isVisible={adsFiltered?.length !== result.data?.adsForUser?.pageCount}
          isLoading={result.loading}
        >
          {' '}
          {adsFiltered &&
            adsFiltered.map((ad) => (
              <CardWine key={ad && ad._id} ad={ad as AdsWineResult} />
            ))}
        </InfiniteScroll>
      </Container>
    );
  }
  return <Skeleton />;
};

export default MyAds;
