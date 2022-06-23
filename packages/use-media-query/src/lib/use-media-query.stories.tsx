import { Story, Meta } from '@storybook/react';
import { UseMediaQuery, UseMediaQueryProps } from './use-media-query';

export default {
  component: UseMediaQuery,
  title: 'UseMediaQuery',
} as Meta;

const Template: Story<UseMediaQueryProps> = (args) => (
  <UseMediaQuery {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
