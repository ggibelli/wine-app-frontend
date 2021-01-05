import { Stack, Text } from '@chakra-ui/react';
import { RouteComponentProps } from '@reach/router';
import * as React from 'react';

export const SignUp: React.FC<RouteComponentProps> = () => (
  <>
    <Stack spacing={3}>
      <Text fontSize='6xl'>(6xl) In love with singup & Next</Text>
      <Text fontSize='5xl'>(5xl) In love with React & Next</Text>
      <Text fontSize='4xl'>(4xl) In love with React & Next</Text>
      <Text fontSize='3xl'>(3xl) In love with React & Next</Text>
      <Text fontSize='2xl'>(2xl) In love with React & Next</Text>
      <Text fontSize='xl'>(xl) In love with signup & Next</Text>
      <Text fontSize='lg'>(lg) In love with React & Next</Text>
      <Text fontSize='md'>(md) In love with React & Next</Text>
      <Text fontSize='sm'>(sm) In love with React & Next</Text>
      <Text fontSize='xs'>(xs) In love with React & Next</Text>
    </Stack>
  </>
);
