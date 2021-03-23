/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import * as React from 'react';
import { useApolloClient } from '@apollo/client';
import { RouteComponentProps, useLocation } from '@reach/router';
import { WineFormQuery } from '../components/WineForms/Search/WineFormQuery';
import {
  AdInput,
  TypeAd,
  TypeProduct,
  // useMeQuery,
  // useMeLazyQuery,
  useCreateAdWineMutation,
  useWineSearchedLazyQuery,
  AddressInput,
  AdsWineDocument,
  MeDocument,
  User,
  AdWine,
  MeQuery,
} from '../generated/graphql';
import { searchedWine, notification } from '../cache';
import { navigate } from '@reach/router';
import { WineFormMutation } from '../components/WineForms/Post/WineFormMutation';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import _ from 'lodash';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

interface IAds {
  ads: Array<AdWine>;
  pageCount: number;
}

interface ICachedDataAds {
  ads: IAds;
}

export interface ICachedMe {
  me: User;
}

export const Buy: React.FC<
  RouteComponentProps & { meData: MeQuery | undefined }
> = ({ meData }) => {
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
  // const [lazyQueryMe, result] = useMeLazyQuery({
  //   onError: (error) => {
  //     console.log(error);
  //     notification({
  //       type: 'error',
  //       message: `${error.message}`,
  //     });
  //   },
  // });
  // React.useEffect(() => {
  //   lazyQueryMe();
  // }, []);
  // const meResult = useMeQuery({
  //   onError: (error) => {
  //     console.log(error);
  //     notification({
  //       type: 'error',
  //       message: `${error.message}`,
  //     });
  //   },
  // });
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
      const cachedDataAdsLocal: ICachedDataAds | null = _.cloneDeep(
        cache.readQuery({
          query: AdsWineDocument,
          variables: variablesCacheUpdate,
        })
      );
      const cachedDataMeLocal: ICachedMe | null = _.cloneDeep(
        cache.readQuery({
          query: MeDocument,
        })
      );

      cachedDataMeLocal?.me.ads?.ads?.push(
        response.data?.createAd?.response as AdWine
      );
      if (cachedDataMeLocal?.me?.ads) {
        cachedDataMeLocal.me.ads.pageCount =
          (cachedDataMeLocal?.me.ads?.pageCount as number) + 1;
      }

      cache.writeQuery({
        query: MeDocument,
        data: cachedDataMeLocal,
      });

      if (!cachedDataAdsLocal) return;
      cachedDataAdsLocal.ads.ads.push(
        response.data?.createAd?.response as AdWine
      );
      cachedDataAdsLocal.ads.pageCount += 1;
      cache.writeQuery({
        query: AdsWineDocument,
        variables: variablesCacheUpdate,
        data: cachedDataAdsLocal,
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
    if (values.isSameAddress && meData?.me?.address) {
      sameAddress = {
        regione: meData.me.address.regione,
        provincia: meData.me.address.provincia,
        comune: meData.me.address.comune,
        via: meData.me.address.via,
        CAP: meData.me.address.CAP,
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
