import { render } from '@testing-library/react';

import BottomNavigationAction from './bottom-navigation-action';

describe('BottomNavigationAction', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BottomNavigationAction />);
    expect(baseElement).toBeTruthy();
  });
});
