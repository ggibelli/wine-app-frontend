/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-types */
import { ApolloCache, ApolloClient } from '@apollo/client';
import _ from 'lodash';
import {
  Ad,
  AdDocument,
  // Ad,
  // AdDocument,
  MeDocument,
  Negotiation,
  NegotiationsDocument,
} from '../generated/graphql';
import { ICachedMe } from '../pages/BuySell';

export interface ICachedDataNegotiations {
  negotiations: {
    negotiations: Negotiation[];
    pageCount: number;
  };
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const updateCacheNegotiations = (
  client: ApolloClient<object> | ApolloCache<any>,
  negotiation: Negotiation
) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const adLocal: { ad: Ad } = _.cloneDeep(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    client.readQuery({
      query: AdDocument,
      variables: { id: negotiation.ad._id },
    })
  );
  if (adLocal) {
    adLocal.ad.activeNegotiations =
      (adLocal.ad.activeNegotiations as number) + 1;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    client.writeQuery({
      query: AdDocument,
      variables: { id: negotiation.ad._id },
      data: adLocal,
    });
  }
  const cachedDataMeLocal: ICachedMe | null = _.cloneDeep(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    client.readQuery({
      query: MeDocument,
    })
  );
  const cachedDataNegotiationsLocal: ICachedDataNegotiations | null = _.cloneDeep(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    client.readQuery({
      query: NegotiationsDocument,
    })
  );
  cachedDataMeLocal?.me.negotiations?.negotiations?.push(negotiation);
  if (cachedDataMeLocal?.me.negotiations) {
    cachedDataMeLocal.me.negotiations.pageCount =
      (cachedDataMeLocal.me.negotiations.pageCount as number) + 1;
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  client.writeQuery({
    query: MeDocument,
    data: cachedDataMeLocal,
  });

  if (!cachedDataNegotiationsLocal) return;
  cachedDataNegotiationsLocal.negotiations.negotiations.push(negotiation);
  cachedDataNegotiationsLocal.negotiations.pageCount += 1;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  client.writeQuery({
    query: NegotiationsDocument,
    data: cachedDataNegotiationsLocal,
  });
};
