/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-types */
import { ApolloCache, ApolloClient, MutationResult } from '@apollo/client';
import _ from 'lodash';
import { DeepExtractType } from 'ts-deep-extract-types';
import { myInfo, searchedWine } from '../cache';
import {
  AdsWineDocument,
  AdWine,
  CreateAdWineMutation,
  CreateMessageMutation,
  CreateNegotiationMutation,
  CreateReviewMutation,
  MeDocument,
  Message,
  MessagesDocument,
  MessagesNegotiationDocument,
  Negotiation,
  NegotiationsDocument,
  Review,
  SaveAdMutation,
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
  >['data'],
  isSubscription = false
): void => {
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
      query: NegotiationsDocument,
      variables: {},
    })
  );

  cachedDataMeLocal?.me.negotiations?.push(negotiation as Negotiation);
  if (isSubscription) {
    cachedDataMeLocal?.me.messages?.push({
      isViewed: false,
      //@ts-expect-error it does not matter if the sentBy is not complete
      sentBy: { _id: 'placeHolder' },
    });
  }
  //@ts-expect-error error
  client.writeQuery({
    query: MeDocument,
    variables: {},
    data: cachedDataMeLocal,
  });

  if (!cachedDataNegotiationsLocal) return;
  cachedDataNegotiationsLocal.negotiations.negotiations.push(
    negotiation as Negotiation
  );
  cachedDataNegotiationsLocal.negotiations.pageCount += 1;
  //@ts-expect-error error
  client.writeQuery({
    query: NegotiationsDocument,
    variables: {},
    data: cachedDataNegotiationsLocal,
  });
};

export const updateCacheMessagesAdmin = (
  client: ApolloClient<{}>,
  negotiation: MutationResult<
    DeepExtractType<CreateAdWineMutation, ['createAd']>['response']
  >['data']
): void => {
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
    dateSent: new Date().toISOString(),
  });
  client.writeQuery({
    query: MessagesDocument,
    data: cachedDataMessagesLocal,
  });

  const cachedDataMeLocal: ICachedMe | null = _.cloneDeep(
    client.readQuery({
      query: MeDocument,
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
  });
  const cachedDataNegotiationsLocal: ICachedDataNegotiations | null = _.cloneDeep(
    client.readQuery({
      query: NegotiationsDocument,
    })
  );
  if (!cachedDataNegotiationsLocal) return;
  cachedDataNegotiationsLocal?.negotiations.negotiations.filter(
    (neg) => neg.ad._id !== negotiation?._id
  );
  client.writeQuery({
    query: NegotiationsDocument,
    data: cachedDataNegotiationsLocal,
  });
};

export const updateCacheAd = (
  cache: ApolloCache<CreateAdWineMutation>,
  ad: MutationResult<
    DeepExtractType<CreateAdWineMutation, ['createAd']>['response']
  >['data']
): void => {
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
  client: ApolloClient<object>,
  message: MutationResult<
    DeepExtractType<CreateMessageMutation, ['createMessage']>['response']
  >['data']
): void => {
  const cachedDataMeLocal: ICachedMe | null = _.cloneDeep(
    client.readQuery({
      query: MeDocument,
    })
  );
  cachedDataMeLocal?.me.messages?.push(message as Message);
  client.writeQuery({
    query: MeDocument,
    data: cachedDataMeLocal,
  });
  const cachedMessagesLocal: ICachedMessages | null = _.cloneDeep(
    client.readQuery({
      query: MessagesDocument,
    })
  );
  cachedMessagesLocal?.messages.push(message as Message);
  client.writeQuery({
    query: MessagesDocument,
    variables: { id: message?.negotiation._id },
    data: cachedMessagesLocal,
  });
  const cachedMessagesNegotiationsLocal: ICachedMessagesNegs | null = _.cloneDeep(
    client.readQuery({
      query: MessagesNegotiationDocument,
      variables: { id: message?.negotiation._id },
    })
  );
  cachedMessagesNegotiationsLocal?.messagesForNegotiation.messages.unshift(
    message as Message
  );
  client.writeQuery({
    query: MessagesNegotiationDocument,
    variables: { id: message?.negotiation._id },
    data: cachedMessagesNegotiationsLocal,
  });
};

export const updateCacheReview = (
  client: ApolloClient<object>,
  review: MutationResult<
    DeepExtractType<CreateReviewMutation, ['createReview']>['response']
  >['data']
) => {
  const cachedDataMeLocal: ICachedMe | null = _.cloneDeep(
    client.readQuery({
      query: MeDocument,
    })
  );
  cachedDataMeLocal?.me.reviews?.push(review as Review);
  client.writeQuery({
    query: MeDocument,
    data: cachedDataMeLocal,
  });
};

export const updateCacheSaveAd = (
  cache: ApolloCache<SaveAdMutation>,
  ad: MutationResult<
    DeepExtractType<SaveAdMutation, ['saveAd']>['response']
  >['data']
) => {
  const cachedDataMeLocal: ICachedMe | null = _.cloneDeep(
    cache.readQuery({
      query: MeDocument,
    })
  );
  if (
    cachedDataMeLocal?.me.savedAds
      ?.map((ad) => ad._id)
      .includes(ad?._id as string)
  ) {
    const indexAd = cachedDataMeLocal?.me.savedAds.findIndex(
      (adSaved) => adSaved._id === ad?._id
    );
    cachedDataMeLocal?.me.savedAds.splice(indexAd, 1);
  } else if (cachedDataMeLocal?.me.savedAds) {
    cachedDataMeLocal?.me.savedAds.push(ad as AdWine);
  }
  cache.writeQuery({ query: MeDocument, data: cachedDataMeLocal });
};
