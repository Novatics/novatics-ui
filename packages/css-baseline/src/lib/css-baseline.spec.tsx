import { render } from '@testing-library/react';

import CssBaseline from './css-baseline';

describe('CssBaseline', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CssBaseline />);
    expect(baseElement).toBeTruthy();
  });
});
