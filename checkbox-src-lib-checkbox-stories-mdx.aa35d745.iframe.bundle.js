(self["webpackChunknovatics"] = self["webpackChunknovatics"] || []).push([[993],{

/***/ 18933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "basicUsage": () => (/* binding */ basicUsage),
  "default": () => (/* binding */ checkbox_stories),
  "playground": () => (/* binding */ playground),
  "variations": () => (/* binding */ variations)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(89526);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(18380);
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/dist/blocks.mjs
var blocks = __webpack_require__(88843);
// EXTERNAL MODULE: ./node_modules/@storybook/react/dist/index.mjs
var dist = __webpack_require__(70019);
;// CONCATENATED MODULE: ./packages/checkbox/package.json
const package_namespaceObject = {"i":"0.1.0"};
// EXTERNAL MODULE: ./packages/checkbox/src/lib/checkbox.tsx
var lib_checkbox = __webpack_require__(40310);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(67557);
;// CONCATENATED MODULE: ./packages/checkbox/src/lib/checkbox.stories.mdx












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
      div: "div"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);

    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Meta */.h_, {
        title: "Checkbox",
        component: lib_checkbox/* default */.Z
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.h1, {
        id: "checkbox-",
        children: ["Checkbox ", /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: `https://img.shields.io/badge/Version-v${package_namespaceObject.i}-brightgreenn`
        })]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "installation",
        children: "Installation"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["First install the latest version of the package from ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "@novatics/checkbox"
        }), "."]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-shell",
          children: "  yarn add -D @novatics/checkbox\n"
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
          children: args => {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(_components.div, {
              style: {
                display: 'flex',
                flexDirection: 'row'
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, { ...args
              })
            });
          }
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-tsx",
          children: "import ... from '@novatics/checkbox';\n\n  ...\n\n\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "variations",
        children: "Variations"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Variations",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around'
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              style: {
                display: 'flex',
                flexDirection: 'column'
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                children: "Default"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
                checked: true
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
                disabled: true
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
                checked: true,
                disabled: true
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
                color: "error"
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              style: {
                display: 'flex',
                flexDirection: 'column'
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                children: "Outlined"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
                variant: "outlined"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
                variant: "outlined",
                checked: true
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
                variant: "outlined",
                checked: true,
                disabled: true
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              style: {
                display: 'flex',
                flexDirection: 'column'
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                children: "Indeterminate Default"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
                indeterminate: true
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
                indeterminate: true,
                disabled: true
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              style: {
                display: 'flex',
                flexDirection: 'column'
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                children: "Indeterminate Outlined"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
                variant: "outlined",
                indeterminate: true
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
                variant: "outlined",
                indeterminate: true,
                disabled: true
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              style: {
                display: 'flex',
                flexDirection: 'column'
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                children: "Color Variations"
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                style: {
                  display: 'flex',
                  flexDirection: 'row'
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
                  color: "primary",
                  checked: true
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
                  color: "primary"
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                style: {
                  display: 'flex',
                  flexDirection: 'row'
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
                  color: "secondary",
                  checked: true
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
                  color: "secondary"
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                style: {
                  display: 'flex',
                  flexDirection: 'row'
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
                  color: "error",
                  checked: true
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
                  color: "error"
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                style: {
                  display: 'flex',
                  flexDirection: 'row'
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
                  color: "info",
                  checked: true
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
                  color: "info"
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                style: {
                  display: 'flex',
                  flexDirection: 'row'
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
                  color: "success",
                  checked: true
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
                  color: "success"
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                style: {
                  display: 'flex',
                  flexDirection: 'row'
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
                  color: "warning",
                  checked: true
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
                  color: "warning"
                })]
              })]
            })]
          })
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "playground",
        children: "Playground"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Playground",
          argTypes: {
            error: false,
            checked: false
          },
          children: args => {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(_components.div, {
              style: {
                display: 'flex',
                flexDirection: 'row'
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, { ...args
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


const basicUsage = args => {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    style: {
      display: "flex",
      flexDirection: "row"
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, { ...args
    })
  });
};
basicUsage.storyName = 'Basic Usage';
basicUsage.parameters = {
  storySource: {
    source: 'args => {\n  return <div style={{\n    display: \"flex\",\n    flexDirection: \"row\"\n  }}>\n          <Checkbox {...args} />\n        </div>;\n}'
  }
};
const variations = () => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
  style: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: "Default"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
      checked: true
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
      disabled: true
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
      checked: true,
      disabled: true
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
      color: "error"
    })]
  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: "Outlined"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
      variant: "outlined"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
      variant: "outlined",
      checked: true
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
      variant: "outlined",
      checked: true,
      disabled: true
    })]
  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: "Indeterminate Default"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
      indeterminate: true
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
      indeterminate: true,
      disabled: true
    })]
  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: "Indeterminate Outlined"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
      variant: "outlined",
      indeterminate: true
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
      variant: "outlined",
      indeterminate: true,
      disabled: true
    })]
  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: "Color Variations"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        display: "flex",
        flexDirection: "row"
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
        color: "primary",
        checked: true
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
        color: "primary"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        display: "flex",
        flexDirection: "row"
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
        color: "secondary",
        checked: true
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
        color: "secondary"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        display: "flex",
        flexDirection: "row"
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
        color: "error",
        checked: true
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
        color: "error"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        display: "flex",
        flexDirection: "row"
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
        color: "info",
        checked: true
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
        color: "info"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        display: "flex",
        flexDirection: "row"
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
        color: "success",
        checked: true
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
        color: "success"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        display: "flex",
        flexDirection: "row"
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
        color: "warning",
        checked: true
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, {
        color: "warning"
      })]
    })]
  })]
});
variations.storyName = 'Variations';
variations.parameters = {
  storySource: {
    source: '<div style={{\n  display: \"flex\",\n  flexDirection: \"row\",\n  justifyContent: \"space-around\"\n}}><div style={{\n    display: \"flex\",\n    flexDirection: \"column\"\n  }}><span>{\"Default\"}</span><Checkbox /><Checkbox checked /><Checkbox disabled /><Checkbox checked disabled /><Checkbox color=\"error\" /></div><div style={{\n    display: \"flex\",\n    flexDirection: \"column\"\n  }}><span>{\"Outlined\"}</span><Checkbox variant=\"outlined\" /><Checkbox variant=\"outlined\" checked /><Checkbox variant=\"outlined\" checked disabled /></div><div style={{\n    display: \"flex\",\n    flexDirection: \"column\"\n  }}><span>{\"Indeterminate Default\"}</span><Checkbox indeterminate /><Checkbox indeterminate disabled /></div><div style={{\n    display: \"flex\",\n    flexDirection: \"column\"\n  }}><span>{\"Indeterminate Outlined\"}</span><Checkbox variant=\"outlined\" indeterminate /><Checkbox variant=\"outlined\" indeterminate disabled /></div><div style={{\n    display: \"flex\",\n    flexDirection: \"column\"\n  }}><span>{\"Color Variations\"}</span><div style={{\n      display: \"flex\",\n      flexDirection: \"row\"\n    }}><Checkbox color=\"primary\" checked /><Checkbox color=\"primary\" /></div><div style={{\n      display: \"flex\",\n      flexDirection: \"row\"\n    }}><Checkbox color=\"secondary\" checked /><Checkbox color=\"secondary\" /></div><div style={{\n      display: \"flex\",\n      flexDirection: \"row\"\n    }}><Checkbox color=\"error\" checked /><Checkbox color=\"error\" /></div><div style={{\n      display: \"flex\",\n      flexDirection: \"row\"\n    }}><Checkbox color=\"info\" checked /><Checkbox color=\"info\" /></div><div style={{\n      display: \"flex\",\n      flexDirection: \"row\"\n    }}><Checkbox color=\"success\" checked /><Checkbox color=\"success\" /></div><div style={{\n      display: \"flex\",\n      flexDirection: \"row\"\n    }}><Checkbox color=\"warning\" checked /><Checkbox color=\"warning\" /></div></div></div>'
  }
};
const playground = args => {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    style: {
      display: "flex",
      flexDirection: "row"
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(lib_checkbox/* default */.Z, { ...args
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
    source: 'args => {\n  return <div style={{\n    display: \"flex\",\n    flexDirection: \"row\"\n  }}>\n          <Checkbox {...args} />\n        </div>;\n}'
  }
};
const componentMeta = {
  title: 'Checkbox',
  component: lib_checkbox/* default */.Z,
  tags: ['stories-mdx'],
  includeStories: ["basicUsage", "variations", "playground"]
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = { ...(componentMeta.parameters.docs || {}),
  page: MDXContent
};
/* harmony default export */ const checkbox_stories = (componentMeta);

/***/ }),

/***/ 40310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ 28179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BX": () => (/* binding */ jsxs),
/* harmony export */   "tZ": () => (/* binding */ jsx)
/* harmony export */ });
/* unused harmony export Fragment */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89526);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31910);
/* harmony import */ var _dist_emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90769);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41281);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73751);
/* harmony import */ var _emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9745);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67557);












