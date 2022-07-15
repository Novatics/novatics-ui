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
    value={10}
    onChange={(value: String) => {
      console.log('value',value);
    }}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
