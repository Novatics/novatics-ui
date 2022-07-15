import { render } from '@testing-library/react';

import TabScrollButton from './tab-scroll-button';

describe('TabScrollButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TabScrollButton />);
    expect(baseElement).toBeTruthy();
  });
});
