import { render } from '@testing-library/react';

import DialogContentText from './dialog-content-text';

describe('DialogContentText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DialogContentText />);
    expect(baseElement).toBeTruthy();
  });
});
