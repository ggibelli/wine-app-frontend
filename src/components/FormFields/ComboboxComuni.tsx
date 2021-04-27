import * as React from 'react';
import { Field, useField, useFormikContext } from 'formik';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { comuniConProvincia } from '../../utils/formHelper';
import { UserInputForm } from '../UserForm';

interface Option {
  value: string;
  label: string;
}

export const ComboboxComuni: React.FC<{
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
  const items = comuniConProvincia
    .filter((comune) => comune.provincia === values.address.provincia)
    .map((comune) => ({
      value: comune.comune,
      label: comune.comune,
    }));

  return (
    <Autocomplete
      key={`${values.address.provincia}${values.address.regione}`}
      getOptionSelected={(option, value) => option.value === value.value}
      disabled={items.length === 0}
      options={items}
      fullWidth
      classes={{
        inputRoot: underlineColor,
      }}
      data-testid='combobox-comuni'
      getOptionLabel={(item: Option) => item.value}
      onChange={(e, option) => {
        setFieldValue(name, option?.value as string);
      }}
      renderInput={(params) => (
        <Field
          required
          component={TextField}
          {...params}
          label={label}
          // variant='outlined'
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
