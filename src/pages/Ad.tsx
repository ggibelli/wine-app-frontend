import * as React from 'react';
import { Stack, Text } from '@chakra-ui/react';
import { RouteComponentProps } from '@reach/router';

export const Ad: React.FC<RouteComponentProps> = () => (
  <>
    <Stack spacing={3}>
      <Text fontSize='6xl'>(6xl) In love with AD & Next</Text>
      <Text fontSize='5xl'>(5xl) In love with AD & Next</Text>
      <Text fontSize='4xl'>(4xl) In love with ADAD & Next</Text>
      <Text fontSize='2xl'>(2xl) In love with React & Next</Text>
      <Text fontSize='xl'>(xl) In ad with React & Next</Text>
      <Text fontSize='lg'>(lg) In love with AD & Next</Text>
      <Text fontSize='md'>(md) In love with React & Next</Text>
      <Text fontSize='sm'>(sm) In love with React & Next</Text>
      <Text fontSize='xs'>(xs) In love with React & Next</Text>
    </Stack>
  </>
);
