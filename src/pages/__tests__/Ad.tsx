/* eslint-disable @typescript-eslint/no-unsafe-return */
import { renderApollo, cleanup } from '../../test-utils/test-utils';
import { act, fireEvent } from '@testing-library/react';
import Ad from '../Ad';
import * as React from 'react';
import {
  AdDocument,
  CreateNegotiationDocument,
  NegotiationsForAdDocument,
  SaveAdDocument,
  TypeAd,
} from '../../generated/graphql';
import { notification } from '../../cache';
import { InMemoryCache } from '@apollo/client';
import { updateCacheNegotiations } from '../../utils/updateCache';
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
  updateCacheNegotiations: jest.fn(),
}));

jest.mock('../../cache', () => ({
  // __esModule: true, // this property makes it work
  ...jest.requireActual<any>('../../cache'),
  __esModule: true, // this property makes it work

  notification: jest.fn(),
}));

const ad = adFactory.build({
  _id: '606d52c5b470d4287b4e78ed',
  postedBy: {
    email: 'gorge91@lollllo.com',
    firstName: 'giovanni',
    hideContact: false,
    lastName: 'gibelli',
    phoneNumber: '3477984716',
    // __typename: 'User' as const,
    _id: '605a7c0dc28f1006e42fe146',
  },
});

const adSell = adFactory.build({
  typeAd: TypeAd.Sell,
  _id: '606d52c5b470d4287b4e78ed',
  postedBy: {
    email: 'gorge91@lollllo.com',
    firstName: 'giovanni',
    hideContact: false,
    lastName: 'gibelli',
    phoneNumber: '3477984716',
    // __typename: 'User' as const,
    _id: '605a7c0dc28f1006e42fe146',
  },
});
export const adMockSuccess = {
  request: {
    query: AdDocument,
    variables: { id: '123' },
  },
  result: {
    data: {
      ad,
      me: {
        savedAds: [],
        negotiations: [{ _id: '123', ad: { _id: '606d52c5b470d4287b4e78ed' } }],
        __typeName: 'User',
        _id: '605a7c0dc28f1006e42fe146',
      },
    },
  },
};

export const adMockSuccessNoNegs = {
  request: {
    query: AdDocument,
    variables: { id: '123' },
  },
  result: {
    data: {
      ad,
      me: {
        savedAds: [],
        negotiations: [],
        __typeName: 'User',
        _id: '605a7c0dc28f1006e42fe146',
      },
    },
  },
};

const adMockSuccessOtherUser = {
  request: {
    query: AdDocument,
    variables: { id: '123' },
  },
  result: {
    data: {
      ad,
      me: {
        savedAds: [],
        negotiations: [],
        __typename: 'User',
        _id: '605a7c0dc28f1006e42fe147',
      },
    },
  },
};

const adMockSuccessOtherUserSell = {
  request: {
    query: AdDocument,
    variables: { id: '123' },
  },
  result: {
    data: {
      ad: adSell,
      me: {
        savedAds: [],
        negotiations: [],
        __typename: 'User',
        _id: '605a7c0dc28f1006e42fe147',
      },
    },
  },
};

const adMockError = {
  request: {
    query: AdDocument,
    variables: { id: '123' },
  },
  result: {},
  error: new Error('Nooooo!'),
};

const negotiationCreatedSuccess = {
  request: {
    query: CreateNegotiationDocument,
    variables: {
      negotiation: {
        forUserAd: adMockSuccessOtherUser.result.data.ad.postedBy._id,
        ad: adMockSuccessOtherUser.result.data.ad._id,
        type: adMockSuccessOtherUser.result.data.ad.typeAd,
      },
    },
  },
  result: {
    data: {
      createNegotiation: {
        __typename: 'NegotiationPayload',
        response: {
          __typename: 'Negotiation',
          _id: '123',
        },
        // errors: { __typename: 'Error' },
      },
    },
  },
};

const SaveAdSuccess = {
  request: {
    query: SaveAdDocument,
    variables: {
      id: '123',
    },
  },
  result: {
    data: {
      saveAd: {
        __typename: 'Ad',

        _id: '123',

        // errors: { __typename: 'Error' },
      },
    },
  },
};

const negotiationCreatedError = {
  request: {
    query: CreateNegotiationDocument,
    variables: {
      negotiation: {
        forUserAd: adMockSuccessOtherUser.result.data.ad.postedBy._id,
        ad: adMockSuccessOtherUser.result.data.ad._id,
        type: adMockSuccessOtherUser.result.data.ad.typeAd,
      },
    },
  },
  result: {
    data: {
      createNegotiation: {
        __typename: 'NegotiationPayload',
        response: {
          __typename: 'Negotiation',
          _id: '123',
        },
        errors: [{ name: 'ahia', text: 'errore' }],
      },
    },
  },
};

const lazyNegsSuccess = {
  request: {
    query: NegotiationsForAdDocument,
    variables: {
      ad: '123',
    },
  },
  result: {
    data: {
      negotiationsForAd: [
        {
          createdBy: {
            firstName: 'Rocco',
            lastName: 'Tanica',
            __typename: 'User',
            _id: '605a7c42c28f1006e42fe147',
          },
          dateConcluded: null,
          dateCreated: '30 Mar 21, 17:45',
          isConcluded: false,
          __typename: 'Negotiation',
          _id: '6062acf384030d5829be7e77',
        },
      ],
    },
  },
};

