import { render } from '@testing-library/react';

import ActionFooter from './action-footer';

describe('ActionFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ActionFooter />);
    expect(baseElement).toBeTruthy();
  });
});
