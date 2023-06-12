import { render } from '@testing-library/react';

import FormGroup from './form-group';

describe('FormGroup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormGroup />);
    expect(baseElement).toBeTruthy();
  });
});
