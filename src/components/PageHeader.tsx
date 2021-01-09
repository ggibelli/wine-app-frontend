import * as React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Spacer,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { HamburgerIcon } from '@chakra-ui/icons';
import { DrawerLeft } from './Drawer';
import { LoginModal } from './LoginModal';
import { LogoutButton } from './LogoutButton';
import { Notification } from './Notification';
import { useLoginMutation, useMeLazyQuery, useIsUserLoggedInQuery } from '../generated/graphql';
import { isLoggedInVar, notificationMessage, notificationType } from '../cache';
export const Header: React.FC = () => {
  const onSubmit = async ({
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
  const loggedUser = useIsUserLoggedInQuery();
  const [lazyQuery, result] = useMeLazyQuery();
  const [loginMutation, { data }] = useLoginMutation({
    onError: (error) => console.log(error, data),
    onCompleted: ({ login }) => {
      if (login?.errors?.length === 0) {
        localStorage.setItem(
          'wineapp-user-token',
          login?.response?.token as string
        );
        isLoggedInVar(true);
        notificationType('success');
        notificationMessage('Welcome back');
        lazyQuery();
        
      }
      if (login?.errors?.length) {
        
        console.log('error');
        notificationType('error');
        notificationMessage(login?.errors[0]?.text);
      }
      modal.onClose();
    },
  });

  const drawerData = {
    isLoading: result.loading,
    error: result.error,
    data: {
      numAds: result.data?.me?.ads?.length,
      numNegs: result.data?.me?.negotiations?.length,
      name: result.data?.me?.firstName,
    },
  };
  const drawer = useDisclosure();
  const modal = useDisclosure();
  const sideBarButton = () => (
    <>
      <DrawerLeft
        isOpen={drawer.isOpen}
        onClose={drawer.onClose}
        data={drawerData}
      />
      <Box p='2'>
        <IconButton
          aria-label='Open sidebar'
          icon={<HamburgerIcon />}
          onClick={drawer.onOpen}
        />
      </Box>
      <Spacer />
    </>
  );
  const SigninButton = () => {
    if (loggedUser.data?.isLoggedIn) {
      return <LogoutButton />;
    }
    return (
      <>
        <Button colorScheme='teal' mr='4'>
          Sign Up
        </Button>
        <Button colorScheme='teal' onClick={modal.onOpen}>
          Log in
        </Button>
        
        
      </>
  );
};
  return (
    <>
      <Flex>
        {loggedUser.data?.isLoggedIn ? sideBarButton() : null}
        <Box>
          <Text>LOGO</Text>
        </Box>
        <Spacer />
        <Box>
          <SigninButton />
          <LoginModal
            isOpen={modal.isOpen}
            onClose={modal.onClose}
            onSubmit={onSubmit}
          />
          <ColorModeSwitcher />
        </Box>
      </Flex>
      <Notification />
    </>
  );
};
