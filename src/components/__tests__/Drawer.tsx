import { DrawerLeft } from '../Drawer';
import * as React from 'react';
import { renderApollo, cleanup, fireEvent } from '../../test-utils';
import { cache, isLoggedInVar } from '../../cache';

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
      <DrawerLeft isOpen={true} onClose={() => {}} data={mockUser} />
    );
  });
});
