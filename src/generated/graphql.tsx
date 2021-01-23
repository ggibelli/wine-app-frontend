import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Address = {
  __typename?: 'Address';
  via: Scalars['String'];
  CAP: Scalars['String'];
  comune: Scalars['String'];
  provincia: Province;
  regione: Regioni;
};

export type AddressInput = {
  via: Scalars['String'];
  CAP: Scalars['String'];
  comune: Scalars['String'];
  provincia: Province;
  regione: Regioni;
};

export type AdInput = {
  typeAd: TypeAd;
  typeProduct: TypeProduct;
  content: Scalars['String'];
  address: AddressInput;
  harvest: Scalars['Int'];
  abv: Scalars['Float'];
  wine?: Maybe<Scalars['ID']>;
  wineName?: Maybe<Scalars['String']>;
  vineyard?: Maybe<Scalars['ID']>;
  vineyardName?: Maybe<Scalars['String']>;
  sottoZona?: Maybe<Scalars['String']>;
  menzione?: Maybe<Menzione>;
  metodoProduttivo?: Maybe<MetodoProduttivo>;
  priceFrom: Scalars['Float'];
  priceTo: Scalars['Float'];
  litersFrom?: Maybe<Scalars['Int']>;
  litersTo?: Maybe<Scalars['Int']>;
  kgFrom?: Maybe<Scalars['Int']>;
  kgTo?: Maybe<Scalars['Int']>;
  needsFollowUp?: Maybe<Scalars['Boolean']>;
};

export type AdInputUpdate = {
  _id: Scalars['ID'];
  wine?: Maybe<Scalars['ID']>;
  wineName?: Maybe<Scalars['String']>;
  vineyard?: Maybe<Scalars['ID']>;
  vineyardName?: Maybe<Scalars['String']>;
  sottoZona?: Maybe<Scalars['String']>;
  menzione?: Maybe<Menzione>;
  metodoProduttivo?: Maybe<MetodoProduttivo>;
  harvest?: Maybe<Scalars['Int']>;
  abv?: Maybe<Scalars['Float']>;
  priceFrom?: Maybe<Scalars['Float']>;
  priceTo?: Maybe<Scalars['Float']>;
  litersFrom?: Maybe<Scalars['Int']>;
  litersTo?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  address?: Maybe<AddressInput>;
  isActive?: Maybe<Scalars['Boolean']>;
  needsFollowUp?: Maybe<Scalars['Boolean']>;
};

export type Ad = {
  _id: Scalars['ID'];
  postedBy: User;
  harvest: Scalars['Int'];
  abv: Scalars['Float'];
  priceFrom: Scalars['Float'];
  priceTo: Scalars['Float'];
  content: Scalars['String'];
  address: Address;
  negotiations?: Maybe<Array<Negotiation>>;
  activeNegotiations?: Maybe<Scalars['Int']>;
  /** viewedBy: [User] */
  numberViews?: Maybe<Scalars['Int']>;
  typeAd: TypeAd;
  typeProduct: TypeProduct;
  isActive: Scalars['Boolean'];
  datePosted?: Maybe<Scalars['String']>;
  needsFollowUp?: Maybe<Scalars['Boolean']>;
};

export type AdDatePostedArgs = {
  format?: Maybe<Scalars['String']>;
};

export type AdWine = Ad & {
  __typename?: 'AdWine';
  _id: Scalars['ID'];
  postedBy: User;
  wineName: Scalars['String'];
  wine?: Maybe<Wine>;
  sottoZona?: Maybe<Scalars['String']>;
  menzione?: Maybe<Menzione>;
  metodoProduttivo?: Maybe<MetodoProduttivo>;
  harvest: Scalars['Int'];
  abv: Scalars['Float'];
  priceFrom: Scalars['Float'];
  priceTo: Scalars['Float'];
  litersFrom?: Maybe<Scalars['Int']>;
  litersTo?: Maybe<Scalars['Int']>;
  content: Scalars['String'];
  address: Address;
  negotiations?: Maybe<Array<Negotiation>>;
  activeNegotiations?: Maybe<Scalars['Int']>;
  /** viewedBy: [User] */
  numberViews?: Maybe<Scalars['Int']>;
  typeAd: TypeAd;
  typeProduct: TypeProduct;
  isActive: Scalars['Boolean'];
  datePosted?: Maybe<Scalars['String']>;
  needsFollowUp?: Maybe<Scalars['Boolean']>;
};

export type AdWineDatePostedArgs = {
  format?: Maybe<Scalars['String']>;
};

