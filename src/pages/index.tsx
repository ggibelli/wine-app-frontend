import * as React from 'react';
import { Router } from '@reach/router';
import { Header } from '../components/Navigation';
import { PageContainer } from '../components/PageContainer';

import { SignUp } from './Signup';
// import { Ads } from './Ads';
// import { Ad } from './Ad';
// import { Profile } from './Profile';
// import { Home } from './Home';
// import { Buy } from './Buy';

export const Pages: React.FC = () => (
  <>
    <Header />
    <PageContainer>
      <Router primary={false} component={React.Fragment}>
        {/* <Home path='/' />
        <Buy path='/buy' /> */}
        {/* <Sell path='/sell' /> */}
        {/* <Ads path='/annunci' />
        <Ad path='/annunci/:id' />
        <Profile path='/profilo' />*/}
        <SignUp path='/signup' />
      </Router>
    </PageContainer>
  </>
);
