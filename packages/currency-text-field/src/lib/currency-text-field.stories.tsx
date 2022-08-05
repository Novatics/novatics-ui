import { Story, Meta } from '@storybook/react';
import { CurrencyNames } from '../currency/currency';
import {
  CurrencyTextField,
  CurrencyTextFieldProps,
} from './currency-text-field';

export default {
  component: CurrencyTextField,
  title: 'CurrencyTextField',
  argTypes: {
    value: {
      description: 'The Value of the input',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
    },
    currency: {
      description: 'The currency preset value',
      table: {
        type: { summary: 'CurrencyNames' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'select',
        options: CurrencyNames,
      },
    },
  },
} as Meta;

const Template: Story<CurrencyTextFieldProps> = (args) => (
  <CurrencyTextField
    value={args.value}
    onChange={() => {
      // setup implementation onChange
    }}
    currency={args.currency}
    outputFormat={args.outputFormat}
    symbolFirst={args.symbolFirst}
    currencyProps={args.currencyProps}
  />
);

export const Primary = Template.bind({});
Primary.args = {
  value: 123,
  outputFormat: 'string',
  symbolFirst: true,
  currencyProps: {
    symbol: '',
    separator: '.',
    precision: 2,
    decimal: ',',
    useVedic: false,
  },
};
