"use strict";
(self["webpackChunknovatics"] = self["webpackChunknovatics"] || []).push([[5],{

/***/ 96624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "basicUsage": () => (/* binding */ basicUsage),
  "default": () => (/* binding */ checkbox_field_stories),
  "playground": () => (/* binding */ playground),
  "usingFormik": () => (/* binding */ usingFormik)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(89526);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(18380);
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/dist/blocks.mjs
var blocks = __webpack_require__(88843);
// EXTERNAL MODULE: ./node_modules/@storybook/react/dist/index.mjs
var dist = __webpack_require__(70019);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 115 modules
var formik_esm = __webpack_require__(12928);
// EXTERNAL MODULE: ./node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(38882);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(19855);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(50871);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 2 modules
var Button = __webpack_require__(38864);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(33130);
// EXTERNAL MODULE: ./packages/checkbox/src/lib/checkbox.tsx
var lib_checkbox = __webpack_require__(40310);
;// CONCATENATED MODULE: ./packages/checkbox/src/index.ts


// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(42489);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(82500);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(18051);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(9717);
// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var emotion_react_jsx_runtime_browser_esm = __webpack_require__(28179);
;// CONCATENATED MODULE: ./packages/checkbox-field/src/lib/checkbox-field.tsx






var checkbox_field_FormControlLabel = (0,styled/* default */.ZP)(FormControlLabel/* default */.Z)(function (_ref) {
  var theme = _ref.theme;
  return {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    '&.MuiFormControlLabel-root': {
      margin: 0
    }
  };
});
var CheckboxField = function CheckboxField(props) {
  var _props$slotProps;
  var theme = (0,useTheme/* default */.Z)();
  var typographyVariant = props.typography;
  var typographyOverride = typographyVariant ? theme.typography[typographyVariant] : undefined;
  var hasError = Boolean(props.error);
  var color = hasError ? 'error' : undefined;
  var labelPadding = {
    paddingRight: theme.spacing(0.5),
    paddingLeft: theme.spacing(0.5)
  };
  if (props.required) {
    if (props.labelPlacement === 'start') {
      labelPadding.paddingLeft = '0px';
    } else {
      labelPadding.paddingRight = '0px';
    }
  }
  return (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(FormControl/* default */.Z, {
    children: (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(checkbox_field_FormControlLabel, Object.assign({}, props, {
      control: (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(lib_checkbox/* Checkbox */.X, Object.assign({
        color: color
      }, props)),
      slotProps: Object.assign({}, props.slotProps, {
        typography: Object.assign({
          color: hasError ? theme.palette.error.main : undefined
        }, typographyOverride, labelPadding, (_props$slotProps = props.slotProps) == null ? void 0 : _props$slotProps.typography)
      })
    }))
  });
};
CheckboxField.displayName = "CheckboxField";

/* harmony default export */ const checkbox_field = (CheckboxField);
try {
    // @ts-ignore
    CheckboxField.displayName = "CheckboxField";
    // @ts-ignore
    CheckboxField.__docgenInfo = { "description": "", "displayName": "CheckboxField", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["packages/checkbox-field/src/lib/checkbox-field.tsx#CheckboxField"] = { docgenInfo: CheckboxField.__docgenInfo, name: "CheckboxField", path: "packages/checkbox-field/src/lib/checkbox-field.tsx#CheckboxField" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    checkboxfield.displayName = "checkboxfield";
    // @ts-ignore
    checkboxfield.__docgenInfo = { "description": "", "displayName": "checkboxfield", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["packages/checkbox-field/src/lib/checkbox-field.tsx#checkboxfield"] = { docgenInfo: checkboxfield.__docgenInfo, name: "checkboxfield", path: "packages/checkbox-field/src/lib/checkbox-field.tsx#checkboxfield" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(54994);
;// CONCATENATED MODULE: ./packages/checkbox-field/src/lib/checkbox-formik-field.tsx






var CheckboxFormikField = function CheckboxFormikField(props) {
  var internalValidate = (0,react.useCallback)(function (value) {
    return props.required ? !value : false;
  }, [props.required]);
  var label = (0,react.useMemo)(function () {
    return props.label ? props.label : props.name;
  }, [props.label, props.name]);
  return (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(formik_esm/* Field */.gN, Object.assign({
    validate: internalValidate
  }, props, {
    children: function children(_ref) {
      var field = _ref.field,
        form = _ref.form,
        meta = _ref.meta;
      var hasError = (form.touched || meta.touched) && (meta.error || Boolean(form.errors[field.name]));
      return (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(CheckboxField, Object.assign({
        error: hasError
      }, props, {
        label: label,
        value: field.value,
        onChange: function onChange(event, value) {
          field.onChange(event);
          props.onChange && props.onChange(event, value);
        }
      }));
    }
  }));
};
CheckboxFormikField.displayName = "CheckboxFormikField";

/* harmony default export */ const checkbox_formik_field = (CheckboxFormikField);
try {
    // @ts-ignore
    CheckboxFormikField.displayName = "CheckboxFormikField";
    // @ts-ignore
    CheckboxFormikField.__docgenInfo = { "description": "", "displayName": "CheckboxFormikField", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["packages/checkbox-field/src/lib/checkbox-formik-field.tsx#CheckboxFormikField"] = { docgenInfo: CheckboxFormikField.__docgenInfo, name: "CheckboxFormikField", path: "packages/checkbox-field/src/lib/checkbox-formik-field.tsx#CheckboxFormikField" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    checkboxformikfield.displayName = "checkboxformikfield";
    // @ts-ignore
    checkboxformikfield.__docgenInfo = { "description": "", "displayName": "checkboxformikfield", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["packages/checkbox-field/src/lib/checkbox-formik-field.tsx#checkboxformikfield"] = { docgenInfo: checkboxformikfield.__docgenInfo, name: "checkboxformikfield", path: "packages/checkbox-field/src/lib/checkbox-formik-field.tsx#checkboxformikfield" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./packages/checkbox-field/package.json
const package_namespaceObject = {"i8":"0.1.0"};
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(67557);
;// CONCATENATED MODULE: ./packages/checkbox-field/src/lib/checkbox-field.stories.mdx















function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
  return MDXLayout ? /*#__PURE__*/(0,jsx_runtime.jsx)(MDXLayout, { ...props,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(_createMdxContent, {})
  }) : _createMdxContent();

  function _createMdxContent() {
    const _components = Object.assign({
      h1: "h1",
      h3: "h3",
      p: "p",
      code: "code",
      pre: "pre",
      a: "a",
      ul: "ul",
      li: "li",
      div: "div"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);

    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Meta */.h_, {
        title: "CheckboxField",
        component: checkbox_field
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.h1, {
        id: "checkboxfield-",
        children: ["CheckboxField ", /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: `https://img.shields.io/badge/Version-v${package_namespaceObject.i8}-brightgreenn`
        })]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "installation",
        children: "Installation"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["First install the latest version of the package from ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "@novatics/checkbox-field"
        }), "."]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-shell",
          children: "  yarn add -D @novatics/checkbox-field\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-shell",
          children: "  npm install --dev @novatics/checkbox-field\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
        children: "and use it"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-tsx",
          children: "import ... from '@novatics/checkbox-field';\n\n  ...\n\n\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "dependencies",
        children: "Dependencies"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["This component extends ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.a, {
          href: "https://mui.com/material-ui/react-checkbox/",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "Material UI React Checkbox"
        }), ". Therefore is needed to install Material UI:"]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "yarn add @mui/material\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "basic-usage",
        children: "Basic Usage"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Basic Usage",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
              variant: "h6",
              children: "All states and variants"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
              container: true,
              spacing: 2,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xxs: 2,
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                  spacing: 0,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "bodySmall",
                    children: "Default"
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                    checked: true
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                    disabled: true
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                    checked: true,
                    disabled: true
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                    color: "error"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xxs: 2,
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                  spacing: 0,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "bodySmall",
                    children: "Outlined"
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                    variant: "outlined"
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                    variant: "outlined",
                    checked: true
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                    variant: "outlined",
                    checked: true,
                    disabled: true
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xxs: 2,
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                  spacing: 0,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "bodySmall",
                    children: "Indeterminate Default"
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                    indeterminate: true
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                    indeterminate: true,
                    disabled: true
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xxs: 2,
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                  spacing: 0,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "bodySmall",
                    children: "Indeterminate Outlined"
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                    variant: "outlined",
                    indeterminate: true
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                    variant: "outlined",
                    indeterminate: true,
                    disabled: true
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xxs: 2,
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                  spacing: 0,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "bodySmall",
                    children: "Color Variations"
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                    direction: "row",
                    spacing: 0,
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                      color: "primary",
                      checked: true
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                      color: "primary"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                    direction: "row",
                    spacing: 0,
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                      color: "secondary",
                      checked: true
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                      color: "secondary"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                    direction: "row",
                    spacing: 0,
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                      color: "error",
                      checked: true
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                      color: "error"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                    direction: "row",
                    spacing: 0,
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                      color: "info",
                      checked: true
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                      color: "info"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                    direction: "row",
                    spacing: 0,
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                      color: "success",
                      checked: true
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                      color: "success"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                    direction: "row",
                    spacing: 0,
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                      color: "warning",
                      checked: true
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                      color: "warning"
                    })]
                  })]
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
              variant: "h6",
              children: "Labels"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
              container: true,
              spacing: 2,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xxs: 2,
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                  spacing: 0,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "bodySmall",
                    children: "Default(end)"
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                    label: "label",
                    labelPlacement: "end"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xxs: 2,
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                  spacing: 0,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "bodySmall",
                    children: "Start"
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                    label: "label",
                    labelPlacement: "start"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xxs: 2,
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                  spacing: 0,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "bodySmall",
                    children: "Top"
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                    label: "label",
                    labelPlacement: "top"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xxs: 2,
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                  spacing: 0,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "bodySmall",
                    children: "Bottom"
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                    label: "label",
                    labelPlacement: "bottom"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xxs: 2,
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                  spacing: 0,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "bodySmall",
                    children: "Required"
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
                    label: "label",
                    required: true
                  })]
                })
              })]
            })]
          })
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "using-formik",
        children: "Using Formik"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["We also provide a integrated component using ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.a, {
          href: "https://formik.org/docs/api/field",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "Field"
        }), " from Formik!\nSome default behaviors of our component are:"]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.li, {
          children: "Automatic label using field name. If you want to replace or hide the label you can use the label property."
        }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.li, {
          children: "Autimatic validation if the field is required (html5 )."
        }), "\n"]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Using Formik",
          children: args => {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(Stack/* default */.Z, {
              direction: "row",
              spacing: 0,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Formik */.J9, {
                initialValues: {
                  isChecked: false,
                  required: false,
                  toggle: false,
                  checked: []
                },
                onSubmit: async values => {
                  await new Promise(r => setTimeout(r, 500));
                  alert(JSON.stringify(values, null, 2));
                },
                children: ({
                  values,
                  validateForm
                }) => /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Form */.l0, {
                  children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_formik_field, {
                      id: "isChecked",
                      name: "isChecked"
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_formik_field, {
                      id: "toggle",
                      name: "toggle",
                      label: `${values.toggle}`,
                      validate: val => !val
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_formik_field, {
                      type: "checkbox",
                      name: "required",
                      label: "Required",
                      required: true
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.div, {
                      role: "group",
                      "aria-labelledby": "checkbox-group",
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_formik_field, {
                        type: "checkbox",
                        name: "checked",
                        value: "One",
                        label: "One"
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_formik_field, {
                        type: "checkbox",
                        name: "checked",
                        value: "Two",
                        label: "Two"
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_formik_field, {
                        type: "checkbox",
                        name: "checked",
                        value: "Three",
                        label: "Three"
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                      direction: "row",
                      spacing: 1,
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "outlined",
                        onClick: () => validateForm().then(() => console.log('blah')),
                        children: "Validate"
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "contained",
                        type: "submit",
                        children: "Submit"
                      })]
                    })]
                  })
                })
              })
            });
          }
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Playground",
          argTypes: {
            error: false,
            checked: false
          },
          children: args => {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(_components.div, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, { ...args
              })
            });
          }
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* ArgsTable */.$4, {
        story: "Playground"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
        children: "made by Novatics ❤"
      })]
    });
  }
}
/* ========= */


