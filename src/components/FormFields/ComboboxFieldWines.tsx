import * as React from 'react';
import { Field, useField } from 'formik';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

interface Wine {
  denominazioneVino: string;
  regione: [string];
}

interface WineCombobox {
  denominazioneVino: string;
  regione: string;
}

export const Combobox: React.FC<{
  items: Wine[];
  label: string;
  name: string;
  setFieldValue: (name: string, value: string) => void;
}> = ({ items, label, name, setFieldValue }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { error, touched }] = useField({
    name: name,
  });
  const options = items.map((option) => {
    const regione = option.regione[0];
    const { denominazioneVino } = option;
    return {
      regione,
      denominazioneVino,
    };
  });

  return (
    <Autocomplete
      data-testid='combobox-wines'
      options={options.sort((a, b) => -b.regione.localeCompare(a.regione))}
      groupBy={(option: WineCombobox) => option.regione}
      getOptionSelected={(option, value) =>
        option.denominazioneVino === value.denominazioneVino
      }
      getOptionLabel={(option: WineCombobox) => option.denominazioneVino}
      fullWidth
      onChange={(e, option) => {
        setFieldValue(name, option?.denominazioneVino as string);
      }}
      renderInput={(params) => (
        <Field
          component={TextField}
          {...params}
          label={label}
          variant='outlined'
          error={touched && error !== undefined}
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
