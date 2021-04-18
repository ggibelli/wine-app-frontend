import * as React from 'react';
import { StyledBox } from '../../containers/StyledBox';
import Typography from '@material-ui/core/Typography';
import { ReviewDetailsFragment, TypeAd } from '../../generated/graphql';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { myInfo } from '../../cache';
import Rating from '@material-ui/lab/Rating';

export const CardReview: React.FC<{ review: ReviewDetailsFragment | null }> = ({
  review,
}) => {
  const me = myInfo();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const width = matches ? 400 : 250;
  const isBuy = review?.type === TypeAd.Buy ? true : false;
  const isMyReview = review?.createdBy._id === me?._id ? true : false;
  if (!review) return null;
  return (
    <StyledBox width={width} typeAd={review.type}>
      <Rating name='read-only' value={review.rating} readOnly precision={0.1} />

      <Typography
        align='left'
        variant='h6'
        color={isBuy ? 'textSecondary' : 'primary'}
      >
        {isMyReview
          ? `Cosa hai detto riguardante la cantina ${review.forUser.firstName}`
          : `La cantina ${review.createdBy.firstName} dice di te`}
        :
      </Typography>
      <br />
      <Typography
        align='left'
        variant='body1'
        color={isBuy ? 'textSecondary' : 'primary'}
      >
        {review.content}
      </Typography>
    </StyledBox>
  );
};
