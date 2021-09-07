import { FavoriteButton } from '../FavoriteButton';
import * as React from 'react';
import { renderApolloNoRouter, cleanup } from '../../test-utils/test-utils';
import { act, waitFor } from '@testing-library/react';
import { SaveAdDocument } from '../../generated/graphql';
import { useLocation } from '@reach/router';

jest.mock('@reach/router', () => ({
  __esModule: true, // this property makes it work
  ...jest.requireActual<any>('@reach/router'),
  useLocation: jest.fn(),
}));

const savedAdSuccess = {
  request: {
    query: SaveAdDocument,
    variables: {
      id: '123',
    },
  },
  result: {
    data: {
      createReview: {
        __typename: 'AdPayload',
        response: {
          __typename: 'Ad',
          _id: '123',
        },
        // errors: { __typename: 'Error' },
      },
    },
  },
};

describe('FavoriteButton Component', () => {
  afterEach(cleanup);

  it('renders the FavoriteButton component', async () => {
    useLocation.mockImplementation(() => ({ pathname: '/test' }));

    // renderApolloNoRouter(<FavoriteButton id='123' timesFavorite={0} />, {
    //   mocks: [],
    //   addTypename: false,
    // });
    await waitFor(() => {
      act(() => {
        renderApolloNoRouter(<FavoriteButton id='123' timesFavorite={0} />, {
          mocks: [],
          addTypename: false,
        });
      });
    });
  });
});
