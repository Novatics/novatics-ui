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
    value={100}
    outputFormat={'float'}
    onChange={(value: String) => {
      console.log('value', typeof value);
    }}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
