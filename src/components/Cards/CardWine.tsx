import * as React from 'react';
import { StyledBox } from '../../containers/StyledBox';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Link from '@material-ui/core/Link';
import { Link as RouterLink, navigate } from '@reach/router';
import { TypeAd, TypeProduct } from '../../generated/graphql';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { AdsWineResult } from '../../types';
import Grid from '@material-ui/core/Grid';
import { HandshakeOutline } from 'mdi-material-ui';
import { FavoriteButton } from '../../containers/FavoriteButton';
import { Button } from '@material-ui/core';
import { myInfo, searchedWine } from '../../cache';

export const CardWine: React.FC<{ ad: AdsWineResult }> = ({ ad }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const width = matches ? 400 : 250;
  const isBuy = ad?.typeAd === TypeAd.Buy ? true : false;
  const pointerEvent = ad?.isActive ? 'auto' : 'none';
  const me = myInfo();
  const myAd = me?.ads?.map((ad) => ad._id).includes(ad._id);
  const handleClick = () => {
    searchedWine({
      ...ad,
      typeProduct: TypeProduct.AdWine,
      wine: undefined,
    });
    void navigate('/annunci');
  };
  return (
    <>
      <StyledBox
        data-testid='card-wine'
        width={width}
        typeAd={ad.typeAd}
        notActive={!ad.isActive}
      >
        <Link
          aria-label='link-ad'
          style={{ pointerEvents: pointerEvent, display: 'block' }}
          component={RouterLink}
          to={`/annunci/${ad._id}`}
          underline='none'
        >
          <Typography
            component='h5'
            variant='h6'
            color={isBuy ? 'textSecondary' : 'primary'}
          >
            {isBuy ? 'Compro' : 'Vendo'} {ad.wineName}{' '}
            {/* {ad.wine.denominazioneZona} */}
          </Typography>
          <Typography
            align='left'
            variant='body1'
            color={isBuy ? 'textSecondary' : 'primary'}
          >
            Annata: {ad.harvest}
            <br />
            Gradazione: {ad.abv} % Vol
            <br />
            Quantità: {ad.litersTo} l
            <br />
            Prezzo: {ad.priceFrom} €/l
          </Typography>
          <br />
          <Typography
            align='right'
            variant='caption'
            color={isBuy ? 'textSecondary' : 'primary'}
          >
            pubblicato il {ad.datePosted}
          </Typography>
        </Link>
      </StyledBox>
      <Grid container justify='space-between'>
        <div>
          <VisibilityIcon fontSize='small' />
          {ad?.numberViews}
          <HandshakeOutline fontSize='small' />
          {ad?.activeNegotiations}
          <FavoriteButton id={ad._id} fontSize='small' />
          {ad?.savedTimes || 0}
        </div>
        {myAd ? <Button onClick={handleClick}>Cerca di nuovo</Button> : null}

        {/* <Typography align='right' variant='caption'></Typography> */}
      </Grid>
    </>
  );
};
