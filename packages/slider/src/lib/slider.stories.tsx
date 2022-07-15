import { Story, Meta } from '@storybook/react';
import { Slider, SliderProps } from './slider';

export default {
  component: Slider,
  title: 'Slider',
} as Meta;

const Template: Story<SliderProps> = (args) => <Slider {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
