/* eslint-disable @typescript-eslint/restrict-template-expressions */
import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {
  AdWine,
  MeDocument,
  // DenomZona,
  // MetodoProduttivo,
  TypeAd,
  useSaveAdMutation,
  useMeLazyQuery,
} from '../generated/graphql';
import { Button, Grid } from '@material-ui/core';
// import { useMeQuery } from '../generated/graphql';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import _ from 'lodash';
import { ICachedMe } from '../pages/BuySell';
// export interface Ad {
//   _id: string;
//   postedBy: {
//     _id: string;
//     firstName: string;
//     lastName: string;
//   };
//   wine?: {
//     denominazioneZona?: DenomZona;
//   } | null;
//   address: {
//     regione: string;
//     provincia: string;
//     comune: string;
//     via: string;
//     CAP: string;
//   };
//   metodoProduttivo?: MetodoProduttivo | null;
//   wineName?: string;
//   litersFrom?: number | null;
//   litersTo?: number | null;
//   priceFrom: number;
//   priceTo: number;
//   harvest: number;
//   abv: number;
//   activeNegotiations?: number | null;
//   datePosted?: string | null;
//   typeAd: TypeAd;
// }

export const CardWineDetail: React.FC<{ ad: AdWine }> = ({ ad }) => {
  // const { data, loading, error } = useMeQuery();
  const [lazyMe, { data, loading, error }] = useMeLazyQuery();
  const [saveAd] = useSaveAdMutation({
    onCompleted: (data) => console.log(data),
    onError: (error) => console.log(error),
    update: (cache, response) => {
      const cachedDataMeLocal: ICachedMe | null = _.cloneDeep(
        cache.readQuery({
          query: MeDocument,
        })
      );
      if (cachedDataMeLocal?.me.savedAds && isFav) {
        const indexAd = cachedDataMeLocal?.me.savedAds.findIndex(
          (adSaved) => adSaved._id === ad._id
        );
        cachedDataMeLocal?.me.savedAds.splice(indexAd, 1);
      } else if (cachedDataMeLocal?.me.savedAds) {
        cachedDataMeLocal?.me.savedAds.push(
          response.data?.saveAd?.response as AdWine
        );
      }
      cache.writeQuery({ query: MeDocument, data: cachedDataMeLocal });
    },
  });
  const [isFav, setIsFav] = React.useState<boolean>(false);
  React.useEffect(() => {
    lazyMe();
  }, []);
  React.useEffect(() => {
    if (
      data?.me?.savedAds?.findIndex((adSaved) => adSaved._id === ad._id) === -1
    ) {
      setIsFav(false);
    } else {
      setIsFav(true);
    }
  }, [data?.me?.savedAds]);
  const handleClick = (id: string) => {
    void saveAd({ variables: { id } });
  };
  const ContactOrEdit = () => {
    if (!loading && !error) {
      if (data?.me?._id === ad.postedBy._id) {
        return <Button>Modifica l annuncio</Button>;
      }
      return (
        <Button>
          Contatta il {ad.typeAd === TypeAd.Buy ? 'compratore' : 'venditore'}
        </Button>
      );
    }
    return null;
  };

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
      color={ad.typeAd === TypeAd.Sell ? 'primary.main' : 'white'}
      borderColor={ad.typeAd === TypeAd.Sell ? 'white' : 'primary.main'}
      bgcolor={ad.typeAd === TypeAd.Sell ? 'white' : 'primary.main'}
      borderRadius={16}
      onClick={() => console.log(ad._id)}
    >
      <IconButton aria-label='save' onClick={() => handleClick(ad._id)}>
        {!isFav ? <FavoriteBorderIcon /> : <FavoriteIcon />}
      </IconButton>
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
      <ContactOrEdit />
    </Box>
  );
};
