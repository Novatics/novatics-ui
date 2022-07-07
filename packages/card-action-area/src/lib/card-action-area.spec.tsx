import { render } from '@testing-library/react';

import CardActionArea from './card-action-area';

describe('CardActionArea', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardActionArea />);
    expect(baseElement).toBeTruthy();
  });
});
