import { ContentProps } from '../types';

const Content = ({ step, ComponentOverride }: ContentProps) => {
  const { components, ...others } = step;

  if (components?.Content) {
    return components.Content({ step: others });
  }

  if (ComponentOverride) {
    return <ComponentOverride step={step} />;
  }

  return <div>{step.content}</div>;
};

export default Content;
