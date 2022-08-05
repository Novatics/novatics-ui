import currencyIso from './currency_iso';
import currencyNonIso from './currency_non_iso';
import currencyBackwardsCompatible from './currency_backwards_compatible';

const CURRENCY = {
  ...currencyIso,
  ...currencyNonIso,
  ...currencyBackwardsCompatible,
};

export type CurrencyName = keyof typeof CURRENCY;

export const CurrencyNames = Object.keys(CURRENCY);

export default CURRENCY;
