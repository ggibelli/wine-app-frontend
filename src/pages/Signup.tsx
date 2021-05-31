import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { UserForm, UserInputForm } from '../components/UserForm';
import { useCreateUserMutation, UserInput } from '../generated/graphql';
import { isLoggedInVar, notification } from '../cache';
import { navigate } from '@reach/router';
import { cloneDeep } from 'lodash';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const SignUp: React.FC<RouteComponentProps> = () => {
  const [createUserMutation] = useCreateUserMutation({
    onError: (error) =>
      notification({
        type: 'error',
        message: error.message,
      }),
    onCompleted: ({ createUser }) => {
      if (createUser?.errors?.length) {
        const errorMessages = createUser.errors.map((error) => error?.text);
        notification({
          type: 'error',
          message: errorMessages.toString(),
        });
      } else {
        localStorage.setItem(
          'wineapp-user-token',
          createUser?.response?.token as string
        );
        localStorage.setItem(
          'wineapp-user-id',
          createUser?.response?.user._id as string
        );
        isLoggedInVar(true);
        notification({
          type: 'success',
          message: 'welcome',
        });
        void navigate('/');
      }
    },
  });
  const onSubmit = async (values: UserInputForm) => {
    const userInputValues = cloneDeep(values);
    delete userInputValues.reEmail;
    delete userInputValues.rePassword;
    await createUserMutation({
      variables: {
        userInput: userInputValues as UserInput,
      },
    });
  };
  return (
    <Container component='main' maxWidth='xs'>
      <UserForm onSubmit={onSubmit} />;
      <CssBaseline />
    </Container>
  );
};

export default SignUp;
