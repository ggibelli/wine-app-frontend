import * as React from 'react';
import { useApolloClient } from '@apollo/client';
import { RouteComponentProps } from '@reach/router';
import { WineFormQuery } from '../components/WineForms/Search/WineFormQuery';
import {
  AdInput,
  TypeAd,
  TypeProduct,
  useMeQuery,
  useCreateAdWineMutation,
  useWineSearchedQuery,
  AddressInput,
} from '../generated/graphql';
import { searchedWine, notification } from '../cache';
import { navigate } from '@reach/router';
import { WineFormMutation } from '../components/WineForms/Post/WineFormMutation';

export const Buy: React.FC<RouteComponentProps> = () => {
  let sameAddress: AddressInput;
  let differentAddress: AddressInput;
  const { data, error } = useWineSearchedQuery();
  const meResult = useMeQuery({
    onError: (error) => {
      console.log(error);
      notification({
        type: 'error',
        message: `${error.message}`,
      });
    },
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [createAdWineMutation] = useCreateAdWineMutation({
    onError: (error) =>
      notification({
        type: 'error',
        message: `${error.message}`,
      }),
    onCompleted: ({ createAd }) => {
      if (createAd?.errors?.length === 0) {
        notification({
          type: 'success',
          message: 'ad created',
        });
        void navigate('/');
      }
      if (createAd?.errors?.length) {
        const errorMessages = createAd.errors.map((error) => error?.text);
        notification({
          type: 'error',
          message: `${errorMessages.toString()}`,
        });
      }
    },
  });
  const client = useApolloClient();
  const onSubmitQuery = (values: WineFormQuery) => {
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
      isPost: false,
    });
    void navigate('/results');
  };
  // React.useEffect(() => {
  //   if (mutationReady) {
  //     console.log(adInput);
  // void createAdWineMutation({
  //   variables: {
  //     input: adInput,
  //   },
  // });
  // void navigate('/');
  //   }
  // }, [mutationReady]);
  const onSubmitMutation = (values: WineFormMutation) => {
    if (values.isSameAddress && meResult.data?.me?.address) {
      sameAddress = {
        regione: meResult.data.me.address.regione,
        provincia: meResult.data.me.address.provincia,
        comune: meResult.data.me.address.comune,
        via: meResult.data.me.address.via,
        CAP: meResult.data.me.address.CAP,
      };
    } else {
      differentAddress = values.address as AddressInput;
    }
    //let sameAddress: Address
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const adInput: AdInput = {
      wineName: values.wineName,
      typeAd: data?.searchedWine?.typeAd as TypeAd,
      typeProduct: data?.searchedWine?.typeProduct as TypeProduct,
      content: values.content,
      harvest: values.harvest as number,
      abv: values.abv as number,
      priceFrom: values.price as number,
      priceTo: values.price as number,
      litersFrom: values.liters as number,
      litersTo: values.liters as number,
      needsFollowUp: values.needsFollowUp,
      address: values.isSameAddress ? sameAddress : differentAddress,
    };
    console.log(adInput);
    void createAdWineMutation({
      variables: {
        input: adInput,
      },
    });
    client.cache.evict({ fieldName: 'searchedWine' });
    client.cache.gc();
    void navigate('/');

    //console.log(adInput);
  };

  if (error || !data?.searchedWine?.isPost) {
    return <WineFormQuery onSubmit={onSubmitQuery} />;
  } else {
    return <WineFormMutation onSubmit={onSubmitMutation} />;
  }
};
