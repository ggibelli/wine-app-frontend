import { LazyQueryResult } from '@apollo/client';
import * as React from 'react';
import { Exact, NegotiationsForAdQuery } from '../generated/graphql';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from '@reach/router';
import { CloseNegotiationButton } from '../containers/CloseNegotiationButton';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';
import { useStyles } from '../utils/styleHook';

export const OpenNegotiations: React.FC<{
  data: LazyQueryResult<
    NegotiationsForAdQuery,
    Exact<{
      ad: string;
    }>
  >;
  showNegotiations: () => void;
}> = ({ data, showNegotiations }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState<boolean>(false);
  const handleShowNegotiations = () => {
    if (!open) {
      showNegotiations();
    }
    setOpen(!open);
  };
  if (data.loading) {
    return <div>loading</div>;
  }
  if (data.error) {
    return <div>error</div>;
  }
  return (
    <>
      <IconButton data-testid='negotiationsAd' onClick={handleShowNegotiations}>
        {!open ? <ExpandMoreIcon /> : <ExpandLessIcon />}
      </IconButton>
      <Collapse in={open}>
        <List aria-label='negotiations'>
          {data?.data?.negotiationsForAd?.map((negotiation) => (
            <div key={negotiation._id}>
              <ListItem>
                <div>
                  <Typography color='primary' component='h3' variant='h5'>
                    {negotiation.createdBy.firstName}
                  </Typography>
                  <br />
                  <Typography color='secondary' variant='body1'>
                    aperta il {negotiation.dateCreated}{' '}
                    {negotiation.dateConcluded
                      ? `chiusa il ${negotiation.dateConcluded}`
                      : null}
                  </Typography>

                  <br />
                  <Button
                    className={classes.buyButton}
                    component={Link}
                    to={`/messaggi/${negotiation._id}`}
                  >
                    Vai alla chat
                  </Button>
                  <br />
                  {!negotiation.isConcluded ? (
                    <CloseNegotiationButton isBuy={true} id={negotiation._id} />
                  ) : (
                    <Button>Lascia una recensione</Button>
                  )}
                </div>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </Collapse>
    </>
  );
};