const basicUsage = () => /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
    variant: "h6",
    children: "All states and variants"
  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
    container: true,
    spacing: 2,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
      item: true,
      xxs: 2,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        spacing: 0,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
          variant: "bodySmall",
          children: "Default"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
          checked: true
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
          disabled: true
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
          checked: true,
          disabled: true
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
          color: "error"
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
      item: true,
      xxs: 2,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        spacing: 0,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
          variant: "bodySmall",
          children: "Outlined"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
          variant: "outlined"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
          variant: "outlined",
          checked: true
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
          variant: "outlined",
          checked: true,
          disabled: true
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
      item: true,
      xxs: 2,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        spacing: 0,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
          variant: "bodySmall",
          children: "Indeterminate Default"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
          indeterminate: true
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
          indeterminate: true,
          disabled: true
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
      item: true,
      xxs: 2,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        spacing: 0,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
          variant: "bodySmall",
          children: "Indeterminate Outlined"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
          variant: "outlined",
          indeterminate: true
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
          variant: "outlined",
          indeterminate: true,
          disabled: true
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
      item: true,
      xxs: 2,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        spacing: 0,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
          variant: "bodySmall",
          children: "Color Variations"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
          direction: "row",
          spacing: 0,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
            color: "primary",
            checked: true
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
            color: "primary"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
          direction: "row",
          spacing: 0,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
            color: "secondary",
            checked: true
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
            color: "secondary"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
          direction: "row",
          spacing: 0,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
            color: "error",
            checked: true
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
            color: "error"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
          direction: "row",
          spacing: 0,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
            color: "info",
            checked: true
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
            color: "info"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
          direction: "row",
          spacing: 0,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
            color: "success",
            checked: true
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
            color: "success"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
          direction: "row",
          spacing: 0,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
            color: "warning",
            checked: true
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
            color: "warning"
          })]
        })]
      })
    })]
  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
    variant: "h6",
    children: "Labels"
  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
    container: true,
    spacing: 2,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
      item: true,
      xxs: 2,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        spacing: 0,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
          variant: "bodySmall",
          children: "Default(end)"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
          label: "label",
          labelPlacement: "end"
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
      item: true,
      xxs: 2,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        spacing: 0,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
          variant: "bodySmall",
          children: "Start"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
          label: "label",
          labelPlacement: "start"
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
      item: true,
      xxs: 2,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        spacing: 0,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
          variant: "bodySmall",
          children: "Top"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
          label: "label",
          labelPlacement: "top"
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
      item: true,
      xxs: 2,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        spacing: 0,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
          variant: "bodySmall",
          children: "Bottom"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
          label: "label",
          labelPlacement: "bottom"
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
      item: true,
      xxs: 2,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        spacing: 0,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
          variant: "bodySmall",
          children: "Required"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, {
          label: "label",
          required: true
        })]
      })
    })]
  })]
});
basicUsage.storyName = 'Basic Usage';
basicUsage.parameters = {
  storySource: {
    source: '<Stack><Typography variant=\"h6\">{\"All states and variants\"}</Typography><Grid container spacing={2}><Grid item xxs={2}><Stack spacing={0}><Typography variant=\"bodySmall\">{\"Default\"}</Typography><CheckboxField /><CheckboxField checked /><CheckboxField disabled /><CheckboxField checked disabled /><CheckboxField color=\"error\" /></Stack></Grid><Grid item xxs={2}><Stack spacing={0}><Typography variant=\"bodySmall\">{\"Outlined\"}</Typography><CheckboxField variant=\"outlined\" /><CheckboxField variant=\"outlined\" checked /><CheckboxField variant=\"outlined\" checked disabled /></Stack></Grid><Grid item xxs={2}><Stack spacing={0}><Typography variant=\"bodySmall\">{\"Indeterminate Default\"}</Typography><CheckboxField indeterminate /><CheckboxField indeterminate disabled /></Stack></Grid><Grid item xxs={2}><Stack spacing={0}><Typography variant=\"bodySmall\">{\"Indeterminate Outlined\"}</Typography><CheckboxField variant=\"outlined\" indeterminate /><CheckboxField variant=\"outlined\" indeterminate disabled /></Stack></Grid><Grid item xxs={2}><Stack spacing={0}><Typography variant=\"bodySmall\">{\"Color Variations\"}</Typography><Stack direction=\"row\" spacing={0}><CheckboxField color=\"primary\" checked /><CheckboxField color=\"primary\" /></Stack><Stack direction=\"row\" spacing={0}><CheckboxField color=\"secondary\" checked /><CheckboxField color=\"secondary\" /></Stack><Stack direction=\"row\" spacing={0}><CheckboxField color=\"error\" checked /><CheckboxField color=\"error\" /></Stack><Stack direction=\"row\" spacing={0}><CheckboxField color=\"info\" checked /><CheckboxField color=\"info\" /></Stack><Stack direction=\"row\" spacing={0}><CheckboxField color=\"success\" checked /><CheckboxField color=\"success\" /></Stack><Stack direction=\"row\" spacing={0}><CheckboxField color=\"warning\" checked /><CheckboxField color=\"warning\" /></Stack></Stack></Grid></Grid><Typography variant=\"h6\">{\"Labels\"}</Typography><Grid container spacing={2}><Grid item xxs={2}><Stack spacing={0}><Typography variant=\"bodySmall\">{\"Default(end)\"}</Typography><CheckboxField label=\"label\" labelPlacement=\"end\" /></Stack></Grid><Grid item xxs={2}><Stack spacing={0}><Typography variant=\"bodySmall\">{\"Start\"}</Typography><CheckboxField label=\"label\" labelPlacement=\"start\" /></Stack></Grid><Grid item xxs={2}><Stack spacing={0}><Typography variant=\"bodySmall\">{\"Top\"}</Typography><CheckboxField label=\"label\" labelPlacement=\"top\" /></Stack></Grid><Grid item xxs={2}><Stack spacing={0}><Typography variant=\"bodySmall\">{\"Bottom\"}</Typography><CheckboxField label=\"label\" labelPlacement=\"bottom\" /></Stack></Grid><Grid item xxs={2}><Stack spacing={0}><Typography variant=\"bodySmall\">{\"Required\"}</Typography><CheckboxField label=\"label\" required /></Stack></Grid></Grid></Stack>'
  }
};
const usingFormik = args => {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Stack/* default */.Z, {
    direction: "row",
    spacing: 0,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Formik */.J9, {
      initialValues: {
        isChecked: false,
        required: false,
        toggle: false,
        checked: []
      },
      onSubmit: async values => {
        await new Promise(r => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      },
      children: ({
        values,
        validateForm
      }) => /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Form */.l0, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_formik_field, {
            id: "isChecked",
            name: "isChecked"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_formik_field, {
            id: "toggle",
            name: "toggle",
            label: `${values.toggle}`,
            validate: val => !val
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_formik_field, {
            type: "checkbox",
            name: "required",
            label: "Required",
            required: true
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            role: "group",
            "aria-labelledby": "checkbox-group",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_formik_field, {
              type: "checkbox",
              name: "checked",
              value: "One",
              label: "One"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_formik_field, {
              type: "checkbox",
              name: "checked",
              value: "Two",
              label: "Two"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_formik_field, {
              type: "checkbox",
              name: "checked",
              value: "Three",
              label: "Three"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
            direction: "row",
            spacing: 1,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.Z, {
              variant: "outlined",
              onClick: () => validateForm().then(() => console.log("blah")),
              children: "Validate"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.Z, {
              variant: "contained",
              type: "submit",
              children: "Submit"
            })]
          })]
        })
      })
    })
  });
};
usingFormik.storyName = 'Using Formik';
usingFormik.parameters = {
  storySource: {
    source: 'args => {\n  return <Stack direction=\"row\" spacing={0}>\n          <Formik initialValues={{\n      isChecked: false,\n      required: false,\n      toggle: false,\n      checked: []\n    }} onSubmit={async values => {\n      await new Promise(r => setTimeout(r, 500));\n      alert(JSON.stringify(values, null, 2));\n    }}>\n            {({\n        values,\n        validateForm\n      }) => <Form>\n                <Stack>\n                  <CheckboxFormikField id=\"isChecked\" name=\"isChecked\" />\n                  <CheckboxFormikField id=\"toggle\" name=\"toggle\" label={`${values.toggle}`} validate={val => !val} />\n                  <CheckboxFormikField type=\"checkbox\" name=\"required\" label=\"Required\" required />\n                  <div role=\"group\" aria-labelledby=\"checkbox-group\">\n                    <CheckboxFormikField type=\"checkbox\" name=\"checked\" value=\"One\" label=\"One\" />\n                    <CheckboxFormikField type=\"checkbox\" name=\"checked\" value=\"Two\" label=\"Two\" />\n                    <CheckboxFormikField type=\"checkbox\" name=\"checked\" value=\"Three\" label=\"Three\" />\n                  </div>\n                  <Stack direction=\"row\" spacing={1}>\n                    <Button variant=\"outlined\" onClick={() => validateForm().then(() => console.log(\"blah\"))}>\n                      Validate\n                    </Button>\n                    <Button variant=\"contained\" type=\"submit\">\n                      Submit\n                    </Button>\n                  </Stack>\n                </Stack>\n              </Form>}\n          </Formik>\n        </Stack>;\n}'
  }
};
const playground = args => {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_field, { ...args
    })
  });
};
playground.storyName = 'Playground';
playground.argTypes = {
  error: false,
  checked: false
};
playground.parameters = {
  storySource: {
    source: 'args => {\n  return <div>\n          <CheckboxField {...args} />\n        </div>;\n}'
  }
};
const componentMeta = {
  title: 'CheckboxField',
  component: checkbox_field,
  tags: ['stories-mdx'],
  includeStories: ["basicUsage", "usingFormik", "playground"]
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = { ...(componentMeta.parameters.docs || {}),
  page: MDXContent
};
/* harmony default export */ const checkbox_field_stories = (componentMeta);

/***/ }),

