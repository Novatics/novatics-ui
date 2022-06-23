import { render } from '@testing-library/react';

import UseMediaQuery from './use-media-query';

describe('UseMediaQuery', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseMediaQuery />);
    expect(baseElement).toBeTruthy();
  });
});
