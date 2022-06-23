import { Story, Meta } from '@storybook/react';
import { Transitions, TransitionsProps } from './transitions';

export default {
  component: Transitions,
  title: 'Transitions',
} as Meta;

const Template: Story<TransitionsProps> = (args) => <Transitions {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