export type AdGrape = Ad & {
  __typename?: 'AdGrape';
  _id: Scalars['ID'];
  postedBy: User;
  vineyardName: Scalars['String'];
  vineyard?: Maybe<Vineyard>;
  harvest: Scalars['Int'];
  abv: Scalars['Float'];
  priceFrom: Scalars['Float'];
  priceTo: Scalars['Float'];
  kgFrom: Scalars['Int'];
  kgTo: Scalars['Int'];
  content: Scalars['String'];
  address: Address;
  negotiations?: Maybe<Array<Negotiation>>;
  activeNegotiations?: Maybe<Scalars['Int']>;
  /** viewedBy: [User] */
  numberViews?: Maybe<Scalars['Int']>;
  typeAd: TypeAd;
  typeProduct: TypeProduct;
  isActive: Scalars['Boolean'];
  datePosted?: Maybe<Scalars['String']>;
  needsFollowUp?: Maybe<Scalars['Boolean']>;
};

export type AdGrapeDatePostedArgs = {
  format?: Maybe<Scalars['String']>;
};

export type AdPayload = {
  __typename?: 'AdPayload';
  response?: Maybe<Ad>;
  errors?: Maybe<Array<Maybe<Errors>>>;
};

export type Query = {
  __typename?: 'Query';
  ad?: Maybe<Ad>;
  ads?: Maybe<Array<Maybe<Ad>>>;
  isLoggedIn: Scalars['Boolean'];
  me?: Maybe<User>;
  message?: Maybe<Message>;
  messages?: Maybe<Array<Message>>;
  messagesForNegotiation?: Maybe<Array<Message>>;
  messagesToUser?: Maybe<Array<Message>>;
  negotiation?: Maybe<Negotiation>;
  negotiations?: Maybe<Array<Negotiation>>;
  negotiationsForAd?: Maybe<Array<Negotiation>>;
  negotiationsWithUser?: Maybe<Array<Negotiation>>;
  notification?: Maybe<Notification>;
  review?: Maybe<Review>;
  reviews?: Maybe<Array<Review>>;
  searchedWine?: Maybe<WineSearched>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  vineyard?: Maybe<Vineyard>;
  vineyards?: Maybe<Array<Vineyard>>;
  wine?: Maybe<Wine>;
  wines?: Maybe<Array<Wine>>;
};

export type QueryAdArgs = {
  id: Scalars['ID'];
};

export type QueryAdsArgs = {
  typeAd: TypeAd;
  typeProduct: TypeProduct;
  wineName?: Maybe<Scalars['String']>;
  vineyardName?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<QueryOrderBy>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryMessageArgs = {
  id: Scalars['ID'];
};

export type QueryMessagesForNegotiationArgs = {
  negotiation: Scalars['ID'];
};

export type QueryMessagesToUserArgs = {
  sentTo: Scalars['ID'];
};

export type QueryNegotiationArgs = {
  id: Scalars['ID'];
};

export type QueryNegotiationsForAdArgs = {
  ad: Scalars['ID'];
};

export type QueryNegotiationsWithUserArgs = {
  forUserAd: Scalars['ID'];
};

export type QueryReviewArgs = {
  id: Scalars['ID'];
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type QueryVineyardArgs = {
  id: Scalars['ID'];
};

export type QueryWineArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAd?: Maybe<AdPayload>;
  updateAd?: Maybe<AdPayload>;
  deleteAd?: Maybe<AdPayload>;
  createMessage?: Maybe<MessagePayload>;
  createNegotiation?: Maybe<NegotiationPayload>;
  updateNegotiation?: Maybe<NegotiationPayload>;
  deleteNegotiation?: Maybe<NegotiationPayload>;
  createReview?: Maybe<ReviewPayload>;
  updateReview?: Maybe<ReviewPayload>;
  deleteReview?: Maybe<ReviewPayload>;
  createUser?: Maybe<AuthUserPayload>;
  updateUser?: Maybe<UserPayload>;
  deleteUser?: Maybe<UserPayload>;
  login?: Maybe<AuthUserPayload>;
  createWine?: Maybe<WinePayload>;
  updateWine?: Maybe<WinePayload>;
  deleteWine?: Maybe<WinePayload>;
  createVineyard?: Maybe<VineyardPayload>;
  updateVineyard?: Maybe<VineyardPayload>;
  deleteVineyard?: Maybe<VineyardPayload>;
};

export type MutationCreateAdArgs = {
  input: AdInput;
};

export type MutationUpdateAdArgs = {
  input: AdInputUpdate;
};

export type MutationDeleteAdArgs = {
  id: Scalars['ID'];
};

export type MutationCreateMessageArgs = {
  message: MessageInput;
};

export type MutationCreateNegotiationArgs = {
  negotiation: NegotiationInput;
};

export type MutationUpdateNegotiationArgs = {
  negotiation: NegotiationInputUpdate;
};

export type MutationDeleteNegotiationArgs = {
  id: Scalars['ID'];
};

export type MutationCreateReviewArgs = {
  review: ReviewInput;
};

export type MutationUpdateReviewArgs = {
  review: ReviewInputUpdate;
};

export type MutationDeleteReviewArgs = {
  id: Scalars['ID'];
};

export type MutationCreateUserArgs = {
  user: UserInput;
};

export type MutationUpdateUserArgs = {
  user: UserInputUpdate;
};

export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};

