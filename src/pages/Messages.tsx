import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import { useMessagesQuery } from '../generated/graphql';
import _ from 'lodash';
import { MessageListEl } from '../components/MessageListEl';
import { notification } from '../cache';
import { RouteComponentProps } from '@reach/router';
import { BackButton } from '../components/BackButton';
import { Loading } from '../components/Loading';

const Messages: React.FC<RouteComponentProps> = () => {
  const { data, loading, error } = useMessagesQuery({
    fetchPolicy: 'network-only',
    onError: (error) => {
      notification({
        type: 'error',
        message: error.message,
      });
    },
  });
  const messages = data?.messages && data?.messages;
  const messagesForNegotiationObj = _.groupBy(
    messages,
    (message) => message.negotiation._id
  );
  const messagesForNegotiation = Object.entries(
    messagesForNegotiationObj
  ).sort((a, b) => a[0].localeCompare(b[0]));
  if (loading) {
    return <Loading />;
  }
  if (error) return <div>error</div>;
  if (!messagesForNegotiation.length) return <div>non ci sono messaggi</div>;
  if (!messages) return null;
  return (
    <Container component='main' maxWidth='sm'>
      <CssBaseline />
      <BackButton />
      <List>
        {messagesForNegotiation.map((el) => (
          <div key={el[0]}>
            <MessageListEl messages={el[1]} id={el[0]} />
          </div>
        ))}
      </List>
    </Container>
  );
};

export default Messages;
