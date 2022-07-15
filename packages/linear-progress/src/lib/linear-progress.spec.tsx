import { render } from '@testing-library/react';

import LinearProgress from './linear-progress';

describe('LinearProgress', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LinearProgress />);
    expect(baseElement).toBeTruthy();
  });
});
