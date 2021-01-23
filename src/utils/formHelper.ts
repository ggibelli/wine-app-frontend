import { Province, Regioni } from '../generated/graphql';
import * as Yup from 'yup';
import isValidPassword from './passwordValidator';
import isPivaValid from './pivaValidator';
import phoneNumberValidator from './phoneNumberValidator';

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  reEmail: Yup.string()
    .oneOf([Yup.ref('email')], 'Email does not match')
    .required('Required'),
  password: Yup.string()
    .required('Required')
    .test('Password check', 'Password not safe', (value) => {
      if (!value) return false;
      return isValidPassword.validate(value) as boolean;
    }),
  rePassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Password does not match')
    .required('Required'),
  phoneNumber: Yup.string()
    .required('Required')
    .test('Phone number check', 'Il numero di telefono non e valido', (value) =>
      phoneNumberValidator(value as string)
    ),
  pIva: Yup.string()
    .required('Required')
    .test('Partita ', 'La partita iva non e valida', (value) => {
      if (!value) return false;
      return isPivaValid(value);
    }),
  address: Yup.object().shape({
    via: Yup.string().required('Required'),
    CAP: Yup.number().test('len', 'Must be exactly 5 characters', (value) => {
      if (!value) return false;
      return value.toString().length === 5;
    }),
    comune: Yup.string().required('Required'),
    provincia: Yup.string().required('Required'),
    regione: Yup.string().required('Required'),
  }),
  hideContact: Yup.bool().required('Required'),
});

export const provinceConRegione = [
  {
    provincia: Province.TO,
    regione: Regioni.Piemonte,
  },
  {
    provincia: Province.VC,
    regione: Regioni.Piemonte,
  },
  {
    provincia: Province.NO,
    regione: Regioni.Piemonte,
  },
  {
    provincia: Province.CN,
    regione: Regioni.Piemonte,
  },
  {
    provincia: Province.AT,
    regione: Regioni.Piemonte,
  },
  {
    provincia: Province.AL,
    regione: Regioni.Piemonte,
  },
  {
    provincia: Province.BI,
    regione: Regioni.Piemonte,
  },
  {
    provincia: Province.VB,
    regione: Regioni.Piemonte,
  },
  {
    provincia: Province.AO,
    regione: Regioni.Valdaosta,
  },
  {
    provincia: Province.VA,
    regione: Regioni.Lombardia,
  },
  {
    provincia: Province.CO,
    regione: Regioni.Lombardia,
  },
  {
    provincia: Province.SO,
    regione: Regioni.Lombardia,
  },
  {
    provincia: Province.MI,
    regione: Regioni.Lombardia,
  },
  {
    provincia: Province.BG,
    regione: Regioni.Lombardia,
  },
  {
    provincia: Province.BS,
    regione: Regioni.Lombardia,
  },
  {
    provincia: Province.PV,
    regione: Regioni.Lombardia,
  },
  {
    provincia: Province.CR,
    regione: Regioni.Lombardia,
  },
  {
    provincia: Province.MN,
    regione: Regioni.Lombardia,
  },
  {
    provincia: Province.LC,
    regione: Regioni.Lombardia,
  },
  {
    provincia: Province.LO,
    regione: Regioni.Lombardia,
  },
  {
    provincia: Province.MB,
    regione: Regioni.Lombardia,
  },
  {
    provincia: Province.BZ,
    regione: Regioni.Trentino,
  },
  {
    provincia: Province.TN,
    regione: Regioni.Trentino,
  },
  {
    provincia: Province.VR,
    regione: Regioni.Veneto,
  },
  {
    provincia: Province.VI,
    regione: Regioni.Veneto,
  },
  {
    provincia: Province.BL,
    regione: Regioni.Veneto,
  },
  {
    provincia: Province.TV,
    regione: Regioni.Veneto,
  },
  {
    provincia: Province.VE,
    regione: Regioni.Veneto,
  },
  {
    provincia: Province.PD,
    regione: Regioni.Veneto,
  },
  {
    provincia: Province.RO,
    regione: Regioni.Veneto,
  },
  {
    provincia: Province.UD,
    regione: Regioni.Friuli,
  },
  {
    provincia: Province.GO,
    regione: Regioni.Friuli,
  },
  {
    provincia: Province.TS,
    regione: Regioni.Friuli,
  },
  {
    provincia: Province.PN,
    regione: Regioni.Friuli,
  },
  {
    provincia: Province.IM,
    regione: Regioni.Liguria,
  },
  {
    provincia: Province.SV,
    regione: Regioni.Liguria,
  },
  {
    provincia: Province.GE,
    regione: Regioni.Liguria,
  },
  {
    provincia: Province.SP,
    regione: Regioni.Liguria,
  },
  {
    provincia: Province.PC,
    regione: Regioni.Emilia,
  },
  {
    provincia: Province.PR,
    regione: Regioni.Emilia,
  },
  {
    provincia: Province.RE,
    regione: Regioni.Emilia,
  },
  {
    provincia: Province.MO,
    regione: Regioni.Emilia,
  },
  {
    provincia: Province.BO,
    regione: Regioni.Emilia,
  },
  {
    provincia: Province.FE,
    regione: Regioni.Emilia,
  },
  {
    provincia: Province.RA,
    regione: Regioni.Emilia,
  },
  {
    provincia: Province.FC,
    regione: Regioni.Emilia,
  },
  {
    provincia: Province.RN,
    regione: Regioni.Emilia,
  },
  {
    provincia: Province.MS,
    regione: Regioni.Toscana,
  },
  {
    provincia: Province.LU,
    regione: Regioni.Toscana,
  },
  {
    provincia: Province.PT,
    regione: Regioni.Toscana,
  },
  {
    provincia: Province.FI,
    regione: Regioni.Toscana,
  },
  {
    provincia: Province.LI,
    regione: Regioni.Toscana,
  },
  {
    provincia: Province.PI,
    regione: Regioni.Toscana,
  },
  {
    provincia: Province.AR,
    regione: Regioni.Toscana,
  },
  {
    provincia: Province.SI,
    regione: Regioni.Toscana,
  },
  {
    provincia: Province.GR,
    regione: Regioni.Toscana,
  },
  {
    provincia: Province.PO,
    regione: Regioni.Toscana,
  },
  {
    provincia: Province.PG,
    regione: Regioni.Umbria,
  },
  {
    provincia: Province.TR,
    regione: Regioni.Umbria,
  },
  {
    provincia: Province.PU,
    regione: Regioni.Marche,
  },
  {
    provincia: Province.AN,
    regione: Regioni.Marche,
  },
  {
    provincia: Province.MC,
    regione: Regioni.Marche,
  },
  {
    provincia: Province.AP,
    regione: Regioni.Marche,
  },
  {
    provincia: Province.FM,
    regione: Regioni.Marche,
  },
  {
    provincia: Province.VT,
    regione: Regioni.Lazio,
  },
  {
    provincia: Province.RI,
    regione: Regioni.Lazio,
  },
  {
    provincia: Province.RM,
    regione: Regioni.Lazio,
  },
  {
    provincia: Province.LT,
    regione: Regioni.Lazio,
  },
  {
    provincia: Province.FR,
    regione: Regioni.Lazio,
  },
  {
    provincia: Province.AQ,
    regione: Regioni.Abruzzo,
  },
  {
    provincia: Province.TE,
    regione: Regioni.Abruzzo,
  },
  {
    provincia: Province.PE,
    regione: Regioni.Abruzzo,
  },
  {
    provincia: Province.CH,
    regione: Regioni.Abruzzo,
  },
  {
    provincia: Province.CB,
    regione: Regioni.Molise,
  },
  {
    provincia: Province.IS,
    regione: Regioni.Molise,
  },
  {
    provincia: Province.CE,
    regione: Regioni.Campania,
  },
  {
    provincia: Province.BN,
    regione: Regioni.Campania,
  },
  {
    provincia: Province.NA,
    regione: Regioni.Campania,
  },
  {
    provincia: Province.AV,
    regione: Regioni.Campania,
  },
  {
    provincia: Province.SA,
    regione: Regioni.Campania,
  },
  {
    provincia: Province.FG,
    regione: Regioni.Puglia,
  },
  {
    provincia: Province.BA,
    regione: Regioni.Puglia,
  },
  {
    provincia: Province.TA,
    regione: Regioni.Puglia,
  },
  {
    provincia: Province.BR,
    regione: Regioni.Puglia,
  },
  {
    provincia: Province.LE,
    regione: Regioni.Puglia,
  },
  {
    provincia: Province.BT,
    regione: Regioni.Puglia,
  },
  {
    provincia: Province.PZ,
    regione: Regioni.Basilicata,
  },
  {
    provincia: Province.MT,
    regione: Regioni.Basilicata,
  },
  {
    provincia: Province.CS,
    regione: Regioni.Calabria,
  },
  {
    provincia: Province.CZ,
    regione: Regioni.Calabria,
  },
  {
    provincia: Province.RC,
    regione: Regioni.Calabria,
  },
  {
    provincia: Province.KR,
    regione: Regioni.Calabria,
  },
  {
    provincia: Province.VV,
    regione: Regioni.Calabria,
  },
  {
    provincia: Province.TP,
    regione: Regioni.Sicilia,
  },
  {
    provincia: Province.PA,
    regione: Regioni.Sicilia,
  },
  {
    provincia: Province.ME,
    regione: Regioni.Sicilia,
  },
  {
    provincia: Province.AG,
    regione: Regioni.Sicilia,
  },
  {
    provincia: Province.CL,
    regione: Regioni.Sicilia,
  },
  {
    provincia: Province.EN,
    regione: Regioni.Sicilia,
  },
  {
    provincia: Province.CT,
    regione: Regioni.Sicilia,
  },
  {
    provincia: Province.RG,
    regione: Regioni.Sicilia,
  },
  {
    provincia: Province.SR,
    regione: Regioni.Sicilia,
  },
  {
    provincia: Province.SS,
    regione: Regioni.Sardegna,
  },
  {
    provincia: Province.NU,
    regione: Regioni.Sardegna,
  },
  {
    provincia: Province.CA,
    regione: Regioni.Sardegna,
  },
  {
    provincia: Province.OR,
    regione: Regioni.Sardegna,
  },
  {
    provincia: Province.SU,
    regione: Regioni.Sardegna,
  },
];

export const comuniConProvincia = [
  {
    comune: 'Agliè',
    provincia: Province.TO,
  },
  {
    comune: 'Airasca',
    provincia: Province.TO,
  },
  {
    comune: 'Ala di Stura',
    provincia: Province.TO,
  },
  {
    comune: "Albiano d'Ivrea",
    provincia: Province.TO,
  },
  {
    comune: 'Almese',
    provincia: Province.TO,
  },
  {
    comune: 'Alpette',
    provincia: Province.TO,
  },
  {
    comune: 'Alpignano',
    provincia: Province.TO,
  },
  {
    comune: 'Andezeno',
    provincia: Province.TO,
  },
  {
    comune: 'Andrate',
    provincia: Province.TO,
  },
  {
    comune: 'Angrogna',
    provincia: Province.TO,
  },
  {
    comune: 'Arignano',
    provincia: Province.TO,
  },
  {
    comune: 'Avigliana',
    provincia: Province.TO,
  },
  {
    comune: 'Azeglio',
    provincia: Province.TO,
  },
  {
    comune: 'Bairo',
    provincia: Province.TO,
  },
  {
    comune: 'Balangero',
    provincia: Province.TO,
  },
  {
    comune: 'Baldissero Canavese',
    provincia: Province.TO,
  },
  {
    comune: 'Baldissero Torinese',
    provincia: Province.TO,
  },
  {
    comune: 'Balme',
    provincia: Province.TO,
  },
  {
    comune: 'Banchette',
    provincia: Province.TO,
  },
  {
    comune: 'Barbania',
    provincia: Province.TO,
  },
  {
    comune: 'Bardonecchia',
    provincia: Province.TO,
  },
  {
    comune: 'Barone Canavese',
    provincia: Province.TO,
  },
  {
    comune: 'Beinasco',
    provincia: Province.TO,
  },
  {
    comune: 'Bibiana',
    provincia: Province.TO,
  },
  {
    comune: 'Bobbio Pellice',
    provincia: Province.TO,
  },
  {
    comune: 'Bollengo',
    provincia: Province.TO,
  },
  {
    comune: 'Borgaro Torinese',
    provincia: Province.TO,
  },
  {
    comune: 'Borgiallo',
    provincia: Province.TO,
  },
  {
    comune: "Borgofranco d'Ivrea",
    provincia: Province.TO,
  },
  {
    comune: 'Borgomasino',
    provincia: Province.TO,
  },
  {
    comune: 'Borgone Susa',
    provincia: Province.TO,
  },
  {
    comune: 'Bosconero',
    provincia: Province.TO,
  },
  {
    comune: 'Brandizzo',
    provincia: Province.TO,
  },
  {
    comune: 'Bricherasio',
    provincia: Province.TO,
  },
  {
    comune: 'Brosso',
    provincia: Province.TO,
  },
  {
    comune: 'Brozolo',
    provincia: Province.TO,
  },
  {
    comune: 'Bruino',
    provincia: Province.TO,
  },
  {
    comune: 'Brusasco',
    provincia: Province.TO,
  },
  {
    comune: 'Bruzolo',
    provincia: Province.TO,
  },
  {
    comune: 'Buriasco',
    provincia: Province.TO,
  },
  {
    comune: 'Burolo',
    provincia: Province.TO,
  },
  {
    comune: 'Busano',
    provincia: Province.TO,
  },
  {
    comune: 'Bussoleno',
    provincia: Province.TO,
  },
  {
    comune: 'Buttigliera Alta',
    provincia: Province.TO,
  },
  {
    comune: 'Cafasse',
    provincia: Province.TO,
  },
  {
    comune: 'Caluso',
    provincia: Province.TO,
  },
  {
    comune: 'Cambiano',
    provincia: Province.TO,
  },
  {
    comune: 'Campiglione Fenile',
    provincia: Province.TO,
  },
  {
    comune: 'Candia Canavese',
    provincia: Province.TO,
  },
  {
    comune: 'Candiolo',
    provincia: Province.TO,
  },
  {
    comune: 'Canischio',
    provincia: Province.TO,
  },
  {
    comune: 'Cantalupa',
    provincia: Province.TO,
  },
  {
    comune: 'Cantoira',
    provincia: Province.TO,
  },
  {
    comune: 'Caprie',
    provincia: Province.TO,
  },
  {
    comune: 'Caravino',
    provincia: Province.TO,
  },
  {
    comune: 'Carema',
    provincia: Province.TO,
  },
  {
    comune: 'Carignano',
    provincia: Province.TO,
  },
  {
    comune: 'Carmagnola',
    provincia: Province.TO,
  },
  {
    comune: 'Casalborgone',
    provincia: Province.TO,
  },
  {
    comune: "Cascinette d'Ivrea",
    provincia: Province.TO,
  },
  {
    comune: 'Caselette',
    provincia: Province.TO,
  },
  {
    comune: 'Caselle Torinese',
    provincia: Province.TO,
  },
  {
    comune: 'Castagneto Po',
    provincia: Province.TO,
  },
  {
    comune: 'Castagnole Piemonte',
    provincia: Province.TO,
  },
  {
    comune: 'Castellamonte',
    provincia: Province.TO,
  },
  {
    comune: 'Castelnuovo Nigra',
    provincia: Province.TO,
  },
  {
    comune: 'Castiglione Torinese',
    provincia: Province.TO,
  },
  {
    comune: 'Cavagnolo',
    provincia: Province.TO,
  },
  {
    comune: 'Cavour',
    provincia: Province.TO,
  },
  {
    comune: 'Cercenasco',
    provincia: Province.TO,
  },
  {
    comune: 'Ceres',
    provincia: Province.TO,
  },
  {
    comune: 'Ceresole Reale',
    provincia: Province.TO,
  },
  {
    comune: 'Cesana Torinese',
    provincia: Province.TO,
  },
  {
    comune: 'Chialamberto',
    provincia: Province.TO,
  },
  {
    comune: 'Chianocco',
    provincia: Province.TO,
  },
  {
    comune: 'Chiaverano',
    provincia: Province.TO,
  },
  {
    comune: 'Chieri',
    provincia: Province.TO,
  },
  {
    comune: 'Chiesanuova',
    provincia: Province.TO,
  },
  {
    comune: 'Chiomonte',
    provincia: Province.TO,
  },
  {
    comune: 'Chiusa di San Michele',
    provincia: Province.TO,
  },
  {
    comune: 'Chivasso',
    provincia: Province.TO,
  },
  {
    comune: 'Ciconio',
    provincia: Province.TO,
  },
  {
    comune: 'Cintano',
    provincia: Province.TO,
  },
  {
    comune: 'Cinzano',
    provincia: Province.TO,
  },
  {
    comune: 'Ciriè',
    provincia: Province.TO,
  },
  {
    comune: 'Claviere',
    provincia: Province.TO,
  },
  {
    comune: 'Coassolo Torinese',
    provincia: Province.TO,
  },
  {
    comune: 'Coazze',
    provincia: Province.TO,
  },
  {
    comune: 'Collegno',
    provincia: Province.TO,
  },
  {
    comune: 'Colleretto Castelnuovo',
    provincia: Province.TO,
  },
  {
    comune: 'Colleretto Giacosa',
    provincia: Province.TO,
  },
  {
    comune: 'Condove',
    provincia: Province.TO,
  },
  {
    comune: 'Corio',
    provincia: Province.TO,
  },
  {
    comune: 'Cossano Canavese',
    provincia: Province.TO,
  },
  {
    comune: 'Cuceglio',
    provincia: Province.TO,
  },
  {
    comune: 'Cumiana',
    provincia: Province.TO,
  },
  {
    comune: 'Cuorgnè',
    provincia: Province.TO,
  },
  {
    comune: 'Druento',
    provincia: Province.TO,
  },
  {
    comune: 'Exilles',
    provincia: Province.TO,
  },
  {
    comune: 'Favria',
    provincia: Province.TO,
  },
  {
    comune: 'Feletto',
    provincia: Province.TO,
  },
  {
    comune: 'Fenestrelle',
    provincia: Province.TO,
  },
  {
    comune: 'Fiano',
    provincia: Province.TO,
  },
  {
    comune: 'Fiorano Canavese',
    provincia: Province.TO,
  },
  {
    comune: 'Foglizzo',
    provincia: Province.TO,
  },
  {
    comune: 'Forno Canavese',
    provincia: Province.TO,
  },
  {
    comune: 'Frassinetto',
    provincia: Province.TO,
  },
  {
    comune: 'Front',
    provincia: Province.TO,
  },
  {
    comune: 'Frossasco',
    provincia: Province.TO,
  },
  {
    comune: 'Garzigliana',
    provincia: Province.TO,
  },
  {
    comune: 'Gassino Torinese',
    provincia: Province.TO,
  },
  {
    comune: 'Germagnano',
    provincia: Province.TO,
  },
  {
    comune: 'Giaglione',
    provincia: Province.TO,
  },
  {
    comune: 'Giaveno',
    provincia: Province.TO,
  },
  {
    comune: 'Givoletto',
    provincia: Province.TO,
  },
  {
    comune: 'Gravere',
    provincia: Province.TO,
  },
  {
    comune: 'Groscavallo',
    provincia: Province.TO,
  },
  {
    comune: 'Grosso',
    provincia: Province.TO,
  },
  {
    comune: 'Grugliasco',
    provincia: Province.TO,
  },
  {
    comune: 'Ingria',
    provincia: Province.TO,
  },
  {
    comune: 'Inverso Pinasca',
    provincia: Province.TO,
  },
  {
    comune: 'Isolabella',
    provincia: Province.TO,
  },
  {
    comune: 'Issiglio',
    provincia: Province.TO,
  },
  {
    comune: 'Ivrea',
    provincia: Province.TO,
  },
  {
    comune: 'La Cassa',
    provincia: Province.TO,
  },
  {
    comune: 'La Loggia',
    provincia: Province.TO,
  },
  {
    comune: 'Lanzo Torinese',
    provincia: Province.TO,
  },
  {
    comune: 'Lauriano',
    provincia: Province.TO,
  },
  {
    comune: 'Leini',
    provincia: Province.TO,
  },
  {
    comune: 'Lemie',
    provincia: Province.TO,
  },
  {
    comune: 'Lessolo',
    provincia: Province.TO,
  },
  {
    comune: 'Levone',
    provincia: Province.TO,
  },
  {
    comune: 'Locana',
    provincia: Province.TO,
  },
  {
    comune: 'Lombardore',
    provincia: Province.TO,
  },
  {
    comune: 'Lombriasco',
    provincia: Province.TO,
  },
  {
    comune: 'Loranzè',
    provincia: Province.TO,
  },
  {
    comune: 'Luserna San Giovanni',
    provincia: Province.TO,
  },
  {
    comune: 'Lusernetta',
    provincia: Province.TO,
  },
  {
    comune: 'Lusigliè',
    provincia: Province.TO,
  },
  {
    comune: 'Macello',
    provincia: Province.TO,
  },
  {
    comune: 'Maglione',
    provincia: Province.TO,
  },
  {
    comune: 'Marentino',
    provincia: Province.TO,
  },
  {
    comune: 'Massello',
    provincia: Province.TO,
  },
  {
    comune: 'Mathi',
    provincia: Province.TO,
  },
  {
    comune: 'Mattie',
    provincia: Province.TO,
  },
  {
    comune: 'Mazzè',
    provincia: Province.TO,
  },
  {
    comune: 'Meana di Susa',
    provincia: Province.TO,
  },
  {
    comune: 'Mercenasco',
    provincia: Province.TO,
  },
  {
    comune: 'Mezzenile',
    provincia: Province.TO,
  },
  {
    comune: 'Mombello di Torino',
    provincia: Province.TO,
  },
  {
    comune: 'Mompantero',
    provincia: Province.TO,
  },
  {
    comune: 'Monastero di Lanzo',
    provincia: Province.TO,
  },
  {
    comune: 'Moncalieri',
    provincia: Province.TO,
  },
  {
    comune: 'Moncenisio',
    provincia: Province.TO,
  },
  {
    comune: 'Montaldo Torinese',
    provincia: Province.TO,
  },
  {
    comune: 'Montalenghe',
    provincia: Province.TO,
  },
  {
    comune: 'Montalto Dora',
    provincia: Province.TO,
  },
  {
    comune: 'Montanaro',
    provincia: Province.TO,
  },
  {
    comune: 'Monteu da Po',
    provincia: Province.TO,
  },
  {
    comune: 'Moriondo Torinese',
    provincia: Province.TO,
  },
  {
    comune: 'Nichelino',
    provincia: Province.TO,
  },
  {
    comune: 'Noasca',
    provincia: Province.TO,
  },
  {
    comune: 'Nole',
    provincia: Province.TO,
  },
  {
    comune: 'Nomaglio',
    provincia: Province.TO,
  },
  {
    comune: 'None',
    provincia: Province.TO,
  },
  {
    comune: 'Novalesa',
    provincia: Province.TO,
  },
  {
    comune: 'Oglianico',
    provincia: Province.TO,
  },
  {
    comune: 'Orbassano',
    provincia: Province.TO,
  },
  {
    comune: 'Orio Canavese',
    provincia: Province.TO,
  },
  {
    comune: 'Osasco',
    provincia: Province.TO,
  },
  {
    comune: 'Osasio',
    provincia: Province.TO,
  },
  {
    comune: 'Oulx',
    provincia: Province.TO,
  },
  {
    comune: 'Ozegna',
    provincia: Province.TO,
  },
  {
    comune: 'Palazzo Canavese',
    provincia: Province.TO,
  },
  {
    comune: 'Pancalieri',
    provincia: Province.TO,
  },
  {
    comune: 'Parella',
    provincia: Province.TO,
  },
  {
    comune: 'Pavarolo',
    provincia: Province.TO,
  },
  {
    comune: 'Pavone Canavese',
    provincia: Province.TO,
  },
  {
    comune: 'Pecetto Torinese',
    provincia: Province.TO,
  },
  {
    comune: 'Perosa Argentina',
    provincia: Province.TO,
  },
  {
    comune: 'Perosa Canavese',
    provincia: Province.TO,
  },
  {
    comune: 'Perrero',
    provincia: Province.TO,
  },
  {
    comune: 'Pertusio',
    provincia: Province.TO,
  },
  {
    comune: 'Pessinetto',
    provincia: Province.TO,
  },
  {
    comune: 'Pianezza',
    provincia: Province.TO,
  },
  {
    comune: 'Pinasca',
    provincia: Province.TO,
  },
  {
    comune: 'Pinerolo',
    provincia: Province.TO,
  },
  {
    comune: 'Pino Torinese',
    provincia: Province.TO,
  },
  {
    comune: 'Piobesi Torinese',
    provincia: Province.TO,
  },
  {
    comune: 'Piossasco',
    provincia: Province.TO,
  },
  {
    comune: 'Piscina',
    provincia: Province.TO,
  },
  {
    comune: 'Piverone',
    provincia: Province.TO,
  },
  {
    comune: 'Poirino',
    provincia: Province.TO,
  },
  {
    comune: 'Pomaretto',
    provincia: Province.TO,
  },
  {
    comune: 'Pont Canavese',
    provincia: Province.TO,
  },
  {
    comune: 'Porte',
    provincia: Province.TO,
  },
  {
    comune: 'Pragelato',
    provincia: Province.TO,
  },
  {
    comune: 'Prali',
    provincia: Province.TO,
  },
  {
    comune: 'Pralormo',
    provincia: Province.TO,
  },
  {
    comune: 'Pramollo',
    provincia: Province.TO,
  },
  {
    comune: 'Prarostino',
    provincia: Province.TO,
  },
  {
    comune: 'Prascorsano',
    provincia: Province.TO,
  },
  {
    comune: 'Pratiglione',
    provincia: Province.TO,
  },
  {
    comune: 'Quagliuzzo',
    provincia: Province.TO,
  },
  {
    comune: 'Quassolo',
    provincia: Province.TO,
  },
  {
    comune: 'Quincinetto',
    provincia: Province.TO,
  },
  {
    comune: 'Reano',
    provincia: Province.TO,
  },
  {
    comune: 'Ribordone',
    provincia: Province.TO,
  },
  {
    comune: 'Rivalba',
    provincia: Province.TO,
  },
  {
    comune: 'Rivalta di Torino',
    provincia: Province.TO,
  },
  {
    comune: 'Riva presso Chieri',
    provincia: Province.TO,
  },
  {
    comune: 'Rivara',
    provincia: Province.TO,
  },
  {
    comune: 'Rivarolo Canavese',
    provincia: Province.TO,
  },
  {
    comune: 'Rivarossa',
    provincia: Province.TO,
  },
  {
    comune: 'Rivoli',
    provincia: Province.TO,
  },
  {
    comune: 'Robassomero',
    provincia: Province.TO,
  },
  {
    comune: 'Rocca Canavese',
    provincia: Province.TO,
  },
  {
    comune: 'Roletto',
    provincia: Province.TO,
  },
  {
    comune: 'Romano Canavese',
    provincia: Province.TO,
  },
  {
    comune: 'Ronco Canavese',
    provincia: Province.TO,
  },
  {
    comune: 'Rondissone',
    provincia: Province.TO,
  },
  {
    comune: 'Rorà',
    provincia: Province.TO,
  },
  {
    comune: 'Roure',
    provincia: Province.TO,
  },
  {
    comune: 'Rosta',
    provincia: Province.TO,
  },
  {
    comune: 'Rubiana',
    provincia: Province.TO,
  },
  {
    comune: 'Rueglio',
    provincia: Province.TO,
  },
  {
    comune: 'Salassa',
    provincia: Province.TO,
  },
  {
    comune: 'Salbertrand',
    provincia: Province.TO,
  },
  {
    comune: 'Salerano Canavese',
    provincia: Province.TO,
  },
  {
    comune: 'Salza di Pinerolo',
    provincia: Province.TO,
  },
  {
    comune: 'Samone',
    provincia: Province.TO,
  },
  {
    comune: 'San Benigno Canavese',
    provincia: Province.TO,
  },
  {
    comune: 'San Carlo Canavese',
    provincia: Province.TO,
  },
  {
    comune: 'San Colombano Belmonte',
    provincia: Province.TO,
  },
  {
    comune: 'San Didero',
    provincia: Province.TO,
  },
  {
    comune: 'San Francesco al Campo',
    provincia: Province.TO,
  },
  {
    comune: 'Sangano',
    provincia: Province.TO,
  },
  {
    comune: 'San Germano Chisone',
    provincia: Province.TO,
  },
  {
    comune: 'San Gillio',
    provincia: Province.TO,
  },
  {
    comune: 'San Giorgio Canavese',
    provincia: Province.TO,
  },
  {
    comune: 'San Giorio di Susa',
    provincia: Province.TO,
  },
  {
    comune: 'San Giusto Canavese',
    provincia: Province.TO,
  },
  {
    comune: 'San Martino Canavese',
    provincia: Province.TO,
  },
  {
    comune: 'San Maurizio Canavese',
    provincia: Province.TO,
  },
  {
    comune: 'San Mauro Torinese',
    provincia: Province.TO,
  },
  {
    comune: 'San Pietro Val Lemina',
    provincia: Province.TO,
  },
  {
    comune: 'San Ponso',
    provincia: Province.TO,
  },
  {
    comune: 'San Raffaele Cimena',
    provincia: Province.TO,
  },
  {
    comune: 'San Sebastiano da Po',
    provincia: Province.TO,
  },
  {
    comune: 'San Secondo di Pinerolo',
    provincia: Province.TO,
  },
  {
    comune: "Sant'Ambrogio di Torino",
    provincia: Province.TO,
  },
  {
    comune: "Sant'Antonino di Susa",
    provincia: Province.TO,
  },
  {
    comune: 'Santena',
    provincia: Province.TO,
  },
  {
    comune: 'Sauze di Cesana',
    provincia: Province.TO,
  },
  {
    comune: "Sauze d'Oulx",
    provincia: Province.TO,
  },
  {
    comune: 'Scalenghe',
    provincia: Province.TO,
  },
  {
    comune: 'Scarmagno',
    provincia: Province.TO,
  },
  {
    comune: 'Sciolze',
    provincia: Province.TO,
  },
  {
    comune: 'Sestriere',
    provincia: Province.TO,
  },
  {
    comune: 'Settimo Rottaro',
    provincia: Province.TO,
  },
  {
    comune: 'Settimo Torinese',
    provincia: Province.TO,
  },
  {
    comune: 'Settimo Vittone',
    provincia: Province.TO,
  },
  {
    comune: 'Sparone',
    provincia: Province.TO,
  },
  {
    comune: 'Strambinello',
    provincia: Province.TO,
  },
  {
    comune: 'Strambino',
    provincia: Province.TO,
  },
  {
    comune: 'Susa',
    provincia: Province.TO,
  },
  {
    comune: 'Tavagnasco',
    provincia: Province.TO,
  },
  {
    comune: 'Torino',
    provincia: Province.TO,
  },
  {
    comune: 'Torrazza Piemonte',
    provincia: Province.TO,
  },
  {
    comune: 'Torre Canavese',
    provincia: Province.TO,
  },
  {
    comune: 'Torre Pellice',
    provincia: Province.TO,
  },
  {
    comune: 'Trana',
    provincia: Province.TO,
  },
  {
    comune: 'Traversella',
    provincia: Province.TO,
  },
  {
    comune: 'Traves',
    provincia: Province.TO,
  },
  {
    comune: 'Trofarello',
    provincia: Province.TO,
  },
  {
    comune: 'Usseaux',
    provincia: Province.TO,
  },
  {
    comune: 'Usseglio',
    provincia: Province.TO,
  },
  {
    comune: 'Vaie',
    provincia: Province.TO,
  },
  {
    comune: 'Val della Torre',
    provincia: Province.TO,
  },
  {
    comune: 'Valgioie',
    provincia: Province.TO,
  },
  {
    comune: 'Vallo Torinese',
    provincia: Province.TO,
  },
  {
    comune: 'Valperga',
    provincia: Province.TO,
  },
  {
    comune: 'Valprato Soana',
    provincia: Province.TO,
  },
  {
    comune: 'Varisella',
    provincia: Province.TO,
  },
  {
    comune: 'Vauda Canavese',
    provincia: Province.TO,
  },
  {
    comune: 'Venaus',
    provincia: Province.TO,
  },
  {
    comune: 'Venaria Reale',
    provincia: Province.TO,
  },
  {
    comune: 'Verolengo',
    provincia: Province.TO,
  },
  {
    comune: 'Verrua Savoia',
    provincia: Province.TO,
  },
  {
    comune: 'Vestignè',
    provincia: Province.TO,
  },
  {
    comune: 'Vialfrè',
    provincia: Province.TO,
  },
  {
    comune: 'Vidracco',
    provincia: Province.TO,
  },
  {
    comune: 'Vigone',
    provincia: Province.TO,
  },
  {
    comune: 'Villafranca Piemonte',
    provincia: Province.TO,
  },
  {
    comune: 'Villanova Canavese',
    provincia: Province.TO,
  },
  {
    comune: 'Villarbasse',
    provincia: Province.TO,
  },
  {
    comune: 'Villar Dora',
    provincia: Province.TO,
  },
  {
    comune: 'Villareggia',
    provincia: Province.TO,
  },
  {
    comune: 'Villar Focchiardo',
    provincia: Province.TO,
  },
  {
    comune: 'Villar Pellice',
    provincia: Province.TO,
  },
  {
    comune: 'Villar Perosa',
    provincia: Province.TO,
  },
  {
    comune: 'Villastellone',
    provincia: Province.TO,
  },
  {
    comune: 'Vinovo',
    provincia: Province.TO,
  },
  {
    comune: 'Virle Piemonte',
    provincia: Province.TO,
  },
  {
    comune: 'Vische',
    provincia: Province.TO,
  },
  {
    comune: 'Vistrorio',
    provincia: Province.TO,
  },
  {
    comune: 'Viù',
    provincia: Province.TO,
  },
  {
    comune: 'Volpiano',
    provincia: Province.TO,
  },
  {
    comune: 'Volvera',
    provincia: Province.TO,
  },
  {
    comune: 'Mappano',
    provincia: Province.TO,
  },
  {
    comune: 'Val di Chy',
    provincia: Province.TO,
  },
  {
    comune: 'Valchiusa',
    provincia: Province.TO,
  },
  {
    comune: 'Alagna Valsesia',
    provincia: Province.VC,
  },
  {
    comune: 'Albano Vercellese',
    provincia: Province.VC,
  },
  {
    comune: 'Alice Castello',
    provincia: Province.VC,
  },
  {
    comune: 'Arborio',
    provincia: Province.VC,
  },
  {
    comune: 'Asigliano Vercellese',
    provincia: Province.VC,
  },
  {
    comune: 'Balmuccia',
    provincia: Province.VC,
  },
  {
    comune: 'Balocco',
    provincia: Province.VC,
  },
  {
    comune: 'Bianzè',
    provincia: Province.VC,
  },
  {
    comune: 'Boccioleto',
    provincia: Province.VC,
  },
  {
    comune: "Borgo d'Ale",
    provincia: Province.VC,
  },
  {
    comune: 'Borgosesia',
    provincia: Province.VC,
  },
  {
    comune: 'Borgo Vercelli',
    provincia: Province.VC,
  },
  {
    comune: 'Buronzo',
    provincia: Province.VC,
  },
  {
    comune: 'Campertogno',
    provincia: Province.VC,
  },
  {
    comune: 'Carcoforo',
    provincia: Province.VC,
  },
  {
    comune: 'Caresana',
    provincia: Province.VC,
  },
  {
    comune: 'Caresanablot',
    provincia: Province.VC,
  },
  {
    comune: 'Carisio',
    provincia: Province.VC,
  },
  {
    comune: 'Casanova Elvo',
    provincia: Province.VC,
  },
  {
    comune: 'San Giacomo Vercellese',
    provincia: Province.VC,
  },
  {
    comune: 'Cervatto',
    provincia: Province.VC,
  },
  {
    comune: 'Cigliano',
    provincia: Province.VC,
  },
  {
    comune: 'Civiasco',
    provincia: Province.VC,
  },
  {
    comune: 'Collobiano',
    provincia: Province.VC,
  },
  {
    comune: 'Costanzana',
    provincia: Province.VC,
  },
  {
    comune: 'Cravagliana',
    provincia: Province.VC,
  },
  {
    comune: 'Crescentino',
    provincia: Province.VC,
  },
  {
    comune: 'Crova',
    provincia: Province.VC,
  },
  {
    comune: 'Desana',
    provincia: Province.VC,
  },
  {
    comune: 'Fobello',
    provincia: Province.VC,
  },
  {
    comune: 'Fontanetto Po',
    provincia: Province.VC,
  },
  {
    comune: 'Formigliana',
    provincia: Province.VC,
  },
  {
    comune: 'Gattinara',
    provincia: Province.VC,
  },
  {
    comune: 'Ghislarengo',
    provincia: Province.VC,
  },
  {
    comune: 'Greggio',
    provincia: Province.VC,
  },
  {
    comune: 'Guardabosone',
    provincia: Province.VC,
  },
  {
    comune: 'Lamporo',
    provincia: Province.VC,
  },
  {
    comune: 'Lenta',
    provincia: Province.VC,
  },
  {
    comune: 'Lignana',
    provincia: Province.VC,
  },
  {
    comune: 'Livorno Ferraris',
    provincia: Province.VC,
  },
  {
    comune: 'Lozzolo',
    provincia: Province.VC,
  },
  {
    comune: 'Mollia',
    provincia: Province.VC,
  },
  {
    comune: 'Moncrivello',
    provincia: Province.VC,
  },
  {
    comune: "Motta de' Conti",
    provincia: Province.VC,
  },
  {
    comune: 'Olcenengo',
    provincia: Province.VC,
  },
  {
    comune: 'Oldenico',
    provincia: Province.VC,
  },
  {
    comune: 'Palazzolo Vercellese',
    provincia: Province.VC,
  },
  {
    comune: 'Pertengo',
    provincia: Province.VC,
  },
  {
    comune: 'Pezzana',
    provincia: Province.VC,
  },
  {
    comune: 'Pila',
    provincia: Province.VC,
  },
  {
    comune: 'Piode',
    provincia: Province.VC,
  },
  {
    comune: 'Postua',
    provincia: Province.VC,
  },
  {
    comune: 'Prarolo',
    provincia: Province.VC,
  },
  {
    comune: 'Quarona',
    provincia: Province.VC,
  },
  {
    comune: 'Quinto Vercellese',
    provincia: Province.VC,
  },
  {
    comune: 'Rassa',
    provincia: Province.VC,
  },
  {
    comune: 'Rimella',
    provincia: Province.VC,
  },
  {
    comune: 'Rive',
    provincia: Province.VC,
  },
  {
    comune: 'Roasio',
    provincia: Province.VC,
  },
  {
    comune: 'Ronsecco',
    provincia: Province.VC,
  },
  {
    comune: 'Rossa',
    provincia: Province.VC,
  },
  {
    comune: 'Rovasenda',
    provincia: Province.VC,
  },
  {
    comune: 'Salasco',
    provincia: Province.VC,
  },
  {
    comune: 'Sali Vercellese',
    provincia: Province.VC,
  },
  {
    comune: 'Saluggia',
    provincia: Province.VC,
  },
  {
    comune: 'San Germano Vercellese',
    provincia: Province.VC,
  },
  {
    comune: 'Santhià',
    provincia: Province.VC,
  },
  {
    comune: 'Scopa',
    provincia: Province.VC,
  },
  {
    comune: 'Scopello',
    provincia: Province.VC,
  },
  {
    comune: 'Serravalle Sesia',
    provincia: Province.VC,
  },
  {
    comune: 'Stroppiana',
    provincia: Province.VC,
  },
  {
    comune: 'Tricerro',
    provincia: Province.VC,
  },
  {
    comune: 'Trino',
    provincia: Province.VC,
  },
  {
    comune: 'Tronzano Vercellese',
    provincia: Province.VC,
  },
  {
    comune: 'Valduggia',
    provincia: Province.VC,
  },
  {
    comune: 'Varallo',
    provincia: Province.VC,
  },
  {
    comune: 'Vercelli',
    provincia: Province.VC,
  },
  {
    comune: 'Villarboit',
    provincia: Province.VC,
  },
  {
    comune: 'Villata',
    provincia: Province.VC,
  },
  {
    comune: 'Vocca',
    provincia: Province.VC,
  },
  {
    comune: 'Alto Sermenza',
    provincia: Province.VC,
  },
  {
    comune: 'Cellio con Breia',
    provincia: Province.VC,
  },
  {
    comune: 'Agrate Conturbia',
    provincia: Province.NO,
  },
  {
    comune: 'Ameno',
    provincia: Province.NO,
  },
  {
    comune: 'Armeno',
    provincia: Province.NO,
  },
  {
    comune: 'Arona',
    provincia: Province.NO,
  },
  {
    comune: 'Barengo',
    provincia: Province.NO,
  },
  {
    comune: 'Bellinzago Novarese',
    provincia: Province.NO,
  },
  {
    comune: 'Biandrate',
    provincia: Province.NO,
  },
  {
    comune: 'Boca',
    provincia: Province.NO,
  },
  {
    comune: 'Bogogno',
    provincia: Province.NO,
  },
  {
    comune: 'Bolzano Novarese',
    provincia: Province.NO,
  },
  {
    comune: 'Borgolavezzaro',
    provincia: Province.NO,
  },
  {
    comune: 'Borgomanero',
    provincia: Province.NO,
  },
  {
    comune: 'Borgo Ticino',
    provincia: Province.NO,
  },
  {
    comune: 'Briga Novarese',
    provincia: Province.NO,
  },
  {
    comune: 'Briona',
    provincia: Province.NO,
  },
  {
    comune: 'Caltignaga',
    provincia: Province.NO,
  },
  {
    comune: 'Cameri',
    provincia: Province.NO,
  },
  {
    comune: 'Carpignano Sesia',
    provincia: Province.NO,
  },
  {
    comune: 'Casalbeltrame',
    provincia: Province.NO,
  },
  {
    comune: 'Casaleggio Novara',
    provincia: Province.NO,
  },
  {
    comune: 'Casalino',
    provincia: Province.NO,
  },
  {
    comune: 'Casalvolone',
    provincia: Province.NO,
  },
  {
    comune: 'Castellazzo Novarese',
    provincia: Province.NO,
  },
  {
    comune: 'Castelletto sopra Ticino',
    provincia: Province.NO,
  },
  {
    comune: 'Cavaglietto',
    provincia: Province.NO,
  },
  {
    comune: "Cavaglio d'Agogna",
    provincia: Province.NO,
  },
  {
    comune: 'Cavallirio',
    provincia: Province.NO,
  },
  {
    comune: 'Cerano',
    provincia: Province.NO,
  },
  {
    comune: 'Colazza',
    provincia: Province.NO,
  },
  {
    comune: 'Comignago',
    provincia: Province.NO,
  },
  {
    comune: 'Cressa',
    provincia: Province.NO,
  },
  {
    comune: 'Cureggio',
    provincia: Province.NO,
  },
  {
    comune: 'Divignano',
    provincia: Province.NO,
  },
  {
    comune: 'Dormelletto',
    provincia: Province.NO,
  },
  {
    comune: 'Fara Novarese',
    provincia: Province.NO,
  },
  {
    comune: "Fontaneto d'Agogna",
    provincia: Province.NO,
  },
  {
    comune: 'Galliate',
    provincia: Province.NO,
  },
  {
    comune: 'Garbagna Novarese',
    provincia: Province.NO,
  },
  {
    comune: 'Gargallo',
    provincia: Province.NO,
  },
  {
    comune: 'Ghemme',
    provincia: Province.NO,
  },
  {
    comune: 'Gozzano',
    provincia: Province.NO,
  },
  {
    comune: 'Granozzo con Monticello',
    provincia: Province.NO,
  },
  {
    comune: 'Grignasco',
    provincia: Province.NO,
  },
  {
    comune: 'Invorio',
    provincia: Province.NO,
  },
  {
    comune: 'Landiona',
    provincia: Province.NO,
  },
  {
    comune: 'Lesa',
    provincia: Province.NO,
  },
  {
    comune: 'Maggiora',
    provincia: Province.NO,
  },
  {
    comune: 'Mandello Vitta',
    provincia: Province.NO,
  },
  {
    comune: 'Marano Ticino',
    provincia: Province.NO,
  },
  {
    comune: 'Massino Visconti',
    provincia: Province.NO,
  },
  {
    comune: 'Meina',
    provincia: Province.NO,
  },
  {
    comune: 'Mezzomerico',
    provincia: Province.NO,
  },
  {
    comune: 'Miasino',
    provincia: Province.NO,
  },
  {
    comune: 'Momo',
    provincia: Province.NO,
  },
  {
    comune: 'Nebbiuno',
    provincia: Province.NO,
  },
  {
    comune: 'Nibbiola',
    provincia: Province.NO,
  },
  {
    comune: 'Novara',
    provincia: Province.NO,
  },
  {
    comune: 'Oleggio',
    provincia: Province.NO,
  },
  {
    comune: 'Oleggio Castello',
    provincia: Province.NO,
  },
  {
    comune: 'Orta San Giulio',
    provincia: Province.NO,
  },
  {
    comune: 'Paruzzaro',
    provincia: Province.NO,
  },
  {
    comune: 'Pella',
    provincia: Province.NO,
  },
  {
    comune: 'Pettenasco',
    provincia: Province.NO,
  },
  {
    comune: 'Pisano',
    provincia: Province.NO,
  },
  {
    comune: 'Pogno',
    provincia: Province.NO,
  },
  {
    comune: 'Pombia',
    provincia: Province.NO,
  },
  {
    comune: 'Prato Sesia',
    provincia: Province.NO,
  },
  {
    comune: 'Recetto',
    provincia: Province.NO,
  },
  {
    comune: 'Romagnano Sesia',
    provincia: Province.NO,
  },
  {
    comune: 'Romentino',
    provincia: Province.NO,
  },
  {
    comune: "San Maurizio d'Opaglio",
    provincia: Province.NO,
  },
  {
    comune: 'San Nazzaro Sesia',
    provincia: Province.NO,
  },
  {
    comune: 'San Pietro Mosezzo',
    provincia: Province.NO,
  },
  {
    comune: 'Sillavengo',
    provincia: Province.NO,
  },
  {
    comune: 'Sizzano',
    provincia: Province.NO,
  },
  {
    comune: 'Soriso',
    provincia: Province.NO,
  },
  {
    comune: 'Sozzago',
    provincia: Province.NO,
  },
  {
    comune: 'Suno',
    provincia: Province.NO,
  },
  {
    comune: 'Terdobbiate',
    provincia: Province.NO,
  },
  {
    comune: 'Tornaco',
    provincia: Province.NO,
  },
  {
    comune: 'Trecate',
    provincia: Province.NO,
  },
  {
    comune: "Vaprio d'Agogna",
    provincia: Province.NO,
  },
  {
    comune: 'Varallo Pombia',
    provincia: Province.NO,
  },
  {
    comune: 'Vespolate',
    provincia: Province.NO,
  },
  {
    comune: 'Vicolungo',
    provincia: Province.NO,
  },
  {
    comune: 'Vinzaglio',
    provincia: Province.NO,
  },
  {
    comune: 'Gattico-Veruno',
    provincia: Province.NO,
  },
  {
    comune: 'Acceglio',
    provincia: Province.CN,
  },
  {
    comune: 'Aisone',
    provincia: Province.CN,
  },
  {
    comune: 'Alba',
    provincia: Province.CN,
  },
  {
    comune: 'Albaretto della Torre',
    provincia: Province.CN,
  },
  {
    comune: 'Alto',
    provincia: Province.CN,
  },
  {
    comune: 'Argentera',
    provincia: Province.CN,
  },
  {
    comune: 'Arguello',
    provincia: Province.CN,
  },
  {
    comune: 'Bagnasco',
    provincia: Province.CN,
  },
  {
    comune: 'Bagnolo Piemonte',
    provincia: Province.CN,
  },
  {
    comune: "Baldissero d'Alba",
    provincia: Province.CN,
  },
  {
    comune: 'Barbaresco',
    provincia: Province.CN,
  },
  {
    comune: 'Barge',
    provincia: Province.CN,
  },
  {
    comune: 'Barolo',
    provincia: Province.CN,
  },
  {
    comune: 'Bastia Mondovì',
    provincia: Province.CN,
  },
  {
    comune: 'Battifollo',
    provincia: Province.CN,
  },
  {
    comune: 'Beinette',
    provincia: Province.CN,
  },
  {
    comune: 'Bellino',
    provincia: Province.CN,
  },
  {
    comune: 'Belvedere Langhe',
    provincia: Province.CN,
  },
  {
    comune: 'Bene Vagienna',
    provincia: Province.CN,
  },
  {
    comune: 'Benevello',
    provincia: Province.CN,
  },
  {
    comune: 'Bergolo',
    provincia: Province.CN,
  },
  {
    comune: 'Bernezzo',
    provincia: Province.CN,
  },
  {
    comune: 'Bonvicino',
    provincia: Province.CN,
  },
  {
    comune: 'Borgomale',
    provincia: Province.CN,
  },
  {
    comune: 'Borgo San Dalmazzo',
    provincia: Province.CN,
  },
  {
    comune: 'Bosia',
    provincia: Province.CN,
  },
  {
    comune: 'Bossolasco',
    provincia: Province.CN,
  },
  {
    comune: 'Boves',
    provincia: Province.CN,
  },
  {
    comune: 'Bra',
    provincia: Province.CN,
  },
  {
    comune: 'Briaglia',
    provincia: Province.CN,
  },
  {
    comune: 'Briga Alta',
    provincia: Province.CN,
  },
  {
    comune: 'Brondello',
    provincia: Province.CN,
  },
  {
    comune: 'Brossasco',
    provincia: Province.CN,
  },
  {
    comune: 'Busca',
    provincia: Province.CN,
  },
  {
    comune: 'Camerana',
    provincia: Province.CN,
  },
  {
    comune: 'Canale',
    provincia: Province.CN,
  },
  {
    comune: 'Canosio',
    provincia: Province.CN,
  },
  {
    comune: 'Caprauna',
    provincia: Province.CN,
  },
  {
    comune: 'Caraglio',
    provincia: Province.CN,
  },
  {
    comune: 'Caramagna Piemonte',
    provincia: Province.CN,
  },
  {
    comune: 'Cardè',
    provincia: Province.CN,
  },
  {
    comune: 'Carrù',
    provincia: Province.CN,
  },
  {
    comune: 'Cartignano',
    provincia: Province.CN,
  },
  {
    comune: 'Casalgrasso',
    provincia: Province.CN,
  },
  {
    comune: 'Castagnito',
    provincia: Province.CN,
  },
  {
    comune: 'Casteldelfino',
    provincia: Province.CN,
  },
  {
    comune: 'Castelletto Stura',
    provincia: Province.CN,
  },
  {
    comune: 'Castelletto Uzzone',
    provincia: Province.CN,
  },
  {
    comune: "Castellinaldo d'Alba",
    provincia: Province.CN,
  },
  {
    comune: 'Castellino Tanaro',
    provincia: Province.CN,
  },
  {
    comune: 'Castelmagno',
    provincia: Province.CN,
  },
  {
    comune: 'Castelnuovo di Ceva',
    provincia: Province.CN,
  },
  {
    comune: 'Castiglione Falletto',
    provincia: Province.CN,
  },
  {
    comune: 'Castiglione Tinella',
    provincia: Province.CN,
  },
  {
    comune: 'Castino',
    provincia: Province.CN,
  },
  {
    comune: 'Cavallerleone',
    provincia: Province.CN,
  },
  {
    comune: 'Cavallermaggiore',
    provincia: Province.CN,
  },
  {
    comune: 'Celle di Macra',
    provincia: Province.CN,
  },
  {
    comune: 'Centallo',
    provincia: Province.CN,
  },
  {
    comune: 'Ceresole Alba',
    provincia: Province.CN,
  },
  {
    comune: 'Cerretto Langhe',
    provincia: Province.CN,
  },
  {
    comune: 'Cervasca',
    provincia: Province.CN,
  },
  {
    comune: 'Cervere',
    provincia: Province.CN,
  },
  {
    comune: 'Ceva',
    provincia: Province.CN,
  },
  {
    comune: 'Cherasco',
    provincia: Province.CN,
  },
  {
    comune: 'Chiusa di Pesio',
    provincia: Province.CN,
  },
  {
    comune: 'Cigliè',
    provincia: Province.CN,
  },
  {
    comune: 'Cissone',
    provincia: Province.CN,
  },
  {
    comune: 'Clavesana',
    provincia: Province.CN,
  },
  {
    comune: "Corneliano d'Alba",
    provincia: Province.CN,
  },
  {
    comune: 'Cortemilia',
    provincia: Province.CN,
  },
  {
    comune: 'Cossano Belbo',
    provincia: Province.CN,
  },
  {
    comune: 'Costigliole Saluzzo',
    provincia: Province.CN,
  },
  {
    comune: 'Cravanzana',
    provincia: Province.CN,
  },
  {
    comune: 'Crissolo',
    provincia: Province.CN,
  },
  {
    comune: 'Cuneo',
    provincia: Province.CN,
  },
  {
    comune: 'Demonte',
    provincia: Province.CN,
  },
  {
    comune: "Diano d'Alba",
    provincia: Province.CN,
  },
  {
    comune: 'Dogliani',
    provincia: Province.CN,
  },
  {
    comune: 'Dronero',
    provincia: Province.CN,
  },
  {
    comune: 'Elva',
    provincia: Province.CN,
  },
  {
    comune: 'Entracque',
    provincia: Province.CN,
  },
  {
    comune: 'Envie',
    provincia: Province.CN,
  },
  {
    comune: 'Farigliano',
    provincia: Province.CN,
  },
  {
    comune: 'Faule',
    provincia: Province.CN,
  },
  {
    comune: 'Feisoglio',
    provincia: Province.CN,
  },
  {
    comune: 'Fossano',
    provincia: Province.CN,
  },
  {
    comune: 'Frabosa Soprana',
    provincia: Province.CN,
  },
  {
    comune: 'Frabosa Sottana',
    provincia: Province.CN,
  },
  {
    comune: 'Frassino',
    provincia: Province.CN,
  },
  {
    comune: 'Gaiola',
    provincia: Province.CN,
  },
  {
    comune: 'Gambasca',
    provincia: Province.CN,
  },
  {
    comune: 'Garessio',
    provincia: Province.CN,
  },
  {
    comune: 'Genola',
    provincia: Province.CN,
  },
  {
    comune: 'Gorzegno',
    provincia: Province.CN,
  },
  {
    comune: 'Gottasecca',
    provincia: Province.CN,
  },
  {
    comune: 'Govone',
    provincia: Province.CN,
  },
  {
    comune: 'Grinzane Cavour',
    provincia: Province.CN,
  },
  {
    comune: 'Guarene',
    provincia: Province.CN,
  },
  {
    comune: 'Igliano',
    provincia: Province.CN,
  },
  {
    comune: 'Isasca',
    provincia: Province.CN,
  },
  {
    comune: 'Lagnasco',
    provincia: Province.CN,
  },
  {
    comune: 'La Morra',
    provincia: Province.CN,
  },
  {
    comune: 'Lequio Berria',
    provincia: Province.CN,
  },
  {
    comune: 'Lequio Tanaro',
    provincia: Province.CN,
  },
  {
    comune: 'Lesegno',
    provincia: Province.CN,
  },
  {
    comune: 'Levice',
    provincia: Province.CN,
  },
  {
    comune: 'Limone Piemonte',
    provincia: Province.CN,
  },
  {
    comune: 'Lisio',
    provincia: Province.CN,
  },
  {
    comune: 'Macra',
    provincia: Province.CN,
  },
  {
    comune: 'Magliano Alfieri',
    provincia: Province.CN,
  },
  {
    comune: 'Magliano Alpi',
    provincia: Province.CN,
  },
  {
    comune: 'Mango',
    provincia: Province.CN,
  },
  {
    comune: 'Manta',
    provincia: Province.CN,
  },
  {
    comune: 'Marene',
    provincia: Province.CN,
  },
  {
    comune: 'Margarita',
    provincia: Province.CN,
  },
  {
    comune: 'Marmora',
    provincia: Province.CN,
  },
  {
    comune: 'Marsaglia',
    provincia: Province.CN,
  },
  {
    comune: 'Martiniana Po',
    provincia: Province.CN,
  },
  {
    comune: 'Melle',
    provincia: Province.CN,
  },
  {
    comune: 'Moiola',
    provincia: Province.CN,
  },
  {
    comune: 'Mombarcaro',
    provincia: Province.CN,
  },
  {
    comune: 'Mombasiglio',
    provincia: Province.CN,
  },
  {
    comune: 'Monastero di Vasco',
    provincia: Province.CN,
  },
  {
    comune: 'Monasterolo Casotto',
    provincia: Province.CN,
  },
  {
    comune: 'Monasterolo di Savigliano',
    provincia: Province.CN,
  },
  {
    comune: 'Monchiero',
    provincia: Province.CN,
  },
  {
    comune: 'Mondovì',
    provincia: Province.CN,
  },
  {
    comune: 'Monesiglio',
    provincia: Province.CN,
  },
  {
    comune: "Monforte d'Alba",
    provincia: Province.CN,
  },
  {
    comune: 'Montà',
    provincia: Province.CN,
  },
  {
    comune: 'Montaldo di Mondovì',
    provincia: Province.CN,
  },
  {
    comune: 'Montaldo Roero',
    provincia: Province.CN,
  },
  {
    comune: 'Montanera',
    provincia: Province.CN,
  },
  {
    comune: 'Montelupo Albese',
    provincia: Province.CN,
  },
  {
    comune: 'Montemale di Cuneo',
    provincia: Province.CN,
  },
  {
    comune: 'Monterosso Grana',
    provincia: Province.CN,
  },
  {
    comune: 'Monteu Roero',
    provincia: Province.CN,
  },
  {
    comune: 'Montezemolo',
    provincia: Province.CN,
  },
  {
    comune: "Monticello d'Alba",
    provincia: Province.CN,
  },
  {
    comune: 'Moretta',
    provincia: Province.CN,
  },
  {
    comune: 'Morozzo',
    provincia: Province.CN,
  },
  {
    comune: 'Murazzano',
    provincia: Province.CN,
  },
  {
    comune: 'Murello',
    provincia: Province.CN,
  },
  {
    comune: 'Narzole',
    provincia: Province.CN,
  },
  {
    comune: 'Neive',
    provincia: Province.CN,
  },
  {
    comune: 'Neviglie',
    provincia: Province.CN,
  },
  {
    comune: 'Niella Belbo',
    provincia: Province.CN,
  },
  {
    comune: 'Niella Tanaro',
    provincia: Province.CN,
  },
  {
    comune: 'Novello',
    provincia: Province.CN,
  },
  {
    comune: 'Nucetto',
    provincia: Province.CN,
  },
  {
    comune: 'Oncino',
    provincia: Province.CN,
  },
  {
    comune: 'Ormea',
    provincia: Province.CN,
  },
  {
    comune: 'Ostana',
    provincia: Province.CN,
  },
  {
    comune: 'Paesana',
    provincia: Province.CN,
  },
  {
    comune: 'Pagno',
    provincia: Province.CN,
  },
  {
    comune: 'Pamparato',
    provincia: Province.CN,
  },
  {
    comune: 'Paroldo',
    provincia: Province.CN,
  },
  {
    comune: 'Perletto',
    provincia: Province.CN,
  },
  {
    comune: 'Perlo',
    provincia: Province.CN,
  },
  {
    comune: 'Peveragno',
    provincia: Province.CN,
  },
  {
    comune: 'Pezzolo Valle Uzzone',
    provincia: Province.CN,
  },
  {
    comune: 'Pianfei',
    provincia: Province.CN,
  },
  {
    comune: 'Piasco',
    provincia: Province.CN,
  },
  {
    comune: 'Pietraporzio',
    provincia: Province.CN,
  },
  {
    comune: "Piobesi d'Alba",
    provincia: Province.CN,
  },
  {
    comune: 'Piozzo',
    provincia: Province.CN,
  },
  {
    comune: 'Pocapaglia',
    provincia: Province.CN,
  },
  {
    comune: 'Polonghera',
    provincia: Province.CN,
  },
  {
    comune: 'Pontechianale',
    provincia: Province.CN,
  },
  {
    comune: 'Pradleves',
    provincia: Province.CN,
  },
  {
    comune: 'Prazzo',
    provincia: Province.CN,
  },
  {
    comune: 'Priero',
    provincia: Province.CN,
  },
  {
    comune: 'Priocca',
    provincia: Province.CN,
  },
  {
    comune: 'Priola',
    provincia: Province.CN,
  },
  {
    comune: 'Prunetto',
    provincia: Province.CN,
  },
  {
    comune: 'Racconigi',
    provincia: Province.CN,
  },
  {
    comune: 'Revello',
    provincia: Province.CN,
  },
  {
    comune: 'Rifreddo',
    provincia: Province.CN,
  },
  {
    comune: 'Rittana',
    provincia: Province.CN,
  },
  {
    comune: 'Roaschia',
    provincia: Province.CN,
  },
  {
    comune: 'Roascio',
    provincia: Province.CN,
  },
  {
    comune: 'Robilante',
    provincia: Province.CN,
  },
  {
    comune: 'Roburent',
    provincia: Province.CN,
  },
  {
    comune: 'Roccabruna',
    provincia: Province.CN,
  },
  {
    comune: 'Rocca Cigliè',
    provincia: Province.CN,
  },
  {
    comune: "Rocca de' Baldi",
    provincia: Province.CN,
  },
  {
    comune: 'Roccaforte Mondovì',
    provincia: Province.CN,
  },
  {
    comune: 'Roccasparvera',
    provincia: Province.CN,
  },
  {
    comune: 'Roccavione',
    provincia: Province.CN,
  },
  {
    comune: 'Rocchetta Belbo',
    provincia: Province.CN,
  },
  {
    comune: 'Roddi',
    provincia: Province.CN,
  },
  {
    comune: 'Roddino',
    provincia: Province.CN,
  },
  {
    comune: 'Rodello',
    provincia: Province.CN,
  },
  {
    comune: 'Rossana',
    provincia: Province.CN,
  },
  {
    comune: 'Ruffia',
    provincia: Province.CN,
  },
  {
    comune: 'Sale delle Langhe',
    provincia: Province.CN,
  },
  {
    comune: 'Sale San Giovanni',
    provincia: Province.CN,
  },
  {
    comune: 'Saliceto',
    provincia: Province.CN,
  },
  {
    comune: 'Salmour',
    provincia: Province.CN,
  },
  {
    comune: 'Saluzzo',
    provincia: Province.CN,
  },
  {
    comune: 'Sambuco',
    provincia: Province.CN,
  },
  {
    comune: 'Sampeyre',
    provincia: Province.CN,
  },
  {
    comune: 'San Benedetto Belbo',
    provincia: Province.CN,
  },
  {
    comune: 'San Damiano Macra',
    provincia: Province.CN,
  },
  {
    comune: 'Sanfrè',
    provincia: Province.CN,
  },
  {
    comune: 'Sanfront',
    provincia: Province.CN,
  },
  {
    comune: 'San Michele Mondovì',
    provincia: Province.CN,
  },
  {
    comune: "Sant'Albano Stura",
    provincia: Province.CN,
  },
  {
    comune: "Santa Vittoria d'Alba",
    provincia: Province.CN,
  },
  {
    comune: 'Santo Stefano Belbo',
    provincia: Province.CN,
  },
  {
    comune: 'Santo Stefano Roero',
    provincia: Province.CN,
  },
  {
    comune: 'Savigliano',
    provincia: Province.CN,
  },
  {
    comune: 'Scagnello',
    provincia: Province.CN,
  },
  {
    comune: 'Scarnafigi',
    provincia: Province.CN,
  },
  {
    comune: "Serralunga d'Alba",
    provincia: Province.CN,
  },
  {
    comune: 'Serravalle Langhe',
    provincia: Province.CN,
  },
  {
    comune: 'Sinio',
    provincia: Province.CN,
  },
  {
    comune: 'Somano',
    provincia: Province.CN,
  },
  {
    comune: 'Sommariva del Bosco',
    provincia: Province.CN,
  },
  {
    comune: 'Sommariva Perno',
    provincia: Province.CN,
  },
  {
    comune: 'Stroppo',
    provincia: Province.CN,
  },
  {
    comune: 'Tarantasca',
    provincia: Province.CN,
  },
  {
    comune: 'Torre Bormida',
    provincia: Province.CN,
  },
  {
    comune: 'Torre Mondovì',
    provincia: Province.CN,
  },
  {
    comune: 'Torre San Giorgio',
    provincia: Province.CN,
  },
  {
    comune: 'Torresina',
    provincia: Province.CN,
  },
  {
    comune: 'Treiso',
    provincia: Province.CN,
  },
  {
    comune: 'Trezzo Tinella',
    provincia: Province.CN,
  },
  {
    comune: 'Trinità',
    provincia: Province.CN,
  },
  {
    comune: 'Valdieri',
    provincia: Province.CN,
  },
  {
    comune: 'Valgrana',
    provincia: Province.CN,
  },
  {
    comune: 'Valloriate',
    provincia: Province.CN,
  },
  {
    comune: 'Venasca',
    provincia: Province.CN,
  },
  {
    comune: 'Verduno',
    provincia: Province.CN,
  },
  {
    comune: 'Vernante',
    provincia: Province.CN,
  },
  {
    comune: 'Verzuolo',
    provincia: Province.CN,
  },
  {
    comune: "Vezza d'Alba",
    provincia: Province.CN,
  },
  {
    comune: 'Vicoforte',
    provincia: Province.CN,
  },
  {
    comune: 'Vignolo',
    provincia: Province.CN,
  },
  {
    comune: 'Villafalletto',
    provincia: Province.CN,
  },
  {
    comune: 'Villanova Mondovì',
    provincia: Province.CN,
  },
  {
    comune: 'Villanova Solaro',
    provincia: Province.CN,
  },
  {
    comune: 'Villar San Costanzo',
    provincia: Province.CN,
  },
  {
    comune: 'Vinadio',
    provincia: Province.CN,
  },
  {
    comune: 'Viola',
    provincia: Province.CN,
  },
  {
    comune: 'Vottignasco',
    provincia: Province.CN,
  },
  {
    comune: 'Agliano Terme',
    provincia: Province.AT,
  },
  {
    comune: 'Albugnano',
    provincia: Province.AT,
  },
  {
    comune: 'Antignano',
    provincia: Province.AT,
  },
  {
    comune: 'Aramengo',
    provincia: Province.AT,
  },
  {
    comune: 'Asti',
    provincia: Province.AT,
  },
  {
    comune: "Azzano d'Asti",
    provincia: Province.AT,
  },
  {
    comune: "Baldichieri d'Asti",
    provincia: Province.AT,
  },
  {
    comune: 'Belveglio',
    provincia: Province.AT,
  },
  {
    comune: 'Berzano di San Pietro',
    provincia: Province.AT,
  },
  {
    comune: 'Bruno',
    provincia: Province.AT,
  },
  {
    comune: 'Bubbio',
    provincia: Province.AT,
  },
  {
    comune: "Buttigliera d'Asti",
    provincia: Province.AT,
  },
  {
    comune: 'Calamandrana',
    provincia: Province.AT,
  },
  {
    comune: 'Calliano',
    provincia: Province.AT,
  },
  {
    comune: 'Calosso',
    provincia: Province.AT,
  },
  {
    comune: 'Camerano Casasco',
    provincia: Province.AT,
  },
  {
    comune: 'Canelli',
    provincia: Province.AT,
  },
  {
    comune: 'Cantarana',
    provincia: Province.AT,
  },
  {
    comune: 'Capriglio',
    provincia: Province.AT,
  },
  {
    comune: 'Casorzo',
    provincia: Province.AT,
  },
  {
    comune: 'Cassinasco',
    provincia: Province.AT,
  },
  {
    comune: 'Castagnole delle Lanze',
    provincia: Province.AT,
  },
  {
    comune: 'Castagnole Monferrato',
    provincia: Province.AT,
  },
  {
    comune: 'Castel Boglione',
    provincia: Province.AT,
  },
  {
    comune: "Castell'Alfero",
    provincia: Province.AT,
  },
  {
    comune: 'Castellero',
    provincia: Province.AT,
  },
  {
    comune: 'Castelletto Molina',
    provincia: Province.AT,
  },
  {
    comune: 'Castello di Annone',
    provincia: Province.AT,
  },
  {
    comune: 'Castelnuovo Belbo',
    provincia: Province.AT,
  },
  {
    comune: 'Castelnuovo Calcea',
    provincia: Province.AT,
  },
  {
    comune: 'Castelnuovo Don Bosco',
    provincia: Province.AT,
  },
  {
    comune: 'Castel Rocchero',
    provincia: Province.AT,
  },
  {
    comune: 'Cellarengo',
    provincia: Province.AT,
  },
  {
    comune: 'Celle Enomondo',
    provincia: Province.AT,
  },
  {
    comune: "Cerreto d'Asti",
    provincia: Province.AT,
  },
  {
    comune: 'Cerro Tanaro',
    provincia: Province.AT,
  },
  {
    comune: 'Cessole',
    provincia: Province.AT,
  },
  {
    comune: "Chiusano d'Asti",
    provincia: Province.AT,
  },
  {
    comune: 'Cinaglio',
    provincia: Province.AT,
  },
  {
    comune: "Cisterna d'Asti",
    provincia: Province.AT,
  },
  {
    comune: 'Coazzolo',
    provincia: Province.AT,
  },
  {
    comune: 'Cocconato',
    provincia: Province.AT,
  },
  {
    comune: 'Corsione',
    provincia: Province.AT,
  },
  {
    comune: 'Cortandone',
    provincia: Province.AT,
  },
  {
    comune: 'Cortanze',
    provincia: Province.AT,
  },
  {
    comune: 'Cortazzone',
    provincia: Province.AT,
  },
  {
    comune: 'Cortiglione',
    provincia: Province.AT,
  },
  {
    comune: 'Cossombrato',
    provincia: Province.AT,
  },
  {
    comune: "Costigliole d'Asti",
    provincia: Province.AT,
  },
  {
    comune: 'Cunico',
    provincia: Province.AT,
  },
  {
    comune: 'Dusino San Michele',
    provincia: Province.AT,
  },
  {
    comune: 'Ferrere',
    provincia: Province.AT,
  },
  {
    comune: 'Fontanile',
    provincia: Province.AT,
  },
  {
    comune: 'Frinco',
    provincia: Province.AT,
  },
  {
    comune: 'Grana',
    provincia: Province.AT,
  },
  {
    comune: 'Grazzano Badoglio',
    provincia: Province.AT,
  },
  {
    comune: 'Incisa Scapaccino',
    provincia: Province.AT,
  },
  {
    comune: "Isola d'Asti",
    provincia: Province.AT,
  },
  {
    comune: 'Loazzolo',
    provincia: Province.AT,
  },
  {
    comune: 'Maranzana',
    provincia: Province.AT,
  },
  {
    comune: 'Maretto',
    provincia: Province.AT,
  },
  {
    comune: 'Moasca',
    provincia: Province.AT,
  },
  {
    comune: 'Mombaldone',
    provincia: Province.AT,
  },
  {
    comune: 'Mombaruzzo',
    provincia: Province.AT,
  },
  {
    comune: 'Mombercelli',
    provincia: Province.AT,
  },
  {
    comune: 'Monale',
    provincia: Province.AT,
  },
  {
    comune: 'Monastero Bormida',
    provincia: Province.AT,
  },
  {
    comune: 'Moncalvo',
    provincia: Province.AT,
  },
  {
    comune: 'Moncucco Torinese',
    provincia: Province.AT,
  },
  {
    comune: 'Mongardino',
    provincia: Province.AT,
  },
  {
    comune: 'Montabone',
    provincia: Province.AT,
  },
  {
    comune: 'Montafia',
    provincia: Province.AT,
  },
  {
    comune: 'Montaldo Scarampi',
    provincia: Province.AT,
  },
  {
    comune: "Montechiaro d'Asti",
    provincia: Province.AT,
  },
  {
    comune: "Montegrosso d'Asti",
    provincia: Province.AT,
  },
  {
    comune: 'Montemagno',
    provincia: Province.AT,
  },
  {
    comune: 'Moransengo',
    provincia: Province.AT,
  },
  {
    comune: 'Nizza Monferrato',
    provincia: Province.AT,
  },
  {
    comune: 'Olmo Gentile',
    provincia: Province.AT,
  },
  {
    comune: 'Passerano Marmorito',
    provincia: Province.AT,
  },
  {
    comune: 'Penango',
    provincia: Province.AT,
  },
  {
    comune: 'Piea',
    provincia: Province.AT,
  },
  {
    comune: "Pino d'Asti",
    provincia: Province.AT,
  },
  {
    comune: 'Piovà Massaia',
    provincia: Province.AT,
  },
  {
    comune: 'Portacomaro',
    provincia: Province.AT,
  },
  {
    comune: 'Quaranti',
    provincia: Province.AT,
  },
  {
    comune: 'Refrancore',
    provincia: Province.AT,
  },
  {
    comune: "Revigliasco d'Asti",
    provincia: Province.AT,
  },
  {
    comune: 'Roatto',
    provincia: Province.AT,
  },
  {
    comune: 'Robella',
    provincia: Province.AT,
  },
  {
    comune: "Rocca d'Arazzo",
    provincia: Province.AT,
  },
  {
    comune: 'Roccaverano',
    provincia: Province.AT,
  },
  {
    comune: 'Rocchetta Palafea',
    provincia: Province.AT,
  },
  {
    comune: 'Rocchetta Tanaro',
    provincia: Province.AT,
  },
  {
    comune: "San Damiano d'Asti",
    provincia: Province.AT,
  },
  {
    comune: 'San Giorgio Scarampi',
    provincia: Province.AT,
  },
  {
    comune: 'San Martino Alfieri',
    provincia: Province.AT,
  },
  {
    comune: 'San Marzano Oliveto',
    provincia: Province.AT,
  },
  {
    comune: 'San Paolo Solbrito',
    provincia: Province.AT,
  },
  {
    comune: 'Scurzolengo',
    provincia: Province.AT,
  },
  {
    comune: 'Serole',
    provincia: Province.AT,
  },
  {
    comune: 'Sessame',
    provincia: Province.AT,
  },
  {
    comune: 'Settime',
    provincia: Province.AT,
  },
  {
    comune: 'Soglio',
    provincia: Province.AT,
  },
  {
    comune: 'Tigliole',
    provincia: Province.AT,
  },
  {
    comune: 'Tonco',
    provincia: Province.AT,
  },
  {
    comune: 'Tonengo',
    provincia: Province.AT,
  },
  {
    comune: 'Vaglio Serra',
    provincia: Province.AT,
  },
  {
    comune: 'Valfenera',
    provincia: Province.AT,
  },
  {
    comune: 'Vesime',
    provincia: Province.AT,
  },
  {
    comune: 'Viale',
    provincia: Province.AT,
  },
  {
    comune: 'Viarigi',
    provincia: Province.AT,
  },
  {
    comune: "Vigliano d'Asti",
    provincia: Province.AT,
  },
  {
    comune: "Villafranca d'Asti",
    provincia: Province.AT,
  },
  {
    comune: "Villanova d'Asti",
    provincia: Province.AT,
  },
  {
    comune: 'Villa San Secondo',
    provincia: Province.AT,
  },
  {
    comune: 'Vinchio',
    provincia: Province.AT,
  },
  {
    comune: 'Montiglio Monferrato',
    provincia: Province.AT,
  },
  {
    comune: 'Acqui Terme',
    provincia: Province.AL,
  },
  {
    comune: 'Albera Ligure',
    provincia: Province.AL,
  },
  {
    comune: 'Alessandria',
    provincia: Province.AL,
  },
  {
    comune: 'Alfiano Natta',
    provincia: Province.AL,
  },
  {
    comune: 'Alice Bel Colle',
    provincia: Province.AL,
  },
  {
    comune: 'Altavilla Monferrato',
    provincia: Province.AL,
  },
  {
    comune: 'Alzano Scrivia',
    provincia: Province.AL,
  },
  {
    comune: 'Arquata Scrivia',
    provincia: Province.AL,
  },
  {
    comune: 'Avolasca',
    provincia: Province.AL,
  },
  {
    comune: 'Balzola',
    provincia: Province.AL,
  },
  {
    comune: 'Basaluzzo',
    provincia: Province.AL,
  },
  {
    comune: 'Bassignana',
    provincia: Province.AL,
  },
  {
    comune: 'Belforte Monferrato',
    provincia: Province.AL,
  },
  {
    comune: 'Bergamasco',
    provincia: Province.AL,
  },
  {
    comune: 'Berzano di Tortona',
    provincia: Province.AL,
  },
  {
    comune: 'Bistagno',
    provincia: Province.AL,
  },
  {
    comune: 'Borghetto di Borbera',
    provincia: Province.AL,
  },
  {
    comune: 'Borgoratto Alessandrino',
    provincia: Province.AL,
  },
  {
    comune: 'Borgo San Martino',
    provincia: Province.AL,
  },
  {
    comune: 'Bosco Marengo',
    provincia: Province.AL,
  },
  {
    comune: 'Bosio',
    provincia: Province.AL,
  },
  {
    comune: 'Bozzole',
    provincia: Province.AL,
  },
  {
    comune: 'Brignano-Frascata',
    provincia: Province.AL,
  },
  {
    comune: 'Cabella Ligure',
    provincia: Province.AL,
  },
  {
    comune: 'Camagna Monferrato',
    provincia: Province.AL,
  },
  {
    comune: 'Camino',
    provincia: Province.AL,
  },
  {
    comune: 'Cantalupo Ligure',
    provincia: Province.AL,
  },
  {
    comune: "Capriata d'Orba",
    provincia: Province.AL,
  },
  {
    comune: 'Carbonara Scrivia',
    provincia: Province.AL,
  },
  {
    comune: 'Carentino',
    provincia: Province.AL,
  },
  {
    comune: 'Carezzano',
    provincia: Province.AL,
  },
  {
    comune: 'Carpeneto',
    provincia: Province.AL,
  },
  {
    comune: 'Carrega Ligure',
    provincia: Province.AL,
  },
  {
    comune: 'Carrosio',
    provincia: Province.AL,
  },
  {
    comune: 'Cartosio',
    provincia: Province.AL,
  },
  {
    comune: 'Casal Cermelli',
    provincia: Province.AL,
  },
  {
    comune: 'Casaleggio Boiro',
    provincia: Province.AL,
  },
  {
    comune: 'Casale Monferrato',
    provincia: Province.AL,
  },
  {
    comune: 'Casalnoceto',
    provincia: Province.AL,
  },
  {
    comune: 'Casasco',
    provincia: Province.AL,
  },
  {
    comune: 'Cassine',
    provincia: Province.AL,
  },
  {
    comune: 'Cassinelle',
    provincia: Province.AL,
  },
  {
    comune: 'Castellania Coppi',
    provincia: Province.AL,
  },
  {
    comune: 'Castellar Guidobono',
    provincia: Province.AL,
  },
  {
    comune: 'Castellazzo Bormida',
    provincia: Province.AL,
  },
  {
    comune: "Castelletto d'Erro",
    provincia: Province.AL,
  },
  {
    comune: "Castelletto d'Orba",
    provincia: Province.AL,
  },
  {
    comune: 'Castelletto Merli',
    provincia: Province.AL,
  },
  {
    comune: 'Castelletto Monferrato',
    provincia: Province.AL,
  },
  {
    comune: 'Castelnuovo Bormida',
    provincia: Province.AL,
  },
  {
    comune: 'Castelnuovo Scrivia',
    provincia: Province.AL,
  },
  {
    comune: 'Castelspina',
    provincia: Province.AL,
  },
  {
    comune: 'Cavatore',
    provincia: Province.AL,
  },
  {
    comune: 'Cella Monte',
    provincia: Province.AL,
  },
  {
    comune: 'Cereseto',
    provincia: Province.AL,
  },
  {
    comune: 'Cerreto Grue',
    provincia: Province.AL,
  },
  {
    comune: 'Cerrina Monferrato',
    provincia: Province.AL,
  },
  {
    comune: 'Coniolo',
    provincia: Province.AL,
  },
  {
    comune: 'Conzano',
    provincia: Province.AL,
  },
  {
    comune: 'Costa Vescovato',
    provincia: Province.AL,
  },
  {
    comune: 'Cremolino',
    provincia: Province.AL,
  },
  {
    comune: 'Denice',
    provincia: Province.AL,
  },
  {
    comune: 'Dernice',
    provincia: Province.AL,
  },
  {
    comune: 'Fabbrica Curone',
    provincia: Province.AL,
  },
  {
    comune: 'Felizzano',
    provincia: Province.AL,
  },
  {
    comune: 'Fraconalto',
    provincia: Province.AL,
  },
  {
    comune: 'Francavilla Bisio',
    provincia: Province.AL,
  },
  {
    comune: 'Frascaro',
    provincia: Province.AL,
  },
  {
    comune: 'Frassinello Monferrato',
    provincia: Province.AL,
  },
  {
    comune: 'Frassineto Po',
    provincia: Province.AL,
  },
  {
    comune: 'Fresonara',
    provincia: Province.AL,
  },
  {
    comune: 'Frugarolo',
    provincia: Province.AL,
  },
  {
    comune: 'Fubine Monferrato',
    provincia: Province.AL,
  },
  {
    comune: 'Gabiano',
    provincia: Province.AL,
  },
  {
    comune: 'Gamalero',
    provincia: Province.AL,
  },
  {
    comune: 'Garbagna',
    provincia: Province.AL,
  },
  {
    comune: 'Gavi',
    provincia: Province.AL,
  },
  {
    comune: 'Giarole',
    provincia: Province.AL,
  },
  {
    comune: 'Gremiasco',
    provincia: Province.AL,
  },
  {
    comune: 'Grognardo',
    provincia: Province.AL,
  },
  {
    comune: 'Grondona',
    provincia: Province.AL,
  },
  {
    comune: 'Guazzora',
    provincia: Province.AL,
  },
  {
    comune: "Isola Sant'Antonio",
    provincia: Province.AL,
  },
  {
    comune: 'Lerma',
    provincia: Province.AL,
  },
  {
    comune: 'Malvicino',
    provincia: Province.AL,
  },
  {
    comune: 'Masio',
    provincia: Province.AL,
  },
  {
    comune: 'Melazzo',
    provincia: Province.AL,
  },
  {
    comune: 'Merana',
    provincia: Province.AL,
  },
  {
    comune: 'Mirabello Monferrato',
    provincia: Province.AL,
  },
  {
    comune: 'Molare',
    provincia: Province.AL,
  },
  {
    comune: 'Molino dei Torti',
    provincia: Province.AL,
  },
  {
    comune: 'Mombello Monferrato',
    provincia: Province.AL,
  },
  {
    comune: 'Momperone',
    provincia: Province.AL,
  },
  {
    comune: 'Moncestino',
    provincia: Province.AL,
  },
  {
    comune: 'Mongiardino Ligure',
    provincia: Province.AL,
  },
  {
    comune: 'Monleale',
    provincia: Province.AL,
  },
  {
    comune: 'Montacuto',
    provincia: Province.AL,
  },
  {
    comune: 'Montaldeo',
    provincia: Province.AL,
  },
  {
    comune: 'Montaldo Bormida',
    provincia: Province.AL,
  },
  {
    comune: 'Montecastello',
    provincia: Province.AL,
  },
  {
    comune: "Montechiaro d'Acqui",
    provincia: Province.AL,
  },
  {
    comune: 'Montegioco',
    provincia: Province.AL,
  },
  {
    comune: 'Montemarzino',
    provincia: Province.AL,
  },
  {
    comune: 'Morano sul Po',
    provincia: Province.AL,
  },
  {
    comune: 'Morbello',
    provincia: Province.AL,
  },
  {
    comune: 'Mornese',
    provincia: Province.AL,
  },
  {
    comune: 'Morsasco',
    provincia: Province.AL,
  },
  {
    comune: 'Murisengo',
    provincia: Province.AL,
  },
  {
    comune: 'Novi Ligure',
    provincia: Province.AL,
  },
  {
    comune: 'Occimiano',
    provincia: Province.AL,
  },
  {
    comune: 'Odalengo Grande',
    provincia: Province.AL,
  },
  {
    comune: 'Odalengo Piccolo',
    provincia: Province.AL,
  },
  {
    comune: 'Olivola',
    provincia: Province.AL,
  },
  {
    comune: 'Orsara Bormida',
    provincia: Province.AL,
  },
  {
    comune: 'Ottiglio',
    provincia: Province.AL,
  },
  {
    comune: 'Ovada',
    provincia: Province.AL,
  },
  {
    comune: 'Oviglio',
    provincia: Province.AL,
  },
  {
    comune: 'Ozzano Monferrato',
    provincia: Province.AL,
  },
  {
    comune: 'Paderna',
    provincia: Province.AL,
  },
  {
    comune: 'Pareto',
    provincia: Province.AL,
  },
  {
    comune: 'Parodi Ligure',
    provincia: Province.AL,
  },
  {
    comune: 'Pasturana',
    provincia: Province.AL,
  },
  {
    comune: 'Pecetto di Valenza',
    provincia: Province.AL,
  },
  {
    comune: 'Pietra Marazzi',
    provincia: Province.AL,
  },
  {
    comune: 'Pomaro Monferrato',
    provincia: Province.AL,
  },
  {
    comune: 'Pontecurone',
    provincia: Province.AL,
  },
  {
    comune: 'Pontestura',
    provincia: Province.AL,
  },
  {
    comune: 'Ponti',
    provincia: Province.AL,
  },
  {
    comune: 'Ponzano Monferrato',
    provincia: Province.AL,
  },
  {
    comune: 'Ponzone',
    provincia: Province.AL,
  },
  {
    comune: 'Pozzol Groppo',
    provincia: Province.AL,
  },
  {
    comune: 'Pozzolo Formigaro',
    provincia: Province.AL,
  },
  {
    comune: 'Prasco',
    provincia: Province.AL,
  },
  {
    comune: 'Predosa',
    provincia: Province.AL,
  },
  {
    comune: 'Quargnento',
    provincia: Province.AL,
  },
  {
    comune: 'Quattordio',
    provincia: Province.AL,
  },
  {
    comune: 'Ricaldone',
    provincia: Province.AL,
  },
  {
    comune: 'Rivalta Bormida',
    provincia: Province.AL,
  },
  {
    comune: 'Rivarone',
    provincia: Province.AL,
  },
  {
    comune: 'Roccaforte Ligure',
    provincia: Province.AL,
  },
  {
    comune: 'Rocca Grimalda',
    provincia: Province.AL,
  },
  {
    comune: 'Rocchetta Ligure',
    provincia: Province.AL,
  },
  {
    comune: 'Rosignano Monferrato',
    provincia: Province.AL,
  },
  {
    comune: 'Sala Monferrato',
    provincia: Province.AL,
  },
  {
    comune: 'Sale',
    provincia: Province.AL,
  },
  {
    comune: 'San Cristoforo',
    provincia: Province.AL,
  },
  {
    comune: 'San Giorgio Monferrato',
    provincia: Province.AL,
  },
  {
    comune: 'San Salvatore Monferrato',
    provincia: Province.AL,
  },
  {
    comune: 'San Sebastiano Curone',
    provincia: Province.AL,
  },
  {
    comune: "Sant'Agata Fossili",
    provincia: Province.AL,
  },
  {
    comune: 'Sardigliano',
    provincia: Province.AL,
  },
  {
    comune: 'Sarezzano',
    provincia: Province.AL,
  },
  {
    comune: 'Serralunga di Crea',
    provincia: Province.AL,
  },
  {
    comune: 'Serravalle Scrivia',
    provincia: Province.AL,
  },
  {
    comune: 'Sezzadio',
    provincia: Province.AL,
  },
  {
    comune: "Silvano d'Orba",
    provincia: Province.AL,
  },
  {
    comune: 'Solero',
    provincia: Province.AL,
  },
  {
    comune: 'Solonghello',
    provincia: Province.AL,
  },
  {
    comune: 'Spigno Monferrato',
    provincia: Province.AL,
  },
  {
    comune: 'Spineto Scrivia',
    provincia: Province.AL,
  },
  {
    comune: 'Stazzano',
    provincia: Province.AL,
  },
  {
    comune: 'Strevi',
    provincia: Province.AL,
  },
  {
    comune: 'Tagliolo Monferrato',
    provincia: Province.AL,
  },
  {
    comune: 'Tassarolo',
    provincia: Province.AL,
  },
  {
    comune: 'Terruggia',
    provincia: Province.AL,
  },
  {
    comune: 'Terzo',
    provincia: Province.AL,
  },
  {
    comune: 'Ticineto',
    provincia: Province.AL,
  },
  {
    comune: 'Tortona',
    provincia: Province.AL,
  },
  {
    comune: 'Treville',
    provincia: Province.AL,
  },
  {
    comune: 'Trisobbio',
    provincia: Province.AL,
  },
  {
    comune: 'Valenza',
    provincia: Province.AL,
  },
  {
    comune: 'Valmacca',
    provincia: Province.AL,
  },
  {
    comune: 'Vignale Monferrato',
    provincia: Province.AL,
  },
  {
    comune: 'Vignole Borbera',
    provincia: Province.AL,
  },
  {
    comune: 'Viguzzolo',
    provincia: Province.AL,
  },
  {
    comune: 'Villadeati',
    provincia: Province.AL,
  },
  {
    comune: 'Villalvernia',
    provincia: Province.AL,
  },
  {
    comune: 'Villamiroglio',
    provincia: Province.AL,
  },
  {
    comune: 'Villanova Monferrato',
    provincia: Province.AL,
  },
  {
    comune: 'Villaromagnano',
    provincia: Province.AL,
  },
  {
    comune: 'Visone',
    provincia: Province.AL,
  },
  {
    comune: 'Volpedo',
    provincia: Province.AL,
  },
  {
    comune: 'Volpeglino',
    provincia: Province.AL,
  },
  {
    comune: 'Voltaggio',
    provincia: Province.AL,
  },
  {
    comune: 'Cassano Spinola',
    provincia: Province.AL,
  },
  {
    comune: 'Alluvioni Piovera',
    provincia: Province.AL,
  },
  {
    comune: 'Lu e Cuccaro Monferrato',
    provincia: Province.AL,
  },
  {
    comune: 'Ailoche',
    provincia: Province.BI,
  },
  {
    comune: 'Andorno Micca',
    provincia: Province.BI,
  },
  {
    comune: 'Benna',
    provincia: Province.BI,
  },
  {
    comune: 'Biella',
    provincia: Province.BI,
  },
  {
    comune: 'Bioglio',
    provincia: Province.BI,
  },
  {
    comune: 'Borriana',
    provincia: Province.BI,
  },
  {
    comune: 'Brusnengo',
    provincia: Province.BI,
  },
  {
    comune: 'Callabiana',
    provincia: Province.BI,
  },
  {
    comune: 'Camandona',
    provincia: Province.BI,
  },
  {
    comune: 'Camburzano',
    provincia: Province.BI,
  },
  {
    comune: 'Candelo',
    provincia: Province.BI,
  },
  {
    comune: 'Caprile',
    provincia: Province.BI,
  },
  {
    comune: 'Casapinta',
    provincia: Province.BI,
  },
  {
    comune: 'Castelletto Cervo',
    provincia: Province.BI,
  },
  {
    comune: 'Cavaglià',
    provincia: Province.BI,
  },
  {
    comune: 'Cerrione',
    provincia: Province.BI,
  },
  {
    comune: 'Coggiola',
    provincia: Province.BI,
  },
  {
    comune: 'Cossato',
    provincia: Province.BI,
  },
  {
    comune: 'Crevacuore',
    provincia: Province.BI,
  },
  {
    comune: 'Curino',
    provincia: Province.BI,
  },
  {
    comune: 'Donato',
    provincia: Province.BI,
  },
  {
    comune: 'Dorzano',
    provincia: Province.BI,
  },
  {
    comune: 'Gaglianico',
    provincia: Province.BI,
  },
  {
    comune: 'Gifflenga',
    provincia: Province.BI,
  },
  {
    comune: 'Graglia',
    provincia: Province.BI,
  },
  {
    comune: 'Magnano',
    provincia: Province.BI,
  },
  {
    comune: 'Massazza',
    provincia: Province.BI,
  },
  {
    comune: 'Masserano',
    provincia: Province.BI,
  },
  {
    comune: 'Mezzana Mortigliengo',
    provincia: Province.BI,
  },
  {
    comune: 'Miagliano',
    provincia: Province.BI,
  },
  {
    comune: 'Mongrando',
    provincia: Province.BI,
  },
  {
    comune: 'Mottalciata',
    provincia: Province.BI,
  },
  {
    comune: 'Muzzano',
    provincia: Province.BI,
  },
  {
    comune: 'Netro',
    provincia: Province.BI,
  },
  {
    comune: 'Occhieppo Inferiore',
    provincia: Province.BI,
  },
  {
    comune: 'Occhieppo Superiore',
    provincia: Province.BI,
  },
  {
    comune: 'Pettinengo',
    provincia: Province.BI,
  },
  {
    comune: 'Piatto',
    provincia: Province.BI,
  },
  {
    comune: 'Piedicavallo',
    provincia: Province.BI,
  },
  {
    comune: 'Pollone',
    provincia: Province.BI,
  },
  {
    comune: 'Ponderano',
    provincia: Province.BI,
  },
  {
    comune: 'Portula',
    provincia: Province.BI,
  },
  {
    comune: 'Pralungo',
    provincia: Province.BI,
  },
  {
    comune: 'Pray',
    provincia: Province.BI,
  },
  {
    comune: 'Ronco Biellese',
    provincia: Province.BI,
  },
  {
    comune: 'Roppolo',
    provincia: Province.BI,
  },
  {
    comune: 'Rosazza',
    provincia: Province.BI,
  },
  {
    comune: 'Sagliano Micca',
    provincia: Province.BI,
  },
  {
    comune: 'Sala Biellese',
    provincia: Province.BI,
  },
  {
    comune: 'Salussola',
    provincia: Province.BI,
  },
  {
    comune: 'Sandigliano',
    provincia: Province.BI,
  },
  {
    comune: 'Sordevolo',
    provincia: Province.BI,
  },
  {
    comune: 'Sostegno',
    provincia: Province.BI,
  },
  {
    comune: 'Strona',
    provincia: Province.BI,
  },
  {
    comune: 'Tavigliano',
    provincia: Province.BI,
  },
  {
    comune: 'Ternengo',
    provincia: Province.BI,
  },
  {
    comune: 'Tollegno',
    provincia: Province.BI,
  },
  {
    comune: 'Torrazzo',
    provincia: Province.BI,
  },
  {
    comune: 'Valdengo',
    provincia: Province.BI,
  },
  {
    comune: 'Vallanzengo',
    provincia: Province.BI,
  },
  {
    comune: 'Valle San Nicolao',
    provincia: Province.BI,
  },
  {
    comune: 'Veglio',
    provincia: Province.BI,
  },
  {
    comune: 'Verrone',
    provincia: Province.BI,
  },
  {
    comune: 'Vigliano Biellese',
    provincia: Province.BI,
  },
  {
    comune: 'Villa del Bosco',
    provincia: Province.BI,
  },
  {
    comune: 'Villanova Biellese',
    provincia: Province.BI,
  },
  {
    comune: 'Viverone',
    provincia: Province.BI,
  },
  {
    comune: 'Zimone',
    provincia: Province.BI,
  },
  {
    comune: 'Zubiena',
    provincia: Province.BI,
  },
  {
    comune: 'Zumaglia',
    provincia: Province.BI,
  },
  {
    comune: 'Lessona',
    provincia: Province.BI,
  },
  {
    comune: 'Campiglia Cervo',
    provincia: Province.BI,
  },
  {
    comune: 'Quaregna Cerreto',
    provincia: Province.BI,
  },
  {
    comune: 'Valdilana',
    provincia: Province.BI,
  },
  {
    comune: 'Antrona Schieranco',
    provincia: Province.VB,
  },
  {
    comune: "Anzola d'Ossola",
    provincia: Province.VB,
  },
  {
    comune: 'Arizzano',
    provincia: Province.VB,
  },
  {
    comune: 'Arola',
    provincia: Province.VB,
  },
  {
    comune: 'Aurano',
    provincia: Province.VB,
  },
  {
    comune: 'Baceno',
    provincia: Province.VB,
  },
  {
    comune: 'Bannio Anzino',
    provincia: Province.VB,
  },
  {
    comune: 'Baveno',
    provincia: Province.VB,
  },
  {
    comune: 'Bee',
    provincia: Province.VB,
  },
  {
    comune: 'Belgirate',
    provincia: Province.VB,
  },
  {
    comune: 'Beura-Cardezza',
    provincia: Province.VB,
  },
  {
    comune: 'Bognanco',
    provincia: Province.VB,
  },
  {
    comune: 'Brovello-Carpugnino',
    provincia: Province.VB,
  },
  {
    comune: 'Calasca-Castiglione',
    provincia: Province.VB,
  },
  {
    comune: 'Cambiasca',
    provincia: Province.VB,
  },
  {
    comune: 'Cannero Riviera',
    provincia: Province.VB,
  },
  {
    comune: 'Cannobio',
    provincia: Province.VB,
  },
  {
    comune: 'Caprezzo',
    provincia: Province.VB,
  },
  {
    comune: 'Casale Corte Cerro',
    provincia: Province.VB,
  },
  {
    comune: 'Ceppo Morelli',
    provincia: Province.VB,
  },
  {
    comune: 'Cesara',
    provincia: Province.VB,
  },
  {
    comune: 'Cossogno',
    provincia: Province.VB,
  },
  {
    comune: 'Craveggia',
    provincia: Province.VB,
  },
  {
    comune: 'Crevoladossola',
    provincia: Province.VB,
  },
  {
    comune: 'Crodo',
    provincia: Province.VB,
  },
  {
    comune: 'Domodossola',
    provincia: Province.VB,
  },
  {
    comune: 'Druogno',
    provincia: Province.VB,
  },
  {
    comune: 'Formazza',
    provincia: Province.VB,
  },
  {
    comune: 'Germagno',
    provincia: Province.VB,
  },
  {
    comune: 'Ghiffa',
    provincia: Province.VB,
  },
  {
    comune: 'Gignese',
    provincia: Province.VB,
  },
  {
    comune: 'Gravellona Toce',
    provincia: Province.VB,
  },
  {
    comune: 'Gurro',
    provincia: Province.VB,
  },
  {
    comune: 'Intragna',
    provincia: Province.VB,
  },
  {
    comune: 'Loreglia',
    provincia: Province.VB,
  },
  {
    comune: 'Macugnaga',
    provincia: Province.VB,
  },
  {
    comune: 'Madonna del Sasso',
    provincia: Province.VB,
  },
  {
    comune: 'Malesco',
    provincia: Province.VB,
  },
  {
    comune: 'Masera',
    provincia: Province.VB,
  },
  {
    comune: 'Massiola',
    provincia: Province.VB,
  },
  {
    comune: 'Mergozzo',
    provincia: Province.VB,
  },
  {
    comune: 'Miazzina',
    provincia: Province.VB,
  },
  {
    comune: 'Montecrestese',
    provincia: Province.VB,
  },
  {
    comune: 'Montescheno',
    provincia: Province.VB,
  },
  {
    comune: 'Nonio',
    provincia: Province.VB,
  },
  {
    comune: 'Oggebbio',
    provincia: Province.VB,
  },
  {
    comune: 'Omegna',
    provincia: Province.VB,
  },
  {
    comune: 'Ornavasso',
    provincia: Province.VB,
  },
  {
    comune: 'Pallanzeno',
    provincia: Province.VB,
  },
  {
    comune: 'Piedimulera',
    provincia: Province.VB,
  },
  {
    comune: 'Pieve Vergonte',
    provincia: Province.VB,
  },
  {
    comune: 'Premeno',
    provincia: Province.VB,
  },
  {
    comune: 'Premia',
    provincia: Province.VB,
  },
  {
    comune: 'Premosello-Chiovenda',
    provincia: Province.VB,
  },
  {
    comune: 'Quarna Sopra',
    provincia: Province.VB,
  },
  {
    comune: 'Quarna Sotto',
    provincia: Province.VB,
  },
  {
    comune: 'Re',
    provincia: Province.VB,
  },
  {
    comune: 'San Bernardino Verbano',
    provincia: Province.VB,
  },
  {
    comune: 'Santa Maria Maggiore',
    provincia: Province.VB,
  },
  {
    comune: 'Stresa',
    provincia: Province.VB,
  },
  {
    comune: 'Toceno',
    provincia: Province.VB,
  },
  {
    comune: 'Trarego Viggiona',
    provincia: Province.VB,
  },
  {
    comune: 'Trasquera',
    provincia: Province.VB,
  },
  {
    comune: 'Trontano',
    provincia: Province.VB,
  },
  {
    comune: 'Valstrona',
    provincia: Province.VB,
  },
  {
    comune: 'Vanzone con San Carlo',
    provincia: Province.VB,
  },
  {
    comune: 'Varzo',
    provincia: Province.VB,
  },
  {
    comune: 'Verbania',
    provincia: Province.VB,
  },
  {
    comune: 'Vignone',
    provincia: Province.VB,
  },
  {
    comune: 'Villadossola',
    provincia: Province.VB,
  },
  {
    comune: 'Villette',
    provincia: Province.VB,
  },
  {
    comune: 'Vogogna',
    provincia: Province.VB,
  },
  {
    comune: 'Borgomezzavalle',
    provincia: Province.VB,
  },
  {
    comune: 'Valle Cannobina',
    provincia: Province.VB,
  },
  {
    comune: 'Allein',
    provincia: Province.AO,
  },
  {
    comune: 'Antey-Saint-André',
    provincia: Province.AO,
  },
  {
    comune: 'Aosta',
    provincia: Province.AO,
  },
  {
    comune: 'Arnad',
    provincia: Province.AO,
  },
  {
    comune: 'Arvier',
    provincia: Province.AO,
  },
  {
    comune: 'Avise',
    provincia: Province.AO,
  },
  {
    comune: 'Ayas',
    provincia: Province.AO,
  },
  {
    comune: 'Aymavilles',
    provincia: Province.AO,
  },
  {
    comune: 'Bard',
    provincia: Province.AO,
  },
  {
    comune: 'Bionaz',
    provincia: Province.AO,
  },
  {
    comune: 'Brissogne',
    provincia: Province.AO,
  },
  {
    comune: 'Brusson',
    provincia: Province.AO,
  },
  {
    comune: 'Challand-Saint-Anselme',
    provincia: Province.AO,
  },
  {
    comune: 'Challand-Saint-Victor',
    provincia: Province.AO,
  },
  {
    comune: 'Chambave',
    provincia: Province.AO,
  },
  {
    comune: 'Chamois',
    provincia: Province.AO,
  },
  {
    comune: 'Champdepraz',
    provincia: Province.AO,
  },
  {
    comune: 'Champorcher',
    provincia: Province.AO,
  },
  {
    comune: 'Charvensod',
    provincia: Province.AO,
  },
  {
    comune: 'Châtillon',
    provincia: Province.AO,
  },
  {
    comune: 'Cogne',
    provincia: Province.AO,
  },
  {
    comune: 'Courmayeur',
    provincia: Province.AO,
  },
  {
    comune: 'Donnas',
    provincia: Province.AO,
  },
  {
    comune: 'Doues',
    provincia: Province.AO,
  },
  {
    comune: 'Emarèse',
    provincia: Province.AO,
  },
  {
    comune: 'Etroubles',
    provincia: Province.AO,
  },
  {
    comune: 'Fénis',
    provincia: Province.AO,
  },
  {
    comune: 'Fontainemore',
    provincia: Province.AO,
  },
  {
    comune: 'Gaby',
    provincia: Province.AO,
  },
  {
    comune: 'Gignod',
    provincia: Province.AO,
  },
  {
    comune: 'Gressan',
    provincia: Province.AO,
  },
  {
    comune: 'Gressoney-La-Trinité',
    provincia: Province.AO,
  },
  {
    comune: 'Gressoney-Saint-Jean',
    provincia: Province.AO,
  },
  {
    comune: 'Hône',
    provincia: Province.AO,
  },
  {
    comune: 'Introd',
    provincia: Province.AO,
  },
  {
    comune: 'Issime',
    provincia: Province.AO,
  },
  {
    comune: 'Issogne',
    provincia: Province.AO,
  },
  {
    comune: 'Jovençan',
    provincia: Province.AO,
  },
  {
    comune: 'La Magdeleine',
    provincia: Province.AO,
  },
  {
    comune: 'La Salle',
    provincia: Province.AO,
  },
  {
    comune: 'La Thuile',
    provincia: Province.AO,
  },
  {
    comune: 'Lillianes',
    provincia: Province.AO,
  },
  {
    comune: 'Montjovet',
    provincia: Province.AO,
  },
  {
    comune: 'Morgex',
    provincia: Province.AO,
  },
  {
    comune: 'Nus',
    provincia: Province.AO,
  },
  {
    comune: 'Ollomont',
    provincia: Province.AO,
  },
  {
    comune: 'Oyace',
    provincia: Province.AO,
  },
  {
    comune: 'Perloz',
    provincia: Province.AO,
  },
  {
    comune: 'Pollein',
    provincia: Province.AO,
  },
  {
    comune: 'Pontboset',
    provincia: Province.AO,
  },
  {
    comune: 'Pontey',
    provincia: Province.AO,
  },
  {
    comune: 'Pont-Saint-Martin',
    provincia: Province.AO,
  },
  {
    comune: 'Pré-Saint-Didier',
    provincia: Province.AO,
  },
  {
    comune: 'Quart',
    provincia: Province.AO,
  },
  {
    comune: 'Rhêmes-Notre-Dame',
    provincia: Province.AO,
  },
  {
    comune: 'Rhêmes-Saint-Georges',
    provincia: Province.AO,
  },
  {
    comune: 'Roisan',
    provincia: Province.AO,
  },
  {
    comune: 'Saint-Christophe',
    provincia: Province.AO,
  },
  {
    comune: 'Saint-Denis',
    provincia: Province.AO,
  },
  {
    comune: 'Saint-Marcel',
    provincia: Province.AO,
  },
  {
    comune: 'Saint-Nicolas',
    provincia: Province.AO,
  },
  {
    comune: 'Saint-Oyen',
    provincia: Province.AO,
  },
  {
    comune: 'Saint-Pierre',
    provincia: Province.AO,
  },
  {
    comune: 'Saint-Rhémy-en-Bosses',
    provincia: Province.AO,
  },
  {
    comune: 'Saint-Vincent',
    provincia: Province.AO,
  },
  {
    comune: 'Sarre',
    provincia: Province.AO,
  },
  {
    comune: 'Torgnon',
    provincia: Province.AO,
  },
  {
    comune: 'Valgrisenche',
    provincia: Province.AO,
  },
  {
    comune: 'Valpelline',
    provincia: Province.AO,
  },
  {
    comune: 'Valsavarenche',
    provincia: Province.AO,
  },
  {
    comune: 'Valtournenche',
    provincia: Province.AO,
  },
  {
    comune: 'Verrayes',
    provincia: Province.AO,
  },
  {
    comune: 'Verrès',
    provincia: Province.AO,
  },
  {
    comune: 'Villeneuve',
    provincia: Province.AO,
  },
  {
    comune: 'Agra',
    provincia: Province.VA,
  },
  {
    comune: 'Albizzate',
    provincia: Province.VA,
  },
  {
    comune: 'Angera',
    provincia: Province.VA,
  },
  {
    comune: 'Arcisate',
    provincia: Province.VA,
  },
  {
    comune: 'Arsago Seprio',
    provincia: Province.VA,
  },
  {
    comune: 'Azzate',
    provincia: Province.VA,
  },
  {
    comune: 'Azzio',
    provincia: Province.VA,
  },
  {
    comune: 'Barasso',
    provincia: Province.VA,
  },
  {
    comune: 'Bardello',
    provincia: Province.VA,
  },
  {
    comune: 'Bedero Valcuvia',
    provincia: Province.VA,
  },
  {
    comune: 'Besano',
    provincia: Province.VA,
  },
  {
    comune: 'Besnate',
    provincia: Province.VA,
  },
  {
    comune: 'Besozzo',
    provincia: Province.VA,
  },
  {
    comune: 'Biandronno',
    provincia: Province.VA,
  },
  {
    comune: 'Bisuschio',
    provincia: Province.VA,
  },
  {
    comune: 'Bodio Lomnago',
    provincia: Province.VA,
  },
  {
    comune: 'Brebbia',
    provincia: Province.VA,
  },
  {
    comune: 'Bregano',
    provincia: Province.VA,
  },
  {
    comune: 'Brenta',
    provincia: Province.VA,
  },
  {
    comune: 'Brezzo di Bedero',
    provincia: Province.VA,
  },
  {
    comune: 'Brinzio',
    provincia: Province.VA,
  },
  {
    comune: 'Brissago-Valtravaglia',
    provincia: Province.VA,
  },
  {
    comune: 'Brunello',
    provincia: Province.VA,
  },
  {
    comune: 'Brusimpiano',
    provincia: Province.VA,
  },
  {
    comune: 'Buguggiate',
    provincia: Province.VA,
  },
  {
    comune: 'Busto Arsizio',
    provincia: Province.VA,
  },
  {
    comune: 'Cadegliano-Viconago',
    provincia: Province.VA,
  },
  {
    comune: 'Cairate',
    provincia: Province.VA,
  },
  {
    comune: 'Cantello',
    provincia: Province.VA,
  },
  {
    comune: 'Caravate',
    provincia: Province.VA,
  },
  {
    comune: 'Cardano al Campo',
    provincia: Province.VA,
  },
  {
    comune: 'Carnago',
    provincia: Province.VA,
  },
  {
    comune: 'Caronno Pertusella',
    provincia: Province.VA,
  },
  {
    comune: 'Caronno Varesino',
    provincia: Province.VA,
  },
  {
    comune: 'Casale Litta',
    provincia: Province.VA,
  },
  {
    comune: 'Casalzuigno',
    provincia: Province.VA,
  },
  {
    comune: 'Casciago',
    provincia: Province.VA,
  },
  {
    comune: 'Casorate Sempione',
    provincia: Province.VA,
  },
  {
    comune: 'Cassano Magnago',
    provincia: Province.VA,
  },
  {
    comune: 'Cassano Valcuvia',
    provincia: Province.VA,
  },
  {
    comune: 'Castellanza',
    provincia: Province.VA,
  },
  {
    comune: 'Castello Cabiaglio',
    provincia: Province.VA,
  },
  {
    comune: 'Castelseprio',
    provincia: Province.VA,
  },
  {
    comune: 'Castelveccana',
    provincia: Province.VA,
  },
  {
    comune: 'Castiglione Olona',
    provincia: Province.VA,
  },
  {
    comune: 'Castronno',
    provincia: Province.VA,
  },
  {
    comune: 'Cavaria con Premezzo',
    provincia: Province.VA,
  },
  {
    comune: 'Cazzago Brabbia',
    provincia: Province.VA,
  },
  {
    comune: 'Cislago',
    provincia: Province.VA,
  },
  {
    comune: 'Cittiglio',
    provincia: Province.VA,
  },
  {
    comune: 'Clivio',
    provincia: Province.VA,
  },
  {
    comune: 'Cocquio-Trevisago',
    provincia: Province.VA,
  },
  {
    comune: 'Comabbio',
    provincia: Province.VA,
  },
  {
    comune: 'Comerio',
    provincia: Province.VA,
  },
  {
    comune: 'Cremenaga',
    provincia: Province.VA,
  },
  {
    comune: 'Crosio della Valle',
    provincia: Province.VA,
  },
  {
    comune: 'Cuasso al Monte',
    provincia: Province.VA,
  },
  {
    comune: 'Cugliate-Fabiasco',
    provincia: Province.VA,
  },
  {
    comune: 'Cunardo',
    provincia: Province.VA,
  },
  {
    comune: 'Curiglia con Monteviasco',
    provincia: Province.VA,
  },
  {
    comune: 'Cuveglio',
    provincia: Province.VA,
  },
  {
    comune: 'Cuvio',
    provincia: Province.VA,
  },
  {
    comune: 'Daverio',
    provincia: Province.VA,
  },
  {
    comune: 'Dumenza',
    provincia: Province.VA,
  },
  {
    comune: 'Duno',
    provincia: Province.VA,
  },
  {
    comune: 'Fagnano Olona',
    provincia: Province.VA,
  },
  {
    comune: 'Ferno',
    provincia: Province.VA,
  },
  {
    comune: 'Ferrera di Varese',
    provincia: Province.VA,
  },
  {
    comune: 'Gallarate',
    provincia: Province.VA,
  },
  {
    comune: 'Galliate Lombardo',
    provincia: Province.VA,
  },
  {
    comune: 'Gavirate',
    provincia: Province.VA,
  },
  {
    comune: 'Gazzada Schianno',
    provincia: Province.VA,
  },
  {
    comune: 'Gemonio',
    provincia: Province.VA,
  },
  {
    comune: 'Gerenzano',
    provincia: Province.VA,
  },
  {
    comune: 'Germignaga',
    provincia: Province.VA,
  },
  {
    comune: 'Golasecca',
    provincia: Province.VA,
  },
  {
    comune: 'Gorla Maggiore',
    provincia: Province.VA,
  },
  {
    comune: 'Gorla Minore',
    provincia: Province.VA,
  },
  {
    comune: 'Gornate Olona',
    provincia: Province.VA,
  },
  {
    comune: 'Grantola',
    provincia: Province.VA,
  },
  {
    comune: 'Inarzo',
    provincia: Province.VA,
  },
  {
    comune: 'Induno Olona',
    provincia: Province.VA,
  },
  {
    comune: 'Ispra',
    provincia: Province.VA,
  },
  {
    comune: 'Jerago con Orago',
    provincia: Province.VA,
  },
  {
    comune: 'Lavena Ponte Tresa',
    provincia: Province.VA,
  },
  {
    comune: 'Laveno-Mombello',
    provincia: Province.VA,
  },
  {
    comune: 'Leggiuno',
    provincia: Province.VA,
  },
  {
    comune: 'Lonate Ceppino',
    provincia: Province.VA,
  },
  {
    comune: 'Lonate Pozzolo',
    provincia: Province.VA,
  },
  {
    comune: 'Lozza',
    provincia: Province.VA,
  },
  {
    comune: 'Luino',
    provincia: Province.VA,
  },
  {
    comune: 'Luvinate',
    provincia: Province.VA,
  },
  {
    comune: 'Malgesso',
    provincia: Province.VA,
  },
  {
    comune: 'Malnate',
    provincia: Province.VA,
  },
  {
    comune: 'Marchirolo',
    provincia: Province.VA,
  },
  {
    comune: 'Marnate',
    provincia: Province.VA,
  },
  {
    comune: 'Marzio',
    provincia: Province.VA,
  },
  {
    comune: 'Masciago Primo',
    provincia: Province.VA,
  },
  {
    comune: 'Mercallo',
    provincia: Province.VA,
  },
  {
    comune: 'Mesenzana',
    provincia: Province.VA,
  },
  {
    comune: 'Montegrino Valtravaglia',
    provincia: Province.VA,
  },
  {
    comune: 'Monvalle',
    provincia: Province.VA,
  },
  {
    comune: 'Morazzone',
    provincia: Province.VA,
  },
  {
    comune: 'Mornago',
    provincia: Province.VA,
  },
  {
    comune: 'Oggiona con Santo Stefano',
    provincia: Province.VA,
  },
  {
    comune: 'Olgiate Olona',
    provincia: Province.VA,
  },
  {
    comune: 'Origgio',
    provincia: Province.VA,
  },
  {
    comune: 'Orino',
    provincia: Province.VA,
  },
  {
    comune: 'Porto Ceresio',
    provincia: Province.VA,
  },
  {
    comune: 'Porto Valtravaglia',
    provincia: Province.VA,
  },
  {
    comune: 'Rancio Valcuvia',
    provincia: Province.VA,
  },
  {
    comune: 'Ranco',
    provincia: Province.VA,
  },
  {
    comune: 'Saltrio',
    provincia: Province.VA,
  },
  {
    comune: 'Samarate',
    provincia: Province.VA,
  },
  {
    comune: 'Saronno',
    provincia: Province.VA,
  },
  {
    comune: 'Sesto Calende',
    provincia: Province.VA,
  },
  {
    comune: 'Solbiate Arno',
    provincia: Province.VA,
  },
  {
    comune: 'Solbiate Olona',
    provincia: Province.VA,
  },
  {
    comune: 'Somma Lombardo',
    provincia: Province.VA,
  },
  {
    comune: 'Sumirago',
    provincia: Province.VA,
  },
  {
    comune: 'Taino',
    provincia: Province.VA,
  },
  {
    comune: 'Ternate',
    provincia: Province.VA,
  },
  {
    comune: 'Tradate',
    provincia: Province.VA,
  },
  {
    comune: 'Travedona-Monate',
    provincia: Province.VA,
  },
  {
    comune: 'Tronzano Lago Maggiore',
    provincia: Province.VA,
  },
  {
    comune: 'Uboldo',
    provincia: Province.VA,
  },
  {
    comune: 'Valganna',
    provincia: Province.VA,
  },
  {
    comune: 'Varano Borghi',
    provincia: Province.VA,
  },
  {
    comune: 'Varese',
    provincia: Province.VA,
  },
  {
    comune: 'Vedano Olona',
    provincia: Province.VA,
  },
  {
    comune: 'Venegono Inferiore',
    provincia: Province.VA,
  },
  {
    comune: 'Venegono Superiore',
    provincia: Province.VA,
  },
  {
    comune: 'Vergiate',
    provincia: Province.VA,
  },
  {
    comune: 'Viggiù',
    provincia: Province.VA,
  },
  {
    comune: 'Vizzola Ticino',
    provincia: Province.VA,
  },
  {
    comune: 'Sangiano',
    provincia: Province.VA,
  },
  {
    comune: 'Maccagno con Pino e Veddasca',
    provincia: Province.VA,
  },
  {
    comune: 'Cadrezzate con Osmate',
    provincia: Province.VA,
  },
  {
    comune: 'Albavilla',
    provincia: Province.CO,
  },
  {
    comune: 'Albese con Cassano',
    provincia: Province.CO,
  },
  {
    comune: 'Albiolo',
    provincia: Province.CO,
  },
  {
    comune: 'Alserio',
    provincia: Province.CO,
  },
  {
    comune: 'Alzate Brianza',
    provincia: Province.CO,
  },
  {
    comune: 'Anzano del Parco',
    provincia: Province.CO,
  },
  {
    comune: 'Appiano Gentile',
    provincia: Province.CO,
  },
  {
    comune: 'Argegno',
    provincia: Province.CO,
  },
  {
    comune: 'Arosio',
    provincia: Province.CO,
  },
  {
    comune: 'Asso',
    provincia: Province.CO,
  },
  {
    comune: 'Barni',
    provincia: Province.CO,
  },
  {
    comune: 'Bene Lario',
    provincia: Province.CO,
  },
  {
    comune: 'Beregazzo con Figliaro',
    provincia: Province.CO,
  },
  {
    comune: 'Binago',
    provincia: Province.CO,
  },
  {
    comune: 'Bizzarone',
    provincia: Province.CO,
  },
  {
    comune: 'Blessagno',
    provincia: Province.CO,
  },
  {
    comune: 'Blevio',
    provincia: Province.CO,
  },
  {
    comune: 'Bregnano',
    provincia: Province.CO,
  },
  {
    comune: 'Brenna',
    provincia: Province.CO,
  },
  {
    comune: 'Brienno',
    provincia: Province.CO,
  },
  {
    comune: 'Brunate',
    provincia: Province.CO,
  },
  {
    comune: 'Bulgarograsso',
    provincia: Province.CO,
  },
  {
    comune: 'Cabiate',
    provincia: Province.CO,
  },
  {
    comune: 'Cadorago',
    provincia: Province.CO,
  },
  {
    comune: 'Caglio',
    provincia: Province.CO,
  },
  {
    comune: "Campione d'Italia",
    provincia: Province.CO,
  },
  {
    comune: 'Cantù',
    provincia: Province.CO,
  },
  {
    comune: 'Canzo',
    provincia: Province.CO,
  },
  {
    comune: 'Capiago Intimiano',
    provincia: Province.CO,
  },
  {
    comune: 'Carate Urio',
    provincia: Province.CO,
  },
  {
    comune: 'Carbonate',
    provincia: Province.CO,
  },
  {
    comune: 'Carimate',
    provincia: Province.CO,
  },
  {
    comune: 'Carlazzo',
    provincia: Province.CO,
  },
  {
    comune: 'Carugo',
    provincia: Province.CO,
  },
  {
    comune: "Caslino d'Erba",
    provincia: Province.CO,
  },
  {
    comune: 'Casnate con Bernate',
    provincia: Province.CO,
  },
  {
    comune: 'Cassina Rizzardi',
    provincia: Province.CO,
  },
  {
    comune: 'Castelmarte',
    provincia: Province.CO,
  },
  {
    comune: 'Castelnuovo Bozzente',
    provincia: Province.CO,
  },
  {
    comune: 'Cavargna',
    provincia: Province.CO,
  },
  {
    comune: "Cerano d'Intelvi",
    provincia: Province.CO,
  },
  {
    comune: 'Cermenate',
    provincia: Province.CO,
  },
  {
    comune: 'Cernobbio',
    provincia: Province.CO,
  },
  {
    comune: 'Cirimido',
    provincia: Province.CO,
  },
  {
    comune: 'Claino con Osteno',
    provincia: Province.CO,
  },
  {
    comune: 'Colonno',
    provincia: Province.CO,
  },
  {
    comune: 'Como',
    provincia: Province.CO,
  },
  {
    comune: 'Corrido',
    provincia: Province.CO,
  },
  {
    comune: 'Cremia',
    provincia: Province.CO,
  },
  {
    comune: 'Cucciago',
    provincia: Province.CO,
  },
  {
    comune: 'Cusino',
    provincia: Province.CO,
  },
  {
    comune: 'Dizzasco',
    provincia: Province.CO,
  },
  {
    comune: 'Domaso',
    provincia: Province.CO,
  },
  {
    comune: 'Dongo',
    provincia: Province.CO,
  },
  {
    comune: 'Dosso del Liro',
    provincia: Province.CO,
  },
  {
    comune: 'Erba',
    provincia: Province.CO,
  },
  {
    comune: 'Eupilio',
    provincia: Province.CO,
  },
  {
    comune: 'Faggeto Lario',
    provincia: Province.CO,
  },
  {
    comune: 'Faloppio',
    provincia: Province.CO,
  },
  {
    comune: 'Fenegrò',
    provincia: Province.CO,
  },
  {
    comune: 'Figino Serenza',
    provincia: Province.CO,
  },
  {
    comune: 'Fino Mornasco',
    provincia: Province.CO,
  },
  {
    comune: 'Garzeno',
    provincia: Province.CO,
  },
  {
    comune: 'Gera Lario',
    provincia: Province.CO,
  },
  {
    comune: 'Grandate',
    provincia: Province.CO,
  },
  {
    comune: 'Grandola ed Uniti',
    provincia: Province.CO,
  },
  {
    comune: 'Griante',
    provincia: Province.CO,
  },
  {
    comune: 'Guanzate',
    provincia: Province.CO,
  },
  {
    comune: 'Inverigo',
    provincia: Province.CO,
  },
  {
    comune: 'Laglio',
    provincia: Province.CO,
  },
  {
    comune: 'Laino',
    provincia: Province.CO,
  },
  {
    comune: 'Lambrugo',
    provincia: Province.CO,
  },
  {
    comune: 'Lasnigo',
    provincia: Province.CO,
  },
  {
    comune: 'Lezzeno',
    provincia: Province.CO,
  },
  {
    comune: 'Limido Comasco',
    provincia: Province.CO,
  },
  {
    comune: 'Lipomo',
    provincia: Province.CO,
  },
  {
    comune: 'Livo',
    provincia: Province.CO,
  },
  {
    comune: 'Locate Varesino',
    provincia: Province.CO,
  },
  {
    comune: 'Lomazzo',
    provincia: Province.CO,
  },
  {
    comune: 'Longone al Segrino',
    provincia: Province.CO,
  },
  {
    comune: 'Luisago',
    provincia: Province.CO,
  },
  {
    comune: "Lurago d'Erba",
    provincia: Province.CO,
  },
  {
    comune: 'Lurago Marinone',
    provincia: Province.CO,
  },
  {
    comune: 'Lurate Caccivio',
    provincia: Province.CO,
  },
  {
    comune: 'Magreglio',
    provincia: Province.CO,
  },
  {
    comune: 'Mariano Comense',
    provincia: Province.CO,
  },
  {
    comune: 'Maslianico',
    provincia: Province.CO,
  },
  {
    comune: 'Menaggio',
    provincia: Province.CO,
  },
  {
    comune: 'Merone',
    provincia: Province.CO,
  },
  {
    comune: 'Moltrasio',
    provincia: Province.CO,
  },
  {
    comune: 'Monguzzo',
    provincia: Province.CO,
  },
  {
    comune: 'Montano Lucino',
    provincia: Province.CO,
  },
  {
    comune: 'Montemezzo',
    provincia: Province.CO,
  },
  {
    comune: 'Montorfano',
    provincia: Province.CO,
  },
  {
    comune: 'Mozzate',
    provincia: Province.CO,
  },
  {
    comune: 'Musso',
    provincia: Province.CO,
  },
  {
    comune: 'Nesso',
    provincia: Province.CO,
  },
  {
    comune: 'Novedrate',
    provincia: Province.CO,
  },
  {
    comune: 'Olgiate Comasco',
    provincia: Province.CO,
  },
  {
    comune: 'Oltrona di San Mamette',
    provincia: Province.CO,
  },
  {
    comune: 'Orsenigo',
    provincia: Province.CO,
  },
  {
    comune: 'Peglio',
    provincia: Province.CO,
  },
  {
    comune: 'Pianello del Lario',
    provincia: Province.CO,
  },
  {
    comune: 'Pigra',
    provincia: Province.CO,
  },
  {
    comune: 'Plesio',
    provincia: Province.CO,
  },
  {
    comune: 'Pognana Lario',
    provincia: Province.CO,
  },
  {
    comune: 'Ponna',
    provincia: Province.CO,
  },
  {
    comune: 'Ponte Lambro',
    provincia: Province.CO,
  },
  {
    comune: 'Porlezza',
    provincia: Province.CO,
  },
  {
    comune: 'Proserpio',
    provincia: Province.CO,
  },
  {
    comune: 'Pusiano',
    provincia: Province.CO,
  },
  {
    comune: 'Rezzago',
    provincia: Province.CO,
  },
  {
    comune: 'Rodero',
    provincia: Province.CO,
  },
  {
    comune: 'Ronago',
    provincia: Province.CO,
  },
  {
    comune: 'Rovellasca',
    provincia: Province.CO,
  },
  {
    comune: 'Rovello Porro',
    provincia: Province.CO,
  },
  {
    comune: 'Sala Comacina',
    provincia: Province.CO,
  },
  {
    comune: 'San Bartolomeo Val Cavargna',
    provincia: Province.CO,
  },
  {
    comune: 'San Fermo della Battaglia',
    provincia: Province.CO,
  },
  {
    comune: 'San Nazzaro Val Cavargna',
    provincia: Province.CO,
  },
  {
    comune: 'Schignano',
    provincia: Province.CO,
  },
  {
    comune: 'Senna Comasco',
    provincia: Province.CO,
  },
  {
    comune: 'Sorico',
    provincia: Province.CO,
  },
  {
    comune: 'Sormano',
    provincia: Province.CO,
  },
  {
    comune: 'Stazzona',
    provincia: Province.CO,
  },
  {
    comune: 'Tavernerio',
    provincia: Province.CO,
  },
  {
    comune: 'Torno',
    provincia: Province.CO,
  },
  {
    comune: 'Trezzone',
    provincia: Province.CO,
  },
  {
    comune: 'Turate',
    provincia: Province.CO,
  },
  {
    comune: 'Uggiate-Trevano',
    provincia: Province.CO,
  },
  {
    comune: 'Valbrona',
    provincia: Province.CO,
  },
  {
    comune: 'Valmorea',
    provincia: Province.CO,
  },
  {
    comune: 'Val Rezzo',
    provincia: Province.CO,
  },
  {
    comune: 'Valsolda',
    provincia: Province.CO,
  },
  {
    comune: 'Veleso',
    provincia: Province.CO,
  },
  {
    comune: 'Veniano',
    provincia: Province.CO,
  },
  {
    comune: 'Vercana',
    provincia: Province.CO,
  },
  {
    comune: 'Vertemate con Minoprio',
    provincia: Province.CO,
  },
  {
    comune: 'Villa Guardia',
    provincia: Province.CO,
  },
  {
    comune: 'Zelbio',
    provincia: Province.CO,
  },
  {
    comune: 'San Siro',
    provincia: Province.CO,
  },
  {
    comune: 'Gravedona ed Uniti',
    provincia: Province.CO,
  },
  {
    comune: 'Bellagio',
    provincia: Province.CO,
  },
  {
    comune: 'Colverde',
    provincia: Province.CO,
  },
  {
    comune: 'Tremezzina',
    provincia: Province.CO,
  },
  {
    comune: 'Alta Valle Intelvi',
    provincia: Province.CO,
  },
  {
    comune: 'Centro Valle Intelvi',
    provincia: Province.CO,
  },
  {
    comune: 'Solbiate con Cagno',
    provincia: Province.CO,
  },
  {
    comune: 'Albaredo per San Marco',
    provincia: Province.SO,
  },
  {
    comune: 'Albosaggia',
    provincia: Province.SO,
  },
  {
    comune: 'Andalo Valtellino',
    provincia: Province.SO,
  },
  {
    comune: 'Aprica',
    provincia: Province.SO,
  },
  {
    comune: 'Ardenno',
    provincia: Province.SO,
  },
  {
    comune: 'Bema',
    provincia: Province.SO,
  },
  {
    comune: 'Berbenno di Valtellina',
    provincia: Province.SO,
  },
  {
    comune: 'Bianzone',
    provincia: Province.SO,
  },
  {
    comune: 'Bormio',
    provincia: Province.SO,
  },
  {
    comune: 'Buglio in Monte',
    provincia: Province.SO,
  },
  {
    comune: 'Caiolo',
    provincia: Province.SO,
  },
  {
    comune: 'Campodolcino',
    provincia: Province.SO,
  },
  {
    comune: 'Caspoggio',
    provincia: Province.SO,
  },
  {
    comune: "Castello dell'Acqua",
    provincia: Province.SO,
  },
  {
    comune: 'Castione Andevenno',
    provincia: Province.SO,
  },
  {
    comune: 'Cedrasco',
    provincia: Province.SO,
  },
  {
    comune: 'Cercino',
    provincia: Province.SO,
  },
  {
    comune: 'Chiavenna',
    provincia: Province.SO,
  },
  {
    comune: 'Chiesa in Valmalenco',
    provincia: Province.SO,
  },
  {
    comune: 'Chiuro',
    provincia: Province.SO,
  },
  {
    comune: 'Cino',
    provincia: Province.SO,
  },
  {
    comune: 'Civo',
    provincia: Province.SO,
  },
  {
    comune: 'Colorina',
    provincia: Province.SO,
  },
  {
    comune: 'Cosio Valtellino',
    provincia: Province.SO,
  },
  {
    comune: 'Dazio',
    provincia: Province.SO,
  },
  {
    comune: 'Delebio',
    provincia: Province.SO,
  },
  {
    comune: 'Dubino',
    provincia: Province.SO,
  },
  {
    comune: 'Faedo Valtellino',
    provincia: Province.SO,
  },
  {
    comune: 'Forcola',
    provincia: Province.SO,
  },
  {
    comune: 'Fusine',
    provincia: Province.SO,
  },
  {
    comune: 'Gerola Alta',
    provincia: Province.SO,
  },
  {
    comune: 'Gordona',
    provincia: Province.SO,
  },
  {
    comune: 'Grosio',
    provincia: Province.SO,
  },
  {
    comune: 'Grosotto',
    provincia: Province.SO,
  },
  {
    comune: 'Madesimo',
    provincia: Province.SO,
  },
  {
    comune: 'Lanzada',
    provincia: Province.SO,
  },
  {
    comune: 'Livigno',
    provincia: Province.SO,
  },
  {
    comune: 'Lovero',
    provincia: Province.SO,
  },
  {
    comune: 'Mantello',
    provincia: Province.SO,
  },
  {
    comune: 'Mazzo di Valtellina',
    provincia: Province.SO,
  },
  {
    comune: 'Mello',
    provincia: Province.SO,
  },
  {
    comune: 'Mese',
    provincia: Province.SO,
  },
  {
    comune: 'Montagna in Valtellina',
    provincia: Province.SO,
  },
  {
    comune: 'Morbegno',
    provincia: Province.SO,
  },
  {
    comune: 'Novate Mezzola',
    provincia: Province.SO,
  },
  {
    comune: 'Pedesina',
    provincia: Province.SO,
  },
  {
    comune: 'Piantedo',
    provincia: Province.SO,
  },
  {
    comune: 'Piateda',
    provincia: Province.SO,
  },
  {
    comune: 'Piuro',
    provincia: Province.SO,
  },
  {
    comune: 'Poggiridenti',
    provincia: Province.SO,
  },
  {
    comune: 'Ponte in Valtellina',
    provincia: Province.SO,
  },
  {
    comune: 'Postalesio',
    provincia: Province.SO,
  },
  {
    comune: 'Prata Camportaccio',
    provincia: Province.SO,
  },
  {
    comune: 'Rasura',
    provincia: Province.SO,
  },
  {
    comune: 'Rogolo',
    provincia: Province.SO,
  },
  {
    comune: 'Samolaco',
    provincia: Province.SO,
  },
  {
    comune: 'San Giacomo Filippo',
    provincia: Province.SO,
  },
  {
    comune: 'Sernio',
    provincia: Province.SO,
  },
  {
    comune: 'Sondalo',
    provincia: Province.SO,
  },
  {
    comune: 'Sondrio',
    provincia: Province.SO,
  },
  {
    comune: 'Spriana',
    provincia: Province.SO,
  },
  {
    comune: 'Talamona',
    provincia: Province.SO,
  },
  {
    comune: 'Tartano',
    provincia: Province.SO,
  },
  {
    comune: 'Teglio',
    provincia: Province.SO,
  },
  {
    comune: 'Tirano',
    provincia: Province.SO,
  },
  {
    comune: 'Torre di Santa Maria',
    provincia: Province.SO,
  },
  {
    comune: "Tovo di Sant'Agata",
    provincia: Province.SO,
  },
  {
    comune: 'Traona',
    provincia: Province.SO,
  },
  {
    comune: 'Tresivio',
    provincia: Province.SO,
  },
  {
    comune: 'Valdidentro',
    provincia: Province.SO,
  },
  {
    comune: 'Valdisotto',
    provincia: Province.SO,
  },
  {
    comune: 'Valfurva',
    provincia: Province.SO,
  },
  {
    comune: 'Val Masino',
    provincia: Province.SO,
  },
  {
    comune: 'Verceia',
    provincia: Province.SO,
  },
  {
    comune: 'Vervio',
    provincia: Province.SO,
  },
  {
    comune: 'Villa di Chiavenna',
    provincia: Province.SO,
  },
  {
    comune: 'Villa di Tirano',
    provincia: Province.SO,
  },
  {
    comune: 'Abbiategrasso',
    provincia: Province.MI,
  },
  {
    comune: 'Albairate',
    provincia: Province.MI,
  },
  {
    comune: 'Arconate',
    provincia: Province.MI,
  },
  {
    comune: 'Arese',
    provincia: Province.MI,
  },
  {
    comune: 'Arluno',
    provincia: Province.MI,
  },
  {
    comune: 'Assago',
    provincia: Province.MI,
  },
  {
    comune: 'Bareggio',
    provincia: Province.MI,
  },
  {
    comune: 'Basiano',
    provincia: Province.MI,
  },
  {
    comune: 'Basiglio',
    provincia: Province.MI,
  },
  {
    comune: 'Bellinzago Lombardo',
    provincia: Province.MI,
  },
  {
    comune: 'Bernate Ticino',
    provincia: Province.MI,
  },
  {
    comune: 'Besate',
    provincia: Province.MI,
  },
  {
    comune: 'Binasco',
    provincia: Province.MI,
  },
  {
    comune: 'Boffalora sopra Ticino',
    provincia: Province.MI,
  },
  {
    comune: 'Bollate',
    provincia: Province.MI,
  },
  {
    comune: 'Bresso',
    provincia: Province.MI,
  },
  {
    comune: 'Bubbiano',
    provincia: Province.MI,
  },
  {
    comune: 'Buccinasco',
    provincia: Province.MI,
  },
  {
    comune: 'Buscate',
    provincia: Province.MI,
  },
  {
    comune: 'Bussero',
    provincia: Province.MI,
  },
  {
    comune: 'Busto Garolfo',
    provincia: Province.MI,
  },
  {
    comune: 'Calvignasco',
    provincia: Province.MI,
  },
  {
    comune: 'Cambiago',
    provincia: Province.MI,
  },
  {
    comune: 'Canegrate',
    provincia: Province.MI,
  },
  {
    comune: 'Carpiano',
    provincia: Province.MI,
  },
  {
    comune: 'Carugate',
    provincia: Province.MI,
  },
  {
    comune: 'Casarile',
    provincia: Province.MI,
  },
  {
    comune: 'Casorezzo',
    provincia: Province.MI,
  },
  {
    comune: "Cassano d'Adda",
    provincia: Province.MI,
  },
  {
    comune: "Cassina de' Pecchi",
    provincia: Province.MI,
  },
  {
    comune: 'Cassinetta di Lugagnano',
    provincia: Province.MI,
  },
  {
    comune: 'Castano Primo',
    provincia: Province.MI,
  },
  {
    comune: 'Cernusco sul Naviglio',
    provincia: Province.MI,
  },
  {
    comune: 'Cerro al Lambro',
    provincia: Province.MI,
  },
  {
    comune: 'Cerro Maggiore',
    provincia: Province.MI,
  },
  {
    comune: 'Cesano Boscone',
    provincia: Province.MI,
  },
  {
    comune: 'Cesate',
    provincia: Province.MI,
  },
  {
    comune: 'Cinisello Balsamo',
    provincia: Province.MI,
  },
  {
    comune: 'Cisliano',
    provincia: Province.MI,
  },
  {
    comune: 'Cologno Monzese',
    provincia: Province.MI,
  },
  {
    comune: 'Colturano',
    provincia: Province.MI,
  },
  {
    comune: 'Corbetta',
    provincia: Province.MI,
  },
  {
    comune: 'Cormano',
    provincia: Province.MI,
  },
  {
    comune: 'Cornaredo',
    provincia: Province.MI,
  },
  {
    comune: 'Corsico',
    provincia: Province.MI,
  },
  {
    comune: 'Cuggiono',
    provincia: Province.MI,
  },
  {
    comune: 'Cusago',
    provincia: Province.MI,
  },
  {
    comune: 'Cusano Milanino',
    provincia: Province.MI,
  },
  {
    comune: 'Dairago',
    provincia: Province.MI,
  },
  {
    comune: 'Dresano',
    provincia: Province.MI,
  },
  {
    comune: 'Gaggiano',
    provincia: Province.MI,
  },
  {
    comune: 'Garbagnate Milanese',
    provincia: Province.MI,
  },
  {
    comune: 'Gessate',
    provincia: Province.MI,
  },
  {
    comune: 'Gorgonzola',
    provincia: Province.MI,
  },
  {
    comune: 'Grezzago',
    provincia: Province.MI,
  },
  {
    comune: 'Gudo Visconti',
    provincia: Province.MI,
  },
  {
    comune: 'Inveruno',
    provincia: Province.MI,
  },
  {
    comune: 'Inzago',
    provincia: Province.MI,
  },
  {
    comune: 'Lacchiarella',
    provincia: Province.MI,
  },
  {
    comune: 'Lainate',
    provincia: Province.MI,
  },
  {
    comune: 'Legnano',
    provincia: Province.MI,
  },
  {
    comune: 'Liscate',
    provincia: Province.MI,
  },
  {
    comune: 'Locate di Triulzi',
    provincia: Province.MI,
  },
  {
    comune: 'Magenta',
    provincia: Province.MI,
  },
  {
    comune: 'Magnago',
    provincia: Province.MI,
  },
  {
    comune: 'Marcallo con Casone',
    provincia: Province.MI,
  },
  {
    comune: 'Masate',
    provincia: Province.MI,
  },
  {
    comune: 'Mediglia',
    provincia: Province.MI,
  },
  {
    comune: 'Melegnano',
    provincia: Province.MI,
  },
  {
    comune: 'Melzo',
    provincia: Province.MI,
  },
  {
    comune: 'Mesero',
    provincia: Province.MI,
  },
  {
    comune: 'Milano',
    provincia: Province.MI,
  },
  {
    comune: 'Morimondo',
    provincia: Province.MI,
  },
  {
    comune: 'Motta Visconti',
    provincia: Province.MI,
  },
  {
    comune: 'Nerviano',
    provincia: Province.MI,
  },
  {
    comune: 'Nosate',
    provincia: Province.MI,
  },
  {
    comune: 'Novate Milanese',
    provincia: Province.MI,
  },
  {
    comune: 'Noviglio',
    provincia: Province.MI,
  },
  {
    comune: 'Opera',
    provincia: Province.MI,
  },
  {
    comune: 'Ossona',
    provincia: Province.MI,
  },
  {
    comune: 'Ozzero',
    provincia: Province.MI,
  },
  {
    comune: 'Paderno Dugnano',
    provincia: Province.MI,
  },
  {
    comune: 'Pantigliate',
    provincia: Province.MI,
  },
  {
    comune: 'Parabiago',
    provincia: Province.MI,
  },
  {
    comune: 'Paullo',
    provincia: Province.MI,
  },
  {
    comune: 'Pero',
    provincia: Province.MI,
  },
  {
    comune: 'Peschiera Borromeo',
    provincia: Province.MI,
  },
  {
    comune: 'Pessano con Bornago',
    provincia: Province.MI,
  },
  {
    comune: 'Pieve Emanuele',
    provincia: Province.MI,
  },
  {
    comune: 'Pioltello',
    provincia: Province.MI,
  },
  {
    comune: 'Pogliano Milanese',
    provincia: Province.MI,
  },
  {
    comune: "Pozzo d'Adda",
    provincia: Province.MI,
  },
  {
    comune: 'Pozzuolo Martesana',
    provincia: Province.MI,
  },
  {
    comune: 'Pregnana Milanese',
    provincia: Province.MI,
  },
  {
    comune: 'Rescaldina',
    provincia: Province.MI,
  },
  {
    comune: 'Rho',
    provincia: Province.MI,
  },
  {
    comune: 'Robecchetto con Induno',
    provincia: Province.MI,
  },
  {
    comune: 'Robecco sul Naviglio',
    provincia: Province.MI,
  },
  {
    comune: 'Rodano',
    provincia: Province.MI,
  },
  {
    comune: 'Rosate',
    provincia: Province.MI,
  },
  {
    comune: 'Rozzano',
    provincia: Province.MI,
  },
  {
    comune: 'San Colombano al Lambro',
    provincia: Province.MI,
  },
  {
    comune: 'San Donato Milanese',
    provincia: Province.MI,
  },
  {
    comune: 'San Giorgio su Legnano',
    provincia: Province.MI,
  },
  {
    comune: 'San Giuliano Milanese',
    provincia: Province.MI,
  },
  {
    comune: 'Santo Stefano Ticino',
    provincia: Province.MI,
  },
  {
    comune: 'San Vittore Olona',
    provincia: Province.MI,
  },
  {
    comune: 'San Zenone al Lambro',
    provincia: Province.MI,
  },
  {
    comune: 'Sedriano',
    provincia: Province.MI,
  },
  {
    comune: 'Segrate',
    provincia: Province.MI,
  },
  {
    comune: 'Senago',
    provincia: Province.MI,
  },
  {
    comune: 'Sesto San Giovanni',
    provincia: Province.MI,
  },
  {
    comune: 'Settala',
    provincia: Province.MI,
  },
  {
    comune: 'Settimo Milanese',
    provincia: Province.MI,
  },
  {
    comune: 'Solaro',
    provincia: Province.MI,
  },
  {
    comune: 'Trezzano Rosa',
    provincia: Province.MI,
  },
  {
    comune: 'Trezzano sul Naviglio',
    provincia: Province.MI,
  },
  {
    comune: "Trezzo sull'Adda",
    provincia: Province.MI,
  },
  {
    comune: 'Tribiano',
    provincia: Province.MI,
  },
  {
    comune: 'Truccazzano',
    provincia: Province.MI,
  },
  {
    comune: 'Turbigo',
    provincia: Province.MI,
  },
  {
    comune: 'Vanzago',
    provincia: Province.MI,
  },
  {
    comune: "Vaprio d'Adda",
    provincia: Province.MI,
  },
  {
    comune: 'Vernate',
    provincia: Province.MI,
  },
  {
    comune: 'Vignate',
    provincia: Province.MI,
  },
  {
    comune: 'Vimodrone',
    provincia: Province.MI,
  },
  {
    comune: 'Vittuone',
    provincia: Province.MI,
  },
  {
    comune: 'Vizzolo Predabissi',
    provincia: Province.MI,
  },
  {
    comune: 'Zibido San Giacomo',
    provincia: Province.MI,
  },
  {
    comune: 'Villa Cortese',
    provincia: Province.MI,
  },
  {
    comune: 'Vanzaghello',
    provincia: Province.MI,
  },
  {
    comune: 'Baranzate',
    provincia: Province.MI,
  },
  {
    comune: 'Vermezzo con Zelo',
    provincia: Province.MI,
  },
  {
    comune: 'Adrara San Martino',
    provincia: Province.BG,
  },
  {
    comune: 'Adrara San Rocco',
    provincia: Province.BG,
  },
  {
    comune: "Albano Sant'Alessandro",
    provincia: Province.BG,
  },
  {
    comune: 'Albino',
    provincia: Province.BG,
  },
  {
    comune: 'Almè',
    provincia: Province.BG,
  },
  {
    comune: 'Almenno San Bartolomeo',
    provincia: Province.BG,
  },
  {
    comune: 'Almenno San Salvatore',
    provincia: Province.BG,
  },
  {
    comune: 'Alzano Lombardo',
    provincia: Province.BG,
  },
  {
    comune: 'Ambivere',
    provincia: Province.BG,
  },
  {
    comune: 'Antegnate',
    provincia: Province.BG,
  },
  {
    comune: 'Arcene',
    provincia: Province.BG,
  },
  {
    comune: 'Ardesio',
    provincia: Province.BG,
  },
  {
    comune: "Arzago d'Adda",
    provincia: Province.BG,
  },
  {
    comune: 'Averara',
    provincia: Province.BG,
  },
  {
    comune: 'Aviatico',
    provincia: Province.BG,
  },
  {
    comune: 'Azzano San Paolo',
    provincia: Province.BG,
  },
  {
    comune: 'Azzone',
    provincia: Province.BG,
  },
  {
    comune: 'Bagnatica',
    provincia: Province.BG,
  },
  {
    comune: 'Barbata',
    provincia: Province.BG,
  },
  {
    comune: 'Bariano',
    provincia: Province.BG,
  },
  {
    comune: 'Barzana',
    provincia: Province.BG,
  },
  {
    comune: 'Bedulita',
    provincia: Province.BG,
  },
  {
    comune: 'Berbenno',
    provincia: Province.BG,
  },
  {
    comune: 'Bergamo',
    provincia: Province.BG,
  },
  {
    comune: 'Berzo San Fermo',
    provincia: Province.BG,
  },
  {
    comune: 'Bianzano',
    provincia: Province.BG,
  },
  {
    comune: 'Blello',
    provincia: Province.BG,
  },
  {
    comune: 'Bolgare',
    provincia: Province.BG,
  },
  {
    comune: 'Boltiere',
    provincia: Province.BG,
  },
  {
    comune: 'Bonate Sopra',
    provincia: Province.BG,
  },
  {
    comune: 'Bonate Sotto',
    provincia: Province.BG,
  },
  {
    comune: 'Borgo di Terzo',
    provincia: Province.BG,
  },
  {
    comune: 'Bossico',
    provincia: Province.BG,
  },
  {
    comune: 'Bottanuco',
    provincia: Province.BG,
  },
  {
    comune: 'Bracca',
    provincia: Province.BG,
  },
  {
    comune: 'Branzi',
    provincia: Province.BG,
  },
  {
    comune: 'Brembate',
    provincia: Province.BG,
  },
  {
    comune: 'Brembate di Sopra',
    provincia: Province.BG,
  },
  {
    comune: "Brignano Gera d'Adda",
    provincia: Province.BG,
  },
  {
    comune: 'Brumano',
    provincia: Province.BG,
  },
  {
    comune: 'Brusaporto',
    provincia: Province.BG,
  },
  {
    comune: 'Calcinate',
    provincia: Province.BG,
  },
  {
    comune: 'Calcio',
    provincia: Province.BG,
  },
  {
    comune: "Calusco d'Adda",
    provincia: Province.BG,
  },
  {
    comune: 'Calvenzano',
    provincia: Province.BG,
  },
  {
    comune: 'Camerata Cornello',
    provincia: Province.BG,
  },
  {
    comune: "Canonica d'Adda",
    provincia: Province.BG,
  },
  {
    comune: 'Capizzone',
    provincia: Province.BG,
  },
  {
    comune: 'Capriate San Gervasio',
    provincia: Province.BG,
  },
  {
    comune: 'Caprino Bergamasco',
    provincia: Province.BG,
  },
  {
    comune: 'Caravaggio',
    provincia: Province.BG,
  },
  {
    comune: 'Carobbio degli Angeli',
    provincia: Province.BG,
  },
  {
    comune: 'Carona',
    provincia: Province.BG,
  },
  {
    comune: 'Carvico',
    provincia: Province.BG,
  },
  {
    comune: 'Casazza',
    provincia: Province.BG,
  },
  {
    comune: "Casirate d'Adda",
    provincia: Province.BG,
  },
  {
    comune: 'Casnigo',
    provincia: Province.BG,
  },
  {
    comune: 'Cassiglio',
    provincia: Province.BG,
  },
  {
    comune: 'Castelli Calepio',
    provincia: Province.BG,
  },
  {
    comune: 'Castel Rozzone',
    provincia: Province.BG,
  },
  {
    comune: 'Castione della Presolana',
    provincia: Province.BG,
  },
  {
    comune: 'Castro',
    provincia: Province.BG,
  },
  {
    comune: 'Cavernago',
    provincia: Province.BG,
  },
  {
    comune: "Cazzano Sant'Andrea",
    provincia: Province.BG,
  },
  {
    comune: 'Cenate Sopra',
    provincia: Province.BG,
  },
  {
    comune: 'Cenate Sotto',
    provincia: Province.BG,
  },
  {
    comune: 'Cene',
    provincia: Province.BG,
  },
  {
    comune: 'Cerete',
    provincia: Province.BG,
  },
  {
    comune: "Chignolo d'Isola",
    provincia: Province.BG,
  },
  {
    comune: 'Chiuduno',
    provincia: Province.BG,
  },
  {
    comune: 'Cisano Bergamasco',
    provincia: Province.BG,
  },
  {
    comune: 'Ciserano',
    provincia: Province.BG,
  },
  {
    comune: 'Cividate al Piano',
    provincia: Province.BG,
  },
  {
    comune: 'Clusone',
    provincia: Province.BG,
  },
  {
    comune: 'Colere',
    provincia: Province.BG,
  },
  {
    comune: 'Cologno al Serio',
    provincia: Province.BG,
  },
  {
    comune: 'Colzate',
    provincia: Province.BG,
  },
  {
    comune: 'Comun Nuovo',
    provincia: Province.BG,
  },
  {
    comune: 'Corna Imagna',
    provincia: Province.BG,
  },
  {
    comune: 'Cortenuova',
    provincia: Province.BG,
  },
  {
    comune: 'Costa di Mezzate',
    provincia: Province.BG,
  },
  {
    comune: 'Costa Valle Imagna',
    provincia: Province.BG,
  },
  {
    comune: 'Costa Volpino',
    provincia: Province.BG,
  },
  {
    comune: 'Covo',
    provincia: Province.BG,
  },
  {
    comune: 'Credaro',
    provincia: Province.BG,
  },
  {
    comune: 'Curno',
    provincia: Province.BG,
  },
  {
    comune: 'Cusio',
    provincia: Province.BG,
  },
  {
    comune: 'Dalmine',
    provincia: Province.BG,
  },
  {
    comune: 'Dossena',
    provincia: Province.BG,
  },
  {
    comune: 'Endine Gaiano',
    provincia: Province.BG,
  },
  {
    comune: 'Entratico',
    provincia: Province.BG,
  },
  {
    comune: "Fara Gera d'Adda",
    provincia: Province.BG,
  },
  {
    comune: 'Fara Olivana con Sola',
    provincia: Province.BG,
  },
  {
    comune: 'Filago',
    provincia: Province.BG,
  },
  {
    comune: 'Fino del Monte',
    provincia: Province.BG,
  },
  {
    comune: 'Fiorano al Serio',
    provincia: Province.BG,
  },
  {
    comune: 'Fontanella',
    provincia: Province.BG,
  },
  {
    comune: 'Fonteno',
    provincia: Province.BG,
  },
  {
    comune: 'Foppolo',
    provincia: Province.BG,
  },
  {
    comune: 'Foresto Sparso',
    provincia: Province.BG,
  },
  {
    comune: 'Fornovo San Giovanni',
    provincia: Province.BG,
  },
  {
    comune: 'Fuipiano Valle Imagna',
    provincia: Province.BG,
  },
  {
    comune: 'Gandellino',
    provincia: Province.BG,
  },
  {
    comune: 'Gandino',
    provincia: Province.BG,
  },
  {
    comune: 'Gandosso',
    provincia: Province.BG,
  },
  {
    comune: 'Gaverina Terme',
    provincia: Province.BG,
  },
  {
    comune: 'Gazzaniga',
    provincia: Province.BG,
  },
  {
    comune: 'Ghisalba',
    provincia: Province.BG,
  },
  {
    comune: 'Gorlago',
    provincia: Province.BG,
  },
  {
    comune: 'Gorle',
    provincia: Province.BG,
  },
  {
    comune: 'Gorno',
    provincia: Province.BG,
  },
  {
    comune: 'Grassobbio',
    provincia: Province.BG,
  },
  {
    comune: 'Gromo',
    provincia: Province.BG,
  },
  {
    comune: 'Grone',
    provincia: Province.BG,
  },
  {
    comune: 'Grumello del Monte',
    provincia: Province.BG,
  },
  {
    comune: 'Isola di Fondra',
    provincia: Province.BG,
  },
  {
    comune: 'Isso',
    provincia: Province.BG,
  },
  {
    comune: 'Lallio',
    provincia: Province.BG,
  },
  {
    comune: 'Leffe',
    provincia: Province.BG,
  },
  {
    comune: 'Lenna',
    provincia: Province.BG,
  },
  {
    comune: 'Levate',
    provincia: Province.BG,
  },
  {
    comune: 'Locatello',
    provincia: Province.BG,
  },
  {
    comune: 'Lovere',
    provincia: Province.BG,
  },
  {
    comune: 'Lurano',
    provincia: Province.BG,
  },
  {
    comune: 'Luzzana',
    provincia: Province.BG,
  },
  {
    comune: 'Madone',
    provincia: Province.BG,
  },
  {
    comune: 'Mapello',
    provincia: Province.BG,
  },
  {
    comune: 'Martinengo',
    provincia: Province.BG,
  },
  {
    comune: 'Mezzoldo',
    provincia: Province.BG,
  },
  {
    comune: "Misano di Gera d'Adda",
    provincia: Province.BG,
  },
  {
    comune: "Moio de' Calvi",
    provincia: Province.BG,
  },
  {
    comune: 'Monasterolo del Castello',
    provincia: Province.BG,
  },
  {
    comune: 'Montello',
    provincia: Province.BG,
  },
  {
    comune: 'Morengo',
    provincia: Province.BG,
  },
  {
    comune: 'Mornico al Serio',
    provincia: Province.BG,
  },
  {
    comune: 'Mozzanica',
    provincia: Province.BG,
  },
  {
    comune: 'Mozzo',
    provincia: Province.BG,
  },
  {
    comune: 'Nembro',
    provincia: Province.BG,
  },
  {
    comune: 'Olmo al Brembo',
    provincia: Province.BG,
  },
  {
    comune: 'Oltre il Colle',
    provincia: Province.BG,
  },
  {
    comune: 'Oltressenda Alta',
    provincia: Province.BG,
  },
  {
    comune: 'Oneta',
    provincia: Province.BG,
  },
  {
    comune: 'Onore',
    provincia: Province.BG,
  },
  {
    comune: 'Orio al Serio',
    provincia: Province.BG,
  },
  {
    comune: 'Ornica',
    provincia: Province.BG,
  },
  {
    comune: 'Osio Sopra',
    provincia: Province.BG,
  },
  {
    comune: 'Osio Sotto',
    provincia: Province.BG,
  },
  {
    comune: 'Pagazzano',
    provincia: Province.BG,
  },
  {
    comune: 'Paladina',
    provincia: Province.BG,
  },
  {
    comune: 'Palazzago',
    provincia: Province.BG,
  },
  {
    comune: 'Palosco',
    provincia: Province.BG,
  },
  {
    comune: 'Parre',
    provincia: Province.BG,
  },
  {
    comune: 'Parzanica',
    provincia: Province.BG,
  },
  {
    comune: 'Pedrengo',
    provincia: Province.BG,
  },
  {
    comune: 'Peia',
    provincia: Province.BG,
  },
  {
    comune: 'Pianico',
    provincia: Province.BG,
  },
  {
    comune: 'Piario',
    provincia: Province.BG,
  },
  {
    comune: 'Piazza Brembana',
    provincia: Province.BG,
  },
  {
    comune: 'Piazzatorre',
    provincia: Province.BG,
  },
  {
    comune: 'Piazzolo',
    provincia: Province.BG,
  },
  {
    comune: 'Pognano',
    provincia: Province.BG,
  },
  {
    comune: 'Ponte Nossa',
    provincia: Province.BG,
  },
  {
    comune: 'Ponteranica',
    provincia: Province.BG,
  },
  {
    comune: 'Ponte San Pietro',
    provincia: Province.BG,
  },
  {
    comune: 'Pontida',
    provincia: Province.BG,
  },
  {
    comune: 'Pontirolo Nuovo',
    provincia: Province.BG,
  },
  {
    comune: 'Pradalunga',
    provincia: Province.BG,
  },
  {
    comune: 'Predore',
    provincia: Province.BG,
  },
  {
    comune: 'Premolo',
    provincia: Province.BG,
  },
  {
    comune: 'Presezzo',
    provincia: Province.BG,
  },
  {
    comune: 'Pumenengo',
    provincia: Province.BG,
  },
  {
    comune: 'Ranica',
    provincia: Province.BG,
  },
  {
    comune: 'Ranzanico',
    provincia: Province.BG,
  },
  {
    comune: 'Riva di Solto',
    provincia: Province.BG,
  },
  {
    comune: 'Rogno',
    provincia: Province.BG,
  },
  {
    comune: 'Romano di Lombardia',
    provincia: Province.BG,
  },
  {
    comune: 'Roncobello',
    provincia: Province.BG,
  },
  {
    comune: 'Roncola',
    provincia: Province.BG,
  },
  {
    comune: "Rota d'Imagna",
    provincia: Province.BG,
  },
  {
    comune: 'Rovetta',
    provincia: Province.BG,
  },
  {
    comune: 'San Giovanni Bianco',
    provincia: Province.BG,
  },
  {
    comune: "San Paolo d'Argon",
    provincia: Province.BG,
  },
  {
    comune: 'San Pellegrino Terme',
    provincia: Province.BG,
  },
  {
    comune: 'Santa Brigida',
    provincia: Province.BG,
  },
  {
    comune: 'Sarnico',
    provincia: Province.BG,
  },
  {
    comune: 'Scanzorosciate',
    provincia: Province.BG,
  },
  {
    comune: 'Schilpario',
    provincia: Province.BG,
  },
  {
    comune: 'Sedrina',
    provincia: Province.BG,
  },
  {
    comune: 'Selvino',
    provincia: Province.BG,
  },
  {
    comune: 'Seriate',
    provincia: Province.BG,
  },
  {
    comune: 'Serina',
    provincia: Province.BG,
  },
  {
    comune: 'Solto Collina',
    provincia: Province.BG,
  },
  {
    comune: 'Songavazzo',
    provincia: Province.BG,
  },
  {
    comune: 'Sorisole',
    provincia: Province.BG,
  },
  {
    comune: 'Sotto il Monte Giovanni XXIII',
    provincia: Province.BG,
  },
  {
    comune: 'Sovere',
    provincia: Province.BG,
  },
  {
    comune: 'Spinone al Lago',
    provincia: Province.BG,
  },
  {
    comune: 'Spirano',
    provincia: Province.BG,
  },
  {
    comune: 'Stezzano',
    provincia: Province.BG,
  },
  {
    comune: 'Strozza',
    provincia: Province.BG,
  },
  {
    comune: 'Suisio',
    provincia: Province.BG,
  },
  {
    comune: 'Taleggio',
    provincia: Province.BG,
  },
  {
    comune: 'Tavernola Bergamasca',
    provincia: Province.BG,
  },
  {
    comune: 'Telgate',
    provincia: Province.BG,
  },
  {
    comune: "Terno d'Isola",
    provincia: Province.BG,
  },
  {
    comune: 'Torre Boldone',
    provincia: Province.BG,
  },
  {
    comune: "Torre de' Busi",
    provincia: Province.BG,
  },
  {
    comune: "Torre de' Roveri",
    provincia: Province.BG,
  },
  {
    comune: 'Torre Pallavicina',
    provincia: Province.BG,
  },
  {
    comune: 'Trescore Balneario',
    provincia: Province.BG,
  },
  {
    comune: 'Treviglio',
    provincia: Province.BG,
  },
  {
    comune: 'Treviolo',
    provincia: Province.BG,
  },
  {
    comune: 'Ubiale Clanezzo',
    provincia: Province.BG,
  },
  {
    comune: 'Urgnano',
    provincia: Province.BG,
  },
  {
    comune: 'Valbondione',
    provincia: Province.BG,
  },
  {
    comune: 'Valbrembo',
    provincia: Province.BG,
  },
  {
    comune: 'Valgoglio',
    provincia: Province.BG,
  },
  {
    comune: 'Valleve',
    provincia: Province.BG,
  },
  {
    comune: 'Valnegra',
    provincia: Province.BG,
  },
  {
    comune: 'Valtorta',
    provincia: Province.BG,
  },
  {
    comune: 'Vedeseta',
    provincia: Province.BG,
  },
  {
    comune: 'Verdellino',
    provincia: Province.BG,
  },
  {
    comune: 'Verdello',
    provincia: Province.BG,
  },
  {
    comune: 'Vertova',
    provincia: Province.BG,
  },
  {
    comune: 'Viadanica',
    provincia: Province.BG,
  },
  {
    comune: 'Vigano San Martino',
    provincia: Province.BG,
  },
  {
    comune: 'Vigolo',
    provincia: Province.BG,
  },
  {
    comune: "Villa d'Adda",
    provincia: Province.BG,
  },
  {
    comune: "Villa d'Almè",
    provincia: Province.BG,
  },
  {
    comune: 'Villa di Serio',
    provincia: Province.BG,
  },
  {
    comune: "Villa d'Ogna",
    provincia: Province.BG,
  },
  {
    comune: 'Villongo',
    provincia: Province.BG,
  },
  {
    comune: 'Vilminore di Scalve',
    provincia: Province.BG,
  },
  {
    comune: 'Zandobbio',
    provincia: Province.BG,
  },
  {
    comune: 'Zanica',
    provincia: Province.BG,
  },
  {
    comune: 'Zogno',
    provincia: Province.BG,
  },
  {
    comune: 'Costa Serina',
    provincia: Province.BG,
  },
  {
    comune: 'Algua',
    provincia: Province.BG,
  },
  {
    comune: 'Cornalba',
    provincia: Province.BG,
  },
  {
    comune: 'Medolago',
    provincia: Province.BG,
  },
  {
    comune: 'Solza',
    provincia: Province.BG,
  },
  {
    comune: "Sant'Omobono Terme",
    provincia: Province.BG,
  },
  {
    comune: 'Val Brembilla',
    provincia: Province.BG,
  },
  {
    comune: 'Acquafredda',
    provincia: Province.BS,
  },
  {
    comune: 'Adro',
    provincia: Province.BS,
  },
  {
    comune: 'Agnosine',
    provincia: Province.BS,
  },
  {
    comune: 'Alfianello',
    provincia: Province.BS,
  },
  {
    comune: 'Anfo',
    provincia: Province.BS,
  },
  {
    comune: 'Angolo Terme',
    provincia: Province.BS,
  },
  {
    comune: 'Artogne',
    provincia: Province.BS,
  },
  {
    comune: 'Azzano Mella',
    provincia: Province.BS,
  },
  {
    comune: 'Bagnolo Mella',
    provincia: Province.BS,
  },
  {
    comune: 'Bagolino',
    provincia: Province.BS,
  },
  {
    comune: 'Barbariga',
    provincia: Province.BS,
  },
  {
    comune: 'Barghe',
    provincia: Province.BS,
  },
  {
    comune: 'Bassano Bresciano',
    provincia: Province.BS,
  },
  {
    comune: 'Bedizzole',
    provincia: Province.BS,
  },
  {
    comune: 'Berlingo',
    provincia: Province.BS,
  },
  {
    comune: 'Berzo Demo',
    provincia: Province.BS,
  },
  {
    comune: 'Berzo Inferiore',
    provincia: Province.BS,
  },
  {
    comune: 'Bienno',
    provincia: Province.BS,
  },
  {
    comune: 'Bione',
    provincia: Province.BS,
  },
  {
    comune: 'Borgo San Giacomo',
    provincia: Province.BS,
  },
  {
    comune: 'Borgosatollo',
    provincia: Province.BS,
  },
  {
    comune: 'Borno',
    provincia: Province.BS,
  },
  {
    comune: 'Botticino',
    provincia: Province.BS,
  },
  {
    comune: 'Bovegno',
    provincia: Province.BS,
  },
  {
    comune: 'Bovezzo',
    provincia: Province.BS,
  },
  {
    comune: 'Brandico',
    provincia: Province.BS,
  },
  {
    comune: 'Braone',
    provincia: Province.BS,
  },
  {
    comune: 'Breno',
    provincia: Province.BS,
  },
  {
    comune: 'Brescia',
    provincia: Province.BS,
  },
  {
    comune: 'Brione',
    provincia: Province.BS,
  },
  {
    comune: 'Caino',
    provincia: Province.BS,
  },
  {
    comune: 'Calcinato',
    provincia: Province.BS,
  },
  {
    comune: 'Calvagese della Riviera',
    provincia: Province.BS,
  },
  {
    comune: 'Calvisano',
    provincia: Province.BS,
  },
  {
    comune: 'Capo di Ponte',
    provincia: Province.BS,
  },
  {
    comune: 'Capovalle',
    provincia: Province.BS,
  },
  {
    comune: 'Capriano del Colle',
    provincia: Province.BS,
  },
  {
    comune: 'Capriolo',
    provincia: Province.BS,
  },
  {
    comune: 'Carpenedolo',
    provincia: Province.BS,
  },
  {
    comune: 'Castegnato',
    provincia: Province.BS,
  },
  {
    comune: 'Castelcovati',
    provincia: Province.BS,
  },
  {
    comune: 'Castel Mella',
    provincia: Province.BS,
  },
  {
    comune: 'Castenedolo',
    provincia: Province.BS,
  },
  {
    comune: 'Casto',
    provincia: Province.BS,
  },
  {
    comune: 'Castrezzato',
    provincia: Province.BS,
  },
  {
    comune: 'Cazzago San Martino',
    provincia: Province.BS,
  },
  {
    comune: 'Cedegolo',
    provincia: Province.BS,
  },
  {
    comune: 'Cellatica',
    provincia: Province.BS,
  },
  {
    comune: 'Cerveno',
    provincia: Province.BS,
  },
  {
    comune: 'Ceto',
    provincia: Province.BS,
  },
  {
    comune: 'Cevo',
    provincia: Province.BS,
  },
  {
    comune: 'Chiari',
    provincia: Province.BS,
  },
  {
    comune: 'Cigole',
    provincia: Province.BS,
  },
  {
    comune: 'Cimbergo',
    provincia: Province.BS,
  },
  {
    comune: 'Cividate Camuno',
    provincia: Province.BS,
  },
  {
    comune: 'Coccaglio',
    provincia: Province.BS,
  },
  {
    comune: 'Collebeato',
    provincia: Province.BS,
  },
  {
    comune: 'Collio',
    provincia: Province.BS,
  },
  {
    comune: 'Cologne',
    provincia: Province.BS,
  },
  {
    comune: 'Comezzano-Cizzago',
    provincia: Province.BS,
  },
  {
    comune: 'Concesio',
    provincia: Province.BS,
  },
  {
    comune: 'Corte Franca',
    provincia: Province.BS,
  },
  {
    comune: 'Corteno Golgi',
    provincia: Province.BS,
  },
  {
    comune: 'Corzano',
    provincia: Province.BS,
  },
  {
    comune: 'Darfo Boario Terme',
    provincia: Province.BS,
  },
  {
    comune: 'Dello',
    provincia: Province.BS,
  },
  {
    comune: 'Desenzano del Garda',
    provincia: Province.BS,
  },
  {
    comune: 'Edolo',
    provincia: Province.BS,
  },
  {
    comune: 'Erbusco',
    provincia: Province.BS,
  },
  {
    comune: 'Esine',
    provincia: Province.BS,
  },
  {
    comune: 'Fiesse',
    provincia: Province.BS,
  },
  {
    comune: 'Flero',
    provincia: Province.BS,
  },
  {
    comune: 'Gambara',
    provincia: Province.BS,
  },
  {
    comune: 'Gardone Riviera',
    provincia: Province.BS,
  },
  {
    comune: 'Gardone Val Trompia',
    provincia: Province.BS,
  },
  {
    comune: 'Gargnano',
    provincia: Province.BS,
  },
  {
    comune: 'Gavardo',
    provincia: Province.BS,
  },
  {
    comune: 'Ghedi',
    provincia: Province.BS,
  },
  {
    comune: 'Gianico',
    provincia: Province.BS,
  },
  {
    comune: 'Gottolengo',
    provincia: Province.BS,
  },
  {
    comune: 'Gussago',
    provincia: Province.BS,
  },
  {
    comune: 'Idro',
    provincia: Province.BS,
  },
  {
    comune: 'Incudine',
    provincia: Province.BS,
  },
  {
    comune: 'Irma',
    provincia: Province.BS,
  },
  {
    comune: 'Iseo',
    provincia: Province.BS,
  },
  {
    comune: 'Isorella',
    provincia: Province.BS,
  },
  {
    comune: 'Lavenone',
    provincia: Province.BS,
  },
  {
    comune: 'Leno',
    provincia: Province.BS,
  },
  {
    comune: 'Limone sul Garda',
    provincia: Province.BS,
  },
  {
    comune: 'Lodrino',
    provincia: Province.BS,
  },
  {
    comune: 'Lograto',
    provincia: Province.BS,
  },
  {
    comune: 'Lonato del Garda',
    provincia: Province.BS,
  },
  {
    comune: 'Longhena',
    provincia: Province.BS,
  },
  {
    comune: 'Losine',
    provincia: Province.BS,
  },
  {
    comune: 'Lozio',
    provincia: Province.BS,
  },
  {
    comune: 'Lumezzane',
    provincia: Province.BS,
  },
  {
    comune: 'Maclodio',
    provincia: Province.BS,
  },
  {
    comune: 'Magasa',
    provincia: Province.BS,
  },
  {
    comune: 'Mairano',
    provincia: Province.BS,
  },
  {
    comune: 'Malegno',
    provincia: Province.BS,
  },
  {
    comune: 'Malonno',
    provincia: Province.BS,
  },
  {
    comune: 'Manerba del Garda',
    provincia: Province.BS,
  },
  {
    comune: 'Manerbio',
    provincia: Province.BS,
  },
  {
    comune: 'Marcheno',
    provincia: Province.BS,
  },
  {
    comune: 'Marmentino',
    provincia: Province.BS,
  },
  {
    comune: 'Marone',
    provincia: Province.BS,
  },
  {
    comune: 'Mazzano',
    provincia: Province.BS,
  },
  {
    comune: 'Milzano',
    provincia: Province.BS,
  },
  {
    comune: 'Moniga del Garda',
    provincia: Province.BS,
  },
  {
    comune: 'Monno',
    provincia: Province.BS,
  },
  {
    comune: 'Monte Isola',
    provincia: Province.BS,
  },
  {
    comune: 'Monticelli Brusati',
    provincia: Province.BS,
  },
  {
    comune: 'Montichiari',
    provincia: Province.BS,
  },
  {
    comune: 'Montirone',
    provincia: Province.BS,
  },
  {
    comune: 'Mura',
    provincia: Province.BS,
  },
  {
    comune: 'Muscoline',
    provincia: Province.BS,
  },
  {
    comune: 'Nave',
    provincia: Province.BS,
  },
  {
    comune: 'Niardo',
    provincia: Province.BS,
  },
  {
    comune: 'Nuvolento',
    provincia: Province.BS,
  },
  {
    comune: 'Nuvolera',
    provincia: Province.BS,
  },
  {
    comune: 'Odolo',
    provincia: Province.BS,
  },
  {
    comune: 'Offlaga',
    provincia: Province.BS,
  },
  {
    comune: 'Ome',
    provincia: Province.BS,
  },
  {
    comune: 'Ono San Pietro',
    provincia: Province.BS,
  },
  {
    comune: 'Orzinuovi',
    provincia: Province.BS,
  },
  {
    comune: 'Orzivecchi',
    provincia: Province.BS,
  },
  {
    comune: 'Ospitaletto',
    provincia: Province.BS,
  },
  {
    comune: 'Ossimo',
    provincia: Province.BS,
  },
  {
    comune: 'Padenghe sul Garda',
    provincia: Province.BS,
  },
  {
    comune: 'Paderno Franciacorta',
    provincia: Province.BS,
  },
  {
    comune: 'Paisco Loveno',
    provincia: Province.BS,
  },
  {
    comune: 'Paitone',
    provincia: Province.BS,
  },
  {
    comune: "Palazzolo sull'Oglio",
    provincia: Province.BS,
  },
  {
    comune: 'Paratico',
    provincia: Province.BS,
  },
  {
    comune: 'Paspardo',
    provincia: Province.BS,
  },
  {
    comune: 'Passirano',
    provincia: Province.BS,
  },
  {
    comune: 'Pavone del Mella',
    provincia: Province.BS,
  },
  {
    comune: 'San Paolo',
    provincia: Province.BS,
  },
  {
    comune: 'Pertica Alta',
    provincia: Province.BS,
  },
  {
    comune: 'Pertica Bassa',
    provincia: Province.BS,
  },
  {
    comune: 'Pezzaze',
    provincia: Province.BS,
  },
  {
    comune: 'Pian Camuno',
    provincia: Province.BS,
  },
  {
    comune: 'Pisogne',
    provincia: Province.BS,
  },
  {
    comune: 'Polaveno',
    provincia: Province.BS,
  },
  {
    comune: 'Polpenazze del Garda',
    provincia: Province.BS,
  },
  {
    comune: 'Pompiano',
    provincia: Province.BS,
  },
  {
    comune: 'Poncarale',
    provincia: Province.BS,
  },
  {
    comune: 'Ponte di Legno',
    provincia: Province.BS,
  },
  {
    comune: 'Pontevico',
    provincia: Province.BS,
  },
  {
    comune: 'Pontoglio',
    provincia: Province.BS,
  },
  {
    comune: 'Pozzolengo',
    provincia: Province.BS,
  },
  {
    comune: 'Pralboino',
    provincia: Province.BS,
  },
  {
    comune: 'Preseglie',
    provincia: Province.BS,
  },
  {
    comune: 'Prevalle',
    provincia: Province.BS,
  },
  {
    comune: "Provaglio d'Iseo",
    provincia: Province.BS,
  },
  {
    comune: 'Provaglio Val Sabbia',
    provincia: Province.BS,
  },
  {
    comune: 'Puegnago del Garda',
    provincia: Province.BS,
  },
  {
    comune: "Quinzano d'Oglio",
    provincia: Province.BS,
  },
  {
    comune: 'Remedello',
    provincia: Province.BS,
  },
  {
    comune: 'Rezzato',
    provincia: Province.BS,
  },
  {
    comune: 'Roccafranca',
    provincia: Province.BS,
  },
  {
    comune: 'Rodengo Saiano',
    provincia: Province.BS,
  },
  {
    comune: 'Roè Volciano',
    provincia: Province.BS,
  },
  {
    comune: 'Roncadelle',
    provincia: Province.BS,
  },
  {
    comune: 'Rovato',
    provincia: Province.BS,
  },
  {
    comune: 'Rudiano',
    provincia: Province.BS,
  },
  {
    comune: 'Sabbio Chiese',
    provincia: Province.BS,
  },
  {
    comune: 'Sale Marasino',
    provincia: Province.BS,
  },
  {
    comune: 'Salò',
    provincia: Province.BS,
  },
  {
    comune: 'San Felice del Benaco',
    provincia: Province.BS,
  },
  {
    comune: 'San Gervasio Bresciano',
    provincia: Province.BS,
  },
  {
    comune: 'San Zeno Naviglio',
    provincia: Province.BS,
  },
  {
    comune: 'Sarezzo',
    provincia: Province.BS,
  },
  {
    comune: "Saviore dell'Adamello",
    provincia: Province.BS,
  },
  {
    comune: 'Sellero',
    provincia: Province.BS,
  },
  {
    comune: 'Seniga',
    provincia: Province.BS,
  },
  {
    comune: 'Serle',
    provincia: Province.BS,
  },
  {
    comune: 'Sirmione',
    provincia: Province.BS,
  },
  {
    comune: 'Soiano del Lago',
    provincia: Province.BS,
  },
  {
    comune: 'Sonico',
    provincia: Province.BS,
  },
  {
    comune: 'Sulzano',
    provincia: Province.BS,
  },
  {
    comune: 'Tavernole sul Mella',
    provincia: Province.BS,
  },
  {
    comune: 'Temù',
    provincia: Province.BS,
  },
  {
    comune: 'Tignale',
    provincia: Province.BS,
  },
  {
    comune: 'Torbole Casaglia',
    provincia: Province.BS,
  },
  {
    comune: 'Toscolano-Maderno',
    provincia: Province.BS,
  },
  {
    comune: 'Travagliato',
    provincia: Province.BS,
  },
  {
    comune: 'Tremosine sul Garda',
    provincia: Province.BS,
  },
  {
    comune: 'Trenzano',
    provincia: Province.BS,
  },
  {
    comune: 'Treviso Bresciano',
    provincia: Province.BS,
  },
  {
    comune: "Urago d'Oglio",
    provincia: Province.BS,
  },
  {
    comune: 'Vallio Terme',
    provincia: Province.BS,
  },
  {
    comune: 'Valvestino',
    provincia: Province.BS,
  },
  {
    comune: 'Verolanuova',
    provincia: Province.BS,
  },
  {
    comune: 'Verolavecchia',
    provincia: Province.BS,
  },
  {
    comune: 'Vestone',
    provincia: Province.BS,
  },
  {
    comune: "Vezza d'Oglio",
    provincia: Province.BS,
  },
  {
    comune: 'Villa Carcina',
    provincia: Province.BS,
  },
  {
    comune: 'Villachiara',
    provincia: Province.BS,
  },
  {
    comune: 'Villanuova sul Clisi',
    provincia: Province.BS,
  },
  {
    comune: 'Vione',
    provincia: Province.BS,
  },
  {
    comune: 'Visano',
    provincia: Province.BS,
  },
  {
    comune: 'Vobarno',
    provincia: Province.BS,
  },
  {
    comune: 'Zone',
    provincia: Province.BS,
  },
  {
    comune: 'Piancogno',
    provincia: Province.BS,
  },
  {
    comune: 'Alagna',
    provincia: Province.PV,
  },
  {
    comune: 'Albaredo Arnaboldi',
    provincia: Province.PV,
  },
  {
    comune: 'Albonese',
    provincia: Province.PV,
  },
  {
    comune: 'Albuzzano',
    provincia: Province.PV,
  },
  {
    comune: 'Arena Po',
    provincia: Province.PV,
  },
  {
    comune: 'Badia Pavese',
    provincia: Province.PV,
  },
  {
    comune: 'Bagnaria',
    provincia: Province.PV,
  },
  {
    comune: 'Barbianello',
    provincia: Province.PV,
  },
  {
    comune: 'Bascapè',
    provincia: Province.PV,
  },
  {
    comune: 'Bastida Pancarana',
    provincia: Province.PV,
  },
  {
    comune: 'Battuda',
    provincia: Province.PV,
  },
  {
    comune: 'Belgioioso',
    provincia: Province.PV,
  },
  {
    comune: 'Bereguardo',
    provincia: Province.PV,
  },
  {
    comune: 'Borgarello',
    provincia: Province.PV,
  },
  {
    comune: 'Borgo Priolo',
    provincia: Province.PV,
  },
  {
    comune: 'Borgoratto Mormorolo',
    provincia: Province.PV,
  },
  {
    comune: 'Borgo San Siro',
    provincia: Province.PV,
  },
  {
    comune: 'Bornasco',
    provincia: Province.PV,
  },
  {
    comune: 'Bosnasco',
    provincia: Province.PV,
  },
  {
    comune: 'Brallo di Pregola',
    provincia: Province.PV,
  },
  {
    comune: 'Breme',
    provincia: Province.PV,
  },
  {
    comune: 'Bressana Bottarone',
    provincia: Province.PV,
  },
  {
    comune: 'Broni',
    provincia: Province.PV,
  },
  {
    comune: 'Calvignano',
    provincia: Province.PV,
  },
  {
    comune: 'Campospinoso',
    provincia: Province.PV,
  },
  {
    comune: 'Candia Lomellina',
    provincia: Province.PV,
  },
  {
    comune: 'Canneto Pavese',
    provincia: Province.PV,
  },
  {
    comune: 'Carbonara al Ticino',
    provincia: Province.PV,
  },
  {
    comune: 'Casanova Lonati',
    provincia: Province.PV,
  },
  {
    comune: 'Casatisma',
    provincia: Province.PV,
  },
  {
    comune: 'Casei Gerola',
    provincia: Province.PV,
  },
  {
    comune: 'Casorate Primo',
    provincia: Province.PV,
  },
  {
    comune: 'Cassolnovo',
    provincia: Province.PV,
  },
  {
    comune: 'Castana',
    provincia: Province.PV,
  },
  {
    comune: 'Casteggio',
    provincia: Province.PV,
  },
  {
    comune: 'Castelletto di Branduzzo',
    provincia: Province.PV,
  },
  {
    comune: "Castello d'Agogna",
    provincia: Province.PV,
  },
  {
    comune: 'Castelnovetto',
    provincia: Province.PV,
  },
  {
    comune: 'Cava Manara',
    provincia: Province.PV,
  },
  {
    comune: 'Cecima',
    provincia: Province.PV,
  },
  {
    comune: 'Ceranova',
    provincia: Province.PV,
  },
  {
    comune: 'Ceretto Lomellina',
    provincia: Province.PV,
  },
  {
    comune: 'Cergnago',
    provincia: Province.PV,
  },
  {
    comune: 'Certosa di Pavia',
    provincia: Province.PV,
  },
  {
    comune: 'Cervesina',
    provincia: Province.PV,
  },
  {
    comune: 'Chignolo Po',
    provincia: Province.PV,
  },
  {
    comune: 'Cigognola',
    provincia: Province.PV,
  },
  {
    comune: 'Cilavegna',
    provincia: Province.PV,
  },
  {
    comune: 'Codevilla',
    provincia: Province.PV,
  },
  {
    comune: 'Confienza',
    provincia: Province.PV,
  },
  {
    comune: 'Copiano',
    provincia: Province.PV,
  },
  {
    comune: 'Corana',
    provincia: Province.PV,
  },
  {
    comune: 'Corvino San Quirico',
    provincia: Province.PV,
  },
  {
    comune: "Costa de' Nobili",
    provincia: Province.PV,
  },
  {
    comune: 'Cozzo',
    provincia: Province.PV,
  },
  {
    comune: 'Cura Carpignano',
    provincia: Province.PV,
  },
  {
    comune: 'Dorno',
    provincia: Province.PV,
  },
  {
    comune: 'Ferrera Erbognone',
    provincia: Province.PV,
  },
  {
    comune: 'Filighera',
    provincia: Province.PV,
  },
  {
    comune: 'Fortunago',
    provincia: Province.PV,
  },
  {
    comune: 'Frascarolo',
    provincia: Province.PV,
  },
  {
    comune: 'Galliavola',
    provincia: Province.PV,
  },
  {
    comune: 'Gambarana',
    provincia: Province.PV,
  },
  {
    comune: 'Gambolò',
    provincia: Province.PV,
  },
  {
    comune: 'Garlasco',
    provincia: Province.PV,
  },
  {
    comune: 'Gerenzago',
    provincia: Province.PV,
  },
  {
    comune: 'Giussago',
    provincia: Province.PV,
  },
  {
    comune: 'Godiasco Salice Terme',
    provincia: Province.PV,
  },
  {
    comune: 'Golferenzo',
    provincia: Province.PV,
  },
  {
    comune: 'Gravellona Lomellina',
    provincia: Province.PV,
  },
  {
    comune: 'Gropello Cairoli',
    provincia: Province.PV,
  },
  {
    comune: 'Inverno e Monteleone',
    provincia: Province.PV,
  },
  {
    comune: 'Landriano',
    provincia: Province.PV,
  },
  {
    comune: 'Langosco',
    provincia: Province.PV,
  },
  {
    comune: 'Lardirago',
    provincia: Province.PV,
  },
  {
    comune: 'Linarolo',
    provincia: Province.PV,
  },
  {
    comune: 'Lirio',
    provincia: Province.PV,
  },
  {
    comune: 'Lomello',
    provincia: Province.PV,
  },
  {
    comune: 'Lungavilla',
    provincia: Province.PV,
  },
  {
    comune: 'Magherno',
    provincia: Province.PV,
  },
  {
    comune: 'Marcignago',
    provincia: Province.PV,
  },
  {
    comune: 'Marzano',
    provincia: Province.PV,
  },
  {
    comune: 'Mede',
    provincia: Province.PV,
  },
  {
    comune: 'Menconico',
    provincia: Province.PV,
  },
  {
    comune: 'Mezzana Bigli',
    provincia: Province.PV,
  },
  {
    comune: 'Mezzana Rabattone',
    provincia: Province.PV,
  },
  {
    comune: 'Mezzanino',
    provincia: Province.PV,
  },
  {
    comune: 'Miradolo Terme',
    provincia: Province.PV,
  },
  {
    comune: 'Montalto Pavese',
    provincia: Province.PV,
  },
  {
    comune: 'Montebello della Battaglia',
    provincia: Province.PV,
  },
  {
    comune: 'Montecalvo Versiggia',
    provincia: Province.PV,
  },
  {
    comune: 'Montescano',
    provincia: Province.PV,
  },
  {
    comune: 'Montesegale',
    provincia: Province.PV,
  },
  {
    comune: 'Monticelli Pavese',
    provincia: Province.PV,
  },
  {
    comune: 'Montù Beccaria',
    provincia: Province.PV,
  },
  {
    comune: 'Mornico Losana',
    provincia: Province.PV,
  },
  {
    comune: 'Mortara',
    provincia: Province.PV,
  },
  {
    comune: 'Nicorvo',
    provincia: Province.PV,
  },
  {
    comune: 'Olevano di Lomellina',
    provincia: Province.PV,
  },
  {
    comune: 'Oliva Gessi',
    provincia: Province.PV,
  },
  {
    comune: 'Ottobiano',
    provincia: Province.PV,
  },
  {
    comune: 'Palestro',
    provincia: Province.PV,
  },
  {
    comune: 'Pancarana',
    provincia: Province.PV,
  },
  {
    comune: 'Parona',
    provincia: Province.PV,
  },
  {
    comune: 'Pavia',
    provincia: Province.PV,
  },
  {
    comune: "Pietra de' Giorgi",
    provincia: Province.PV,
  },
  {
    comune: 'Pieve Albignola',
    provincia: Province.PV,
  },
  {
    comune: 'Pieve del Cairo',
    provincia: Province.PV,
  },
  {
    comune: 'Pieve Porto Morone',
    provincia: Province.PV,
  },
  {
    comune: 'Pinarolo Po',
    provincia: Province.PV,
  },
  {
    comune: 'Pizzale',
    provincia: Province.PV,
  },
  {
    comune: 'Ponte Nizza',
    provincia: Province.PV,
  },
  {
    comune: 'Portalbera',
    provincia: Province.PV,
  },
  {
    comune: 'Rea',
    provincia: Province.PV,
  },
  {
    comune: 'Redavalle',
    provincia: Province.PV,
  },
  {
    comune: 'Retorbido',
    provincia: Province.PV,
  },
  {
    comune: 'Rivanazzano Terme',
    provincia: Province.PV,
  },
  {
    comune: 'Robbio',
    provincia: Province.PV,
  },
  {
    comune: 'Robecco Pavese',
    provincia: Province.PV,
  },
  {
    comune: "Rocca de' Giorgi",
    provincia: Province.PV,
  },
  {
    comune: 'Rocca Susella',
    provincia: Province.PV,
  },
  {
    comune: 'Rognano',
    provincia: Province.PV,
  },
  {
    comune: 'Romagnese',
    provincia: Province.PV,
  },
  {
    comune: 'Roncaro',
    provincia: Province.PV,
  },
  {
    comune: 'Rosasco',
    provincia: Province.PV,
  },
  {
    comune: 'Rovescala',
    provincia: Province.PV,
  },
  {
    comune: 'San Cipriano Po',
    provincia: Province.PV,
  },
  {
    comune: 'San Damiano al Colle',
    provincia: Province.PV,
  },
  {
    comune: 'San Genesio ed Uniti',
    provincia: Province.PV,
  },
  {
    comune: 'San Giorgio di Lomellina',
    provincia: Province.PV,
  },
  {
    comune: 'San Martino Siccomario',
    provincia: Province.PV,
  },
  {
    comune: "Sannazzaro de' Burgondi",
    provincia: Province.PV,
  },
  {
    comune: 'Santa Cristina e Bissone',
    provincia: Province.PV,
  },
  {
    comune: 'Santa Giuletta',
    provincia: Province.PV,
  },
  {
    comune: "Sant'Alessio con Vialone",
    provincia: Province.PV,
  },
  {
    comune: 'Santa Margherita di Staffora',
    provincia: Province.PV,
  },
  {
    comune: 'Santa Maria della Versa',
    provincia: Province.PV,
  },
  {
    comune: "Sant'Angelo Lomellina",
    provincia: Province.PV,
  },
  {
    comune: 'San Zenone al Po',
    provincia: Province.PV,
  },
  {
    comune: 'Sartirana Lomellina',
    provincia: Province.PV,
  },
  {
    comune: 'Scaldasole',
    provincia: Province.PV,
  },
  {
    comune: 'Semiana',
    provincia: Province.PV,
  },
  {
    comune: 'Silvano Pietra',
    provincia: Province.PV,
  },
  {
    comune: 'Siziano',
    provincia: Province.PV,
  },
  {
    comune: 'Sommo',
    provincia: Province.PV,
  },
  {
    comune: 'Spessa',
    provincia: Province.PV,
  },
  {
    comune: 'Stradella',
    provincia: Province.PV,
  },
  {
    comune: 'Suardi',
    provincia: Province.PV,
  },
  {
    comune: 'Torrazza Coste',
    provincia: Province.PV,
  },
  {
    comune: 'Torre Beretti e Castellaro',
    provincia: Province.PV,
  },
  {
    comune: "Torre d'Arese",
    provincia: Province.PV,
  },
  {
    comune: "Torre de' Negri",
    provincia: Province.PV,
  },
  {
    comune: "Torre d'Isola",
    provincia: Province.PV,
  },
  {
    comune: 'Torrevecchia Pia',
    provincia: Province.PV,
  },
  {
    comune: 'Torricella Verzate',
    provincia: Province.PV,
  },
  {
    comune: 'Travacò Siccomario',
    provincia: Province.PV,
  },
  {
    comune: 'Trivolzio',
    provincia: Province.PV,
  },
  {
    comune: 'Tromello',
    provincia: Province.PV,
  },
  {
    comune: 'Trovo',
    provincia: Province.PV,
  },
  {
    comune: 'Val di Nizza',
    provincia: Province.PV,
  },
  {
    comune: 'Valeggio',
    provincia: Province.PV,
  },
  {
    comune: 'Valle Lomellina',
    provincia: Province.PV,
  },
  {
    comune: 'Valle Salimbene',
    provincia: Province.PV,
  },
  {
    comune: 'Varzi',
    provincia: Province.PV,
  },
  {
    comune: 'Velezzo Lomellina',
    provincia: Province.PV,
  },
  {
    comune: 'Vellezzo Bellini',
    provincia: Province.PV,
  },
  {
    comune: 'Verretto',
    provincia: Province.PV,
  },
  {
    comune: 'Verrua Po',
    provincia: Province.PV,
  },
  {
    comune: 'Vidigulfo',
    provincia: Province.PV,
  },
  {
    comune: 'Vigevano',
    provincia: Province.PV,
  },
  {
    comune: 'Villa Biscossi',
    provincia: Province.PV,
  },
  {
    comune: "Villanova d'Ardenghi",
    provincia: Province.PV,
  },
  {
    comune: 'Villanterio',
    provincia: Province.PV,
  },
  {
    comune: 'Vistarino',
    provincia: Province.PV,
  },
  {
    comune: 'Voghera',
    provincia: Province.PV,
  },
  {
    comune: 'Volpara',
    provincia: Province.PV,
  },
  {
    comune: 'Zavattarello',
    provincia: Province.PV,
  },
  {
    comune: 'Zeccone',
    provincia: Province.PV,
  },
  {
    comune: 'Zeme',
    provincia: Province.PV,
  },
  {
    comune: 'Zenevredo',
    provincia: Province.PV,
  },
  {
    comune: 'Zerbo',
    provincia: Province.PV,
  },
  {
    comune: 'Zerbolò',
    provincia: Province.PV,
  },
  {
    comune: 'Zinasco',
    provincia: Province.PV,
  },
  {
    comune: 'Cornale e Bastida',
    provincia: Province.PV,
  },
  {
    comune: 'Corteolona e Genzone',
    provincia: Province.PV,
  },
  {
    comune: 'Colli Verdi',
    provincia: Province.PV,
  },
  {
    comune: 'Acquanegra Cremonese',
    provincia: Province.CR,
  },
  {
    comune: 'Agnadello',
    provincia: Province.CR,
  },
  {
    comune: 'Annicco',
    provincia: Province.CR,
  },
  {
    comune: 'Azzanello',
    provincia: Province.CR,
  },
  {
    comune: 'Bagnolo Cremasco',
    provincia: Province.CR,
  },
  {
    comune: 'Bonemerse',
    provincia: Province.CR,
  },
  {
    comune: 'Bordolano',
    provincia: Province.CR,
  },
  {
    comune: 'Calvatone',
    provincia: Province.CR,
  },
  {
    comune: 'Camisano',
    provincia: Province.CR,
  },
  {
    comune: 'Campagnola Cremasca',
    provincia: Province.CR,
  },
  {
    comune: 'Capergnanica',
    provincia: Province.CR,
  },
  {
    comune: 'Cappella Cantone',
    provincia: Province.CR,
  },
  {
    comune: "Cappella de' Picenardi",
    provincia: Province.CR,
  },
  {
    comune: 'Capralba',
    provincia: Province.CR,
  },
  {
    comune: 'Casalbuttano ed Uniti',
    provincia: Province.CR,
  },
  {
    comune: 'Casale Cremasco-Vidolasco',
    provincia: Province.CR,
  },
  {
    comune: 'Casaletto Ceredano',
    provincia: Province.CR,
  },
  {
    comune: 'Casaletto di Sopra',
    provincia: Province.CR,
  },
  {
    comune: 'Casaletto Vaprio',
    provincia: Province.CR,
  },
  {
    comune: 'Casalmaggiore',
    provincia: Province.CR,
  },
  {
    comune: 'Casalmorano',
    provincia: Province.CR,
  },
  {
    comune: 'Casteldidone',
    provincia: Province.CR,
  },
  {
    comune: 'Castel Gabbiano',
    provincia: Province.CR,
  },
  {
    comune: 'Castelleone',
    provincia: Province.CR,
  },
  {
    comune: 'Castelverde',
    provincia: Province.CR,
  },
  {
    comune: 'Castelvisconti',
    provincia: Province.CR,
  },
  {
    comune: 'Cella Dati',
    provincia: Province.CR,
  },
  {
    comune: 'Chieve',
    provincia: Province.CR,
  },
  {
    comune: 'Cicognolo',
    provincia: Province.CR,
  },
  {
    comune: "Cingia de' Botti",
    provincia: Province.CR,
  },
  {
    comune: "Corte de' Cortesi con Cignone",
    provincia: Province.CR,
  },
  {
    comune: "Corte de' Frati",
    provincia: Province.CR,
  },
  {
    comune: 'Credera Rubbiano',
    provincia: Province.CR,
  },
  {
    comune: 'Crema',
    provincia: Province.CR,
  },
  {
    comune: 'Cremona',
    provincia: Province.CR,
  },
  {
    comune: 'Cremosano',
    provincia: Province.CR,
  },
  {
    comune: "Crotta d'Adda",
    provincia: Province.CR,
  },
  {
    comune: 'Cumignano sul Naviglio',
    provincia: Province.CR,
  },
  {
    comune: 'Derovere',
    provincia: Province.CR,
  },
  {
    comune: 'Dovera',
    provincia: Province.CR,
  },
  {
    comune: 'Fiesco',
    provincia: Province.CR,
  },
  {
    comune: 'Formigara',
    provincia: Province.CR,
  },
  {
    comune: 'Gabbioneta-Binanuova',
    provincia: Province.CR,
  },
  {
    comune: 'Gadesco-Pieve Delmona',
    provincia: Province.CR,
  },
  {
    comune: 'Genivolta',
    provincia: Province.CR,
  },
  {
    comune: "Gerre de' Caprioli",
    provincia: Province.CR,
  },
  {
    comune: 'Gombito',
    provincia: Province.CR,
  },
  {
    comune: 'Grontardo',
    provincia: Province.CR,
  },
  {
    comune: 'Grumello Cremonese ed Uniti',
    provincia: Province.CR,
  },
  {
    comune: 'Gussola',
    provincia: Province.CR,
  },
  {
    comune: 'Isola Dovarese',
    provincia: Province.CR,
  },
  {
    comune: 'Izano',
    provincia: Province.CR,
  },
  {
    comune: 'Madignano',
    provincia: Province.CR,
  },
  {
    comune: 'Malagnino',
    provincia: Province.CR,
  },
  {
    comune: 'Martignana di Po',
    provincia: Province.CR,
  },
  {
    comune: 'Monte Cremasco',
    provincia: Province.CR,
  },
  {
    comune: 'Montodine',
    provincia: Province.CR,
  },
  {
    comune: 'Moscazzano',
    provincia: Province.CR,
  },
  {
    comune: 'Motta Baluffi',
    provincia: Province.CR,
  },
  {
    comune: 'Offanengo',
    provincia: Province.CR,
  },
  {
    comune: 'Olmeneta',
    provincia: Province.CR,
  },
  {
    comune: 'Ostiano',
    provincia: Province.CR,
  },
  {
    comune: 'Paderno Ponchielli',
    provincia: Province.CR,
  },
  {
    comune: 'Palazzo Pignano',
    provincia: Province.CR,
  },
  {
    comune: 'Pandino',
    provincia: Province.CR,
  },
  {
    comune: 'Persico Dosimo',
    provincia: Province.CR,
  },
  {
    comune: 'Pescarolo ed Uniti',
    provincia: Province.CR,
  },
  {
    comune: 'Pessina Cremonese',
    provincia: Province.CR,
  },
  {
    comune: 'Pianengo',
    provincia: Province.CR,
  },
  {
    comune: 'Pieranica',
    provincia: Province.CR,
  },
  {
    comune: "Pieve d'Olmi",
    provincia: Province.CR,
  },
  {
    comune: 'Pieve San Giacomo',
    provincia: Province.CR,
  },
  {
    comune: 'Pizzighettone',
    provincia: Province.CR,
  },
  {
    comune: 'Pozzaglio ed Uniti',
    provincia: Province.CR,
  },
  {
    comune: 'Quintano',
    provincia: Province.CR,
  },
  {
    comune: 'Ricengo',
    provincia: Province.CR,
  },
  {
    comune: 'Ripalta Arpina',
    provincia: Province.CR,
  },
  {
    comune: 'Ripalta Cremasca',
    provincia: Province.CR,
  },
  {
    comune: 'Ripalta Guerina',
    provincia: Province.CR,
  },
  {
    comune: 'Rivarolo del Re ed Uniti',
    provincia: Province.CR,
  },
  {
    comune: "Rivolta d'Adda",
    provincia: Province.CR,
  },
  {
    comune: "Robecco d'Oglio",
    provincia: Province.CR,
  },
  {
    comune: 'Romanengo',
    provincia: Province.CR,
  },
  {
    comune: 'Salvirola',
    provincia: Province.CR,
  },
  {
    comune: 'San Bassano',
    provincia: Province.CR,
  },
  {
    comune: 'San Daniele Po',
    provincia: Province.CR,
  },
  {
    comune: 'San Giovanni in Croce',
    provincia: Province.CR,
  },
  {
    comune: 'San Martino del Lago',
    provincia: Province.CR,
  },
  {
    comune: 'Scandolara Ravara',
    provincia: Province.CR,
  },
  {
    comune: "Scandolara Ripa d'Oglio",
    provincia: Province.CR,
  },
  {
    comune: 'Sergnano',
    provincia: Province.CR,
  },
  {
    comune: 'Sesto ed Uniti',
    provincia: Province.CR,
  },
  {
    comune: 'Solarolo Rainerio',
    provincia: Province.CR,
  },
  {
    comune: 'Soncino',
    provincia: Province.CR,
  },
  {
    comune: 'Soresina',
    provincia: Province.CR,
  },
  {
    comune: 'Sospiro',
    provincia: Province.CR,
  },
  {
    comune: 'Spinadesco',
    provincia: Province.CR,
  },
  {
    comune: 'Spineda',
    provincia: Province.CR,
  },
  {
    comune: "Spino d'Adda",
    provincia: Province.CR,
  },
  {
    comune: 'Stagno Lombardo',
    provincia: Province.CR,
  },
  {
    comune: 'Ticengo',
    provincia: Province.CR,
  },
  {
    comune: 'Torlino Vimercati',
    provincia: Province.CR,
  },
  {
    comune: 'Tornata',
    provincia: Province.CR,
  },
  {
    comune: "Torre de' Picenardi",
    provincia: Province.CR,
  },
  {
    comune: 'Torricella del Pizzo',
    provincia: Province.CR,
  },
  {
    comune: 'Trescore Cremasco',
    provincia: Province.CR,
  },
  {
    comune: 'Trigolo',
    provincia: Province.CR,
  },
  {
    comune: 'Vaiano Cremasco',
    provincia: Province.CR,
  },
  {
    comune: 'Vailate',
    provincia: Province.CR,
  },
  {
    comune: 'Vescovato',
    provincia: Province.CR,
  },
  {
    comune: 'Volongo',
    provincia: Province.CR,
  },
  {
    comune: 'Voltido',
    provincia: Province.CR,
  },
  {
    comune: 'Piadena Drizzona',
    provincia: Province.CR,
  },
  {
    comune: 'Acquanegra sul Chiese',
    provincia: Province.MN,
  },
  {
    comune: 'Asola',
    provincia: Province.MN,
  },
  {
    comune: 'Bagnolo San Vito',
    provincia: Province.MN,
  },
  {
    comune: 'Bozzolo',
    provincia: Province.MN,
  },
  {
    comune: "Canneto sull'Oglio",
    provincia: Province.MN,
  },
  {
    comune: 'Casalmoro',
    provincia: Province.MN,
  },
  {
    comune: 'Casaloldo',
    provincia: Province.MN,
  },
  {
    comune: 'Casalromano',
    provincia: Province.MN,
  },
  {
    comune: 'Castelbelforte',
    provincia: Province.MN,
  },
  {
    comune: "Castel d'Ario",
    provincia: Province.MN,
  },
  {
    comune: 'Castel Goffredo',
    provincia: Province.MN,
  },
  {
    comune: 'Castellucchio',
    provincia: Province.MN,
  },
  {
    comune: 'Castiglione delle Stiviere',
    provincia: Province.MN,
  },
  {
    comune: 'Cavriana',
    provincia: Province.MN,
  },
  {
    comune: 'Ceresara',
    provincia: Province.MN,
  },
  {
    comune: 'Commessaggio',
    provincia: Province.MN,
  },
  {
    comune: 'Curtatone',
    provincia: Province.MN,
  },
  {
    comune: 'Dosolo',
    provincia: Province.MN,
  },
  {
    comune: 'Gazoldo degli Ippoliti',
    provincia: Province.MN,
  },
  {
    comune: 'Gazzuolo',
    provincia: Province.MN,
  },
  {
    comune: 'Goito',
    provincia: Province.MN,
  },
  {
    comune: 'Gonzaga',
    provincia: Province.MN,
  },
  {
    comune: 'Guidizzolo',
    provincia: Province.MN,
  },
  {
    comune: 'Magnacavallo',
    provincia: Province.MN,
  },
  {
    comune: 'Mantova',
    provincia: Province.MN,
  },
  {
    comune: 'Marcaria',
    provincia: Province.MN,
  },
  {
    comune: 'Mariana Mantovana',
    provincia: Province.MN,
  },
  {
    comune: 'Marmirolo',
    provincia: Province.MN,
  },
  {
    comune: 'Medole',
    provincia: Province.MN,
  },
  {
    comune: 'Moglia',
    provincia: Province.MN,
  },
  {
    comune: 'Monzambano',
    provincia: Province.MN,
  },
  {
    comune: 'Motteggiana',
    provincia: Province.MN,
  },
  {
    comune: 'Ostiglia',
    provincia: Province.MN,
  },
  {
    comune: 'Pegognaga',
    provincia: Province.MN,
  },
  {
    comune: 'Piubega',
    provincia: Province.MN,
  },
  {
    comune: 'Poggio Rusco',
    provincia: Province.MN,
  },
  {
    comune: 'Pomponesco',
    provincia: Province.MN,
  },
  {
    comune: 'Ponti sul Mincio',
    provincia: Province.MN,
  },
  {
    comune: 'Porto Mantovano',
    provincia: Province.MN,
  },
  {
    comune: 'Quingentole',
    provincia: Province.MN,
  },
  {
    comune: 'Quistello',
    provincia: Province.MN,
  },
  {
    comune: 'Redondesco',
    provincia: Province.MN,
  },
  {
    comune: 'Rivarolo Mantovano',
    provincia: Province.MN,
  },
  {
    comune: 'Rodigo',
    provincia: Province.MN,
  },
  {
    comune: 'Roncoferraro',
    provincia: Province.MN,
  },
  {
    comune: 'Roverbella',
    provincia: Province.MN,
  },
  {
    comune: 'Sabbioneta',
    provincia: Province.MN,
  },
  {
    comune: 'San Benedetto Po',
    provincia: Province.MN,
  },
  {
    comune: 'San Giacomo delle Segnate',
    provincia: Province.MN,
  },
  {
    comune: 'San Giorgio Bigarello',
    provincia: Province.MN,
  },
  {
    comune: 'San Giovanni del Dosso',
    provincia: Province.MN,
  },
  {
    comune: "San Martino dall'Argine",
    provincia: Province.MN,
  },
  {
    comune: 'Schivenoglia',
    provincia: Province.MN,
  },
  {
    comune: 'Sermide e Felonica',
    provincia: Province.MN,
  },
  {
    comune: 'Serravalle a Po',
    provincia: Province.MN,
  },
  {
    comune: 'Solferino',
    provincia: Province.MN,
  },
  {
    comune: 'Sustinente',
    provincia: Province.MN,
  },
  {
    comune: 'Suzzara',
    provincia: Province.MN,
  },
  {
    comune: 'Viadana',
    provincia: Province.MN,
  },
  {
    comune: 'Villimpenta',
    provincia: Province.MN,
  },
  {
    comune: 'Volta Mantovana',
    provincia: Province.MN,
  },
  {
    comune: 'Borgo Virgilio',
    provincia: Province.MN,
  },
  {
    comune: 'Borgo Mantovano',
    provincia: Province.MN,
  },
  {
    comune: 'Borgocarbonara',
    provincia: Province.MN,
  },
  {
    comune: 'Abbadia Lariana',
    provincia: Province.LC,
  },
  {
    comune: 'Airuno',
    provincia: Province.LC,
  },
  {
    comune: 'Annone di Brianza',
    provincia: Province.LC,
  },
  {
    comune: 'Ballabio',
    provincia: Province.LC,
  },
  {
    comune: 'Barzago',
    provincia: Province.LC,
  },
  {
    comune: 'Barzanò',
    provincia: Province.LC,
  },
  {
    comune: 'Barzio',
    provincia: Province.LC,
  },
  {
    comune: 'Bellano',
    provincia: Province.LC,
  },
  {
    comune: 'Bosisio Parini',
    provincia: Province.LC,
  },
  {
    comune: 'Brivio',
    provincia: Province.LC,
  },
  {
    comune: 'Bulciago',
    provincia: Province.LC,
  },
  {
    comune: 'Calco',
    provincia: Province.LC,
  },
  {
    comune: 'Calolziocorte',
    provincia: Province.LC,
  },
  {
    comune: 'Carenno',
    provincia: Province.LC,
  },
  {
    comune: 'Casargo',
    provincia: Province.LC,
  },
  {
    comune: 'Casatenovo',
    provincia: Province.LC,
  },
  {
    comune: 'Cassago Brianza',
    provincia: Province.LC,
  },
  {
    comune: 'Cassina Valsassina',
    provincia: Province.LC,
  },
  {
    comune: 'Castello di Brianza',
    provincia: Province.LC,
  },
  {
    comune: 'Cernusco Lombardone',
    provincia: Province.LC,
  },
  {
    comune: 'Cesana Brianza',
    provincia: Province.LC,
  },
  {
    comune: 'Civate',
    provincia: Province.LC,
  },
  {
    comune: 'Colico',
    provincia: Province.LC,
  },
  {
    comune: 'Colle Brianza',
    provincia: Province.LC,
  },
  {
    comune: 'Cortenova',
    provincia: Province.LC,
  },
  {
    comune: 'Costa Masnaga',
    provincia: Province.LC,
  },
  {
    comune: 'Crandola Valsassina',
    provincia: Province.LC,
  },
  {
    comune: 'Cremella',
    provincia: Province.LC,
  },
  {
    comune: 'Cremeno',
    provincia: Province.LC,
  },
  {
    comune: 'Dervio',
    provincia: Province.LC,
  },
  {
    comune: 'Dolzago',
    provincia: Province.LC,
  },
  {
    comune: 'Dorio',
    provincia: Province.LC,
  },
  {
    comune: 'Ello',
    provincia: Province.LC,
  },
  {
    comune: 'Erve',
    provincia: Province.LC,
  },
  {
    comune: 'Esino Lario',
    provincia: Province.LC,
  },
  {
    comune: 'Galbiate',
    provincia: Province.LC,
  },
  {
    comune: 'Garbagnate Monastero',
    provincia: Province.LC,
  },
  {
    comune: 'Garlate',
    provincia: Province.LC,
  },
  {
    comune: 'Imbersago',
    provincia: Province.LC,
  },
  {
    comune: 'Introbio',
    provincia: Province.LC,
  },
  {
    comune: 'Lecco',
    provincia: Province.LC,
  },
  {
    comune: 'Lierna',
    provincia: Province.LC,
  },
  {
    comune: 'Lomagna',
    provincia: Province.LC,
  },
  {
    comune: 'Malgrate',
    provincia: Province.LC,
  },
  {
    comune: 'Mandello del Lario',
    provincia: Province.LC,
  },
  {
    comune: 'Margno',
    provincia: Province.LC,
  },
  {
    comune: 'Merate',
    provincia: Province.LC,
  },
  {
    comune: 'Missaglia',
    provincia: Province.LC,
  },
  {
    comune: 'Moggio',
    provincia: Province.LC,
  },
  {
    comune: 'Molteno',
    provincia: Province.LC,
  },
  {
    comune: 'Monte Marenzo',
    provincia: Province.LC,
  },
  {
    comune: 'Montevecchia',
    provincia: Province.LC,
  },
  {
    comune: 'Monticello Brianza',
    provincia: Province.LC,
  },
  {
    comune: 'Morterone',
    provincia: Province.LC,
  },
  {
    comune: 'Nibionno',
    provincia: Province.LC,
  },
  {
    comune: 'Oggiono',
    provincia: Province.LC,
  },
  {
    comune: 'Olgiate Molgora',
    provincia: Province.LC,
  },
  {
    comune: 'Olginate',
    provincia: Province.LC,
  },
  {
    comune: 'Oliveto Lario',
    provincia: Province.LC,
  },
  {
    comune: 'Osnago',
    provincia: Province.LC,
  },
  {
    comune: "Paderno d'Adda",
    provincia: Province.LC,
  },
  {
    comune: 'Pagnona',
    provincia: Province.LC,
  },
  {
    comune: 'Parlasco',
    provincia: Province.LC,
  },
  {
    comune: 'Pasturo',
    provincia: Province.LC,
  },
  {
    comune: 'Perledo',
    provincia: Province.LC,
  },
  {
    comune: 'Pescate',
    provincia: Province.LC,
  },
  {
    comune: 'Premana',
    provincia: Province.LC,
  },
  {
    comune: 'Primaluna',
    provincia: Province.LC,
  },
  {
    comune: 'Robbiate',
    provincia: Province.LC,
  },
  {
    comune: 'Rogeno',
    provincia: Province.LC,
  },
  {
    comune: 'Santa Maria Hoè',
    provincia: Province.LC,
  },
  {
    comune: 'Sirone',
    provincia: Province.LC,
  },
  {
    comune: 'Sirtori',
    provincia: Province.LC,
  },
  {
    comune: 'Sueglio',
    provincia: Province.LC,
  },
  {
    comune: 'Suello',
    provincia: Province.LC,
  },
  {
    comune: 'Taceno',
    provincia: Province.LC,
  },
  {
    comune: 'Valgreghentino',
    provincia: Province.LC,
  },
  {
    comune: 'Valmadrera',
    provincia: Province.LC,
  },
  {
    comune: 'Varenna',
    provincia: Province.LC,
  },
  {
    comune: 'Vercurago',
    provincia: Province.LC,
  },
  {
    comune: 'Viganò',
    provincia: Province.LC,
  },
  {
    comune: 'Verderio',
    provincia: Province.LC,
  },
  {
    comune: 'La Valletta Brianza',
    provincia: Province.LC,
  },
  {
    comune: 'Valvarrone',
    provincia: Province.LC,
  },
  {
    comune: 'Abbadia Cerreto',
    provincia: Province.LO,
  },
  {
    comune: 'Bertonico',
    provincia: Province.LO,
  },
  {
    comune: "Boffalora d'Adda",
    provincia: Province.LO,
  },
  {
    comune: 'Borghetto Lodigiano',
    provincia: Province.LO,
  },
  {
    comune: 'Borgo San Giovanni',
    provincia: Province.LO,
  },
  {
    comune: 'Brembio',
    provincia: Province.LO,
  },
  {
    comune: 'Casaletto Lodigiano',
    provincia: Province.LO,
  },
  {
    comune: 'Casalmaiocco',
    provincia: Province.LO,
  },
  {
    comune: 'Casalpusterlengo',
    provincia: Province.LO,
  },
  {
    comune: 'Caselle Landi',
    provincia: Province.LO,
  },
  {
    comune: 'Caselle Lurani',
    provincia: Province.LO,
  },
  {
    comune: "Castelnuovo Bocca d'Adda",
    provincia: Province.LO,
  },
  {
    comune: "Castiglione d'Adda",
    provincia: Province.LO,
  },
  {
    comune: 'Castiraga Vidardo',
    provincia: Province.LO,
  },
  {
    comune: "Cavenago d'Adda",
    provincia: Province.LO,
  },
  {
    comune: "Cervignano d'Adda",
    provincia: Province.LO,
  },
  {
    comune: 'Codogno',
    provincia: Province.LO,
  },
  {
    comune: 'Comazzo',
    provincia: Province.LO,
  },
  {
    comune: 'Cornegliano Laudense',
    provincia: Province.LO,
  },
  {
    comune: 'Corno Giovine',
    provincia: Province.LO,
  },
  {
    comune: 'Cornovecchio',
    provincia: Province.LO,
  },
  {
    comune: 'Corte Palasio',
    provincia: Province.LO,
  },
  {
    comune: 'Crespiatica',
    provincia: Province.LO,
  },
  {
    comune: 'Fombio',
    provincia: Province.LO,
  },
  {
    comune: 'Galgagnano',
    provincia: Province.LO,
  },
  {
    comune: 'Graffignana',
    provincia: Province.LO,
  },
  {
    comune: 'Guardamiglio',
    provincia: Province.LO,
  },
  {
    comune: 'Livraga',
    provincia: Province.LO,
  },
  {
    comune: 'Lodi',
    provincia: Province.LO,
  },
  {
    comune: 'Lodi Vecchio',
    provincia: Province.LO,
  },
  {
    comune: 'Maccastorna',
    provincia: Province.LO,
  },
  {
    comune: 'Mairago',
    provincia: Province.LO,
  },
  {
    comune: 'Maleo',
    provincia: Province.LO,
  },
  {
    comune: 'Marudo',
    provincia: Province.LO,
  },
  {
    comune: 'Massalengo',
    provincia: Province.LO,
  },
  {
    comune: 'Meleti',
    provincia: Province.LO,
  },
  {
    comune: 'Merlino',
    provincia: Province.LO,
  },
  {
    comune: 'Montanaso Lombardo',
    provincia: Province.LO,
  },
  {
    comune: 'Mulazzano',
    provincia: Province.LO,
  },
  {
    comune: 'Orio Litta',
    provincia: Province.LO,
  },
  {
    comune: 'Ospedaletto Lodigiano',
    provincia: Province.LO,
  },
  {
    comune: 'Ossago Lodigiano',
    provincia: Province.LO,
  },
  {
    comune: 'Pieve Fissiraga',
    provincia: Province.LO,
  },
  {
    comune: 'Salerano sul Lambro',
    provincia: Province.LO,
  },
  {
    comune: 'San Fiorano',
    provincia: Province.LO,
  },
  {
    comune: 'San Martino in Strada',
    provincia: Province.LO,
  },
  {
    comune: 'San Rocco al Porto',
    provincia: Province.LO,
  },
  {
    comune: "Sant'Angelo Lodigiano",
    provincia: Province.LO,
  },
  {
    comune: 'Santo Stefano Lodigiano',
    provincia: Province.LO,
  },
  {
    comune: 'Secugnago',
    provincia: Province.LO,
  },
  {
    comune: 'Senna Lodigiana',
    provincia: Province.LO,
  },
  {
    comune: 'Somaglia',
    provincia: Province.LO,
  },
  {
    comune: 'Sordio',
    provincia: Province.LO,
  },
  {
    comune: 'Tavazzano con Villavesco',
    provincia: Province.LO,
  },
  {
    comune: 'Terranova dei Passerini',
    provincia: Province.LO,
  },
  {
    comune: 'Turano Lodigiano',
    provincia: Province.LO,
  },
  {
    comune: 'Valera Fratta',
    provincia: Province.LO,
  },
  {
    comune: 'Villanova del Sillaro',
    provincia: Province.LO,
  },
  {
    comune: 'Zelo Buon Persico',
    provincia: Province.LO,
  },
  {
    comune: 'Castelgerundo',
    provincia: Province.LO,
  },
  {
    comune: 'Agrate Brianza',
    provincia: Province.MB,
  },
  {
    comune: 'Aicurzio',
    provincia: Province.MB,
  },
  {
    comune: 'Albiate',
    provincia: Province.MB,
  },
  {
    comune: 'Arcore',
    provincia: Province.MB,
  },
  {
    comune: 'Barlassina',
    provincia: Province.MB,
  },
  {
    comune: 'Bellusco',
    provincia: Province.MB,
  },
  {
    comune: 'Bernareggio',
    provincia: Province.MB,
  },
  {
    comune: 'Besana in Brianza',
    provincia: Province.MB,
  },
  {
    comune: 'Biassono',
    provincia: Province.MB,
  },
  {
    comune: 'Bovisio-Masciago',
    provincia: Province.MB,
  },
  {
    comune: 'Briosco',
    provincia: Province.MB,
  },
  {
    comune: 'Brugherio',
    provincia: Province.MB,
  },
  {
    comune: 'Burago di Molgora',
    provincia: Province.MB,
  },
  {
    comune: 'Camparada',
    provincia: Province.MB,
  },
  {
    comune: 'Carate Brianza',
    provincia: Province.MB,
  },
  {
    comune: 'Carnate',
    provincia: Province.MB,
  },
  {
    comune: 'Cavenago di Brianza',
    provincia: Province.MB,
  },
  {
    comune: 'Ceriano Laghetto',
    provincia: Province.MB,
  },
  {
    comune: 'Cesano Maderno',
    provincia: Province.MB,
  },
  {
    comune: 'Cogliate',
    provincia: Province.MB,
  },
  {
    comune: 'Concorezzo',
    provincia: Province.MB,
  },
  {
    comune: 'Correzzana',
    provincia: Province.MB,
  },
  {
    comune: 'Desio',
    provincia: Province.MB,
  },
  {
    comune: 'Giussano',
    provincia: Province.MB,
  },
  {
    comune: 'Lazzate',
    provincia: Province.MB,
  },
  {
    comune: 'Lesmo',
    provincia: Province.MB,
  },
  {
    comune: 'Limbiate',
    provincia: Province.MB,
  },
  {
    comune: 'Lissone',
    provincia: Province.MB,
  },
  {
    comune: 'Macherio',
    provincia: Province.MB,
  },
  {
    comune: 'Meda',
    provincia: Province.MB,
  },
  {
    comune: 'Mezzago',
    provincia: Province.MB,
  },
  {
    comune: 'Misinto',
    provincia: Province.MB,
  },
  {
    comune: 'Monza',
    provincia: Province.MB,
  },
  {
    comune: 'Muggiò',
    provincia: Province.MB,
  },
  {
    comune: 'Nova Milanese',
    provincia: Province.MB,
  },
  {
    comune: 'Ornago',
    provincia: Province.MB,
  },
  {
    comune: 'Renate',
    provincia: Province.MB,
  },
  {
    comune: 'Ronco Briantino',
    provincia: Province.MB,
  },
  {
    comune: 'Seregno',
    provincia: Province.MB,
  },
  {
    comune: 'Seveso',
    provincia: Province.MB,
  },
  {
    comune: 'Sovico',
    provincia: Province.MB,
  },
  {
    comune: 'Sulbiate',
    provincia: Province.MB,
  },
  {
    comune: 'Triuggio',
    provincia: Province.MB,
  },
  {
    comune: 'Usmate Velate',
    provincia: Province.MB,
  },
  {
    comune: 'Varedo',
    provincia: Province.MB,
  },
  {
    comune: 'Vedano al Lambro',
    provincia: Province.MB,
  },
  {
    comune: 'Veduggio con Colzano',
    provincia: Province.MB,
  },
  {
    comune: 'Verano Brianza',
    provincia: Province.MB,
  },
  {
    comune: 'Villasanta',
    provincia: Province.MB,
  },
  {
    comune: 'Vimercate',
    provincia: Province.MB,
  },
  {
    comune: 'Busnago',
    provincia: Province.MB,
  },
  {
    comune: 'Caponago',
    provincia: Province.MB,
  },
  {
    comune: "Cornate d'Adda",
    provincia: Province.MB,
  },
  {
    comune: 'Lentate sul Seveso',
    provincia: Province.MB,
  },
  {
    comune: 'Roncello',
    provincia: Province.MB,
  },
  {
    comune: 'Aldino',
    provincia: Province.BZ,
  },
  {
    comune: 'Andriano',
    provincia: Province.BZ,
  },
  {
    comune: 'Anterivo',
    provincia: Province.BZ,
  },
  {
    comune: 'Appiano sulla strada del vino',
    provincia: Province.BZ,
  },
  {
    comune: 'Avelengo',
    provincia: Province.BZ,
  },
  {
    comune: 'Badia',
    provincia: Province.BZ,
  },
  {
    comune: 'Barbiano',
    provincia: Province.BZ,
  },
  {
    comune: 'Bolzano',
    provincia: Province.BZ,
  },
  {
    comune: 'Braies',
    provincia: Province.BZ,
  },
  {
    comune: 'Brennero',
    provincia: Province.BZ,
  },
  {
    comune: 'Bressanone',
    provincia: Province.BZ,
  },
  {
    comune: 'Bronzolo',
    provincia: Province.BZ,
  },
  {
    comune: 'Brunico',
    provincia: Province.BZ,
  },
  {
    comune: 'Caines',
    provincia: Province.BZ,
  },
  {
    comune: 'Caldaro sulla strada del vino',
    provincia: Province.BZ,
  },
  {
    comune: 'Campo di Trens',
    provincia: Province.BZ,
  },
  {
    comune: 'Campo Tures',
    provincia: Province.BZ,
  },
  {
    comune: 'Castelbello-Ciardes',
    provincia: Province.BZ,
  },
  {
    comune: 'Castelrotto',
    provincia: Province.BZ,
  },
  {
    comune: 'Cermes',
    provincia: Province.BZ,
  },
  {
    comune: 'Chienes',
    provincia: Province.BZ,
  },
  {
    comune: 'Chiusa',
    provincia: Province.BZ,
  },
  {
    comune: "Cornedo all'Isarco",
    provincia: Province.BZ,
  },
  {
    comune: 'Cortaccia sulla strada del vino',
    provincia: Province.BZ,
  },
  {
    comune: 'Cortina sulla strada del vino',
    provincia: Province.BZ,
  },
  {
    comune: 'Corvara in Badia',
    provincia: Province.BZ,
  },
  {
    comune: 'Curon Venosta',
    provincia: Province.BZ,
  },
  {
    comune: 'Dobbiaco',
    provincia: Province.BZ,
  },
  {
    comune: 'Egna',
    provincia: Province.BZ,
  },
  {
    comune: 'Falzes',
    provincia: Province.BZ,
  },
  {
    comune: 'Fiè allo Sciliar',
    provincia: Province.BZ,
  },
  {
    comune: 'Fortezza',
    provincia: Province.BZ,
  },
  {
    comune: 'Funes',
    provincia: Province.BZ,
  },
  {
    comune: 'Gais',
    provincia: Province.BZ,
  },
  {
    comune: 'Gargazzone',
    provincia: Province.BZ,
  },
  {
    comune: 'Glorenza',
    provincia: Province.BZ,
  },
  {
    comune: 'Laces',
    provincia: Province.BZ,
  },
  {
    comune: 'Lagundo',
    provincia: Province.BZ,
  },
  {
    comune: 'Laion',
    provincia: Province.BZ,
  },
  {
    comune: 'Laives',
    provincia: Province.BZ,
  },
  {
    comune: 'Lana',
    provincia: Province.BZ,
  },
  {
    comune: 'Lasa',
    provincia: Province.BZ,
  },
  {
    comune: 'Lauregno',
    provincia: Province.BZ,
  },
  {
    comune: 'Luson',
    provincia: Province.BZ,
  },
  {
    comune: 'Magrè sulla strada del vino',
    provincia: Province.BZ,
  },
  {
    comune: 'Malles Venosta',
    provincia: Province.BZ,
  },
  {
    comune: 'Marebbe',
    provincia: Province.BZ,
  },
  {
    comune: 'Marlengo',
    provincia: Province.BZ,
  },
  {
    comune: 'Martello',
    provincia: Province.BZ,
  },
  {
    comune: 'Meltina',
    provincia: Province.BZ,
  },
  {
    comune: 'Merano',
    provincia: Province.BZ,
  },
  {
    comune: 'Monguelfo-Tesido',
    provincia: Province.BZ,
  },
  {
    comune: 'Montagna',
    provincia: Province.BZ,
  },
  {
    comune: 'Moso in Passiria',
    provincia: Province.BZ,
  },
  {
    comune: 'Nalles',
    provincia: Province.BZ,
  },
  {
    comune: 'Naturno',
    provincia: Province.BZ,
  },
  {
    comune: 'Naz-Sciaves',
    provincia: Province.BZ,
  },
  {
    comune: 'Nova Levante',
    provincia: Province.BZ,
  },
  {
    comune: 'Nova Ponente',
    provincia: Province.BZ,
  },
  {
    comune: 'Ora',
    provincia: Province.BZ,
  },
  {
    comune: 'Ortisei',
    provincia: Province.BZ,
  },
  {
    comune: 'Parcines',
    provincia: Province.BZ,
  },
  {
    comune: 'Perca',
    provincia: Province.BZ,
  },
  {
    comune: 'Plaus',
    provincia: Province.BZ,
  },
  {
    comune: 'Ponte Gardena',
    provincia: Province.BZ,
  },
  {
    comune: 'Postal',
    provincia: Province.BZ,
  },
  {
    comune: 'Prato allo Stelvio',
    provincia: Province.BZ,
  },
  {
    comune: 'Predoi',
    provincia: Province.BZ,
  },
  {
    comune: 'Proves',
    provincia: Province.BZ,
  },
  {
    comune: 'Racines',
    provincia: Province.BZ,
  },
  {
    comune: 'Rasun-Anterselva',
    provincia: Province.BZ,
  },
  {
    comune: 'Renon',
    provincia: Province.BZ,
  },
  {
    comune: 'Rifiano',
    provincia: Province.BZ,
  },
  {
    comune: 'Rio di Pusteria',
    provincia: Province.BZ,
  },
  {
    comune: 'Rodengo',
    provincia: Province.BZ,
  },
  {
    comune: 'Salorno sulla strada del vino',
    provincia: Province.BZ,
  },
  {
    comune: 'San Candido',
    provincia: Province.BZ,
  },
  {
    comune: 'San Genesio Atesino',
    provincia: Province.BZ,
  },
  {
    comune: 'San Leonardo in Passiria',
    provincia: Province.BZ,
  },
  {
    comune: 'San Lorenzo di Sebato',
    provincia: Province.BZ,
  },
  {
    comune: 'San Martino in Badia',
    provincia: Province.BZ,
  },
  {
    comune: 'San Martino in Passiria',
    provincia: Province.BZ,
  },
  {
    comune: 'San Pancrazio',
    provincia: Province.BZ,
  },
  {
    comune: 'Santa Cristina Valgardena',
    provincia: Province.BZ,
  },
  {
    comune: 'Sarentino',
    provincia: Province.BZ,
  },
  {
    comune: 'Scena',
    provincia: Province.BZ,
  },
  {
    comune: 'Selva dei Molini',
    provincia: Province.BZ,
  },
  {
    comune: 'Selva di Val Gardena',
    provincia: Province.BZ,
  },
  {
    comune: 'Senales',
    provincia: Province.BZ,
  },
  {
    comune: 'Sesto',
    provincia: Province.BZ,
  },
  {
    comune: 'Silandro',
    provincia: Province.BZ,
  },
  {
    comune: 'Sluderno',
    provincia: Province.BZ,
  },
  {
    comune: 'Stelvio',
    provincia: Province.BZ,
  },
  {
    comune: 'Terento',
    provincia: Province.BZ,
  },
  {
    comune: 'Terlano',
    provincia: Province.BZ,
  },
  {
    comune: 'Termeno sulla strada del vino',
    provincia: Province.BZ,
  },
  {
    comune: 'Tesimo',
    provincia: Province.BZ,
  },
  {
    comune: 'Tires',
    provincia: Province.BZ,
  },
  {
    comune: 'Tirolo',
    provincia: Province.BZ,
  },
  {
    comune: 'Trodena nel parco naturale',
    provincia: Province.BZ,
  },
  {
    comune: 'Tubre',
    provincia: Province.BZ,
  },
  {
    comune: 'Ultimo',
    provincia: Province.BZ,
  },
  {
    comune: 'Vadena',
    provincia: Province.BZ,
  },
  {
    comune: 'Valdaora',
    provincia: Province.BZ,
  },
  {
    comune: 'Val di Vizze',
    provincia: Province.BZ,
  },
  {
    comune: 'Valle Aurina',
    provincia: Province.BZ,
  },
  {
    comune: 'Valle di Casies',
    provincia: Province.BZ,
  },
  {
    comune: 'Vandoies',
    provincia: Province.BZ,
  },
  {
    comune: 'Varna',
    provincia: Province.BZ,
  },
  {
    comune: 'Verano',
    provincia: Province.BZ,
  },
  {
    comune: 'Villabassa',
    provincia: Province.BZ,
  },
  {
    comune: 'Villandro',
    provincia: Province.BZ,
  },
  {
    comune: 'Vipiteno',
    provincia: Province.BZ,
  },
  {
    comune: 'Velturno',
    provincia: Province.BZ,
  },
  {
    comune: 'La Valle',
    provincia: Province.BZ,
  },
  {
    comune: 'Senale-San Felice',
    provincia: Province.BZ,
  },
  {
    comune: 'Ala',
    provincia: Province.TN,
  },
  {
    comune: 'Albiano',
    provincia: Province.TN,
  },
  {
    comune: 'Aldeno',
    provincia: Province.TN,
  },
  {
    comune: 'Andalo',
    provincia: Province.TN,
  },
  {
    comune: 'Arco',
    provincia: Province.TN,
  },
  {
    comune: 'Avio',
    provincia: Province.TN,
  },
  {
    comune: 'Baselga di Pinè',
    provincia: Province.TN,
  },
  {
    comune: 'Bedollo',
    provincia: Province.TN,
  },
  {
    comune: 'Besenello',
    provincia: Province.TN,
  },
  {
    comune: 'Bieno',
    provincia: Province.TN,
  },
  {
    comune: 'Bleggio Superiore',
    provincia: Province.TN,
  },
  {
    comune: 'Bocenago',
    provincia: Province.TN,
  },
  {
    comune: 'Bondone',
    provincia: Province.TN,
  },
  {
    comune: 'Borgo Valsugana',
    provincia: Province.TN,
  },
  {
    comune: 'Brentonico',
    provincia: Province.TN,
  },
  {
    comune: 'Bresimo',
    provincia: Province.TN,
  },
  {
    comune: 'Caderzone Terme',
    provincia: Province.TN,
  },
  {
    comune: 'Calceranica al Lago',
    provincia: Province.TN,
  },
  {
    comune: 'Caldes',
    provincia: Province.TN,
  },
  {
    comune: 'Caldonazzo',
    provincia: Province.TN,
  },
  {
    comune: 'Calliano',
    provincia: Province.TN,
  },
  {
    comune: 'Campitello di Fassa',
    provincia: Province.TN,
  },
  {
    comune: 'Campodenno',
    provincia: Province.TN,
  },
  {
    comune: 'Canal San Bovo',
    provincia: Province.TN,
  },
  {
    comune: 'Canazei',
    provincia: Province.TN,
  },
  {
    comune: 'Capriana',
    provincia: Province.TN,
  },
  {
    comune: 'Carisolo',
    provincia: Province.TN,
  },
  {
    comune: 'Carzano',
    provincia: Province.TN,
  },
  {
    comune: 'Castel Condino',
    provincia: Province.TN,
  },
  {
    comune: 'Castello-Molina di Fiemme',
    provincia: Province.TN,
  },
  {
    comune: 'Castello Tesino',
    provincia: Province.TN,
  },
  {
    comune: 'Castelnuovo',
    provincia: Province.TN,
  },
  {
    comune: 'Cavalese',
    provincia: Province.TN,
  },
  {
    comune: 'Cavareno',
    provincia: Province.TN,
  },
  {
    comune: 'Cavedago',
    provincia: Province.TN,
  },
  {
    comune: 'Cavedine',
    provincia: Province.TN,
  },
  {
    comune: 'Cavizzana',
    provincia: Province.TN,
  },
  {
    comune: 'Cimone',
    provincia: Province.TN,
  },
  {
    comune: 'Cinte Tesino',
    provincia: Province.TN,
  },
  {
    comune: 'Cis',
    provincia: Province.TN,
  },
  {
    comune: 'Civezzano',
    provincia: Province.TN,
  },
  {
    comune: 'Cles',
    provincia: Province.TN,
  },
  {
    comune: 'Commezzadura',
    provincia: Province.TN,
  },
  {
    comune: 'Croviana',
    provincia: Province.TN,
  },
  {
    comune: 'Dambel',
    provincia: Province.TN,
  },
  {
    comune: 'Denno',
    provincia: Province.TN,
  },
  {
    comune: 'Drena',
    provincia: Province.TN,
  },
  {
    comune: 'Dro',
    provincia: Province.TN,
  },
  {
    comune: 'Fai della Paganella',
    provincia: Province.TN,
  },
  {
    comune: 'Fiavè',
    provincia: Province.TN,
  },
  {
    comune: 'Fierozzo',
    provincia: Province.TN,
  },
  {
    comune: 'Folgaria',
    provincia: Province.TN,
  },
  {
    comune: 'Fornace',
    provincia: Province.TN,
  },
  {
    comune: 'Frassilongo',
    provincia: Province.TN,
  },
  {
    comune: 'Garniga Terme',
    provincia: Province.TN,
  },
  {
    comune: 'Giovo',
    provincia: Province.TN,
  },
  {
    comune: 'Giustino',
    provincia: Province.TN,
  },
  {
    comune: 'Grigno',
    provincia: Province.TN,
  },
  {
    comune: 'Imer',
    provincia: Province.TN,
  },
  {
    comune: 'Isera',
    provincia: Province.TN,
  },
  {
    comune: 'Lavarone',
    provincia: Province.TN,
  },
  {
    comune: 'Lavis',
    provincia: Province.TN,
  },
  {
    comune: 'Levico Terme',
    provincia: Province.TN,
  },
  {
    comune: 'Livo',
    provincia: Province.TN,
  },
  {
    comune: 'Lona-Lases',
    provincia: Province.TN,
  },
  {
    comune: 'Luserna',
    provincia: Province.TN,
  },
  {
    comune: 'Malé',
    provincia: Province.TN,
  },
  {
    comune: 'Massimeno',
    provincia: Province.TN,
  },
  {
    comune: 'Mazzin',
    provincia: Province.TN,
  },
  {
    comune: 'Mezzana',
    provincia: Province.TN,
  },
  {
    comune: 'Mezzano',
    provincia: Province.TN,
  },
  {
    comune: 'Mezzocorona',
    provincia: Province.TN,
  },
  {
    comune: 'Mezzolombardo',
    provincia: Province.TN,
  },
  {
    comune: 'Moena',
    provincia: Province.TN,
  },
  {
    comune: 'Molveno',
    provincia: Province.TN,
  },
  {
    comune: 'Mori',
    provincia: Province.TN,
  },
  {
    comune: 'Nago-Torbole',
    provincia: Province.TN,
  },
  {
    comune: 'Nogaredo',
    provincia: Province.TN,
  },
  {
    comune: 'Nomi',
    provincia: Province.TN,
  },
  {
    comune: 'Novaledo',
    provincia: Province.TN,
  },
  {
    comune: 'Ospedaletto',
    provincia: Province.TN,
  },
  {
    comune: 'Ossana',
    provincia: Province.TN,
  },
  {
    comune: 'Palù del Fersina',
    provincia: Province.TN,
  },
  {
    comune: 'Panchià',
    provincia: Province.TN,
  },
  {
    comune: 'Ronzo-Chienis',
    provincia: Province.TN,
  },
  {
    comune: 'Peio',
    provincia: Province.TN,
  },
  {
    comune: 'Pellizzano',
    provincia: Province.TN,
  },
  {
    comune: 'Pelugo',
    provincia: Province.TN,
  },
  {
    comune: 'Pergine Valsugana',
    provincia: Province.TN,
  },
  {
    comune: 'Pieve Tesino',
    provincia: Province.TN,
  },
  {
    comune: 'Pinzolo',
    provincia: Province.TN,
  },
  {
    comune: 'Pomarolo',
    provincia: Province.TN,
  },
  {
    comune: 'Predazzo',
    provincia: Province.TN,
  },
  {
    comune: 'Rabbi',
    provincia: Province.TN,
  },
  {
    comune: 'Riva del Garda',
    provincia: Province.TN,
  },
  {
    comune: 'Romeno',
    provincia: Province.TN,
  },
  {
    comune: 'Roncegno Terme',
    provincia: Province.TN,
  },
  {
    comune: 'Ronchi Valsugana',
    provincia: Province.TN,
  },
  {
    comune: 'Ronzone',
    provincia: Province.TN,
  },
  {
    comune: 'Roverè della Luna',
    provincia: Province.TN,
  },
  {
    comune: 'Rovereto',
    provincia: Province.TN,
  },
  {
    comune: 'Ruffrè-Mendola',
    provincia: Province.TN,
  },
  {
    comune: 'Rumo',
    provincia: Province.TN,
  },
  {
    comune: 'Sagron Mis',
    provincia: Province.TN,
  },
  {
    comune: 'Samone',
    provincia: Province.TN,
  },
  {
    comune: "San Michele all'Adige",
    provincia: Province.TN,
  },
  {
    comune: "Sant'Orsola Terme",
    provincia: Province.TN,
  },
  {
    comune: 'Sanzeno',
    provincia: Province.TN,
  },
  {
    comune: 'Sarnonico',
    provincia: Province.TN,
  },
  {
    comune: 'Scurelle',
    provincia: Province.TN,
  },
  {
    comune: 'Segonzano',
    provincia: Province.TN,
  },
  {
    comune: 'Sfruz',
    provincia: Province.TN,
  },
  {
    comune: 'Soraga di Fassa',
    provincia: Province.TN,
  },
  {
    comune: 'Sover',
    provincia: Province.TN,
  },
  {
    comune: 'Spiazzo',
    provincia: Province.TN,
  },
  {
    comune: 'Spormaggiore',
    provincia: Province.TN,
  },
  {
    comune: 'Sporminore',
    provincia: Province.TN,
  },
  {
    comune: 'Stenico',
    provincia: Province.TN,
  },
  {
    comune: 'Storo',
    provincia: Province.TN,
  },
  {
    comune: 'Strembo',
    provincia: Province.TN,
  },
  {
    comune: 'Telve',
    provincia: Province.TN,
  },
  {
    comune: 'Telve di Sopra',
    provincia: Province.TN,
  },
  {
    comune: 'Tenna',
    provincia: Province.TN,
  },
  {
    comune: 'Tenno',
    provincia: Province.TN,
  },
  {
    comune: 'Terragnolo',
    provincia: Province.TN,
  },
  {
    comune: 'Terzolas',
    provincia: Province.TN,
  },
  {
    comune: 'Tesero',
    provincia: Province.TN,
  },
  {
    comune: 'Tione di Trento',
    provincia: Province.TN,
  },
  {
    comune: 'Ton',
    provincia: Province.TN,
  },
  {
    comune: 'Torcegno',
    provincia: Province.TN,
  },
  {
    comune: 'Trambileno',
    provincia: Province.TN,
  },
  {
    comune: 'Trento',
    provincia: Province.TN,
  },
  {
    comune: 'Valfloriana',
    provincia: Province.TN,
  },
  {
    comune: 'Vallarsa',
    provincia: Province.TN,
  },
  {
    comune: 'Vermiglio',
    provincia: Province.TN,
  },
  {
    comune: 'Vignola-Falesina',
    provincia: Province.TN,
  },
  {
    comune: 'Villa Lagarina',
    provincia: Province.TN,
  },
  {
    comune: 'Volano',
    provincia: Province.TN,
  },
  {
    comune: 'Ziano di Fiemme',
    provincia: Province.TN,
  },
  {
    comune: 'Comano Terme',
    provincia: Province.TN,
  },
  {
    comune: 'Ledro',
    provincia: Province.TN,
  },
  {
    comune: 'Predaia',
    provincia: Province.TN,
  },
  {
    comune: 'San Lorenzo Dorsino',
    provincia: Province.TN,
  },
  {
    comune: 'Valdaone',
    provincia: Province.TN,
  },
  {
    comune: 'Dimaro Folgarida',
    provincia: Province.TN,
  },
  {
    comune: 'Pieve di Bono-Prezzo',
    provincia: Province.TN,
  },
  {
    comune: 'Altavalle',
    provincia: Province.TN,
  },
  {
    comune: 'Altopiano della Vigolana',
    provincia: Province.TN,
  },
  {
    comune: 'Amblar-Don',
    provincia: Province.TN,
  },
  {
    comune: 'Borgo Chiese',
    provincia: Province.TN,
  },
  {
    comune: 'Borgo Lares',
    provincia: Province.TN,
  },
  {
    comune: 'Castel Ivano',
    provincia: Province.TN,
  },
  {
    comune: 'Cembra Lisignago',
    provincia: Province.TN,
  },
  {
    comune: 'Contà',
    provincia: Province.TN,
  },
  {
    comune: 'Madruzzo',
    provincia: Province.TN,
  },
  {
    comune: 'Porte di Rendena',
    provincia: Province.TN,
  },
  {
    comune: 'Primiero San Martino di Castrozza',
    provincia: Province.TN,
  },
  {
    comune: 'Sella Giudicarie',
    provincia: Province.TN,
  },
  {
    comune: 'Tre Ville',
    provincia: Province.TN,
  },
  {
    comune: 'Vallelaghi',
    provincia: Province.TN,
  },
  {
    comune: "Ville d'Anaunia",
    provincia: Province.TN,
  },
  {
    comune: 'San Giovanni di Fassa',
    provincia: Province.TN,
  },
  {
    comune: "Terre d'Adige",
    provincia: Province.TN,
  },
  {
    comune: "Borgo d'Anaunia",
    provincia: Province.TN,
  },
  {
    comune: 'Novella',
    provincia: Province.TN,
  },
  {
    comune: 'Ville di Fiemme',
    provincia: Province.TN,
  },
  {
    comune: 'Affi',
    provincia: Province.VR,
  },
  {
    comune: "Albaredo d'Adige",
    provincia: Province.VR,
  },
  {
    comune: 'Angiari',
    provincia: Province.VR,
  },
  {
    comune: 'Arcole',
    provincia: Province.VR,
  },
  {
    comune: 'Badia Calavena',
    provincia: Province.VR,
  },
  {
    comune: 'Bardolino',
    provincia: Province.VR,
  },
  {
    comune: 'Belfiore',
    provincia: Province.VR,
  },
  {
    comune: 'Bevilacqua',
    provincia: Province.VR,
  },
  {
    comune: 'Bonavigo',
    provincia: Province.VR,
  },
  {
    comune: "Boschi Sant'Anna",
    provincia: Province.VR,
  },
  {
    comune: 'Bosco Chiesanuova',
    provincia: Province.VR,
  },
  {
    comune: 'Bovolone',
    provincia: Province.VR,
  },
  {
    comune: 'Brentino Belluno',
    provincia: Province.VR,
  },
  {
    comune: 'Brenzone sul Garda',
    provincia: Province.VR,
  },
  {
    comune: 'Bussolengo',
    provincia: Province.VR,
  },
  {
    comune: 'Buttapietra',
    provincia: Province.VR,
  },
  {
    comune: 'Caldiero',
    provincia: Province.VR,
  },
  {
    comune: 'Caprino Veronese',
    provincia: Province.VR,
  },
  {
    comune: 'Casaleone',
    provincia: Province.VR,
  },
  {
    comune: 'Castagnaro',
    provincia: Province.VR,
  },
  {
    comune: "Castel d'Azzano",
    provincia: Province.VR,
  },
  {
    comune: 'Castelnuovo del Garda',
    provincia: Province.VR,
  },
  {
    comune: 'Cavaion Veronese',
    provincia: Province.VR,
  },
  {
    comune: 'Cazzano di Tramigna',
    provincia: Province.VR,
  },
  {
    comune: 'Cerea',
    provincia: Province.VR,
  },
  {
    comune: 'Cerro Veronese',
    provincia: Province.VR,
  },
  {
    comune: 'Cologna Veneta',
    provincia: Province.VR,
  },
  {
    comune: 'Colognola ai Colli',
    provincia: Province.VR,
  },
  {
    comune: 'Concamarise',
    provincia: Province.VR,
  },
  {
    comune: 'Costermano sul Garda',
    provincia: Province.VR,
  },
  {
    comune: 'Dolcè',
    provincia: Province.VR,
  },
  {
    comune: 'Erbè',
    provincia: Province.VR,
  },
  {
    comune: 'Erbezzo',
    provincia: Province.VR,
  },
  {
    comune: 'Ferrara di Monte Baldo',
    provincia: Province.VR,
  },
  {
    comune: 'Fumane',
    provincia: Province.VR,
  },
  {
    comune: 'Garda',
    provincia: Province.VR,
  },
  {
    comune: 'Gazzo Veronese',
    provincia: Province.VR,
  },
  {
    comune: 'Grezzana',
    provincia: Province.VR,
  },
  {
    comune: 'Illasi',
    provincia: Province.VR,
  },
  {
    comune: 'Isola della Scala',
    provincia: Province.VR,
  },
  {
    comune: 'Isola Rizza',
    provincia: Province.VR,
  },
  {
    comune: 'Lavagno',
    provincia: Province.VR,
  },
  {
    comune: 'Lazise',
    provincia: Province.VR,
  },
  {
    comune: 'Legnago',
    provincia: Province.VR,
  },
  {
    comune: 'Malcesine',
    provincia: Province.VR,
  },
  {
    comune: 'Marano di Valpolicella',
    provincia: Province.VR,
  },
  {
    comune: 'Mezzane di Sotto',
    provincia: Province.VR,
  },
  {
    comune: 'Minerbe',
    provincia: Province.VR,
  },
  {
    comune: 'Montecchia di Crosara',
    provincia: Province.VR,
  },
  {
    comune: "Monteforte d'Alpone",
    provincia: Province.VR,
  },
  {
    comune: 'Mozzecane',
    provincia: Province.VR,
  },
  {
    comune: 'Negrar di Valpolicella',
    provincia: Province.VR,
  },
  {
    comune: 'Nogara',
    provincia: Province.VR,
  },
  {
    comune: 'Nogarole Rocca',
    provincia: Province.VR,
  },
  {
    comune: 'Oppeano',
    provincia: Province.VR,
  },
  {
    comune: 'Palù',
    provincia: Province.VR,
  },
  {
    comune: 'Pastrengo',
    provincia: Province.VR,
  },
  {
    comune: 'Pescantina',
    provincia: Province.VR,
  },
  {
    comune: 'Peschiera del Garda',
    provincia: Province.VR,
  },
  {
    comune: 'Povegliano Veronese',
    provincia: Province.VR,
  },
  {
    comune: 'Pressana',
    provincia: Province.VR,
  },
  {
    comune: 'Rivoli Veronese',
    provincia: Province.VR,
  },
  {
    comune: 'Roncà',
    provincia: Province.VR,
  },
  {
    comune: "Ronco all'Adige",
    provincia: Province.VR,
  },
  {
    comune: 'Roverchiara',
    provincia: Province.VR,
  },
  {
    comune: 'Roveredo di Guà',
    provincia: Province.VR,
  },
  {
    comune: 'Roverè Veronese',
    provincia: Province.VR,
  },
  {
    comune: 'Salizzole',
    provincia: Province.VR,
  },
  {
    comune: 'San Bonifacio',
    provincia: Province.VR,
  },
  {
    comune: 'San Giovanni Ilarione',
    provincia: Province.VR,
  },
  {
    comune: 'San Giovanni Lupatoto',
    provincia: Province.VR,
  },
  {
    comune: 'Sanguinetto',
    provincia: Province.VR,
  },
  {
    comune: 'San Martino Buon Albergo',
    provincia: Province.VR,
  },
  {
    comune: 'San Mauro di Saline',
    provincia: Province.VR,
  },
  {
    comune: 'San Pietro di Morubio',
    provincia: Province.VR,
  },
  {
    comune: 'San Pietro in Cariano',
    provincia: Province.VR,
  },
  {
    comune: "Sant'Ambrogio di Valpolicella",
    provincia: Province.VR,
  },
  {
    comune: "Sant'Anna d'Alfaedo",
    provincia: Province.VR,
  },
  {
    comune: 'San Zeno di Montagna',
    provincia: Province.VR,
  },
  {
    comune: 'Selva di Progno',
    provincia: Province.VR,
  },
  {
    comune: 'Soave',
    provincia: Province.VR,
  },
  {
    comune: 'Sommacampagna',
    provincia: Province.VR,
  },
  {
    comune: 'Sona',
    provincia: Province.VR,
  },
  {
    comune: 'Sorgà',
    provincia: Province.VR,
  },
  {
    comune: 'Terrazzo',
    provincia: Province.VR,
  },
  {
    comune: 'Torri del Benaco',
    provincia: Province.VR,
  },
  {
    comune: 'Tregnago',
    provincia: Province.VR,
  },
  {
    comune: 'Trevenzuolo',
    provincia: Province.VR,
  },
  {
    comune: 'Valeggio sul Mincio',
    provincia: Province.VR,
  },
  {
    comune: 'Velo Veronese',
    provincia: Province.VR,
  },
  {
    comune: 'Verona',
    provincia: Province.VR,
  },
  {
    comune: 'Veronella',
    provincia: Province.VR,
  },
  {
    comune: 'Vestenanova',
    provincia: Province.VR,
  },
  {
    comune: 'Vigasio',
    provincia: Province.VR,
  },
  {
    comune: 'Villa Bartolomea',
    provincia: Province.VR,
  },
  {
    comune: 'Villafranca di Verona',
    provincia: Province.VR,
  },
  {
    comune: 'Zevio',
    provincia: Province.VR,
  },
  {
    comune: 'Zimella',
    provincia: Province.VR,
  },
  {
    comune: 'Agugliaro',
    provincia: Province.VI,
  },
  {
    comune: 'Albettone',
    provincia: Province.VI,
  },
  {
    comune: 'Alonte',
    provincia: Province.VI,
  },
  {
    comune: 'Altavilla Vicentina',
    provincia: Province.VI,
  },
  {
    comune: 'Altissimo',
    provincia: Province.VI,
  },
  {
    comune: 'Arcugnano',
    provincia: Province.VI,
  },
  {
    comune: 'Arsiero',
    provincia: Province.VI,
  },
  {
    comune: 'Arzignano',
    provincia: Province.VI,
  },
  {
    comune: 'Asiago',
    provincia: Province.VI,
  },
  {
    comune: 'Asigliano Veneto',
    provincia: Province.VI,
  },
  {
    comune: 'Bassano del Grappa',
    provincia: Province.VI,
  },
  {
    comune: 'Bolzano Vicentino',
    provincia: Province.VI,
  },
  {
    comune: 'Breganze',
    provincia: Province.VI,
  },
  {
    comune: 'Brendola',
    provincia: Province.VI,
  },
  {
    comune: 'Bressanvido',
    provincia: Province.VI,
  },
  {
    comune: 'Brogliano',
    provincia: Province.VI,
  },
  {
    comune: 'Caldogno',
    provincia: Province.VI,
  },
  {
    comune: 'Caltrano',
    provincia: Province.VI,
  },
  {
    comune: 'Calvene',
    provincia: Province.VI,
  },
  {
    comune: 'Camisano Vicentino',
    provincia: Province.VI,
  },
  {
    comune: 'Campiglia dei Berici',
    provincia: Province.VI,
  },
  {
    comune: 'Carrè',
    provincia: Province.VI,
  },
  {
    comune: 'Cartigliano',
    provincia: Province.VI,
  },
  {
    comune: 'Cassola',
    provincia: Province.VI,
  },
  {
    comune: 'Castegnero',
    provincia: Province.VI,
  },
  {
    comune: 'Castelgomberto',
    provincia: Province.VI,
  },
  {
    comune: 'Chiampo',
    provincia: Province.VI,
  },
  {
    comune: 'Chiuppano',
    provincia: Province.VI,
  },
  {
    comune: 'Cogollo del Cengio',
    provincia: Province.VI,
  },
  {
    comune: 'Cornedo Vicentino',
    provincia: Province.VI,
  },
  {
    comune: 'Costabissara',
    provincia: Province.VI,
  },
  {
    comune: 'Creazzo',
    provincia: Province.VI,
  },
  {
    comune: 'Crespadoro',
    provincia: Province.VI,
  },
  {
    comune: 'Dueville',
    provincia: Province.VI,
  },
  {
    comune: 'Enego',
    provincia: Province.VI,
  },
  {
    comune: 'Fara Vicentino',
    provincia: Province.VI,
  },
  {
    comune: 'Foza',
    provincia: Province.VI,
  },
  {
    comune: 'Gallio',
    provincia: Province.VI,
  },
  {
    comune: 'Gambellara',
    provincia: Province.VI,
  },
  {
    comune: 'Gambugliano',
    provincia: Province.VI,
  },
  {
    comune: 'Grisignano di Zocco',
    provincia: Province.VI,
  },
  {
    comune: 'Grumolo delle Abbadesse',
    provincia: Province.VI,
  },
  {
    comune: 'Isola Vicentina',
    provincia: Province.VI,
  },
  {
    comune: 'Laghi',
    provincia: Province.VI,
  },
  {
    comune: 'Lastebasse',
    provincia: Province.VI,
  },
  {
    comune: 'Longare',
    provincia: Province.VI,
  },
  {
    comune: 'Lonigo',
    provincia: Province.VI,
  },
  {
    comune: 'Lugo di Vicenza',
    provincia: Province.VI,
  },
  {
    comune: 'Malo',
    provincia: Province.VI,
  },
  {
    comune: 'Marano Vicentino',
    provincia: Province.VI,
  },
  {
    comune: 'Marostica',
    provincia: Province.VI,
  },
  {
    comune: 'Montebello Vicentino',
    provincia: Province.VI,
  },
  {
    comune: 'Montecchio Maggiore',
    provincia: Province.VI,
  },
  {
    comune: 'Montecchio Precalcino',
    provincia: Province.VI,
  },
  {
    comune: 'Monte di Malo',
    provincia: Province.VI,
  },
  {
    comune: 'Montegalda',
    provincia: Province.VI,
  },
  {
    comune: 'Montegaldella',
    provincia: Province.VI,
  },
  {
    comune: 'Monteviale',
    provincia: Province.VI,
  },
  {
    comune: 'Monticello Conte Otto',
    provincia: Province.VI,
  },
  {
    comune: 'Montorso Vicentino',
    provincia: Province.VI,
  },
  {
    comune: 'Mussolente',
    provincia: Province.VI,
  },
  {
    comune: 'Nanto',
    provincia: Province.VI,
  },
  {
    comune: 'Nogarole Vicentino',
    provincia: Province.VI,
  },
  {
    comune: 'Nove',
    provincia: Province.VI,
  },
  {
    comune: 'Noventa Vicentina',
    provincia: Province.VI,
  },
  {
    comune: 'Orgiano',
    provincia: Province.VI,
  },
  {
    comune: 'Pedemonte',
    provincia: Province.VI,
  },
  {
    comune: 'Pianezze',
    provincia: Province.VI,
  },
  {
    comune: 'Piovene Rocchette',
    provincia: Province.VI,
  },
  {
    comune: 'Pojana Maggiore',
    provincia: Province.VI,
  },
  {
    comune: 'Posina',
    provincia: Province.VI,
  },
  {
    comune: 'Pove del Grappa',
    provincia: Province.VI,
  },
  {
    comune: 'Pozzoleone',
    provincia: Province.VI,
  },
  {
    comune: 'Quinto Vicentino',
    provincia: Province.VI,
  },
  {
    comune: 'Recoaro Terme',
    provincia: Province.VI,
  },
  {
    comune: 'Roana',
    provincia: Province.VI,
  },
  {
    comune: "Romano d'Ezzelino",
    provincia: Province.VI,
  },
  {
    comune: 'Rosà',
    provincia: Province.VI,
  },
  {
    comune: 'Rossano Veneto',
    provincia: Province.VI,
  },
  {
    comune: 'Rotzo',
    provincia: Province.VI,
  },
  {
    comune: 'Salcedo',
    provincia: Province.VI,
  },
  {
    comune: 'Sandrigo',
    provincia: Province.VI,
  },
  {
    comune: 'San Pietro Mussolino',
    provincia: Province.VI,
  },
  {
    comune: 'Santorso',
    provincia: Province.VI,
  },
  {
    comune: 'San Vito di Leguzzano',
    provincia: Province.VI,
  },
  {
    comune: 'Sarcedo',
    provincia: Province.VI,
  },
  {
    comune: 'Sarego',
    provincia: Province.VI,
  },
  {
    comune: 'Schiavon',
    provincia: Province.VI,
  },
  {
    comune: 'Schio',
    provincia: Province.VI,
  },
  {
    comune: 'Solagna',
    provincia: Province.VI,
  },
  {
    comune: 'Sossano',
    provincia: Province.VI,
  },
  {
    comune: 'Sovizzo',
    provincia: Province.VI,
  },
  {
    comune: 'Tezze sul Brenta',
    provincia: Province.VI,
  },
  {
    comune: 'Thiene',
    provincia: Province.VI,
  },
  {
    comune: 'Tonezza del Cimone',
    provincia: Province.VI,
  },
  {
    comune: 'Torrebelvicino',
    provincia: Province.VI,
  },
  {
    comune: 'Torri di Quartesolo',
    provincia: Province.VI,
  },
  {
    comune: 'Trissino',
    provincia: Province.VI,
  },
  {
    comune: 'Valdagno',
    provincia: Province.VI,
  },
  {
    comune: 'Valdastico',
    provincia: Province.VI,
  },
  {
    comune: 'Valli del Pasubio',
    provincia: Province.VI,
  },
  {
    comune: "Velo d'Astico",
    provincia: Province.VI,
  },
  {
    comune: 'Vicenza',
    provincia: Province.VI,
  },
  {
    comune: 'Villaga',
    provincia: Province.VI,
  },
  {
    comune: 'Villaverla',
    provincia: Province.VI,
  },
  {
    comune: 'Zanè',
    provincia: Province.VI,
  },
  {
    comune: 'Zermeghedo',
    provincia: Province.VI,
  },
  {
    comune: 'Zovencedo',
    provincia: Province.VI,
  },
  {
    comune: 'Zugliano',
    provincia: Province.VI,
  },
  {
    comune: 'Val Liona',
    provincia: Province.VI,
  },
  {
    comune: 'Barbarano Mossano',
    provincia: Province.VI,
  },
  {
    comune: 'Valbrenta',
    provincia: Province.VI,
  },
  {
    comune: 'Colceresa',
    provincia: Province.VI,
  },
  {
    comune: 'Lusiana Conco',
    provincia: Province.VI,
  },
  {
    comune: 'Agordo',
    provincia: Province.BL,
  },
  {
    comune: 'Alano di Piave',
    provincia: Province.BL,
  },
  {
    comune: 'Alleghe',
    provincia: Province.BL,
  },
  {
    comune: 'Arsiè',
    provincia: Province.BL,
  },
  {
    comune: 'Auronzo di Cadore',
    provincia: Province.BL,
  },
  {
    comune: 'Belluno',
    provincia: Province.BL,
  },
  {
    comune: 'Borca di Cadore',
    provincia: Province.BL,
  },
  {
    comune: 'Calalzo di Cadore',
    provincia: Province.BL,
  },
  {
    comune: 'Cencenighe Agordino',
    provincia: Province.BL,
  },
  {
    comune: 'Cesiomaggiore',
    provincia: Province.BL,
  },
  {
    comune: "Chies d'Alpago",
    provincia: Province.BL,
  },
  {
    comune: 'Cibiana di Cadore',
    provincia: Province.BL,
  },
  {
    comune: 'Colle Santa Lucia',
    provincia: Province.BL,
  },
  {
    comune: 'Comelico Superiore',
    provincia: Province.BL,
  },
  {
    comune: "Cortina d'Ampezzo",
    provincia: Province.BL,
  },
  {
    comune: 'Danta di Cadore',
    provincia: Province.BL,
  },
  {
    comune: 'Domegge di Cadore',
    provincia: Province.BL,
  },
  {
    comune: 'Falcade',
    provincia: Province.BL,
  },
  {
    comune: 'Feltre',
    provincia: Province.BL,
  },
  {
    comune: 'Fonzaso',
    provincia: Province.BL,
  },
  {
    comune: "Canale d'Agordo",
    provincia: Province.BL,
  },
  {
    comune: 'Gosaldo',
    provincia: Province.BL,
  },
  {
    comune: 'Lamon',
    provincia: Province.BL,
  },
  {
    comune: 'La Valle Agordina',
    provincia: Province.BL,
  },
  {
    comune: 'Limana',
    provincia: Province.BL,
  },
  {
    comune: 'Livinallongo del Col di Lana',
    provincia: Province.BL,
  },
  {
    comune: 'Lorenzago di Cadore',
    provincia: Province.BL,
  },
  {
    comune: 'Lozzo di Cadore',
    provincia: Province.BL,
  },
  {
    comune: 'Ospitale di Cadore',
    provincia: Province.BL,
  },
  {
    comune: 'Pedavena',
    provincia: Province.BL,
  },
  {
    comune: 'Perarolo di Cadore',
    provincia: Province.BL,
  },
  {
    comune: 'Pieve di Cadore',
    provincia: Province.BL,
  },
  {
    comune: 'Ponte nelle Alpi',
    provincia: Province.BL,
  },
  {
    comune: 'Rivamonte Agordino',
    provincia: Province.BL,
  },
  {
    comune: 'Rocca Pietore',
    provincia: Province.BL,
  },
  {
    comune: 'San Gregorio nelle Alpi',
    provincia: Province.BL,
  },
  {
    comune: 'San Nicolò di Comelico',
    provincia: Province.BL,
  },
  {
    comune: 'San Pietro di Cadore',
    provincia: Province.BL,
  },
  {
    comune: 'Santa Giustina',
    provincia: Province.BL,
  },
  {
    comune: 'San Tomaso Agordino',
    provincia: Province.BL,
  },
  {
    comune: 'Santo Stefano di Cadore',
    provincia: Province.BL,
  },
  {
    comune: 'San Vito di Cadore',
    provincia: Province.BL,
  },
  {
    comune: 'Sedico',
    provincia: Province.BL,
  },
  {
    comune: 'Selva di Cadore',
    provincia: Province.BL,
  },
  {
    comune: 'Seren del Grappa',
    provincia: Province.BL,
  },
  {
    comune: 'Sospirolo',
    provincia: Province.BL,
  },
  {
    comune: 'Soverzene',
    provincia: Province.BL,
  },
  {
    comune: 'Sovramonte',
    provincia: Province.BL,
  },
  {
    comune: 'Taibon Agordino',
    provincia: Province.BL,
  },
  {
    comune: 'Tambre',
    provincia: Province.BL,
  },
  {
    comune: 'Vallada Agordina',
    provincia: Province.BL,
  },
  {
    comune: 'Valle di Cadore',
    provincia: Province.BL,
  },
  {
    comune: 'Vigo di Cadore',
    provincia: Province.BL,
  },
  {
    comune: 'Vodo Cadore',
    provincia: Province.BL,
  },
  {
    comune: 'Voltago Agordino',
    provincia: Province.BL,
  },
  {
    comune: 'Zoppè di Cadore',
    provincia: Province.BL,
  },
  {
    comune: 'Quero Vas',
    provincia: Province.BL,
  },
  {
    comune: 'Longarone',
    provincia: Province.BL,
  },
  {
    comune: 'Alpago',
    provincia: Province.BL,
  },
  {
    comune: 'Val di Zoldo',
    provincia: Province.BL,
  },
  {
    comune: 'Borgo Valbelluna',
    provincia: Province.BL,
  },
  {
    comune: 'Altivole',
    provincia: Province.TV,
  },
  {
    comune: 'Arcade',
    provincia: Province.TV,
  },
  {
    comune: 'Asolo',
    provincia: Province.TV,
  },
  {
    comune: 'Borso del Grappa',
    provincia: Province.TV,
  },
  {
    comune: 'Breda di Piave',
    provincia: Province.TV,
  },
  {
    comune: 'Caerano di San Marco',
    provincia: Province.TV,
  },
  {
    comune: 'Cappella Maggiore',
    provincia: Province.TV,
  },
  {
    comune: 'Carbonera',
    provincia: Province.TV,
  },
  {
    comune: 'Casale sul Sile',
    provincia: Province.TV,
  },
  {
    comune: 'Casier',
    provincia: Province.TV,
  },
  {
    comune: 'Castelcucco',
    provincia: Province.TV,
  },
  {
    comune: 'Castelfranco Veneto',
    provincia: Province.TV,
  },
  {
    comune: 'Castello di Godego',
    provincia: Province.TV,
  },
  {
    comune: 'Cavaso del Tomba',
    provincia: Province.TV,
  },
  {
    comune: 'Cessalto',
    provincia: Province.TV,
  },
  {
    comune: 'Chiarano',
    provincia: Province.TV,
  },
  {
    comune: 'Cimadolmo',
    provincia: Province.TV,
  },
  {
    comune: 'Cison di Valmarino',
    provincia: Province.TV,
  },
  {
    comune: 'Codognè',
    provincia: Province.TV,
  },
  {
    comune: 'Colle Umberto',
    provincia: Province.TV,
  },
  {
    comune: 'Conegliano',
    provincia: Province.TV,
  },
  {
    comune: 'Cordignano',
    provincia: Province.TV,
  },
  {
    comune: 'Cornuda',
    provincia: Province.TV,
  },
  {
    comune: 'Crocetta del Montello',
    provincia: Province.TV,
  },
  {
    comune: 'Farra di Soligo',
    provincia: Province.TV,
  },
  {
    comune: 'Follina',
    provincia: Province.TV,
  },
  {
    comune: 'Fontanelle',
    provincia: Province.TV,
  },
  {
    comune: 'Fonte',
    provincia: Province.TV,
  },
  {
    comune: 'Fregona',
    provincia: Province.TV,
  },
  {
    comune: 'Gaiarine',
    provincia: Province.TV,
  },
  {
    comune: 'Giavera del Montello',
    provincia: Province.TV,
  },
  {
    comune: "Godega di Sant'Urbano",
    provincia: Province.TV,
  },
  {
    comune: 'Gorgo al Monticano',
    provincia: Province.TV,
  },
  {
    comune: 'Istrana',
    provincia: Province.TV,
  },
  {
    comune: 'Loria',
    provincia: Province.TV,
  },
  {
    comune: 'Mansuè',
    provincia: Province.TV,
  },
  {
    comune: 'Mareno di Piave',
    provincia: Province.TV,
  },
  {
    comune: 'Maser',
    provincia: Province.TV,
  },
  {
    comune: 'Maserada sul Piave',
    provincia: Province.TV,
  },
  {
    comune: 'Meduna di Livenza',
    provincia: Province.TV,
  },
  {
    comune: 'Miane',
    provincia: Province.TV,
  },
  {
    comune: 'Mogliano Veneto',
    provincia: Province.TV,
  },
  {
    comune: 'Monastier di Treviso',
    provincia: Province.TV,
  },
  {
    comune: 'Monfumo',
    provincia: Province.TV,
  },
  {
    comune: 'Montebelluna',
    provincia: Province.TV,
  },
  {
    comune: 'Morgano',
    provincia: Province.TV,
  },
  {
    comune: 'Moriago della Battaglia',
    provincia: Province.TV,
  },
  {
    comune: 'Motta di Livenza',
    provincia: Province.TV,
  },
  {
    comune: 'Nervesa della Battaglia',
    provincia: Province.TV,
  },
  {
    comune: 'Oderzo',
    provincia: Province.TV,
  },
  {
    comune: 'Ormelle',
    provincia: Province.TV,
  },
  {
    comune: 'Orsago',
    provincia: Province.TV,
  },
  {
    comune: 'Paese',
    provincia: Province.TV,
  },
  {
    comune: 'Pederobba',
    provincia: Province.TV,
  },
  {
    comune: 'Pieve di Soligo',
    provincia: Province.TV,
  },
  {
    comune: 'Ponte di Piave',
    provincia: Province.TV,
  },
  {
    comune: 'Ponzano Veneto',
    provincia: Province.TV,
  },
  {
    comune: 'Portobuffolè',
    provincia: Province.TV,
  },
  {
    comune: 'Possagno',
    provincia: Province.TV,
  },
  {
    comune: 'Povegliano',
    provincia: Province.TV,
  },
  {
    comune: 'Preganziol',
    provincia: Province.TV,
  },
  {
    comune: 'Quinto di Treviso',
    provincia: Province.TV,
  },
  {
    comune: 'Refrontolo',
    provincia: Province.TV,
  },
  {
    comune: 'Resana',
    provincia: Province.TV,
  },
  {
    comune: 'Revine Lago',
    provincia: Province.TV,
  },
  {
    comune: 'Riese Pio X',
    provincia: Province.TV,
  },
  {
    comune: 'Roncade',
    provincia: Province.TV,
  },
  {
    comune: 'Salgareda',
    provincia: Province.TV,
  },
  {
    comune: 'San Biagio di Callalta',
    provincia: Province.TV,
  },
  {
    comune: 'San Fior',
    provincia: Province.TV,
  },
  {
    comune: 'San Pietro di Feletto',
    provincia: Province.TV,
  },
  {
    comune: 'San Polo di Piave',
    provincia: Province.TV,
  },
  {
    comune: 'Santa Lucia di Piave',
    provincia: Province.TV,
  },
  {
    comune: 'San Vendemiano',
    provincia: Province.TV,
  },
  {
    comune: 'San Zenone degli Ezzelini',
    provincia: Province.TV,
  },
  {
    comune: 'Sarmede',
    provincia: Province.TV,
  },
  {
    comune: 'Segusino',
    provincia: Province.TV,
  },
  {
    comune: 'Sernaglia della Battaglia',
    provincia: Province.TV,
  },
  {
    comune: 'Silea',
    provincia: Province.TV,
  },
  {
    comune: 'Spresiano',
    provincia: Province.TV,
  },
  {
    comune: 'Susegana',
    provincia: Province.TV,
  },
  {
    comune: 'Tarzo',
    provincia: Province.TV,
  },
  {
    comune: 'Trevignano',
    provincia: Province.TV,
  },
  {
    comune: 'Treviso',
    provincia: Province.TV,
  },
  {
    comune: 'Valdobbiadene',
    provincia: Province.TV,
  },
  {
    comune: 'Vazzola',
    provincia: Province.TV,
  },
  {
    comune: 'Vedelago',
    provincia: Province.TV,
  },
  {
    comune: 'Vidor',
    provincia: Province.TV,
  },
  {
    comune: 'Villorba',
    provincia: Province.TV,
  },
  {
    comune: 'Vittorio Veneto',
    provincia: Province.TV,
  },
  {
    comune: 'Volpago del Montello',
    provincia: Province.TV,
  },
  {
    comune: 'Zenson di Piave',
    provincia: Province.TV,
  },
  {
    comune: 'Zero Branco',
    provincia: Province.TV,
  },
  {
    comune: 'Pieve del Grappa',
    provincia: Province.TV,
  },
  {
    comune: 'Annone Veneto',
    provincia: Province.VE,
  },
  {
    comune: 'Campagna Lupia',
    provincia: Province.VE,
  },
  {
    comune: 'Campolongo Maggiore',
    provincia: Province.VE,
  },
  {
    comune: 'Camponogara',
    provincia: Province.VE,
  },
  {
    comune: 'Caorle',
    provincia: Province.VE,
  },
  {
    comune: 'Cavarzere',
    provincia: Province.VE,
  },
  {
    comune: 'Ceggia',
    provincia: Province.VE,
  },
  {
    comune: 'Chioggia',
    provincia: Province.VE,
  },
  {
    comune: 'Cinto Caomaggiore',
    provincia: Province.VE,
  },
  {
    comune: 'Cona',
    provincia: Province.VE,
  },
  {
    comune: 'Concordia Sagittaria',
    provincia: Province.VE,
  },
  {
    comune: 'Dolo',
    provincia: Province.VE,
  },
  {
    comune: 'Eraclea',
    provincia: Province.VE,
  },
  {
    comune: "Fiesso d'Artico",
    provincia: Province.VE,
  },
  {
    comune: 'Fossalta di Piave',
    provincia: Province.VE,
  },
  {
    comune: 'Fossalta di Portogruaro',
    provincia: Province.VE,
  },
  {
    comune: 'Fossò',
    provincia: Province.VE,
  },
  {
    comune: 'Gruaro',
    provincia: Province.VE,
  },
  {
    comune: 'Jesolo',
    provincia: Province.VE,
  },
  {
    comune: 'Marcon',
    provincia: Province.VE,
  },
  {
    comune: 'Martellago',
    provincia: Province.VE,
  },
  {
    comune: 'Meolo',
    provincia: Province.VE,
  },
  {
    comune: 'Mira',
    provincia: Province.VE,
  },
  {
    comune: 'Mirano',
    provincia: Province.VE,
  },
  {
    comune: 'Musile di Piave',
    provincia: Province.VE,
  },
  {
    comune: 'Noale',
    provincia: Province.VE,
  },
  {
    comune: 'Noventa di Piave',
    provincia: Province.VE,
  },
  {
    comune: 'Pianiga',
    provincia: Province.VE,
  },
  {
    comune: 'Portogruaro',
    provincia: Province.VE,
  },
  {
    comune: 'Pramaggiore',
    provincia: Province.VE,
  },
  {
    comune: "Quarto d'Altino",
    provincia: Province.VE,
  },
  {
    comune: 'Salzano',
    provincia: Province.VE,
  },
  {
    comune: 'San Donà di Piave',
    provincia: Province.VE,
  },
  {
    comune: 'San Michele al Tagliamento',
    provincia: Province.VE,
  },
  {
    comune: 'Santa Maria di Sala',
    provincia: Province.VE,
  },
  {
    comune: 'San Stino di Livenza',
    provincia: Province.VE,
  },
  {
    comune: 'Scorzè',
    provincia: Province.VE,
  },
  {
    comune: 'Spinea',
    provincia: Province.VE,
  },
  {
    comune: 'Stra',
    provincia: Province.VE,
  },
  {
    comune: 'Teglio Veneto',
    provincia: Province.VE,
  },
  {
    comune: 'Torre di Mosto',
    provincia: Province.VE,
  },
  {
    comune: 'Venezia',
    provincia: Province.VE,
  },
  {
    comune: 'Vigonovo',
    provincia: Province.VE,
  },
  {
    comune: 'Cavallino-Treporti',
    provincia: Province.VE,
  },
  {
    comune: 'Abano Terme',
    provincia: Province.PD,
  },
  {
    comune: 'Agna',
    provincia: Province.PD,
  },
  {
    comune: 'Albignasego',
    provincia: Province.PD,
  },
  {
    comune: 'Anguillara Veneta',
    provincia: Province.PD,
  },
  {
    comune: 'Arquà Petrarca',
    provincia: Province.PD,
  },
  {
    comune: 'Arre',
    provincia: Province.PD,
  },
  {
    comune: 'Arzergrande',
    provincia: Province.PD,
  },
  {
    comune: 'Bagnoli di Sopra',
    provincia: Province.PD,
  },
  {
    comune: 'Baone',
    provincia: Province.PD,
  },
  {
    comune: 'Barbona',
    provincia: Province.PD,
  },
  {
    comune: 'Battaglia Terme',
    provincia: Province.PD,
  },
  {
    comune: 'Boara Pisani',
    provincia: Province.PD,
  },
  {
    comune: 'Borgoricco',
    provincia: Province.PD,
  },
  {
    comune: 'Bovolenta',
    provincia: Province.PD,
  },
  {
    comune: 'Brugine',
    provincia: Province.PD,
  },
  {
    comune: 'Cadoneghe',
    provincia: Province.PD,
  },
  {
    comune: 'Campodarsego',
    provincia: Province.PD,
  },
  {
    comune: 'Campodoro',
    provincia: Province.PD,
  },
  {
    comune: 'Camposampiero',
    provincia: Province.PD,
  },
  {
    comune: 'Campo San Martino',
    provincia: Province.PD,
  },
  {
    comune: 'Candiana',
    provincia: Province.PD,
  },
  {
    comune: 'Carceri',
    provincia: Province.PD,
  },
  {
    comune: 'Carmignano di Brenta',
    provincia: Province.PD,
  },
  {
    comune: 'Cartura',
    provincia: Province.PD,
  },
  {
    comune: 'Casale di Scodosia',
    provincia: Province.PD,
  },
  {
    comune: 'Casalserugo',
    provincia: Province.PD,
  },
  {
    comune: 'Castelbaldo',
    provincia: Province.PD,
  },
  {
    comune: 'Cervarese Santa Croce',
    provincia: Province.PD,
  },
  {
    comune: 'Cinto Euganeo',
    provincia: Province.PD,
  },
  {
    comune: 'Cittadella',
    provincia: Province.PD,
  },
  {
    comune: 'Codevigo',
    provincia: Province.PD,
  },
  {
    comune: 'Conselve',
    provincia: Province.PD,
  },
  {
    comune: 'Correzzola',
    provincia: Province.PD,
  },
  {
    comune: 'Curtarolo',
    provincia: Province.PD,
  },
  {
    comune: 'Este',
    provincia: Province.PD,
  },
  {
    comune: 'Fontaniva',
    provincia: Province.PD,
  },
  {
    comune: 'Galliera Veneta',
    provincia: Province.PD,
  },
  {
    comune: 'Galzignano Terme',
    provincia: Province.PD,
  },
  {
    comune: 'Gazzo',
    provincia: Province.PD,
  },
  {
    comune: 'Grantorto',
    provincia: Province.PD,
  },
  {
    comune: 'Granze',
    provincia: Province.PD,
  },
  {
    comune: 'Legnaro',
    provincia: Province.PD,
  },
  {
    comune: 'Limena',
    provincia: Province.PD,
  },
  {
    comune: 'Loreggia',
    provincia: Province.PD,
  },
  {
    comune: 'Lozzo Atestino',
    provincia: Province.PD,
  },
  {
    comune: 'Maserà di Padova',
    provincia: Province.PD,
  },
  {
    comune: 'Masi',
    provincia: Province.PD,
  },
  {
    comune: 'Massanzago',
    provincia: Province.PD,
  },
  {
    comune: 'Megliadino San Vitale',
    provincia: Province.PD,
  },
  {
    comune: 'Merlara',
    provincia: Province.PD,
  },
  {
    comune: 'Mestrino',
    provincia: Province.PD,
  },
  {
    comune: 'Monselice',
    provincia: Province.PD,
  },
  {
    comune: 'Montagnana',
    provincia: Province.PD,
  },
  {
    comune: 'Montegrotto Terme',
    provincia: Province.PD,
  },
  {
    comune: 'Noventa Padovana',
    provincia: Province.PD,
  },
  {
    comune: 'Ospedaletto Euganeo',
    provincia: Province.PD,
  },
  {
    comune: 'Padova',
    provincia: Province.PD,
  },
  {
    comune: 'Pernumia',
    provincia: Province.PD,
  },
  {
    comune: "Piacenza d'Adige",
    provincia: Province.PD,
  },
  {
    comune: 'Piazzola sul Brenta',
    provincia: Province.PD,
  },
  {
    comune: 'Piombino Dese',
    provincia: Province.PD,
  },
  {
    comune: 'Piove di Sacco',
    provincia: Province.PD,
  },
  {
    comune: 'Polverara',
    provincia: Province.PD,
  },
  {
    comune: 'Ponso',
    provincia: Province.PD,
  },
  {
    comune: 'Pontelongo',
    provincia: Province.PD,
  },
  {
    comune: 'Ponte San Nicolò',
    provincia: Province.PD,
  },
  {
    comune: 'Pozzonovo',
    provincia: Province.PD,
  },
  {
    comune: 'Rovolon',
    provincia: Province.PD,
  },
  {
    comune: 'Rubano',
    provincia: Province.PD,
  },
  {
    comune: 'Saccolongo',
    provincia: Province.PD,
  },
  {
    comune: 'San Giorgio delle Pertiche',
    provincia: Province.PD,
  },
  {
    comune: 'San Giorgio in Bosco',
    provincia: Province.PD,
  },
  {
    comune: 'San Martino di Lupari',
    provincia: Province.PD,
  },
  {
    comune: 'San Pietro in Gu',
    provincia: Province.PD,
  },
  {
    comune: 'San Pietro Viminario',
    provincia: Province.PD,
  },
  {
    comune: 'Santa Giustina in Colle',
    provincia: Province.PD,
  },
  {
    comune: "Sant'Angelo di Piove di Sacco",
    provincia: Province.PD,
  },
  {
    comune: "Sant'Elena",
    provincia: Province.PD,
  },
  {
    comune: "Sant'Urbano",
    provincia: Province.PD,
  },
  {
    comune: 'Saonara',
    provincia: Province.PD,
  },
  {
    comune: 'Selvazzano Dentro',
    provincia: Province.PD,
  },
  {
    comune: 'Solesino',
    provincia: Province.PD,
  },
  {
    comune: 'Stanghella',
    provincia: Province.PD,
  },
  {
    comune: 'Teolo',
    provincia: Province.PD,
  },
  {
    comune: 'Terrassa Padovana',
    provincia: Province.PD,
  },
  {
    comune: 'Tombolo',
    provincia: Province.PD,
  },
  {
    comune: 'Torreglia',
    provincia: Province.PD,
  },
  {
    comune: 'Trebaseleghe',
    provincia: Province.PD,
  },
  {
    comune: 'Tribano',
    provincia: Province.PD,
  },
  {
    comune: 'Urbana',
    provincia: Province.PD,
  },
  {
    comune: 'Veggiano',
    provincia: Province.PD,
  },
  {
    comune: 'Vescovana',
    provincia: Province.PD,
  },
  {
    comune: "Vighizzolo d'Este",
    provincia: Province.PD,
  },
  {
    comune: 'Vigodarzere',
    provincia: Province.PD,
  },
  {
    comune: 'Vigonza',
    provincia: Province.PD,
  },
  {
    comune: 'Villa del Conte',
    provincia: Province.PD,
  },
  {
    comune: 'Villa Estense',
    provincia: Province.PD,
  },
  {
    comune: 'Villafranca Padovana',
    provincia: Province.PD,
  },
  {
    comune: 'Villanova di Camposampiero',
    provincia: Province.PD,
  },
  {
    comune: "Vo'",
    provincia: Province.PD,
  },
  {
    comune: 'Due Carrare',
    provincia: Province.PD,
  },
  {
    comune: 'Borgo Veneto',
    provincia: Province.PD,
  },
  {
    comune: 'Adria',
    provincia: Province.RO,
  },
  {
    comune: 'Ariano nel Polesine',
    provincia: Province.RO,
  },
  {
    comune: 'Arquà Polesine',
    provincia: Province.RO,
  },
  {
    comune: 'Badia Polesine',
    provincia: Province.RO,
  },
  {
    comune: 'Bagnolo di Po',
    provincia: Province.RO,
  },
  {
    comune: 'Bergantino',
    provincia: Province.RO,
  },
  {
    comune: 'Bosaro',
    provincia: Province.RO,
  },
  {
    comune: 'Calto',
    provincia: Province.RO,
  },
  {
    comune: 'Canaro',
    provincia: Province.RO,
  },
  {
    comune: 'Canda',
    provincia: Province.RO,
  },
  {
    comune: 'Castelguglielmo',
    provincia: Province.RO,
  },
  {
    comune: 'Castelmassa',
    provincia: Province.RO,
  },
  {
    comune: 'Castelnovo Bariano',
    provincia: Province.RO,
  },
  {
    comune: 'Ceneselli',
    provincia: Province.RO,
  },
  {
    comune: 'Ceregnano',
    provincia: Province.RO,
  },
  {
    comune: 'Corbola',
    provincia: Province.RO,
  },
  {
    comune: 'Costa di Rovigo',
    provincia: Province.RO,
  },
  {
    comune: 'Crespino',
    provincia: Province.RO,
  },
  {
    comune: 'Ficarolo',
    provincia: Province.RO,
  },
  {
    comune: 'Fiesso Umbertiano',
    provincia: Province.RO,
  },
  {
    comune: 'Frassinelle Polesine',
    provincia: Province.RO,
  },
  {
    comune: 'Fratta Polesine',
    provincia: Province.RO,
  },
  {
    comune: 'Gaiba',
    provincia: Province.RO,
  },
  {
    comune: 'Gavello',
    provincia: Province.RO,
  },
  {
    comune: 'Giacciano con Baruchella',
    provincia: Province.RO,
  },
  {
    comune: 'Guarda Veneta',
    provincia: Province.RO,
  },
  {
    comune: 'Lendinara',
    provincia: Province.RO,
  },
  {
    comune: 'Loreo',
    provincia: Province.RO,
  },
  {
    comune: 'Lusia',
    provincia: Province.RO,
  },
  {
    comune: 'Melara',
    provincia: Province.RO,
  },
  {
    comune: 'Occhiobello',
    provincia: Province.RO,
  },
  {
    comune: 'Papozze',
    provincia: Province.RO,
  },
  {
    comune: 'Pettorazza Grimani',
    provincia: Province.RO,
  },
  {
    comune: 'Pincara',
    provincia: Province.RO,
  },
  {
    comune: 'Polesella',
    provincia: Province.RO,
  },
  {
    comune: 'Pontecchio Polesine',
    provincia: Province.RO,
  },
  {
    comune: 'Porto Tolle',
    provincia: Province.RO,
  },
  {
    comune: 'Rosolina',
    provincia: Province.RO,
  },
  {
    comune: 'Rovigo',
    provincia: Province.RO,
  },
  {
    comune: 'Salara',
    provincia: Province.RO,
  },
  {
    comune: 'San Bellino',
    provincia: Province.RO,
  },
  {
    comune: 'San Martino di Venezze',
    provincia: Province.RO,
  },
  {
    comune: 'Stienta',
    provincia: Province.RO,
  },
  {
    comune: 'Taglio di Po',
    provincia: Province.RO,
  },
  {
    comune: 'Trecenta',
    provincia: Province.RO,
  },
  {
    comune: 'Villadose',
    provincia: Province.RO,
  },
  {
    comune: 'Villamarzana',
    provincia: Province.RO,
  },
  {
    comune: 'Villanova del Ghebbo',
    provincia: Province.RO,
  },
  {
    comune: 'Villanova Marchesana',
    provincia: Province.RO,
  },
  {
    comune: 'Porto Viro',
    provincia: Province.RO,
  },
  {
    comune: 'Aiello del Friuli',
    provincia: Province.UD,
  },
  {
    comune: 'Amaro',
    provincia: Province.UD,
  },
  {
    comune: 'Ampezzo',
    provincia: Province.UD,
  },
  {
    comune: 'Aquileia',
    provincia: Province.UD,
  },
  {
    comune: 'Arta Terme',
    provincia: Province.UD,
  },
  {
    comune: 'Artegna',
    provincia: Province.UD,
  },
  {
    comune: 'Attimis',
    provincia: Province.UD,
  },
  {
    comune: 'Bagnaria Arsa',
    provincia: Province.UD,
  },
  {
    comune: 'Basiliano',
    provincia: Province.UD,
  },
  {
    comune: 'Bertiolo',
    provincia: Province.UD,
  },
  {
    comune: 'Bicinicco',
    provincia: Province.UD,
  },
  {
    comune: 'Bordano',
    provincia: Province.UD,
  },
  {
    comune: 'Buja',
    provincia: Province.UD,
  },
  {
    comune: 'Buttrio',
    provincia: Province.UD,
  },
  {
    comune: 'Camino al Tagliamento',
    provincia: Province.UD,
  },
  {
    comune: 'Campoformido',
    provincia: Province.UD,
  },
  {
    comune: 'Carlino',
    provincia: Province.UD,
  },
  {
    comune: 'Cassacco',
    provincia: Province.UD,
  },
  {
    comune: 'Castions di Strada',
    provincia: Province.UD,
  },
  {
    comune: 'Cavazzo Carnico',
    provincia: Province.UD,
  },
  {
    comune: 'Cercivento',
    provincia: Province.UD,
  },
  {
    comune: 'Cervignano del Friuli',
    provincia: Province.UD,
  },
  {
    comune: 'Chiopris-Viscone',
    provincia: Province.UD,
  },
  {
    comune: 'Chiusaforte',
    provincia: Province.UD,
  },
  {
    comune: 'Cividale del Friuli',
    provincia: Province.UD,
  },
  {
    comune: 'Codroipo',
    provincia: Province.UD,
  },
  {
    comune: 'Colloredo di Monte Albano',
    provincia: Province.UD,
  },
  {
    comune: 'Comeglians',
    provincia: Province.UD,
  },
  {
    comune: 'Corno di Rosazzo',
    provincia: Province.UD,
  },
  {
    comune: 'Coseano',
    provincia: Province.UD,
  },
  {
    comune: 'Dignano',
    provincia: Province.UD,
  },
  {
    comune: 'Dogna',
    provincia: Province.UD,
  },
  {
    comune: 'Drenchia',
    provincia: Province.UD,
  },
  {
    comune: 'Enemonzo',
    provincia: Province.UD,
  },
  {
    comune: 'Faedis',
    provincia: Province.UD,
  },
  {
    comune: 'Fagagna',
    provincia: Province.UD,
  },
  {
    comune: 'Flaibano',
    provincia: Province.UD,
  },
  {
    comune: 'Forni Avoltri',
    provincia: Province.UD,
  },
  {
    comune: 'Forni di Sopra',
    provincia: Province.UD,
  },
  {
    comune: 'Forni di Sotto',
    provincia: Province.UD,
  },
  {
    comune: 'Gemona del Friuli',
    provincia: Province.UD,
  },
  {
    comune: 'Gonars',
    provincia: Province.UD,
  },
  {
    comune: 'Grimacco',
    provincia: Province.UD,
  },
  {
    comune: 'Latisana',
    provincia: Province.UD,
  },
  {
    comune: 'Lauco',
    provincia: Province.UD,
  },
  {
    comune: 'Lestizza',
    provincia: Province.UD,
  },
  {
    comune: 'Lignano Sabbiadoro',
    provincia: Province.UD,
  },
  {
    comune: 'Lusevera',
    provincia: Province.UD,
  },
  {
    comune: 'Magnano in Riviera',
    provincia: Province.UD,
  },
  {
    comune: 'Majano',
    provincia: Province.UD,
  },
  {
    comune: 'Malborghetto Valbruna',
    provincia: Province.UD,
  },
  {
    comune: 'Manzano',
    provincia: Province.UD,
  },
  {
    comune: 'Marano Lagunare',
    provincia: Province.UD,
  },
  {
    comune: 'Martignacco',
    provincia: Province.UD,
  },
  {
    comune: 'Mereto di Tomba',
    provincia: Province.UD,
  },
  {
    comune: 'Moggio Udinese',
    provincia: Province.UD,
  },
  {
    comune: 'Moimacco',
    provincia: Province.UD,
  },
  {
    comune: 'Montenars',
    provincia: Province.UD,
  },
  {
    comune: 'Mortegliano',
    provincia: Province.UD,
  },
  {
    comune: 'Moruzzo',
    provincia: Province.UD,
  },
  {
    comune: 'Muzzana del Turgnano',
    provincia: Province.UD,
  },
  {
    comune: 'Nimis',
    provincia: Province.UD,
  },
  {
    comune: 'Osoppo',
    provincia: Province.UD,
  },
  {
    comune: 'Ovaro',
    provincia: Province.UD,
  },
  {
    comune: 'Pagnacco',
    provincia: Province.UD,
  },
  {
    comune: 'Palazzolo dello Stella',
    provincia: Province.UD,
  },
  {
    comune: 'Palmanova',
    provincia: Province.UD,
  },
  {
    comune: 'Paluzza',
    provincia: Province.UD,
  },
  {
    comune: 'Pasian di Prato',
    provincia: Province.UD,
  },
  {
    comune: 'Paularo',
    provincia: Province.UD,
  },
  {
    comune: 'Pavia di Udine',
    provincia: Province.UD,
  },
  {
    comune: 'Pocenia',
    provincia: Province.UD,
  },
  {
    comune: 'Pontebba',
    provincia: Province.UD,
  },
  {
    comune: 'Porpetto',
    provincia: Province.UD,
  },
  {
    comune: 'Povoletto',
    provincia: Province.UD,
  },
  {
    comune: 'Pozzuolo del Friuli',
    provincia: Province.UD,
  },
  {
    comune: 'Pradamano',
    provincia: Province.UD,
  },
  {
    comune: 'Prato Carnico',
    provincia: Province.UD,
  },
  {
    comune: 'Precenicco',
    provincia: Province.UD,
  },
  {
    comune: 'Premariacco',
    provincia: Province.UD,
  },
  {
    comune: 'Preone',
    provincia: Province.UD,
  },
  {
    comune: 'Prepotto',
    provincia: Province.UD,
  },
  {
    comune: 'Pulfero',
    provincia: Province.UD,
  },
  {
    comune: 'Ragogna',
    provincia: Province.UD,
  },
  {
    comune: 'Ravascletto',
    provincia: Province.UD,
  },
  {
    comune: 'Raveo',
    provincia: Province.UD,
  },
  {
    comune: 'Reana del Rojale',
    provincia: Province.UD,
  },
  {
    comune: 'Remanzacco',
    provincia: Province.UD,
  },
  {
    comune: 'Resia',
    provincia: Province.UD,
  },
  {
    comune: 'Resiutta',
    provincia: Province.UD,
  },
  {
    comune: 'Rigolato',
    provincia: Province.UD,
  },
  {
    comune: "Rive d'Arcano",
    provincia: Province.UD,
  },
  {
    comune: 'Ronchis',
    provincia: Province.UD,
  },
  {
    comune: 'Ruda',
    provincia: Province.UD,
  },
  {
    comune: 'San Daniele del Friuli',
    provincia: Province.UD,
  },
  {
    comune: 'San Giorgio di Nogaro',
    provincia: Province.UD,
  },
  {
    comune: 'San Giovanni al Natisone',
    provincia: Province.UD,
  },
  {
    comune: 'San Leonardo',
    provincia: Province.UD,
  },
  {
    comune: 'San Pietro al Natisone',
    provincia: Province.UD,
  },
  {
    comune: 'Santa Maria la Longa',
    provincia: Province.UD,
  },
  {
    comune: 'San Vito al Torre',
    provincia: Province.UD,
  },
  {
    comune: 'San Vito di Fagagna',
    provincia: Province.UD,
  },
  {
    comune: 'Sauris',
    provincia: Province.UD,
  },
  {
    comune: 'Savogna',
    provincia: Province.UD,
  },
  {
    comune: 'Sedegliano',
    provincia: Province.UD,
  },
  {
    comune: 'Socchieve',
    provincia: Province.UD,
  },
  {
    comune: 'Stregna',
    provincia: Province.UD,
  },
  {
    comune: 'Sutrio',
    provincia: Province.UD,
  },
  {
    comune: 'Taipana',
    provincia: Province.UD,
  },
  {
    comune: 'Talmassons',
    provincia: Province.UD,
  },
  {
    comune: 'Tarcento',
    provincia: Province.UD,
  },
  {
    comune: 'Tarvisio',
    provincia: Province.UD,
  },
  {
    comune: 'Tavagnacco',
    provincia: Province.UD,
  },
  {
    comune: "Terzo d'Aquileia",
    provincia: Province.UD,
  },
  {
    comune: 'Tolmezzo',
    provincia: Province.UD,
  },
  {
    comune: 'Torreano',
    provincia: Province.UD,
  },
  {
    comune: 'Torviscosa',
    provincia: Province.UD,
  },
  {
    comune: 'Trasaghis',
    provincia: Province.UD,
  },
  {
    comune: 'Treppo Grande',
    provincia: Province.UD,
  },
  {
    comune: 'Tricesimo',
    provincia: Province.UD,
  },
  {
    comune: 'Trivignano Udinese',
    provincia: Province.UD,
  },
  {
    comune: 'Udine',
    provincia: Province.UD,
  },
  {
    comune: 'Varmo',
    provincia: Province.UD,
  },
  {
    comune: 'Venzone',
    provincia: Province.UD,
  },
  {
    comune: 'Verzegnis',
    provincia: Province.UD,
  },
  {
    comune: 'Villa Santina',
    provincia: Province.UD,
  },
  {
    comune: 'Visco',
    provincia: Province.UD,
  },
  {
    comune: 'Zuglio',
    provincia: Province.UD,
  },
  {
    comune: 'Forgaria nel Friuli',
    provincia: Province.UD,
  },
  {
    comune: 'Campolongo Tapogliano',
    provincia: Province.UD,
  },
  {
    comune: 'Rivignano Teor',
    provincia: Province.UD,
  },
  {
    comune: 'Sappada',
    provincia: Province.UD,
  },
  {
    comune: 'Fiumicello Villa Vicentina',
    provincia: Province.UD,
  },
  {
    comune: 'Treppo Ligosullo',
    provincia: Province.UD,
  },
  {
    comune: 'Capriva del Friuli',
    provincia: Province.GO,
  },
  {
    comune: 'Cormons',
    provincia: Province.GO,
  },
  {
    comune: 'Doberdò del Lago',
    provincia: Province.GO,
  },
  {
    comune: 'Dolegna del Collio',
    provincia: Province.GO,
  },
  {
    comune: "Farra d'Isonzo",
    provincia: Province.GO,
  },
  {
    comune: 'Fogliano Redipuglia',
    provincia: Province.GO,
  },
  {
    comune: 'Gorizia',
    provincia: Province.GO,
  },
  {
    comune: "Gradisca d'Isonzo",
    provincia: Province.GO,
  },
  {
    comune: 'Grado',
    provincia: Province.GO,
  },
  {
    comune: 'Mariano del Friuli',
    provincia: Province.GO,
  },
  {
    comune: 'Medea',
    provincia: Province.GO,
  },
  {
    comune: 'Monfalcone',
    provincia: Province.GO,
  },
  {
    comune: 'Moraro',
    provincia: Province.GO,
  },
  {
    comune: 'Mossa',
    provincia: Province.GO,
  },
  {
    comune: "Romans d'Isonzo",
    provincia: Province.GO,
  },
  {
    comune: 'Ronchi dei Legionari',
    provincia: Province.GO,
  },
  {
    comune: 'Sagrado',
    provincia: Province.GO,
  },
  {
    comune: "San Canzian d'Isonzo",
    provincia: Province.GO,
  },
  {
    comune: 'San Floriano del Collio',
    provincia: Province.GO,
  },
  {
    comune: 'San Lorenzo Isontino',
    provincia: Province.GO,
  },
  {
    comune: "San Pier d'Isonzo",
    provincia: Province.GO,
  },
  {
    comune: "Savogna d'Isonzo",
    provincia: Province.GO,
  },
  {
    comune: 'Staranzano',
    provincia: Province.GO,
  },
  {
    comune: 'Turriaco',
    provincia: Province.GO,
  },
  {
    comune: 'Villesse',
    provincia: Province.GO,
  },
  {
    comune: 'Duino Aurisina',
    provincia: Province.TS,
  },
  {
    comune: 'Monrupino',
    provincia: Province.TS,
  },
  {
    comune: 'Muggia',
    provincia: Province.TS,
  },
  {
    comune: 'San Dorligo della Valle',
    provincia: Province.TS,
  },
  {
    comune: 'Sgonico',
    provincia: Province.TS,
  },
  {
    comune: 'Trieste',
    provincia: Province.TS,
  },
  {
    comune: 'Andreis',
    provincia: Province.PN,
  },
  {
    comune: 'Arba',
    provincia: Province.PN,
  },
  {
    comune: 'Aviano',
    provincia: Province.PN,
  },
  {
    comune: 'Azzano Decimo',
    provincia: Province.PN,
  },
  {
    comune: 'Barcis',
    provincia: Province.PN,
  },
  {
    comune: 'Brugnera',
    provincia: Province.PN,
  },
  {
    comune: 'Budoia',
    provincia: Province.PN,
  },
  {
    comune: 'Caneva',
    provincia: Province.PN,
  },
  {
    comune: 'Casarsa della Delizia',
    provincia: Province.PN,
  },
  {
    comune: 'Castelnovo del Friuli',
    provincia: Province.PN,
  },
  {
    comune: 'Cavasso Nuovo',
    provincia: Province.PN,
  },
  {
    comune: 'Chions',
    provincia: Province.PN,
  },
  {
    comune: 'Cimolais',
    provincia: Province.PN,
  },
  {
    comune: 'Claut',
    provincia: Province.PN,
  },
  {
    comune: 'Clauzetto',
    provincia: Province.PN,
  },
  {
    comune: 'Cordenons',
    provincia: Province.PN,
  },
  {
    comune: 'Cordovado',
    provincia: Province.PN,
  },
  {
    comune: 'Erto e Casso',
    provincia: Province.PN,
  },
  {
    comune: 'Fanna',
    provincia: Province.PN,
  },
  {
    comune: 'Fiume Veneto',
    provincia: Province.PN,
  },
  {
    comune: 'Fontanafredda',
    provincia: Province.PN,
  },
  {
    comune: 'Frisanco',
    provincia: Province.PN,
  },
  {
    comune: 'Maniago',
    provincia: Province.PN,
  },
  {
    comune: 'Meduno',
    provincia: Province.PN,
  },
  {
    comune: 'Montereale Valcellina',
    provincia: Province.PN,
  },
  {
    comune: 'Morsano al Tagliamento',
    provincia: Province.PN,
  },
  {
    comune: 'Pasiano di Pordenone',
    provincia: Province.PN,
  },
  {
    comune: 'Pinzano al Tagliamento',
    provincia: Province.PN,
  },
  {
    comune: 'Polcenigo',
    provincia: Province.PN,
  },
  {
    comune: 'Porcia',
    provincia: Province.PN,
  },
  {
    comune: 'Pordenone',
    provincia: Province.PN,
  },
  {
    comune: 'Prata di Pordenone',
    provincia: Province.PN,
  },
  {
    comune: 'Pravisdomini',
    provincia: Province.PN,
  },
  {
    comune: 'Roveredo in Piano',
    provincia: Province.PN,
  },
  {
    comune: 'Sacile',
    provincia: Province.PN,
  },
  {
    comune: 'San Giorgio della Richinvelda',
    provincia: Province.PN,
  },
  {
    comune: 'San Martino al Tagliamento',
    provincia: Province.PN,
  },
  {
    comune: 'San Quirino',
    provincia: Province.PN,
  },
  {
    comune: 'San Vito al Tagliamento',
    provincia: Province.PN,
  },
  {
    comune: 'Sequals',
    provincia: Province.PN,
  },
  {
    comune: 'Sesto al Reghena',
    provincia: Province.PN,
  },
  {
    comune: 'Spilimbergo',
    provincia: Province.PN,
  },
  {
    comune: 'Tramonti di Sopra',
    provincia: Province.PN,
  },
  {
    comune: 'Tramonti di Sotto',
    provincia: Province.PN,
  },
  {
    comune: 'Travesio',
    provincia: Province.PN,
  },
  {
    comune: "Vito d'Asio",
    provincia: Province.PN,
  },
  {
    comune: 'Vivaro',
    provincia: Province.PN,
  },
  {
    comune: 'Zoppola',
    provincia: Province.PN,
  },
  {
    comune: 'Vajont',
    provincia: Province.PN,
  },
  {
    comune: 'Valvasone Arzene',
    provincia: Province.PN,
  },
  {
    comune: 'Airole',
    provincia: Province.IM,
  },
  {
    comune: 'Apricale',
    provincia: Province.IM,
  },
  {
    comune: "Aquila d'Arroscia",
    provincia: Province.IM,
  },
  {
    comune: 'Armo',
    provincia: Province.IM,
  },
  {
    comune: 'Aurigo',
    provincia: Province.IM,
  },
  {
    comune: 'Badalucco',
    provincia: Province.IM,
  },
  {
    comune: 'Bajardo',
    provincia: Province.IM,
  },
  {
    comune: 'Bordighera',
    provincia: Province.IM,
  },
  {
    comune: "Borghetto d'Arroscia",
    provincia: Province.IM,
  },
  {
    comune: 'Borgomaro',
    provincia: Province.IM,
  },
  {
    comune: 'Camporosso',
    provincia: Province.IM,
  },
  {
    comune: 'Caravonica',
    provincia: Province.IM,
  },
  {
    comune: 'Castellaro',
    provincia: Province.IM,
  },
  {
    comune: 'Castel Vittorio',
    provincia: Province.IM,
  },
  {
    comune: 'Ceriana',
    provincia: Province.IM,
  },
  {
    comune: 'Cervo',
    provincia: Province.IM,
  },
  {
    comune: 'Cesio',
    provincia: Province.IM,
  },
  {
    comune: 'Chiusanico',
    provincia: Province.IM,
  },
  {
    comune: 'Chiusavecchia',
    provincia: Province.IM,
  },
  {
    comune: 'Cipressa',
    provincia: Province.IM,
  },
  {
    comune: 'Civezza',
    provincia: Province.IM,
  },
  {
    comune: "Cosio d'Arroscia",
    provincia: Province.IM,
  },
  {
    comune: 'Costarainera',
    provincia: Province.IM,
  },
  {
    comune: 'Diano Arentino',
    provincia: Province.IM,
  },
  {
    comune: 'Diano Castello',
    provincia: Province.IM,
  },
  {
    comune: 'Diano Marina',
    provincia: Province.IM,
  },
  {
    comune: 'Diano San Pietro',
    provincia: Province.IM,
  },
  {
    comune: 'Dolceacqua',
    provincia: Province.IM,
  },
  {
    comune: 'Dolcedo',
    provincia: Province.IM,
  },
  {
    comune: 'Imperia',
    provincia: Province.IM,
  },
  {
    comune: 'Isolabona',
    provincia: Province.IM,
  },
  {
    comune: 'Lucinasco',
    provincia: Province.IM,
  },
  {
    comune: 'Mendatica',
    provincia: Province.IM,
  },
  {
    comune: 'Molini di Triora',
    provincia: Province.IM,
  },
  {
    comune: 'Montegrosso Pian Latte',
    provincia: Province.IM,
  },
  {
    comune: 'Olivetta San Michele',
    provincia: Province.IM,
  },
  {
    comune: 'Ospedaletti',
    provincia: Province.IM,
  },
  {
    comune: 'Perinaldo',
    provincia: Province.IM,
  },
  {
    comune: 'Pietrabruna',
    provincia: Province.IM,
  },
  {
    comune: 'Pieve di Teco',
    provincia: Province.IM,
  },
  {
    comune: 'Pigna',
    provincia: Province.IM,
  },
  {
    comune: 'Pompeiana',
    provincia: Province.IM,
  },
  {
    comune: 'Pontedassio',
    provincia: Province.IM,
  },
  {
    comune: 'Pornassio',
    provincia: Province.IM,
  },
  {
    comune: 'Prelà',
    provincia: Province.IM,
  },
  {
    comune: 'Ranzo',
    provincia: Province.IM,
  },
  {
    comune: 'Rezzo',
    provincia: Province.IM,
  },
  {
    comune: 'Riva Ligure',
    provincia: Province.IM,
  },
  {
    comune: 'Rocchetta Nervina',
    provincia: Province.IM,
  },
  {
    comune: 'San Bartolomeo al Mare',
    provincia: Province.IM,
  },
  {
    comune: 'San Biagio della Cima',
    provincia: Province.IM,
  },
  {
    comune: 'San Lorenzo al Mare',
    provincia: Province.IM,
  },
  {
    comune: 'Sanremo',
    provincia: Province.IM,
  },
  {
    comune: 'Santo Stefano al Mare',
    provincia: Province.IM,
  },
  {
    comune: 'Seborga',
    provincia: Province.IM,
  },
  {
    comune: 'Soldano',
    provincia: Province.IM,
  },
  {
    comune: 'Taggia',
    provincia: Province.IM,
  },
  {
    comune: 'Terzorio',
    provincia: Province.IM,
  },
  {
    comune: 'Triora',
    provincia: Province.IM,
  },
  {
    comune: 'Vallebona',
    provincia: Province.IM,
  },
  {
    comune: 'Vallecrosia',
    provincia: Province.IM,
  },
  {
    comune: 'Vasia',
    provincia: Province.IM,
  },
  {
    comune: 'Ventimiglia',
    provincia: Province.IM,
  },
  {
    comune: 'Vessalico',
    provincia: Province.IM,
  },
  {
    comune: 'Villa Faraldi',
    provincia: Province.IM,
  },
  {
    comune: 'Montalto Carpasio',
    provincia: Province.IM,
  },
  {
    comune: 'Alassio',
    provincia: Province.SV,
  },
  {
    comune: 'Albenga',
    provincia: Province.SV,
  },
  {
    comune: 'Albissola Marina',
    provincia: Province.SV,
  },
  {
    comune: 'Albisola Superiore',
    provincia: Province.SV,
  },
  {
    comune: 'Altare',
    provincia: Province.SV,
  },
  {
    comune: 'Andora',
    provincia: Province.SV,
  },
  {
    comune: 'Arnasco',
    provincia: Province.SV,
  },
  {
    comune: 'Balestrino',
    provincia: Province.SV,
  },
  {
    comune: 'Bardineto',
    provincia: Province.SV,
  },
  {
    comune: 'Bergeggi',
    provincia: Province.SV,
  },
  {
    comune: 'Boissano',
    provincia: Province.SV,
  },
  {
    comune: 'Borghetto Santo Spirito',
    provincia: Province.SV,
  },
  {
    comune: 'Borgio Verezzi',
    provincia: Province.SV,
  },
  {
    comune: 'Bormida',
    provincia: Province.SV,
  },
  {
    comune: 'Cairo Montenotte',
    provincia: Province.SV,
  },
  {
    comune: 'Calice Ligure',
    provincia: Province.SV,
  },
  {
    comune: 'Calizzano',
    provincia: Province.SV,
  },
  {
    comune: 'Carcare',
    provincia: Province.SV,
  },
  {
    comune: 'Casanova Lerrone',
    provincia: Province.SV,
  },
  {
    comune: 'Castelbianco',
    provincia: Province.SV,
  },
  {
    comune: 'Castelvecchio di Rocca Barbena',
    provincia: Province.SV,
  },
  {
    comune: 'Celle Ligure',
    provincia: Province.SV,
  },
  {
    comune: 'Cengio',
    provincia: Province.SV,
  },
  {
    comune: 'Ceriale',
    provincia: Province.SV,
  },
  {
    comune: 'Cisano sul Neva',
    provincia: Province.SV,
  },
  {
    comune: 'Cosseria',
    provincia: Province.SV,
  },
  {
    comune: 'Dego',
    provincia: Province.SV,
  },
  {
    comune: 'Erli',
    provincia: Province.SV,
  },
  {
    comune: 'Finale Ligure',
    provincia: Province.SV,
  },
  {
    comune: 'Garlenda',
    provincia: Province.SV,
  },
  {
    comune: 'Giustenice',
    provincia: Province.SV,
  },
  {
    comune: 'Giusvalla',
    provincia: Province.SV,
  },
  {
    comune: 'Laigueglia',
    provincia: Province.SV,
  },
  {
    comune: 'Loano',
    provincia: Province.SV,
  },
  {
    comune: 'Magliolo',
    provincia: Province.SV,
  },
  {
    comune: 'Mallare',
    provincia: Province.SV,
  },
  {
    comune: 'Massimino',
    provincia: Province.SV,
  },
  {
    comune: 'Millesimo',
    provincia: Province.SV,
  },
  {
    comune: 'Mioglia',
    provincia: Province.SV,
  },
  {
    comune: 'Murialdo',
    provincia: Province.SV,
  },
  {
    comune: 'Nasino',
    provincia: Province.SV,
  },
  {
    comune: 'Noli',
    provincia: Province.SV,
  },
  {
    comune: 'Onzo',
    provincia: Province.SV,
  },
  {
    comune: 'Orco Feglino',
    provincia: Province.SV,
  },
  {
    comune: 'Ortovero',
    provincia: Province.SV,
  },
  {
    comune: 'Osiglia',
    provincia: Province.SV,
  },
  {
    comune: 'Pallare',
    provincia: Province.SV,
  },
  {
    comune: 'Piana Crixia',
    provincia: Province.SV,
  },
  {
    comune: 'Pietra Ligure',
    provincia: Province.SV,
  },
  {
    comune: 'Plodio',
    provincia: Province.SV,
  },
  {
    comune: 'Pontinvrea',
    provincia: Province.SV,
  },
  {
    comune: 'Quiliano',
    provincia: Province.SV,
  },
  {
    comune: 'Rialto',
    provincia: Province.SV,
  },
  {
    comune: 'Roccavignale',
    provincia: Province.SV,
  },
  {
    comune: 'Sassello',
    provincia: Province.SV,
  },
  {
    comune: 'Savona',
    provincia: Province.SV,
  },
  {
    comune: 'Spotorno',
    provincia: Province.SV,
  },
  {
    comune: 'Stella',
    provincia: Province.SV,
  },
  {
    comune: 'Stellanello',
    provincia: Province.SV,
  },
  {
    comune: 'Testico',
    provincia: Province.SV,
  },
  {
    comune: 'Toirano',
    provincia: Province.SV,
  },
  {
    comune: 'Tovo San Giacomo',
    provincia: Province.SV,
  },
  {
    comune: 'Urbe',
    provincia: Province.SV,
  },
  {
    comune: 'Vado Ligure',
    provincia: Province.SV,
  },
  {
    comune: 'Varazze',
    provincia: Province.SV,
  },
  {
    comune: 'Vendone',
    provincia: Province.SV,
  },
  {
    comune: 'Vezzi Portio',
    provincia: Province.SV,
  },
  {
    comune: "Villanova d'Albenga",
    provincia: Province.SV,
  },
  {
    comune: 'Zuccarello',
    provincia: Province.SV,
  },
  {
    comune: 'Arenzano',
    provincia: Province.GE,
  },
  {
    comune: 'Avegno',
    provincia: Province.GE,
  },
  {
    comune: 'Bargagli',
    provincia: Province.GE,
  },
  {
    comune: 'Bogliasco',
    provincia: Province.GE,
  },
  {
    comune: 'Borzonasca',
    provincia: Province.GE,
  },
  {
    comune: 'Busalla',
    provincia: Province.GE,
  },
  {
    comune: 'Camogli',
    provincia: Province.GE,
  },
  {
    comune: 'Campo Ligure',
    provincia: Province.GE,
  },
  {
    comune: 'Campomorone',
    provincia: Province.GE,
  },
  {
    comune: 'Carasco',
    provincia: Province.GE,
  },
  {
    comune: 'Casarza Ligure',
    provincia: Province.GE,
  },
  {
    comune: 'Casella',
    provincia: Province.GE,
  },
  {
    comune: 'Castiglione Chiavarese',
    provincia: Province.GE,
  },
  {
    comune: 'Ceranesi',
    provincia: Province.GE,
  },
  {
    comune: 'Chiavari',
    provincia: Province.GE,
  },
  {
    comune: 'Cicagna',
    provincia: Province.GE,
  },
  {
    comune: 'Cogoleto',
    provincia: Province.GE,
  },
  {
    comune: 'Cogorno',
    provincia: Province.GE,
  },
  {
    comune: 'Coreglia Ligure',
    provincia: Province.GE,
  },
  {
    comune: 'Crocefieschi',
    provincia: Province.GE,
  },
  {
    comune: 'Davagna',
    provincia: Province.GE,
  },
  {
    comune: 'Fascia',
    provincia: Province.GE,
  },
  {
    comune: 'Favale di Malvaro',
    provincia: Province.GE,
  },
  {
    comune: 'Fontanigorda',
    provincia: Province.GE,
  },
  {
    comune: 'Genova',
    provincia: Province.GE,
  },
  {
    comune: 'Gorreto',
    provincia: Province.GE,
  },
  {
    comune: 'Isola del Cantone',
    provincia: Province.GE,
  },
  {
    comune: 'Lavagna',
    provincia: Province.GE,
  },
  {
    comune: 'Leivi',
    provincia: Province.GE,
  },
  {
    comune: 'Lorsica',
    provincia: Province.GE,
  },
  {
    comune: 'Lumarzo',
    provincia: Province.GE,
  },
  {
    comune: 'Masone',
    provincia: Province.GE,
  },
  {
    comune: 'Mele',
    provincia: Province.GE,
  },
  {
    comune: 'Mezzanego',
    provincia: Province.GE,
  },
  {
    comune: 'Mignanego',
    provincia: Province.GE,
  },
  {
    comune: 'Moconesi',
    provincia: Province.GE,
  },
  {
    comune: 'Moneglia',
    provincia: Province.GE,
  },
  {
    comune: 'Montebruno',
    provincia: Province.GE,
  },
  {
    comune: 'Montoggio',
    provincia: Province.GE,
  },
  {
    comune: 'Ne',
    provincia: Province.GE,
  },
  {
    comune: 'Neirone',
    provincia: Province.GE,
  },
  {
    comune: 'Orero',
    provincia: Province.GE,
  },
  {
    comune: 'Pieve Ligure',
    provincia: Province.GE,
  },
  {
    comune: 'Portofino',
    provincia: Province.GE,
  },
  {
    comune: 'Propata',
    provincia: Province.GE,
  },
  {
    comune: 'Rapallo',
    provincia: Province.GE,
  },
  {
    comune: 'Recco',
    provincia: Province.GE,
  },
  {
    comune: 'Rezzoaglio',
    provincia: Province.GE,
  },
  {
    comune: 'Ronco Scrivia',
    provincia: Province.GE,
  },
  {
    comune: 'Rondanina',
    provincia: Province.GE,
  },
  {
    comune: 'Rossiglione',
    provincia: Province.GE,
  },
  {
    comune: 'Rovegno',
    provincia: Province.GE,
  },
  {
    comune: 'San Colombano Certenoli',
    provincia: Province.GE,
  },
  {
    comune: 'Santa Margherita Ligure',
    provincia: Province.GE,
  },
  {
    comune: "Sant'Olcese",
    provincia: Province.GE,
  },
  {
    comune: "Santo Stefano d'Aveto",
    provincia: Province.GE,
  },
  {
    comune: 'Savignone',
    provincia: Province.GE,
  },
  {
    comune: 'Serra Riccò',
    provincia: Province.GE,
  },
  {
    comune: 'Sestri Levante',
    provincia: Province.GE,
  },
  {
    comune: 'Sori',
    provincia: Province.GE,
  },
  {
    comune: 'Tiglieto',
    provincia: Province.GE,
  },
  {
    comune: 'Torriglia',
    provincia: Province.GE,
  },
  {
    comune: 'Tribogna',
    provincia: Province.GE,
  },
  {
    comune: 'Uscio',
    provincia: Province.GE,
  },
  {
    comune: 'Valbrevenna',
    provincia: Province.GE,
  },
  {
    comune: 'Vobbia',
    provincia: Province.GE,
  },
  {
    comune: 'Zoagli',
    provincia: Province.GE,
  },
  {
    comune: 'Ameglia',
    provincia: Province.SP,
  },
  {
    comune: 'Arcola',
    provincia: Province.SP,
  },
  {
    comune: 'Beverino',
    provincia: Province.SP,
  },
  {
    comune: 'Bolano',
    provincia: Province.SP,
  },
  {
    comune: 'Bonassola',
    provincia: Province.SP,
  },
  {
    comune: 'Borghetto di Vara',
    provincia: Province.SP,
  },
  {
    comune: 'Brugnato',
    provincia: Province.SP,
  },
  {
    comune: 'Calice al Cornoviglio',
    provincia: Province.SP,
  },
  {
    comune: 'Carro',
    provincia: Province.SP,
  },
  {
    comune: 'Carrodano',
    provincia: Province.SP,
  },
  {
    comune: 'Castelnuovo Magra',
    provincia: Province.SP,
  },
  {
    comune: 'Deiva Marina',
    provincia: Province.SP,
  },
  {
    comune: 'Follo',
    provincia: Province.SP,
  },
  {
    comune: 'Framura',
    provincia: Province.SP,
  },
  {
    comune: 'La Spezia',
    provincia: Province.SP,
  },
  {
    comune: 'Lerici',
    provincia: Province.SP,
  },
  {
    comune: 'Levanto',
    provincia: Province.SP,
  },
  {
    comune: 'Maissana',
    provincia: Province.SP,
  },
  {
    comune: 'Monterosso al Mare',
    provincia: Province.SP,
  },
  {
    comune: 'Luni',
    provincia: Province.SP,
  },
  {
    comune: 'Pignone',
    provincia: Province.SP,
  },
  {
    comune: 'Portovenere',
    provincia: Province.SP,
  },
  {
    comune: 'Riccò del Golfo di Spezia',
    provincia: Province.SP,
  },
  {
    comune: 'Riomaggiore',
    provincia: Province.SP,
  },
  {
    comune: 'Rocchetta di Vara',
    provincia: Province.SP,
  },
  {
    comune: 'Santo Stefano di Magra',
    provincia: Province.SP,
  },
  {
    comune: 'Sarzana',
    provincia: Province.SP,
  },
  {
    comune: 'Sesta Godano',
    provincia: Province.SP,
  },
  {
    comune: 'Varese Ligure',
    provincia: Province.SP,
  },
  {
    comune: 'Vernazza',
    provincia: Province.SP,
  },
  {
    comune: 'Vezzano Ligure',
    provincia: Province.SP,
  },
  {
    comune: 'Zignago',
    provincia: Province.SP,
  },
  {
    comune: 'Agazzano',
    provincia: Province.PC,
  },
  {
    comune: 'Alseno',
    provincia: Province.PC,
  },
  {
    comune: 'Besenzone',
    provincia: Province.PC,
  },
  {
    comune: 'Bettola',
    provincia: Province.PC,
  },
  {
    comune: 'Bobbio',
    provincia: Province.PC,
  },
  {
    comune: 'Borgonovo Val Tidone',
    provincia: Province.PC,
  },
  {
    comune: 'Cadeo',
    provincia: Province.PC,
  },
  {
    comune: 'Calendasco',
    provincia: Province.PC,
  },
  {
    comune: 'Caorso',
    provincia: Province.PC,
  },
  {
    comune: 'Carpaneto Piacentino',
    provincia: Province.PC,
  },
  {
    comune: "Castell'Arquato",
    provincia: Province.PC,
  },
  {
    comune: 'Castel San Giovanni',
    provincia: Province.PC,
  },
  {
    comune: 'Castelvetro Piacentino',
    provincia: Province.PC,
  },
  {
    comune: 'Cerignale',
    provincia: Province.PC,
  },
  {
    comune: 'Coli',
    provincia: Province.PC,
  },
  {
    comune: 'Corte Brugnatella',
    provincia: Province.PC,
  },
  {
    comune: 'Cortemaggiore',
    provincia: Province.PC,
  },
  {
    comune: 'Farini',
    provincia: Province.PC,
  },
  {
    comune: 'Ferriere',
    provincia: Province.PC,
  },
  {
    comune: "Fiorenzuola d'Arda",
    provincia: Province.PC,
  },
  {
    comune: 'Gazzola',
    provincia: Province.PC,
  },
  {
    comune: 'Gossolengo',
    provincia: Province.PC,
  },
  {
    comune: 'Gragnano Trebbiense',
    provincia: Province.PC,
  },
  {
    comune: 'Gropparello',
    provincia: Province.PC,
  },
  {
    comune: "Lugagnano Val d'Arda",
    provincia: Province.PC,
  },
  {
    comune: "Monticelli d'Ongina",
    provincia: Province.PC,
  },
  {
    comune: 'Morfasso',
    provincia: Province.PC,
  },
  {
    comune: 'Ottone',
    provincia: Province.PC,
  },
  {
    comune: 'Piacenza',
    provincia: Province.PC,
  },
  {
    comune: 'Pianello Val Tidone',
    provincia: Province.PC,
  },
  {
    comune: 'Piozzano',
    provincia: Province.PC,
  },
  {
    comune: 'Podenzano',
    provincia: Province.PC,
  },
  {
    comune: "Ponte dell'Olio",
    provincia: Province.PC,
  },
  {
    comune: 'Pontenure',
    provincia: Province.PC,
  },
  {
    comune: 'Rivergaro',
    provincia: Province.PC,
  },
  {
    comune: 'Rottofreno',
    provincia: Province.PC,
  },
  {
    comune: 'San Giorgio Piacentino',
    provincia: Province.PC,
  },
  {
    comune: 'San Pietro in Cerro',
    provincia: Province.PC,
  },
  {
    comune: 'Sarmato',
    provincia: Province.PC,
  },
  {
    comune: 'Travo',
    provincia: Province.PC,
  },
  {
    comune: 'Vernasca',
    provincia: Province.PC,
  },
  {
    comune: 'Vigolzone',
    provincia: Province.PC,
  },
  {
    comune: "Villanova sull'Arda",
    provincia: Province.PC,
  },
  {
    comune: 'Zerba',
    provincia: Province.PC,
  },
  {
    comune: 'Ziano Piacentino',
    provincia: Province.PC,
  },
  {
    comune: 'Alta Val Tidone',
    provincia: Province.PC,
  },
  {
    comune: 'Albareto',
    provincia: Province.PR,
  },
  {
    comune: 'Bardi',
    provincia: Province.PR,
  },
  {
    comune: 'Bedonia',
    provincia: Province.PR,
  },
  {
    comune: 'Berceto',
    provincia: Province.PR,
  },
  {
    comune: 'Bore',
    provincia: Province.PR,
  },
  {
    comune: 'Borgo Val di Taro',
    provincia: Province.PR,
  },
  {
    comune: 'Busseto',
    provincia: Province.PR,
  },
  {
    comune: 'Calestano',
    provincia: Province.PR,
  },
  {
    comune: 'Collecchio',
    provincia: Province.PR,
  },
  {
    comune: 'Colorno',
    provincia: Province.PR,
  },
  {
    comune: 'Compiano',
    provincia: Province.PR,
  },
  {
    comune: 'Corniglio',
    provincia: Province.PR,
  },
  {
    comune: 'Felino',
    provincia: Province.PR,
  },
  {
    comune: 'Fidenza',
    provincia: Province.PR,
  },
  {
    comune: 'Fontanellato',
    provincia: Province.PR,
  },
  {
    comune: 'Fontevivo',
    provincia: Province.PR,
  },
  {
    comune: 'Fornovo di Taro',
    provincia: Province.PR,
  },
  {
    comune: 'Langhirano',
    provincia: Province.PR,
  },
  {
    comune: "Lesignano de' Bagni",
    provincia: Province.PR,
  },
  {
    comune: 'Medesano',
    provincia: Province.PR,
  },
  {
    comune: 'Monchio delle Corti',
    provincia: Province.PR,
  },
  {
    comune: 'Montechiarugolo',
    provincia: Province.PR,
  },
  {
    comune: 'Neviano degli Arduini',
    provincia: Province.PR,
  },
  {
    comune: 'Noceto',
    provincia: Province.PR,
  },
  {
    comune: 'Palanzano',
    provincia: Province.PR,
  },
  {
    comune: 'Parma',
    provincia: Province.PR,
  },
  {
    comune: 'Pellegrino Parmense',
    provincia: Province.PR,
  },
  {
    comune: 'Roccabianca',
    provincia: Province.PR,
  },
  {
    comune: 'Sala Baganza',
    provincia: Province.PR,
  },
  {
    comune: 'Salsomaggiore Terme',
    provincia: Province.PR,
  },
  {
    comune: 'San Secondo Parmense',
    provincia: Province.PR,
  },
  {
    comune: 'Solignano',
    provincia: Province.PR,
  },
  {
    comune: 'Soragna',
    provincia: Province.PR,
  },
  {
    comune: 'Terenzo',
    provincia: Province.PR,
  },
  {
    comune: 'Tizzano Val Parma',
    provincia: Province.PR,
  },
  {
    comune: 'Tornolo',
    provincia: Province.PR,
  },
  {
    comune: 'Torrile',
    provincia: Province.PR,
  },
  {
    comune: 'Traversetolo',
    provincia: Province.PR,
  },
  {
    comune: 'Valmozzola',
    provincia: Province.PR,
  },
  {
    comune: "Varano de' Melegari",
    provincia: Province.PR,
  },
  {
    comune: 'Varsi',
    provincia: Province.PR,
  },
  {
    comune: 'Sissa Trecasali',
    provincia: Province.PR,
  },
  {
    comune: 'Polesine Zibello',
    provincia: Province.PR,
  },
  {
    comune: 'Sorbolo Mezzani',
    provincia: Province.PR,
  },
  {
    comune: 'Albinea',
    provincia: Province.RE,
  },
  {
    comune: 'Bagnolo in Piano',
    provincia: Province.RE,
  },
  {
    comune: 'Baiso',
    provincia: Province.RE,
  },
  {
    comune: 'Bibbiano',
    provincia: Province.RE,
  },
  {
    comune: 'Boretto',
    provincia: Province.RE,
  },
  {
    comune: 'Brescello',
    provincia: Province.RE,
  },
  {
    comune: 'Cadelbosco di Sopra',
    provincia: Province.RE,
  },
  {
    comune: 'Campagnola Emilia',
    provincia: Province.RE,
  },
  {
    comune: 'Campegine',
    provincia: Province.RE,
  },
  {
    comune: 'Carpineti',
    provincia: Province.RE,
  },
  {
    comune: 'Casalgrande',
    provincia: Province.RE,
  },
  {
    comune: 'Casina',
    provincia: Province.RE,
  },
  {
    comune: 'Castellarano',
    provincia: Province.RE,
  },
  {
    comune: 'Castelnovo di Sotto',
    provincia: Province.RE,
  },
  {
    comune: "Castelnovo ne' Monti",
    provincia: Province.RE,
  },
  {
    comune: 'Cavriago',
    provincia: Province.RE,
  },
  {
    comune: 'Canossa',
    provincia: Province.RE,
  },
  {
    comune: 'Correggio',
    provincia: Province.RE,
  },
  {
    comune: 'Fabbrico',
    provincia: Province.RE,
  },
  {
    comune: 'Gattatico',
    provincia: Province.RE,
  },
  {
    comune: 'Gualtieri',
    provincia: Province.RE,
  },
  {
    comune: 'Guastalla',
    provincia: Province.RE,
  },
  {
    comune: 'Luzzara',
    provincia: Province.RE,
  },
  {
    comune: 'Montecchio Emilia',
    provincia: Province.RE,
  },
  {
    comune: 'Novellara',
    provincia: Province.RE,
  },
  {
    comune: 'Poviglio',
    provincia: Province.RE,
  },
  {
    comune: 'Quattro Castella',
    provincia: Province.RE,
  },
  {
    comune: 'Reggiolo',
    provincia: Province.RE,
  },
  {
    comune: "Reggio nell'Emilia",
    provincia: Province.RE,
  },
  {
    comune: 'Rio Saliceto',
    provincia: Province.RE,
  },
  {
    comune: 'Rolo',
    provincia: Province.RE,
  },
  {
    comune: 'Rubiera',
    provincia: Province.RE,
  },
  {
    comune: 'San Martino in Rio',
    provincia: Province.RE,
  },
  {
    comune: "San Polo d'Enza",
    provincia: Province.RE,
  },
  {
    comune: "Sant'Ilario d'Enza",
    provincia: Province.RE,
  },
  {
    comune: 'Scandiano',
    provincia: Province.RE,
  },
  {
    comune: 'Toano',
    provincia: Province.RE,
  },
  {
    comune: 'Vetto',
    provincia: Province.RE,
  },
  {
    comune: 'Vezzano sul Crostolo',
    provincia: Province.RE,
  },
  {
    comune: 'Viano',
    provincia: Province.RE,
  },
  {
    comune: 'Villa Minozzo',
    provincia: Province.RE,
  },
  {
    comune: 'Ventasso',
    provincia: Province.RE,
  },
  {
    comune: 'Bastiglia',
    provincia: Province.MO,
  },
  {
    comune: 'Bomporto',
    provincia: Province.MO,
  },
  {
    comune: 'Campogalliano',
    provincia: Province.MO,
  },
  {
    comune: 'Camposanto',
    provincia: Province.MO,
  },
  {
    comune: 'Carpi',
    provincia: Province.MO,
  },
  {
    comune: 'Castelfranco Emilia',
    provincia: Province.MO,
  },
  {
    comune: 'Castelnuovo Rangone',
    provincia: Province.MO,
  },
  {
    comune: 'Castelvetro di Modena',
    provincia: Province.MO,
  },
  {
    comune: 'Cavezzo',
    provincia: Province.MO,
  },
  {
    comune: 'Concordia sulla Secchia',
    provincia: Province.MO,
  },
  {
    comune: 'Fanano',
    provincia: Province.MO,
  },
  {
    comune: 'Finale Emilia',
    provincia: Province.MO,
  },
  {
    comune: 'Fiorano Modenese',
    provincia: Province.MO,
  },
  {
    comune: 'Fiumalbo',
    provincia: Province.MO,
  },
  {
    comune: 'Formigine',
    provincia: Province.MO,
  },
  {
    comune: 'Frassinoro',
    provincia: Province.MO,
  },
  {
    comune: 'Guiglia',
    provincia: Province.MO,
  },
  {
    comune: 'Lama Mocogno',
    provincia: Province.MO,
  },
  {
    comune: 'Maranello',
    provincia: Province.MO,
  },
  {
    comune: 'Marano sul Panaro',
    provincia: Province.MO,
  },
  {
    comune: 'Medolla',
    provincia: Province.MO,
  },
  {
    comune: 'Mirandola',
    provincia: Province.MO,
  },
  {
    comune: 'Modena',
    provincia: Province.MO,
  },
  {
    comune: 'Montecreto',
    provincia: Province.MO,
  },
  {
    comune: 'Montefiorino',
    provincia: Province.MO,
  },
  {
    comune: 'Montese',
    provincia: Province.MO,
  },
  {
    comune: 'Nonantola',
    provincia: Province.MO,
  },
  {
    comune: 'Novi di Modena',
    provincia: Province.MO,
  },
  {
    comune: 'Palagano',
    provincia: Province.MO,
  },
  {
    comune: 'Pavullo nel Frignano',
    provincia: Province.MO,
  },
  {
    comune: 'Pievepelago',
    provincia: Province.MO,
  },
  {
    comune: 'Polinago',
    provincia: Province.MO,
  },
  {
    comune: 'Prignano sulla Secchia',
    provincia: Province.MO,
  },
  {
    comune: 'Ravarino',
    provincia: Province.MO,
  },
  {
    comune: 'Riolunato',
    provincia: Province.MO,
  },
  {
    comune: 'San Cesario sul Panaro',
    provincia: Province.MO,
  },
  {
    comune: 'San Felice sul Panaro',
    provincia: Province.MO,
  },
  {
    comune: 'San Possidonio',
    provincia: Province.MO,
  },
  {
    comune: 'San Prospero',
    provincia: Province.MO,
  },
  {
    comune: 'Sassuolo',
    provincia: Province.MO,
  },
  {
    comune: 'Savignano sul Panaro',
    provincia: Province.MO,
  },
  {
    comune: 'Serramazzoni',
    provincia: Province.MO,
  },
  {
    comune: 'Sestola',
    provincia: Province.MO,
  },
  {
    comune: 'Soliera',
    provincia: Province.MO,
  },
  {
    comune: 'Spilamberto',
    provincia: Province.MO,
  },
  {
    comune: 'Vignola',
    provincia: Province.MO,
  },
  {
    comune: 'Zocca',
    provincia: Province.MO,
  },
  {
    comune: "Anzola dell'Emilia",
    provincia: Province.BO,
  },
  {
    comune: 'Argelato',
    provincia: Province.BO,
  },
  {
    comune: 'Baricella',
    provincia: Province.BO,
  },
  {
    comune: 'Bentivoglio',
    provincia: Province.BO,
  },
  {
    comune: 'Bologna',
    provincia: Province.BO,
  },
  {
    comune: 'Borgo Tossignano',
    provincia: Province.BO,
  },
  {
    comune: 'Budrio',
    provincia: Province.BO,
  },
  {
    comune: 'Calderara di Reno',
    provincia: Province.BO,
  },
  {
    comune: 'Camugnano',
    provincia: Province.BO,
  },
  {
    comune: 'Casalecchio di Reno',
    provincia: Province.BO,
  },
  {
    comune: 'Casalfiumanese',
    provincia: Province.BO,
  },
  {
    comune: "Castel d'Aiano",
    provincia: Province.BO,
  },
  {
    comune: 'Castel del Rio',
    provincia: Province.BO,
  },
  {
    comune: 'Castel di Casio',
    provincia: Province.BO,
  },
  {
    comune: 'Castel Guelfo di Bologna',
    provincia: Province.BO,
  },
  {
    comune: "Castello d'Argile",
    provincia: Province.BO,
  },
  {
    comune: 'Castel Maggiore',
    provincia: Province.BO,
  },
  {
    comune: 'Castel San Pietro Terme',
    provincia: Province.BO,
  },
  {
    comune: 'Castenaso',
    provincia: Province.BO,
  },
  {
    comune: 'Castiglione dei Pepoli',
    provincia: Province.BO,
  },
  {
    comune: 'Crevalcore',
    provincia: Province.BO,
  },
  {
    comune: 'Dozza',
    provincia: Province.BO,
  },
  {
    comune: 'Fontanelice',
    provincia: Province.BO,
  },
  {
    comune: 'Gaggio Montano',
    provincia: Province.BO,
  },
  {
    comune: 'Galliera',
    provincia: Province.BO,
  },
  {
    comune: "Granarolo dell'Emilia",
    provincia: Province.BO,
  },
  {
    comune: 'Grizzana Morandi',
    provincia: Province.BO,
  },
  {
    comune: 'Imola',
    provincia: Province.BO,
  },
  {
    comune: 'Lizzano in Belvedere',
    provincia: Province.BO,
  },
  {
    comune: 'Loiano',
    provincia: Province.BO,
  },
  {
    comune: 'Malalbergo',
    provincia: Province.BO,
  },
  {
    comune: 'Marzabotto',
    provincia: Province.BO,
  },
  {
    comune: 'Medicina',
    provincia: Province.BO,
  },
  {
    comune: 'Minerbio',
    provincia: Province.BO,
  },
  {
    comune: 'Molinella',
    provincia: Province.BO,
  },
  {
    comune: 'Monghidoro',
    provincia: Province.BO,
  },
  {
    comune: 'Monterenzio',
    provincia: Province.BO,
  },
  {
    comune: 'Monte San Pietro',
    provincia: Province.BO,
  },
  {
    comune: 'Monzuno',
    provincia: Province.BO,
  },
  {
    comune: 'Mordano',
    provincia: Province.BO,
  },
  {
    comune: "Ozzano dell'Emilia",
    provincia: Province.BO,
  },
  {
    comune: 'Pianoro',
    provincia: Province.BO,
  },
  {
    comune: 'Pieve di Cento',
    provincia: Province.BO,
  },
  {
    comune: 'Sala Bolognese',
    provincia: Province.BO,
  },
  {
    comune: 'San Benedetto Val di Sambro',
    provincia: Province.BO,
  },
  {
    comune: 'San Giorgio di Piano',
    provincia: Province.BO,
  },
  {
    comune: 'San Giovanni in Persiceto',
    provincia: Province.BO,
  },
  {
    comune: 'San Lazzaro di Savena',
    provincia: Province.BO,
  },
  {
    comune: 'San Pietro in Casale',
    provincia: Province.BO,
  },
  {
    comune: "Sant'Agata Bolognese",
    provincia: Province.BO,
  },
  {
    comune: 'Sasso Marconi',
    provincia: Province.BO,
  },
  {
    comune: 'Vergato',
    provincia: Province.BO,
  },
  {
    comune: 'Zola Predosa',
    provincia: Province.BO,
  },
  {
    comune: 'Valsamoggia',
    provincia: Province.BO,
  },
  {
    comune: 'Alto Reno Terme',
    provincia: Province.BO,
  },
  {
    comune: 'Argenta',
    provincia: Province.FE,
  },
  {
    comune: 'Bondeno',
    provincia: Province.FE,
  },
  {
    comune: 'Cento',
    provincia: Province.FE,
  },
  {
    comune: 'Codigoro',
    provincia: Province.FE,
  },
  {
    comune: 'Comacchio',
    provincia: Province.FE,
  },
  {
    comune: 'Copparo',
    provincia: Province.FE,
  },
  {
    comune: 'Ferrara',
    provincia: Province.FE,
  },
  {
    comune: 'Jolanda di Savoia',
    provincia: Province.FE,
  },
  {
    comune: 'Lagosanto',
    provincia: Province.FE,
  },
  {
    comune: 'Masi Torello',
    provincia: Province.FE,
  },
  {
    comune: 'Mesola',
    provincia: Province.FE,
  },
  {
    comune: 'Ostellato',
    provincia: Province.FE,
  },
  {
    comune: 'Poggio Renatico',
    provincia: Province.FE,
  },
  {
    comune: 'Portomaggiore',
    provincia: Province.FE,
  },
  {
    comune: 'Vigarano Mainarda',
    provincia: Province.FE,
  },
  {
    comune: 'Voghiera',
    provincia: Province.FE,
  },
  {
    comune: 'Goro',
    provincia: Province.FE,
  },
  {
    comune: 'Fiscaglia',
    provincia: Province.FE,
  },
  {
    comune: 'Terre del Reno',
    provincia: Province.FE,
  },
  {
    comune: 'Riva del Po',
    provincia: Province.FE,
  },
  {
    comune: 'Tresignana',
    provincia: Province.FE,
  },
  {
    comune: 'Alfonsine',
    provincia: Province.RA,
  },
  {
    comune: 'Bagnacavallo',
    provincia: Province.RA,
  },
  {
    comune: 'Bagnara di Romagna',
    provincia: Province.RA,
  },
  {
    comune: 'Brisighella',
    provincia: Province.RA,
  },
  {
    comune: 'Casola Valsenio',
    provincia: Province.RA,
  },
  {
    comune: 'Castel Bolognese',
    provincia: Province.RA,
  },
  {
    comune: 'Cervia',
    provincia: Province.RA,
  },
  {
    comune: 'Conselice',
    provincia: Province.RA,
  },
  {
    comune: 'Cotignola',
    provincia: Province.RA,
  },
  {
    comune: 'Faenza',
    provincia: Province.RA,
  },
  {
    comune: 'Fusignano',
    provincia: Province.RA,
  },
  {
    comune: 'Lugo',
    provincia: Province.RA,
  },
  {
    comune: 'Massa Lombarda',
    provincia: Province.RA,
  },
  {
    comune: 'Ravenna',
    provincia: Province.RA,
  },
  {
    comune: 'Riolo Terme',
    provincia: Province.RA,
  },
  {
    comune: 'Russi',
    provincia: Province.RA,
  },
  {
    comune: "Sant'Agata sul Santerno",
    provincia: Province.RA,
  },
  {
    comune: 'Solarolo',
    provincia: Province.RA,
  },
  {
    comune: 'Bagno di Romagna',
    provincia: Province.FC,
  },
  {
    comune: 'Bertinoro',
    provincia: Province.FC,
  },
  {
    comune: 'Borghi',
    provincia: Province.FC,
  },
  {
    comune: 'Castrocaro Terme e Terra del Sole',
    provincia: Province.FC,
  },
  {
    comune: 'Cesena',
    provincia: Province.FC,
  },
  {
    comune: 'Cesenatico',
    provincia: Province.FC,
  },
  {
    comune: 'Civitella di Romagna',
    provincia: Province.FC,
  },
  {
    comune: 'Dovadola',
    provincia: Province.FC,
  },
  {
    comune: 'Forlì',
    provincia: Province.FC,
  },
  {
    comune: 'Forlimpopoli',
    provincia: Province.FC,
  },
  {
    comune: 'Galeata',
    provincia: Province.FC,
  },
  {
    comune: 'Gambettola',
    provincia: Province.FC,
  },
  {
    comune: 'Gatteo',
    provincia: Province.FC,
  },
  {
    comune: 'Longiano',
    provincia: Province.FC,
  },
  {
    comune: 'Meldola',
    provincia: Province.FC,
  },
  {
    comune: 'Mercato Saraceno',
    provincia: Province.FC,
  },
  {
    comune: 'Modigliana',
    provincia: Province.FC,
  },
  {
    comune: 'Montiano',
    provincia: Province.FC,
  },
  {
    comune: 'Portico e San Benedetto',
    provincia: Province.FC,
  },
  {
    comune: 'Predappio',
    provincia: Province.FC,
  },
  {
    comune: 'Premilcuore',
    provincia: Province.FC,
  },
  {
    comune: 'Rocca San Casciano',
    provincia: Province.FC,
  },
  {
    comune: 'Roncofreddo',
    provincia: Province.FC,
  },
  {
    comune: 'San Mauro Pascoli',
    provincia: Province.FC,
  },
  {
    comune: 'Santa Sofia',
    provincia: Province.FC,
  },
  {
    comune: 'Sarsina',
    provincia: Province.FC,
  },
  {
    comune: 'Savignano sul Rubicone',
    provincia: Province.FC,
  },
  {
    comune: 'Sogliano al Rubicone',
    provincia: Province.FC,
  },
  {
    comune: 'Tredozio',
    provincia: Province.FC,
  },
  {
    comune: 'Verghereto',
    provincia: Province.FC,
  },
  {
    comune: 'Bellaria-Igea Marina',
    provincia: Province.RN,
  },
  {
    comune: 'Cattolica',
    provincia: Province.RN,
  },
  {
    comune: 'Coriano',
    provincia: Province.RN,
  },
  {
    comune: 'Gemmano',
    provincia: Province.RN,
  },
  {
    comune: 'Misano Adriatico',
    provincia: Province.RN,
  },
  {
    comune: 'Mondaino',
    provincia: Province.RN,
  },
  {
    comune: 'Montefiore Conca',
    provincia: Province.RN,
  },
  {
    comune: 'Montegridolfo',
    provincia: Province.RN,
  },
  {
    comune: 'Morciano di Romagna',
    provincia: Province.RN,
  },
  {
    comune: 'Riccione',
    provincia: Province.RN,
  },
  {
    comune: 'Rimini',
    provincia: Province.RN,
  },
  {
    comune: 'Saludecio',
    provincia: Province.RN,
  },
  {
    comune: 'San Clemente',
    provincia: Province.RN,
  },
  {
    comune: 'San Giovanni in Marignano',
    provincia: Province.RN,
  },
  {
    comune: 'Santarcangelo di Romagna',
    provincia: Province.RN,
  },
  {
    comune: 'Verucchio',
    provincia: Province.RN,
  },
  {
    comune: 'Casteldelci',
    provincia: Province.RN,
  },
  {
    comune: 'Maiolo',
    provincia: Province.RN,
  },
  {
    comune: 'Novafeltria',
    provincia: Province.RN,
  },
  {
    comune: 'Pennabilli',
    provincia: Province.RN,
  },
  {
    comune: 'San Leo',
    provincia: Province.RN,
  },
  {
    comune: "Sant'Agata Feltria",
    provincia: Province.RN,
  },
  {
    comune: 'Talamello',
    provincia: Province.RN,
  },
  {
    comune: 'Poggio Torriana',
    provincia: Province.RN,
  },
  {
    comune: 'Montescudo-Monte Colombo',
    provincia: Province.RN,
  },
  {
    comune: 'Aulla',
    provincia: Province.MS,
  },
  {
    comune: 'Bagnone',
    provincia: Province.MS,
  },
  {
    comune: 'Carrara',
    provincia: Province.MS,
  },
  {
    comune: 'Casola in Lunigiana',
    provincia: Province.MS,
  },
  {
    comune: 'Comano',
    provincia: Province.MS,
  },
  {
    comune: 'Filattiera',
    provincia: Province.MS,
  },
  {
    comune: 'Fivizzano',
    provincia: Province.MS,
  },
  {
    comune: 'Fosdinovo',
    provincia: Province.MS,
  },
  {
    comune: 'Licciana Nardi',
    provincia: Province.MS,
  },
  {
    comune: 'Massa',
    provincia: Province.MS,
  },
  {
    comune: 'Montignoso',
    provincia: Province.MS,
  },
  {
    comune: 'Mulazzo',
    provincia: Province.MS,
  },
  {
    comune: 'Podenzana',
    provincia: Province.MS,
  },
  {
    comune: 'Pontremoli',
    provincia: Province.MS,
  },
  {
    comune: 'Tresana',
    provincia: Province.MS,
  },
  {
    comune: 'Villafranca in Lunigiana',
    provincia: Province.MS,
  },
  {
    comune: 'Zeri',
    provincia: Province.MS,
  },
  {
    comune: 'Altopascio',
    provincia: Province.LU,
  },
  {
    comune: 'Bagni di Lucca',
    provincia: Province.LU,
  },
  {
    comune: 'Barga',
    provincia: Province.LU,
  },
  {
    comune: 'Borgo a Mozzano',
    provincia: Province.LU,
  },
  {
    comune: 'Camaiore',
    provincia: Province.LU,
  },
  {
    comune: 'Camporgiano',
    provincia: Province.LU,
  },
  {
    comune: 'Capannori',
    provincia: Province.LU,
  },
  {
    comune: 'Careggine',
    provincia: Province.LU,
  },
  {
    comune: 'Castelnuovo di Garfagnana',
    provincia: Province.LU,
  },
  {
    comune: 'Castiglione di Garfagnana',
    provincia: Province.LU,
  },
  {
    comune: 'Coreglia Antelminelli',
    provincia: Province.LU,
  },
  {
    comune: 'Forte dei Marmi',
    provincia: Province.LU,
  },
  {
    comune: 'Fosciandora',
    provincia: Province.LU,
  },
  {
    comune: 'Gallicano',
    provincia: Province.LU,
  },
  {
    comune: 'Lucca',
    provincia: Province.LU,
  },
  {
    comune: 'Massarosa',
    provincia: Province.LU,
  },
  {
    comune: 'Minucciano',
    provincia: Province.LU,
  },
  {
    comune: 'Molazzana',
    provincia: Province.LU,
  },
  {
    comune: 'Montecarlo',
    provincia: Province.LU,
  },
  {
    comune: 'Pescaglia',
    provincia: Province.LU,
  },
  {
    comune: 'Piazza al Serchio',
    provincia: Province.LU,
  },
  {
    comune: 'Pietrasanta',
    provincia: Province.LU,
  },
  {
    comune: 'Pieve Fosciana',
    provincia: Province.LU,
  },
  {
    comune: 'Porcari',
    provincia: Province.LU,
  },
  {
    comune: 'San Romano in Garfagnana',
    provincia: Province.LU,
  },
  {
    comune: 'Seravezza',
    provincia: Province.LU,
  },
  {
    comune: 'Stazzema',
    provincia: Province.LU,
  },
  {
    comune: 'Vagli Sotto',
    provincia: Province.LU,
  },
  {
    comune: 'Viareggio',
    provincia: Province.LU,
  },
  {
    comune: 'Villa Basilica',
    provincia: Province.LU,
  },
  {
    comune: 'Villa Collemandina',
    provincia: Province.LU,
  },
  {
    comune: 'Fabbriche di Vergemoli',
    provincia: Province.LU,
  },
  {
    comune: 'Sillano Giuncugnano',
    provincia: Province.LU,
  },
  {
    comune: 'Agliana',
    provincia: Province.PT,
  },
  {
    comune: 'Buggiano',
    provincia: Province.PT,
  },
  {
    comune: 'Lamporecchio',
    provincia: Province.PT,
  },
  {
    comune: 'Larciano',
    provincia: Province.PT,
  },
  {
    comune: 'Marliana',
    provincia: Province.PT,
  },
  {
    comune: 'Massa e Cozzile',
    provincia: Province.PT,
  },
  {
    comune: 'Monsummano Terme',
    provincia: Province.PT,
  },
  {
    comune: 'Montale',
    provincia: Province.PT,
  },
  {
    comune: 'Montecatini-Terme',
    provincia: Province.PT,
  },
  {
    comune: 'Pescia',
    provincia: Province.PT,
  },
  {
    comune: 'Pieve a Nievole',
    provincia: Province.PT,
  },
  {
    comune: 'Pistoia',
    provincia: Province.PT,
  },
  {
    comune: 'Ponte Buggianese',
    provincia: Province.PT,
  },
  {
    comune: 'Quarrata',
    provincia: Province.PT,
  },
  {
    comune: 'Sambuca Pistoiese',
    provincia: Province.PT,
  },
  {
    comune: 'Serravalle Pistoiese',
    provincia: Province.PT,
  },
  {
    comune: 'Uzzano',
    provincia: Province.PT,
  },
  {
    comune: 'Chiesina Uzzanese',
    provincia: Province.PT,
  },
  {
    comune: 'Abetone Cutigliano',
    provincia: Province.PT,
  },
  {
    comune: 'San Marcello Piteglio',
    provincia: Province.PT,
  },
  {
    comune: 'Bagno a Ripoli',
    provincia: Province.FI,
  },
  {
    comune: 'Barberino di Mugello',
    provincia: Province.FI,
  },
  {
    comune: 'Borgo San Lorenzo',
    provincia: Province.FI,
  },
  {
    comune: 'Calenzano',
    provincia: Province.FI,
  },
  {
    comune: 'Campi Bisenzio',
    provincia: Province.FI,
  },
  {
    comune: 'Capraia e Limite',
    provincia: Province.FI,
  },
  {
    comune: 'Castelfiorentino',
    provincia: Province.FI,
  },
  {
    comune: 'Cerreto Guidi',
    provincia: Province.FI,
  },
  {
    comune: 'Certaldo',
    provincia: Province.FI,
  },
  {
    comune: 'Dicomano',
    provincia: Province.FI,
  },
  {
    comune: 'Empoli',
    provincia: Province.FI,
  },
  {
    comune: 'Fiesole',
    provincia: Province.FI,
  },
  {
    comune: 'Firenze',
    provincia: Province.FI,
  },
  {
    comune: 'Firenzuola',
    provincia: Province.FI,
  },
  {
    comune: 'Fucecchio',
    provincia: Province.FI,
  },
  {
    comune: 'Gambassi Terme',
    provincia: Province.FI,
  },
  {
    comune: 'Greve in Chianti',
    provincia: Province.FI,
  },
  {
    comune: 'Impruneta',
    provincia: Province.FI,
  },
  {
    comune: 'Lastra a Signa',
    provincia: Province.FI,
  },
  {
    comune: 'Londa',
    provincia: Province.FI,
  },
  {
    comune: 'Marradi',
    provincia: Province.FI,
  },
  {
    comune: 'Montaione',
    provincia: Province.FI,
  },
  {
    comune: 'Montelupo Fiorentino',
    provincia: Province.FI,
  },
  {
    comune: 'Montespertoli',
    provincia: Province.FI,
  },
  {
    comune: 'Palazzuolo sul Senio',
    provincia: Province.FI,
  },
  {
    comune: 'Pelago',
    provincia: Province.FI,
  },
  {
    comune: 'Pontassieve',
    provincia: Province.FI,
  },
  {
    comune: 'Reggello',
    provincia: Province.FI,
  },
  {
    comune: "Rignano sull'Arno",
    provincia: Province.FI,
  },
  {
    comune: 'Rufina',
    provincia: Province.FI,
  },
  {
    comune: 'San Casciano in Val di Pesa',
    provincia: Province.FI,
  },
  {
    comune: 'San Godenzo',
    provincia: Province.FI,
  },
  {
    comune: 'Scandicci',
    provincia: Province.FI,
  },
  {
    comune: 'Sesto Fiorentino',
    provincia: Province.FI,
  },
  {
    comune: 'Signa',
    provincia: Province.FI,
  },
  {
    comune: 'Vaglia',
    provincia: Province.FI,
  },
  {
    comune: 'Vicchio',
    provincia: Province.FI,
  },
  {
    comune: 'Vinci',
    provincia: Province.FI,
  },
  {
    comune: 'Figline e Incisa Valdarno',
    provincia: Province.FI,
  },
  {
    comune: 'Scarperia e San Piero',
    provincia: Province.FI,
  },
  {
    comune: 'Barberino Tavarnelle',
    provincia: Province.FI,
  },
  {
    comune: 'Bibbona',
    provincia: Province.LI,
  },
  {
    comune: 'Campiglia Marittima',
    provincia: Province.LI,
  },
  {
    comune: "Campo nell'Elba",
    provincia: Province.LI,
  },
  {
    comune: 'Capoliveri',
    provincia: Province.LI,
  },
  {
    comune: 'Capraia Isola',
    provincia: Province.LI,
  },
  {
    comune: 'Castagneto Carducci',
    provincia: Province.LI,
  },
  {
    comune: 'Cecina',
    provincia: Province.LI,
  },
  {
    comune: 'Collesalvetti',
    provincia: Province.LI,
  },
  {
    comune: 'Livorno',
    provincia: Province.LI,
  },
  {
    comune: 'Marciana',
    provincia: Province.LI,
  },
  {
    comune: 'Marciana Marina',
    provincia: Province.LI,
  },
  {
    comune: 'Piombino',
    provincia: Province.LI,
  },
  {
    comune: 'Porto Azzurro',
    provincia: Province.LI,
  },
  {
    comune: 'Portoferraio',
    provincia: Province.LI,
  },
  {
    comune: 'Rosignano Marittimo',
    provincia: Province.LI,
  },
  {
    comune: 'San Vincenzo',
    provincia: Province.LI,
  },
  {
    comune: 'Sassetta',
    provincia: Province.LI,
  },
  {
    comune: 'Suvereto',
    provincia: Province.LI,
  },
  {
    comune: 'Rio',
    provincia: Province.LI,
  },
  {
    comune: 'Bientina',
    provincia: Province.PI,
  },
  {
    comune: 'Buti',
    provincia: Province.PI,
  },
  {
    comune: 'Calci',
    provincia: Province.PI,
  },
  {
    comune: 'Calcinaia',
    provincia: Province.PI,
  },
  {
    comune: 'Capannoli',
    provincia: Province.PI,
  },
  {
    comune: 'Casale Marittimo',
    provincia: Province.PI,
  },
  {
    comune: 'Cascina',
    provincia: Province.PI,
  },
  {
    comune: 'Castelfranco di Sotto',
    provincia: Province.PI,
  },
  {
    comune: 'Castellina Marittima',
    provincia: Province.PI,
  },
  {
    comune: 'Castelnuovo di Val di Cecina',
    provincia: Province.PI,
  },
  {
    comune: 'Chianni',
    provincia: Province.PI,
  },
  {
    comune: 'Fauglia',
    provincia: Province.PI,
  },
  {
    comune: 'Guardistallo',
    provincia: Province.PI,
  },
  {
    comune: 'Lajatico',
    provincia: Province.PI,
  },
  {
    comune: 'Montecatini Val di Cecina',
    provincia: Province.PI,
  },
  {
    comune: 'Montescudaio',
    provincia: Province.PI,
  },
  {
    comune: 'Monteverdi Marittimo',
    provincia: Province.PI,
  },
  {
    comune: "Montopoli in Val d'Arno",
    provincia: Province.PI,
  },
  {
    comune: 'Orciano Pisano',
    provincia: Province.PI,
  },
  {
    comune: 'Palaia',
    provincia: Province.PI,
  },
  {
    comune: 'Peccioli',
    provincia: Province.PI,
  },
  {
    comune: 'Pisa',
    provincia: Province.PI,
  },
  {
    comune: 'Pomarance',
    provincia: Province.PI,
  },
  {
    comune: 'Ponsacco',
    provincia: Province.PI,
  },
  {
    comune: 'Pontedera',
    provincia: Province.PI,
  },
  {
    comune: 'Riparbella',
    provincia: Province.PI,
  },
  {
    comune: 'San Giuliano Terme',
    provincia: Province.PI,
  },
  {
    comune: 'San Miniato',
    provincia: Province.PI,
  },
  {
    comune: "Santa Croce sull'Arno",
    provincia: Province.PI,
  },
  {
    comune: 'Santa Luce',
    provincia: Province.PI,
  },
  {
    comune: 'Santa Maria a Monte',
    provincia: Province.PI,
  },
  {
    comune: 'Terricciola',
    provincia: Province.PI,
  },
  {
    comune: 'Vecchiano',
    provincia: Province.PI,
  },
  {
    comune: 'Vicopisano',
    provincia: Province.PI,
  },
  {
    comune: 'Volterra',
    provincia: Province.PI,
  },
  {
    comune: 'Casciana Terme Lari',
    provincia: Province.PI,
  },
  {
    comune: 'Crespina Lorenzana',
    provincia: Province.PI,
  },
  {
    comune: 'Anghiari',
    provincia: Province.AR,
  },
  {
    comune: 'Arezzo',
    provincia: Province.AR,
  },
  {
    comune: 'Badia Tedalda',
    provincia: Province.AR,
  },
  {
    comune: 'Bibbiena',
    provincia: Province.AR,
  },
  {
    comune: 'Bucine',
    provincia: Province.AR,
  },
  {
    comune: 'Capolona',
    provincia: Province.AR,
  },
  {
    comune: 'Caprese Michelangelo',
    provincia: Province.AR,
  },
  {
    comune: 'Castel Focognano',
    provincia: Province.AR,
  },
  {
    comune: 'Castel San Niccolò',
    provincia: Province.AR,
  },
  {
    comune: 'Castiglion Fibocchi',
    provincia: Province.AR,
  },
  {
    comune: 'Castiglion Fiorentino',
    provincia: Province.AR,
  },
  {
    comune: 'Cavriglia',
    provincia: Province.AR,
  },
  {
    comune: 'Chitignano',
    provincia: Province.AR,
  },
  {
    comune: 'Chiusi della Verna',
    provincia: Province.AR,
  },
  {
    comune: 'Civitella in Val di Chiana',
    provincia: Province.AR,
  },
  {
    comune: 'Cortona',
    provincia: Province.AR,
  },
  {
    comune: 'Foiano della Chiana',
    provincia: Province.AR,
  },
  {
    comune: 'Loro Ciuffenna',
    provincia: Province.AR,
  },
  {
    comune: 'Lucignano',
    provincia: Province.AR,
  },
  {
    comune: 'Marciano della Chiana',
    provincia: Province.AR,
  },
  {
    comune: 'Montemignaio',
    provincia: Province.AR,
  },
  {
    comune: 'Monterchi',
    provincia: Province.AR,
  },
  {
    comune: 'Monte San Savino',
    provincia: Province.AR,
  },
  {
    comune: 'Montevarchi',
    provincia: Province.AR,
  },
  {
    comune: 'Ortignano Raggiolo',
    provincia: Province.AR,
  },
  {
    comune: 'Pieve Santo Stefano',
    provincia: Province.AR,
  },
  {
    comune: 'Poppi',
    provincia: Province.AR,
  },
  {
    comune: 'San Giovanni Valdarno',
    provincia: Province.AR,
  },
  {
    comune: 'Sansepolcro',
    provincia: Province.AR,
  },
  {
    comune: 'Sestino',
    provincia: Province.AR,
  },
  {
    comune: 'Subbiano',
    provincia: Province.AR,
  },
  {
    comune: 'Talla',
    provincia: Province.AR,
  },
  {
    comune: 'Terranuova Bracciolini',
    provincia: Province.AR,
  },
  {
    comune: 'Castelfranco Piandiscò',
    provincia: Province.AR,
  },
  {
    comune: 'Pratovecchio Stia',
    provincia: Province.AR,
  },
  {
    comune: 'Laterina Pergine Valdarno',
    provincia: Province.AR,
  },
  {
    comune: 'Abbadia San Salvatore',
    provincia: Province.SI,
  },
  {
    comune: 'Asciano',
    provincia: Province.SI,
  },
  {
    comune: 'Buonconvento',
    provincia: Province.SI,
  },
  {
    comune: "Casole d'Elsa",
    provincia: Province.SI,
  },
  {
    comune: 'Castellina in Chianti',
    provincia: Province.SI,
  },
  {
    comune: 'Castelnuovo Berardenga',
    provincia: Province.SI,
  },
  {
    comune: "Castiglione d'Orcia",
    provincia: Province.SI,
  },
  {
    comune: 'Cetona',
    provincia: Province.SI,
  },
  {
    comune: 'Chianciano Terme',
    provincia: Province.SI,
  },
  {
    comune: 'Chiusdino',
    provincia: Province.SI,
  },
  {
    comune: 'Chiusi',
    provincia: Province.SI,
  },
  {
    comune: "Colle di Val d'Elsa",
    provincia: Province.SI,
  },
  {
    comune: 'Gaiole in Chianti',
    provincia: Province.SI,
  },
  {
    comune: 'Montepulciano',
    provincia: Province.SI,
  },
  {
    comune: 'Monteriggioni',
    provincia: Province.SI,
  },
  {
    comune: "Monteroni d'Arbia",
    provincia: Province.SI,
  },
  {
    comune: 'Monticiano',
    provincia: Province.SI,
  },
  {
    comune: 'Murlo',
    provincia: Province.SI,
  },
  {
    comune: 'Piancastagnaio',
    provincia: Province.SI,
  },
  {
    comune: 'Pienza',
    provincia: Province.SI,
  },
  {
    comune: 'Poggibonsi',
    provincia: Province.SI,
  },
  {
    comune: 'Radda in Chianti',
    provincia: Province.SI,
  },
  {
    comune: 'Radicofani',
    provincia: Province.SI,
  },
  {
    comune: 'Radicondoli',
    provincia: Province.SI,
  },
  {
    comune: 'Rapolano Terme',
    provincia: Province.SI,
  },
  {
    comune: 'San Casciano dei Bagni',
    provincia: Province.SI,
  },
  {
    comune: 'San Gimignano',
    provincia: Province.SI,
  },
  {
    comune: "San Quirico d'Orcia",
    provincia: Province.SI,
  },
  {
    comune: 'Sarteano',
    provincia: Province.SI,
  },
  {
    comune: 'Siena',
    provincia: Province.SI,
  },
  {
    comune: 'Sinalunga',
    provincia: Province.SI,
  },
  {
    comune: 'Sovicille',
    provincia: Province.SI,
  },
  {
    comune: 'Torrita di Siena',
    provincia: Province.SI,
  },
  {
    comune: 'Trequanda',
    provincia: Province.SI,
  },
  {
    comune: 'Montalcino',
    provincia: Province.SI,
  },
  {
    comune: 'Arcidosso',
    provincia: Province.GR,
  },
  {
    comune: 'Campagnatico',
    provincia: Province.GR,
  },
  {
    comune: 'Capalbio',
    provincia: Province.GR,
  },
  {
    comune: 'Castel del Piano',
    provincia: Province.GR,
  },
  {
    comune: "Castell'Azzara",
    provincia: Province.GR,
  },
  {
    comune: 'Castiglione della Pescaia',
    provincia: Province.GR,
  },
  {
    comune: 'Cinigiano',
    provincia: Province.GR,
  },
  {
    comune: 'Civitella Paganico',
    provincia: Province.GR,
  },
  {
    comune: 'Follonica',
    provincia: Province.GR,
  },
  {
    comune: 'Gavorrano',
    provincia: Province.GR,
  },
  {
    comune: 'Grosseto',
    provincia: Province.GR,
  },
  {
    comune: 'Isola del Giglio',
    provincia: Province.GR,
  },
  {
    comune: 'Magliano in Toscana',
    provincia: Province.GR,
  },
  {
    comune: 'Manciano',
    provincia: Province.GR,
  },
  {
    comune: 'Massa Marittima',
    provincia: Province.GR,
  },
  {
    comune: 'Monte Argentario',
    provincia: Province.GR,
  },
  {
    comune: 'Montieri',
    provincia: Province.GR,
  },
  {
    comune: 'Orbetello',
    provincia: Province.GR,
  },
  {
    comune: 'Pitigliano',
    provincia: Province.GR,
  },
  {
    comune: 'Roccalbegna',
    provincia: Province.GR,
  },
  {
    comune: 'Roccastrada',
    provincia: Province.GR,
  },
  {
    comune: 'Santa Fiora',
    provincia: Province.GR,
  },
  {
    comune: 'Scansano',
    provincia: Province.GR,
  },
  {
    comune: 'Scarlino',
    provincia: Province.GR,
  },
  {
    comune: 'Seggiano',
    provincia: Province.GR,
  },
  {
    comune: 'Sorano',
    provincia: Province.GR,
  },
  {
    comune: 'Monterotondo Marittimo',
    provincia: Province.GR,
  },
  {
    comune: 'Semproniano',
    provincia: Province.GR,
  },
  {
    comune: 'Cantagallo',
    provincia: Province.PO,
  },
  {
    comune: 'Carmignano',
    provincia: Province.PO,
  },
  {
    comune: 'Montemurlo',
    provincia: Province.PO,
  },
  {
    comune: 'Poggio a Caiano',
    provincia: Province.PO,
  },
  {
    comune: 'Prato',
    provincia: Province.PO,
  },
  {
    comune: 'Vaiano',
    provincia: Province.PO,
  },
  {
    comune: 'Vernio',
    provincia: Province.PO,
  },
  {
    comune: 'Assisi',
    provincia: Province.PG,
  },
  {
    comune: 'Bastia Umbra',
    provincia: Province.PG,
  },
  {
    comune: 'Bettona',
    provincia: Province.PG,
  },
  {
    comune: 'Bevagna',
    provincia: Province.PG,
  },
  {
    comune: 'Campello sul Clitunno',
    provincia: Province.PG,
  },
  {
    comune: 'Cannara',
    provincia: Province.PG,
  },
  {
    comune: 'Cascia',
    provincia: Province.PG,
  },
  {
    comune: 'Castel Ritaldi',
    provincia: Province.PG,
  },
  {
    comune: 'Castiglione del Lago',
    provincia: Province.PG,
  },
  {
    comune: 'Cerreto di Spoleto',
    provincia: Province.PG,
  },
  {
    comune: 'Citerna',
    provincia: Province.PG,
  },
  {
    comune: 'Città della Pieve',
    provincia: Province.PG,
  },
  {
    comune: 'Città di Castello',
    provincia: Province.PG,
  },
  {
    comune: 'Collazzone',
    provincia: Province.PG,
  },
  {
    comune: 'Corciano',
    provincia: Province.PG,
  },
  {
    comune: 'Costacciaro',
    provincia: Province.PG,
  },
  {
    comune: 'Deruta',
    provincia: Province.PG,
  },
  {
    comune: 'Foligno',
    provincia: Province.PG,
  },
  {
    comune: 'Fossato di Vico',
    provincia: Province.PG,
  },
  {
    comune: 'Fratta Todina',
    provincia: Province.PG,
  },
  {
    comune: "Giano dell'Umbria",
    provincia: Province.PG,
  },
  {
    comune: 'Gualdo Cattaneo',
    provincia: Province.PG,
  },
  {
    comune: 'Gualdo Tadino',
    provincia: Province.PG,
  },
  {
    comune: 'Gubbio',
    provincia: Province.PG,
  },
  {
    comune: 'Lisciano Niccone',
    provincia: Province.PG,
  },
  {
    comune: 'Magione',
    provincia: Province.PG,
  },
  {
    comune: 'Marsciano',
    provincia: Province.PG,
  },
  {
    comune: 'Massa Martana',
    provincia: Province.PG,
  },
  {
    comune: 'Monte Castello di Vibio',
    provincia: Province.PG,
  },
  {
    comune: 'Montefalco',
    provincia: Province.PG,
  },
  {
    comune: 'Monteleone di Spoleto',
    provincia: Province.PG,
  },
  {
    comune: 'Monte Santa Maria Tiberina',
    provincia: Province.PG,
  },
  {
    comune: 'Montone',
    provincia: Province.PG,
  },
  {
    comune: 'Nocera Umbra',
    provincia: Province.PG,
  },
  {
    comune: 'Norcia',
    provincia: Province.PG,
  },
  {
    comune: 'Paciano',
    provincia: Province.PG,
  },
  {
    comune: 'Panicale',
    provincia: Province.PG,
  },
  {
    comune: 'Passignano sul Trasimeno',
    provincia: Province.PG,
  },
  {
    comune: 'Perugia',
    provincia: Province.PG,
  },
  {
    comune: 'Piegaro',
    provincia: Province.PG,
  },
  {
    comune: 'Pietralunga',
    provincia: Province.PG,
  },
  {
    comune: 'Poggiodomo',
    provincia: Province.PG,
  },
  {
    comune: 'Preci',
    provincia: Province.PG,
  },
  {
    comune: 'San Giustino',
    provincia: Province.PG,
  },
  {
    comune: "Sant'Anatolia di Narco",
    provincia: Province.PG,
  },
  {
    comune: 'Scheggia e Pascelupo',
    provincia: Province.PG,
  },
  {
    comune: 'Scheggino',
    provincia: Province.PG,
  },
  {
    comune: 'Sellano',
    provincia: Province.PG,
  },
  {
    comune: 'Sigillo',
    provincia: Province.PG,
  },
  {
    comune: 'Spello',
    provincia: Province.PG,
  },
  {
    comune: 'Spoleto',
    provincia: Province.PG,
  },
  {
    comune: 'Todi',
    provincia: Province.PG,
  },
  {
    comune: 'Torgiano',
    provincia: Province.PG,
  },
  {
    comune: 'Trevi',
    provincia: Province.PG,
  },
  {
    comune: 'Tuoro sul Trasimeno',
    provincia: Province.PG,
  },
  {
    comune: 'Umbertide',
    provincia: Province.PG,
  },
  {
    comune: 'Valfabbrica',
    provincia: Province.PG,
  },
  {
    comune: 'Vallo di Nera',
    provincia: Province.PG,
  },
  {
    comune: 'Valtopina',
    provincia: Province.PG,
  },
  {
    comune: 'Acquasparta',
    provincia: Province.TR,
  },
  {
    comune: 'Allerona',
    provincia: Province.TR,
  },
  {
    comune: 'Alviano',
    provincia: Province.TR,
  },
  {
    comune: 'Amelia',
    provincia: Province.TR,
  },
  {
    comune: 'Arrone',
    provincia: Province.TR,
  },
  {
    comune: 'Attigliano',
    provincia: Province.TR,
  },
  {
    comune: 'Baschi',
    provincia: Province.TR,
  },
  {
    comune: "Calvi dell'Umbria",
    provincia: Province.TR,
  },
  {
    comune: 'Castel Giorgio',
    provincia: Province.TR,
  },
  {
    comune: 'Castel Viscardo',
    provincia: Province.TR,
  },
  {
    comune: 'Fabro',
    provincia: Province.TR,
  },
  {
    comune: 'Ferentillo',
    provincia: Province.TR,
  },
  {
    comune: 'Ficulle',
    provincia: Province.TR,
  },
  {
    comune: 'Giove',
    provincia: Province.TR,
  },
  {
    comune: 'Guardea',
    provincia: Province.TR,
  },
  {
    comune: 'Lugnano in Teverina',
    provincia: Province.TR,
  },
  {
    comune: 'Montecastrilli',
    provincia: Province.TR,
  },
  {
    comune: 'Montecchio',
    provincia: Province.TR,
  },
  {
    comune: 'Montefranco',
    provincia: Province.TR,
  },
  {
    comune: 'Montegabbione',
    provincia: Province.TR,
  },
  {
    comune: "Monteleone d'Orvieto",
    provincia: Province.TR,
  },
  {
    comune: 'Narni',
    provincia: Province.TR,
  },
  {
    comune: 'Orvieto',
    provincia: Province.TR,
  },
  {
    comune: 'Otricoli',
    provincia: Province.TR,
  },
  {
    comune: 'Parrano',
    provincia: Province.TR,
  },
  {
    comune: 'Penna in Teverina',
    provincia: Province.TR,
  },
  {
    comune: 'Polino',
    provincia: Province.TR,
  },
  {
    comune: 'Porano',
    provincia: Province.TR,
  },
  {
    comune: 'San Gemini',
    provincia: Province.TR,
  },
  {
    comune: 'San Venanzo',
    provincia: Province.TR,
  },
  {
    comune: 'Stroncone',
    provincia: Province.TR,
  },
  {
    comune: 'Terni',
    provincia: Province.TR,
  },
  {
    comune: 'Avigliano Umbro',
    provincia: Province.TR,
  },
  {
    comune: 'Acqualagna',
    provincia: Province.PU,
  },
  {
    comune: 'Apecchio',
    provincia: Province.PU,
  },
  {
    comune: "Belforte all'Isauro",
    provincia: Province.PU,
  },
  {
    comune: 'Borgo Pace',
    provincia: Province.PU,
  },
  {
    comune: 'Cagli',
    provincia: Province.PU,
  },
  {
    comune: 'Cantiano',
    provincia: Province.PU,
  },
  {
    comune: 'Carpegna',
    provincia: Province.PU,
  },
  {
    comune: 'Cartoceto',
    provincia: Province.PU,
  },
  {
    comune: 'Fano',
    provincia: Province.PU,
  },
  {
    comune: 'Fermignano',
    provincia: Province.PU,
  },
  {
    comune: 'Fossombrone',
    provincia: Province.PU,
  },
  {
    comune: 'Fratte Rosa',
    provincia: Province.PU,
  },
  {
    comune: 'Frontino',
    provincia: Province.PU,
  },
  {
    comune: 'Frontone',
    provincia: Province.PU,
  },
  {
    comune: 'Gabicce Mare',
    provincia: Province.PU,
  },
  {
    comune: 'Gradara',
    provincia: Province.PU,
  },
  {
    comune: 'Isola del Piano',
    provincia: Province.PU,
  },
  {
    comune: 'Lunano',
    provincia: Province.PU,
  },
  {
    comune: 'Macerata Feltria',
    provincia: Province.PU,
  },
  {
    comune: 'Mercatello sul Metauro',
    provincia: Province.PU,
  },
  {
    comune: 'Mercatino Conca',
    provincia: Province.PU,
  },
  {
    comune: 'Mombaroccio',
    provincia: Province.PU,
  },
  {
    comune: 'Mondavio',
    provincia: Province.PU,
  },
  {
    comune: 'Mondolfo',
    provincia: Province.PU,
  },
  {
    comune: 'Montecalvo in Foglia',
    provincia: Province.PU,
  },
  {
    comune: 'Monte Cerignone',
    provincia: Province.PU,
  },
  {
    comune: 'Montecopiolo',
    provincia: Province.PU,
  },
  {
    comune: 'Montefelcino',
    provincia: Province.PU,
  },
  {
    comune: 'Monte Grimano Terme',
    provincia: Province.PU,
  },
  {
    comune: 'Montelabbate',
    provincia: Province.PU,
  },
  {
    comune: 'Monte Porzio',
    provincia: Province.PU,
  },
  {
    comune: 'Peglio',
    provincia: Province.PU,
  },
  {
    comune: 'Pergola',
    provincia: Province.PU,
  },
  {
    comune: 'Pesaro',
    provincia: Province.PU,
  },
  {
    comune: 'Petriano',
    provincia: Province.PU,
  },
  {
    comune: 'Piandimeleto',
    provincia: Province.PU,
  },
  {
    comune: 'Pietrarubbia',
    provincia: Province.PU,
  },
  {
    comune: 'Piobbico',
    provincia: Province.PU,
  },
  {
    comune: 'San Costanzo',
    provincia: Province.PU,
  },
  {
    comune: 'San Lorenzo in Campo',
    provincia: Province.PU,
  },
  {
    comune: "Sant'Angelo in Vado",
    provincia: Province.PU,
  },
  {
    comune: "Sant'Ippolito",
    provincia: Province.PU,
  },
  {
    comune: 'Sassofeltrio',
    provincia: Province.PU,
  },
  {
    comune: "Serra Sant'Abbondio",
    provincia: Province.PU,
  },
  {
    comune: 'Tavoleto',
    provincia: Province.PU,
  },
  {
    comune: 'Tavullia',
    provincia: Province.PU,
  },
  {
    comune: 'Urbania',
    provincia: Province.PU,
  },
  {
    comune: 'Urbino',
    provincia: Province.PU,
  },
  {
    comune: 'Vallefoglia',
    provincia: Province.PU,
  },
  {
    comune: 'Colli al Metauro',
    provincia: Province.PU,
  },
  {
    comune: 'Terre Roveresche',
    provincia: Province.PU,
  },
  {
    comune: 'Sassocorvaro Auditore',
    provincia: Province.PU,
  },
  {
    comune: 'Agugliano',
    provincia: Province.AN,
  },
  {
    comune: 'Ancona',
    provincia: Province.AN,
  },
  {
    comune: 'Arcevia',
    provincia: Province.AN,
  },
  {
    comune: 'Barbara',
    provincia: Province.AN,
  },
  {
    comune: 'Belvedere Ostrense',
    provincia: Province.AN,
  },
  {
    comune: 'Camerano',
    provincia: Province.AN,
  },
  {
    comune: 'Camerata Picena',
    provincia: Province.AN,
  },
  {
    comune: 'Castelbellino',
    provincia: Province.AN,
  },
  {
    comune: 'Castelfidardo',
    provincia: Province.AN,
  },
  {
    comune: 'Castelleone di Suasa',
    provincia: Province.AN,
  },
  {
    comune: 'Castelplanio',
    provincia: Province.AN,
  },
  {
    comune: "Cerreto d'Esi",
    provincia: Province.AN,
  },
  {
    comune: 'Chiaravalle',
    provincia: Province.AN,
  },
  {
    comune: 'Corinaldo',
    provincia: Province.AN,
  },
  {
    comune: 'Cupramontana',
    provincia: Province.AN,
  },
  {
    comune: 'Fabriano',
    provincia: Province.AN,
  },
  {
    comune: 'Falconara Marittima',
    provincia: Province.AN,
  },
  {
    comune: 'Filottrano',
    provincia: Province.AN,
  },
  {
    comune: 'Genga',
    provincia: Province.AN,
  },
  {
    comune: 'Jesi',
    provincia: Province.AN,
  },
  {
    comune: 'Loreto',
    provincia: Province.AN,
  },
  {
    comune: 'Maiolati Spontini',
    provincia: Province.AN,
  },
  {
    comune: 'Mergo',
    provincia: Province.AN,
  },
  {
    comune: 'Monsano',
    provincia: Province.AN,
  },
  {
    comune: 'Montecarotto',
    provincia: Province.AN,
  },
  {
    comune: 'Montemarciano',
    provincia: Province.AN,
  },
  {
    comune: 'Monte Roberto',
    provincia: Province.AN,
  },
  {
    comune: 'Monte San Vito',
    provincia: Province.AN,
  },
  {
    comune: "Morro d'Alba",
    provincia: Province.AN,
  },
  {
    comune: 'Numana',
    provincia: Province.AN,
  },
  {
    comune: 'Offagna',
    provincia: Province.AN,
  },
  {
    comune: 'Osimo',
    provincia: Province.AN,
  },
  {
    comune: 'Ostra',
    provincia: Province.AN,
  },
  {
    comune: 'Ostra Vetere',
    provincia: Province.AN,
  },
  {
    comune: 'Poggio San Marcello',
    provincia: Province.AN,
  },
  {
    comune: 'Polverigi',
    provincia: Province.AN,
  },
  {
    comune: 'Rosora',
    provincia: Province.AN,
  },
  {
    comune: 'San Marcello',
    provincia: Province.AN,
  },
  {
    comune: 'San Paolo di Jesi',
    provincia: Province.AN,
  },
  {
    comune: 'Santa Maria Nuova',
    provincia: Province.AN,
  },
  {
    comune: 'Sassoferrato',
    provincia: Province.AN,
  },
  {
    comune: 'Senigallia',
    provincia: Province.AN,
  },
  {
    comune: "Serra de' Conti",
    provincia: Province.AN,
  },
  {
    comune: 'Serra San Quirico',
    provincia: Province.AN,
  },
  {
    comune: 'Sirolo',
    provincia: Province.AN,
  },
  {
    comune: 'Staffolo',
    provincia: Province.AN,
  },
  {
    comune: 'Trecastelli',
    provincia: Province.AN,
  },
  {
    comune: 'Apiro',
    provincia: Province.MC,
  },
  {
    comune: 'Appignano',
    provincia: Province.MC,
  },
  {
    comune: 'Belforte del Chienti',
    provincia: Province.MC,
  },
  {
    comune: 'Bolognola',
    provincia: Province.MC,
  },
  {
    comune: 'Caldarola',
    provincia: Province.MC,
  },
  {
    comune: 'Camerino',
    provincia: Province.MC,
  },
  {
    comune: 'Camporotondo di Fiastrone',
    provincia: Province.MC,
  },
  {
    comune: 'Castelraimondo',
    provincia: Province.MC,
  },
  {
    comune: 'Castelsantangelo sul Nera',
    provincia: Province.MC,
  },
  {
    comune: 'Cessapalombo',
    provincia: Province.MC,
  },
  {
    comune: 'Cingoli',
    provincia: Province.MC,
  },
  {
    comune: 'Civitanova Marche',
    provincia: Province.MC,
  },
  {
    comune: 'Colmurano',
    provincia: Province.MC,
  },
  {
    comune: 'Corridonia',
    provincia: Province.MC,
  },
  {
    comune: 'Esanatoglia',
    provincia: Province.MC,
  },
  {
    comune: 'Fiastra',
    provincia: Province.MC,
  },
  {
    comune: 'Fiuminata',
    provincia: Province.MC,
  },
  {
    comune: 'Gagliole',
    provincia: Province.MC,
  },
  {
    comune: 'Gualdo',
    provincia: Province.MC,
  },
  {
    comune: 'Loro Piceno',
    provincia: Province.MC,
  },
  {
    comune: 'Macerata',
    provincia: Province.MC,
  },
  {
    comune: 'Matelica',
    provincia: Province.MC,
  },
  {
    comune: 'Mogliano',
    provincia: Province.MC,
  },
  {
    comune: 'Montecassiano',
    provincia: Province.MC,
  },
  {
    comune: 'Monte Cavallo',
    provincia: Province.MC,
  },
  {
    comune: 'Montecosaro',
    provincia: Province.MC,
  },
  {
    comune: 'Montefano',
    provincia: Province.MC,
  },
  {
    comune: 'Montelupone',
    provincia: Province.MC,
  },
  {
    comune: 'Monte San Giusto',
    provincia: Province.MC,
  },
  {
    comune: 'Monte San Martino',
    provincia: Province.MC,
  },
  {
    comune: 'Morrovalle',
    provincia: Province.MC,
  },
  {
    comune: 'Muccia',
    provincia: Province.MC,
  },
  {
    comune: 'Penna San Giovanni',
    provincia: Province.MC,
  },
  {
    comune: 'Petriolo',
    provincia: Province.MC,
  },
  {
    comune: 'Pieve Torina',
    provincia: Province.MC,
  },
  {
    comune: 'Pioraco',
    provincia: Province.MC,
  },
  {
    comune: 'Poggio San Vicino',
    provincia: Province.MC,
  },
  {
    comune: 'Pollenza',
    provincia: Province.MC,
  },
  {
    comune: 'Porto Recanati',
    provincia: Province.MC,
  },
  {
    comune: 'Potenza Picena',
    provincia: Province.MC,
  },
  {
    comune: 'Recanati',
    provincia: Province.MC,
  },
  {
    comune: 'Ripe San Ginesio',
    provincia: Province.MC,
  },
  {
    comune: 'San Ginesio',
    provincia: Province.MC,
  },
  {
    comune: 'San Severino Marche',
    provincia: Province.MC,
  },
  {
    comune: "Sant'Angelo in Pontano",
    provincia: Province.MC,
  },
  {
    comune: 'Sarnano',
    provincia: Province.MC,
  },
  {
    comune: 'Sefro',
    provincia: Province.MC,
  },
  {
    comune: 'Serrapetrona',
    provincia: Province.MC,
  },
  {
    comune: 'Serravalle di Chienti',
    provincia: Province.MC,
  },
  {
    comune: 'Tolentino',
    provincia: Province.MC,
  },
  {
    comune: 'Treia',
    provincia: Province.MC,
  },
  {
    comune: 'Urbisaglia',
    provincia: Province.MC,
  },
  {
    comune: 'Ussita',
    provincia: Province.MC,
  },
  {
    comune: 'Visso',
    provincia: Province.MC,
  },
  {
    comune: 'Valfornace',
    provincia: Province.MC,
  },
  {
    comune: 'Acquasanta Terme',
    provincia: Province.AP,
  },
  {
    comune: 'Acquaviva Picena',
    provincia: Province.AP,
  },
  {
    comune: 'Appignano del Tronto',
    provincia: Province.AP,
  },
  {
    comune: 'Arquata del Tronto',
    provincia: Province.AP,
  },
  {
    comune: 'Ascoli Piceno',
    provincia: Province.AP,
  },
  {
    comune: 'Carassai',
    provincia: Province.AP,
  },
  {
    comune: 'Castel di Lama',
    provincia: Province.AP,
  },
  {
    comune: 'Castignano',
    provincia: Province.AP,
  },
  {
    comune: 'Castorano',
    provincia: Province.AP,
  },
  {
    comune: 'Colli del Tronto',
    provincia: Province.AP,
  },
  {
    comune: 'Comunanza',
    provincia: Province.AP,
  },
  {
    comune: 'Cossignano',
    provincia: Province.AP,
  },
  {
    comune: 'Cupra Marittima',
    provincia: Province.AP,
  },
  {
    comune: 'Folignano',
    provincia: Province.AP,
  },
  {
    comune: 'Force',
    provincia: Province.AP,
  },
  {
    comune: 'Grottammare',
    provincia: Province.AP,
  },
  {
    comune: 'Maltignano',
    provincia: Province.AP,
  },
  {
    comune: 'Massignano',
    provincia: Province.AP,
  },
  {
    comune: 'Monsampolo del Tronto',
    provincia: Province.AP,
  },
  {
    comune: 'Montalto delle Marche',
    provincia: Province.AP,
  },
  {
    comune: 'Montedinove',
    provincia: Province.AP,
  },
  {
    comune: "Montefiore dell'Aso",
    provincia: Province.AP,
  },
  {
    comune: 'Montegallo',
    provincia: Province.AP,
  },
  {
    comune: 'Montemonaco',
    provincia: Province.AP,
  },
  {
    comune: 'Monteprandone',
    provincia: Province.AP,
  },
  {
    comune: 'Offida',
    provincia: Province.AP,
  },
  {
    comune: 'Palmiano',
    provincia: Province.AP,
  },
  {
    comune: 'Ripatransone',
    provincia: Province.AP,
  },
  {
    comune: 'Roccafluvione',
    provincia: Province.AP,
  },
  {
    comune: 'Rotella',
    provincia: Province.AP,
  },
  {
    comune: 'San Benedetto del Tronto',
    provincia: Province.AP,
  },
  {
    comune: 'Spinetoli',
    provincia: Province.AP,
  },
  {
    comune: 'Venarotta',
    provincia: Province.AP,
  },
  {
    comune: 'Altidona',
    provincia: Province.FM,
  },
  {
    comune: 'Amandola',
    provincia: Province.FM,
  },
  {
    comune: 'Belmonte Piceno',
    provincia: Province.FM,
  },
  {
    comune: 'Campofilone',
    provincia: Province.FM,
  },
  {
    comune: 'Falerone',
    provincia: Province.FM,
  },
  {
    comune: 'Fermo',
    provincia: Province.FM,
  },
  {
    comune: "Francavilla d'Ete",
    provincia: Province.FM,
  },
  {
    comune: 'Grottazzolina',
    provincia: Province.FM,
  },
  {
    comune: 'Lapedona',
    provincia: Province.FM,
  },
  {
    comune: 'Magliano di Tenna',
    provincia: Province.FM,
  },
  {
    comune: 'Massa Fermana',
    provincia: Province.FM,
  },
  {
    comune: 'Monsampietro Morico',
    provincia: Province.FM,
  },
  {
    comune: 'Montappone',
    provincia: Province.FM,
  },
  {
    comune: 'Montefalcone Appennino',
    provincia: Province.FM,
  },
  {
    comune: 'Montefortino',
    provincia: Province.FM,
  },
  {
    comune: 'Monte Giberto',
    provincia: Province.FM,
  },
  {
    comune: 'Montegiorgio',
    provincia: Province.FM,
  },
  {
    comune: 'Montegranaro',
    provincia: Province.FM,
  },
  {
    comune: 'Monteleone di Fermo',
    provincia: Province.FM,
  },
  {
    comune: 'Montelparo',
    provincia: Province.FM,
  },
  {
    comune: 'Monte Rinaldo',
    provincia: Province.FM,
  },
  {
    comune: 'Monterubbiano',
    provincia: Province.FM,
  },
  {
    comune: 'Monte San Pietrangeli',
    provincia: Province.FM,
  },
  {
    comune: 'Monte Urano',
    provincia: Province.FM,
  },
  {
    comune: 'Monte Vidon Combatte',
    provincia: Province.FM,
  },
  {
    comune: 'Monte Vidon Corrado',
    provincia: Province.FM,
  },
  {
    comune: 'Montottone',
    provincia: Province.FM,
  },
  {
    comune: 'Moresco',
    provincia: Province.FM,
  },
  {
    comune: 'Ortezzano',
    provincia: Province.FM,
  },
  {
    comune: 'Pedaso',
    provincia: Province.FM,
  },
  {
    comune: 'Petritoli',
    provincia: Province.FM,
  },
  {
    comune: 'Ponzano di Fermo',
    provincia: Province.FM,
  },
  {
    comune: 'Porto San Giorgio',
    provincia: Province.FM,
  },
  {
    comune: "Porto Sant'Elpidio",
    provincia: Province.FM,
  },
  {
    comune: 'Rapagnano',
    provincia: Province.FM,
  },
  {
    comune: 'Santa Vittoria in Matenano',
    provincia: Province.FM,
  },
  {
    comune: "Sant'Elpidio a Mare",
    provincia: Province.FM,
  },
  {
    comune: 'Servigliano',
    provincia: Province.FM,
  },
  {
    comune: 'Smerillo',
    provincia: Province.FM,
  },
  {
    comune: 'Torre San Patrizio',
    provincia: Province.FM,
  },
  {
    comune: 'Acquapendente',
    provincia: Province.VT,
  },
  {
    comune: 'Arlena di Castro',
    provincia: Province.VT,
  },
  {
    comune: 'Bagnoregio',
    provincia: Province.VT,
  },
  {
    comune: 'Barbarano Romano',
    provincia: Province.VT,
  },
  {
    comune: 'Bassano Romano',
    provincia: Province.VT,
  },
  {
    comune: 'Bassano in Teverina',
    provincia: Province.VT,
  },
  {
    comune: 'Blera',
    provincia: Province.VT,
  },
  {
    comune: 'Bolsena',
    provincia: Province.VT,
  },
  {
    comune: 'Bomarzo',
    provincia: Province.VT,
  },
  {
    comune: 'Calcata',
    provincia: Province.VT,
  },
  {
    comune: 'Canepina',
    provincia: Province.VT,
  },
  {
    comune: 'Canino',
    provincia: Province.VT,
  },
  {
    comune: 'Capodimonte',
    provincia: Province.VT,
  },
  {
    comune: 'Capranica',
    provincia: Province.VT,
  },
  {
    comune: 'Caprarola',
    provincia: Province.VT,
  },
  {
    comune: 'Carbognano',
    provincia: Province.VT,
  },
  {
    comune: "Castel Sant'Elia",
    provincia: Province.VT,
  },
  {
    comune: 'Castiglione in Teverina',
    provincia: Province.VT,
  },
  {
    comune: 'Celleno',
    provincia: Province.VT,
  },
  {
    comune: 'Cellere',
    provincia: Province.VT,
  },
  {
    comune: 'Civita Castellana',
    provincia: Province.VT,
  },
  {
    comune: "Civitella d'Agliano",
    provincia: Province.VT,
  },
  {
    comune: 'Corchiano',
    provincia: Province.VT,
  },
  {
    comune: 'Fabrica di Roma',
    provincia: Province.VT,
  },
  {
    comune: 'Faleria',
    provincia: Province.VT,
  },
  {
    comune: 'Farnese',
    provincia: Province.VT,
  },
  {
    comune: 'Gallese',
    provincia: Province.VT,
  },
  {
    comune: 'Gradoli',
    provincia: Province.VT,
  },
  {
    comune: 'Graffignano',
    provincia: Province.VT,
  },
  {
    comune: 'Grotte di Castro',
    provincia: Province.VT,
  },
  {
    comune: 'Ischia di Castro',
    provincia: Province.VT,
  },
  {
    comune: 'Latera',
    provincia: Province.VT,
  },
  {
    comune: 'Lubriano',
    provincia: Province.VT,
  },
  {
    comune: 'Marta',
    provincia: Province.VT,
  },
  {
    comune: 'Montalto di Castro',
    provincia: Province.VT,
  },
  {
    comune: 'Montefiascone',
    provincia: Province.VT,
  },
  {
    comune: 'Monte Romano',
    provincia: Province.VT,
  },
  {
    comune: 'Monterosi',
    provincia: Province.VT,
  },
  {
    comune: 'Nepi',
    provincia: Province.VT,
  },
  {
    comune: 'Onano',
    provincia: Province.VT,
  },
  {
    comune: 'Oriolo Romano',
    provincia: Province.VT,
  },
  {
    comune: 'Orte',
    provincia: Province.VT,
  },
  {
    comune: 'Piansano',
    provincia: Province.VT,
  },
  {
    comune: 'Proceno',
    provincia: Province.VT,
  },
  {
    comune: 'Ronciglione',
    provincia: Province.VT,
  },
  {
    comune: 'Villa San Giovanni in Tuscia',
    provincia: Province.VT,
  },
  {
    comune: 'San Lorenzo Nuovo',
    provincia: Province.VT,
  },
  {
    comune: 'Soriano nel Cimino',
    provincia: Province.VT,
  },
  {
    comune: 'Sutri',
    provincia: Province.VT,
  },
  {
    comune: 'Tarquinia',
    provincia: Province.VT,
  },
  {
    comune: 'Tessennano',
    provincia: Province.VT,
  },
  {
    comune: 'Tuscania',
    provincia: Province.VT,
  },
  {
    comune: 'Valentano',
    provincia: Province.VT,
  },
  {
    comune: 'Vallerano',
    provincia: Province.VT,
  },
  {
    comune: 'Vasanello',
    provincia: Province.VT,
  },
  {
    comune: 'Vejano',
    provincia: Province.VT,
  },
  {
    comune: 'Vetralla',
    provincia: Province.VT,
  },
  {
    comune: 'Vignanello',
    provincia: Province.VT,
  },
  {
    comune: 'Viterbo',
    provincia: Province.VT,
  },
  {
    comune: 'Vitorchiano',
    provincia: Province.VT,
  },
  {
    comune: 'Accumoli',
    provincia: Province.RI,
  },
  {
    comune: 'Amatrice',
    provincia: Province.RI,
  },
  {
    comune: 'Antrodoco',
    provincia: Province.RI,
  },
  {
    comune: 'Ascrea',
    provincia: Province.RI,
  },
  {
    comune: 'Belmonte in Sabina',
    provincia: Province.RI,
  },
  {
    comune: 'Borbona',
    provincia: Province.RI,
  },
  {
    comune: 'Borgorose',
    provincia: Province.RI,
  },
  {
    comune: 'Borgo Velino',
    provincia: Province.RI,
  },
  {
    comune: 'Cantalice',
    provincia: Province.RI,
  },
  {
    comune: 'Cantalupo in Sabina',
    provincia: Province.RI,
  },
  {
    comune: 'Casaprota',
    provincia: Province.RI,
  },
  {
    comune: 'Casperia',
    provincia: Province.RI,
  },
  {
    comune: 'Castel di Tora',
    provincia: Province.RI,
  },
  {
    comune: 'Castelnuovo di Farfa',
    provincia: Province.RI,
  },
  {
    comune: "Castel Sant'Angelo",
    provincia: Province.RI,
  },
  {
    comune: 'Cittaducale',
    provincia: Province.RI,
  },
  {
    comune: 'Cittareale',
    provincia: Province.RI,
  },
  {
    comune: 'Collalto Sabino',
    provincia: Province.RI,
  },
  {
    comune: 'Colle di Tora',
    provincia: Province.RI,
  },
  {
    comune: 'Collegiove',
    provincia: Province.RI,
  },
  {
    comune: 'Collevecchio',
    provincia: Province.RI,
  },
  {
    comune: 'Colli sul Velino',
    provincia: Province.RI,
  },
  {
    comune: 'Concerviano',
    provincia: Province.RI,
  },
  {
    comune: 'Configni',
    provincia: Province.RI,
  },
  {
    comune: 'Contigliano',
    provincia: Province.RI,
  },
  {
    comune: 'Cottanello',
    provincia: Province.RI,
  },
  {
    comune: 'Fara in Sabina',
    provincia: Province.RI,
  },
  {
    comune: 'Fiamignano',
    provincia: Province.RI,
  },
  {
    comune: 'Forano',
    provincia: Province.RI,
  },
  {
    comune: 'Frasso Sabino',
    provincia: Province.RI,
  },
  {
    comune: 'Greccio',
    provincia: Province.RI,
  },
  {
    comune: 'Labro',
    provincia: Province.RI,
  },
  {
    comune: 'Leonessa',
    provincia: Province.RI,
  },
  {
    comune: 'Longone Sabino',
    provincia: Province.RI,
  },
  {
    comune: 'Magliano Sabina',
    provincia: Province.RI,
  },
  {
    comune: 'Marcetelli',
    provincia: Province.RI,
  },
  {
    comune: 'Micigliano',
    provincia: Province.RI,
  },
  {
    comune: 'Mompeo',
    provincia: Province.RI,
  },
  {
    comune: 'Montasola',
    provincia: Province.RI,
  },
  {
    comune: 'Montebuono',
    provincia: Province.RI,
  },
  {
    comune: 'Monteleone Sabino',
    provincia: Province.RI,
  },
  {
    comune: 'Montenero Sabino',
    provincia: Province.RI,
  },
  {
    comune: 'Monte San Giovanni in Sabina',
    provincia: Province.RI,
  },
  {
    comune: 'Montopoli di Sabina',
    provincia: Province.RI,
  },
  {
    comune: 'Morro Reatino',
    provincia: Province.RI,
  },
  {
    comune: 'Nespolo',
    provincia: Province.RI,
  },
  {
    comune: 'Orvinio',
    provincia: Province.RI,
  },
  {
    comune: 'Paganico Sabino',
    provincia: Province.RI,
  },
  {
    comune: 'Pescorocchiano',
    provincia: Province.RI,
  },
  {
    comune: 'Petrella Salto',
    provincia: Province.RI,
  },
  {
    comune: 'Poggio Bustone',
    provincia: Province.RI,
  },
  {
    comune: 'Poggio Catino',
    provincia: Province.RI,
  },
  {
    comune: 'Poggio Mirteto',
    provincia: Province.RI,
  },
  {
    comune: 'Poggio Moiano',
    provincia: Province.RI,
  },
  {
    comune: 'Poggio Nativo',
    provincia: Province.RI,
  },
  {
    comune: 'Poggio San Lorenzo',
    provincia: Province.RI,
  },
  {
    comune: 'Posta',
    provincia: Province.RI,
  },
  {
    comune: 'Pozzaglia Sabina',
    provincia: Province.RI,
  },
  {
    comune: 'Rieti',
    provincia: Province.RI,
  },
  {
    comune: 'Rivodutri',
    provincia: Province.RI,
  },
  {
    comune: 'Roccantica',
    provincia: Province.RI,
  },
  {
    comune: 'Rocca Sinibalda',
    provincia: Province.RI,
  },
  {
    comune: 'Salisano',
    provincia: Province.RI,
  },
  {
    comune: 'Scandriglia',
    provincia: Province.RI,
  },
  {
    comune: 'Selci',
    provincia: Province.RI,
  },
  {
    comune: 'Stimigliano',
    provincia: Province.RI,
  },
  {
    comune: 'Tarano',
    provincia: Province.RI,
  },
  {
    comune: 'Toffia',
    provincia: Province.RI,
  },
  {
    comune: 'Torricella in Sabina',
    provincia: Province.RI,
  },
  {
    comune: 'Torri in Sabina',
    provincia: Province.RI,
  },
  {
    comune: 'Turania',
    provincia: Province.RI,
  },
  {
    comune: 'Vacone',
    provincia: Province.RI,
  },
  {
    comune: 'Varco Sabino',
    provincia: Province.RI,
  },
  {
    comune: 'Affile',
    provincia: Province.RM,
  },
  {
    comune: 'Agosta',
    provincia: Province.RM,
  },
  {
    comune: 'Albano Laziale',
    provincia: Province.RM,
  },
  {
    comune: 'Allumiere',
    provincia: Province.RM,
  },
  {
    comune: 'Anguillara Sabazia',
    provincia: Province.RM,
  },
  {
    comune: 'Anticoli Corrado',
    provincia: Province.RM,
  },
  {
    comune: 'Anzio',
    provincia: Province.RM,
  },
  {
    comune: 'Arcinazzo Romano',
    provincia: Province.RM,
  },
  {
    comune: 'Ariccia',
    provincia: Province.RM,
  },
  {
    comune: 'Arsoli',
    provincia: Province.RM,
  },
  {
    comune: 'Artena',
    provincia: Province.RM,
  },
  {
    comune: 'Bellegra',
    provincia: Province.RM,
  },
  {
    comune: 'Bracciano',
    provincia: Province.RM,
  },
  {
    comune: 'Camerata Nuova',
    provincia: Province.RM,
  },
  {
    comune: 'Campagnano di Roma',
    provincia: Province.RM,
  },
  {
    comune: 'Canale Monterano',
    provincia: Province.RM,
  },
  {
    comune: 'Canterano',
    provincia: Province.RM,
  },
  {
    comune: 'Capena',
    provincia: Province.RM,
  },
  {
    comune: 'Capranica Prenestina',
    provincia: Province.RM,
  },
  {
    comune: 'Carpineto Romano',
    provincia: Province.RM,
  },
  {
    comune: 'Casape',
    provincia: Province.RM,
  },
  {
    comune: 'Castel Gandolfo',
    provincia: Province.RM,
  },
  {
    comune: 'Castel Madama',
    provincia: Province.RM,
  },
  {
    comune: 'Castelnuovo di Porto',
    provincia: Province.RM,
  },
  {
    comune: 'Castel San Pietro Romano',
    provincia: Province.RM,
  },
  {
    comune: 'Cave',
    provincia: Province.RM,
  },
  {
    comune: 'Cerreto Laziale',
    provincia: Province.RM,
  },
  {
    comune: 'Cervara di Roma',
    provincia: Province.RM,
  },
  {
    comune: 'Cerveteri',
    provincia: Province.RM,
  },
  {
    comune: 'Ciciliano',
    provincia: Province.RM,
  },
  {
    comune: 'Cineto Romano',
    provincia: Province.RM,
  },
  {
    comune: 'Civitavecchia',
    provincia: Province.RM,
  },
  {
    comune: 'Civitella San Paolo',
    provincia: Province.RM,
  },
  {
    comune: 'Colleferro',
    provincia: Province.RM,
  },
  {
    comune: 'Colonna',
    provincia: Province.RM,
  },
  {
    comune: 'Fiano Romano',
    provincia: Province.RM,
  },
  {
    comune: 'Filacciano',
    provincia: Province.RM,
  },
  {
    comune: 'Formello',
    provincia: Province.RM,
  },
  {
    comune: 'Frascati',
    provincia: Province.RM,
  },
  {
    comune: 'Gallicano nel Lazio',
    provincia: Province.RM,
  },
  {
    comune: 'Gavignano',
    provincia: Province.RM,
  },
  {
    comune: 'Genazzano',
    provincia: Province.RM,
  },
  {
    comune: 'Genzano di Roma',
    provincia: Province.RM,
  },
  {
    comune: 'Gerano',
    provincia: Province.RM,
  },
  {
    comune: 'Gorga',
    provincia: Province.RM,
  },
  {
    comune: 'Grottaferrata',
    provincia: Province.RM,
  },
  {
    comune: 'Guidonia Montecelio',
    provincia: Province.RM,
  },
  {
    comune: 'Jenne',
    provincia: Province.RM,
  },
  {
    comune: 'Labico',
    provincia: Province.RM,
  },
  {
    comune: 'Lanuvio',
    provincia: Province.RM,
  },
  {
    comune: 'Licenza',
    provincia: Province.RM,
  },
  {
    comune: 'Magliano Romano',
    provincia: Province.RM,
  },
  {
    comune: 'Mandela',
    provincia: Province.RM,
  },
  {
    comune: 'Manziana',
    provincia: Province.RM,
  },
  {
    comune: 'Marano Equo',
    provincia: Province.RM,
  },
  {
    comune: 'Marcellina',
    provincia: Province.RM,
  },
  {
    comune: 'Marino',
    provincia: Province.RM,
  },
  {
    comune: 'Mazzano Romano',
    provincia: Province.RM,
  },
  {
    comune: 'Mentana',
    provincia: Province.RM,
  },
  {
    comune: 'Monte Compatri',
    provincia: Province.RM,
  },
  {
    comune: 'Monteflavio',
    provincia: Province.RM,
  },
  {
    comune: 'Montelanico',
    provincia: Province.RM,
  },
  {
    comune: 'Montelibretti',
    provincia: Province.RM,
  },
  {
    comune: 'Monte Porzio Catone',
    provincia: Province.RM,
  },
  {
    comune: 'Monterotondo',
    provincia: Province.RM,
  },
  {
    comune: 'Montorio Romano',
    provincia: Province.RM,
  },
  {
    comune: 'Moricone',
    provincia: Province.RM,
  },
  {
    comune: 'Morlupo',
    provincia: Province.RM,
  },
  {
    comune: 'Nazzano',
    provincia: Province.RM,
  },
  {
    comune: 'Nemi',
    provincia: Province.RM,
  },
  {
    comune: 'Nerola',
    provincia: Province.RM,
  },
  {
    comune: 'Nettuno',
    provincia: Province.RM,
  },
  {
    comune: 'Olevano Romano',
    provincia: Province.RM,
  },
  {
    comune: 'Palestrina',
    provincia: Province.RM,
  },
  {
    comune: 'Palombara Sabina',
    provincia: Province.RM,
  },
  {
    comune: 'Percile',
    provincia: Province.RM,
  },
  {
    comune: 'Pisoniano',
    provincia: Province.RM,
  },
  {
    comune: 'Poli',
    provincia: Province.RM,
  },
  {
    comune: 'Pomezia',
    provincia: Province.RM,
  },
  {
    comune: 'Ponzano Romano',
    provincia: Province.RM,
  },
  {
    comune: 'Riano',
    provincia: Province.RM,
  },
  {
    comune: 'Rignano Flaminio',
    provincia: Province.RM,
  },
  {
    comune: 'Riofreddo',
    provincia: Province.RM,
  },
  {
    comune: 'Rocca Canterano',
    provincia: Province.RM,
  },
  {
    comune: 'Rocca di Cave',
    provincia: Province.RM,
  },
  {
    comune: 'Rocca di Papa',
    provincia: Province.RM,
  },
  {
    comune: 'Roccagiovine',
    provincia: Province.RM,
  },
  {
    comune: 'Rocca Priora',
    provincia: Province.RM,
  },
  {
    comune: 'Rocca Santo Stefano',
    provincia: Province.RM,
  },
  {
    comune: 'Roiate',
    provincia: Province.RM,
  },
  {
    comune: 'Roma',
    provincia: Province.RM,
  },
  {
    comune: 'Roviano',
    provincia: Province.RM,
  },
  {
    comune: 'Sacrofano',
    provincia: Province.RM,
  },
  {
    comune: 'Sambuci',
    provincia: Province.RM,
  },
  {
    comune: 'San Gregorio da Sassola',
    provincia: Province.RM,
  },
  {
    comune: 'San Polo dei Cavalieri',
    provincia: Province.RM,
  },
  {
    comune: 'Santa Marinella',
    provincia: Province.RM,
  },
  {
    comune: "Sant'Angelo Romano",
    provincia: Province.RM,
  },
  {
    comune: "Sant'Oreste",
    provincia: Province.RM,
  },
  {
    comune: 'San Vito Romano',
    provincia: Province.RM,
  },
  {
    comune: 'Saracinesco',
    provincia: Province.RM,
  },
  {
    comune: 'Segni',
    provincia: Province.RM,
  },
  {
    comune: 'Subiaco',
    provincia: Province.RM,
  },
  {
    comune: 'Tivoli',
    provincia: Province.RM,
  },
  {
    comune: 'Tolfa',
    provincia: Province.RM,
  },
  {
    comune: 'Torrita Tiberina',
    provincia: Province.RM,
  },
  {
    comune: 'Trevignano Romano',
    provincia: Province.RM,
  },
  {
    comune: 'Vallepietra',
    provincia: Province.RM,
  },
  {
    comune: 'Vallinfreda',
    provincia: Province.RM,
  },
  {
    comune: 'Valmontone',
    provincia: Province.RM,
  },
  {
    comune: 'Velletri',
    provincia: Province.RM,
  },
  {
    comune: 'Vicovaro',
    provincia: Province.RM,
  },
  {
    comune: 'Vivaro Romano',
    provincia: Province.RM,
  },
  {
    comune: 'Zagarolo',
    provincia: Province.RM,
  },
  {
    comune: 'Lariano',
    provincia: Province.RM,
  },
  {
    comune: 'Ladispoli',
    provincia: Province.RM,
  },
  {
    comune: 'Ardea',
    provincia: Province.RM,
  },
  {
    comune: 'Ciampino',
    provincia: Province.RM,
  },
  {
    comune: 'San Cesareo',
    provincia: Province.RM,
  },
  {
    comune: 'Fiumicino',
    provincia: Province.RM,
  },
  {
    comune: 'Fonte Nuova',
    provincia: Province.RM,
  },
  {
    comune: 'Aprilia',
    provincia: Province.LT,
  },
  {
    comune: 'Bassiano',
    provincia: Province.LT,
  },
  {
    comune: 'Campodimele',
    provincia: Province.LT,
  },
  {
    comune: 'Castelforte',
    provincia: Province.LT,
  },
  {
    comune: 'Cisterna di Latina',
    provincia: Province.LT,
  },
  {
    comune: 'Cori',
    provincia: Province.LT,
  },
  {
    comune: 'Fondi',
    provincia: Province.LT,
  },
  {
    comune: 'Formia',
    provincia: Province.LT,
  },
  {
    comune: 'Gaeta',
    provincia: Province.LT,
  },
  {
    comune: 'Itri',
    provincia: Province.LT,
  },
  {
    comune: 'Latina',
    provincia: Province.LT,
  },
  {
    comune: 'Lenola',
    provincia: Province.LT,
  },
  {
    comune: 'Maenza',
    provincia: Province.LT,
  },
  {
    comune: 'Minturno',
    provincia: Province.LT,
  },
  {
    comune: 'Monte San Biagio',
    provincia: Province.LT,
  },
  {
    comune: 'Norma',
    provincia: Province.LT,
  },
  {
    comune: 'Pontinia',
    provincia: Province.LT,
  },
  {
    comune: 'Ponza',
    provincia: Province.LT,
  },
  {
    comune: 'Priverno',
    provincia: Province.LT,
  },
  {
    comune: 'Prossedi',
    provincia: Province.LT,
  },
  {
    comune: 'Roccagorga',
    provincia: Province.LT,
  },
  {
    comune: 'Rocca Massima',
    provincia: Province.LT,
  },
  {
    comune: 'Roccasecca dei Volsci',
    provincia: Province.LT,
  },
  {
    comune: 'Sabaudia',
    provincia: Province.LT,
  },
  {
    comune: 'San Felice Circeo',
    provincia: Province.LT,
  },
  {
    comune: 'Santi Cosma e Damiano',
    provincia: Province.LT,
  },
  {
    comune: 'Sermoneta',
    provincia: Province.LT,
  },
  {
    comune: 'Sezze',
    provincia: Province.LT,
  },
  {
    comune: 'Sonnino',
    provincia: Province.LT,
  },
  {
    comune: 'Sperlonga',
    provincia: Province.LT,
  },
  {
    comune: 'Spigno Saturnia',
    provincia: Province.LT,
  },
  {
    comune: 'Terracina',
    provincia: Province.LT,
  },
  {
    comune: 'Ventotene',
    provincia: Province.LT,
  },
  {
    comune: 'Acquafondata',
    provincia: Province.FR,
  },
  {
    comune: 'Acuto',
    provincia: Province.FR,
  },
  {
    comune: 'Alatri',
    provincia: Province.FR,
  },
  {
    comune: 'Alvito',
    provincia: Province.FR,
  },
  {
    comune: 'Amaseno',
    provincia: Province.FR,
  },
  {
    comune: 'Anagni',
    provincia: Province.FR,
  },
  {
    comune: 'Aquino',
    provincia: Province.FR,
  },
  {
    comune: 'Arce',
    provincia: Province.FR,
  },
  {
    comune: 'Arnara',
    provincia: Province.FR,
  },
  {
    comune: 'Arpino',
    provincia: Province.FR,
  },
  {
    comune: 'Atina',
    provincia: Province.FR,
  },
  {
    comune: 'Ausonia',
    provincia: Province.FR,
  },
  {
    comune: 'Belmonte Castello',
    provincia: Province.FR,
  },
  {
    comune: 'Boville Ernica',
    provincia: Province.FR,
  },
  {
    comune: 'Broccostella',
    provincia: Province.FR,
  },
  {
    comune: 'Campoli Appennino',
    provincia: Province.FR,
  },
  {
    comune: 'Casalattico',
    provincia: Province.FR,
  },
  {
    comune: 'Casalvieri',
    provincia: Province.FR,
  },
  {
    comune: 'Cassino',
    provincia: Province.FR,
  },
  {
    comune: 'Castelliri',
    provincia: Province.FR,
  },
  {
    comune: 'Castelnuovo Parano',
    provincia: Province.FR,
  },
  {
    comune: 'Castrocielo',
    provincia: Province.FR,
  },
  {
    comune: 'Castro dei Volsci',
    provincia: Province.FR,
  },
  {
    comune: 'Ceccano',
    provincia: Province.FR,
  },
  {
    comune: 'Ceprano',
    provincia: Province.FR,
  },
  {
    comune: 'Cervaro',
    provincia: Province.FR,
  },
  {
    comune: 'Colfelice',
    provincia: Province.FR,
  },
  {
    comune: 'Collepardo',
    provincia: Province.FR,
  },
  {
    comune: 'Colle San Magno',
    provincia: Province.FR,
  },
  {
    comune: 'Coreno Ausonio',
    provincia: Province.FR,
  },
  {
    comune: 'Esperia',
    provincia: Province.FR,
  },
  {
    comune: 'Falvaterra',
    provincia: Province.FR,
  },
  {
    comune: 'Ferentino',
    provincia: Province.FR,
  },
  {
    comune: 'Filettino',
    provincia: Province.FR,
  },
  {
    comune: 'Fiuggi',
    provincia: Province.FR,
  },
  {
    comune: 'Fontana Liri',
    provincia: Province.FR,
  },
  {
    comune: 'Fontechiari',
    provincia: Province.FR,
  },
  {
    comune: 'Frosinone',
    provincia: Province.FR,
  },
  {
    comune: 'Fumone',
    provincia: Province.FR,
  },
  {
    comune: 'Gallinaro',
    provincia: Province.FR,
  },
  {
    comune: 'Giuliano di Roma',
    provincia: Province.FR,
  },
  {
    comune: 'Guarcino',
    provincia: Province.FR,
  },
  {
    comune: 'Isola del Liri',
    provincia: Province.FR,
  },
  {
    comune: 'Monte San Giovanni Campano',
    provincia: Province.FR,
  },
  {
    comune: 'Morolo',
    provincia: Province.FR,
  },
  {
    comune: 'Paliano',
    provincia: Province.FR,
  },
  {
    comune: 'Pastena',
    provincia: Province.FR,
  },
  {
    comune: 'Patrica',
    provincia: Province.FR,
  },
  {
    comune: 'Pescosolido',
    provincia: Province.FR,
  },
  {
    comune: 'Picinisco',
    provincia: Province.FR,
  },
  {
    comune: 'Pico',
    provincia: Province.FR,
  },
  {
    comune: 'Piedimonte San Germano',
    provincia: Province.FR,
  },
  {
    comune: 'Piglio',
    provincia: Province.FR,
  },
  {
    comune: 'Pignataro Interamna',
    provincia: Province.FR,
  },
  {
    comune: 'Pofi',
    provincia: Province.FR,
  },
  {
    comune: 'Pontecorvo',
    provincia: Province.FR,
  },
  {
    comune: 'Posta Fibreno',
    provincia: Province.FR,
  },
  {
    comune: 'Ripi',
    provincia: Province.FR,
  },
  {
    comune: "Rocca d'Arce",
    provincia: Province.FR,
  },
  {
    comune: 'Roccasecca',
    provincia: Province.FR,
  },
  {
    comune: 'San Biagio Saracinisco',
    provincia: Province.FR,
  },
  {
    comune: 'San Donato Val di Comino',
    provincia: Province.FR,
  },
  {
    comune: 'San Giorgio a Liri',
    provincia: Province.FR,
  },
  {
    comune: 'San Giovanni Incarico',
    provincia: Province.FR,
  },
  {
    comune: "Sant'Ambrogio sul Garigliano",
    provincia: Province.FR,
  },
  {
    comune: "Sant'Andrea del Garigliano",
    provincia: Province.FR,
  },
  {
    comune: "Sant'Apollinare",
    provincia: Province.FR,
  },
  {
    comune: "Sant'Elia Fiumerapido",
    provincia: Province.FR,
  },
  {
    comune: 'Santopadre',
    provincia: Province.FR,
  },
  {
    comune: 'San Vittore del Lazio',
    provincia: Province.FR,
  },
  {
    comune: 'Serrone',
    provincia: Province.FR,
  },
  {
    comune: 'Settefrati',
    provincia: Province.FR,
  },
  {
    comune: 'Sgurgola',
    provincia: Province.FR,
  },
  {
    comune: 'Sora',
    provincia: Province.FR,
  },
  {
    comune: 'Strangolagalli',
    provincia: Province.FR,
  },
  {
    comune: 'Supino',
    provincia: Province.FR,
  },
  {
    comune: 'Terelle',
    provincia: Province.FR,
  },
  {
    comune: 'Torre Cajetani',
    provincia: Province.FR,
  },
  {
    comune: 'Torrice',
    provincia: Province.FR,
  },
  {
    comune: 'Trevi nel Lazio',
    provincia: Province.FR,
  },
  {
    comune: 'Trivigliano',
    provincia: Province.FR,
  },
  {
    comune: 'Vallecorsa',
    provincia: Province.FR,
  },
  {
    comune: 'Vallemaio',
    provincia: Province.FR,
  },
  {
    comune: 'Vallerotonda',
    provincia: Province.FR,
  },
  {
    comune: 'Veroli',
    provincia: Province.FR,
  },
  {
    comune: 'Vicalvi',
    provincia: Province.FR,
  },
  {
    comune: 'Vico nel Lazio',
    provincia: Province.FR,
  },
  {
    comune: 'Villa Latina',
    provincia: Province.FR,
  },
  {
    comune: 'Villa Santa Lucia',
    provincia: Province.FR,
  },
  {
    comune: 'Villa Santo Stefano',
    provincia: Province.FR,
  },
  {
    comune: 'Viticuso',
    provincia: Province.FR,
  },
  {
    comune: 'Acciano',
    provincia: Province.AQ,
  },
  {
    comune: 'Aielli',
    provincia: Province.AQ,
  },
  {
    comune: 'Alfedena',
    provincia: Province.AQ,
  },
  {
    comune: 'Anversa degli Abruzzi',
    provincia: Province.AQ,
  },
  {
    comune: 'Ateleta',
    provincia: Province.AQ,
  },
  {
    comune: 'Avezzano',
    provincia: Province.AQ,
  },
  {
    comune: 'Balsorano',
    provincia: Province.AQ,
  },
  {
    comune: 'Barete',
    provincia: Province.AQ,
  },
  {
    comune: 'Barisciano',
    provincia: Province.AQ,
  },
  {
    comune: 'Barrea',
    provincia: Province.AQ,
  },
  {
    comune: 'Bisegna',
    provincia: Province.AQ,
  },
  {
    comune: 'Bugnara',
    provincia: Province.AQ,
  },
  {
    comune: 'Cagnano Amiterno',
    provincia: Province.AQ,
  },
  {
    comune: 'Calascio',
    provincia: Province.AQ,
  },
  {
    comune: 'Campo di Giove',
    provincia: Province.AQ,
  },
  {
    comune: 'Campotosto',
    provincia: Province.AQ,
  },
  {
    comune: 'Canistro',
    provincia: Province.AQ,
  },
  {
    comune: 'Cansano',
    provincia: Province.AQ,
  },
  {
    comune: 'Capestrano',
    provincia: Province.AQ,
  },
  {
    comune: 'Capistrello',
    provincia: Province.AQ,
  },
  {
    comune: 'Capitignano',
    provincia: Province.AQ,
  },
  {
    comune: 'Caporciano',
    provincia: Province.AQ,
  },
  {
    comune: 'Cappadocia',
    provincia: Province.AQ,
  },
  {
    comune: 'Carapelle Calvisio',
    provincia: Province.AQ,
  },
  {
    comune: 'Carsoli',
    provincia: Province.AQ,
  },
  {
    comune: 'Castel del Monte',
    provincia: Province.AQ,
  },
  {
    comune: 'Castel di Ieri',
    provincia: Province.AQ,
  },
  {
    comune: 'Castel di Sangro',
    provincia: Province.AQ,
  },
  {
    comune: 'Castellafiume',
    provincia: Province.AQ,
  },
  {
    comune: 'Castelvecchio Calvisio',
    provincia: Province.AQ,
  },
  {
    comune: 'Castelvecchio Subequo',
    provincia: Province.AQ,
  },
  {
    comune: 'Celano',
    provincia: Province.AQ,
  },
  {
    comune: 'Cerchio',
    provincia: Province.AQ,
  },
  {
    comune: "Civita d'Antino",
    provincia: Province.AQ,
  },
  {
    comune: 'Civitella Alfedena',
    provincia: Province.AQ,
  },
  {
    comune: 'Civitella Roveto',
    provincia: Province.AQ,
  },
  {
    comune: 'Cocullo',
    provincia: Province.AQ,
  },
  {
    comune: 'Collarmele',
    provincia: Province.AQ,
  },
  {
    comune: 'Collelongo',
    provincia: Province.AQ,
  },
  {
    comune: 'Collepietro',
    provincia: Province.AQ,
  },
  {
    comune: 'Corfinio',
    provincia: Province.AQ,
  },
  {
    comune: 'Fagnano Alto',
    provincia: Province.AQ,
  },
  {
    comune: 'Fontecchio',
    provincia: Province.AQ,
  },
  {
    comune: 'Fossa',
    provincia: Province.AQ,
  },
  {
    comune: 'Gagliano Aterno',
    provincia: Province.AQ,
  },
  {
    comune: 'Gioia dei Marsi',
    provincia: Province.AQ,
  },
  {
    comune: 'Goriano Sicoli',
    provincia: Province.AQ,
  },
  {
    comune: 'Introdacqua',
    provincia: Province.AQ,
  },
  {
    comune: "L'Aquila",
    provincia: Province.AQ,
  },
  {
    comune: 'Lecce nei Marsi',
    provincia: Province.AQ,
  },
  {
    comune: 'Luco dei Marsi',
    provincia: Province.AQ,
  },
  {
    comune: 'Lucoli',
    provincia: Province.AQ,
  },
  {
    comune: "Magliano de' Marsi",
    provincia: Province.AQ,
  },
  {
    comune: "Massa d'Albe",
    provincia: Province.AQ,
  },
  {
    comune: 'Molina Aterno',
    provincia: Province.AQ,
  },
  {
    comune: 'Montereale',
    provincia: Province.AQ,
  },
  {
    comune: 'Morino',
    provincia: Province.AQ,
  },
  {
    comune: 'Navelli',
    provincia: Province.AQ,
  },
  {
    comune: 'Ocre',
    provincia: Province.AQ,
  },
  {
    comune: 'Ofena',
    provincia: Province.AQ,
  },
  {
    comune: 'Opi',
    provincia: Province.AQ,
  },
  {
    comune: 'Oricola',
    provincia: Province.AQ,
  },
  {
    comune: 'Ortona dei Marsi',
    provincia: Province.AQ,
  },
  {
    comune: 'Ortucchio',
    provincia: Province.AQ,
  },
  {
    comune: 'Ovindoli',
    provincia: Province.AQ,
  },
  {
    comune: 'Pacentro',
    provincia: Province.AQ,
  },
  {
    comune: 'Pereto',
    provincia: Province.AQ,
  },
  {
    comune: 'Pescasseroli',
    provincia: Province.AQ,
  },
  {
    comune: 'Pescina',
    provincia: Province.AQ,
  },
  {
    comune: 'Pescocostanzo',
    provincia: Province.AQ,
  },
  {
    comune: 'Pettorano sul Gizio',
    provincia: Province.AQ,
  },
  {
    comune: 'Pizzoli',
    provincia: Province.AQ,
  },
  {
    comune: 'Poggio Picenze',
    provincia: Province.AQ,
  },
  {
    comune: "Prata d'Ansidonia",
    provincia: Province.AQ,
  },
  {
    comune: 'Pratola Peligna',
    provincia: Province.AQ,
  },
  {
    comune: 'Prezza',
    provincia: Province.AQ,
  },
  {
    comune: 'Raiano',
    provincia: Province.AQ,
  },
  {
    comune: 'Rivisondoli',
    provincia: Province.AQ,
  },
  {
    comune: 'Roccacasale',
    provincia: Province.AQ,
  },
  {
    comune: 'Rocca di Botte',
    provincia: Province.AQ,
  },
  {
    comune: 'Rocca di Cambio',
    provincia: Province.AQ,
  },
  {
    comune: 'Rocca di Mezzo',
    provincia: Province.AQ,
  },
  {
    comune: 'Rocca Pia',
    provincia: Province.AQ,
  },
  {
    comune: 'Roccaraso',
    provincia: Province.AQ,
  },
  {
    comune: 'San Benedetto dei Marsi',
    provincia: Province.AQ,
  },
  {
    comune: 'San Benedetto in Perillis',
    provincia: Province.AQ,
  },
  {
    comune: "San Demetrio ne' Vestini",
    provincia: Province.AQ,
  },
  {
    comune: 'San Pio delle Camere',
    provincia: Province.AQ,
  },
  {
    comune: 'Sante Marie',
    provincia: Province.AQ,
  },
  {
    comune: "Sant'Eusanio Forconese",
    provincia: Province.AQ,
  },
  {
    comune: 'Santo Stefano di Sessanio',
    provincia: Province.AQ,
  },
  {
    comune: 'San Vincenzo Valle Roveto',
    provincia: Province.AQ,
  },
  {
    comune: 'Scanno',
    provincia: Province.AQ,
  },
  {
    comune: 'Scontrone',
    provincia: Province.AQ,
  },
  {
    comune: 'Scoppito',
    provincia: Province.AQ,
  },
  {
    comune: 'Scurcola Marsicana',
    provincia: Province.AQ,
  },
  {
    comune: 'Secinaro',
    provincia: Province.AQ,
  },
  {
    comune: 'Sulmona',
    provincia: Province.AQ,
  },
  {
    comune: 'Tagliacozzo',
    provincia: Province.AQ,
  },
  {
    comune: 'Tione degli Abruzzi',
    provincia: Province.AQ,
  },
  {
    comune: 'Tornimparte',
    provincia: Province.AQ,
  },
  {
    comune: 'Trasacco',
    provincia: Province.AQ,
  },
  {
    comune: 'Villalago',
    provincia: Province.AQ,
  },
  {
    comune: 'Villa Santa Lucia degli Abruzzi',
    provincia: Province.AQ,
  },
  {
    comune: "Villa Sant'Angelo",
    provincia: Province.AQ,
  },
  {
    comune: 'Villavallelonga',
    provincia: Province.AQ,
  },
  {
    comune: 'Villetta Barrea',
    provincia: Province.AQ,
  },
  {
    comune: 'Vittorito',
    provincia: Province.AQ,
  },
  {
    comune: 'Alba Adriatica',
    provincia: Province.TE,
  },
  {
    comune: 'Ancarano',
    provincia: Province.TE,
  },
  {
    comune: 'Arsita',
    provincia: Province.TE,
  },
  {
    comune: 'Atri',
    provincia: Province.TE,
  },
  {
    comune: 'Basciano',
    provincia: Province.TE,
  },
  {
    comune: 'Bellante',
    provincia: Province.TE,
  },
  {
    comune: 'Bisenti',
    provincia: Province.TE,
  },
  {
    comune: 'Campli',
    provincia: Province.TE,
  },
  {
    comune: 'Canzano',
    provincia: Province.TE,
  },
  {
    comune: 'Castel Castagna',
    provincia: Province.TE,
  },
  {
    comune: 'Castellalto',
    provincia: Province.TE,
  },
  {
    comune: 'Castelli',
    provincia: Province.TE,
  },
  {
    comune: 'Castiglione Messer Raimondo',
    provincia: Province.TE,
  },
  {
    comune: 'Castilenti',
    provincia: Province.TE,
  },
  {
    comune: 'Cellino Attanasio',
    provincia: Province.TE,
  },
  {
    comune: 'Cermignano',
    provincia: Province.TE,
  },
  {
    comune: 'Civitella del Tronto',
    provincia: Province.TE,
  },
  {
    comune: 'Colledara',
    provincia: Province.TE,
  },
  {
    comune: 'Colonnella',
    provincia: Province.TE,
  },
  {
    comune: 'Controguerra',
    provincia: Province.TE,
  },
  {
    comune: 'Corropoli',
    provincia: Province.TE,
  },
  {
    comune: 'Cortino',
    provincia: Province.TE,
  },
  {
    comune: 'Crognaleto',
    provincia: Province.TE,
  },
  {
    comune: 'Fano Adriano',
    provincia: Province.TE,
  },
  {
    comune: 'Giulianova',
    provincia: Province.TE,
  },
  {
    comune: "Isola del Gran Sasso d'Italia",
    provincia: Province.TE,
  },
  {
    comune: 'Montefino',
    provincia: Province.TE,
  },
  {
    comune: 'Montorio al Vomano',
    provincia: Province.TE,
  },
  {
    comune: "Morro d'Oro",
    provincia: Province.TE,
  },
  {
    comune: "Mosciano Sant'Angelo",
    provincia: Province.TE,
  },
  {
    comune: 'Nereto',
    provincia: Province.TE,
  },
  {
    comune: 'Notaresco',
    provincia: Province.TE,
  },
  {
    comune: "Penna Sant'Andrea",
    provincia: Province.TE,
  },
  {
    comune: 'Pietracamela',
    provincia: Province.TE,
  },
  {
    comune: 'Pineto',
    provincia: Province.TE,
  },
  {
    comune: 'Rocca Santa Maria',
    provincia: Province.TE,
  },
  {
    comune: 'Roseto degli Abruzzi',
    provincia: Province.TE,
  },
  {
    comune: "Sant'Egidio alla Vibrata",
    provincia: Province.TE,
  },
  {
    comune: "Sant'Omero",
    provincia: Province.TE,
  },
  {
    comune: 'Silvi',
    provincia: Province.TE,
  },
  {
    comune: 'Teramo',
    provincia: Province.TE,
  },
  {
    comune: 'Torano Nuovo',
    provincia: Province.TE,
  },
  {
    comune: 'Torricella Sicura',
    provincia: Province.TE,
  },
  {
    comune: 'Tortoreto',
    provincia: Province.TE,
  },
  {
    comune: 'Tossicia',
    provincia: Province.TE,
  },
  {
    comune: 'Valle Castellana',
    provincia: Province.TE,
  },
  {
    comune: 'Martinsicuro',
    provincia: Province.TE,
  },
  {
    comune: 'Abbateggio',
    provincia: Province.PE,
  },
  {
    comune: 'Alanno',
    provincia: Province.PE,
  },
  {
    comune: 'Bolognano',
    provincia: Province.PE,
  },
  {
    comune: 'Brittoli',
    provincia: Province.PE,
  },
  {
    comune: 'Bussi sul Tirino',
    provincia: Province.PE,
  },
  {
    comune: 'Cappelle sul Tavo',
    provincia: Province.PE,
  },
  {
    comune: 'Caramanico Terme',
    provincia: Province.PE,
  },
  {
    comune: 'Carpineto della Nora',
    provincia: Province.PE,
  },
  {
    comune: 'Castiglione a Casauria',
    provincia: Province.PE,
  },
  {
    comune: 'Catignano',
    provincia: Province.PE,
  },
  {
    comune: 'Cepagatti',
    provincia: Province.PE,
  },
  {
    comune: "Città Sant'Angelo",
    provincia: Province.PE,
  },
  {
    comune: 'Civitaquana',
    provincia: Province.PE,
  },
  {
    comune: 'Civitella Casanova',
    provincia: Province.PE,
  },
  {
    comune: 'Collecorvino',
    provincia: Province.PE,
  },
  {
    comune: 'Corvara',
    provincia: Province.PE,
  },
  {
    comune: 'Cugnoli',
    provincia: Province.PE,
  },
  {
    comune: 'Elice',
    provincia: Province.PE,
  },
  {
    comune: 'Farindola',
    provincia: Province.PE,
  },
  {
    comune: 'Lettomanoppello',
    provincia: Province.PE,
  },
  {
    comune: 'Loreto Aprutino',
    provincia: Province.PE,
  },
  {
    comune: 'Manoppello',
    provincia: Province.PE,
  },
  {
    comune: 'Montebello di Bertona',
    provincia: Province.PE,
  },
  {
    comune: 'Montesilvano',
    provincia: Province.PE,
  },
  {
    comune: 'Moscufo',
    provincia: Province.PE,
  },
  {
    comune: 'Nocciano',
    provincia: Province.PE,
  },
  {
    comune: 'Penne',
    provincia: Province.PE,
  },
  {
    comune: 'Pescara',
    provincia: Province.PE,
  },
  {
    comune: 'Pescosansonesco',
    provincia: Province.PE,
  },
  {
    comune: 'Pianella',
    provincia: Province.PE,
  },
  {
    comune: 'Picciano',
    provincia: Province.PE,
  },
  {
    comune: 'Pietranico',
    provincia: Province.PE,
  },
  {
    comune: 'Popoli',
    provincia: Province.PE,
  },
  {
    comune: 'Roccamorice',
    provincia: Province.PE,
  },
  {
    comune: 'Rosciano',
    provincia: Province.PE,
  },
  {
    comune: 'Salle',
    provincia: Province.PE,
  },
  {
    comune: "Sant'Eufemia a Maiella",
    provincia: Province.PE,
  },
  {
    comune: 'San Valentino in Abruzzo Citeriore',
    provincia: Province.PE,
  },
  {
    comune: 'Scafa',
    provincia: Province.PE,
  },
  {
    comune: 'Serramonacesca',
    provincia: Province.PE,
  },
  {
    comune: 'Spoltore',
    provincia: Province.PE,
  },
  {
    comune: 'Tocco da Casauria',
    provincia: Province.PE,
  },
  {
    comune: "Torre de' Passeri",
    provincia: Province.PE,
  },
  {
    comune: 'Turrivalignani',
    provincia: Province.PE,
  },
  {
    comune: 'Vicoli',
    provincia: Province.PE,
  },
  {
    comune: 'Villa Celiera',
    provincia: Province.PE,
  },
  {
    comune: 'Altino',
    provincia: Province.CH,
  },
  {
    comune: 'Archi',
    provincia: Province.CH,
  },
  {
    comune: 'Ari',
    provincia: Province.CH,
  },
  {
    comune: 'Arielli',
    provincia: Province.CH,
  },
  {
    comune: 'Atessa',
    provincia: Province.CH,
  },
  {
    comune: 'Bomba',
    provincia: Province.CH,
  },
  {
    comune: 'Borrello',
    provincia: Province.CH,
  },
  {
    comune: 'Bucchianico',
    provincia: Province.CH,
  },
  {
    comune: 'Montebello sul Sangro',
    provincia: Province.CH,
  },
  {
    comune: 'Canosa Sannita',
    provincia: Province.CH,
  },
  {
    comune: 'Carpineto Sinello',
    provincia: Province.CH,
  },
  {
    comune: 'Carunchio',
    provincia: Province.CH,
  },
  {
    comune: 'Casacanditella',
    provincia: Province.CH,
  },
  {
    comune: 'Casalanguida',
    provincia: Province.CH,
  },
  {
    comune: 'Casalbordino',
    provincia: Province.CH,
  },
  {
    comune: 'Casalincontrada',
    provincia: Province.CH,
  },
  {
    comune: 'Casoli',
    provincia: Province.CH,
  },
  {
    comune: 'Castel Frentano',
    provincia: Province.CH,
  },
  {
    comune: 'Castelguidone',
    provincia: Province.CH,
  },
  {
    comune: 'Castiglione Messer Marino',
    provincia: Province.CH,
  },
  {
    comune: 'Celenza sul Trigno',
    provincia: Province.CH,
  },
  {
    comune: 'Chieti',
    provincia: Province.CH,
  },
  {
    comune: 'Civitaluparella',
    provincia: Province.CH,
  },
  {
    comune: 'Civitella Messer Raimondo',
    provincia: Province.CH,
  },
  {
    comune: 'Colledimacine',
    provincia: Province.CH,
  },
  {
    comune: 'Colledimezzo',
    provincia: Province.CH,
  },
  {
    comune: 'Crecchio',
    provincia: Province.CH,
  },
  {
    comune: 'Cupello',
    provincia: Province.CH,
  },
  {
    comune: 'Dogliola',
    provincia: Province.CH,
  },
  {
    comune: 'Fara Filiorum Petri',
    provincia: Province.CH,
  },
  {
    comune: 'Fara San Martino',
    provincia: Province.CH,
  },
  {
    comune: 'Filetto',
    provincia: Province.CH,
  },
  {
    comune: 'Fossacesia',
    provincia: Province.CH,
  },
  {
    comune: 'Fraine',
    provincia: Province.CH,
  },
  {
    comune: 'Francavilla al Mare',
    provincia: Province.CH,
  },
  {
    comune: 'Fresagrandinaria',
    provincia: Province.CH,
  },
  {
    comune: 'Frisa',
    provincia: Province.CH,
  },
  {
    comune: 'Furci',
    provincia: Province.CH,
  },
  {
    comune: 'Gamberale',
    provincia: Province.CH,
  },
  {
    comune: 'Gessopalena',
    provincia: Province.CH,
  },
  {
    comune: 'Gissi',
    provincia: Province.CH,
  },
  {
    comune: 'Giuliano Teatino',
    provincia: Province.CH,
  },
  {
    comune: 'Guardiagrele',
    provincia: Province.CH,
  },
  {
    comune: 'Guilmi',
    provincia: Province.CH,
  },
  {
    comune: 'Lama dei Peligni',
    provincia: Province.CH,
  },
  {
    comune: 'Lanciano',
    provincia: Province.CH,
  },
  {
    comune: 'Lentella',
    provincia: Province.CH,
  },
  {
    comune: 'Lettopalena',
    provincia: Province.CH,
  },
  {
    comune: 'Liscia',
    provincia: Province.CH,
  },
  {
    comune: 'Miglianico',
    provincia: Province.CH,
  },
  {
    comune: 'Montazzoli',
    provincia: Province.CH,
  },
  {
    comune: 'Monteferrante',
    provincia: Province.CH,
  },
  {
    comune: 'Montelapiano',
    provincia: Province.CH,
  },
  {
    comune: 'Montenerodomo',
    provincia: Province.CH,
  },
  {
    comune: 'Monteodorisio',
    provincia: Province.CH,
  },
  {
    comune: 'Mozzagrogna',
    provincia: Province.CH,
  },
  {
    comune: 'Orsogna',
    provincia: Province.CH,
  },
  {
    comune: 'Ortona',
    provincia: Province.CH,
  },
  {
    comune: 'Paglieta',
    provincia: Province.CH,
  },
  {
    comune: 'Palena',
    provincia: Province.CH,
  },
  {
    comune: 'Palmoli',
    provincia: Province.CH,
  },
  {
    comune: 'Palombaro',
    provincia: Province.CH,
  },
  {
    comune: 'Pennadomo',
    provincia: Province.CH,
  },
  {
    comune: 'Pennapiedimonte',
    provincia: Province.CH,
  },
  {
    comune: 'Perano',
    provincia: Province.CH,
  },
  {
    comune: 'Pizzoferrato',
    provincia: Province.CH,
  },
  {
    comune: 'Poggiofiorito',
    provincia: Province.CH,
  },
  {
    comune: 'Pollutri',
    provincia: Province.CH,
  },
  {
    comune: 'Pretoro',
    provincia: Province.CH,
  },
  {
    comune: 'Quadri',
    provincia: Province.CH,
  },
  {
    comune: 'Rapino',
    provincia: Province.CH,
  },
  {
    comune: 'Ripa Teatina',
    provincia: Province.CH,
  },
  {
    comune: 'Roccamontepiano',
    provincia: Province.CH,
  },
  {
    comune: 'Rocca San Giovanni',
    provincia: Province.CH,
  },
  {
    comune: 'Roccascalegna',
    provincia: Province.CH,
  },
  {
    comune: 'Roccaspinalveti',
    provincia: Province.CH,
  },
  {
    comune: 'Roio del Sangro',
    provincia: Province.CH,
  },
  {
    comune: 'Rosello',
    provincia: Province.CH,
  },
  {
    comune: 'San Buono',
    provincia: Province.CH,
  },
  {
    comune: 'San Giovanni Lipioni',
    provincia: Province.CH,
  },
  {
    comune: 'San Giovanni Teatino',
    provincia: Province.CH,
  },
  {
    comune: 'San Martino sulla Marrucina',
    provincia: Province.CH,
  },
  {
    comune: 'San Salvo',
    provincia: Province.CH,
  },
  {
    comune: 'Santa Maria Imbaro',
    provincia: Province.CH,
  },
  {
    comune: "Sant'Eusanio del Sangro",
    provincia: Province.CH,
  },
  {
    comune: 'San Vito Chietino',
    provincia: Province.CH,
  },
  {
    comune: 'Scerni',
    provincia: Province.CH,
  },
  {
    comune: 'Schiavi di Abruzzo',
    provincia: Province.CH,
  },
  {
    comune: 'Taranta Peligna',
    provincia: Province.CH,
  },
  {
    comune: 'Tollo',
    provincia: Province.CH,
  },
  {
    comune: 'Torino di Sangro',
    provincia: Province.CH,
  },
  {
    comune: 'Tornareccio',
    provincia: Province.CH,
  },
  {
    comune: 'Torrebruna',
    provincia: Province.CH,
  },
  {
    comune: 'Torrevecchia Teatina',
    provincia: Province.CH,
  },
  {
    comune: 'Torricella Peligna',
    provincia: Province.CH,
  },
  {
    comune: 'Treglio',
    provincia: Province.CH,
  },
  {
    comune: 'Tufillo',
    provincia: Province.CH,
  },
  {
    comune: 'Vacri',
    provincia: Province.CH,
  },
  {
    comune: 'Vasto',
    provincia: Province.CH,
  },
  {
    comune: 'Villalfonsina',
    provincia: Province.CH,
  },
  {
    comune: 'Villamagna',
    provincia: Province.CH,
  },
  {
    comune: 'Villa Santa Maria',
    provincia: Province.CH,
  },
  {
    comune: 'Pietraferrazzana',
    provincia: Province.CH,
  },
  {
    comune: 'Fallo',
    provincia: Province.CH,
  },
  {
    comune: 'Acquaviva Collecroce',
    provincia: Province.CB,
  },
  {
    comune: 'Baranello',
    provincia: Province.CB,
  },
  {
    comune: 'Bojano',
    provincia: Province.CB,
  },
  {
    comune: 'Bonefro',
    provincia: Province.CB,
  },
  {
    comune: 'Busso',
    provincia: Province.CB,
  },
  {
    comune: 'Campobasso',
    provincia: Province.CB,
  },
  {
    comune: 'Campochiaro',
    provincia: Province.CB,
  },
  {
    comune: 'Campodipietra',
    provincia: Province.CB,
  },
  {
    comune: 'Campolieto',
    provincia: Province.CB,
  },
  {
    comune: 'Campomarino',
    provincia: Province.CB,
  },
  {
    comune: 'Casacalenda',
    provincia: Province.CB,
  },
  {
    comune: 'Casalciprano',
    provincia: Province.CB,
  },
  {
    comune: 'Castelbottaccio',
    provincia: Province.CB,
  },
  {
    comune: 'Castellino del Biferno',
    provincia: Province.CB,
  },
  {
    comune: 'Castelmauro',
    provincia: Province.CB,
  },
  {
    comune: 'Castropignano',
    provincia: Province.CB,
  },
  {
    comune: 'Cercemaggiore',
    provincia: Province.CB,
  },
  {
    comune: 'Cercepiccola',
    provincia: Province.CB,
  },
  {
    comune: 'Civitacampomarano',
    provincia: Province.CB,
  },
  {
    comune: "Colle d'Anchise",
    provincia: Province.CB,
  },
  {
    comune: 'Colletorto',
    provincia: Province.CB,
  },
  {
    comune: 'Duronia',
    provincia: Province.CB,
  },
  {
    comune: 'Ferrazzano',
    provincia: Province.CB,
  },
  {
    comune: 'Fossalto',
    provincia: Province.CB,
  },
  {
    comune: 'Gambatesa',
    provincia: Province.CB,
  },
  {
    comune: 'Gildone',
    provincia: Province.CB,
  },
  {
    comune: 'Guardialfiera',
    provincia: Province.CB,
  },
  {
    comune: 'Guardiaregia',
    provincia: Province.CB,
  },
  {
    comune: 'Guglionesi',
    provincia: Province.CB,
  },
  {
    comune: 'Jelsi',
    provincia: Province.CB,
  },
  {
    comune: 'Larino',
    provincia: Province.CB,
  },
  {
    comune: 'Limosano',
    provincia: Province.CB,
  },
  {
    comune: 'Lucito',
    provincia: Province.CB,
  },
  {
    comune: 'Lupara',
    provincia: Province.CB,
  },
  {
    comune: 'Macchia Valfortore',
    provincia: Province.CB,
  },
  {
    comune: 'Mafalda',
    provincia: Province.CB,
  },
  {
    comune: 'Matrice',
    provincia: Province.CB,
  },
  {
    comune: 'Mirabello Sannitico',
    provincia: Province.CB,
  },
  {
    comune: 'Molise',
    provincia: Province.CB,
  },
  {
    comune: 'Monacilioni',
    provincia: Province.CB,
  },
  {
    comune: 'Montagano',
    provincia: Province.CB,
  },
  {
    comune: 'Montecilfone',
    provincia: Province.CB,
  },
  {
    comune: 'Montefalcone nel Sannio',
    provincia: Province.CB,
  },
  {
    comune: 'Montelongo',
    provincia: Province.CB,
  },
  {
    comune: 'Montemitro',
    provincia: Province.CB,
  },
  {
    comune: 'Montenero di Bisaccia',
    provincia: Province.CB,
  },
  {
    comune: 'Montorio nei Frentani',
    provincia: Province.CB,
  },
  {
    comune: 'Morrone del Sannio',
    provincia: Province.CB,
  },
  {
    comune: 'Oratino',
    provincia: Province.CB,
  },
  {
    comune: 'Palata',
    provincia: Province.CB,
  },
  {
    comune: 'Petacciato',
    provincia: Province.CB,
  },
  {
    comune: 'Petrella Tifernina',
    provincia: Province.CB,
  },
  {
    comune: 'Pietracatella',
    provincia: Province.CB,
  },
  {
    comune: 'Pietracupa',
    provincia: Province.CB,
  },
  {
    comune: 'Portocannone',
    provincia: Province.CB,
  },
  {
    comune: 'Provvidenti',
    provincia: Province.CB,
  },
  {
    comune: 'Riccia',
    provincia: Province.CB,
  },
  {
    comune: 'Ripabottoni',
    provincia: Province.CB,
  },
  {
    comune: 'Ripalimosani',
    provincia: Province.CB,
  },
  {
    comune: 'Roccavivara',
    provincia: Province.CB,
  },
  {
    comune: 'Rotello',
    provincia: Province.CB,
  },
  {
    comune: 'Salcito',
    provincia: Province.CB,
  },
  {
    comune: 'San Biase',
    provincia: Province.CB,
  },
  {
    comune: 'San Felice del Molise',
    provincia: Province.CB,
  },
  {
    comune: 'San Giacomo degli Schiavoni',
    provincia: Province.CB,
  },
  {
    comune: 'San Giovanni in Galdo',
    provincia: Province.CB,
  },
  {
    comune: 'San Giuliano del Sannio',
    provincia: Province.CB,
  },
  {
    comune: 'San Giuliano di Puglia',
    provincia: Province.CB,
  },
  {
    comune: 'San Martino in Pensilis',
    provincia: Province.CB,
  },
  {
    comune: 'San Massimo',
    provincia: Province.CB,
  },
  {
    comune: 'San Polo Matese',
    provincia: Province.CB,
  },
  {
    comune: 'Santa Croce di Magliano',
    provincia: Province.CB,
  },
  {
    comune: "Sant'Angelo Limosano",
    provincia: Province.CB,
  },
  {
    comune: "Sant'Elia a Pianisi",
    provincia: Province.CB,
  },
  {
    comune: 'Sepino',
    provincia: Province.CB,
  },
  {
    comune: 'Spinete',
    provincia: Province.CB,
  },
  {
    comune: 'Tavenna',
    provincia: Province.CB,
  },
  {
    comune: 'Termoli',
    provincia: Province.CB,
  },
  {
    comune: 'Torella del Sannio',
    provincia: Province.CB,
  },
  {
    comune: 'Toro',
    provincia: Province.CB,
  },
  {
    comune: 'Trivento',
    provincia: Province.CB,
  },
  {
    comune: 'Tufara',
    provincia: Province.CB,
  },
  {
    comune: 'Ururi',
    provincia: Province.CB,
  },
  {
    comune: 'Vinchiaturo',
    provincia: Province.CB,
  },
  {
    comune: "Acquaviva d'Isernia",
    provincia: Province.IS,
  },
  {
    comune: 'Agnone',
    provincia: Province.IS,
  },
  {
    comune: 'Bagnoli del Trigno',
    provincia: Province.IS,
  },
  {
    comune: 'Belmonte del Sannio',
    provincia: Province.IS,
  },
  {
    comune: 'Cantalupo nel Sannio',
    provincia: Province.IS,
  },
  {
    comune: 'Capracotta',
    provincia: Province.IS,
  },
  {
    comune: 'Carovilli',
    provincia: Province.IS,
  },
  {
    comune: 'Carpinone',
    provincia: Province.IS,
  },
  {
    comune: 'Castel del Giudice',
    provincia: Province.IS,
  },
  {
    comune: 'Castelpetroso',
    provincia: Province.IS,
  },
  {
    comune: 'Castelpizzuto',
    provincia: Province.IS,
  },
  {
    comune: 'Castel San Vincenzo',
    provincia: Province.IS,
  },
  {
    comune: 'Castelverrino',
    provincia: Province.IS,
  },
  {
    comune: 'Cerro al Volturno',
    provincia: Province.IS,
  },
  {
    comune: 'Chiauci',
    provincia: Province.IS,
  },
  {
    comune: 'Civitanova del Sannio',
    provincia: Province.IS,
  },
  {
    comune: 'Colli a Volturno',
    provincia: Province.IS,
  },
  {
    comune: 'Conca Casale',
    provincia: Province.IS,
  },
  {
    comune: 'Filignano',
    provincia: Province.IS,
  },
  {
    comune: 'Forlì del Sannio',
    provincia: Province.IS,
  },
  {
    comune: 'Fornelli',
    provincia: Province.IS,
  },
  {
    comune: 'Frosolone',
    provincia: Province.IS,
  },
  {
    comune: 'Isernia',
    provincia: Province.IS,
  },
  {
    comune: 'Longano',
    provincia: Province.IS,
  },
  {
    comune: "Macchia d'Isernia",
    provincia: Province.IS,
  },
  {
    comune: 'Macchiagodena',
    provincia: Province.IS,
  },
  {
    comune: 'Miranda',
    provincia: Province.IS,
  },
  {
    comune: 'Montaquila',
    provincia: Province.IS,
  },
  {
    comune: 'Montenero Val Cocchiara',
    provincia: Province.IS,
  },
  {
    comune: 'Monteroduni',
    provincia: Province.IS,
  },
  {
    comune: 'Pesche',
    provincia: Province.IS,
  },
  {
    comune: 'Pescolanciano',
    provincia: Province.IS,
  },
  {
    comune: 'Pescopennataro',
    provincia: Province.IS,
  },
  {
    comune: 'Pettoranello del Molise',
    provincia: Province.IS,
  },
  {
    comune: 'Pietrabbondante',
    provincia: Province.IS,
  },
  {
    comune: 'Pizzone',
    provincia: Province.IS,
  },
  {
    comune: 'Poggio Sannita',
    provincia: Province.IS,
  },
  {
    comune: 'Pozzilli',
    provincia: Province.IS,
  },
  {
    comune: 'Rionero Sannitico',
    provincia: Province.IS,
  },
  {
    comune: 'Roccamandolfi',
    provincia: Province.IS,
  },
  {
    comune: 'Roccasicura',
    provincia: Province.IS,
  },
  {
    comune: 'Rocchetta a Volturno',
    provincia: Province.IS,
  },
  {
    comune: 'San Pietro Avellana',
    provincia: Province.IS,
  },
  {
    comune: "Sant'Agapito",
    provincia: Province.IS,
  },
  {
    comune: 'Santa Maria del Molise',
    provincia: Province.IS,
  },
  {
    comune: "Sant'Angelo del Pesco",
    provincia: Province.IS,
  },
  {
    comune: "Sant'Elena Sannita",
    provincia: Province.IS,
  },
  {
    comune: 'Scapoli',
    provincia: Province.IS,
  },
  {
    comune: 'Sessano del Molise',
    provincia: Province.IS,
  },
  {
    comune: 'Sesto Campano',
    provincia: Province.IS,
  },
  {
    comune: 'Vastogirardi',
    provincia: Province.IS,
  },
  {
    comune: 'Venafro',
    provincia: Province.IS,
  },
  {
    comune: 'Ailano',
    provincia: Province.CE,
  },
  {
    comune: 'Alife',
    provincia: Province.CE,
  },
  {
    comune: 'Alvignano',
    provincia: Province.CE,
  },
  {
    comune: 'Arienzo',
    provincia: Province.CE,
  },
  {
    comune: 'Aversa',
    provincia: Province.CE,
  },
  {
    comune: 'Baia e Latina',
    provincia: Province.CE,
  },
  {
    comune: 'Bellona',
    provincia: Province.CE,
  },
  {
    comune: 'Caianello',
    provincia: Province.CE,
  },
  {
    comune: 'Caiazzo',
    provincia: Province.CE,
  },
  {
    comune: 'Calvi Risorta',
    provincia: Province.CE,
  },
  {
    comune: 'Camigliano',
    provincia: Province.CE,
  },
  {
    comune: 'Cancello ed Arnone',
    provincia: Province.CE,
  },
  {
    comune: 'Capodrise',
    provincia: Province.CE,
  },
  {
    comune: 'Capriati a Volturno',
    provincia: Province.CE,
  },
  {
    comune: 'Capua',
    provincia: Province.CE,
  },
  {
    comune: 'Carinaro',
    provincia: Province.CE,
  },
  {
    comune: 'Carinola',
    provincia: Province.CE,
  },
  {
    comune: 'Casagiove',
    provincia: Province.CE,
  },
  {
    comune: 'Casal di Principe',
    provincia: Province.CE,
  },
  {
    comune: 'Casaluce',
    provincia: Province.CE,
  },
  {
    comune: 'Casapulla',
    provincia: Province.CE,
  },
  {
    comune: 'Caserta',
    provincia: Province.CE,
  },
  {
    comune: 'Castel Campagnano',
    provincia: Province.CE,
  },
  {
    comune: 'Castel di Sasso',
    provincia: Province.CE,
  },
  {
    comune: 'Castello del Matese',
    provincia: Province.CE,
  },
  {
    comune: 'Castel Morrone',
    provincia: Province.CE,
  },
  {
    comune: 'Castel Volturno',
    provincia: Province.CE,
  },
  {
    comune: 'Cervino',
    provincia: Province.CE,
  },
  {
    comune: 'Cesa',
    provincia: Province.CE,
  },
  {
    comune: 'Ciorlano',
    provincia: Province.CE,
  },
  {
    comune: 'Conca della Campania',
    provincia: Province.CE,
  },
  {
    comune: 'Curti',
    provincia: Province.CE,
  },
  {
    comune: 'Dragoni',
    provincia: Province.CE,
  },
  {
    comune: 'Fontegreca',
    provincia: Province.CE,
  },
  {
    comune: 'Formicola',
    provincia: Province.CE,
  },
  {
    comune: 'Francolise',
    provincia: Province.CE,
  },
  {
    comune: 'Frignano',
    provincia: Province.CE,
  },
  {
    comune: 'Gallo Matese',
    provincia: Province.CE,
  },
  {
    comune: 'Galluccio',
    provincia: Province.CE,
  },
  {
    comune: 'Giano Vetusto',
    provincia: Province.CE,
  },
  {
    comune: 'Gioia Sannitica',
    provincia: Province.CE,
  },
  {
    comune: 'Grazzanise',
    provincia: Province.CE,
  },
  {
    comune: 'Gricignano di Aversa',
    provincia: Province.CE,
  },
  {
    comune: 'Letino',
    provincia: Province.CE,
  },
  {
    comune: 'Liberi',
    provincia: Province.CE,
  },
  {
    comune: 'Lusciano',
    provincia: Province.CE,
  },
  {
    comune: 'Macerata Campania',
    provincia: Province.CE,
  },
  {
    comune: 'Maddaloni',
    provincia: Province.CE,
  },
  {
    comune: 'Marcianise',
    provincia: Province.CE,
  },
  {
    comune: 'Marzano Appio',
    provincia: Province.CE,
  },
  {
    comune: 'Mignano Monte Lungo',
    provincia: Province.CE,
  },
  {
    comune: 'Mondragone',
    provincia: Province.CE,
  },
  {
    comune: 'Orta di Atella',
    provincia: Province.CE,
  },
  {
    comune: 'Parete',
    provincia: Province.CE,
  },
  {
    comune: 'Pastorano',
    provincia: Province.CE,
  },
  {
    comune: 'Piana di Monte Verna',
    provincia: Province.CE,
  },
  {
    comune: 'Piedimonte Matese',
    provincia: Province.CE,
  },
  {
    comune: 'Pietramelara',
    provincia: Province.CE,
  },
  {
    comune: 'Pietravairano',
    provincia: Province.CE,
  },
  {
    comune: 'Pignataro Maggiore',
    provincia: Province.CE,
  },
  {
    comune: 'Pontelatone',
    provincia: Province.CE,
  },
  {
    comune: 'Portico di Caserta',
    provincia: Province.CE,
  },
  {
    comune: 'Prata Sannita',
    provincia: Province.CE,
  },
  {
    comune: 'Pratella',
    provincia: Province.CE,
  },
  {
    comune: 'Presenzano',
    provincia: Province.CE,
  },
  {
    comune: 'Raviscanina',
    provincia: Province.CE,
  },
  {
    comune: 'Recale',
    provincia: Province.CE,
  },
  {
    comune: 'Riardo',
    provincia: Province.CE,
  },
  {
    comune: "Rocca d'Evandro",
    provincia: Province.CE,
  },
  {
    comune: 'Roccamonfina',
    provincia: Province.CE,
  },
  {
    comune: 'Roccaromana',
    provincia: Province.CE,
  },
  {
    comune: 'Rocchetta e Croce',
    provincia: Province.CE,
  },
  {
    comune: 'Ruviano',
    provincia: Province.CE,
  },
  {
    comune: "San Cipriano d'Aversa",
    provincia: Province.CE,
  },
  {
    comune: 'San Felice a Cancello',
    provincia: Province.CE,
  },
  {
    comune: 'San Gregorio Matese',
    provincia: Province.CE,
  },
  {
    comune: 'San Marcellino',
    provincia: Province.CE,
  },
  {
    comune: 'San Nicola la Strada',
    provincia: Province.CE,
  },
  {
    comune: 'San Pietro Infine',
    provincia: Province.CE,
  },
  {
    comune: 'San Potito Sannitico',
    provincia: Province.CE,
  },
  {
    comune: 'San Prisco',
    provincia: Province.CE,
  },
  {
    comune: 'Santa Maria a Vico',
    provincia: Province.CE,
  },
  {
    comune: 'Santa Maria Capua Vetere',
    provincia: Province.CE,
  },
  {
    comune: 'Santa Maria la Fossa',
    provincia: Province.CE,
  },
  {
    comune: 'San Tammaro',
    provincia: Province.CE,
  },
  {
    comune: "Sant'Angelo d'Alife",
    provincia: Province.CE,
  },
  {
    comune: "Sant'Arpino",
    provincia: Province.CE,
  },
  {
    comune: 'Sessa Aurunca',
    provincia: Province.CE,
  },
  {
    comune: 'Sparanise',
    provincia: Province.CE,
  },
  {
    comune: 'Succivo',
    provincia: Province.CE,
  },
  {
    comune: 'Teano',
    provincia: Province.CE,
  },
  {
    comune: 'Teverola',
    provincia: Province.CE,
  },
  {
    comune: 'Tora e Piccilli',
    provincia: Province.CE,
  },
  {
    comune: 'Trentola Ducenta',
    provincia: Province.CE,
  },
  {
    comune: 'Vairano Patenora',
    provincia: Province.CE,
  },
  {
    comune: 'Valle Agricola',
    provincia: Province.CE,
  },
  {
    comune: 'Valle di Maddaloni',
    provincia: Province.CE,
  },
  {
    comune: 'Villa di Briano',
    provincia: Province.CE,
  },
  {
    comune: 'Villa Literno',
    provincia: Province.CE,
  },
  {
    comune: 'Vitulazio',
    provincia: Province.CE,
  },
  {
    comune: 'Falciano del Massico',
    provincia: Province.CE,
  },
  {
    comune: 'Cellole',
    provincia: Province.CE,
  },
  {
    comune: 'Casapesenna',
    provincia: Province.CE,
  },
  {
    comune: 'San Marco Evangelista',
    provincia: Province.CE,
  },
  {
    comune: 'Airola',
    provincia: Province.BN,
  },
  {
    comune: 'Amorosi',
    provincia: Province.BN,
  },
  {
    comune: 'Apice',
    provincia: Province.BN,
  },
  {
    comune: 'Apollosa',
    provincia: Province.BN,
  },
  {
    comune: 'Arpaia',
    provincia: Province.BN,
  },
  {
    comune: 'Arpaise',
    provincia: Province.BN,
  },
  {
    comune: 'Baselice',
    provincia: Province.BN,
  },
  {
    comune: 'Benevento',
    provincia: Province.BN,
  },
  {
    comune: 'Bonea',
    provincia: Province.BN,
  },
  {
    comune: 'Bucciano',
    provincia: Province.BN,
  },
  {
    comune: 'Buonalbergo',
    provincia: Province.BN,
  },
  {
    comune: 'Calvi',
    provincia: Province.BN,
  },
  {
    comune: 'Campolattaro',
    provincia: Province.BN,
  },
  {
    comune: 'Campoli del Monte Taburno',
    provincia: Province.BN,
  },
  {
    comune: 'Casalduni',
    provincia: Province.BN,
  },
  {
    comune: 'Castelfranco in Miscano',
    provincia: Province.BN,
  },
  {
    comune: 'Castelpagano',
    provincia: Province.BN,
  },
  {
    comune: 'Castelpoto',
    provincia: Province.BN,
  },
  {
    comune: 'Castelvenere',
    provincia: Province.BN,
  },
  {
    comune: 'Castelvetere in Val Fortore',
    provincia: Province.BN,
  },
  {
    comune: 'Cautano',
    provincia: Province.BN,
  },
  {
    comune: 'Ceppaloni',
    provincia: Province.BN,
  },
  {
    comune: 'Cerreto Sannita',
    provincia: Province.BN,
  },
  {
    comune: 'Circello',
    provincia: Province.BN,
  },
  {
    comune: 'Colle Sannita',
    provincia: Province.BN,
  },
  {
    comune: 'Cusano Mutri',
    provincia: Province.BN,
  },
  {
    comune: 'Dugenta',
    provincia: Province.BN,
  },
  {
    comune: 'Durazzano',
    provincia: Province.BN,
  },
  {
    comune: 'Faicchio',
    provincia: Province.BN,
  },
  {
    comune: 'Foglianise',
    provincia: Province.BN,
  },
  {
    comune: 'Foiano di Val Fortore',
    provincia: Province.BN,
  },
  {
    comune: 'Forchia',
    provincia: Province.BN,
  },
  {
    comune: "Fragneto l'Abate",
    provincia: Province.BN,
  },
  {
    comune: 'Fragneto Monforte',
    provincia: Province.BN,
  },
  {
    comune: 'Frasso Telesino',
    provincia: Province.BN,
  },
  {
    comune: 'Ginestra degli Schiavoni',
    provincia: Province.BN,
  },
  {
    comune: 'Guardia Sanframondi',
    provincia: Province.BN,
  },
  {
    comune: 'Limatola',
    provincia: Province.BN,
  },
  {
    comune: 'Melizzano',
    provincia: Province.BN,
  },
  {
    comune: 'Moiano',
    provincia: Province.BN,
  },
  {
    comune: 'Molinara',
    provincia: Province.BN,
  },
  {
    comune: 'Montefalcone di Val Fortore',
    provincia: Province.BN,
  },
  {
    comune: 'Montesarchio',
    provincia: Province.BN,
  },
  {
    comune: 'Morcone',
    provincia: Province.BN,
  },
  {
    comune: 'Paduli',
    provincia: Province.BN,
  },
  {
    comune: 'Pago Veiano',
    provincia: Province.BN,
  },
  {
    comune: 'Pannarano',
    provincia: Province.BN,
  },
  {
    comune: 'Paolisi',
    provincia: Province.BN,
  },
  {
    comune: 'Paupisi',
    provincia: Province.BN,
  },
  {
    comune: 'Pesco Sannita',
    provincia: Province.BN,
  },
  {
    comune: 'Pietraroja',
    provincia: Province.BN,
  },
  {
    comune: 'Pietrelcina',
    provincia: Province.BN,
  },
  {
    comune: 'Ponte',
    provincia: Province.BN,
  },
  {
    comune: 'Pontelandolfo',
    provincia: Province.BN,
  },
  {
    comune: 'Puglianello',
    provincia: Province.BN,
  },
  {
    comune: 'Reino',
    provincia: Province.BN,
  },
  {
    comune: 'San Bartolomeo in Galdo',
    provincia: Province.BN,
  },
  {
    comune: 'San Giorgio del Sannio',
    provincia: Province.BN,
  },
  {
    comune: 'San Giorgio La Molara',
    provincia: Province.BN,
  },
  {
    comune: 'San Leucio del Sannio',
    provincia: Province.BN,
  },
  {
    comune: 'San Lorenzello',
    provincia: Province.BN,
  },
  {
    comune: 'San Lorenzo Maggiore',
    provincia: Province.BN,
  },
  {
    comune: 'San Lupo',
    provincia: Province.BN,
  },
  {
    comune: 'San Marco dei Cavoti',
    provincia: Province.BN,
  },
  {
    comune: 'San Martino Sannita',
    provincia: Province.BN,
  },
  {
    comune: 'San Nazzaro',
    provincia: Province.BN,
  },
  {
    comune: 'San Nicola Manfredi',
    provincia: Province.BN,
  },
  {
    comune: 'San Salvatore Telesino',
    provincia: Province.BN,
  },
  {
    comune: 'Santa Croce del Sannio',
    provincia: Province.BN,
  },
  {
    comune: "Sant'Agata de' Goti",
    provincia: Province.BN,
  },
  {
    comune: "Sant'Angelo a Cupolo",
    provincia: Province.BN,
  },
  {
    comune: 'Sassinoro',
    provincia: Province.BN,
  },
  {
    comune: 'Solopaca',
    provincia: Province.BN,
  },
  {
    comune: 'Telese Terme',
    provincia: Province.BN,
  },
  {
    comune: 'Tocco Caudio',
    provincia: Province.BN,
  },
  {
    comune: 'Torrecuso',
    provincia: Province.BN,
  },
  {
    comune: 'Vitulano',
    provincia: Province.BN,
  },
  {
    comune: "Sant'Arcangelo Trimonte",
    provincia: Province.BN,
  },
  {
    comune: 'Acerra',
    provincia: Province.NA,
  },
  {
    comune: 'Afragola',
    provincia: Province.NA,
  },
  {
    comune: 'Agerola',
    provincia: Province.NA,
  },
  {
    comune: 'Anacapri',
    provincia: Province.NA,
  },
  {
    comune: 'Arzano',
    provincia: Province.NA,
  },
  {
    comune: 'Bacoli',
    provincia: Province.NA,
  },
  {
    comune: "Barano d'Ischia",
    provincia: Province.NA,
  },
  {
    comune: 'Boscoreale',
    provincia: Province.NA,
  },
  {
    comune: 'Boscotrecase',
    provincia: Province.NA,
  },
  {
    comune: 'Brusciano',
    provincia: Province.NA,
  },
  {
    comune: 'Caivano',
    provincia: Province.NA,
  },
  {
    comune: 'Calvizzano',
    provincia: Province.NA,
  },
  {
    comune: 'Camposano',
    provincia: Province.NA,
  },
  {
    comune: 'Capri',
    provincia: Province.NA,
  },
  {
    comune: 'Carbonara di Nola',
    provincia: Province.NA,
  },
  {
    comune: 'Cardito',
    provincia: Province.NA,
  },
  {
    comune: 'Casalnuovo di Napoli',
    provincia: Province.NA,
  },
  {
    comune: 'Casamarciano',
    provincia: Province.NA,
  },
  {
    comune: 'Casamicciola Terme',
    provincia: Province.NA,
  },
  {
    comune: 'Casandrino',
    provincia: Province.NA,
  },
  {
    comune: 'Casavatore',
    provincia: Province.NA,
  },
  {
    comune: 'Casola di Napoli',
    provincia: Province.NA,
  },
  {
    comune: 'Casoria',
    provincia: Province.NA,
  },
  {
    comune: 'Castellammare di Stabia',
    provincia: Province.NA,
  },
  {
    comune: 'Castello di Cisterna',
    provincia: Province.NA,
  },
  {
    comune: 'Cercola',
    provincia: Province.NA,
  },
  {
    comune: 'Cicciano',
    provincia: Province.NA,
  },
  {
    comune: 'Cimitile',
    provincia: Province.NA,
  },
  {
    comune: 'Comiziano',
    provincia: Province.NA,
  },
  {
    comune: 'Crispano',
    provincia: Province.NA,
  },
  {
    comune: 'Forio',
    provincia: Province.NA,
  },
  {
    comune: 'Frattamaggiore',
    provincia: Province.NA,
  },
  {
    comune: 'Frattaminore',
    provincia: Province.NA,
  },
  {
    comune: 'Giugliano in Campania',
    provincia: Province.NA,
  },
  {
    comune: 'Gragnano',
    provincia: Province.NA,
  },
  {
    comune: 'Grumo Nevano',
    provincia: Province.NA,
  },
  {
    comune: 'Ischia',
    provincia: Province.NA,
  },
  {
    comune: 'Lacco Ameno',
    provincia: Province.NA,
  },
  {
    comune: 'Lettere',
    provincia: Province.NA,
  },
  {
    comune: 'Liveri',
    provincia: Province.NA,
  },
  {
    comune: 'Marano di Napoli',
    provincia: Province.NA,
  },
  {
    comune: 'Mariglianella',
    provincia: Province.NA,
  },
  {
    comune: 'Marigliano',
    provincia: Province.NA,
  },
  {
    comune: 'Massa Lubrense',
    provincia: Province.NA,
  },
  {
    comune: 'Melito di Napoli',
    provincia: Province.NA,
  },
  {
    comune: 'Meta',
    provincia: Province.NA,
  },
  {
    comune: 'Monte di Procida',
    provincia: Province.NA,
  },
  {
    comune: 'Mugnano di Napoli',
    provincia: Province.NA,
  },
  {
    comune: 'Napoli',
    provincia: Province.NA,
  },
  {
    comune: 'Nola',
    provincia: Province.NA,
  },
  {
    comune: 'Ottaviano',
    provincia: Province.NA,
  },
  {
    comune: 'Palma Campania',
    provincia: Province.NA,
  },
  {
    comune: 'Piano di Sorrento',
    provincia: Province.NA,
  },
  {
    comune: 'Pimonte',
    provincia: Province.NA,
  },
  {
    comune: 'Poggiomarino',
    provincia: Province.NA,
  },
  {
    comune: 'Pollena Trocchia',
    provincia: Province.NA,
  },
  {
    comune: "Pomigliano d'Arco",
    provincia: Province.NA,
  },
  {
    comune: 'Pompei',
    provincia: Province.NA,
  },
  {
    comune: 'Portici',
    provincia: Province.NA,
  },
  {
    comune: 'Pozzuoli',
    provincia: Province.NA,
  },
  {
    comune: 'Procida',
    provincia: Province.NA,
  },
  {
    comune: 'Qualiano',
    provincia: Province.NA,
  },
  {
    comune: 'Quarto',
    provincia: Province.NA,
  },
  {
    comune: 'Ercolano',
    provincia: Province.NA,
  },
  {
    comune: 'Roccarainola',
    provincia: Province.NA,
  },
  {
    comune: 'San Gennaro Vesuviano',
    provincia: Province.NA,
  },
  {
    comune: 'San Giorgio a Cremano',
    provincia: Province.NA,
  },
  {
    comune: 'San Giuseppe Vesuviano',
    provincia: Province.NA,
  },
  {
    comune: 'San Paolo Bel Sito',
    provincia: Province.NA,
  },
  {
    comune: 'San Sebastiano al Vesuvio',
    provincia: Province.NA,
  },
  {
    comune: "Sant'Agnello",
    provincia: Province.NA,
  },
  {
    comune: "Sant'Anastasia",
    provincia: Province.NA,
  },
  {
    comune: "Sant'Antimo",
    provincia: Province.NA,
  },
  {
    comune: "Sant'Antonio Abate",
    provincia: Province.NA,
  },
  {
    comune: 'San Vitaliano',
    provincia: Province.NA,
  },
  {
    comune: 'Saviano',
    provincia: Province.NA,
  },
  {
    comune: 'Scisciano',
    provincia: Province.NA,
  },
  {
    comune: 'Serrara Fontana',
    provincia: Province.NA,
  },
  {
    comune: 'Somma Vesuviana',
    provincia: Province.NA,
  },
  {
    comune: 'Sorrento',
    provincia: Province.NA,
  },
  {
    comune: 'Striano',
    provincia: Province.NA,
  },
  {
    comune: 'Terzigno',
    provincia: Province.NA,
  },
  {
    comune: 'Torre Annunziata',
    provincia: Province.NA,
  },
  {
    comune: 'Torre del Greco',
    provincia: Province.NA,
  },
  {
    comune: 'Tufino',
    provincia: Province.NA,
  },
  {
    comune: 'Vico Equense',
    provincia: Province.NA,
  },
  {
    comune: 'Villaricca',
    provincia: Province.NA,
  },
  {
    comune: 'Visciano',
    provincia: Province.NA,
  },
  {
    comune: 'Volla',
    provincia: Province.NA,
  },
  {
    comune: 'Santa Maria la Carità',
    provincia: Province.NA,
  },
  {
    comune: 'Trecase',
    provincia: Province.NA,
  },
  {
    comune: 'Massa di Somma',
    provincia: Province.NA,
  },
  {
    comune: 'Aiello del Sabato',
    provincia: Province.AV,
  },
  {
    comune: 'Altavilla Irpina',
    provincia: Province.AV,
  },
  {
    comune: 'Andretta',
    provincia: Province.AV,
  },
  {
    comune: 'Aquilonia',
    provincia: Province.AV,
  },
  {
    comune: 'Ariano Irpino',
    provincia: Province.AV,
  },
  {
    comune: 'Atripalda',
    provincia: Province.AV,
  },
  {
    comune: 'Avella',
    provincia: Province.AV,
  },
  {
    comune: 'Avellino',
    provincia: Province.AV,
  },
  {
    comune: 'Bagnoli Irpino',
    provincia: Province.AV,
  },
  {
    comune: 'Baiano',
    provincia: Province.AV,
  },
  {
    comune: 'Bisaccia',
    provincia: Province.AV,
  },
  {
    comune: 'Bonito',
    provincia: Province.AV,
  },
  {
    comune: 'Cairano',
    provincia: Province.AV,
  },
  {
    comune: 'Calabritto',
    provincia: Province.AV,
  },
  {
    comune: 'Calitri',
    provincia: Province.AV,
  },
  {
    comune: 'Candida',
    provincia: Province.AV,
  },
  {
    comune: 'Caposele',
    provincia: Province.AV,
  },
  {
    comune: 'Capriglia Irpina',
    provincia: Province.AV,
  },
  {
    comune: 'Carife',
    provincia: Province.AV,
  },
  {
    comune: 'Casalbore',
    provincia: Province.AV,
  },
  {
    comune: 'Cassano Irpino',
    provincia: Province.AV,
  },
  {
    comune: 'Castel Baronia',
    provincia: Province.AV,
  },
  {
    comune: 'Castelfranci',
    provincia: Province.AV,
  },
  {
    comune: 'Castelvetere sul Calore',
    provincia: Province.AV,
  },
  {
    comune: 'Cervinara',
    provincia: Province.AV,
  },
  {
    comune: 'Cesinali',
    provincia: Province.AV,
  },
  {
    comune: 'Chianche',
    provincia: Province.AV,
  },
  {
    comune: 'Chiusano di San Domenico',
    provincia: Province.AV,
  },
  {
    comune: 'Contrada',
    provincia: Province.AV,
  },
  {
    comune: 'Conza della Campania',
    provincia: Province.AV,
  },
  {
    comune: 'Domicella',
    provincia: Province.AV,
  },
  {
    comune: 'Flumeri',
    provincia: Province.AV,
  },
  {
    comune: 'Fontanarosa',
    provincia: Province.AV,
  },
  {
    comune: 'Forino',
    provincia: Province.AV,
  },
  {
    comune: 'Frigento',
    provincia: Province.AV,
  },
  {
    comune: 'Gesualdo',
    provincia: Province.AV,
  },
  {
    comune: 'Greci',
    provincia: Province.AV,
  },
  {
    comune: 'Grottaminarda',
    provincia: Province.AV,
  },
  {
    comune: 'Grottolella',
    provincia: Province.AV,
  },
  {
    comune: 'Guardia Lombardi',
    provincia: Province.AV,
  },
  {
    comune: 'Lacedonia',
    provincia: Province.AV,
  },
  {
    comune: 'Lapio',
    provincia: Province.AV,
  },
  {
    comune: 'Lauro',
    provincia: Province.AV,
  },
  {
    comune: 'Lioni',
    provincia: Province.AV,
  },
  {
    comune: 'Luogosano',
    provincia: Province.AV,
  },
  {
    comune: 'Manocalzati',
    provincia: Province.AV,
  },
  {
    comune: 'Marzano di Nola',
    provincia: Province.AV,
  },
  {
    comune: 'Melito Irpino',
    provincia: Province.AV,
  },
  {
    comune: 'Mercogliano',
    provincia: Province.AV,
  },
  {
    comune: 'Mirabella Eclano',
    provincia: Province.AV,
  },
  {
    comune: 'Montaguto',
    provincia: Province.AV,
  },
  {
    comune: 'Montecalvo Irpino',
    provincia: Province.AV,
  },
  {
    comune: 'Montefalcione',
    provincia: Province.AV,
  },
  {
    comune: 'Monteforte Irpino',
    provincia: Province.AV,
  },
  {
    comune: 'Montefredane',
    provincia: Province.AV,
  },
  {
    comune: 'Montefusco',
    provincia: Province.AV,
  },
  {
    comune: 'Montella',
    provincia: Province.AV,
  },
  {
    comune: 'Montemarano',
    provincia: Province.AV,
  },
  {
    comune: 'Montemiletto',
    provincia: Province.AV,
  },
  {
    comune: 'Monteverde',
    provincia: Province.AV,
  },
  {
    comune: 'Morra De Sanctis',
    provincia: Province.AV,
  },
  {
    comune: 'Moschiano',
    provincia: Province.AV,
  },
  {
    comune: 'Mugnano del Cardinale',
    provincia: Province.AV,
  },
  {
    comune: 'Nusco',
    provincia: Province.AV,
  },
  {
    comune: "Ospedaletto d'Alpinolo",
    provincia: Province.AV,
  },
  {
    comune: 'Pago del Vallo di Lauro',
    provincia: Province.AV,
  },
  {
    comune: 'Parolise',
    provincia: Province.AV,
  },
  {
    comune: 'Paternopoli',
    provincia: Province.AV,
  },
  {
    comune: 'Petruro Irpino',
    provincia: Province.AV,
  },
  {
    comune: 'Pietradefusi',
    provincia: Province.AV,
  },
  {
    comune: 'Pietrastornina',
    provincia: Province.AV,
  },
  {
    comune: 'Prata di Principato Ultra',
    provincia: Province.AV,
  },
  {
    comune: 'Pratola Serra',
    provincia: Province.AV,
  },
  {
    comune: 'Quadrelle',
    provincia: Province.AV,
  },
  {
    comune: 'Quindici',
    provincia: Province.AV,
  },
  {
    comune: 'Roccabascerana',
    provincia: Province.AV,
  },
  {
    comune: 'Rocca San Felice',
    provincia: Province.AV,
  },
  {
    comune: 'Rotondi',
    provincia: Province.AV,
  },
  {
    comune: 'Salza Irpina',
    provincia: Province.AV,
  },
  {
    comune: 'San Mango sul Calore',
    provincia: Province.AV,
  },
  {
    comune: 'San Martino Valle Caudina',
    provincia: Province.AV,
  },
  {
    comune: 'San Michele di Serino',
    provincia: Province.AV,
  },
  {
    comune: 'San Nicola Baronia',
    provincia: Province.AV,
  },
  {
    comune: 'San Potito Ultra',
    provincia: Province.AV,
  },
  {
    comune: 'San Sossio Baronia',
    provincia: Province.AV,
  },
  {
    comune: 'Santa Lucia di Serino',
    provincia: Province.AV,
  },
  {
    comune: "Sant'Andrea di Conza",
    provincia: Province.AV,
  },
  {
    comune: "Sant'Angelo all'Esca",
    provincia: Province.AV,
  },
  {
    comune: "Sant'Angelo a Scala",
    provincia: Province.AV,
  },
  {
    comune: "Sant'Angelo dei Lombardi",
    provincia: Province.AV,
  },
  {
    comune: 'Santa Paolina',
    provincia: Province.AV,
  },
  {
    comune: 'Santo Stefano del Sole',
    provincia: Province.AV,
  },
  {
    comune: 'Savignano Irpino',
    provincia: Province.AV,
  },
  {
    comune: 'Scampitella',
    provincia: Province.AV,
  },
  {
    comune: 'Senerchia',
    provincia: Province.AV,
  },
  {
    comune: 'Serino',
    provincia: Province.AV,
  },
  {
    comune: 'Sirignano',
    provincia: Province.AV,
  },
  {
    comune: 'Solofra',
    provincia: Province.AV,
  },
  {
    comune: 'Sorbo Serpico',
    provincia: Province.AV,
  },
  {
    comune: 'Sperone',
    provincia: Province.AV,
  },
  {
    comune: 'Sturno',
    provincia: Province.AV,
  },
  {
    comune: 'Summonte',
    provincia: Province.AV,
  },
  {
    comune: 'Taurano',
    provincia: Province.AV,
  },
  {
    comune: 'Taurasi',
    provincia: Province.AV,
  },
  {
    comune: 'Teora',
    provincia: Province.AV,
  },
  {
    comune: 'Torella dei Lombardi',
    provincia: Province.AV,
  },
  {
    comune: 'Torre Le Nocelle',
    provincia: Province.AV,
  },
  {
    comune: 'Torrioni',
    provincia: Province.AV,
  },
  {
    comune: 'Trevico',
    provincia: Province.AV,
  },
  {
    comune: 'Tufo',
    provincia: Province.AV,
  },
  {
    comune: 'Vallata',
    provincia: Province.AV,
  },
  {
    comune: 'Vallesaccarda',
    provincia: Province.AV,
  },
  {
    comune: 'Venticano',
    provincia: Province.AV,
  },
  {
    comune: 'Villamaina',
    provincia: Province.AV,
  },
  {
    comune: 'Villanova del Battista',
    provincia: Province.AV,
  },
  {
    comune: 'Volturara Irpina',
    provincia: Province.AV,
  },
  {
    comune: 'Zungoli',
    provincia: Province.AV,
  },
  {
    comune: 'Montoro',
    provincia: Province.AV,
  },
  {
    comune: 'Acerno',
    provincia: Province.SA,
  },
  {
    comune: 'Agropoli',
    provincia: Province.SA,
  },
  {
    comune: 'Albanella',
    provincia: Province.SA,
  },
  {
    comune: 'Alfano',
    provincia: Province.SA,
  },
  {
    comune: 'Altavilla Silentina',
    provincia: Province.SA,
  },
  {
    comune: 'Amalfi',
    provincia: Province.SA,
  },
  {
    comune: 'Angri',
    provincia: Province.SA,
  },
  {
    comune: 'Aquara',
    provincia: Province.SA,
  },
  {
    comune: 'Ascea',
    provincia: Province.SA,
  },
  {
    comune: 'Atena Lucana',
    provincia: Province.SA,
  },
  {
    comune: 'Atrani',
    provincia: Province.SA,
  },
  {
    comune: 'Auletta',
    provincia: Province.SA,
  },
  {
    comune: 'Baronissi',
    provincia: Province.SA,
  },
  {
    comune: 'Battipaglia',
    provincia: Province.SA,
  },
  {
    comune: 'Bellosguardo',
    provincia: Province.SA,
  },
  {
    comune: 'Bracigliano',
    provincia: Province.SA,
  },
  {
    comune: 'Buccino',
    provincia: Province.SA,
  },
  {
    comune: 'Buonabitacolo',
    provincia: Province.SA,
  },
  {
    comune: 'Caggiano',
    provincia: Province.SA,
  },
  {
    comune: 'Calvanico',
    provincia: Province.SA,
  },
  {
    comune: 'Camerota',
    provincia: Province.SA,
  },
  {
    comune: 'Campagna',
    provincia: Province.SA,
  },
  {
    comune: 'Campora',
    provincia: Province.SA,
  },
  {
    comune: 'Cannalonga',
    provincia: Province.SA,
  },
  {
    comune: 'Capaccio Paestum',
    provincia: Province.SA,
  },
  {
    comune: 'Casalbuono',
    provincia: Province.SA,
  },
  {
    comune: 'Casaletto Spartano',
    provincia: Province.SA,
  },
  {
    comune: 'Casal Velino',
    provincia: Province.SA,
  },
  {
    comune: 'Caselle in Pittari',
    provincia: Province.SA,
  },
  {
    comune: 'Castelcivita',
    provincia: Province.SA,
  },
  {
    comune: 'Castellabate',
    provincia: Province.SA,
  },
  {
    comune: 'Castelnuovo Cilento',
    provincia: Province.SA,
  },
  {
    comune: 'Castelnuovo di Conza',
    provincia: Province.SA,
  },
  {
    comune: 'Castel San Giorgio',
    provincia: Province.SA,
  },
  {
    comune: 'Castel San Lorenzo',
    provincia: Province.SA,
  },
  {
    comune: 'Castiglione del Genovesi',
    provincia: Province.SA,
  },
  {
    comune: "Cava de' Tirreni",
    provincia: Province.SA,
  },
  {
    comune: 'Celle di Bulgheria',
    provincia: Province.SA,
  },
  {
    comune: 'Centola',
    provincia: Province.SA,
  },
  {
    comune: 'Ceraso',
    provincia: Province.SA,
  },
  {
    comune: 'Cetara',
    provincia: Province.SA,
  },
  {
    comune: 'Cicerale',
    provincia: Province.SA,
  },
  {
    comune: 'Colliano',
    provincia: Province.SA,
  },
  {
    comune: 'Conca dei Marini',
    provincia: Province.SA,
  },
  {
    comune: 'Controne',
    provincia: Province.SA,
  },
  {
    comune: 'Contursi Terme',
    provincia: Province.SA,
  },
  {
    comune: 'Corbara',
    provincia: Province.SA,
  },
  {
    comune: 'Corleto Monforte',
    provincia: Province.SA,
  },
  {
    comune: 'Cuccaro Vetere',
    provincia: Province.SA,
  },
  {
    comune: 'Eboli',
    provincia: Province.SA,
  },
  {
    comune: 'Felitto',
    provincia: Province.SA,
  },
  {
    comune: 'Fisciano',
    provincia: Province.SA,
  },
  {
    comune: 'Furore',
    provincia: Province.SA,
  },
  {
    comune: 'Futani',
    provincia: Province.SA,
  },
  {
    comune: 'Giffoni Sei Casali',
    provincia: Province.SA,
  },
  {
    comune: 'Giffoni Valle Piana',
    provincia: Province.SA,
  },
  {
    comune: 'Gioi',
    provincia: Province.SA,
  },
  {
    comune: 'Giungano',
    provincia: Province.SA,
  },
  {
    comune: 'Ispani',
    provincia: Province.SA,
  },
  {
    comune: 'Laureana Cilento',
    provincia: Province.SA,
  },
  {
    comune: 'Laurino',
    provincia: Province.SA,
  },
  {
    comune: 'Laurito',
    provincia: Province.SA,
  },
  {
    comune: 'Laviano',
    provincia: Province.SA,
  },
  {
    comune: 'Lustra',
    provincia: Province.SA,
  },
  {
    comune: 'Magliano Vetere',
    provincia: Province.SA,
  },
  {
    comune: 'Maiori',
    provincia: Province.SA,
  },
  {
    comune: 'Mercato San Severino',
    provincia: Province.SA,
  },
  {
    comune: 'Minori',
    provincia: Province.SA,
  },
  {
    comune: 'Moio della Civitella',
    provincia: Province.SA,
  },
  {
    comune: 'Montano Antilia',
    provincia: Province.SA,
  },
  {
    comune: 'Montecorice',
    provincia: Province.SA,
  },
  {
    comune: 'Montecorvino Pugliano',
    provincia: Province.SA,
  },
  {
    comune: 'Montecorvino Rovella',
    provincia: Province.SA,
  },
  {
    comune: 'Monteforte Cilento',
    provincia: Province.SA,
  },
  {
    comune: 'Monte San Giacomo',
    provincia: Province.SA,
  },
  {
    comune: 'Montesano sulla Marcellana',
    provincia: Province.SA,
  },
  {
    comune: 'Morigerati',
    provincia: Province.SA,
  },
  {
    comune: 'Nocera Inferiore',
    provincia: Province.SA,
  },
  {
    comune: 'Nocera Superiore',
    provincia: Province.SA,
  },
  {
    comune: 'Novi Velia',
    provincia: Province.SA,
  },
  {
    comune: 'Ogliastro Cilento',
    provincia: Province.SA,
  },
  {
    comune: 'Olevano sul Tusciano',
    provincia: Province.SA,
  },
  {
    comune: 'Oliveto Citra',
    provincia: Province.SA,
  },
  {
    comune: 'Omignano',
    provincia: Province.SA,
  },
  {
    comune: 'Orria',
    provincia: Province.SA,
  },
  {
    comune: 'Ottati',
    provincia: Province.SA,
  },
  {
    comune: 'Padula',
    provincia: Province.SA,
  },
  {
    comune: 'Pagani',
    provincia: Province.SA,
  },
  {
    comune: 'Palomonte',
    provincia: Province.SA,
  },
  {
    comune: 'Pellezzano',
    provincia: Province.SA,
  },
  {
    comune: 'Perdifumo',
    provincia: Province.SA,
  },
  {
    comune: 'Perito',
    provincia: Province.SA,
  },
  {
    comune: 'Pertosa',
    provincia: Province.SA,
  },
  {
    comune: 'Petina',
    provincia: Province.SA,
  },
  {
    comune: 'Piaggine',
    provincia: Province.SA,
  },
  {
    comune: 'Pisciotta',
    provincia: Province.SA,
  },
  {
    comune: 'Polla',
    provincia: Province.SA,
  },
  {
    comune: 'Pollica',
    provincia: Province.SA,
  },
  {
    comune: 'Pontecagnano Faiano',
    provincia: Province.SA,
  },
  {
    comune: 'Positano',
    provincia: Province.SA,
  },
  {
    comune: 'Postiglione',
    provincia: Province.SA,
  },
  {
    comune: 'Praiano',
    provincia: Province.SA,
  },
  {
    comune: 'Prignano Cilento',
    provincia: Province.SA,
  },
  {
    comune: 'Ravello',
    provincia: Province.SA,
  },
  {
    comune: 'Ricigliano',
    provincia: Province.SA,
  },
  {
    comune: 'Roccadaspide',
    provincia: Province.SA,
  },
  {
    comune: 'Roccagloriosa',
    provincia: Province.SA,
  },
  {
    comune: 'Roccapiemonte',
    provincia: Province.SA,
  },
  {
    comune: 'Rofrano',
    provincia: Province.SA,
  },
  {
    comune: 'Romagnano al Monte',
    provincia: Province.SA,
  },
  {
    comune: 'Roscigno',
    provincia: Province.SA,
  },
  {
    comune: 'Rutino',
    provincia: Province.SA,
  },
  {
    comune: 'Sacco',
    provincia: Province.SA,
  },
  {
    comune: 'Sala Consilina',
    provincia: Province.SA,
  },
  {
    comune: 'Salento',
    provincia: Province.SA,
  },
  {
    comune: 'Salerno',
    provincia: Province.SA,
  },
  {
    comune: 'Salvitelle',
    provincia: Province.SA,
  },
  {
    comune: 'San Cipriano Picentino',
    provincia: Province.SA,
  },
  {
    comune: 'San Giovanni a Piro',
    provincia: Province.SA,
  },
  {
    comune: 'San Gregorio Magno',
    provincia: Province.SA,
  },
  {
    comune: 'San Mango Piemonte',
    provincia: Province.SA,
  },
  {
    comune: 'San Marzano sul Sarno',
    provincia: Province.SA,
  },
  {
    comune: 'San Mauro Cilento',
    provincia: Province.SA,
  },
  {
    comune: 'San Mauro la Bruca',
    provincia: Province.SA,
  },
  {
    comune: 'San Pietro al Tanagro',
    provincia: Province.SA,
  },
  {
    comune: 'San Rufo',
    provincia: Province.SA,
  },
  {
    comune: 'Santa Marina',
    provincia: Province.SA,
  },
  {
    comune: "Sant'Angelo a Fasanella",
    provincia: Province.SA,
  },
  {
    comune: "Sant'Arsenio",
    provincia: Province.SA,
  },
  {
    comune: "Sant'Egidio del Monte Albino",
    provincia: Province.SA,
  },
  {
    comune: 'Santomenna',
    provincia: Province.SA,
  },
  {
    comune: 'San Valentino Torio',
    provincia: Province.SA,
  },
  {
    comune: 'Sanza',
    provincia: Province.SA,
  },
  {
    comune: 'Sapri',
    provincia: Province.SA,
  },
  {
    comune: 'Sarno',
    provincia: Province.SA,
  },
  {
    comune: 'Sassano',
    provincia: Province.SA,
  },
  {
    comune: 'Scafati',
    provincia: Province.SA,
  },
  {
    comune: 'Scala',
    provincia: Province.SA,
  },
  {
    comune: 'Serramezzana',
    provincia: Province.SA,
  },
  {
    comune: 'Serre',
    provincia: Province.SA,
  },
  {
    comune: 'Sessa Cilento',
    provincia: Province.SA,
  },
  {
    comune: 'Siano',
    provincia: Province.SA,
  },
  {
    comune: 'Sicignano degli Alburni',
    provincia: Province.SA,
  },
  {
    comune: 'Stella Cilento',
    provincia: Province.SA,
  },
  {
    comune: 'Stio',
    provincia: Province.SA,
  },
  {
    comune: 'Teggiano',
    provincia: Province.SA,
  },
  {
    comune: 'Torchiara',
    provincia: Province.SA,
  },
  {
    comune: 'Torraca',
    provincia: Province.SA,
  },
  {
    comune: 'Torre Orsaia',
    provincia: Province.SA,
  },
  {
    comune: 'Tortorella',
    provincia: Province.SA,
  },
  {
    comune: 'Tramonti',
    provincia: Province.SA,
  },
  {
    comune: 'Trentinara',
    provincia: Province.SA,
  },
  {
    comune: "Valle dell'Angelo",
    provincia: Province.SA,
  },
  {
    comune: 'Vallo della Lucania',
    provincia: Province.SA,
  },
  {
    comune: 'Valva',
    provincia: Province.SA,
  },
  {
    comune: 'Vibonati',
    provincia: Province.SA,
  },
  {
    comune: 'Vietri sul Mare',
    provincia: Province.SA,
  },
  {
    comune: 'Bellizzi',
    provincia: Province.SA,
  },
  {
    comune: 'Accadia',
    provincia: Province.FG,
  },
  {
    comune: 'Alberona',
    provincia: Province.FG,
  },
  {
    comune: 'Anzano di Puglia',
    provincia: Province.FG,
  },
  {
    comune: 'Apricena',
    provincia: Province.FG,
  },
  {
    comune: 'Ascoli Satriano',
    provincia: Province.FG,
  },
  {
    comune: 'Biccari',
    provincia: Province.FG,
  },
  {
    comune: 'Bovino',
    provincia: Province.FG,
  },
  {
    comune: 'Cagnano Varano',
    provincia: Province.FG,
  },
  {
    comune: 'Candela',
    provincia: Province.FG,
  },
  {
    comune: 'Carapelle',
    provincia: Province.FG,
  },
  {
    comune: 'Carlantino',
    provincia: Province.FG,
  },
  {
    comune: 'Carpino',
    provincia: Province.FG,
  },
  {
    comune: 'Casalnuovo Monterotaro',
    provincia: Province.FG,
  },
  {
    comune: 'Casalvecchio di Puglia',
    provincia: Province.FG,
  },
  {
    comune: 'Castelluccio dei Sauri',
    provincia: Province.FG,
  },
  {
    comune: 'Castelluccio Valmaggiore',
    provincia: Province.FG,
  },
  {
    comune: 'Castelnuovo della Daunia',
    provincia: Province.FG,
  },
  {
    comune: 'Celenza Valfortore',
    provincia: Province.FG,
  },
  {
    comune: 'Celle di San Vito',
    provincia: Province.FG,
  },
  {
    comune: 'Cerignola',
    provincia: Province.FG,
  },
  {
    comune: 'Chieuti',
    provincia: Province.FG,
  },
  {
    comune: 'Deliceto',
    provincia: Province.FG,
  },
  {
    comune: 'Faeto',
    provincia: Province.FG,
  },
  {
    comune: 'Foggia',
    provincia: Province.FG,
  },
  {
    comune: 'Ischitella',
    provincia: Province.FG,
  },
  {
    comune: 'Isole Tremiti',
    provincia: Province.FG,
  },
  {
    comune: 'Lesina',
    provincia: Province.FG,
  },
  {
    comune: 'Lucera',
    provincia: Province.FG,
  },
  {
    comune: 'Manfredonia',
    provincia: Province.FG,
  },
  {
    comune: 'Mattinata',
    provincia: Province.FG,
  },
  {
    comune: 'Monteleone di Puglia',
    provincia: Province.FG,
  },
  {
    comune: "Monte Sant'Angelo",
    provincia: Province.FG,
  },
  {
    comune: 'Motta Montecorvino',
    provincia: Province.FG,
  },
  {
    comune: 'Orsara di Puglia',
    provincia: Province.FG,
  },
  {
    comune: 'Orta Nova',
    provincia: Province.FG,
  },
  {
    comune: 'Panni',
    provincia: Province.FG,
  },
  {
    comune: 'Peschici',
    provincia: Province.FG,
  },
  {
    comune: 'Pietramontecorvino',
    provincia: Province.FG,
  },
  {
    comune: 'Poggio Imperiale',
    provincia: Province.FG,
  },
  {
    comune: 'Rignano Garganico',
    provincia: Province.FG,
  },
  {
    comune: "Rocchetta Sant'Antonio",
    provincia: Province.FG,
  },
  {
    comune: 'Rodi Garganico',
    provincia: Province.FG,
  },
  {
    comune: 'Roseto Valfortore',
    provincia: Province.FG,
  },
  {
    comune: 'San Giovanni Rotondo',
    provincia: Province.FG,
  },
  {
    comune: 'San Marco in Lamis',
    provincia: Province.FG,
  },
  {
    comune: 'San Marco la Catola',
    provincia: Province.FG,
  },
  {
    comune: 'San Nicandro Garganico',
    provincia: Province.FG,
  },
  {
    comune: 'San Paolo di Civitate',
    provincia: Province.FG,
  },
  {
    comune: 'San Severo',
    provincia: Province.FG,
  },
  {
    comune: "Sant'Agata di Puglia",
    provincia: Province.FG,
  },
  {
    comune: 'Serracapriola',
    provincia: Province.FG,
  },
  {
    comune: 'Stornara',
    provincia: Province.FG,
  },
  {
    comune: 'Stornarella',
    provincia: Province.FG,
  },
  {
    comune: 'Torremaggiore',
    provincia: Province.FG,
  },
  {
    comune: 'Troia',
    provincia: Province.FG,
  },
  {
    comune: 'Vico del Gargano',
    provincia: Province.FG,
  },
  {
    comune: 'Vieste',
    provincia: Province.FG,
  },
  {
    comune: 'Volturara Appula',
    provincia: Province.FG,
  },
  {
    comune: 'Volturino',
    provincia: Province.FG,
  },
  {
    comune: 'Ordona',
    provincia: Province.FG,
  },
  {
    comune: 'Zapponeta',
    provincia: Province.FG,
  },
  {
    comune: 'Acquaviva delle Fonti',
    provincia: Province.BA,
  },
  {
    comune: 'Adelfia',
    provincia: Province.BA,
  },
  {
    comune: 'Alberobello',
    provincia: Province.BA,
  },
  {
    comune: 'Altamura',
    provincia: Province.BA,
  },
  {
    comune: 'Bari',
    provincia: Province.BA,
  },
  {
    comune: 'Binetto',
    provincia: Province.BA,
  },
  {
    comune: 'Bitetto',
    provincia: Province.BA,
  },
  {
    comune: 'Bitonto',
    provincia: Province.BA,
  },
  {
    comune: 'Bitritto',
    provincia: Province.BA,
  },
  {
    comune: 'Capurso',
    provincia: Province.BA,
  },
  {
    comune: 'Casamassima',
    provincia: Province.BA,
  },
  {
    comune: 'Cassano delle Murge',
    provincia: Province.BA,
  },
  {
    comune: 'Castellana Grotte',
    provincia: Province.BA,
  },
  {
    comune: 'Cellamare',
    provincia: Province.BA,
  },
  {
    comune: 'Conversano',
    provincia: Province.BA,
  },
  {
    comune: 'Corato',
    provincia: Province.BA,
  },
  {
    comune: 'Gioia del Colle',
    provincia: Province.BA,
  },
  {
    comune: 'Giovinazzo',
    provincia: Province.BA,
  },
  {
    comune: 'Gravina in Puglia',
    provincia: Province.BA,
  },
  {
    comune: 'Grumo Appula',
    provincia: Province.BA,
  },
  {
    comune: 'Locorotondo',
    provincia: Province.BA,
  },
  {
    comune: 'Modugno',
    provincia: Province.BA,
  },
  {
    comune: 'Mola di Bari',
    provincia: Province.BA,
  },
  {
    comune: 'Molfetta',
    provincia: Province.BA,
  },
  {
    comune: 'Monopoli',
    provincia: Province.BA,
  },
  {
    comune: 'Noci',
    provincia: Province.BA,
  },
  {
    comune: 'Noicattaro',
    provincia: Province.BA,
  },
  {
    comune: 'Palo del Colle',
    provincia: Province.BA,
  },
  {
    comune: 'Poggiorsini',
    provincia: Province.BA,
  },
  {
    comune: 'Polignano a Mare',
    provincia: Province.BA,
  },
  {
    comune: 'Putignano',
    provincia: Province.BA,
  },
  {
    comune: 'Rutigliano',
    provincia: Province.BA,
  },
  {
    comune: 'Ruvo di Puglia',
    provincia: Province.BA,
  },
  {
    comune: 'Sammichele di Bari',
    provincia: Province.BA,
  },
  {
    comune: 'Sannicandro di Bari',
    provincia: Province.BA,
  },
  {
    comune: 'Santeramo in Colle',
    provincia: Province.BA,
  },
  {
    comune: 'Terlizzi',
    provincia: Province.BA,
  },
  {
    comune: 'Toritto',
    provincia: Province.BA,
  },
  {
    comune: 'Triggiano',
    provincia: Province.BA,
  },
  {
    comune: 'Turi',
    provincia: Province.BA,
  },
  {
    comune: 'Valenzano',
    provincia: Province.BA,
  },
  {
    comune: 'Avetrana',
    provincia: Province.TA,
  },
  {
    comune: 'Carosino',
    provincia: Province.TA,
  },
  {
    comune: 'Castellaneta',
    provincia: Province.TA,
  },
  {
    comune: 'Crispiano',
    provincia: Province.TA,
  },
  {
    comune: 'Faggiano',
    provincia: Province.TA,
  },
  {
    comune: 'Fragagnano',
    provincia: Province.TA,
  },
  {
    comune: 'Ginosa',
    provincia: Province.TA,
  },
  {
    comune: 'Grottaglie',
    provincia: Province.TA,
  },
  {
    comune: 'Laterza',
    provincia: Province.TA,
  },
  {
    comune: 'Leporano',
    provincia: Province.TA,
  },
  {
    comune: 'Lizzano',
    provincia: Province.TA,
  },
  {
    comune: 'Manduria',
    provincia: Province.TA,
  },
  {
    comune: 'Martina Franca',
    provincia: Province.TA,
  },
  {
    comune: 'Maruggio',
    provincia: Province.TA,
  },
  {
    comune: 'Massafra',
    provincia: Province.TA,
  },
  {
    comune: 'Monteiasi',
    provincia: Province.TA,
  },
  {
    comune: 'Montemesola',
    provincia: Province.TA,
  },
  {
    comune: 'Monteparano',
    provincia: Province.TA,
  },
  {
    comune: 'Mottola',
    provincia: Province.TA,
  },
  {
    comune: 'Palagianello',
    provincia: Province.TA,
  },
  {
    comune: 'Palagiano',
    provincia: Province.TA,
  },
  {
    comune: 'Pulsano',
    provincia: Province.TA,
  },
  {
    comune: 'Roccaforzata',
    provincia: Province.TA,
  },
  {
    comune: 'San Giorgio Ionico',
    provincia: Province.TA,
  },
  {
    comune: 'San Marzano di San Giuseppe',
    provincia: Province.TA,
  },
  {
    comune: 'Sava',
    provincia: Province.TA,
  },
  {
    comune: 'Taranto',
    provincia: Province.TA,
  },
  {
    comune: 'Torricella',
    provincia: Province.TA,
  },
  {
    comune: 'Statte',
    provincia: Province.TA,
  },
  {
    comune: 'Brindisi',
    provincia: Province.BR,
  },
  {
    comune: 'Carovigno',
    provincia: Province.BR,
  },
  {
    comune: 'Ceglie Messapica',
    provincia: Province.BR,
  },
  {
    comune: 'Cellino San Marco',
    provincia: Province.BR,
  },
  {
    comune: 'Cisternino',
    provincia: Province.BR,
  },
  {
    comune: 'Erchie',
    provincia: Province.BR,
  },
  {
    comune: 'Fasano',
    provincia: Province.BR,
  },
  {
    comune: 'Francavilla Fontana',
    provincia: Province.BR,
  },
  {
    comune: 'Latiano',
    provincia: Province.BR,
  },
  {
    comune: 'Mesagne',
    provincia: Province.BR,
  },
  {
    comune: 'Oria',
    provincia: Province.BR,
  },
  {
    comune: 'Ostuni',
    provincia: Province.BR,
  },
  {
    comune: 'San Donaci',
    provincia: Province.BR,
  },
  {
    comune: 'San Michele Salentino',
    provincia: Province.BR,
  },
  {
    comune: 'San Pancrazio Salentino',
    provincia: Province.BR,
  },
  {
    comune: 'San Pietro Vernotico',
    provincia: Province.BR,
  },
  {
    comune: 'San Vito dei Normanni',
    provincia: Province.BR,
  },
  {
    comune: 'Torchiarolo',
    provincia: Province.BR,
  },
  {
    comune: 'Torre Santa Susanna',
    provincia: Province.BR,
  },
  {
    comune: 'Villa Castelli',
    provincia: Province.BR,
  },
  {
    comune: 'Alessano',
    provincia: Province.LE,
  },
  {
    comune: 'Alezio',
    provincia: Province.LE,
  },
  {
    comune: 'Alliste',
    provincia: Province.LE,
  },
  {
    comune: 'Andrano',
    provincia: Province.LE,
  },
  {
    comune: 'Aradeo',
    provincia: Province.LE,
  },
  {
    comune: 'Arnesano',
    provincia: Province.LE,
  },
  {
    comune: 'Bagnolo del Salento',
    provincia: Province.LE,
  },
  {
    comune: 'Botrugno',
    provincia: Province.LE,
  },
  {
    comune: 'Calimera',
    provincia: Province.LE,
  },
  {
    comune: 'Campi Salentina',
    provincia: Province.LE,
  },
  {
    comune: 'Cannole',
    provincia: Province.LE,
  },
  {
    comune: 'Caprarica di Lecce',
    provincia: Province.LE,
  },
  {
    comune: 'Carmiano',
    provincia: Province.LE,
  },
  {
    comune: 'Carpignano Salentino',
    provincia: Province.LE,
  },
  {
    comune: 'Casarano',
    provincia: Province.LE,
  },
  {
    comune: 'Castri di Lecce',
    provincia: Province.LE,
  },
  {
    comune: "Castrignano de' Greci",
    provincia: Province.LE,
  },
  {
    comune: 'Castrignano del Capo',
    provincia: Province.LE,
  },
  {
    comune: 'Cavallino',
    provincia: Province.LE,
  },
  {
    comune: 'Collepasso',
    provincia: Province.LE,
  },
  {
    comune: 'Copertino',
    provincia: Province.LE,
  },
  {
    comune: "Corigliano d'Otranto",
    provincia: Province.LE,
  },
  {
    comune: 'Corsano',
    provincia: Province.LE,
  },
  {
    comune: 'Cursi',
    provincia: Province.LE,
  },
  {
    comune: 'Cutrofiano',
    provincia: Province.LE,
  },
  {
    comune: 'Diso',
    provincia: Province.LE,
  },
  {
    comune: 'Gagliano del Capo',
    provincia: Province.LE,
  },
  {
    comune: 'Galatina',
    provincia: Province.LE,
  },
  {
    comune: 'Galatone',
    provincia: Province.LE,
  },
  {
    comune: 'Gallipoli',
    provincia: Province.LE,
  },
  {
    comune: 'Giuggianello',
    provincia: Province.LE,
  },
  {
    comune: 'Giurdignano',
    provincia: Province.LE,
  },
  {
    comune: 'Guagnano',
    provincia: Province.LE,
  },
  {
    comune: 'Lecce',
    provincia: Province.LE,
  },
  {
    comune: 'Lequile',
    provincia: Province.LE,
  },
  {
    comune: 'Leverano',
    provincia: Province.LE,
  },
  {
    comune: 'Lizzanello',
    provincia: Province.LE,
  },
  {
    comune: 'Maglie',
    provincia: Province.LE,
  },
  {
    comune: 'Martano',
    provincia: Province.LE,
  },
  {
    comune: 'Martignano',
    provincia: Province.LE,
  },
  {
    comune: 'Matino',
    provincia: Province.LE,
  },
  {
    comune: 'Melendugno',
    provincia: Province.LE,
  },
  {
    comune: 'Melissano',
    provincia: Province.LE,
  },
  {
    comune: 'Melpignano',
    provincia: Province.LE,
  },
  {
    comune: 'Miggiano',
    provincia: Province.LE,
  },
  {
    comune: 'Minervino di Lecce',
    provincia: Province.LE,
  },
  {
    comune: 'Monteroni di Lecce',
    provincia: Province.LE,
  },
  {
    comune: 'Montesano Salentino',
    provincia: Province.LE,
  },
  {
    comune: 'Morciano di Leuca',
    provincia: Province.LE,
  },
  {
    comune: 'Muro Leccese',
    provincia: Province.LE,
  },
  {
    comune: 'Nardò',
    provincia: Province.LE,
  },
  {
    comune: 'Neviano',
    provincia: Province.LE,
  },
  {
    comune: 'Nociglia',
    provincia: Province.LE,
  },
  {
    comune: 'Novoli',
    provincia: Province.LE,
  },
  {
    comune: 'Ortelle',
    provincia: Province.LE,
  },
  {
    comune: 'Otranto',
    provincia: Province.LE,
  },
  {
    comune: 'Palmariggi',
    provincia: Province.LE,
  },
  {
    comune: 'Parabita',
    provincia: Province.LE,
  },
  {
    comune: 'Patù',
    provincia: Province.LE,
  },
  {
    comune: 'Poggiardo',
    provincia: Province.LE,
  },
  {
    comune: 'Racale',
    provincia: Province.LE,
  },
  {
    comune: 'Ruffano',
    provincia: Province.LE,
  },
  {
    comune: 'Salice Salentino',
    provincia: Province.LE,
  },
  {
    comune: 'Salve',
    provincia: Province.LE,
  },
  {
    comune: 'Sanarica',
    provincia: Province.LE,
  },
  {
    comune: 'San Cesario di Lecce',
    provincia: Province.LE,
  },
  {
    comune: 'San Donato di Lecce',
    provincia: Province.LE,
  },
  {
    comune: 'Sannicola',
    provincia: Province.LE,
  },
  {
    comune: 'San Pietro in Lama',
    provincia: Province.LE,
  },
  {
    comune: 'Santa Cesarea Terme',
    provincia: Province.LE,
  },
  {
    comune: 'Scorrano',
    provincia: Province.LE,
  },
  {
    comune: 'Seclì',
    provincia: Province.LE,
  },
  {
    comune: 'Sogliano Cavour',
    provincia: Province.LE,
  },
  {
    comune: 'Soleto',
    provincia: Province.LE,
  },
  {
    comune: 'Specchia',
    provincia: Province.LE,
  },
  {
    comune: 'Spongano',
    provincia: Province.LE,
  },
  {
    comune: 'Squinzano',
    provincia: Province.LE,
  },
  {
    comune: 'Sternatia',
    provincia: Province.LE,
  },
  {
    comune: 'Supersano',
    provincia: Province.LE,
  },
  {
    comune: 'Surano',
    provincia: Province.LE,
  },
  {
    comune: 'Surbo',
    provincia: Province.LE,
  },
  {
    comune: 'Taurisano',
    provincia: Province.LE,
  },
  {
    comune: 'Taviano',
    provincia: Province.LE,
  },
  {
    comune: 'Tiggiano',
    provincia: Province.LE,
  },
  {
    comune: 'Trepuzzi',
    provincia: Province.LE,
  },
  {
    comune: 'Tricase',
    provincia: Province.LE,
  },
  {
    comune: 'Tuglie',
    provincia: Province.LE,
  },
  {
    comune: 'Ugento',
    provincia: Province.LE,
  },
  {
    comune: 'Uggiano la Chiesa',
    provincia: Province.LE,
  },
  {
    comune: 'Veglie',
    provincia: Province.LE,
  },
  {
    comune: 'Vernole',
    provincia: Province.LE,
  },
  {
    comune: 'Zollino',
    provincia: Province.LE,
  },
  {
    comune: 'San Cassiano',
    provincia: Province.LE,
  },
  {
    comune: 'Castro',
    provincia: Province.LE,
  },
  {
    comune: 'Porto Cesareo',
    provincia: Province.LE,
  },
  {
    comune: 'Presicce-Acquarica',
    provincia: Province.LE,
  },
  {
    comune: 'Andria',
    provincia: Province.BT,
  },
  {
    comune: 'Barletta',
    provincia: Province.BT,
  },
  {
    comune: 'Bisceglie',
    provincia: Province.BT,
  },
  {
    comune: 'Canosa di Puglia',
    provincia: Province.BT,
  },
  {
    comune: 'Margherita di Savoia',
    provincia: Province.BT,
  },
  {
    comune: 'Minervino Murge',
    provincia: Province.BT,
  },
  {
    comune: 'San Ferdinando di Puglia',
    provincia: Province.BT,
  },
  {
    comune: 'Spinazzola',
    provincia: Province.BT,
  },
  {
    comune: 'Trani',
    provincia: Province.BT,
  },
  {
    comune: 'Trinitapoli',
    provincia: Province.BT,
  },
  {
    comune: 'Abriola',
    provincia: Province.PZ,
  },
  {
    comune: 'Acerenza',
    provincia: Province.PZ,
  },
  {
    comune: 'Albano di Lucania',
    provincia: Province.PZ,
  },
  {
    comune: 'Anzi',
    provincia: Province.PZ,
  },
  {
    comune: 'Armento',
    provincia: Province.PZ,
  },
  {
    comune: 'Atella',
    provincia: Province.PZ,
  },
  {
    comune: 'Avigliano',
    provincia: Province.PZ,
  },
  {
    comune: 'Balvano',
    provincia: Province.PZ,
  },
  {
    comune: 'Banzi',
    provincia: Province.PZ,
  },
  {
    comune: 'Baragiano',
    provincia: Province.PZ,
  },
  {
    comune: 'Barile',
    provincia: Province.PZ,
  },
  {
    comune: 'Bella',
    provincia: Province.PZ,
  },
  {
    comune: 'Brienza',
    provincia: Province.PZ,
  },
  {
    comune: 'Brindisi Montagna',
    provincia: Province.PZ,
  },
  {
    comune: 'Calvello',
    provincia: Province.PZ,
  },
  {
    comune: 'Calvera',
    provincia: Province.PZ,
  },
  {
    comune: 'Campomaggiore',
    provincia: Province.PZ,
  },
  {
    comune: 'Cancellara',
    provincia: Province.PZ,
  },
  {
    comune: 'Carbone',
    provincia: Province.PZ,
  },
  {
    comune: 'San Paolo Albanese',
    provincia: Province.PZ,
  },
  {
    comune: 'Castelgrande',
    provincia: Province.PZ,
  },
  {
    comune: 'Castelluccio Inferiore',
    provincia: Province.PZ,
  },
  {
    comune: 'Castelluccio Superiore',
    provincia: Province.PZ,
  },
  {
    comune: 'Castelmezzano',
    provincia: Province.PZ,
  },
  {
    comune: 'Castelsaraceno',
    provincia: Province.PZ,
  },
  {
    comune: "Castronuovo di Sant'Andrea",
    provincia: Province.PZ,
  },
  {
    comune: 'Cersosimo',
    provincia: Province.PZ,
  },
  {
    comune: 'Chiaromonte',
    provincia: Province.PZ,
  },
  {
    comune: 'Corleto Perticara',
    provincia: Province.PZ,
  },
  {
    comune: 'Episcopia',
    provincia: Province.PZ,
  },
  {
    comune: 'Fardella',
    provincia: Province.PZ,
  },
  {
    comune: 'Filiano',
    provincia: Province.PZ,
  },
  {
    comune: 'Forenza',
    provincia: Province.PZ,
  },
  {
    comune: 'Francavilla in Sinni',
    provincia: Province.PZ,
  },
  {
    comune: 'Gallicchio',
    provincia: Province.PZ,
  },
  {
    comune: 'Genzano di Lucania',
    provincia: Province.PZ,
  },
  {
    comune: 'Grumento Nova',
    provincia: Province.PZ,
  },
  {
    comune: 'Guardia Perticara',
    provincia: Province.PZ,
  },
  {
    comune: 'Lagonegro',
    provincia: Province.PZ,
  },
  {
    comune: 'Latronico',
    provincia: Province.PZ,
  },
  {
    comune: 'Laurenzana',
    provincia: Province.PZ,
  },
  {
    comune: 'Lauria',
    provincia: Province.PZ,
  },
  {
    comune: 'Lavello',
    provincia: Province.PZ,
  },
  {
    comune: 'Maratea',
    provincia: Province.PZ,
  },
  {
    comune: 'Marsico Nuovo',
    provincia: Province.PZ,
  },
  {
    comune: 'Marsicovetere',
    provincia: Province.PZ,
  },
  {
    comune: 'Maschito',
    provincia: Province.PZ,
  },
  {
    comune: 'Melfi',
    provincia: Province.PZ,
  },
  {
    comune: 'Missanello',
    provincia: Province.PZ,
  },
  {
    comune: 'Moliterno',
    provincia: Province.PZ,
  },
  {
    comune: 'Montemilone',
    provincia: Province.PZ,
  },
  {
    comune: 'Montemurro',
    provincia: Province.PZ,
  },
  {
    comune: 'Muro Lucano',
    provincia: Province.PZ,
  },
  {
    comune: 'Nemoli',
    provincia: Province.PZ,
  },
  {
    comune: 'Noepoli',
    provincia: Province.PZ,
  },
  {
    comune: 'Oppido Lucano',
    provincia: Province.PZ,
  },
  {
    comune: 'Palazzo San Gervasio',
    provincia: Province.PZ,
  },
  {
    comune: 'Pescopagano',
    provincia: Province.PZ,
  },
  {
    comune: 'Picerno',
    provincia: Province.PZ,
  },
  {
    comune: 'Pietragalla',
    provincia: Province.PZ,
  },
  {
    comune: 'Pietrapertosa',
    provincia: Province.PZ,
  },
  {
    comune: 'Pignola',
    provincia: Province.PZ,
  },
  {
    comune: 'Potenza',
    provincia: Province.PZ,
  },
  {
    comune: 'Rapolla',
    provincia: Province.PZ,
  },
  {
    comune: 'Rapone',
    provincia: Province.PZ,
  },
  {
    comune: 'Rionero in Vulture',
    provincia: Province.PZ,
  },
  {
    comune: 'Ripacandida',
    provincia: Province.PZ,
  },
  {
    comune: 'Rivello',
    provincia: Province.PZ,
  },
  {
    comune: 'Roccanova',
    provincia: Province.PZ,
  },
  {
    comune: 'Rotonda',
    provincia: Province.PZ,
  },
  {
    comune: 'Ruoti',
    provincia: Province.PZ,
  },
  {
    comune: 'Ruvo del Monte',
    provincia: Province.PZ,
  },
  {
    comune: 'San Chirico Nuovo',
    provincia: Province.PZ,
  },
  {
    comune: 'San Chirico Raparo',
    provincia: Province.PZ,
  },
  {
    comune: 'San Costantino Albanese',
    provincia: Province.PZ,
  },
  {
    comune: 'San Fele',
    provincia: Province.PZ,
  },
  {
    comune: "San Martino d'Agri",
    provincia: Province.PZ,
  },
  {
    comune: 'San Severino Lucano',
    provincia: Province.PZ,
  },
  {
    comune: "Sant'Angelo Le Fratte",
    provincia: Province.PZ,
  },
  {
    comune: "Sant'Arcangelo",
    provincia: Province.PZ,
  },
  {
    comune: 'Sarconi',
    provincia: Province.PZ,
  },
  {
    comune: 'Sasso di Castalda',
    provincia: Province.PZ,
  },
  {
    comune: 'Satriano di Lucania',
    provincia: Province.PZ,
  },
  {
    comune: 'Savoia di Lucania',
    provincia: Province.PZ,
  },
  {
    comune: 'Senise',
    provincia: Province.PZ,
  },
  {
    comune: 'Spinoso',
    provincia: Province.PZ,
  },
  {
    comune: 'Teana',
    provincia: Province.PZ,
  },
  {
    comune: 'Terranova di Pollino',
    provincia: Province.PZ,
  },
  {
    comune: 'Tito',
    provincia: Province.PZ,
  },
  {
    comune: 'Tolve',
    provincia: Province.PZ,
  },
  {
    comune: 'Tramutola',
    provincia: Province.PZ,
  },
  {
    comune: 'Trecchina',
    provincia: Province.PZ,
  },
  {
    comune: 'Trivigno',
    provincia: Province.PZ,
  },
  {
    comune: 'Vaglio Basilicata',
    provincia: Province.PZ,
  },
  {
    comune: 'Venosa',
    provincia: Province.PZ,
  },
  {
    comune: 'Vietri di Potenza',
    provincia: Province.PZ,
  },
  {
    comune: 'Viggianello',
    provincia: Province.PZ,
  },
  {
    comune: 'Viggiano',
    provincia: Province.PZ,
  },
  {
    comune: 'Ginestra',
    provincia: Province.PZ,
  },
  {
    comune: 'Paterno',
    provincia: Province.PZ,
  },
  {
    comune: 'Accettura',
    provincia: Province.MT,
  },
  {
    comune: 'Aliano',
    provincia: Province.MT,
  },
  {
    comune: 'Bernalda',
    provincia: Province.MT,
  },
  {
    comune: 'Calciano',
    provincia: Province.MT,
  },
  {
    comune: 'Cirigliano',
    provincia: Province.MT,
  },
  {
    comune: 'Colobraro',
    provincia: Province.MT,
  },
  {
    comune: 'Craco',
    provincia: Province.MT,
  },
  {
    comune: 'Ferrandina',
    provincia: Province.MT,
  },
  {
    comune: 'Garaguso',
    provincia: Province.MT,
  },
  {
    comune: 'Gorgoglione',
    provincia: Province.MT,
  },
  {
    comune: 'Grassano',
    provincia: Province.MT,
  },
  {
    comune: 'Grottole',
    provincia: Province.MT,
  },
  {
    comune: 'Irsina',
    provincia: Province.MT,
  },
  {
    comune: 'Matera',
    provincia: Province.MT,
  },
  {
    comune: 'Miglionico',
    provincia: Province.MT,
  },
  {
    comune: 'Montalbano Jonico',
    provincia: Province.MT,
  },
  {
    comune: 'Montescaglioso',
    provincia: Province.MT,
  },
  {
    comune: 'Nova Siri',
    provincia: Province.MT,
  },
  {
    comune: 'Oliveto Lucano',
    provincia: Province.MT,
  },
  {
    comune: 'Pisticci',
    provincia: Province.MT,
  },
  {
    comune: 'Policoro',
    provincia: Province.MT,
  },
  {
    comune: 'Pomarico',
    provincia: Province.MT,
  },
  {
    comune: 'Rotondella',
    provincia: Province.MT,
  },
  {
    comune: 'Salandra',
    provincia: Province.MT,
  },
  {
    comune: 'San Giorgio Lucano',
    provincia: Province.MT,
  },
  {
    comune: 'San Mauro Forte',
    provincia: Province.MT,
  },
  {
    comune: 'Stigliano',
    provincia: Province.MT,
  },
  {
    comune: 'Tricarico',
    provincia: Province.MT,
  },
  {
    comune: 'Tursi',
    provincia: Province.MT,
  },
  {
    comune: 'Valsinni',
    provincia: Province.MT,
  },
  {
    comune: 'Scanzano Jonico',
    provincia: Province.MT,
  },
  {
    comune: 'Acquaformosa',
    provincia: Province.CS,
  },
  {
    comune: 'Acquappesa',
    provincia: Province.CS,
  },
  {
    comune: 'Acri',
    provincia: Province.CS,
  },
  {
    comune: 'Aiello Calabro',
    provincia: Province.CS,
  },
  {
    comune: 'Aieta',
    provincia: Province.CS,
  },
  {
    comune: 'Albidona',
    provincia: Province.CS,
  },
  {
    comune: 'Alessandria del Carretto',
    provincia: Province.CS,
  },
  {
    comune: 'Altilia',
    provincia: Province.CS,
  },
  {
    comune: 'Altomonte',
    provincia: Province.CS,
  },
  {
    comune: 'Amantea',
    provincia: Province.CS,
  },
  {
    comune: 'Amendolara',
    provincia: Province.CS,
  },
  {
    comune: 'Aprigliano',
    provincia: Province.CS,
  },
  {
    comune: 'Belmonte Calabro',
    provincia: Province.CS,
  },
  {
    comune: 'Belsito',
    provincia: Province.CS,
  },
  {
    comune: 'Belvedere Marittimo',
    provincia: Province.CS,
  },
  {
    comune: 'Bianchi',
    provincia: Province.CS,
  },
  {
    comune: 'Bisignano',
    provincia: Province.CS,
  },
  {
    comune: 'Bocchigliero',
    provincia: Province.CS,
  },
  {
    comune: 'Bonifati',
    provincia: Province.CS,
  },
  {
    comune: 'Buonvicino',
    provincia: Province.CS,
  },
  {
    comune: 'Calopezzati',
    provincia: Province.CS,
  },
  {
    comune: 'Caloveto',
    provincia: Province.CS,
  },
  {
    comune: 'Campana',
    provincia: Province.CS,
  },
  {
    comune: 'Canna',
    provincia: Province.CS,
  },
  {
    comune: 'Cariati',
    provincia: Province.CS,
  },
  {
    comune: 'Carolei',
    provincia: Province.CS,
  },
  {
    comune: 'Carpanzano',
    provincia: Province.CS,
  },
  {
    comune: "Cassano all'Ionio",
    provincia: Province.CS,
  },
  {
    comune: 'Castiglione Cosentino',
    provincia: Province.CS,
  },
  {
    comune: 'Castrolibero',
    provincia: Province.CS,
  },
  {
    comune: 'Castroregio',
    provincia: Province.CS,
  },
  {
    comune: 'Castrovillari',
    provincia: Province.CS,
  },
  {
    comune: 'Celico',
    provincia: Province.CS,
  },
  {
    comune: 'Cellara',
    provincia: Province.CS,
  },
  {
    comune: 'Cerchiara di Calabria',
    provincia: Province.CS,
  },
  {
    comune: 'Cerisano',
    provincia: Province.CS,
  },
  {
    comune: 'Cervicati',
    provincia: Province.CS,
  },
  {
    comune: 'Cerzeto',
    provincia: Province.CS,
  },
  {
    comune: 'Cetraro',
    provincia: Province.CS,
  },
  {
    comune: 'Civita',
    provincia: Province.CS,
  },
  {
    comune: 'Cleto',
    provincia: Province.CS,
  },
  {
    comune: 'Colosimi',
    provincia: Province.CS,
  },
  {
    comune: 'Cosenza',
    provincia: Province.CS,
  },
  {
    comune: 'Cropalati',
    provincia: Province.CS,
  },
  {
    comune: 'Crosia',
    provincia: Province.CS,
  },
  {
    comune: 'Diamante',
    provincia: Province.CS,
  },
  {
    comune: 'Dipignano',
    provincia: Province.CS,
  },
  {
    comune: 'Domanico',
    provincia: Province.CS,
  },
  {
    comune: 'Fagnano Castello',
    provincia: Province.CS,
  },
  {
    comune: 'Falconara Albanese',
    provincia: Province.CS,
  },
  {
    comune: 'Figline Vegliaturo',
    provincia: Province.CS,
  },
  {
    comune: 'Firmo',
    provincia: Province.CS,
  },
  {
    comune: 'Fiumefreddo Bruzio',
    provincia: Province.CS,
  },
  {
    comune: 'Francavilla Marittima',
    provincia: Province.CS,
  },
  {
    comune: 'Frascineto',
    provincia: Province.CS,
  },
  {
    comune: 'Fuscaldo',
    provincia: Province.CS,
  },
  {
    comune: 'Grimaldi',
    provincia: Province.CS,
  },
  {
    comune: 'Grisolia',
    provincia: Province.CS,
  },
  {
    comune: 'Guardia Piemontese',
    provincia: Province.CS,
  },
  {
    comune: 'Lago',
    provincia: Province.CS,
  },
  {
    comune: 'Laino Borgo',
    provincia: Province.CS,
  },
  {
    comune: 'Laino Castello',
    provincia: Province.CS,
  },
  {
    comune: 'Lappano',
    provincia: Province.CS,
  },
  {
    comune: 'Lattarico',
    provincia: Province.CS,
  },
  {
    comune: 'Longobardi',
    provincia: Province.CS,
  },
  {
    comune: 'Longobucco',
    provincia: Province.CS,
  },
  {
    comune: 'Lungro',
    provincia: Province.CS,
  },
  {
    comune: 'Luzzi',
    provincia: Province.CS,
  },
  {
    comune: 'Maierà',
    provincia: Province.CS,
  },
  {
    comune: 'Malito',
    provincia: Province.CS,
  },
  {
    comune: 'Malvito',
    provincia: Province.CS,
  },
  {
    comune: 'Mandatoriccio',
    provincia: Province.CS,
  },
  {
    comune: 'Mangone',
    provincia: Province.CS,
  },
  {
    comune: 'Marano Marchesato',
    provincia: Province.CS,
  },
  {
    comune: 'Marano Principato',
    provincia: Province.CS,
  },
  {
    comune: 'Marzi',
    provincia: Province.CS,
  },
  {
    comune: 'Mendicino',
    provincia: Province.CS,
  },
  {
    comune: 'Mongrassano',
    provincia: Province.CS,
  },
  {
    comune: 'Montalto Uffugo',
    provincia: Province.CS,
  },
  {
    comune: 'Montegiordano',
    provincia: Province.CS,
  },
  {
    comune: 'Morano Calabro',
    provincia: Province.CS,
  },
  {
    comune: 'Mormanno',
    provincia: Province.CS,
  },
  {
    comune: 'Mottafollone',
    provincia: Province.CS,
  },
  {
    comune: 'Nocara',
    provincia: Province.CS,
  },
  {
    comune: 'Oriolo',
    provincia: Province.CS,
  },
  {
    comune: 'Orsomarso',
    provincia: Province.CS,
  },
  {
    comune: 'Paludi',
    provincia: Province.CS,
  },
  {
    comune: 'Panettieri',
    provincia: Province.CS,
  },
  {
    comune: 'Paola',
    provincia: Province.CS,
  },
  {
    comune: 'Papasidero',
    provincia: Province.CS,
  },
  {
    comune: 'Parenti',
    provincia: Province.CS,
  },
  {
    comune: 'Paterno Calabro',
    provincia: Province.CS,
  },
  {
    comune: 'Pedivigliano',
    provincia: Province.CS,
  },
  {
    comune: 'Piane Crati',
    provincia: Province.CS,
  },
  {
    comune: 'Pietrafitta',
    provincia: Province.CS,
  },
  {
    comune: 'Pietrapaola',
    provincia: Province.CS,
  },
  {
    comune: 'Plataci',
    provincia: Province.CS,
  },
  {
    comune: 'Praia a Mare',
    provincia: Province.CS,
  },
  {
    comune: 'Rende',
    provincia: Province.CS,
  },
  {
    comune: 'Rocca Imperiale',
    provincia: Province.CS,
  },
  {
    comune: 'Roggiano Gravina',
    provincia: Province.CS,
  },
  {
    comune: 'Rogliano',
    provincia: Province.CS,
  },
  {
    comune: 'Rose',
    provincia: Province.CS,
  },
  {
    comune: 'Roseto Capo Spulico',
    provincia: Province.CS,
  },
  {
    comune: 'Rota Greca',
    provincia: Province.CS,
  },
  {
    comune: 'Rovito',
    provincia: Province.CS,
  },
  {
    comune: 'San Basile',
    provincia: Province.CS,
  },
  {
    comune: 'San Benedetto Ullano',
    provincia: Province.CS,
  },
  {
    comune: 'San Cosmo Albanese',
    provincia: Province.CS,
  },
  {
    comune: 'San Demetrio Corone',
    provincia: Province.CS,
  },
  {
    comune: 'San Donato di Ninea',
    provincia: Province.CS,
  },
  {
    comune: 'San Fili',
    provincia: Province.CS,
  },
  {
    comune: 'Sangineto',
    provincia: Province.CS,
  },
  {
    comune: 'San Giorgio Albanese',
    provincia: Province.CS,
  },
  {
    comune: 'San Giovanni in Fiore',
    provincia: Province.CS,
  },
  {
    comune: 'San Lorenzo Bellizzi',
    provincia: Province.CS,
  },
  {
    comune: 'San Lorenzo del Vallo',
    provincia: Province.CS,
  },
  {
    comune: 'San Lucido',
    provincia: Province.CS,
  },
  {
    comune: 'San Marco Argentano',
    provincia: Province.CS,
  },
  {
    comune: 'San Martino di Finita',
    provincia: Province.CS,
  },
  {
    comune: 'San Nicola Arcella',
    provincia: Province.CS,
  },
  {
    comune: 'San Pietro in Amantea',
    provincia: Province.CS,
  },
  {
    comune: 'San Pietro in Guarano',
    provincia: Province.CS,
  },
  {
    comune: 'San Sosti',
    provincia: Province.CS,
  },
  {
    comune: 'Santa Caterina Albanese',
    provincia: Province.CS,
  },
  {
    comune: 'Santa Domenica Talao',
    provincia: Province.CS,
  },
  {
    comune: "Sant'Agata di Esaro",
    provincia: Province.CS,
  },
  {
    comune: 'Santa Maria del Cedro',
    provincia: Province.CS,
  },
  {
    comune: "Santa Sofia d'Epiro",
    provincia: Province.CS,
  },
  {
    comune: 'Santo Stefano di Rogliano',
    provincia: Province.CS,
  },
  {
    comune: 'San Vincenzo La Costa',
    provincia: Province.CS,
  },
  {
    comune: 'Saracena',
    provincia: Province.CS,
  },
  {
    comune: 'Scala Coeli',
    provincia: Province.CS,
  },
  {
    comune: 'Scalea',
    provincia: Province.CS,
  },
  {
    comune: 'Scigliano',
    provincia: Province.CS,
  },
  {
    comune: "Serra d'Aiello",
    provincia: Province.CS,
  },
  {
    comune: 'Spezzano Albanese',
    provincia: Province.CS,
  },
  {
    comune: 'Spezzano della Sila',
    provincia: Province.CS,
  },
  {
    comune: 'Tarsia',
    provincia: Province.CS,
  },
  {
    comune: 'Terranova da Sibari',
    provincia: Province.CS,
  },
  {
    comune: 'Terravecchia',
    provincia: Province.CS,
  },
  {
    comune: 'Torano Castello',
    provincia: Province.CS,
  },
  {
    comune: 'Tortora',
    provincia: Province.CS,
  },
  {
    comune: 'Trebisacce',
    provincia: Province.CS,
  },
  {
    comune: 'Vaccarizzo Albanese',
    provincia: Province.CS,
  },
  {
    comune: 'Verbicaro',
    provincia: Province.CS,
  },
  {
    comune: 'Villapiana',
    provincia: Province.CS,
  },
  {
    comune: 'Zumpano',
    provincia: Province.CS,
  },
  {
    comune: 'Casali del Manco',
    provincia: Province.CS,
  },
  {
    comune: 'Corigliano-Rossano',
    provincia: Province.CS,
  },
  {
    comune: 'Albi',
    provincia: Province.CZ,
  },
  {
    comune: 'Amaroni',
    provincia: Province.CZ,
  },
  {
    comune: 'Amato',
    provincia: Province.CZ,
  },
  {
    comune: 'Andali',
    provincia: Province.CZ,
  },
  {
    comune: 'Argusto',
    provincia: Province.CZ,
  },
  {
    comune: 'Badolato',
    provincia: Province.CZ,
  },
  {
    comune: 'Belcastro',
    provincia: Province.CZ,
  },
  {
    comune: 'Borgia',
    provincia: Province.CZ,
  },
  {
    comune: 'Botricello',
    provincia: Province.CZ,
  },
  {
    comune: 'Caraffa di Catanzaro',
    provincia: Province.CZ,
  },
  {
    comune: 'Cardinale',
    provincia: Province.CZ,
  },
  {
    comune: 'Carlopoli',
    provincia: Province.CZ,
  },
  {
    comune: 'Catanzaro',
    provincia: Province.CZ,
  },
  {
    comune: 'Cenadi',
    provincia: Province.CZ,
  },
  {
    comune: 'Centrache',
    provincia: Province.CZ,
  },
  {
    comune: 'Cerva',
    provincia: Province.CZ,
  },
  {
    comune: 'Chiaravalle Centrale',
    provincia: Province.CZ,
  },
  {
    comune: 'Cicala',
    provincia: Province.CZ,
  },
  {
    comune: 'Conflenti',
    provincia: Province.CZ,
  },
  {
    comune: 'Cortale',
    provincia: Province.CZ,
  },
  {
    comune: 'Cropani',
    provincia: Province.CZ,
  },
  {
    comune: 'Curinga',
    provincia: Province.CZ,
  },
  {
    comune: 'Davoli',
    provincia: Province.CZ,
  },
  {
    comune: 'Decollatura',
    provincia: Province.CZ,
  },
  {
    comune: 'Falerna',
    provincia: Province.CZ,
  },
  {
    comune: 'Feroleto Antico',
    provincia: Province.CZ,
  },
  {
    comune: 'Fossato Serralta',
    provincia: Province.CZ,
  },
  {
    comune: 'Gagliato',
    provincia: Province.CZ,
  },
  {
    comune: 'Gasperina',
    provincia: Province.CZ,
  },
  {
    comune: 'Gimigliano',
    provincia: Province.CZ,
  },
  {
    comune: 'Girifalco',
    provincia: Province.CZ,
  },
  {
    comune: 'Gizzeria',
    provincia: Province.CZ,
  },
  {
    comune: 'Guardavalle',
    provincia: Province.CZ,
  },
  {
    comune: 'Isca sullo Ionio',
    provincia: Province.CZ,
  },
  {
    comune: 'Jacurso',
    provincia: Province.CZ,
  },
  {
    comune: 'Magisano',
    provincia: Province.CZ,
  },
  {
    comune: 'Maida',
    provincia: Province.CZ,
  },
  {
    comune: 'Marcedusa',
    provincia: Province.CZ,
  },
  {
    comune: 'Marcellinara',
    provincia: Province.CZ,
  },
  {
    comune: 'Martirano',
    provincia: Province.CZ,
  },
  {
    comune: 'Martirano Lombardo',
    provincia: Province.CZ,
  },
  {
    comune: 'Miglierina',
    provincia: Province.CZ,
  },
  {
    comune: 'Montauro',
    provincia: Province.CZ,
  },
  {
    comune: 'Montepaone',
    provincia: Province.CZ,
  },
  {
    comune: 'Motta Santa Lucia',
    provincia: Province.CZ,
  },
  {
    comune: 'Nocera Terinese',
    provincia: Province.CZ,
  },
  {
    comune: 'Olivadi',
    provincia: Province.CZ,
  },
  {
    comune: 'Palermiti',
    provincia: Province.CZ,
  },
  {
    comune: 'Pentone',
    provincia: Province.CZ,
  },
  {
    comune: 'Petrizzi',
    provincia: Province.CZ,
  },
  {
    comune: 'Petronà',
    provincia: Province.CZ,
  },
  {
    comune: 'Pianopoli',
    provincia: Province.CZ,
  },
  {
    comune: 'Platania',
    provincia: Province.CZ,
  },
  {
    comune: 'San Floro',
    provincia: Province.CZ,
  },
  {
    comune: "San Mango d'Aquino",
    provincia: Province.CZ,
  },
  {
    comune: 'San Pietro a Maida',
    provincia: Province.CZ,
  },
  {
    comune: 'San Pietro Apostolo',
    provincia: Province.CZ,
  },
  {
    comune: 'San Sostene',
    provincia: Province.CZ,
  },
  {
    comune: 'Santa Caterina dello Ionio',
    provincia: Province.CZ,
  },
  {
    comune: "Sant'Andrea Apostolo dello Ionio",
    provincia: Province.CZ,
  },
  {
    comune: 'San Vito sullo Ionio',
    provincia: Province.CZ,
  },
  {
    comune: 'Satriano',
    provincia: Province.CZ,
  },
  {
    comune: 'Sellia',
    provincia: Province.CZ,
  },
  {
    comune: 'Sellia Marina',
    provincia: Province.CZ,
  },
  {
    comune: 'Serrastretta',
    provincia: Province.CZ,
  },
  {
    comune: 'Sersale',
    provincia: Province.CZ,
  },
  {
    comune: 'Settingiano',
    provincia: Province.CZ,
  },
  {
    comune: 'Simeri Crichi',
    provincia: Province.CZ,
  },
  {
    comune: 'Sorbo San Basile',
    provincia: Province.CZ,
  },
  {
    comune: 'Soverato',
    provincia: Province.CZ,
  },
  {
    comune: 'Soveria Mannelli',
    provincia: Province.CZ,
  },
  {
    comune: 'Soveria Simeri',
    provincia: Province.CZ,
  },
  {
    comune: 'Squillace',
    provincia: Province.CZ,
  },
  {
    comune: 'Stalettì',
    provincia: Province.CZ,
  },
  {
    comune: 'Taverna',
    provincia: Province.CZ,
  },
  {
    comune: 'Tiriolo',
    provincia: Province.CZ,
  },
  {
    comune: 'Torre di Ruggiero',
    provincia: Province.CZ,
  },
  {
    comune: 'Vallefiorita',
    provincia: Province.CZ,
  },
  {
    comune: 'Zagarise',
    provincia: Province.CZ,
  },
  {
    comune: 'Lamezia Terme',
    provincia: Province.CZ,
  },
  {
    comune: 'Africo',
    provincia: Province.RC,
  },
  {
    comune: 'Agnana Calabra',
    provincia: Province.RC,
  },
  {
    comune: 'Anoia',
    provincia: Province.RC,
  },
  {
    comune: 'Antonimina',
    provincia: Province.RC,
  },
  {
    comune: 'Ardore',
    provincia: Province.RC,
  },
  {
    comune: 'Bagaladi',
    provincia: Province.RC,
  },
  {
    comune: 'Bagnara Calabra',
    provincia: Province.RC,
  },
  {
    comune: 'Benestare',
    provincia: Province.RC,
  },
  {
    comune: 'Bianco',
    provincia: Province.RC,
  },
  {
    comune: 'Bivongi',
    provincia: Province.RC,
  },
  {
    comune: 'Bova',
    provincia: Province.RC,
  },
  {
    comune: 'Bovalino',
    provincia: Province.RC,
  },
  {
    comune: 'Bova Marina',
    provincia: Province.RC,
  },
  {
    comune: 'Brancaleone',
    provincia: Province.RC,
  },
  {
    comune: 'Bruzzano Zeffirio',
    provincia: Province.RC,
  },
  {
    comune: 'Calanna',
    provincia: Province.RC,
  },
  {
    comune: 'Camini',
    provincia: Province.RC,
  },
  {
    comune: 'Campo Calabro',
    provincia: Province.RC,
  },
  {
    comune: 'Candidoni',
    provincia: Province.RC,
  },
  {
    comune: 'Canolo',
    provincia: Province.RC,
  },
  {
    comune: 'Caraffa del Bianco',
    provincia: Province.RC,
  },
  {
    comune: 'Cardeto',
    provincia: Province.RC,
  },
  {
    comune: 'Careri',
    provincia: Province.RC,
  },
  {
    comune: 'Casignana',
    provincia: Province.RC,
  },
  {
    comune: 'Caulonia',
    provincia: Province.RC,
  },
  {
    comune: 'Ciminà',
    provincia: Province.RC,
  },
  {
    comune: 'Cinquefrondi',
    provincia: Province.RC,
  },
  {
    comune: 'Cittanova',
    provincia: Province.RC,
  },
  {
    comune: 'Condofuri',
    provincia: Province.RC,
  },
  {
    comune: 'Cosoleto',
    provincia: Province.RC,
  },
  {
    comune: 'Delianuova',
    provincia: Province.RC,
  },
  {
    comune: 'Feroleto della Chiesa',
    provincia: Province.RC,
  },
  {
    comune: 'Ferruzzano',
    provincia: Province.RC,
  },
  {
    comune: 'Fiumara',
    provincia: Province.RC,
  },
  {
    comune: 'Galatro',
    provincia: Province.RC,
  },
  {
    comune: 'Gerace',
    provincia: Province.RC,
  },
  {
    comune: 'Giffone',
    provincia: Province.RC,
  },
  {
    comune: 'Gioia Tauro',
    provincia: Province.RC,
  },
  {
    comune: 'Gioiosa Ionica',
    provincia: Province.RC,
  },
  {
    comune: 'Grotteria',
    provincia: Province.RC,
  },
  {
    comune: 'Laganadi',
    provincia: Province.RC,
  },
  {
    comune: 'Laureana di Borrello',
    provincia: Province.RC,
  },
  {
    comune: 'Locri',
    provincia: Province.RC,
  },
  {
    comune: 'Mammola',
    provincia: Province.RC,
  },
  {
    comune: 'Marina di Gioiosa Ionica',
    provincia: Province.RC,
  },
  {
    comune: 'Maropati',
    provincia: Province.RC,
  },
  {
    comune: 'Martone',
    provincia: Province.RC,
  },
  {
    comune: 'Melicuccà',
    provincia: Province.RC,
  },
  {
    comune: 'Melicucco',
    provincia: Province.RC,
  },
  {
    comune: 'Melito di Porto Salvo',
    provincia: Province.RC,
  },
  {
    comune: 'Molochio',
    provincia: Province.RC,
  },
  {
    comune: 'Monasterace',
    provincia: Province.RC,
  },
  {
    comune: 'Montebello Jonico',
    provincia: Province.RC,
  },
  {
    comune: 'Motta San Giovanni',
    provincia: Province.RC,
  },
  {
    comune: 'Oppido Mamertina',
    provincia: Province.RC,
  },
  {
    comune: 'Palizzi',
    provincia: Province.RC,
  },
  {
    comune: 'Palmi',
    provincia: Province.RC,
  },
  {
    comune: 'Pazzano',
    provincia: Province.RC,
  },
  {
    comune: 'Placanica',
    provincia: Province.RC,
  },
  {
    comune: 'Platì',
    provincia: Province.RC,
  },
  {
    comune: 'Polistena',
    provincia: Province.RC,
  },
  {
    comune: 'Portigliola',
    provincia: Province.RC,
  },
  {
    comune: 'Reggio di Calabria',
    provincia: Province.RC,
  },
  {
    comune: 'Riace',
    provincia: Province.RC,
  },
  {
    comune: 'Rizziconi',
    provincia: Province.RC,
  },
  {
    comune: 'Roccaforte del Greco',
    provincia: Province.RC,
  },
  {
    comune: 'Roccella Ionica',
    provincia: Province.RC,
  },
  {
    comune: 'Roghudi',
    provincia: Province.RC,
  },
  {
    comune: 'Rosarno',
    provincia: Province.RC,
  },
  {
    comune: 'Samo',
    provincia: Province.RC,
  },
  {
    comune: 'San Giorgio Morgeto',
    provincia: Province.RC,
  },
  {
    comune: 'San Giovanni di Gerace',
    provincia: Province.RC,
  },
  {
    comune: 'San Lorenzo',
    provincia: Province.RC,
  },
  {
    comune: 'San Luca',
    provincia: Province.RC,
  },
  {
    comune: 'San Pietro di Caridà',
    provincia: Province.RC,
  },
  {
    comune: 'San Procopio',
    provincia: Province.RC,
  },
  {
    comune: 'San Roberto',
    provincia: Province.RC,
  },
  {
    comune: "Santa Cristina d'Aspromonte",
    provincia: Province.RC,
  },
  {
    comune: "Sant'Agata del Bianco",
    provincia: Province.RC,
  },
  {
    comune: "Sant'Alessio in Aspromonte",
    provincia: Province.RC,
  },
  {
    comune: "Sant'Eufemia d'Aspromonte",
    provincia: Province.RC,
  },
  {
    comune: "Sant'Ilario dello Ionio",
    provincia: Province.RC,
  },
  {
    comune: 'Santo Stefano in Aspromonte',
    provincia: Province.RC,
  },
  {
    comune: 'Scido',
    provincia: Province.RC,
  },
  {
    comune: 'Scilla',
    provincia: Province.RC,
  },
  {
    comune: 'Seminara',
    provincia: Province.RC,
  },
  {
    comune: 'Serrata',
    provincia: Province.RC,
  },
  {
    comune: 'Siderno',
    provincia: Province.RC,
  },
  {
    comune: 'Sinopoli',
    provincia: Province.RC,
  },
  {
    comune: 'Staiti',
    provincia: Province.RC,
  },
  {
    comune: 'Stignano',
    provincia: Province.RC,
  },
  {
    comune: 'Stilo',
    provincia: Province.RC,
  },
  {
    comune: 'Taurianova',
    provincia: Province.RC,
  },
  {
    comune: 'Terranova Sappo Minulio',
    provincia: Province.RC,
  },
  {
    comune: 'Varapodio',
    provincia: Province.RC,
  },
  {
    comune: 'Villa San Giovanni',
    provincia: Province.RC,
  },
  {
    comune: 'San Ferdinando',
    provincia: Province.RC,
  },
  {
    comune: 'Belvedere di Spinello',
    provincia: Province.KR,
  },
  {
    comune: 'Caccuri',
    provincia: Province.KR,
  },
  {
    comune: 'Carfizzi',
    provincia: Province.KR,
  },
  {
    comune: 'Casabona',
    provincia: Province.KR,
  },
  {
    comune: 'Castelsilano',
    provincia: Province.KR,
  },
  {
    comune: 'Cerenzia',
    provincia: Province.KR,
  },
  {
    comune: 'Cirò',
    provincia: Province.KR,
  },
  {
    comune: 'Cirò Marina',
    provincia: Province.KR,
  },
  {
    comune: 'Cotronei',
    provincia: Province.KR,
  },
  {
    comune: 'Crotone',
    provincia: Province.KR,
  },
  {
    comune: 'Crucoli',
    provincia: Province.KR,
  },
  {
    comune: 'Cutro',
    provincia: Province.KR,
  },
  {
    comune: 'Isola di Capo Rizzuto',
    provincia: Province.KR,
  },
  {
    comune: 'Melissa',
    provincia: Province.KR,
  },
  {
    comune: 'Mesoraca',
    provincia: Province.KR,
  },
  {
    comune: 'Pallagorio',
    provincia: Province.KR,
  },
  {
    comune: 'Petilia Policastro',
    provincia: Province.KR,
  },
  {
    comune: 'Roccabernarda',
    provincia: Province.KR,
  },
  {
    comune: 'Rocca di Neto',
    provincia: Province.KR,
  },
  {
    comune: 'San Mauro Marchesato',
    provincia: Province.KR,
  },
  {
    comune: "San Nicola dell'Alto",
    provincia: Province.KR,
  },
  {
    comune: 'Santa Severina',
    provincia: Province.KR,
  },
  {
    comune: 'Savelli',
    provincia: Province.KR,
  },
  {
    comune: 'Scandale',
    provincia: Province.KR,
  },
  {
    comune: 'Strongoli',
    provincia: Province.KR,
  },
  {
    comune: 'Umbriatico',
    provincia: Province.KR,
  },
  {
    comune: 'Verzino',
    provincia: Province.KR,
  },
  {
    comune: 'Acquaro',
    provincia: Province.VV,
  },
  {
    comune: 'Arena',
    provincia: Province.VV,
  },
  {
    comune: 'Briatico',
    provincia: Province.VV,
  },
  {
    comune: 'Brognaturo',
    provincia: Province.VV,
  },
  {
    comune: 'Capistrano',
    provincia: Province.VV,
  },
  {
    comune: 'Cessaniti',
    provincia: Province.VV,
  },
  {
    comune: 'Dasà',
    provincia: Province.VV,
  },
  {
    comune: 'Dinami',
    provincia: Province.VV,
  },
  {
    comune: 'Drapia',
    provincia: Province.VV,
  },
  {
    comune: 'Fabrizia',
    provincia: Province.VV,
  },
  {
    comune: 'Filadelfia',
    provincia: Province.VV,
  },
  {
    comune: 'Filandari',
    provincia: Province.VV,
  },
  {
    comune: 'Filogaso',
    provincia: Province.VV,
  },
  {
    comune: 'Francavilla Angitola',
    provincia: Province.VV,
  },
  {
    comune: 'Francica',
    provincia: Province.VV,
  },
  {
    comune: 'Gerocarne',
    provincia: Province.VV,
  },
  {
    comune: 'Ionadi',
    provincia: Province.VV,
  },
  {
    comune: 'Joppolo',
    provincia: Province.VV,
  },
  {
    comune: 'Limbadi',
    provincia: Province.VV,
  },
  {
    comune: 'Maierato',
    provincia: Province.VV,
  },
  {
    comune: 'Mileto',
    provincia: Province.VV,
  },
  {
    comune: 'Mongiana',
    provincia: Province.VV,
  },
  {
    comune: 'Monterosso Calabro',
    provincia: Province.VV,
  },
  {
    comune: 'Nardodipace',
    provincia: Province.VV,
  },
  {
    comune: 'Nicotera',
    provincia: Province.VV,
  },
  {
    comune: 'Parghelia',
    provincia: Province.VV,
  },
  {
    comune: 'Pizzo',
    provincia: Province.VV,
  },
  {
    comune: 'Pizzoni',
    provincia: Province.VV,
  },
  {
    comune: 'Polia',
    provincia: Province.VV,
  },
  {
    comune: 'Ricadi',
    provincia: Province.VV,
  },
  {
    comune: 'Rombiolo',
    provincia: Province.VV,
  },
  {
    comune: 'San Calogero',
    provincia: Province.VV,
  },
  {
    comune: 'San Costantino Calabro',
    provincia: Province.VV,
  },
  {
    comune: "San Gregorio d'Ippona",
    provincia: Province.VV,
  },
  {
    comune: 'San Nicola da Crissa',
    provincia: Province.VV,
  },
  {
    comune: "Sant'Onofrio",
    provincia: Province.VV,
  },
  {
    comune: 'Serra San Bruno',
    provincia: Province.VV,
  },
  {
    comune: 'Simbario',
    provincia: Province.VV,
  },
  {
    comune: 'Sorianello',
    provincia: Province.VV,
  },
  {
    comune: 'Soriano Calabro',
    provincia: Province.VV,
  },
  {
    comune: 'Spadola',
    provincia: Province.VV,
  },
  {
    comune: 'Spilinga',
    provincia: Province.VV,
  },
  {
    comune: 'Stefanaconi',
    provincia: Province.VV,
  },
  {
    comune: 'Tropea',
    provincia: Province.VV,
  },
  {
    comune: 'Vallelonga',
    provincia: Province.VV,
  },
  {
    comune: 'Vazzano',
    provincia: Province.VV,
  },
  {
    comune: 'Vibo Valentia',
    provincia: Province.VV,
  },
  {
    comune: 'Zaccanopoli',
    provincia: Province.VV,
  },
  {
    comune: 'Zambrone',
    provincia: Province.VV,
  },
  {
    comune: 'Zungri',
    provincia: Province.VV,
  },
  {
    comune: 'Alcamo',
    provincia: Province.TP,
  },
  {
    comune: 'Buseto Palizzolo',
    provincia: Province.TP,
  },
  {
    comune: 'Calatafimi-Segesta',
    provincia: Province.TP,
  },
  {
    comune: 'Campobello di Mazara',
    provincia: Province.TP,
  },
  {
    comune: 'Castellammare del Golfo',
    provincia: Province.TP,
  },
  {
    comune: 'Castelvetrano',
    provincia: Province.TP,
  },
  {
    comune: 'Custonaci',
    provincia: Province.TP,
  },
  {
    comune: 'Erice',
    provincia: Province.TP,
  },
  {
    comune: 'Favignana',
    provincia: Province.TP,
  },
  {
    comune: 'Gibellina',
    provincia: Province.TP,
  },
  {
    comune: 'Marsala',
    provincia: Province.TP,
  },
  {
    comune: 'Mazara del Vallo',
    provincia: Province.TP,
  },
  {
    comune: 'Paceco',
    provincia: Province.TP,
  },
  {
    comune: 'Pantelleria',
    provincia: Province.TP,
  },
  {
    comune: 'Partanna',
    provincia: Province.TP,
  },
  {
    comune: 'Poggioreale',
    provincia: Province.TP,
  },
  {
    comune: 'Salaparuta',
    provincia: Province.TP,
  },
  {
    comune: 'Salemi',
    provincia: Province.TP,
  },
  {
    comune: 'Santa Ninfa',
    provincia: Province.TP,
  },
  {
    comune: 'San Vito Lo Capo',
    provincia: Province.TP,
  },
  {
    comune: 'Trapani',
    provincia: Province.TP,
  },
  {
    comune: 'Valderice',
    provincia: Province.TP,
  },
  {
    comune: 'Vita',
    provincia: Province.TP,
  },
  {
    comune: 'Petrosino',
    provincia: Province.TP,
  },
  {
    comune: 'Alia',
    provincia: Province.PA,
  },
  {
    comune: 'Alimena',
    provincia: Province.PA,
  },
  {
    comune: 'Aliminusa',
    provincia: Province.PA,
  },
  {
    comune: 'Altavilla Milicia',
    provincia: Province.PA,
  },
  {
    comune: 'Altofonte',
    provincia: Province.PA,
  },
  {
    comune: 'Bagheria',
    provincia: Province.PA,
  },
  {
    comune: 'Balestrate',
    provincia: Province.PA,
  },
  {
    comune: 'Baucina',
    provincia: Province.PA,
  },
  {
    comune: 'Belmonte Mezzagno',
    provincia: Province.PA,
  },
  {
    comune: 'Bisacquino',
    provincia: Province.PA,
  },
  {
    comune: 'Bolognetta',
    provincia: Province.PA,
  },
  {
    comune: 'Bompietro',
    provincia: Province.PA,
  },
  {
    comune: 'Borgetto',
    provincia: Province.PA,
  },
  {
    comune: 'Caccamo',
    provincia: Province.PA,
  },
  {
    comune: 'Caltavuturo',
    provincia: Province.PA,
  },
  {
    comune: 'Campofelice di Fitalia',
    provincia: Province.PA,
  },
  {
    comune: 'Campofelice di Roccella',
    provincia: Province.PA,
  },
  {
    comune: 'Campofiorito',
    provincia: Province.PA,
  },
  {
    comune: 'Camporeale',
    provincia: Province.PA,
  },
  {
    comune: 'Capaci',
    provincia: Province.PA,
  },
  {
    comune: 'Carini',
    provincia: Province.PA,
  },
  {
    comune: 'Castelbuono',
    provincia: Province.PA,
  },
  {
    comune: 'Casteldaccia',
    provincia: Province.PA,
  },
  {
    comune: 'Castellana Sicula',
    provincia: Province.PA,
  },
  {
    comune: 'Castronovo di Sicilia',
    provincia: Province.PA,
  },
  {
    comune: 'Cefalà Diana',
    provincia: Province.PA,
  },
  {
    comune: 'Cefalù',
    provincia: Province.PA,
  },
  {
    comune: 'Cerda',
    provincia: Province.PA,
  },
  {
    comune: 'Chiusa Sclafani',
    provincia: Province.PA,
  },
  {
    comune: 'Ciminna',
    provincia: Province.PA,
  },
  {
    comune: 'Cinisi',
    provincia: Province.PA,
  },
  {
    comune: 'Collesano',
    provincia: Province.PA,
  },
  {
    comune: 'Contessa Entellina',
    provincia: Province.PA,
  },
  {
    comune: 'Corleone',
    provincia: Province.PA,
  },
  {
    comune: 'Ficarazzi',
    provincia: Province.PA,
  },
  {
    comune: 'Gangi',
    provincia: Province.PA,
  },
  {
    comune: 'Geraci Siculo',
    provincia: Province.PA,
  },
  {
    comune: 'Giardinello',
    provincia: Province.PA,
  },
  {
    comune: 'Giuliana',
    provincia: Province.PA,
  },
  {
    comune: 'Godrano',
    provincia: Province.PA,
  },
  {
    comune: 'Gratteri',
    provincia: Province.PA,
  },
  {
    comune: 'Isnello',
    provincia: Province.PA,
  },
  {
    comune: 'Isola delle Femmine',
    provincia: Province.PA,
  },
  {
    comune: 'Lascari',
    provincia: Province.PA,
  },
  {
    comune: 'Lercara Friddi',
    provincia: Province.PA,
  },
  {
    comune: 'Marineo',
    provincia: Province.PA,
  },
  {
    comune: 'Mezzojuso',
    provincia: Province.PA,
  },
  {
    comune: 'Misilmeri',
    provincia: Province.PA,
  },
  {
    comune: 'Monreale',
    provincia: Province.PA,
  },
  {
    comune: 'Montelepre',
    provincia: Province.PA,
  },
  {
    comune: 'Montemaggiore Belsito',
    provincia: Province.PA,
  },
  {
    comune: 'Palazzo Adriano',
    provincia: Province.PA,
  },
  {
    comune: 'Palermo',
    provincia: Province.PA,
  },
  {
    comune: 'Partinico',
    provincia: Province.PA,
  },
  {
    comune: 'Petralia Soprana',
    provincia: Province.PA,
  },
  {
    comune: 'Petralia Sottana',
    provincia: Province.PA,
  },
  {
    comune: 'Piana degli Albanesi',
    provincia: Province.PA,
  },
  {
    comune: 'Polizzi Generosa',
    provincia: Province.PA,
  },
  {
    comune: 'Pollina',
    provincia: Province.PA,
  },
  {
    comune: 'Prizzi',
    provincia: Province.PA,
  },
  {
    comune: 'Roccamena',
    provincia: Province.PA,
  },
  {
    comune: 'Roccapalumba',
    provincia: Province.PA,
  },
  {
    comune: 'San Cipirello',
    provincia: Province.PA,
  },
  {
    comune: 'San Giuseppe Jato',
    provincia: Province.PA,
  },
  {
    comune: 'San Mauro Castelverde',
    provincia: Province.PA,
  },
  {
    comune: 'Santa Cristina Gela',
    provincia: Province.PA,
  },
  {
    comune: 'Santa Flavia',
    provincia: Province.PA,
  },
  {
    comune: 'Sciara',
    provincia: Province.PA,
  },
  {
    comune: 'Sclafani Bagni',
    provincia: Province.PA,
  },
  {
    comune: 'Termini Imerese',
    provincia: Province.PA,
  },
  {
    comune: 'Terrasini',
    provincia: Province.PA,
  },
  {
    comune: 'Torretta',
    provincia: Province.PA,
  },
  {
    comune: 'Trabia',
    provincia: Province.PA,
  },
  {
    comune: 'Trappeto',
    provincia: Province.PA,
  },
  {
    comune: 'Ustica',
    provincia: Province.PA,
  },
  {
    comune: 'Valledolmo',
    provincia: Province.PA,
  },
  {
    comune: 'Ventimiglia di Sicilia',
    provincia: Province.PA,
  },
  {
    comune: 'Vicari',
    provincia: Province.PA,
  },
  {
    comune: 'Villabate',
    provincia: Province.PA,
  },
  {
    comune: 'Villafrati',
    provincia: Province.PA,
  },
  {
    comune: 'Scillato',
    provincia: Province.PA,
  },
  {
    comune: 'Blufi',
    provincia: Province.PA,
  },
  {
    comune: 'Alcara li Fusi',
    provincia: Province.ME,
  },
  {
    comune: 'Alì',
    provincia: Province.ME,
  },
  {
    comune: 'Alì Terme',
    provincia: Province.ME,
  },
  {
    comune: 'Antillo',
    provincia: Province.ME,
  },
  {
    comune: 'Barcellona Pozzo di Gotto',
    provincia: Province.ME,
  },
  {
    comune: 'Basicò',
    provincia: Province.ME,
  },
  {
    comune: 'Brolo',
    provincia: Province.ME,
  },
  {
    comune: 'Capizzi',
    provincia: Province.ME,
  },
  {
    comune: "Capo d'Orlando",
    provincia: Province.ME,
  },
  {
    comune: 'Capri Leone',
    provincia: Province.ME,
  },
  {
    comune: 'Caronia',
    provincia: Province.ME,
  },
  {
    comune: 'Casalvecchio Siculo',
    provincia: Province.ME,
  },
  {
    comune: 'Castel di Lucio',
    provincia: Province.ME,
  },
  {
    comune: "Castell'Umberto",
    provincia: Province.ME,
  },
  {
    comune: 'Castelmola',
    provincia: Province.ME,
  },
  {
    comune: 'Castroreale',
    provincia: Province.ME,
  },
  {
    comune: 'Cesarò',
    provincia: Province.ME,
  },
  {
    comune: 'Condrò',
    provincia: Province.ME,
  },
  {
    comune: 'Falcone',
    provincia: Province.ME,
  },
  {
    comune: 'Ficarra',
    provincia: Province.ME,
  },
  {
    comune: 'Fiumedinisi',
    provincia: Province.ME,
  },
  {
    comune: 'Floresta',
    provincia: Province.ME,
  },
  {
    comune: 'Fondachelli-Fantina',
    provincia: Province.ME,
  },
  {
    comune: "Forza d'Agrò",
    provincia: Province.ME,
  },
  {
    comune: 'Francavilla di Sicilia',
    provincia: Province.ME,
  },
  {
    comune: 'Frazzanò',
    provincia: Province.ME,
  },
  {
    comune: 'Furci Siculo',
    provincia: Province.ME,
  },
  {
    comune: 'Furnari',
    provincia: Province.ME,
  },
  {
    comune: 'Gaggi',
    provincia: Province.ME,
  },
  {
    comune: 'Galati Mamertino',
    provincia: Province.ME,
  },
  {
    comune: 'Gallodoro',
    provincia: Province.ME,
  },
  {
    comune: 'Giardini-Naxos',
    provincia: Province.ME,
  },
  {
    comune: 'Gioiosa Marea',
    provincia: Province.ME,
  },
  {
    comune: 'Graniti',
    provincia: Province.ME,
  },
  {
    comune: 'Gualtieri Sicaminò',
    provincia: Province.ME,
  },
  {
    comune: 'Itala',
    provincia: Province.ME,
  },
  {
    comune: 'Leni',
    provincia: Province.ME,
  },
  {
    comune: 'Letojanni',
    provincia: Province.ME,
  },
  {
    comune: 'Librizzi',
    provincia: Province.ME,
  },
  {
    comune: 'Limina',
    provincia: Province.ME,
  },
  {
    comune: 'Lipari',
    provincia: Province.ME,
  },
  {
    comune: 'Longi',
    provincia: Province.ME,
  },
  {
    comune: 'Malfa',
    provincia: Province.ME,
  },
  {
    comune: 'Malvagna',
    provincia: Province.ME,
  },
  {
    comune: 'Mandanici',
    provincia: Province.ME,
  },
  {
    comune: "Mazzarrà Sant'Andrea",
    provincia: Province.ME,
  },
  {
    comune: 'Merì',
    provincia: Province.ME,
  },
  {
    comune: 'Messina',
    provincia: Province.ME,
  },
  {
    comune: 'Milazzo',
    provincia: Province.ME,
  },
  {
    comune: 'Militello Rosmarino',
    provincia: Province.ME,
  },
  {
    comune: 'Mirto',
    provincia: Province.ME,
  },
  {
    comune: 'Mistretta',
    provincia: Province.ME,
  },
  {
    comune: 'Moio Alcantara',
    provincia: Province.ME,
  },
  {
    comune: 'Monforte San Giorgio',
    provincia: Province.ME,
  },
  {
    comune: 'Mongiuffi Melia',
    provincia: Province.ME,
  },
  {
    comune: 'Montagnareale',
    provincia: Province.ME,
  },
  {
    comune: 'Montalbano Elicona',
    provincia: Province.ME,
  },
  {
    comune: 'Motta Camastra',
    provincia: Province.ME,
  },
  {
    comune: "Motta d'Affermo",
    provincia: Province.ME,
  },
  {
    comune: 'Naso',
    provincia: Province.ME,
  },
  {
    comune: 'Nizza di Sicilia',
    provincia: Province.ME,
  },
  {
    comune: 'Novara di Sicilia',
    provincia: Province.ME,
  },
  {
    comune: 'Oliveri',
    provincia: Province.ME,
  },
  {
    comune: 'Pace del Mela',
    provincia: Province.ME,
  },
  {
    comune: 'Pagliara',
    provincia: Province.ME,
  },
  {
    comune: 'Patti',
    provincia: Province.ME,
  },
  {
    comune: 'Pettineo',
    provincia: Province.ME,
  },
  {
    comune: 'Piraino',
    provincia: Province.ME,
  },
  {
    comune: 'Raccuja',
    provincia: Province.ME,
  },
  {
    comune: 'Reitano',
    provincia: Province.ME,
  },
  {
    comune: 'Roccafiorita',
    provincia: Province.ME,
  },
  {
    comune: 'Roccalumera',
    provincia: Province.ME,
  },
  {
    comune: 'Roccavaldina',
    provincia: Province.ME,
  },
  {
    comune: 'Roccella Valdemone',
    provincia: Province.ME,
  },
  {
    comune: 'Rodì Milici',
    provincia: Province.ME,
  },
  {
    comune: 'Rometta',
    provincia: Province.ME,
  },
  {
    comune: 'San Filippo del Mela',
    provincia: Province.ME,
  },
  {
    comune: 'San Fratello',
    provincia: Province.ME,
  },
  {
    comune: "San Marco d'Alunzio",
    provincia: Province.ME,
  },
  {
    comune: 'San Pier Niceto',
    provincia: Province.ME,
  },
  {
    comune: 'San Piero Patti',
    provincia: Province.ME,
  },
  {
    comune: 'San Salvatore di Fitalia',
    provincia: Province.ME,
  },
  {
    comune: 'Santa Domenica Vittoria',
    provincia: Province.ME,
  },
  {
    comune: "Sant'Agata di Militello",
    provincia: Province.ME,
  },
  {
    comune: "Sant'Alessio Siculo",
    provincia: Province.ME,
  },
  {
    comune: 'Santa Lucia del Mela',
    provincia: Province.ME,
  },
  {
    comune: 'Santa Marina Salina',
    provincia: Province.ME,
  },
  {
    comune: "Sant'Angelo di Brolo",
    provincia: Province.ME,
  },
  {
    comune: 'Santa Teresa di Riva',
    provincia: Province.ME,
  },
  {
    comune: 'San Teodoro',
    provincia: Province.ME,
  },
  {
    comune: 'Santo Stefano di Camastra',
    provincia: Province.ME,
  },
  {
    comune: 'Saponara',
    provincia: Province.ME,
  },
  {
    comune: 'Savoca',
    provincia: Province.ME,
  },
  {
    comune: 'Scaletta Zanclea',
    provincia: Province.ME,
  },
  {
    comune: 'Sinagra',
    provincia: Province.ME,
  },
  {
    comune: 'Spadafora',
    provincia: Province.ME,
  },
  {
    comune: 'Taormina',
    provincia: Province.ME,
  },
  {
    comune: 'Torregrotta',
    provincia: Province.ME,
  },
  {
    comune: 'Tortorici',
    provincia: Province.ME,
  },
  {
    comune: 'Tripi',
    provincia: Province.ME,
  },
  {
    comune: 'Tusa',
    provincia: Province.ME,
  },
  {
    comune: 'Ucria',
    provincia: Province.ME,
  },
  {
    comune: 'Valdina',
    provincia: Province.ME,
  },
  {
    comune: 'Venetico',
    provincia: Province.ME,
  },
  {
    comune: 'Villafranca Tirrena',
    provincia: Province.ME,
  },
  {
    comune: 'Terme Vigliatore',
    provincia: Province.ME,
  },
  {
    comune: 'Acquedolci',
    provincia: Province.ME,
  },
  {
    comune: 'Torrenova',
    provincia: Province.ME,
  },
  {
    comune: 'Agrigento',
    provincia: Province.AG,
  },
  {
    comune: 'Alessandria della Rocca',
    provincia: Province.AG,
  },
  {
    comune: 'Aragona',
    provincia: Province.AG,
  },
  {
    comune: 'Bivona',
    provincia: Province.AG,
  },
  {
    comune: 'Burgio',
    provincia: Province.AG,
  },
  {
    comune: 'Calamonaci',
    provincia: Province.AG,
  },
  {
    comune: 'Caltabellotta',
    provincia: Province.AG,
  },
  {
    comune: 'Camastra',
    provincia: Province.AG,
  },
  {
    comune: 'Cammarata',
    provincia: Province.AG,
  },
  {
    comune: 'Campobello di Licata',
    provincia: Province.AG,
  },
  {
    comune: 'Canicattì',
    provincia: Province.AG,
  },
  {
    comune: 'Casteltermini',
    provincia: Province.AG,
  },
  {
    comune: 'Castrofilippo',
    provincia: Province.AG,
  },
  {
    comune: 'Cattolica Eraclea',
    provincia: Province.AG,
  },
  {
    comune: 'Cianciana',
    provincia: Province.AG,
  },
  {
    comune: 'Comitini',
    provincia: Province.AG,
  },
  {
    comune: 'Favara',
    provincia: Province.AG,
  },
  {
    comune: 'Grotte',
    provincia: Province.AG,
  },
  {
    comune: 'Joppolo Giancaxio',
    provincia: Province.AG,
  },
  {
    comune: 'Lampedusa e Linosa',
    provincia: Province.AG,
  },
  {
    comune: 'Licata',
    provincia: Province.AG,
  },
  {
    comune: 'Lucca Sicula',
    provincia: Province.AG,
  },
  {
    comune: 'Menfi',
    provincia: Province.AG,
  },
  {
    comune: 'Montallegro',
    provincia: Province.AG,
  },
  {
    comune: 'Montevago',
    provincia: Province.AG,
  },
  {
    comune: 'Naro',
    provincia: Province.AG,
  },
  {
    comune: 'Palma di Montechiaro',
    provincia: Province.AG,
  },
  {
    comune: 'Porto Empedocle',
    provincia: Province.AG,
  },
  {
    comune: 'Racalmuto',
    provincia: Province.AG,
  },
  {
    comune: 'Raffadali',
    provincia: Province.AG,
  },
  {
    comune: 'Ravanusa',
    provincia: Province.AG,
  },
  {
    comune: 'Realmonte',
    provincia: Province.AG,
  },
  {
    comune: 'Ribera',
    provincia: Province.AG,
  },
  {
    comune: 'Sambuca di Sicilia',
    provincia: Province.AG,
  },
  {
    comune: 'San Biagio Platani',
    provincia: Province.AG,
  },
  {
    comune: 'San Giovanni Gemini',
    provincia: Province.AG,
  },
  {
    comune: 'Santa Elisabetta',
    provincia: Province.AG,
  },
  {
    comune: 'Santa Margherita di Belice',
    provincia: Province.AG,
  },
  {
    comune: "Sant'Angelo Muxaro",
    provincia: Province.AG,
  },
  {
    comune: 'Santo Stefano Quisquina',
    provincia: Province.AG,
  },
  {
    comune: 'Sciacca',
    provincia: Province.AG,
  },
  {
    comune: 'Siculiana',
    provincia: Province.AG,
  },
  {
    comune: 'Villafranca Sicula',
    provincia: Province.AG,
  },
  {
    comune: 'Acquaviva Platani',
    provincia: Province.CL,
  },
  {
    comune: 'Bompensiere',
    provincia: Province.CL,
  },
  {
    comune: 'Butera',
    provincia: Province.CL,
  },
  {
    comune: 'Caltanissetta',
    provincia: Province.CL,
  },
  {
    comune: 'Campofranco',
    provincia: Province.CL,
  },
  {
    comune: 'Delia',
    provincia: Province.CL,
  },
  {
    comune: 'Gela',
    provincia: Province.CL,
  },
  {
    comune: 'Marianopoli',
    provincia: Province.CL,
  },
  {
    comune: 'Mazzarino',
    provincia: Province.CL,
  },
  {
    comune: 'Milena',
    provincia: Province.CL,
  },
  {
    comune: 'Montedoro',
    provincia: Province.CL,
  },
  {
    comune: 'Mussomeli',
    provincia: Province.CL,
  },
  {
    comune: 'Niscemi',
    provincia: Province.CL,
  },
  {
    comune: 'Resuttano',
    provincia: Province.CL,
  },
  {
    comune: 'Riesi',
    provincia: Province.CL,
  },
  {
    comune: 'San Cataldo',
    provincia: Province.CL,
  },
  {
    comune: 'Santa Caterina Villarmosa',
    provincia: Province.CL,
  },
  {
    comune: 'Serradifalco',
    provincia: Province.CL,
  },
  {
    comune: 'Sommatino',
    provincia: Province.CL,
  },
  {
    comune: 'Sutera',
    provincia: Province.CL,
  },
  {
    comune: 'Vallelunga Pratameno',
    provincia: Province.CL,
  },
  {
    comune: 'Villalba',
    provincia: Province.CL,
  },
  {
    comune: 'Agira',
    provincia: Province.EN,
  },
  {
    comune: 'Aidone',
    provincia: Province.EN,
  },
  {
    comune: 'Assoro',
    provincia: Province.EN,
  },
  {
    comune: 'Barrafranca',
    provincia: Province.EN,
  },
  {
    comune: 'Calascibetta',
    provincia: Province.EN,
  },
  {
    comune: 'Catenanuova',
    provincia: Province.EN,
  },
  {
    comune: 'Centuripe',
    provincia: Province.EN,
  },
  {
    comune: 'Cerami',
    provincia: Province.EN,
  },
  {
    comune: 'Enna',
    provincia: Province.EN,
  },
  {
    comune: 'Gagliano Castelferrato',
    provincia: Province.EN,
  },
  {
    comune: 'Leonforte',
    provincia: Province.EN,
  },
  {
    comune: 'Nicosia',
    provincia: Province.EN,
  },
  {
    comune: 'Nissoria',
    provincia: Province.EN,
  },
  {
    comune: 'Piazza Armerina',
    provincia: Province.EN,
  },
  {
    comune: 'Pietraperzia',
    provincia: Province.EN,
  },
  {
    comune: 'Regalbuto',
    provincia: Province.EN,
  },
  {
    comune: 'Sperlinga',
    provincia: Province.EN,
  },
  {
    comune: 'Troina',
    provincia: Province.EN,
  },
  {
    comune: 'Valguarnera Caropepe',
    provincia: Province.EN,
  },
  {
    comune: 'Villarosa',
    provincia: Province.EN,
  },
  {
    comune: 'Aci Bonaccorsi',
    provincia: Province.CT,
  },
  {
    comune: 'Aci Castello',
    provincia: Province.CT,
  },
  {
    comune: 'Aci Catena',
    provincia: Province.CT,
  },
  {
    comune: 'Acireale',
    provincia: Province.CT,
  },
  {
    comune: "Aci Sant'Antonio",
    provincia: Province.CT,
  },
  {
    comune: 'Adrano',
    provincia: Province.CT,
  },
  {
    comune: 'Belpasso',
    provincia: Province.CT,
  },
  {
    comune: 'Biancavilla',
    provincia: Province.CT,
  },
  {
    comune: 'Bronte',
    provincia: Province.CT,
  },
  {
    comune: 'Calatabiano',
    provincia: Province.CT,
  },
  {
    comune: 'Caltagirone',
    provincia: Province.CT,
  },
  {
    comune: 'Camporotondo Etneo',
    provincia: Province.CT,
  },
  {
    comune: 'Castel di Iudica',
    provincia: Province.CT,
  },
  {
    comune: 'Castiglione di Sicilia',
    provincia: Province.CT,
  },
  {
    comune: 'Catania',
    provincia: Province.CT,
  },
  {
    comune: 'Fiumefreddo di Sicilia',
    provincia: Province.CT,
  },
  {
    comune: 'Giarre',
    provincia: Province.CT,
  },
  {
    comune: 'Grammichele',
    provincia: Province.CT,
  },
  {
    comune: 'Gravina di Catania',
    provincia: Province.CT,
  },
  {
    comune: 'Licodia Eubea',
    provincia: Province.CT,
  },
  {
    comune: 'Linguaglossa',
    provincia: Province.CT,
  },
  {
    comune: 'Maletto',
    provincia: Province.CT,
  },
  {
    comune: 'Mascali',
    provincia: Province.CT,
  },
  {
    comune: 'Mascalucia',
    provincia: Province.CT,
  },
  {
    comune: 'Militello in Val di Catania',
    provincia: Province.CT,
  },
  {
    comune: 'Milo',
    provincia: Province.CT,
  },
  {
    comune: 'Mineo',
    provincia: Province.CT,
  },
  {
    comune: 'Mirabella Imbaccari',
    provincia: Province.CT,
  },
  {
    comune: 'Misterbianco',
    provincia: Province.CT,
  },
  {
    comune: "Motta Sant'Anastasia",
    provincia: Province.CT,
  },
  {
    comune: 'Nicolosi',
    provincia: Province.CT,
  },
  {
    comune: 'Palagonia',
    provincia: Province.CT,
  },
  {
    comune: 'Paternò',
    provincia: Province.CT,
  },
  {
    comune: 'Pedara',
    provincia: Province.CT,
  },
  {
    comune: 'Piedimonte Etneo',
    provincia: Province.CT,
  },
  {
    comune: 'Raddusa',
    provincia: Province.CT,
  },
  {
    comune: 'Ramacca',
    provincia: Province.CT,
  },
  {
    comune: 'Randazzo',
    provincia: Province.CT,
  },
  {
    comune: 'Riposto',
    provincia: Province.CT,
  },
  {
    comune: 'San Cono',
    provincia: Province.CT,
  },
  {
    comune: 'San Giovanni la Punta',
    provincia: Province.CT,
  },
  {
    comune: 'San Gregorio di Catania',
    provincia: Province.CT,
  },
  {
    comune: 'San Michele di Ganzaria',
    provincia: Province.CT,
  },
  {
    comune: 'San Pietro Clarenza',
    provincia: Province.CT,
  },
  {
    comune: "Sant'Agata li Battiati",
    provincia: Province.CT,
  },
  {
    comune: "Sant'Alfio",
    provincia: Province.CT,
  },
  {
    comune: 'Santa Maria di Licodia',
    provincia: Province.CT,
  },
  {
    comune: 'Santa Venerina',
    provincia: Province.CT,
  },
  {
    comune: 'Scordia',
    provincia: Province.CT,
  },
  {
    comune: 'Trecastagni',
    provincia: Province.CT,
  },
  {
    comune: 'Tremestieri Etneo',
    provincia: Province.CT,
  },
  {
    comune: 'Valverde',
    provincia: Province.CT,
  },
  {
    comune: 'Viagrande',
    provincia: Province.CT,
  },
  {
    comune: 'Vizzini',
    provincia: Province.CT,
  },
  {
    comune: 'Zafferana Etnea',
    provincia: Province.CT,
  },
  {
    comune: 'Mazzarrone',
    provincia: Province.CT,
  },
  {
    comune: 'Maniace',
    provincia: Province.CT,
  },
  {
    comune: 'Ragalna',
    provincia: Province.CT,
  },
  {
    comune: 'Acate',
    provincia: Province.RG,
  },
  {
    comune: 'Chiaramonte Gulfi',
    provincia: Province.RG,
  },
  {
    comune: 'Comiso',
    provincia: Province.RG,
  },
  {
    comune: 'Giarratana',
    provincia: Province.RG,
  },
  {
    comune: 'Ispica',
    provincia: Province.RG,
  },
  {
    comune: 'Modica',
    provincia: Province.RG,
  },
  {
    comune: 'Monterosso Almo',
    provincia: Province.RG,
  },
  {
    comune: 'Pozzallo',
    provincia: Province.RG,
  },
  {
    comune: 'Ragusa',
    provincia: Province.RG,
  },
  {
    comune: 'Santa Croce Camerina',
    provincia: Province.RG,
  },
  {
    comune: 'Scicli',
    provincia: Province.RG,
  },
  {
    comune: 'Vittoria',
    provincia: Province.RG,
  },
  {
    comune: 'Augusta',
    provincia: Province.SR,
  },
  {
    comune: 'Avola',
    provincia: Province.SR,
  },
  {
    comune: 'Buccheri',
    provincia: Province.SR,
  },
  {
    comune: 'Buscemi',
    provincia: Province.SR,
  },
  {
    comune: 'Canicattini Bagni',
    provincia: Province.SR,
  },
  {
    comune: 'Carlentini',
    provincia: Province.SR,
  },
  {
    comune: 'Cassaro',
    provincia: Province.SR,
  },
  {
    comune: 'Ferla',
    provincia: Province.SR,
  },
  {
    comune: 'Floridia',
    provincia: Province.SR,
  },
  {
    comune: 'Francofonte',
    provincia: Province.SR,
  },
  {
    comune: 'Lentini',
    provincia: Province.SR,
  },
  {
    comune: 'Melilli',
    provincia: Province.SR,
  },
  {
    comune: 'Noto',
    provincia: Province.SR,
  },
  {
    comune: 'Pachino',
    provincia: Province.SR,
  },
  {
    comune: 'Palazzolo Acreide',
    provincia: Province.SR,
  },
  {
    comune: 'Rosolini',
    provincia: Province.SR,
  },
  {
    comune: 'Siracusa',
    provincia: Province.SR,
  },
  {
    comune: 'Solarino',
    provincia: Province.SR,
  },
  {
    comune: 'Sortino',
    provincia: Province.SR,
  },
  {
    comune: 'Portopalo di Capo Passero',
    provincia: Province.SR,
  },
  {
    comune: 'Priolo Gargallo',
    provincia: Province.SR,
  },
  {
    comune: 'Aggius',
    provincia: Province.SS,
  },
  {
    comune: 'Alà dei Sardi',
    provincia: Province.SS,
  },
  {
    comune: 'Alghero',
    provincia: Province.SS,
  },
  {
    comune: 'Anela',
    provincia: Province.SS,
  },
  {
    comune: 'Ardara',
    provincia: Province.SS,
  },
  {
    comune: 'Arzachena',
    provincia: Province.SS,
  },
  {
    comune: 'Banari',
    provincia: Province.SS,
  },
  {
    comune: 'Benetutti',
    provincia: Province.SS,
  },
  {
    comune: 'Berchidda',
    provincia: Province.SS,
  },
  {
    comune: 'Bessude',
    provincia: Province.SS,
  },
  {
    comune: 'Bonnanaro',
    provincia: Province.SS,
  },
  {
    comune: 'Bono',
    provincia: Province.SS,
  },
  {
    comune: 'Bonorva',
    provincia: Province.SS,
  },
  {
    comune: 'Bortigiadas',
    provincia: Province.SS,
  },
  {
    comune: 'Borutta',
    provincia: Province.SS,
  },
  {
    comune: 'Bottidda',
    provincia: Province.SS,
  },
  {
    comune: 'Buddusò',
    provincia: Province.SS,
  },
  {
    comune: 'Bultei',
    provincia: Province.SS,
  },
  {
    comune: 'Bulzi',
    provincia: Province.SS,
  },
  {
    comune: 'Burgos',
    provincia: Province.SS,
  },
  {
    comune: 'Calangianus',
    provincia: Province.SS,
  },
  {
    comune: 'Cargeghe',
    provincia: Province.SS,
  },
  {
    comune: 'Castelsardo',
    provincia: Province.SS,
  },
  {
    comune: 'Cheremule',
    provincia: Province.SS,
  },
  {
    comune: 'Chiaramonti',
    provincia: Province.SS,
  },
  {
    comune: 'Codrongianos',
    provincia: Province.SS,
  },
  {
    comune: 'Cossoine',
    provincia: Province.SS,
  },
  {
    comune: 'Esporlatu',
    provincia: Province.SS,
  },
  {
    comune: 'Florinas',
    provincia: Province.SS,
  },
  {
    comune: 'Giave',
    provincia: Province.SS,
  },
  {
    comune: 'Illorai',
    provincia: Province.SS,
  },
  {
    comune: 'Ittireddu',
    provincia: Province.SS,
  },
  {
    comune: 'Ittiri',
    provincia: Province.SS,
  },
  {
    comune: 'Laerru',
    provincia: Province.SS,
  },
  {
    comune: 'La Maddalena',
    provincia: Province.SS,
  },
  {
    comune: 'Luogosanto',
    provincia: Province.SS,
  },
  {
    comune: 'Luras',
    provincia: Province.SS,
  },
  {
    comune: 'Mara',
    provincia: Province.SS,
  },
  {
    comune: 'Martis',
    provincia: Province.SS,
  },
  {
    comune: 'Monteleone Rocca Doria',
    provincia: Province.SS,
  },
  {
    comune: 'Monti',
    provincia: Province.SS,
  },
  {
    comune: 'Mores',
    provincia: Province.SS,
  },
  {
    comune: 'Muros',
    provincia: Province.SS,
  },
  {
    comune: 'Nughedu San Nicolò',
    provincia: Province.SS,
  },
  {
    comune: 'Nule',
    provincia: Province.SS,
  },
  {
    comune: 'Nulvi',
    provincia: Province.SS,
  },
  {
    comune: 'Olbia',
    provincia: Province.SS,
  },
  {
    comune: 'Olmedo',
    provincia: Province.SS,
  },
  {
    comune: 'Oschiri',
    provincia: Province.SS,
  },
  {
    comune: 'Osilo',
    provincia: Province.SS,
  },
  {
    comune: 'Ossi',
    provincia: Province.SS,
  },
  {
    comune: 'Ozieri',
    provincia: Province.SS,
  },
  {
    comune: 'Padria',
    provincia: Province.SS,
  },
  {
    comune: 'Palau',
    provincia: Province.SS,
  },
  {
    comune: 'Pattada',
    provincia: Province.SS,
  },
  {
    comune: 'Perfugas',
    provincia: Province.SS,
  },
  {
    comune: 'Ploaghe',
    provincia: Province.SS,
  },
  {
    comune: 'Porto Torres',
    provincia: Province.SS,
  },
  {
    comune: 'Pozzomaggiore',
    provincia: Province.SS,
  },
  {
    comune: 'Putifigari',
    provincia: Province.SS,
  },
  {
    comune: 'Romana',
    provincia: Province.SS,
  },
  {
    comune: 'Aglientu',
    provincia: Province.SS,
  },
  {
    comune: 'Santa Teresa Gallura',
    provincia: Province.SS,
  },
  {
    comune: 'Sassari',
    provincia: Province.SS,
  },
  {
    comune: 'Sedini',
    provincia: Province.SS,
  },
  {
    comune: 'Semestene',
    provincia: Province.SS,
  },
  {
    comune: 'Sennori',
    provincia: Province.SS,
  },
  {
    comune: 'Siligo',
    provincia: Province.SS,
  },
  {
    comune: 'Sorso',
    provincia: Province.SS,
  },
  {
    comune: 'Tempio Pausania',
    provincia: Province.SS,
  },
  {
    comune: 'Thiesi',
    provincia: Province.SS,
  },
  {
    comune: 'Tissi',
    provincia: Province.SS,
  },
  {
    comune: 'Torralba',
    provincia: Province.SS,
  },
  {
    comune: "Trinità d'Agultu e Vignola",
    provincia: Province.SS,
  },
  {
    comune: 'Tula',
    provincia: Province.SS,
  },
  {
    comune: 'Uri',
    provincia: Province.SS,
  },
  {
    comune: 'Usini',
    provincia: Province.SS,
  },
  {
    comune: 'Villanova Monteleone',
    provincia: Province.SS,
  },
  {
    comune: 'Valledoria',
    provincia: Province.SS,
  },
  {
    comune: 'Telti',
    provincia: Province.SS,
  },
  {
    comune: 'Badesi',
    provincia: Province.SS,
  },
  {
    comune: 'Viddalba',
    provincia: Province.SS,
  },
  {
    comune: 'Golfo Aranci',
    provincia: Province.SS,
  },
  {
    comune: 'Loiri Porto San Paolo',
    provincia: Province.SS,
  },
  {
    comune: "Sant'Antonio di Gallura",
    provincia: Province.SS,
  },
  {
    comune: 'Tergu',
    provincia: Province.SS,
  },
  {
    comune: 'Santa Maria Coghinas',
    provincia: Province.SS,
  },
  {
    comune: 'Erula',
    provincia: Province.SS,
  },
  {
    comune: 'Stintino',
    provincia: Province.SS,
  },
  {
    comune: 'Padru',
    provincia: Province.SS,
  },
  {
    comune: 'Budoni',
    provincia: Province.SS,
  },
  {
    comune: 'San Teodoro',
    provincia: Province.SS,
  },
  {
    comune: 'Aritzo',
    provincia: Province.NU,
  },
  {
    comune: 'Arzana',
    provincia: Province.NU,
  },
  {
    comune: 'Atzara',
    provincia: Province.NU,
  },
  {
    comune: 'Austis',
    provincia: Province.NU,
  },
  {
    comune: 'Bari Sardo',
    provincia: Province.NU,
  },
  {
    comune: 'Baunei',
    provincia: Province.NU,
  },
  {
    comune: 'Belvì',
    provincia: Province.NU,
  },
  {
    comune: 'Birori',
    provincia: Province.NU,
  },
  {
    comune: 'Bitti',
    provincia: Province.NU,
  },
  {
    comune: 'Bolotana',
    provincia: Province.NU,
  },
  {
    comune: 'Borore',
    provincia: Province.NU,
  },
  {
    comune: 'Bortigali',
    provincia: Province.NU,
  },
  {
    comune: 'Desulo',
    provincia: Province.NU,
  },
  {
    comune: 'Dorgali',
    provincia: Province.NU,
  },
  {
    comune: 'Dualchi',
    provincia: Province.NU,
  },
  {
    comune: 'Elini',
    provincia: Province.NU,
  },
  {
    comune: 'Fonni',
    provincia: Province.NU,
  },
  {
    comune: 'Gadoni',
    provincia: Province.NU,
  },
  {
    comune: 'Gairo',
    provincia: Province.NU,
  },
  {
    comune: 'Galtellì',
    provincia: Province.NU,
  },
  {
    comune: 'Gavoi',
    provincia: Province.NU,
  },
  {
    comune: 'Girasole',
    provincia: Province.NU,
  },
  {
    comune: 'Ilbono',
    provincia: Province.NU,
  },
  {
    comune: 'Irgoli',
    provincia: Province.NU,
  },
  {
    comune: 'Jerzu',
    provincia: Province.NU,
  },
  {
    comune: 'Lanusei',
    provincia: Province.NU,
  },
  {
    comune: 'Lei',
    provincia: Province.NU,
  },
  {
    comune: 'Loceri',
    provincia: Province.NU,
  },
  {
    comune: 'Loculi',
    provincia: Province.NU,
  },
  {
    comune: 'Lodè',
    provincia: Province.NU,
  },
  {
    comune: 'Lotzorai',
    provincia: Province.NU,
  },
  {
    comune: 'Lula',
    provincia: Province.NU,
  },
  {
    comune: 'Macomer',
    provincia: Province.NU,
  },
  {
    comune: 'Mamoiada',
    provincia: Province.NU,
  },
  {
    comune: 'Meana Sardo',
    provincia: Province.NU,
  },
  {
    comune: 'Noragugume',
    provincia: Province.NU,
  },
  {
    comune: 'Nuoro',
    provincia: Province.NU,
  },
  {
    comune: 'Oliena',
    provincia: Province.NU,
  },
  {
    comune: 'Ollolai',
    provincia: Province.NU,
  },
  {
    comune: 'Olzai',
    provincia: Province.NU,
  },
  {
    comune: 'Onanì',
    provincia: Province.NU,
  },
  {
    comune: 'Onifai',
    provincia: Province.NU,
  },
  {
    comune: 'Oniferi',
    provincia: Province.NU,
  },
  {
    comune: 'Orani',
    provincia: Province.NU,
  },
  {
    comune: 'Orgosolo',
    provincia: Province.NU,
  },
  {
    comune: 'Orosei',
    provincia: Province.NU,
  },
  {
    comune: 'Orotelli',
    provincia: Province.NU,
  },
  {
    comune: 'Ortueri',
    provincia: Province.NU,
  },
  {
    comune: 'Orune',
    provincia: Province.NU,
  },
  {
    comune: 'Osidda',
    provincia: Province.NU,
  },
  {
    comune: 'Osini',
    provincia: Province.NU,
  },
  {
    comune: 'Ottana',
    provincia: Province.NU,
  },
  {
    comune: 'Ovodda',
    provincia: Province.NU,
  },
  {
    comune: 'Perdasdefogu',
    provincia: Province.NU,
  },
  {
    comune: 'Posada',
    provincia: Province.NU,
  },
  {
    comune: 'Sarule',
    provincia: Province.NU,
  },
  {
    comune: 'Silanus',
    provincia: Province.NU,
  },
  {
    comune: 'Sindia',
    provincia: Province.NU,
  },
  {
    comune: 'Siniscola',
    provincia: Province.NU,
  },
  {
    comune: 'Sorgono',
    provincia: Province.NU,
  },
  {
    comune: 'Talana',
    provincia: Province.NU,
  },
  {
    comune: 'Tertenia',
    provincia: Province.NU,
  },
  {
    comune: 'Teti',
    provincia: Province.NU,
  },
  {
    comune: 'Tiana',
    provincia: Province.NU,
  },
  {
    comune: 'Tonara',
    provincia: Province.NU,
  },
  {
    comune: 'Torpè',
    provincia: Province.NU,
  },
  {
    comune: 'Tortolì',
    provincia: Province.NU,
  },
  {
    comune: 'Triei',
    provincia: Province.NU,
  },
  {
    comune: 'Ulassai',
    provincia: Province.NU,
  },
  {
    comune: 'Urzulei',
    provincia: Province.NU,
  },
  {
    comune: 'Ussassai',
    provincia: Province.NU,
  },
  {
    comune: 'Villagrande Strisaili',
    provincia: Province.NU,
  },
  {
    comune: 'Cardedu',
    provincia: Province.NU,
  },
  {
    comune: 'Lodine',
    provincia: Province.NU,
  },
  {
    comune: 'Assemini',
    provincia: Province.CA,
  },
  {
    comune: 'Cagliari',
    provincia: Province.CA,
  },
  {
    comune: 'Capoterra',
    provincia: Province.CA,
  },
  {
    comune: 'Decimomannu',
    provincia: Province.CA,
  },
  {
    comune: 'Maracalagonis',
    provincia: Province.CA,
  },
  {
    comune: 'Pula',
    provincia: Province.CA,
  },
  {
    comune: "Quartu Sant'Elena",
    provincia: Province.CA,
  },
  {
    comune: 'Sarroch',
    provincia: Province.CA,
  },
  {
    comune: 'Selargius',
    provincia: Province.CA,
  },
  {
    comune: 'Sestu',
    provincia: Province.CA,
  },
  {
    comune: 'Settimo San Pietro',
    provincia: Province.CA,
  },
  {
    comune: 'Sinnai',
    provincia: Province.CA,
  },
  {
    comune: 'Uta',
    provincia: Province.CA,
  },
  {
    comune: 'Villa San Pietro',
    provincia: Province.CA,
  },
  {
    comune: 'Quartucciu',
    provincia: Province.CA,
  },
  {
    comune: 'Elmas',
    provincia: Province.CA,
  },
  {
    comune: 'Monserrato',
    provincia: Province.CA,
  },
  {
    comune: 'Abbasanta',
    provincia: Province.OR,
  },
  {
    comune: 'Aidomaggiore',
    provincia: Province.OR,
  },
  {
    comune: 'Albagiara',
    provincia: Province.OR,
  },
  {
    comune: 'Ales',
    provincia: Province.OR,
  },
  {
    comune: 'Allai',
    provincia: Province.OR,
  },
  {
    comune: 'Arborea',
    provincia: Province.OR,
  },
  {
    comune: 'Ardauli',
    provincia: Province.OR,
  },
  {
    comune: 'Assolo',
    provincia: Province.OR,
  },
  {
    comune: 'Asuni',
    provincia: Province.OR,
  },
  {
    comune: 'Baradili',
    provincia: Province.OR,
  },
  {
    comune: 'Baratili San Pietro',
    provincia: Province.OR,
  },
  {
    comune: 'Baressa',
    provincia: Province.OR,
  },
  {
    comune: 'Bauladu',
    provincia: Province.OR,
  },
  {
    comune: 'Bidonì',
    provincia: Province.OR,
  },
  {
    comune: 'Bonarcado',
    provincia: Province.OR,
  },
  {
    comune: 'Boroneddu',
    provincia: Province.OR,
  },
  {
    comune: 'Busachi',
    provincia: Province.OR,
  },
  {
    comune: 'Cabras',
    provincia: Province.OR,
  },
  {
    comune: 'Cuglieri',
    provincia: Province.OR,
  },
  {
    comune: 'Fordongianus',
    provincia: Province.OR,
  },
  {
    comune: 'Ghilarza',
    provincia: Province.OR,
  },
  {
    comune: 'Gonnoscodina',
    provincia: Province.OR,
  },
  {
    comune: 'Gonnosnò',
    provincia: Province.OR,
  },
  {
    comune: 'Gonnostramatza',
    provincia: Province.OR,
  },
  {
    comune: 'Marrubiu',
    provincia: Province.OR,
  },
  {
    comune: 'Masullas',
    provincia: Province.OR,
  },
  {
    comune: 'Milis',
    provincia: Province.OR,
  },
  {
    comune: 'Mogorella',
    provincia: Province.OR,
  },
  {
    comune: 'Mogoro',
    provincia: Province.OR,
  },
  {
    comune: 'Morgongiori',
    provincia: Province.OR,
  },
  {
    comune: 'Narbolia',
    provincia: Province.OR,
  },
  {
    comune: 'Neoneli',
    provincia: Province.OR,
  },
  {
    comune: 'Norbello',
    provincia: Province.OR,
  },
  {
    comune: 'Nughedu Santa Vittoria',
    provincia: Province.OR,
  },
  {
    comune: 'Nurachi',
    provincia: Province.OR,
  },
  {
    comune: 'Nureci',
    provincia: Province.OR,
  },
  {
    comune: 'Ollastra',
    provincia: Province.OR,
  },
  {
    comune: 'Oristano',
    provincia: Province.OR,
  },
  {
    comune: 'Palmas Arborea',
    provincia: Province.OR,
  },
  {
    comune: 'Pau',
    provincia: Province.OR,
  },
  {
    comune: 'Paulilatino',
    provincia: Province.OR,
  },
  {
    comune: 'Pompu',
    provincia: Province.OR,
  },
  {
    comune: 'Riola Sardo',
    provincia: Province.OR,
  },
  {
    comune: 'Ruinas',
    provincia: Province.OR,
  },
  {
    comune: 'Samugheo',
    provincia: Province.OR,
  },
  {
    comune: "San Nicolò d'Arcidano",
    provincia: Province.OR,
  },
  {
    comune: 'Santa Giusta',
    provincia: Province.OR,
  },
  {
    comune: "Villa Sant'Antonio",
    provincia: Province.OR,
  },
  {
    comune: 'Santu Lussurgiu',
    provincia: Province.OR,
  },
  {
    comune: 'San Vero Milis',
    provincia: Province.OR,
  },
  {
    comune: 'Scano di Montiferro',
    provincia: Province.OR,
  },
  {
    comune: 'Sedilo',
    provincia: Province.OR,
  },
  {
    comune: 'Seneghe',
    provincia: Province.OR,
  },
  {
    comune: 'Senis',
    provincia: Province.OR,
  },
  {
    comune: 'Sennariolo',
    provincia: Province.OR,
  },
  {
    comune: 'Siamaggiore',
    provincia: Province.OR,
  },
  {
    comune: 'Siamanna',
    provincia: Province.OR,
  },
  {
    comune: 'Simala',
    provincia: Province.OR,
  },
  {
    comune: 'Simaxis',
    provincia: Province.OR,
  },
  {
    comune: 'Sini',
    provincia: Province.OR,
  },
  {
    comune: 'Siris',
    provincia: Province.OR,
  },
  {
    comune: 'Solarussa',
    provincia: Province.OR,
  },
  {
    comune: 'Sorradile',
    provincia: Province.OR,
  },
  {
    comune: 'Tadasuni',
    provincia: Province.OR,
  },
  {
    comune: 'Terralba',
    provincia: Province.OR,
  },
  {
    comune: 'Tramatza',
    provincia: Province.OR,
  },
  {
    comune: 'Tresnuraghes',
    provincia: Province.OR,
  },
  {
    comune: 'Ulà Tirso',
    provincia: Province.OR,
  },
  {
    comune: 'Uras',
    provincia: Province.OR,
  },
  {
    comune: 'Usellus',
    provincia: Province.OR,
  },
  {
    comune: 'Villanova Truschedu',
    provincia: Province.OR,
  },
  {
    comune: 'Villaurbana',
    provincia: Province.OR,
  },
  {
    comune: 'Villa Verde',
    provincia: Province.OR,
  },
  {
    comune: 'Zeddiani',
    provincia: Province.OR,
  },
  {
    comune: 'Zerfaliu',
    provincia: Province.OR,
  },
  {
    comune: 'Siapiccia',
    provincia: Province.OR,
  },
  {
    comune: 'Curcuris',
    provincia: Province.OR,
  },
  {
    comune: 'Soddì',
    provincia: Province.OR,
  },
  {
    comune: 'Bosa',
    provincia: Province.OR,
  },
  {
    comune: 'Flussio',
    provincia: Province.OR,
  },
  {
    comune: 'Laconi',
    provincia: Province.OR,
  },
  {
    comune: 'Magomadas',
    provincia: Province.OR,
  },
  {
    comune: 'Modolo',
    provincia: Province.OR,
  },
  {
    comune: 'Montresta',
    provincia: Province.OR,
  },
  {
    comune: 'Sagama',
    provincia: Province.OR,
  },
  {
    comune: 'Suni',
    provincia: Province.OR,
  },
  {
    comune: 'Tinnura',
    provincia: Province.OR,
  },
  {
    comune: 'Arbus',
    provincia: Province.SU,
  },
  {
    comune: 'Armungia',
    provincia: Province.SU,
  },
  {
    comune: 'Ballao',
    provincia: Province.SU,
  },
  {
    comune: 'Barrali',
    provincia: Province.SU,
  },
  {
    comune: 'Barumini',
    provincia: Province.SU,
  },
  {
    comune: 'Buggerru',
    provincia: Province.SU,
  },
  {
    comune: 'Burcei',
    provincia: Province.SU,
  },
  {
    comune: 'Calasetta',
    provincia: Province.SU,
  },
  {
    comune: 'Carbonia',
    provincia: Province.SU,
  },
  {
    comune: 'Carloforte',
    provincia: Province.SU,
  },
  {
    comune: 'Castiadas',
    provincia: Province.SU,
  },
  {
    comune: 'Collinas',
    provincia: Province.SU,
  },
  {
    comune: 'Decimoputzu',
    provincia: Province.SU,
  },
  {
    comune: 'Dolianova',
    provincia: Province.SU,
  },
  {
    comune: 'Domus de Maria',
    provincia: Province.SU,
  },
  {
    comune: 'Domusnovas',
    provincia: Province.SU,
  },
  {
    comune: 'Donori',
    provincia: Province.SU,
  },
  {
    comune: 'Escalaplano',
    provincia: Province.SU,
  },
  {
    comune: 'Escolca',
    provincia: Province.SU,
  },
  {
    comune: 'Esterzili',
    provincia: Province.SU,
  },
  {
    comune: 'Fluminimaggiore',
    provincia: Province.SU,
  },
  {
    comune: 'Furtei',
    provincia: Province.SU,
  },
  {
    comune: 'Genoni',
    provincia: Province.SU,
  },
  {
    comune: 'Genuri',
    provincia: Province.SU,
  },
  {
    comune: 'Gergei',
    provincia: Province.SU,
  },
  {
    comune: 'Gesico',
    provincia: Province.SU,
  },
  {
    comune: 'Gesturi',
    provincia: Province.SU,
  },
  {
    comune: 'Giba',
    provincia: Province.SU,
  },
  {
    comune: 'Goni',
    provincia: Province.SU,
  },
  {
    comune: 'Gonnesa',
    provincia: Province.SU,
  },
  {
    comune: 'Gonnosfanadiga',
    provincia: Province.SU,
  },
  {
    comune: 'Guamaggiore',
    provincia: Province.SU,
  },
  {
    comune: 'Guasila',
    provincia: Province.SU,
  },
  {
    comune: 'Guspini',
    provincia: Province.SU,
  },
  {
    comune: 'Iglesias',
    provincia: Province.SU,
  },
  {
    comune: 'Isili',
    provincia: Province.SU,
  },
  {
    comune: 'Las Plassas',
    provincia: Province.SU,
  },
  {
    comune: 'Lunamatrona',
    provincia: Province.SU,
  },
  {
    comune: 'Mandas',
    provincia: Province.SU,
  },
  {
    comune: 'Masainas',
    provincia: Province.SU,
  },
  {
    comune: 'Monastir',
    provincia: Province.SU,
  },
  {
    comune: 'Muravera',
    provincia: Province.SU,
  },
  {
    comune: 'Musei',
    provincia: Province.SU,
  },
  {
    comune: 'Narcao',
    provincia: Province.SU,
  },
  {
    comune: 'Nuragus',
    provincia: Province.SU,
  },
  {
    comune: 'Nurallao',
    provincia: Province.SU,
  },
  {
    comune: 'Nuraminis',
    provincia: Province.SU,
  },
  {
    comune: 'Nurri',
    provincia: Province.SU,
  },
  {
    comune: 'Nuxis',
    provincia: Province.SU,
  },
  {
    comune: 'Orroli',
    provincia: Province.SU,
  },
  {
    comune: 'Ortacesus',
    provincia: Province.SU,
  },
  {
    comune: 'Pabillonis',
    provincia: Province.SU,
  },
  {
    comune: 'Pauli Arbarei',
    provincia: Province.SU,
  },
  {
    comune: 'Perdaxius',
    provincia: Province.SU,
  },
  {
    comune: 'Pimentel',
    provincia: Province.SU,
  },
  {
    comune: 'Piscinas',
    provincia: Province.SU,
  },
  {
    comune: 'Portoscuso',
    provincia: Province.SU,
  },
  {
    comune: 'Sadali',
    provincia: Province.SU,
  },
  {
    comune: 'Samassi',
    provincia: Province.SU,
  },
  {
    comune: 'Samatzai',
    provincia: Province.SU,
  },
  {
    comune: 'San Basilio',
    provincia: Province.SU,
  },
  {
    comune: 'San Gavino Monreale',
    provincia: Province.SU,
  },
  {
    comune: 'San Giovanni Suergiu',
    provincia: Province.SU,
  },
  {
    comune: 'San Nicolò Gerrei',
    provincia: Province.SU,
  },
  {
    comune: 'San Sperate',
    provincia: Province.SU,
  },
  {
    comune: 'San Vito',
    provincia: Province.SU,
  },
  {
    comune: 'Sanluri',
    provincia: Province.SU,
  },
  {
    comune: 'Santadi',
    provincia: Province.SU,
  },
  {
    comune: "Sant'Andrea Frius",
    provincia: Province.SU,
  },
  {
    comune: "Sant'Anna Arresi",
    provincia: Province.SU,
  },
  {
    comune: "Sant'Antioco",
    provincia: Province.SU,
  },
  {
    comune: 'Sardara',
    provincia: Province.SU,
  },
  {
    comune: 'Segariu',
    provincia: Province.SU,
  },
  {
    comune: 'Selegas',
    provincia: Province.SU,
  },
  {
    comune: 'Senorbì',
    provincia: Province.SU,
  },
  {
    comune: 'Serdiana',
    provincia: Province.SU,
  },
  {
    comune: 'Serramanna',
    provincia: Province.SU,
  },
  {
    comune: 'Serrenti',
    provincia: Province.SU,
  },
  {
    comune: 'Serri',
    provincia: Province.SU,
  },
  {
    comune: 'Setzu',
    provincia: Province.SU,
  },
  {
    comune: 'Seui',
    provincia: Province.SU,
  },
  {
    comune: 'Seulo',
    provincia: Province.SU,
  },
  {
    comune: 'Siddi',
    provincia: Province.SU,
  },
  {
    comune: 'Siliqua',
    provincia: Province.SU,
  },
  {
    comune: 'Silius',
    provincia: Province.SU,
  },
  {
    comune: 'Siurgus Donigala',
    provincia: Province.SU,
  },
  {
    comune: 'Soleminis',
    provincia: Province.SU,
  },
  {
    comune: 'Suelli',
    provincia: Province.SU,
  },
  {
    comune: 'Teulada',
    provincia: Province.SU,
  },
  {
    comune: 'Tratalias',
    provincia: Province.SU,
  },
  {
    comune: 'Tuili',
    provincia: Province.SU,
  },
  {
    comune: 'Turri',
    provincia: Province.SU,
  },
  {
    comune: 'Ussana',
    provincia: Province.SU,
  },
  {
    comune: 'Ussaramanna',
    provincia: Province.SU,
  },
  {
    comune: 'Vallermosa',
    provincia: Province.SU,
  },
  {
    comune: 'Villacidro',
    provincia: Province.SU,
  },
  {
    comune: 'Villamar',
    provincia: Province.SU,
  },
  {
    comune: 'Villamassargia',
    provincia: Province.SU,
  },
  {
    comune: 'Villanova Tulo',
    provincia: Province.SU,
  },
  {
    comune: 'Villanovaforru',
    provincia: Province.SU,
  },
  {
    comune: 'Villanovafranca',
    provincia: Province.SU,
  },
  {
    comune: 'Villaperuccio',
    provincia: Province.SU,
  },
  {
    comune: 'Villaputzu',
    provincia: Province.SU,
  },
  {
    comune: 'Villasalto',
    provincia: Province.SU,
  },
  {
    comune: 'Villasimius',
    provincia: Province.SU,
  },
  {
    comune: 'Villasor',
    provincia: Province.SU,
  },
  {
    comune: 'Villaspeciosa',
    provincia: Province.SU,
  },
];
