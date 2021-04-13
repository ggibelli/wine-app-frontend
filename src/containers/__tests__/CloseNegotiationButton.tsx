import { CloseNegotiationButton } from '../CloseNegotiationButton';
import * as React from 'react';
import { renderApolloNoRouter, cleanup } from '../../test-utils';
import { act, fireEvent } from '@testing-library/react';
import { UpdateNegotiationDocument } from '../../generated/graphql';
import { notification } from '../../cache';

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('../../cache', () => ({
  ...jest.requireActual<any>('../../cache'),
  __esModule: true, // this property makes it work

  notification: jest.fn(),
}));

const negotiationClosedSuccess = {
  request: {
    query: UpdateNegotiationDocument,
    variables: {
      negotiation: {
        _id: '123',
        isConcluded: true,
      },
    },
  },
  result: {
    data: {
      updateNegotiation: {
        __typename: 'NegotiationPayload',
        response: {
          __typename: 'Negotiation',
          _id: '123',
        },
        // errors: { __typename: 'Error' },
      },
    },
  },
};

const negotiationClosedError = {
  request: {
    query: UpdateNegotiationDocument,
    variables: {
      negotiation: {
        _id: '123',
        isConcluded: true,
      },
    },
  },
  result: {
    data: {
      updateNegotiation: {
        __typename: 'NegotiationPayload',
        response: null,
        errors: [{ name: 'error', text: 'ahia' }],
      },
    },
  },
};

describe('CloseNegotiationButton Component', () => {
  afterEach(cleanup);

  it('renders the CloseNegotiationButton buy class', () => {
    const { getByRole } = renderApolloNoRouter(
      <CloseNegotiationButton id='123' isBuy />,
      {
        mocks: [],
        addTypename: false,
      }
    );
    expect(
      getByRole('button', { name: 'close-negotiation' }).classList.contains(
        'buyBytton'
      )
    ).toBeTruthy();
  });

  it('renders the CloseNegotiationButton sell class', () => {
    const { getByRole } = renderApolloNoRouter(
      <CloseNegotiationButton id='123' />,
      {
        mocks: [],
        addTypename: false,
      }
    );
    expect(
      getByRole('button', { name: 'close-negotiation' }).classList.contains(
        'sellButton'
      )
    ).toBeTruthy();
  });

  it('Close negotiation success calls notification success', async () => {
    const { getByRole } = renderApolloNoRouter(
      <CloseNegotiationButton id='123' />,
      {
        mocks: [negotiationClosedSuccess],
        addTypename: false,
      }
    );
    fireEvent.click(getByRole('button', { name: 'close-negotiation' }));
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(notification).toBeCalledTimes(1);
    expect(notification).toBeCalledWith({
      message: 'trattativa chiusa con successo',
      type: 'success',
    });
  });

  it('Close negotiation error calls notification error', async () => {
    const { getByRole } = renderApolloNoRouter(
      <CloseNegotiationButton id='123' />,
      {
        mocks: [negotiationClosedError],
        addTypename: false,
      }
    );
    fireEvent.click(getByRole('button', { name: 'close-negotiation' }));
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(notification).toBeCalledTimes(1);
    expect(notification).toBeCalledWith({
      message: 'ahia',
      type: 'error',
    });
  });
});
