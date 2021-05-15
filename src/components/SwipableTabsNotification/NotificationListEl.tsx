import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/MailOutline';
import Badge from '@material-ui/core/Badge';
import { MessageDetailsFragment } from '../../generated/graphql';

export const NotificationListEl: React.FC<{
  notification: MessageDetailsFragment;
  handleClick: (id: string) => void;
}> = ({ notification, handleClick }) => {
  return (
    <ListItem
      key={notification._id}
      divider
      button
      onClick={() => handleClick(notification._id)}
    >
      <ListItemIcon>
        <Badge badgeContent={notification.isViewed ? 0 : 1} color='primary'>
          <NotificationsNoneOutlinedIcon />
        </Badge>
      </ListItemIcon>
      <ListItemText primary={notification.content} />
    </ListItem>
  );
};
