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
  via?: Maybe<Scalars['String']>;
  CAP?: Maybe<Scalars['String']>;
  comune: Scalars['String'];
  provincia: Province;
  regione: Regioni;
};

export type AddressInput = {
  via?: Maybe<Scalars['String']>;
  CAP?: Maybe<Scalars['String']>;
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

export type AdsResult = {
  __typename?: 'AdsResult';
  ads?: Maybe<Array<Maybe<Ad>>>;
  pageCount?: Maybe<Scalars['Int']>;
};

export type AdPayload = {
  __typename?: 'AdPayload';
  response?: Maybe<Ad>;
  errors?: Maybe<Array<Maybe<Errors>>>;
};

export type Query = {
  __typename?: 'Query';
  ad?: Maybe<Ad>;
  ads?: Maybe<AdsResult>;
  adsForUser?: Maybe<AdsResult>;
  isLoggedIn: Scalars['Boolean'];
  me?: Maybe<User>;
  message?: Maybe<Message>;
  messages?: Maybe<Array<Message>>;
  messagesForNegotiation?: Maybe<MessageResult>;
  messagesToUser?: Maybe<Array<Message>>;
  myInfo?: Maybe<User>;
  negotiation?: Maybe<Negotiation>;
  negotiations?: Maybe<NegotiationResult>;
  negotiationsForAd?: Maybe<Array<Negotiation>>;
  negotiationsWithUser?: Maybe<Array<Negotiation>>;
  notification?: Maybe<Notification>;
  review?: Maybe<Review>;
  reviews?: Maybe<ReviewResult>;
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
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<QueryOrderBy>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryAdsForUserArgs = {
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<QueryOrderBy>;
  limit?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  user: Scalars['ID'];
};

export type QueryMessageArgs = {
  id: Scalars['ID'];
};

export type QueryMessagesForNegotiationArgs = {
  negotiation: Scalars['ID'];
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryMessagesToUserArgs = {
  sentTo: Scalars['ID'];
};

export type QueryNegotiationArgs = {
  id: Scalars['ID'];
};

export type QueryNegotiationsArgs = {
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<QueryOrderBy>;
  limit?: Maybe<Scalars['Int']>;
  isConcluded?: Maybe<Scalars['Boolean']>;
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

export type QueryReviewsArgs = {
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<QueryOrderBy>;
  limit?: Maybe<Scalars['Int']>;
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
  saveAd?: Maybe<AdPayload>;
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

export type MutationSaveAdArgs = {
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
  isViewed: Scalars['Boolean'];
};

export type MessageDateSentArgs = {
  format?: Maybe<Scalars['String']>;
};

export type MessagePayload = {
  __typename?: 'MessagePayload';
  response?: Maybe<Message>;
  errors?: Maybe<Array<Maybe<Errors>>>;
};

export type MessageResult = {
  __typename?: 'MessageResult';
  messages?: Maybe<Array<Maybe<Message>>>;
  pageCount?: Maybe<Scalars['Int']>;
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
  dateConcluded?: Maybe<Scalars['String']>;
  review?: Maybe<Array<Maybe<Review>>>;
  type: TypeAd;
};

export type NegotiationDateCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};

export type NegotiationDateConcludedArgs = {
  format?: Maybe<Scalars['String']>;
};

export type NegotiationResult = {
  __typename?: 'NegotiationResult';
  negotiations?: Maybe<Array<Maybe<Negotiation>>>;
  pageCount?: Maybe<Scalars['Int']>;
};

export type NegotiationPayload = {
  __typename?: 'NegotiationPayload';
  response?: Maybe<Negotiation>;
  errors?: Maybe<Array<Maybe<Errors>>>;
};

export type ReviewInput = {
  negotiation: Scalars['ID'];
  forUser: Scalars['ID'];
  rating: Scalars['Float'];
  content: Scalars['String'];
  type: TypeAd;
};

export type ReviewInputUpdate = {
  _id: Scalars['ID'];
  rating?: Maybe<Scalars['Float']>;
  content?: Maybe<Scalars['String']>;
};

export type ReviewResult = {
  __typename?: 'ReviewResult';
  reviews?: Maybe<Array<Maybe<Review>>>;
  pageCount?: Maybe<Scalars['Int']>;
};

export type Review = {
  __typename?: 'Review';
  _id: Scalars['ID'];
  createdBy: User;
  negotiation: Negotiation;
  forUser: User;
  rating: Scalars['Float'];
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
  savedAds?: Maybe<Array<Ad>>;
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
  isPost?: Maybe<Scalars['Boolean']>;
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
            user: { __typename?: 'User' } & Pick<User, '_id' | 'firstName'> & {
                address: { __typename?: 'Address' } & Pick<
                  Address,
                  'regione' | 'provincia' | 'comune'
                >;
              };
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

export type UpdateUserMutationVariables = Exact<{
  user: UserInputUpdate;
}>;

export type UpdateUserMutation = { __typename?: 'Mutation' } & {
  updateUser?: Maybe<
    { __typename?: 'UserPayload' } & {
      response?: Maybe<
        { __typename?: 'User' } & Pick<User, '_id' | 'firstName'>
      >;
      errors?: Maybe<
        Array<Maybe<{ __typename?: 'Errors' } & Pick<Errors, 'name' | 'text'>>>
      >;
    }
  >;
};

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteUserMutation = { __typename?: 'Mutation' } & {
  deleteUser?: Maybe<
    { __typename?: 'UserPayload' } & {
      response?: Maybe<
        { __typename?: 'User' } & Pick<User, '_id' | 'firstName'>
      >;
      errors?: Maybe<
        Array<Maybe<{ __typename?: 'Errors' } & Pick<Errors, 'name' | 'text'>>>
      >;
    }
  >;
};

export type CreateAdWineMutationVariables = Exact<{
  input: AdInput;
}>;

export type CreateAdWineMutation = { __typename?: 'Mutation' } & {
  createAd?: Maybe<
    { __typename?: 'AdPayload' } & {
      response?: Maybe<
        | ({ __typename?: 'AdWine' } & Pick<
            AdWine,
            | 'wineName'
            | 'litersFrom'
            | 'litersTo'
            | 'metodoProduttivo'
            | '_id'
            | 'harvest'
            | 'abv'
            | 'priceFrom'
            | 'priceTo'
            | 'typeAd'
            | 'activeNegotiations'
            | 'numberViews'
            | 'datePosted'
          > & {
              wine?: Maybe<
                { __typename?: 'Wine' } & Pick<
                  Wine,
                  'denominazioneZona' | 'regione'
                >
              >;
              postedBy: { __typename?: 'User' } & Pick<User, '_id'>;
              address: { __typename?: 'Address' } & Pick<
                Address,
                'regione' | 'provincia' | 'comune'
              >;
            })
        | ({ __typename?: 'AdGrape' } & Pick<
            AdGrape,
            | '_id'
            | 'harvest'
            | 'abv'
            | 'priceFrom'
            | 'priceTo'
            | 'typeAd'
            | 'activeNegotiations'
            | 'numberViews'
            | 'datePosted'
          > & {
              postedBy: { __typename?: 'User' } & Pick<User, '_id'>;
              address: { __typename?: 'Address' } & Pick<
                Address,
                'regione' | 'provincia' | 'comune'
              >;
            })
      >;
      errors?: Maybe<
        Array<Maybe<{ __typename?: 'Errors' } & Pick<Errors, 'name' | 'text'>>>
      >;
    }
  >;
};

export type UpdateAdWineMutationVariables = Exact<{
  input: AdInputUpdate;
}>;

export type UpdateAdWineMutation = { __typename?: 'Mutation' } & {
  updateAd?: Maybe<
    { __typename?: 'AdPayload' } & {
      response?: Maybe<
        | ({ __typename?: 'AdWine' } & Pick<AdWine, '_id'>)
        | ({ __typename?: 'AdGrape' } & Pick<AdGrape, '_id'>)
      >;
      errors?: Maybe<
        Array<Maybe<{ __typename?: 'Errors' } & Pick<Errors, 'name' | 'text'>>>
      >;
    }
  >;
};

export type SaveAdMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type SaveAdMutation = { __typename?: 'Mutation' } & {
  saveAd?: Maybe<
    { __typename?: 'AdPayload' } & {
      response?: Maybe<
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
            | 'datePosted'
          > & {
              wine?: Maybe<
                { __typename?: 'Wine' } & Pick<Wine, 'denominazioneZona'>
              >;
            })
        | ({ __typename?: 'AdGrape' } & Pick<
            AdGrape,
            '_id' | 'harvest' | 'abv' | 'priceFrom' | 'priceTo' | 'datePosted'
          >)
      >;
      errors?: Maybe<
        Array<Maybe<{ __typename?: 'Errors' } & Pick<Errors, 'name' | 'text'>>>
      >;
    }
  >;
};

export type DeleteAdMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteAdMutation = { __typename?: 'Mutation' } & {
  deleteAd?: Maybe<
    { __typename?: 'AdPayload' } & {
      response?: Maybe<
        | ({ __typename?: 'AdWine' } & Pick<AdWine, '_id'>)
        | ({ __typename?: 'AdGrape' } & Pick<AdGrape, '_id'>)
      >;
      errors?: Maybe<
        Array<Maybe<{ __typename?: 'Errors' } & Pick<Errors, 'name' | 'text'>>>
      >;
    }
  >;
};

export type CreateNegotiationMutationVariables = Exact<{
  negotiation: NegotiationInput;
}>;

export type CreateNegotiationMutation = { __typename?: 'Mutation' } & {
  createNegotiation?: Maybe<
    { __typename?: 'NegotiationPayload' } & {
      response?: Maybe<
        { __typename?: 'Negotiation' } & NegotiationDetailsFragment
      >;
      errors?: Maybe<
        Array<Maybe<{ __typename?: 'Errors' } & Pick<Errors, 'name' | 'text'>>>
      >;
    }
  >;
};

export type UpdateNegotiationMutationVariables = Exact<{
  negotiation: NegotiationInputUpdate;
}>;

export type UpdateNegotiationMutation = { __typename?: 'Mutation' } & {
  updateNegotiation?: Maybe<
    { __typename?: 'NegotiationPayload' } & {
      response?: Maybe<
        { __typename?: 'Negotiation' } & NegotiationDetailsFragment
      >;
      errors?: Maybe<
        Array<Maybe<{ __typename?: 'Errors' } & Pick<Errors, 'name' | 'text'>>>
      >;
    }
  >;
};

export type DeleteNegotiationMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteNegotiationMutation = { __typename?: 'Mutation' } & {
  deleteNegotiation?: Maybe<
    { __typename?: 'NegotiationPayload' } & {
      response?: Maybe<
        { __typename?: 'Negotiation' } & Pick<Negotiation, '_id'>
      >;
      errors?: Maybe<
        Array<Maybe<{ __typename?: 'Errors' } & Pick<Errors, 'name' | 'text'>>>
      >;
    }
  >;
};

export type CreateMessageMutationVariables = Exact<{
  message: MessageInput;
}>;

export type CreateMessageMutation = { __typename?: 'Mutation' } & {
  createMessage?: Maybe<
    { __typename?: 'MessagePayload' } & {
      response?: Maybe<{ __typename?: 'Message' } & MessageDetailsFragment>;
      errors?: Maybe<
        Array<Maybe<{ __typename?: 'Errors' } & Pick<Errors, 'name' | 'text'>>>
      >;
    }
  >;
};

export type CreateReviewMutationVariables = Exact<{
  review: ReviewInput;
}>;

export type CreateReviewMutation = { __typename?: 'Mutation' } & {
  createReview?: Maybe<
    { __typename?: 'ReviewPayload' } & {
      response?: Maybe<{ __typename?: 'Review' } & ReviewDetailsFragment>;
      errors?: Maybe<
        Array<Maybe<{ __typename?: 'Errors' } & Pick<Errors, 'name' | 'text'>>>
      >;
    }
  >;
};

type AdDetails_AdWine_Fragment = { __typename?: 'AdWine' } & Pick<
  AdWine,
  | 'wineName'
  | 'litersFrom'
  | 'litersTo'
  | 'metodoProduttivo'
  | '_id'
  | 'needsFollowUp'
  | 'harvest'
  | 'abv'
  | 'priceFrom'
  | 'priceTo'
  | 'typeAd'
  | 'activeNegotiations'
  | 'datePosted'
> & {
    wine?: Maybe<
      { __typename?: 'Wine' } & Pick<Wine, 'denominazioneZona' | 'regione'>
    >;
    postedBy: { __typename?: 'User' } & Pick<
      User,
      '_id' | 'firstName' | 'lastName' | 'hideContact'
    >;
    address: { __typename?: 'Address' } & Pick<
      Address,
      'regione' | 'provincia'
    >;
  };

type AdDetails_AdGrape_Fragment = { __typename?: 'AdGrape' } & Pick<
  AdGrape,
  | '_id'
  | 'needsFollowUp'
  | 'harvest'
  | 'abv'
  | 'priceFrom'
  | 'priceTo'
  | 'typeAd'
  | 'activeNegotiations'
  | 'datePosted'
> & {
    postedBy: { __typename?: 'User' } & Pick<
      User,
      '_id' | 'firstName' | 'lastName' | 'hideContact'
    >;
    address: { __typename?: 'Address' } & Pick<
      Address,
      'regione' | 'provincia'
    >;
  };

export type AdDetailsFragment =
  | AdDetails_AdWine_Fragment
  | AdDetails_AdGrape_Fragment;

export type NegotiationDetailsFragment = { __typename?: 'Negotiation' } & Pick<
  Negotiation,
  '_id' | 'type' | 'dateCreated' | 'dateConcluded' | 'isConcluded'
> & {
    createdBy: { __typename?: 'User' } & Pick<User, '_id' | 'firstName'>;
    ad:
      | ({ __typename?: 'AdWine' } & Pick<AdWine, 'wineName' | '_id'> & {
            postedBy: { __typename?: 'User' } & Pick<
              User,
              '_id' | 'firstName' | 'lastName'
            >;
          })
      | ({ __typename?: 'AdGrape' } & Pick<AdGrape, '_id'> & {
            postedBy: { __typename?: 'User' } & Pick<
              User,
              '_id' | 'firstName' | 'lastName'
            >;
          });
    forUserAd: { __typename?: 'User' } & Pick<User, '_id' | 'firstName'>;
    review?: Maybe<
      Array<
        Maybe<
          { __typename?: 'Review' } & Pick<Review, '_id'> & {
              createdBy: { __typename?: 'User' } & Pick<User, '_id'>;
            }
        >
      >
    >;
  };

export type MessageDetailsFragment = { __typename?: 'Message' } & Pick<
  Message,
  '_id' | 'content' | 'isViewed' | 'dateSent'
> & {
    sentBy: { __typename?: 'User' } & Pick<
      User,
      '_id' | 'firstName' | 'lastName'
    >;
    sentTo: { __typename?: 'User' } & Pick<
      User,
      '_id' | 'firstName' | 'lastName'
    >;
    negotiation: { __typename?: 'Negotiation' } & Pick<
      Negotiation,
      '_id' | 'type' | 'isConcluded'
    > & {
        ad:
          | ({ __typename?: 'AdWine' } & Pick<AdWine, 'wineName' | '_id'>)
          | ({ __typename?: 'AdGrape' } & Pick<AdGrape, '_id'>);
      };
  };

export type ReviewDetailsFragment = { __typename?: 'Review' } & Pick<
  Review,
  '_id' | 'rating' | 'dateCreated' | 'content' | 'type'
> & {
    createdBy: { __typename?: 'User' } & Pick<
      User,
      '_id' | 'firstName' | 'lastName'
    >;
    negotiation: { __typename?: 'Negotiation' } & Pick<Negotiation, '_id'> & {
        ad:
          | ({ __typename?: 'AdWine' } & Pick<AdWine, 'wineName' | '_id'>)
          | ({ __typename?: 'AdGrape' } & Pick<AdGrape, '_id'>);
      };
    forUser: { __typename?: 'User' } & Pick<
      User,
      '_id' | 'firstName' | 'lastName'
    >;
  };

export type FavoriteQueryVariables = Exact<{ [key: string]: never }>;

export type FavoriteQuery = { __typename?: 'Query' } & {
  me?: Maybe<
    { __typename?: 'User' } & {
      savedAds?: Maybe<
        Array<
          | ({ __typename?: 'AdWine' } & Pick<
              AdWine,
              | 'wineName'
              | 'litersFrom'
              | 'litersTo'
              | 'metodoProduttivo'
              | '_id'
              | 'harvest'
              | 'abv'
              | 'priceFrom'
              | 'priceTo'
              | 'typeAd'
              | 'activeNegotiations'
              | 'numberViews'
              | 'datePosted'
            > & {
                wine?: Maybe<
                  { __typename?: 'Wine' } & Pick<
                    Wine,
                    'denominazioneZona' | 'regione'
                  >
                >;
                postedBy: { __typename?: 'User' } & Pick<User, '_id'>;
                address: { __typename?: 'Address' } & Pick<
                  Address,
                  'regione' | 'provincia' | 'comune'
                >;
              })
          | ({ __typename?: 'AdGrape' } & Pick<
              AdGrape,
              | '_id'
              | 'harvest'
              | 'abv'
              | 'priceFrom'
              | 'priceTo'
              | 'typeAd'
              | 'activeNegotiations'
              | 'numberViews'
              | 'datePosted'
            > & {
                postedBy: { __typename?: 'User' } & Pick<User, '_id'>;
                address: { __typename?: 'Address' } & Pick<
                  Address,
                  'regione' | 'provincia' | 'comune'
                >;
              })
        >
      >;
    }
  >;
};

export type LightMeQueryVariables = Exact<{ [key: string]: never }>;

export type LightMeQuery = { __typename?: 'Query' } & {
  me?: Maybe<
    { __typename?: 'User' } & Pick<User, '_id' | 'firstName'> & {
        address: { __typename?: 'Address' } & Pick<
          Address,
          'regione' | 'provincia' | 'comune'
        >;
      }
  >;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = { __typename?: 'Query' } & {
  me?: Maybe<
    { __typename?: 'User' } & Pick<User, '_id' | 'firstName' | 'lastName'> & {
        address: { __typename?: 'Address' } & Pick<
          Address,
          'regione' | 'provincia' | 'comune'
        >;
        ads?: Maybe<
          Array<
            | ({ __typename?: 'AdWine' } & Pick<
                AdWine,
                'wineName' | '_id' | 'isActive' | 'harvest' | 'typeAd'
              > & { postedBy: { __typename?: 'User' } & Pick<User, '_id'> })
            | ({ __typename?: 'AdGrape' } & Pick<
                AdGrape,
                '_id' | 'isActive' | 'harvest' | 'typeAd'
              > & { postedBy: { __typename?: 'User' } & Pick<User, '_id'> })
          >
        >;
        savedAds?: Maybe<
          Array<
            | ({ __typename?: 'AdWine' } & Pick<AdWine, '_id'>)
            | ({ __typename?: 'AdGrape' } & Pick<AdGrape, '_id'>)
          >
        >;
        messages?: Maybe<
          Array<
            { __typename?: 'Message' } & Pick<Message, '_id' | 'isViewed'> & {
                sentBy: { __typename?: 'User' } & Pick<User, '_id'>;
              }
          >
        >;
        negotiations?: Maybe<
          Array<
            { __typename?: 'Negotiation' } & Pick<
              Negotiation,
              '_id' | 'isConcluded'
            > & {
                ad:
                  | ({ __typename?: 'AdWine' } & Pick<AdWine, '_id'>)
                  | ({ __typename?: 'AdGrape' } & Pick<AdGrape, '_id'>);
              }
          >
        >;
        reviews?: Maybe<
          Array<
            { __typename?: 'Review' } & Pick<Review, '_id' | 'rating'> & {
                forUser: { __typename?: 'User' } & Pick<User, '_id'>;
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

export type MyInfoQueryVariables = Exact<{ [key: string]: never }>;

export type MyInfoQuery = { __typename?: 'Query' } & {
  myInfo?: Maybe<
    { __typename?: 'User' } & Pick<User, '_id' | 'firstName' | 'lastName'> & {
        address: { __typename?: 'Address' } & Pick<
          Address,
          'regione' | 'provincia' | 'comune'
        >;
        ads?: Maybe<
          Array<
            | ({ __typename?: 'AdWine' } & Pick<AdWine, '_id' | 'isActive'> & {
                  postedBy: { __typename?: 'User' } & Pick<User, '_id'>;
                })
            | ({ __typename?: 'AdGrape' } & Pick<
                AdGrape,
                '_id' | 'isActive'
              > & { postedBy: { __typename?: 'User' } & Pick<User, '_id'> })
          >
        >;
        savedAds?: Maybe<
          Array<
            | ({ __typename?: 'AdWine' } & Pick<AdWine, '_id'>)
            | ({ __typename?: 'AdGrape' } & Pick<AdGrape, '_id'>)
          >
        >;
        messages?: Maybe<
          Array<
            { __typename?: 'Message' } & Pick<Message, '_id' | 'isViewed'> & {
                sentBy: { __typename?: 'User' } & Pick<User, '_id'>;
              }
          >
        >;
        negotiations?: Maybe<
          Array<
            { __typename?: 'Negotiation' } & Pick<
              Negotiation,
              '_id' | 'isConcluded'
            > & {
                ad:
                  | ({ __typename?: 'AdWine' } & Pick<AdWine, '_id'>)
                  | ({ __typename?: 'AdGrape' } & Pick<AdGrape, '_id'>);
              }
          >
        >;
        reviews?: Maybe<
          Array<{ __typename?: 'Review' } & Pick<Review, '_id' | 'rating'>>
        >;
      }
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
      | 'isPost'
    >
  >;
};

export type AdsWineQueryVariables = Exact<{
  typeAd: TypeAd;
  typeProduct: TypeProduct;
  wineName?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<QueryOrderBy>;
  limit?: Maybe<Scalars['Int']>;
}>;

export type AdsWineQuery = { __typename?: 'Query' } & {
  ads?: Maybe<
    { __typename?: 'AdsResult' } & Pick<AdsResult, 'pageCount'> & {
        ads?: Maybe<
          Array<
            Maybe<
              | ({ __typename?: 'AdWine' } & Pick<
                  AdWine,
                  | 'wineName'
                  | 'litersFrom'
                  | 'litersTo'
                  | 'metodoProduttivo'
                  | '_id'
                  | 'harvest'
                  | 'abv'
                  | 'priceFrom'
                  | 'priceTo'
                  | 'typeAd'
                  | 'activeNegotiations'
                  | 'numberViews'
                  | 'isActive'
                  | 'datePosted'
                > & {
                    wine?: Maybe<
                      { __typename?: 'Wine' } & Pick<
                        Wine,
                        'denominazioneZona' | 'regione'
                      >
                    >;
                    postedBy: { __typename?: 'User' } & Pick<User, '_id'>;
                    address: { __typename?: 'Address' } & Pick<
                      Address,
                      'regione' | 'provincia' | 'comune'
                    >;
                  })
              | ({ __typename?: 'AdGrape' } & Pick<
                  AdGrape,
                  | '_id'
                  | 'harvest'
                  | 'abv'
                  | 'priceFrom'
                  | 'priceTo'
                  | 'typeAd'
                  | 'activeNegotiations'
                  | 'numberViews'
                  | 'isActive'
                  | 'datePosted'
                > & {
                    postedBy: { __typename?: 'User' } & Pick<User, '_id'>;
                    address: { __typename?: 'Address' } & Pick<
                      Address,
                      'regione' | 'provincia' | 'comune'
                    >;
                  })
            >
          >
        >;
      }
  >;
};

export type AdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type AdQuery = { __typename?: 'Query' } & {
  ad?: Maybe<
    | ({ __typename?: 'AdWine' } & Pick<
        AdWine,
        | 'wineName'
        | 'litersFrom'
        | 'litersTo'
        | 'metodoProduttivo'
        | '_id'
        | 'needsFollowUp'
        | 'harvest'
        | 'abv'
        | 'priceFrom'
        | 'priceTo'
        | 'typeAd'
        | 'activeNegotiations'
        | 'numberViews'
        | 'datePosted'
        | 'isActive'
      > & {
          wine?: Maybe<
            { __typename?: 'Wine' } & Pick<
              Wine,
              'denominazioneZona' | 'regione'
            >
          >;
          postedBy: { __typename?: 'User' } & Pick<
            User,
            | '_id'
            | 'firstName'
            | 'lastName'
            | 'hideContact'
            | 'email'
            | 'phoneNumber'
          >;
          address: { __typename?: 'Address' } & Pick<
            Address,
            'regione' | 'provincia' | 'comune'
          >;
        })
    | ({ __typename?: 'AdGrape' } & Pick<
        AdGrape,
        | '_id'
        | 'needsFollowUp'
        | 'harvest'
        | 'abv'
        | 'priceFrom'
        | 'priceTo'
        | 'typeAd'
        | 'activeNegotiations'
        | 'numberViews'
        | 'datePosted'
        | 'isActive'
      > & {
          postedBy: { __typename?: 'User' } & Pick<
            User,
            | '_id'
            | 'firstName'
            | 'lastName'
            | 'hideContact'
            | 'email'
            | 'phoneNumber'
          >;
          address: { __typename?: 'Address' } & Pick<
            Address,
            'regione' | 'provincia' | 'comune'
          >;
        })
  >;
  me?: Maybe<
    { __typename?: 'User' } & Pick<User, '_id'> & {
        negotiations?: Maybe<
          Array<
            { __typename?: 'Negotiation' } & Pick<Negotiation, '_id'> & {
                ad:
                  | ({ __typename?: 'AdWine' } & Pick<AdWine, '_id'>)
                  | ({ __typename?: 'AdGrape' } & Pick<AdGrape, '_id'>);
              }
          >
        >;
        savedAds?: Maybe<
          Array<
            | ({ __typename?: 'AdWine' } & Pick<AdWine, '_id'>)
            | ({ __typename?: 'AdGrape' } & Pick<AdGrape, '_id'>)
          >
        >;
      }
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

export type NegotiationsQueryVariables = Exact<{
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<QueryOrderBy>;
  limit?: Maybe<Scalars['Int']>;
  isConcluded?: Maybe<Scalars['Boolean']>;
}>;

export type NegotiationsQuery = { __typename?: 'Query' } & {
  negotiations?: Maybe<
    { __typename?: 'NegotiationResult' } & Pick<
      NegotiationResult,
      'pageCount'
    > & {
        negotiations?: Maybe<
          Array<
            Maybe<{ __typename?: 'Negotiation' } & NegotiationDetailsFragment>
          >
        >;
      }
  >;
};

export type NegotiationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type NegotiationQuery = { __typename?: 'Query' } & {
  negotiation?: Maybe<
    { __typename?: 'Negotiation' } & {
      ad:
        | ({ __typename?: 'AdWine' } & {
            wine?: Maybe<
              { __typename?: 'Wine' } & Pick<Wine, 'denominazioneZona'>
            >;
            postedBy: { __typename?: 'User' } & Pick<
              User,
              'hideContact' | 'phoneNumber' | 'email'
            >;
          })
        | ({ __typename?: 'AdGrape' } & {
            postedBy: { __typename?: 'User' } & Pick<
              User,
              'hideContact' | 'phoneNumber' | 'email'
            >;
          });
    } & NegotiationDetailsFragment
  >;
};

export type MessagesQueryVariables = Exact<{ [key: string]: never }>;

export type MessagesQuery = { __typename?: 'Query' } & {
  messages?: Maybe<Array<{ __typename?: 'Message' } & MessageDetailsFragment>>;
};

export type MessagesNegotiationQueryVariables = Exact<{
  id: Scalars['ID'];
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}>;

export type MessagesNegotiationQuery = { __typename?: 'Query' } & {
  messagesForNegotiation?: Maybe<
    { __typename?: 'MessageResult' } & Pick<MessageResult, 'pageCount'> & {
        messages?: Maybe<
          Array<Maybe<{ __typename?: 'Message' } & MessageDetailsFragment>>
        >;
      }
  >;
};

export type ReviewsQueryVariables = Exact<{
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<QueryOrderBy>;
  limit?: Maybe<Scalars['Int']>;
}>;

export type ReviewsQuery = { __typename?: 'Query' } & {
  reviews?: Maybe<
    { __typename?: 'ReviewResult' } & Pick<ReviewResult, 'pageCount'> & {
        reviews?: Maybe<
          Array<Maybe<{ __typename?: 'Review' } & ReviewDetailsFragment>>
        >;
      }
  >;
};

export type ReviewQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type ReviewQuery = { __typename?: 'Query' } & {
  review?: Maybe<{ __typename?: 'Review' } & ReviewDetailsFragment>;
};

export type NegotiationsForAdQueryVariables = Exact<{
  ad: Scalars['ID'];
}>;

export type NegotiationsForAdQuery = { __typename?: 'Query' } & {
  negotiationsForAd?: Maybe<
    Array<
      { __typename?: 'Negotiation' } & Pick<
        Negotiation,
        '_id' | 'isConcluded' | 'dateCreated' | 'dateConcluded' | 'type'
      > & {
          createdBy: { __typename?: 'User' } & Pick<
            User,
            '_id' | 'firstName' | 'lastName'
          >;
        }
    >
  >;
};

export type AdsForUserQueryVariables = Exact<{
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<QueryOrderBy>;
  limit?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  user: Scalars['ID'];
}>;

export type AdsForUserQuery = { __typename?: 'Query' } & {
  adsForUser?: Maybe<
    { __typename?: 'AdsResult' } & Pick<AdsResult, 'pageCount'> & {
        ads?: Maybe<
          Array<
            Maybe<
              | ({ __typename?: 'AdWine' } & Pick<
                  AdWine,
                  | 'wineName'
                  | 'litersFrom'
                  | 'litersTo'
                  | 'metodoProduttivo'
                  | '_id'
                  | 'needsFollowUp'
                  | 'harvest'
                  | 'abv'
                  | 'priceFrom'
                  | 'priceTo'
                  | 'typeAd'
                  | 'activeNegotiations'
                  | 'numberViews'
                  | 'datePosted'
                  | 'isActive'
                > & {
                    wine?: Maybe<
                      { __typename?: 'Wine' } & Pick<
                        Wine,
                        'denominazioneZona' | 'regione'
                      >
                    >;
                    postedBy: { __typename?: 'User' } & Pick<
                      User,
                      '_id' | 'firstName' | 'lastName' | 'hideContact'
                    >;
                    address: { __typename?: 'Address' } & Pick<
                      Address,
                      'regione' | 'provincia' | 'comune'
                    >;
                  })
              | ({ __typename?: 'AdGrape' } & Pick<
                  AdGrape,
                  | '_id'
                  | 'needsFollowUp'
                  | 'harvest'
                  | 'abv'
                  | 'priceFrom'
                  | 'priceTo'
                  | 'typeAd'
                  | 'activeNegotiations'
                  | 'numberViews'
                  | 'datePosted'
                  | 'isActive'
                > & {
                    postedBy: { __typename?: 'User' } & Pick<
                      User,
                      '_id' | 'firstName' | 'lastName' | 'hideContact'
                    >;
                    address: { __typename?: 'Address' } & Pick<
                      Address,
                      'regione' | 'provincia' | 'comune'
                    >;
                  })
            >
          >
        >;
      }
  >;
};

export type AdPostedFollowUpSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type AdPostedFollowUpSubscription = { __typename?: 'Subscription' } & {
  adPostedFollowUp:
    | ({ __typename?: 'AdWine' } & Pick<
        AdWine,
        | 'wineName'
        | 'litersFrom'
        | 'litersTo'
        | 'metodoProduttivo'
        | '_id'
        | 'harvest'
        | 'abv'
        | 'priceFrom'
        | 'priceTo'
        | 'typeAd'
        | 'activeNegotiations'
        | 'numberViews'
        | 'datePosted'
      > & {
          wine?: Maybe<
            { __typename?: 'Wine' } & Pick<
              Wine,
              'denominazioneZona' | 'regione'
            >
          >;
          postedBy: { __typename?: 'User' } & Pick<User, '_id'>;
          address: { __typename?: 'Address' } & Pick<
            Address,
            'regione' | 'provincia' | 'comune'
          >;
        })
    | ({ __typename?: 'AdGrape' } & Pick<
        AdGrape,
        | '_id'
        | 'harvest'
        | 'abv'
        | 'priceFrom'
        | 'priceTo'
        | 'typeAd'
        | 'activeNegotiations'
        | 'numberViews'
        | 'datePosted'
      > & {
          postedBy: { __typename?: 'User' } & Pick<User, '_id'>;
          address: { __typename?: 'Address' } & Pick<
            Address,
            'regione' | 'provincia' | 'comune'
          >;
        });
};

export type AdRemovedSubscriptionVariables = Exact<{ [key: string]: never }>;

export type AdRemovedSubscription = { __typename?: 'Subscription' } & {
  adRemoved:
    | ({ __typename?: 'AdWine' } & Pick<AdWine, '_id'>)
    | ({ __typename?: 'AdGrape' } & Pick<AdGrape, '_id'>);
};

export type MessageSentSubscriptionVariables = Exact<{ [key: string]: never }>;

export type MessageSentSubscription = { __typename?: 'Subscription' } & {
  messageSent: { __typename?: 'Message' } & MessageDetailsFragment;
};

export type NegotiationCreatedSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type NegotiationCreatedSubscription = { __typename?: 'Subscription' } & {
  negotiationCreated: {
    __typename?: 'Negotiation';
  } & NegotiationDetailsFragment;
};

export type NegotiationClosedSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type NegotiationClosedSubscription = { __typename?: 'Subscription' } & {
  negotiationClosed:
    | ({ __typename?: 'AdWine' } & Pick<
        AdWine,
        | 'wineName'
        | 'litersFrom'
        | 'litersTo'
        | 'metodoProduttivo'
        | '_id'
        | 'harvest'
        | 'abv'
        | 'priceFrom'
        | 'priceTo'
        | 'typeAd'
        | 'activeNegotiations'
        | 'numberViews'
        | 'datePosted'
      > & {
          wine?: Maybe<
            { __typename?: 'Wine' } & Pick<
              Wine,
              'denominazioneZona' | 'regione'
            >
          >;
          postedBy: { __typename?: 'User' } & Pick<User, '_id'>;
          address: { __typename?: 'Address' } & Pick<
            Address,
            'regione' | 'provincia' | 'comune'
          >;
        })
    | ({ __typename?: 'AdGrape' } & Pick<
        AdGrape,
        | '_id'
        | 'harvest'
        | 'abv'
        | 'priceFrom'
        | 'priceTo'
        | 'typeAd'
        | 'activeNegotiations'
        | 'numberViews'
        | 'datePosted'
      > & {
          postedBy: { __typename?: 'User' } & Pick<User, '_id'>;
          address: { __typename?: 'Address' } & Pick<
            Address,
            'regione' | 'provincia' | 'comune'
          >;
        });
};

export type ReviewCreatedSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type ReviewCreatedSubscription = { __typename?: 'Subscription' } & {
  reviewCreated: { __typename?: 'Review' } & ReviewDetailsFragment;
};

export const AdDetailsFragmentDoc = gql`
  fragment AdDetails on Ad {
    _id
    postedBy {
      _id
      firstName
      lastName
      hideContact
    }
    needsFollowUp
    harvest
    abv
    priceFrom
    priceTo
    ... on AdWine {
      wineName
      litersFrom
      litersTo
      metodoProduttivo
      wine {
        denominazioneZona
        regione
      }
    }
    typeAd
    address {
      regione
      provincia
    }
    activeNegotiations
    datePosted
  }
`;
export const NegotiationDetailsFragmentDoc = gql`
  fragment NegotiationDetails on Negotiation {
    _id
    createdBy {
      _id
      firstName
    }
    ad {
      _id
      postedBy {
        _id
        firstName
        lastName
      }
      ... on AdWine {
        wineName
      }
    }
    forUserAd {
      _id
      firstName
    }
    type
    review {
      _id
      createdBy {
        _id
      }
    }
    dateCreated
    dateConcluded
    isConcluded
  }
`;
export const MessageDetailsFragmentDoc = gql`
  fragment MessageDetails on Message {
    _id
    content
    isViewed
    sentBy {
      _id
      firstName
      lastName
    }
    sentTo {
      _id
      firstName
      lastName
    }
    negotiation {
      _id
      ad {
        _id
        ... on AdWine {
          wineName
        }
      }
      type
      isConcluded
    }
    dateSent
  }
`;
export const ReviewDetailsFragmentDoc = gql`
  fragment ReviewDetails on Review {
    _id
    createdBy {
      _id
      firstName
      lastName
    }
    negotiation {
      _id
      ad {
        _id
        ... on AdWine {
          wineName
        }
      }
    }
    forUser {
      _id
      firstName
      lastName
    }
    rating
    dateCreated
    content
    type
  }
`;
export const LoginDocument = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      response {
        token
        user {
          _id
          firstName
          address {
            regione
            provincia
            comune
          }
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
export const UpdateUserDocument = gql`
  mutation UpdateUser($user: UserInputUpdate!) {
    updateUser(user: $user) {
      response {
        _id
        firstName
      }
      errors {
        name
        text
      }
    }
  }
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >
) {
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    baseOptions
  );
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export const DeleteUserDocument = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      response {
        _id
        firstName
      }
      errors {
        name
        text
      }
    }
  }
`;
export type DeleteUserMutationFn = Apollo.MutationFunction<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >
) {
  return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(
    DeleteUserDocument,
    baseOptions
  );
}
export type DeleteUserMutationHookResult = ReturnType<
  typeof useDeleteUserMutation
>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;
export const CreateAdWineDocument = gql`
  mutation CreateAdWine($input: AdInput!) {
    createAd(input: $input) {
      response {
        _id
        postedBy {
          _id
        }
        harvest
        abv
        priceFrom
        priceTo
        ... on AdWine {
          wineName
          litersFrom
          litersTo
          metodoProduttivo
          wine {
            denominazioneZona
            regione
          }
        }
        typeAd
        address {
          regione
          provincia
          comune
        }
        activeNegotiations
        numberViews
        datePosted
      }
      errors {
        name
        text
      }
    }
  }
`;
export type CreateAdWineMutationFn = Apollo.MutationFunction<
  CreateAdWineMutation,
  CreateAdWineMutationVariables
>;

/**
 * __useCreateAdWineMutation__
 *
 * To run a mutation, you first call `useCreateAdWineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAdWineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdWineMutation, { data, loading, error }] = useCreateAdWineMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAdWineMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateAdWineMutation,
    CreateAdWineMutationVariables
  >
) {
  return Apollo.useMutation<
    CreateAdWineMutation,
    CreateAdWineMutationVariables
  >(CreateAdWineDocument, baseOptions);
}
export type CreateAdWineMutationHookResult = ReturnType<
  typeof useCreateAdWineMutation
>;
export type CreateAdWineMutationResult = Apollo.MutationResult<CreateAdWineMutation>;
export type CreateAdWineMutationOptions = Apollo.BaseMutationOptions<
  CreateAdWineMutation,
  CreateAdWineMutationVariables
>;
export const UpdateAdWineDocument = gql`
  mutation UpdateAdWine($input: AdInputUpdate!) {
    updateAd(input: $input) {
      response {
        _id
      }
      errors {
        name
        text
      }
    }
  }
`;
export type UpdateAdWineMutationFn = Apollo.MutationFunction<
  UpdateAdWineMutation,
  UpdateAdWineMutationVariables
>;

/**
 * __useUpdateAdWineMutation__
 *
 * To run a mutation, you first call `useUpdateAdWineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAdWineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdWineMutation, { data, loading, error }] = useUpdateAdWineMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAdWineMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateAdWineMutation,
    UpdateAdWineMutationVariables
  >
) {
  return Apollo.useMutation<
    UpdateAdWineMutation,
    UpdateAdWineMutationVariables
  >(UpdateAdWineDocument, baseOptions);
}
export type UpdateAdWineMutationHookResult = ReturnType<
  typeof useUpdateAdWineMutation
>;
export type UpdateAdWineMutationResult = Apollo.MutationResult<UpdateAdWineMutation>;
export type UpdateAdWineMutationOptions = Apollo.BaseMutationOptions<
  UpdateAdWineMutation,
  UpdateAdWineMutationVariables
>;
export const SaveAdDocument = gql`
  mutation SaveAd($id: ID!) {
    saveAd(id: $id) {
      response {
        _id
        harvest
        abv
        priceFrom
        priceTo
        ... on AdWine {
          wineName
          litersFrom
          litersTo
          wine {
            denominazioneZona
          }
        }
        datePosted
      }
      errors {
        name
        text
      }
    }
  }
`;
export type SaveAdMutationFn = Apollo.MutationFunction<
  SaveAdMutation,
  SaveAdMutationVariables
>;

/**
 * __useSaveAdMutation__
 *
 * To run a mutation, you first call `useSaveAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveAdMutation, { data, loading, error }] = useSaveAdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSaveAdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SaveAdMutation,
    SaveAdMutationVariables
  >
) {
  return Apollo.useMutation<SaveAdMutation, SaveAdMutationVariables>(
    SaveAdDocument,
    baseOptions
  );
}
export type SaveAdMutationHookResult = ReturnType<typeof useSaveAdMutation>;
export type SaveAdMutationResult = Apollo.MutationResult<SaveAdMutation>;
export type SaveAdMutationOptions = Apollo.BaseMutationOptions<
  SaveAdMutation,
  SaveAdMutationVariables
>;
export const DeleteAdDocument = gql`
  mutation DeleteAd($id: ID!) {
    deleteAd(id: $id) {
      response {
        _id
      }
      errors {
        name
        text
      }
    }
  }
`;
export type DeleteAdMutationFn = Apollo.MutationFunction<
  DeleteAdMutation,
  DeleteAdMutationVariables
>;

/**
 * __useDeleteAdMutation__
 *
 * To run a mutation, you first call `useDeleteAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAdMutation, { data, loading, error }] = useDeleteAdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteAdMutation,
    DeleteAdMutationVariables
  >
) {
  return Apollo.useMutation<DeleteAdMutation, DeleteAdMutationVariables>(
    DeleteAdDocument,
    baseOptions
  );
}
export type DeleteAdMutationHookResult = ReturnType<typeof useDeleteAdMutation>;
export type DeleteAdMutationResult = Apollo.MutationResult<DeleteAdMutation>;
export type DeleteAdMutationOptions = Apollo.BaseMutationOptions<
  DeleteAdMutation,
  DeleteAdMutationVariables
>;
export const CreateNegotiationDocument = gql`
  mutation CreateNegotiation($negotiation: NegotiationInput!) {
    createNegotiation(negotiation: $negotiation) {
      response {
        ...NegotiationDetails
      }
      errors {
        name
        text
      }
    }
  }
  ${NegotiationDetailsFragmentDoc}
`;
export type CreateNegotiationMutationFn = Apollo.MutationFunction<
  CreateNegotiationMutation,
  CreateNegotiationMutationVariables
>;

/**
 * __useCreateNegotiationMutation__
 *
 * To run a mutation, you first call `useCreateNegotiationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNegotiationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNegotiationMutation, { data, loading, error }] = useCreateNegotiationMutation({
 *   variables: {
 *      negotiation: // value for 'negotiation'
 *   },
 * });
 */
export function useCreateNegotiationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateNegotiationMutation,
    CreateNegotiationMutationVariables
  >
) {
  return Apollo.useMutation<
    CreateNegotiationMutation,
    CreateNegotiationMutationVariables
  >(CreateNegotiationDocument, baseOptions);
}
export type CreateNegotiationMutationHookResult = ReturnType<
  typeof useCreateNegotiationMutation
>;
export type CreateNegotiationMutationResult = Apollo.MutationResult<CreateNegotiationMutation>;
export type CreateNegotiationMutationOptions = Apollo.BaseMutationOptions<
  CreateNegotiationMutation,
  CreateNegotiationMutationVariables
>;
export const UpdateNegotiationDocument = gql`
  mutation UpdateNegotiation($negotiation: NegotiationInputUpdate!) {
    updateNegotiation(negotiation: $negotiation) {
      response {
        ...NegotiationDetails
      }
      errors {
        name
        text
      }
    }
  }
  ${NegotiationDetailsFragmentDoc}
`;
export type UpdateNegotiationMutationFn = Apollo.MutationFunction<
  UpdateNegotiationMutation,
  UpdateNegotiationMutationVariables
>;

/**
 * __useUpdateNegotiationMutation__
 *
 * To run a mutation, you first call `useUpdateNegotiationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNegotiationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNegotiationMutation, { data, loading, error }] = useUpdateNegotiationMutation({
 *   variables: {
 *      negotiation: // value for 'negotiation'
 *   },
 * });
 */
export function useUpdateNegotiationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateNegotiationMutation,
    UpdateNegotiationMutationVariables
  >
) {
  return Apollo.useMutation<
    UpdateNegotiationMutation,
    UpdateNegotiationMutationVariables
  >(UpdateNegotiationDocument, baseOptions);
}
export type UpdateNegotiationMutationHookResult = ReturnType<
  typeof useUpdateNegotiationMutation
>;
export type UpdateNegotiationMutationResult = Apollo.MutationResult<UpdateNegotiationMutation>;
export type UpdateNegotiationMutationOptions = Apollo.BaseMutationOptions<
  UpdateNegotiationMutation,
  UpdateNegotiationMutationVariables
>;
export const DeleteNegotiationDocument = gql`
  mutation DeleteNegotiation($id: ID!) {
    deleteNegotiation(id: $id) {
      response {
        _id
      }
      errors {
        name
        text
      }
    }
  }
`;
export type DeleteNegotiationMutationFn = Apollo.MutationFunction<
  DeleteNegotiationMutation,
  DeleteNegotiationMutationVariables
>;

/**
 * __useDeleteNegotiationMutation__
 *
 * To run a mutation, you first call `useDeleteNegotiationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteNegotiationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteNegotiationMutation, { data, loading, error }] = useDeleteNegotiationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteNegotiationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteNegotiationMutation,
    DeleteNegotiationMutationVariables
  >
) {
  return Apollo.useMutation<
    DeleteNegotiationMutation,
    DeleteNegotiationMutationVariables
  >(DeleteNegotiationDocument, baseOptions);
}
export type DeleteNegotiationMutationHookResult = ReturnType<
  typeof useDeleteNegotiationMutation
>;
export type DeleteNegotiationMutationResult = Apollo.MutationResult<DeleteNegotiationMutation>;
export type DeleteNegotiationMutationOptions = Apollo.BaseMutationOptions<
  DeleteNegotiationMutation,
  DeleteNegotiationMutationVariables
>;
export const CreateMessageDocument = gql`
  mutation CreateMessage($message: MessageInput!) {
    createMessage(message: $message) {
      response {
        ...MessageDetails
      }
      errors {
        name
        text
      }
    }
  }
  ${MessageDetailsFragmentDoc}
`;
export type CreateMessageMutationFn = Apollo.MutationFunction<
  CreateMessageMutation,
  CreateMessageMutationVariables
>;

/**
 * __useCreateMessageMutation__
 *
 * To run a mutation, you first call `useCreateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMessageMutation, { data, loading, error }] = useCreateMessageMutation({
 *   variables: {
 *      message: // value for 'message'
 *   },
 * });
 */
export function useCreateMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateMessageMutation,
    CreateMessageMutationVariables
  >
) {
  return Apollo.useMutation<
    CreateMessageMutation,
    CreateMessageMutationVariables
  >(CreateMessageDocument, baseOptions);
}
export type CreateMessageMutationHookResult = ReturnType<
  typeof useCreateMessageMutation
>;
export type CreateMessageMutationResult = Apollo.MutationResult<CreateMessageMutation>;
export type CreateMessageMutationOptions = Apollo.BaseMutationOptions<
  CreateMessageMutation,
  CreateMessageMutationVariables
>;
export const CreateReviewDocument = gql`
  mutation CreateReview($review: ReviewInput!) {
    createReview(review: $review) {
      response {
        ...ReviewDetails
      }
      errors {
        name
        text
      }
    }
  }
  ${ReviewDetailsFragmentDoc}
`;
export type CreateReviewMutationFn = Apollo.MutationFunction<
  CreateReviewMutation,
  CreateReviewMutationVariables
>;

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *      review: // value for 'review'
 *   },
 * });
 */
export function useCreateReviewMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateReviewMutation,
    CreateReviewMutationVariables
  >
) {
  return Apollo.useMutation<
    CreateReviewMutation,
    CreateReviewMutationVariables
  >(CreateReviewDocument, baseOptions);
}
export type CreateReviewMutationHookResult = ReturnType<
  typeof useCreateReviewMutation
>;
export type CreateReviewMutationResult = Apollo.MutationResult<CreateReviewMutation>;
export type CreateReviewMutationOptions = Apollo.BaseMutationOptions<
  CreateReviewMutation,
  CreateReviewMutationVariables
>;
export const FavoriteDocument = gql`
  query Favorite {
    me {
      savedAds {
        _id
        postedBy {
          _id
        }
        harvest
        abv
        priceFrom
        priceTo
        ... on AdWine {
          wineName
          litersFrom
          litersTo
          metodoProduttivo
          wine {
            denominazioneZona
            regione
          }
        }
        typeAd
        address {
          regione
          provincia
          comune
        }
        activeNegotiations
        numberViews
        datePosted
      }
    }
  }
`;

/**
 * __useFavoriteQuery__
 *
 * To run a query within a React component, call `useFavoriteQuery` and pass it any options that fit your needs.
 * When your component renders, `useFavoriteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFavoriteQuery({
 *   variables: {
 *   },
 * });
 */
export function useFavoriteQuery(
  baseOptions?: Apollo.QueryHookOptions<FavoriteQuery, FavoriteQueryVariables>
) {
  return Apollo.useQuery<FavoriteQuery, FavoriteQueryVariables>(
    FavoriteDocument,
    baseOptions
  );
}
export function useFavoriteLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FavoriteQuery,
    FavoriteQueryVariables
  >
) {
  return Apollo.useLazyQuery<FavoriteQuery, FavoriteQueryVariables>(
    FavoriteDocument,
    baseOptions
  );
}
export type FavoriteQueryHookResult = ReturnType<typeof useFavoriteQuery>;
export type FavoriteLazyQueryHookResult = ReturnType<
  typeof useFavoriteLazyQuery
>;
export type FavoriteQueryResult = Apollo.QueryResult<
  FavoriteQuery,
  FavoriteQueryVariables
>;
export const LightMeDocument = gql`
  query LightMe {
    me {
      _id
      firstName
      address {
        regione
        provincia
        comune
      }
    }
  }
`;

/**
 * __useLightMeQuery__
 *
 * To run a query within a React component, call `useLightMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useLightMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLightMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useLightMeQuery(
  baseOptions?: Apollo.QueryHookOptions<LightMeQuery, LightMeQueryVariables>
) {
  return Apollo.useQuery<LightMeQuery, LightMeQueryVariables>(
    LightMeDocument,
    baseOptions
  );
}
export function useLightMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<LightMeQuery, LightMeQueryVariables>
) {
  return Apollo.useLazyQuery<LightMeQuery, LightMeQueryVariables>(
    LightMeDocument,
    baseOptions
  );
}
export type LightMeQueryHookResult = ReturnType<typeof useLightMeQuery>;
export type LightMeLazyQueryHookResult = ReturnType<typeof useLightMeLazyQuery>;
export type LightMeQueryResult = Apollo.QueryResult<
  LightMeQuery,
  LightMeQueryVariables
>;
export const MeDocument = gql`
  query Me {
    me {
      _id
      firstName
      lastName
      address {
        regione
        provincia
        comune
      }
      ads {
        _id
        postedBy {
          _id
        }
        isActive
        harvest
        typeAd
        ... on AdWine {
          wineName
        }
      }
      savedAds {
        _id
      }
      messages {
        _id
        isViewed
        sentBy {
          _id
        }
      }
      negotiations {
        _id
        isConcluded
        ad {
          _id
        }
      }
      reviews {
        _id
        forUser {
          _id
        }
        rating
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
export const MyInfoDocument = gql`
  query MyInfo {
    myInfo @client {
      _id
      firstName
      lastName
      address {
        regione
        provincia
        comune
      }
      ads {
        _id
        postedBy {
          _id
        }
        isActive
      }
      savedAds {
        _id
      }
      messages {
        _id
        isViewed
        sentBy {
          _id
        }
      }
      negotiations {
        _id
        isConcluded
        ad {
          _id
        }
      }
      reviews {
        _id
        rating
      }
    }
  }
`;

/**
 * __useMyInfoQuery__
 *
 * To run a query within a React component, call `useMyInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyInfoQuery(
  baseOptions?: Apollo.QueryHookOptions<MyInfoQuery, MyInfoQueryVariables>
) {
  return Apollo.useQuery<MyInfoQuery, MyInfoQueryVariables>(
    MyInfoDocument,
    baseOptions
  );
}
export function useMyInfoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MyInfoQuery, MyInfoQueryVariables>
) {
  return Apollo.useLazyQuery<MyInfoQuery, MyInfoQueryVariables>(
    MyInfoDocument,
    baseOptions
  );
}
export type MyInfoQueryHookResult = ReturnType<typeof useMyInfoQuery>;
export type MyInfoLazyQueryHookResult = ReturnType<typeof useMyInfoLazyQuery>;
export type MyInfoQueryResult = Apollo.QueryResult<
  MyInfoQuery,
  MyInfoQueryVariables
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
      isPost @client
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
    $offset: Int
    $orderBy: QueryOrderBy
    $limit: Int
  ) {
    ads(
      typeAd: $typeAd
      typeProduct: $typeProduct
      wineName: $wineName
      offset: $offset
      orderBy: $orderBy
      limit: $limit
    ) {
      ads {
        _id
        postedBy {
          _id
        }
        harvest
        abv
        priceFrom
        priceTo
        ... on AdWine {
          wineName
          litersFrom
          litersTo
          metodoProduttivo
          wine {
            denominazioneZona
            regione
          }
        }
        typeAd
        address {
          regione
          provincia
          comune
        }
        activeNegotiations
        numberViews
        isActive
        datePosted
      }
      pageCount
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
 *      offset: // value for 'offset'
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
export const AdDocument = gql`
  query Ad($id: ID!) {
    ad(id: $id) {
      _id
      postedBy {
        _id
        firstName
        lastName
        hideContact
        email
        phoneNumber
      }
      needsFollowUp
      harvest
      abv
      priceFrom
      priceTo
      ... on AdWine {
        wineName
        litersFrom
        litersTo
        metodoProduttivo
        wine {
          denominazioneZona
          regione
        }
      }
      typeAd
      address {
        regione
        provincia
        comune
      }
      activeNegotiations
      numberViews
      datePosted
      isActive
    }
    me {
      _id
      negotiations {
        _id
        ad {
          _id
        }
      }
      savedAds {
        _id
      }
    }
  }
`;

/**
 * __useAdQuery__
 *
 * To run a query within a React component, call `useAdQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAdQuery(
  baseOptions: Apollo.QueryHookOptions<AdQuery, AdQueryVariables>
) {
  return Apollo.useQuery<AdQuery, AdQueryVariables>(AdDocument, baseOptions);
}
export function useAdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdQuery, AdQueryVariables>
) {
  return Apollo.useLazyQuery<AdQuery, AdQueryVariables>(
    AdDocument,
    baseOptions
  );
}
export type AdQueryHookResult = ReturnType<typeof useAdQuery>;
export type AdLazyQueryHookResult = ReturnType<typeof useAdLazyQuery>;
export type AdQueryResult = Apollo.QueryResult<AdQuery, AdQueryVariables>;
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
export const NegotiationsDocument = gql`
  query Negotiations(
    $offset: Int
    $orderBy: QueryOrderBy
    $limit: Int
    $isConcluded: Boolean
  ) {
    negotiations(
      offset: $offset
      orderBy: $orderBy
      limit: $limit
      isConcluded: $isConcluded
    ) {
      negotiations {
        ...NegotiationDetails
      }
      pageCount
    }
  }
  ${NegotiationDetailsFragmentDoc}
`;

/**
 * __useNegotiationsQuery__
 *
 * To run a query within a React component, call `useNegotiationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNegotiationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNegotiationsQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      limit: // value for 'limit'
 *      isConcluded: // value for 'isConcluded'
 *   },
 * });
 */
export function useNegotiationsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    NegotiationsQuery,
    NegotiationsQueryVariables
  >
) {
  return Apollo.useQuery<NegotiationsQuery, NegotiationsQueryVariables>(
    NegotiationsDocument,
    baseOptions
  );
}
export function useNegotiationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    NegotiationsQuery,
    NegotiationsQueryVariables
  >
) {
  return Apollo.useLazyQuery<NegotiationsQuery, NegotiationsQueryVariables>(
    NegotiationsDocument,
    baseOptions
  );
}
export type NegotiationsQueryHookResult = ReturnType<
  typeof useNegotiationsQuery
