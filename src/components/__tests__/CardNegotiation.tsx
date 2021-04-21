import { cleanup, renderApolloNoRouter } from '../../test-utils/test-utils';
import { CardNegotiation } from '../../components/Cards/CardNegotiation';
import * as React from 'react';
import { negotiationFactory } from '../../test-utils/test-factory';
import { myInfo } from '../../cache';

const negotiationActive = negotiationFactory.build();
const negotiationClosed = negotiationFactory.build({
  isConcluded: true,
  dateConcluded: 'oggi',
});
const negotiationClosedReviewed = negotiationFactory.build({
  isConcluded: true,
  dateConcluded: 'oggi',
  review: [{ createdBy: { _id: '123' } }],
});
const mockNegotiationActive = negotiationActive;
const mockNegotiationClosed = negotiationClosed;
describe('CardNegotiation component', () => {
  afterEach(cleanup);

  it('renders the CardNegotiations component active negotiation', () => {
    const { getByRole } = renderApolloNoRouter(
      <CardNegotiation negotiation={mockNegotiationActive} />
    );
    expect(getByRole('button', { name: 'close-negotiation' }));
  });

  it('renders the CardNegotiations component closed negotiation', () => {
    const { getByText, getByRole } = renderApolloNoRouter(
      <CardNegotiation negotiation={mockNegotiationClosed} />
    );
    expect(getByRole('button', { name: 'review' }));
    expect(getByText('Trattativa conclusa: oggi'));
  });

  it('if negotiation already has review does not show button', () => {
    myInfo({ _id: '123' });
    const { getByText, queryByRole } = renderApolloNoRouter(
      <CardNegotiation negotiation={negotiationClosedReviewed} />
    );
    expect(queryByRole('button', { name: 'review' })).toBeFalsy();
    expect(getByText('Trattativa conclusa: oggi'));
  });
});
