import { FavoriteButton } from '../FavoriteButton';
import * as React from 'react';
import { renderApolloNoRouter, cleanup } from '../../test-utils/test-utils';
import { act, fireEvent, waitFor } from '@testing-library/react';
import { SaveAdDocument } from '../../generated/graphql';

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
    await waitFor(() =>
      act(() => {
        renderApolloNoRouter(<FavoriteButton id='123' />, {
          mocks: [],
          addTypename: false,
        });
      })
    );
  });
});
