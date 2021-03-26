/* eslint-disable @typescript-eslint/restrict-template-expressions */
import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { AdWine, TypeAd, User } from '../generated/graphql';
import { Button, Grid } from '@material-ui/core';
import { FavoriteButton } from './FavoriteButton';
import { NegotiationModal } from './NegotiationModal';
// // import Collapse from '@material-ui/core/Collapse';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// import IconButton from '@material-ui/core/IconButton';

export const CardWineDetail: React.FC<{
  ad: AdWine;
  me: User;
  createNegotiation: (arg0: AdWine) => void;
}> = ({ ad, me, createNegotiation }) => {
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  const ContactOrEdit = () => {
    if (me._id === ad.postedBy._id) {
      return <Button>Modifica l annuncio</Button>;
    } else if (
      me.negotiations?.negotiations?.find(
        (negotiation) => negotiation?.ad._id === ad._id
      )
    ) {
      return <div>negoziazione gia aperta</div>;
    }
    return (
      <>
        <Button onClick={handleClickOpen}>
          Contatta il {ad.typeAd === TypeAd.Buy ? 'compratore' : 'venditore'}
        </Button>
        <NegotiationModal
          handleClose={handleClose}
          open={openModal}
          ad={ad}
          createNegotiation={createNegotiation}
        />
      </>
    );
  };

  return (
    <Box
      boxShadow={3}
      p={2}
      m={2}
      mt={2}
      px={2}
      pt={2}
      width='100%'
      height='100%'
      color={ad.typeAd === TypeAd.Sell ? 'primary.main' : 'white'}
      borderColor={ad.typeAd === TypeAd.Sell ? 'white' : 'primary.main'}
      bgcolor={ad.typeAd === TypeAd.Sell ? 'white' : 'primary.main'}
      borderRadius={16}
    >
      <FavoriteButton ad={ad} me={me} />
      <Typography component='h5' variant='h5'>
        L&apos;utente {ad.postedBy.firstName}{' '}
        {ad.typeAd === TypeAd.Buy ? 'compra' : 'vende'}:
      </Typography>
      <Typography align='left' variant='h6'>
        {ad.wineName} {ad.wine?.denominazioneZona}
        <br />
        Annata: {ad.harvest}
        <br />
        Gradazione: {ad.abv} % Vol
        <br />
        Quantità: {ad.litersTo}
        <br />
        Prezzo: {ad.priceFrom} euro al litro
      </Typography>
      <br />
      <Typography align='left' component='h5' variant='h5'>
        Indirizzo
      </Typography>
      <br />
      <Typography align='left' variant='h6'>
        Regione: {ad.address.regione}
        <br />
        Provincia: {ad.address.provincia}
        <br />
        Comune: {ad.address.comune}
      </Typography>
      <br />
      <ContactOrEdit />
      <Grid container justify='space-between'>
        <Typography align='left' variant='caption'></Typography>

        <Typography align='right' variant='caption'>
          Negoziazioni attive: {ad.activeNegotiations}
        </Typography>
      </Grid>
    </Box>
  );
};
