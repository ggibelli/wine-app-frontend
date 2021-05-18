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
import * as superHooks from '../../generated/graphql';

const typePolicies = {
  Query: {
    fields: {
      ads: {
        // Don't cache separate results based on
        // any of this field's arguments.
        keyArgs: ['wineName', 'typeProduct', 'typeAd'],
        merge(existing, incoming, { args }) {
          const merged = existing ? existing.ads.slice(0) : [];
          if (args) {
            // Assume an offset of 0 if args.offset omitted.
            const { offset = 0 } = args;
            for (let i = 0; i < incoming.ads.length; ++i) {
              merged[(offset as number) + i] = incoming.ads[i];
            }
          } else {
            throw new Error('Cache error');
          }
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return {
            __typeName: 'AdsResult',
            ads: merged,
            pageCount: incoming.pageCount,
          };
        },
      },
    },
  },
};

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

const adsFetchMore = adFactory.buildList(4, {
  datePosted: '08 Apr 21, 18:35',
  harvest: 2015,
});

const oldAd = adFactory.build({
  datePosted: '08 Mar 21, 18:35',
  harvest: 2015,
});

const olderAd = adFactory.build({
  datePosted: '08 Jan 21, 18:35',
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

const adsMockSuccessOld = {
  request: {
    query: AdsWineDocument,
    variables: {
      offset: 0,
      limit: 8,
      orderBy: QueryOrderBy.CreatedAtAsc,
      wineName: "Barbera d'Asti",
      typeProduct: TypeProduct.AdWine,
      typeAd: TypeAd.Buy,
    },
  },
  result: {
    data: {
      ads: {
        ads: [oldAd, olderAd],
        pageCount: 2,
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

// I think mocking the queryhook is more readable than testing the fetchmore with the actual one
describe('Ads page simulating fetch more ads', () => {
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
  it('it calls fetch more ads on end page', async () => {
    searchedWine({
      wineName: "Barbera d'Asti",
      typeAd: TypeAd.Sell,
      typeProduct: TypeProduct.AdWine,
      harvest: 2015,
      abv: 13.5,
      priceFrom: 2,
      priceTo: 2,
      litersFrom: 1000,
      litersTo: 1000,
      content: 'nice nice',
      address: {
        provincia: superHooks.Province.AQ,
        regione: superHooks.Regioni.Abruzzo,
        comune: 'Prova',
      },
    });
    //@ts-expect-error mock reached end of div
    // const endPage = jest.spyOn(hooks, 'useIntersect').mockImplementation(() => [
    //   jest.fn(),
    //   {
    //     isIntersecting: true,
    //     intersectionRatio: 0.6,
    //     target: 'element',
    //   },
    // ]);

    const { getAllByRole } = renderApollo(
      <Ads path='/annunci/' />,
      {
        mocks: [adsMock4, adsMockFetchMore],
        addTypename: false,

        cache: new InMemoryCache({
          addTypename: false,
          typePolicies,
        }),
      },
      { route: '/annunci/' }
    );
    // await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    await waitFor(async () => {
      await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
      expect(
        getAllByRole('link', {
          name: 'link-ad',
        })
      ).toHaveLength(4);
    });
    // await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(
      getAllByRole('link', {
        name: 'link-ad',
      })
    ).toHaveLength(8);
  });
});

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
      priceFrom: 2,
      priceTo: 2,
      litersFrom: 1000,
      litersTo: 1000,
      content: 'nice nice',
      address: {
        provincia: superHooks.Province.AQ,
        regione: superHooks.Regioni.Abruzzo,
        comune: 'Prova',
      },
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
      priceFrom: 2,
      priceTo: 2,
      litersFrom: 1000,
      litersTo: 1000,
      content: 'nice nice',
      address: {
        provincia: superHooks.Province.AQ,
        regione: superHooks.Regioni.Abruzzo,
        comune: 'Prova',
      },
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
      priceFrom: 2,
      priceTo: 2,
      litersFrom: 1000,
      litersTo: 1000,
      content: 'nice nice',
      address: {
        provincia: superHooks.Province.AQ,
        regione: superHooks.Regioni.Abruzzo,
        comune: 'Prova',
      },
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
    expect(navigate).toHaveBeenCalledWith('/sell');
  });

  it('renders the Ads page with matching ads found state', async () => {
    searchedWine({
      wineName: "Barbera d'Asti",
      typeAd: TypeAd.Sell,
      typeProduct: TypeProduct.AdWine,
      harvest: 2018,
      abv: 13.5,
      priceFrom: 2,
      priceTo: 2,
      litersFrom: 1000,
      litersTo: 1000,
      content: 'nice nice',
      address: {
        provincia: superHooks.Province.AQ,
        regione: superHooks.Regioni.Abruzzo,
        comune: 'Prova',
      },
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

  it('it changes order ads', async () => {
    searchedWine({
      wineName: "Barbera d'Asti",
      typeAd: TypeAd.Sell,
      typeProduct: TypeProduct.AdWine,
      harvest: 2015,
      abv: 13.5,
      priceFrom: 2,
      priceTo: 2,
      litersFrom: 1000,
      litersTo: 1000,
      content: 'nice nice',
      address: {
        provincia: superHooks.Province.AQ,
        regione: superHooks.Regioni.Abruzzo,
        comune: 'Prova',
      },
    });
    const { getByRole, getAllByRole, getByTestId } = renderApollo(
      <Ads path='/annunci/' />,
      {
        mocks: [adsMockSuccessList8, adsMockSuccessOld],
        addTypename: false,
        cache: new InMemoryCache({
          addTypename: false,
          typePolicies,
        }),
      },
      { route: '/annunci/' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    const myAdsBefore = getAllByRole('link', {
      name: 'link-ad',
    });
    expect(myAdsBefore[0]).toHaveTextContent('pubblicato il 08 Apr 21, 18:35');
    // expect(myAdsBefore[1]).toHaveTextContent(
    //   'Annuncio pubblicato il 07 Apr 21, 18:35'
    // );
    fireEvent.click(getByRole('button', { name: 'filter' }));

    const orderSelect = getByRole('combobox', { name: 'Ordine risultati' });
    fireEvent.change(orderSelect, {
      target: { value: QueryOrderBy.CreatedAtAsc },
    });
    expect(getByTestId('loading')).toBeTruthy();
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    const myAdsAfter = getAllByRole('link', {
      name: 'link-ad',
    });
    expect(myAdsAfter[0]).toHaveTextContent('pubblicato il 08 Mar 21, 18:35');
    expect(myAdsAfter[1]).toHaveTextContent('pubblicato il 08 Jan 21, 18:35');
  });
});
