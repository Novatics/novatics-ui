import { Story, Meta } from '@storybook/react';
import { SvgIcon, SvgIconProps } from './svg-icon';

export default {
  component: SvgIcon,
  title: 'SvgIcon',
} as Meta;

const Template: Story<SvgIconProps> = (args) => <SvgIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
