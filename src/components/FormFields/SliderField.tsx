import * as React from 'react';
import { useField } from 'formik';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

interface Props {
  name: string;
  label: string;
  labelColor?: string;
}

export const SliderField: React.FC<Props> = (props) => {
  const [field, { error, touched }] = useField({
    name: props.name,
  });
  return (
    <FormControl error={touched && error !== undefined}>
      <FormControlLabel
        control={<Switch data-testid={props.name} {...field} />}
        label={props.label}
        style={{ color: props.labelColor }}
      />
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};
