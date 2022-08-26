import { Story, Meta } from '@storybook/react';
import { CurrencyNames } from '../currency/currency';
import {
  CurrencyTextField,
  CurrencyTextFieldProps,
} from './currency-text-field';

const Template: Story<CurrencyTextFieldProps> = (args) => (
  <CurrencyTextField
    value={args.value}
    onChange={args.onChange}
    currency={args.currency}
    outputFormat={args.outputFormat}
    currencyProps={args.currencyProps}
  />
);

export const Primary = Template.bind({});
Primary.args = {
  onChange: () => {
    // setup implementation
  },
  value: 123,
  currency: 'brl',
  currencyProps: {
    precision: 2,
    decimal: ',',
    separator: '.',
    symbol: '',
    symbolFirst: true,
    useVedic: false,
  },
  outputFormat: 'string',
};

export default {
  component: CurrencyTextField,
  title: 'CurrencyTextField',
  argTypes: {
    onChange: {
      description: 'Input onChange Method.',
      table: {
        type: { summary: null },
        defaultValue: { summary: '() => {}' },
      },
    },
    value: {
      description: 'The Value of the input.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
    },
    currency: {
      description: 'The currency preset value.',
      table: {
        type: { summary: 'CurrencyNames' },
        defaultValue: { summary: 'brl' },
      },
      control: {
        type: 'select',
        options: CurrencyNames,
      },
    },
    currencyProps: {
      description: 'Currency props',
      table: {
        type: { summary: null },
        defaultValue: {
          summary: `precision=2
            decimal=','
            separator='.'
            symbol=''
            symbolFirst=true
            useVedic=false`,
        },
      },
    },
    outputFormat: {
      description: 'The formated value passed to the form input.',
      table: {
        type: { summary: null },
        defaultValue: { summary: 'string' },
      },
    },
  },
} as Meta;
