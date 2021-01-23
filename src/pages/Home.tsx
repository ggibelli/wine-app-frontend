import * as React from 'react';
import { VStack, Box, Button } from '@chakra-ui/react';
import { RouteComponentProps } from '@reach/router';

export const Home: React.FC<RouteComponentProps> = () => (
  <VStack spacing={3}>
    <Box>
      <Button>Comprare</Button>
    </Box>
    <Box>
      <Button>Vendere</Button>
    </Box>
  </VStack>
);
