import { LazyQueryResult } from '@apollo/client';
import * as React from 'react';
import {
  Exact,
  NegotiationInputUpdate,
  NegotiationsForAdQuery,
} from '../generated/graphql';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export const OpenNegotiations: React.FC<{
  data: LazyQueryResult<
    NegotiationsForAdQuery,
    Exact<{
      ad: string;
    }>
  >;
  closeNegotiation: (negotiation: NegotiationInputUpdate) => Promise<void>;
}> = ({ data, closeNegotiation }) => {
  if (!data.data?.negotiationsForAd) {
    return null;
  }

  if (data.loading) {
    return <div>loading</div>;
  }
  if (data.error) {
    return <div>error</div>;
  }
  return (
    <List aria-label='negotiations'>
      {data.data?.negotiationsForAd
        .filter((negotiation) => !negotiation.isConcluded)
        .map((negotiation) => (
          <div key={negotiation._id}>
            <ListItem>
              <div>
                <Typography color='primary' component='h3' variant='h5'>
                  {negotiation.createdBy.firstName}
                </Typography>
                <br />
                <Typography color='secondary' variant='body1'>
                  {negotiation.dateCreated}
                </Typography>

                <br />
                <Button>Vai alla chat</Button>
                <br />
                <Button
                  onClick={() =>
                    closeNegotiation({
                      _id: negotiation._id,
                      isConcluded: true,
                    })
                  }
                >
                  Dichiara chiusa la trattativa
                </Button>
              </div>
            </ListItem>
            <Divider />
          </div>
        ))}
    </List>
  );
};
