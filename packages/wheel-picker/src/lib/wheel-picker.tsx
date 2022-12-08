import * as React from 'react';
import { isFragment } from 'react-is';
import {
  unstable_useControlled as useControlled,
  // unstable_ownerDocument as ownerDocument,
  unstable_capitalize as capitalize,
  unstable_useForkRef as useForkRef,
  unstable_generateUtilityClass as generateUtilityClass,

  // refType,
} from '@mui/utils';
import { shouldForwardProp } from '@mui/system';
// import { selectClasses } from '@mui/material';

// import clsx from 'clsx';
// import MuiError from '@mui/utils/macros/MuiError.macro';
import { unstable_composeClasses as composeClasses } from '@mui/base';
// import Menu from '../Menu/Menu';
// import {
//   nativeSelectSelectStyles,
//   nativeSelectIconStyles,
// } from '../NativeSelect/NativeSelectInput';

import { isFilled } from '../../../../utils/isFilled';
import { styled } from '@novatics/styles';
// import { getSelectUtilityClasses } from './selectClasses';

// export function getSelectUtilityClasses(slot: string): string {
//   return generateUtilityClass('MuiSelect', slot);
// }

export function getSelectUtilityClasses(slot) {
  return generateUtilityClass('MuiSelect', slot);
}

// const SelectSelect = styled('div', {
//   name: 'MuiSelect',
//   slot: 'Select',
//   overridesResolver: (props, styles) => {
//     const { ownerState } = props;
//     return [
//       // Win specificity over the input base
//       { [`&.${selectClasses.select}`]: styles.select },
//       { [`&.${selectClasses.select}`]: styles[ownerState.variant] },
//       { [`&.${selectClasses.multiple}`]: styles.multiple },
//     ];
//   },
// })(nativeSelectSelectStyles, {
//   // Win specificity over the input base
//   [`&.${selectClasses.select}`]: {
//     height: 'auto', // Resets for multiple select with chips
//     minHeight: '1.4375em', // Required for select\text-field height consistency
//     textOverflow: 'ellipsis',
//     whiteSpace: 'nowrap',
//     overflow: 'hidden',
//   },
// });

// const SelectIcon = styled('svg', {
//   name: 'MuiSelect',
//   slot: 'Icon',
//   overridesResolver: (props, styles) => {
//     const { ownerState } = props;
//     return [
//       styles.icon,
//       ownerState.variant && styles[`icon${capitalize(ownerState.variant)}`],
//       ownerState.open && styles.iconOpen,
//     ];
//   },
// })(nativeSelectIconStyles);

const SelectNativeInput = styled('input', {
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== 'classes',
  name: 'MuiSelect',
  slot: 'NativeInput',
  overridesResolver: (props, styles) => styles.nativeInput,
})({
  bottom: 0,
  left: 0,
  position: 'absolute',
  opacity: 0,
  pointerEvents: 'none',
  width: '100%',
  boxSizing: 'border-box',
});

function areEqualValues(a, b) {
  if (typeof b === 'object' && b !== null) {
    return a === b;
  }

  // The value could be a number, the DOM will stringify it anyway.
  return String(a) === String(b);
}

// function isEmpty(display) {
//   return display == null || (typeof display === 'string' && !display.trim());
// }

const useUtilityClasses = (ownerState) => {
  const { classes, variant, disabled, multiple, open } = ownerState;

  const slots = {
    select: ['select', variant, disabled && 'disabled', multiple && 'multiple'],
    icon: [
      'icon',
      `icon${capitalize(variant)}`,
      open && 'iconOpen',
      disabled && 'disabled',
    ],
    nativeInput: ['nativeInput'],
  };

  return composeClasses(slots, getSelectUtilityClasses, classes);
};