>;
export type NegotiationsLazyQueryHookResult = ReturnType<
  typeof useNegotiationsLazyQuery
>;
export type NegotiationsQueryResult = Apollo.QueryResult<
  NegotiationsQuery,
  NegotiationsQueryVariables
>;
export const NegotiationDocument = gql`
  query Negotiation($id: ID!) {
    negotiation(id: $id) {
      ...NegotiationDetails
      ad {
        ... on AdWine {
          wine {
            denominazioneZona
          }
        }
        postedBy {
          hideContact
          phoneNumber
          email
        }
      }
    }
  }
  ${NegotiationDetailsFragmentDoc}
`;

/**
 * __useNegotiationQuery__
 *
 * To run a query within a React component, call `useNegotiationQuery` and pass it any options that fit your needs.
 * When your component renders, `useNegotiationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNegotiationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useNegotiationQuery(
  baseOptions: Apollo.QueryHookOptions<
    NegotiationQuery,
    NegotiationQueryVariables
  >
) {
  return Apollo.useQuery<NegotiationQuery, NegotiationQueryVariables>(
    NegotiationDocument,
    baseOptions
  );
}
export function useNegotiationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    NegotiationQuery,
    NegotiationQueryVariables
  >
) {
  return Apollo.useLazyQuery<NegotiationQuery, NegotiationQueryVariables>(
    NegotiationDocument,
    baseOptions
  );
}
export type NegotiationQueryHookResult = ReturnType<typeof useNegotiationQuery>;
export type NegotiationLazyQueryHookResult = ReturnType<
  typeof useNegotiationLazyQuery
>;
export type NegotiationQueryResult = Apollo.QueryResult<
  NegotiationQuery,
  NegotiationQueryVariables
>;
export const MessagesDocument = gql`
  query Messages {
    messages {
      ...MessageDetails
    }
  }
  ${MessageDetailsFragmentDoc}
`;

/**
 * __useMessagesQuery__
 *
 * To run a query within a React component, call `useMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useMessagesQuery(
  baseOptions?: Apollo.QueryHookOptions<MessagesQuery, MessagesQueryVariables>
) {
  return Apollo.useQuery<MessagesQuery, MessagesQueryVariables>(
    MessagesDocument,
    baseOptions
  );
}
export function useMessagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MessagesQuery,
    MessagesQueryVariables
  >
) {
  return Apollo.useLazyQuery<MessagesQuery, MessagesQueryVariables>(
    MessagesDocument,
    baseOptions
  );
}
export type MessagesQueryHookResult = ReturnType<typeof useMessagesQuery>;
export type MessagesLazyQueryHookResult = ReturnType<
  typeof useMessagesLazyQuery
>;
export type MessagesQueryResult = Apollo.QueryResult<
  MessagesQuery,
  MessagesQueryVariables
>;
export const MessagesNegotiationDocument = gql`
  query MessagesNegotiation($id: ID!, $offset: Int, $limit: Int) {
    messagesForNegotiation(negotiation: $id, offset: $offset, limit: $limit) {
      messages {
        ...MessageDetails
      }
      pageCount
    }
  }
  ${MessageDetailsFragmentDoc}
`;

/**
 * __useMessagesNegotiationQuery__
 *
 * To run a query within a React component, call `useMessagesNegotiationQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessagesNegotiationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessagesNegotiationQuery({
 *   variables: {
 *      id: // value for 'id'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useMessagesNegotiationQuery(
  baseOptions: Apollo.QueryHookOptions<
    MessagesNegotiationQuery,
    MessagesNegotiationQueryVariables
  >
) {
  return Apollo.useQuery<
    MessagesNegotiationQuery,
    MessagesNegotiationQueryVariables
  >(MessagesNegotiationDocument, baseOptions);
}
export function useMessagesNegotiationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MessagesNegotiationQuery,
    MessagesNegotiationQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    MessagesNegotiationQuery,
    MessagesNegotiationQueryVariables
  >(MessagesNegotiationDocument, baseOptions);
}
export type MessagesNegotiationQueryHookResult = ReturnType<
  typeof useMessagesNegotiationQuery
>;
export type MessagesNegotiationLazyQueryHookResult = ReturnType<
  typeof useMessagesNegotiationLazyQuery
>;
export type MessagesNegotiationQueryResult = Apollo.QueryResult<
  MessagesNegotiationQuery,
  MessagesNegotiationQueryVariables
>;
export const ReviewsDocument = gql`
  query Reviews($offset: Int, $orderBy: QueryOrderBy, $limit: Int) {
    reviews(offset: $offset, orderBy: $orderBy, limit: $limit) {
      reviews {
        ...ReviewDetails
      }
      pageCount
    }
  }
  ${ReviewDetailsFragmentDoc}
`;

/**
 * __useReviewsQuery__
 *
 * To run a query within a React component, call `useReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewsQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useReviewsQuery(
  baseOptions?: Apollo.QueryHookOptions<ReviewsQuery, ReviewsQueryVariables>
) {
  return Apollo.useQuery<ReviewsQuery, ReviewsQueryVariables>(
    ReviewsDocument,
    baseOptions
  );
}
export function useReviewsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ReviewsQuery, ReviewsQueryVariables>
) {
  return Apollo.useLazyQuery<ReviewsQuery, ReviewsQueryVariables>(
    ReviewsDocument,
    baseOptions
  );
}
export type ReviewsQueryHookResult = ReturnType<typeof useReviewsQuery>;
export type ReviewsLazyQueryHookResult = ReturnType<typeof useReviewsLazyQuery>;
export type ReviewsQueryResult = Apollo.QueryResult<
  ReviewsQuery,
  ReviewsQueryVariables
>;
export const ReviewDocument = gql`
  query Review($id: ID!) {
    review(id: $id) {
      ...ReviewDetails
    }
  }
  ${ReviewDetailsFragmentDoc}
`;

/**
 * __useReviewQuery__
 *
 * To run a query within a React component, call `useReviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReviewQuery(
  baseOptions: Apollo.QueryHookOptions<ReviewQuery, ReviewQueryVariables>
) {
  return Apollo.useQuery<ReviewQuery, ReviewQueryVariables>(
    ReviewDocument,
    baseOptions
  );
}
export function useReviewLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ReviewQuery, ReviewQueryVariables>
) {
  return Apollo.useLazyQuery<ReviewQuery, ReviewQueryVariables>(
    ReviewDocument,
    baseOptions
  );
}
export type ReviewQueryHookResult = ReturnType<typeof useReviewQuery>;
export type ReviewLazyQueryHookResult = ReturnType<typeof useReviewLazyQuery>;
export type ReviewQueryResult = Apollo.QueryResult<
  ReviewQuery,
  ReviewQueryVariables
>;
export const NegotiationsForAdDocument = gql`
  query NegotiationsForAd($ad: ID!) {
    negotiationsForAd(ad: $ad) {
      _id
      isConcluded
      createdBy {
        _id
        firstName
        lastName
      }
      dateCreated
      dateConcluded
      type
    }
  }
`;

/**
 * __useNegotiationsForAdQuery__
 *
 * To run a query within a React component, call `useNegotiationsForAdQuery` and pass it any options that fit your needs.
 * When your component renders, `useNegotiationsForAdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNegotiationsForAdQuery({
 *   variables: {
 *      ad: // value for 'ad'
 *   },
 * });
 */
