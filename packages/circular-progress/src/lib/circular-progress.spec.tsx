import { render } from '@testing-library/react';

import CircularProgress from './circular-progress';

describe('CircularProgress', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CircularProgress />);
    expect(baseElement).toBeTruthy();
  });
});
