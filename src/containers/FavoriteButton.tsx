import * as React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import _ from 'lodash';
import {
  useSaveAdMutation,
  MeDocument,
  AdWine,
  AdQuery,
  MeQuery,
} from '../generated/graphql';
import { ICachedMe } from '../utils/updateCache';

export const FavoriteButton: React.FC<{
  ad: AdQuery['ad'];
  me: MeQuery['me'];
}> = ({ ad, me }) => {
  console.log(me);
  const [saveAd] = useSaveAdMutation({
    onError: (error) => console.log(error),
    update: (cache, response) => {
      const cachedDataMeLocal: ICachedMe | null = _.cloneDeep(
        cache.readQuery({
          query: MeDocument,
        })
      );
      if (cachedDataMeLocal?.me.savedAds && isFav) {
        const indexAd = cachedDataMeLocal?.me.savedAds.findIndex(
          (adSaved) => adSaved._id === ad?._id
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
  const handleClick = (id: string) => {
    void saveAd({ variables: { id } });
    setIsFav(!isFav);
  };
  if (ad?.postedBy._id !== me?._id) {
    return (
      <IconButton
        aria-label='save'
        onClick={() => handleClick(ad?._id as string)}
      >
        {isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    );
  }
  return null;
};
