import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles, Theme } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import FilterListIcon from '@material-ui/icons/FilterList';
import { navigate, RouteComponentProps } from '@reach/router';
import { TypeAd, useAdsWineLazyQuery } from '../generated/graphql';
import { searchedWine } from '../cache';
import Button from '@material-ui/core/Button';
import { Link } from '@reach/router';
import Collapse from '@material-ui/core/Collapse';
import { Ad, CardWine } from '../components/CardWine';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

interface IFilters {
  [key: string]: (value: any) => boolean;
}

interface IArray {
  [key: string]: any;
}

// function taken from https://gist.github.com/jherax/f11d669ba286f21b7a2dcff69621eb72
function multiFilter(array: Array<IArray>, filters: IFilters): Array<IArray> {
  const filterKeys = Object.keys(filters);
  return array.filter((item) => {
    // validates all filter criteria
    return filterKeys.every((key) => {
      // ignores non-function predicates
      if (typeof filters[key] !== 'function') return true;
      return filters[key](item[key]);
    });
  });
}

export const Results: React.FC<RouteComponentProps> = () => {
  const searchedWineCache = searchedWine();
  const [showFilter, setShowFilter] = React.useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filterAds, setFilterAds] = React.useState<IFilters>({
    priceTo: (priceTo: number) =>
      priceTo <= (searchedWineCache?.price as number),
    abv: (abv: number) => abv === (searchedWineCache?.abv as number),
    harvest: (harvest: number) =>
      harvest === (searchedWineCache?.harvest as number),
    litersTo: (litersTo: number) =>
      litersTo >= (searchedWineCache?.liters as number),
  });
  const [queryDone, setQueryDone] = React.useState<boolean>(false);
  const [lazyAdsWine, result] = useAdsWineLazyQuery({
    onError: (error) => console.log(error),
    onCompleted: () => {
      console.log(result.data?.ads);
      setQueryDone(true);
    },
  });
  const allAds = queryDone ? result.data?.ads : null;

  const [ads, setAds] = React.useState<Ad[]>([]);
  //const [showAll, setShowAll] = React.useState<boolean>(false);

  const handleShowAll = () => {
    setFilterAds({
      priceTo: () => true,
      harvest: () => true,
      abv: () => true,
      litersTo: () => true,
    });
  };

  const handleFilterPrice = () =>
    setFilterAds({
      ...filterAds,
      priceTo: (price) => (searchedWineCache?.price as number) >= price,
    });
  const handleFilterHarvest = () =>
    setFilterAds({
      ...filterAds,
      harvest: (harvest) => (searchedWineCache?.harvest as number) === harvest,
    });
  const handleFilterAbv = () =>
    setFilterAds({
      ...filterAds,
      abv: (abv) => (searchedWineCache?.abv as number) === abv,
    });
  const handleFilterLiters = () =>
    setFilterAds({
      ...filterAds,
      litersTo: (liters) => (searchedWineCache?.liters as number) <= liters,
    });

  React.useEffect(() => {
    if (allAds && queryDone) {
      const ads = multiFilter(allAds as Ad[], filterAds) as Ad[];
      setAds(ads);
    }
  }, [filterAds, queryDone]);

  React.useEffect(() => {
    if (searchedWineCache) {
      lazyAdsWine({
        variables: {
          wineName: searchedWineCache?.wineName,
          typeProduct: searchedWineCache?.typeProduct,
          typeAd:
            searchedWineCache?.typeAd === TypeAd.Buy ? TypeAd.Sell : TypeAd.Buy,
        },
      });
    } else {
      void navigate('/');
    }
  }, []);
  const classes = useStyles();

  const onClick = async () => {
    if (searchedWineCache === undefined) {
      return;
    } else {
      searchedWine({
        ...searchedWineCache,
        isPost: true,
      });
      await navigate('/buy');
    }
  };

  const NoResults = () => (
    <div onClick={onClick}>
      Non abbiamo trovato nulla, vuoi creare un annuncio?
    </div>
  );
  if (queryDone && allAds?.length === 0) {
    return <NoResults />;
  }
  if (queryDone && ads && allAds?.length !== 0) {
    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Button
          component={Link}
          to='/buy'
          //variant='contained'
          color='primary'
          size='large'
          startIcon={<ArrowBackIosIcon />}
        >
          Compra
        </Button>
        <div className={classes.paper}>
          <Typography color='primary' component='h3' variant='h5'>
            La tua ricerca
          </Typography>
          <Box
            boxShadow={3}
            p={2}
            m={2}
            mt={2}
            px={2}
            pt={2}
            color='white'
            borderColor='primary.main'
            bgcolor='primary.main'
            borderRadius={16}
          >
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
          </Box>
          <br />
          <Typography color='primary' component='h3' variant='h5'>
            I nostri risultati
          </Typography>
          <Typography variant='body2'>
            {`Questi sono gli annunci che abbiamo trovato per te: sono stati
            pubblicati da utenti interessati all'acquisto.`}
          </Typography>

          <Button
            onClick={() => setShowFilter(!showFilter)}
            aria-label='filter'
            //variant='contained'
            color='primary'
            size='large'
            startIcon={<FilterListIcon />}
          >
            Filtri
          </Button>
          <Collapse in={showFilter}>
            <span onClick={handleFilterPrice}>Prezzo</span>{' '}
            <span onClick={handleFilterAbv}>Gradazione </span>
            <span onClick={handleFilterHarvest}>Vendemmia </span>
            <span onClick={handleFilterLiters}>Litri</span>
            <div onClick={handleShowAll}>mostra tutto</div>
          </Collapse>
          <br />
          {ads.map((ad) => (
            <CardWine key={ad._id} ad={ad} />
          ))}
        </div>
      </Container>
    );
  }
  return (
    <div>
      <Skeleton />
    </div>
  );
};
