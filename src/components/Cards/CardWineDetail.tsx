import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { AdQuery, TypeAd } from '../../generated/graphql';
import { Button, Grid } from '@material-ui/core';
import { OpenNegotiationModal } from '../NegotiationModals/OpenNegotiationModal';
import { StyledBox } from '../../containers/StyledBox';
import { useStyles } from '../../utils/styleHook';

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
        <>
          <Button
            fullWidth
            aria-label='edit-ad'
            className={isBuy ? classes.buyButton : classes.sellButton}
          >
            Modifica l&apos;annuncio
          </Button>
          <br />
        </>
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
          fullWidth
          aria-label='open-negotiation-dialog'
          className={isBuy ? classes.buyButton : classes.sellButton}
          onClick={handleClickOpen}
        >
          Contatta il {ad?.typeAd === TypeAd.Buy ? 'compratore' : 'venditore'}
        </Button>
        <OpenNegotiationModal
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
      <Typography component='h5' variant='h5'>
        L&apos;utente {ad?.postedBy.firstName} {isBuy ? 'compra' : 'vende'}:
      </Typography>
      <br />
      <Typography align='left' variant='h6' color='textPrimary'>
        {adWine?.wineName} {adWine?.wine?.denominazioneZona}
        <br />
        Annata: {ad?.harvest}
        <br />
        Gradazione: {ad?.abv} % Vol
        <br />
        Quantità: {adWine?.litersTo} litri
        <br />
        Prezzo: {ad?.priceFrom} euro al litro
      </Typography>
      <br />
      <Typography align='left' component='h5' variant='h6' color='textPrimary'>
        Zona di produzione: {ad?.address?.comune} ({ad?.address?.provincia})
      </Typography>
      <br />
      <ContactOrEdit />
      <br />

      <Grid container justify='space-between'>
        <Typography align='left' variant='caption' color='textPrimary'>
          Annuncio visualizzato: {ad?.numberViews} volte
        </Typography>

        <Typography align='right' variant='caption' color='textPrimary'>
          Negoziazioni attive: {ad?.activeNegotiations}
        </Typography>
      </Grid>
    </StyledBox>
  );
};
