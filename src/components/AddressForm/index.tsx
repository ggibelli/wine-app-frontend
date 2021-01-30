import { Grid } from '@material-ui/core';
import { useFormikContext } from 'formik';
import * as React from 'react';
import { ComboboxComuni } from '../FormFields/ComboboxComuni';
import { ComboboxField } from '../FormFields/ComboboxField';
import { ComboboxProvince } from '../FormFields/ComboboxProvince';
import { TextField } from '../FormFields/TextField';
import { optionsRegioni } from '../UserForm/data';
import { WineFormMutation } from '../WineForms/Post/WineFormMutation';

export const AddressForm: React.FC<{
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
}> = ({ setFieldValue }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { values }: { values: WineFormMutation } = useFormikContext();
  if (values.isSameAddress === true) {
    return null;
  }
  return (
    <>
      <Grid item xs={12}>
        <ComboboxField
          setFieldValue={setFieldValue}
          name='address.regione'
          label='Regione'
          items={optionsRegioni}
        />
      </Grid>
      <Grid item xs={12}>
        <ComboboxProvince
          setFieldValue={setFieldValue}
          name='address.provincia'
          label='Provincia'
        />
      </Grid>
      <Grid item xs={12}>
        <ComboboxComuni
          setFieldValue={setFieldValue}
          name='address.comune'
          label='Comune'
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name='address.via'
          type='text'
          label='Via'
          placeholder='Via'
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name='address.CAP'
          type='number'
          max='99999'
          label='CAP'
          placeholder='CAP'
        />
      </Grid>
    </>
  );
};
