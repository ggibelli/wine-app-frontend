import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { RouteComponentProps } from '@reach/router';
import {
  QueryOrderBy,
  useReviewsQuery,
  ReviewsQuery,
  ReviewDetailsFragment,
} from '../generated/graphql';
import { BackButton } from '../components/BackButton';
import { Order } from '../components/FilterAds/Order';
import { InfiniteScroll } from '../containers/InfiniteScrollFetch';
import { DeepExtractType } from 'ts-deep-extract-types';
import { CardReview } from '../components/Cards/CardReview';
import { Loading } from '../components/Loading';

const Reviews: React.FC<RouteComponentProps> = () => {
  const [reviews, setReviews] = React.useState<
    DeepExtractType<ReviewsQuery, ['reviews']>['reviews']
  >([]);
  const [order, setOrder] = React.useState<QueryOrderBy>(
    QueryOrderBy.CreatedAtDesc
  );
  const [isLoadFetchMore, setIsLoadFetchMore] = React.useState<boolean>(false);
  const [isLoadOrder, setIsLoadOrder] = React.useState<boolean>(false);

  const { data, error, loading, fetchMore } = useReviewsQuery({
    variables: {
      offset: 0,
      limit: 4,
      orderBy: QueryOrderBy.CreatedAtDesc,
    },
    onError: (error) => console.log(error),
    onCompleted: ({ reviews }) => setReviews(reviews?.reviews),
  });

  React.useEffect(() => {
    if (reviews?.length && fetchMore) {
      setIsLoadOrder(true);
      fetchMore({
        variables: { orderBy: order, limit: reviews.length },
      })
        .then(({ data }) => {
          setReviews(data.reviews?.reviews);
          setIsLoadOrder(false);
        })
        .catch((e) => console.log(e));
    }
  }, [order]);
  if (reviews?.length === 0) {
    return <div>Non hai ancora recensioni</div>;
  }
  if (error) return <div>error</div>;
  if (loading) {
    return <Loading />;
  }
  if (reviews?.length) {
    const handleFetchMore = async () => {
      if (fetchMore) {
        try {
          setIsLoadFetchMore(true);
          const { data } = await fetchMore({
            variables: {
              offset: reviews.length,
              orderBy: order,
            },
          });
          setReviews([...reviews, ...(data.reviews?.reviews as [])]);
          setIsLoadFetchMore(false);
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
          Le tue recensioni
        </Typography>
        <br />
        <Order setOrder={setOrder} order={order} />
        {isLoadOrder ? (
          <Loading />
        ) : (
          <InfiniteScroll
            fetchMore={handleFetchMore}
            isVisible={reviews.length !== data?.reviews?.pageCount}
            isLoading={isLoadFetchMore}
          >
            {' '}
            {reviews.map((review) => (
              <CardReview
                key={review && review._id}
                review={review as ReviewDetailsFragment}
              />
            ))}
          </InfiniteScroll>
        )}
      </Container>
    );
  }
  return <div>grave errore</div>;
};

export default Reviews;
