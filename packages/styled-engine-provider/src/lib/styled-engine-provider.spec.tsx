import { render } from '@testing-library/react';

import StyledEngineProvider from './styled-engine-provider';

describe('StyledEngineProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StyledEngineProvider />);
    expect(baseElement).toBeTruthy();
  });
});
