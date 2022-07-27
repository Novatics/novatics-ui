import styled from '@emotion/styled';
import { TextField } from '@mui/material';

/* eslint-disable-next-line */
export interface MaskedTextFieldProps {
  value: string | number;
}

export function MaskedTextField(props: MaskedTextFieldProps) {
  const { value } = props;

  const handleOnChangeEvent = (value: string | number) => {
    console.log("value => ", value);
  }

  return (
    <div>
      <TextField
        value={value}
        onChange={(event) => handleOnChangeEvent(event?.target?.value)}
      />
    </div>
  );
}

export default MaskedTextField;
