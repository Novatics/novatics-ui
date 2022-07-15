import react, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import currency from 'currency.js';
// import json from '../util/Common-Currency.json';

export interface CurrencyTextFieldProps {
  value: string | number;
  onChange: (value: any) => void;
  outputFormat?: 'string' | 'float' | 'integer';
  currency?: string;
}

const formatToCurrency = (value: string | number) => {
  const onlyNumbers = String(value).replace(/\D/g, '');
  const c = currency(onlyNumbers, {
    precision: 2,
    fromCents: true,
    symbol: '',
  });
  return c;
};

export function CurrencyTextField(props: CurrencyTextFieldProps) {
  const { value, onChange, outputFormat = 'float', ...rest } = props;
  const [maskedValue, setMaskedValue] = useState('');

  useEffect(() => {
    setMaskedValue(formatToCurrency(value).format());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const internalOnChange = (textFieldValue: string) => {
    const currencyObject = formatToCurrency(textFieldValue);

    const internalMaskedValue = currencyObject.format();
    let outputValue: string | number = internalMaskedValue;

    if (outputFormat === 'float') {
      outputValue = currencyObject.value;
    } else if (outputFormat === 'integer') {
      outputValue = currencyObject.intValue;
    }

    onChange(outputValue);
    setMaskedValue(internalMaskedValue);
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
