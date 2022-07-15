import { render } from '@testing-library/react';

import AlertTitle from './alert-title';

describe('AlertTitle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AlertTitle />);
    expect(baseElement).toBeTruthy();
  });
});
