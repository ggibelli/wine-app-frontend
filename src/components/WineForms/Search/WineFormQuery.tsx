import { Form, Formik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';
import { TextField } from '../../FormFields/TextField';
import { Combobox } from '../../FormFields/ComboboxFieldWines';
import Button from '@material-ui/core/Button';
import { useWinesQuery } from '../../../generated/graphql';
//import { searchAndPostParameters } from '../../../cache';

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
      {({ isValid, dirty, values, setFieldValue }) => {
        console.log(values, isValid);
        return (
          <Form>
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
            <TextField
              name='abv'
              type='number'
              label='Gradazione alcolica'
              min='0'
              max='22'
              step='0.5'
              placeholder='Esempio 13.5 vol'
            />
            <TextField
              name='price'
              type='number'
              label='Prezzo massimo al litro'
              min='0'
              max='100'
              step='0.5'
              placeholder='Esempio 3.5 euro'
            />
            <TextField
              name='liters'
              type='number'
              label='Litri richiesti'
              min='0'
              max='999999'
              step='1'
              placeholder='Esempio 1000 litri'
            />
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