export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationCreateWineArgs = {
  wine: WineInput;
};

export type MutationUpdateWineArgs = {
  wine: WineInputUpdate;
};

export type MutationDeleteWineArgs = {
  id: Scalars['ID'];
};

export type MutationCreateVineyardArgs = {
  vineyard: VineyardInput;
};

export type MutationUpdateVineyardArgs = {
  vineyard: VineyardInputUpdate;
};

export type MutationDeleteVineyardArgs = {
  id: Scalars['ID'];
};

export type Subscription = {
  __typename?: 'Subscription';
  adPostedFollowUp: Ad;
  adRemoved: Ad;
  messageSent: Message;
  negotiationCreated: Negotiation;
  negotiationClosed: Ad;
  reviewCreated: Review;
};

export type MessageInput = {
  content: Scalars['String'];
  sentTo: Scalars['ID'];
  negotiation: Scalars['ID'];
};

export type Message = {
  __typename?: 'Message';
  _id: Scalars['ID'];
  content: Scalars['String'];
  sentBy: User;
  sentTo: User;
  negotiation: Negotiation;
  dateSent?: Maybe<Scalars['String']>;
};

export type MessageDateSentArgs = {
  format?: Maybe<Scalars['String']>;
};

export type MessagePayload = {
  __typename?: 'MessagePayload';
  response?: Maybe<Message>;
  errors?: Maybe<Array<Maybe<Errors>>>;
};

export type NegotiationInput = {
  ad: Scalars['ID'];
  forUserAd: Scalars['ID'];
  type: TypeAd;
};

export type NegotiationInputUpdate = {
  _id: Scalars['ID'];
  isConcluded?: Maybe<Scalars['Boolean']>;
};

export type Negotiation = {
  __typename?: 'Negotiation';
  _id: Scalars['ID'];
  createdBy: User;
  ad: Ad;
  forUserAd: User;
  messages?: Maybe<Array<Message>>;
  isConcluded: Scalars['Boolean'];
  dateCreated?: Maybe<Scalars['String']>;
  review?: Maybe<Array<Maybe<Review>>>;
  type: TypeAd;
};

export type NegotiationDateCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};

export type NegotiationPayload = {
  __typename?: 'NegotiationPayload';
  response?: Maybe<Negotiation>;
  errors?: Maybe<Array<Maybe<Errors>>>;
};

export type ReviewInput = {
  negotiation: Scalars['ID'];
  forUser: Scalars['ID'];
  rating: Rating;
  content: Scalars['String'];
  type: TypeAd;
};

export type ReviewInputUpdate = {
  _id: Scalars['ID'];
  rating?: Maybe<Rating>;
  content?: Maybe<Scalars['String']>;
};

export type Review = {
  __typename?: 'Review';
  _id: Scalars['ID'];
  createdBy: User;
  negotiation: Negotiation;
  forUser: User;
  rating: Rating;
  dateCreated?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  type: TypeAd;
};

export type ReviewDateCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};

export type ReviewPayload = {
  __typename?: 'ReviewPayload';
  response?: Maybe<Review>;
  errors?: Maybe<Array<Maybe<Errors>>>;
};

export type ProducedWines = {
  __typename?: 'ProducedWines';
  wine: Wine;
  bottlesProduced: Scalars['Int'];
  metodoProduttivo: MetodoProduttivo;
};

export type OwnedVineyards = {
  __typename?: 'OwnedVineyards';
  vineyard: Vineyard;
  tonsProduced: Scalars['Int'];
  metodoProduttivo: MetodoProduttivo;
};