export function useNegotiationsForAdQuery(
  baseOptions: Apollo.QueryHookOptions<
    NegotiationsForAdQuery,
    NegotiationsForAdQueryVariables
  >
) {
  return Apollo.useQuery<
    NegotiationsForAdQuery,
    NegotiationsForAdQueryVariables
  >(NegotiationsForAdDocument, baseOptions);
}
export function useNegotiationsForAdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    NegotiationsForAdQuery,
    NegotiationsForAdQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    NegotiationsForAdQuery,
    NegotiationsForAdQueryVariables
  >(NegotiationsForAdDocument, baseOptions);
}
export type NegotiationsForAdQueryHookResult = ReturnType<
  typeof useNegotiationsForAdQuery
>;
export type NegotiationsForAdLazyQueryHookResult = ReturnType<
  typeof useNegotiationsForAdLazyQuery
>;
export type NegotiationsForAdQueryResult = Apollo.QueryResult<
  NegotiationsForAdQuery,
  NegotiationsForAdQueryVariables
>;
export const AdsForUserDocument = gql`
  query AdsForUser(
    $offset: Int
    $orderBy: QueryOrderBy
    $limit: Int
    $isActive: Boolean
    $user: ID!
  ) {
    adsForUser(
      offset: $offset
      orderBy: $orderBy
      limit: $limit
      user: $user
      isActive: $isActive
    ) {
      ads {
        _id
        postedBy {
          _id
          firstName
          lastName
          hideContact
        }
        needsFollowUp
        harvest
        abv
        priceFrom
        priceTo
        ... on AdWine {
          wineName
          litersFrom
          litersTo
          metodoProduttivo
          wine {
            denominazioneZona
            regione
          }
        }
        typeAd
        address {
          regione
          provincia
          comune
        }
        activeNegotiations
        numberViews
        datePosted
        isActive
      }
      pageCount
    }
  }
`;

