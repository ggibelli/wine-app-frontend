import * as React from 'react';
import { StyledBox } from './StyledBox';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from '@reach/router';
import { TypeAd } from '../generated/graphql';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { AdsWineResult } from '../types';

export const CardWine: React.FC<{ ad: AdsWineResult | null }> = ({ ad }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const width = matches ? 400 : 250;
  if (!ad) return null;
  return (
    <Link
      component={RouterLink}
      to={`/annunci/${ad._id}`}
      style={{ textDecoration: 'none' }}
    >
      <StyledBox width={width} typeAd={ad.typeAd}>
        <Typography component='h5' variant='h6'>
          {ad.typeAd === TypeAd.Buy ? 'Compro' : 'Vendo'} {ad.wineName}{' '}
          {/* {ad.wine.denominazioneZona} */}
        </Typography>
        <Typography align='left' variant='body1'>
          Annata: {ad.harvest}
          <br />
          Gradazione: {ad.abv} % Vol
          <br />
          Quantità: {ad.litersTo} l
          <br />
          Prezzo: {ad.priceFrom} euro al litro
        </Typography>
        <br />
        <Typography align='right' variant='caption'>
          Annuncio pubblicato il {ad.datePosted}
        </Typography>
      </StyledBox>
    </Link>
  );
};
