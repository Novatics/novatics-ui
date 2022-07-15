import { render } from '@testing-library/react';

import ListItemAvatar from './list-item-avatar';

describe('ListItemAvatar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListItemAvatar />);
    expect(baseElement).toBeTruthy();
  });
});
