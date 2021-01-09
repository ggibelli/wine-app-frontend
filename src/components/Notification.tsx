import {
  Alert,
  AlertIcon,
  AlertDescription,
  CloseButton,
} from '@chakra-ui/react';
import * as React from 'react';
import { notificationMessage, notificationType } from '../cache';

export const Notification: React.FC = () => {
  if (!notificationType() || !notificationMessage()) {
    return null;
  }
  const onClose = () => {
    notificationMessage(undefined);
    notificationType(undefined);
  };
  return (
    <Alert status={notificationType()}>
      <AlertIcon />
      <AlertDescription>{notificationMessage()}</AlertDescription>
      <CloseButton
        position='absolute'
        right='8px'
        top='8px'
        onClick={onClose}
      />
    </Alert>
  );
};
