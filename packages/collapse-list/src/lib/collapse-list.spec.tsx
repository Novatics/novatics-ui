import { render } from '@testing-library/react';

import CollapseList from './collapse-list';

describe('CollapseList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CollapseList />);
    expect(baseElement).toBeTruthy();
  });
});
