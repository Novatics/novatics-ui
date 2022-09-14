import styled from '@emotion/styled';
import Box from '@mui/material/Box';

export const Container = styled(Box) (({ disabled }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    cursor:  disabled ? 'no-drop' : 'cursor',
  }))


export const TextContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

