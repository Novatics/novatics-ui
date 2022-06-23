import { render } from '@testing-library/react';

import Hidden from './hidden';

describe('Hidden', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Hidden />);
    expect(baseElement).toBeTruthy();
  });
});
