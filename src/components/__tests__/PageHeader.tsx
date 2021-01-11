import { Header } from '../PageHeader';
import * as React from 'react';
import { renderApollo, cleanup, fireEvent } from '../../test-utils';
import { act, screen, waitFor } from '@testing-library/react';
import {
  LoginDocument,
  useMeLazyQuery,
  IsUserLoggedInDocument,
} from '../../generated/graphql';
import {
  isLoggedInVar,
  notificationMessage,
  notificationType,
  cache,
} from '../../cache';
import userEvent from '@testing-library/user-event';

describe('PageHeader', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders Header with login button and no sidebar if no user loggedin', async () => {
    const mocks = [];
    const { getByText, queryByText } = renderApollo(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <Header />,
      { mocks, addTypename: false }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(getByText('Log in')).toBeTruthy();
    const sibeBarButton = queryByText('Open sidebar');
    expect(sibeBarButton).not.toBeInTheDocument();
  });

  it.only('renders Header without login button and sidebar', async () => {
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
    ];
    const { getByText, getByTestId, findByText } = renderApollo(
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
    userEvent.type(screen.getByLabelText(/email/i), 'jhon.dee@someemail.com');
    userEvent.type(screen.getByLabelText(/password/i), 'giovanni');
    userEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => {
      expect(isLoggedInVar()).toBeTruthy();
    });
  }, 10000);
});
