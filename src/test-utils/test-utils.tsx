/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import '@testing-library/jest-dom/extend-expect';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { purple } from '@material-ui/core/colors';
import {
  createHistory,
  createMemorySource,
  LocationProvider,
  Router,
} from '@reach/router';

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

const AllProviders = ({ children }: { children?: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
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
  }: RenderApolloOptions = {},
  { route = '/', history = createHistory(createMemorySource(route)) } = {}
) => {
  return customRender(
    <MockedProvider
      mocks={mocks}
      addTypename={addTypename}
      defaultOptions={
        defaultOptions
        // watchQuery: { fetchPolicy: 'no-cache' },
        // query: { fetchPolicy: 'no-cache' },
      }
      cache={cache}
      resolvers={resolvers}
    >
      <LocationProvider history={history}>
        <Router>{node}</Router>
      </LocationProvider>
    </MockedProvider>,
    options
  );
};

const renderApolloNoRouter = (
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

/**
 * Utility function that mocks the `IntersectionObserver` API. Necessary for components that rely
 * on it, otherwise the tests will crash. Recommended to execute inside `beforeEach`.
 * @param intersectionObserverMock - Parameter that is sent to the `Object.defineProperty`
 * overwrite method. `jest.fn()` mock functions can be passed here if the goal is to not only
 * mock the intersection observer, but its methods.
 */
export function setupIntersectionObserverMock({
  root = null,
  rootMargin = '',
  thresholds = [],
  disconnect = () => null,
  observe = () => null,
  takeRecords = () => [],
  unobserve = () => null,
} = {}): void {
  class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | null = root;
    readonly rootMargin: string = rootMargin;
    readonly thresholds: ReadonlyArray<number> = thresholds;
    disconnect: () => void = disconnect;
    observe: (target: Element) => void = observe;
    takeRecords: () => IntersectionObserverEntry[] = takeRecords;
    unobserve: (target: Element) => void = unobserve;
  }

  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  });

  Object.defineProperty(global, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  });
}

export * from '@testing-library/react';
export { renderApollo };
export { renderApolloNoRouter };
export { customRender as render };
