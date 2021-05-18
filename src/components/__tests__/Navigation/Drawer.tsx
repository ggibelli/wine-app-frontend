import { Drawer } from '../../Navigation/Drawer';
import * as React from 'react';
import {
  renderApolloNoRouter,
  cleanup,
  fireEvent,
} from '../../../test-utils/test-utils';
import { isLoggedInVar } from '../../../cache';
import * as Apollo from '@apollo/client';

const data = {
  isLoading: false,
  error: undefined,
  data: {
    name: 'giovanni',
    numAds: 2,
    numOpenNegs: 4,
    numClosedNegs: 4,
    savedAds: 3,

    rating: 4.5,
  },
};

const localStorageMock = (function () {
  let store: Record<string | number, string> = {};

  return {
    getItem: function (key: string | number) {
      return store[key] || null;
    },
    setItem: function (
      key: string | number,
      value: { toString: () => string }
    ) {
      store[key] = value.toString();
    },
    removeItem: function (key: string | number) {
      delete store[key];
    },
    clear: function () {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('Drawer', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders drawer', () => {
    const { getByText, getByTestId, getByRole } = renderApolloNoRouter(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <Drawer state={true} toggleDrawer={() => {}} data={data} />
    );
    expect(getByText('giovanni'));
    expect(getByText('Annunci pubblicati (2)'));
    expect(getByText('Trattative in corso (4)'));
    expect(getByText('Annunci salvati (3)'));
    expect(getByRole('link', { name: '4.5 Stars (4.50)' }));
    expect(getByTestId('logout'));
  });

  it('it logs out and empties the cache', () => {
    const localStorageRemoveMock = jest.spyOn(localStorage, 'removeItem');
    const resetMock = jest.fn();
    jest.spyOn(Apollo, 'useApolloClient').mockImplementation(() => {
      return {
        resetStore: resetMock,
      };
    });
    const { getByTestId } = renderApolloNoRouter(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <Drawer state={true} toggleDrawer={() => {}} data={data} />
    );

    fireEvent.click(getByTestId('logout-button'));
    expect(isLoggedInVar()).toBeFalsy();
    expect(localStorageRemoveMock).toHaveBeenCalled();
    expect(resetMock).toHaveBeenCalled();
  });
});
