import { renderApollo, cleanup } from '../../test-utils/test-utils';
import Home from '../Home';
import * as React from 'react';

describe('Home page', () => {
  afterEach(cleanup);

  it('renders the Home page ', () => {
    renderApollo(
      <Home path='/' />,
      {
        mocks: [],
        addTypename: false,
      },
      { route: '/' }
    );
  });
});
