import * as React from 'react';
import { useApolloClient } from '@apollo/client';

import { RouteComponentProps } from '@reach/router';
import { WineFormQuery } from '../components/WineForms/Search/WineFormQuery';
import { TypeAd, TypeProduct } from '../generated/graphql';
import { searchedWine } from '../cache';
import { navigate } from '@reach/router';
// import _ from 'lodash';

export const Buy: React.FC<RouteComponentProps> = () => {
  console.log('sono qua');
  const client = useApolloClient();
  const onSubmit = async (values: WineFormQuery) => {
    console.log(values);
    client.cache.evict({ fieldName: 'searchedWine' });
    client.cache.gc();
    searchedWine({
      wineName: values.wineName,
      typeAd: TypeAd.Buy,
      typeProduct: TypeProduct.AdWine,
      liters: values.liters as number,
      harvest: values.harvest as number,
      abv: values.abv as number,
      price: values.price as number,
    });
    await navigate('/results');
  };

  return <WineFormQuery onSubmit={onSubmit} />;
};
