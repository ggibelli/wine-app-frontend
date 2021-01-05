/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import '@testing-library/jest-dom/extend-expect';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';

const AllProviders = ({ children }: { children?: React.ReactNode }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options });

type RenderApolloOptions = {
  mocks?: MockedResponse[];
  addTypename?: any;
  defaultOptions?: any;
  cache?: any;
  resolvers?: any;
  [st: string]: any;
};

const renderApollo = (
  node: any,
  {
    mocks,
    addTypename,
    defaultOptions,
    cache,
    resolvers,
    ...options
  }: RenderApolloOptions = {}
) => {
  return customRender(
    <MockedProvider
      mocks={mocks}
      addTypename={addTypename}
      defaultOptions={defaultOptions}
      cache={cache}
      resolvers={resolvers}
    >
      {node}
    </MockedProvider>,
    options
  );
};

export * from '@testing-library/react';
export { renderApollo };

export { customRender as render };
