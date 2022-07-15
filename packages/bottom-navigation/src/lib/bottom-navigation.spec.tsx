import { render } from '@testing-library/react';

import BottomNavigation from './bottom-navigation';

describe('BottomNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BottomNavigation />);
    expect(baseElement).toBeTruthy();
  });
});
