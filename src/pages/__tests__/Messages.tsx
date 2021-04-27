/* eslint-disable @typescript-eslint/no-unsafe-return */
import { renderApollo, cleanup } from '../../test-utils/test-utils';
import { act } from '@testing-library/react';
import Messages from '../Messages';
import * as React from 'react';
import { MessagesDocument } from '../../generated/graphql';
import { myInfo, notification } from '../../cache';
import { messageFactory, user, user2 } from '../../test-utils/test-factory';

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
    query: MessagesDocument,
  },
  result: {
    data: {
      messages: [messageSent, messageReceived],
    },
  },
};

const noMessagesMock = {
  request: {
    query: MessagesDocument,
  },
  result: {
    data: {
      messages: [],
    },
  },
};

const messagesMockError = {
  request: {
    query: MessagesDocument,
  },
  result: {
    data: undefined,
  },
  error: new Error('Error!!!'),
};

describe('Messages page', () => {
  // beforeEach(() => setupIntersectionObserverMock());
  afterEach(cleanup);

  it('renders the Messages page loading state', () => {
    const { getByTestId } = renderApollo(
      <Messages path='/messaggi' />,
      {
        mocks: [],
        addTypename: false,
      },
      { route: '/messaggi' }
    );
    expect(getByTestId('loading')).toBeTruthy();
  });

  it('renders the Message page success state', async () => {
    myInfo(user);
    const { getByText } = renderApollo(
      <Messages path='/messaggi' />,
      {
        mocks: [messagesMockSuccess],
        addTypename: false,
      },
      { route: '/messaggi' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(getByText('1'));
    expect(getByText("Cantina giovanni - Barbera d'Asti"));
  });

  it('renders the Message page error state', async () => {
    const { getByText } = renderApollo(
      <Messages path='/messaggi' />,
      {
        mocks: [messagesMockError],
        addTypename: false,
      },
      { route: '/messaggi' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(getByText('error'));
    expect(notification).toHaveBeenCalledWith({
      type: 'error',
      message: 'Error!!!',
    });
  });

  it('renders the Message page error state', async () => {
    const { getByText } = renderApollo(
      <Messages path='/messaggi' />,
      {
        mocks: [noMessagesMock],
        addTypename: false,
      },
      { route: '/messaggi' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(getByText('non ci sono messaggi'));
  });
});
