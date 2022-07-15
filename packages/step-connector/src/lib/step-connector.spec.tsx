import { render } from '@testing-library/react';

import StepConnector from './step-connector';

describe('StepConnector', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StepConnector />);
    expect(baseElement).toBeTruthy();
  });
});