export type ProducedWinesInput = {
  wine: Scalars['ID'];
  bottlesProduced?: Maybe<Scalars['Int']>;
  metodoProduttivo?: Maybe<MetodoProduttivo>;
};

export type OwnedVineyardsInput = {
  vineyard: Scalars['ID'];
  tonsProduced?: Maybe<Scalars['Int']>;
  metodoProduttivo?: Maybe<MetodoProduttivo>;
};

export type UserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  pIva: Scalars['String'];
  phoneNumber: Scalars['String'];
  address: AddressInput;
  hideContact: Scalars['Boolean'];
  producedWines?: Maybe<ProducedWinesInput>;
  ownedVineyards?: Maybe<OwnedVineyardsInput>;
};

export type UserInputUpdate = {
  _id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  pIva?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  address?: Maybe<AddressInput>;
  isVerified?: Maybe<Scalars['Boolean']>;
  isPremium?: Maybe<Scalars['Boolean']>;
  hideContact: Scalars['Boolean'];
  producedWines?: Maybe<ProducedWinesInput>;
  ownedVineyards?: Maybe<OwnedVineyardsInput>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  pIva: Scalars['String'];
  phoneNumber: Scalars['String'];
  address: Address;
  isVerified: Scalars['Boolean'];
  isPremium?: Maybe<Scalars['Boolean']>;
  isAdmin: Scalars['Boolean'];
  hideContact: Scalars['Boolean'];
  ads?: Maybe<Array<Ad>>;
  messages?: Maybe<Array<Message>>;
  negotiations?: Maybe<Array<Negotiation>>;
  reviews?: Maybe<Array<Review>>;
  adsRemaining?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<Scalars['String']>;
  producedWines?: Maybe<ProducedWines>;
  ownedVineyards?: Maybe<OwnedVineyards>;
};

export type UserDateCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};

export type AuthUser = {
  __typename?: 'AuthUser';
  token: Scalars['String'];
  user: User;
};

export type AuthUserPayload = {
  __typename?: 'AuthUserPayload';
  response?: Maybe<AuthUser>;
  errors?: Maybe<Array<Maybe<Errors>>>;
};

export type UserPayload = {
  __typename?: 'UserPayload';
  response?: Maybe<User>;
  errors?: Maybe<Array<Maybe<Errors>>>;
};

export type WineInput = {
  denominazioneVino: Scalars['String'];
  aka?: Maybe<Scalars['String']>;
  espressioneComunitaria: EspressioneComunitaria;
  denominazioneZona: DenomZona;
  regione: Array<Regioni>;
};

export type WineInputUpdate = {
  _id: Scalars['ID'];
  denominazioneVino?: Maybe<Scalars['String']>;
  aka?: Maybe<Scalars['String']>;
  espressioneComunitaria?: Maybe<EspressioneComunitaria>;
  denominazioneZona?: Maybe<DenomZona>;
  regione?: Maybe<Array<Maybe<Regioni>>>;
};

export type Wine = {
  __typename?: 'Wine';
  _id: Scalars['ID'];
  denominazioneVino: Scalars['String'];
  aka?: Maybe<Scalars['String']>;
  espressioneComunitaria: EspressioneComunitaria;
  denominazioneZona: DenomZona;
  regione: Array<Regioni>;
};

export type WinePayload = {
  __typename?: 'WinePayload';
  response?: Maybe<Wine>;
  errors?: Maybe<Array<Maybe<Errors>>>;
};

export type Vineyard = {
  __typename?: 'Vineyard';
  _id: Scalars['ID'];
  name: Scalars['String'];
  colore?: Maybe<Colore>;
};

export type VineyardInput = {
  name: Scalars['String'];
  colore?: Maybe<Colore>;
};

export type VineyardInputUpdate = {
  _id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  colore?: Maybe<Colore>;
};

export type VineyardPayload = {
  __typename?: 'VineyardPayload';
  response?: Maybe<Vineyard>;
  errors?: Maybe<Array<Maybe<Errors>>>;
};

