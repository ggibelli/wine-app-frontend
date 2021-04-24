/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  renderApollo,
  cleanup,
  setupIntersectionObserverMock,
} from '../../test-utils/test-utils';
import { act, waitFor } from '@testing-library/react';
import SavedAds from '../SavedAds';
import { FavoriteDocument } from '../../generated/graphql';
import { adFactory } from '../../test-utils/test-factory';
import * as React from 'react';

const ad = adFactory.build({ wineName: 'Brachetto' });
const adInactive = adFactory.build({
  isActive: false,
  wineName: 'Dolcetto',
  datePosted: '08 Apr 21, 18:35',
});

const savedAdsMockSuccess = {
  request: {
    query: FavoriteDocument,
  },
  result: {
    data: {
      me: {
        savedAds: [ad, adInactive],
      },
    },
  },
};

const savedAdsMockSuccessEmpty = {
  request: {
    query: FavoriteDocument,
  },
  result: {
    data: {
      me: {
        savedAds: [],
      },
    },
  },
};

const savedAdsMockError = {
  request: {
    query: FavoriteDocument,
  },
  result: {
    data: undefined,
  },
  error: new Error('errore'),
};

describe('SavedAds page', () => {
  beforeEach(() => {
    setupIntersectionObserverMock();
  });
  afterEach(cleanup);

  it('renders the SavedAds page loading state', async () => {
    const { getByTestId } = renderApollo(
      <SavedAds path='/salvati' />,
      {
        mocks: [savedAdsMockSuccess],
        addTypename: false,
      },
      { route: '/salvati' }
    );
    // waiting for the first useeffect
    await waitFor(() => expect(getByTestId('loading')).toBeTruthy());
  });

  it('renders the SavedAds success ', async () => {
    const { getAllByRole } = renderApollo(
      <SavedAds path='/salvati' />,
      {
        mocks: [savedAdsMockSuccess],
        addTypename: false,
      },
      { route: '/salvati' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    const links = getAllByRole('link', { name: 'link-ad' });
    expect(links).toHaveLength(2);
  });

  it('renders the SavedAds success no ads saved yet', async () => {
    const { getByText } = renderApollo(
      <SavedAds path='/salvati' />,
      {
        mocks: [savedAdsMockSuccessEmpty],
        addTypename: false,
      },
      { route: '/salvati' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    expect(getByText('Non hai ancora salvato annunci'));
  });

  it('renders the SavedAds error state', async () => {
    const { getByText } = renderApollo(
      <SavedAds path='/salvati' />,
      {
        mocks: [savedAdsMockError],
        addTypename: false,
      },
      { route: '/salvati' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    expect(getByText('error'));
  });
});
