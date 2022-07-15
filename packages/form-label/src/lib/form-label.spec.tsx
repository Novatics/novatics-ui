import { render } from '@testing-library/react';

import FormLabel from './form-label';

describe('FormLabel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormLabel />);
    expect(baseElement).toBeTruthy();
  });
});
