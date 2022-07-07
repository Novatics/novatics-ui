import { render } from '@testing-library/react';

import ToggleButtonGroup from './toggle-button-group';

describe('ToggleButtonGroup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ToggleButtonGroup />);
    expect(baseElement).toBeTruthy();
  });
});
