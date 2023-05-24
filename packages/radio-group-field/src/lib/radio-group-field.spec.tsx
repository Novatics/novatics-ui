import { render } from '@testing-library/react';

import RadioGroupField from './radio-group-field';

describe('RadioGroupField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RadioGroupField />);
    expect(baseElement).toBeTruthy();
  });
});
