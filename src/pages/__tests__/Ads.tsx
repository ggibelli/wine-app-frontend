/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  renderApollo,
  cleanup,
  setupIntersectionObserverMock,
} from '../../test-utils/test-utils';
import { act, fireEvent, waitFor } from '@testing-library/react';
import Ads from '../Ads';
import * as React from 'react';
import {
  AdsWineDocument,
  QueryOrderBy,
  TypeAd,
  TypeProduct,
} from '../../generated/graphql';
import { searchedWine } from '../../cache';
import { InMemoryCache } from '@apollo/client';
import { navigate } from '@reach/router';
import { adFactory } from '../../test-utils/test-factory';
import * as hooks from '../../utils/useIntersectionHook';
import * as superHooks from '../../generated/graphql';
// const mockHook = jest.fn();
// const mockHook2 = jest.fn();

// jest.mock('../../utils/useIntersectionHook', () => ({
//   __esModule: true,
//   useIntersect: () => [mockHook(), mockHook2()],
// }));

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

const ad = adFactory.build();

const adsBunch = adFactory.buildList(6);
adsBunch.push(
  adFactory.build({
    priceFrom: 5,
    priceTo: 5,
    harvest: 2015,
    litersFrom: 1000,
    litersTo: 1000,
  })
);
adsBunch.push(
  adFactory.build({ datePosted: '08 Apr 21, 18:35', harvest: 2015 })
);
const adsFirstReq = adFactory.buildList(4, {
  datePosted: '08 Apr 21, 18:35',
  harvest: 2015,
});

const adsMock4 = {
  request: {
    query: AdsWineDocument,
    variables: {
      offset: 0,
      limit: 4,
      orderBy: QueryOrderBy.CreatedAtDesc,
      wineName: "Barbera d'Asti",
      typeProduct: TypeProduct.AdWine,
      typeAd: TypeAd.Buy,
    },
  },
  result: {
    data: {
      ads: {
        ads: adsFirstReq,
        pageCount: 8,
      },
    },
  },
};

const adsMockNoAds = {
  request: {
    query: AdsWineDocument,
    variables: {
      offset: 0,
      limit: 4,
      orderBy: QueryOrderBy.CreatedAtDesc,
      wineName: "Barbera d'Asti",
      typeProduct: TypeProduct.AdWine,
      typeAd: TypeAd.Buy,
    },
  },
  result: {
    data: {
      ads: {
        ads: [],
        pageCount: 0,
      },
    },
  },
};

const adsMockSuccess = {
  request: {
    query: AdsWineDocument,
    variables: {
      offset: 0,
      limit: 4,
      orderBy: QueryOrderBy.CreatedAtDesc,
      wineName: "Barbera d'Asti",
      typeProduct: TypeProduct.AdWine,
      typeAd: TypeAd.Buy,
    },
  },
  result: {
    data: {
      ads: {
        ads: [ad],
        pageCount: 1,
      },
    },
  },
};

const adsMockSuccessList8 = {
  request: {
    query: AdsWineDocument,
    variables: {
      offset: 0,
      limit: 4,
      orderBy: QueryOrderBy.CreatedAtDesc,
      wineName: "Barbera d'Asti",
      typeProduct: TypeProduct.AdWine,
      typeAd: TypeAd.Buy,
    },
  },
  result: {
    data: {
      ads: {
        ads: adsBunch,
        pageCount: 8,
      },
    },
  },
};

describe('Ads page', () => {
  beforeEach(() => {
    setupIntersectionObserverMock();
  });
  afterEach(cleanup);

  it('renders the Ads page loading state', async () => {
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
      <Ads path='/annunci/' />,
      {
        mocks: [adsMockSuccess],
        addTypename: false,
      },
      { route: '/annunci/' }
    );
    // waiting for the first useeffect
    await waitFor(() => expect(getByTestId('loading')).toBeTruthy());
  });

  it('renders the Ads page no matching ads found state', async () => {
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
    const { getByText, getByRole } = renderApollo(
      <Ads path='/annunci/' />,
      {
        mocks: [adsMockSuccess],
        addTypename: false,
      },
      { route: '/annunci/' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    expect(
      getByText(
        'Non abbiamo trovato nulla che corrisponde ai criteri di ricerca, ma esistono annunci per questo vino, clicca su filtri e mostra tutto per vederli'
      )
    );
    expect(getByText('Ordine risultati')).not.toBeVisible();
    expect(
      getByText('Mostra tutti gli annunci per questo vino')
    ).not.toBeVisible();
    fireEvent.click(getByRole('button', { name: 'filter' }));
    await waitFor(() =>
      fireEvent.click(
        getByRole('checkbox', {
          name: 'Mostra tutti gli annunci per questo vino',
        })
      )
    );
    expect(
      getByRole('link', {
        name: 'link-ad',
      })
    );
    fireEvent.click(getByText('Vuoi creare un annuncio?'));
    expect(navigate).toHaveBeenCalledTimes(1);
  });

  it('if no searched wine it navigates to /home', async () => {
    searchedWine(undefined);
    renderApollo(
      <Ads path='/annunci/' />,
      {
        mocks: [adsMockSuccess],
        addTypename: false,
      },
      { route: '/annunci/' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    expect(navigate).toHaveBeenCalledWith('/');
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
      <Ads path='/annunci/' />,
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

  it('renders the Ads page with matching ads found state', async () => {
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
      <Ads path='/annunci/' />,
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
describe('Ads page simulating fetch more ads', () => {
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
      <Ads path='/annunci/' />,
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
      <Ads path='/annunci/' />,
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
