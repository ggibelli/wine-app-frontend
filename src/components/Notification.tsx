import { useApolloClient } from '@apollo/client';
import Alert from '@material-ui/lab/Alert';

import * as React from 'react';
import { notification } from '../cache';
import { useNotificationQuery } from '../generated/graphql';

export const Notification: React.FC = () => {
  const client = useApolloClient();
  const onClose = () => {
    notification(undefined);
    setIsVisible(false);
    client.cache.evict({ fieldName: 'notification' });
    client.cache.gc();
  };
  const { data, loading, error } = useNotificationQuery();
  const [isVisible, setIsVisible] = React.useState(false);
  const timeoutId = React.useRef<number | undefined>(undefined);
  React.useEffect(() => {
    if (data && !loading) {
      setIsVisible(true);
    }
    clearTimeout(timeoutId.current);
  }, [data, loading]);

  React.useEffect(() => {
    if (isVisible) {
      timeoutId.current = window.setTimeout(() => {
        onClose();
      }, 10000);
    }
  }, [isVisible, data?.notification?.message]);

  if (!isVisible || error) {
    return null;
  }
  return (
    <Alert severity={data?.notification?.type} onClose={onClose}>
      {data?.notification?.message}
    </Alert>
  );
};
