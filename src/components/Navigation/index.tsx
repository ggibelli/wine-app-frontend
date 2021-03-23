import { LazyQueryResult, useApolloClient } from '@apollo/client';
// import _ from 'lodash';
import * as React from 'react';
import { notification } from '../../cache';
import {
  useNegotiationCreatedSubscription,
  useNegotiationClosedSubscription,
  Negotiation,
  MeQuery,
  Exact,
  Maybe,
  QueryOrderBy,
} from '../../generated/graphql';
import { updateCacheNegotiations } from '../../utils/updateCache';
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
  onSubmitLogin: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
}> = ({ meQueryResult, onSubmitLogin }) => {
  // const [subData, setSubData] = React.useState<string | undefined>(undefined);
  const client = useApolloClient();
  // console.log(subData);
  useNegotiationCreatedSubscription({
    onSubscriptionData: ({ subscriptionData }) => {
      // const dio = subscriptionData.data?.negotiationCreated._id;
      // console.log(subData === subscriptionData.data?.negotiationCreated._id);
      // if (subData === subscriptionData.data?.negotiationCreated._id) return;
      // setSubData(dio);
      notification({
        type: 'success',
        message: 'qualcuno ha aperto una trattativa con te',
      });
      updateCacheNegotiations(
        client,
        subscriptionData.data?.negotiationCreated as Negotiation
      );
    },
  });
  useNegotiationClosedSubscription({
    onSubscriptionData: ({ subscriptionData }) => {
      console.log(subscriptionData);
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
  return (
    <HeaderBar meQueryResult={meQueryResult} onSubmitLogin={onSubmitLogin} />
  );
};
