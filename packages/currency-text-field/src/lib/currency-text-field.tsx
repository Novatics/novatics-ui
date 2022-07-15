import react, { useState } from 'react';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import currency from 'currency.js';

/* eslint-disable-next-line */
export interface CurrencyTextFieldProps {
  value: number;
  onChange: Function;
}

const StyledCurrencyTextField = styled.div`
  color: pink;
`;

export function CurrencyTextField(props: CurrencyTextFieldProps) {
  const { value, onChange, ...rest } = props;
  const [maskedValue, setMaskedValue] = useState('');

  const internalOnChange = (textfieldvalue: string) => {
    let c = currency(textfieldvalue, { precision: 2, fromCents: true });
    onChange(c.intValue);
    setMaskedValue(c.format());
  };

  return (
    <div>
      <TextField
        value={maskedValue}
        onChange={(value) => internalOnChange(value.target.value)}
        {...rest}
      />
    </div>
  );
}

export default CurrencyTextField;
