import { cleanup, renderApolloNoRouter } from '../../test-utils/test-utils';
import { CardReview } from '../../components/Cards/CardReview';
import * as React from 'react';
import { reviewFactory, user, user2 } from '../../test-utils/test-factory';
import { myInfo } from '../../cache';

const review = reviewFactory.build();
const reviewOther = reviewFactory.build({ createdBy: user2 });

describe('CardReview component', () => {
  afterEach(cleanup);

  it('renders the CardReview component', () => {
    renderApolloNoRouter(<CardReview review={review} />);
  });

  it('if my review proper text is rendered', () => {
    myInfo(user);
    const { getByRole } = renderApolloNoRouter(<CardReview review={review} />);
    expect(
      getByRole('heading', { name: 'Cosa hai detto della cantina giovanni:' })
    );
  });

  it('if not my review proper text is rendered', () => {
    myInfo(user);
    const { getByRole } = renderApolloNoRouter(
      <CardReview review={reviewOther} />
    );
    expect(getByRole('heading', { name: 'La cantina giovanni dice di te:' }));
  });
});
