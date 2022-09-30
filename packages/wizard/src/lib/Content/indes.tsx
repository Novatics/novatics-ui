import {ContentProps} from '../types'

const Content = ({ step, ComponentOverride }: ContentProps) => {
  if(step?.components?.Content){
    return step.components.Content({step})
  }

  if (ComponentOverride) {
    return <ComponentOverride step={step} />;
  }

  return <div>{step.content}</div>;
};

export default Content;
