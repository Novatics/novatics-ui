import { render } from '@testing-library/react';

import FormControlLabel from './form-control-label';

describe('FormControlLabel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormControlLabel />);
    expect(baseElement).toBeTruthy();
  });
});
