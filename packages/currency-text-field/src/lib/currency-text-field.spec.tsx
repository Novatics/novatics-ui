import { render } from '@testing-library/react';

import CurrencyTextField from './currency-text-field';

describe('CurrencyTextField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <CurrencyTextField
        value={0}
        onChange={() => {
          // setup on change
        }}
      />,
    );
    expect(baseElement).toBeTruthy();
  });
});
