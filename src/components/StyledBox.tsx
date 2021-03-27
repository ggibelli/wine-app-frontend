import * as React from 'react';
import Box from '@material-ui/core/Box';
import { TypeAd } from '../generated/graphql';

interface BoxProps {
  width: number;
  typeAd: TypeAd;
  children: React.ReactNode;
}

export const StyledBox: React.FC<BoxProps> = (props) => {
  return (
    <Box
      boxShadow={3}
      p={2}
      m={2}
      mt={2}
      px={2}
      pt={2}
      width={props.width}
      color={props.typeAd === TypeAd.Sell ? 'primary.main' : 'white'}
      borderColor={props.typeAd === TypeAd.Sell ? 'white' : 'primary.main'}
      bgcolor={props.typeAd === TypeAd.Sell ? 'white' : 'primary.main'}
      borderRadius={16}
    >
      {props.children}
    </Box>
  );
};
