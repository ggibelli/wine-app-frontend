import * as React from 'react';
import { Field, useField } from 'formik';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

interface Option {
  value: string;
  label: string;
  firstLetter?: string;
}

export const ComboboxField: React.FC<{
  items: Array<Option>;
  label: string;
  name: string;
  labelTextColor?: string;
  underlineColor?: string;
  setFieldValue: (name: string, value: string) => void;
}> = ({
  items,
  label,
  name,
  setFieldValue,
  labelTextColor,
  underlineColor,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { error, touched }] = useField({
    name: name,
  });

  return (
    <Autocomplete
      data-testid={name}
      options={items}
      getOptionLabel={(item: Option) => item.label}
      fullWidth
      classes={{
        inputRoot: underlineColor,
      }}
      onChange={(e, option) => {
        setFieldValue('address.regione', option?.value as string);
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
