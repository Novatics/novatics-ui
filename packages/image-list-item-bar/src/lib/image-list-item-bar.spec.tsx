import { render } from '@testing-library/react';

import ImageListItemBar from './image-list-item-bar';

describe('ImageListItemBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImageListItemBar />);
    expect(baseElement).toBeTruthy();
  });
});
