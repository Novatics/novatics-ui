import { render } from '@testing-library/react';

import Toolbar from './toolbar';

describe('Toolbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Toolbar />);
    expect(baseElement).toBeTruthy();
  });
});
