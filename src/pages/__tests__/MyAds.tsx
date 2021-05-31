/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  renderApollo,
  cleanup,
  setupIntersectionObserverMock,
} from '../../test-utils/test-utils';
import { act, fireEvent, waitFor } from '@testing-library/react';
import MyAds from '../MyAds';
import * as React from 'react';
import { AdsForUserDocument, QueryOrderBy } from '../../generated/graphql';
import { myInfo } from '../../cache';
import { adFactory, user } from '../../test-utils/test-factory';
import * as hooks from '../../utils/useIntersectionHook';
import _ from 'lodash';
import { InMemoryCache } from '@apollo/client';

const typePolicies = {
  Query: {
    fields: {
      adsForUser: {
        keyArgs: ['user'],
        merge(existing = [], incoming, { args }) {
          let ads;
          const adsUnsorted = _.unionBy(existing.ads, incoming.ads, '__ref');
          if (args && args.orderBy === QueryOrderBy.CreatedAtDesc) {
            ads = _.orderBy(adsUnsorted, '__ref', ['desc']);
          } else if (args && args.orderBy === QueryOrderBy.CreatedAtAsc) {
            ads = _.orderBy(adsUnsorted, '__ref', ['asc']);
          } else {
            ads = adsUnsorted;
          }
          return {
            __typeName: 'AdsResult',
            ads: ads,
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

const ad = adFactory.build({ wineName: 'Brachetto' });
const adInactive = adFactory.build({
  isActive: false,
  wineName: 'Dolcetto',
  datePosted: '08 Apr 21, 18:35',
});

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
const oldAd = adFactory.build({
  datePosted: '08 Mar 21, 18:35',
  harvest: 2015,
});

const olderAd = adFactory.build({
  datePosted: '08 Jan 21, 18:35',
  harvest: 2015,
});

const adsMockSuccess = {
  request: {
    query: AdsForUserDocument,
    variables: {
      offset: 0,
      limit: 4,
      orderBy: QueryOrderBy.CreatedAtDesc,
      user: user._id,
      isActive: undefined,
    },
  },
  result: {
    data: {
      adsForUser: {
        ads: [ad, adInactive],
        pageCount: 2,
      },
    },
  },
};

const adsMockSuccessOld = {
  request: {
    query: AdsForUserDocument,
    variables: {
      offset: 0,
      limit: 2,
      orderBy: QueryOrderBy.CreatedAtAsc,
      user: user._id,
      isActive: false,
    },
  },
  result: {
    data: {
      adsForUser: {
        ads: [oldAd, olderAd],
        pageCount: 2,
      },
    },
  },
};

const adsMockFirstReq = {
  request: {
    query: AdsForUserDocument,
    variables: {
      offset: 0,
      limit: 4,
      orderBy: QueryOrderBy.CreatedAtDesc,
      user: user._id,
      isActive: undefined,
    },
  },
  result: {
    data: {
      adsForUser: {
        ads: [ad],
        pageCount: 2,
      },
    },
  },
};

const adsMockSuccessFetchMore = {
  request: {
    query: AdsForUserDocument,
    variables: {
      offset: 1,
      limit: 4,
      orderBy: QueryOrderBy.CreatedAtDesc,
      user: user._id,
      isActive: false,
    },
  },
  result: {
    data: {
      adsForUser: {
        ads: [adInactive],
        pageCount: 2,
      },
    },
  },
};

const adsMockSuccessOnlyActive = {
  request: {
    query: AdsForUserDocument,
    variables: {
      offset: 0,
      limit: 4,
      orderBy: QueryOrderBy.CreatedAtDesc,
      user: user._id,
      isActive: true,
    },
  },
  result: {
    data: {
      adsForUser: {
        ads: [ad],
        pageCount: 1,
      },
    },
  },
};

// I think mocking the queryhook is more readable than testing the fetchmore with the actual one
describe('MyAds page simulating fetch more ads', () => {
  afterEach(cleanup);
  it('it calls fetch more ads on end page', async () => {
    myInfo(user);

    //@ts-expect-error mock reached end of div
    const endPage = jest.spyOn(hooks, 'useIntersect').mockImplementation(() => [
      jest.fn(),
      {
        isIntersecting: true,
        intersectionRatio: 0.6,
        target: 'element',
      },
    ]);
    const { getByRole, getAllByRole } = renderApollo(
      <MyAds path='/creati' />,
      {
        mocks: [adsMockFirstReq, adsMockSuccessFetchMore],
        addTypename: false,
        cache: new InMemoryCache({
          addTypename: false,
          typePolicies,
        }),
      },
      { route: '/creati' }
    );
    await waitFor(async () => {
      await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
      expect(
        getByRole('link', {
          name: 'link-ad',
        })
      );
    });
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(
      getAllByRole('link', {
        name: 'link-ad',
      })
    ).toHaveLength(2);
    endPage.mockRestore();
  });
});

describe('MyAds page', () => {
  beforeEach(() => {
    setupIntersectionObserverMock();
  });
  afterEach(cleanup);

  it('renders the MyAds page loading state', async () => {
    myInfo(user);
    const { getByTestId } = renderApollo(
      <MyAds path='/creati' />,
      {
        mocks: [adsMockSuccess],
        addTypename: false,
      },
      { route: '/creati' }
    );
    // waiting for the first useeffect
    await waitFor(() => expect(getByTestId('loading')).toBeTruthy());
  });

  it('renders the MyAds success ads both active and not', async () => {
    myInfo(user);
    const { getByText, getByRole, getAllByRole } = renderApollo(
      <MyAds path='/creati' />,
      {
        mocks: [adsMockSuccess],
        addTypename: false,
      },
      { route: '/creati' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    expect(getByText('Ordine risultati'));
    expect(
      getByRole('checkbox', {
        name: 'Nascondi gli annunci inattivi',
      })
    );
    const links = getAllByRole('link', { name: 'link-ad' });
    expect(links[0].style.pointerEvents).toBe('auto');
    expect(links[1].style.pointerEvents).toBe('none');
  });

  it('hide ads not active returns only active ads', async () => {
    myInfo(user);
    const { getByText, getByRole, getAllByRole } = renderApollo(
      <MyAds path='/creati' />,
      {
        mocks: [adsMockSuccess, adsMockSuccessOnlyActive],
        addTypename: false,
      },
      { route: '/creati' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    expect(getByText('Ordine risultati'));
    expect(
      getByRole('checkbox', {
        name: 'Nascondi gli annunci inattivi',
      })
    );
    const links = getAllByRole('link', { name: 'link-ad' });
    expect(links).toHaveLength(2);
    expect(links[0].style.pointerEvents).toBe('auto');
    expect(links[1].style.pointerEvents).toBe('none');
    fireEvent.click(
      getByRole('checkbox', {
        name: 'Nascondi gli annunci inattivi',
      })
    );

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    const linksAfterClick = getAllByRole('link', { name: 'link-ad' });
    expect(linksAfterClick).toHaveLength(1);
    expect(linksAfterClick[0].style.pointerEvents).toBe('auto');
  });

  it('it changes order ads', async () => {
    myInfo(user);

    const { getByRole, getAllByTestId, getByTestId } = renderApollo(
      <MyAds path='/creati/' />,
      {
        mocks: [adsMockSuccess, adsMockSuccessOld],
        addTypename: false,
        cache: new InMemoryCache({
          addTypename: false,
          typePolicies,
        }),
      },
      { route: '/creati/' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    const myAdsBefore = getAllByTestId('published');
    expect(myAdsBefore[0]).toHaveTextContent('pubblicato il 08 Apr 21, 18:35');
    expect(myAdsBefore[1]).toHaveTextContent('pubblicato il 07 Apr 21, 18:35');
    const orderSelect = getByRole('combobox', { name: 'Ordine risultati' });
    fireEvent.change(orderSelect, {
      target: { value: QueryOrderBy.CreatedAtAsc },
    });
    expect(getByTestId('loading')).toBeTruthy();
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    const myAdsAfter = getAllByTestId('published');
    expect(myAdsAfter[0]).toHaveTextContent('pubblicato il 07 Apr 21, 18:35');
    expect(myAdsAfter[1]).toHaveTextContent('pubblicato il 08 Mar 21, 18:35');
  });
});
