import * as React from 'react';
import { useField } from 'formik';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Switch,
} from '@chakra-ui/react';

interface Props {
  name: string;
  label: string;
}

export const SliderField: React.FC<Props> = (props) => {
  const [field, { error, touched }] = useField({
    name: props.name,
  });
  return (
    <FormControl
      display='flex'
      alignItems='center'
      isInvalid={error !== undefined && touched}
    >
      <FormLabel htmlFor={props.label}>{props.label}</FormLabel>
      <Switch {...field} />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
