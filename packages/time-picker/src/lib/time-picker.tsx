import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface TimePickerProps {}

const StyledTimePicker = styled.div`
  color: pink;
`;

export function TimePicker(props: TimePickerProps) {
  return (
    <StyledTimePicker>
      <h1>Welcome to TimePicker!</h1>
    </StyledTimePicker>
  );
}

export default TimePicker;
