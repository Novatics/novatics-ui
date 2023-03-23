import { CreateStyled } from '@emotion/styled';
import {
  styled as MUIStyled,
  CreateMUIStyled,
  Theme,
} from '@mui/material/styles';

export const transientOptions: Parameters<CreateStyled>[1] = {
  shouldForwardProp: (propName: string) => !propName.startsWith('$'),
};

export const styled: CreateMUIStyled<Theme> = (
  component: Parameters<typeof MUIStyled>['0'],
  options: Parameters<typeof MUIStyled>['1']
) => MUIStyled(component, { ...transientOptions, ...options });
