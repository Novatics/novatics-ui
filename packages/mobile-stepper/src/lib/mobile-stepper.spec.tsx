import { render } from '@testing-library/react';

import MobileStepper from './mobile-stepper';

describe('MobileStepper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MobileStepper />);
    expect(baseElement).toBeTruthy();
  });
});
