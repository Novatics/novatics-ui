import { ClockPickerProps } from '@mui/x-date-pickers';
import {List, ListItem} from '@mui/material'
interface Props extends ClockPickerProps<Date> {
  oi?: string;
}

const ClockPicker = (props: Props) => {
  return <div>
    <List>
  {Array(24).fill(0).map((_, i) => <ListItem>{i+1}</ListItem>)}

    </List></div>;
};

export default ClockPicker;
