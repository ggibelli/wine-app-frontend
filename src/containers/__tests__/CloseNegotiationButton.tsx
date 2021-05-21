import { CloseNegotiationButton } from '../CloseNegotiationButton';
import * as React from 'react';
import { renderApolloNoRouter, cleanup } from '../../test-utils/test-utils';
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

  it('renders the CloseNegotiationButton', () => {
    renderApolloNoRouter(
      <CloseNegotiationButton id='123' handleClose={jest.fn()} />,
      {
        mocks: [],
        addTypename: false,
      }
    );
  });

  it('Close negotiation success calls notification success', async () => {
    const handleClick = jest.fn();
    const { getByRole } = renderApolloNoRouter(
      <CloseNegotiationButton id='123' handleClose={handleClick} />,
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
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('Close negotiation error calls notification error', async () => {
    const { getByRole } = renderApolloNoRouter(
      <CloseNegotiationButton id='123' handleClose={jest.fn()} />,
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
