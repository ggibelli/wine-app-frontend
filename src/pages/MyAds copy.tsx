import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import { Ad, CardWine } from '../components/CardWine';
import { AdWine, useMeLazyQuery } from '../generated/graphql';

export const MyAds: React.FC<RouteComponentProps> = () => {
  const [ads, setAds] = React.useState<Array<AdWine>>([]);
  const [lazyQuery, result] = useMeLazyQuery({
    onCompleted: (data) => {
      setAds(data.me?.ads?.ads as AdWine[]);
    },
  });

  // const { data, loading, error } = useMeQuery();
  React.useEffect(() => {
    console.log(result.data?.me?.ads);
    if (result.data?.me?.ads?.ads && ads.length === 0) {
      setAds(result.data.me.ads.ads as AdWine[]);
    }
    lazyQuery();
  }, []);
  const fetchMoreResult = () => {
    if (result.fetchMore) {
      result
        .fetchMore({
          variables: {
            offset: ads.length,
          },
        })
        .then((data) => {
          setAds([...ads, ...(data.data.me?.ads?.ads as AdWine[])]);
        })
        .catch((e) => console.log(e));
    }
  };
  // console.log(data, loading, error);
  if (result.loading) {
    return <div>loading</div>;
  }
  if (ads.length)
    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        {ads.map((ad) => (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          <CardWine key={ad._id} ad={(ad as unknown) as Ad} />
        ))}
        <div onClick={fetchMoreResult}>carica altri</div>
      </Container>
    );
  return null;
};
