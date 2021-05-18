import * as React from 'react';
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
import { Badge } from '@material-ui/core';
import { LazyQueryResult } from '@apollo/client';
import { MeQuery, Exact } from '../../generated/graphql';

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
  isLoggedIn: boolean;
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
}> = ({ onSubmitLogin, isLoggedIn, meQueryResult }) => {
  const classes = useStyles();
  const [state, setState] = React.useState<boolean>(false);
  const toggleDrawer = () => {
    setState(!state);
  };
  const me = meQueryResult.data?.me;
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const badgeNumber = me?.messages?.length
    ? me?.messages?.filter(
        (message) => !message.isViewed && message.sentBy._id !== me?._id
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
  const myReviews = me?.reviews?.length
    ? me?.reviews?.filter((r) => r.forUser._id === me?._id)
    : null;
  const reducedReview = myReviews?.length
    ? //@ts-expect-error I didn't understand the error????
      myReviews.reduce((acc, val) => ({
        rating: val.rating + acc.rating,
      }))
    : null;
  const rating = reducedReview
    ? reducedReview.rating / (myReviews?.length as number)
    : null;
  const drawerData: DrawerData = {
    data: {
      numAds: me?.ads?.length,
      numOpenNegs: me?.negotiations?.filter((neg) => neg && !neg.isConcluded)
        .length,
      numClosedNegs: me?.negotiations?.filter((neg) => neg && neg.isConcluded)
        .length,
      savedAds: me?.savedAds?.length,
      name: me?.firstName,
      rating,
    },
  };
  const SigninButton = () => {
    if (isLoggedIn) {
      return (
        <IconButton
          data-testid='messages'
          onClick={() => navigate('/messaggi')}
        >
          <Badge badgeContent={badgeNumber} color='secondary'>
            <ChatOutlinedIcon fontSize='large' style={{ color: '#fff' }} />
          </Badge>
        </IconButton>
      );
    }
    return (
      <Button color='inherit' onClick={handleClickOpen}>
        Log in
      </Button>
    );
  };

  const MenuButton = () => (
    <IconButton
      edge='start'
      className={classes.menuButton}
      color='inherit'
      aria-label='menu'
      onClick={toggleDrawer}
      data-testid='drawer'
    >
      <MenuIcon />
    </IconButton>
  );
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          {isLoggedIn ? MenuButton() : null}
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
