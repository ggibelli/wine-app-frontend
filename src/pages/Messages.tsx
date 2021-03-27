import * as React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import { RouteComponentProps } from '@reach/router';
import { LazyQueryResult } from '@apollo/client';
import { MessagesQuery, Exact, Message } from '../generated/graphql';
import _ from 'lodash';
import { MessageListEl } from '../components/MessageListEl';

export const Messages: React.FC<
  RouteComponentProps & {
    messagesResult: LazyQueryResult<
      MessagesQuery,
      Exact<{
        [key: string]: never;
      }>
    >;
  }
> = ({ messagesResult }) => {
  const messages =
    messagesResult.data?.messages && messagesResult.data?.messages;
  const messagesForNegotiationObj = _.groupBy(
    messages,
    (message) => message.negotiation._id
  );
  const messagesForNegotiation = Object.entries(
    messagesForNegotiationObj
  ).sort((a, b) => a[0].localeCompare(b[0]));
  if (messagesResult.loading) {
    return <Skeleton />;
  }
  if (messagesResult.error) return <div>error</div>;
  if (!messagesForNegotiation) return <div>nno ci sono messaggi</div>;
  if (!messages) return null;
  return (
    <Container>
      <CssBaseline />
      <List>
        {messagesForNegotiation.map((el) => (
          <div key={el[0]}>
            <MessageListEl messages={el[1] as Message[]} id={el[0]} />
          </div>
        ))}
      </List>
    </Container>
  );
};
