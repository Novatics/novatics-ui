import { render } from '@testing-library/react';

import TextareaAutosize from './textarea-autosize';

describe('TextareaAutosize', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextareaAutosize />);
    expect(baseElement).toBeTruthy();
  });
});
