import * as React from 'react';
import { Container } from '@chakra-ui/react';

export const PageContainer: React.FC<React.ReactNode> = (props) => (
  <Container>{props.children}</Container>
);
