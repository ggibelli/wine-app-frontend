/* eslint-disable @typescript-eslint/no-unsafe-return */
import { renderApollo, cleanup } from '../../test-utils/test-utils';
import { act } from '@testing-library/react';
import Negotiation from '../Negotiation';
import * as React from 'react';
import { NegotiationDocument } from '../../generated/graphql';
import { negotiationFactory } from '../../test-utils/test-factory';
import { InMemoryCache } from '@apollo/client';

const activeNegotiationMock = negotiationFactory.build();
const closedNegotiationMock = negotiationFactory.build({ isConcluded: true });
const hideContactNegotiationMock = negotiationFactory.build({
  ad: { postedBy: { hideContact: true } },
});

const activeNegotiationMockSuccess = {
  request: {
    query: NegotiationDocument,
    variables: { id: '123' },
  },
  result: {
    data: {
      negotiation: activeNegotiationMock,
    },
  },
};

const closedNegotiationMockSuccess = {
  request: {
    query: NegotiationDocument,
    variables: { id: '123' },
  },
  result: {
    data: {
      negotiation: closedNegotiationMock,
    },
  },
};

const negotiationMockError = {
  request: {
    query: NegotiationDocument,
    variables: { id: '123' },
  },
  result: {
    data: null,
  },
  error: new Error('errore'),
};

const negotiationUserHidingContact = {
  request: {
    query: NegotiationDocument,
    variables: { id: '123' },
  },
  result: {
    data: {
      negotiation: hideContactNegotiationMock,
    },
  },
};

describe('Negotiation page', () => {
  afterEach(cleanup);

  it('renders the Negotiation page', () => {
    const { getByTestId } = renderApollo(
      <Negotiation path='/trattative/:id' />,
      {
        mocks: [],
        addTypename: false,
      },
      { route: '/trattative/123' }
    );
    expect(getByTestId('loading')).toBeTruthy();
  });

  it('renders the Negotiation page success active negotiation', async () => {
    const { getByText, getByRole, getByTestId } = renderApollo(
      <Negotiation path='/trattative/:id' />,
      {
        mocks: [activeNegotiationMockSuccess],
        addTypename: false,
        cache: new InMemoryCache({ addTypename: false }),
      },
      { route: '/trattative/123' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 50)));
    expect(getByText('Gestisci la trattativa')).toBeTruthy();
    expect(getByRole('button', { name: 'close-negotiation' }));
    expect(getByRole('button', { name: 'open-chat' }));
    expect(getByTestId('info-contact'));
  });

  it('renders the Negotiation page success closed negotiation', async () => {
    const { getByText, getByRole } = renderApollo(
      <Negotiation path='/trattative/:id' />,
      {
        mocks: [closedNegotiationMockSuccess],
        addTypename: true,
        // cache: new InMemoryCache({ addTypename: false }),
      },
      { route: '/trattative/123' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 50)));
    expect(getByText('Gestisci la trattativa')).toBeTruthy();
    expect(getByRole('button', { name: 'review' }));
    expect(getByRole('button', { name: 'open-chat' }));
  });

  it('renders the Negotiation page error state', async () => {
    const { getByText } = renderApollo(
      <Negotiation path='/trattative/:id' />,
      {
        mocks: [negotiationMockError],
        addTypename: false,
        // cache: new InMemoryCache({ addTypename: false }),
      },
      { route: '/trattative/123' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 50)));
    expect(getByText('errore'));
  });

  it('renders the Negotiation page success does not show info contact if user has privacy on', async () => {
    const { getByText, getByRole, queryByTestId } = renderApollo(
      <Negotiation path='/trattative/:id' />,
      {
        mocks: [negotiationUserHidingContact],
        addTypename: true,
      },
      { route: '/trattative/123' }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 50)));
    expect(getByText('Gestisci la trattativa')).toBeTruthy();
    expect(getByRole('button', { name: 'close-negotiation' }));
    expect(getByRole('button', { name: 'open-chat' }));
    expect(queryByTestId('info-contact')).toBeFalsy();
  });
});
