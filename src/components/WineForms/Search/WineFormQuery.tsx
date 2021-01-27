import { Form, Formik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { TextFieldAdornment } from '../../FormFields/TextFieldAdornment';
import { TextField } from '../../FormFields/TextField';
import { Combobox } from '../../FormFields/ComboboxFieldWines';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useWinesQuery } from '../../../generated/graphql';
//import { searchAndPostParameters } from '../../../cache';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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
// trovare modo di differenziare se e post o ricerca per il submit, probabilmente aggiungo un campo chiamato ricerca_o_post, grstione on submit nel file Buy/Sell
// quando la query locale e undefined faccio la ricerca, se ha contenuto faccio post e svuoto la cache
export const WineFormQuery: React.FC<{
  onSubmit: (values: WineFormQuery) => void;
}> = ({ onSubmit }) => {
  const { data, loading, error } = useWinesQuery();
  const wineOptions = data?.wines
    ? data?.wines.map((wine) => ({
        denominazioneVino: wine.denominazioneVino,
        regione: wine.regione,
      }))
    : null;
  const today = new Date();
  const year = today.getFullYear();
  if (loading) return <div>loading...</div>;
  if (error) return <div>Error...{error.message}</div>;
  //const queryRicercaFatta = queryLocale;
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
        const classes = useStyles();
        return (
          <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className={classes.paper}>
              <Typography component='h1' variant='h4'>
                Che cosa vuoi comprare?
              </Typography>
              <Typography component='p'>
                Inserisci i dati del prodotto che desideri comprare, noi
                cercheremo per te il giusto venditore.
              </Typography>
              <Form className={classes.form}>
                <Typography component='h3' variant='h5'>
                  Dati prodotto
                </Typography>
                <Combobox
                  name='wineName'
                  label='Vino'
                  items={wineOptions as Wine[]}
                  setFieldValue={setFieldValue}
                />
                <TextField
                  name='harvest'
                  type='number'
                  label='Vendemmia'
                  min='1900'
                  max={`${year}`}
                  step='1'
                  placeholder='Vendemmia anno'
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
                />
                <TextFieldAdornment
                  name='price'
                  type='number'
                  label='Prezzo massimo al litro'
                  min='0'
                  max='100'
                  step='0.5'
                  placeholder='Esempio 3.5 euro'
                  adornment='€'
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
                />

                <Button
                  //isLoading={isValidating || isSubmitting}
                  type='submit'
                  disabled={!dirty || !isValid}
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
