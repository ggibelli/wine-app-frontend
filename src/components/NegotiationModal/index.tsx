import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

export const NegotiationModal: React.FC<{
  handleClose: () => void;
  open: boolean;
  createNegotiation: () => void;
}> = ({ handleClose, open, createNegotiation }) => {
  const handleClick = () => {
    createNegotiation();
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='open-negotiation'
      >
        <DialogContent>
          <Button aria-label='open-negotiation' onClick={handleClick}>
            Apri la trattativa
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
