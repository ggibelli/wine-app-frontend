import * as React from 'react';
// import { useApolloClient } from '@apollo/client';
//  import { navigate } from '@reach/router';

import { navigate, RouteComponentProps } from '@reach/router';
// import { WineFormQuery } from './WineForms/Search/WineFormQuery';
import {
  TypeAd,
  TypeProduct,
  useAdsWineLazyQuery,
  useWineSearchedQuery,
} from '../generated/graphql';

const NoResults = () => (
  <div>Non abbiamo trovato nulla, vuoi creare un annuncio?</div>
);

export const Results: React.FC<RouteComponentProps> = () => {
  const { data, loading, error } = useWineSearchedQuery();
  const [queryDone, setQueryDone] = React.useState<boolean>(false);
  const [lazyAdsWine, result] = useAdsWineLazyQuery({
    onError: (error) => console.log(error),
    onCompleted: () => {
      console.log(result.data?.ads);
      setQueryDone(true);
    },
  });
  React.useEffect(() => {
    if (!error && !loading && data?.searchedWine?.wineName) {
      lazyAdsWine({
        variables: {
          wineName: data?.searchedWine?.wineName,
          typeProduct: data?.searchedWine?.typeProduct as TypeProduct,
          typeAd: data?.searchedWine?.typeAd as TypeAd,
        },
      });
    } else if (error || !data?.searchedWine?.wineName) {
      void navigate('/');
    }
  }, [data]);

  if (queryDone && result?.data?.ads?.length === 0) {
    return <NoResults />;
  }
  if (queryDone && result?.data?.ads?.length !== 0) {
    return <div>trovato qualcosa </div>;
  }
  return <div>loading</div>;
};
