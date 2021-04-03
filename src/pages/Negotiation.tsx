/* eslint-disable @typescript-eslint/restrict-template-expressions */
import * as React from 'react';
import { Link, RouteComponentProps, useParams } from '@reach/router';
import { useNegotiationQuery } from '../generated/graphql';
import { notification } from '../cache';
import { Container, CssBaseline } from '@material-ui/core';
import { BackButton } from '../components/BackButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CloseNegotiationButton } from '../containers/CloseNegotiationButton';
import { useStyles } from '../utils/styleHook';

export const Negotiation: React.FC<RouteComponentProps> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { id }: { id: string } = useParams();
  const classes = useStyles();

  const { data, loading, error } = useNegotiationQuery({ variables: { id } });
  const adWine =
    data?.negotiation?.ad.__typename === 'AdWine'
      ? data?.negotiation?.ad
      : null;
  const UserContact = () => {
    if (adWine?.postedBy.hideContact) {
      return null;
    }
    return (
      <div>
        puoi contattare l utente al numero: {adWine?.postedBy.phoneNumber} o
        alla mail {adWine?.postedBy.email}
      </div>
    );
  };
  if (error && !loading) {
    notification({
      type: 'error',
      message: `${error.message}`,
    });
    return <div>Errore</div>;
  }
  if (loading) return <div>loading</div>;

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
      {data?.negotiation?.isConcluded ? null : (
        <CloseNegotiationButton id={id} />
      )}
      <Button
        className={classes.sellButton}
        component={Link}
        to={`/messaggi/${data?.negotiation?._id}`}
      >
        Vai alla chat
      </Button>
    </Container>
  );
};