var Fragment = react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment;
function jsx(type, props, key) {
  if (!_dist_emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.h.call(props, 'css')) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(type, props, key);
  }

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_dist_emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.E, (0,_dist_emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.c)(type, props), key);
}
function jsxs(type, props, key) {
  if (!_dist_emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.h.call(props, 'css')) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(type, props, key);
  }

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_dist_emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.E, (0,_dist_emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.c)(type, props), key);
}




/***/ }),

/***/ 26021:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(299);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(36128));
var _jsxRuntime = __webpack_require__(67557);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
}), 'Check');
exports.Z = _default;

/***/ }),

/***/ 299:
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 36128:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _utils.createSvgIcon;
  }
}));
var _utils = __webpack_require__(61794);

/***/ }),

/***/ 12370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Checkbox_Checkbox)
});

// EXTERNAL MODULE: ./node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(60287);
// EXTERNAL MODULE: ./node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(13281);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(89526);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(23060);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(13957);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(72945);
// EXTERNAL MODULE: ./node_modules/@mui/material/internal/SwitchBase.js + 1 modules
var SwitchBase = __webpack_require__(42242);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(4228);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(67557);
;// CONCATENATED MODULE: ./node_modules/@mui/material/internal/svg-icons/CheckBoxOutlineBlank.js



