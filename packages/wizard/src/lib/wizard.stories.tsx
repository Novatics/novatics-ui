import { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Wizard, { WizardProps } from './wizard';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { HeaderProps } from './Header';
import { FooterProps } from './Footer';
//Todo: Test if it works with a form
export default {
  component: Wizard,
  title: 'Wizard',
} as Meta;

function NameForm({ form, setForm }: any) {
  return (
    <Box>
      <TextField
        id="name"
        label="name"
        variant="outlined"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        value={form.name}
      />
    </Box>
  );
}

function Form({
  onNext,
  onBack,
  onFinish,
  isLinear,
  showCompleted,
  TabComponent,
  HeaderComponent,
  ContentComponent,
  FooterComponent,
}: WizardProps) {
  const [form, setForm] = useState({ name: '' });

  const steps = [
    {
      title: '01. Select campaign settings',
      subtitle: 'Subtitle',
      content: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
      disabled: false,
    },
    {
      title: '02. Create an ad group',
      subtitle: 'Subtitle with more text',
      content: <NameForm form={form} setForm={setForm} />,
      disabled: false,
    },
    {
      title: '03. Create an ad',
      subtitle: 'You can write some cool information stuff here',
      content: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
      disabled: true,
    },
  ];

  return (
    <Wizard
      onNext={onNext}
      onBack={onBack}
      onFinish={onFinish}
      steps={steps}
      isLinear={isLinear}
      showCompleted={showCompleted}
      TabComponent={TabComponent}
      HeaderComponent={HeaderComponent}
      ContentComponent={ContentComponent}
      FooterComponent={FooterComponent}
    />
  );
}

const onBack = () => {
  // onBack stuff
  console.log('onBack');
};

const onNext = () => {
  // onNext stuff
  console.log('onNext');
};

const onFinish = () => {
  // onFinish stuff
  console.log('onFinish');
};

const TabOverride = (props: any) => {
  return <div>tab {props.step.title}</div>;
};

const HeaderOverride = ({ step }: HeaderProps) => {
  return <div>HEADER {step.title}</div>;
};

export interface Content {
  content: React.ReactNode | string;
}

const ContentOverride = ({ content }: Content) => {
  return <div>{content}</div>;
};

const FooterOverride = ({
  handleBack,
  handleNext,
  handleFinish,
  isFirst = false,
  isLast = false,
}: FooterProps) => {
  return <div>Footer</div>;
};

const Template: Story<WizardProps> = (args) => {
  return <Form {...args} onBack={onBack} onNext={onNext} onFinish={onFinish} />;
};

export const Linear = Template.bind({});
Linear.args = {
  isLinear: true,
};

export const NonLinear = Template.bind({});
NonLinear.args = {
  isLinear: false,
};

export const ShowCompleted = Template.bind({});
ShowCompleted.args = {
  showCompleted: true,
};

export const ComponentsOverride = Template.bind({});
ComponentsOverride.args = {
  TabComponent: TabOverride,
  HeaderComponent: HeaderOverride,
  FooterComponent: FooterOverride,
  ContentComponent: ContentOverride,
};

export const DisabledTab = Template.bind({});
DisabledTab.args = {};
