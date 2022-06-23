import { render } from '@testing-library/react';

import Internal from './internal';

describe('Internal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Internal />);
    expect(baseElement).toBeTruthy();
  });
});
