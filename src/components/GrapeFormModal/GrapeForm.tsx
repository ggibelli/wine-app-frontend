import { Form, Formik } from 'formik';
import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { TextFieldAdornment } from '../FormFields/TextFieldAdornment';
// import * as Yup from 'yup';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { compositionWine } from '../../cache';
import { WineOption } from '../../utils/wineList';

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

const validate = (values: Record<string, number>) => {
  const errors: Record<string, string> = {};
  console.log(values);
  const valuesValues = Object.values(values);
  const total = valuesValues.reduce((acc, item) => item + acc, 0);
  console.log(total);
  if (total > 100) {
    errors.total = 'Max value 100';
  } else if (total < 100) {
    errors.total = 'The percentage should be 100';
  }

  return errors;
};

export const GrapeForm: React.FC<{
  onSubmit: (values: Record<string, number>) => void;
  // onClose: () => void;
  grapes?: WineOption;
}> = ({ onSubmit, grapes }) => {
  const classes = useStyles();
  if (!grapes) return null;
  console.log(grapes);
  const compositionWineCache = compositionWine();
  const initialValues =
    compositionWineCache?.name === grapes.d
      ? compositionWineCache?.compisition
      : grapes.v.reduce((acc, item) => ({ ...acc, [item]: 0 }), {});
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      // validationSchema={Yup.object({
      //   email: Yup.string().email('Invalid email address').required('Required'),
      //   password: Yup.string().required('Required'),
      // })}
      validate={validate}
    >
      {({ isValid, dirty, errors }) => {
        return (
          <Container component='main'>
            <CssBaseline />
            <div className={classes.paper}>
              <Typography component='h1' variant='h5'>
                Composizione uve vino selezionato
              </Typography>
              <Form className={classes.form}>
                {grapes.v.map((grape) => (
                  <TextFieldAdornment
                    key={grape}
                    adornment='%'
                    name={grape}
                    type='number'
                    label={grape}
                    placeholder='Inserisci % vitigno'
                    underlineColor={classes.underline}
                    labelTextColor='#6d1331'
                    inputTextColor='#6d1331'
                    min='0'
                    max='100'
                    step='1'
                  />
                ))}
                <div style={{ color: 'red' }}>{errors.total}</div>
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
              </Form>
            </div>
          </Container>
        );
      }}
    </Formik>
  );
};
