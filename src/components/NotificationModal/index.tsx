import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import { Loading } from '../Loading';

export const NotificationModal: React.FC<{
  open: boolean;
  handleClose: () => void;
  content?: string;
  loading: boolean;
}> = ({ open, handleClose, content }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>{'Notifica app'}</DialogTitle>
        <DialogContent>
          {/* {loading ? (
            <Loading />
          ) : ( */}
          <DialogContentText color='primary'>{content}</DialogContentText>
          {/* )} */}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color='primary'>
            Chiudi
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
