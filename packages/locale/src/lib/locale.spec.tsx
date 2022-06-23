import { render } from '@testing-library/react';

import Locale from './locale';

describe('Locale', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Locale />);
    expect(baseElement).toBeTruthy();
  });
});
