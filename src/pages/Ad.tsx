import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useParams } from '@reach/router';
import { TypeAd, useAdQuery } from '../generated/graphql';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { notification, searchedWine } from '../cache';
import { CardWineDetail } from '../components/CardWineDetail';
import { Container, CssBaseline, Typography } from '@material-ui/core';
import { BackButton } from '../components/BackButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    paper: {
      marginTop: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  })
);

export const Ad: React.FC<RouteComponentProps> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { id }: { id: string } = useParams();
  const { data, loading, error } = useAdQuery({
    variables: {
      id: id,
    },
  });
  const classes = useStyles();
  const searchedWineCache = searchedWine();
  console.log(searchedWineCache);
  console.log(data, loading, error);
  if (error && !loading) {
    notification({
      type: 'error',
      message: `${error.message}`,
    });
    return <div>Errore</div>;
  }
  if (data?.ad) {
    const Heading = () => {
      if (data.ad?.typeAd === TypeAd.Buy) {
        return (
          <>
            <Typography color='primary' component='h3' variant='h5'>
              Contatta l&apos;acquirente
            </Typography>
            <Typography color='secondary' variant='body1'>
              Questo è uno degli annunci che abbiamo selezionato per te:
              verifica anche tu i parametri e decidi se procedere.
            </Typography>
          </>
        );
      } else {
        return (
          <>
            <Typography color='primary' component='h3' variant='h5'>
              Contatta il venditore
            </Typography>
            <Typography color='secondary' variant='body1'>
              Questo è uno degli annunci che abbiamo selezionato per te:
              verifica anche tu i parametri e decidi se procedere.
            </Typography>
          </>
        );
      }
    };
    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <BackButton />
        <div className={classes.paper}>
          <Heading />
        </div>
        <CardWineDetail ad={data.ad} />
      </Container>
    );
  }
  return (
    <>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color='inherit' />
      </Backdrop>
    </>
  );
};
