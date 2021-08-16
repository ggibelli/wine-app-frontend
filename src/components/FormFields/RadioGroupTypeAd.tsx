import * as React from 'react';

import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@material-ui/core';

interface RadioGroup {
  typeAd: string;
  setTypeAd: React.Dispatch<React.SetStateAction<string>>;
}

export const RadioGroupTypeAd: React.FC<RadioGroup> = (props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setTypeAd((event.target as HTMLInputElement).value);
  };
  return (
    <FormControl component='fieldset'>
      <FormLabel style={{ color: '#000' }} component='legend'>
        Tipo Annunci
      </FormLabel>
      <RadioGroup
        row
        aria-label='type ad'
        name='type'
        value={props.typeAd}
        onChange={handleChange}
      >
        <FormControlLabel
          value='BUY'
          control={<Radio color='primary' />}
          label='Compra'
        />
        <FormControlLabel
          value='SELL'
          control={<Radio color='primary' />}
          label='Vendi'
        />
        <FormControlLabel
          value='both'
          control={<Radio color='primary' />}
          label='Entrambi'
        />
      </RadioGroup>
    </FormControl>
  );
};