describe('Ad page', () => {
  afterEach(cleanup);

  it('renders the Ad page', () => {
    const { getByTestId } = renderApollo(
      <Ad path='/annunci/:id' />,
      {
        mocks: [],
        addTypename: false,
      },
      { route: '/annunci/123' }
    );
    expect(getByTestId('loading')).toBeTruthy();
  });

  it('renders the Ad page success buyer and own ad and button show ads negotiations', async () => {
    const { getByText, getByTestId, getByRole } = renderApollo(
      <Ad path='/annunci/:id' />,
      {
        mocks: [adMockSuccess],
        addTypename: false,
        cache: new InMemoryCache({ addTypename: false }),
      },
      { route: '/annunci/123' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    fireEvent.click(getByRole('button', { name: 'previous-page' }));
    expect(navigate).toBeCalledTimes(1);
    expect(getByText("Modifica l'annuncio")).toBeTruthy();
    expect(getByTestId('negotiationsAd')).toBeTruthy();
  });

  it('does not render button show negotiations because no negotiations', async () => {
    const { getByText, queryByTestId, getByRole } = renderApollo(
      <Ad path='/annunci/:id' />,
      {
        mocks: [adMockSuccessNoNegs],
        addTypename: false,
        cache: new InMemoryCache({ addTypename: false }),
      },
      { route: '/annunci/123' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(getByRole('button', { name: 'previous-page' }));

    expect(getByText("Contatta L'acquirente")).toBeTruthy();
    expect(queryByTestId('negotiationsAd')).toBeFalsy();
  });

  it('renders the Ad page success seller and other user ad', async () => {
    const { getByText, queryByTestId, getByRole } = renderApollo(
      <Ad path='/annunci/:id' />,
      {
        mocks: [adMockSuccessOtherUserSell],
        addTypename: false,
      },
      { route: '/annunci/123' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(getByRole('button', { name: 'previous-page' }));
    expect(getByText('Contatta Il venditore')).toBeTruthy();
    expect(queryByTestId('negotiationsAd')).toBeFalsy();
  });

  // TODO MOVE TEST TO NEW TEST FAVORITE BUTTON

  // it('Save ad mutation works as expected', async () => {
  //   const { getByText, queryByTestId, getByRole } = renderApollo(
  //     <Ad path='/annunci/:id' />,
  //     {
  //       mocks: [adMockSuccessOtherUser, SaveAdSuccess],
  //       addTypename: false,
  //     },
  //     { route: '/annunci/123' }
  //   );
  //   await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
  //   expect(getByRole('button', { name: 'previous-page' }));
  //   const saveAd = getByRole('button', { name: 'save' });
  //   fireEvent.click(saveAd);
  //   expect(queryByTestId('not-saved')).toBeTruthy();
  //   expect(queryByTestId('saved')).toBeFalsy();

  //   await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
  //   expect(queryByTestId('saved')).toBeTruthy();
  //   expect(queryByTestId('not-saved')).toBeFalsy();
  // });

  it('renders the Ad page with error', async () => {
    const { getByText } = renderApollo(
      <Ad path='/annunci/:id' />,
      {
        mocks: [adMockError],
        addTypename: false,
      },
      { route: '/annunci/123' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    expect(getByText('Errore')).toBeTruthy();
  });

  it('renders the Ad and open negotiation mutation success', async () => {
    const cache = new InMemoryCache({ addTypename: false });
    const { getByRole } = renderApollo(
      <Ad path='/annunci/:id' />,
      {
        mocks: [adMockSuccessOtherUser, negotiationCreatedSuccess],
        addTypename: false,
        cache,
      },
      { route: '/annunci/123' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    fireEvent.click(getByRole('button', { name: 'open-negotiation-dialog' }));
    fireEvent.click(getByRole('button', { name: 'open-negotiation' }));
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(updateCacheNegotiations).toBeCalledTimes(1);
    expect(getByRole('button', { name: 'previous-page' }));
    expect(notification).toBeCalledTimes(1);
    expect(notification).toBeCalledWith({
      message: 'trattativa creata con successo',
      type: 'success',
    });
  });

  it('renders the Ad and open negotiation mutation error', async () => {
    const cache = new InMemoryCache({ addTypename: false });
    const { getByRole } = renderApollo(
      <Ad path='/annunci/:id' />,
      {
        mocks: [adMockSuccessOtherUser, negotiationCreatedError],
        addTypename: false,
        cache,
      },
      { route: '/annunci/123' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    fireEvent.click(getByRole('button', { name: 'open-negotiation-dialog' }));
    fireEvent.click(getByRole('button', { name: 'open-negotiation' }));
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    // expect(updateCacheNegotiations).toBeCalledTimes(1);
    expect(getByRole('button', { name: 'previous-page' }));

    expect(notification).toBeCalledTimes(1);
    expect(notification).toBeCalledWith({
      message: 'errore',
      type: 'error',
    });
  });

  it('renders the Ad and shows owned negotiation on ad', async () => {
    const cache = new InMemoryCache({ addTypename: false });
    const { getByRole } = renderApollo(
      <Ad path='/annunci/:id' />,
      {
        mocks: [adMockSuccess, lazyNegsSuccess],
        addTypename: false,
        cache,
      },
      { route: '/annunci/123' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    fireEvent.click(getByRole('button', { name: 'show-open-negotiations' }));
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(getByRole('list', { name: 'negotiations' }));
    expect(getByRole('button', { name: 'previous-page' }));
  });
});
