import { grey } from '@material-ui/core/colors';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    paper: {
      marginTop: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    buyButton: {
      color: theme.palette.primary.main,
      backgroundColor: grey[50],
      '&:hover': {
        backgroundColor: grey[100],
      },
    },
    sellButton: {
      color: '#fff',
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
      '&:disabled': {
        color: '#fefefe',
        backgroundColor: theme.palette.secondary.light,
      },
    },
    buyHome: {
      '&:hover': {
        backgroundColor: 'rgb(100, 10, 40)',
      },
    },
    sellHome: {
      '&:hover': {
        backgroundColor: 'rgb(250, 250, 241)',
      },
    },
    cruiseHome: {
      '&:hover': {
        backgroundColor: 'rgb(250, 232, 250)',
      },
    },
  })
);

export const useStylesForms = makeStyles((theme: Theme) => ({
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
    color: theme.palette.primary.main,
    backgroundColor: grey[50],
    '&:hover': {
      backgroundColor: grey[100],
    },
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
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    '&:disabled': {
      color: '#fefefe',
      backgroundColor: theme.palette.secondary.light,
    },
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
