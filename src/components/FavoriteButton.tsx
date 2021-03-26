import * as React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import _ from 'lodash';
import { ICachedMe } from '../pages/BuySell';
import {
  useSaveAdMutation,
  MeDocument,
  AdWine,
  // useMeLazyQuery,
  User,
} from '../generated/graphql';

export const FavoriteButton: React.FC<{ ad: AdWine; me: User }> = ({
  ad,
  me,
}) => {
  // const [lazyMe, { data }] = useMeLazyQuery();

  const [saveAd] = useSaveAdMutation({
    // onCompleted: (data) => console.log(data),
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
  // React.useEffect(() => {
  //   lazyMe();
  // }, []);
  React.useEffect(() => {
    if (me.savedAds?.findIndex((adSaved) => adSaved._id === ad._id) === -1) {
      setIsFav(false);
    } else {
      setIsFav(true);
    }
  }, [me?.savedAds]);
  const handleClick = (id: string) => {
    void saveAd({ variables: { id } });
  };
  if (ad.postedBy._id !== me._id) {
    return (
      <IconButton aria-label='save' onClick={() => handleClick(ad._id)}>
        {isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    );
  }
  return null;
};
