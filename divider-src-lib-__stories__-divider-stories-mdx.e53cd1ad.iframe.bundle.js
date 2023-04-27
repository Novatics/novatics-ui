"use strict";
(self["webpackChunknovatics"] = self["webpackChunknovatics"] || []).push([[237],{

/***/ 36270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "basicUsage": () => (/* binding */ basicUsage),
  "default": () => (/* binding */ divider_stories),
  "orientation": () => (/* binding */ orientation),
  "playground": () => (/* binding */ playground),
  "variations": () => (/* binding */ variations),
  "withText": () => (/* binding */ withText)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(89526);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(18380);
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/dist/blocks.mjs
var blocks = __webpack_require__(88843);
// EXTERNAL MODULE: ./node_modules/@storybook/react/dist/index.mjs
var dist = __webpack_require__(70019);
// EXTERNAL MODULE: ./node_modules/@mui/material/ListItem/ListItem.js + 4 modules
var ListItem = __webpack_require__(86041);
// EXTERNAL MODULE: ./node_modules/@mui/material/ListItemText/ListItemText.js + 1 modules
var ListItemText = __webpack_require__(85756);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(50871);
// EXTERNAL MODULE: ./node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(38882);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(19855);
// EXTERNAL MODULE: ./node_modules/@mui/material/Paper/Paper.js + 2 modules
var Paper = __webpack_require__(77290);
// EXTERNAL MODULE: ./node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(81445);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(98356);
// EXTERNAL MODULE: ./node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(75000);
;// CONCATENATED MODULE: ./packages/divider/package.json
const package_namespaceObject = {"i":"0.1.0"};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(33130);
// EXTERNAL MODULE: ./node_modules/@mui/material/Divider/Divider.js + 1 modules
var Divider_Divider = __webpack_require__(70751);
// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var emotion_react_jsx_runtime_browser_esm = __webpack_require__(28179);
;// CONCATENATED MODULE: ./packages/divider/src/lib/divider.tsx



var Divider = function Divider(props) {
  return (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(Divider_Divider/* default */.Z, Object.assign({}, props));
};
Divider.displayName = "Divider";

/* harmony default export */ const lib_divider = (Divider);

try {
    // @ts-ignore
    Divider.displayName = "Divider";
    // @ts-ignore
    Divider.__docgenInfo = { "description": "", "displayName": "Divider", "props": { "absolute": { "defaultValue": { value: "false" }, "description": "Absolutely position the element.", "name": "absolute", "required": false, "type": { "name": "boolean" } }, "children": { "defaultValue": null, "description": "The content of the component.", "name": "children", "required": false, "type": { "name": "ReactNode" } }, "classes": { "defaultValue": null, "description": "Override or extend the styles applied to the component.", "name": "classes", "required": false, "type": { "name": "Partial<DividerClasses> & Partial<ClassNameMap<never>>" } }, "flexItem": { "defaultValue": { value: "false" }, "description": "If `true`, a vertical divider will have the correct height when used in flex container.\n(By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)", "name": "flexItem", "required": false, "type": { "name": "boolean" } }, "light": { "defaultValue": { value: "false" }, "description": "If `true`, the divider will have a lighter color.", "name": "light", "required": false, "type": { "name": "boolean" } }, "orientation": { "defaultValue": { value: "'horizontal'" }, "description": "The component orientation.", "name": "orientation", "required": false, "type": { "name": "enum", "value": [{ "value": "\"horizontal\"" }, { "value": "\"vertical\"" }] } }, "sx": { "defaultValue": null, "description": "The system prop that allows defining system overrides as well as additional CSS styles.", "name": "sx", "required": false, "type": { "name": "SxProps<Theme>" } }, "textAlign": { "defaultValue": { value: "'center'" }, "description": "The text alignment.", "name": "textAlign", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"left\"" }, { "value": "\"right\"" }] } }, "variant": { "defaultValue": { value: "'fullWidth'" }, "description": "The variant to use.", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"inset\"" }, { "value": "\"fullWidth\"" }, { "value": "\"middle\"" }] } }, "ref": { "defaultValue": null, "description": "", "name": "ref", "required": false, "type": { "name": "Ref<HTMLHRElement>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["packages/divider/src/lib/divider.tsx#Divider"] = { docgenInfo: Divider.__docgenInfo, name: "Divider", path: "packages/divider/src/lib/divider.tsx#Divider" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    divider.displayName = "divider";
    // @ts-ignore
    divider.__docgenInfo = { "description": "", "displayName": "divider", "props": { "absolute": { "defaultValue": { value: "false" }, "description": "Absolutely position the element.", "name": "absolute", "required": false, "type": { "name": "boolean" } }, "children": { "defaultValue": null, "description": "The content of the component.", "name": "children", "required": false, "type": { "name": "ReactNode" } }, "classes": { "defaultValue": null, "description": "Override or extend the styles applied to the component.", "name": "classes", "required": false, "type": { "name": "Partial<DividerClasses> & Partial<ClassNameMap<never>>" } }, "flexItem": { "defaultValue": { value: "false" }, "description": "If `true`, a vertical divider will have the correct height when used in flex container.\n(By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)", "name": "flexItem", "required": false, "type": { "name": "boolean" } }, "light": { "defaultValue": { value: "false" }, "description": "If `true`, the divider will have a lighter color.", "name": "light", "required": false, "type": { "name": "boolean" } }, "orientation": { "defaultValue": { value: "'horizontal'" }, "description": "The component orientation.", "name": "orientation", "required": false, "type": { "name": "enum", "value": [{ "value": "\"horizontal\"" }, { "value": "\"vertical\"" }] } }, "sx": { "defaultValue": null, "description": "The system prop that allows defining system overrides as well as additional CSS styles.", "name": "sx", "required": false, "type": { "name": "SxProps<Theme>" } }, "textAlign": { "defaultValue": { value: "'center'" }, "description": "The text alignment.", "name": "textAlign", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"left\"" }, { "value": "\"right\"" }] } }, "variant": { "defaultValue": { value: "'fullWidth'" }, "description": "The variant to use.", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"inset\"" }, { "value": "\"fullWidth\"" }, { "value": "\"middle\"" }] } }, "ref": { "defaultValue": null, "description": "", "name": "ref", "required": false, "type": { "name": "Ref<HTMLHRElement>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["packages/divider/src/lib/divider.tsx#divider"] = { docgenInfo: divider.__docgenInfo, name: "divider", path: "packages/divider/src/lib/divider.tsx#divider" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    getDividerUtilityClass.displayName = "getDividerUtilityClass";
    // @ts-ignore
    getDividerUtilityClass.__docgenInfo = { "description": "", "displayName": "getDividerUtilityClass", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["packages/divider/src/lib/divider.tsx#getDividerUtilityClass"] = { docgenInfo: getDividerUtilityClass.__docgenInfo, name: "getDividerUtilityClass", path: "packages/divider/src/lib/divider.tsx#getDividerUtilityClass" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./packages/divider/src/lib/__stories__/Content.tsx


var Content = function Content() {
  return (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(Typography/* default */.Z, {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed malesuada lobortis pretium."
  });
};
Content.displayName = "Content";
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(67557);
;// CONCATENATED MODULE: ./packages/divider/src/lib/__stories__/divider.stories.mdx














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
        title: "Divider",
        component: lib_divider
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.h1, {
        id: "divider-",
        children: ["Divider ", /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: `https://img.shields.io/badge/Version-v${package_namespaceObject.i}-brightgreenn`
        })]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "installation",
        children: "Installation"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["First install the latest version of the package from ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "@novatics/divider"
        }), "."]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-shell",
          children: "  yarn add -D @novatics/divider\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "dependencies",
        children: "Dependencies"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["This component extends ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.a, {
          href: "https://mui.com/material-ui/react-divider/",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "Material UI React Divider"
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
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
              button: true,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                primary: "Inbox"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
              variant: "fullWidth"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
              button: true,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                primary: "Drafts"
              })
            })]
          })
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-tsx",
          children: "import Divider from '@novatics/divider';\n\n...\n       <div>\n          <Divider {...args} />\n        </div>\n...\n\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "variations",
        children: "Variations"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Variations",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
            container: true,
            spacing: 2,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
              item: true,
              xxs: 6,
              sm: 4,
              md: 3,
              xl: 2,
              xxl: 1,
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                  children: "Full width"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Paper/* default */.Z, {
                  elevation: 5,
                  children: /*#__PURE__*/(0,jsx_runtime.jsxs)(List/* default */.Z, {
                    component: "nav",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                      button: true,
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: "Inbox"
                      })
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
                      variant: "fullWidth"
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                      button: true,
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: "Drafts"
                      })
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
                      variant: "fullWidth"
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                      button: true,
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: "Trash"
                      })
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
                      variant: "fullWidth"
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                      button: true,
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: "Spam"
                      })
                    })]
                  })
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
              item: true,
              xxs: 6,
              sm: 4,
              md: 3,
              xl: 2,
              xxl: 1,
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                  children: "Inset"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Paper/* default */.Z, {
                  elevation: 5,
                  children: /*#__PURE__*/(0,jsx_runtime.jsxs)(List/* default */.Z, {
                    component: "nav",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                      button: true,
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: "Inbox"
                      })
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
                      variant: "inset"
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                      button: true,
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: "Drafts"
                      })
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
                      variant: "inset"
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                      button: true,
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: "Trash"
                      })
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
                      variant: "inset"
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                      button: true,
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: "Spam"
                      })
                    })]
                  })
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
              item: true,
              xxs: 6,
              sm: 4,
              md: 3,
              xl: 2,
              xxl: 1,
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                  children: "Middle"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Paper/* default */.Z, {
                  elevation: 5,
                  children: /*#__PURE__*/(0,jsx_runtime.jsxs)(List/* default */.Z, {
                    component: "nav",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                      button: true,
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: "Inbox"
                      })
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
                      variant: "middle"
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                      button: true,
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: "Drafts"
                      })
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
                      variant: "middle"
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                      button: true,
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: "Trash"
                      })
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
                      variant: "middle"
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                      button: true,
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: "Spam"
                      })
                    })]
                  })
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
              item: true,
              xxs: 6,
              sm: 4,
              md: 3,
              xl: 2,
              xxl: 1,
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                  children: "String"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Paper/* default */.Z, {
                  elevation: 5,
                  children: /*#__PURE__*/(0,jsx_runtime.jsxs)(List/* default */.Z, {
                    component: "nav",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                      button: true,
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: "Inbox"
                      })
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
                      variant: "string"
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                      button: true,
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: "Drafts"
                      })
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
                      variant: "string"
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                      button: true,
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: "Trash"
                      })
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
                      variant: "string"
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                      button: true,
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: "Spam"
                      })
                    })]
                  })
                })]
              })
            })]
          })
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "orientation",
        children: "Orientation"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Orientation",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
            container: true,
            spacing: 2,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
              item: true,
              xxs: 6,
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                  children: "Horizontal"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Paper/* default */.Z, {
                  elevation: 5,
                  children: /*#__PURE__*/(0,jsx_runtime.jsxs)(List/* default */.Z, {
                    component: "nav",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                      button: true,
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: "fullWidth"
                      })
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
                      variant: "fullWidth"
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                      button: true,
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: "inset"
                      })
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
                      variant: "inset"
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                      button: true,
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: "middle"
                      })
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
                      variant: "middle"
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                      button: true,
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: "."
                      })
                    })]
                  })
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
              item: true,
              xxs: 6,
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                height: "100%",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                  children: "Vertical"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Paper/* default */.Z, {
                  elevation: 5,
                  sx: {
                    flex: '1'
                  },
                  children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                    direction: "row",
                    height: "100%",
                    textAlign: "center",
                    alignItems: "center",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
                      height: "50px",
                      minWidth: "50px",
                      width: "25%",
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
                        children: "fullWidth >"
                      })
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
                      flexItem: true,
                      orientation: "vertical",
                      variant: "fullWidth"
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
                      height: "50px",
                      minWidth: "50px",
                      width: "25%",
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
                        children: "middle >"
                      })
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
                      flexItem: true,
                      orientation: "vertical",
                      variant: "middle"
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
                      height: "50px",
                      minWidth: "50px",
                      width: "25%",
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
                        children: "string >"
                      })
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
                      flexItem: true,
                      orientation: "vertical",
                      variant: "string"
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
                      height: "50px",
                      minWidth: "50px",
                      width: "25%",
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
                        children: "."
                      })
                    })]
                  })
                })]
              })
            })]
          })
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "with-text",
        children: "With Text"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "With Text",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
            spacing: 4,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Content, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
              children: "CENTER"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Content, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
              textAlign: "left",
              children: "LEFT"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Content, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
              textAlign: "right",
              children: "RIGHT"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Content, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Chip/* default */.Z, {
                label: "CHIP"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Content, {})]
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
            return /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.div, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                button: true,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                  primary: "Inbox"
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
                variant: "fullWidth",
                ...args
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                button: true,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                  primary: "Drafts"
                })
              })]
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


