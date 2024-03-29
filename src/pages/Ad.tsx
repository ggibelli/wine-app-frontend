import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useParams } from '@reach/router';
import {
  TypeAd,
  useAdQuery,
  useCreateNegotiationMutation,
  NegotiationInput,
  useNegotiationsForAdLazyQuery,
} from '../generated/graphql';
import { notification } from '../cache';
import { CardWineDetail } from '../components/Cards/CardWineDetail';
import { Container, CssBaseline, Typography } from '@material-ui/core';
import { BackButton } from '../components/BackButton';
import { updateCacheNegotiations } from '../utils/updateCache';
import { OpenNegotiations } from '../components/OpenNegotiations';
import { useStyles } from '../utils/styleHook';
import { Loading } from '../components/Loading';

const Ad: React.FC<RouteComponentProps> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { id }: { id: string } = useParams();
  const { data, loading, error } = useAdQuery({
    variables: {
      id: id,
    },
    onError: (error) => console.error(error),
  });
  const adOwner = data?.ad?.postedBy._id === data?.me?._id;
  const [createNegotiation] = useCreateNegotiationMutation({
    onCompleted: (createdNegotiation) => {
      if (createdNegotiation.createNegotiation?.errors?.length) {
        const errorMessages = createdNegotiation.createNegotiation?.errors.map(
          (error) => error?.text,
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
        response.data?.createNegotiation?.response,
      );
    },
  });

  const [lazyNegotiations, lazyNegResult] = useNegotiationsForAdLazyQuery();
  const handleShowNegotiations = () => {
    lazyNegotiations({ variables: { ad: id } });
  };

  const openNegotiation = async () => {
    const newNegotiation: NegotiationInput = {
      forUserAd: data?.ad?.postedBy._id,
      ad: data?.ad?._id,
      type: data?.ad?.typeAd,
    } as NegotiationInput;
    await createNegotiation({ variables: { negotiation: newNegotiation } });
  };
  const classes = useStyles();

  if (error && !loading) {
    return <div>Errore</div>;
  }
  const negotiationsMyAd = data?.me?.negotiations?.filter(
    (neg) => neg.ad._id === data?.ad?._id,
  );
  const buyerOrSeller =
    data?.ad?.typeAd === TypeAd.Buy ? "L'acquirente" : 'Il venditore';
  if (data?.ad?._id) {
    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <BackButton />
        <div className={classes.paper}>
          {!adOwner ? (
            <>
              {' '}
              <Typography color='primary' component='h3' variant='h5'>
                Contatta {buyerOrSeller}
              </Typography>
              <Typography color='secondary' variant='body1'>
                Questo è uno degli annunci che abbiamo selezionato per te:
                verifica anche tu i parametri e decidi se procedere.
              </Typography>
            </>
          ) : (
            <Typography color='primary' component='h3' variant='h5'>
              Gestisci il tuo annuncio
            </Typography>
          )}
        </div>
        <CardWineDetail
          ad={data?.ad}
          createNegotiation={openNegotiation}
          me={data?.me}
        />
        {adOwner && negotiationsMyAd?.length ? (
          <OpenNegotiations
            data={lazyNegResult}
            showNegotiations={handleShowNegotiations}
          />
        ) : null}
      </Container>
    );
  }
  return <Loading />;
};

export default Ad;
