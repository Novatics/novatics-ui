import styled from '@emotion/styled';
import Box from '@mui/material/Box';

interface ContainerProps {
    disabled: boolean;
}

export const Container = styled(Box) (({ disabled }: ContainerProps) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '25em',
    cursor:  disabled ? 'no-drop' : 'cursor',
  }))


export const TextContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

