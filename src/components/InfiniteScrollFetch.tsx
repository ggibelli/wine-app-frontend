import { useLocation } from '@reach/router';
import * as React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useIntersect } from '../utils/useIntersectionHook';
import { makeStyles, createStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

interface InfiniteScrollProps {
  children: React.ReactNode;
  fetchMore: () => void;
  isVisible: boolean;
  isLoading: boolean;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  })
);

export const InfiniteScroll: React.FC<InfiniteScrollProps> = (props) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const message = pathname.split('/')[1] === 'messaggi';
  const [ref, entry] = useIntersect({ threshold: 0 });
  const [isOk, setIsOk] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (entry && entry?.intersectionRatio >= 0.5 && isOk) {
      void props.fetchMore();
      props.setIsLoading && props.setIsLoading(true);
      setIsOk(false);
    } else if (entry?.intersectionRatio === 0 && !isOk) {
      setIsOk(true);
      props.setIsLoading && props.setIsLoading(false);
    }
  }, [entry?.intersectionRatio]);
  if (message) {
    return (
      <>
        {props.isVisible ? (
          <div className={classes.root} id='page-bottom-boundary' ref={ref}>
            {' '}
            <ExpandMoreIcon />
          </div>
        ) : null}
        {props.children}
      </>
    );
  }

  return (
    <div className={classes.root}>
      {props.children}
      {props.isVisible ? (
        props.isLoading ? (
          <CircularProgress />
        ) : (
          <div id='page-bottom-boundary' ref={ref} style={{ height: 30 }}>
            {' '}
            <ExpandMoreIcon />
          </div>
        )
      ) : null}
    </div>
  );
};
