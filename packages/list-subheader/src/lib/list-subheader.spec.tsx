import { render } from '@testing-library/react';

import ListSubheader from './list-subheader';

describe('ListSubheader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListSubheader />);
    expect(baseElement).toBeTruthy();
  });
});
