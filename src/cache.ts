/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { InMemoryCache, makeVar } from '@apollo/client';
import { TypeAd, TypeProduct } from './generated/graphql';
// import { offsetLimitPagination } from '@apollo/client/utilities';
import _ from 'lodash';
export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    User: {
      fields: {
        ads: {
          keyArgs: false,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          merge(existing = [], incoming: any, { args: { offset = 0 } }) {
            if (offset === 0) {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-return
              return {
                __typeName: 'AdsResult',
                ads: incoming.ads,
                pageCount: incoming.pageCount,
              };
            }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            return {
              __typeName: 'AdsResult',
              ads: _.unionBy(existing.ads, incoming.ads, '__ref'),
              pageCount: incoming.pageCount,
            };
          },
        },
      },
    },
    Query: {
      fields: {
        ads: {
          // Don't cache separate results based on
          // any of this field's arguments.
          keyArgs: ['wineName', 'typeProduct', 'typeAd'],
          // Concatenate the incoming list items with
          // the existing list items.
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          merge(existing = [], incoming: any, { args: { offset = 0 } }) {
            if (offset === 0) {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-return
              return {
                __typeName: 'AdsResult',
                ads: incoming.ads,
                pageCount: incoming.pageCount,
              };
            }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            return {
              __typeName: 'AdsResult',
              ads: _.unionBy(existing.ads, incoming.ads, '__ref'),
              pageCount: incoming.pageCount,
            };
          },
        },
        negotiations: {
          keyArgs: false,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          merge(existing = [], incoming: any, { args: { offset = 0 } }) {
            if (offset === 0) {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-return
              return {
                __typeName: 'NegotiationResult',
                negotiations: incoming.negotiations,
                pageCount: incoming.pageCount,
              };
            }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            return {
              __typeName: 'NegotiationResult',
              negotiations: _.unionBy(
                existing.negotiations,
                incoming.negotiations,
                '__ref'
              ),
              pageCount: incoming.pageCount,
            };
          },
        },
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

interface MyInfo {
  _id: string;
  firstName: string;
  lastName: string;
}

export const myInfo = makeVar<MyInfo | null>(null);

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
