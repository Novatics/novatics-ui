import { render } from '@testing-library/react';

import DarkScrollbar from './dark-scrollbar';

describe('DarkScrollbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DarkScrollbar />);
    expect(baseElement).toBeTruthy();
  });
});
