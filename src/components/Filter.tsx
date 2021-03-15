import * as React from 'react';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import FilterListIcon from '@material-ui/icons/FilterList';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import Select from '@material-ui/core/Select';
import { QueryOrderBy } from '../generated/graphql';

const PurpleCheckbox = withStyles({
  root: {
    color: deepPurple[400],
    '&$checked': {
      color: deepPurple[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color='default' {...props} />);

interface FilterProps {
  order: QueryOrderBy;
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  isShowAll: boolean;
  handleShowAll: () => void;
}

export const Filter: React.FC<FilterProps> = (props) => {
  const [showFilter, setShowFilter] = React.useState<boolean>(false);

  return (
    <>
      <Button
        onClick={() => setShowFilter(!showFilter)}
        aria-label='filter'
        //variant='contained'
        color='primary'
        size='large'
        startIcon={<FilterListIcon />}
      >
        Filtri
      </Button>
      <Collapse in={showFilter}>
        <Divider />

        <FormControl fullWidth>
          <InputLabel style={{ color: 'black' }} htmlFor='order'>
            Ordine risultati
          </InputLabel>
          <Select
            native
            value={props.order}
            onChange={props.handleChange}
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
        <Divider />
        <FormControlLabel
          control={
            <PurpleCheckbox
              checked={props.isShowAll}
              onChange={props.handleShowAll}
              name='showAll'
              // color='primary'
            />
          }
          label='Mostra tutti gli annunci per questo vino'
        />
      </Collapse>
    </>
  );
};
