import { render } from '@testing-library/react';

import TablePagination from './table-pagination';

describe('TablePagination', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TablePagination />);
    expect(baseElement).toBeTruthy();
  });
});
