/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-types */
import { ApolloCache, ApolloClient, gql, MutationResult } from '@apollo/client';
import { cloneDeep } from 'lodash';
import { DeepExtractType } from 'ts-deep-extract-types';
import { myInfo, searchedWine } from '../cache';
import {
  AdsForUserDocument,
  AdsWineDocument,
  AdWine,
  CreateAdWineMutation,
  CreateMessageMutation,
  CreateNegotiationMutation,
  CreateReviewMutation,
  DeleteNegotiationMutation,
  FavoriteDocument,
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

interface ICachedDataMyAds {
  adsForUser: IAds;
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
  const cachedDataMeLocal: ICachedMe | null = cloneDeep(
    client.readQuery({
      query: MeDocument,
      variables: {},
    })
  );
  if (!cachedDataMeLocal) {
    return;
  }
  const cachedDataNegotiationsLocal: ICachedDataNegotiations | null = cloneDeep(
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
  client.writeQuery({
    query: MeDocument,
    variables: {},
    data: cachedDataMeLocal,
  });
  myInfo({ ...cachedDataMeLocal?.me });

  if (!cachedDataNegotiationsLocal) return;
  cachedDataNegotiationsLocal.negotiations.negotiations.push(
    negotiation as Negotiation
  );
  cachedDataNegotiationsLocal.negotiations.pageCount += 1;
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
  const cachedDataMessagesLocal: ICachedMessages | null = cloneDeep(
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

  const cachedDataMeLocal: ICachedMe | null = cloneDeep(
    client.readQuery({
      query: MeDocument,
    })
  );
  if (!cachedDataMeLocal) {
    return;
  }

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
  myInfo({ ...cachedDataMeLocal?.me });

  const cachedDataNegotiationsLocal: ICachedDataNegotiations | null = cloneDeep(
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
  const cachedDataAdsLocal: ICachedDataAds | null = cloneDeep(
    cache.readQuery({
      query: AdsWineDocument,
      variables: variablesCacheUpdate,
    })
  );
  const me = myInfo();
  const cachedDataMyAdsLocal: ICachedDataMyAds | null = cloneDeep(
    cache.readQuery({
      query: AdsForUserDocument,
      variables: {
        user: me?._id,
      },
    })
  );
  const cachedDataMeLocal: ICachedMe | null = cloneDeep(
    cache.readQuery({
      query: MeDocument,
    })
  );
  if (!cachedDataMeLocal) {
    return;
  }

  cachedDataMeLocal?.me.ads?.push(ad as AdWine);

  cache.writeQuery({
    query: MeDocument,
    data: cachedDataMeLocal,
  });
  myInfo({ ...cachedDataMeLocal?.me });

  if (cachedDataMyAdsLocal) {
    cachedDataMyAdsLocal.adsForUser.ads.push(ad as AdWine);
    cache.writeQuery({
      query: AdsForUserDocument,
      variables: {
        user: me?._id,
      },
      data: cachedDataMyAdsLocal,
    });
  }
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
  const cachedDataMeLocal: ICachedMe | null = cloneDeep(
    client.readQuery({
      query: MeDocument,
    })
  );
  if (!cachedDataMeLocal) {
    return;
  }
  cachedDataMeLocal?.me.messages?.push(message as Message);
  client.writeQuery({
    query: MeDocument,
    data: cachedDataMeLocal,
  });
  myInfo({ ...cachedDataMeLocal?.me });

  const cachedMessagesLocal: ICachedMessages | null = cloneDeep(
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
  const cachedMessagesNegotiationsLocal: ICachedMessagesNegs | null = cloneDeep(
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
  const cachedDataMeLocal: ICachedMe | null = cloneDeep(
    client.readQuery({
      query: MeDocument,
    })
  );
  if (!cachedDataMeLocal) {
    return;
  }
  cachedDataMeLocal?.me.reviews?.push(review as Review);
  client.writeQuery({
    query: MeDocument,
    data: cachedDataMeLocal,
  });
  myInfo({ ...cachedDataMeLocal?.me });
};

export const updateCacheSaveAd = (
  cache: ApolloCache<SaveAdMutation>,
  ad: MutationResult<
    DeepExtractType<SaveAdMutation, ['saveAd']>['response']
  >['data']
) => {
  const cachedDataMeLocal: ICachedMe | null = cloneDeep(
    cache.readQuery({
      query: MeDocument,
      variables: {}
    })
  );
  const cachedFavoriteLocal: ICachedMe | null = cloneDeep(
    cache.readQuery({
      query: FavoriteDocument,
      variables: {}
    })
  );
  const adCache: { savedTimes: number } | null = cloneDeep(
    cache.readFragment({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      id: `AdWine:${ad?._id}`,
      fragment: gql`
        fragment MyAd on AdWine {
          savedTimes
        }
      `,
    })
  );
  if ((!cachedDataMeLocal && !cachedFavoriteLocal) || !adCache) {
    return;
  }
  if (cachedDataMeLocal) {
    if (
    cachedDataMeLocal?.me.savedAds
      ?.map((ad) => ad._id)
      .includes(ad?._id as string)
  ) {
    const indexAd = cachedDataMeLocal?.me.savedAds.findIndex(
      (adSaved) => adSaved._id === ad?._id
    );
    cachedDataMeLocal?.me.savedAds.splice(indexAd, 1);
    adCache.savedTimes -= 1;
  } else if (cachedDataMeLocal?.me.savedAds) {
    cachedDataMeLocal?.me.savedAds.push(ad as AdWine);
    adCache.savedTimes += 1;
  }
  
  cache.writeQuery({ query: MeDocument, data: cachedDataMeLocal });
  myInfo({ ...cachedDataMeLocal?.me });
  } else if (cachedFavoriteLocal) {
    if (
    cachedFavoriteLocal?.me.savedAds
      ?.map((ad) => ad._id)
      .includes(ad?._id as string)
  ) {
    const indexAd = cachedFavoriteLocal?.me.savedAds.findIndex(
      (adSaved) => adSaved._id === ad?._id
    );
    cachedFavoriteLocal?.me.savedAds.splice(indexAd, 1);
    adCache.savedTimes -= 1;
  } else if (cachedFavoriteLocal?.me.savedAds) {
    cachedFavoriteLocal?.me.savedAds.push(ad as AdWine);
    adCache.savedTimes += 1;
  }
  
  cache.writeQuery({ query: FavoriteDocument, data: cachedFavoriteLocal });
  myInfo({ ...cachedFavoriteLocal?.me });
  }
  // let times: number;
  
  cache.writeFragment({
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    id: `AdWine:${ad?._id}`,
    fragment: gql`
      fragment MyAd on AdWine {
        savedTimes
      }
    `,
    data: adCache,
  });
};

export const updateRemovedNeg = (
  client: ApolloCache<DeleteNegotiationMutation>,
  negotiation: MutationResult<
    DeepExtractType<
      DeleteNegotiationMutation,
      ['deleteNegotiation']
    >['response']
  >['data']
): void => {
  const cachedDataMeLocal: ICachedMe | null = cloneDeep(
    client.readQuery({
      query: MeDocument,
      variables: {},
    })
  );
  if (!cachedDataMeLocal) {
    return;
  }
  const cachedDataNegotiationsLocal: ICachedDataNegotiations | null = cloneDeep(
    client.readQuery({
      query: NegotiationsDocument,
      variables: {},
    })
  );

  cachedDataMeLocal.me.negotiations = cachedDataMeLocal.me.negotiations?.filter(
    (n) => n._id !== negotiation?._id
  );
  client.writeQuery({
    query: MeDocument,
    variables: {},
    data: cachedDataMeLocal,
  });
  myInfo({ ...cachedDataMeLocal?.me });

  if (!cachedDataNegotiationsLocal) return;
  cachedDataNegotiationsLocal.negotiations.negotiations =
    cachedDataNegotiationsLocal.negotiations.negotiations.filter(
      (n) => n._id !== negotiation?._id
    );
  cachedDataNegotiationsLocal.negotiations.pageCount -= 1;
  client.writeQuery({
    query: NegotiationsDocument,
    variables: {},
    data: cachedDataNegotiationsLocal,
  });
};
