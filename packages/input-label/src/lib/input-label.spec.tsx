import { render } from '@testing-library/react';

import InputLabel from './input-label';

describe('InputLabel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InputLabel />);
    expect(baseElement).toBeTruthy();
  });
});
