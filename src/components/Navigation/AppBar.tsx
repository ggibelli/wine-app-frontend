import * as React from 'react';
import {
  useLoginMutation,
  useMeLazyQuery,
  useIsUserLoggedInQuery,
} from '../../generated/graphql';
import { isLoggedInVar, notification } from '../../cache';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, DrawerData } from './Drawer';
import { Notification } from '../Notification';
import { LogoutButton } from './LogoutButton';
import { LoginModal } from '../LoginModal';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from '@reach/router';
import Box from '@material-ui/core/Box';

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

export const HeaderBar: React.FC = () => {
  const classes = useStyles();
  const [state, setState] = React.useState(false);
  const toggleDrawer = () => {
    setState(!state);
  };
  const [openModal, setOpenModal] = React.useState(false);

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
    await loginMutation({
      variables: {
        email: email,
        password: password,
      },
    });
  };
  const loggedUser = useIsUserLoggedInQuery();
  React.useEffect(() => {
    if (loggedUser.data?.isLoggedIn) {
      lazyQuery();
    }
  }, [loggedUser.data?.isLoggedIn]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [lazyQuery, result] = useMeLazyQuery();
  const [loginMutation] = useLoginMutation({
    onError: (error) =>
      notification({
        type: 'error',
        message: error.message,
      }),
    onCompleted: ({ login }) => {
      if (login?.errors?.length === 0) {
        localStorage.setItem(
          'wineapp-user-token',
          login?.response?.token as string
        );
        isLoggedInVar(true);
        notification({
          type: 'success',
          message: 'welcome back',
        });
        lazyQuery();
      }
      if (login?.errors?.length) {
        notification({
          type: 'error',
          message: 'errore',
        });
      }
      handleClose();
    },
  });

  const drawerData: DrawerData = {
    isLoading: result.loading,
    error: result.error,
    data: {
      numAds: result.data?.me?.ads?.pageCount,
      numNegs: result.data?.me?.negotiations?.pageCount,
      savedAds: result.data?.me?.savedAds?.length,
      name: result.data?.me?.firstName,
    },
  };

  const SigninButton = () => {
    if (loggedUser.data?.isLoggedIn) {
      return <LogoutButton />;
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
