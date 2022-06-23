import { render } from '@testing-library/react';

import UnstableTrapFocus from './unstable-trap-focus';

describe('UnstableTrapFocus', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UnstableTrapFocus />);
    expect(baseElement).toBeTruthy();
  });
});
