import * as React from 'react';
import { useField } from 'formik';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
} from '@chakra-ui/react';

interface Props {
  name: string;
  type: string;
  placeholder: string;
  label: string;
}

export const TextField: React.FC<Props> = (props) => {
  const [field, { error, touched }] = useField({
    name: props.name,
    type: props.name,
  });
  return (
    <FormControl isInvalid={error !== undefined && touched}>
      <FormLabel htmlFor={props.label}>{props.label}</FormLabel>
      <Input
        {...field}
        {...props}
        data-testid={props.name}
        aria-label={props.name}
        size='md'
        pr='4.5rem'
        type={props.type}
        placeholder={props.placeholder}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
