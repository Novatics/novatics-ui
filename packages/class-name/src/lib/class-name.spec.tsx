import { render } from '@testing-library/react';

import ClassName from './class-name';

describe('ClassName', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClassName />);
    expect(baseElement).toBeTruthy();
  });
});
