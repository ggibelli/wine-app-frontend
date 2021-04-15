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
adsBunch.push(adFactory.build({ priceFrom: 5, priceTo: 5, harvest: 2015 }));
adsBunch.push(
  adFactory.build({ datePosted: '08 Apr 21, 18:35', harvest: 2015 })
);
const adsFirstReq = adFactory.buildList(4, {
  datePosted: '08 Apr 21, 18:35',
  harvest: 2015,
});
const adsFetchMore = adFactory.buildList(4, {
  datePosted: '09 Apr 21, 18:35',
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

const adsMockFetchMore = {
  request: {
    query: AdsWineDocument,
    variables: {
      offset: 4,
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
        ads: adsFetchMore,
        pageCount: 8,
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

  it('renders the Ads page with matching ads found state', async () => {
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
    const { getByText, debug, queryByText, getAllByRole } = renderApollo(
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
    ).toHaveLength(1);
    debug();
  });
});

describe('Ads page simulating fetch more ads', () => {
  beforeEach(() => {
    // setupIntersectionObserverMock();
  });
  afterEach(cleanup);

  it('it calls fetch more ads', async () => {
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

    //@ts-expect-error mock
    jest.spyOn(hooks, 'useIntersect').mockImplementation(() => [
      jest.fn(),
      {
        isIntersecting: true,
        intersectionRatio: 0.6,
        target: 'element',
      },
    ]);

    const fetchMore = jest.fn();
    const container = renderApollo(
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

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(fetchMore).toHaveBeenCalledTimes(1);
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
  });

  it('it calls fetch more ads', async () => {
    jest.mock('../../utils/useIntersectionHook', () => ({
      __esModule: true,
      useIntersect: () => [
        jest.fn(),
        {
          isIntersecting: true,
          intersectionRatio: 0.7,
          target: { current: true },
        },
      ],
    }));

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    // fireEvent.click(container.getByTestId('diocan'));
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
  });
});
