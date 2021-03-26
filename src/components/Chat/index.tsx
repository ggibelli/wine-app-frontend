// import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';

import {
  MessagesNegotiationQuery,
  MessageInput,
  Message,
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
}> = ({ messages, createMessage }) => {
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
    // setMessagesState([
    //   ...messagesState,
    //   ({
    //     ...newMessage,
    //     _id: Date.now(),
    //     isViewed: true,
    //     sentBy: { _id: me?._id as string },
    //   } as unknown) as Message,
    // ]);
    setMessageContent('');
  };
  if (!messages?.messagesForNegotiation) return null;
  if (messagesState) {
    const newArr = _.cloneDeep(messagesState);
    const funz = (a: any, b: any) => {
      console.log(a, b);
      const lol = new Date(a);
      const bol = new Date(b);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      return lol - bol;
      // console.log(lol, bol);
    };
    console.log(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      newArr.sort((a, b) => funz(a.dateSent, b.dateSent))
    );
  }
  // if (messages.data.messagesForNegotiation.length === 0) {
  //   return <div onClick={() => createMessage({content: 'ciao', sentTo})}>manda il mess</div>;
  // }
  // const compareDate = (
  //   a: string | undefined | null,
  //   b: string | undefined | null
  // ) => {
  //   if (a && b) {
  //     if (new Date(a) < new Date(b)) return -1;
  //     if (new Date(b) < new Date(a)) return 1;
  //     return 0;
  //   }
  //   return 0;
  // };
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
        <Button>Dichiara chiusa la trattativa</Button>
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
