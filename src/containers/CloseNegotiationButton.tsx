import Button from '@material-ui/core/Button';
import * as React from 'react';
import { notification } from '../cache';
import { useUpdateNegotiationMutation } from '../generated/graphql';
import { useStyles } from '../utils/styleHook';

export const CloseNegotiationButton: React.FC<{
  id: string;
  isBuy?: boolean;
}> = ({ id, isBuy }) => {
  const classes = useStyles();
  const [closeNegotiation, { loading }] = useUpdateNegotiationMutation({
    onCompleted: (closedNegotiation) => {
      if (closedNegotiation.updateNegotiation?.errors?.length) {
        const errorMessages = closedNegotiation.updateNegotiation?.errors.map(
          (error) => error?.text
        );
        notification({
          type: 'error',
          message: `${errorMessages.toString()}`,
        });
      } else {
        notification({
          message: 'trattativa chiusa con successo',
          type: 'success',
        });
      }
    },

    onError: (error) => notification({ type: 'error', message: error.message }),
  });

  const handleCloseNegotiation = async () => {
    await closeNegotiation({
      variables: { negotiation: { _id: id, isConcluded: true } },
    });
  };

  return (
    <Button
      className={isBuy ? classes.buyButton : classes.sellButton}
      disabled={loading}
      onClick={handleCloseNegotiation}
    >
      Dichiara chiusa la trattativa
    </Button>
  );
};
