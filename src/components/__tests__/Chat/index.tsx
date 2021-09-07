/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Chat } from '../../Chat';
import {
  cleanup,
  fireEvent,
  renderApolloNoRouter,
} from '../../../test-utils/test-utils';
import * as React from 'react';
import { messageFactory, user, user2 } from '../../../test-utils/test-factory';
import { useLocation } from '@reach/router';
import * as hooks from '../../../utils/useIntersectionHook';

jest.mock('@reach/router', () => ({
  __esModule: true, // this property makes it work
  ...jest.requireActual<any>('@reach/router'),
  useLocation: jest.fn(),
}));

const messageSent = messageFactory.build({ content: 'testtest' });
const messageReceived = messageFactory.build({ sentBy: user2, sentTo: user });
const messageNew = messageFactory.build({
  content: 'new!',
  negotiation: { isConcluded: true },
});

const handleCreate = jest.fn();
const handleFetchMore = jest.fn();

const props = {
  isLoading: false,
  messages: [messageSent, messageReceived],
  isVisible: true,
  handleCreate: handleCreate,
  handleFetchMore: handleFetchMore,
};

const propsNewMessage = {
  isLoading: false,
  messages: [messageSent, messageReceived, messageNew],
  isVisible: true,
  handleCreate: handleCreate,
  handleFetchMore: handleFetchMore,
};

const propsNegClosed = {
  isLoading: false,
  messages: [messageNew],
  isVisible: true,
  handleCreate: handleCreate,
  handleFetchMore: handleFetchMore,
};

describe('Message component', () => {
  afterEach(cleanup);

  it('renders the message component ', () => {
    const scroll = (window.HTMLElement.prototype.scroll = jest.fn());
    //@ts-expect-error mock
    useLocation.mockImplementation(() => ({ pathname: '/messaggi' }));
    const spyIntersect = jest
      .spyOn(hooks, 'useIntersect')
      //@ts-expect-error mock
      .mockImplementation(() => [
        jest.fn(),
        {
          isIntersecting: false,
          intersectionRatio: 0,
          target: 'element',
        },
      ]);
    renderApolloNoRouter(<Chat propsMessage={props} />);
    expect(scroll).toHaveBeenCalledTimes(1);
    expect(handleFetchMore).toHaveBeenCalledTimes(0);

    spyIntersect.mockRestore();
  });

  it('it calls fetchmore if intersecting', () => {
    const scroll = (window.HTMLElement.prototype.scroll = jest.fn());
    //@ts-expect-error mock
    useLocation.mockImplementation(() => ({ pathname: '/messaggi' }));
    const spyIntersect = jest
      .spyOn(hooks, 'useIntersect')
      //@ts-expect-error mock
      .mockImplementation(() => [
        jest.fn(),
        {
          isIntersecting: true,
          intersectionRatio: 0.6,
          target: 'element',
        },
      ]);
    renderApolloNoRouter(<Chat propsMessage={props} />);
    expect(scroll).toHaveBeenCalledTimes(1);
    expect(handleFetchMore).toHaveBeenCalledTimes(1);

    spyIntersect.mockRestore();
  });

  it('it calls scroll again when new message arrives', () => {
    const scroll = (window.HTMLElement.prototype.scroll = jest.fn());
    //@ts-expect-error mock
    useLocation.mockImplementation(() => ({ pathname: '/messaggi' }));
    const spyIntersect = jest
      .spyOn(hooks, 'useIntersect')
      //@ts-expect-error mock
      .mockImplementation(() => [
        jest.fn(),
        {
          isIntersecting: false,
          intersectionRatio: 0.0,
          target: 'element',
        },
      ]);
    renderApolloNoRouter(<Chat propsMessage={props} />);
    expect(scroll).toHaveBeenCalledTimes(1);
    renderApolloNoRouter(<Chat propsMessage={propsNewMessage} />);
    expect(scroll).toHaveBeenCalledTimes(2);

    spyIntersect.mockRestore();
  });

  it('submit button disabled if no message content', () => {
    window.HTMLElement.prototype.scroll = jest.fn();
    //@ts-expect-error mock
    useLocation.mockImplementation(() => ({ pathname: '/messaggi' }));
    const spyIntersect = jest
      .spyOn(hooks, 'useIntersect')
      //@ts-expect-error mock
      .mockImplementation(() => [
        jest.fn(),
        {
          isIntersecting: false,
          intersectionRatio: 0,
          target: 'element',
        },
      ]);
    const { getByRole } = renderApolloNoRouter(<Chat propsMessage={props} />);
    expect(getByRole('button', { name: 'send' })).toBeDisabled();

    spyIntersect.mockRestore();
  });

  it('it calls createmessage when clicking submit button with content', () => {
    window.HTMLElement.prototype.scroll = jest.fn();
    //@ts-expect-error mock
    useLocation.mockImplementation(() => ({ pathname: '/messaggi' }));
    const spyIntersect = jest
      .spyOn(hooks, 'useIntersect')
      //@ts-expect-error mock
      .mockImplementation(() => [
        jest.fn(),
        {
          isIntersecting: false,
          intersectionRatio: 0,
          target: 'element',
        },
      ]);
    const { getByRole } = renderApolloNoRouter(<Chat propsMessage={props} />);
    const inputMessage = getByRole('textbox', { name: 'input-message' });
    fireEvent.change(inputMessage, {
      target: {
        value: 'new message',
      },
    });
    fireEvent.click(getByRole('button', { name: 'send' }));
    expect(handleCreate).toHaveBeenCalledTimes(1);
    spyIntersect.mockRestore();
  });

  it('shows close negotiation button if negotiation message is active', () => {
    window.HTMLElement.prototype.scroll = jest.fn();
    //@ts-expect-error mock
    useLocation.mockImplementation(() => ({ pathname: '/messaggi' }));
    const spyIntersect = jest
      .spyOn(hooks, 'useIntersect')
      //@ts-expect-error mock
      .mockImplementation(() => [
        jest.fn(),
        {
          isIntersecting: false,
          intersectionRatio: 0,
          target: 'element',
        },
      ]);
    const { getByText } = renderApolloNoRouter(<Chat propsMessage={props} />);
    expect(getByText('Chiudi trattativa'));

    spyIntersect.mockRestore();
  });

  it('shows review button if negotiation message is concluded', () => {
    window.HTMLElement.prototype.scroll = jest.fn();
    //@ts-expect-error mock
    useLocation.mockImplementation(() => ({ pathname: '/messaggi' }));
    const spyIntersect = jest
      .spyOn(hooks, 'useIntersect')
      //@ts-expect-error mock
      .mockImplementation(() => [
        jest.fn(),
        {
          isIntersecting: false,
          intersectionRatio: 0,
          target: 'element',
        },
      ]);
    const { getByText } = renderApolloNoRouter(
      <Chat propsMessage={propsNegClosed} />
    );
    expect(getByText('Lascia una recensione'));

    spyIntersect.mockRestore();
  });
});
