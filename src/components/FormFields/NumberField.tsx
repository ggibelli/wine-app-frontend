import * as React from 'react';
import { useField } from 'formik';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';

interface Props {
  name: string;
  placeholder: string;
  label: string;
  precision: number;
  step: number;
  min: number;
  max: number;
}

export const NumberField: React.FC<Props> = (props) => {
  const [field, { error, touched }] = useField({
    name: props.name,
  });
  return (
    <FormControl isInvalid={error !== undefined && touched}>
      <FormLabel htmlFor={props.label}>{props.label}</FormLabel>
      <NumberInput
        defaultValue={0}
        precision={props.precision}
        step={props.step}
        min={props.min}
        max={props.max}
        {...field}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
