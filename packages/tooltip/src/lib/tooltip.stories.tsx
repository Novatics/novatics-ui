import { Story, Meta } from '@storybook/react';
import { Tooltip, TooltipProps } from './tooltip';

export default {
  component: Tooltip,
  title: 'Tooltip',
} as Meta;

const Template: Story<TooltipProps> = (args) => <Tooltip {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
