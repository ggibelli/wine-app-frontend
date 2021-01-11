/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ColorModeScript } from '@chakra-ui/react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  split,
  gql,
  NormalizedCacheObject,
} from '@apollo/client';
import { setContext } from '@apollo/link-context';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/link-ws';
import { cache } from './cache';

export const typeDefs = gql`
  enum AlertStatus {
    Success
    Warning
    Info
    Error
  }

  type Notification {
    type: AlertStatus
    message: String
  }
  extend type Query {
    isLoggedIn: Boolean!
    notification: Notification
  }
`;

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('wineapp-user-token');
  return {
    headers: {
      ...headers,
      authorization: token ? token : null,
    },
  };
});

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/graphql`,
  options: {
    reconnect: true,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  authLink.concat(httpLink)
);

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link: splitLink,
  typeDefs,
  resolvers: {},
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ColorModeScript />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
