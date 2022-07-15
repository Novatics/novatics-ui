import { render } from '@testing-library/react';

import PaginationItem from './pagination-item';

describe('PaginationItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PaginationItem />);
    expect(baseElement).toBeTruthy();
  });
});
