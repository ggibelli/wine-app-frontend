/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useForm } from 'react-hook-form';
import * as React from 'react';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useLoginMutation } from '../../generated/graphql';
import { isLoggedInVar } from '../../cache';

export const LoginForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { handleSubmit, errors, register, formState } = useForm();
  const [loginMutation, { data }] = useLoginMutation({
    onError: (error) => console.log(error, data),
    onCompleted: ({ login }) => {
      if (login?.errors?.length === 0) {
        localStorage.setItem(
          'wineapp-user-token',
          login?.response?.token as string
        );
        isLoggedInVar(true);
      }
    },
  });
  const [show, setShow] = React.useState<boolean>(false);
  const handleClick = (): void => setShow(!show);
  function validateName(value: string) {
    if (!value) {
      return 'Name is required';
    } else return true;
  }

  const onSubmit = async (dataForm: { email: string; password: string }) => {
    await loginMutation({
      variables: {
        email: dataForm.email,
        password: dataForm.password,
      },
    });
    onClose();
  };
  //console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor='name'>First name</FormLabel>
        <Input
          size='md'
          pr='4.5rem'
          name='email'
          type='email'
          placeholder='Email address'
          ref={register({ validate: validateName, required: true })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor='password'>Password</FormLabel>
        <InputGroup size='md'>
          <Input
            name='password'
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Enter password'
            ref={register({ required: true })}
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>
      <Button
        mt={4}
        colorScheme='teal'
        isLoading={formState.isSubmitting}
        type='submit'
      >
        Submit
      </Button>
    </form>
  );
};
