import * as React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  })
);

export const Loading: React.FC = () => {
  const classes = useStyles();
  return (
    <Backdrop data-testid='loading' className={classes.backdrop} open>
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};
