import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { useMessagesQuery, useGetMessageLazyQuery } from '../generated/graphql';
import { notification } from '../cache';
import { RouteComponentProps } from '@reach/router';
import { BackButton } from '../components/BackButton';
import { Loading } from '../components/Loading';
import { NotificationModal } from '../components/NotificationModal/NotificationModal';
import { SwipableTabsNotification } from '../components/SwipableTabsNotification';

const Messages: React.FC<RouteComponentProps> = () => {
  const { data, loading, error } = useMessagesQuery({
    fetchPolicy: 'network-only',
    onError: (error) => {
      notification({
        type: 'error',
        message: error.message,
      });
    },
  });
  const [lazyMessage, result] = useGetMessageLazyQuery({
    onError: (error) => {
      notification({
        type: 'error',
        message: error.message,
      });
    },
  });
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickNotification = (id: string) => {
    lazyMessage({ variables: { id: id } });
    setOpen(true);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) return <div>error</div>;

  return (
    <Container component='main' maxWidth='sm'>
      <CssBaseline />
      <BackButton />
      <SwipableTabsNotification
        messages={data?.messages}
        handleClickNotification={handleClickNotification}
      />
      {result.loading ? (
        <Loading />
      ) : (
        <NotificationModal
          open={open}
          handleClose={handleClose}
          content={result.data?.message?.content}
          loading={result.loading}
        />
      )}
    </Container>
  );
};

export default Messages;
