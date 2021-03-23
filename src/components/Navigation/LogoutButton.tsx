import * as React from 'react';
import { isLoggedInVar } from '../../cache';
import { useApolloClient } from '@apollo/client';
// import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

export const LogoutButton: React.FC = () => {
  const client = useApolloClient();
  const handleCLick = () => {
    client.cache.gc();

    // Remove user details from localStorage.
    localStorage.removeItem('wineapp-user-token');
    //localStorage.removeItem('userId');

    // Let other parts of the application that are relying on logged in
    // state know we're now logged out.
    isLoggedInVar(false);
  };
  return (
    <div onClick={handleCLick}>
      <Divider />
      <ListItem button>
        <ListItemIcon data-testid='logout-button'>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary='Esci' />
      </ListItem>
    </div>
    // <Button
    //   variant='contained'
    //   data-testid='logout-button'
    //   onClick={() => {
    //     client.cache.gc();

    //     // Remove user details from localStorage.
    //     localStorage.removeItem('wineapp-user-token');
    //     //localStorage.removeItem('userId');

    //     // Let other parts of the application that are relying on logged in
    //     // state know we're now logged out.
    //     isLoggedInVar(false);
    //   }}
    // >
    //   Logout{' '}
    // </Button>
  );
};
