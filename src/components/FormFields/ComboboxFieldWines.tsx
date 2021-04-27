import * as React from 'react';
import { Field, useField } from 'formik';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

interface Wine {
  denominazioneVino: string;
  regione: [string];
}

interface WineCombobox {
  denominazioneVino: string;
  regione: string;
}

const useStyles = makeStyles({
  option: {
    color: '#000',
  },
  groupLabel: {
    color: '#707070',
  },
});

export const Combobox: React.FC<{
  items: Wine[];
  label: string;
  name: string;
  defaultWine?: string;
  labelTextColor?: string;
  underlineColor?: string;

  setFieldValue: (name: string, value: string) => void;
}> = ({
  items,
  label,
  name,
  setFieldValue,
  defaultWine,
  labelTextColor,
  underlineColor,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { error, touched }] = useField({
    name: name,
  });
  const classes = useStyles();

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
      defaultValue={
        defaultWine ? { regione: '', denominazioneVino: defaultWine } : null
      }
      classes={{
        option: classes.option,
        groupLabel: classes.groupLabel,
        inputRoot: underlineColor,
      }}
      getOptionLabel={(option: WineCombobox) => option.denominazioneVino}
      fullWidth
      onChange={(e, option) => {
        setFieldValue(name, option?.denominazioneVino as string);
      }}
      renderInput={(params) => (
        <Field
          required
          component={TextField}
          {...params}
          label={label}
          error={touched && error !== undefined}
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
