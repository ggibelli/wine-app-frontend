import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { RouteComponentProps } from '@reach/router';
import {
  useMessagesNegotiationQuery,
  useCreateMessageMutation,
  MessageInput,
  NegotiationInputUpdate,
} from '../generated/graphql';
import { useParams } from '@reach/router';
import { notification } from '../cache';
import { Chat } from '../components/Chat';
export const Message: React.FC<
  RouteComponentProps & {
    handleCloseNeg: (negotiation: NegotiationInputUpdate) => Promise<void>;
  }
> = ({ handleCloseNeg }) => {
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
  });
  const { data, loading, error } = useMessagesNegotiationQuery({
    variables: { id },
  });
  const message = data?.messagesForNegotiation?.length
    ? data?.messagesForNegotiation[0]
    : null;
  if (!message) return <div>niente mess ancora</div>;

  const handleCreate = async (message: MessageInput) => {
    await createMessage({ variables: { message } });
  };
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
      <Chat
        messages={data}
        createMessage={handleCreate}
        handleCloseNeg={handleCloseNeg}
      />
    </Container>
  );
};
