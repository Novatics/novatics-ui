import styled from '@emotion/styled';
import {useState} from 'react'
import { DateTimePicker as MUIDateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
/* eslint-disable-next-line */
export interface DateTimePickerProps {}

const StyledDateTimePicker = styled.div`
  color: pink;
`;

export function DateTimePicker(props: DateTimePickerProps) {
  const [value, setValue] = useState<Date | null>(
    new Date('2014-08-18T21:11:54'),
  );

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };
  return (
    <StyledDateTimePicker>
      <h1>Welcome to DateTimePicker!</h1>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MUIDateTimePicker
          label="Date&Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
    </StyledDateTimePicker>
  );
}

export default DateTimePicker;
