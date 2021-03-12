import { Form, Formik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { TextFieldAdornment } from '../../FormFields/TextFieldAdornment';
import { TextField } from '../../FormFields/TextField';
import { Combobox } from '../../FormFields/ComboboxFieldWines';
import Skeleton from '@material-ui/lab/Skeleton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TypeAd, useWinesQuery } from '../../../generated/graphql';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    borderRadius: 16,
    color: '#fff',
    margin: 6,
    padding: 6,
    backgroundColor: '#6d1331',
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(4),
  },
  submit: {
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: 'rgb(250, 232, 241)',
    },
    color: '#6d1331',
    margin: theme.spacing(3, 0, 2),
    display: 'flex',
    alignItems: 'center',
  },
  formSell: {
    borderRadius: 16,
    borderColor: '#6d1331',
    borderStyle: 'solid',
    borderWidth: '1px',
    color: '#6d1331',
    margin: 6,
    padding: 6,
    backgroundColor: '#fff',
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(4),
  },
  submitSell: {
    backgroundColor: '#6d1331',
    '&:hover': {
      backgroundColor: '#6d1335',
      color: 'white',
    },
    color: 'white',
    margin: theme.spacing(3, 0, 2),
    display: 'flex',
    alignItems: 'center',
  },

  input: {
    color: 'white',
  },
  inputSell: {
    color: '#6d1331',
  },
  underline: {
    color: 'white',
    '&:before': {
      borderBottom: '1px solid white',
    },
    '&&&&:hover:before': {
      borderBottom: '2px solid white',
    },
    '&:after': {
      borderBottom: '3px solid white',
    },
    disabled: {},
    focused: {},
    error: {},
  },
  underlineSell: {
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

export interface WineFormQuery {
  wineName: string;
  harvest?: number | '';
  abv?: number | '';
  price?: number | '';
  liters?: number | '';
}
interface Wine {
  denominazioneVino: string;
  regione: [string];
}

const initialValues: WineFormQuery = {
  wineName: '',
  harvest: 2015,
  abv: 13.5,
  price: 1,
  liters: 100,
};
export const WineFormQuery: React.FC<{
  onSubmit: (values: WineFormQuery) => void;
  adType: TypeAd;
}> = ({ onSubmit, adType }) => {
  const classes = useStyles();
  const { data, loading, error } = useWinesQuery();
  const wineOptions = data?.wines
    ? data?.wines.map((wine) => ({
        denominazioneVino: wine.denominazioneVino,
        regione: wine.regione,
      }))
    : null;
  const today = new Date();
  const year = today.getFullYear();

  if (loading) {
    return (
      <div className={classes.paper} data-testid='loading'>
        <Skeleton variant='rect' width={'40em'} height={70} />
        <br />
        <Skeleton variant='rect' width={'40em'} height={30} />
        <Skeleton variant='rect' width={'40em'} height={30} />
        <Skeleton
          className={classes.form}
          variant='rect'
          width={'40em'}
          height={30}
        />
        <Skeleton
          className={classes.form}
          variant='rect'
          width={'40em'}
          height={30}
        />
        <Skeleton
          className={classes.form}
          variant='rect'
          width={'40em'}
          height={30}
        />
      </div>
    );
  }
  if (error) return <div>Error...{error.message}</div>;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        wineName: Yup.string().required('Required'),
        harvest: Yup.number()
          .positive("L'anno deve essere positivo")
          .moreThan(1900, "L'anno deve essere maggiore di 1900")
          .lessThan(year, `L'anno non può essere maggiore di ${year}`)
          .required('Required'),
        abv: Yup.number()
          .positive('La gradazione alcolica deve essere positiva')
          .lessThan(22, 'La gradazione alcolica non può essere maggiore di 22')
          .required('Required'),
        price: Yup.number()
          .positive('Il prezzo al litro deve essere positivo')
          .lessThan(100, 'Questo prezzo è al litro')
          .required('Required'),
        liters: Yup.number()
          .positive('La quantità deve essere positiva')
          .required('Required'),
      })}
      onSubmit={onSubmit}
    >
      {({ isValid, dirty, setFieldValue }) => {
        return (
          <Form
            className={adType === TypeAd.Buy ? classes.form : classes.formSell}
          >
            <Typography
              component='h3'
              variant='h5'
              color={adType === TypeAd.Buy ? 'textSecondary' : 'primary'}
            >
              Dati prodotto
            </Typography>
            <br />
            <Combobox
              name='wineName'
              label='Vino'
              items={wineOptions as Wine[]}
              setFieldValue={setFieldValue}
              labelTextColor={adType === TypeAd.Buy ? '#fff' : '#6d1331'}
              underlineColor={
                adType === TypeAd.Buy
                  ? classes.underline
                  : classes.underlineSell
              }
            />
            <TextField
              name='harvest'
              type='number'
              label='Vendemmia'
              min='1900'
              max={`${year}`}
              step='1'
              underlineColor={
                adType === TypeAd.Buy
                  ? classes.underline
                  : classes.underlineSell
              }
              placeholder='Vendemmia anno'
              labelTextColor={adType === TypeAd.Buy ? '#fff' : '#6d1331'}
              inputTextColor={
                adType === TypeAd.Buy ? classes.input : classes.inputSell
              }
            />
            <TextFieldAdornment
              name='abv'
              type='number'
              label='Gradazione alcolica'
              min='0'
              max='22'
              step='0.5'
              placeholder='Esempio 13.5 vol'
              adornment='%'
              underlineColor={
                adType === TypeAd.Buy
                  ? classes.underline
                  : classes.underlineSell
              }
              labelTextColor={adType === TypeAd.Buy ? '#fff' : '#6d1331'}
              inputTextColor={
                adType === TypeAd.Buy ? classes.input : classes.inputSell
              }
            />
            <TextFieldAdornment
              name='price'
              type='number'
              label='Prezzo massimo al litro'
              min='0'
              max='100'
              step='0.1'
              placeholder='Esempio 3.5 euro'
              adornment='€'
              underlineColor={
                adType === TypeAd.Buy
                  ? classes.underline
                  : classes.underlineSell
              }
              labelTextColor={adType === TypeAd.Buy ? '#fff' : '#6d1331'}
              inputTextColor={
                adType === TypeAd.Buy ? classes.input : classes.inputSell
              }
            />
            <TextFieldAdornment
              name='liters'
              type='number'
              label='Litri richiesti'
              min='0'
              max='999999'
              step='1'
              placeholder='Esempio 1000 litri'
              adornment='l'
              underlineColor={
                adType === TypeAd.Buy
                  ? classes.underline
                  : classes.underlineSell
              }
              labelTextColor={adType === TypeAd.Buy ? '#fff' : '#6d1331'}
              inputTextColor={
                adType === TypeAd.Buy ? classes.input : classes.inputSell
              }
            />

            <Button
              className={
                adType === TypeAd.Buy ? classes.submit : classes.submitSell
              }
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
