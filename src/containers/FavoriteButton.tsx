import * as React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useSaveAdMutation, useMyInfoQuery } from '../generated/graphql';
import { updateCacheSaveAd } from '../utils/updateCache';
import { useLocation } from '@reach/router';

type FontSize = 'small' | 'inherit' | 'default' | 'large';

export const FavoriteButton: React.FC<{
  id: string;
  timesFavorite: number;
  fontSize?: FontSize;
}> = ({ id, fontSize = 'default', timesFavorite }) => {
  const { pathname } = useLocation();
  const { data } = useMyInfoQuery();
  const [saveAd] = useSaveAdMutation({
    variables: { id },
    onCompleted: () => {
      setIsFav(!isFav);
    },
    onError: (error) => console.error(error),
    update: (cache, { data }) => {
      if (pathname === '/salvati') {
        setTimeout(() => updateCacheSaveAd(cache, data?.saveAd?.response), 500);
      } else {
        updateCacheSaveAd(cache, data?.saveAd?.response);
      }
    },
  });
  const [stop, setStop] = React.useState<boolean>(false);
  const [isFav, setIsFav] = React.useState<boolean>(
    data?.myInfo?.savedAds?.map((ad) => ad._id).includes(id) || false,
  );
  React.useEffect(() => {
    if (data?.myInfo?.savedAds && !stop) {
      setIsFav(
        data?.myInfo?.savedAds?.map((ad) => ad._id).includes(id) || false,
      );
      setStop(true);
    }
  }, [data]);

  return (
    <IconButton
      color='primary'
      aria-label='save'
      onClick={() => saveAd()}
      size='small'
    >
      {isFav ? (
        <FavoriteIcon fontSize={fontSize} />
      ) : (
        <FavoriteBorderIcon fontSize={fontSize} />
      )}
      {timesFavorite}
    </IconButton>
  );
};
