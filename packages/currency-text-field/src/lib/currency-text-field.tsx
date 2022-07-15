import react, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import currency from 'currency.js';
// import json from '../util/Common-Currency.json';

export interface CurrencyTextFieldProps {
  value: number;
  onChange: (value: any) => void;
  outputFormat?: 'string' | 'float' | 'integer';
  currency?: string;
}


export function CurrencyTextField(props: CurrencyTextFieldProps) {
  const { value, onChange, outputFormat = 'float', ...rest } = props;
  const [maskedValue, setMaskedValue] = useState('');


  useEffect(() => {
    const onlyNumbers = String(value).replace(/\D/g, '')
    const c = currency(onlyNumbers, { precision: 2, fromCents: true, symbol: '' });
    const newMaskedValue = c.format()
    setMaskedValue(newMaskedValue)
  },[])


  const internalOnChange = (textfieldvalue: string) => {
    const onlyNumbers = textfieldvalue.replace(/\D/g, '')
    const c = currency(onlyNumbers, { precision: 2, fromCents: true, symbol: '' });
    const newMaskedValue = c.format()

    let onchangeValue: string | number = newMaskedValue

    if(outputFormat === 'float'){
      onchangeValue = c.value
    }
    else if(outputFormat === 'integer'){
      onchangeValue = c.intValue
    }

    onChange(onchangeValue)
    setMaskedValue(newMaskedValue);
  };

  return (
    <div>
      <TextField
        value={maskedValue}
        InputProps={{
          startAdornment: '',
          endAdornment: 'R$',
        }}
    
        onChange={(value) => internalOnChange(value.target.value)}
        {...rest}
      />
    </div>
  );
}

export default CurrencyTextField;
