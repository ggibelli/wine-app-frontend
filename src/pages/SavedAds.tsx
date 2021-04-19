import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import { BackButton } from '../components/BackButton';
import { CardWine } from '../components/Cards/CardWine';
import { Loading } from '../components/Loading';
import { useFavoriteQuery } from '../generated/graphql';
import { AdsWineResult } from '../types';

const SavedAds: React.FC<RouteComponentProps> = () => {
  const { data, loading, error } = useFavoriteQuery();
  if (loading) return <Loading />;
  if (error || !data?.me?.savedAds) return <div>error</div>;
  if (data?.me?.savedAds.length === 0)
    return <div>Non hai ancora salvato annunci</div>;
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <BackButton />
      <br />
      <Typography color='primary' component='h3' variant='h5'>
        Gli annunci che hai salvato
      </Typography>
      <br />
      {data?.me?.savedAds.map((ad) => (
        <CardWine key={ad._id} ad={ad as AdsWineResult} />
      ))}
    </Container>
  );
};

export default SavedAds;
