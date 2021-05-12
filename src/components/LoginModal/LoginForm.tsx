import { Form, Formik } from 'formik';
import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { TextField } from '../FormFields/TextField';
import { PasswordField } from '../FormFields/PasswordField';
import * as Yup from 'yup';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LinkMUI from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from '@reach/router';

export interface LoginData {
  email: string;
  password: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(0),
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
    marginTop: theme.spacing(1),
  },
  input: {
    color: '#6d1331',
  },
  underline: {
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
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const LoginForm: React.FC<{
  onSubmit: (values: LoginData) => void;
  onClose: () => void;
}> = ({ onSubmit, onClose }) => {
  const classes = useStyles();

  const initialValues = { password: '', email: '' };
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
      })}
    >
      {({ isValid, dirty }) => {
        return (
          <Container component='main'>
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component='h1' variant='h5'>
                Sign in
              </Typography>
              <Form className={classes.form}>
                <TextField
                  name='email'
                  type='email'
                  label='Email'
                  placeholder='Email address'
                  underlineColor={classes.underline}
                  labelTextColor={'#6d1331'}
                  inputTextColor={classes.input}
                />

                <PasswordField
                  name='password'
                  underlineColor={classes.underline}
                />
                <Button
                  //isLoading={isValidating || isSubmitting}
                  type='submit'
                  disabled={!dirty || !isValid}
                  fullWidth
                  variant='contained'
                  color='primary'
                  className={classes.submit}
                >
                  Submit
                </Button>
                <Grid container>
                  <Grid item xs>
                    <LinkMUI href='#' variant='body2'>
                      Forgot password?
                    </LinkMUI>
                  </Grid>
                  <Grid item>
                    <LinkMUI
                      component={Link}
                      to='/signup'
                      variant='body2'
                      onClick={onClose}
                    >
                      {"Don't have an account? Sign Up"}
                    </LinkMUI>
                  </Grid>
                </Grid>
              </Form>
            </div>
          </Container>
        );
      }}
    </Formik>
  );
};
