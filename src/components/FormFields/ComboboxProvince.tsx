import * as React from 'react';
import { Field, useField, useFormikContext } from 'formik';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { provinceConRegione } from '../../utils/formHelper';
import { UserInputForm } from '../UserForm';

interface Option {
  value: string;
  label: string;
}

export const ComboboxProvince: React.FC<{
  label: string;
  name: string;
  labelTextColor?: string;
  underlineColor?: string;
  setFieldValue: (name: string, value: string) => void;
}> = ({ label, name, setFieldValue, labelTextColor, underlineColor }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { error, touched }] = useField({
    name: name,
  });
  const { values }: { values: UserInputForm } = useFormikContext();
  const items = provinceConRegione
    .filter((provincia) => provincia.regione === values.address.regione)
    .map((provincia) => ({
      value: provincia.provincia,
      label: provincia.provincia,
    }));

  return (
    <Autocomplete
      data-testid='combobox-province'
      key={values.address.regione}
      getOptionSelected={(option, value) => option.value === value.value}
      disabled={items.length === 0}
      options={items}
      classes={{
        inputRoot: underlineColor,
      }}
      getOptionLabel={(item: Option) => item.value}
      fullWidth
      onChange={(e, option) => {
        setFieldValue(name, option?.value as string);
      }}
      renderInput={(params) => (
        <Field
          component={TextField}
          {...params}
          label={label}
          error={error !== undefined}
          helperText={error}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password',
          }}
          InputLabelProps={{
            style: { color: labelTextColor },
          }}
        />
      )}
    />
  );
};
