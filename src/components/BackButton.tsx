import Button from '@material-ui/core/Button';
import * as React from 'react';
import { searchedWine } from '../cache';
import { Link, useLocation } from '@reach/router';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { TypeAd } from '../generated/graphql';

export const BackButton: React.FC = () => {
  const searchedWineCache = searchedWine();
  const { pathname } = useLocation();
  if (pathname.split('/')[1] === 'annunci') {
    return (
      <Button
        component={Link}
        to='/annunci'
        //variant='contained'
        color='primary'
        size='large'
        startIcon={<ArrowBackIosIcon />}
      >
        Annunci
      </Button>
    );
  } else if (searchedWineCache?.typeAd === TypeAd.Buy) {
    return (
      <Button
        component={Link}
        to='/buy'
        //variant='contained'
        color='primary'
        size='large'
        startIcon={<ArrowBackIosIcon />}
      >
        Compra
      </Button>
    );
  } else if (searchedWineCache?.typeAd === TypeAd.Sell) {
    return (
      <Button
        component={Link}
        to='/sell'
        //variant='contained'
        color='primary'
        size='large'
        startIcon={<ArrowBackIosIcon />}
      >
        Vendi
      </Button>
    );
  } else return null;
};
