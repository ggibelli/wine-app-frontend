import { AdWine, Wine, User, Address, Maybe } from './generated/graphql';

export type AdsWineResult = Pick<
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
    { __typename?: 'Wine' } & Pick<Wine, 'denominazioneZona' | 'regione'>
  >;
  postedBy: { __typename?: 'User' } & Pick<User, '_id'>;
  address: { __typename?: 'Address' } & Pick<
    Address,
    'regione' | 'provincia' | 'comune'
  >;
};
