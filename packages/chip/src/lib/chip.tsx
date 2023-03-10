import { styled, Theme } from '@novatics/styles';
import MUIChip from '@mui/material/Chip';

type Color =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';
type Size = 'small' | 'medium';

export interface ChipProps {
  label: string;
  onDelete?: () => void;
  onClick?: () => void;
  disabled?: boolean;
  size?: Size;
  variant?: 'filled' | 'outlined';
  color?: Color;
  icon?: any; // Update this to the correct type
}

const getBackgroundColor = (theme: Theme, color?: Color) => {
  switch (color) {
    case 'primary':
    case 'success':
    case 'warning':
    case 'error':
      return theme.palette[color].light;
    case 'info':
      return theme.palette.support.light;
    default:
      return theme.palette.grayScale.newMoon;
  }
};

const getColor = (theme: Theme, color?: Color) => {
  switch (color) {
    case 'primary':
    case 'info':
      return theme.palette[color].main;
    case 'success':
    case 'warning':
    case 'error':
      return theme.palette[color].dark;
    default:
      return theme.palette.grayScale.eclipse;
  }
};

const StyledChip = styled(MUIChip)(({ theme, color }) => ({
  backgroundColor: getBackgroundColor(theme, color),
  color: getColor(theme, color),
  padding: '6px 8px',
  '.MuiChip-label': {
    padding: '0 4px',
  },
  '.MuiChip-icon': {
    height: '1.25rem',
    width: '1.25rem',
    margin: '0 0 0 4px',
  },
  '.MuiChip-deleteIcon': {
    color: getColor(theme, color),
    height: '1.25rem',
    width: '1.25rem',
    margin: '0 0 0 4px',
  },
}));

export function Chip(props: ChipProps) {
  return <StyledChip {...props} />;
}

export default Chip;
