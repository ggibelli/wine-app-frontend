/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  renderApollo,
  cleanup,
  setupIntersectionObserverMock,
} from '../../test-utils/test-utils';
import { act, fireEvent, waitFor } from '@testing-library/react';
import Negotiations from '../Negotiations';
import * as React from 'react';
import { NegotiationsDocument, QueryOrderBy } from '../../generated/graphql';
import { InMemoryCache } from '@apollo/client';
import { negotiationFactory } from '../../test-utils/test-factory';
import * as hooks from '../../utils/useIntersectionHook';
import { unionBy, orderBy } from 'lodash';

const typePolicies = {
  Query: {
    fields: {
      negotiations: {
        keyArgs: [],
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        merge(existing = [], incoming, { args }) {
          let negotiations;
          const negotiationsUnsorted = unionBy(
            existing.negotiations,
            incoming.negotiations,
            '__ref'
          );
          if (args && args.orderBy === QueryOrderBy.CreatedAtDesc) {
            negotiations = orderBy(negotiationsUnsorted, '__ref', ['desc']);
          } else if (args && args.orderBy === QueryOrderBy.CreatedAtAsc) {
            negotiations = orderBy(negotiationsUnsorted, '__ref', ['asc']);
          } else {
            negotiations = negotiationsUnsorted;
          }
          return {
            __typeName: 'NegotiationResult',
            negotiations: negotiations,
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

const negotiationActive = negotiationFactory.build({
  dateCreated: "l'altroieri",
});
const negotiationOther = negotiationFactory.build({
  dateCreated: 'ieri',
  isConcluded: false,
});
const negotiationClosed = negotiationFactory.build({
  dateCreated: 'ieri',
  isConcluded: true,
  dateConcluded: 'oggi',
});
const oldNegotiation = negotiationFactory.build({
  dateCreated: 'mille anni fa',
});
const olderNegotiation = negotiationFactory.build({
  dateCreated: 'duemila anni fa',
});

const negotiationsSuccessMock = {
  request: {
    query: NegotiationsDocument,
    variables: {
      offset: 0,
      limit: 4,
      orderBy: QueryOrderBy.CreatedAtDesc,
      isConcluded: false,
    },
  },
  result: {
    data: {
      negotiations: {
        negotiations: [negotiationActive],
        pageCount: 2,
      },
    },
  },
};

const negotiationsSuccessMockBoth = {
  request: {
    query: NegotiationsDocument,
    variables: {
      offset: 0,
      limit: 1,
      orderBy: QueryOrderBy.CreatedAtDesc,
      isConcluded: true,
    },
  },
  result: {
    data: {
      negotiations: {
        negotiations: [negotiationClosed],
        pageCount: 2,
      },
    },
  },
};

const negotiationsSuccessMockFetchMore = {
  request: {
    query: NegotiationsDocument,
    variables: {
      offset: 1,
      limit: 4,
      orderBy: QueryOrderBy.CreatedAtDesc,
      isConcluded: false,
    },
  },
  result: {
    data: {
      negotiations: {
        negotiations: [negotiationOther],
        pageCount: 2,
      },
    },
  },
};

const negotiationsSuccessOrder = {
  request: {
    query: NegotiationsDocument,
    variables: {
      offset: 0,
      limit: 4,
      orderBy: QueryOrderBy.CreatedAtDesc,
      isConcluded: false,
    },
  },
  result: {
    data: {
      negotiations: {
        negotiations: [negotiationActive, negotiationOther],
        pageCount: 2,
      },
    },
  },
};

const negotiationsSuccessOrderRefetch = {
  request: {
    query: NegotiationsDocument,
    variables: {
      offset: 0,
      limit: 2,
      orderBy: QueryOrderBy.CreatedAtAsc,
      isConcluded: false,
    },
  },
  result: {
    data: {
      negotiations: {
        negotiations: [oldNegotiation, olderNegotiation],
        pageCount: 2,
      },
    },
  },
};

const negotiationsErrorMock = {
  request: {
    query: NegotiationsDocument,
    variables: {
      offset: 0,
      limit: 4,
      orderBy: QueryOrderBy.CreatedAtDesc,
      isConcluded: false,
    },
  },
  result: {
    data: null,
  },
  error: new Error('errore'),
};

// I think mocking the queryhook is more readable than testing the fetchmore with the actual one
describe('Negotiations page simulating fetch more ads', () => {
  afterEach(cleanup);
  beforeEach(() => {
    global.IntersectionObserver = class IntersectionObserver {
      constructor(private func, private options) {}

      observe(element: HTMLElement) {
        this.func([
          { isIntersecting: true, target: element, intersectionRatio: 1 },
        ]);
      }

      disconnect() {
        return null;
      }

      unobserve() {
        return null;
      }
    };
  });
  it('it fetches more negotiations on end page', async () => {
    //@ts-expect-error mock reached end of div
    // const endPage = jest.spyOn(hooks, 'useIntersect').mockImplementation(() => [
    //   jest.fn(),
    //   {
    //     isIntersecting: true,
    //     intersectionRatio: 0.6,
    //     target: 'element',
    //   },
    // ]);

    const { getByRole, getAllByRole } = renderApollo(
      <Negotiations path='/trattative/' />,
      {
        mocks: [negotiationsSuccessMock, negotiationsSuccessMockFetchMore],
        addTypename: false,
        cache: new InMemoryCache({
          addTypename: false,
          typePolicies,
        }),
      },
      { route: '/trattative/' }
    );
    await waitFor(async () => {
      await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
      expect(
        getByRole('link', {
          name: 'link-negotiation',
        })
      );
    });

    // await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(
      getAllByRole('link', {
        name: 'link-negotiation',
      })
    ).toHaveLength(2);
    //endPage.mockRestore();
  });
});

describe('Negotiations page', () => {
  beforeEach(() => {
    setupIntersectionObserverMock();
  });
  afterEach(cleanup);

  it('renders the Negotiations page loading state', async () => {
    const { getByTestId } = renderApollo(
      <Negotiations path='/trattative/' />,
      {
        mocks: [negotiationsSuccessMock],
        addTypename: true,
      },
      { route: '/trattative/' }
    );
    // waiting for the first useeffect
    await waitFor(() => expect(getByTestId('loading')).toBeTruthy());
  });

  it('renders the Negotiations page success state', async () => {
    const { getByRole } = renderApollo(
      <Negotiations path='/trattative/' />,
      {
        mocks: [negotiationsSuccessMock],
        addTypename: false,
      },
      { route: '/trattative/' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    expect(
      getByRole('link', {
        name: 'link-negotiation',
      })
    );
  });

  it('renders the Negotiations page error state', async () => {
    const { getByText } = renderApollo(
      <Negotiations path='/trattative/' />,
      {
        mocks: [negotiationsErrorMock],
        addTypename: false,
      },
      { route: '/trattative/' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    expect(getByText('errore'));
  });

  it('it shows closed negotiations if show closed negotiation is clicked', async () => {
    const { getByRole, queryByText, getAllByRole, getByTestId } = renderApollo(
      <Negotiations path='/trattative/' />,
      {
        mocks: [negotiationsSuccessMock, negotiationsSuccessMockBoth],
        addTypename: false,
        cache: new InMemoryCache({
          addTypename: false,
          typePolicies,
        }),
      },
      { route: '/trattative/' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(queryByText('Trattativa conclusa:', { exact: false })).toBeFalsy();
    expect(
      getByRole('link', {
        name: 'link-negotiation',
      })
    );
    fireEvent.click(
      getByRole('checkbox', { name: 'Mostra anche le trattative chiuse' })
    );
    expect(getByTestId('loading')).toBeTruthy();
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(queryByText('Trattativa conclusa:', { exact: false })).toBeTruthy();
    expect(
      getAllByRole('link', {
        name: 'link-negotiation',
      })
    ).toHaveLength(2);
  });

  it('it changes order negotiations', async () => {
    const { getByRole, getAllByTestId, getByTestId } = renderApollo(
      <Negotiations path='/trattative/' />,
      {
        mocks: [negotiationsSuccessOrder, negotiationsSuccessOrderRefetch],
        addTypename: false,
        cache: new InMemoryCache({
          addTypename: false,
          typePolicies,
        }),
      },
      { route: '/trattative/' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    const negotiationsBefore = getAllByTestId('published');
    expect(negotiationsBefore[1]).toHaveTextContent(
      "Trattativa aperta: l'altroieri"
    );
    expect(negotiationsBefore[0]).toHaveTextContent('Trattativa aperta: ieri');
    const orderSelect = getByRole('combobox', { name: 'Ordine risultati' });
    fireEvent.change(orderSelect, {
      target: { value: QueryOrderBy.CreatedAtAsc },
    });
    expect(getByTestId('loading')).toBeTruthy();
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    const negotiationsAfter = getAllByTestId('published');
    expect(negotiationsAfter[2]).toHaveTextContent(
      'Trattativa aperta: mille anni fa'
    );
    expect(negotiationsAfter[3]).toHaveTextContent(
      'Trattativa aperta: duemila anni fa'
    );
  });
});
