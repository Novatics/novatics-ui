import { ClockPickerProps } from '@mui/x-date-pickers';
import { List, ListItem } from '@mui/material';
import React, { useState, useRef, useCallback } from 'react';

interface Props extends ClockPickerProps<Date> {
  oi?: string;
}

const calculateSpaceHeight = (
  listHeight: number,
  listItemHeight: number
): number => {
  const limit = listHeight / listItemHeight / 2 - 0.5;
  return listItemHeight * limit;
};

const ClockPicker = (props: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [handleClickOrigin, setHandleClickOrigin] = useState(false);

  const listRef = useRef<HTMLUListElement>(null);
  const listElement = listRef.current;
  const listHeight = listElement?.clientHeight || 0;
  const listItemHeight = listElement?.querySelector('li')?.clientHeight || 0;

  const spaceHeight = calculateSpaceHeight(listHeight, listItemHeight) || 0;

  const amount = 24;
  const data = Array(amount).fill(0);
  const maxListScrollTop = 798; // implement getMaxListScrollTop

  let scrollTimeout: any = null;
  const handleScroll = (e: React.MouseEvent<HTMLUListElement>) => {
    const listScrollTop = e.currentTarget.scrollTop;
    const percentScrolled = listScrollTop / maxListScrollTop;

    let listItemIndex = Math.round(amount * percentScrolled);
    listItemIndex = listItemIndex >= amount ? amount - 1 : listItemIndex;

    if (!handleClickOrigin) {
      setSelectedIndex(listItemIndex);
    }

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      // execute this block when scroll action is over
      setHandleClickOrigin(false);
    }, 300);
  };

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLLIElement>) => {
      setHandleClickOrigin(true);

      listElement?.scrollTo({
        top: e.currentTarget.offsetTop - spaceHeight,
        behavior: 'smooth',
      });

      const listItemIndex = Number(e.currentTarget.getAttribute('data-index'));
      setSelectedIndex(listItemIndex);
    },
    [listElement, spaceHeight]
  );

  return (
    <div>
      <List
        ref={listRef}
        onScroll={handleScroll}
        style={{
          height: 200,
          overflow: 'auto',
        }}
      >
        <div style={{ height: spaceHeight }} />
        {data.map((_, i) => (
          <ListItem
            id={`item-${i}`}
            key={`item-${i}`}
            data-index={i}
            onClick={handleClick}
            sx={{ cursor: 'pointer' }}
          >
            {i + 1} {i === selectedIndex && '<'}
          </ListItem>
        ))}
        <div style={{ height: spaceHeight }} />
      </List>
    </div>
  );
};

export default ClockPicker;
