import { Grid } from '@material-ui/core';
import * as React from 'react';
import { ComboboxComuni } from '../FormFields/ComboboxComuni';
// import { ComboboxProvince } from '../FormFields/ComboboxProvince';
// import { optionsRegioni } from '../UserForm/data';

export const AddressForm: React.FC<{
  setFieldValue: (
    field: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
}> = ({ setFieldValue }) => {
  // if (values.isSameAddress === true) {
  //   return null;
  // }
  return (
    <Grid item xs={12}>
      <ComboboxComuni
        setFieldValue={setFieldValue}
        name='address.comune'
        label='Comune'
      />
    </Grid>
  );
};
