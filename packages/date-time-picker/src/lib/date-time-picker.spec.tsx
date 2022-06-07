import { render } from '@testing-library/react';

import DateTimePicker from './date-time-picker';

describe('DateTimePicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DateTimePicker />);
    expect(baseElement).toBeTruthy();
  });
});
