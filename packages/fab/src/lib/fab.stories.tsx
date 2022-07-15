import { Story, Meta } from '@storybook/react';
import { Fab, FabProps } from './fab';

export default {
  component: Fab,
  title: 'Fab',
} as Meta;

const Template: Story<FabProps> = (args) => <Fab {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
