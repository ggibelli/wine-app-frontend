import { cleanup, renderApolloNoRouter } from '../../test-utils/test-utils';
import { CardWineDetail } from '../../components/CardWineDetail';
import * as React from 'react';
import {
  Province,
  Regioni,
  MetodoProduttivo,
  TypeAd,
  DenomZona,
} from '../../generated/graphql';

const mockAdBuyOwned = {
  ad: {
    abv: 13.5,
    activeNegotiations: 0,
    address: {
      comune: 'Arosio',
      provincia: Province.CO,
      regione: Regioni.Lombardia,
      __typename: 'Address' as const,
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
      __typename: 'User' as const,
      _id: '605a7c0dc28f1006e42fe146',
    },

    priceFrom: 2,
    priceTo: 2,
    typeAd: TypeAd.Buy,
    wine: {
      denominazioneZona: DenomZona.Docg,
      regione: [Regioni.Piemonte],
      __typename: 'Wine' as const,
    },
    wineName: "Barbera d'Asti",
    __typename: 'AdWine' as const,
    _id: '606d52c5b470d4287b4e78ed',
  },
  me: {
    negotiations: [],
    __typeName: 'User',
    _id: '605a7c0dc28f1006e42fe146',
  },
};

const mockAdSellNotOwned = {
  ad: {
    abv: 13.5,
    activeNegotiations: 0,
    address: {
      comune: 'Arosio',
      provincia: Province.CO,
      regione: Regioni.Lombardia,
      __typename: 'Address' as const,
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
      __typename: 'User' as const,
      _id: '605a7c0dc28f1006e42fe146',
    },

    priceFrom: 2,
    priceTo: 2,
    typeAd: TypeAd.Sell,
    wine: {
      denominazioneZona: DenomZona.Docg,
      regione: [Regioni.Piemonte],
      __typename: 'Wine' as const,
    },
    wineName: "Barbera d'Asti",
    __typename: 'AdWine' as const,
    _id: '606d52c5b470d4287b4e78ed',
  },
  me: {
    negotiations: [],
    __typeName: 'User',
    _id: '605a7c0dc28f1006e42fe147',
  },
};

const mockAdSellOpenNeg = {
  ad: {
    abv: 13.5,
    activeNegotiations: 0,
    address: {
      comune: 'Arosio',
      provincia: Province.CO,
      regione: Regioni.Lombardia,
      __typename: 'Address' as const,
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
      __typename: 'User' as const,
      _id: '605a7c0dc28f1006e42fe146',
    },

    priceFrom: 2,
    priceTo: 2,
    typeAd: TypeAd.Sell,
    wine: {
      denominazioneZona: DenomZona.Docg,
      regione: [Regioni.Piemonte],
      __typename: 'Wine' as const,
    },
    wineName: "Barbera d'Asti",
    __typename: 'AdWine' as const,
    _id: '606d52c5b470d4287b4e78ed',
  },
  me: {
    negotiations: [{ _id: '123', ad: { _id: '606d52c5b470d4287b4e78ed' } }],
    __typeName: 'User',
    _id: '605a7c0dc28f1006e42fe147',
  },
};

const mockAdSellAdNotActive = {
  ad: {
    abv: 13.5,
    activeNegotiations: 0,
    address: {
      comune: 'Arosio',
      provincia: Province.CO,
      regione: Regioni.Lombardia,
      __typename: 'Address' as const,
    },

    datePosted: '07 Apr 21, 18:35',
    harvest: 2018,
    isActive: false,
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
      __typename: 'User' as const,
      _id: '605a7c0dc28f1006e42fe146',
    },

    priceFrom: 2,
    priceTo: 2,
    typeAd: TypeAd.Sell,
    wine: {
      denominazioneZona: DenomZona.Docg,
      regione: [Regioni.Piemonte],
      __typename: 'Wine' as const,
    },
    wineName: "Barbera d'Asti",
    __typename: 'AdWine' as const,
    _id: '606d52c5b470d4287b4e78ed',
  },
  me: {
    negotiations: [],
    __typeName: 'User',
    _id: '605a7c0dc28f1006e42fe147',
  },
};

describe('CardWineDetail component', () => {
  afterEach(cleanup);

  it('renders the CardWineDetails component', () => {
    const createNegotiation = jest.fn();
    renderApolloNoRouter(
      <CardWineDetail
        ad={mockAdBuyOwned.ad}
        me={mockAdBuyOwned.me}
        createNegotiation={createNegotiation}
      />
    );
  });

  it('if owner of the ad shows modify button with buy class', () => {
    const createNegotiation = jest.fn();
    const { queryByRole, getByRole } = renderApolloNoRouter(
      <CardWineDetail
        ad={mockAdBuyOwned.ad}
        me={mockAdBuyOwned.me}
        createNegotiation={createNegotiation}
      />
    );
    const classes = getByRole('button', {
      name: 'edit-ad',
    }).classList.value.split('-');
    expect(classes.includes('buyButton')).toBeTruthy();
    expect(queryByRole('button', { name: 'save' })).toBeFalsy();
  });

  it('if not owner of the ad shows show contact seller', () => {
    const createNegotiation = jest.fn();
    const { getByRole, queryByText } = renderApolloNoRouter(
      <CardWineDetail
        ad={mockAdSellNotOwned.ad}
        me={mockAdSellNotOwned.me}
        createNegotiation={createNegotiation}
      />
    );
    const classes = getByRole('button', {
      name: 'open-negotiation-dialog',
    }).classList.value.split('-');
    expect(classes.includes('sellButton')).toBeTruthy();
    expect(getByRole('button', { name: 'save' }));
    expect(queryByText('Negoziazione gia aperta')).toBeFalsy();
  });

  it('if already open negotiations shows negotiation already open', () => {
    const createNegotiation = jest.fn();
    const { getByText, getByRole, queryByText } = renderApolloNoRouter(
      <CardWineDetail
        ad={mockAdSellOpenNeg.ad}
        me={mockAdSellOpenNeg.me}
        createNegotiation={createNegotiation}
      />
    );
    expect(queryByText('Contatta il venditore')).toBeFalsy();
    expect(getByRole('button', { name: 'save' }));
    expect(getByText('Negoziazione gia aperta'));
  });

  it('if ad not active is not possible to open negotiation', () => {
    const createNegotiation = jest.fn();
    const { getByText, getByRole, queryByText } = renderApolloNoRouter(
      <CardWineDetail
        ad={mockAdSellAdNotActive.ad}
        me={mockAdSellAdNotActive.me}
        createNegotiation={createNegotiation}
      />
    );
    expect(queryByText('Contatta il venditore')).toBeFalsy();
    expect(getByRole('button', { name: 'save' }));
    expect(getByText('Annuncio non piu attivo'));
  });
});
