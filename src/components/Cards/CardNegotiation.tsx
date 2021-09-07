import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from '@reach/router';
import { NegotiationDetailsFragment } from '../../generated/graphql';
import { TypeAd } from '../../generated/graphql';
import Button from '@material-ui/core/Button';
import { useTheme, useMediaQuery } from '@material-ui/core';
import { StyledBox } from '../../containers/StyledBox';
import { useStyles } from '../../utils/styleHook';
// import { Grid } from '@material-ui/core';
import { CreateReviewModal } from '../ReviewModal';
import { myInfo } from '../../cache';
import { CloseNegotiationModal } from '../NegotiationModals/CloseNegotiationModal';

export const CardNegotiation: React.FC<{
  negotiation: NegotiationDetailsFragment;
}> = ({ negotiation }) => {
  const me = myInfo();
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const width = matches ? 400 : 250;
  const isBuy = negotiation.type === TypeAd.Buy ? true : false;
  const isReviewed =
    negotiation.review?.findIndex(
      (review) => review?.createdBy._id === me?._id
    ) !== -1;
  return (
    <StyledBox width={width} typeAd={negotiation.type}>
      <Link
        aria-label='link-negotiation'
        component={RouterLink}
        to={`/trattative/${negotiation._id}`}
        style={{ textDecoration: 'none' }}
      >
        <Typography
          component='h5'
          variant='h6'
          color={isBuy ? 'textSecondary' : 'primary'}
        >
          {isBuy ? 'Compro' : 'Vendo'}{' '}
          {negotiation.ad.__typename === 'AdWine' && negotiation.ad.wineName}{' '}
          {/* {ad.wine.denominazioneZona} */}
        </Typography>
        <Typography
          align='left'
          variant='body1'
          color={isBuy ? 'textSecondary' : 'primary'}
        >
          Aperta da: cantina {negotiation.createdBy.firstName}
          <br />
          Per cantina: {negotiation.forUserAd.firstName}
          <br />
          {negotiation.isConcluded ? 'Trattativa conclusa' : null}
        </Typography>
        <br />
      </Link>
      <Typography
        data-testid='published'
        align='right'
        variant='caption'
        color={isBuy ? 'textSecondary' : 'primary'}
      >
        Trattativa aperta: {negotiation.dateCreated}
      </Typography>

      {negotiation.isConcluded ? (
        <>
          <br />
          <Typography
            align='right'
            variant='caption'
            color={isBuy ? 'textSecondary' : 'primary'}
          >
            Trattativa conclusa: {negotiation.dateConcluded}
          </Typography>
        </>
      ) : null}

      <div>
        <br />
        {negotiation.isConcluded ? (
          !isReviewed ? (
            <CreateReviewModal
              idNegotiation={negotiation._id}
              type={negotiation.type}
              idUser={negotiation.forUserAd._id}
            />
          ) : null
        ) : (
          // <div onClick={handleClick}>
          //   {' '}
          <CloseNegotiationModal isBuy={isBuy} id={negotiation._id} />
        )}

        <Button
          style={{ marginTop: 5 }}
          fullWidth
          className={isBuy ? classes.buyButton : classes.sellButton}
          color='primary'
          component={RouterLink}
          to={`/messaggi/${negotiation._id}`}
        >
          Apri la chat
        </Button>
      </div>
    </StyledBox>
  );
};
