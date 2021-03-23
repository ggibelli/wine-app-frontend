import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { RouteComponentProps } from '@reach/router';
import {
  NegotiationInputUpdate,
  useNegotiationsLazyQuery,
} from '../generated/graphql';
import {
  CardNegotiation,
  NegotiationWine,
} from '../components/CardNegotiation';
import { BackButton } from '../components/BackButton';

import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  })
);
export const Negotiations: React.FC<
  RouteComponentProps & {
    handleCloseNeg: (negotiation: NegotiationInputUpdate) => Promise<void>;
  }
> = ({ handleCloseNeg }) => {
  const classes = useStyles();

  const [limit, setLimit] = React.useState<number>(10);
  const [isEndNegotiations, setIsEndNegotiations] = React.useState<boolean>(
    false
  );

  const [lazyNegotiations, result] = useNegotiationsLazyQuery({
    onError: (error) => console.log(error),
    notifyOnNetworkStatusChange: true,
    onCompleted: (response) => {
      if (response.negotiations?.negotiations) {
        setNegotiations(
          (response.negotiations?.negotiations as unknown) as NegotiationWine[]
        );
      }
      if (
        response.negotiations?.pageCount &&
        response.negotiations?.negotiations?.length ===
          response.negotiations?.pageCount
      ) {
        if (!open) setOpen(true);

        setIsEndNegotiations(true);
      }
    },
  });
  const [negotiations, setNegotiations] = React.useState<NegotiationWine[]>([]);

  const [open, setOpen] = React.useState(false);

  // React.useEffect(() => {
  //   if (result.fetchMore) {
  //     void result
  //       .fetchMore({
  //         variables: {
  //           orderBy: order,
  //           offset: 0,
  //         },
  //       })
  //       .then((result) => setAds((result.data.me?.ads?.ads as unknown) as Ad[]))
  //       .catch((e) => console.log(e));
  //   }
  // }, [order]);

  const bottomBoundaryRef = React.useRef<null | HTMLDivElement>(null);
  const observer = new IntersectionObserver(handleIntersection);

  function handleIntersection(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0 && result.fetchMore) {
        result
          .fetchMore({
            variables: { limit: 10, offset: negotiations.length },
          })

          .then((fetchMoreResult) => {
            if (fetchMoreResult.data.negotiations?.negotiations?.length) {
              setLimit(
                fetchMoreResult.data.negotiations?.negotiations?.length + limit
              );
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
  }, [negotiations, bottomBoundaryRef.current]);

  React.useEffect(() => {
    void lazyNegotiations({
      variables: {
        offset: 0,
        limit,
        // orderBy: order,
      },
    });
  }, [limit]);
  if (
    negotiations.length &&
    result.data?.negotiations?.negotiations?.length !== 0
  ) {
    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <BackButton />

        <br />
        <Typography color='primary' component='h3' variant='h5'>
          Gli annunci che hai creato
        </Typography>

        <br />
        <div className={classes.root}>
          {negotiations.map((negotiation) => (
            <CardNegotiation
              key={negotiation._id}
              negotiation={negotiation}
              handleCloseNeg={handleCloseNeg}
            />
          ))}
          {isEndNegotiations && !result.loading ? null : (
            <div
              id='page-bottom-boundary'
              style={{ border: '1px solid red' }}
              ref={bottomBoundaryRef}
            ></div>
          )}

          {result.loading ? <CircularProgress /> : null}
        </div>
      </Container>
    );
  }
  return <Skeleton />;
};
