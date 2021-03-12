import * as React from 'react';
import { useApolloClient } from '@apollo/client';
import { RouteComponentProps, useLocation } from '@reach/router';
import { WineFormQuery } from '../components/WineForms/Search/WineFormQuery';
import {
  AdInput,
  TypeAd,
  TypeProduct,
  useMeQuery,
  useCreateAdWineMutation,
  useWineSearchedLazyQuery,
  AddressInput,
  AdsWineDocument,
} from '../generated/graphql';
import { searchedWine, notification } from '../cache';
import { navigate } from '@reach/router';
import { WineFormMutation } from '../components/WineForms/Post/WineFormMutation';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

interface IAd {
  _id: string;
  postedBy: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  harvest: number;
  abv: number;
  priceFrom: number;
  priceTo: number;
  wineName: string;
  litersFrom: number;
  litersTo: number;
  address: {
    regione: string;
    provincia: string;
  };
  activeNegotiations: number;
  datePosted: Date;
}

interface IAds {
  ads: Array<IAd>;
}

export const Buy: React.FC<RouteComponentProps> = () => {
  const classes = useStyles();
  const searchedWineCache = searchedWine();
  const variablesCacheUpdate = {
    wineName: searchedWineCache?.wineName,
    typeProduct: searchedWineCache?.typeProduct,
    typeAd: searchedWineCache?.typeAd, // === TypeAd.Buy ? TypeAd.Sell : TypeAd.Buy,
  };
  const location = useLocation();
  const adType = location.pathname === '/buy' ? TypeAd.Buy : TypeAd.Sell;
  let sameAddress: AddressInput;
  let differentAddress: AddressInput;
  const [lazyWines, { data, error }] = useWineSearchedLazyQuery();
  React.useEffect(() => {
    lazyWines();
  }, [lazyWines]);
  const meResult = useMeQuery({
    onError: (error) => {
      console.log(error);
      notification({
        type: 'error',
        message: `${error.message}`,
      });
    },
  });
  const [createAdWineMutation] = useCreateAdWineMutation({
    onError: (error) =>
      notification({
        type: 'error',
        message: `${error.message}`,
      }),
    onCompleted: ({ createAd }) => {
      if (createAd?.errors?.length === 0) {
        notification({
          type: 'success',
          message: 'ad created',
        });
        void navigate('/');
      }
      if (createAd?.errors?.length) {
        const errorMessages = createAd.errors.map((error) => error?.text);
        notification({
          type: 'error',
          message: `${errorMessages.toString()}`,
        });
      }
    },
    update: (cache, response) => {
      console.log(variablesCacheUpdate);
      const cachedData = cache.readQuery({
        query: AdsWineDocument,
        variables: variablesCacheUpdate,
      }) as IAds;
      console.log(cachedData, response);
      cache.writeQuery({
        query: AdsWineDocument,
        variables: variablesCacheUpdate,
        data: {
          ...cachedData,
          ads: [...cachedData.ads, response.data?.createAd?.response],
        },
      });
    },
  });

  const client = useApolloClient();

  const onSubmitQuery = (values: WineFormQuery) => {
    searchedWine(undefined);
    client.cache.gc();
    searchedWine({
      wineName: values.wineName,
      typeAd: adType,
      typeProduct: TypeProduct.AdWine,
      liters: values.liters as number,
      harvest: values.harvest as number,
      abv: values.abv as number,
      price: values.price as number,
      isPost: false,
    });
    void navigate('/annunci');
  };
  const onSubmitMutation = (values: WineFormMutation) => {
    if (values.isSameAddress && meResult.data?.me?.address) {
      sameAddress = {
        regione: meResult.data.me.address.regione,
        provincia: meResult.data.me.address.provincia,
        comune: meResult.data.me.address.comune,
        via: meResult.data.me.address.via,
        CAP: meResult.data.me.address.CAP,
      };
    } else {
      differentAddress = values.address as AddressInput;
    }
    const adInput: AdInput = {
      wineName: values.wineName,
      typeAd: data?.searchedWine?.typeAd as TypeAd,
      typeProduct: data?.searchedWine?.typeProduct as TypeProduct,
      content: values.content,
      harvest: values.harvest as number,
      abv: values.abv as number,
      priceFrom: values.price as number,
      priceTo: values.price as number,
      litersFrom: values.liters as number,
      litersTo: values.liters as number,
      needsFollowUp: values.needsFollowUp,
      address: values.isSameAddress ? sameAddress : differentAddress,
    };

    void createAdWineMutation({
      variables: {
        input: adInput,
      },
    });
    searchedWine(undefined);
    client.cache.gc();
    void navigate('/');
  };

  const SellOrBuyTextQuery = () => {
    if (adType === TypeAd.Buy) {
      return (
        <>
          <Typography component='h1' variant='h4' color='primary'>
            Che cosa vuoi comprare?
          </Typography>
          <Typography component='p' color='primary'>
            Inserisci i dati del prodotto che desideri comprare, noi cercheremo
            per te il giusto venditore.
          </Typography>
        </>
      );
    } else {
      return (
        <>
          <Typography component='h1' variant='h4' color='primary'>
            Che cosa vuoi vendere?
          </Typography>
          <Typography component='p' color='primary'>
            Inserisci i dati del prodotto che desideri vendere, noi cercheremo
            per te il giusto acquirente.
          </Typography>
        </>
      );
    }
  };

  if (error || data?.searchedWine?.isPost) {
    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <SellOrBuyTextQuery />
          <WineFormMutation onSubmit={onSubmitMutation} adType={adType} />
        </div>
      </Container>
    );
  } else {
    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <SellOrBuyTextQuery />
          <WineFormQuery onSubmit={onSubmitQuery} adType={adType} />
        </div>
      </Container>
    );
  }
};
