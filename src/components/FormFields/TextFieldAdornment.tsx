/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from 'react';
import { useField } from 'formik';
import TextFieldMaterial from '@material-ui/core/TextField';
import { IconButton, InputAdornment } from '@material-ui/core';
import Percent from 'mdi-material-ui/PercentOutline';
import EuroIcon from '@material-ui/icons/Euro';

interface Props {
  name: string;
  placeholder: string;
  label: string;
  type: string;
  adornment?: string;
  min?: string;
  max?: string;
  step?: string;
  class?: string;
  inputTextColor?: string;
  labelTextColor?: string;
  underlineColor?: string;
}
export const TextFieldAdornment: React.FC<Props> = (props) => {
  const [field, { error, touched }] = useField({
    name: props.name,
    type: props.type,
  });
  return (
    <TextFieldMaterial
      style={{ paddingBottom: 10 }}
      required
      {...field}
      fullWidth
      type={props.type}
      inputProps={{
        'aria-label': props.name,
        min: props.min,
        max: props.max,
        step: props.step,
      }}
      InputLabelProps={{
        style: { color: props.labelTextColor },
      }}
      className={props.class}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            {props.adornment === '€' ? (
              <IconButton>
                <EuroIcon
                  fontSize='small'
                  color={props.labelTextColor === '#fff' ? 'action' : 'primary'}
                />
              </IconButton>
            ) : (
              <IconButton>
                <Percent
                  fontSize='small'
                  color={props.labelTextColor === '#fff' ? 'action' : 'primary'}
                />
              </IconButton>
            )}
          </InputAdornment>
        ),
        className: props.inputTextColor,
        classes: {
          underline: props.underlineColor,
        },
      }}
      error={error !== undefined && touched}
      data-testid={props.name}
      placeholder={props.placeholder}
      label={props.label}
      helperText={error}
    />
  );
};
