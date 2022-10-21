import { ClockPickerProps } from '@mui/x-date-pickers';

interface Props extends ClockPickerProps<Date> {
  oi?: string;
}

const ClockPicker = (props: Props) => {
  return <div>oi</div>;
};

export default ClockPicker;