/**
 * @ignore - internal component.
 */

/* harmony default export */ const CheckBoxOutlineBlank = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), 'CheckBoxOutlineBlank'));
;// CONCATENATED MODULE: ./node_modules/@mui/material/internal/svg-icons/CheckBox.js



/**
 * @ignore - internal component.
 */

/* harmony default export */ const CheckBox = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), 'CheckBox'));
;// CONCATENATED MODULE: ./node_modules/@mui/material/internal/svg-icons/IndeterminateCheckBox.js



/**
 * @ignore - internal component.
 */

/* harmony default export */ const IndeterminateCheckBox = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), 'IndeterminateCheckBox'));
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(88623);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(89857);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(82500);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(67402);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(85111);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Checkbox/checkboxClasses.js


function getCheckboxUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiCheckbox', slot);
}
const checkboxClasses = (0,generateUtilityClasses/* default */.Z)('MuiCheckbox', ['root', 'checked', 'disabled', 'indeterminate', 'colorPrimary', 'colorSecondary']);
/* harmony default export */ const Checkbox_checkboxClasses = (checkboxClasses);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Checkbox/Checkbox.js


const _excluded = ["checkedIcon", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size", "className"];















const useUtilityClasses = ownerState => {
  const {
    classes,
    indeterminate,
    color
  } = ownerState;
  const slots = {
    root: ['root', indeterminate && 'indeterminate', `color${(0,capitalize/* default */.Z)(color)}`]
  };
  const composedClasses = (0,composeClasses/* default */.Z)(slots, getCheckboxUtilityClass, classes);
  return (0,esm_extends/* default */.Z)({}, classes, composedClasses);
};
const CheckboxRoot = (0,styled/* default */.ZP)(SwitchBase/* default */.Z, {
  shouldForwardProp: prop => (0,styled/* rootShouldForwardProp */.FO)(prop) || prop === 'classes',
  name: 'MuiCheckbox',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.indeterminate && styles.indeterminate, ownerState.color !== 'default' && styles[`color${(0,capitalize/* default */.Z)(ownerState.color)}`]];
  }
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.Z)({
  color: (theme.vars || theme).palette.text.secondary
}, !ownerState.disableRipple && {
  '&:hover': {
    backgroundColor: theme.vars ? `rgba(${ownerState.color === 'default' ? theme.vars.palette.action.activeChannel : theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0,colorManipulator/* alpha */.Fq)(ownerState.color === 'default' ? theme.palette.action.active : theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  }
}, ownerState.color !== 'default' && {
  [`&.${Checkbox_checkboxClasses.checked}, &.${Checkbox_checkboxClasses.indeterminate}`]: {
    color: (theme.vars || theme).palette[ownerState.color].main
  },
  [`&.${Checkbox_checkboxClasses.disabled}`]: {
    color: (theme.vars || theme).palette.action.disabled
  }
}));
const defaultCheckedIcon = /*#__PURE__*/(0,jsx_runtime.jsx)(CheckBox, {});
const defaultIcon = /*#__PURE__*/(0,jsx_runtime.jsx)(CheckBoxOutlineBlank, {});
const defaultIndeterminateIcon = /*#__PURE__*/(0,jsx_runtime.jsx)(IndeterminateCheckBox, {});
const Checkbox = /*#__PURE__*/react.forwardRef(function Checkbox(inProps, ref) {
  var _icon$props$fontSize, _indeterminateIcon$pr;
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiCheckbox'
  });
  const {
      checkedIcon = defaultCheckedIcon,
      color = 'primary',
      icon: iconProp = defaultIcon,
      indeterminate = false,
      indeterminateIcon: indeterminateIconProp = defaultIndeterminateIcon,
      inputProps,
      size = 'medium',
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const icon = indeterminate ? indeterminateIconProp : iconProp;
  const indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    color,
    indeterminate,
    size
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CheckboxRoot, (0,esm_extends/* default */.Z)({
    type: "checkbox",
    inputProps: (0,esm_extends/* default */.Z)({
      'data-indeterminate': indeterminate
    }, inputProps),
    icon: /*#__PURE__*/react.cloneElement(icon, {
      fontSize: (_icon$props$fontSize = icon.props.fontSize) != null ? _icon$props$fontSize : size
    }),
    checkedIcon: /*#__PURE__*/react.cloneElement(indeterminateIcon, {
      fontSize: (_indeterminateIcon$pr = indeterminateIcon.props.fontSize) != null ? _indeterminateIcon$pr : size
    }),
    ownerState: ownerState,
    ref: ref,
    className: (0,clsx_m/* default */.Z)(classes.root, className)
  }, other, {
    classes: classes
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const Checkbox_Checkbox = (Checkbox);

/***/ }),

/***/ 88246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89526);

/**
 * @ignore - internal component.
 */
const FormControlContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormControlContext);

/***/ }),

/***/ 21704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useFormControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89526);
/* harmony import */ var _FormControlContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88246);


function useFormControl() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(_FormControlContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
}

/***/ }),

/***/ 42242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ internal_SwitchBase)
});

// EXTERNAL MODULE: ./node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(60287);
// EXTERNAL MODULE: ./node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(13281);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(89526);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(23060);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(13957);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(88623);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(82500);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useControlled.js + 1 modules
var useControlled = __webpack_require__(22054);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/useFormControl.js
var useFormControl = __webpack_require__(21704);
// EXTERNAL MODULE: ./node_modules/@mui/material/ButtonBase/ButtonBase.js + 6 modules
var ButtonBase = __webpack_require__(98592);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(67402);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(85111);
;// CONCATENATED MODULE: ./node_modules/@mui/material/internal/switchBaseClasses.js


function getSwitchBaseUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('PrivateSwitchBase', slot);
}
const switchBaseClasses = (0,generateUtilityClasses/* default */.Z)('PrivateSwitchBase', ['root', 'checked', 'disabled', 'input', 'edgeStart', 'edgeEnd']);
/* harmony default export */ const internal_switchBaseClasses = ((/* unused pure expression or super */ null && (switchBaseClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(67557);
;// CONCATENATED MODULE: ./node_modules/@mui/material/internal/SwitchBase.js


const _excluded = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"];













const useUtilityClasses = ownerState => {
  const {
    classes,
    checked,
    disabled,
    edge
  } = ownerState;
  const slots = {
    root: ['root', checked && 'checked', disabled && 'disabled', edge && `edge${(0,capitalize/* default */.Z)(edge)}`],
    input: ['input']
  };
  return (0,composeClasses/* default */.Z)(slots, getSwitchBaseUtilityClass, classes);
};
const SwitchBaseRoot = (0,styled/* default */.ZP)(ButtonBase/* default */.Z)(({
  ownerState
}) => (0,esm_extends/* default */.Z)({
  padding: 9,
  borderRadius: '50%'
}, ownerState.edge === 'start' && {
  marginLeft: ownerState.size === 'small' ? -3 : -12
}, ownerState.edge === 'end' && {
  marginRight: ownerState.size === 'small' ? -3 : -12
}));
const SwitchBaseInput = (0,styled/* default */.ZP)('input')({
  cursor: 'inherit',
  position: 'absolute',
  opacity: 0,
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
});

/**
 * @ignore - internal component.
 */
const SwitchBase = /*#__PURE__*/react.forwardRef(function SwitchBase(props, ref) {
  const {
      autoFocus,
      checked: checkedProp,
      checkedIcon,
      className,
      defaultChecked,
      disabled: disabledProp,
      disableFocusRipple = false,
      edge = false,
      icon,
      id,
      inputProps,
      inputRef,
      name,
      onBlur,
      onChange,
      onFocus,
      readOnly,
      required = false,
      tabIndex,
      type,
      value
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const [checked, setCheckedState] = (0,useControlled/* default */.Z)({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: 'SwitchBase',
    state: 'checked'
  });
  const muiFormControl = (0,useFormControl/* default */.Z)();
  const handleFocus = event => {
    if (onFocus) {
      onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };
  const handleBlur = event => {
    if (onBlur) {
      onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };
  const handleInputChange = event => {
    // Workaround for https://github.com/facebook/react/issues/9023
    if (event.nativeEvent.defaultPrevented) {
      return;
    }
    const newChecked = event.target.checked;
    setCheckedState(newChecked);
    if (onChange) {
      // TODO v6: remove the second argument.
      onChange(event, newChecked);
    }
  };
  let disabled = disabledProp;
  if (muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
  }
  const hasLabelFor = type === 'checkbox' || type === 'radio';
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    checked,
    disabled,
    disableFocusRipple,
    edge
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(SwitchBaseRoot, (0,esm_extends/* default */.Z)({
    component: "span",
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled,
    tabIndex: null,
    role: undefined,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SwitchBaseInput, (0,esm_extends/* default */.Z)({
      autoFocus: autoFocus,
      checked: checkedProp,
      defaultChecked: defaultChecked,
      className: classes.input,
      disabled: disabled,
      id: hasLabelFor ? id : undefined,
      name: name,
      onChange: handleInputChange,
      readOnly: readOnly,
      ref: inputRef,
      required: required,
      ownerState: ownerState,
      tabIndex: tabIndex,
      type: type
    }, type === 'checkbox' && value === undefined ? {} : {
      value
    }, inputProps)), checked ? checkedIcon : icon]
  }));
});

// NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.
 false ? 0 : void 0;
/* harmony default export */ const internal_SwitchBase = (SwitchBase);

/***/ }),

/***/ 56377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32733);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mui_utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 22949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25788);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mui_utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 61794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "capitalize": () => (/* reexport */ capitalize/* default */.Z),
  "createChainedFunction": () => (/* reexport */ createChainedFunction/* default */.Z),
  "createSvgIcon": () => (/* reexport */ createSvgIcon/* default */.Z),
  "debounce": () => (/* reexport */ debounce/* default */.Z),
  "deprecatedPropType": () => (/* reexport */ utils_deprecatedPropType),
  "isMuiElement": () => (/* reexport */ isMuiElement/* default */.Z),
  "ownerDocument": () => (/* reexport */ ownerDocument/* default */.Z),
  "ownerWindow": () => (/* reexport */ ownerWindow/* default */.Z),
  "requirePropFactory": () => (/* reexport */ utils_requirePropFactory),
  "setRef": () => (/* reexport */ utils_setRef),
  "unstable_ClassNameGenerator": () => (/* binding */ unstable_ClassNameGenerator),
  "unstable_useEnhancedEffect": () => (/* reexport */ useEnhancedEffect/* default */.Z),
  "unstable_useId": () => (/* reexport */ utils_useId),
  "unsupportedProp": () => (/* reexport */ utils_unsupportedProp),
  "useControlled": () => (/* reexport */ useControlled/* default */.Z),
  "useEventCallback": () => (/* reexport */ useEventCallback/* default */.Z),
  "useForkRef": () => (/* reexport */ useForkRef/* default */.Z),
  "useIsFocusVisible": () => (/* reexport */ useIsFocusVisible/* default */.Z)
});

// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js
var ClassNameGenerator = __webpack_require__(10297);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(88623);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/createChainedFunction.js
var createChainedFunction = __webpack_require__(56377);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(4228);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/debounce.js
var debounce = __webpack_require__(22949);
;// CONCATENATED MODULE: ./node_modules/@mui/utils/esm/deprecatedPropType.js
function deprecatedPropType(validator, reason) {
  if (true) {
    return () => null;
  }
  return (props, propName, componentName, location, propFullName) => {
    const componentNameSafe = componentName || '<<anonymous>>';
    const propFullNameSafe = propFullName || propName;
    if (typeof props[propName] !== 'undefined') {
      return new Error(`The ${location} \`${propFullNameSafe}\` of ` + `\`${componentNameSafe}\` is deprecated. ${reason}`);
    }
    return null;
  };
}
;// CONCATENATED MODULE: ./node_modules/@mui/material/utils/deprecatedPropType.js

