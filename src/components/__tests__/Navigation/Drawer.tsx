import { Drawer } from '../../Navigation/Drawer';
import * as React from 'react';
import { renderApolloNoRouter, cleanup } from '../../../test-utils/test-utils';

const data = {
  isLoading: false,
  error: undefined,
  data: {
    name: 'giovanni',
    numAds: 2,
    numOpenNegs: 4,
    numClosedNegs: 4,
    savedAds: 3,

    rating: 4.5,
  },
};
describe('Drawer', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders drawer', () => {
    const { getByText, getByTestId, getByRole } = renderApolloNoRouter(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <Drawer state={true} toggleDrawer={() => {}} data={data} />
    );
    expect(getByText('giovanni'));
    expect(getByText('Annunci pubblicati (2)'));
    expect(getByText('Trattative in corso (4)'));
    expect(getByText('Annunci salvati (3)'));
    expect(getByRole('link', { name: '4.5 Stars (4.50)' }));
    expect(getByTestId('logout'));
  });
});
