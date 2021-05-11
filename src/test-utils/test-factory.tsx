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
  Review,
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
  __typename: 'User' as const,
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
  savedTimes: 3,
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
  __typename: 'AdWine',
  _id: Factory.each((i) => i.toString()),
});

const ad = adFactory.build();

export const negotiationFactory = Factory.Sync.makeFactory<Negotiation>({
  _id: Factory.each((i) => i.toString()),
  forUserAd: {
    firstName: 'prova prova',
    _id: Math.floor(Math.random() * 999).toString(),
    __typename: 'User',
  } as User,
  createdBy: {
    firstName: 'altra prova',
    _id: Math.floor(Math.random() * 999).toString(),
    __typename: 'User',
  } as User,
  ad: {
    _id: Math.floor(Math.random() * 999).toString(),
    postedBy: {
      email: 'prova@lollo.it',
      firstName: 'prova nola',
      lastName: 'altrina provian',
      phoneNumber: '1234567899',
      hideContact: false,
      __typename: 'User',

      _id: Math.floor(Math.random() * 999).toString(),
    } as User,
    wine: {
      denominazioneZona: DenomZona.Doc,
      __typename: 'Wine',
    },
    wineName: "Barbera d'Asti",
    __typename: 'AdWine',
  } as AdWine,
  isConcluded: false,
  type: ad.typeAd,
  review: [],
  dateCreated: '08 Apr 21, 4:18',
  dateConcluded: null,
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
  dateSent: '08 Apr 21, 4:18',
  isViewed: false,
  __typename: 'Message',
});

export const reviewFactory = Factory.Sync.makeFactory<Review>({
  _id: Factory.each((i) => i.toString()),
  forUser: user2,
  negotiation: negotiation,
  createdBy: user,
  dateCreated: 'oggi',
  rating: 5,
  content: 'good',
  type: ad.typeAd,
  __typename: 'Review',
});
