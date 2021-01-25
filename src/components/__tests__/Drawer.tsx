import { Drawer } from '../Navigation/Drawer';
import * as React from 'react';
import { renderApollo, cleanup } from '../../test-utils';

const mockUser = {
  isLoading: false,
  error: undefined,
  data: {
    numAds: 1,
    numNegs: 2,
    name: 'aa',
  },
};

describe('Drawer', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders drawer', () => {
    renderApollo(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <Drawer state={true} toggleDrawer={() => {}} />
    );
  });
});
