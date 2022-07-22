import { Story, Meta } from '@storybook/react';
import {
  CurrencyTextField,
  CurrencyTextFieldProps,
} from './currency-text-field';

export default {
  component: CurrencyTextField,
  title: 'CurrencyTextField',
} as Meta;

const Template: Story<CurrencyTextFieldProps> = (args) => (
  <CurrencyTextField
    value={args.value}
    outputFormat={args.outputFormat}
    precision={args.precision}
    decimal={args.decimal}
    separator={args.separator}
    symbol={args.symbol}
    startSymbol={args.startSymbol}
    useVedic={args.useVedic}
    onChange={() => {
      // setup implementation onChange
    }}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
