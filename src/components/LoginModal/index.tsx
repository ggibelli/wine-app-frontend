import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import { Link } from '@reach/router';
import * as React from 'react';
import { LoginData, LoginForm } from './LoginForm';

export const LoginModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: LoginData) => void;
}> = ({ isOpen, onClose, onSubmit }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <LoginForm onSubmit={onSubmit} />
        </ModalBody>
        <ModalFooter>
          <Link to='/signup'>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Sign Up
            </Button>
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
