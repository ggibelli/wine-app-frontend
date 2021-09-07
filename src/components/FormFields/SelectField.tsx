import * as React from 'react';
import { useField } from 'formik';
import InputLabel from '@material-ui/core/InputLabel';
//import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

interface Props {
  name: string;
  label: string;
  labelColor: string;
  textColor: string;
  underlineColor: string;
  options: Array<string>;
}

export const SelectField: React.FC<Props> = (props) => {
  const [field, { error, touched }] = useField({
    name: props.name,
  });
  return (
    <FormControl fullWidth error={error !== undefined && touched}>
      <InputLabel
        style={{ color: props.labelColor }}
        htmlFor={`select-label-${props.name}`}
      >
        {props.label}
      </InputLabel>
      <Select
        style={{ paddingBottom: 10 }}
        native
        className={props.underlineColor}
        classes={{
          root: props.underlineColor,
          icon: props.textColor,
        }}
        inputProps={{ id: `select-label-${props.name}`, name: field.name }}
        {...field}
      >
        {props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};