export enum Province {
  AG = 'AG',
  AL = 'AL',
  AN = 'AN',
  AO = 'AO',
  AP = 'AP',
  AQ = 'AQ',
  AR = 'AR',
  AT = 'AT',
  AV = 'AV',
  BA = 'BA',
  BG = 'BG',
  BI = 'BI',
  BL = 'BL',
  BN = 'BN',
  BO = 'BO',
  BR = 'BR',
  BS = 'BS',
  BT = 'BT',
  BZ = 'BZ',
  CA = 'CA',
  CB = 'CB',
  CE = 'CE',
  CH = 'CH',
  CL = 'CL',
  CN = 'CN',
  CO = 'CO',
  CR = 'CR',
  CS = 'CS',
  CT = 'CT',
  CZ = 'CZ',
  EN = 'EN',
  FC = 'FC',
  FE = 'FE',
  FG = 'FG',
  FI = 'FI',
  FM = 'FM',
  FR = 'FR',
  GE = 'GE',
  GO = 'GO',
  GR = 'GR',
  IM = 'IM',
  IS = 'IS',
  KR = 'KR',
  LC = 'LC',
  LE = 'LE',
  LI = 'LI',
  LO = 'LO',
  LT = 'LT',
  LU = 'LU',
  MB = 'MB',
  MC = 'MC',
  ME = 'ME',
  MI = 'MI',
  MN = 'MN',
  MO = 'MO',
  MS = 'MS',
  MT = 'MT',
  NA = 'NA',
  NO = 'NO',
  NU = 'NU',
  OR = 'OR',
  PA = 'PA',
  PC = 'PC',
  PD = 'PD',
  PE = 'PE',
  PG = 'PG',
  PI = 'PI',
  PN = 'PN',
  PO = 'PO',
  PR = 'PR',
  PT = 'PT',
  PU = 'PU',
  PV = 'PV',
  PZ = 'PZ',
  RA = 'RA',
  RC = 'RC',
  RE = 'RE',
  RG = 'RG',
  RI = 'RI',
  RM = 'RM',
  RN = 'RN',
  RO = 'RO',
  SA = 'SA',
  SI = 'SI',
  SO = 'SO',
  SP = 'SP',
  SR = 'SR',
  SS = 'SS',
  SU = 'SU',
  SV = 'SV',
  TA = 'TA',
  TE = 'TE',
  TN = 'TN',
  TO = 'TO',
  TP = 'TP',
  TR = 'TR',
  TS = 'TS',
  TV = 'TV',
  UD = 'UD',
  VA = 'VA',
  VB = 'VB',
  VC = 'VC',
  VE = 'VE',
  VI = 'VI',
  VR = 'VR',
  VT = 'VT',
  VV = 'VV',
}

export enum Regioni {
  Abruzzo = 'ABRUZZO',
  Basilicata = 'BASILICATA',
  Calabria = 'CALABRIA',
  Campania = 'CAMPANIA',
  Emilia = 'EMILIA',
  Friuli = 'FRIULI',
  Lazio = 'LAZIO',
  Liguria = 'LIGURIA',
  Lombardia = 'LOMBARDIA',
  Marche = 'MARCHE',
  Molise = 'MOLISE',
  Piemonte = 'PIEMONTE',
  Puglia = 'PUGLIA',
  Sardegna = 'SARDEGNA',
  Sicilia = 'SICILIA',
  Toscana = 'TOSCANA',
  Trentino = 'TRENTINO',
  Umbria = 'UMBRIA',
  Valdaosta = 'VALDAOSTA',
  Veneto = 'VENETO',
}

export enum TypeAd {
  Sell = 'SELL',
  Buy = 'BUY',
}

export enum TypeProduct {
  AdWine = 'AdWine',
  AdGrape = 'AdGrape',
}

export enum Menzione {
  Classico = 'CLASSICO',
  Riserva = 'RISERVA',
  Superiore = 'SUPERIORE',
  Vigna = 'VIGNA',
}

export enum MetodoProduttivo {
  Convenzionale = 'CONVENZIONALE',
  Biologico = 'BIOLOGICO',
  Biodinamico = 'BIODINAMICO',
  Naturale = 'NATURALE',
  Vegano = 'VEGANO',
}

export enum Rating {
  Poor = 'POOR',
  Average = 'AVERAGE',
  Ok = 'OK',
  Good = 'GOOD',
  Perfect = 'PERFECT',
}

export enum Colore {
  Bianca = 'BIANCA',
  Rossa = 'ROSSA',
}

export enum EspressioneComunitaria {
  Dop = 'DOP',
  Igp = 'IGP',
  Nd = 'ND',
}

export enum DenomZona {
  Doc = 'DOC',
  Docg = 'DOCG',
  Igt = 'IGT',
  Varietale = 'VARIETALE',
  Vino = 'VINO',
}

export enum QueryOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
}

