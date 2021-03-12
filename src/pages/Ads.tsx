import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import FilterListIcon from '@material-ui/icons/FilterList';
import { navigate, RouteComponentProps } from '@reach/router';
import {
  QueryOrderBy,
  TypeAd,
  useAdsWineLazyQuery,
} from '../generated/graphql';
import { searchedWine } from '../cache';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import { Ad, CardWine } from '../components/CardWine';
import { multiFilter, IFilters } from '../utils/multiFilter';
import { BackButton } from '../components/BackButton';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
export const Ads: React.FC<RouteComponentProps> = () => {
  const [limit, setLimit] = React.useState<number>(2);
  const [isEndAds, setIsEndAds] = React.useState<boolean>(false);
  const searchedWineCache = searchedWine();

  const [showFilter, setShowFilter] = React.useState<boolean>(false);
  const [filterAds, setFilterAds] = React.useState<IFilters>({
    priceTo: (priceTo: number) =>
      priceTo <= (searchedWineCache?.price as number),
    abv: (abv: number) =>
      abv >= (searchedWineCache?.abv as number) - 0.5 ||
      abv <= (searchedWineCache?.abv as number) + 0.5,
    harvest: (harvest: number) =>
      harvest === (searchedWineCache?.harvest as number) ||
      harvest - 1 === (searchedWineCache?.harvest as number),
    litersTo: (litersTo: number) =>
      litersTo >= (searchedWineCache?.liters as number),
  });
  const [lazyAdsWine, result] = useAdsWineLazyQuery({
    onError: (error) => console.log(error),
    notifyOnNetworkStatusChange: true,
    onCompleted: (response) => {
      if (response.ads?.ads) {
        setAds(response.ads.ads as Ad[]);
      }
      if (
        response.ads?.pageCount &&
        response.ads?.ads?.length === response.ads.pageCount
      ) {
        setIsEndAds(true);
      }
    },
  });
  const [ads, setAds] = React.useState<Ad[]>([]);
  const [adsFiltered, setAdsFiltered] = React.useState<Ad[]>([]);
  const [order, setOrder] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setOrder(event.target.value as string);
  };

  React.useEffect(() => {
    if (result.fetchMore) {
      if (order === 'recent') {
        void result.fetchMore({
          variables: {
            skip: 0,
            orderBy: QueryOrderBy.CreatedAtAsc,
          },
        });
      } else if (order === 'old') {
        void result.fetchMore({
          variables: {
            skip: 0,
            orderBy: QueryOrderBy.CreatedAtDesc,
          },
        });
      }
    }
  }, [order]);
  const handleShowAll = () => {
    setFilterAds({
      priceTo: () => true,
      harvest: () => true,
      abv: () => true,
      litersTo: () => true,
    });
  };
  const bottomBoundaryRef = React.useRef<null | HTMLDivElement>(null);
  const observer = new IntersectionObserver(handleIntersection);

  function handleIntersection(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0 && result.fetchMore) {
        result
          .fetchMore({
            variables: { limit: 2, skip: ads.length },
          })

          .then((fetchMoreResult) => {
            if (fetchMoreResult.data.ads?.ads?.length) {
              setLimit(fetchMoreResult.data.ads?.ads?.length + limit);
            }
          })
          .catch((e) => console.log(e));
        observer.unobserve(entry.target);
      }
    });
  }

  React.useEffect(() => {
    if (bottomBoundaryRef.current) {
      observer.observe(bottomBoundaryRef.current);
    }
  }, [ads, bottomBoundaryRef.current]);

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
    if (ads.length > 0) {
      const filtredAds = multiFilter(ads, filterAds) as Ad[];
      setAdsFiltered(filtredAds);
    }
  }, [filterAds, ads]);

  React.useEffect(() => {
    if (searchedWineCache) {
      void lazyAdsWine({
        variables: {
          skip: 0,
          limit,
          wineName: searchedWineCache?.wineName,
          typeProduct: searchedWineCache?.typeProduct,
          typeAd:
            searchedWineCache?.typeAd === TypeAd.Buy ? TypeAd.Sell : TypeAd.Buy,
        },
      });
    } else {
      void navigate('/');
    }
  }, [limit]);

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

  const NoResults = () => (
    <div onClick={onClick}>
      Non abbiamo trovato nulla, vuoi creare un annuncio?
    </div>
  );
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
        <Box
          boxShadow={3}
          p={2}
          m={2}
          mt={2}
          px={2}
          pt={2}
          width='75%'
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
          <FormControl fullWidth>
            <InputLabel style={{ color: 'black' }} htmlFor='order'>
              Ordine risultati
            </InputLabel>
            <Select
              native
              value={order}
              onChange={handleChange}
              inputProps={{
                name: 'order',
                id: 'order',
              }}
            >
              <option aria-label='None' value='' />
              <option value={'recent'}>Dal piu recente</option>
              <option value={'old'}>Dal meno recente</option>
              <option value={'expensive'}>Dal piu caro</option>
              <option value={'cheap'}>Dal meno caro</option>
            </Select>
          </FormControl>
          <span onClick={handleFilterPrice}>Prezzo</span>{' '}
          <span onClick={handleFilterAbv}>Gradazione </span>
          <span onClick={handleFilterHarvest}>Vendemmia </span>
          <span onClick={handleFilterLiters}>Litri</span>
          <div onClick={handleShowAll}>mostra tutto</div>
          {/* <div onClick={onClickSort}> ordina per data</div> */}
        </Collapse>
        <br />
        {adsFiltered.map((ad) => (
          <CardWine key={ad._id} ad={ad} />
        ))}
        {isEndAds ? null : (
          <div
            id='page-bottom-boundary'
            style={{ border: '1px solid red' }}
            ref={bottomBoundaryRef}
          ></div>
        )}
        {result.loading ? <CircularProgress /> : null}
      </Container>
    );
  }
  return <Skeleton />;
};
