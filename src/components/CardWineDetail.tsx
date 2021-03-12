/* eslint-disable @typescript-eslint/restrict-template-expressions */
import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { TypeAd } from '../generated/graphql';
import { Button, Grid } from '@material-ui/core';

export interface Ad {
  _id: string;
  postedBy: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  wine?: {
    denominazioneZona?: string;
  } | null;
  address: {
    regione: string;
    provincia: string;
    comune: string;
    via: string;
    CAP: string;
  };
  wineName?: string;
  litersFrom?: number | null;
  litersTo?: number | null;
  priceFrom: number;
  priceTo: number;
  harvest: number;
  abv: number;
  activeNegotiations?: number | null;
  datePosted?: string | null;
  typeAd: TypeAd;
}

export const CardWineDetail: React.FC<{ ad: Ad }> = ({ ad }) => {
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
      color='primary.main'
      borderColor='white'
      bgcolor='white'
      borderRadius={16}
      onClick={() => console.log(ad._id)}
    >
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
      <Grid container justify='space-between'>
        <Typography align='left' variant='caption'></Typography>
        <Typography align='right' variant='caption'>
          Negoziazioni attive: {ad.activeNegotiations}
        </Typography>
      </Grid>
      <Button>
        Contatta il {ad.typeAd === TypeAd.Buy ? 'compratore' : 'venditore'}
      </Button>
    </Box>
  );
};
