import { render } from '@testing-library/react';

import ScopedCssBaseline from './scoped-css-baseline';

describe('ScopedCssBaseline', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScopedCssBaseline />);
    expect(baseElement).toBeTruthy();
  });
});
