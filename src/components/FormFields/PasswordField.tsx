import * as React from 'react';
import { useField } from 'formik';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormHelperText from '@material-ui/core/FormHelperText';

export const PasswordField: React.FC<{
  name: string;
  underlineColor?: string;
}> = ({ name, underlineColor }) => {
  const [show, setShow] = React.useState<boolean>(false);
  const handleClick = (): void => setShow(!show);
  const [field, { error, touched }] = useField({
    name: name,
    type: show ? 'text' : 'password',
  });
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <FormControl error={touched && error !== undefined} fullWidth>
      <InputLabel
        style={{ color: '#6d1331' }}
        htmlFor='standard-adornment-password'
      >
        Password
      </InputLabel>
      <Input
        {...field}
        inputProps={{ 'aria-label': name, 'data-testid': name }}
        type={show ? 'text' : 'password'}
        style={{ color: '#6d1331' }}
        classes={{
          underline: underlineColor,
        }}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClick}
              onMouseDown={handleMouseDownPassword}
            >
              {show ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};
