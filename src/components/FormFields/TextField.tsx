import * as React from 'react';
import { useField } from 'formik';
import TextFieldMaterial from '@material-ui/core/TextField';

interface Props {
  name: string;
  placeholder: string;
  label: string;
  type: string;
  min?: string;
  max?: string;
  step?: string;
  multiline?: boolean;
}
export const TextField: React.FC<Props> = (props) => {
  const [field, { error, touched }] = useField({
    name: props.name,
    type: props.type,
  });
  return (
    <TextFieldMaterial
      {...field}
      fullWidth
      multiline={props.multiline}
      type={props.type}
      inputProps={{
        'aria-label': props.name,
        min: props.min,
        max: props.max,
        step: props.step,
      }}
      error={error !== undefined && touched}
      data-testid={props.name}
      placeholder={props.placeholder}
      label={props.label}
      helperText={error}
    />
  );
};