export type Errors = {
  __typename?: 'Errors';
  name?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export enum AlertStatus {
  Success = 'success',
  Warning = 'warning',
  Info = 'info',
  Error = 'error',
}

export type WineSearched = {
  __typename?: 'WineSearched';
  typeAd?: Maybe<TypeAd>;
  typeProduct?: Maybe<TypeProduct>;
  wineName?: Maybe<Scalars['String']>;
  harvest?: Maybe<Scalars['Int']>;
  abv?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  liters?: Maybe<Scalars['Int']>;
};

export type Notification = {
  __typename?: 'Notification';
  type?: AlertStatus;
  message?: Maybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = { __typename?: 'Mutation' } & {
  login?: Maybe<
    { __typename?: 'AuthUserPayload' } & {
      response?: Maybe<
        { __typename?: 'AuthUser' } & Pick<AuthUser, 'token'> & {
            user: { __typename?: 'User' } & Pick<User, '_id' | 'firstName'>;
          }
      >;
      errors?: Maybe<
        Array<Maybe<{ __typename?: 'Errors' } & Pick<Errors, 'name' | 'text'>>>
      >;
    }
  >;
};

export type CreateUserMutationVariables = Exact<{
  userInput: UserInput;
}>;

export type CreateUserMutation = { __typename?: 'Mutation' } & {
  createUser?: Maybe<
    { __typename?: 'AuthUserPayload' } & {
      response?: Maybe<
        { __typename?: 'AuthUser' } & Pick<AuthUser, 'token'> & {
            user: { __typename?: 'User' } & Pick<User, '_id' | 'firstName'>;
          }
      >;
      errors?: Maybe<
        Array<Maybe<{ __typename?: 'Errors' } & Pick<Errors, 'name' | 'text'>>>
      >;
    }
  >;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = { __typename?: 'Query' } & {
  me?: Maybe<
    { __typename?: 'User' } & Pick<User, '_id' | 'firstName' | 'email'> & {
        ads?: Maybe<
          Array<
            | ({ __typename?: 'AdWine' } & Pick<
                AdWine,
                'wineName' | '_id' | 'typeAd'
              >)
            | ({ __typename?: 'AdGrape' } & Pick<AdGrape, '_id' | 'typeAd'>)
          >
        >;
        negotiations?: Maybe<
          Array<
            { __typename?: 'Negotiation' } & Pick<Negotiation, '_id'> & {
                ad:
                  | ({ __typename?: 'AdWine' } & Pick<
                      AdWine,
                      'wineName' | '_id'
                    >)
                  | ({ __typename?: 'AdGrape' } & Pick<AdGrape, '_id'>);
                forUserAd: { __typename?: 'User' } & Pick<
                  User,
                  '_id' | 'email'
                >;
              }
          >
        >;
      }
  >;
};

export type IsUserLoggedInQueryVariables = Exact<{ [key: string]: never }>;

export type IsUserLoggedInQuery = { __typename?: 'Query' } & Pick<
  Query,
  'isLoggedIn'
>;

export type NotificationQueryVariables = Exact<{ [key: string]: never }>;

export type NotificationQuery = { __typename?: 'Query' } & {
  notification?: Maybe<
    { __typename?: 'Notification' } & Pick<Notification, 'type' | 'message'>
  >;
};

export type WineSearchedQueryVariables = Exact<{ [key: string]: never }>;

export type WineSearchedQuery = { __typename?: 'Query' } & {
  searchedWine?: Maybe<
    { __typename?: 'WineSearched' } & Pick<
      WineSearched,
      | 'typeAd'
      | 'typeProduct'
      | 'wineName'
      | 'harvest'
      | 'abv'
      | 'price'
      | 'liters'
    >
  >;
};

export type AdsWineQueryVariables = Exact<{
  typeAd: TypeAd;
  typeProduct: TypeProduct;
  wineName?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<QueryOrderBy>;
  limit?: Maybe<Scalars['Int']>;
}>;

export type AdsWineQuery = { __typename?: 'Query' } & {
  ads?: Maybe<
    Array<
      Maybe<
        | ({ __typename?: 'AdWine' } & Pick<
            AdWine,
            | 'wineName'
            | 'litersFrom'
            | 'litersTo'
            | '_id'
            | 'harvest'
            | 'abv'
            | 'priceFrom'
            | 'priceTo'
            | 'activeNegotiations'
            | 'datePosted'
          > & {
              postedBy: { __typename?: 'User' } & Pick<
                User,
                '_id' | 'firstName' | 'lastName'
              >;
              address: { __typename?: 'Address' } & Pick<
                Address,
                'regione' | 'provincia'
              >;
            })
        | ({ __typename?: 'AdGrape' } & Pick<
            AdGrape,
            | '_id'
            | 'harvest'
            | 'abv'
            | 'priceFrom'
            | 'priceTo'
            | 'activeNegotiations'
            | 'datePosted'
          > & {
              postedBy: { __typename?: 'User' } & Pick<
                User,
                '_id' | 'firstName' | 'lastName'
              >;
              address: { __typename?: 'Address' } & Pick<
                Address,
                'regione' | 'provincia'
              >;
            })
      >
    >
  >;
};

export type WinesQueryVariables = Exact<{ [key: string]: never }>;

export type WinesQuery = { __typename?: 'Query' } & {
  wines?: Maybe<
    Array<
      { __typename?: 'Wine' } & Pick<
        Wine,
        | '_id'
        | 'denominazioneVino'
        | 'espressioneComunitaria'
        | 'denominazioneZona'
        | 'regione'
      >
    >
  >;
};

export const LoginDocument = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      response {
        token
        user {
          _id
          firstName
        }
      }
      errors {
        name
        text
      }
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    baseOptions
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const CreateUserDocument = gql`
  mutation CreateUser($userInput: UserInput!) {
    createUser(user: $userInput) {
      response {
        token
        user {
          _id
          firstName
        }
      }
      errors {
        name
        text
      }
    }
  }
`;
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      userInput: // value for 'userInput'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >
) {
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    baseOptions
  );
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const MeDocument = gql`
  query me {
    me {
      _id
      firstName
      email
      ads {
        _id
        typeAd
        ... on AdWine {
          wineName
        }
      }
      negotiations {
        _id
        ad {
          _id
          ... on AdWine {
            wineName
          }
        }
        forUserAd {
          _id
          email
        }
      }
    }
  }
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(
    MeDocument,
    baseOptions
  );
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const IsUserLoggedInDocument = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

/**
 * __useIsUserLoggedInQuery__
 *
 * To run a query within a React component, call `useIsUserLoggedInQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsUserLoggedInQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsUserLoggedInQuery({
 *   variables: {
 *   },
 * });
 */
export function useIsUserLoggedInQuery(
  baseOptions?: Apollo.QueryHookOptions<
    IsUserLoggedInQuery,
    IsUserLoggedInQueryVariables
  >
) {
  return Apollo.useQuery<IsUserLoggedInQuery, IsUserLoggedInQueryVariables>(
    IsUserLoggedInDocument,
    baseOptions
  );
}
export function useIsUserLoggedInLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    IsUserLoggedInQuery,
    IsUserLoggedInQueryVariables
  >
) {
  return Apollo.useLazyQuery<IsUserLoggedInQuery, IsUserLoggedInQueryVariables>(
    IsUserLoggedInDocument,
    baseOptions
  );
}
export type IsUserLoggedInQueryHookResult = ReturnType<
  typeof useIsUserLoggedInQuery
>;
export type IsUserLoggedInLazyQueryHookResult = ReturnType<
  typeof useIsUserLoggedInLazyQuery
>;
export type IsUserLoggedInQueryResult = Apollo.QueryResult<
  IsUserLoggedInQuery,
  IsUserLoggedInQueryVariables
>;
export const NotificationDocument = gql`
  query Notification {
    notification @client {
      type @client
      message @client
    }
  }
`;

/**
 * __useNotificationQuery__
 *
 * To run a query within a React component, call `useNotificationQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotificationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotificationQuery({
 *   variables: {
 *   },
 * });
 */
export function useNotificationQuery(
  baseOptions?: Apollo.QueryHookOptions<
    NotificationQuery,
    NotificationQueryVariables
  >
) {
  return Apollo.useQuery<NotificationQuery, NotificationQueryVariables>(
    NotificationDocument,
    baseOptions
  );
}
export function useNotificationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    NotificationQuery,
    NotificationQueryVariables
  >
) {
  return Apollo.useLazyQuery<NotificationQuery, NotificationQueryVariables>(
    NotificationDocument,
    baseOptions
  );
}
export type NotificationQueryHookResult = ReturnType<
  typeof useNotificationQuery
