import { render } from '@testing-library/react';

import TableSortLabel from './table-sort-label';

describe('TableSortLabel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TableSortLabel />);
    expect(baseElement).toBeTruthy();
  });
});
