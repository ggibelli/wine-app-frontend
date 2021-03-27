/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import * as React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { QueryOrderBy, Exact } from '../../generated/graphql';
import { LazyQueryResult } from '@apollo/client';
import { useLocation } from '@reach/router';

interface OrderProps {
  setList: React.Dispatch<React.SetStateAction<Array<any>>>;
  setOrder: React.Dispatch<React.SetStateAction<QueryOrderBy>>;
  queryResult: LazyQueryResult<any, Exact<any>>;
  order: QueryOrderBy;
}

export const Order: React.FC<OrderProps> = (props) => {
  const location = useLocation();
  // const ads = location.pathname === '/buy' || location === 'sell';
  const negotiations = location.pathname === '/trattative';
  const myAds = location.pathname === '/creati';
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    props.setOrder(event.target.value as QueryOrderBy);
  };
  const fetchMore = props.queryResult.fetchMore
    ? props.queryResult.fetchMore
    : null;

  React.useEffect(() => {
    if (fetchMore) {
      fetchMore({
        variables: {
          orderBy: props.order,
          offset: 0,
        },
      })
        .then(
          ({ data }) => {
            if (negotiations) {
              props.setList(data.negotiations.negotiations);
            } else if (myAds) {
              props.setList(data.me.ads.ads);
            } else {
              props.setList(data.ads.ads);
            }
          }
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        )
        .catch((e) => console.log(e));
    }
  }, [props.order]);
  return (
    <FormControl fullWidth>
      <InputLabel style={{ color: 'black' }} htmlFor='order'>
        Ordine risultati
      </InputLabel>
      <Select
        native
        value={props.order}
        onChange={handleChange}
        inputProps={{
          name: 'order',
          id: 'order',
        }}
      >
        <option aria-label='None' value='' />
        <option value={QueryOrderBy.CreatedAtDesc}>Dal piu recente</option>
        <option value={QueryOrderBy.CreatedAtAsc}>Dal meno recente</option>
        <option value={QueryOrderBy.PriceDesc}>Dal piu caro</option>
        <option value={QueryOrderBy.PriceAsc}>Dal meno caro</option>
      </Select>
    </FormControl>
  );
};
