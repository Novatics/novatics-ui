import { render } from '@testing-library/react';

import ImageListItem from './image-list-item';

describe('ImageListItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImageListItem />);
    expect(baseElement).toBeTruthy();
  });
});
