import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Badge from '@material-ui/core/Badge';
import StoreIcon from '@material-ui/icons/Store';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { ApolloError } from '@apollo/client';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link as RouterLink } from '@reach/router';
import { LogoutButton } from './LogoutButton';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  bottomPush: {
    width: 250,
    position: 'fixed',
    bottom: 0,
    textAlign: 'center',
    paddingBottom: 10,
  },
});

export interface DrawerData {
  isLoading: boolean;
  error?: ApolloError;
  data?: {
    numAds?: number | null;
    numOpenNegs?: number | null;
    numClosedNegs?: number | null;

    savedAds?: number | null;
    name?: string | null;
  };
}

export const Drawer: React.FC<{
  state: boolean;
  toggleDrawer: () => void;
  data: DrawerData;
}> = ({ state, toggleDrawer, data }) => {
  const classes = useStyles();
  const list = () => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <Box component='fieldset' mb={3} pt={3} borderColor='transparent'>
        <Avatar>
          <AccountCircleIcon />
        </Avatar>
        <Typography color='primary' component='h1'>
          {data.data?.name}
        </Typography>
        <Rating name='read-only' value={5} readOnly />
      </Box>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary='Profilo' />
        </ListItem>
        <ListItem
          button
          // eslint-disable-next-line react/display-name
          component={React.forwardRef((itemProps, ref) => (
            //ts ignore because followed the mui docs
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            <RouterLink to={'/creati'} ref={ref} {...itemProps} />
          ))}
        >
          <ListItemIcon>
            <Badge badgeContent={data.data?.numAds} color='primary'>
              <AssignmentIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary='Annunci pubblicati' />
        </ListItem>
        <ListItem
          button
          // eslint-disable-next-line react/display-name
          component={React.forwardRef((itemProps, ref) => (
            //ts ignore because followed the mui docs
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            <RouterLink to={'/trattative'} ref={ref} {...itemProps} />
          ))}
        >
          <ListItemIcon>
            <Badge badgeContent={data.data?.numOpenNegs} color='primary'>
              <StoreIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary='Trattative in corso' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Badge badgeContent={data.data?.savedAds} color='primary'>
              <FavoriteIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary='Annunci salvati' />
        </ListItem>
        <Divider />
        <div className={classes.bottomPush}>
          <LogoutButton />
        </div>
      </List>
    </div>
  );

  return (
    <div>
      <SwipeableDrawer
        anchor='left'
        open={state}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
};
