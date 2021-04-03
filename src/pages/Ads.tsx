import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { navigate, RouteComponentProps } from '@reach/router';
import {
  AdsWineQuery,
  QueryOrderBy,
  TypeAd,
  TypeProduct,
  useAdsWineLazyQuery,
} from '../generated/graphql';
import { DeepExtractType } from 'ts-deep-extract-types';
import { notification, searchedWine } from '../cache';
import { CardWine } from '../components/CardWine';
import { BackButton } from '../components/BackButton';
import { Filter } from '../components/FilterAds';
import { SnackbarAds } from '../components/Snackbar';
import { useTheme } from '@material-ui/core/styles';
import { StyledBox } from '../components/StyledBox';
import { useMediaQuery } from '@material-ui/core';
import { Order } from '../components/FilterAds/Order';
import { InfiniteScroll } from '../components/InfiniteScrollFetch';
import { AdsWineResult } from '../types';

export const Ads: React.FC<RouteComponentProps> = () => {
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
  const [query, result] = useAdsWineLazyQuery({
    variables: {
      offset: 0,
      limit: 4,
      orderBy: order,
      wineName: searchedWineCache?.wineName,
      typeProduct: searchedWineCache?.typeProduct as TypeProduct,
      typeAd:
        searchedWineCache?.typeAd === TypeAd.Buy ? TypeAd.Sell : TypeAd.Buy,
    },
    onError: (error) => notification({ type: 'error', message: error.message }),
  });
  React.useEffect(() => {
    if (searchedWineCache?.wineName) {
      query();
    } else {
      void navigate('/');
    }
  }, [searchedWineCache]);
  React.useEffect(() => {
    if (result.data?.ads) {
      setAds(result.data.ads.ads);
    }
  }, [result.data]);

  React.useEffect(() => {
    if (result.fetchMore && ads && ads.length) {
      result
        .fetchMore({
          variables: { orderBy: order, limit: ads.length },
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
    <div onClick={onClick}>
      Non abbiamo trovato nulla, vuoi creare un annuncio?
    </div>
  );
  if (result.data?.ads && result.data?.ads?.pageCount === 0) {
    return <NoResults />;
  }
  const handleFetchMore = async () => {
    if (result.fetchMore) {
      try {
        await result.fetchMore({
          variables: { offset: result.data?.ads?.ads?.length, orderBy: order },
        });
      } catch (e) {
        console.log(e);
      }
    }
  };
  if (ads && ads.length && result.data?.ads?.ads?.length !== 0) {
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
        <Filter setList={setAds} list={ads} setFilteredList={setAdsFiltered} />
        <Order setOrder={setOrder} order={order} />
        <br />
        <InfiniteScroll
          fetchMore={handleFetchMore}
          isVisible={ads.length !== result.data?.ads?.pageCount}
          isLoading={result.loading}
        >
          {' '}
          {adsFiltered &&
            adsFiltered.map((ad) => (
              <CardWine key={ad && ad._id} ad={ad as AdsWineResult} />
            ))}
        </InfiniteScroll>
        <SnackbarAds onClick={onClick} />
      </Container>
    );
  }
  return <Skeleton />;
};
