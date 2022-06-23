import { render } from '@testing-library/react';

import ListItemSecondaryAction from './list-item-secondary-action';

describe('ListItemSecondaryAction', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListItemSecondaryAction />);
    expect(baseElement).toBeTruthy();
  });
});
