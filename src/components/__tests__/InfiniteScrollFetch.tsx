/* eslint-disable @typescript-eslint/no-unsafe-return */
import { InfiniteScroll } from '../InfiniteScrollFetch';
import { cleanup, renderApolloNoRouter } from '../../test-utils/test-utils';
import * as React from 'react';
import { adFactory } from '../../test-utils/test-factory';
import { useLocation } from '@reach/router';
import * as hooks from '../../utils/useIntersectionHook';

// jest.mock('../../utils/useIntersectionHook', () => ({
//   __esModule: true, // this property makes it work
//   ...jest.requireActual<any>('../../utils/useIntersectionHook'),
//   useIntersect: jest.fn(),
// }));

jest.mock('@reach/router', () => ({
  __esModule: true, // this property makes it work
  ...jest.requireActual<any>('@reach/router'),
  useLocation: jest.fn(),
}));

const adsBunch = adFactory.buildList(50);

const Children: React.FC = () => {
  return (
    <>
      {adsBunch.map((ad) => (
        <div key={ad._id}>
          <h5>{ad.wineName}</h5>
          <p>{ad.content}</p>
        </div>
      ))}
    </>
  );
};

describe('InfiniteScroll component with intersection', () => {
  afterEach(cleanup);

  it('renders the InfiniteScroll component and fires on intersection', () => {
    const fetchMore = jest.fn();
    const setState = jest.fn();

    //@ts-expect-error mock
    jest.spyOn(hooks, 'useIntersect').mockImplementation(() => [
      jest.fn(),
      {
        isIntersecting: true,
        intersectionRatio: 0.6,
        target: 'element',
      },
    ]);

    //@ts-expect-error mock
    useLocation.mockImplementation(() => ({ pathname: '/lol' }));
    renderApolloNoRouter(
      <InfiniteScroll
        fetchMore={fetchMore}
        isVisible={true}
        isLoading={false}
        setIsLoading={setState}
      >
        <Children />
      </InfiniteScroll>
    );

    expect(setState).toHaveBeenCalledTimes(1);
  });
});

describe('InfiniteScroll component with intersection', () => {
  afterEach(cleanup);

  it('renders the InfiniteScroll component and does not fires on intersection < 0.5', () => {
    const fetchMore = jest.fn();
    const setState = jest.fn();

    //@ts-expect-error mock
    jest.spyOn(hooks, 'useIntersect').mockImplementation(() => [
      jest.fn(),
      {
        isIntersecting: true,
        intersectionRatio: 0.4,
        target: 'element',
      },
    ]);

    useLocation.mockImplementation(() => ({ pathname: '/lol' }));

    renderApolloNoRouter(
      <InfiniteScroll
        fetchMore={fetchMore}
        isVisible={true}
        isLoading={false}
        setIsLoading={setState}
      >
        <Children />
      </InfiniteScroll>
    );
    expect(fetchMore).toHaveBeenCalledTimes(0);
    expect(setState).toHaveBeenCalledTimes(0);
  });
});
