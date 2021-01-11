import { InMemoryCache, makeVar } from '@apollo/client';

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return isLoggedInVar();
          },
        },
        notification: {
          read() {
            return notification();
          },
        },
      },
    },
  },
});

export const isLoggedInVar = makeVar<boolean>(
  !!localStorage.getItem('wineapp-user-token')
);

type AlertStatus = 'success' | 'warning' | 'error' | 'info' | undefined;

interface DrawerProfile {
  name: string;
  negotiations: number;
  ads: number;
}

interface Notification {
  type: AlertStatus;
  message: string;
}

export const notification = makeVar<Notification | undefined>(undefined);

export const drawerProfile = makeVar<DrawerProfile | undefined>(undefined);
