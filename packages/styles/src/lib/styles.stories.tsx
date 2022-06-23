import { Story, Meta } from '@storybook/react';
import { Styles, StylesProps } from './styles';

export default {
  component: Styles,
  title: 'Styles',
} as Meta;

const Template: Story<StylesProps> = (args) => <Styles {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
