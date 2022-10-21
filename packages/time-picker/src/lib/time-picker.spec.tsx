import { render } from '@testing-library/react';

import TimePicker from './time-picker';

describe('TimePicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TimePicker />);
    expect(baseElement).toBeTruthy();
  });
});
