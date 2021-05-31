import * as React from 'react';
import { RouteComponentProps, Router } from '@reach/router';
import { Header } from '../components/Navigation';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Loading } from '../components/Loading';
// import Buy from './BuySell';
function createLazyRoute<T extends RouteComponentProps>(
  RouteComponent: React.ComponentType<T>
) {
  // eslint-disable-next-line react/display-name
  return function (props: T) {
    return (
      <React.Suspense fallback={<Loading />}>
        <RouteComponent {...props} />
      </React.Suspense>
    );
  };
}

const SignUp = createLazyRoute(React.lazy(() => import('./Signup')));
const Home = createLazyRoute(React.lazy(() => import('./Home')));
const Buy = createLazyRoute(React.lazy(() => import('./BuySell')));
const Ads = createLazyRoute(React.lazy(() => import('./Ads')));
const Ad = createLazyRoute(React.lazy(() => import('./Ad')));
const MyAds = createLazyRoute(React.lazy(() => import('./MyAds')));
const Negotiations = createLazyRoute(
  React.lazy(() => import('./Negotiations'))
);
const Negotiation = createLazyRoute(React.lazy(() => import('./Negotiation')));
const Messages = createLazyRoute(React.lazy(() => import('./Messages')));
const Message = createLazyRoute(React.lazy(() => import('./Message')));
const SavedAds = createLazyRoute(React.lazy(() => import('./SavedAds')));
const Reviews = createLazyRoute(React.lazy(() => import('./Reviews')));

export const Pages: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <main>
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
          <Reviews path='/recensioni' />
          {/* <Profile path='/profilo' /> */}
          <SavedAds path='/salvati' />
          <SignUp path='/signup' />
        </Router>
      </main>
    </>
  );
};