/**
 * __useAdsForUserQuery__
 *
 * To run a query within a React component, call `useAdsForUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdsForUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdsForUserQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      limit: // value for 'limit'
 *      isActive: // value for 'isActive'
 *      user: // value for 'user'
 *   },
 * });
 */
export function useAdsForUserQuery(
  baseOptions: Apollo.QueryHookOptions<
    AdsForUserQuery,
    AdsForUserQueryVariables
  >
) {
  return Apollo.useQuery<AdsForUserQuery, AdsForUserQueryVariables>(
    AdsForUserDocument,
    baseOptions
  );
}
export function useAdsForUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AdsForUserQuery,
    AdsForUserQueryVariables
  >
) {
  return Apollo.useLazyQuery<AdsForUserQuery, AdsForUserQueryVariables>(
    AdsForUserDocument,
    baseOptions
  );
}
export type AdsForUserQueryHookResult = ReturnType<typeof useAdsForUserQuery>;
export type AdsForUserLazyQueryHookResult = ReturnType<
  typeof useAdsForUserLazyQuery
>;
export type AdsForUserQueryResult = Apollo.QueryResult<
  AdsForUserQuery,
  AdsForUserQueryVariables
>;
export const AdPostedFollowUpDocument = gql`
  subscription AdPostedFollowUp {
    adPostedFollowUp {
      _id
      postedBy {
        _id
      }
      harvest
      abv
      priceFrom
      priceTo
      ... on AdWine {
        wineName
        litersFrom
        litersTo
        metodoProduttivo
        wine {
          denominazioneZona
          regione
        }
      }
      typeAd
      address {
        regione
        provincia
        comune
      }
      activeNegotiations
      numberViews
      datePosted
    }
  }
`;