const basicUsage = () => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
    button: true,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
      primary: "Inbox"
    })
  }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
    variant: "fullWidth"
  }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
    button: true,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
      primary: "Drafts"
    })
  })]
});
basicUsage.storyName = 'Basic Usage';
basicUsage.parameters = {
  storySource: {
    source: '<div><ListItem button><ListItemText primary=\"Inbox\" /></ListItem><Divider variant=\"fullWidth\" /><ListItem button><ListItemText primary=\"Drafts\" /></ListItem></div>'
  }
};
const variations = () => /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
  container: true,
  spacing: 2,
  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
    item: true,
    xxs: 6,
    sm: 4,
    md: 3,
    xl: 2,
    xxl: 1,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
        children: "Full width"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Paper/* default */.Z, {
        elevation: 5,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(List/* default */.Z, {
          component: "nav",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
            button: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
              primary: "Inbox"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
            variant: "fullWidth"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
            button: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
              primary: "Drafts"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
            variant: "fullWidth"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
            button: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
              primary: "Trash"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
            variant: "fullWidth"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
            button: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
              primary: "Spam"
            })
          })]
        })
      })]
    })
  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
    item: true,
    xxs: 6,
    sm: 4,
    md: 3,
    xl: 2,
    xxl: 1,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
        children: "Inset"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Paper/* default */.Z, {
        elevation: 5,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(List/* default */.Z, {
          component: "nav",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
            button: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
              primary: "Inbox"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
            variant: "inset"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
            button: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
              primary: "Drafts"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
            variant: "inset"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
            button: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
              primary: "Trash"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
            variant: "inset"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
            button: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
              primary: "Spam"
            })
          })]
        })
      })]
    })
  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
    item: true,
    xxs: 6,
    sm: 4,
    md: 3,
    xl: 2,
    xxl: 1,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
        children: "Middle"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Paper/* default */.Z, {
        elevation: 5,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(List/* default */.Z, {
          component: "nav",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
            button: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
              primary: "Inbox"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
            variant: "middle"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
            button: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
              primary: "Drafts"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
            variant: "middle"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
            button: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
              primary: "Trash"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
            variant: "middle"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
            button: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
              primary: "Spam"
            })
          })]
        })
      })]
    })
  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
    item: true,
    xxs: 6,
    sm: 4,
    md: 3,
    xl: 2,
    xxl: 1,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
        children: "String"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Paper/* default */.Z, {
        elevation: 5,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(List/* default */.Z, {
          component: "nav",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
            button: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
              primary: "Inbox"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
            variant: "string"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
            button: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
              primary: "Drafts"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
            variant: "string"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
            button: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
              primary: "Trash"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
            variant: "string"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
            button: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
              primary: "Spam"
            })
          })]
        })
      })]
    })
  })]
});
variations.storyName = 'Variations';
variations.parameters = {
  storySource: {
    source: '<Grid container spacing={2}><Grid item xxs={6} sm={4} md={3} xl={2} xxl={1}><Stack><Typography>{\"Full width\"}</Typography><Paper elevation={5}><List component=\"nav\"><ListItem button><ListItemText primary=\"Inbox\" /></ListItem><Divider variant=\"fullWidth\" /><ListItem button><ListItemText primary=\"Drafts\" /></ListItem><Divider variant=\"fullWidth\" /><ListItem button><ListItemText primary=\"Trash\" /></ListItem><Divider variant=\"fullWidth\" /><ListItem button><ListItemText primary=\"Spam\" /></ListItem></List></Paper></Stack></Grid><Grid item xxs={6} sm={4} md={3} xl={2} xxl={1}><Stack><Typography>{\"Inset\"}</Typography><Paper elevation={5}><List component=\"nav\"><ListItem button><ListItemText primary=\"Inbox\" /></ListItem><Divider variant=\"inset\" /><ListItem button><ListItemText primary=\"Drafts\" /></ListItem><Divider variant=\"inset\" /><ListItem button><ListItemText primary=\"Trash\" /></ListItem><Divider variant=\"inset\" /><ListItem button><ListItemText primary=\"Spam\" /></ListItem></List></Paper></Stack></Grid><Grid item xxs={6} sm={4} md={3} xl={2} xxl={1}><Stack><Typography>{\"Middle\"}</Typography><Paper elevation={5}><List component=\"nav\"><ListItem button><ListItemText primary=\"Inbox\" /></ListItem><Divider variant=\"middle\" /><ListItem button><ListItemText primary=\"Drafts\" /></ListItem><Divider variant=\"middle\" /><ListItem button><ListItemText primary=\"Trash\" /></ListItem><Divider variant=\"middle\" /><ListItem button><ListItemText primary=\"Spam\" /></ListItem></List></Paper></Stack></Grid><Grid item xxs={6} sm={4} md={3} xl={2} xxl={1}><Stack><Typography>{\"String\"}</Typography><Paper elevation={5}><List component=\"nav\"><ListItem button><ListItemText primary=\"Inbox\" /></ListItem><Divider variant=\"string\" /><ListItem button><ListItemText primary=\"Drafts\" /></ListItem><Divider variant=\"string\" /><ListItem button><ListItemText primary=\"Trash\" /></ListItem><Divider variant=\"string\" /><ListItem button><ListItemText primary=\"Spam\" /></ListItem></List></Paper></Stack></Grid></Grid>'
  }
};
const orientation = () => /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
  container: true,
  spacing: 2,
  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
    item: true,
    xxs: 6,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
        children: "Horizontal"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Paper/* default */.Z, {
        elevation: 5,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(List/* default */.Z, {
          component: "nav",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
            button: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
              primary: "fullWidth"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
            variant: "fullWidth"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
            button: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
              primary: "inset"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
            variant: "inset"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
            button: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
              primary: "middle"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
            variant: "middle"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
            button: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
              primary: "."
            })
          })]
        })
      })]
    })
  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
    item: true,
    xxs: 6,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
      height: "100%",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
        children: "Vertical"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Paper/* default */.Z, {
        elevation: 5,
        sx: {
          flex: "1"
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
          direction: "row",
          height: "100%",
          textAlign: "center",
          alignItems: "center",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
            height: "50px",
            minWidth: "50px",
            width: "25%",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
              children: "fullWidth >"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
            flexItem: true,
            orientation: "vertical",
            variant: "fullWidth"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
            height: "50px",
            minWidth: "50px",
            width: "25%",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
              children: "middle >"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
            flexItem: true,
            orientation: "vertical",
            variant: "middle"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
            height: "50px",
            minWidth: "50px",
            width: "25%",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
              children: "string >"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
            flexItem: true,
            orientation: "vertical",
            variant: "string"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
            height: "50px",
            minWidth: "50px",
            width: "25%",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
              children: "."
            })
          })]
        })
      })]
    })
  })]
});
orientation.storyName = 'Orientation';
orientation.parameters = {
  storySource: {
    source: '<Grid container spacing={2}><Grid item xxs={6}><Stack><Typography>{\"Horizontal\"}</Typography><Paper elevation={5}><List component=\"nav\"><ListItem button><ListItemText primary=\"fullWidth\" /></ListItem><Divider variant=\"fullWidth\" /><ListItem button><ListItemText primary=\"inset\" /></ListItem><Divider variant=\"inset\" /><ListItem button><ListItemText primary=\"middle\" /></ListItem><Divider variant=\"middle\" /><ListItem button><ListItemText primary=\".\" /></ListItem></List></Paper></Stack></Grid><Grid item xxs={6}><Stack height=\"100%\"><Typography>{\"Vertical\"}</Typography><Paper elevation={5} sx={{\n        flex: \"1\"\n      }}><Stack direction=\"row\" height=\"100%\" textAlign=\"center\" alignItems=\"center\"><Box height=\"50px\" minWidth=\"50px\" width=\"25%\"><p>{\"fullWidth >\"}</p></Box><Divider flexItem orientation=\"vertical\" variant=\"fullWidth\" /><Box height=\"50px\" minWidth=\"50px\" width=\"25%\"><p>{\"middle >\"}</p></Box><Divider flexItem orientation=\"vertical\" variant=\"middle\" /><Box height=\"50px\" minWidth=\"50px\" width=\"25%\"><p>{\"string >\"}</p></Box><Divider flexItem orientation=\"vertical\" variant=\"string\" /><Box height=\"50px\" minWidth=\"50px\" width=\"25%\"><p>{\".\"}</p></Box></Stack></Paper></Stack></Grid></Grid>'
  }
};
const withText = () => /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
  spacing: 4,
  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Content, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
    children: "CENTER"
  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Content, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
    textAlign: "left",
    children: "LEFT"
  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Content, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
    textAlign: "right",
    children: "RIGHT"
  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Content, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Chip/* default */.Z, {
      label: "CHIP"
    })
  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Content, {})]
});
withText.storyName = 'With Text';
withText.parameters = {
  storySource: {
    source: '<Stack spacing={4}><Content /><Divider>{\"CENTER\"}</Divider><Content /><Divider textAlign=\"left\">{\"LEFT\"}</Divider><Content /><Divider textAlign=\"right\">{\"RIGHT\"}</Divider><Content /><Divider><Chip label=\"CHIP\" /></Divider><Content /></Stack>'
  }
};
const playground = args => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
      button: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
        primary: "Inbox"
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib_divider, {
      variant: "fullWidth",
      ...args
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
      button: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
        primary: "Drafts"
      })
    })]
  });
};
playground.storyName = 'Playground';
playground.argTypes = {
  error: false,
  checked: false
};
playground.parameters = {
  storySource: {
    source: 'args => {\n  return <div>\n          <ListItem button>\n            <ListItemText primary=\"Inbox\" />\n          </ListItem>\n          <Divider variant=\"fullWidth\" {...args} />\n          <ListItem button>\n            <ListItemText primary=\"Drafts\" />\n          </ListItem>\n        </div>;\n}'
  }
};
const componentMeta = {
  title: 'Divider',
  component: lib_divider,
  tags: ['stories-mdx'],
  includeStories: ["basicUsage", "variations", "orientation", "withText", "playground"]
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = { ...(componentMeta.parameters.docs || {}),
  page: MDXContent
};
/* harmony default export */ const divider_stories = (componentMeta);

/***/ })

}]);
//# sourceMappingURL=divider-src-lib-__stories__-divider-stories-mdx.e53cd1ad.iframe.bundle.js.map