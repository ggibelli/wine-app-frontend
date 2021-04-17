import { Order } from '../../FilterAds/Order';
import {
  cleanup,
  fireEvent,
  renderApolloNoRouter,
  waitFor,
} from '../../../test-utils/test-utils';
import * as React from 'react';
import { QueryOrderBy } from '../../../generated/graphql';

describe('Filter component', () => {
  afterEach(cleanup);

  it('renders the filter component with only the time options', () => {
    const setOrder = jest.fn();
    const order = QueryOrderBy.CreatedAtAsc;
    const { getByText, queryByText } = renderApolloNoRouter(
      <Order order={order} setOrder={setOrder} />
    );
    expect(getByText('Dal piu recente'));
    expect(getByText('Dal meno recente'));
    expect(queryByText('Dal piu caro')).toBeFalsy();
    expect(queryByText('Dal meno caro')).toBeFalsy();
  });

  it('renders the filter component with price and time options', () => {
    const setOrder = jest.fn();
    const order = QueryOrderBy.CreatedAtAsc;
    const { getByText } = renderApolloNoRouter(
      <Order order={order} setOrder={setOrder} isAds />
    );
    expect(getByText('Dal piu recente'));
    expect(getByText('Dal meno recente'));
    expect(getByText('Dal piu caro'));
    expect(getByText('Dal meno caro'));
  });

  it('selecting an option calls setOrder', async () => {
    const setOrder = jest.fn();
    const order = QueryOrderBy.CreatedAtAsc;
    const { getByRole } = renderApolloNoRouter(
      <Order order={order} setOrder={setOrder} isAds />
    );
    const orderSelect = getByRole('combobox', { name: 'Ordine risultati' });

    await waitFor(() => {
      fireEvent.change(orderSelect, { target: { value: 'price_DESC' } });
    });
    await waitFor(() => {
      //const input = within(combobox).querySelector('input');

      fireEvent.keyDown(orderSelect, { key: 'ArrowDown' });
    });
    await waitFor(() => {
      fireEvent.keyDown(orderSelect, { key: 'Enter' });
    });
    expect(setOrder).toHaveBeenCalledTimes(1);
  });
});
