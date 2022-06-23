import { render } from '@testing-library/react';

import UseAutocomplete from './use-autocomplete';

describe('UseAutocomplete', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseAutocomplete />);
    expect(baseElement).toBeTruthy();
  });
});
