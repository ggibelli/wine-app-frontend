import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { RouteComponentProps } from '@reach/router';
import {
  MessagesNegotiationQuery,
  useMessagesNegotiationQuery,
  useCreateMessageMutation,
  MessageInput,
} from '../generated/graphql';
import { useParams } from '@reach/router';
import { notification } from '../cache';
import { Chat } from '../components/Chat';
import { DeepExtractType } from 'ts-deep-extract-types';
import { Loading } from '../components/Loading';

const Message: React.FC<RouteComponentProps> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { id }: { id: string } = useParams();
  const { data, loading, error, fetchMore } = useMessagesNegotiationQuery({
    fetchPolicy: 'network-only',
    variables: { id, offset: 0, limit: 20 },
  });
  const [sortedMessage, setSortedMessage] = React.useState<
    DeepExtractType<
      MessagesNegotiationQuery,
      ['messagesForNegotiation']
    >['messages']
  >([]);
  const message = data?.messagesForNegotiation?.messages?.length
    ? data?.messagesForNegotiation.messages[0]
    : null;
  const [createMessage] = useCreateMessageMutation({
    onError: (error) => {
      console.log(error);
      notification({ type: 'error', message: error.message });
    },
    onCompleted: (createdMessage) => {
      const messageCreated = createdMessage?.createMessage?.response;

      if (createdMessage.createMessage?.errors?.length) {
        const errorMessages = createdMessage.createMessage?.errors.map(
          (error) => error?.text
        );
        notification({
          type: 'error',
          message: `${errorMessages.toString()}`,
        });
        return;
      }

      if (sortedMessage?.length) {
        setSortedMessage([...sortedMessage, messageCreated] as DeepExtractType<
          MessagesNegotiationQuery,
          ['messagesForNegotiation']
        >['messages']);
      }
    },
    // update: (cache, data) => {
    //   updateCacheMessages(cache, data.data?.createMessage?.response);
    // },
  });
  React.useEffect(() => {
    if (data?.messagesForNegotiation?.messages) {
      setSortedMessage([...data?.messagesForNegotiation?.messages].reverse());
    }
  }, [data?.messagesForNegotiation?.messages]);
  const handleFetchMore = async () => {
    if (fetchMore) {
      try {
        await fetchMore({
          variables: {
            offset: data?.messagesForNegotiation?.messages?.length,
          },
        });
      } catch (e) {
        console.log(e);
      }
    }
  };
  const handleCreate = async (message: MessageInput) => {
    await createMessage({
      variables: { message },
    });
  };
  const propsMessage = {
    isLoading: loading,
    messages: sortedMessage,
    isVisible:
      data?.messagesForNegotiation?.messages?.length !==
      data?.messagesForNegotiation?.pageCount,
    handleCreate,
    handleFetchMore,
  };
  if (loading || propsMessage.isVisible === undefined) {
    return <Loading />;
  }
  if (error) {
    return <div>error</div>;
  }
  if (!message) return <div>niente mess ancora</div>;

  if (!data?.messagesForNegotiation?.messages?.length) {
    return null;
  }
  return (
    <Container component='main' maxWidth='sm'>
      <CssBaseline />
      <Chat propsMessage={propsMessage} />
    </Container>
  );
};

export default Message;
