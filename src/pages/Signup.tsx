import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { UserForm, UserInputForm } from '../components/UserForm';
import { useCreateUserMutation, UserInput } from '../generated/graphql';
import { isLoggedInVar, notification } from '../cache';
import { navigate } from '@reach/router';
import _ from 'lodash';

export const SignUp: React.FC<RouteComponentProps> = () => {
  const [createUserMutation] = useCreateUserMutation({
    onError: (error) =>
      notification({
        type: 'error',
        message: error.message,
      }),
    onCompleted: ({ createUser }) => {
      if (createUser?.errors?.length === 0) {
        localStorage.setItem(
          'wineapp-user-token',
          createUser?.response?.token as string
        );
        isLoggedInVar(true);
        notification({
          type: 'success',
          message: 'welcome',
        });
        void navigate('/');
      }
      if (createUser?.errors?.length) {
        const errorMessages = createUser.errors.map((error) => error?.text);
        notification({
          type: 'error',
          message: errorMessages.toString(),
        });
      }
    },
  });
  const onSubmit = async (values: UserInputForm) => {
    const userInputValues = _.cloneDeep(values);
    delete userInputValues.reEmail;
    delete userInputValues.rePassword;
    userInputValues.address.CAP = userInputValues.address.CAP.toString();
    await createUserMutation({
      variables: {
        userInput: userInputValues as UserInput,
      },
    });
  };
  return <UserForm onSubmit={onSubmit} />;
};
