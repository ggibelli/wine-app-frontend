import { Form, Formik } from 'formik';
import * as React from 'react';
import { TextField } from '../FormFields/TextField';
import { PasswordField } from '../FormFields/PasswordField';
import { optionsRegioni } from './data';
import { validationSchema } from '../../utils/formHelper';
import { SliderField } from '../FormFields/SliderField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import LinkMUI from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { ComboboxField } from '../FormFields/ComboboxField';
import { ComboboxProvince } from '../FormFields/ComboboxProvince';
import { ComboboxComuni } from '../FormFields/ComboboxComuni';
// import { AddressForm } from '../AddressForm';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    color: '#6d1331',
  },
  underline: {
    color: '#6d1331',
    '&:before': {
      borderBottom: '1px solid #6d1331',
    },
    '&&&&:hover:before': {
      borderBottom: '2px solid #6d1331',
    },
    '&:after': {
      borderBottom: '3px solid #6d1331',
    },
    disabled: {},
    focused: {},
    error: {},
  },
}));

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
  const classes = useStyles();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isValid, dirty, setFieldValue }) => {
        return (
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign up
            </Typography>
            <Form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name='firstName'
                    type='text'
                    label='Nome'
                    placeholder='Nome'
                    underlineColor={classes.underline}
                    labelTextColor={'#6d1331'}
                    inputTextColor={classes.input}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name='lastName'
                    type='text'
                    label='Cognome'
                    placeholder='Cognome'
                    underlineColor={classes.underline}
                    labelTextColor={'#6d1331'}
                    inputTextColor={classes.input}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name='email'
                    type='email'
                    label='Email'
                    placeholder='Email address'
                    underlineColor={classes.underline}
                    labelTextColor={'#6d1331'}
                    inputTextColor={classes.input}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name='reEmail'
                    type='email'
                    label='Reinsert Email'
                    placeholder='Reinsert Email address'
                    underlineColor={classes.underline}
                    labelTextColor={'#6d1331'}
                    inputTextColor={classes.input}
                  />
                </Grid>
                <Grid item xs={12}>
                  <PasswordField
                    name='password'
                    underlineColor={classes.underline}
                  />
                </Grid>
                <Grid item xs={12}>
                  <PasswordField
                    name='rePassword'
                    underlineColor={classes.underline}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name='pIva'
                    type='text'
                    label='Partita Iva'
                    placeholder='Partita Iva'
                    underlineColor={classes.underline}
                    labelTextColor={'#6d1331'}
                    inputTextColor={classes.input}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name='phoneNumber'
                    type='text'
                    label='Numero di telefono'
                    placeholder='Numero di telefono'
                    underlineColor={classes.underline}
                    labelTextColor={'#6d1331'}
                    inputTextColor={classes.input}
                  />
                </Grid>
                {/* <AddressForm setFieldValue={setFieldValue} /> */}
                <Grid item xs={12}>
                  <ComboboxField
                    setFieldValue={setFieldValue}
                    name='address.regione'
                    label='Regione'
                    items={optionsRegioni}
                    labelTextColor={'#6d1331'}
                    underlineColor={classes.underline}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ComboboxProvince
                    setFieldValue={setFieldValue}
                    name='address.provincia'
                    label='Provincia'
                    labelTextColor={'#6d1331'}
                    underlineColor={classes.underline}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ComboboxComuni
                    setFieldValue={setFieldValue}
                    name='address.comune'
                    label='Comune'
                    labelTextColor={'#6d1331'}
                    underlineColor={classes.underline}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name='address.via'
                    type='text'
                    label='Via'
                    placeholder='Via'
                    underlineColor={classes.underline}
                    labelTextColor={'#6d1331'}
                    inputTextColor={classes.input}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name='address.CAP'
                    type='number'
                    max='99999'
                    label='CAP'
                    placeholder='CAP'
                    underlineColor={classes.underline}
                    labelTextColor={'#6d1331'}
                    inputTextColor={classes.input}
                  />
                </Grid>
                <Grid item xs={12}>
                  <SliderField
                    name='hideContact'
                    label='Nascondi info personali'
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth
                //isLoading={isValidating || isSubmitting}
                type='submit'
                disabled={!dirty || !isValid}
              >
                Submit
              </Button>

              <Grid container justify='flex-end'>
                <Grid item>
                  <LinkMUI href='#' variant='body2'>
                    Already have an account? Sign in
                  </LinkMUI>
                </Grid>
              </Grid>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};
