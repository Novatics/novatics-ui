import { render } from '@testing-library/react';

import AccordionDetails from './accordion-details';

describe('AccordionDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccordionDetails />);
    expect(baseElement).toBeTruthy();
  });
});