/***/ 40310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ Checkbox),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_runner_work_novatics_ui_novatics_ui_node_modules_babel_runtime_helpers_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39446);
/* harmony import */ var _home_runner_work_novatics_ui_novatics_ui_node_modules_babel_runtime_helpers_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_novatics_ui_novatics_ui_node_modules_babel_runtime_helpers_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33130);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12370);
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26021);
/* harmony import */ var _novatics_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39406);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89526);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28179);

var _excluded = ["variant", "color", "disabled"];






// TODO: How should default Color be handled?

var IndeterminateIcon = (0,_novatics_styles__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .zo)('span')(function (_ref) {
  var colorType = _ref.colorType,
    palette = _ref.theme.palette,
    variant = _ref.variant,
    disabled = _ref.disabled;
  var isFilled = variant === 'filled';
  var colorVariant = palette[colorType];
  var backgroundColor = disabled ? palette.grey[20] : isFilled ? colorVariant.main : 'transparent';
  var borderColor = disabled ? palette.grey[20] : colorVariant.main;
  return {
    width: 14,
    height: 14,
    backgroundColor: backgroundColor,
    borderRadius: '2px',
    border: "2px solid " + borderColor,
    '&:before': {
      // center content to create line in the middle
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'block',
      width: 8.89,
      height: 1.78,
      content: '""',
      backgroundColor: isFilled ? palette.grey[0] : colorVariant.main
    },
    'input:hover:not([disabled]) ~ &': {
      backgroundColor: isFilled ? colorVariant.dark : colorVariant.light,
      borderColor: colorVariant.dark,
      '&:before': {
        backgroundColor: isFilled ? palette.grey[0] : colorVariant.medium
      }
    },
    'input:disabled ~ &': {
      backgroundColor: isFilled ? palette.grey[20] : 'transparent',
      border: "2px solid " + palette.grey[20],
      '&:before': {
        backgroundColor: isFilled ? palette.grey[0] : palette.grey[20]
      }
    }
  };
});
var UncheckedIcon = (0,_novatics_styles__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .zo)(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(function (_ref2) {
  var colorType = _ref2.colorType,
    palette = _ref2.theme.palette,
    error = _ref2.error,
    disabled = _ref2.disabled;
  var borderColor = error ? palette.error.main : disabled ? palette.grey[20] : palette.grey[35];
  return {
    width: 14,
    height: 14,
    borderRadius: '2px',
    border: "2px solid " + borderColor,
    // Set color of the check icon
    color: 'transparent',
    'input:hover:not([disabled]) ~ &': {
      backgroundColor: palette[colorType].light,
      borderColor: palette[colorType].dark,
      // Set color of the check icon
      color: palette[colorType].medium || palette[colorType].dark
    }
  };
});
var CheckedIcon = (0,_novatics_styles__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .zo)(UncheckedIcon)(function (_ref3) {
  var colorType = _ref3.colorType,
    palette = _ref3.theme.palette,
    variant = _ref3.variant,
    disabled = _ref3.disabled;
  var isFilled = variant === 'filled';
  var colors = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
    if (disabled && !isFilled) {
      return {
        color: palette.grey[20],
        borderColor: palette.grey[20],
        backgroundColor: palette.grey[0]
      };
    }
    if (disabled && isFilled) {
      return {
        color: palette.grey[0],
        borderColor: palette.grey[20],
        backgroundColor: palette.grey[20]
      };
    }
    if (isFilled) {
      return {
        color: palette.grey[0],
        borderColor: palette[colorType].main,
        backgroundColor: palette[colorType].main
      };
    }
    return {
      color: palette[colorType].main,
      borderColor: palette[colorType].main,
      backgroundColor: palette.grey[0]
    };
  }, [colorType, disabled, isFilled, palette]);
  return {
    color: colors.color,
    backgroundColor: colors.backgroundColor,
    borderColor: colors.borderColor,
    'input:hover:not([disabled]) ~ &': {
      color: colors.color,
      backgroundColor: colors.backgroundColor,
      borderColor: colors.borderColor
    }
  };
});

