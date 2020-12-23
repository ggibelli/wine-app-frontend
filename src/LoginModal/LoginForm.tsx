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

export const LoginForm: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { handleSubmit, errors, register, formState } = useForm();
  const [show, setShow] = React.useState<boolean>(false);
  const handleClick = (): void => setShow(!show);
  function validateName(value: string) {
    if (!value) {
      return 'Name is required';
    } else if (value !== 'Naruto') {
      return "Jeez! You're not a fan 😱";
    } else return true;
  }

  function onSubmit(values: Array<string>) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor='name'>First name</FormLabel>
        <Input
          size='md'
          pr='4.5rem'
          name='name'
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
