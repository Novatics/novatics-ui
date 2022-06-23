import { render } from '@testing-library/react';

import UseScrollTrigger from './use-scroll-trigger';

describe('UseScrollTrigger', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseScrollTrigger />);
    expect(baseElement).toBeTruthy();
  });
});
