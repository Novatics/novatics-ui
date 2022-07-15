import { render } from '@testing-library/react';

import NoSsr from './no-ssr';

describe('NoSsr', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NoSsr />);
    expect(baseElement).toBeTruthy();
  });
});
