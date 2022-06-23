import { Story, Meta } from '@storybook/react';
import { ClassName, ClassNameProps } from './class-name';

export default {
  component: ClassName,
  title: 'ClassName',
} as Meta;

const Template: Story<ClassNameProps> = (args) => <ClassName {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
