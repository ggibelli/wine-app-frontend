import * as React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useSaveAdMutation, useMyInfoQuery } from '../generated/graphql';
import { updateCacheSaveAd } from '../utils/updateCache';

type FontSize = 'small' | 'inherit' | 'default' | 'large';

export const FavoriteButton: React.FC<{
  id: string;
  fontSize?: FontSize;
}> = ({ id, fontSize = 'default' }) => {
  const { data } = useMyInfoQuery();
  const [saveAd] = useSaveAdMutation({
    variables: { id: id },
    onCompleted: () => {
      setIsFav(!isFav);
    },
    onError: (error) => console.log(error),
    update: (cache, { data }) => {
      updateCacheSaveAd(cache, data?.saveAd?.response);
    },
  });
  const [stop, setStop] = React.useState<boolean>(false);
  const [isFav, setIsFav] = React.useState<boolean>(
    data?.myInfo?.savedAds?.map((ad) => ad._id).includes(id) || false
  );
  React.useEffect(() => {
    if (data?.myInfo?.savedAds && !stop) {
      setIsFav(
        data?.myInfo?.savedAds?.map((ad) => ad._id).includes(id) || false
      );
      setStop(true);
    }
  }, [data]);
  console.log(data);

  return (
    <IconButton aria-label='save' onClick={() => saveAd()}>
      {isFav ? (
        <FavoriteIcon fontSize={fontSize} />
      ) : (
        <FavoriteBorderIcon fontSize={fontSize} />
      )}
    </IconButton>
  );
};
