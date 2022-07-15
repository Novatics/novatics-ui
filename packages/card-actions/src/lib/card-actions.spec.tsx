import { render } from '@testing-library/react';

import CardActions from './card-actions';

describe('CardActions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardActions />);
    expect(baseElement).toBeTruthy();
  });
});
