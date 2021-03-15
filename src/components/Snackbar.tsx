import * as React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    snackbarStyle: {
      backgroundColor: '#6d1331',
      '&:hover': {
        backgroundColor: 'rgb(100, 10, 40)',
        cursor: 'pointer',
      },
    },
  })
);
interface SnackbarProps {
  setOpen: (arg0: boolean) => void;
  open: boolean;
  onClick: () => void;
}

export const SnackbarAds: React.FC<SnackbarProps> = (props) => {
  const classes = useStyles();

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      props.setOpen(false);
      return;
    }

    props.setOpen(false);
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        color='primary'
        open={props.open}
        autoHideDuration={6000}
        onClose={handleClose}
        onClick={props.onClick}
        ContentProps={{
          className: classes.snackbarStyle,
        }}
        message='Vuoi creare un annuncio?'
      />
    </>
  );
};
