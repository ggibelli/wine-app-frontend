import { OpenNegotiations } from '../OpenNegotiations';
import * as React from 'react';
import { renderApolloNoRouter, cleanup } from '../../test-utils/test-utils';
import { fireEvent } from '@testing-library/react';

const dataSuccess = {
  loading: false,
  error: null,
  data: {
    negotiationsForAd: [
      {
        createdBy: {
          firstName: 'Rocco',
          lastName: 'Tanica',
          __typename: 'User',
          _id: '605a7c42c28f1006e42fe147',
        },
        dateConcluded: null,
        dateCreated: '30 Mar 21, 17:45',
        isConcluded: false,
        __typename: 'Negotiation',
        _id: '6062acf384030d5829be7e77',
      },
    ],
  },
};

const dataSuccessClosed = {
  loading: false,
  error: null,
  data: {
    negotiationsForAd: [
      {
        createdBy: {
          firstName: 'Rocco',
          lastName: 'Tanica',
          __typename: 'User',
          _id: '605a7c42c28f1006e42fe147',
        },
        dateConcluded: '31 Mar 21, 17:45',
        dateCreated: '30 Mar 21, 17:45',
        isConcluded: true,
        __typename: 'Negotiation',
        _id: '6062acf384030d5829be7e77',
      },
    ],
  },
};

const dataLoading = {
  loading: true,
  error: null,
  data: undefined,
};

const dataError = {
  loading: false,
  error: new Error(),
  data: undefined,
};

describe('OpenNegotiations Component', () => {
  afterEach(cleanup);

  it('renders the OpenNegotiations Component loading state', () => {
    const { getByTestId } = renderApolloNoRouter(
      //@ts-expect-error I don't use other properties obj
      <OpenNegotiations data={dataLoading} showNegotiations={jest.fn()} />,
      {
        mocks: [],
        addTypename: false,
      }
    );
    expect(getByTestId('loading')).toBeTruthy();
  });

  it('renders the OpenNegotiations Component error state', () => {
    const { getByText } = renderApolloNoRouter(
      //@ts-expect-error I don't use other properties obj
      <OpenNegotiations data={dataError} showNegotiations={jest.fn()} />,
      {
        mocks: [],
        addTypename: false,
      }
    );
    expect(getByText('error')).toBeTruthy();
  });

  it('renders the OpenNegotiations Component success state', () => {
    const { getByText } = renderApolloNoRouter(
      //@ts-expect-error I don't use other properties obj
      <OpenNegotiations data={dataSuccess} showNegotiations={jest.fn()} />,
      {
        mocks: [],
        addTypename: false,
      }
    );
    expect(getByText('Rocco'));
    expect(getByText('aperta il 30 Mar 21, 17:45'));
    expect(getByText('Vai alla chat'));
    expect(getByText('Chiudi trattativa'));
  });

  it('renders the OpenNegotiations Component success state negotiation closed', () => {
    const { getByText } = renderApolloNoRouter(
      <OpenNegotiations
        //@ts-expect-error I don't use other properties obj
        data={dataSuccessClosed}
        showNegotiations={jest.fn()}
      />,
      {
        mocks: [],
        addTypename: false,
      }
    );
    expect(getByText('Rocco'));
    expect(getByText('aperta il 30 Mar 21, 17:45'));
    expect(getByText('chiusa il 31 Mar 21, 17:45'));
    expect(getByText('Lascia una recensione'));

    fireEvent.click(getByText('Vai alla chat'));
  });
});
