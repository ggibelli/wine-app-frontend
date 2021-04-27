/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useMessagesQuery } from '../generated/graphql';
import _ from 'lodash';
import { MessageListEl } from '../components/MessageListEl';
import { notification } from '../cache';
import { RouteComponentProps } from '@reach/router';
import { BackButton } from '../components/BackButton';
import { Loading } from '../components/Loading';
import { Box, ListItem, ListItemText } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import { useStyles } from '../utils/styleHook';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
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

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//     // width: 500,
//   },
// }));

const Messages: React.FC<RouteComponentProps> = () => {
  const { data, loading, error, client } = useMessagesQuery({
    fetchPolicy: 'network-only',
    onError: (error) => {
      notification({
        type: 'error',
        message: error.message,
      });
    },
  });
  const classes = useStyles();

  const notifications = data?.messages?.filter(
    (message) => message.sentBy.firstName === 'Amministratore'
  );
  const unreadNotificationsBadge = notifications?.filter((n) => !n.isViewed)
    .length;
  const messages = data?.messages?.filter(
    (message) => message.sentBy.firstName !== 'Amministratore'
  );
  // messages?.map((m) => console.log(m.sentBy.firstName)); // console.log(messages);
  const messagesForNegotiationObj = _.groupBy(
    messages,
    (message) => message.negotiation._id
  );
  const messagesForNegotiation = Object.entries(
    messagesForNegotiationObj
  ).sort((a, b) => a[0].localeCompare(b[0]));

  // const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  const messNumberRaw = messagesForNegotiation.map((mess) => mess[1]).flat();
  const unreadBadge = messNumberRaw.filter((m) => !m.isViewed).length;

  if (loading) {
    return <Loading />;
  }
  if (error) return <div>error</div>;
  if (!messagesForNegotiation.length) return <div>non ci sono messaggi</div>;
  if (!messages) return null;
  return (
    <Container component='main' maxWidth='sm'>
      <CssBaseline />
      <BackButton />
      <div className={classes.paper}>
        <AppBar position='static' color='default'>
          <Tabs
            value={value}
            onChange={handleChange}
            style={{ color: '#6d1331' }}
            indicatorColor='secondary'
            textColor='inherit'
            variant='fullWidth'
            aria-label='full width tabs example'
          >
            <Tab
              label={
                <Badge badgeContent={unreadBadge} color='primary'>
                  Messaggi
                </Badge>
              }
              {...a11yProps(0)}
            />
            <Tab
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
            <List>
              {messagesForNegotiation.map((el) => (
                <div key={el[0]}>
                  <MessageListEl messages={el[1]} id={el[0]} />
                </div>
              ))}
            </List>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <List>
              {notifications?.map((notification) => (
                <ListItem key={notification._id}>
                  <ListItemText primary={notification.content} />
                </ListItem>
              ))}
            </List>
          </TabPanel>
        </SwipeableViews>
      </div>
    </Container>
  );
};

export default Messages;
