import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { navigate, RouteComponentProps } from '@reach/router';
import {
  QueryOrderBy,
  TypeAd,
  useAdsWineLazyQuery,
} from '../generated/graphql';
import { notification, searchedWine } from '../cache';
import { Ad, CardWine } from '../components/CardWine';
import { BackButton } from '../components/BackButton';
import { Filter } from '../components/FilterList';
import { SnackbarAds } from '../components/Snackbar';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';
import { StyledBox } from '../components/StyledBox';
import { useMediaQuery } from '@material-ui/core';
import { Order } from '../components/FilterList/Order';
import { InfiniteScrollFetch } from '../components/InfiniteScrollFetch';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  })
);
export const Ads: React.FC<RouteComponentProps> = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const width = matches ? 400 : 250;
  const searchedWineCache = searchedWine();
  const [limit, setLimit] = React.useState<number>(2);
  const [isEndAds, setIsEndAds] = React.useState<boolean>(false);
  const [ads, setAds] = React.useState<Ad[]>([]);
  const [adsFiltered, setAdsFiltered] = React.useState<Ad[]>([]);
  const [open, setOpen] = React.useState(false);
  const [order, setOrder] = React.useState<QueryOrderBy>(
    QueryOrderBy.CreatedAtDesc
  );
  const [lazyAdsWine, result] = useAdsWineLazyQuery({
    onError: (error) => notification({ type: 'error', message: error.message }),
    notifyOnNetworkStatusChange: true,
    onCompleted: (response) => {
      if (response.ads?.ads) {
        setAds((response.ads.ads as unknown) as Ad[]);
      }
      if (
        response.ads?.pageCount &&
        response.ads?.ads?.length === response.ads.pageCount
      ) {
        if (!open) setOpen(true);

        setIsEndAds(true);
      }
    },
  });

  React.useEffect(() => {
    if (searchedWineCache) {
      void lazyAdsWine({
        variables: {
          offset: 0,
          limit,
          orderBy: order,
          wineName: searchedWineCache?.wineName,
          typeProduct: searchedWineCache?.typeProduct,
          typeAd:
            searchedWineCache?.typeAd === TypeAd.Buy ? TypeAd.Sell : TypeAd.Buy,
        },
      });
    } else {
      void navigate('/');
    }
  }, [limit, order]);

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
  console.log(adsFiltered);
  if (result.data?.ads && result.data?.ads?.ads?.length === 0) {
    return <NoResults />;
  }

  if (ads.length && result.data?.ads?.ads?.length !== 0) {
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
          {adsFiltered.length > 0 ? defaultText : noAdsText}
        </Typography>
        <Filter setList={setAds} list={ads} setFilteredList={setAdsFiltered} />
        <Order
          setList={setAds}
          setOrder={setOrder}
          queryResult={result}
          order={order}
        />
        <br />
        <div className={classes.root}>
          {adsFiltered.map((ad) => (
            <CardWine key={ad._id} ad={ad} />
          ))}
          {isEndAds && !result.loading ? null : (
            <InfiniteScrollFetch
              queryResult={result}
              list={ads}
              limit={limit}
              setLimit={setLimit}
            />
          )}
          {result.loading ? <CircularProgress /> : null}
        </div>
        <SnackbarAds open={open} setOpen={setOpen} onClick={onClick} />
      </Container>
    );
  }
  return <Skeleton />;
};
