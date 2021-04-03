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
  onClick: () => void;
}

export const SnackbarAds: React.FC<SnackbarProps> = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      setOpen(false);
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        color='primary'
        open={open}
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
