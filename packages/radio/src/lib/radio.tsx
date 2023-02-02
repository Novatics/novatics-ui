import { deepmerge } from '@mui/utils';
import MuiRadio, { RadioProps as MuiRadioProps } from '@mui/material/Radio';
import { styled } from '@mui/material/styles';

export interface RadioProps extends MuiRadioProps {
  error: boolean;
  checked: boolean;
}

const getRadiusCircleStyle = (color: string) => `radial-gradient(${color},${color} 40%,transparent 44%)`;
const getBorderRadiusCircleStyle = (color: string) => `0 0 0 1.5px ${color}`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RadioIcon = styled('span')(({ theme, error }: { theme?: any; error: boolean; }) => {
  const defaultBorderColor = theme.palette.mode === 'dark' ? theme.palette.grayScale.supernova : theme.palette.grayScale.spaceStation;
  const defaultHoverColor = theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.dark;
  const errorColor = theme.palette.error.main;

  return ({
    borderRadius: '50%',
    width: 16,
    height: 16,
    // Border is set via boxShadow, following MUI example
    boxShadow: getBorderRadiusCircleStyle(error ? errorColor : defaultBorderColor),
    backgroundColor: 'transparent',
    // TODO How should focus be handled?
    '.Mui-focusVisible &': {
      outline: `2px auto ${theme.palette.primary.main}`,
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      boxShadow: getBorderRadiusCircleStyle(error ? errorColor : defaultHoverColor),

      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: error ? 'none' : getRadiusCircleStyle(theme.palette.primary.medium),
        content: '""',
      },
    },
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RadioCheckedIcon = styled(RadioIcon)(({ theme, error }: { theme?: any; error: boolean; }) => {
  const fillColor = theme.palette.mode === 'dark' ? theme.palette.primary.medium : theme.palette.primary.main;
  const disabledFillColor = theme.palette.mode === 'dark' ? theme.palette.grayScale.supernova : theme.palette.grayScale.spaceStation;
  const hoverFilledColor = theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.dark;
  const errorColor = theme.palette.error.main;

  return ({
    boxShadow: getBorderRadiusCircleStyle(error ? errorColor : fillColor),
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: getRadiusCircleStyle(error ? errorColor : fillColor),
      content: '""',
    },
    'input:disabled ~ &': {
      boxShadow: getBorderRadiusCircleStyle(disabledFillColor),
      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        content: '""',
        backgroundImage: getRadiusCircleStyle(disabledFillColor),
      },
    },
    'input:hover ~ &': {
      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: getRadiusCircleStyle(error ? errorColor : hoverFilledColor),
        content: '""',
      },
    },
  });
});



export function Radio(props: RadioProps) {
  const { error, sx, ...other } = props;

  return <MuiRadio
    color="default"
    disableFocusRipple
    disableRipple
    disableTouchRipple
    icon={<RadioIcon error={!!error} />}
    checkedIcon={<RadioCheckedIcon error={!!error} />}
    sx={deepmerge({ '&:hover': { backgroundColor: 'transparent' } }, sx)}
    {...other}
  />;
}

export default Radio;
