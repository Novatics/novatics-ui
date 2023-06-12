import { render } from '@testing-library/react';

import CheckboxField from './checkbox-field';

describe('CheckboxField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CheckboxField />);
    expect(baseElement).toBeTruthy();
  });
});
