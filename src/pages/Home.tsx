import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { RouteComponentProps } from '@reach/router';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from '@reach/router';
import { searchedWine } from '../cache';
import { useStyles } from '../utils/styleHook';

const Home: React.FC<RouteComponentProps> = () => {
  const classes = useStyles();
  searchedWine(undefined);
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
          className={classes.buyHome}
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
          className={classes.sellHome}
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
      {/* Next feature */}
      {/* <Link component={RouterLink} to='/' style={{ textDecoration: 'none' }}>
        <Box
          className={classes.cruiseHome}
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
      </Link> */}
    </Container>
  );
};

export default Home;
