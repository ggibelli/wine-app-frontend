import { AdWine, Wine, User, Maybe } from './generated/graphql';

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
  | 'savedTimes'
  | 'datePosted'
  | 'isActive'
> & {
  wine?: Maybe<{ __typename?: 'Wine' } & Pick<Wine, 'denominazioneZona'>>;
  postedBy: { __typename?: 'User' } & Pick<User, '_id'>;
};
