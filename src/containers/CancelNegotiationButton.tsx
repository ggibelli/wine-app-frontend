import Button from '@material-ui/core/Button';
import * as React from 'react';
import { notification } from '../cache';
import { useDeleteNegotiationMutation } from '../generated/graphql';
import { updateRemovedNeg } from '../utils/updateCache';

export const CancelNegotiationButton: React.FC<{
  id: string;
  handleClose: () => void;
}> = ({ id, handleClose }) => {
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
    update: (cache, { data }) => {
      updateRemovedNeg(cache, data?.deleteNegotiation?.response);
    },
  });

  const handleCloseNegotiation = async () => {
    handleClose();
    await closeNegotiation({
      variables: { id },
    });
  };

  return (
    <Button
      aria-label='cancel-negotiation'
      disabled={loading}
      onClick={handleCloseNegotiation}
    >
      Cancella la trattativa
    </Button>
  );
};
