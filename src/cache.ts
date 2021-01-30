import { InMemoryCache, makeVar } from '@apollo/client';
import { TypeAd, TypeProduct } from './generated/graphql';

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
        searchedWine: {
          read() {
            return searchedWine();
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

interface WineSearched {
  typeAd: TypeAd;
  typeProduct: TypeProduct;
  wineName: string;
  harvest: number;
  abv: number;
  price: number;
  liters: number;
  isPost: boolean;
}

export const searchedWine = makeVar<WineSearched | undefined>(undefined);

interface Notification {
  type: AlertStatus;
  message: string;
}

export const notification = makeVar<Notification | undefined>(undefined);

export const drawerProfile = makeVar<DrawerProfile | undefined>(undefined);
