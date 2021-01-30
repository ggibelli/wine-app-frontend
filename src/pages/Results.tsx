import * as React from 'react';
// import { useApolloClient } from '@apollo/client';
//  import { navigate } from '@reach/router';

import { navigate, RouteComponentProps } from '@reach/router';
// import { WineFormQuery } from './WineForms/Search/WineFormQuery';
import { useAdsWineLazyQuery } from '../generated/graphql';
import { searchedWine } from '../cache';

export const Results: React.FC<RouteComponentProps> = () => {
  //const { data, loading, error } = useWineSearchedQuery();
  const searchedWineCache = searchedWine();
  const [queryDone, setQueryDone] = React.useState<boolean>(false);
  const [lazyAdsWine, result] = useAdsWineLazyQuery({
    onError: (error) => console.log(error),
    onCompleted: () => {
      console.log(result.data?.ads);
      setQueryDone(true);
    },
  });
  React.useEffect(() => {
    if (searchedWineCache) {
      lazyAdsWine({
        variables: {
          wineName: searchedWineCache?.wineName,
          typeProduct: searchedWineCache?.typeProduct,
          typeAd: searchedWineCache?.typeAd,
        },
      });
    } else {
      void navigate('/');
    }
  }, []);
  const onClick = async () => {
    if (searchedWineCache === undefined) {
      return;
    } else {
      searchedWine({
        ...searchedWineCache,
        isPost: true,
      });
      await navigate('/buy');
    }
  };

  const NoResults = () => (
    <div onClick={onClick}>
      Non abbiamo trovato nulla, vuoi creare un annuncio?
    </div>
  );
  if (queryDone && result?.data?.ads?.length === 0) {
    return <NoResults />;
  }
  if (queryDone && result?.data?.ads?.length !== 0) {
    return <div>trovato qualcosa </div>;
  }
  return <div>loading</div>;
};
