/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

//import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Pages } from './pages';
//import { Login } from './pages/Login';
//
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Pages />
  </ThemeProvider>
);
