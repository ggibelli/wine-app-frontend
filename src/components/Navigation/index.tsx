import { LazyQueryResult, useApolloClient } from '@apollo/client';
import * as React from 'react';
import { notification } from '../../cache';
import {
  useNegotiationCreatedSubscription,
  useNegotiationClosedSubscription,
  useAdPostedFollowUpSubscription,
  MeQuery,
  Exact,
  MessagesQuery,
  useMessageSentSubscription,
} from '../../generated/graphql';
import {
  updateCacheMessages,
  updateCacheMessagesAdmin,
  updateCacheNegotiations,
} from '../../utils/updateCache';
import { HeaderBar } from './AppBar';

export const Header: React.FC<{
  meQueryResult: LazyQueryResult<
    MeQuery,
    Exact<{
      [key: string]: never;
    }>
  >;
  messages: MessagesQuery['messages'];

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

      updateCacheNegotiations(
        client,
        subscriptionData.data?.negotiationCreated
      );
    },
  });
  useNegotiationClosedSubscription({
    onSubscriptionData: ({ subscriptionData }) => {
      updateCacheMessagesAdmin(
        client,
        subscriptionData.data?.negotiationClosed
      );
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
      notification({
        type: 'info',
        message: 'Qualcuno ha pubblicato un annuncio che ti interessa',
      });
    },
  });
  useMessageSentSubscription({
    onSubscriptionData: ({ subscriptionData }) => {
      updateCacheMessages(client, subscriptionData.data?.messageSent);
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
