import * as React from 'react';
import {
  MeQuery,
  Exact,
  useIsUserLoggedInQuery,
} from '../../generated/graphql';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, DrawerData } from './Drawer';
import { Notification } from '../Notification';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import { LoginModal } from '../LoginModal';
import Link from '@material-ui/core/Link';
import { Link as RouterLink, navigate } from '@reach/router';
import Box from '@material-ui/core/Box';
import { LazyQueryResult } from '@apollo/client';
import { Badge } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export const HeaderBar: React.FC<{
  meQueryResult: LazyQueryResult<
    MeQuery,
    Exact<{
      [key: string]: never;
    }>
  >;
  onSubmitLogin: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
}> = ({ meQueryResult, onSubmitLogin }) => {
  const classes = useStyles();
  const [state, setState] = React.useState(false);
  const toggleDrawer = () => {
    setState(!state);
  };
  const [openModal, setOpenModal] = React.useState(false);
  const badgeNumber = meQueryResult.data?.me?.messages?.length
    ? meQueryResult.data?.me?.messages?.filter(
        (message) =>
          !message.isViewed &&
          message.sentBy._id !== meQueryResult.data?.me?._id
      ).length
    : 0;
  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  const onSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    await onSubmitLogin({
      email: email,
      password: password,
    });
    handleClose();
  };
  const loggedUser = useIsUserLoggedInQuery();
  const myReviews = meQueryResult.data?.me?.reviews?.length
    ? meQueryResult.data?.me?.reviews?.filter(
        (r) => r.forUser._id === meQueryResult.data?.me?._id
      )
    : null;
  const reducedReview = myReviews?.length
    ? //@ts-expect-error I didn't understand the error????
      (myReviews.reduce((acc, val) => val.rating + acc.rating) as number)
    : null;
  const rating = reducedReview
    ? reducedReview / (myReviews?.length as number)
    : null;
  const drawerData: DrawerData = {
    isLoading: meQueryResult.loading,
    error: meQueryResult.error,
    data: {
      numAds: meQueryResult.data?.me?.ads?.length,
      numOpenNegs: meQueryResult.data?.me?.negotiations?.filter(
        (neg) => neg && !neg.isConcluded
      ).length,
      numClosedNegs: meQueryResult.data?.me?.negotiations?.filter(
        (neg) => neg && neg.isConcluded
      ).length,
      savedAds: meQueryResult.data?.me?.savedAds?.length,
      name: meQueryResult.data?.me?.firstName,
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      rating,
    },
  };

  const SigninButton = () => {
    if (loggedUser.data?.isLoggedIn) {
      return (
        <IconButton onClick={() => navigate('/messaggi')}>
          <Badge badgeContent={badgeNumber} color='secondary'>
            <ChatOutlinedIcon fontSize='large' style={{ color: '#fff' }} />
          </Badge>
        </IconButton>
      );
    }
    return <Button onClick={handleClickOpen}>Log in</Button>;
  };

  const MenuButton = () => (
    <IconButton
      edge='start'
      className={classes.menuButton}
      color='inherit'
      aria-label='menu'
      onClick={toggleDrawer}
    >
      <MenuIcon />
    </IconButton>
  );
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          {loggedUser.data?.isLoggedIn ? MenuButton() : null}
          <Drawer state={state} toggleDrawer={toggleDrawer} data={drawerData} />
          <Link
            className={classes.title}
            component={RouterLink}
            to='/'
            style={{ textDecoration: 'none' }}
          >
            <Box>
              <Typography color='textSecondary' variant='h4'>
                LOGO
              </Typography>
            </Box>
          </Link>
          <SigninButton />
        </Toolbar>
      </AppBar>
      <Notification />
      <LoginModal
        handleClose={handleClose}
        open={openModal}
        onSubmit={onSubmit}
      />
    </div>
  );
};
