import { Form, Formik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';
import { TextFieldAdornment } from '../../FormFields/TextFieldAdornment';
import { TextField } from '../../FormFields/TextField';
import { Combobox } from '../../FormFields/ComboboxFieldWines';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Menzione, MetodoProduttivo, TypeAd } from '../../../generated/graphql';
import { SelectField } from '../../FormFields/SelectField';
import { SliderField } from '../../FormFields/SliderField';
// import { searchedWine } from '../../../cache';
import { AddressForm } from '../../AddressForm';
import { useStylesForms } from '../../../utils/styleHook';
import { WineOption } from '../../../utils/wineList';

interface AddressInputForm {
  comune: string;
  provincia: string;
  regione: string;
}

const initialAddress: AddressInputForm = {
  comune: '',
  provincia: '',
  regione: '',
};

export interface WineFormMutation {
  wineName: string;
  harvest: number | '';
  abv: number | '';
  price: number | '';
  liters: number | '';
  sottoZona?: string;
  menzione?: Menzione | '';
  content?: string;
  metodoProduttivo?: MetodoProduttivo | '';
  // needsFollowUp: boolean;
  isSameAddress: boolean;
  address?: AddressInputForm;
}

export const WineFormMutation: React.FC<{
  onSubmit: (values: WineFormMutation) => void;
  adType: TypeAd;
  wines: WineOption[];
}> = ({ onSubmit, adType, wines }) => {
  const classes = useStylesForms();
  const today = new Date();
  const year = today.getFullYear();
  // const searchedWineCache = searchedWine();
  const initialValues: WineFormMutation = {
    wineName: '' as string,
    harvest: 2015 as number,
    abv: 13.5 as number,
    price: 3 as number,
    liters: 100 as number,
    sottoZona: '',
    menzione: '',
    metodoProduttivo: '',
    content: '',
    // needsFollowUp: false,
    isSameAddress: false,
    address: initialAddress,
  };

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
        metodoProduttivo: Yup.string(),
        content: Yup.string(),
        // needsFollowUp: Yup.bool().required('Required'),
        isSameAddress: Yup.bool().required('Required'),
        address: Yup.object().when('isSameAddress', {
          is: true,
          then: Yup.object().shape({
            comune: Yup.string(),
            provincia: Yup.string(),
            regione: Yup.string(),
          }),
          otherwise: Yup.object().shape({
            comune: Yup.string().required('Required'),
            provincia: Yup.string().required('Required'),
            regione: Yup.string().required('Required'),
          }),
        }),
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
              style={{
                marginLeft: -10,
                marginTop: -10,
                paddingBottom: 20,
                marginBottom: -20,
              }}
            >
              Dati prodotto
            </Typography>
            <Combobox
              name='wineName'
              label='Vino'
              defaultWine={initialValues.wineName}
              items={wines}
              setFieldValue={setFieldValue}
              labelTextColor={adType === TypeAd.Buy ? '#fff' : '#6d1331'}
              underlineColor={
                adType === TypeAd.Buy
                  ? classes.underline
                  : classes.underlineSell
              }
            />
            <TextField
              required={true}
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
              label='Prezzo richiesto al litro'
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

            <SelectField
              name='metodoProduttivo'
              label='Metodo produttivo del vino'
              options={Object.values(MetodoProduttivo)}
              underlineColor={
                adType === TypeAd.Buy
                  ? classes.underline
                  : classes.underlineSell
              }
              labelColor={adType === TypeAd.Buy ? '#fff' : '#6d1331'}
              textColor={
                adType === TypeAd.Buy ? classes.input : classes.inputSell
              }
            />
            {/* <TextField
              name='sottoZona'
              type='text'
              label='Sotto zona del vino'
              placeholder='Sotto zona del vino'
              underlineColor={
                adType === TypeAd.Buy
                  ? classes.underline
                  : classes.underlineSell
              }
              labelTextColor={adType === TypeAd.Buy ? '#fff' : '#6d1331'}
              inputTextColor={
                adType === TypeAd.Buy ? classes.input : classes.inputSell
              }
            /> */}
            <TextField
              name='content'
              type='text'
              multiline={true}
              label='Descrizione'
              placeholder='Arneis'
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
            {/* <SliderField
              name='needsFollowUp'
              label='Aggiornami se nuovi annunci pertinenti'
              labelColor={adType === TypeAd.Buy ? '#fff' : '#6d1331'}
            /> */}
            <SliderField
              name='isSameAddress'
              label='Indirizzo uguale a quello usato in registrazione'
              labelColor={adType === TypeAd.Buy ? '#fff' : '#6d1331'}
            />
            <AddressForm setFieldValue={setFieldValue} />

            <Button
              fullWidth
              //isLoading={isValidating || isSubmitting}
              className={
                adType === TypeAd.Buy ? classes.submit : classes.submitSell
              }
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
