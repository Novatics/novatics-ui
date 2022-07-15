import { Story, Meta } from '@storybook/react';
import { NoSsr, NoSsrProps } from './no-ssr';

export default {
  component: NoSsr,
  title: 'NoSsr',
} as Meta;

const Template: Story<NoSsrProps> = (args) => <NoSsr {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
