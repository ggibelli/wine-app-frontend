import React from 'react';
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
import StoreIcon from '@material-ui/icons/Store';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link as RouterLink } from '@reach/router';
import { useStyleRating, StyledRating } from '../../utils/styleHook';
import Link from '@material-ui/core/Link';
import { isLoggedInVar } from '../../cache';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useApolloClient } from '@apollo/client';

export interface DrawerData {
  data?: {
    numAds?: number | null;
    numOpenNegs?: number | null;
    numClosedNegs?: number | null;
    savedAds?: number | null;
    name?: string | null;
    rating?: number | null;
  };
}

export const Drawer: React.FC<{
  state: boolean;
  toggleDrawer: () => void;
  data: DrawerData;
}> = ({ state, toggleDrawer, data }) => {
  const classes = useStyleRating();
  const client = useApolloClient();
  const handleCLick = async () => {
    isLoggedInVar(false);
    localStorage.removeItem('wineapp-user-token');
    localStorage.removeItem('wineapp-user-id');
    try {
      await client.resetStore();
    } catch (e) {
      console.log(e);
    }
  };
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
        <Link component={RouterLink} to='/recensioni'>
          <div className={classes.root}>
            <StyledRating
              name='read-only'
              value={data?.data?.rating}
              readOnly
              precision={0.1}
            />
            <Box>
              {data?.data?.rating ? `(${data?.data?.rating.toFixed(2)})` : null}
            </Box>
          </div>
        </Link>
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
            //@ts-expect-error followed MUI docs
            <RouterLink to={'/creati'} ref={ref} {...itemProps} />
          ))}
        >
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText
            primary={`Annunci pubblicati (${data.data?.numAds || 0})`}
          />
        </ListItem>
        <ListItem
          button
          // eslint-disable-next-line react/display-name
          component={React.forwardRef((itemProps, ref) => (
            //@ts-expect-error followed MUI docs
            <RouterLink to={'/trattative'} ref={ref} {...itemProps} />
          ))}
        >
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText
            primary={`Trattative in corso (${data.data?.numOpenNegs || 0})`}
          />
        </ListItem>
        <ListItem
          button
          // eslint-disable-next-line react/display-name
          component={React.forwardRef((itemProps, ref) => (
            //@ts-expect-error followed MUI docs
            <RouterLink to={'/salvati'} ref={ref} {...itemProps} />
          ))}
        >
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText
            primary={`Annunci salvati (${data.data?.savedAds || 0})`}
          />
        </ListItem>
        <Divider />
        <div data-testid='logout' className={classes.bottomPush}>
          <ListItem button onClick={handleCLick}>
            <ListItemIcon data-testid='logout-button'>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary='Esci' />
          </ListItem>
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
