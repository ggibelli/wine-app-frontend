import * as React from 'react';
import { RouteComponentProps, useLocation, navigate } from '@reach/router';
import {
  AdInput,
  TypeAd,
  TypeProduct,
  useCreateAdWineMutation,
  // useWinesQuery,
  AdsWineDocument,
  QueryOrderBy,
} from '../generated/graphql';
import { searchedWine, notification, myInfo } from '../cache';
import { WineFormMutation } from '../components/WineForms/Post/WineFormMutation';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { updateCacheAd } from '../utils/updateCache';
import { BackButton } from '../components/BackButton';
import { useStyles } from '../utils/styleHook';
import { Loading } from '../components/Loading';

const Buy: React.FC<RouteComponentProps> = () => {
  const classes = useStyles();
  const location = useLocation();
  const adType = location.pathname === '/buy' ? TypeAd.Buy : TypeAd.Sell;

  // const winesQueryResult = useWinesQuery();
  const [createAdWineMutation, { loading, client }] = useCreateAdWineMutation({
    onError: (error) => {
      notification({
        type: 'error',
        message: `${error.message}`,
      });
    },
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
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        void navigate(`/annunci`);
      }
    },
    update: (cache, response) => {
      updateCacheAd(cache, response.data?.createAd?.response);
    },
  });

  const onSubmitMutation = async (values: WineFormMutation) => {
    const me = myInfo();
    // if (values.isSameAddress && me?.address) {
    //   sameAddress = {
    //     regione: me.address.regione,
    //     provincia: me.address.provincia,
    //     comune: me.address.comune,
    //   };
    // } else {
    //   differentAddress = values.address as AddressInput;
    // }
    const adInput: AdInput = {
      wineName: values.wineName,
      typeAd: adType,
      typeProduct: TypeProduct.AdWine,
      content: values.content,
      harvest: values.harvest as number,
      abv: values.abv as number,
      priceFrom: values.price as number,
      priceTo: values.price as number,
      litersFrom: values.liters as number,
      litersTo: values.liters as number,
      // needsFollowUp: values.needsFollowUp,
      // address: values.isSameAddress ? sameAddress : differentAddress,
    };
    searchedWine({ ...adInput });

    const adAlreadyPosted = me?.ads?.find(
      (ad) =>
        ad.__typename === 'AdWine' &&
        ad.wineName === adInput.wineName &&
        ad.harvest === adInput.harvest &&
        ad.typeAd === adType &&
        ad.isActive === true,
    );
    await client.query({
      query: AdsWineDocument,
      variables: {
        wineName: adInput.wineName,
        typeProduct: TypeProduct.AdWine,
        typeAd: adType,
        offset: 0,
        limit: 4,
        orderBy: QueryOrderBy.CreatedAtDesc,
      },
    });
    if (adAlreadyPosted) {
      void navigate('/annunci');
    } else {
      await createAdWineMutation({
        variables: {
          input: adInput,
        },
      });
    }
  };
  const buyOrSellText = adType === TypeAd.Buy ? 'comprare' : 'vendere';
  const buyerSellerText = adType === TypeAd.Buy ? 'acquirente' : 'venditore';

  if (loading) return <Loading />;

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
        <WineFormMutation onSubmit={onSubmitMutation} adType={adType} />
      </div>
    </Container>
  );
};

export default Buy;
