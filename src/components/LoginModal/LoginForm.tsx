/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Form, Formik } from 'formik';
import * as React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { TextField } from '../FormFields/TextField';
import { PasswordField } from '../FormFields/PasswordField';
import * as Yup from 'yup';

export interface LoginData {
  email: string;
  password: string;
}

export const LoginForm: React.FC<{ onSubmit: (values: LoginData) => void }> = ({
  onSubmit,
}) => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const initialValues = { password: '', email: '' };
  // const validate = (values: LoginData) => {
  //   const errors: { [field: string]: string } = {};
  //   if (!values.email) {
  //     errors.email = 'Email is required';
  //   }
  //   if (!values.password) {
  //     errors.password = 'Password is required';
  //   }
  //   return errors;
  // };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
      })}
      //validate={validate}
    >
      {({ isValid, dirty }) => {
        return (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name='email'
                  type='email'
                  label='Email'
                  placeholder='Email address'
                />
              </Grid>
              <Grid item xs={12}>
                <PasswordField name='password' />
              </Grid>
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
