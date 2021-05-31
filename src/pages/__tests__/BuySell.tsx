/* eslint-disable @typescript-eslint/no-unsafe-return */
import { renderApollo, cleanup } from '../../test-utils/test-utils';
import { act, fireEvent, waitFor, within } from '@testing-library/react';
import Buy from '../BuySell';
import * as React from 'react';
import {
  AdsWineDocument,
  CreateAdWineDocument,
  QueryOrderBy,
  TypeAd,
  TypeProduct,
} from '../../generated/graphql';
import { notification, searchedWine } from '../../cache';
import { InMemoryCache } from '@apollo/client';
import { updateCacheAd } from '../../utils/updateCache';
import { navigate } from '@reach/router';
import { adFactory } from '../../test-utils/test-factory';

jest.mock('@reach/router', () => ({
  __esModule: true, // this property makes it work
  ...jest.requireActual<any>('@reach/router'),
  navigate: jest.fn(),
}));

jest.mock('../../utils/updateCache', () => ({
  __esModule: true, // this property makes it work
  ...jest.requireActual<any>('../../utils/updateCache'),
  updateCacheAd: jest.fn(),
}));

jest.mock('../../cache', () => ({
  // __esModule: true, // this property makes it work
  ...jest.requireActual<any>('../../cache'),
  __esModule: true, // this property makes it work

  notification: jest.fn(),
}));

const adInput = {
  wineName: 'Abruzzo DOC bianco',
  typeAd: 'SELL',
  typeProduct: 'AdWine',
  content: 'vinazzo',
  harvest: 2010,
  abv: 13.5,
  priceFrom: 3.5,
  priceTo: 3.5,
  litersFrom: 1000,
  litersTo: 1000,
  address: undefined,
};

const adCreatedSuccess = {
  request: {
    query: CreateAdWineDocument,
    variables: {
      input: adInput,
    },
  },
  result: {
    data: {
      createAd: {
        __typename: 'AdPayload',
        response: {
          __typename: 'Ad',
          _id: '123',
        },
        // errors: { __typename: 'Error' },
      },
    },
  },
};

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
      wineName: 'Abruzzo DOC bianco',
      typeProduct: TypeProduct.AdWine,
      typeAd: TypeAd.Sell,
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

describe('Buy or Sell page', () => {
  afterEach(cleanup);

  // it('renders the Buy page loading state', () => {
  //   const { getByTestId } = renderApollo(
  //     <Buy path='/buy' />,
  //     {
  //       mocks: [],
  //       addTypename: false,
  //     },
  //     { route: '/buy' }
  //   );
  //   expect(getByTestId('loading')).toBeTruthy();
  // });

  it('renders the Buy page search', () => {
    const { getByText } = renderApollo(
      <Buy path='/buy' />,
      {
        mocks: [],
        addTypename: false,
        cache: new InMemoryCache({ addTypename: false }),
      },
      { route: '/buy' }
    );
    expect(getByText('Che cosa vuoi comprare?'));

    expect(getByText('Gradazione alcolica'));
  });

  it('renders the Sell page post', () => {
    const { getByText } = renderApollo(
      <Buy path='/sell' />,
      {
        mocks: [],
        addTypename: false,
        cache: new InMemoryCache({ addTypename: false }),
      },
      { route: '/sell' }
    );
    expect(getByText('Che cosa vuoi vendere?'));

    expect(getByText('Gradazione alcolica'));
  });

  it('ad posted mutation success and navigate to results', async () => {
    const { getByRole, getByTestId } = renderApollo(
      <Buy path='/sell' />,
      {
        mocks: [adsMock4, adCreatedSuccess, adsMock4, adCreatedSuccess],
        addTypename: false,
        cache: new InMemoryCache({ addTypename: false }),
      },
      { route: '/sell' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    fireEvent.change(getByRole('spinbutton', { name: /abv/i }), {
      target: {
        value: 13.5,
      },
    });
    fireEvent.change(getByRole('spinbutton', { name: /harvest/i }), {
      target: {
        value: 2010,
      },
    });
    fireEvent.change(getByRole('spinbutton', { name: /price/i }), {
      target: {
        value: 3.5,
      },
    });
    fireEvent.change(getByRole('spinbutton', { name: /liters/i }), {
      target: {
        value: 1000,
      },
    });
    fireEvent.change(getByRole('textbox', { name: /content/i }), {
      target: {
        value: 'vinazzo',
      },
    });
    const comboboxWines = getByTestId('combobox-wines');
    const inputWines = within(comboboxWines).getByRole('textbox');
    comboboxWines.focus();
    fireEvent.change(inputWines, { target: { value: 'b' } });
    await waitFor(() => {
      //const input = within(combobox).querySelector('input');

      fireEvent.keyDown(inputWines, { key: 'ArrowDown' });
    });
    await waitFor(() => {
      fireEvent.keyDown(inputWines, { key: 'Enter' });
    });

    await waitFor(() => {
      fireEvent.click(
        getByRole('checkbox', {
          name: /Indirizzo uguale a quello usato in registrazione/i,
        })
      );
    });
    await waitFor(() => {
      fireEvent.submit(getByRole('button', { name: /submit/i }));
    });
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    expect(notification).toHaveBeenCalledWith({
      type: 'success',
      message: 'ad created',
    });
    expect(updateCacheAd).toHaveBeenCalled();
    expect(searchedWine()).toStrictEqual({
      wineName: 'Abruzzo DOC bianco',
      typeAd: 'SELL',
      typeProduct: 'AdWine',
      content: 'vinazzo',
      harvest: 2010,
      abv: 13.5,
      priceFrom: 3.5,
      priceTo: 3.5,
      litersFrom: 1000,
      litersTo: 1000,
      address: undefined,
    });

    expect(navigate).toHaveBeenCalledWith('/annunci');
  }, 10000);
});
