/* eslint-disable @typescript-eslint/restrict-template-expressions */
import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { AdQuery, MeQuery, TypeAd } from '../generated/graphql';
import { Button, Grid } from '@material-ui/core';
import { FavoriteButton } from './FavoriteButton';
import { NegotiationModal } from './NegotiationModal';
import { StyledBox } from './StyledBox';

export const CardWineDetail: React.FC<{
  ad: AdQuery['ad'];
  me: MeQuery['me'];
  createNegotiation: () => void;
}> = ({ ad, me, createNegotiation }) => {
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  const ContactOrEdit = () => {
    if (me?._id === ad?.postedBy._id) {
      return <Button>Modifica l annuncio</Button>;
    } else if (
      me?.negotiations?.find((negotiation) => negotiation?.ad._id === ad?._id)
    ) {
      //
      return <div>negoziazione gia aperta</div>;
    }
    if (!ad?.isActive) {
      return <Typography>Annuncio non piu attivo </Typography>;
    }
    return (
      <>
        <Button onClick={handleClickOpen}>
          Contatta il {ad?.typeAd === TypeAd.Buy ? 'compratore' : 'venditore'}
        </Button>
        <NegotiationModal
          handleClose={handleClose}
          open={openModal}
          createNegotiation={createNegotiation}
        />
      </>
    );
  };
  const adWine = ad?.__typename === 'AdWine' ? ad : null;
  return (
    <StyledBox width={1} typeAd={ad?.typeAd as TypeAd}>
      <FavoriteButton ad={ad} me={me} />
      <Typography component='h5' variant='h5'>
        L&apos;utente {ad?.postedBy.firstName}{' '}
        {ad?.typeAd === TypeAd.Buy ? 'compra' : 'vende'}:
      </Typography>
      <Typography align='left' variant='h6'>
        {adWine?.wineName} {adWine?.wine?.denominazioneZona}
        <br />
        Annata: {ad?.harvest}
        <br />
        Gradazione: {ad?.abv} % Vol
        <br />
        Quantità: {adWine?.litersTo}
        <br />
        Prezzo: {ad?.priceFrom} euro al litro
      </Typography>
      <br />
      <Typography align='left' component='h5' variant='h5'>
        Indirizzo
      </Typography>
      <br />
      <Typography align='left' variant='h6'>
        Regione: {ad?.address?.regione}
        <br />
        Provincia: {ad?.address?.provincia}
        <br />
        Comune: {ad?.address?.comune}
      </Typography>
      <br />
      <ContactOrEdit />
      <Grid container justify='space-between'>
        <Typography align='left' variant='caption'>
          Annuncio visualizzato {ad?.numberViews}volte
        </Typography>

        <Typography align='right' variant='caption'>
          Negoziazioni attive: {ad?.activeNegotiations}
        </Typography>
      </Grid>
    </StyledBox>
  );
};