/**
 * __useAdPostedFollowUpSubscription__
 *
 * To run a query within a React component, call `useAdPostedFollowUpSubscription` and pass it any options that fit your needs.
 * When your component renders, `useAdPostedFollowUpSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdPostedFollowUpSubscription({
 *   variables: {
 *   },
 * });
 */
export function useAdPostedFollowUpSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    AdPostedFollowUpSubscription,
    AdPostedFollowUpSubscriptionVariables
  >
) {
  return Apollo.useSubscription<
    AdPostedFollowUpSubscription,
    AdPostedFollowUpSubscriptionVariables
  >(AdPostedFollowUpDocument, baseOptions);
}
export type AdPostedFollowUpSubscriptionHookResult = ReturnType<
  typeof useAdPostedFollowUpSubscription
>;
export type AdPostedFollowUpSubscriptionResult = Apollo.SubscriptionResult<AdPostedFollowUpSubscription>;
export const AdRemovedDocument = gql`
  subscription AdRemoved {
    adRemoved {
      _id
    }
  }
`;

/**
 * __useAdRemovedSubscription__
 *
 * To run a query within a React component, call `useAdRemovedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useAdRemovedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdRemovedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useAdRemovedSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    AdRemovedSubscription,
    AdRemovedSubscriptionVariables
  >
) {
  return Apollo.useSubscription<
    AdRemovedSubscription,
    AdRemovedSubscriptionVariables
  >(AdRemovedDocument, baseOptions);
}
export type AdRemovedSubscriptionHookResult = ReturnType<
  typeof useAdRemovedSubscription
>;
export type AdRemovedSubscriptionResult = Apollo.SubscriptionResult<AdRemovedSubscription>;
export const MessageSentDocument = gql`
  subscription MessageSent {
    messageSent {
      ...MessageDetails
    }
  }
  ${MessageDetailsFragmentDoc}
`;

/**
 * __useMessageSentSubscription__
 *
 * To run a query within a React component, call `useMessageSentSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMessageSentSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessageSentSubscription({
 *   variables: {
 *   },
 * });
 */
