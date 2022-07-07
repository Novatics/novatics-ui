import { render } from '@testing-library/react';

import FormHelperText from './form-helper-text';

describe('FormHelperText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormHelperText />);
    expect(baseElement).toBeTruthy();
  });
});
