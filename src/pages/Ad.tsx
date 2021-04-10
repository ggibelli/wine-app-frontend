import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useParams } from '@reach/router';
import {
  TypeAd,
  useAdQuery,
  useCreateNegotiationMutation,
  NegotiationInput,
  useNegotiationsForAdLazyQuery,
  AdQuery,
} from '../generated/graphql';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { notification } from '../cache';
import { CardWineDetail } from '../components/CardWineDetail';
import { Container, CssBaseline, Typography } from '@material-ui/core';
import { BackButton } from '../components/BackButton';
import { updateCacheNegotiations } from '../utils/updateCache';
import { OpenNegotiations } from '../components/OpenNegotiations';
import { useStyles } from '../utils/styleHook';

const Ad: React.FC<RouteComponentProps> = () => {
  const [ad, setAd] = React.useState<AdQuery['ad'] | undefined>(undefined);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { id }: { id: string } = useParams();
  const { data, loading, error } = useAdQuery({
    variables: {
      id: id,
    },
    onCompleted: (data) => (data?.ad ? setAd(data?.ad) : null),
  });
  React.useEffect(() => {
    if (data?.ad) {
      setAd(data?.ad);
    }
  }, [data?.ad?.activeNegotiations]);
  const [createNegotiation] = useCreateNegotiationMutation({
    onCompleted: (createdNegotiation) => {
      if (createdNegotiation.createNegotiation?.errors?.length) {
        const errorMessages = createdNegotiation.createNegotiation?.errors.map(
          (error) => error?.text
        );
        notification({
          type: 'error',
          message: `${errorMessages.toString()}`,
        });
      } else {
        notification({
          message: 'trattativa creata con successo',
          type: 'success',
        });
      }
    },
    onError: (error) =>
      notification({
        type: 'error',
        message: `errore durante creazione trattativa: ${error.message}`,
      }),
    update: (cache, response) => {
      updateCacheNegotiations(
        cache,
        response.data?.createNegotiation?.response
      );
    },
  });
  const [lazyNegotiations, lazyNegResult] = useNegotiationsForAdLazyQuery();
  const handleShowNegotiations = () => {
    lazyNegotiations({ variables: { ad: id } });
  };
  const openNegotiation = () => {
    const newNegotiation: NegotiationInput = {
      forUserAd: ad?.postedBy._id,
      ad: ad?._id,
      type: ad?.typeAd,
    } as NegotiationInput;
    void createNegotiation({ variables: { negotiation: newNegotiation } });
  };
  const classes = useStyles();
  if (error && !loading) {
    return <div>Errore</div>;
  }

  const buyerOrSeller =
    ad?.typeAd === TypeAd.Buy ? "L'acquirente" : 'Il venditore';
  if (ad?._id) {
    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <BackButton />
        <div className={classes.paper}>
          <Typography color='primary' component='h3' variant='h5'>
            Contatta {buyerOrSeller}
          </Typography>
          <Typography color='secondary' variant='body1'>
            Questo è uno degli annunci che abbiamo selezionato per te: verifica
            anche tu i parametri e decidi se procedere.
          </Typography>
        </div>
        <CardWineDetail
          ad={ad}
          createNegotiation={openNegotiation}
          me={data?.me}
        />
        {data?.me?._id === ad.postedBy._id ? (
          <OpenNegotiations
            data={lazyNegResult}
            showNegotiations={handleShowNegotiations}
          />
        ) : null}
      </Container>
    );
  }
  return (
    <>
      <Backdrop
        data-testid='loading'
        className={classes.backdrop}
        open={loading}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    </>
  );
};

export default Ad;
