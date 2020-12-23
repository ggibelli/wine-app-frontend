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
import { DrawerLeft } from '../components/Drawer';
import { LoginModal } from '../LoginModal';

export const Header: React.FC = () => {
  const drawer = useDisclosure();
  const modal = useDisclosure();
  const lol = false;
  const drawerIfLogged = () => (
    <>
      <Box p='2'>
        <IconButton
          aria-label='Search database'
          icon={<HamburgerIcon />}
          onClick={drawer.onOpen}
        />
      </Box>
      <Spacer />
    </>
  );
  //const btnRef = React.useRef<HTMLButtonElement>(null);
  return (
    <>
      <Flex>
        {lol ? drawerIfLogged() : null}
        <Box>
          <Text>LOGO</Text>
        </Box>
        <Spacer />
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
      </Flex>
      <DrawerLeft isOpen={drawer.isOpen} onClose={drawer.onClose} />
    </>
  );
};
