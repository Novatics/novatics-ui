import { Story, Meta } from '@storybook/react';
import { DateTimePicker, DateTimePickerProps } from './date-time-picker';

export default {
  component: DateTimePicker,
  title: 'DateTimePicker',
} as Meta;

const Template: Story<DateTimePickerProps> = (args) => (
  <DateTimePicker {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