>;
export type NotificationLazyQueryHookResult = ReturnType<
  typeof useNotificationLazyQuery
>;
export type NotificationQueryResult = Apollo.QueryResult<
  NotificationQuery,
  NotificationQueryVariables
>;
export const WineSearchedDocument = gql`
  query WineSearched {
    searchedWine @client {
      typeAd @client
      typeProduct @client
      wineName @client
      harvest @client
      abv @client
      price @client
      liters @client
    }
  }
`;

/**
 * __useWineSearchedQuery__
 *
 * To run a query within a React component, call `useWineSearchedQuery` and pass it any options that fit your needs.
 * When your component renders, `useWineSearchedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWineSearchedQuery({
 *   variables: {
 *   },
 * });
 */
export function useWineSearchedQuery(
  baseOptions?: Apollo.QueryHookOptions<
    WineSearchedQuery,
    WineSearchedQueryVariables
  >
) {
  return Apollo.useQuery<WineSearchedQuery, WineSearchedQueryVariables>(
    WineSearchedDocument,
    baseOptions
  );
}
export function useWineSearchedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    WineSearchedQuery,
    WineSearchedQueryVariables
  >
) {
  return Apollo.useLazyQuery<WineSearchedQuery, WineSearchedQueryVariables>(
    WineSearchedDocument,
    baseOptions
  );
}
export type WineSearchedQueryHookResult = ReturnType<
  typeof useWineSearchedQuery
