/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  renderApollo,
  cleanup,
  setupIntersectionObserverMock,
} from '../../test-utils/test-utils';
import { act, fireEvent } from '@testing-library/react';
import Message from '../Message';
import * as React from 'react';
import {
  MessagesNegotiationDocument,
  CreateMessageDocument,
} from '../../generated/graphql';
import { notification } from '../../cache';
import { messageFactory, user, user2 } from '../../test-utils/test-factory';
import * as hooks from '../../utils/useIntersectionHook';
import * as superHooks from '../../generated/graphql';

jest.mock('../../cache', () => ({
  // __esModule: true, // this property makes it work
  ...jest.requireActual<any>('../../cache'),
  __esModule: true, // this property makes it work

  notification: jest.fn(),
}));

const messageSent = messageFactory.build({ content: 'testtest' });
const messageReceived = messageFactory.build({ sentBy: user2, sentTo: user });

const messagesMockSuccess = {
  request: {
    query: MessagesNegotiationDocument,
    variables: { id: '123', offset: 0, limit: 20 },
  },
  result: {
    data: {
      messagesForNegotiation: {
        messages: [messageSent, messageReceived],
        pageCount: 2,
      },
    },
  },
};

const messagesMockError = {
  request: {
    query: MessagesNegotiationDocument,
    variables: { id: '123', offset: 0, limit: 20 },
  },
  result: {
    data: undefined,
  },
  error: new Error('Error!!!'),
};

const messageCreated = messageFactory.build({
  content: 'new message',
  sentBy: user,
  sentTo: user2,
  negotiation: messageReceived.negotiation,
});

const MessageCreatedSuccess = {
  request: {
    query: CreateMessageDocument,
    variables: {
      message: {
        content: 'new message',
        negotiation: messageReceived.negotiation._id,
        sentTo: user2._id,
      },
    },
  },
  result: {
    data: {
      createMessage: {
        __typename: 'MessagePayload',
        response: messageCreated,
        // errors: { __typename: 'Error' },
      },
    },
  },
};

const MessageCreatedError = {
  request: {
    query: CreateMessageDocument,
    variables: {
      message: {
        content: 'new message',
        negotiation: messageReceived.negotiation._id,
        sentTo: user2._id,
      },
    },
  },
  result: {
    data: {
      createMessage: {
        __typename: 'MessagePayload',
        response: null,
        errors: [{ name: 'ahia', text: 'error' }],
      },
    },
  },
};

describe('Message page', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });
  // beforeEach(() => setupIntersectionObserverMock());
  afterEach(cleanup);

  it('renders the Message page loading state', () => {
    const { getByTestId } = renderApollo(
      <Message path='/messaggi/:id' />,
      {
        mocks: [],
        addTypename: false,
      },
      { route: '/messaggi/123' }
    );
    expect(getByTestId('loading')).toBeTruthy();
  });

  it('renders the Message page success state', async () => {
    //@ts-expect-error mock reached end of div
    jest.spyOn(hooks, 'useIntersect').mockImplementation(() => [
      jest.fn(),
      {
        isIntersecting: false,
        intersectionRatio: 0,
        target: 'element',
      },
    ]);
    const scroll = (window.HTMLElement.prototype.scroll = jest.fn());
    const { getByText } = renderApollo(
      <Message path='/messaggi/:id' />,
      {
        mocks: [messagesMockSuccess],
        addTypename: false,
      },
      { route: '/messaggi/123' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(scroll).toBeCalledTimes(1);
    expect(
      getByText(
        messagesMockSuccess.result.data.messagesForNegotiation.messages[0]
          .content
      )
    );
  });

  it('renders the Message page error state', async () => {
    const scroll = (window.HTMLElement.prototype.scroll = jest.fn());
    const { getByText } = renderApollo(
      <Message path='/messaggi/:id' />,
      {
        mocks: [messagesMockError],
        addTypename: false,
      },
      { route: '/messaggi/123' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(scroll).toBeCalledTimes(0);
    expect(getByText('error'));
  });
});

describe('Message page create message mutation', () => {
  beforeEach(() => setupIntersectionObserverMock());
  afterEach(cleanup);

  it('Create Message mutation success updates messages', async () => {
    window.HTMLElement.prototype.scroll = jest.fn();
    const { getByRole, getByText, queryByText, getAllByTestId } = renderApollo(
      <Message path='/messaggi/:id' />,
      {
        mocks: [messagesMockSuccess, MessageCreatedSuccess],
        addTypename: false,
      },
      { route: '/messaggi/123' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    const inputMessage = getByRole('textbox', { name: 'input-message' });
    expect(queryByText('new message')).toBeFalsy();
    fireEvent.change(inputMessage, {
      target: {
        value: 'new message',
      },
    });
    const lengthMessages =
      messagesMockSuccess.result.data.messagesForNegotiation.messages.length;
    expect(getAllByTestId('message-box')).toHaveLength(lengthMessages);
    fireEvent.click(getByRole('button', { name: 'send' }));
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(getByText('new message'));
    expect(getAllByTestId('message-box')).toHaveLength(lengthMessages + 1);
  });

  it('Create Message mutation error calls notification', async () => {
    window.HTMLElement.prototype.scroll = jest.fn();
    const { getByRole, queryByText, getAllByTestId } = renderApollo(
      <Message path='/messaggi/:id' />,
      {
        mocks: [messagesMockSuccess, MessageCreatedError],
        addTypename: false,
      },
      { route: '/messaggi/123' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    const inputMessage = getByRole('textbox', { name: 'input-message' });
    expect(queryByText('new message')).toBeFalsy();
    fireEvent.change(inputMessage, {
      target: {
        value: 'new message',
      },
    });
    const lengthMessages =
      messagesMockSuccess.result.data.messagesForNegotiation.messages.length;
    expect(getAllByTestId('message-box')).toHaveLength(lengthMessages);
    fireEvent.click(getByRole('button', { name: 'send' }));
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(notification).toHaveBeenCalledWith({
      type: 'error',
      message: 'error',
    });
    expect(getAllByTestId('message-box')).toHaveLength(lengthMessages);
  });
});
