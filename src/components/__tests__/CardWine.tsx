import {
  cleanup,
  fireEvent,
  renderApolloNoRouter,
} from '../../test-utils/test-utils';
import { CardWine } from '../../components/Cards/CardWine';
import * as React from 'react';
import {
  MetodoProduttivo,
  TypeAd,
  DenomZona,
  TypeProduct,
} from '../../generated/graphql';
import { myInfo, searchedWine } from '../../cache';
import { navigate } from '@reach/router';

jest.mock('../../containers/FavoriteButton', () => ({
  __esModule: true,
  FavoriteButton: () => <div>ciao</div>,
}));

jest.mock('@reach/router', () => ({
  __esModule: true, // this property makes it work
  ...jest.requireActual<any>('@reach/router'),
  navigate: jest.fn(),
}));

const mockAdBuyOwned = {
  ad: {
    abv: 13.5,
    activeNegotiations: 0,

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

  it('renders the CardWines component', () => {
    renderApolloNoRouter(<CardWine ad={mockAdBuyOwned.ad} />);
  });

  it('if ad buy proper text is rendered', () => {
    const { getByText } = renderApolloNoRouter(
      <CardWine ad={mockAdBuyOwned.ad} />
    );
    expect(getByText("Compro Barbera d'Asti"));
  });

  it('if not my ad search again not shown', () => {
    const { getByText, queryByText } = renderApolloNoRouter(
      <CardWine ad={mockAdBuyOwned.ad} />
    );
    expect(getByText("Compro Barbera d'Asti"));
    expect(queryByText('Cerca di nuovo')).toBeFalsy();
  });

  it('if my ad search again button works ', () => {
    myInfo({ ads: [{ _id: mockAdBuyOwned.ad._id }] });

    const { getByText } = renderApolloNoRouter(
      <CardWine ad={mockAdBuyOwned.ad} />
    );
    expect(getByText("Compro Barbera d'Asti"));
    fireEvent.click(getByText('Cerca di nuovo'));
    expect(navigate).toHaveBeenCalledWith('/annunci');
    expect(searchedWine()).toEqual({
      ...mockAdBuyOwned.ad,
      wine: undefined,
      typeProduct: TypeProduct.AdWine,
    });
  });

  it('if ad sell proper text is rendered', () => {
    const { getByText } = renderApolloNoRouter(
      <CardWine ad={mockAdSellNotOwned.ad} />
    );

    expect(getByText("Vendo Barbera d'Asti"));
  });

  it('if ad not active is not clickable', () => {
    const { getByRole } = renderApolloNoRouter(
      <CardWine ad={mockAdSellAdNotActive.ad} />
    );
    const link = getByRole('link', { name: 'link-ad' });
    expect(link.style.pointerEvents).toBe('none');
  });

  it('if ad active is clickable', () => {
    const { getByRole } = renderApolloNoRouter(
      <CardWine ad={mockAdSellNotOwned.ad} />
    );
    const link = getByRole('link', { name: 'link-ad' });
    expect(link.style.pointerEvents).toBe('auto');
  });
});