/* harmony default export */ const utils_deprecatedPropType = (deprecatedPropType);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/isMuiElement.js + 1 modules
var isMuiElement = __webpack_require__(49572);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/ownerDocument.js
var ownerDocument = __webpack_require__(72022);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/ownerWindow.js
var ownerWindow = __webpack_require__(58132);
// EXTERNAL MODULE: ./node_modules/@mui/utils/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(51614);
;// CONCATENATED MODULE: ./node_modules/@mui/utils/esm/requirePropFactory.js

function requirePropFactory(componentNameInError, Component) {
  if (true) {
    return () => null;
  }

  // eslint-disable-next-line react/forbid-foreign-prop-types
  const prevPropTypes = Component ? (0,esm_extends/* default */.Z)({}, Component.propTypes) : null;
  const requireProp = requiredProp => (props, propName, componentName, location, propFullName, ...args) => {
    const propFullNameSafe = propFullName || propName;
    const defaultTypeChecker = prevPropTypes == null ? void 0 : prevPropTypes[propFullNameSafe];
    if (defaultTypeChecker) {
      const typeCheckerResult = defaultTypeChecker(props, propName, componentName, location, propFullName, ...args);
      if (typeCheckerResult) {
        return typeCheckerResult;
      }
    }
    if (typeof props[propName] !== 'undefined' && !props[requiredProp]) {
      return new Error(`The prop \`${propFullNameSafe}\` of ` + `\`${componentNameInError}\` can only be used together with the \`${requiredProp}\` prop.`);
    }
    return null;
  };
  return requireProp;
}
;// CONCATENATED MODULE: ./node_modules/@mui/material/utils/requirePropFactory.js

