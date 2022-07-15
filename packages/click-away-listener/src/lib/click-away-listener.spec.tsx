import { render } from '@testing-library/react';

import ClickAwayListener from './click-away-listener';

describe('ClickAwayListener', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClickAwayListener />);
    expect(baseElement).toBeTruthy();
  });
});
