import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { RouteComponentProps } from '@reach/router';
import {
  QueryOrderBy,
  useAdsForUserQuery,
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
  const [ads, setAds] = React.useState<
    DeepExtractType<AdsWineQuery, ['ads']>['ads']
  >([]);
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
    onError: (error) => console.log(error),
    onCompleted: ({ adsForUser }) => {
      setPageCount(adsForUser?.pageCount as number);
      setAds(adsForUser?.ads);
    },
  });
  const [hideNotActive, setHideNotActive] = React.useState<boolean>(false);
  const [isLoadFetchMore, setIsLoadFetchMore] = React.useState<boolean>(false);
  const [isLoadOrder, setIsLoadOrder] = React.useState<boolean>(false);
  const handleShowAll = () => {
    setHideNotActive(!hideNotActive);
    if (!hideNotActive) setAds(ads?.filter((a) => a?.isActive));
    else setAds(data?.adsForUser?.ads);
  };

  React.useEffect(() => {
    if (ads?.length && fetchMore) {
      setIsLoadOrder(true);
      fetchMore({
        variables: {
          orderBy: order,
          limit: ads.length,
          isActive: hideNotActive,
        },
      })
        .then(({ data }) => {
          setIsLoadOrder(false);
          setAds(data.adsForUser?.ads);
          data.adsForUser?.pageCount !== pageCount &&
            setPageCount(data.adsForUser?.pageCount as number);
        })
        .catch((e) => {
          setIsLoadOrder(false);

          console.log(e);
        });
    }
  }, [order]);

  if (loading) {
    return <Loading />;
  }

  if (!me?._id || error) return <div>error</div>;

  if (ads?.length === 0) {
    return <div>Non hai ancora creato annunci</div>;
  }
  if (ads?.length) {
    const handleFetchMore = async () => {
      setIsLoadFetchMore(true);
      if (fetchMore) {
        try {
          const { data } = await fetchMore({
            variables: {
              offset: ads?.length,
              orderBy: order,
              isActive: hideNotActive,
            },
          });
          setIsLoadFetchMore(false);
          setAds([...ads, ...(data.adsForUser?.ads as [])]);
          data.adsForUser?.pageCount !== pageCount &&
            setPageCount(data.adsForUser?.pageCount as number);
        } catch (e) {
          setIsLoadFetchMore(false);

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
            isVisible={ads.length < pageCount}
            isLoading={isLoadFetchMore}
          >
            {' '}
            {ads.map((ad) => (
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
