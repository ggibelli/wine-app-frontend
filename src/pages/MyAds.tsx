import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { RouteComponentProps } from '@reach/router';
import { useMeLazyQuery } from '../generated/graphql';
import { Ad, CardWine } from '../components/CardWine';
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
export const MyAds: React.FC<RouteComponentProps> = () => {
  const classes = useStyles();

  const [limit, setLimit] = React.useState<number>(10);
  const [isEndAds, setIsEndAds] = React.useState<boolean>(false);

  const [lazyAdsWine, result] = useMeLazyQuery({
    onError: (error) => console.log(error),
    notifyOnNetworkStatusChange: true,
    onCompleted: (response) => {
      if (response.me?.ads?.ads) {
        setAds((response.me?.ads.ads as unknown) as Ad[]);
      }
      if (
        response.me?.ads?.pageCount &&
        response.me?.ads?.ads?.length === response.me?.ads.pageCount
      ) {
        if (!open) setOpen(true);

        setIsEndAds(true);
      }
    },
  });
  const [ads, setAds] = React.useState<Ad[]>([]);

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
            variables: { limit: 10, offset: ads.length },
          })

          .then((fetchMoreResult) => {
            if (fetchMoreResult.data.me?.ads?.ads?.length) {
              setLimit(fetchMoreResult.data.me?.ads?.ads?.length + limit);
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
  }, [ads, bottomBoundaryRef.current]);

  React.useEffect(() => {
    void lazyAdsWine({
      variables: {
        offset: 0,
        limit,
        // orderBy: order,
      },
    });
  }, [limit]);

  if (ads.length && result.data?.me?.ads?.ads?.length !== 0) {
    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <BackButton />

        <br />
        <Typography color='primary' component='h3' variant='h5'>
          I nostri risultati
        </Typography>

        <br />
        <div className={classes.root}>
          {ads.map((ad) => (
            <CardWine key={ad._id} ad={ad} />
          ))}
          {isEndAds && !result.loading ? null : (
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
