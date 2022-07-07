import { render } from '@testing-library/react';

import Zoom from './zoom';

describe('Zoom', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Zoom />);
    expect(baseElement).toBeTruthy();
  });
});