export function useMessageSentSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    MessageSentSubscription,
    MessageSentSubscriptionVariables
  >
) {
  return Apollo.useSubscription<
    MessageSentSubscription,
    MessageSentSubscriptionVariables
  >(MessageSentDocument, baseOptions);
}
export type MessageSentSubscriptionHookResult = ReturnType<
  typeof useMessageSentSubscription
>;
export type MessageSentSubscriptionResult = Apollo.SubscriptionResult<MessageSentSubscription>;
export const NegotiationCreatedDocument = gql`
  subscription NegotiationCreated {
    negotiationCreated {
      ...NegotiationDetails
    }
  }
  ${NegotiationDetailsFragmentDoc}
`;

/**
 * __useNegotiationCreatedSubscription__
 *
 * To run a query within a React component, call `useNegotiationCreatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNegotiationCreatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNegotiationCreatedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNegotiationCreatedSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    NegotiationCreatedSubscription,
    NegotiationCreatedSubscriptionVariables
  >
) {
  return Apollo.useSubscription<
    NegotiationCreatedSubscription,
    NegotiationCreatedSubscriptionVariables
  >(NegotiationCreatedDocument, baseOptions);
}
export type NegotiationCreatedSubscriptionHookResult = ReturnType<
  typeof useNegotiationCreatedSubscription
>;
export type NegotiationCreatedSubscriptionResult = Apollo.SubscriptionResult<NegotiationCreatedSubscription>;
export const NegotiationClosedDocument = gql`
  subscription NegotiationClosed {
    negotiationClosed {
      _id
      postedBy {
        _id
      }
      harvest
      abv
      priceFrom
      priceTo
      ... on AdWine {
        wineName
        litersFrom
        litersTo
        metodoProduttivo
        wine {
          denominazioneZona
          regione
        }
      }
      typeAd
      address {
        regione
        provincia
        comune
      }
      activeNegotiations
      numberViews
      datePosted
    }
  }
`;

/**
 * __useNegotiationClosedSubscription__
 *
 * To run a query within a React component, call `useNegotiationClosedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNegotiationClosedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNegotiationClosedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNegotiationClosedSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    NegotiationClosedSubscription,
    NegotiationClosedSubscriptionVariables
  >
) {
  return Apollo.useSubscription<
    NegotiationClosedSubscription,
    NegotiationClosedSubscriptionVariables
  >(NegotiationClosedDocument, baseOptions);
}
export type NegotiationClosedSubscriptionHookResult = ReturnType<
  typeof useNegotiationClosedSubscription
>;
export type NegotiationClosedSubscriptionResult = Apollo.SubscriptionResult<NegotiationClosedSubscription>;
export const ReviewCreatedDocument = gql`
  subscription ReviewCreated {
    reviewCreated {
      ...ReviewDetails
    }
  }
  ${ReviewDetailsFragmentDoc}
`;

/**
 * __useReviewCreatedSubscription__
 *
 * To run a query within a React component, call `useReviewCreatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useReviewCreatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewCreatedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useReviewCreatedSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    ReviewCreatedSubscription,
    ReviewCreatedSubscriptionVariables
  >
) {
  return Apollo.useSubscription<
    ReviewCreatedSubscription,
    ReviewCreatedSubscriptionVariables
  >(ReviewCreatedDocument, baseOptions);
}
export type ReviewCreatedSubscriptionHookResult = ReturnType<
  typeof useReviewCreatedSubscription
>;
export type ReviewCreatedSubscriptionResult = Apollo.SubscriptionResult<ReviewCreatedSubscription>;
