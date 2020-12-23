/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  //theme,
  extendTheme,
} from '@chakra-ui/react';
//import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Header } from './page-header';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

export const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign='center' fontSize='xl'>
      <Grid minH='100vh' p={3}>
        <Header />
      </Grid>
    </Box>
  </ChakraProvider>
);
