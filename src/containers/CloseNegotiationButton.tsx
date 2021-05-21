import Button from '@material-ui/core/Button';
import * as React from 'react';
import { notification } from '../cache';
import { useUpdateNegotiationMutation } from '../generated/graphql';

export const CloseNegotiationButton: React.FC<{
  id: string;
  handleClose: () => void;
}> = ({ id, handleClose }) => {
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
    handleClose();
    await closeNegotiation({
      variables: { negotiation: { _id: id, isConcluded: true } },
    });
  };

  return (
    <Button
      aria-label='close-negotiation'
      disabled={loading}
      onClick={handleCloseNegotiation}
    >
      Dichiara chiusa la trattativa
    </Button>
  );
};
