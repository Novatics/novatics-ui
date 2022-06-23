import { render } from '@testing-library/react';

import Transitions from './transitions';

describe('Transitions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Transitions />);
    expect(baseElement).toBeTruthy();
  });
});
