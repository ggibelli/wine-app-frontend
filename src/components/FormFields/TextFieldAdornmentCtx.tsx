/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from 'react';
import { FormikContextType, Field, useFormikContext, FieldProps } from 'formik';
import TextFieldMaterial from '@material-ui/core/TextField';
import { Collapse, InputAdornment } from '@material-ui/core';
import { wines } from '../../utils/wineList';

interface Props {
  class?: string;
  inputTextColor?: string;
  labelTextColor?: string;
  underlineColor?: string;
}

export const TextFieldAdornmentCtx: React.FC<Props> = (props) => {
  const formikCtx: FormikContextType<{ wineName: string }> = useFormikContext();
  const wineName = formikCtx.values.wineName;
  const grapesForWine = wines.find((wine) => wine.d === wineName); //.map((wine) => wine.v);
  if (!grapesForWine) return null;
  const grapeStrings = grapesForWine.v
    .map((grapes) => grapes.split(','))
    .flat();
  return (
    <Collapse in={Boolean(grapeStrings)}>
      {grapeStrings.map((grape) => (
        <Field name={grape} key={grape}>
          {(formikProps: FieldProps) => (
            <TextFieldMaterial
              style={{ paddingBottom: 10 }}
              fullWidth
              type='number'
              inputProps={{
                'aria-label': grape,
                min: 0,
                max: 100,
                step: 1,
              }}
              InputLabelProps={{
                style: { color: props.labelTextColor },
              }}
              className={props.class}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>{'%'}</InputAdornment>
                ),
                className: props.inputTextColor,
                classes: {
                  underline: props.underlineColor,
                },
              }}
              error={
                formikProps.meta.error !== undefined && formikProps.meta.touched
              }
              data-testid={grape}
              placeholder='10'
              label={grape}
              helperText={formikProps.meta.error}
            />
          )}
        </Field>
      ))}
    </Collapse>
  );
};
