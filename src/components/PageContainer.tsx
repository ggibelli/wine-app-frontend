import * as React from 'react';
import Container from '@material-ui/core/Container';

export const PageContainer: React.FC<React.ReactNode> = ({ children }) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <Container>{children}</Container>
);
