import * as React from 'react';
import Typography from '@material-ui/core/Typography';
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
import { InfiniteScroll } from '../containers/InfiniteScrollFetch';
import { myInfo } from '../cache';
import { DeepExtractType } from 'ts-deep-extract-types';
import { CardWine } from '../components/Cards/CardWine';
import { AdsWineResult } from '../types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';
import { PurpleCheckbox } from '../components/FilterAds';
import { Loading } from '../components/Loading';

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
  const [hideNotActive, setHideNotActive] = React.useState<boolean>(false);
  const [query, { data, loading, error, fetchMore }] = useAdsForUserLazyQuery({
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
    if (data?.adsForUser) {
      setAds(data.adsForUser.ads);
    }
  }, [data]);
  React.useEffect(() => {
    if (ads && ads.length && fetchMore) {
      fetchMore({
        variables: { orderBy: order, limit: ads.length },
      }).catch((e) => console.log(e));
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

  if (loading) {
    return <Loading />;
  }

  if (!me?._id || error) return <div>error</div>;

  if (ads?.length === 0) {
    return <div>Non hai ancora creato annunci</div>;
  }

  if (adsFiltered?.length) {
    const handleFetchMore = async () => {
      if (fetchMore) {
        try {
          await fetchMore({
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
        <Order isAds setOrder={setOrder} order={order} />
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
          isVisible={adsFiltered.length !== data?.adsForUser?.pageCount}
          isLoading={loading}
        >
          {' '}
          {adsFiltered.map((ad) => (
            <CardWine key={ad && ad._id} ad={ad as AdsWineResult} />
          ))}
        </InfiniteScroll>
      </Container>
    );
  }
  return <div>gravissimo errore</div>;
};

export default MyAds;
