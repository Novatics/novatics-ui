import { render } from '@testing-library/react';

import StepButton from './step-button';

describe('StepButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StepButton />);
    expect(baseElement).toBeTruthy();
  });
});
