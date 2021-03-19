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

export const Pages: React.FC = () => (
  <>
    <CssBaseline />
    <Header />
    <main>
      <Router primary={false} component={React.Fragment}>
        <Home path='/' />
        <Buy path='/buy' />
        <Buy path='/sell' />
        <Ads path='/annunci' />
        <Ad path='/annunci/:id' />
        <MyAds path='/creati' />
        {/* <Profile path='/profilo' /> */}

        <SignUp path='/signup' />
      </Router>
    </main>
  </>
);
