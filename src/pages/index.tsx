import * as React from 'react';
import { Router } from '@reach/router';
import { Header } from '../components/Navigation';
import CssBaseline from '@material-ui/core/CssBaseline';
import { SignUp } from './Signup';
// import { Profile } from './Profile';
import { Home } from './Home';
import { Buy } from './BuySell';
import { Ads } from './Ads';
import { Ad } from './Ad';
import { MyAds } from './MyAds';
import { Negotiations } from './Negotiations';
import { Negotiation } from './Negotiation';
import { Messages } from './Messages';
import { Message } from './Message';
import { useMyInfoQuery } from '../generated/graphql';
import Skeleton from '@material-ui/lab/Skeleton';
import { isLoggedInVar } from '../cache';
import { SavedAds } from './SavedAds';

export const Pages: React.FC = () => {
  const { data, loading } = useMyInfoQuery();
  const isLogged = isLoggedInVar();
  const Routes = () => {
    if ((!loading && data?.myInfo?._id) || !isLogged) {
      return (
        <Router primary={false} component={React.Fragment}>
          <Home path='/' />
          {['/buy', '/sell'].map((path) => (
            <Buy key={path} path={path} />
          ))}
          <Ads path='/annunci' />
          <Ad path='/annunci/:id' />
          <Messages path='/messaggi' />
          <Message path='/messaggi/:id' />
          <MyAds path='/creati' />

          <Negotiations path='/trattative' />
          <Negotiation path='/trattative/:id' />

          {/* <Profile path='/profilo' /> */}
          <SavedAds path='/salvati' />
          <SignUp path='/signup' />
        </Router>
      );
    }
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Skeleton variant='text' width={'100vh'} height={30} />
        <Skeleton variant='circle' width={50} height={50} />
        <Skeleton variant='rect' width={'70vh'} height={'70vh'} />
      </div>
    );
  };
  return (
    <>
      <CssBaseline />
      <Header />
      <main>
        <Routes />
      </main>
    </>
  );
};
