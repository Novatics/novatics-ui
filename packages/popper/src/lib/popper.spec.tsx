import { render } from '@testing-library/react';

import Popper from './popper';

describe('Popper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Popper />);
    expect(baseElement).toBeTruthy();
  });
});
