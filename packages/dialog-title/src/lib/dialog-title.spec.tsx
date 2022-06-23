import { render } from '@testing-library/react';

import DialogTitle from './dialog-title';

describe('DialogTitle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DialogTitle />);
    expect(baseElement).toBeTruthy();
  });
});
