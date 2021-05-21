/* eslint-disable @typescript-eslint/restrict-template-expressions */
import * as React from 'react';
import { Link, RouteComponentProps, useParams } from '@reach/router';
import { useNegotiationQuery } from '../generated/graphql';
import { Container, CssBaseline } from '@material-ui/core';
import { BackButton } from '../components/BackButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../utils/styleHook';
import { Loading } from '../components/Loading';
import { CreateReviewModal } from '../components/ReviewModal';
import { CloseNegotiationModal } from '../components/NegotiationModals/CloseNegotiationModal';

const Negotiation: React.FC<RouteComponentProps> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { id }: { id: string } = useParams();
  const classes = useStyles();
  const result = useNegotiationQuery({ variables: { id } });
  const { data, loading, error } = result;
  const adWine =
    data?.negotiation?.ad.__typename === 'AdWine'
      ? data?.negotiation?.ad
      : null;
  const UserContact = () => {
    if (adWine?.postedBy.hideContact) {
      return null;
    }
    return (
      <div data-testid='info-contact'>
        puoi contattare l utente al numero: {adWine?.postedBy.phoneNumber} o
        alla mail {adWine?.postedBy.email}
      </div>
    );
  };

  if (error) return <div>{error.message}</div>;

  if (loading) return <Loading />;
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <BackButton />
      <div className={classes.paper}>
        <Typography color='primary' component='h3' variant='h5'>
          Gestisci la trattativa
        </Typography>
        <Typography color='secondary' variant='body1'>
          Puoi decidere se contattare l utente tramite il nostro portale o
          usando i suoi contatti
        </Typography>
      </div>
      <UserContact />
      <Typography color='secondary' variant='body1'>
        Questa trattativa riguarda l annuncio per {adWine?.wineName}{' '}
        {adWine?.wine?.denominazioneZona}
      </Typography>
      {data?.negotiation?.isConcluded ? (
        <CreateReviewModal
          idNegotiation={data.negotiation._id}
          idUser={data.negotiation.forUserAd._id}
          type={data.negotiation.type}
        />
      ) : (
        <CloseNegotiationModal id={id} />
      )}
      <Button
        aria-label='open-chat'
        className={classes.sellButton}
        component={Link}
        to={`/messaggi/${data?.negotiation?._id}`}
      >
        Vai alla chat
      </Button>
    </Container>
  );
};

export default Negotiation;
