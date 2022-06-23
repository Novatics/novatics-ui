import { render } from '@testing-library/react';

import Fade from './fade';

describe('Fade', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Fade />);
    expect(baseElement).toBeTruthy();
  });
});
