/* eslint-disable @typescript-eslint/no-unsafe-return */
import { renderApollo, cleanup } from '../../test-utils';
import { act, fireEvent } from '@testing-library/react';
import Ad from '../Ad';
import * as React from 'react';
import {
  AdDocument,
  CreateNegotiationDocument,
  DenomZona,
  MetodoProduttivo,
  NegotiationsForAdDocument,
  Province,
  Regioni,
  TypeAd,
} from '../../generated/graphql';
import { notification } from '../../cache';
import { InMemoryCache } from '@apollo/client';
import { updateCacheNegotiations } from '../../utils/updateCache';
import { navigate } from '@reach/router';

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

export const adMockSuccess = {
  request: {
    query: AdDocument,
    variables: { id: '123' },
  },
  result: {
    data: {
      ad: {
        abv: 13.5,
        activeNegotiations: 0,
        address: {
          comune: 'Arosio',
          provincia: Province.CO,
          regione: Regioni.Lombardia,
          // __typename: 'Address' as const,
        },

        datePosted: '07 Apr 21, 18:35',
        harvest: 2018,
        isActive: true,
        litersFrom: 1000,
        litersTo: 1000,
        metodoProduttivo: MetodoProduttivo.Convenzionale,
        needsFollowUp: true,
        numberViews: 1,
        postedBy: {
          email: 'gorge91@lollllo.com',
          firstName: 'giovanni',
          hideContact: false,
          lastName: 'gibelli',
          phoneNumber: '3477984716',
          // __typename: 'User' as const,
          _id: '605a7c0dc28f1006e42fe146',
        },

        priceFrom: 2,
        priceTo: 2,
        typeAd: TypeAd.Buy,
        wine: {
          denominazioneZona: DenomZona.Docg,
          regione: [Regioni.Piemonte],
          // __typename: 'Wine' as const,
        },
        wineName: "Barbera d'Asti",
        // __typename: 'AdWine' as const,
        _id: '606d52c5b470d4287b4e78ed',
      },
      me: {
        negotiations: [{ ad: { _id: '606d52c5b470d4287b4e78ed' } }],
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
      ad: {
        abv: 13.5,
        activeNegotiations: 0,
        address: {
          comune: 'Arosio',
          provincia: Province.CO,
          regione: Regioni.Lombardia,
          // __typename: 'Address' as const,
        },

        datePosted: '07 Apr 21, 18:35',
        harvest: 2018,
        isActive: true,
        litersFrom: 1000,
        litersTo: 1000,
        metodoProduttivo: MetodoProduttivo.Convenzionale,
        needsFollowUp: true,
        numberViews: 1,
        postedBy: {
          email: 'gorge91@lollllo.com',
          firstName: 'giovanni',
          hideContact: false,
          lastName: 'gibelli',
          phoneNumber: '3477984716',
          // __typename: 'User' as const,
          _id: '605a7c0dc28f1006e42fe146',
        },

        priceFrom: 2,
        priceTo: 2,
        typeAd: TypeAd.Buy,
        wine: {
          denominazioneZona: DenomZona.Docg,
          regione: [Regioni.Piemonte],
          // __typename: 'Wine' as const,
        },
        wineName: "Barbera d'Asti",
        // __typename: 'AdWine' as const,
        _id: '606d52c5b470d4287b4e78ed',
      },
      me: {
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
      ad: {
        abv: 13.5,
        activeNegotiations: 0,
        address: {
          comune: 'Arosio',
          provincia: 'CO',
          regione: 'LOMBARDIA',
          // __typename: 'Address',
        },

        datePosted: '07 Apr 21, 18:35',
        harvest: 2018,
        isActive: true,
        litersFrom: 1000,
        litersTo: 1000,
        metodoProduttivo: 'CONVENZIONALE',
        needsFollowUp: true,
        numberViews: 1,
        postedBy: {
          email: 'gorge91@lollllo.com',
          firstName: 'giovanni',
          hideContact: false,
          lastName: 'gibelli',
          phoneNumber: '3477984716',
          // __typename: 'User',
          _id: '605a7c0dc28f1006e42fe146',
        },

        priceFrom: 2,
        priceTo: 2,
        typeAd: 'SELL',
        wine: {
          denominazioneZona: 'DOCG',
          regione: ['PIEMONTE'],
          // __typename: 'Wine',
        },
        wineName: "Barbera d'Asti",
        // __typename: 'AdWine',
        _id: '606d52c5b470d4287b4e78ed',
      },
      me: {
        negotiations: [],
        // __typename: 'User',
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
        errors: [{ name: 'ahia', text: 'ahhaha' }],
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
    expect(getByText("Contatta L'acquirente")).toBeTruthy();
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
        mocks: [adMockSuccessOtherUser],
        addTypename: false,
      },
      { route: '/annunci/123' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(getByRole('button', { name: 'previous-page' }));

    expect(getByText('Contatta Il venditore')).toBeTruthy();
    expect(queryByTestId('negotiationsAd')).toBeFalsy();
  });

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
      message: 'ahhaha',
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
