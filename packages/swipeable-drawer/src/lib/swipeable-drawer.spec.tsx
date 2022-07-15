import { render } from '@testing-library/react';

import SwipeableDrawer from './swipeable-drawer';

describe('SwipeableDrawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SwipeableDrawer />);
    expect(baseElement).toBeTruthy();
  });
});
