import { CreateReview } from '../CreateReview';
import * as React from 'react';
import { renderApolloNoRouter, cleanup } from '../../test-utils';
import { act, fireEvent } from '@testing-library/react';
import { CreateReviewDocument, TypeAd } from '../../generated/graphql';
import { notification } from '../../cache';

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('../../cache', () => ({
  ...jest.requireActual<any>('../../cache'),
  __esModule: true, // this property makes it work

  notification: jest.fn(),
}));

const review = {
  negotiation: '123',
  forUser: '321',
  rating: 4,
  content: 'bella',
  type: TypeAd.Buy,
};

const reviewCreatedSuccess = {
  request: {
    query: CreateReviewDocument,
    variables: {
      review: review,
    },
  },
  result: {
    data: {
      createReview: {
        __typename: 'ReviewPayload',
        response: {
          __typename: 'Review',
          _id: '123',
        },
        // errors: { __typename: 'Error' },
      },
    },
  },
};

const reviewCreatedError = {
  request: {
    query: CreateReviewDocument,
    variables: {
      review: review,
    },
  },
  result: {
    data: {
      createReview: {
        __typename: 'ReviewPayload',
        response: null,
        errors: [{ name: 'error', text: 'ahia' }],
      },
    },
  },
};

describe('CreateReview Component', () => {
  afterEach(cleanup);

  it.only('renders the CreateReview button', () => {
    const { getByRole } = renderApolloNoRouter(
      <CreateReview review={review} disabled={false} closeModal={jest.fn()} />,
      {
        mocks: [],
        addTypename: false,
      }
    );

    expect(getByRole('button', { name: 'review' }));
  });

  it.only('Create review successfull mutation', async () => {
    const handleClose = jest.fn();
    const { getByRole } = renderApolloNoRouter(
      <CreateReview
        review={review}
        disabled={false}
        closeModal={handleClose}
      />,
      {
        mocks: [reviewCreatedSuccess],
        addTypename: false,
      }
    );
    fireEvent.click(getByRole('button', { name: 'review' }));

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(handleClose).toBeCalledTimes(1);
    expect(notification).toBeCalledTimes(1);
    expect(notification).toBeCalledWith({
      type: 'success',
      message: 'Recensione creata con successo',
    });
  });

  it.only('Create review error mutation', async () => {
    const handleClose = jest.fn();
    const { getByRole } = renderApolloNoRouter(
      <CreateReview
        review={review}
        disabled={false}
        closeModal={handleClose}
      />,
      {
        mocks: [reviewCreatedError],
        addTypename: false,
      }
    );
    fireEvent.click(getByRole('button', { name: 'review' }));

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(handleClose).toBeCalledTimes(1);
    expect(notification).toBeCalledTimes(1);
    expect(notification).toBeCalledWith({
      type: 'error',
      message: 'ahia',
    });
  });
});
