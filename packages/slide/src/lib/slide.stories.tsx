import { Story, Meta } from '@storybook/react';
import { Slide, SlideProps } from './slide';

export default {
  component: Slide,
  title: 'Slide',
} as Meta;

const Template: Story<SlideProps> = (args) => <Slide {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
