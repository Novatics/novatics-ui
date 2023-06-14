import { Box } from '@mui/material';
import { styled } from '@novatics/styles';
import { FromUrlProps } from '.';

interface FromURLContainerProps extends Pick<FromUrlProps, 'variant'> {
  componentDisabled?: boolean;
}

export const FromURLContainer = styled(Box)<FromURLContainerProps>`
  ${({ variant }) => {
    switch (variant) {
      case 'single':
        return `--border: 1px solid;
                --padding: 24px;`;
      case 'combined':
        return `--border: none;
                --padding: 0;`;
    }
  }}

  display: flex;
  flex-direction: column;
  gap: 8px;
  border: var(--border);
  border-color: ${({ theme: { palette } }) => palette.grey[20]};
  width: fit-content;
  padding: var(--padding);
  min-width: 500px;

  cursor: ${({ componentDisabled }) =>
    componentDisabled ? 'not-allowed' : ''};

  * {
    color: ${({ componentDisabled, theme: { palette } }) =>
      componentDisabled ? palette.grey[35] : ''};
  }

  *[disabled] {
    cursor: not-allowed !important;
    pointer-events: revert !important;
  }
`;
