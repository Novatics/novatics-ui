import _capitalize from 'lodash.capitalize';
import _defaults from 'lodash.defaults';
import _omit from 'lodash.omit';
import { unstable_composeClasses as composeClasses } from '@mui/base';
import { useRef, useState, useEffect, MouseEvent } from 'react';
import Stack, { StackProps } from '@mui/material/Stack';
import { useThemeProps } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Popover from '@mui/material/Popover';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import collapseListClasses, {
  getCollapseListUtilityClass,
} from './collapseListClasses';
import { useResizeDetector } from 'react-resize-detector';

import { Container } from './styled-components';

const _excluded = ['children', 'items', 'className', 'direction'];
const _excluded2 = ['root'];

export interface CollapseListProps extends Pick<StackProps, 'direction'> {
  labels: string[];
}

const EXPAND_SIZE = {
  maxHeight: 300,
  minWidth: 120,
  maxWidth: 300,
};

const useUtilityClasses = (ownerState) => {
  const { color, disableElevation, fullWidth, size, variant, classes } =
    ownerState;
  const slots = {
    root: ['root'],
    label: ['label'],
    startIcon: ['startIcon', `iconSize${_capitalize(size)}`],
    endIcon: ['endIcon', `iconSize${_capitalize(size)}`],
  };
  const composedClasses = composeClasses(
    slots,
    getCollapseListUtilityClass,
    classes
  );
  return _defaults(composedClasses, classes);
};

export const CollapseList = (inProps: CollapseListProps) => {
  // props priority: `inProps`  > `themeDefaultProps`
  const props = useThemeProps({ props: inProps, name: 'NuiCollapseList' });

  const {
    children,
    items,
    direction,
    // component = 'button',
    className,
    disabled = false,
  } = props;
  const other = _omit(props, _excluded);

  const ownerState = _defaults(
    {
      items,
      direction,
      className,
      disabled,
    },
    props
  );

  const classes = useUtilityClasses(ownerState);
  // const { root: classesRoot } = _useUtilityClasses;
  // const classes = _omit(_useUtilityClasses, _excluded2);

  // console.log(_useUtilityClasses);

  const containerSize = useResizeDetector();
  const { width: childW, height: childH, ref: childRef } = useResizeDetector();
  const listItemSizer = useResizeDetector({
    // observerOptions: {
    //   box: 'border-box',
    // },
  });

  const { labels, direction = 'row' } = inProps;

  // useEffect(() => {
  //   console.log(listItemSizer);
  // }, [listItemSizer]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [renderedLabels, setRenderedLabels] = useState<string[]>([]);
  const [hiddenLabels, setHiddenLabels] = useState<string[]>(labels);
  const [hitMaxLabels, setHitMaxlabels] = useState<boolean>(false);

  const handleClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    e.preventDefault();
    setAnchorEl(null);
  };

  // useEffect(() => {
  //   if (hiddenLabels.length !== 0 && hiddenLabels.length === labels.length) {
  //     const [head, ...rest] = hiddenLabels;
  //     setHiddenLabels(rest);
  //     setRenderedLabels([...renderedLabels, head]);
  //   }
  // }, [hiddenLabels, labels.length, renderedLabels]);

  // useEffect(() => {
  //   if (renderedLabels.length && ref.current && childRef.current) {
  //     if (ref.current.clientHeight === childRef.current.clientHeight) {
  //       if (!hitMaxLabels && hiddenLabels.length > 1) {
  //         const [head, ...rest] = hiddenLabels;
  //         setHiddenLabels(rest);
  //         setRenderedLabels([...renderedLabels, head]);
  //       }
  //     } else {
  //       if (hitMaxLabels) {
  //         const head = renderedLabels.slice(0, -1);
  //         const [tail] = renderedLabels.slice(-1);
  //         setRenderedLabels([...head]);
  //         setHiddenLabels([tail, ...hiddenLabels]);
  //       } else {
  //         const head = renderedLabels.slice(0, -1);
  //         const [tail] = renderedLabels.slice(-1);
  //         setHiddenLabels([tail, ...hiddenLabels]);
  //         setRenderedLabels([...head]);
  //         setHitMaxlabels(true);
  //       }
  //     }
  //   }
  // }, [hiddenLabels, hitMaxLabels, renderedLabels]);

  return (
    <Container
      className={classes.root}
      ref={containerSize.ref}
      maxHeight={listItemSizer.height}
    >
      <Box overflow="hidden">
        <Stack
          ref={childRef}
          direction={direction}
          alignItems="center"
          spacing={'4px'}
          sx={{ flexWrap: 'wrap' }}
        >
          {labels.map((label) => (
            <Box ref={listItemSizer.ref}>
              <Chip
                label={label}
                variant="outlined"
                size="medium"
                color="default"
              />
            </Box>
          ))}
          {/* {renderedLabels.map((label) => (
            <Chip
              key={label}
              label={label}
              variant="outlined"
              size="small"
              color="default"
            />
          ))}
          {hitMaxLabels ? (
            <>
              <Chip
                key={'label'}
                label={`+${hiddenLabels.length}`}
                variant="outlined"
                size="small"
                color="default"
                clickable
                onClick={handleClick}
              />
              <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
              >
                <Paper>
                  <Box
                    maxHeight={EXPAND_SIZE.maxHeight}
                    minWidth={EXPAND_SIZE.minWidth}
                    maxWidth={EXPAND_SIZE.maxWidth}
                  >
                    <Grid
                      container={true}
                      direction="row"
                      alignItems={'flex-start'}
                      style={{ width: '100%' }}
                      spacing={1}
                      p={2}
                    >
                      {hiddenLabels.map((label) => (
                        <Grid
                          item={true}
                          key={`list-${label}`}
                          style={{ maxWidth: '100%' }}
                        >
                          <Chip
                            key={label}
                            label={label}
                            variant="outlined"
                            size="small"
                            color="default"
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Paper>
              </Popover>
            </>
          ) : null} */}
        </Stack>
      </Box>
    </Container>
  );
};

export default CollapseList;
