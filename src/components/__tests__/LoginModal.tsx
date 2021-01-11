import { LoginModal } from '../LoginModal';
import * as React from 'react';
import { renderApollo, cleanup, fireEvent } from '../../test-utils';

describe('LoginModal', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders LoginModal', () => {
    const handleClose = jest.fn();
    const onSubmit = jest.fn();
    const { getByText } = renderApollo(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <LoginModal isOpen={true} onClose={handleClose} onSubmit={onSubmit} />
    );
    expect(getByText('Password')).toBeTruthy();
    fireEvent.click(getByText(/close/i));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
