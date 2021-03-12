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
  class?: string;
  inputTextColor?: string;
  labelTextColor?: string;
  underlineColor?: string;
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
      InputLabelProps={{
        style: { color: props.labelTextColor },
      }}
      multiline={props.multiline}
      type={props.type}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      className={props.class}
      InputProps={{
        className: props.inputTextColor,
        classes: {
          underline: props.underlineColor,
        },
      }}
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
