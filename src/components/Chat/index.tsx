import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import {
  MessageInput,
  MessagesNegotiationQuery,
} from '../../generated/graphql';
import { MessageChat } from './MessageChat';
import SendIcon from '@material-ui/icons/Send';
import InputAdornment from '@material-ui/core/InputAdornment';
import { IconButton } from '@material-ui/core';
import { myInfo } from '../../cache';
import { InfiniteScroll } from '../InfiniteScrollFetch';
import { DeepExtractType } from 'ts-deep-extract-types';
import { CloseNegotiationButton } from '../../containers/CloseNegotiationButton';
import { CreateReviewModal } from '../../components/ReviewModal';

interface PropMessages {
  propsMessage: {
    isLoading: boolean;
    messages: DeepExtractType<
      MessagesNegotiationQuery,
      ['messagesForNegotiation']
    >['messages'];
    isVisible: boolean;
    handleCreate: (message: MessageInput) => Promise<void>;
    handleFetchMore: () => Promise<void>;
  };
}

export const Chat: React.FC<PropMessages> = ({ propsMessage }) => {
  const me = myInfo();
  const [messageContent, setMessageContent] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isFirstRender, setIsFirstRender] = React.useState<boolean>(true);
  const divRef = React.useRef<null | HTMLDivElement>(null);
  setTimeout(() => setIsFirstRender(false), 1000);
  React.useEffect(() => {
    if (divRef.current) {
      if (isLoading) return;
      divRef.current.scroll({
        top: document.body.offsetHeight + 1000000,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [propsMessage.messages]);
  const message = propsMessage.messages ? propsMessage.messages[0] : null;
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
    void propsMessage.handleCreate(newMessage);

    setMessageContent('');
  };
  if (!propsMessage.messages) return null;
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
        <InfiniteScroll
          fetchMore={propsMessage.handleFetchMore}
          isLoading={isLoading}
          isVisible={propsMessage.isVisible && !isFirstRender}
          setIsLoading={setIsLoading}
        >
          {propsMessage.messages?.map((message) => (
            <MessageChat key={message?._id} message={message} />
          ))}
        </InfiniteScroll>
      </div>
      <hr style={{ borderWidth: 1, borderColor: '#6d1331' }} />
      <div
        style={{
          height: '10vh',
          backgroundColor: '#fff',
          paddingTop: 0,
        }}
      >
        {message.negotiation.isConcluded ? (
          <CreateReviewModal
            idNegotiation={message.negotiation._id}
            idUser={recipient}
            type={message.negotiation.type}
          />
        ) : (
          <CloseNegotiationButton id={message.negotiation._id} />
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
          inputProps={{ 'aria-label': 'input-message' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  aria-label='send'
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
