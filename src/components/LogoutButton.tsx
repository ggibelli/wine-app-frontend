import * as React from 'react';
import { isLoggedInVar } from '../cache';
import { useApolloClient } from '@apollo/client';
import { Button } from '@chakra-ui/react';
export const LogoutButton: React.FC = () => {
  const client = useApolloClient();
  return (
    <Button
      data-testid='logout-button'
      onClick={() => {
        // Since we're logging out, remove all traces of the current user
        // from the cache. First use `cache.evict()` to remove the stored
        // `me` reference that was added to the cache by the `GET_MY_TRIPS`
        // query in `profile.tsx`. Then trigger garbage collection using
        // `cache.gc()` to remove the cached `User` object that is no longer
        // reachable.
        client.cache.evict({ fieldName: 'me' });
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
