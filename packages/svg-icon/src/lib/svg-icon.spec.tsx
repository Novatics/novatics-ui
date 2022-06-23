import { render } from '@testing-library/react';

import SvgIcon from './svg-icon';

describe('SvgIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SvgIcon />);
    expect(baseElement).toBeTruthy();
  });
});
