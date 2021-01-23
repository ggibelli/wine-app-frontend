import * as React from 'react';
import { useField, useFormikContext } from 'formik';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Select,
} from '@chakra-ui/react';
import { provinceConRegione } from '../../utils/formHelper';
import { UserInputForm } from '../UserForm';

interface Props {
  name: string;
  label: string;
}

export const SelectFieldProvince: React.FC<Props> = ({ name, label }) => {
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
        disabled={Boolean(!values.address.regione)}
      >
        {provinceConRegione
          .filter((provincia) => provincia.regione === values.address.regione)
          .map((option) => (
            <option
              data-testid='test-option-province'
              key={option.provincia}
              value={option.provincia}
            >
              {option.provincia}
            </option>
          ))}
      </Select>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
