import react, { useState } from 'react';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import currency from 'currency.js';

/* eslint-disable-next-line */
export interface CurrencyTextFieldProps {
  value: number;
  onChange: (value: any) => void;
  outputFormat: 'string' | 'float' | 'integer'
}

const outputFormatMapper = {
  string: undefined,
  float: 'value',
  integer: 'intValue'
}
const StyledCurrencyTextField = styled.div`
  color: pink;
`;

export function CurrencyTextField(props: CurrencyTextFieldProps) {
  const { value, onChange,outputFormat, ...rest } = props;
  const [maskedValue, setMaskedValue] = useState('');
  const internalOnChange = (textfieldvalue: string) => {
    const onlyNumbers = textfieldvalue.replace(/\D/g, '')
    const c = currency(onlyNumbers, { precision: 2, fromCents: true });
    console.log(c.intValue)
    const newMaskedValue = c.format()

    const outputKey = outputFormatMapper[outputFormat]

    onChange( outputKey? c[outputKey]: c.format());
    setMaskedValue(newMaskedValue);
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
