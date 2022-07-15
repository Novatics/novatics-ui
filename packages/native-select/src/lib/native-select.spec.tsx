import { render } from '@testing-library/react';

import NativeSelect from './native-select';

describe('NativeSelect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NativeSelect />);
    expect(baseElement).toBeTruthy();
  });
});
