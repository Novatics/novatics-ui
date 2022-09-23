import React from 'react';

export interface ComponentOverrideProps {
  content: React.ReactNode | string;
}

export interface ContentProps {
  content: React.ReactNode | string;
  ComponentOverride: React.FC<ComponentOverrideProps>;
}

const Content = ({ content, ComponentOverride }: ContentProps) => {
  if (ComponentOverride) {
    return <ComponentOverride content={content} />;
  }

  return content;
};

export default Content;
