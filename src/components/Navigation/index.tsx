import { LazyQueryResult, useApolloClient } from '@apollo/client';
import _ from 'lodash';
// import _ from 'lodash';
import * as React from 'react';
import { notification } from '../../cache';
import {
  useNegotiationCreatedSubscription,
  useNegotiationClosedSubscription,
  useAdPostedFollowUpSubscription,
  Negotiation,
  MeQuery,
  Exact,
  Maybe,
  QueryOrderBy,
  MessagesQuery,
  useMessageSentSubscription,
  MessagesNegotiationDocument,
  Message,
  MessagesDocument,
} from '../../generated/graphql';
import {
  ICachedMessages,
  ICachedMessagesNegs,
  updateCacheMessagesAdmin,
  updateCacheNegotiations,
} from '../../utils/updateCache';
import { HeaderBar } from './AppBar';

export const Header: React.FC<{
  meQueryResult: LazyQueryResult<
    MeQuery,
    Exact<{
      offset?: Maybe<number> | undefined;
      orderBy?: Maybe<QueryOrderBy> | undefined;
      limit?: Maybe<number> | undefined;
    }>
  >;
  messages: LazyQueryResult<
    MessagesQuery,
    Exact<{
      [key: string]: never;
    }>
  >;
  onSubmitLogin: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
}> = ({ meQueryResult, onSubmitLogin, messages }) => {
  const client = useApolloClient();
  useNegotiationCreatedSubscription({
    onSubscriptionData: ({ subscriptionData }) => {
      notification({
        type: 'success',
        message: 'qualcuno ha aperto una trattativa con te',
      });
      updateCacheMessagesAdmin(client);
      updateCacheNegotiations(
        client,
        subscriptionData.data?.negotiationCreated as Negotiation
      );
    },
  });
  useNegotiationClosedSubscription({
    onSubscriptionData: ({ subscriptionData }) => {
      updateCacheMessagesAdmin(client);
      const wineName =
        subscriptionData.data?.negotiationClosed.__typename === 'AdWine' &&
        subscriptionData.data?.negotiationClosed.wineName;
      notification({
        type: 'info',
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        message: `Una tua trattiva e stata dichiarata chiusa per il vino ${wineName}`,
      });
    },
  });
  useAdPostedFollowUpSubscription({
    onSubscriptionData: () => {
      updateCacheMessagesAdmin(client);
      notification({
        type: 'info',
        message: 'Qualcuno ha pubblicato un annuncio che ti interessa',
      });
    },
  });
  useMessageSentSubscription({
    onSubscriptionData: ({ subscriptionData }) => {
      const cachedMessagesLocal: ICachedMessages | null = _.cloneDeep(
        client.readQuery({
          query: MessagesDocument,
        })
      );
      cachedMessagesLocal?.messages.push(
        subscriptionData.data?.messageSent as Message
      );
      client.writeQuery({
        query: MessagesDocument,
        variables: { id: subscriptionData.data?.messageSent.negotiation._id },
        data: cachedMessagesLocal,
      });
      const cachedMessagesNegotiationsLocal: ICachedMessagesNegs | null = _.cloneDeep(
        client.readQuery({
          query: MessagesNegotiationDocument,
          variables: { id: subscriptionData.data?.messageSent.negotiation._id },
        })
      );
      console.log(cachedMessagesNegotiationsLocal);
      cachedMessagesNegotiationsLocal?.messagesForNegotiation.push(
        subscriptionData.data?.messageSent as Message
      );
      client.writeQuery({
        query: MessagesNegotiationDocument,
        variables: { id: subscriptionData.data?.messageSent.negotiation._id },
        data: cachedMessagesNegotiationsLocal,
      });
    },
  });
  return (
    <HeaderBar
      meQueryResult={meQueryResult}
      onSubmitLogin={onSubmitLogin}
      messages={messages}
    />
  );
};
