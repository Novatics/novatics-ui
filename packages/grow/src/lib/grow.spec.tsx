import { render } from '@testing-library/react';

import Grow from './grow';

describe('Grow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Grow />);
    expect(baseElement).toBeTruthy();
  });
});
