import { render } from '@testing-library/react';

import SpeedDial from './speed-dial';

describe('SpeedDial', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SpeedDial />);
    expect(baseElement).toBeTruthy();
  });
});
