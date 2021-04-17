import { Chat } from '../../Chat';
import {
  cleanup,
  fireEvent,
  renderApolloNoRouter,
} from '../../../test-utils/test-utils';
import * as React from 'react';
import { messageFactory, user, user2 } from '../../../test-utils/test-factory';
import { Filter } from '@material-ui/icons';

const messageSent = messageFactory.build({ content: 'testtest' });
const messageReceived = messageFactory.build({ sentBy: user2, sentTo: user });

describe('Message component', () => {
  afterEach(cleanup);

  it('renders the message component ', () => {
    const { getByText } = renderApolloNoRouter();
  });
});
