import { execSync } from 'child_process';

const COMPONENTS = [
  'Accordion',
  'AccordionActions',
  'AccordionDetails',
  'AccordionSummary',
  'Alert',
  'AlertTitle',
  'AppBar',
  'Autocomplete',
  'Avatar',
  'AvatarGroup',
  'Backdrop',
  'Badge',
  'BottomNavigation',
  'BottomNavigationAction',
  'Box',
  'Breadcrumbs',
  // 'Button',
  'ButtonBase',
  'ButtonGroup',
  'Card',
  'CardActionArea',
  'CardActions',
  'CardContent',
  'CardHeader',
  'CardMedia',
  'Checkbox',
  'Chip',
  'CircularProgress',
  'ClickAwayListener',
  'Collapse',
  'Container',
  'CssBaseline',
  'Dialog',
  'DialogActions',
  'DialogContent',
  'DialogContentText',
  'DialogTitle',
  'Divider',
  'Drawer',
  'Fab',
  'Fade',
  'FilledInput',
  'FormControl',
  'FormControlLabel',
  'FormGroup',
  'FormHelperText',
  'FormLabel',
  'Grid',
  'Grow',
  'Hidden',
  'Icon',
  'IconButton',
  'ImageList',
  'ImageListItem',
  'ImageListItemBar',
  'Input',
  'InputAdornment',
  'InputBase',
  'InputLabel',
  'LinearProgress',
  'Link',
  'List',
  'ListItem',
  'ListItemAvatar',
  'ListItemButton',
  'ListItemIcon',
  'ListItemSecondaryAction',
  'ListItemText',
  'ListSubheader',
  'Menu',
  'MenuItem',
  'MenuList',
  'MobileStepper',
  // 'Modal',
  'NativeSelect',
  'NoSsr',
  'OutlinedInput',
  'Pagination',
  'PaginationItem',
  'Paper',
  'Popover',
  'Popper',
  'Portal',
  'Radio',
  'RadioGroup',
  'Rating',
  'ScopedCssBaseline',
  'Select',
  'Skeleton',
  'Slide',
  'Slider',
  'Snackbar',
  'SnackbarContent',
  'SpeedDial',
  'SpeedDialAction',
  'SpeedDialIcon',
  'Stack',
  'Step',
  'StepButton',
  'StepConnector',
  'StepContent',
  'StepIcon',
  'StepLabel',
  'Stepper',
  'SvgIcon',
  'SwipeableDrawer',
  'Switch',
  'Tab',
  'Table',
  'TableBody',
  'TableCell',
  'TableContainer',
  'TableFooter',
  'TableHead',
  'TablePagination',
  'TableRow',
  'TableSortLabel',
  'Tabs',
  'TabScrollButton',
  'TextField',
  'TextareaAutosize',
  'ToggleButton',
  'ToggleButtonGroup',
  'Toolbar',
  'Tooltip',
  'Typography',
  'Zoom',
  'GlobalStyles',
];

function main() {
  console.info('Creating components..');
  COMPONENTS.map((component) => {
    console.log(`Creating component ${component}`);
    try {
      execSync(`yarn nx workspace-generator component ${component} --mui`);
      console.info(`Component ${component} sucessfully created`);
    } catch (e) {
      console.error(`Error creating component ${component}`);
      console.error(e);
    }
  });
}

main();