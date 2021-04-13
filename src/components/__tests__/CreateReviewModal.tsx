import { CreateReviewModal } from '../../components/ReviewModal';
import * as React from 'react';
import { renderApolloNoRouter, cleanup } from '../../test-utils';
import { fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import { TypeAd } from '../../generated/graphql';
// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('../../cache', () => ({
  ...jest.requireActual<any>('../../cache'),
  __esModule: true, // this property makes it work

  notification: jest.fn(),
}));

describe('CreateReview Component', () => {
  afterEach(cleanup);

  it('renders the CreateReview button buy class and modal closed', () => {
    const { getByRole, queryByText } = renderApolloNoRouter(
      <CreateReviewModal idNegotiation='123' idUser='321' type={TypeAd.Buy} />,
      {
        mocks: [],
        addTypename: false,
      }
    );
    const classes = getByRole('button', {
      name: 'review',
    }).classList.value.split('-');

    expect(classes.includes('buyButton')).toBeTruthy();
    expect(queryByText('Recensisci la trattativa')).toBeFalsy();
  });

  it('renders the CreateReview button sell class and modal closed', () => {
    const { getByRole, queryByText } = renderApolloNoRouter(
      <CreateReviewModal idNegotiation='123' idUser='321' type={TypeAd.Sell} />,
      {
        mocks: [],
        addTypename: false,
      }
    );
    const classes = getByRole('button', {
      name: 'review',
    }).classList.value.split('-');

    expect(classes.includes('sellButton')).toBeTruthy();

    expect(queryByText('Recensisci la trattativa')).toBeFalsy();
  });

  it('Button opens modal and close with cancel', async () => {
    const { getByRole, getByText, queryByText } = renderApolloNoRouter(
      <CreateReviewModal idNegotiation='123' idUser='321' type={TypeAd.Sell} />,
      {
        mocks: [],
        addTypename: false,
      }
    );
    fireEvent.click(
      getByRole('button', {
        name: 'review',
      })
    );

    expect(getByText('Recensisci la trattativa'));
    expect(getByRole('button', { name: 'review' }));

    fireEvent.click(getByRole('button', { name: 'close-modal' }));
    await waitForElementToBeRemoved(() =>
      queryByText('Recensisci la trattativa')
    );

    expect(queryByText('Recensisci la trattativa')).toBeFalsy();
  });

  it.only('Button opens modal and does not create review if no content', () => {
    const { getByRole, getByText } = renderApolloNoRouter(
      <CreateReviewModal idNegotiation='123' idUser='321' type={TypeAd.Sell} />,
      {
        mocks: [],
        addTypename: false,
      }
    );
    fireEvent.click(
      getByRole('button', {
        name: 'review',
      })
    );

    expect(getByText('Recensisci la trattativa'));
    expect(getByRole('button', { name: 'review' }));

    expect(getByText('Lunghezza minima 5 caratteri'));
    expect(
      getByRole('button', {
        name: 'review',
      })
    ).toBeDisabled();
  });

  it.only('Button opens modal and does not create review if less than 5 chars', () => {
    const { getByRole, getByText } = renderApolloNoRouter(
      <CreateReviewModal idNegotiation='123' idUser='321' type={TypeAd.Sell} />,
      {
        mocks: [],
        addTypename: false,
      }
    );
    fireEvent.click(
      getByRole('button', {
        name: 'review',
      })
    );

    expect(getByText('Recensisci la trattativa'));
    expect(getByRole('button', { name: 'review' }));

    fireEvent.change(getByRole('textbox', { name: 'Recensione' }), {
      target: {
        value: 'asd',
      },
    });

    expect(getByText('Lunghezza minima 5 caratteri'));
    expect(
      getByRole('button', {
        name: 'review',
      })
    ).toBeDisabled();
  });

  it.only('Button opens modal and create review if more than 5 chars', async () => {
    const { getByRole, getByText, queryByText } = renderApolloNoRouter(
      <CreateReviewModal idNegotiation='123' idUser='321' type={TypeAd.Sell} />,
      {
        mocks: [],
        addTypename: false,
      }
    );
    fireEvent.click(
      getByRole('button', {
        name: 'review',
      })
    );

    expect(getByText('Recensisci la trattativa'));
    expect(getByRole('button', { name: 'review' }));

    fireEvent.change(getByRole('textbox', { name: 'Recensione' }), {
      target: {
        value: 'nice person',
      },
    });

    expect(getByText('Lunghezza minima 5 caratteri'));
    fireEvent.click(
      getByRole('button', {
        name: 'review',
      })
    );
    await waitForElementToBeRemoved(() =>
      queryByText('Recensisci la trattativa')
    );
    expect(queryByText('Recensisci la trattativa')).toBeFalsy();

    // // expect(queryByText('Recensisci la trattativa')).toBeFalsy();
  });
});

// TODO: add test for rating