/* harmony default export */ const utils_requirePropFactory = (requirePropFactory);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/setRef.js
var setRef = __webpack_require__(72536);
;// CONCATENATED MODULE: ./node_modules/@mui/material/utils/setRef.js

/* harmony default export */ const utils_setRef = (setRef/* default */.Z);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useEnhancedEffect.js
var useEnhancedEffect = __webpack_require__(63830);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useId.js
var useId = __webpack_require__(53068);
;// CONCATENATED MODULE: ./node_modules/@mui/material/utils/useId.js

/* harmony default export */ const utils_useId = (useId/* default */.Z);
;// CONCATENATED MODULE: ./node_modules/@mui/utils/esm/unsupportedProp.js
function unsupportedProp(props, propName, componentName, location, propFullName) {
  if (true) {
    return null;
  }
  const propFullNameSafe = propFullName || propName;
  if (typeof props[propName] !== 'undefined') {
    return new Error(`The prop \`${propFullNameSafe}\` is not supported. Please remove it.`);
  }
  return null;
}
;// CONCATENATED MODULE: ./node_modules/@mui/material/utils/unsupportedProp.js

/* harmony default export */ const utils_unsupportedProp = (unsupportedProp);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useControlled.js + 1 modules
var useControlled = __webpack_require__(22054);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useEventCallback.js
var useEventCallback = __webpack_require__(85923);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useForkRef.js
var useForkRef = __webpack_require__(89428);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useIsFocusVisible.js + 1 modules
var useIsFocusVisible = __webpack_require__(2337);
;// CONCATENATED MODULE: ./node_modules/@mui/material/utils/index.js


















