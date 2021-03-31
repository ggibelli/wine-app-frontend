/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-types */
import { ApolloCache, ApolloClient, MutationResult } from '@apollo/client';
import _ from 'lodash';
import { DeepExtractType } from 'ts-deep-extract-types';
import { myInfo, searchedWine } from '../cache';
import {
  Ad,
  AdDocument,
  AdsWineDocument,
  AdWine,
  CreateAdWineMutation,
  CreateMessageMutation,
  CreateNegotiationMutation,
  MeDocument,
  Message,
  MessagesDocument,
  MessagesNegotiationDocument,
  Negotiation,
  NegotiationsOpenDocument,
  User,
} from '../generated/graphql';

interface IAds {
  ads: Array<AdWine>;
  pageCount: number;
}

interface ICachedDataAds {
  ads: IAds;
}

export interface ICachedMe {
  me: User;
}

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
  messagesForNegotiation: {
    messages: Message[];
    pageCount: number;
  };
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const updateCacheNegotiations = (
  client: ApolloClient<{}> | ApolloCache<CreateNegotiationMutation>,
  negotiation: MutationResult<
    DeepExtractType<
      CreateNegotiationMutation,
      ['createNegotiation']
    >['response']
  >['data']
) => {
  console.log('updatecache');
  const adLocal: { ad: Ad } | null = _.cloneDeep(
    //@ts-expect-error error
    client.readQuery({
      query: AdDocument,
      variables: { id: negotiation?._id },
    })
  );
  if (adLocal) {
    adLocal.ad.activeNegotiations =
      (adLocal.ad.activeNegotiations as number) + 1;
    //@ts-expect-error error
    client.writeQuery({
      query: AdDocument,
      variables: { id: negotiation?.ad?._id },
      data: adLocal,
    });
  }
  const cachedDataMeLocal: ICachedMe | null = _.cloneDeep(
    //@ts-expect-error error
    client.readQuery({
      query: MeDocument,
      variables: {},
    })
  );
  const cachedDataNegotiationsLocal: ICachedDataNegotiations | null = _.cloneDeep(
    //@ts-expect-error error
    client.readQuery({
      query: NegotiationsOpenDocument,
      variables: {},
    })
  );

  cachedDataMeLocal?.me.negotiations?.push(negotiation as Negotiation);

  //@ts-expect-error error
  client.writeQuery({
    query: MeDocument,
    variables: {},
    data: cachedDataMeLocal,
  });
  console.log(cachedDataMeLocal);

  if (!cachedDataNegotiationsLocal) return;
  cachedDataNegotiationsLocal.negotiations.negotiations.push(
    negotiation as Negotiation
  );
  cachedDataNegotiationsLocal.negotiations.pageCount += 1;
  //@ts-expect-error error
  client.writeQuery({
    query: NegotiationsOpenDocument,
    variables: {},
    data: cachedDataNegotiationsLocal,
  });
};

export const updateCacheMessagesAdmin = (
  client: ApolloClient<{}>,
  negotiation: MutationResult<
    DeepExtractType<CreateAdWineMutation, ['createAd']>['response']
  >['data']
) => {
  // const me = myInfo();
  const cachedDataMessagesLocal: ICachedMessages | null = _.cloneDeep(
    client.readQuery({
      query: MessagesDocument,
    })
  );
  const me = myInfo();
  cachedDataMessagesLocal?.messages.push({
    isViewed: false,
    content: 'placeholder',
    negotiation: { _id: '605bd4166edd1f04a7764462' } as Negotiation,
    _id: 'placeholder',
    sentTo: { _id: me?._id } as User,
    sentBy: { firstName: 'Amministratore' } as User,
    dateSent: new Date(),
  });
  client.writeQuery({
    query: MessagesDocument,
    data: cachedDataMessagesLocal,
  });

  const cachedDataMeLocal: ICachedMe | null = _.cloneDeep(
    client.readQuery({
      query: MeDocument,
      variables: {},
    })
  );
  const indexNegToClose = cachedDataMeLocal?.me.negotiations?.findIndex(
    (neg) => neg.ad._id === negotiation?._id
  );
  if (
    indexNegToClose &&
    indexNegToClose >= 0 &&
    cachedDataMeLocal?.me.negotiations
  ) {
    cachedDataMeLocal.me.negotiations[indexNegToClose].isConcluded = true;
  }
  client.writeQuery({
    query: MeDocument,
    data: cachedDataMeLocal,
    variables: {},
  });
  const cachedDataNegotiationsLocal: ICachedDataNegotiations | null = _.cloneDeep(
    client.readQuery({
      query: NegotiationsOpenDocument,
      variables: {},
    })
  );
  if (!cachedDataNegotiationsLocal) return;
  cachedDataNegotiationsLocal?.negotiations.negotiations.filter(
    (neg) => neg.ad._id !== negotiation?._id
  );
  client.writeQuery({
    query: NegotiationsOpenDocument,
    data: cachedDataNegotiationsLocal,
    variables: {},
  });
};

export const updateCacheAd = (
  cache: ApolloCache<CreateAdWineMutation>,
  ad: MutationResult<
    DeepExtractType<CreateAdWineMutation, ['createAd']>['response']
  >['data']
) => {
  const searchedWineCache = searchedWine();
  const variablesCacheUpdate = {
    wineName: searchedWineCache?.wineName,
    typeProduct: searchedWineCache?.typeProduct,
    typeAd: searchedWineCache?.typeAd,
  };
  const cachedDataAdsLocal: ICachedDataAds | null = _.cloneDeep(
    cache.readQuery({
      query: AdsWineDocument,
      variables: variablesCacheUpdate,
    })
  );
  const cachedDataMeLocal: ICachedMe | null = _.cloneDeep(
    cache.readQuery({
      query: MeDocument,
    })
  );

  cachedDataMeLocal?.me.ads?.push(ad as AdWine);

  cache.writeQuery({
    query: MeDocument,
    data: cachedDataMeLocal,
  });

  if (!cachedDataAdsLocal) return;
  cachedDataAdsLocal.ads.ads.push(ad as AdWine);
  cachedDataAdsLocal.ads.pageCount += 1;
  cache.writeQuery({
    query: AdsWineDocument,
    variables: variablesCacheUpdate,
    data: cachedDataAdsLocal,
  });
};

export const updateCacheMessages = (
  client: ApolloClient<object> | ApolloCache<any>,
  message: MutationResult<
    DeepExtractType<CreateMessageMutation, ['createMessage']>['response']
  >['data']
) => {
  const cachedMessagesLocal: ICachedMessages | null = _.cloneDeep(
    //@ts-expect-errorasdasd
    client.readQuery({
      query: MessagesDocument,
    })
  );
  cachedMessagesLocal?.messages.push(message as Message);
  //@ts-expect-errorllll
  client.writeQuery({
    query: MessagesDocument,
    variables: { id: message?.negotiation._id },
    data: cachedMessagesLocal,
  });
  const cachedMessagesNegotiationsLocal: ICachedMessagesNegs | null = _.cloneDeep(
    //@ts-expect-errorasdasddsd
    client.readQuery({
      query: MessagesNegotiationDocument,
      variables: { id: message?.negotiation._id },
    })
  );
  cachedMessagesNegotiationsLocal?.messagesForNegotiation.messages.unshift(
    message as Message
  );
  //@ts-expect-errorasdasd
  client.writeQuery({
    query: MessagesNegotiationDocument,
    variables: { id: message?.negotiation._id },
    data: cachedMessagesNegotiationsLocal,
  });
};
