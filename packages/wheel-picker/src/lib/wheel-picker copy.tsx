import {
  List,
  ListItem,
  SelectProps,
  Box,
  BoxProps,
  ListProps,
} from '@mui/material';
import { useState, useRef, useCallback, useMemo, MouseEvent } from 'react';
import findIndex from 'lodash.findindex';

import { Only, Either } from '../../../../utils/types';

interface PickedMuiProps<T>
  extends Omit<ListProps, 'defaultValue' | 'onChange' | 'children'> {
  classes?: SelectProps['classes'];
  defaultValue?: SelectProps['defaultValue'];
  id?: SelectProps['id'];
  onChange: (param: { value: T; index: number }, e: MouseEvent) => void;
  value: SelectProps['value'];
}

interface PickedMuiPropsWithChildren<T> extends PickedMuiProps<T> {
  children: SelectProps['children'];
}

interface PickedMuiPropsWithOptions<T> extends PickedMuiProps<T> {
  options?: [T];
}

export type WheelPickerProps<T> = Either<
  PickedMuiPropsWithChildren<T>,
  PickedMuiPropsWithOptions<T>
>;

const calculateSpaceHeight = (
  listHeight: number,
  listItemHeight: number
): number => {
  const limit = listHeight / listItemHeight / 2 - 0.5;
  return listItemHeight * limit;
};

// const Bla = () => {
//   return (
//     <WheelPicker>
//       <div>oi</div>
//     </WheelPicker>
//   );
// };

// export const WheelPicker = <T,>(props: WheelPickerProps<T>) => {
//   const { defaultValue = 0, value, onChange, options, children } = props;
//   const hasOptions = options !== undefined;

//   const getDefaultValue = useMemo(() => {
//     if (value !== undefined || value !== null) {
//       if (hasOptions) {
//         return findIndex(options, value);
//       }
//       // to do children
//     }
//     return defaultValue;
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const [selectedIndex, setSelectedIndex] = useState(getDefaultValue);
//   const [handleClickOrigin, setHandleClickOrigin] = useState(false);

//   const listRef = useRef<HTMLUListElement>(null);
//   const listElement = listRef.current;
//   const listHeight = listElement?.clientHeight || 0;
//   const listItemHeight = listElement?.querySelector('li')?.clientHeight || 0;

//   const spaceHeight = calculateSpaceHeight(listHeight, listItemHeight) || 0;

//   const amount = 24;
//   const data = Array(amount).fill(0);
//   const maxListScrollTop = 798; // implement getMaxListScrollTop

//   const computedOptions = useMemo(() => {
//     if (options !== undefined) {
//       return options;
//     }

//     return [];
//   }, []);

//   let scrollTimeout: any = null;

//   const handleScroll = (e: MouseEvent<HTMLUListElement>) => {
//     const listScrollTop = e.currentTarget.scrollTop;
//     const percentScrolled = listScrollTop / maxListScrollTop;

//     let listItemIndex = Math.round(amount * percentScrolled);
//     listItemIndex = listItemIndex >= amount ? amount - 1 : listItemIndex;

//     if (!handleClickOrigin) {
//       console.log('handleClickOrigin', e);
//       setSelectedIndex(listItemIndex);
//       if (onChange !== undefined) {
//         onChange(
//           { value: computedOptions[listItemIndex], index: listItemIndex },
//           e
//         );
//       }
//     }

//     clearTimeout(scrollTimeout);
//     scrollTimeout = setTimeout(() => {
//       // execute this block when scroll action is over
//       setHandleClickOrigin(false);
//     }, 300);
//   };

//   const handleClick = useCallback(
//     (e: MouseEvent<HTMLLIElement>) => {
//       setHandleClickOrigin(true);

//       listElement?.scrollTo({
//         top: e.currentTarget.offsetTop - spaceHeight,
//         behavior: 'smooth',
//       });

//       const listItemIndex = Number(e.currentTarget.getAttribute('data-index'));
//       setSelectedIndex(listItemIndex);
//       console.log('handleClickOrigin', e);
//       if (onChange !== undefined) {
//         onChange(
//           { value: computedOptions[listItemIndex], index: listItemIndex },
//           e
//         );
//       }
//     },
//     [computedOptions, listElement, onChange, spaceHeight]
//   );

//   return (
//     <List
//       ref={listRef}
//       onScroll={handleScroll}
//       style={{
//         height: 200,
//         overflow: 'auto',
//       }}
//     >
//       <div style={{ height: spaceHeight }} />
//       {data.map((_, i) => (
//         <ListItem
//           id={`item-${i}`}
//           key={`item-${i}`}
//           data-index={i}
//           onClick={handleClick}
//           sx={{ cursor: 'pointer' }}
//         >
//           {i + 1} {i === selectedIndex && '<'}
//         </ListItem>
//       ))}
//       <div style={{ height: spaceHeight }} />
//     </List>
//   );
// };

// export default WheelPicker;
