import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import {
  MessagesNegotiationQuery,
  MessageInput,
  Message,
  NegotiationInputUpdate,
} from '../../generated/graphql';
import { MessageChat } from './MessageChat';
import SendIcon from '@material-ui/icons/Send';
import InputAdornment from '@material-ui/core/InputAdornment';
import { IconButton } from '@material-ui/core';
import { myInfo } from '../../cache';
import Button from '@material-ui/core/Button';
import _ from 'lodash';

export const Chat: React.FC<{
  messages: MessagesNegotiationQuery | undefined;
  createMessage: (message: MessageInput) => Promise<void>;
  handleCloseNeg: (negotiation: NegotiationInputUpdate) => Promise<void>;
}> = ({ messages, createMessage, handleCloseNeg }) => {
  const me = myInfo();
  const [messageContent, setMessageContent] = React.useState<string>('');
  const [messagesState, setMessagesState] = React.useState<Message[]>(
    messages?.messagesForNegotiation as Message[]
  );
  const sortDate = (a: string, b: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    return new Date(a) - new Date(b);
  };
  React.useEffect(() => {
    const messagesCopy = _.cloneDeep(messages?.messagesForNegotiation);

    setMessagesState(
      messagesCopy?.sort((a, b) =>
        sortDate(a.dateSent as string, b.dateSent as string)
      ) as Message[]
    );
  }, [messages?.messagesForNegotiation?.length]);
  const divRef = React.useRef<null | HTMLDivElement>(null);
  React.useEffect(() => {
    if (divRef.current) {
      divRef.current.scroll({
        top: document.body.offsetHeight + 10000000,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [messagesState]);
  const message = messages?.messagesForNegotiation
    ? messages?.messagesForNegotiation[0]
    : null;
  if (!message) {
    return null;
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessageContent(event.target.value);
  };
  const recipient =
    message.sentBy._id === me?._id ? message.sentTo._id : message.sentBy._id;
  const handleCreateMessage = () => {
    const newMessage = {
      content: messageContent,
      sentTo: recipient,
      negotiation: message.negotiation._id,
    };
    void createMessage(newMessage);
    const now = Date.now();
    setMessagesState([
      ...messagesState,
      ({
        ...newMessage,
        _id: now,
        dateSent: now,
        isViewed: true,
        sentBy: { _id: me?._id as string },
      } as unknown) as Message,
    ]);
    setMessageContent('');
  };
  if (!messages?.messagesForNegotiation) return null;
  return (
    <>
      <div
        style={{
          height: '75vh',
          margin: 0,
          padding: 0,
          overflowY: 'scroll',
        }}
        ref={divRef}
      >
        {messagesState.map((message) => (
          <div key={message._id}>
            <MessageChat message={message} />
          </div>
        ))}
      </div>
      <hr style={{ borderWidth: 1, borderColor: '#6d1331' }} />
      <div
        style={{
          height: '10vh',
          backgroundColor: '#fff',
          paddingTop: 0,
        }}
      >
        {message.negotiation._id ? (
          <div>Trattativa chiusa</div>
        ) : (
          <Button
            onClick={() =>
              handleCloseNeg({
                _id: message.negotiation._id,
                isConcluded: true,
              })
            }
          >
            Dichiara chiusa la trattativa
          </Button>
        )}
        <TextField
          fullWidth
          multiline
          rowsMax={2}
          variant='outlined'
          name='content'
          type='text'
          placeholder=''
          label=''
          value={messageContent}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  disabled={!messageContent}
                  onClick={handleCreateMessage}
                >
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
    </>
  );
};
