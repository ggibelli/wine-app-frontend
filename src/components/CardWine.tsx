import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from '@reach/router';

export interface Ad {
  _id: string;
  wineName: string;
  litersTo: number;
  priceFrom: number;
  harvest: number;
  abv: number;
  datePosted: string;
}

export const CardWine: React.FC<{ ad: Ad }> = ({ ad }) => {
  return (
    <Link
      component={RouterLink}
      to={`/annunci/${ad._id}`}
      style={{ textDecoration: 'none' }}
    >
      <Box
        boxShadow={3}
        p={2}
        m={2}
        mt={2}
        px={2}
        pt={2}
        width='100%'
        color='primary.main'
        borderColor='white'
        bgcolor='white'
        borderRadius={16}
      >
        <Typography component='h5' variant='h6'>
          {ad.wineName}
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
      </Box>
    </Link>
  );
};
