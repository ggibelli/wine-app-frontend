/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import * as React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { QueryOrderBy } from '../../generated/graphql';

interface OrderProps {
  setOrder: React.Dispatch<React.SetStateAction<QueryOrderBy>>;
  order: QueryOrderBy;
  isAds?: boolean;
}

export const Order: React.FC<OrderProps> = (props) => {
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    props.setOrder(event.target.value as QueryOrderBy);
  };
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
        <option value={QueryOrderBy.CreatedAtDesc}>Dal piu recente</option>
        <option value={QueryOrderBy.CreatedAtAsc}>Dal meno recente</option>
        {props.isAds ? (
          <>
            <option value={QueryOrderBy.PriceDesc}>Dal piu caro</option>
            <option value={QueryOrderBy.PriceAsc}>Dal meno caro</option>
          </>
        ) : null}
      </Select>
    </FormControl>
  );
};
