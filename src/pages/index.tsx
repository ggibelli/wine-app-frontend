import * as React from 'react';
import { Router } from '@reach/router';
import { Header } from '../components/Navigation';
// import { PageContainer } from '../components/PageContainer';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Container from '@material-ui/core/Container';

import { SignUp } from './Signup';
// import { Ads } from './Ads';
// import { Ad } from './Ad';
// import { Profile } from './Profile';
// import { Home } from './Home';
import { Buy } from './Buy';
import { Results } from './Results';
export const Pages: React.FC = () => (
  <>
    <CssBaseline />
    <Header />
    <main>
      {/* <PageContainer> */}
      <Router primary={false} component={React.Fragment}>
        {/* <Home path='/' />*/}
        <Buy path='/buy' />
        {/* <Sell path='/sell' /> */}
        {/* <Ads path='/annunci' />
        <Ad path='/annunci/:id' />
        <Profile path='/profilo' />*/}
        <Results path='/results' />
        <SignUp path='/signup' />
      </Router>
      {/* </PageContainer> */}
    </main>
  </>
);
