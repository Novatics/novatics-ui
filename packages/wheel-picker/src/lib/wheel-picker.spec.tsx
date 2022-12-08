import { render } from '@testing-library/react';

import WheelPicker from './wheel-picker';

describe('WheelPicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WheelPicker />);
    expect(baseElement).toBeTruthy();
  });
});
