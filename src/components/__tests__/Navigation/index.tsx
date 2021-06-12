/* eslint-disable @typescript-eslint/no-unsafe-return */
import * as React from 'react';
import { Header } from '../../Navigation';
import {
  renderApolloNoRouter,
  cleanup,
  fireEvent,
} from '../../../test-utils/test-utils';
import { act, waitFor } from '@testing-library/react';
import { LoginDocument, MeDocument } from '../../../generated/graphql';
import { isLoggedInVar, cache, notification, myInfo } from '../../../cache';
import userEvent from '@testing-library/user-event';

jest.mock('../../../cache', () => ({
  // __esModule: true, // this property makes it work
  ...jest.requireActual<any>('../../../cache'),
  __esModule: true, // this property makes it work

  notification: jest.fn(),
}));

const localStorageMock = (function () {
  let store: Record<string | number, string> = {};

  return {
    getItem: function (key: string | number) {
      return store[key] || null;
    },
    setItem: function (
      key: string | number,
      value: { toString: () => string }
    ) {
      store[key] = value.toString();
    },
    removeItem: function (key: string | number) {
      delete store[key];
    },
    clear: function () {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('Header component', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);
  beforeEach(() => isLoggedInVar(false));

  it('renders Header', async () => {
    const mocks: any[] = [];
    const { getByText, queryByText } = renderApolloNoRouter(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <Header />,
      { mocks, addTypename: false }
    );

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(getByText('Log in')).toBeTruthy();
    const sibeBarButton = queryByText('Open sidebar');
    expect(sibeBarButton).not.toBeInTheDocument();
    fireEvent.click(getByText('Log in'));
    expect(getByText('Sign in'));
  });

  it('login mutation error', async () => {
    const mocks = [
      {
        request: {
          query: LoginDocument,
          variables: { email: 'jhon.dee@someemail.com', password: 'giovanni' },
        },
        result: {
          data: undefined,
        },
        error: new Error('errore'),
      },
    ];
    const localStorageSetMock = jest.spyOn(localStorage, 'setItem');

    const { getByText, getByLabelText, getByTestId, getByRole } =
      renderApolloNoRouter(
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        <Header />,
        { mocks, cache, addTypename: true, resolvers: {} }
      );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(isLoggedInVar()).toBeFalsy();
    const loginButton = getByText('Log in');

    await waitFor(() => {
      fireEvent.click(loginButton);
    });
    userEvent.type(getByLabelText(/email/i), 'jhon.dee@someemail.com');
    userEvent.type(getByTestId('password'), 'giovanni');
    await waitFor(() => {
      fireEvent.submit(getByRole('button', { name: /submit/i }));
    });
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    const isLogged = isLoggedInVar();
    expect(isLogged).toBeFalsy();
    expect(notification).toHaveBeenCalledWith({
      message: 'errore',
      type: 'error',
    });
    expect(localStorageSetMock).toHaveBeenCalledTimes(0);
  }, 10000);

  it('login mutation successful', async () => {
    const mocks = [
      {
        request: {
          query: LoginDocument,
          variables: { email: 'jhon.dee@someemail.com', password: 'giovanni' },
        },
        result: {
          data: {
            login: {
              errors: [],
              response: {
                token: '123abc',
                user: {
                  _id: '111aaa',
                  firstName: 'Giovanni',
                  __typename: 'User',
                },
                __typename: 'AuthUser',
              },
              __typename: 'AuthUserPayload',
            },
          },
        },
      },
      {
        request: {
          query: MeDocument,
          variables: {},
        },
        result: {
          data: {
            me: {
              _id: '111aaa',
              firstName: 'Giovanni',
              lastName: 'vabb',
              address: {
                comune: 'popopo',
              },
              ads: [],
              savedAds: [],
              messages: [],
              negotiations: [],
              reviews: [],
            },
          },
        },
      },
    ];
    const localStorageSetMock = jest.spyOn(localStorage, 'setItem');

    const { getByText, getByLabelText, getByTestId, getByRole } =
      renderApolloNoRouter(
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        <Header />,
        { mocks, cache, addTypename: true, resolvers: {} }
      );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(isLoggedInVar()).toBeFalsy();
    const loginButton = getByText('Log in');

    await waitFor(() => {
      fireEvent.click(loginButton);
    });
    userEvent.type(getByLabelText(/email/i), 'jhon.dee@someemail.com');
    userEvent.type(getByTestId('password'), 'giovanni');
    await waitFor(() => {
      fireEvent.submit(getByRole('button', { name: /submit/i }));
    });
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    await waitFor(() => {
      expect(isLoggedInVar()).toBeTruthy();
    });
    const me = myInfo();
    expect(notification).toHaveBeenCalledWith({
      message: 'welcome back',
      type: 'success',
    });
    expect(localStorageSetMock).toHaveBeenCalledTimes(2);

    expect(localStorageSetMock).toHaveBeenNthCalledWith(
      1,
      'wineapp-user-token',
      '123abc'
    );
    expect(localStorageSetMock).toHaveBeenNthCalledWith(
      2,
      'wineapp-user-id',
      '111aaa'
    );
    expect(me).toStrictEqual({
      _id: '111aaa',
      firstName: 'Giovanni',
      lastName: 'vabb',
      address: {
        comune: 'popopo',
      },
      ads: [],
      savedAds: [],
      messages: [],
      negotiations: [],
      reviews: [],
    });
  }, 10000);

  it('lazy query executed if logged in', async () => {
    isLoggedInVar(true);
    const mocks = [
      {
        request: {
          query: MeDocument,
          variables: {},
        },
        result: {
          data: {
            me: {
              _id: '111aaa',
              firstName: 'Giovanni',
              lastName: 'vabb',
              address: {
                comune: 'popopo',
              },
              ads: [],
              savedAds: [],
              messages: [],
              negotiations: [],
              reviews: [],
            },
          },
        },
      },
    ];

    renderApolloNoRouter(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <Header />,
      { mocks, cache, addTypename: true }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    const me = myInfo();
    expect(me).toStrictEqual(mocks[0].result.data.me);
  }, 10000);
});
