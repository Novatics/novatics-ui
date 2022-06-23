import { render } from '@testing-library/react';

import ButtonBase from './button-base';

describe('ButtonBase', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonBase />);
    expect(baseElement).toBeTruthy();
  });
});
