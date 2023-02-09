import { deepmerge } from '@mui/utils';
import MuiRadio, { RadioProps as MuiRadioProps } from '@mui/material/Radio';
import { styled } from '@novatics/styles';

type PropsToOmit = 'disableFocusRipple' | 'centerRipple' | 'disableTouchRipple' | 'focusRipple' | 'TouchRippleProps' | 'touchRippleRef';
// TODO: How should default Color be handled?
type Color = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

export interface RadioProps extends Omit<MuiRadioProps, PropsToOmit> {
  color?: Color;
  error: boolean;
  checked: boolean;
}

const getRadiusCircleStyle = (color: string) => `radial-gradient(${color},${color} 40%,transparent 44%)`;
const getBorderRadiusCircleStyle = (color: string) => `0 0 0 1.5px ${color}`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RadioIcon = styled('span')(({ colorType, theme, error }: { colorType: Color; theme?: any; error: boolean; }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  // Border is set via boxShadow, following MUI example
  boxShadow: getBorderRadiusCircleStyle(error ? theme.palette.error.main : theme.palette.grayScale.spaceStation),
  backgroundColor: 'transparent',
  // TODO How should focus be handled?
  '.Mui-focusVisible &': {
    outline: `2px auto ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    boxShadow: getBorderRadiusCircleStyle(error ? theme.palette.error.main : theme.palette[colorType].dark),

    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: error ? 'none' : getRadiusCircleStyle(theme.palette[colorType].medium || theme.palette[colorType].dark),
      content: '""',
    },
  },
}));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RadioCheckedIcon = styled(RadioIcon)(({ colorType, theme, error }: { colorType: Color; theme?: any; error: boolean; }) => ({
  boxShadow: getBorderRadiusCircleStyle(error ? theme.palette.error.main : theme.palette[colorType].main),
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: getRadiusCircleStyle(error ? theme.palette.error.main : theme.palette[colorType].main),
    content: '""',
  },
  'input:disabled ~ &': {
    boxShadow: getBorderRadiusCircleStyle(theme.palette.grayScale.spaceStation),
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      content: '""',
      backgroundImage: getRadiusCircleStyle(theme.palette.grayScale.spaceStation),
    },
  },
  'input:hover ~ &': {
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: getRadiusCircleStyle(error ? theme.palette.error.main : theme.palette[colorType].dark),
      content: '""',
    },
  },
}));



export const Radio = ({ color = "primary", error, sx, ...other }: RadioProps) => (
  <MuiRadio
    color="default"
    disableFocusRipple
    disableRipple
    disableTouchRipple
    icon={<RadioIcon colorType={color} error={error} />}
    checkedIcon={<RadioCheckedIcon colorType={color} error={error} />}
    sx={deepmerge({ '&:hover': { backgroundColor: 'transparent' } }, sx)}
    {...other} />
);

export default Radio;
