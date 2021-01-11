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
  console.log('yoyo');
  const { data, loading, error } = useNotificationQuery();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (data && !loading) {
      setIsVisible(true);
    }
  }, [data, loading]);

  const onClose = () => {
    notification(undefined);
    setIsVisible(false);
  };
  console.log(isVisible);
  if (!isVisible || error) {
    return null;
  }
  return (
    <Alert status={data?.notification?.type}>
      <AlertIcon />
      <AlertDescription>{data?.notification?.message}</AlertDescription>
      <CloseButton
        position='absolute'
        right='8px'
        top='8px'
        onClick={onClose}
      />
    </Alert>
  );
};
