/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { renderApollo, cleanup } from '../../test-utils/test-utils';
import { act, fireEvent, waitFor, within } from '@testing-library/react';
import Signup from '../Signup';
import * as React from 'react';
import { CreateUserDocument, UserInput } from '../../generated/graphql';
import { notification } from '../../cache';
import { InMemoryCache } from '@apollo/client';
import { navigate } from '@reach/router';

jest.mock('@reach/router', () => ({
  __esModule: true, // this property makes it work
  ...jest.requireActual<any>('@reach/router'),
  navigate: jest.fn(),
}));

jest.mock('../../cache', () => ({
  // __esModule: true, // this property makes it work
  ...jest.requireActual<any>('../../cache'),
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

const user: UserInput = {
  firstName: 'proprova',
  lastName: 'aprov',
  email: 'gio@prova.it',
  password: 'gioVann!234',
  pIva: '26264321204',
  phoneNumber: '3201234567',
  hideContact: false,
  address: {
    comune: 'Agliè',
    via: 'via della prova 1',
  },
};

const userCreatedSuccess = {
  request: {
    query: CreateUserDocument,
    variables: {
      userInput: user,
    },
  },
  result: {
    data: {
      createUser: {
        __typename: 'AuthUserPayload',
        response: {
          __typename: 'AuthUser',
          token: '123abc',
          user: {
            __typename: 'User',
            _id: '123431',
            firstName: 'proprova',
          },
        },
        // errors: { __typename: 'Error' },
      },
    },
  },
};

const userCreatedError = {
  request: {
    query: CreateUserDocument,
    variables: {
      userInput: user,
    },
  },
  result: {
    data: null,
  },
  error: new Error('errore'),
};

describe('Signup page', () => {
  afterEach(cleanup);

  it('renders the Signup page', async () => {
    const { getByText } = renderApollo(
      <Signup path='/registrati' />,
      {
        mocks: [userCreatedSuccess],
        addTypename: false,
        cache: new InMemoryCache({ addTypename: false }),
      },
      { route: '/registrati' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(getByText('Sign up'));
  });

  it('it calls notification if mutation error', async () => {
    const { getByRole, getByTestId } = renderApollo(
      <Signup path='/registrati' />,
      {
        mocks: [userCreatedError],
        addTypename: false,
        cache: new InMemoryCache({ addTypename: false }),
      },
      { route: '/registrati' }
    );
    fireEvent.input(getByRole('textbox', { name: /email/ }), {
      target: {
        value: 'gio@prova.it',
      },
    });
    fireEvent.input(getByRole('textbox', { name: /reemail/i }), {
      target: {
        value: 'gio@prova.it',
      },
    });
    fireEvent.input(getByTestId('password'), {
      target: {
        value: 'gioVann!234',
      },
    });
    fireEvent.input(getByTestId('rePassword'), {
      target: {
        value: 'gioVann!234',
      },
    });
    fireEvent.input(getByRole('textbox', { name: /firstname/i }), {
      target: {
        value: 'proprova',
      },
    });
    fireEvent.input(getByRole('textbox', { name: /lastname/i }), {
      target: {
        value: 'aprov',
      },
    });
    fireEvent.input(getByRole('textbox', { name: /via/i }), {
      target: {
        value: 'via della prova 1',
      },
    });

    const comboboxComuni = getByTestId('combobox-comuni');
    const inputComuni = within(comboboxComuni).getByRole('textbox');
    comboboxComuni.focus();
    fireEvent.change(inputComuni, { target: { value: 'a' } });
    await waitFor(() => {
      //const input = within(combobox).querySelector('input');

      fireEvent.keyDown(comboboxComuni, { key: 'ArrowDown' });
    });
    await waitFor(() => {
      fireEvent.keyDown(comboboxComuni, { key: 'Enter' });
    });

    fireEvent.change(getByRole('textbox', { name: /piva/i }), {
      target: {
        value: '26264321204',
      },
    });
    fireEvent.input(getByRole('textbox', { name: /phonenumber/i }), {
      target: {
        value: '3201234567',
      },
    });
    fireEvent.change(getByTestId('hideContact'), {
      target: {
        checked: true,
      },
    });
    await waitFor(() => {
      fireEvent.submit(getByRole('button', { name: /submit/i }));
    });
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(notification).toHaveBeenCalledWith({
      type: 'error',
      message: 'errore',
    });
  }, 15000);

  it('it calls notification and localstorage if mutation successful', async () => {
    const localStorageSetMock = jest.spyOn(localStorage, 'setItem');
    const { getByText, getByRole, getByTestId } = renderApollo(
      <Signup path='/registrati' />,
      {
        mocks: [userCreatedSuccess],
        addTypename: false,
      },
      { route: '/registrati' }
    );
    fireEvent.input(getByRole('textbox', { name: /email/ }), {
      target: {
        value: 'gio@prova.it',
      },
    });
    fireEvent.input(getByRole('textbox', { name: /reemail/i }), {
      target: {
        value: 'gio@prova.it',
      },
    });
    fireEvent.input(getByTestId('password'), {
      target: {
        value: 'gioVann!234',
      },
    });
    fireEvent.input(getByTestId('rePassword'), {
      target: {
        value: 'gioVann!234',
      },
    });
    fireEvent.input(getByRole('textbox', { name: /firstname/i }), {
      target: {
        value: 'proprova',
      },
    });
    fireEvent.input(getByRole('textbox', { name: /lastname/i }), {
      target: {
        value: 'aprov',
      },
    });
    fireEvent.input(getByRole('textbox', { name: /via/i }), {
      target: {
        value: 'via della prova 1',
      },
    });

    const comboboxComuni = getByTestId('combobox-comuni');
    const inputComuni = within(comboboxComuni).getByRole('textbox');
    comboboxComuni.focus();
    fireEvent.change(inputComuni, { target: { value: 'a' } });
    await waitFor(() => {
      //const input = within(combobox).querySelector('input');

      fireEvent.keyDown(comboboxComuni, { key: 'ArrowDown' });
    });
    await waitFor(() => {
      fireEvent.keyDown(comboboxComuni, { key: 'Enter' });
    });

    fireEvent.change(getByRole('textbox', { name: /piva/i }), {
      target: {
        value: '26264321204',
      },
    });
    fireEvent.input(getByRole('textbox', { name: /phonenumber/i }), {
      target: {
        value: '3201234567',
      },
    });
    fireEvent.change(getByTestId('hideContact'), {
      target: {
        checked: true,
      },
    });
    await waitFor(() => {
      fireEvent.submit(getByRole('button', { name: /submit/i }));
    });

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(getByText('Sign up'));
    expect(navigate).toHaveBeenCalledWith('/');
    expect(localStorageSetMock).toHaveBeenCalledTimes(2);

    expect(localStorageSetMock).toHaveBeenNthCalledWith(
      1,
      'wineapp-user-token',
      '123abc'
    );
    expect(localStorageSetMock).toHaveBeenNthCalledWith(
      2,
      'wineapp-user-id',
      '123431'
    );
    expect(notification).toHaveBeenCalledWith({
      message: 'welcome',
      type: 'success',
    });
  }, 15000);
});
