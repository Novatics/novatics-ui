import { deepmerge } from '@mui/utils';
import MuiRadio, { RadioProps as MuiRadioProps } from '@mui/material/Radio';
import { styled } from '@novatics/styles';

type PropsToOmit = 'disableFocusRipple' | 'centerRipple' | 'disableTouchRipple' | 'focusRipple' | 'TouchRippleProps' | 'touchRippleRef';

export interface RadioProps extends Omit<MuiRadioProps, PropsToOmit> {
  error: boolean;
  checked: boolean;
}

const getRadiusCircleStyle = (color: string) => `radial-gradient(${color},${color} 40%,transparent 44%)`;
const getBorderRadiusCircleStyle = (color: string) => `0 0 0 1.5px ${color}`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RadioIcon = styled('span')(({ theme, error }: { theme?: any; error: boolean; }) => ({
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
    boxShadow: getBorderRadiusCircleStyle(error ? theme.palette.error.main : theme.palette.primary.dark),

    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: error ? 'none' : getRadiusCircleStyle(theme.palette.primary.medium),
      content: '""',
    },
  },
}));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RadioCheckedIcon = styled(RadioIcon)(({ theme, error }: { theme?: any; error: boolean; }) => ({
  boxShadow: getBorderRadiusCircleStyle(error ? theme.palette.error.main : theme.palette.primary.main),
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: getRadiusCircleStyle(error ? theme.palette.error.main : theme.palette.primary.main),
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
      backgroundImage: getRadiusCircleStyle(error ? theme.palette.error.main : theme.palette.primary.dark),
      content: '""',
    },
  },
}));



export function Radio(props: RadioProps) {
  const { error, sx, ...other } = props;

  return <MuiRadio
    color="default"
    disableFocusRipple
    disableRipple
    disableTouchRipple
    icon={<RadioIcon error={error} />}
    checkedIcon={<RadioCheckedIcon error={error} />}
    sx={deepmerge({ '&:hover': { backgroundColor: 'transparent' } }, sx)}
    {...other}
  />;
}

export default Radio;
