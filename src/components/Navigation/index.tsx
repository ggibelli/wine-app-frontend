import { useApolloClient } from '@apollo/client';
import * as React from 'react';
import { isLoggedInVar, myInfo, notification } from '../../cache';
import {
  useNegotiationCreatedSubscription,
  useNegotiationClosedSubscription,
  useAdPostedFollowUpSubscription,
  useMessageSentSubscription,
  useIsUserLoggedInQuery,
  useReviewCreatedSubscription,
  useLoginMutation,
  useMeLazyQuery,
  Address,
  User,
} from '../../generated/graphql';
import {
  updateCacheMessages,
  updateCacheMessagesAdmin,
  updateCacheNegotiations,
  updateCacheReview,
} from '../../utils/updateCache';
import { HeaderBar } from './AppBar';

export const Header: React.FC = () => {
  const loggedUser = useIsUserLoggedInQuery();
  const client = useApolloClient();
  const [lazyQuery, result] = useMeLazyQuery({
    onCompleted: (data) => {
      if (data.me) {
        myInfo({
          ...data.me,
        } as User);
      }
    },
    onError: (error) => {
      console.log(error);
      notification({
        type: 'error',
        message: error.message,
      });
    },
  });
  React.useEffect(() => {
    if (loggedUser.data?.isLoggedIn) {
      lazyQuery();
    }
  }, [loggedUser.data?.isLoggedIn]);

  const [loginMutation] = useLoginMutation({
    onError: (error) =>
      notification({
        type: 'error',
        message: error.message,
      }),
    onCompleted: ({ login }) => {
      if (login?.errors?.length === 0) {
        localStorage.setItem(
          'wineapp-user-token',
          login?.response?.token as string
        );
        localStorage.setItem(
          'wineapp-user-id',
          login?.response?.user._id as string
        );
        isLoggedInVar(true);
        notification({
          type: 'success',
          message: 'welcome back',
        });
        myInfo({
          _id: login.response?.user._id as string,
          firstName: login.response?.user.firstName as string,
          address: login.response?.user.address as Address,
        } as User);
      }
      if (login?.errors?.length) {
        notification({
          type: 'error',
          message: 'errore',
        });
      }
    },
  });
  const onSubmitLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    await loginMutation({
      variables: {
        email: email,
        password: password,
      },
    });
  };
  useNegotiationCreatedSubscription({
    onSubscriptionData: ({ subscriptionData }) => {
      notification({
        type: 'success',
        message: 'qualcuno ha aperto una trattativa con te',
      });
      updateCacheNegotiations(
        client,
        subscriptionData.data?.negotiationCreated,
        true
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
  useReviewCreatedSubscription({
    onSubscriptionData: ({ subscriptionData }) => {
      const review = subscriptionData.data?.reviewCreated;
      if (!review) return;
      notification({
        type: 'info',
        message: `La cantina ${review.createdBy.firstName} ti ha lasciato una recensione`,
      });
      updateCacheReview(client, review);
    },
  });
  return <HeaderBar meQueryResult={result} onSubmitLogin={onSubmitLogin} />;
};
