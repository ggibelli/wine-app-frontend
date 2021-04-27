/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { InMemoryCache, makeVar } from '@apollo/client';
import { QueryOrderBy, TypeAd, TypeProduct, User } from './generated/graphql';
import _ from 'lodash';

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        ads: {
          // Don't cache separate results based on
          // any of this field's arguments.
          keyArgs: ['wineName', 'typeProduct', 'typeAd'],
          merge(existing, incoming, { args }) {
            const merged = existing ? existing.ads.slice(0) : [];
            if (args) {
              // Assume an offset of 0 if args.offset omitted.
              const { offset = 0 } = args;
              for (let i = 0; i < incoming.ads.length; ++i) {
                merged[(offset as number) + i] = incoming.ads[i];
              }
            } else {
              throw new Error('Cache error');
            }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return {
              __typeName: 'AdsResult',
              ads: merged,
              pageCount: incoming.pageCount,
            };
          },
        },
        adsForUser: {
          keyArgs: ['user'],
          merge(existing = [], incoming, { args }) {
            let ads;
            const adsUnsorted = _.unionBy(existing.ads, incoming.ads, '__ref');
            if (args && args.orderBy === QueryOrderBy.CreatedAtDesc) {
              ads = _.orderBy(adsUnsorted, '__ref', ['desc']);
            } else if (args && args.orderBy === QueryOrderBy.CreatedAtAsc) {
              ads = _.orderBy(adsUnsorted, '__ref', ['asc']);
            } else {
              ads = adsUnsorted;
            }
            return {
              __typeName: 'AdsResult',
              ads: ads,
              pageCount: incoming.pageCount,
            };
          },
        },
        messagesForNegotiation: {
          keyArgs: ['negotiation'],
          merge(existing, incoming, { args }) {
            const merged = existing ? existing.messages.slice(0) : [];
            if (args) {
              // Assume an offset of 0 if args.offset omitted.
              const { offset = 0 } = args;
              for (let i = 0; i < incoming.messages.length; ++i) {
                merged[(offset as number) + i] = incoming.messages[i];
              }
            } else {
              throw new Error('Cache error');
            }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return {
              __typeName: 'MessageResult',
              messages: merged,
              pageCount: incoming.pageCount,
            };
          },
        },
        negotiations: {
          keyArgs: false,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          merge(existing = [], incoming, { args }) {
            let negotiations;
            const negotiationsUnsorted = _.unionBy(
              existing.negotiations,
              incoming.negotiations,
              '__ref'
            );
            if (args && args.orderBy === QueryOrderBy.CreatedAtDesc) {
              negotiations = _.orderBy(negotiationsUnsorted, '__ref', ['desc']);
            } else if (args && args.orderBy === QueryOrderBy.CreatedAtAsc) {
              negotiations = _.orderBy(negotiationsUnsorted, '__ref', ['asc']);
            } else {
              negotiations = negotiationsUnsorted;
            }
            return {
              __typeName: 'NegotiationResult',
              negotiations: negotiations,
              pageCount: incoming.pageCount,
            };
          },
        },
        reviews: {
          keyArgs: [],
          merge(existing, incoming, { args }) {
            const merged = existing ? existing.reviews.slice(0) : [];
            if (args) {
              // Assume an offset of 0 if args.offset omitted.
              const { offset = 0 } = args;
              for (let i = 0; i < incoming.reviews.length; ++i) {
                merged[(offset as number) + i] = incoming.reviews[i];
              }
            } else {
              throw new Error('Cache error');
            }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return {
              __typeName: 'ReviewResult',
              reviews: merged,
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
        myInfo: {
          read() {
            return myInfo();
          },
        },
      },
    },
  },
});

export const isLoggedInVar = makeVar<boolean>(
  !!localStorage.getItem('wineapp-user-token')
);

export const myInfo = makeVar<User | null>({
  _id: localStorage.getItem('wineapp-user-id'),
} as User);

type AlertStatus = 'success' | 'warning' | 'error' | 'info' | undefined;

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
