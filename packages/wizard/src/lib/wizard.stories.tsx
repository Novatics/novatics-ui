import { ComponentStory, ComponentMeta } from '@storybook/react';
import Wizard from './wizard';

export default {
  component: Wizard,
  title: 'Wizard',
} as ComponentMeta<typeof Wizard>;

const Template: ComponentStory<typeof Wizard> = (args) => <Wizard {...args} />;

const onBack = () => {
  console.log('test BACK');
};

const onNext = () => {
  console.log('test NEXT');
};

export const Primary = Template.bind({});
Primary.args = { onBack: onBack, onNext: onNext };
