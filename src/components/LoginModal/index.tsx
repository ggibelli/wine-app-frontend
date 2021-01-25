import * as React from 'react';
import { Link } from '@reach/router';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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
        <DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <LoginForm onSubmit={onSubmit} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Link to='/signup'>
            <Button color='primary' onClick={handleClose}>
              Sign Up
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
};
