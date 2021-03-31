/* eslint-disable @typescript-eslint/restrict-template-expressions */
import * as React from 'react';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Badge from '@material-ui/core/Badge';
import { Link as RouterLink } from '@reach/router';
import { myInfo } from '../cache';
import { MessagesQuery } from '../generated/graphql';

export const MessageListEl: React.FC<{
  id: string;
  messages: MessagesQuery['messages'];
}> = ({ messages, id }) => {
  const me = myInfo();
  if (!messages) return null;
  const messagesForMe = messages.filter(
    (message) => message.sentTo._id === me?._id
  );
  const messagesFromMe = messages.filter(
    (message) => message.sentBy._id === me?._id
  );
  const unreadMessages = messagesForMe?.filter((message) => !message.isViewed)
    .length;

  const recipient = messagesForMe.length
    ? messagesForMe[0].sentBy.firstName
    : messagesFromMe[0].sentTo.firstName;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const ad = messagesForMe.length
    ? //@ts-expect-error I know is a adWine
      (messagesForMe[0].negotiation.ad.wineName as string)
    : //@ts-expect-error I know is a adWine
      (messagesFromMe[0].negotiation.ad.wineName as string);

  return (
    <>
      <ListItem
        button
        // eslint-disable-next-line react/display-name
        component={React.forwardRef((itemProps, ref) => (
          //ts ignore because followed the mui docs

          <RouterLink
            to={`/messaggi/${id}`}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            ref={ref}
            {...itemProps}
          />
        ))}
      >
        <ListItemIcon>
          <Badge badgeContent={unreadMessages} color='primary'>
            <MailOutlineIcon />
          </Badge>
        </ListItemIcon>
        <ListItemText
          primary={
            recipient === 'Amministratore'
              ? 'Amministratore'
              : `Cantina ${recipient} - ${ad}`
          }
        />
      </ListItem>
      <Divider />
    </>
  );
};
