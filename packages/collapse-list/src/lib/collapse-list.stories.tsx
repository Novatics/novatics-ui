import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CollapseList } from './collapse-list';

export default {
  component: CollapseList,
  title: 'CollapseList',
} as ComponentMeta<typeof CollapseList>;

const Template: ComponentStory<typeof CollapseList> = (args) => (
  <div style={{ maxWidth: '150px' }}>
    <CollapseList {...args} labels={['oi', 'tchau', 'oi', 'tchau', 'oi', 'tchau', 'oi', 'tchau','oi', 'tchau']} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
