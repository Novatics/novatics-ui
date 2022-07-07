import { Story, Meta } from '@storybook/react';
import { Zoom, ZoomProps } from './zoom';

export default {
  component: Zoom,
  title: 'Zoom',
} as Meta;

const Template: Story<ZoomProps> = (args) => <Zoom {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
