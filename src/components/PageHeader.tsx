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
import { useIsUserLoggedInQuery, useMeLazyQuery } from '../generated/graphql';

export const Header: React.FC = () => {
  const { data } = useIsUserLoggedInQuery();
  const [lazyQuery, result] = useMeLazyQuery();
  React.useEffect(() => {
    if (data?.isLoggedIn) {
      lazyQuery();
    }
  }, [data?.isLoggedIn]);
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
  const signinButton = () => (
    <>
      <Box>
        <Button colorScheme='teal' mr='4'>
          Sign Up
        </Button>
        <Button colorScheme='teal' onClick={modal.onOpen}>
          Log in
        </Button>
        <LoginModal isOpen={modal.isOpen} onClose={modal.onClose} />
        <ColorModeSwitcher />
      </Box>
    </>
  );
  //const btnRef = React.useRef<HTMLButtonElement>(null);
  return (
    <>
      <Flex>
        {data?.isLoggedIn ? sideBarButton() : null}
        <Box>
          <Text>LOGO</Text>
        </Box>
        <Spacer />
        {!data?.isLoggedIn ? signinButton() : <LogoutButton />}
      </Flex>
    </>
  );
};
