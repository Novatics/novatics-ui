import { render } from '@testing-library/react';

import UsePagination from './use-pagination';

describe('UsePagination', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UsePagination />);
    expect(baseElement).toBeTruthy();
  });
});
