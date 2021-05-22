import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { CloseNegotiationButton } from '../../containers/CloseNegotiationButton';
import { CancelNegotiationButton } from '../../containers/CancelNegotiationButton';
import { useStyles } from '../../utils/styleHook';

export const CloseNegotiationModal: React.FC<{
  id: string;
  isBuy?: boolean;
  isMessage?: boolean;
}> = ({ id, isBuy, isMessage }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState<boolean>(false);
  const handleModal = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  isBuy = !!isMessage;
  return (
    <>
      <Button
        fullWidth
        aria-label='close-negotiation-popup'
        className={isBuy ? classes.buyButton : classes.sellButton}
        onClick={handleModal}
      >
        Chiudi trattativa
      </Button>
      <div style={{ display: 'none' }}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='close-negotiation'
        >
          <DialogContent>
            <CancelNegotiationButton id={id} handleClose={handleClose} />
            <CloseNegotiationButton id={id} handleClose={handleClose} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary'>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};
