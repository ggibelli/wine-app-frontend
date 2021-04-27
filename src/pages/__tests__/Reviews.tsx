/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  renderApollo,
  cleanup,
  setupIntersectionObserverMock,
} from '../../test-utils/test-utils';
import { act, fireEvent, waitFor } from '@testing-library/react';
import Reviews from '../Reviews';
import * as React from 'react';
import { ReviewsDocument, QueryOrderBy, TypeAd } from '../../generated/graphql';
import { InMemoryCache } from '@apollo/client';
import { reviewFactory, user, user2 } from '../../test-utils/test-factory';
import * as hooks from '../../utils/useIntersectionHook';

const typePolicies = {
  Query: {
    fields: {
      reviews: {
        keyArgs: [],
        merge(existing, incoming, { args }) {
          const merged = existing ? existing.reviews.slice(0) : [];
          if (args) {
            // Assume an offset of 0 if args.offset omitted.
            const { offset = 0 } = args;
            for (let i = 0; i < incoming.reviews.length; ++i) {
              merged[(offset as number) + i] = incoming.reviews[i];
            }
          } else {
            throw new Error('Cache error');
          }
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return {
            __typeName: 'ReviewResult',
            reviews: merged,
            pageCount: incoming.pageCount,
          };
        },
      },
    },
  },
};

jest.mock('../../cache', () => ({
  // __esModule: true, // this property makes it work
  ...jest.requireActual<any>('../../cache'),
  __esModule: true, // this property makes it work
  notification: jest.fn(),
}));

const review1 = reviewFactory.build();
const review2 = reviewFactory.build({
  dateCreated: 'ieri',
});
const review3 = reviewFactory.build({
  type: TypeAd.Sell,
  dateCreated: '100 anni fa',
});
const review4 = reviewFactory.build({
  createdBy: user2,
  forUser: user,
  dateCreated: '200 anni fa',
});

const reviewsSuccessMock = {
  request: {
    query: ReviewsDocument,
    variables: {
      offset: 0,
      limit: 4,
      orderBy: QueryOrderBy.CreatedAtDesc,
    },
  },
  result: {
    data: {
      reviews: {
        reviews: [review1, review2, review3, review4],
        pageCount: 4,
      },
    },
  },
};

const reviewsSuccessFirstRender = {
  request: {
    query: ReviewsDocument,
    variables: {
      offset: 0,
      limit: 4,
      orderBy: QueryOrderBy.CreatedAtDesc,
    },
  },
  result: {
    data: {
      reviews: {
        reviews: [review1, review2],
        pageCount: 2,
      },
    },
  },
};

const reviewsSuccessFetchMore = {
  request: {
    query: ReviewsDocument,
    variables: {
      offset: 2,
      limit: 4,
      orderBy: QueryOrderBy.CreatedAtDesc,
    },
  },
  result: {
    data: {
      reviews: {
        reviews: [review3, review4],
        pageCount: 2,
      },
    },
  },
};

const reviewsSuccessNewOrder = {
  request: {
    query: ReviewsDocument,
    variables: {
      offset: 0,
      limit: 2,
      orderBy: QueryOrderBy.CreatedAtAsc,
    },
  },
  result: {
    data: {
      reviews: {
        reviews: [review3, review4],
        pageCount: 2,
      },
    },
  },
};

const reviewsErrorMock = {
  request: {
    query: ReviewsDocument,
    variables: {
      offset: 0,
      limit: 4,
      orderBy: QueryOrderBy.CreatedAtDesc,
    },
  },
  result: {
    data: null,
  },
  error: new Error('errore'),
};

// I think mocking the queryhook is more readable than testing the fetchmore with the actual one
describe('Reviews page simulating fetch more ads', () => {
  afterEach(cleanup);
  it('it fetches more negotiations on end page', async () => {
    //@ts-expect-error mock reached end of div
    const endPage = jest.spyOn(hooks, 'useIntersect').mockImplementation(() => [
      jest.fn(),
      {
        isIntersecting: true,
        intersectionRatio: 0.5,
        target: 'element',
      },
    ]);
    const { getAllByRole } = renderApollo(
      <Reviews path='/recensioni/' />,
      {
        mocks: [reviewsSuccessFirstRender, reviewsSuccessFetchMore],
        addTypename: false,
        cache: new InMemoryCache({
          addTypename: false,
          typePolicies,
        }),
      },
      { route: '/recensioni/' }
    );
    await waitFor(async () => {
      await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
      expect(
        getAllByRole('img', {
          name: '5 Stars',
        })
      ).toHaveLength(2);
    });

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(
      getAllByRole('img', {
        name: '5 Stars',
      })
    ).toHaveLength(4);
    endPage.mockRestore();
  });
});

describe('Reviews page', () => {
  beforeEach(() => {
    setupIntersectionObserverMock();
  });
  afterEach(cleanup);

  it('renders the Reviews page loading state', async () => {
    const { getByTestId } = renderApollo(
      <Reviews path='/recensioni/' />,
      {
        mocks: [reviewsSuccessFirstRender],
        addTypename: false,
      },
      { route: '/recensioni/' }
    );
    // waiting for the first useeffect
    await waitFor(() => expect(getByTestId('loading')).toBeTruthy());
  });

  it('renders the Reviews page success state', async () => {
    const { getAllByRole } = renderApollo(
      <Reviews path='/recensioni/' />,
      {
        mocks: [reviewsSuccessMock],
        addTypename: false,
      },
      { route: '/recensioni/' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    expect(
      getAllByRole('img', {
        name: '5 Stars',
      })
    ).toHaveLength(4);
  });

  it('renders the Reviews page error state', async () => {
    const { getByText } = renderApollo(
      <Reviews path='/recensioni/' />,
      {
        mocks: [reviewsErrorMock],
        addTypename: false,
      },
      { route: '/recensioni/' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    expect(getByText('error'));
  });

  it('it changes order reviews', async () => {
    const {
      getByRole,

      getByTestId,
      getAllByTestId,
    } = renderApollo(
      <Reviews path='/recensioni/' />,
      {
        mocks: [reviewsSuccessFirstRender, reviewsSuccessNewOrder],
        addTypename: false,
        cache: new InMemoryCache({
          addTypename: false,
          typePolicies,
        }),
      },
      { route: '/recensioni/' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(getAllByTestId('date')).toBeTruthy();

    const reviewsBefore = getAllByTestId('date');

    expect(reviewsBefore[0]).toHaveTextContent('Recensito il oggi');
    expect(reviewsBefore[1]).toHaveTextContent('Recensito il ieri');
    const orderSelect = getByRole('combobox', { name: 'Ordine risultati' });
    fireEvent.change(orderSelect, {
      target: { value: QueryOrderBy.CreatedAtAsc },
    });
    expect(getByTestId('loading')).toBeTruthy();
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    const reviewsAfter = getAllByTestId('date');
    expect(reviewsAfter[0]).toHaveTextContent('Recensito il 100 anni fa');
    expect(reviewsAfter[1]).toHaveTextContent('Recensito il 200 anni fa');
  });
});
