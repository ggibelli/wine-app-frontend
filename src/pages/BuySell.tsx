import * as React from 'react';
import { RouteComponentProps, useLocation, navigate } from '@reach/router';
import { WineFormQuery } from '../components/WineForms/Search/WineFormQuery';
import {
  AdInput,
  TypeAd,
  TypeProduct,
  useCreateAdWineMutation,
  AddressInput,
  useWinesQuery,
} from '../generated/graphql';
import { searchedWine, notification, myInfo } from '../cache';
import { WineFormMutation } from '../components/WineForms/Post/WineFormMutation';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { updateCacheAd } from '../utils/updateCache';
import { BackButton } from '../components/BackButton';
import { useStyles } from '../utils/styleHook';

const Buy: React.FC<RouteComponentProps> = () => {
  const me = myInfo();
  const classes = useStyles();
  const location = useLocation();
  const adType = location.pathname === '/buy' ? TypeAd.Buy : TypeAd.Sell;
  let sameAddress: AddressInput;
  let differentAddress: AddressInput;
  const winesQueryResult = useWinesQuery();
  const searchedWineCache = searchedWine();
  const [createAdWineMutation] = useCreateAdWineMutation({
    onError: (error) =>
      notification({
        type: 'error',
        message: `${error.message}`,
      }),
    onCompleted: ({ createAd }) => {
      if (createAd?.errors?.length) {
        const errorMessages = createAd.errors.map((error) => error?.text);
        notification({
          type: 'error',
          message: `${errorMessages.toString()}`,
        });
      } else {
        notification({
          type: 'success',
          message: 'ad created',
        });
      }
    },
    update: (cache, response) => {
      updateCacheAd(cache, response.data?.createAd?.response);
    },
  });

  const onSubmitQuery = (values: WineFormQuery) => {
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

  const onSubmitMutation = async (values: WineFormMutation) => {
    if (values.isSameAddress && me?.address) {
      sameAddress = {
        regione: me.address.regione,
        provincia: me.address.provincia,
        comune: me.address.comune,
      };
    } else {
      differentAddress = values.address as AddressInput;
    }
    const adInput: AdInput = {
      wineName: values.wineName,
      typeAd: searchedWineCache?.typeAd as TypeAd,
      typeProduct: searchedWineCache?.typeProduct as TypeProduct,
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
    await createAdWineMutation({
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
      <BackButton />
      <div className={classes.paper}>
        <Typography component='h1' variant='h4' color='primary'>
          Che cosa vuoi {buyOrSellText}?
        </Typography>
        <Typography component='p' color='primary'>
          Inserisci i dati del prodotto che desideri {buyOrSellText}, noi
          cercheremo per te il giusto {buyerSellerText}.
        </Typography>
        {searchedWineCache?.isPost ? (
          <WineFormMutation
            wines={winesQueryResult}
            onSubmit={onSubmitMutation}
            adType={adType}
          />
        ) : (
          <WineFormQuery
            wines={winesQueryResult}
            onSubmit={onSubmitQuery}
            adType={adType}
          />
        )}
      </div>
    </Container>
  );
};

export default Buy;
