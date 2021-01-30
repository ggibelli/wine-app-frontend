import * as React from 'react';
import { useField } from 'formik';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

interface Props {
  name: string;
  label: string;
  options: Array<string>;
}

export const SelectField: React.FC<Props> = (props) => {
  const [field, { error, touched }] = useField({
    name: props.name,
  });
  return (
    <FormControl fullWidth error={error !== undefined && touched}>
      <InputLabel id='select-label'>{props.label}</InputLabel>
      <Select labelId='select-label' id='simple-select' {...field}>
        {props.options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};
