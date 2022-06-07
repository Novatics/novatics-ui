import { render } from '@testing-library/react';

import NovaticsLogo from './novatics-logo';

describe('NovaticsLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NovaticsLogo />);
    expect(baseElement).toBeTruthy();
  });
});
