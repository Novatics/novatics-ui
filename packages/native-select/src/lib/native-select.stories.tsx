import { Story, Meta } from '@storybook/react';
import { NativeSelect, NativeSelectProps } from './native-select';

export default {
  component: NativeSelect,
  title: 'NativeSelect',
} as Meta;

const Template: Story<NativeSelectProps> = (args) => <NativeSelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
