import { Story, Meta } from '@storybook/react';
import { AlertTitle, AlertTitleProps } from './alert-title';

export default {
  component: AlertTitle,
  title: 'AlertTitle',
} as Meta;

const Template: Story<AlertTitleProps> = (args) => <AlertTitle {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
