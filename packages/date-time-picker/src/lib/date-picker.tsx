import { useState, useRef, useEffect } from 'react';
import {
  PickersDay,
  PickersDayProps,
  CalendarPicker as MUICalendarPicker,
  CalendarPickerProps,
} from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
  format,
  isBefore,
  isAfter,
  isWithinInterval,
  isEqual,
  lastDayOfMonth,
  isSameMonth,
  getDay,
} from 'date-fns';
import { styled } from '@mui/material';
import {
  unstable_useEnhancedEffect as useEnhancedEffect,
  unstable_composeClasses as composeClasses,
  unstable_useForkRef as useForkRef,
  unstable_generateUtilityClass as generateUtilityClass,
  unstable_generateUtilityClasses as generateUtilityClasses,
} from '@mui/utils';

import './date-picker.scss';
/* eslint-disable-next-line */
export interface DateTimePickerProps
  extends Omit<CalendarPickerProps<Date>, 'onChange'> {}

const StyledPickersDay = styled(
  (props: PickersDayProps<Date> & { isWithin: boolean }) => {
    console.log('sasdas', props);
    const className = props.isWithin
      ? getPickersDayUtilityClass('isWithin')
      : '';

    return <PickersDay {...props} className={className} />;
  }
)();

export function DatePicker(props: DateTimePickerProps) {
  const calendarRef = useRef<HTMLDivElement>(null);
  const firstRef = useRef<HTMLButtonElement | null>(null);
  const lastRef = useRef<HTMLButtonElement | null>(null);

  const [firstDate, setFirstDate] = useState<Date | null>(null);
  const [lastDate, setLastDate] = useState<Date | null>(null);
  const [selectTurn, setSelectTurn] = useState<0 | 1>(0);
  const [currentMonth, setCurrentMonth] = useState<Date>(
    props.date || props.defaultCalendarMonth || new Date()
  );

  const isSelectingFirst = (newDate: Date): boolean => {
    if (!firstDate) return true;
    if (!lastDate) return !isAfter(newDate, firstDate);
    if (isWithinInterval(newDate, { start: firstDate, end: lastDate }))
      return !selectTurn;
    return isBefore(newDate, lastDate);
  };

  const toggleClass = (element: Element, isWithin?: boolean): void => {
    console.log('element');
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

    console.log('selecionou', date);

    // if (selectedElement && date) {
    //   toggleClassWithin(firstRef.current, lastRef.current);

    if (isSelectingFirst(date)) {
      setFirstDate(date);

      // if (firstRef.current) toggleClass(firstRef.current);
      // firstRef.current = selectedElement;
      // toggleClass(firstRef.current);
      // setSelectTurn(1);
    } else {
      setLastDate(date);
      // if (lastRef.current) toggleClass(lastRef.current);
      // lastRef.current = selectedElement;
      // toggleClass(lastRef.current);
      // setSelectTurn(0);
    }

    //   toggleClassWithin(firstRef.current, lastRef.current);
    // }
  };

  const handleMonthChange = () => {
    // TODO: Fix changing month behavior
    // Começa do zero
    // if (firstDate && !isSameMonth(firstDate, currentMonth))
    //   firstRef.current = null;
    // if (lastDate && !isSameMonth(lastDate, currentMonth))
    //   lastRef.current = null;
    // const newFirstRef = selectElementByDate(firstDate);
    // const newLastRef = selectElementByDate(lastDate);
    // if (newFirstRef) {
    //   firstRef.current = newFirstRef;
    //   toggleClass(newFirstRef);
    //   toggleClassWithin(
    //     newFirstRef,
    //     selectElementByDate(lastDayOfMonth(currentMonth))
    //   );
    //   console.log(newLastRef);
    // }
    // if (newLastRef) {
    //   lastRef.current = newLastRef;
    //   toggleClass(newLastRef);
    //   toggleClassWithin(
    //     newFirstRef,
    //     selectElementByDate(lastDayOfMonth(currentMonth))
    //   );
    // }
  };

  // const renderDay = (day: Date, selectedDays: Date[], )

  useEffect(() => {
    handleMonthChange();
  }, [currentMonth]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MUICalendarPicker
        {...props}
        selectedDays={[firstDate]}
        ref={calendarRef}
        onChange={handleChange}
        date={firstDate}
        onMonthChange={(month) => setCurrentMonth(month)}
        renderDay={(day, selectedDays, pickersDayProps) => {
          const selected = isEqual(day, firstDate) || isEqual(day, lastDate);
          let isWithin = false;
          if (firstDate && lastDate) {
            isWithin = isWithinInterval(day, {
              start: firstDate,
              end: lastDate,
            });
          }

          return (
            <StyledPickersDay
              {...pickersDayProps}
              // className={className}
              selected={selected}
              isWithin={isWithin}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
}

export function getPickersDayUtilityClass(slot: string) {
  return generateUtilityClass('NuiPickersDay', slot);
}

export default DatePicker;
