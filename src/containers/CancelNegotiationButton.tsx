import Button from '@material-ui/core/Button';
import * as React from 'react';
import { notification } from '../cache';
import { useDeleteNegotiationMutation } from '../generated/graphql';
import { useStyles } from '../utils/styleHook';

export const CloseNegotiationButton: React.FC<{
  id: string;
  isBuy?: boolean;
}> = ({ id, isBuy }) => {
  const classes = useStyles();
  const [closeNegotiation, { loading }] = useDeleteNegotiationMutation({
    onCompleted: (closedNegotiation) => {
      if (closedNegotiation.deleteNegotiation?.errors?.length) {
        const errorMessages = closedNegotiation.deleteNegotiation?.errors.map(
          (error) => error?.text
        );
        notification({
          type: 'error',
          message: `${errorMessages.toString()}`,
        });
      } else {
        notification({
          message: 'trattativa cancellata con successo',
          type: 'info',
        });
      }
    },
    onError: (error) => notification({ type: 'error', message: error.message }),
  });

  const handleCloseNegotiation = async () => {
    await closeNegotiation({
      variables: { id },
    });
  };

  return (
    <Button
      aria-label='close-negotiation'
      className={isBuy ? classes.buyButton : classes.sellButton}
      disabled={loading}
      onClick={handleCloseNegotiation}
    >
      Cancella la trattativa
    </Button>
  );
};
