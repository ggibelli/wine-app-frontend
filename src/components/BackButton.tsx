import Button from '@material-ui/core/Button';
import * as React from 'react';
// import { searchedWine } from '../cache';
import { navigate } from '@reach/router';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import { TypeAd } from '../generated/graphql';

export const BackButton: React.FC = () => {
  // // const searchedWineCache = searchedWine();
  // // const { pathname } = useLocation();
  // // if (searchedWineCache?.typeAd === TypeAd.Buy && pathname !== '/buy') {
  // //   return (
  // //     <Button
  // //       component={Link}
  // //       to='/buy'
  // //       //variant='contained'
  // //       color='primary'
  // //       size='large'
  // //       startIcon={<ArrowBackIosIcon />}
  // //     >
  // //       Compra
  // //     </Button>
  // //   );
  // // } else if (
  // //   searchedWineCache?.typeAd === TypeAd.Sell &&
  // //   pathname !== '/sell'
  // // ) {
  //   return (
  //     <Button
  //       component={Link}
  //       to='/sell'
  //       //variant='contained'
  //       color='primary'
  //       size='large'
  //       startIcon={<ArrowBackIosIcon />}
  //     >
  //       Vendi
  //     </Button>
  //   );
  // } else
  return (
    <Button
      aria-label='previous-page'
      color='primary'
      size='large'
      startIcon={<ArrowBackIosIcon />}
      onClick={() => navigate(-1)}
    >
      Torna indietro
    </Button>
  );
};
