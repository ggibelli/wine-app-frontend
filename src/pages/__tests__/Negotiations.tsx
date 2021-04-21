/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  renderApollo,
  cleanup,
  setupIntersectionObserverMock,
} from '../../test-utils/test-utils';
import { act, fireEvent, waitFor } from '@testing-library/react';
import Negotiations from '../Negotiations';
import * as React from 'react';
import {
  NegotiationsDocument,
  QueryOrderBy,
  TypeAd,
  TypeProduct,
} from '../../generated/graphql';
import { searchedWine } from '../../cache';
import { InMemoryCache } from '@apollo/client';
import { navigate } from '@reach/router';
import { adFactory, negotiationFactory } from '../../test-utils/test-factory';
import * as hooks from '../../utils/useIntersectionHook';
import * as superHooks from '../../generated/graphql';
import _ from 'lodash';
import { debug } from 'console';
// const mockHook = jest.fn();
// const mockHook2 = jest.fn();

// jest.mock('../../utils/useIntersectionHook', () => ({
//   __esModule: true,
//   useIntersect: () => [mockHook(), mockHook2()],
// }));

jest.mock('../../cache', () => ({
  // __esModule: true, // this property makes it work
  ...jest.requireActual<any>('../../cache'),
  __esModule: true, // this property makes it work

  notification: jest.fn(),
}));

