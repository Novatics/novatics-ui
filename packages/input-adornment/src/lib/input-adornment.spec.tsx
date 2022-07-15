import { render } from '@testing-library/react';

import InputAdornment from './input-adornment';

describe('InputAdornment', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InputAdornment />);
    expect(baseElement).toBeTruthy();
  });
});
