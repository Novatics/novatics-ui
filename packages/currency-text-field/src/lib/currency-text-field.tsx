import { useState, useEffect, useCallback } from 'react';
import TextField from '@mui/material/TextField';
import currency from 'currency.js';
// import json from '../util/Common-Currency.json';

export interface CurrencyTextFieldProps {
  value: string | number;
  onChange: (value: string | number) => void;
  outputFormat?: 'string' | 'float' | 'integer';
  currency?: string;
  precision?: number;
  decimal?: string;
  separator?: string;
  symbol?: string;
  startSymbol?: boolean;
}

export function CurrencyTextField(props: CurrencyTextFieldProps) {
  const {
    value,
    onChange,
    outputFormat = 'float',
    precision = 2,
    decimal = ',',
    separator = ' ',
    symbol = '',
    startSymbol = true,
    ...rest
  } = props;
  const [maskedValue, setMaskedValue] = useState('');

  const formatToCurrency = useCallback(
    (value: string | number) => {
      const onlyNumbers = String(value).replace(/\D/g, '');
      const c = currency(onlyNumbers, {
        fromCents: true,
        symbol: '',
        precision: precision,
        decimal: decimal,
        separator: separator,
      });
      return c;
    },
    [precision, decimal, separator]
  );

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

  useEffect(() => {
    setMaskedValue(formatToCurrency(value).format());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <TextField
        value={maskedValue}
        InputProps={{
          startAdornment: startSymbol ? symbol : '',
          endAdornment: !startSymbol ? symbol : null,
        }}
        onChange={(value) => internalOnChange(value.target.value)}
        {...rest}
      />
    </div>
  );
}

export default CurrencyTextField;
