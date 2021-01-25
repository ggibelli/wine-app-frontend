import { Form, Formik } from 'formik';
import * as React from 'react';
import { TextField } from '../FormFields/TextField';
import { PasswordField } from '../FormFields/PasswordField';
// import { SelectField } from '../FormFields/SelectField';
// import { SelectFieldProvince } from '../FormFields/SelectFieldProvince';
import { optionsRegioni } from './data';
import { validationSchema } from '../../utils/formHelper';
// import { SelectFieldComuni } from '../FormFields/SelectFieldComune';
import { SliderField } from '../FormFields/SliderField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { ComboboxField } from '../FormFields/ComboboxField';
import { ComboboxProvince } from '../FormFields/ComboboxProvince';
import { ComboboxComuni } from '../FormFields/ComboboxComuni';

interface AddressInputForm {
  via: string;
  comune: string;
  provincia: string;
  regione: string;
  CAP: string;
}

const initialAddress: AddressInputForm = {
  via: '',
  comune: '',
  provincia: '',
  regione: '',
  CAP: '12345',
};

export interface UserInputForm {
  email: string;
  reEmail?: string;
  password: string;
  rePassword?: string;
  firstName: string;
  lastName: string;
  address: AddressInputForm;
  pIva: string;
  phoneNumber: string;
  hideContact: boolean;
}

const initialValues: UserInputForm = {
  email: '',
  reEmail: '',
  password: '',
  rePassword: '',
  firstName: '',
  lastName: '',
  address: initialAddress,
  pIva: '',
  phoneNumber: '',
  hideContact: false,
};

export const UserForm: React.FC<{
  onSubmit: (values: UserInputForm) => void;
}> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isValid, dirty, setFieldValue }) => {
        return (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name='firstName'
                  type='text'
                  label='Nome'
                  placeholder='Nome'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name='lastName'
                  type='text'
                  label='Cognome'
                  placeholder='Cognome'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name='email'
                  type='email'
                  label='Email'
                  placeholder='Email address'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name='reEmail'
                  type='email'
                  label='Reinsert Email'
                  placeholder='Reinsert Email address'
                />
              </Grid>
              <Grid item xs={12}>
                <PasswordField name='password' />
              </Grid>
              <Grid item xs={12}>
                <PasswordField name='rePassword' />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name='pIva'
                  type='text'
                  label='Partita Iva'
                  placeholder='Partita Iva'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name='phoneNumber'
                  type='text'
                  label='Numero di telefono'
                  placeholder='Numero di telefono'
                />
              </Grid>
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
                  label='CAP'
                  placeholder='CAP'
                />
              </Grid>
              <Grid item xs={12}>
                <SliderField
                  name='hideContact'
                  label='Nascondi info personali'
                />
              </Grid>

              {/* 
            <SelectFieldProvince name='address.provincia' label='Provincia' />
            <SelectFieldComuni name='address.comune' label='Comune' /> */}
            </Grid>
            <Button
              //isLoading={isValidating || isSubmitting}
              type='submit'
              disabled={!dirty || !isValid}
            >
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
