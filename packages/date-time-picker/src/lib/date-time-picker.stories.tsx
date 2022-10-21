import React from 'react';
import { Story, Meta } from '@storybook/react';
import { DateTimePicker, DateTimePickerProps } from './date-time-picker';
import { DatePicker } from './date-picker';

export default {
  component: DateTimePicker,
  title: 'DateTimePicker',
} as Meta;

const Template: Story<DateTimePickerProps> = (args) => (
  <>
    <DatePicker date={null} {...args} />
    <DateTimePicker {...args} />
  </>
);

export const Primary = Template.bind({});
Primary.args = {};
