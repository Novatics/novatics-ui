import { Story, Meta } from '@storybook/react';
import { Portal, PortalProps } from './portal';

export default {
  component: Portal,
  title: 'Portal',
} as Meta;

const Template: Story<PortalProps> = (args) => <Portal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
