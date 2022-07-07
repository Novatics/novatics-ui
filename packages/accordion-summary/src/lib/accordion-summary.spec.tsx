import { render } from '@testing-library/react';

import AccordionSummary from './accordion-summary';

describe('AccordionSummary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccordionSummary />);
    expect(baseElement).toBeTruthy();
  });
});
