import * as React from 'react';
import { useField } from 'formik';
import TextFieldMaterial from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';

interface Props {
  name: string;
  placeholder: string;
  label: string;
  type: string;
  adornment: string;
  min?: string;
  max?: string;
  step?: string;
}
export const TextFieldAdornment: React.FC<Props> = (props) => {
  const [field, { error, touched }] = useField({
    name: props.name,
    type: props.type,
  });
  return (
    <TextFieldMaterial
      {...field}
      fullWidth
      type={props.type}
      inputProps={{
        'aria-label': props.name,
        min: props.min,
        max: props.max,
        step: props.step,
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>{props.adornment}</InputAdornment>
        ),
      }}
      error={error !== undefined && touched}
      data-testid={props.name}
      placeholder={props.placeholder}
      label={props.label}
      helperText={error}
    />
  );
};
