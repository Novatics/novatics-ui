import React from 'react';
import isEmpty from 'lodash.isempty';
import { Stack, StackProps } from '@mui/material';

export interface ActionFooterProps extends StackProps {
  contentPosition?: 'space-between' | 'end' | 'start' | 'center';
  children?: React.ReactNode;
  actions?: React.ReactNode[];
}

export function ActionFooter({
  actions,
  contentPosition = 'end',
  children,
  ...props
}: ActionFooterProps) {
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
    if (actions && !isEmpty(actions)) {
      return React.Children.toArray(actions);
    }
    return [];
  }, [children, actions]);

  return (
    <Stack
      component="footer"
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
