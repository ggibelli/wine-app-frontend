// import * as React from 'react';
// import { Field, useField, useFormikContext } from 'formik';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import { comuni } from '../../utils/formHelper';
// import { UserInputForm } from '../UserForm';

// interface Option {
//   value: string;
//   label: string;
// }

// export const ComboboxComuni: React.FC<{
//   label: string;
//   name: string;
//   labelTextColor?: string;
//   underlineColor?: string;
//   setFieldValue: (name: string, value: string) => void;
// }> = ({ label, name, setFieldValue, labelTextColor, underlineColor }) => {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const [_, { error, touched }] = useField({
//     name: name,
//   });
//   const { values }: { values: UserInputForm } = useFormikContext();

//   return (
//     <Autocomplete
//       key={`${values.address.provincia}${values.address.regione}`}
//       getOptionSelected={(option, value) => option.value === value.value}
//       disabled={items.length === 0}
//       options={comuni}
//       fullWidth
//       classes={{
//         inputRoot: underlineColor,
//       }}
//       data-testid='combobox-comuni'
//       getOptionLabel={(item: Option) => item.value}
//       onChange={(e, option) => {
//         setFieldValue(name, option?.value as string);
//       }}
//       renderInput={(params) => (
//         <Field
//           required
//           component={TextField}
//           {...params}
//           label={label}
//           // variant='outlined'
//           error={error !== undefined}
//           helperText={error}
//           inputProps={{
//             ...params.inputProps,
//             autoComplete: 'new-password',
//           }}
//           InputLabelProps={{
//             style: { color: labelTextColor },
//           }}
//         />
//       )}
//     />
//   );
// };

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import * as React from 'react';
import { Field, useField } from 'formik';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ListSubheader from '@material-ui/core/ListSubheader';
import { useTheme } from '@material-ui/core/styles';
import { VariableSizeList, ListChildComponentProps } from 'react-window';
import { Typography } from '@material-ui/core';

const LISTBOX_PADDING = 8; // px

function renderRow(props: ListChildComponentProps) {
  const { data, index, style } = props;
  return React.cloneElement(data[index], {
    style: {
      ...style,
      top: (style.top as number) + LISTBOX_PADDING,
    },
  });
}

const OuterElementContext = React.createContext({});

// eslint-disable-next-line react/display-name
const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

function useResetCache(data: any) {
  const ref = React.useRef<VariableSizeList>(null);
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
}

// Adapter for react-window
const ListboxComponent = React.forwardRef<HTMLDivElement>(
  function ListboxComponent(props, ref) {
    const { children, ...other } = props;
    const itemData = React.Children.toArray(children);
    const theme = useTheme();
    const smUp = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true });
    const itemCount = itemData.length;
    const itemSize = smUp ? 36 : 48;

    const getChildSize = (child: React.ReactNode) => {
      if (React.isValidElement(child) && child.type === ListSubheader) {
        return 48;
      }

      return itemSize;
    };

    const getHeight = () => {
      if (itemCount > 8) {
        return 8 * itemSize;
      }
      return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
    };

    const gridRef = useResetCache(itemCount);

    return (
      <div ref={ref}>
        <OuterElementContext.Provider value={other}>
          <VariableSizeList
            itemData={itemData}
            height={getHeight() + 2 * LISTBOX_PADDING}
            width='100%'
            ref={gridRef}
            outerElementType={OuterElementType}
            innerElementType='ul'
            itemSize={(index) => getChildSize(itemData[index])}
            overscanCount={5}
            itemCount={itemCount}
          >
            {renderRow}
          </VariableSizeList>
        </OuterElementContext.Provider>
      </div>
    );
  }
);

export const ComboboxComuni: React.FC<{
  label: string;
  name: string;
  labelTextColor?: string;
  underlineColor?: string;
  setFieldValue: (name: string, value: string) => void;
}> = ({ label, name, setFieldValue, labelTextColor, underlineColor }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { error, touched }] = useField({
    name: name,
  });

  return (
    <Autocomplete
      disableListWrap
      options={comuni} //options.sort((a, b) => -b.regione.localeCompare(a.regione))}
      ListboxComponent={
        ListboxComponent as React.ComponentType<
          React.HTMLAttributes<HTMLElement>
        >
      }
      renderOption={(option) => <Typography noWrap>{option}</Typography>}
      fullWidth
      classes={{
        inputRoot: underlineColor,
      }}
      data-testid='combobox-comuni'
      onChange={(e, option) => {
        setFieldValue(name, option as string);
      }}
      renderInput={(params) => (
        <Field
          required
          component={TextField}
          {...params}
          label={label}
          error={touched && error !== undefined}
          helperText={error}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password',
          }}
          InputLabelProps={{
            style: { color: labelTextColor },
          }}
        />
      )}
    />
  );
};
