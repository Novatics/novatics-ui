import { styled } from '@mui/system';
import Box from '@mui/material/Box';

interface ContainerProps {
  disabled: boolean;
  showCompleted: boolean;
}

export const Container = styled(Box)<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  white-space: normal;
  cursor: ${({ disabled }) => (disabled ? 'no-drop' : 'cursor')};

  svg {
    opacity: ${({ showCompleted }) => (showCompleted ? '1' : '0')};
  }
`;

export const TextContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
