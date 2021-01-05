import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
} from '@chakra-ui/react';
import { ApolloError } from '@apollo/client';

import * as React from 'react';

interface ProfileData {
  isLoading: boolean;
  error: ApolloError | undefined;
  data: {
    numAds: number | undefined;
    numNegs: number | undefined;
    name: string | undefined;
  };
}
export const DrawerLeft: React.FC<{
  data: ProfileData;
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose, data }) => {
  console.log(data.error, data.isLoading, data.data);
  return (
    <>
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>

            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button color='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
