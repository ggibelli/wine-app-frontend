import * as React from 'react';
import { useField, useFormikContext } from 'formik';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Select,
} from '@chakra-ui/react';
import { comuniConProvincia } from '../../utils/formHelper';
import { UserInputForm } from '../UserForm';

interface Props {
  name: string;
  label: string;
}

export const SelectFieldComuni: React.FC<Props> = ({ name, label }) => {
  const [field, { error, touched }] = useField({
    name: name,
  });
  const { values }: { values: UserInputForm } = useFormikContext();
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
        disabled={Boolean(!values.address.provincia)}
      >
        {comuniConProvincia
          .filter((comune) => comune.provincia === values.address.provincia)
          .map((option) => (
            <option key={option.comune} value={option.comune}>
              {option.comune}
            </option>
          ))}
      </Select>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
