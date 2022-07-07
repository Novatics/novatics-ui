import { Story, Meta } from '@storybook/react';
import { Fade, FadeProps } from './fade';

export default {
  component: Fade,
  title: 'Fade',
} as Meta;

const Template: Story<FadeProps> = (args) => <Fade {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
