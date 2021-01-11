/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Form, Formik, Field } from 'formik';
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

export interface LoginData {
  email: string;
  password: string;
}

export const LoginForm: React.FC<{ onSubmit: (values: LoginData) => void }> = ({
  onSubmit,
}) => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const initialValues = { password: '', email: '' };
  const [show, setShow] = React.useState<boolean>(false);
  const handleClick = (): void => setShow(!show);
  const validate = (values: LoginData) => {
    const errors: { [field: string]: string } = {};
    if (!values.email) {
      errors.email = 'Email is required';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validate={validate}
    >
      {({ isValid, dirty, errors, isValidating, isSubmitting }) => {
        return (
          <Form>
            <Field name='email'>
              {({ field }: any) => (
                <FormControl isInvalid={errors.email !== undefined}>
                  <FormLabel htmlFor='email'>Email</FormLabel>
                  <Input
                    {...field}
                    data-testid='email'
                    aria-label='email'
                    size='md'
                    pr='4.5rem'
                    type='email'
                    placeholder='Email address'
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='password'>
              {({ field }: any) => (
                <FormControl isInvalid={errors.password !== undefined}>
                  <FormLabel htmlFor='password'>Password</FormLabel>
                  <InputGroup size='md'>
                    <Input
                      {...field}
                      data-testid='password'
                      aria-label='password'
                      pr='4.5rem'
                      type={show ? 'text' : 'password'}
                      placeholder='Enter password'
                    />
                    <InputRightElement width='4.5rem'>
                      <Button
                        h='1.75rem'
                        size='sm'
                        onClick={handleClick}
                        data-testid='submit'
                      >
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Button
              mt={4}
              colorScheme='teal'
              isLoading={isValidating || isSubmitting}
              type='submit'
              disabled={!dirty || !isValid}
            >
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
