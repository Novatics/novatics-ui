import { TextField } from '@mui/material';
import InputMask from "react-input-mask";


/* eslint-disable-next-line */
export interface MaskedTextFieldProps {
  value: string | number;
  mask: string;
  maskPlaceholder: string;
}

export function MaskedTextField(props: MaskedTextFieldProps) {
  const { value } = props;

  const handleOnChangeEvent = (value: string | number) => {
    console.log("value => ", value);
  }

  return (
    <InputMask
      mask={"(99) 99999-9999"}
      value={value}
      onChange={(event) => handleOnChangeEvent(event.target.value)}
    >
      { (inputProps) => <TextField {...inputProps } /> }
    </InputMask>
  );
}

export default MaskedTextField;
