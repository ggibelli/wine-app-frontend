import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { AdQuery, TypeAd } from '../../generated/graphql';
import { Button, Grid } from '@material-ui/core';
import { OpenNegotiationModal } from '../NegotiationModals/OpenNegotiationModal';
import { StyledBox } from '../../containers/StyledBox';
import { useStyles } from '../../utils/styleHook';
import { FavoriteButton } from '../../containers/FavoriteButton';

export const CardWineDetail: React.FC<{
  ad: AdQuery['ad'];
  me: AdQuery['me'];
  createNegotiation: () => void;
}> = ({ ad, createNegotiation, me }) => {
  const classes = useStyles();
  const isBuy = ad?.typeAd === TypeAd.Buy ? true : false;
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [copyLinkText, setCopyLinkText] = React.useState<string>('Copia Link');
  if (!ad) return null;
  const handleClickOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopyLinkText('Link Copiato!');
    setTimeout(() => {
      setCopyLinkText('Copia Link');
    }, 500);
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
    <>
      <StyledBox width={1} typeAd={ad.typeAd}>
        <Typography component='h5' variant='h5'>
          L&apos;utente {ad?.postedBy.firstName} {isBuy ? 'compra' : 'vende'}:
        </Typography>
        <br />
        <Typography align='left' variant='h6'>
          {adWine?.wineName} {adWine?.wine?.denominazioneZona}
          <br />
          Annata: {ad?.harvest}
          <br />
          Gradazione: {ad.abv} % Vol
          <br />
          Quantità: {adWine?.litersTo} litri
          <br />
          Prezzo: {ad.priceFrom} euro al litro
        </Typography>

        <br />
        <ContactOrEdit />
        <Button
          style={{ marginTop: 5 }}
          fullWidth
          aria-label='copy-link'
          className={isBuy ? classes.buyButton : classes.sellButton}
          onClick={handleCopyLink}
        >
          {copyLinkText}
        </Button>
        <br />

        <Grid container justify='space-between'>
          <Typography align='left' variant='caption'>
            Annuncio visualizzato: {ad?.numberViews} volte
          </Typography>

          <Typography align='right' variant='caption'>
            Negoziazioni attive: {ad?.activeNegotiations}
          </Typography>
        </Grid>
      </StyledBox>
      <Grid container justify='space-between'>
        <div></div>
        <div>
          <FavoriteButton
            id={ad._id}
            // fontSize='medium'
            timesFavorite={ad?.savedTimes || 0}
          />
        </div>
      </Grid>
    </>
  );
};
