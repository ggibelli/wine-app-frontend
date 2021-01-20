import { Form, Formik } from 'formik';
import * as React from 'react';
import { TextField } from '../FormFields/TextField';
import { PasswordField } from '../FormFields/PasswordField';
import { SelectField } from '../FormFields/SelectField';
import { SelectFieldProvince } from '../FormFields/SelectFieldProvince';
import { optionsRegioni } from './data';
import { Button } from '@chakra-ui/react';
import { validationSchema } from '../../utils/formHelper';
import { SelectFieldComuni } from '../FormFields/SelectFieldComune';
import { SliderField } from '../FormFields/SliderField';

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
      {({ isValid, dirty, isValidating, isSubmitting }) => {
        return (
          <Form>
            <TextField
              name='firstName'
              type='text'
              label='Nome'
              placeholder='Nome'
            />
            <TextField
              name='lastName'
              type='text'
              label='Cognome'
              placeholder='Cognome'
            />
            <TextField
              name='email'
              type='email'
              label='Email'
              placeholder='Email address'
            />
            <TextField
              name='reEmail'
              type='email'
              label='Reinsert Email'
              placeholder='Reinsert Email address'
            />
            <PasswordField name='password' />
            <PasswordField name='rePassword' />
            <TextField
              name='pIva'
              type='text'
              label='Partita Iva'
              placeholder='Partita Iva'
            />
            <TextField
              name='phoneNumber'
              type='text'
              label='Numero di telefono'
              placeholder='Numero di telefono'
            />
            <SelectField
              name='address.regione'
              label='Regione'
              options={optionsRegioni}
            />
            <SelectFieldProvince name='address.provincia' label='Provincia' />
            <SelectFieldComuni name='address.comune' label='Comune' />
            <TextField
              name='address.via'
              type='text'
              label='Via'
              placeholder='Via'
            />
            <TextField
              name='address.CAP'
              type='text'
              label='CAP'
              placeholder='CAP'
            />
            <SliderField name='hideContact' label='Nascondi info personali' />
            <Button
              mt={4}
              colorScheme='teal'
              isLoading={isValidating || isSubmitting}
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
