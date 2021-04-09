/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { InMemoryCache, makeVar } from '@apollo/client';
import { Address, TypeAd, TypeProduct } from './generated/graphql';
// import { offsetLimitPagination } from '@apollo/client/utilities';
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
              // It's unusual (probably a mistake) for a paginated field not
              // to receive any arguments, so you might prefer to throw an
              // exception here, instead of recovering by appending incoming
              // onto the existing array.
              // eslint-disable-next-line prefer-spread
              merged.push.apply(merged, incoming.ads);
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
          merge(existing = [], incoming) {
            // const merged = existing ? existing.ads.slice(0) : [];
            // if (args) {
            //   // Assume an offset of 0 if args.offset omitted.
            //   const { offset = 0 } = args;
            //   for (let i = 0; i < incoming.ads.length; ++i) {
            //     merged[(offset as number) + i] = incoming.ads[i];
            //   }
            // } else {
            //   // It's unusual (probably a mistake) for a paginated field not
            //   // to receive any arguments, so you might prefer to throw an
            //   // exception here, instead of recovering by appending incoming
            //   // onto the existing array.
            //   // eslint-disable-next-line prefer-spread
            //   merged.push.apply(merged, incoming.ads);
            // }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return {
              __typeName: 'AdsResult',
              ads: _.unionBy(existing.ads, incoming.ads, '__ref'),
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
              // It's unusual (probably a mistake) for a paginated field not
              // to receive any arguments, so you might prefer to throw an
              // exception here, instead of recovering by appending incoming
              // onto the existing array.
              // eslint-disable-next-line prefer-spread
              merged.push.apply(merged, incoming.messages);
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
          merge(existing = [], incoming) {
            // const merged = existing ? existing.negotiations.slice(0) : [];
            // if (args && !args.isConcluded) {
            //   // Assume an offset of 0 if args.offset omitted.
            //   const { offset = 0 } = args;
            //   for (let i = 0; i < incoming.negotiations.length; ++i) {
            //     merged[(offset as number) + i] = incoming.negotiations[i];
            //   }
            // } else {
            //   // It's unusual (probably a mistake) for a paginated field not
            //   // to receive any arguments, so you might prefer to throw an
            //   // exception here, instead of recovering by appending incoming
            //   // onto the existing array.
            //   // eslint-disable-next-line prefer-spread
            //   console.log(merged, incoming.negotiations);
            //   const negs = _.unionBy(merged, incoming.negotiations, '__ref');
            //   console.log(negs  );
            //   // merged.push(...negs);
            // }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
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

type AddressMyInfo = Omit<Address, 'via'>;

export const myInfo = makeVar<{
  _id: string | null;
  firstName?: string;
  address?: AddressMyInfo;
} | null>({ _id: localStorage.getItem('wineapp-user-id') });

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
