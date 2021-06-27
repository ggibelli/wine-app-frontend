import {
  AppBar,
  Tabs,
  Badge,
  Box,
  Tab,
  useTheme,
  List,
} from '@material-ui/core';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { MessageListEl } from './MessageListEl';
import { groupBy } from 'lodash';
import { useStyles } from '../../utils/styleHook';
import { MessagesQuery } from '../../generated/graphql';
import { myInfo } from '../../cache';
import { NotificationListEl } from './NotificationListEl';
// import { InfiniteScroll } from '../../containers/InfiniteScrollFetch';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

interface NotificationProps {
  messages: MessagesQuery['messages'];
  handleClickNotification: (id: string) => void;
}

export const SwipableTabsNotification: React.FC<NotificationProps> = (
  props,
) => {
  const classes = useStyles();
  const theme = useTheme();
  const me = myInfo();
  const [value, setValue] = React.useState<number>(0);
  const notifications = props.messages?.filter(
    (message) => message.sentBy.firstName === 'Amministratore',
  );
  const messages = props.messages?.filter(
    (message) => message.sentBy.firstName !== 'Amministratore',
  );
  const messagesForNegotiationObj = groupBy(
    messages,
    (message) => message.negotiation._id,
  );
  const messagesForNegotiation = Object.entries(messagesForNegotiationObj).sort(
    (a, b) => a[0].localeCompare(b[0]),
  );
  const messNumberRaw = messagesForNegotiation.map((mess) => mess[1]).flat();
  const unreadNotificationsBadge = notifications?.filter(
    (n) => !n.isViewed,
  ).length;
  const unreadBadge = messNumberRaw.filter(
    (m) => !m.isViewed && m.sentBy._id !== me?._id,
  ).length;
  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div className={classes.paper}>
      <AppBar
        position='static'
        color='transparent'
        style={{ boxShadow: 'none' }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          style={{ color: '#6d1331' }}
          indicatorColor='secondary'
          textColor='inherit'
          variant='fullWidth'
          aria-label='notifications'
        >
          <Tab
            icon={<ChatBubbleOutlineIcon />}
            label={
              <Badge badgeContent={unreadBadge} color='primary'>
                Messaggi
              </Badge>
            }
            {...a11yProps(0)}
          />
          <Tab
            icon={<NotificationsNoneOutlinedIcon />}
            label={
              <Badge badgeContent={unreadNotificationsBadge} color='primary'>
                Notifiche
              </Badge>
            }
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {/* <InfiniteScroll
            fetchMore={handleFetchMore}
            isVisible={data.ads.ads?.length !== data?.ads?.pageCount}
            isLoading={isLoadFetchMore}
          > */}
          <List>
            {messagesForNegotiation.map((el) => (
              <MessageListEl key={el[0]} messages={el[1]} id={el[0]} />
            ))}
          </List>
          {/* </InfiniteScroll> */}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <List>
            {notifications?.map((notification) => (
              <NotificationListEl
                key={notification._id}
                notification={notification}
                handleClick={props.handleClickNotification}
              />
            ))}
          </List>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};
