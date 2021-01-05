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
  Date: Date;
};

export type Address = {
  __typename?: 'Address';
  via: Scalars['String'];
  CAP: Scalars['Int'];
  comune: Scalars['String'];
  provincia: Province;
  regione: Regioni;
};

export type AddressInput = {
  via: Scalars['String'];
  CAP: Scalars['Int'];
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
  review?: Maybe<Review>;
  reviews?: Maybe<Array<Review>>;
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
  Ag = 'AG',
  Al = 'AL',
  An = 'AN',
  Ao = 'AO',
  Ar = 'AR',
  Ap = 'AP',
  At = 'AT',
  Av = 'AV',
  Ba = 'BA',
  Bl = 'BL',
  Bn = 'BN',
  Bg = 'BG',
  Bi = 'BI',
  Bo = 'BO',
  Bz = 'BZ',
  Bs = 'BS',
  Br = 'BR',
  Ca = 'CA',
  Cl = 'CL',
  Cb = 'CB',
  Ce = 'CE',
  Ct = 'CT',
  Cz = 'CZ',
  Ch = 'CH',
  Co = 'CO',
  Cs = 'CS',
  Cr = 'CR',
  Kr = 'KR',
  Cn = 'CN',
  En = 'EN',
  Fm = 'FM',
  Fe = 'FE',
  Fi = 'FI',
  Fg = 'FG',
  Fo = 'FO',
  Fc = 'FC',
  Fr = 'FR',
  Ge = 'GE',
  Go = 'GO',
  Gr = 'GR',
  Im = 'IM',
  Is = 'IS',
  Sp = 'SP',
  Aq = 'AQ',
  Lt = 'LT',
  Le = 'LE',
  Lc = 'LC',
  Li = 'LI',
  Lo = 'LO',
  Lu = 'LU',
  Mc = 'MC',
  Mn = 'MN',
  Ms = 'MS',
  Mt = 'MT',
  Me = 'ME',
  Mi = 'MI',
  Mo = 'MO',
  Mb = 'MB',
  Na = 'NA',
  No = 'NO',
  Nu = 'NU',
  Or = 'OR',
  Pd = 'PD',
  Pa = 'PA',
  Pr = 'PR',
  Pv = 'PV',
  Pg = 'PG',
  Ps = 'PS',
  Pu = 'PU',
  Pe = 'PE',
  Pc = 'PC',
  Pi = 'PI',
  Pt = 'PT',
  Pn = 'PN',
  Pz = 'PZ',
  Po = 'PO',
  Rg = 'RG',
  Ra = 'RA',
  Rc = 'RC',
  Re = 'RE',
  Ri = 'RI',
  Rn = 'RN',
  Rm = 'RM',
  Ro = 'RO',
  Sa = 'SA',
  Ss = 'SS',
  Sv = 'SV',
  Si = 'SI',
  Sr = 'SR',
  So = 'SO',
  Ta = 'TA',
  Te = 'TE',
  Tr = 'TR',
  To = 'TO',
  Tp = 'TP',
  Tn = 'TN',
  Tv = 'TV',
  Ts = 'TS',
  Ud = 'UD',
  Va = 'VA',
  Ve = 'VE',
  Vb = 'VB',
  Vc = 'VC',
  Vr = 'VR',
  Vv = 'VV',
  Vi = 'VI',
  Vt = 'VT',
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
  Bolzano = 'BOLZANO',
  Trento = 'TRENTO',
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

export type IsUserLoggedInQueryVariables = Exact<{ [key: string]: never }>;

export type IsUserLoggedInQuery = { __typename?: 'Query' } & Pick<
  Query,
  'isLoggedIn'
>;

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
