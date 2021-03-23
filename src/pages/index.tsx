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
import {
  NegotiationInputUpdate,
  useIsUserLoggedInQuery,
  useLoginMutation,
  useMeLazyQuery,
  useUpdateNegotiationMutation,
} from '../generated/graphql';
import { notification, isLoggedInVar } from '../cache';

export const Pages: React.FC = () => {
  const loggedUser = useIsUserLoggedInQuery();
  React.useEffect(() => {
    if (loggedUser.data?.isLoggedIn) {
      lazyQuery();
    }
  }, [loggedUser.data?.isLoggedIn]);
  const [lazyQuery, result] = useMeLazyQuery();
  const [loginMutation] = useLoginMutation({
    onError: (error) =>
      notification({
        type: 'error',
        message: error.message,
      }),
    onCompleted: ({ login }) => {
      if (login?.errors?.length === 0) {
        localStorage.setItem(
          'wineapp-user-token',
          login?.response?.token as string
        );
        isLoggedInVar(true);
        notification({
          type: 'success',
          message: 'welcome back',
        });
        lazyQuery();
      }
      if (login?.errors?.length) {
        notification({
          type: 'error',
          message: 'errore',
        });
      }
    },
  });
  const [closeNegotiation] = useUpdateNegotiationMutation({
    onCompleted: (data) => console.log(data),
    onError: (error) => console.log(error),
  });
  const onSubmitLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    await loginMutation({
      variables: {
        email: email,
        password: password,
      },
    });
  };

  const handleCloseNegotiation = async (
    negotiation: NegotiationInputUpdate
  ) => {
    await closeNegotiation({ variables: { negotiation } });
  };
  return (
    <>
      <CssBaseline />
      <Header meQueryResult={result} onSubmitLogin={onSubmitLogin} />
      <main>
        <Router primary={false} component={React.Fragment}>
          <Home path='/' />
          <Buy path='/buy' meData={result.data} />
          <Buy path='/sell' meData={result.data} />
          <Ads path='/annunci' />
          <Ad
            path='/annunci/:id'
            meData={result.data}
            handleCloseNeg={handleCloseNegotiation}
          />
          <MyAds path='/creati' />
          <Negotiations
            path='/trattative'
            handleCloseNeg={handleCloseNegotiation}
          />
          <Negotiation
            path='/trattative/:id'
            handleCloseNeg={handleCloseNegotiation}
          />

          {/* <Profile path='/profilo' /> */}

          <SignUp path='/signup' />
        </Router>
      </main>
    </>
  );
};
