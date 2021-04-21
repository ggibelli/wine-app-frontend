import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { navigate, RouteComponentProps } from '@reach/router';
import {
  AdsWineQuery,
  QueryOrderBy,
  TypeAd,
  TypeProduct,
  useAdsWineQuery,
} from '../generated/graphql';
import { DeepExtractType } from 'ts-deep-extract-types';
import { notification, searchedWine } from '../cache';
import { CardWine } from '../components/Cards/CardWine';
import { BackButton } from '../components/BackButton';
import { Filter } from '../components/FilterAds';
import { SnackbarAds } from '../components/Snackbar';
import { useTheme } from '@material-ui/core/styles';
import { StyledBox } from '../containers/StyledBox';
import { useMediaQuery } from '@material-ui/core';
import { Order } from '../components/FilterAds/Order';
import { InfiniteScroll } from '../containers/InfiniteScrollFetch';
import { AdsWineResult } from '../types';
import { Loading } from '../components/Loading';

const Ads: React.FC<RouteComponentProps> = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const width = matches ? 400 : 250;
  const searchedWineCache = searchedWine();
  const [ads, setAds] = React.useState<
    DeepExtractType<AdsWineQuery, ['ads']>['ads']
  >([]);
  const [adsFiltered, setAdsFiltered] = React.useState<
    DeepExtractType<AdsWineQuery, ['ads']>['ads']
  >([]);
  const [order, setOrder] = React.useState<QueryOrderBy>(
    QueryOrderBy.CreatedAtDesc
  );
  const [isLoadFetchMore, setIsLoadFetchMore] = React.useState<boolean>(false);
  const [isLoadOrder, setIsLoadOrder] = React.useState<boolean>(false);

  const { data, loading, fetchMore } = useAdsWineQuery({
    variables: {
      offset: 0,
      limit: 4,
      orderBy: order,
      wineName: searchedWineCache?.wineName,
      typeProduct: searchedWineCache?.typeProduct as TypeProduct,
      typeAd:
        searchedWineCache?.typeAd === TypeAd.Buy ? TypeAd.Sell : TypeAd.Buy,
    },
    onCompleted: ({ ads }) => setAds(ads?.ads),
    onError: (error) => notification({ type: 'error', message: error.message }),
  });

  React.useEffect(() => {
    if (!searchedWineCache?.wineName) void navigate('/');

    if (fetchMore && ads?.length) {
      setIsLoadOrder(true);
      fetchMore({
        variables: { orderBy: order, limit: ads.length },
      })
        .then(({ data }) => {
          setIsLoadOrder(false);
          setAds(data.ads?.ads);
        })
        .catch((e) => console.log(e));
    }
  }, [order]);

  const onClick = async () => {
    if (searchedWineCache === undefined) {
      return;
    } else {
      searchedWine({
        ...searchedWineCache,
        isPost: true,
      });
      const url = searchedWineCache.typeAd === TypeAd.Buy ? '/buy' : '/sell';
      await navigate(url);
    }
  };

  const defaultText =
    "Questi sono gli annunci che abbiamo trovato per te: sono stati pubblicati da utenti interessati all'acquisto.";
  const noAdsText =
    'Non abbiamo trovato nulla che corrisponde ai criteri di ricerca, ma esistono annunci per questo vino, clicca su filtri e mostra tutto per vederli';

  const NoResults = () => (
    <div data-testid='no-result' onClick={onClick}>
      Non abbiamo trovato nulla, vuoi creare un annuncio?
    </div>
  );
  if (data?.ads && data?.ads?.pageCount === 0) {
    return <NoResults />;
  }
  const handleFetchMore = async () => {
    setIsLoadFetchMore(true);
    if (ads?.length && fetchMore) {
      try {
        const { data } = await fetchMore({
          variables: { offset: ads.length, orderBy: order },
        });
        setIsLoadFetchMore(false);
        setAds([...ads, ...(data.ads?.ads as [])]);
      } catch (e) {
        console.log(e);
      }
    }
  };
  if (loading) {
    return <Loading />;
  }
  if (ads?.length) {
    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <BackButton />
        <Typography color='primary' component='h3' variant='h5'>
          La tua ricerca
        </Typography>
        <StyledBox typeAd={searchedWineCache?.typeAd as TypeAd} width={width}>
          <Typography component='h5' variant='h6'>
            {searchedWineCache?.typeAd === TypeAd.Buy ? `Compro ` : `Vendo`}{' '}
            {searchedWineCache?.wineName}
          </Typography>
          <Typography align='left' variant='body1'>
            {`Annata: ${searchedWineCache?.harvest as number}`}
            <br />
            {`Gradazione: ${searchedWineCache?.abv as number} % Vol`}
            <br />
            {`Quantità: ${searchedWineCache?.liters as number} l`}
            <br />
            {`Prezzo: ${searchedWineCache?.price as number} euro al litro`}
          </Typography>
        </StyledBox>
        <br />
        <Typography color='primary' component='h3' variant='h5'>
          I nostri risultati
        </Typography>
        <Typography variant='body2'>
          {adsFiltered && adsFiltered.length > 0 ? defaultText : noAdsText}
        </Typography>
        <Filter list={ads} setFilteredList={setAdsFiltered}>
          {' '}
          <Order isAds setOrder={setOrder} order={order} />
        </Filter>
        <br />
        {isLoadOrder ? (
          <Loading />
        ) : (
          <InfiniteScroll
            fetchMore={handleFetchMore}
            isVisible={ads.length !== data?.ads?.pageCount}
            isLoading={isLoadFetchMore}
          >
            {' '}
            {adsFiltered &&
              adsFiltered.map((ad) => (
                <CardWine key={ad && ad._id} ad={ad as AdsWineResult} />
              ))}
          </InfiniteScroll>
        )}

        <SnackbarAds onClick={onClick} />
      </Container>
    );
  }
  return <div>Grave errore</div>;
};

export default Ads;
