import * as React from 'react';
import { useField } from 'formik';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

export const PasswordField: React.FC<{ name: string }> = ({ name }) => {
  const [show, setShow] = React.useState<boolean>(false);
  const handleClick = (): void => setShow(!show);
  const [field, { error, touched }] = useField({
    name: name,
    type: show ? 'text' : 'password',
  });
  return (
    <FormControl isInvalid={error !== undefined && touched}>
      <FormLabel htmlFor='password'>Password</FormLabel>
      <InputGroup size='md'>
        <Input
          {...field}
          name={name}
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
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
