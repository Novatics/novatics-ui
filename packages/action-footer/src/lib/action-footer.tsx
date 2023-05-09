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

  return (
    <Stack
      component='footer'
      direction="row"
      spacing={2}
      justifyContent={justifyContent}
      alignItems="center"
      {...props}
    >
      {children || action.map((action) => action)}
    </Stack>
  );
}

export default ActionFooter;