>;
export type WineSearchedLazyQueryHookResult = ReturnType<
  typeof useWineSearchedLazyQuery
>;
export type WineSearchedQueryResult = Apollo.QueryResult<
  WineSearchedQuery,
  WineSearchedQueryVariables
>;
export const AdsWineDocument = gql`
  query AdsWine(
    $typeAd: TypeAd!
    $typeProduct: TypeProduct!
    $wineName: String
    $skip: Int
    $orderBy: QueryOrderBy
    $limit: Int
  ) {
    ads(
      typeAd: $typeAd
      typeProduct: $typeProduct
      wineName: $wineName
      skip: $skip
      orderBy: $orderBy
      limit: $limit
    ) {
      _id
      postedBy {
        _id
        firstName
        lastName
      }
      harvest
      abv
      priceFrom
      priceTo
      ... on AdWine {
        wineName
        litersFrom
        litersTo
      }
      address {
        regione
        provincia
      }
      activeNegotiations
      datePosted
    }
  }
`;

/**
 * __useAdsWineQuery__
 *
 * To run a query within a React component, call `useAdsWineQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdsWineQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdsWineQuery({
 *   variables: {
 *      typeAd: // value for 'typeAd'
 *      typeProduct: // value for 'typeProduct'
 *      wineName: // value for 'wineName'
 *      skip: // value for 'skip'
 *      orderBy: // value for 'orderBy'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useAdsWineQuery(
  baseOptions: Apollo.QueryHookOptions<AdsWineQuery, AdsWineQueryVariables>
) {
  return Apollo.useQuery<AdsWineQuery, AdsWineQueryVariables>(
    AdsWineDocument,
    baseOptions
  );
}
export function useAdsWineLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdsWineQuery, AdsWineQueryVariables>
) {
  return Apollo.useLazyQuery<AdsWineQuery, AdsWineQueryVariables>(
    AdsWineDocument,
    baseOptions
  );
}
export type AdsWineQueryHookResult = ReturnType<typeof useAdsWineQuery>;
export type AdsWineLazyQueryHookResult = ReturnType<typeof useAdsWineLazyQuery>;
export type AdsWineQueryResult = Apollo.QueryResult<
  AdsWineQuery,
  AdsWineQueryVariables
>;
export const WinesDocument = gql`
  query Wines {
    wines {
      _id
      denominazioneVino
      espressioneComunitaria
      denominazioneZona
      regione
    }
  }
`;

/**
 * __useWinesQuery__
 *
 * To run a query within a React component, call `useWinesQuery` and pass it any options that fit your needs.
 * When your component renders, `useWinesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWinesQuery({
 *   variables: {
 *   },
 * });
 */
export function useWinesQuery(
  baseOptions?: Apollo.QueryHookOptions<WinesQuery, WinesQueryVariables>
) {
  return Apollo.useQuery<WinesQuery, WinesQueryVariables>(
    WinesDocument,
    baseOptions
  );
}
export function useWinesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<WinesQuery, WinesQueryVariables>
) {
  return Apollo.useLazyQuery<WinesQuery, WinesQueryVariables>(
    WinesDocument,
    baseOptions
  );
}
export type WinesQueryHookResult = ReturnType<typeof useWinesQuery>;
export type WinesLazyQueryHookResult = ReturnType<typeof useWinesLazyQuery>;
export type WinesQueryResult = Apollo.QueryResult<
  WinesQuery,
  WinesQueryVariables
>;
