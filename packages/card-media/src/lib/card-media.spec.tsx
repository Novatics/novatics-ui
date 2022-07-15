import { render } from '@testing-library/react';

import CardMedia from './card-media';

describe('CardMedia', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardMedia />);
    expect(baseElement).toBeTruthy();
  });
});
