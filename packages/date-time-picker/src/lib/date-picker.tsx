import { useState, useRef } from 'react';
import { CalendarPicker as MUICalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format } from 'date-fns';

import './date-picker.scss';
/* eslint-disable-next-line */
export interface DateTimePickerProps {}

export function DatePicker(props: DateTimePickerProps) {
  const calendarRef = useRef<HTMLDivElement | null>(null);
  let firstRef = useRef<HTMLButtonElement | null>(null);
  let lastRef = useRef<HTMLButtonElement | null>(null);

  const [firstDate, setFirstDate] = useState<Date | null>(null);
  const [lastDate, setLastDate] = useState<Date | null>(null);
  const [selecting, setSelecting] = useState<0 | 1>(0);

  const handleChange = (date: Date | null) => {
    if (calendarRef && date) {
      const formatedDate = format(date, 'MMM d, yyyy');
      const selectedElement: HTMLButtonElement | null =
        calendarRef.current &&
        calendarRef.current.querySelector(`[aria-label="${formatedDate}"]`);
      if (selectedElement) {
        if (selecting) {
          setLastDate(date);
          if (lastRef.current)
            lastRef.current.classList.remove('last-selected');
          lastRef.current = selectedElement;
          lastRef.current.classList.add('last-selected');
          setSelecting(0);
        } else {
          setFirstDate(date);
          if (firstRef.current)
            firstRef.current.classList.remove('first-selected');
          firstRef.current = selectedElement;
          firstRef.current.classList.add('first-selected');
          setSelecting(1);
        }
      }
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
