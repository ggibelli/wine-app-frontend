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
  useMessagesLazyQuery,
} from '../generated/graphql';
import { notification, isLoggedInVar, myInfo } from '../cache';
import { Messages } from './Messages';
import { Message } from './Message';

export const Pages: React.FC = () => {
  const loggedUser = useIsUserLoggedInQuery();
  const [messageLazyQuery, messageResult] = useMessagesLazyQuery({
    fetchPolicy: 'network-only',
    // pollInterval: 1000,
    onError: (error) => {
      notification({
        type: 'error',
        message: error.message,
      });
    },
  });
  const [lazyQuery, result] = useMeLazyQuery({
    onCompleted: (data) => {
      if (data.me) {
        myInfo({
          _id: data.me?._id,
          firstName: data.me?.firstName,
          lastName: data.me?.lastName,
        });
      }
    },
    onError: (error) => {
      notification({
        type: 'error',
        message: error.message,
      });
    },
  });
  React.useEffect(() => {
    if (loggedUser.data?.isLoggedIn) {
      lazyQuery();
      messageLazyQuery();
    }
  }, [loggedUser.data?.isLoggedIn]);

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
    onCompleted: () =>
      notification({
        type: 'success',
        message: 'Trattativa chiusa con successo',
      }),
    onError: (error) => notification({ type: 'error', message: error.message }),
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
      <Header
        meQueryResult={result}
        onSubmitLogin={onSubmitLogin}
        messages={messageResult.data?.messages}
      />
      <main>
        <Router primary={false} component={React.Fragment}>
          <Home path='/' />
          {['/buy', '/sell'].map((path) => (
            <Buy key={path} path={path} meData={result.data?.me} />
          ))}
          <Ads path='/annunci' />
          <Ad
            path='/annunci/:id'
            meData={result.data?.me}
            handleCloseNeg={handleCloseNegotiation}
          />
          <Messages path='/messaggi' messagesResult={messageResult} />
          <Message
            path='/messaggi/:id'
            handleCloseNeg={handleCloseNegotiation}
          />
          <MyAds path='/creati' />

          <Negotiations
            path='/trattative'
            handleCloseNeg={handleCloseNegotiation}
            meData={result.data?.me}
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
