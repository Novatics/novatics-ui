import { render } from '@testing-library/react';

import SpeedDialIcon from './speed-dial-icon';

describe('SpeedDialIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SpeedDialIcon />);
    expect(baseElement).toBeTruthy();
  });
});
