import React from 'react';

import { Stack, StackProps } from '@mui/material';

export interface ActionFooterProps extends StackProps {
  contentPosition: 'space-between' | 'end' | 'start' | 'center';
  children?: React.ReactNode;
  action: React.ReactNode[];
}

export function ActionFooter({ action, contentPosition, children, ...props }: ActionFooterProps) {

  const justifyContent = React.useMemo(() => {
    switch (contentPosition) {
      case 'space-between':
        return 'space-between';
      case 'end':
        return 'flex-end';
      case 'start':
        return 'flex-start';
      case 'center':
        return 'center';
      default:
        return 'flex-end';
    }
  }, [contentPosition]);

  const childrenArray = React.useMemo(() => {
    if (children) {
      return React.Children.toArray(children);
    }
    if (action) {
      return React.Children.toArray(action);
    }
    return [];
  }, [children, action]);

  return (
    <Stack
      // should this be footer?
      component='footer'
      direction="row"
      justifyContent={justifyContent}
      alignItems="center"
      {...props}
    >
      {childrenArray}
    </Stack>
  );
}

export default ActionFooter;
