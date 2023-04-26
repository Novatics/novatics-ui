import React from 'react';

export interface ListItemProps {
  status?: 'loading' | 'complete' | 'error';
}

export function ListItem(props: ListItemProps) {
  return <div>list-item</div>;
}
