import { Button } from '@mui/material';

import ActionFooter from './action-footer';

describe('ActionFooter', () => {
  it('should render children successfully', () => {
    cy.mount(
      <ActionFooter spacing={2}>
        <Button variant="outlined" color="primary">
          Click
        </Button>
        <Button variant="contained" color="primary">
          Click
        </Button>
      </ActionFooter>,
    );
    cy.get('button').should('have.lengthOf', 2);
  });
  it('should render actions props successfully', () => {
    cy.mount(
      <ActionFooter
        spacing={2}
        actions={[
          <Button variant="outlined" color="primary">
            Click
          </Button>,
          <Button variant="contained" color="primary">
            Click
          </Button>,
        ]}
      />,
    );
    cy.get('button').should('have.lengthOf', 2);
  });
});
