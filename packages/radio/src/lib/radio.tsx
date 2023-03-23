import { deepmerge } from '@mui/utils';
import MuiRadio, { RadioProps as MuiRadioProps } from '@mui/material/Radio';
import { styled } from '@novatics/styles';

type PropsToOmit =
  | 'disableFocusRipple'
  | 'centerRipple'
  | 'disableTouchRipple'
  | 'focusRipple'
  | 'TouchRippleProps'
  | 'touchRippleRef';
// TODO: How should default Color be handled?
type Color = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

export interface RadioProps extends Omit<MuiRadioProps, PropsToOmit> {
  color?: Color;
  error: boolean;
  checked: boolean;
}

const getRadiusCircleStyle = (color: string) =>
  `radial-gradient(${color},${color} 40%,transparent 44%)`;
const getBorderRadiusCircleStyle = (color: string) => `0 0 0 1.5px ${color}`;

const RadioIcon = styled('span')<{
  colorType: Color;
  error: boolean;
}>(({ colorType, theme: { palette }, error }) => {
  const backgroundColor = palette[colorType].medium || palette[colorType].dark;
  let boxShadowColor = palette.grayScale?.spaceStation || 'black';
  let boxShadowColorHover = palette[colorType].dark || 'black';

  if (error) {
    boxShadowColor = palette.error.main;
    boxShadowColorHover = palette.error.main;
  }

  return {
    borderRadius: '50%',
    width: 16,
    height: 16,
    // Border is set via boxShadow, following MUI example
    boxShadow: getBorderRadiusCircleStyle(boxShadowColor),
    backgroundColor: 'transparent',
    // TODO How should focus be handled?
    '.Mui-focusVisible &': {
      outline: `2px auto ${palette.primary.main}`,
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      boxShadow: getBorderRadiusCircleStyle(boxShadowColorHover),
      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: error ? 'none' : getRadiusCircleStyle(backgroundColor),
        content: '""',
      },
    },
  };
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RadioCheckedIcon = styled(RadioIcon)<{
  colorType: Color;
  error: boolean;
}>(({ colorType, theme: { palette }, error }) => {
  let backgroundColor = palette[colorType].dark;
  let boxShadowColor = palette[colorType].main;
  const boxShadowColorHover = palette.grayScale.spaceStation || 'black';

  if (error) {
    boxShadowColor = palette.error.main;
    backgroundColor = palette.error.main;
  }

  return {
    boxShadow: getBorderRadiusCircleStyle(boxShadowColor),
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: getRadiusCircleStyle(boxShadowColor),
      content: '""',
    },
    'input:disabled ~ &': {
      boxShadow: getBorderRadiusCircleStyle(boxShadowColorHover),
      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        content: '""',
        backgroundImage: getRadiusCircleStyle(boxShadowColorHover),
      },
    },
    'input:hover ~ &': {
      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: getRadiusCircleStyle(backgroundColor),
        content: '""',
      },
    },
  };
});

export const Radio = ({
  color = 'primary',
  error,
  sx,
  ...other
}: RadioProps) => (
  <MuiRadio
    color="default"
    disableFocusRipple
    disableRipple
    disableTouchRipple
    icon={<RadioIcon colorType={color} error={error} />}
    checkedIcon={<RadioCheckedIcon colorType={color} error={error} />}
    sx={deepmerge({ '&:hover': { backgroundColor: 'transparent' } }, sx)}
    {...other}
  />
);

export default Radio;
