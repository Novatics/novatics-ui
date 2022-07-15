import { render } from '@testing-library/react';

import ListItemButton from './list-item-button';

describe('ListItemButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListItemButton />);
    expect(baseElement).toBeTruthy();
  });
});
