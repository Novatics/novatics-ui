import { render } from '@testing-library/react';

import Fab from './fab';

describe('Fab', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Fab />);
    expect(baseElement).toBeTruthy();
  });
});
