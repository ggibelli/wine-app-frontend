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
import * as superHooks from '../../generated/graphql';

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
const adInactive = adFactory.build({ isActive: false, wineName: 'Dolcetto' });

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
});

// I think mocking the queryhook is more readable than testing the fetchmore with the actual one
describe('MyAds page simulating fetch more ads', () => {
  afterEach(cleanup);
  it('it calls fetch more ads on end page', () => {
    myInfo(user);
    //@ts-expect-error mock
    jest.spyOn(superHooks, 'useAdsForUserLazyQuery').mockImplementation(() => [
      jest.fn(),
      {
        data: adsMockSuccess.result.data,
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
      <MyAds path='/creati' />,
      {
        mocks: [],
        addTypename: false,
      },
      { route: '/creati' }
    );

    expect(fetchMore).toHaveBeenCalledTimes(1);
    expect(fetchMore).toHaveBeenCalledWith({
      variables: {
        offset: adsMockSuccess.result.data.adsForUser.ads.length,
        orderBy: QueryOrderBy.CreatedAtDesc,
        isActive: undefined,
      },
    });
  });

  it('it calls fetch more ads on changing order', async () => {
    myInfo(user);
    const fetchMore2 = jest.fn(() => Promise.resolve({ data: {} }));

    //@ts-expect-error mock
    jest.spyOn(superHooks, 'useAdsForUserLazyQuery').mockImplementation(() => [
      jest.fn(),
      {
        data: adsMockSuccess.result.data,
        loading: false,
        fetchMore: fetchMore2,
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
      <MyAds path='/creati' />,
      {
        mocks: [],
        addTypename: false,
      },
      { route: '/creati' }
    );
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
        limit: 2,
        orderBy: QueryOrderBy.PriceDesc,
      },
    });
  });
});
