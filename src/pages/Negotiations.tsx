import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { RouteComponentProps } from '@reach/router';
import {
  MeQuery,
  NegotiationDetailsFragment,
  NegotiationInputUpdate,
  NegotiationsOpenQuery,
  QueryOrderBy,
  useNegotiationsOpenLazyQuery,
} from '../generated/graphql';
import { CardNegotiation } from '../components/CardNegotiation';
import { BackButton } from '../components/BackButton';
import { Order } from '../components/FilterAds/Order';
import { InfiniteScroll } from '../components/InfiniteScrollFetch';
import { DeepExtractType } from 'ts-deep-extract-types';

export const Negotiations: React.FC<
  RouteComponentProps & {
    meData: MeQuery['me'] | undefined;
    handleCloseNeg: (negotiation: NegotiationInputUpdate) => Promise<void>;
  }
> = ({ handleCloseNeg, meData }) => {
  const [lazyNegotiations, result] = useNegotiationsOpenLazyQuery({
    onError: (error) => console.log(error),
  });
  const [negotiations, setNegotiations] = React.useState<
    DeepExtractType<NegotiationsOpenQuery, ['negotiations']>['negotiations']
  >([]);
  const [order, setOrder] = React.useState<QueryOrderBy>(
    QueryOrderBy.CreatedAtDesc
  );
  React.useEffect(() => {
    void lazyNegotiations({
      variables: {
        offset: 0,
        limit: 4,
        orderBy: order,
      },
    });
  }, []);
  const isVisible =
    negotiations?.length !==
    meData?.negotiations?.filter((n) => !n?.isConcluded).length;
  React.useEffect(() => {
    if (result.data?.negotiations) {
      setNegotiations(result.data.negotiations?.negotiations);
    }
  }, [result.data]);
  React.useEffect(() => {
    if (result.fetchMore) {
      result
        .fetchMore({
          variables: { orderBy: order, limit: negotiations?.length },
        })
        .catch((e) => console.log(e));
    }
  }, [order]);
  if (
    negotiations?.length &&
    result.data?.negotiations?.negotiations?.length !== 0
  ) {
    const handleFetchMore = async () => {
      if (result.fetchMore) {
        try {
          await result.fetchMore({
            variables: {
              offset: result.data?.negotiations?.negotiations?.length,
              orderBy: order,
            },
          });
        } catch (e) {
          console.log(e);
        }
      }
    };

    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <BackButton />

        <br />
        <Typography color='primary' component='h3' variant='h5'>
          Le tue trattative attive
        </Typography>
        <br />
        <Order setOrder={setOrder} order={order} />
        <InfiniteScroll
          fetchMore={handleFetchMore}
          isVisible={isVisible}
          isLoading={result.loading}
        >
          {negotiations.map((negotiation) => (
            <CardNegotiation
              key={negotiation?._id}
              negotiation={negotiation as NegotiationDetailsFragment}
              handleCloseNeg={handleCloseNeg}
            />
          ))}
        </InfiniteScroll>
      </Container>
    );
  }
  if (result.data?.negotiations?.negotiations?.length === 0) {
    return <div>Non ci sono negoziazioni attive</div>;
  }
  return <Skeleton />;
};
