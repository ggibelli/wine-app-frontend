import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from '@reach/router';
import {
  AdWine,
  Negotiation,
  NegotiationInputUpdate,
} from '../generated/graphql';
import { TypeAd } from '../generated/graphql';
import Button from '@material-ui/core/Button';
import { useTheme, useMediaQuery } from '@material-ui/core';
import { StyledBox } from './StyledBox';

export interface NegotiationWine extends Negotiation {
  ad: AdWine;
}

export const CardNegotiation: React.FC<{
  negotiation: NegotiationWine;
  handleCloseNeg: (negotiation: NegotiationInputUpdate) => Promise<void>;
}> = ({ negotiation, handleCloseNeg }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const width = matches ? 400 : 250;
  const [showCloseNeg, setShowCloseNeg] = React.useState<boolean>(true);
  const handleClick = () => {
    void handleCloseNeg({ _id: negotiation._id, isConcluded: true });
    setShowCloseNeg(false);
  };
  return (
    <StyledBox width={width} typeAd={negotiation.type}>
      <Link
        component={RouterLink}
        to={`/trattative/${negotiation._id}`}
        style={{ textDecoration: 'none' }}
      >
        <Typography
          component='h5'
          variant='h6'
          color={negotiation.type === TypeAd.Sell ? 'primary' : 'textSecondary'}
        >
          {negotiation.type === TypeAd.Buy ? 'Compro' : 'Vendo'}{' '}
          {negotiation.ad.wineName} {/* {ad.wine.denominazioneZona} */}
        </Typography>
        <Typography
          align='left'
          variant='body1'
          color={negotiation.type === TypeAd.Sell ? 'primary' : 'textSecondary'}
        >
          Aperta da: {negotiation.createdBy._id}
          <br />
          Per cantina: {negotiation.forUserAd._id}
          <br />
          {negotiation.isConcluded ? 'Trattativa conclusa' : null}
        </Typography>
        <br />
        <Typography
          align='right'
          variant='caption'
          color={negotiation.type === TypeAd.Sell ? 'primary' : 'textSecondary'}
        >
          Trattativa aperta il {negotiation.dateCreated}
        </Typography>
      </Link>
      {negotiation.isConcluded || !showCloseNeg ? null : (
        <Button onClick={handleClick}> Dichiara chiusa la trattativa</Button>
      )}

      <Button component={RouterLink} to={`/messaggi/${negotiation._id}`}>
        {negotiation.messages?.length ? 'Continua' : 'Apri'} la chat
      </Button>
    </StyledBox>
  );
};
