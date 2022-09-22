import { useState, useRef } from 'react';
import { CalendarPicker as MUICalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format, isBefore, isAfter, isWithinInterval } from 'date-fns';

import './date-picker.scss';
/* eslint-disable-next-line */
export interface DateTimePickerProps {}

export function DatePicker(props: DateTimePickerProps) {
  const calendarRef = useRef<HTMLDivElement>(null);
  let firstRef = useRef<HTMLButtonElement | null>(null);
  let lastRef = useRef<HTMLButtonElement | null>(null);

  const [firstDate, setFirstDate] = useState<Date | null>(null);
  const [lastDate, setLastDate] = useState<Date | null>(null);
  const [selectTurn, setSelectTurn] = useState<0 | 1>(0);

  const isSelectingFirst = (newDate: Date): boolean => {
    if (!firstDate) return true;
    if (!lastDate) return !isAfter(newDate, firstDate);
    if (isWithinInterval(newDate, { start: firstDate, end: lastDate }))
      return !selectTurn;
    return isBefore(newDate, lastDate);
  };

  const toggleClass = (element: Element, isWithin?: boolean): void => {
    element.classList.toggle(isWithin ? 'within' : 'selected');
  };

  const selectElementByDate = (date: Date | null): HTMLButtonElement | null => {
    if (calendarRef.current && date) {
      const formatedDate = format(date, 'MMM d, yyyy');
      return calendarRef.current.querySelector(
        `[aria-label="${formatedDate}"]`
      );
    }
    return null;
  };

  const toggleClassWithin = (
    begin: HTMLButtonElement | null,
    end: HTMLButtonElement | null
  ) => {
    if (begin && end) {
      const endParent = end.parentNode as Element;
      let currentParent: Element | null = begin.parentNode as Element;

      currentParent = currentParent.nextElementSibling;
      while (currentParent && currentParent !== endParent) {
        const elementChild = currentParent.firstElementChild;
        if (elementChild) toggleClass(elementChild, true);

        const nextSibling = currentParent.nextElementSibling;

        if (nextSibling) {
          currentParent = nextSibling;
        } else {
          const parentRow = currentParent.parentNode as Element;
          currentParent = parentRow.nextElementSibling
            ? parentRow.nextElementSibling.firstElementChild
            : null;
        }
      }
    }
  };

  const handleChange = (date: Date | null) => {
    const selectedElement = selectElementByDate(date);

    if (selectedElement && date) {
      toggleClassWithin(firstRef.current, lastRef.current);

      if (isSelectingFirst(date)) {
        setFirstDate(date);
        if (firstRef.current) toggleClass(firstRef.current);
        firstRef.current = selectedElement;
        toggleClass(firstRef.current);
        setSelectTurn(1);
      } else {
        setLastDate(date);
        if (lastRef.current) toggleClass(lastRef.current);
        lastRef.current = selectedElement;
        toggleClass(lastRef.current);
        setSelectTurn(0);
      }

      toggleClassWithin(firstRef.current, lastRef.current);
    }
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MUICalendarPicker
        ref={calendarRef}
        date={null}
        onChange={handleChange}
      />
    </LocalizationProvider>
  );
}

export default DatePicker;
