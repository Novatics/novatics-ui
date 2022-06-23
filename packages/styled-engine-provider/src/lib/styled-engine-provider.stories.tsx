import { Story, Meta } from '@storybook/react';
import {
  StyledEngineProvider,
  StyledEngineProviderProps,
} from './styled-engine-provider';

export default {
  component: StyledEngineProvider,
  title: 'StyledEngineProvider',
} as Meta;

const Template: Story<StyledEngineProviderProps> = (args) => (
  <StyledEngineProvider {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
