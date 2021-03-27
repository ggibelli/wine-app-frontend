/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import * as React from 'react';
import { RouteComponentProps, useLocation } from '@reach/router';
import { WineFormQuery } from '../components/WineForms/Search/WineFormQuery';
import {
  AdInput,
  TypeAd,
  TypeProduct,
  useCreateAdWineMutation,
  useWineSearchedLazyQuery,
  AddressInput,
  MeQuery,
} from '../generated/graphql';
import { searchedWine, notification } from '../cache';
import { navigate } from '@reach/router';
import { WineFormMutation } from '../components/WineForms/Post/WineFormMutation';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { updateCacheAd } from '../utils/updateCache';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export const Buy: React.FC<
  RouteComponentProps & { meData: MeQuery | undefined }
> = ({ meData }) => {
  const classes = useStyles();
  const location = useLocation();
  const adType = location.pathname === '/buy' ? TypeAd.Buy : TypeAd.Sell;
  let sameAddress: AddressInput;
  let differentAddress: AddressInput;
  const [lazyWines, { data }] = useWineSearchedLazyQuery();
  React.useEffect(() => {
    lazyWines();
  }, []);
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
      updateCacheAd(cache, response);
    },
  });

  const onSubmitQuery = (values: WineFormQuery) => {
    searchedWine(undefined);
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
    void navigate('/');
  };
  const buyOrSellText = adType === TypeAd.Buy ? 'comprare' : 'vendere';
  const buyerSellerText = adType === TypeAd.Buy ? 'acquirente' : 'venditore';

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h4' color='primary'>
          Che cosa vuoi {buyOrSellText}?
        </Typography>
        <Typography component='p' color='primary'>
          Inserisci i dati del prodotto che desideri {buyOrSellText}, noi
          cercheremo per te il giusto {buyerSellerText}.
        </Typography>
        {data?.searchedWine?.isPost ? (
          <WineFormMutation onSubmit={onSubmitMutation} adType={adType} />
        ) : (
          <WineFormQuery onSubmit={onSubmitQuery} adType={adType} />
        )}
      </div>
    </Container>
  );
};