// TODO: remove this export once ClassNameGenerator is stable
// eslint-disable-next-line @typescript-eslint/naming-convention
const unstable_ClassNameGenerator = {
  configure: generator => {
    if (false) {}
    ClassNameGenerator/* default.configure */.Z.configure(generator);
  }
};

/***/ }),

/***/ 49572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ utils_isMuiElement)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(89526);
;// CONCATENATED MODULE: ./node_modules/@mui/utils/esm/isMuiElement.js

function isMuiElement(element, muiNames) {
  return /*#__PURE__*/react.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
}
;// CONCATENATED MODULE: ./node_modules/@mui/material/utils/isMuiElement.js

/* harmony default export */ const utils_isMuiElement = (isMuiElement);

/***/ }),

/***/ 72022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25156);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mui_utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 58132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69923);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mui_utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 22054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ utils_useControlled)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(89526);
;// CONCATENATED MODULE: ./node_modules/@mui/utils/esm/useControlled.js
/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */

function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = 'value'
}) {
  // isControlled is ignored in the hook dependency lists as it should never change.
  const {
    current: isControlled
  } = react.useRef(controlled !== undefined);
  const [valueState, setValue] = react.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  if (false) {}
  const setValueIfUncontrolled = react.useCallback(newValue => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}
;// CONCATENATED MODULE: ./node_modules/@mui/material/utils/useControlled.js

/* harmony default export */ const utils_useControlled = (useControlled);

/***/ }),

