/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { RouteComponentProps } from '@reach/router';
import { QueryOrderBy, useMeLazyQuery } from '../generated/graphql';
import { Ad, CardWine } from '../components/CardWine';
import { BackButton } from '../components/BackButton';
import { InfiniteScrollFetch } from '../components/InfiniteScrollFetch';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Order } from '../components/FilterList/Order';

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
  const [ads, setAds] = React.useState<Ad[]>([]);
  const [open, setOpen] = React.useState<boolean>(false);
  const [order, setOrder] = React.useState<QueryOrderBy>(
    QueryOrderBy.CreatedAtDesc
  );
  const [lazyAdsWine, result] = useMeLazyQuery({
    onError: (error) => console.log(error),
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

  React.useEffect(() => {
    void lazyAdsWine({
      variables: {
        offset: 0,
        limit,
        orderBy: order,
      },
    });
  }, [limit, order]);
  if (ads.length && result.data?.me?.ads?.ads?.length !== 0) {
    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <BackButton />

        <br />
        <Typography color='primary' component='h3' variant='h5'>
          Gli annunci che hai creato
        </Typography>
        <br />
        <Order
          setList={setAds}
          setOrder={setOrder}
          queryResult={result}
          order={order}
        />
        <div className={classes.root}>
          {ads.map((ad) => (
            <CardWine key={ad._id} ad={ad} />
          ))}
          {isEndAds && !result.loading ? null : (
            <InfiniteScrollFetch
              queryResult={result}
              list={ads}
              limit={limit}
              setLimit={setLimit}
            />
          )}

          {result.loading ? <CircularProgress /> : null}
        </div>
      </Container>
    );
  }
  return <Skeleton />;
};
