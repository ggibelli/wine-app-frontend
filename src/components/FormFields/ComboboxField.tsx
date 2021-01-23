/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/display-name */
import * as React from 'react';
import { useField } from 'formik';

import { useCombobox } from 'downshift';
import {
  Input,
  List,
  ListItem,
  Flex,
  // Text,
  IconButton,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react';
import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons';

const ComboboxInput = React.forwardRef<HTMLInputElement>(
  ({ ...props }, ref) => {
    console.log(props);
    return <Input {...props} ref={ref} />;
  }
);

const ComboboxList = React.forwardRef<HTMLUListElement, { isOpen: boolean }>(
  ({ isOpen, ...props }, ref) => {
    return (
      <List display={isOpen ? undefined : 'none'} py={2} {...props} ref={ref} />
    );
  }
);

const ComboboxItem = React.forwardRef<HTMLLIElement, any>(
  ({ itemIndex, highlightedIndex, ...props }, ref) => {
    const isActive = itemIndex === highlightedIndex;

    return (
      <ListItem
        transition='background-color 220ms, color 220ms'
        bg={isActive ? 'teal.100' : undefined}
        px={4}
        py={2}
        cursor='pointer'
        {...props}
        ref={ref}
      />
    );
  }
);

export const Combobox: React.FC<{
  items: Array<string>;
  label: string;
  name: string;
}> = ({ items, label, name }) => {
  const [field, { error, touched }] = useField({
    name: name,
  });
  const [inputItems, setInputItems] = React.useState(items);
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      if (!inputValue) {
        setInputItems(items);
      } else {
        setInputItems(
          items.filter((item) =>
            item.toLowerCase().startsWith(inputValue.toLowerCase())
          )
        );
      }
    },
  });
  console.log(field);

  return (
    <Flex direction='column' align='center'>
      <FormControl
        {...getComboboxProps()}
        isInvalid={error !== undefined && touched}
      >
        <Flex direction='row' alignItems='baseline'>
          <FormLabel {...getLabelProps()} htmlFor={label}>
            {label}
          </FormLabel>
          <ComboboxInput
            {...getInputProps()}
            placeholder='Search...'
            flex='0 0 auto'
            width={500}
            mt={3}
          />
          <IconButton
            {...getToggleButtonProps()}
            aria-label={'toggle menu'}
            colorScheme={isOpen ? 'gray' : 'teal'}
            icon={isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
          />
        </Flex>
        <FormErrorMessage>{error}</FormErrorMessage>
        <ComboboxList
          isOpen={isOpen}
          {...getMenuProps()}
          flex={1}
          overflowY='auto'
          mt={0}
        >
          {inputItems.map((item, index) => (
            <ComboboxItem
              {...getItemProps({ item, index })}
              itemIndex={index}
              highlightedIndex={highlightedIndex}
              key={index}
            >
              {item}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </FormControl>
    </Flex>
  );
};