const negotiationActive = negotiationFactory.build();
const negotiationClosed = negotiationFactory.build({
  isConcluded: true,
  dateConcluded: 'oggi',
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
        negotiations: [negotiationActive, negotiationClosed],
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
        negotiations: [negotiationActive, negotiationClosed],
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

  it.only('it shows closed negotiations if show closed negotiation is clicked', async () => {
    const {
      getByText,
      getByRole,
      queryByText,
      getAllByRole,
      debug,
    } = renderApollo(
      <Negotiations path='/trattative/' />,
      {
        mocks: [negotiationsSuccessMock, negotiationsSuccessMockBoth],
        addTypename: false,
        cache: new InMemoryCache({
          addTypename: false,
          typePolicies: {
            Query: {
              fields: {
                negotiations: {
                  keyArgs: false,
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore
                  merge(existing = [], incoming, { args }) {
                    let negotiations;
                    const negotiationsUnsorted = _.unionBy(
                      existing.negotiations,
                      incoming.negotiations,
                      '__ref'
                    );
                    if (args && args.orderBy === QueryOrderBy.CreatedAtDesc) {
                      negotiations = _.orderBy(negotiationsUnsorted, '__ref', [
                        'desc',
                      ]);
                    } else if (
                      args &&
                      args.orderBy === QueryOrderBy.CreatedAtAsc
                    ) {
                      negotiations = _.orderBy(negotiationsUnsorted, '__ref', [
                        'asc',
                      ]);
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
          },
        }),
      },
      { route: '/trattative/' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(queryByText('Trattativa concluse:', { exact: false })).toBeFalsy();
    expect(
      getByRole('link', {
        name: 'link-negotiation',
      })
    );
    await waitFor(() => {
      fireEvent.click(
        getByRole('checkbox', { name: 'Mostra anche le trattative chiuse' })
      );
    });

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(queryByText('Trattativa concluse:', { exact: false })).toBeTruthy();
    expect(
      getAllByRole('link', {
        name: 'link-negotiation',
      })
    ).toHaveLength(2);
  });

  it('if renders no ads page and link to create ad', async () => {
    searchedWine({
      wineName: "Barbera d'Asti",
      typeAd: TypeAd.Sell,
      typeProduct: TypeProduct.AdWine,
      harvest: 2015,
      abv: 13.5,
      price: 2,
      liters: 1000,
      isPost: false,
    });
    const { getByTestId } = renderApollo(
      <Negotiations path='/annunci/' />,
      {
        mocks: [adsMockNoAds],
        addTypename: false,
      },
      { route: '/annunci/' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(getByTestId('no-result'));
    fireEvent.click(getByTestId('no-result'));
    const searchedWineCache = searchedWine();
    expect(searchedWineCache?.isPost).toBe(true);
    expect(navigate).toHaveBeenCalledWith('/sell');
  });

  it('renders the Negotiations page with matching ads found state', async () => {
    searchedWine({
      wineName: "Barbera d'Asti",
      typeAd: TypeAd.Sell,
      typeProduct: TypeProduct.AdWine,
      harvest: 2018,
      abv: 13.5,
      price: 2,
      liters: 1000,
      isPost: false,
    });
    const { getByText, getAllByRole } = renderApollo(
      <Negotiations path='/annunci/' />,
      {
        mocks: [adsMockSuccessList8],
        addTypename: false,
      },
      { route: '/annunci/' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    expect(
      getByText(
        "Questi sono gli annunci che abbiamo trovato per te: sono stati pubblicati da utenti interessati all'acquisto."
      )
    );
    expect(getByText('Ordine risultati')).not.toBeVisible();
    expect(
      getByText('Mostra tutti gli annunci per questo vino')
    ).not.toBeVisible();
    // fireEvent.click(getByRole('button', { name: 'filter' }));
    expect(
      getAllByRole('link', {
        name: 'link-ad',
      })
    ).toHaveLength(6);
  });
});

// I think mocking the queryhook is more readable than testing the fetchmore with the actual one
describe('Negotiations page simulating fetch more ads', () => {
  afterEach(cleanup);
  it('it calls fetch more ads on end page', () => {
    searchedWine({
      wineName: "Barbera d'Asti",
      typeAd: TypeAd.Sell,
      typeProduct: TypeProduct.AdWine,
      harvest: 2015,
      abv: 13.5,
      price: 2,
      liters: 1000,
      isPost: false,
    });
    //@ts-expect-error mock
    jest.spyOn(superHooks, 'useAdsWineLazyQuery').mockImplementation(() => [
      jest.fn(),
      {
        data: adsMock4.result.data,
        loading: false,
        fetchMore: fetchMore,
      },
    ]);

    //@ts-expect-error mock reached end of div
    jest.spyOn(hooks, 'useIntersect').mockImplementation(() => [
      jest.fn(),
      {
        isIntersecting: true,
        intersectionRatio: 0.6,
        target: 'element',
      },
    ]);

    const fetchMore = jest.fn();
    renderApollo(
      <Negotiations path='/annunci/' />,
      {
        mocks: [],
        addTypename: false,

        cache: new InMemoryCache({
          addTypename: false,
        }),
      },
      { route: '/annunci/' }
    );

    expect(fetchMore).toHaveBeenCalledTimes(1);
    expect(fetchMore).toHaveBeenCalledWith({
      variables: {
        offset: adsMock4.result.data.ads.ads.length,
        orderBy: QueryOrderBy.CreatedAtDesc,
      },
    });
  });

  it('it calls fetch more ads on changing order', async () => {
    searchedWine({
      wineName: "Barbera d'Asti",
      typeAd: TypeAd.Sell,
      typeProduct: TypeProduct.AdWine,
      harvest: 2015,
      abv: 13.5,
      price: 2,
      liters: 1000,
      isPost: false,
    });
    const fetchMore2 = jest.fn(() => Promise.resolve({ data: {} }));

    //@ts-expect-error mock
    jest.spyOn(superHooks, 'useAdsWineLazyQuery').mockImplementation(() => [
      jest.fn(),
      {
        data: adsMock4.result.data,
        loading: false,
        fetchMore: fetchMore2,
        // fetchMore: { catch: jest.fn() },
      },
    ]);

    //@ts-expect-error mock did not reach end of page
    jest.spyOn(hooks, 'useIntersect').mockImplementation(() => [
      jest.fn(),
      {
        isIntersecting: false,
        intersectionRatio: 0.0,
        target: 'element',
      },
    ]);

    const { getByRole } = renderApollo(
      <Negotiations path='/annunci/' />,
      {
        mocks: [],
        addTypename: false,

        cache: new InMemoryCache({
          addTypename: false,
        }),
      },
      { route: '/annunci/' }
    );
    fireEvent.click(getByRole('button', { name: 'filter' }));
    const orderSelect = getByRole('combobox', { name: 'Ordine risultati' });
    await waitFor(() => {
      fireEvent.change(orderSelect, { target: { value: 'price_DESC' } });
    });
    await waitFor(() => {
      //const input = within(combobox).querySelector('input');

      fireEvent.keyDown(orderSelect, { key: 'ArrowDown' });
    });
    await waitFor(() => {
      fireEvent.keyDown(orderSelect, { key: 'Enter' });
    });
    expect(fetchMore2).toHaveBeenCalledTimes(1);
    expect(fetchMore2).toHaveBeenCalledWith({
      variables: {
        limit: 4,
        orderBy: QueryOrderBy.PriceDesc,
      },
    });
  });
});
