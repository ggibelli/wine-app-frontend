import * as React from 'react';
import { Router } from '@reach/router';
import { Header } from '../components/PageHeader';
import { PageContainer } from '../components/PageContainer';

import { SignUp } from './Signup';
import { Ads } from './Ads';
import { Ad } from './Ad';
import { Profile } from './Profile';

export const Pages: React.FC = () => (
  <>
    <Header />
    <PageContainer>
      <Router primary={false} component={React.Fragment}>
        <Ads path='/annunci' />
        <Ad path='/annunci/:id' />
        <Profile path='/profilo' />
        <SignUp path='/signup' />
      </Router>
    </PageContainer>
  </>
);
