import { Notification } from '../Notification';
import * as React from 'react';
import { renderApolloNoRouter, cleanup, fireEvent } from '../../test-utils';
import { act, screen, waitFor } from '@testing-library/react';
import { NotificationDocument } from '../../generated/graphql';
import { notification, cache } from '../../cache';

describe('Notification', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders Notification', async () => {
    const mocks: any[] = [];
    renderApolloNoRouter(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <Notification />,
      { mocks, addTypename: false }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(notification()).toBeFalsy();
  });

  it('renders notification and close it', async () => {
    const mocks = [
      {
        request: {
          query: NotificationDocument,
        },
        result: {
          data: {
            notification: {
              type: 'error',
              message: 'Ciao ciao',
            },
          },
        },
      },
    ];
    notification({
      type: 'error',
      message: 'Ciao ciao',
    });
    renderApolloNoRouter(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <Notification />,
      { mocks, cache, addTypename: false, resolvers: {} }
    );
    expect(notification()).toBeTruthy();
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    //expect(notification()).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    await waitFor(() => {
      expect(notification()).toBeFalsy();
    });
  }, 10000);
});
