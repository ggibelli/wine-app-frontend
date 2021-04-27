import * as React from 'react';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import FilterListIcon from '@material-ui/icons/FilterList';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import { searchedWine } from '../../cache';
import { IFilters, multiFilter } from '../../utils/multiFilter';

export const PurpleCheckbox = withStyles({
  root: {
    color: deepPurple[400],
    '&$checked': {
      color: deepPurple[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color='default' {...props} />);

interface FilterProps {
  list: Array<any>;
  filteredList?: Array<any>;
  setFilteredList: React.Dispatch<
    React.SetStateAction<Array<any> | undefined | null>
  >;
  children?: React.ReactNode;
}

export const Filter: React.FC<FilterProps> = (props) => {
  const searchedWineCache = searchedWine();
  const [isShowAll, setIsShowAll] = React.useState<boolean>(false);
  const [showFilter, setShowFilter] = React.useState<boolean>(false);
  const [filterAds, setFilterAds] = React.useState<IFilters>({
    priceTo: (priceTo: number) =>
      priceTo <= (searchedWineCache?.priceTo as number),
    abv: (abv: number) =>
      abv >= (searchedWineCache?.abv as number) - 0.5 ||
      abv <= (searchedWineCache?.abv as number) + 0.5,
    harvest: (harvest: number) =>
      harvest === (searchedWineCache?.harvest as number) ||
      harvest - 1 === (searchedWineCache?.harvest as number),
    litersTo: (litersTo: number) =>
      litersTo >= (searchedWineCache?.litersTo as number),
  });
  React.useEffect(() => {
    if (props.list.length > 0) {
      const filtredAds = multiFilter(props.list, filterAds);
      props.setFilteredList(filtredAds);
    }
  }, [filterAds, props.list]);
  const handleShowAll = () => {
    if (!isShowAll) {
      setFilterAds({
        priceTo: () => true,
        harvest: () => true,
        abv: () => true,
        litersTo: () => true,
      });
    } else {
      setFilterAds({
        priceTo: (priceTo: number) =>
          priceTo <= (searchedWineCache?.priceTo as number),
        abv: (abv: number) =>
          abv >= (searchedWineCache?.abv as number) - 0.5 ||
          abv <= (searchedWineCache?.abv as number) + 0.5,
        harvest: (harvest: number) =>
          harvest === (searchedWineCache?.harvest as number) ||
          harvest - 1 === (searchedWineCache?.harvest as number),
        litersTo: (litersTo: number) =>
          litersTo >= (searchedWineCache?.litersTo as number),
      });
    }
    setIsShowAll(!isShowAll);
  };
  return (
    <>
      <Button
        onClick={() => setShowFilter(!showFilter)}
        aria-label='filter'
        color='primary'
        size='large'
        startIcon={<FilterListIcon />}
      >
        Filtri
      </Button>
      <Collapse in={showFilter}>
        {props.children}
        <Divider />
        <FormControlLabel
          control={
            <PurpleCheckbox
              checked={isShowAll}
              onChange={handleShowAll}
              name='showAll'
            />
          }
          label='Mostra tutti gli annunci per questo vino'
        />
      </Collapse>
    </>
  );
};
