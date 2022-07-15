import { render } from '@testing-library/react';

import CurrencyTextField from './currency-text-field';

describe('CurrencyTextField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CurrencyTextField />);
    expect(baseElement).toBeTruthy();
  });
});
