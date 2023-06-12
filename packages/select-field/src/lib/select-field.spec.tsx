import { render } from '@testing-library/react';

import SelectField from './select-field';

describe('SelectField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SelectField />);
    expect(baseElement).toBeTruthy();
  });
});
