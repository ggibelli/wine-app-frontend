import * as React from 'react';
import { isLoggedInVar } from '../../cache';
import { useApolloClient } from '@apollo/client';
import Button from '@material-ui/core/Button';
export const LogoutButton: React.FC = () => {
  const client = useApolloClient();
  return (
    <Button
      variant='contained'
      data-testid='logout-button'
      onClick={() => {
        client.cache.gc();

        // Remove user details from localStorage.
        localStorage.removeItem('wineapp-user-token');
        //localStorage.removeItem('userId');

        // Let other parts of the application that are relying on logged in
        // state know we're now logged out.
        isLoggedInVar(false);
      }}
    >
      Logout{' '}
    </Button>
  );
};