// TODO: How could we make it more customizable regarding adding new colors?
var Checkbox = function Checkbox(_ref4) {
  var _ref4$variant = _ref4.variant,
    variant = _ref4$variant === void 0 ? 'filled' : _ref4$variant,
    _ref4$color = _ref4.color,
    color = _ref4$color === void 0 ? 'primary' : _ref4$color,
    disabled = _ref4.disabled,
    other = _home_runner_work_novatics_ui_novatics_ui_node_modules_babel_runtime_helpers_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0___default()(_ref4, _excluded);
  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsx */ .tZ)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, Object.assign({
    disableFocusRipple: true,
    disableRipple: true,
    disableTouchRipple: true,
    disabled: disabled,
    icon: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsx */ .tZ)(UncheckedIcon, {
      colorType: color,
      error: color === 'error',
      disabled: disabled
    }),
    checkedIcon: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsx */ .tZ)(CheckedIcon, {
      colorType: color,
      variant: variant,
      disabled: disabled
    }),
    indeterminateIcon: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsx */ .tZ)(IndeterminateIcon, {
      colorType: color,
      variant: variant,
      disabled: disabled
    })
  }, other));
};
Checkbox.displayName = "Checkbox";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);
try {
    // @ts-ignore
    Checkbox.displayName = "Checkbox";
    // @ts-ignore
    Checkbox.__docgenInfo = { "description": "", "displayName": "Checkbox", "props": { "variant": { "defaultValue": { value: "filled" }, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"filled\"" }, { "value": "\"outlined\"" }] } }, "color": { "defaultValue": { value: "primary" }, "description": "The color of the component.\nIt supports both default and custom theme colors, which can be added as shown in the\n[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"primary\"" }, { "value": "\"secondary\"" }, { "value": "\"error\"" }, { "value": "\"info\"" }, { "value": "\"success\"" }, { "value": "\"warning\"" }] } }, "action": { "defaultValue": null, "description": "A ref for imperative actions.\nIt currently only supports `focusVisible()` action.", "name": "action", "required": false, "type": { "name": "Ref<ButtonBaseActions>" } }, "focusVisibleClassName": { "defaultValue": null, "description": "This prop can help identify which element has keyboard focus.\nThe class name will be applied when the element gains the focus through keyboard interaction.\nIt's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).\nThe rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).\nA [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components\nif needed.", "name": "focusVisibleClassName", "required": false, "type": { "name": "string" } }, "LinkComponent": { "defaultValue": { value: "'a'" }, "description": "The component used to render a link when the `href` prop is provided.", "name": "LinkComponent", "required": false, "type": { "name": "ElementType<any>" } }, "onFocusVisible": { "defaultValue": null, "description": "Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.", "name": "onFocusVisible", "required": false, "type": { "name": "FocusEventHandler<any>" } }, "ref": { "defaultValue": null, "description": "", "name": "ref", "required": false, "type": { "name": "Ref<HTMLButtonElement>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["packages/checkbox/src/lib/checkbox.tsx#Checkbox"] = { docgenInfo: Checkbox.__docgenInfo, name: "Checkbox", path: "packages/checkbox/src/lib/checkbox.tsx#Checkbox" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    checkbox.displayName = "checkbox";
    // @ts-ignore
    checkbox.__docgenInfo = { "description": "", "displayName": "checkbox", "props": { "variant": { "defaultValue": { value: "filled" }, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"filled\"" }, { "value": "\"outlined\"" }] } }, "color": { "defaultValue": { value: "primary" }, "description": "The color of the component.\nIt supports both default and custom theme colors, which can be added as shown in the\n[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"primary\"" }, { "value": "\"secondary\"" }, { "value": "\"error\"" }, { "value": "\"info\"" }, { "value": "\"success\"" }, { "value": "\"warning\"" }] } }, "action": { "defaultValue": null, "description": "A ref for imperative actions.\nIt currently only supports `focusVisible()` action.", "name": "action", "required": false, "type": { "name": "Ref<ButtonBaseActions>" } }, "focusVisibleClassName": { "defaultValue": null, "description": "This prop can help identify which element has keyboard focus.\nThe class name will be applied when the element gains the focus through keyboard interaction.\nIt's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).\nThe rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).\nA [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components\nif needed.", "name": "focusVisibleClassName", "required": false, "type": { "name": "string" } }, "LinkComponent": { "defaultValue": { value: "'a'" }, "description": "The component used to render a link when the `href` prop is provided.", "name": "LinkComponent", "required": false, "type": { "name": "ElementType<any>" } }, "onFocusVisible": { "defaultValue": null, "description": "Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.", "name": "onFocusVisible", "required": false, "type": { "name": "FocusEventHandler<any>" } }, "ref": { "defaultValue": null, "description": "", "name": "ref", "required": false, "type": { "name": "Ref<HTMLButtonElement>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["packages/checkbox/src/lib/checkbox.tsx#checkbox"] = { docgenInfo: checkbox.__docgenInfo, name: "checkbox", path: "packages/checkbox/src/lib/checkbox.tsx#checkbox" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ })

}]);
//# sourceMappingURL=checkbox-field-src-lib-checkbox-field-stories-mdx.1d0ee653.iframe.bundle.js.map