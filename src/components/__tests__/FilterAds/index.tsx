import { Filter } from '../../FilterAds';
import {
  cleanup,
  fireEvent,
  renderApolloNoRouter,
} from '../../../test-utils/test-utils';
import * as React from 'react';
import { adFactory } from '../../../test-utils/test-factory';

const ad1 = adFactory.build({
  datePosted: '08 Apr 21, 18:35',
  priceFrom: 2,
  priceTo: 2,
});
const ad2 = adFactory.build({
  datePosted: '09 Apr 21, 18:35',
  priceFrom: 5,
  priceTo: 5,
});

describe('Filter component', () => {
  afterEach(cleanup);

  it('renders the filter component ', () => {
    const setFilteredList = jest.fn();

    const { getByText } = renderApolloNoRouter(
      <Filter
        list={[ad1, ad2]}
        filteredList={[ad1, ad2]}
        setFilteredList={setFilteredList}
      >
        {' '}
        <div>test</div>{' '}
      </Filter>
    );
    expect(
      getByText('Mostra tutti gli annunci per questo vino')
    ).not.toBeVisible();
    expect(setFilteredList).toBeCalledTimes(1);
  });

  it('renders the filter component with empty list, no calls to setFilteredList', () => {
    const setFilteredList = jest.fn();

    const { getByText } = renderApolloNoRouter(
      <Filter list={[]} filteredList={[]} setFilteredList={setFilteredList}>
        {' '}
        <div>test</div>{' '}
      </Filter>
    );
    expect(
      getByText('Mostra tutti gli annunci per questo vino')
    ).not.toBeVisible();
    expect(setFilteredList).toBeCalledTimes(0);
  });

  it('renders the filter component and showAll calls setFilteredList', () => {
    const setFilteredList = jest.fn();

    const { getByText } = renderApolloNoRouter(
      <Filter
        list={[ad1, ad2]}
        filteredList={[ad1, ad2]}
        setFilteredList={setFilteredList}
      >
        {' '}
        <div>test</div>{' '}
      </Filter>
    );
    fireEvent.click(getByText('Filtri'));
    fireEvent.click(getByText('Mostra tutti gli annunci per questo vino'));
    expect(setFilteredList).toBeCalledTimes(2);
  });
});
