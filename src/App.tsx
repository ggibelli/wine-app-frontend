/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

//import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Pages } from './pages';
//import { Login } from './pages/Login';
//
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6d1331',
    },
    secondary: {
      main: '#6c63ff',
    },
  },
});

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Pages />
  </ThemeProvider>
);
