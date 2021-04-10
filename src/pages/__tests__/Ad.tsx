import { renderApollo, cleanup, fireEvent } from '../../test-utils';
import { act, screen, waitFor } from '@testing-library/react';
import Ad from '../Ad';
import * as React from 'react';
import { AdDocument } from '../../generated/graphql';
// import CardWineDetail from '../../components/CardWineDetail';

// jest.mock('../../components/CardWineDetail', () => () => <div>ciao</div>);

const adMockSuccess = {
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
          __typename: 'Address',
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
          __typename: 'User',
          _id: '605a7c0dc28f1006e42fe146',
        },

        priceFrom: 2,
        priceTo: 2,
        typeAd: 'BUY',
        wine: {
          denominazioneZona: 'DOCG',
          regione: ['PIEMONTE'],
          __typename: 'Wine',
        },
        wineName: "Barbera d'Asti",
        __typename: 'AdWine',
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
          __typename: 'Address',
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
          __typename: 'User',
          _id: '605a7c0dc28f1006e42fe146',
        },

        priceFrom: 2,
        priceTo: 2,
        typeAd: 'SELL',
        wine: {
          denominazioneZona: 'DOCG',
          regione: ['PIEMONTE'],
          __typename: 'Wine',
        },
        wineName: "Barbera d'Asti",
        __typename: 'AdWine',
        _id: '606d52c5b470d4287b4e78ed',
      },
      me: {
        negotiations: [],
        __typeName: 'User',
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

  it('renders the Ad page success buyer and own ad', async () => {
    const { getByText, getByTestId } = renderApollo(
      <Ad path='/annunci/:id' />,
      {
        mocks: [adMockSuccess],
        addTypename: false,
      },
      { route: '/annunci/123' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    expect(getByText("Contatta L'acquirente")).toBeTruthy();
    expect(getByTestId('negotiationsAd')).toBeTruthy();
  });

  it('renders the Ad page success seller and other user ad', async () => {
    const { getByText, queryByTestId } = renderApollo(
      <Ad path='/annunci/:id' />,
      {
        mocks: [adMockSuccessOtherUser],
        addTypename: false,
      },
      { route: '/annunci/123' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

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
});
