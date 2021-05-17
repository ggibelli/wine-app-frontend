import {
  cleanup,
  renderApolloNoRouter,
  waitFor,
} from '../../test-utils/test-utils';
import { CardWine } from '../../components/Cards/CardWine';
import * as React from 'react';
import {
  Province,
  Regioni,
  MetodoProduttivo,
  TypeAd,
  DenomZona,
} from '../../generated/graphql';
import { act } from 'react-dom/test-utils';

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

describe('CardWine component', () => {
  afterEach(cleanup);

  it('renders the CardWines component', async () => {
    await waitFor(() => {
      act(() => {
        renderApolloNoRouter(<CardWine ad={mockAdBuyOwned.ad} />);
      });
    });
  });

  it('if ad buy proper text is rendered', async () => {
    await waitFor(() => {
      act(() => {
        const { getByText } = renderApolloNoRouter(
          <CardWine ad={mockAdBuyOwned.ad} />
        );
        expect(getByText("Compro Barbera d'Asti"));
      });
    });
  });

  it('if ad sell proper text is rendered', async () => {
    await waitFor(() => {
      act(() => {
        const { getByText } = renderApolloNoRouter(
          <CardWine ad={mockAdSellNotOwned.ad} />
        );

        expect(getByText("Vendo Barbera d'Asti"));
      });
    });
  });

  it('if ad not active is not clickable', async () => {
    await waitFor(() => {
      act(() => {
        const { getByRole } = renderApolloNoRouter(
          <CardWine ad={mockAdSellAdNotActive.ad} />
        );
        const link = getByRole('link', { name: 'link-ad' });
        expect(link.style.pointerEvents).toBe('none');
      });
    });
  });

  it('if ad active is clickable', async () => {
    await waitFor(() => {
      act(() => {
        const { getByRole } = renderApolloNoRouter(
          <CardWine ad={mockAdSellNotOwned.ad} />
        );
        const link = getByRole('link', { name: 'link-ad' });
        expect(link.style.pointerEvents).toBe('auto');
      });
    });
  });
});
