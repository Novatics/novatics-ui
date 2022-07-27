import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MaskedTextField } from './masked-text-field';

export default {
  component: MaskedTextField,
  title: 'MaskedTextField',
} as ComponentMeta<typeof MaskedTextField>;

const Template: ComponentStory<typeof MaskedTextField> = (args) => (
  <MaskedTextField {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
