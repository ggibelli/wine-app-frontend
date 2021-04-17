import { Form, Formik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';
import { TextFieldAdornment } from '../../FormFields/TextFieldAdornment';
import { TextField } from '../../FormFields/TextField';
import { Combobox } from '../../FormFields/ComboboxFieldWines';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Exact, TypeAd, WinesQuery } from '../../../generated/graphql';
import { useStylesForms } from '../../../utils/styleHook';
import { QueryResult } from '@apollo/client';
import { Loading } from '../../Loading';

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
  wines: QueryResult<
    WinesQuery,
    Exact<{
      [key: string]: never;
    }>
  >;
}> = ({ onSubmit, adType, wines }) => {
  const classes = useStylesForms();

  const wineOptions = wines.data?.wines
    ? wines.data?.wines.map((wine) => ({
        denominazioneVino: wine.denominazioneVino,
        regione: wine.regione,
      }))
    : null;
  const today = new Date();
  const year = today.getFullYear();

  if (wines.loading) {
    return <Loading />;
  }
  if (wines.error) return <div>Error...{wines.error.message}</div>;
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
