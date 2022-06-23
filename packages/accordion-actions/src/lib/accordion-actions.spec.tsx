import { render } from '@testing-library/react';

import AccordionActions from './accordion-actions';

describe('AccordionActions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccordionActions />);
    expect(baseElement).toBeTruthy();
  });
});
