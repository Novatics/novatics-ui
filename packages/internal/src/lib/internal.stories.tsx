import { Story, Meta } from '@storybook/react';
import { Internal, InternalProps } from './internal';

export default {
  component: Internal,
  title: 'Internal',
} as Meta;

const Template: Story<InternalProps> = (args) => <Internal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
