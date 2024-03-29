import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import * as React from 'react';
import { myInfo } from '../../cache';
import { MessageDetailsFragment } from '../../generated/graphql';

export const MessageChat: React.FC<{
  message: MessageDetailsFragment | null;
}> = ({ message }) => {
  if (!message) return null;
  const me = myInfo();
  const isMyMessage = message.sentBy._id === me?._id;
  const borderTopLeft = isMyMessage ? 12 : 0;
  const borderTopRight = isMyMessage ? 0 : 12;
  return (
    <Box
      data-testid='message-box'
      display='flex'
      flexDirection={isMyMessage ? 'row-reverse' : 'row'}
      p={1}
      m={1}
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
