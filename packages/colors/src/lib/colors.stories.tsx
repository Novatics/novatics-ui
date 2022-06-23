import { Story, Meta } from '@storybook/react';
import { Colors, ColorsProps } from './colors';

export default {
  component: Colors,
  title: 'Colors',
} as Meta;

const Template: Story<ColorsProps> = (args) => <Colors {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
