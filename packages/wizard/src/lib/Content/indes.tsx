import {ContentProps} from '../types'

const Content = ({ content, ComponentOverride }: ContentProps) => {
  if (ComponentOverride) {
    return <ComponentOverride content={content} />;
  }

  return <div>{content}</div>;
};

export default Content;
