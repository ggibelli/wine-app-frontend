import { SwipableTabsNotification } from '../../SwipableTabsNotification';
import * as React from 'react';
import {
  renderApolloNoRouter,
  cleanup,
  fireEvent,
} from '../../../test-utils/test-utils';
import { messageFactory, user } from '../../../test-utils/test-factory';
import { myInfo } from '../../../cache';

const messageSent = messageFactory.build({ content: 'testtest' });
const messageReceived = messageFactory.build({
  sentBy: { firstName: 'Amministratore' },
  sentTo: user,
});

describe('SwipableTabsNotification component', () => {
  afterEach(cleanup);

  it('renders the SwipableTabsNotification component ', () => {
    const handleClick = jest.fn();
    myInfo(user);
    renderApolloNoRouter(
      <SwipableTabsNotification
        handleClickNotification={handleClick}
        messages={[messageSent, messageReceived]}
      />
    );
  });
});
