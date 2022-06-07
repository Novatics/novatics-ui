import { Story, Meta } from '@storybook/react';
import { NovaticsLogo, NovaticsLogoProps } from './novatics-logo';

export default {
  component: NovaticsLogo,
  title: 'NovaticsLogo',
} as Meta;

const Template: Story<NovaticsLogoProps> = (args) => <NovaticsLogo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
