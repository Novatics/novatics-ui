import { render } from '@testing-library/react';

import SnackbarContent from './snackbar-content';

describe('SnackbarContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SnackbarContent />);
    expect(baseElement).toBeTruthy();
  });
});
