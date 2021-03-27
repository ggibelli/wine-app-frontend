/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { LazyQueryResult } from '@apollo/client';
import { useLocation } from '@reach/router';
import * as React from 'react';
import { Exact } from '../generated/graphql';

interface InfiniteScrollProps {
  queryResult: LazyQueryResult<any, Exact<any>>;
  list: Array<any>;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
}

export const InfiniteScrollFetch: React.FC<InfiniteScrollProps> = (props) => {
  const bottomBoundaryRef = React.useRef<null | HTMLDivElement>(null);
  const observer = new IntersectionObserver(handleIntersection);
  const location = useLocation();
  // const ads = location.pathname === '/buy' || location === 'sell';
  const negotiations = location.pathname === '/trattative';
  const myAds = location.pathname === '/creati';
  function handleIntersection(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0 && props.queryResult.fetchMore) {
        props.queryResult
          .fetchMore({
            variables: { limit: 2, offset: props.list.length },
          })

          .then(({ data }) => {
            if (negotiations) {
              props.setLimit(
                data.negotiations.negotiations.length + props.limit
              );
            } else if (myAds) {
              props.setLimit(data.me.ads.ads.length + props.limit);
            } else {
              props.setLimit(data.ads.ads.length + props.limit);
            }
          })
          .catch((e) => console.log(e));
        observer.unobserve(entry.target);
      }
    });
  }

  React.useEffect(() => {
    if (bottomBoundaryRef.current) {
      observer.observe(bottomBoundaryRef.current);
    }
  }, [props.list, bottomBoundaryRef.current]);
  return (
    <div
      id='page-bottom-boundary'
      style={{ border: '1px solid red' }}
      ref={bottomBoundaryRef}
    ></div>
  );
};
