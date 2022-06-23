import { render } from '@testing-library/react';

import FilledInput from './filled-input';

describe('FilledInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FilledInput />);
    expect(baseElement).toBeTruthy();
  });
});
