/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

//import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Pages } from './pages';
//import { Login } from './pages/Login';
//
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Montserrat'].join(','),
  },
  palette: {
    primary: {
      main: '#6d1331',
      light: '#8a425a5',
      dark: '#4c0d22',
    },
    secondary: {
      main: '#707070',
      light: '#8c8c8c',
      dark: '#4e4e4e',
    },
    text: {
      primary: '#000',
      secondary: '#fff',
    },
  },
});

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Pages />
  </ThemeProvider>
);
