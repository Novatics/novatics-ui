import { render } from '@testing-library/react';

import UseTouchRipple from './use-touch-ripple';

describe('UseTouchRipple', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseTouchRipple />);
    expect(baseElement).toBeTruthy();
  });
});
