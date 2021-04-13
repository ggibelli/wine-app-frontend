import { NegotiationModal } from '../NegotiationModal';
import { cleanup, renderApolloNoRouter } from '../../test-utils';
import * as React from 'react';
import { fireEvent } from '@testing-library/react';

describe('NegotiationModal component', () => {
  afterEach(cleanup);

  it('renders the NegotiationModal component', () => {
    const createNegotiation = jest.fn();
    const handleClose = jest.fn();
    renderApolloNoRouter(
      <NegotiationModal
        handleClose={handleClose}
        open={true}
        createNegotiation={createNegotiation}
      />
    );
  });

  it('handleclose called with cancel and opening the negotiation', () => {
    const createNegotiation = jest.fn();
    const handleClose = jest.fn();
    const { getByText } = renderApolloNoRouter(
      <NegotiationModal
        handleClose={handleClose}
        open={true}
        createNegotiation={createNegotiation}
      />
    );
    fireEvent.click(getByText('Cancel'));
    expect(handleClose).toBeCalledTimes(1);
    fireEvent.click(getByText('Apri la trattativa'));
    expect(handleClose).toBeCalledTimes(2);
    expect(createNegotiation).toBeCalledTimes(1);
  });
});
