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
  setFieldValue: (name: string, value: string) => void;
}> = ({ items, label, name, setFieldValue }) => {
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
      onChange={(e, option) => {
        setFieldValue('address.regione', option?.value as string);
      }}
      renderInput={(params) => (
        <Field
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
        />
      )}
    />
  );
};