/***/ 63830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36341);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mui_utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 32733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createChainedFunction)
/* harmony export */ });
/**
 * Safe chained function.
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 */
function createChainedFunction(...funcs) {
  return funcs.reduce((acc, func) => {
    if (func == null) {
      return acc;
    }
    return function chainedFunction(...args) {
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, () => {});
}

/***/ }),

/***/ 25788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ debounce)
/* harmony export */ });
// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
function debounce(func, wait = 166) {
  let timeout;
  function debounced(...args) {
    const later = () => {
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
  debounced.clear = () => {
    clearTimeout(timeout);
  };
  return debounced;
}

/***/ }),

/***/ 25156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ownerDocument)
/* harmony export */ });
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/***/ }),

/***/ 69923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ownerWindow)
/* harmony export */ });
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25156);

function ownerWindow(node) {
  const doc = (0,_ownerDocument__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(node);
  return doc.defaultView || window;
}

/***/ }),

/***/ 53068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89526);

let globalId = 0;
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = react__WEBPACK_IMPORTED_MODULE_0__.useState(idOverride);
  const id = idOverride || defaultId;
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the incrementing value for client-side rendering only.
      // We can't use it server-side.
      // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id;
}

// eslint-disable-next-line no-useless-concat -- Workaround for https://github.com/webpack/webpack/issues/14814
const maybeReactUseId = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))['useId' + ''];
/**
 *
 * @example <div id={useId()} />
 * @param idOverride
 * @returns {string}
 */
function useId(idOverride) {
  if (maybeReactUseId !== undefined) {
    const reactId = maybeReactUseId();
    return idOverride != null ? idOverride : reactId;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
  return useGlobalId(idOverride);
}

/***/ })

}]);
//# sourceMappingURL=checkbox-src-lib-checkbox-stories-mdx.aa35d745.iframe.bundle.js.map