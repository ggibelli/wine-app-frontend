import * as React from 'react';
import { StyledBox } from '../../containers/StyledBox';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from '@reach/router';
import { TypeAd } from '../../generated/graphql';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { AdsWineResult } from '../../types';

export const CardWine: React.FC<{ ad: AdsWineResult | null }> = ({ ad }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const width = matches ? 400 : 250;
  const isBuy = ad?.typeAd === TypeAd.Buy ? true : false;
  const pointerEvent = ad?.isActive ? 'auto' : 'none';
  if (!ad) return null;
  return (
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
          Prezzo: {ad.priceFrom} euro al litro
        </Typography>
        <br />
        <Typography
          align='right'
          variant='caption'
          color={isBuy ? 'textSecondary' : 'primary'}
        >
          Annuncio pubblicato il {ad.datePosted}
        </Typography>
      </Link>
    </StyledBox>
  );
};