import { useState, useEffect, useCallback, useMemo } from 'react';
import TextField from '@mui/material/TextField';
import currencyLib from 'currency.js';

import CURRENCY, { CurrencyName } from '../currency/currency';

export interface CurrencyProps {
  precision?: number;
  decimal?: string;
  separator?: string;
  symbol?: React.ReactNode;
  useVedic?: boolean;
}

export interface CurrencyTextFieldProps {
  value: string | number;
  onChange: (value: string | number) => void;
  outputFormat?: 'string' | 'float' | 'integer';
  currency?: CurrencyName;
  symbolFirst?: boolean;
  currencyProps?: CurrencyProps;
}

export function CurrencyTextField(props: CurrencyTextFieldProps) {
  const {
    value,
    onChange,
    currency,
    outputFormat = 'float',
    symbolFirst = true,
    currencyProps,
    ...rest
  } = props;
  const [maskedValue, setMaskedValue] = useState('');

  const priorityCurrencyProps = useMemo(() => {
    const defaultProps: CurrencyProps = {
      precision: currency ? CURRENCY[currency].precision : 2,
      decimal: currency ? CURRENCY[currency].decimal : ',',
      separator: currency ? CURRENCY[currency].separator : '.',
      symbol: currency ? CURRENCY[currency].symbol : '',
      useVedic: false,
    };

    if (currencyProps) {
      if (currencyProps.decimal !== undefined) {
        defaultProps.decimal = currencyProps.decimal;
      }
      if (currencyProps.precision !== undefined) {
        defaultProps.precision = currencyProps.precision;
      }
      if (currencyProps.separator !== undefined) {
        defaultProps.separator = currencyProps.separator;
      }
      if (currencyProps.symbol !== undefined) {
        defaultProps.symbol = currencyProps.symbol;
      }
    }

    return defaultProps;
  }, [currency, currencyProps]);

  const formatToCurrency = useCallback(
    (value: string | number) => {
      const onlyNumbers = String(value).replace(/\D/g, '');
      const c = currencyLib(onlyNumbers, {
        ...priorityCurrencyProps,
        fromCents: true,
        symbol: '',
      });
      return c;
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
    <div>
      <TextField
        value={maskedValue}
        InputProps={{
          startAdornment: symbolFirst ? priorityCurrencyProps?.symbol : null,
          endAdornment: !symbolFirst ? priorityCurrencyProps?.symbol : null,
        }}
        onChange={(value) => internalOnChange(value.target.value)}
        {...rest}
      />
    </div>
  );
}

export default CurrencyTextField;
