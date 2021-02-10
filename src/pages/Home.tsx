import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { RouteComponentProps } from '@reach/router';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from '@reach/router';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  buy: {
    '&:hover': {
      backgroundColor: 'rgb(100, 10, 40)',
    },
  },
  sell: {
    '&:hover': {
      backgroundColor: 'rgb(250, 250, 241)',
    },
  },
  cruise: {
    '&:hover': {
      backgroundColor: 'rgb(250, 232, 250)',
    },
  },
}));

export const Home: React.FC<RouteComponentProps> = () => {
  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography color='primary' component='h3' variant='h4'>
          Ciao, cosa vuoi fare?
        </Typography>
      </div>
      <Link component={RouterLink} to='/buy' style={{ textDecoration: 'none' }}>
        <Box
          className={classes.buy}
          boxShadow={3}
          p={2}
          m={2}
          mt={2}
          px={2}
          pt={2}
          color='white'
          borderColor='primary.main'
          bgcolor='primary.main'
          borderRadius={16}
        >
          <Typography color='textSecondary' component='h3' variant='h5'>
            Comprare!
          </Typography>
          <Typography color='textSecondary' component='p' variant='body1'>
            Dicci che cosa stai cercando e in un attimo ti diremo dove trovarlo.
          </Typography>
        </Box>
      </Link>
      <Link
        component={RouterLink}
        to='/sell'
        style={{ textDecoration: 'none' }}
      >
        <Box
          className={classes.sell}
          boxShadow={3}
          p={2}
          m={2}
          mt={2}
          px={2}
          pt={2}
          color='primary.main'
          borderColor='white'
          bgcolor='white'
          borderRadius={16}
        >
          <Typography component='h3' variant='h5'>
            Vendere!
          </Typography>
          <Typography color='secondary' component='p' variant='body1'>
            Cerca il giusto acquirente per il tuo prodotto in pochi e semplici
            passaggi.
          </Typography>
        </Box>
      </Link>
      <Link component={RouterLink} to='/' style={{ textDecoration: 'none' }}>
        <Box
          className={classes.cruise}
          boxShadow={3}
          p={2}
          m={2}
          mt={2}
          px={2}
          pt={2}
          color='primary.main'
          borderColor='white'
          bgcolor='white'
          borderRadius={16}
        >
          <Typography color='textPrimary' component='h3' variant='h5'>
            Dare un&apos;occhiata!
          </Typography>
          <Typography color='secondary' component='p' variant='body1'>
            Fai un giro tra gli annunci degli altri utenti: potrebbe esserci
            qualcosa di interessante.
          </Typography>
        </Box>
      </Link>
    </Container>
  );
};
