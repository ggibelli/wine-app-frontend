import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { WineFormQuery } from '../components/WineForms/Search/WineFormQuery';
// import { useCreateUserMutation, UserInput } from '../generated/graphql';
// import {  notification } from '../cache';
// import { navigate } from '@reach/router';
// import _ from 'lodash';

export const Buy: React.FC<RouteComponentProps> = () => {
  console.log('sono qua');
  // // const [createUserMutation] = useCreateUserMutation({
  //   onError: (error) =>
  //     notification({
  //       type: 'error',
  //       message: error.message,
  //     }),
  //   onCompleted: ({ createUser }) => {
  //     if (createUser?.errors?.length === 0) {
  //       localStorage.setItem(
  //         'wineapp-user-token',
  //         createUser?.response?.token as string
  //       );
  //       isLoggedInVar(true);
  //       notification({
  //         type: 'success',
  //         message: 'welcome',
  //       });
  //       void navigate('/');
  //     }
  //     if (createUser?.errors?.length) {
  //       notification({
  //         type: 'error',
  //         message: 'errore',
  //       });
  //     }
  //   },
  // });
  const onSubmit = (values: any) => {
    console.log(values);
    // const userInputValues = _.cloneDeep(values);
    // delete userInputValues.reEmail;
    // delete userInputValues.rePassword;
    // await createUserMutation({
    //   variables: {
    //     userInput: userInputValues as UserInput,
    //   },
    // });
  };
  return <WineFormQuery onSubmit={onSubmit} />;
};
