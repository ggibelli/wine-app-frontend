import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
// import CircularProgress from '@material-ui/core/CircularProgress';
import { RouteComponentProps } from '@reach/router';
import {
  useMessagesNegotiationQuery,
  useCreateMessageMutation,
  MessageInput,
  MessagesNegotiationDocument,
  Message as IMessage,
} from '../generated/graphql';
import { useParams } from '@reach/router';
import { notification } from '../cache';
import { Chat } from '../components/Chat';
import { ICachedMessagesNegs } from '../utils/updateCache';
import _ from 'lodash';
export const Message: React.FC<RouteComponentProps> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { id }: { id: string } = useParams();

  const [createMessage] = useCreateMessageMutation({
    onError: (error) => notification({ type: 'error', message: error.message }),
    onCompleted: (createdMessage) => {
      if (createdMessage.createMessage?.errors?.length) {
        const errorMessages = createdMessage.createMessage?.errors.map(
          (error) => error?.text
        );
        notification({
          type: 'error',
          message: `${errorMessages.toString()}`,
        });
      }
    },
    update: (cache, response) => {
      const cachedMessagesLocal: ICachedMessagesNegs | null = _.cloneDeep(
        cache.readQuery({
          query: MessagesNegotiationDocument,
          variables: { id },
        })
      );
      console.log(cachedMessagesLocal);
      cachedMessagesLocal?.messagesForNegotiation.push(
        response.data?.createMessage as IMessage
      );
      cache.writeQuery({
        query: MessagesNegotiationDocument,
        variables: { id },
        data: cachedMessagesLocal,
      });
    },
  });
  const { data, loading, error } = useMessagesNegotiationQuery({
    variables: { id },
    fetchPolicy: 'network-only',
  });
  const message = data?.messagesForNegotiation?.length
    ? data?.messagesForNegotiation[0]
    : null;
  if (!message) return <div>niente mess ancora</div>;

  // const recipient = data?.messagesForNegotiation.filter((message) => message.)

  const handleCreate = async (message: MessageInput) => {
    await createMessage({ variables: { message } });
  };
  console.log(data);
  if (!loading && error) {
    return <div>error</div>;
  }
  if (loading) {
    return <div>loading</div>;
  }
  if (!data?.messagesForNegotiation?.length) {
    return null;
  }
  return (
    <Container>
      <CssBaseline />
      <>
        <Chat messages={data} createMessage={handleCreate} />
      </>
    </Container>
  );
};
