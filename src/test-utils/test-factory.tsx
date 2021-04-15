import * as Factory from 'factory.ts';
import {
  AdWine,
  DenomZona,
  EspressioneComunitaria,
  MetodoProduttivo,
  Province,
  Regioni,
  TypeAd,
  TypeProduct,
  User,
} from '../generated/graphql';

export const userFactory = Factory.Sync.makeFactory<User>({
  email: 'prova@123.it',
  firstName: 'giovanni',
  lastName: 'gibelli',
  phoneNumber: '1234567890',
  pIva: '00000000000',
  isVerified: true,
  isAdmin: false,
  hideContact: true,
  address: {
    comune: 'Arosio',
    provincia: Province.CO,
    regione: Regioni.Lombardia,
    via: 'via della prova 1',
    CAP: '12345',
  },
  // __typename: 'User' as const,
  _id: Factory.Sync.each((i) => i.toString()),
});

const user = userFactory.build();

export const adFactory = Factory.Sync.makeFactory<AdWine>({
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
  postedBy: user,
  content: 'nice wine',
  typeProduct: TypeProduct.AdWine,
  priceFrom: 2,
  priceTo: 2,
  typeAd: TypeAd.Buy,
  wine: {
    _id: Math.floor(Math.random() * 999).toString(),
    denominazioneZona: DenomZona.Docg,
    regione: [Regioni.Piemonte],
    denominazioneVino: "Barbera d'Asti",
    espressioneComunitaria: EspressioneComunitaria.Dop,

    // __typename: 'Wine' as const,
  },
  wineName: "Barbera d'Asti",
  // __typename: 'AdWine' as const,
  _id: Factory.each((i) => i.toString()),
});
