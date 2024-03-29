import { HeaderBar } from '../../Navigation/AppBar';
import * as React from 'react';
import {
  renderApolloNoRouter,
  cleanup,
  fireEvent,
} from '../../../test-utils/test-utils';
import { act } from '@testing-library/react';
import { Exact, MeQuery } from '../../../generated/graphql';
import { isLoggedInVar, cache } from '../../../cache';
import { LazyQueryResult } from '@apollo/client';
import { navigate } from '@reach/router';

jest.mock('@reach/router', () => ({
  navigate: jest.fn(),
}));

const meResultLoggedOut = {
  called: false,
  data: undefined,
  loading: false,
  networkStatus: 7,
} as LazyQueryResult<
  MeQuery,
  Exact<{
    [key: string]: never;
  }>
>;

const meResultLoggedIn = {
  client: jest.fn(),
  fetchMore: jest.fn(),
  refetch: jest.fn(),
  startPolling: jest.fn(),
  stopPolling: jest.fn(),
  subscribeToMore: jest.fn(),
  variables: {},
  updateQuery: jest.fn(),
  called: true,
  data: {
    me: {
      address: {
        __typename: 'Address',
        regione: 'LOMBARDIA',
        provincia: 'CO',
        comune: 'Arosio',
      },
      ads: [],
      firstName: 'giovanni',
      lastName: 'gibelli',
      messages: [
        { isViewed: false, sentBy: { _id: '123' } },
        { isViewed: false, sentBy: { _id: '123' } },
      ],
      negotiations: [],
      reviews: [],
      savedAds: [],
      __typename: 'User',
      _id: '605a7c0dc28f1006e42fe146',
    },
    loading: false,
    networkStatus: 7,
  },
} as unknown as LazyQueryResult<
  MeQuery,
  Exact<{
    [key: string]: never;
  }>
>;

isLoggedInVar(true);

const onSubmitLogin = jest.fn();
describe('PageHeader', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders Header with login button and no sidebar if no user loggedin', async () => {
    const mocks: any[] = [];
    const { getByText, queryByText } = renderApolloNoRouter(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <HeaderBar
        isLoggedIn={false}
        onSubmitLogin={onSubmitLogin}
        meQueryResult={meResultLoggedOut}
      />,
      { mocks, addTypename: false }
    );

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(getByText('Log in')).toBeTruthy();
    const sibeBarButton = queryByText('Open sidebar');
    expect(sibeBarButton).not.toBeInTheDocument();
    fireEvent.click(getByText('Log in'));
    expect(getByText('Sign in'));
  });

  it('renders Header without login button', async () => {
    const mocks: any[] = [];
    await act(async () => {
      const container = renderApolloNoRouter(
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        <HeaderBar
          isLoggedIn={true}
          onSubmitLogin={onSubmitLogin}
          meQueryResult={meResultLoggedIn}
        />,
        { mocks, cache }
      );
      await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
      isLoggedInVar(true);
      expect(container.queryByText('Log in')).toBeFalsy();
      expect(container.getByTestId('messages'));
      expect(container.getByTestId('drawer'));
      expect(container.getByText('2'));

      fireEvent.click(container.getByTestId('messages'));
      expect(navigate).toBeCalledTimes(1);
      expect(navigate).toBeCalledWith('/messaggi');
    });
  });
});
