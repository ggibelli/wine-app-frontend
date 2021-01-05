import { LogoutButton } from '../LogoutButton';
import * as React from 'react';
import { renderApollo, cleanup, fireEvent } from '../../test-utils';
import { cache, isLoggedInVar } from '../../cache';

describe('logout button', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders logout button', () => {
    renderApollo(<LogoutButton />);
  });

  it('complete logout', () => {
    isLoggedInVar(true);
    localStorage.setItem('wineapp-user-token', 'testTokenValue');
    const { getByTestId } = renderApollo(<LogoutButton />, { cache });
    fireEvent.click(getByTestId('logout-button'));
    expect(isLoggedInVar()).toBeFalsy();
    expect(localStorage.getItem('wineapp-user-token')).toBeNull();
  });
});
