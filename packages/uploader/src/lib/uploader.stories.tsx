import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Uploader } from './uploader';

export default {
  component: Uploader,
  title: 'Uploader',
} as ComponentMeta<typeof Uploader>;

const Template: ComponentStory<typeof Uploader> = (args) => (
  <Uploader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
