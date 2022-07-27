import { render } from '@testing-library/react';

import MaskedTextField from './masked-text-field';

describe('MaskedTextField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MaskedTextField value={1} onChange={(value) => { console.log(value)}} />);
    expect(baseElement).toBeTruthy();
  });
});
