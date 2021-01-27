import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { LoginForm } from './LoginForm';
export interface LoginData {
  email: string;
  password: string;
}
export const LoginModal: React.FC<{
  onSubmit: (values: LoginData) => void;
  handleClose: () => void;
  open: boolean;
}> = ({ handleClose, open, onSubmit }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogContent>
          <LoginForm onSubmit={onSubmit} onClose={handleClose} />
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
