import { render } from '@testing-library/react';

import StepIcon from './step-icon';

describe('StepIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StepIcon />);
    expect(baseElement).toBeTruthy();
  });
});
