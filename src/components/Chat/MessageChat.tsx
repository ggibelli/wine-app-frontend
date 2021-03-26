import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import * as React from 'react';
import { myInfo } from '../../cache';
import { Message } from '../../generated/graphql';

export const MessageChat: React.FC<{ message: Message }> = ({ message }) => {
  const me = myInfo();
  const isMyMessage = message.sentBy._id === me?._id;
  const borderTopLeft = isMyMessage ? 12 : 0;
  const borderTopRight = isMyMessage ? 0 : 12;
  return (
    <Box
      display='flex'
      flexDirection={isMyMessage ? 'row-reverse' : 'row'}
      p={1}
      m={1}
      bgcolor='background.paper'
    >
      <Box
        p={1}
        color='white'
        bgcolor={isMyMessage ? '#6d1331' : '#707070'}
        style={{
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
          borderTopRightRadius: borderTopRight,
          borderTopLeftRadius: borderTopLeft,
        }}
      >
        <Typography variant='body1'>{message.content}</Typography>
        <Grid container justify='flex-end'>
          <Typography align='right' variant='caption'>
            {message.dateSent}
          </Typography>
        </Grid>
      </Box>
    </Box>
  );
};
