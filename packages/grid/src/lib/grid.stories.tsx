import { Story, Meta } from '@storybook/react';
import { Grid, GridProps } from './grid';

export default {
  component: Grid,
  title: 'Grid',
} as Meta;

const Template: Story<GridProps> = (args) => <Grid {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