export const WheelPicker = React.forwardRef(function WheelPicker(props, ref) {
  const {
    // 'aria-describedby': ariaDescribedby,
    // 'aria-label': ariaLabel,
    // autoFocus,
    // autoWidth,
    children,
    // className,
    // defaultOpen,
    defaultValue,
    disabled,
    // displayEmpty,
    // IconComponent,
    // inputRef: inputRefProp,
    // labelId,
    MenuProps = {},
    // multiple,
    name,
    // onBlur,
    onChange,
    // onClose,
    // onFocus,
    // onOpen,
    // open: openProp,
    // readOnly,
    // renderValue,
    SelectDisplayProps = {},
    tabIndex: tabIndexProp,
    // // catching `type` from Input which makes no sense for SelectInput
    // type,
    value: valueProp,
    variant = 'standard',
    ...other
  } = props;

  const [value, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: 'Select',
  });

  const inputRef = React.useRef(null);
  // const displayRef = React.useRef(null);
  // const [displayNode, setDisplayNode] = React.useState(null);
  // const { current: isOpenControlled } = React.useRef(openProp != null);
  // const [menuMinWidthState, setMenuMinWidthState] = React.useState();
  // const handleRef = useForkRef(ref, inputRefProp);

  // const handleDisplayRef = React.useCallback((node) => {
  //   displayRef.current = node;

  //   if (node) {
  //     setDisplayNode(node);
  //   }
  // }, []);

  // React.useImperativeHandle(
  //   handleRef,
  //   () => ({
  //     focus: () => {
  //       displayRef.current.focus();
  //     },
  //     node: inputRef.current,
  //     value,
  //   }),
  //   [value]
  // );

  // Resize menu on `defaultOpen` automatic toggle.
  // React.useEffect(() => {
  //   if (defaultOpen && openState && displayNode && !isOpenControlled) {
  //     setMenuMinWidthState(autoWidth ? null : displayNode.clientWidth);
  //     displayRef.current.focus();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [displayNode, autoWidth]);
  // `isOpenControlled` is ignored because the component should never switch between controlled and uncontrolled modes.
  // `defaultOpen` and `openState` are ignored to avoid unnecessary callbacks.
  // React.useEffect(() => {
  //   if (autoFocus) {
  //     displayRef.current.focus();
  //   }
  // }, [autoFocus]);

  // React.useEffect(() => {
  //   if (!labelId) {
  //     return undefined;
  //   }
  //   const label = ownerDocument(displayRef.current).getElementById(labelId);
  //   if (label) {
  //     const handler = () => {
  //       if (getSelection().isCollapsed) {
  //         displayRef.current.focus();
  //       }
  //     };
  //     label.addEventListener('click', handler);
  //     return () => {
  //       label.removeEventListener('click', handler);
  //     };
  //   }
  //   return undefined;
  // }, [labelId]);

  // const update = (open, event) => {
  //   if (open) {
  //     if (onOpen) {
  //       onOpen(event);
  //     }
  //   } else if (onClose) {
  //     onClose(event);
  //   }

  //   if (!isOpenControlled) {
  //     setMenuMinWidthState(autoWidth ? null : displayNode.clientWidth);
  //     setOpenState(open);
  //   }
  // };

  // const handleMouseDown = (event) => {
  //   // Ignore everything but left-click
  //   if (event.button !== 0) {
  //     return;
  //   }
  //   // Hijack the default focus behavior.
  //   event.preventDefault();
  //   displayRef.current.focus();

  //   update(true, event);
  // };

  // const handleClose = (event) => {
  //   update(false, event);
  // };

  const childrenArray = React.Children.toArray(children);

  // Support autofill.
  const handleChange = (event) => {
    const index = childrenArray
      .map((child) => child.props.value)
      .indexOf(event.target.value);

    if (index === -1) {
      return;
    }

    const child = childrenArray[index];
    setValueState(child.props.value);

    if (onChange) {
      onChange(event, child);
    }
  };

  const handleItemClick = (child) => (event) => {
    const newValue = child.props.value;
    console.log(event);

    // We use the tabindex attribute to signal the available options.
    if (!event.currentTarget.hasAttribute('tabindex')) {
      return;
    }

    if (child.props.onClick) {
      child.props.onClick(event);
    }

    if (value !== newValue) {
      setValueState(newValue);

      if (onChange) {
        // Redefine target to allow name and value to be read.
        // This allows seamless integration with the most popular form libraries.
        // https://github.com/mui/material-ui/issues/13485#issuecomment-676048492
        // Clone the event to not override `target` of the original event.
        const nativeEvent = event.nativeEvent || event;
        const clonedEvent = new nativeEvent.constructor(
          nativeEvent.type,
          nativeEvent
        );

        Object.defineProperty(clonedEvent, 'target', {
          writable: true,
          value: { value: newValue, name },
        });
        onChange(clonedEvent, child);
      }
    }

    // if (!multiple) {
    //   update(false, event);
    // }
  };

  // const handleKeyDown = (event) => {
  //   if (!readOnly) {
  //     const validKeys = [
  //       ' ',
  //       'ArrowUp',
  //       'ArrowDown',
  //       // The native select doesn't respond to enter on macOS, but it's recommended by
  //       // https://www.w3.org/WAI/ARIA/apg/example-index/combobox/combobox-select-only.html
  //       'Enter',
  //     ];

  //     if (validKeys.indexOf(event.key) !== -1) {
  //       event.preventDefault();
  //       update(true, event);
  //     }
  //   }
  // };

  // const open = displayNode !== null && openState;

  // const handleBlur = (event) => {
  //   // if open event.stopImmediatePropagation
  //   if (!open && onBlur) {
  //     // Preact support, target is read only property on a native event.
  //     Object.defineProperty(event, 'target', {
  //       writable: true,
  //       value: { value, name },
  //     });
  //     onBlur(event);
  //   }
  // };

  delete other['aria-invalid'];

  // let display;
  // let displaySingle;
  // const displayMultiple = [];
  // let computeDisplay = false;
  let foundMatch = false;

  // No need to display any value if the field is empty.
  // if (isFilled({ value }) || displayEmpty) {
  //   if (renderValue) {
  //     display = renderValue(value);
  //   } else {
  //     computeDisplay = true;
  //   }
  // }

  const items = childrenArray.map((child, index, arr) => {
    if (!React.isValidElement(child)) {
      return null;
    }

    if (process.env.NODE_ENV !== 'production') {
      if (isFragment(child)) {
        console.error(
          [
            "MUI: The Select component doesn't accept a Fragment as a child.",
            'Consider providing an array instead.',
          ].join('\n')
        );
      }
    }

    // let selected;

    // if (multiple) {
    //   if (!Array.isArray(value)) {
    //     throw new MuiError(
    //       'MUI: The `value` prop must be an array ' +
    //         'when using the `Select` component with `multiple`.'
    //     );
    //   }

    //   selected = value.some((v) => areEqualValues(v, child.props.value));
    //   if (selected && computeDisplay) {
    //     displayMultiple.push(child.props.children);
    //   }
    // } else {
    const selected = areEqualValues(value, child.props.value);
    // if (selected && computeDisplay) {
    //   displaySingle = child.props.children;
    // }
    // }

    if (selected) {
      foundMatch = true;
    }

    if (child.props.value === undefined) {
      return React.cloneElement(child, {
        'aria-readonly': true,
        role: 'option',
      });
    }

    const isFirstSelectableElement = () => {
      if (value) {
        return selected;
      }
      const firstSelectableElement = arr.find(
        (item) => item.props.value !== undefined && item.props.disabled !== true
      );
      if (child === firstSelectableElement) {
        return true;
      }
      return selected;
    };

    return React.cloneElement(child, {
      'aria-selected': selected ? 'true' : 'false',
      onClick: handleItemClick(child),
      // onKeyUp: (event) => {
      //   if (event.key === ' ') {
      //     // otherwise our MenuItems dispatches a click event
      //     // it's not behavior of the native <option> and causes
      //     // the select to close immediately since we open on space keydown
      //     event.preventDefault();
      //   }

      //   if (child.props.onKeyUp) {
      //     child.props.onKeyUp(event);
      //   }
      // },
      role: 'option',
      selected:
        arr[0].props.value === undefined || arr[0].props.disabled === true
          ? isFirstSelectableElement()
          : selected,
      value: undefined, // The value is most likely not a valid HTML attribute.
      'data-value': child.props.value, // Instead, we provide it as a data attribute.
    });
  });

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
      // console.log({
      //   controlled: valueProp,
      //   default: defaultValue,
      //   name: 'Select',
      //   value,

      // });
      if (!foundMatch && value !== '' && value !== undefined) {
        const values = childrenArray.map((child) => child.props.value);
        console.warn(
          [
            `MUI: You have provided an out-of-range value \`${value}\` for the select ${
              name ? `(name="${name}") ` : ''
            }component.`,
            "Consider providing a value that matches one of the available options or ''.",
            `The available values are ${
              values
                .filter((x) => x != null)
                .map((x) => `\`${x}\``)
                .join(', ') || '""'
            }.`,
          ].join('\n')
        );
      }
    }, [foundMatch, childrenArray, name, value]);
  }

  // if (computeDisplay) {
  //   // if (multiple) {
  //   //   if (displayMultiple.length === 0) {
  //   //     display = null;
  //   //   } else {
  //   //     display = displayMultiple.reduce((output, child, index) => {
  //   //       output.push(child);
  //   //       if (index < displayMultiple.length - 1) {
  //   //         output.push(', ');
  //   //       }
  //   //       return output;
  //   //     }, []);
  //   //   }
  //   // } else {
  //   // display = displaySingle;
  //   // }
  // }

  // Avoid performing a layout computation in the render method.
  // let menuMinWidth = menuMinWidthState;

  // if (!autoWidth && isOpenControlled && displayNode) {
  //   menuMinWidth = displayNode.clientWidth;
  // }

  // let tabIndex;
  // if (typeof tabIndexProp !== 'undefined') {
  //   tabIndex = tabIndexProp;
  // } else {
  //   tabIndex = disabled ? null : 0;
  // }

  // const buttonId =
  //   SelectDisplayProps.id ||
  //   (name ? `mui-component-select-${name}` : undefined);

  const ownerState = {
    ...props,
    variant,
    value,
    // open,
  };

  const classes = useUtilityClasses(ownerState);

  return (
    <React.Fragment>
      {/* <SelectSelect
        ref={handleDisplayRef}
        tabIndex={tabIndex}
        role="button"
        aria-disabled={disabled ? 'true' : undefined}
        // aria-expanded={open ? 'true' : 'false'}
        aria-haspopup="listbox"
        aria-label={ariaLabel}
        aria-labelledby={
          [labelId, buttonId].filter(Boolean).join(' ') || undefined
        }
        aria-describedby={ariaDescribedby}
        // onKeyDown={handleKeyDown}
        // onMouseDown={disabled || readOnly ? null : handleMouseDown}
        // onBlur={handleBlur}
        onFocus={onFocus}
        {...SelectDisplayProps}
        ownerState={ownerState}
        className={clsx(
          SelectDisplayProps.className,
          classes.select,
          className
        )}
        // The id is required for proper a11y
        id={buttonId}
        //So the vertical align positioning algorithm kicks in.
      >
        {isEmpty(display) ? (
          // notranslate needed while Google Translate will not fix zero-width space issue
          <span className="notranslate">&#8203;</span>
        ) : (
          display
        )}
      </SelectSelect> */}
      <SelectNativeInput
        value={Array.isArray(value) ? value.join(',') : value}
        name={name}
        ref={inputRef}
        aria-hidden
        onChange={handleChange}
        tabIndex={-1}
        disabled={disabled}
        className={classes.nativeInput}
        // autoFocus={autoFocus}
        // ownerState={ownerState}
        {...other}
      />
      {/* <SelectIcon
        as={IconComponent}
        className={classes.icon}
        ownerState={ownerState}
      /> */}
      <div
        id={`menu-${name || ''}`}
        // anchorEl={displayNode}
        // open={open}
        // onClose={handleClose}
        // anchorOrigin={{
        //   vertical: 'bottom',
        //   horizontal: 'center',
        // }}
        // transformOrigin={{
        //   vertical: 'top',
        //   horizontal: 'center',
        // }}
        {...MenuProps}
        MenuListProps={{
          // 'aria-labelledby': labelId,
          role: 'listbox',
          disableListWrap: true,
          ...MenuProps.MenuListProps,
        }}
        PaperProps={{
          ...MenuProps.PaperProps,
          // style: {
          //   minWidth: menuMinWidth,
          //   ...(MenuProps.PaperProps != null
          //     ? MenuProps.PaperProps.style
          //     : null),
          // },
        }}
      >
        {items}
      </div>
    </React.Fragment>
  );
});
