import { render } from '@testing-library/react';

import StepContent from './step-content';

describe('StepContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StepContent />);
    expect(baseElement).toBeTruthy();
  });
});
