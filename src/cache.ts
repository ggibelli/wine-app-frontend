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

export const notificationMessage = makeVar<string | undefined | null>(
  undefined
);

export const notificationType = makeVar<AlertStatus>(undefined);

export const drawerProfile = makeVar<DrawerProfile | undefined>(undefined);
