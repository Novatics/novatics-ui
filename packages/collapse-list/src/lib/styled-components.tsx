import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const Container = styled(Box, {
  name: 'NuiCollapseList',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [styles.root];
  },
})((props) => {
  console.log('props', props);
  return {
    position: 'relative',
  };
});
