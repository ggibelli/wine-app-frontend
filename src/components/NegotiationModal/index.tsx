import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { AdWine } from '../../generated/graphql';

export const NegotiationModal: React.FC<{
  handleClose: () => void;
  open: boolean;
  ad: AdWine;
  createNegotiation: (arg0: AdWine) => void;
}> = ({ handleClose, open, ad, createNegotiation }) => {
  const handleClick = () => {
    createNegotiation(ad);
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
          <Button onClick={handleClick}> Apri la trattativa</Button>
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
