import { render } from '@testing-library/react';

import StepLabel from './step-label';

describe('StepLabel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StepLabel />);
    expect(baseElement).toBeTruthy();
  });
});
