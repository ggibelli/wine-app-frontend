import { useApolloClient } from '@apollo/client';
import {
  Alert,
  AlertIcon,
  AlertDescription,
  CloseButton,
} from '@chakra-ui/react';
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
    <Alert status={data?.notification?.type}>
      <AlertIcon />
      <AlertDescription>{data?.notification?.message}</AlertDescription>
      <CloseButton
        data-testid='close-notification-test'
        position='absolute'
        right='8px'
        top='8px'
        onClick={onClose}
      />
    </Alert>
  );
};
