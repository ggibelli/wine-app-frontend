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

import { SavedAds } from './SavedAds';
import { myInfo } from '../cache';

export const Pages: React.FC = () => {
  const id = localStorage.getItem('wineapp-user-id');
  const isLogged = id ? true : false;
  const RouterLogged = () => {
    if (isLogged) {
      myInfo({ _id: id as string });
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
    } else {
      return <div>loggati</div>;
    }
  };

  return (
    <>
      <CssBaseline />
      <Header />
      <main>
        <RouterLogged />
      </main>
    </>
  );
};
