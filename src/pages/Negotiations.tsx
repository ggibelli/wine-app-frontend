import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { RouteComponentProps } from '@reach/router';
import {
  NegotiationInputUpdate,
  QueryOrderBy,
  useNegotiationsOpenLazyQuery,
} from '../generated/graphql';
import {
  CardNegotiation,
  NegotiationWine,
} from '../components/CardNegotiation';
import { BackButton } from '../components/BackButton';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Order } from '../components/FilterList/Order';
import { InfiniteScrollFetch } from '../components/InfiniteScrollFetch';

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

  const [lazyNegotiations, result] = useNegotiationsOpenLazyQuery({
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
  const [order, setOrder] = React.useState<QueryOrderBy>(
    QueryOrderBy.CreatedAtDesc
  );

  React.useEffect(() => {
    void lazyNegotiations({
      variables: {
        offset: 0,
        limit,
        orderBy: order,
      },
    });
  }, [limit, order]);
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
          Le tue trattative attive
        </Typography>
        <br />
        <Order
          setList={setNegotiations}
          setOrder={setOrder}
          queryResult={result}
          order={order}
        />
        <div className={classes.root}>
          {negotiations.map((negotiation) => (
            <CardNegotiation
              key={negotiation._id}
              negotiation={negotiation}
              handleCloseNeg={handleCloseNeg}
            />
          ))}
          {isEndNegotiations && !result.loading ? null : (
            <InfiniteScrollFetch
              queryResult={result}
              list={negotiations}
              limit={limit}
              setLimit={setLimit}
            />
          )}

          {result.loading ? <CircularProgress /> : null}
        </div>
      </Container>
    );
  }
  if (result.data?.negotiations?.negotiations?.length === 0) {
    return <div>Non ci sono negoziazioni attive</div>;
  }
  return <Skeleton />;
};
