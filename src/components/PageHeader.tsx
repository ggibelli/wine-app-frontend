import * as React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Spacer,
  IconButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { HamburgerIcon } from '@chakra-ui/icons';
import { DrawerLeft } from './Drawer';
import { LoginModal } from './LoginModal';
import { LogoutButton } from './LogoutButton';
import { Notification } from './Notification';
import {
  useLoginMutation,
  useMeLazyQuery,
  //useMeQuery,
  useIsUserLoggedInQuery,
} from '../generated/graphql';
import { isLoggedInVar, notification } from '../cache';

export const Header: React.FC = () => {
  console.log('render header');
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
  React.useEffect(() => {
    if (loggedUser.data?.isLoggedIn) {
      lazyQuery();
    }
  }, [loggedUser.data?.isLoggedIn]);
  //const result = useMeQuery();
  //console.log(diocrin);
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
        //notificationMessage('Welcome back');
        lazyQuery();
      }
      if (login?.errors?.length) {
        notification({
          type: 'error',
          message: 'errore',
        });
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
      <Button colorScheme='teal' onClick={modal.onOpen}>
        Log in
      </Button>
    );
  };
  return (
    <Stack spacing={1}>
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
    </Stack>
  );
};
