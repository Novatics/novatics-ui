import { Story, Meta } from '@storybook/react';
import { AvatarGroup, AvatarGroupProps } from './avatar-group';

export default {
  component: AvatarGroup,
  title: 'AvatarGroup',
} as Meta;

const Template: Story<AvatarGroupProps> = (args) => <AvatarGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
