import * as React from 'react';
import { useField } from 'formik';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Select,
} from '@chakra-ui/react';

interface Props {
  name: string;
  label: string;
  options: Array<{ value: string; label: string }>;
}

export const SelectField: React.FC<Props> = ({ name, label, options }) => {
  const [field, { error, touched }] = useField({
    name: name,
  });

  return (
    <FormControl isInvalid={error !== undefined && touched}>
      <FormLabel htmlFor={label}>{label}</FormLabel>
      <Select
        {...field}
        data-testid={name}
        aria-label={name}
        size='md'
        pr='4.5rem'
        placeholder={label}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
