import { format } from 'date-fns';
import * as Factory from 'factory.ts';
import {
  AdWine,
  DenomZona,
  EspressioneComunitaria,
  Message,
  MetodoProduttivo,
  Negotiation,
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

export const user = userFactory.build();
export const user2 = userFactory.build();

export const adFactory = Factory.Sync.makeFactory<AdWine>({
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

    __typename: 'Wine' as const,
  },
  wineName: "Barbera d'Asti",
  __typename: 'AdWine' as const,
  _id: Factory.each((i) => i.toString()),
});

const ad = adFactory.build();

export const negotiationFactory = Factory.Sync.makeFactory<Negotiation>({
  _id: Factory.each((i) => i.toString()),
  forUserAd: user,
  createdBy: user2,
  ad: ad,
  isConcluded: false,
  type: ad.typeAd,
  __typename: 'Negotiation',
});

const negotiation = negotiationFactory.build();

export const messageFactory = Factory.Sync.makeFactory<Message>({
  _id: Factory.each((i) => i.toString()),
  sentBy: user, //{ _id: user._id, firstName: user.firstName, lastName: user.lastName },
  sentTo: user2, //{
  // _id: user2._id,//
  negotiation: negotiation,
  // /},
  content: 'prova',
  dateSent: format(new Date(), 'dd MMM yy, H:m'),
  isViewed: false,
  __typename: 'Message',
});
