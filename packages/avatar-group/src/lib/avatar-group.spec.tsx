import { render } from '@testing-library/react';

import AvatarGroup from './avatar-group';

describe('AvatarGroup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AvatarGroup />);
    expect(baseElement).toBeTruthy();
  });
});
