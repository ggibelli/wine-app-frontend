/* eslint-disable @typescript-eslint/restrict-template-expressions */
import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { AdQuery, TypeAd } from '../generated/graphql';
import { Button, Grid } from '@material-ui/core';
import { FavoriteButton } from '../containers/FavoriteButton';
import { NegotiationModal } from './NegotiationModal';
import { StyledBox } from './StyledBox';
import { useStyles } from '../utils/styleHook';

export const CardWineDetail: React.FC<{
  ad: AdQuery['ad'];
  me: AdQuery['me'];
  createNegotiation: () => void;
}> = ({ ad, createNegotiation, me }) => {
  const classes = useStyles();
  const isBuy = ad?.typeAd === TypeAd.Buy ? true : false;
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const handleClickOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  const ContactOrEdit = () => {
    if (me?._id === ad?.postedBy._id) {
      return (
        <Button
          aria-label='edit-ad'
          className={isBuy ? classes.buyButton : classes.sellButton}
        >
          Modifica l annuncio
        </Button>
      );
    } else if (
      me?.negotiations?.find((negotiation) => negotiation?.ad._id === ad?._id)
    ) {
      return <div>Negoziazione gia aperta</div>;
    }
    if (!ad?.isActive) {
      return <Typography>Annuncio non piu attivo </Typography>;
    }
    return (
      <>
        <Button
          aria-label='open-negotiation-dialog'
          className={isBuy ? classes.buyButton : classes.sellButton}
          onClick={handleClickOpen}
        >
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
      {ad?.postedBy._id !== me?._id ? <FavoriteButton ad={ad} /> : null}

      <Typography component='h5' variant='h5'>
        L&apos;utente {ad?.postedBy.firstName} {isBuy ? 'compra' : 'vende'}:
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
          Annuncio visualizzato {ad?.numberViews} volte
        </Typography>

        <Typography align='right' variant='caption'>
          Negoziazioni attive: {ad?.activeNegotiations}
        </Typography>
      </Grid>
    </StyledBox>
  );
};
