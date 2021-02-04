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
import {
  Menzione,
  MetodoProduttivo,
  useWinesQuery,
} from '../../../generated/graphql';
import { SelectField } from '../../FormFields/SelectField';
import { SliderField } from '../../FormFields/SliderField';
import { searchedWine } from '../../../cache';
import { AddressForm } from '../../AddressForm';
import Skeleton from '@material-ui/lab/Skeleton';

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

export interface WineFormMutation {
  wineName: string;
  harvest: number | '';
  abv: number | '';
  price: number | '';
  liters: number | '';
  sottoZona?: string;
  menzione?: Menzione | '';
  content: string;
  metodoProduttivo?: MetodoProduttivo | '';
  needsFollowUp: boolean;
  isSameAddress: boolean;
  address?: AddressInputForm;
}
interface Wine {
  denominazioneVino: string;
  regione: [string];
}

export const WineFormMutation: React.FC<{
  onSubmit: (values: WineFormMutation) => void;
}> = ({ onSubmit }) => {
  const { data, loading, error } = useWinesQuery();
  const wineOptions = data?.wines
    ? data?.wines.map((wine) => ({
        denominazioneVino: wine.denominazioneVino,
        regione: wine.regione,
      }))
    : null;
  const classes = useStyles();
  const today = new Date();
  const year = today.getFullYear();
  const searchedWineCache = searchedWine();
  const initialValues: WineFormMutation = {
    wineName: searchedWineCache?.wineName as string,
    harvest: searchedWineCache?.harvest as number,
    abv: searchedWineCache?.abv as number,
    price: searchedWineCache?.price as number,
    liters: searchedWineCache?.liters as number,
    sottoZona: '',
    menzione: '',
    metodoProduttivo: '',
    content: '',
    needsFollowUp: false,
    isSameAddress: false,
    address: initialAddress,
  };
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
        sottoZona: Yup.string(),
        menzione: Yup.string(),
        metodoProduttivo: Yup.string(),
        content: Yup.string().required('Required'),
        needsFollowUp: Yup.bool().required('Required'),
        isSameAddress: Yup.bool().required('Required'),
        address: Yup.object().shape({
          via: Yup.string(),
          CAP: Yup.number().test(
            'len',
            'Must be exactly 5 characters',
            (value) => {
              if (!value) return false;
              return value.toString().length === 5;
            }
          ),
          comune: Yup.string(),
          provincia: Yup.string(),
          regione: Yup.string(),
        }),
      })}
      onSubmit={onSubmit}
    >
      {({ isValid, dirty, setFieldValue }) => {
        return (
          <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className={classes.paper}>
              <Typography component='h1' variant='h4'>
                Che cosa vuoi comprare?
              </Typography>
              <Typography component='p'>
                Inserisci i dati dell annuncio che vuoi pubblicare
              </Typography>
              <Form className={classes.form}>
                <Typography component='h3' variant='h5'>
                  Dati prodotto
                </Typography>
                <Combobox
                  name='wineName'
                  label='Vino'
                  defaultWine={initialValues.wineName}
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
                  label='Prezzo richiesto al litro'
                  min='0'
                  max='100'
                  step='0.1'
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
                <SelectField
                  name='menzione'
                  label='Menzione del vino'
                  options={Object.values(Menzione)}
                />
                <SelectField
                  name='metodoProduttivo'
                  label='Metodo produttivo del vino'
                  options={Object.values(MetodoProduttivo)}
                />
                <TextField
                  name='sottoZona'
                  type='text'
                  label='Sotto zona del vino'
                  placeholder='Sotto zona del vino'
                />
                <TextField
                  name='content'
                  type='text'
                  multiline={true}
                  label='Descrizione'
                  placeholder='Vino veramente buono'
                />
                <SliderField
                  name='needsFollowUp'
                  label='Aggiornami se nuovi annunci pertinenti'
                />
                <SliderField
                  name='isSameAddress'
                  label='Indirizzo uguale a quello usato in registrazione'
                />
                <AddressForm setFieldValue={setFieldValue} />
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
