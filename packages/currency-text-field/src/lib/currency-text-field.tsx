import { useState, useEffect, useCallback, useMemo } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import currencyLib from 'currency.js';
import pick from 'lodash.pick';
import defaults from 'lodash.defaults';

import CURRENCY, { CurrencyName } from '../currency/currency';

export interface CurrencyProps {
  precision?: number;
  decimal?: string;
  separator?: string;
  symbol?: React.ReactNode;
  symbolFirst?: boolean;
  useVedic?: boolean;
}

export interface CurrencyTextFieldProps {
  onChange: (value: string | number) => void;
  value: string | number;
  outputFormat?: 'string' | 'float' | 'integer';
  currency?: CurrencyName;
  currencyProps?: CurrencyProps;
}

const CURRENCY_ATTRIBUTES = [
  'precision',
  'decimal',
  'separator',
  'symbol',
  'symbolFirst',
  'useVedic',
];

export function CurrencyTextField(props: CurrencyTextFieldProps) {
  const {
    value,
    onChange,
    currency = 'brl',
    outputFormat = 'float',
    currencyProps,
    ...rest
  } = props;
  const [maskedValue, setMaskedValue] = useState('');

  const priorityCurrencyProps = useMemo(() => {
    console.log("CURRENCY => ", pick(CURRENCY['brl'], CURRENCY_ATTRIBUTES));
    const currencyFallback = pick(CURRENCY['brl'], CURRENCY_ATTRIBUTES);
    const currencyPreset = pick(CURRENCY[currency], CURRENCY_ATTRIBUTES);
    const mergedCurrency = defaults(
      currencyProps,
      currencyPreset,
      currencyFallback
    );

    return pick(mergedCurrency, CURRENCY_ATTRIBUTES) as CurrencyProps;
  }, [currency, currencyProps]);



  const formatToCurrency = useCallback(
    (value: string | number) => {
      const onlyNumbers = String(value).replace(/\D/g, '');

      return currencyLib(onlyNumbers, {
        ...priorityCurrencyProps,
        fromCents: true,
        symbol: '',
      });
    },
    [priorityCurrencyProps]
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
    <Box>
      <TextField
        value={maskedValue}
        InputProps={{
          startAdornment: priorityCurrencyProps.symbolFirst ? (
            <Box sx={{ mr: 0.5 }}>{priorityCurrencyProps?.symbol}</Box>
          ) : null,
          endAdornment: !priorityCurrencyProps.symbolFirst ? (
            <Box sx={{ mr: 0.5 }}>{priorityCurrencyProps?.symbol}</Box>
          ) : null,
        }}
        onChange={(value) => internalOnChange(value.target.value)}
        {...rest}
      />
    </Box>
  );
}

export default CurrencyTextField;
