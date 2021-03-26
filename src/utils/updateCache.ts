/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-types */
import { ApolloCache, ApolloClient } from '@apollo/client';
import _ from 'lodash';
import { myInfo } from '../cache';
import {
  Ad,
  AdDocument,
  CreateNegotiationMutation,
  // Ad,
  // AdDocument,
  MeDocument,
  Message,
  MessagesDocument,
  Negotiation,
  NegotiationsOpenDocument,
  User,
} from '../generated/graphql';
import { ICachedMe } from '../pages/BuySell';

export interface ICachedDataNegotiations {
  negotiations: {
    negotiations: Negotiation[];
    pageCount: number;
  };
}

export interface ICachedMessages {
  messages: Message[];
}

export interface ICachedMessagesNegs {
  messagesForNegotiation: Message[];
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const updateCacheNegotiations = (
  client: ApolloClient<{}> | ApolloCache<CreateNegotiationMutation>,
  negotiation: Negotiation
) => {
  const adLocal: { ad: Ad } | null = _.cloneDeep(
    //@ts-expect-error error
    client.readQuery({
      query: AdDocument,
      variables: { id: negotiation.ad._id },
    })
  );
  if (adLocal) {
    adLocal.ad.activeNegotiations =
      (adLocal.ad.activeNegotiations as number) + 1;
    //@ts-expect-error error
    client.writeQuery({
      query: AdDocument,
      variables: { id: negotiation.ad._id },
      data: adLocal,
    });
  }
  const cachedDataMeLocal: ICachedMe | null = _.cloneDeep(
    //@ts-expect-error error
    client.readQuery({
      query: MeDocument,
    })
  );
  const cachedDataNegotiationsLocal: ICachedDataNegotiations | null = _.cloneDeep(
    //@ts-expect-error error
    client.readQuery({
      query: NegotiationsOpenDocument,
    })
  );

  cachedDataMeLocal?.me.negotiations?.negotiations?.push(negotiation);
  if (cachedDataMeLocal?.me.negotiations) {
    cachedDataMeLocal.me.negotiations.pageCount =
      (cachedDataMeLocal.me.negotiations.pageCount as number) + 1;
  }
  //@ts-expect-error error
  client.writeQuery({
    query: MeDocument,
    data: cachedDataMeLocal,
  });

  if (!cachedDataNegotiationsLocal) return;
  cachedDataNegotiationsLocal.negotiations.negotiations.push(negotiation);
  cachedDataNegotiationsLocal.negotiations.pageCount += 1;
  //@ts-expect-error error
  client.writeQuery({
    query: NegotiationsOpenDocument,
    data: cachedDataNegotiationsLocal,
  });
};

export const updateCacheMessagesAdmin = (client: ApolloClient<{}>) => {
  const me = myInfo();
  const cachedDataMessagesLocal: ICachedMessages | null = _.cloneDeep(
    client.readQuery({
      query: MessagesDocument,
    })
  );
  cachedDataMessagesLocal?.messages.push({
    isViewed: false,
    content: 'placeholder',
    negotiation: { _id: '605bd4166edd1f04a7764462' } as Negotiation,
    _id: 'placeholder',
    sentTo: { _id: me?._id } as User,
    sentBy: { firstName: 'Amministratore' } as User,
  });
  client.writeQuery({
    query: MessagesDocument,
    data: cachedDataMessagesLocal,
  });
};
