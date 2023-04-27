(self["webpackChunknovatics"] = self["webpackChunknovatics"] || []).push([[982],{

/***/ 94804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "basicUsage": () => (/* binding */ basicUsage),
  "clickInteraction": () => (/* binding */ clickInteraction),
  "colors": () => (/* binding */ colors),
  "default": () => (/* binding */ chip_stories),
  "deleteInteraction": () => (/* binding */ deleteInteraction),
  "icon": () => (/* binding */ icon),
  "size": () => (/* binding */ size)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(89526);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(18380);
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/dist/blocks.mjs
var blocks = __webpack_require__(88843);
// EXTERNAL MODULE: ./node_modules/@storybook/react/dist/index.mjs
var dist = __webpack_require__(70019);
;// CONCATENATED MODULE: ./packages/chip/package.json
const package_namespaceObject = {"i":"0.1.0"};
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ChairOutlined.js
var ChairOutlined = __webpack_require__(29640);
// EXTERNAL MODULE: ./node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(75000);
;// CONCATENATED MODULE: ./packages/chip/src/lib/chip.tsx



/* harmony default export */ const chip = (Chip/* default */.Z);
try {
    // @ts-ignore
    getChipUtilityClass.displayName = "getChipUtilityClass";
    // @ts-ignore
    getChipUtilityClass.__docgenInfo = { "description": "", "displayName": "getChipUtilityClass", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["packages/chip/src/lib/chip.tsx#getChipUtilityClass"] = { docgenInfo: getChipUtilityClass.__docgenInfo, name: "getChipUtilityClass", path: "packages/chip/src/lib/chip.tsx#getChipUtilityClass" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(67557);
;// CONCATENATED MODULE: ./packages/chip/src/lib/chip.stories.mdx













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
      div: "div"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);

    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Meta */.h_, {
        title: "Chip",
        component: chip
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.h1, {
        id: "chip-",
        children: ["Chip ", /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: `https://img.shields.io/badge/Version-v${package_namespaceObject.i}-brightgreenn`
        })]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "installation",
        children: "Installation"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["First install the latest version of the package from ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "@novatics/chip"
        }), "."]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-shell",
          children: "  yarn add -D @novatics/chip\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "basic-usage",
        children: "Basic Usage"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "Chip"
        }), " component have two variants: it supports outlined and filled styling. The default variant is filled."]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Basic Usage",
          children: args => {
            return /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.div, {
              style: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '10px'
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
                label: "Chip"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
                label: "Chip",
                variant: "outlined"
              })]
            });
          }
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "click-interaction",
        children: "Click interaction"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["Chips can be clickable. In this case, it will have a hover and a click effect. It can be set by either passing the ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "clickable"
        }), " prop or by passing a function to ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "onClick"
        }), " prop."]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Click interaction",
          children: args => {
            return /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.div, {
              style: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '10px'
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
                label: "Clickable Chip",
                clickable: true
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
                label: "Click Me",
                onClick: () => window.alert('Hi! :)'),
                variant: "outlined"
              })]
            });
          }
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "delete-interaction",
        children: "Delete interaction"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["A ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "Chip"
        }), " can present a delete icon by passing a ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "onDelete"
        }), " prop."]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Delete interaction",
          children: args => {
            return /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.div, {
              style: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '10px'
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
                label: "Deletable Chip",
                onDelete: () => {}
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
                label: "Deletable Chip",
                onDelete: () => {},
                variant: "outlined"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
                label: "Deletable and Clickable",
                onDelete: () => {},
                clickable: true,
                variant: "outlined"
              })]
            });
          }
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "size",
        children: "Size"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["A ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "Chip"
        }), " can be small or medium. The default size is medium."]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Size",
          children: args => {
            return /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.div, {
              style: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '10px'
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
                label: "Small",
                size: "small"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
                label: "Small",
                size: "small",
                variant: "outlined"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
                label: "Small",
                size: "small",
                onDelete: () => {},
                clickable: true
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
                label: "Small",
                size: "small",
                onDelete: () => {},
                variant: "outlined",
                clickable: true
              })]
            });
          }
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "icon",
        children: "Icon"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["A ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "Chip"
        }), " can also have an icon, always placed on left."]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Icon",
          children: args => {
            return /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.div, {
              style: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '10px'
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
                label: "Icon",
                icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {})
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
                label: "Icon",
                icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {}),
                variant: "outlined"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
                label: "Icon",
                icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {}),
                size: "small"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
                label: "Icon",
                icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {}),
                size: "small",
                variant: "outlined"
              })]
            });
          }
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "colors",
        children: "Colors"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
        children: "A 'Chip' can display a range of colors in addition to the default."
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Colors",
          children: args => {
            return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(_components.div, {
                style: {
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '10px'
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
                  label: "Primary",
                  color: "primary",
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {}),
                  onDelete: () => {},
                  clickable: true
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
                  label: "Info",
                  color: "info",
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {}),
                  onDelete: () => {},
                  clickable: true
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
                  label: "Success",
                  color: "success",
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {}),
                  onDelete: () => {},
                  clickable: true
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
                  label: "Error",
                  color: "error",
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {}),
                  onDelete: () => {},
                  clickable: true
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
                  label: "Warning",
                  color: "warning",
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {}),
                  onDelete: () => {},
                  clickable: true
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.div, {
                style: {
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '10px'
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
                  label: "Primary",
                  color: "primary",
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {}),
                  onDelete: () => {},
                  clickable: true,
                  variant: "outlined"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
                  label: "Info",
                  color: "info",
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {}),
                  onDelete: () => {},
                  clickable: true,
                  variant: "outlined"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
                  label: "Success",
                  color: "success",
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {}),
                  onDelete: () => {},
                  clickable: true,
                  variant: "outlined"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
                  label: "Error",
                  color: "error",
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {}),
                  onDelete: () => {},
                  clickable: true,
                  variant: "outlined"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
                  label: "Warning",
                  color: "warning",
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {}),
                  onDelete: () => {},
                  clickable: true,
                  variant: "outlined"
                })]
              })]
            });
          }
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
        children: "made by Novatics ❤"
      })]
    });
  }
}
/* ========= */


const basicUsage = args => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "10px"
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
      label: "Chip"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
      label: "Chip",
      variant: "outlined"
    })]
  });
};
basicUsage.storyName = 'Basic Usage';
basicUsage.parameters = {
  storySource: {
    source: 'args => {\n  return <div style={{\n    display: \"flex\",\n    flexDirection: \"row\",\n    alignItems: \"center\",\n    gap: \"10px\"\n  }}>\n          <Chip label=\"Chip\" />\n          <Chip label=\"Chip\" variant=\"outlined\" />\n        </div>;\n}'
  }
};
const clickInteraction = args => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "10px"
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
      label: "Clickable Chip",
      clickable: true
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
      label: "Click Me",
      onClick: () => window.alert("Hi! :)"),
      variant: "outlined"
    })]
  });
};
clickInteraction.storyName = 'Click interaction';
clickInteraction.parameters = {
  storySource: {
    source: 'args => {\n  return <div style={{\n    display: \"flex\",\n    flexDirection: \"row\",\n    alignItems: \"center\",\n    gap: \"10px\"\n  }}>\n          <Chip label=\"Clickable Chip\" clickable />\n          <Chip label=\"Click Me\" onClick={() => window.alert(\"Hi! :)\")} variant=\"outlined\" />\n        </div>;\n}'
  }
};
const deleteInteraction = args => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "10px"
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
      label: "Deletable Chip",
      onDelete: () => {}
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
      label: "Deletable Chip",
      onDelete: () => {},
      variant: "outlined"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
      label: "Deletable and Clickable",
      onDelete: () => {},
      clickable: true,
      variant: "outlined"
    })]
  });
};
deleteInteraction.storyName = 'Delete interaction';
deleteInteraction.parameters = {
  storySource: {
    source: 'args => {\n  return <div style={{\n    display: \"flex\",\n    flexDirection: \"row\",\n    alignItems: \"center\",\n    gap: \"10px\"\n  }}>\n          <Chip label=\"Deletable Chip\" onDelete={() => {}} />\n          <Chip label=\"Deletable Chip\" onDelete={() => {}} variant=\"outlined\" />\n          <Chip label=\"Deletable and Clickable\" onDelete={() => {}} clickable variant=\"outlined\" />\n        </div>;\n}'
  }
};
const size = args => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "10px"
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
      label: "Small",
      size: "small"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
      label: "Small",
      size: "small",
      variant: "outlined"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
      label: "Small",
      size: "small",
      onDelete: () => {},
      clickable: true
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
      label: "Small",
      size: "small",
      onDelete: () => {},
      variant: "outlined",
      clickable: true
    })]
  });
};
size.storyName = 'Size';
size.parameters = {
  storySource: {
    source: 'args => {\n  return <div style={{\n    display: \"flex\",\n    flexDirection: \"row\",\n    alignItems: \"center\",\n    gap: \"10px\"\n  }}>\n          <Chip label=\"Small\" size=\"small\" />\n          <Chip label=\"Small\" size=\"small\" variant=\"outlined\" />\n          <Chip label=\"Small\" size=\"small\" onDelete={() => {}} clickable />\n          <Chip label=\"Small\" size=\"small\" onDelete={() => {}} variant=\"outlined\" clickable />\n        </div>;\n}'
  }
};
const icon = args => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "10px"
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
      label: "Icon",
      icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {})
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
      label: "Icon",
      icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {}),
      variant: "outlined"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
      label: "Icon",
      icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {}),
      size: "small"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
      label: "Icon",
      icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {}),
      size: "small",
      variant: "outlined"
    })]
  });
};
icon.storyName = 'Icon';
icon.parameters = {
  storySource: {
    source: 'args => {\n  return <div style={{\n    display: \"flex\",\n    flexDirection: \"row\",\n    alignItems: \"center\",\n    gap: \"10px\"\n  }}>\n          <Chip label=\"Icon\" icon={<ChairOutlinedIcon />} />\n          <Chip label=\"Icon\" icon={<ChairOutlinedIcon />} variant=\"outlined\" />\n          <Chip label=\"Icon\" icon={<ChairOutlinedIcon />} size=\"small\" />\n          <Chip label=\"Icon\" icon={<ChairOutlinedIcon />} size=\"small\" variant=\"outlined\" />\n        </div>;\n}'
  }
};
const colors = args => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
        marginBottom: "10px"
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
        label: "Primary",
        color: "primary",
        icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {}),
        onDelete: () => {},
        clickable: true
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
        label: "Info",
        color: "info",
        icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {}),
        onDelete: () => {},
        clickable: true
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
        label: "Success",
        color: "success",
        icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {}),
        onDelete: () => {},
        clickable: true
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
        label: "Error",
        color: "error",
        icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {}),
        onDelete: () => {},
        clickable: true
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
        label: "Warning",
        color: "warning",
        icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {}),
        onDelete: () => {},
        clickable: true
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px"
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
        label: "Primary",
        color: "primary",
        icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {}),
        onDelete: () => {},
        clickable: true,
        variant: "outlined"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
        label: "Info",
        color: "info",
        icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {}),
        onDelete: () => {},
        clickable: true,
        variant: "outlined"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
        label: "Success",
        color: "success",
        icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {}),
        onDelete: () => {},
        clickable: true,
        variant: "outlined"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
        label: "Error",
        color: "error",
        icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {}),
        onDelete: () => {},
        clickable: true,
        variant: "outlined"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(chip, {
        label: "Warning",
        color: "warning",
        icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChairOutlined/* default */.Z, {}),
        onDelete: () => {},
        clickable: true,
        variant: "outlined"
      })]
    })]
  });
};
colors.storyName = 'Colors';
colors.parameters = {
  storySource: {
    source: 'args => {\n  return <>\n          <div style={{\n      display: \"flex\",\n      flexDirection: \"row\",\n      alignItems: \"center\",\n      gap: \"10px\",\n      marginBottom: \"10px\"\n    }}>\n            <Chip label=\"Primary\" color=\"primary\" icon={<ChairOutlinedIcon />} onDelete={() => {}} clickable />\n            <Chip label=\"Info\" color=\"info\" icon={<ChairOutlinedIcon />} onDelete={() => {}} clickable />\n            <Chip label=\"Success\" color=\"success\" icon={<ChairOutlinedIcon />} onDelete={() => {}} clickable />\n            <Chip label=\"Error\" color=\"error\" icon={<ChairOutlinedIcon />} onDelete={() => {}} clickable />\n            <Chip label=\"Warning\" color=\"warning\" icon={<ChairOutlinedIcon />} onDelete={() => {}} clickable />\n          </div>\n          <div style={{\n      display: \"flex\",\n      flexDirection: \"row\",\n      alignItems: \"center\",\n      gap: \"10px\"\n    }}>\n            <Chip label=\"Primary\" color=\"primary\" icon={<ChairOutlinedIcon />} onDelete={() => {}} clickable variant=\"outlined\" />\n            <Chip label=\"Info\" color=\"info\" icon={<ChairOutlinedIcon />} onDelete={() => {}} clickable variant=\"outlined\" />\n            <Chip label=\"Success\" color=\"success\" icon={<ChairOutlinedIcon />} onDelete={() => {}} clickable variant=\"outlined\" />\n            <Chip label=\"Error\" color=\"error\" icon={<ChairOutlinedIcon />} onDelete={() => {}} clickable variant=\"outlined\" />\n            <Chip label=\"Warning\" color=\"warning\" icon={<ChairOutlinedIcon />} onDelete={() => {}} clickable variant=\"outlined\" />\n          </div>\n        </>;\n}'
  }
};
const componentMeta = {
  title: 'Chip',
  component: chip,
  tags: ['stories-mdx'],
  includeStories: ["basicUsage", "clickInteraction", "deleteInteraction", "size", "icon", "colors"]
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = { ...(componentMeta.parameters.docs || {}),
  page: MDXContent
};
/* harmony default export */ const chip_stories = (componentMeta);

/***/ }),

/***/ 29640:
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
  d: "M20 8V6c0-1.65-1.35-3-3-3H7C5.35 3 4 4.35 4 6v2c-1.65 0-3 1.35-3 3v5c0 1.65 1.35 3 3 3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1c1.65 0 3-1.35 3-3v-5c0-1.65-1.35-3-3-3zM6 6c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v2.78c-.61.55-1 1.34-1 2.22v2H7v-2c0-.88-.39-1.67-1-2.22V6zm15 10c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v4h14v-4c0-.55.45-1 1-1s1 .45 1 1v5z"
}), 'ChairOutlined');
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

/***/ 75000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Chip_Chip)
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
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(4228);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(67557);
;// CONCATENATED MODULE: ./node_modules/@mui/material/internal/svg-icons/Cancel.js



/**
 * @ignore - internal component.
 */

/* harmony default export */ const Cancel = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), 'Cancel'));
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useForkRef.js
var useForkRef = __webpack_require__(89428);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(88623);
// EXTERNAL MODULE: ./node_modules/@mui/material/ButtonBase/ButtonBase.js + 6 modules
var ButtonBase = __webpack_require__(98592);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(89857);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(82500);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(67402);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(85111);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Chip/chipClasses.js


function getChipUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiChip', slot);
}
const chipClasses = (0,generateUtilityClasses/* default */.Z)('MuiChip', ['root', 'sizeSmall', 'sizeMedium', 'colorError', 'colorInfo', 'colorPrimary', 'colorSecondary', 'colorSuccess', 'colorWarning', 'disabled', 'clickable', 'clickableColorPrimary', 'clickableColorSecondary', 'deletable', 'deletableColorPrimary', 'deletableColorSecondary', 'outlined', 'filled', 'outlinedPrimary', 'outlinedSecondary', 'filledPrimary', 'filledSecondary', 'avatar', 'avatarSmall', 'avatarMedium', 'avatarColorPrimary', 'avatarColorSecondary', 'icon', 'iconSmall', 'iconMedium', 'iconColorPrimary', 'iconColorSecondary', 'label', 'labelSmall', 'labelMedium', 'deleteIcon', 'deleteIconSmall', 'deleteIconMedium', 'deleteIconColorPrimary', 'deleteIconColorSecondary', 'deleteIconOutlinedColorPrimary', 'deleteIconOutlinedColorSecondary', 'deleteIconFilledColorPrimary', 'deleteIconFilledColorSecondary', 'focusVisible']);
/* harmony default export */ const Chip_chipClasses = (chipClasses);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Chip/Chip.js


const _excluded = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"];















const useUtilityClasses = ownerState => {
  const {
    classes,
    disabled,
    size,
    color,
    iconColor,
    onDelete,
    clickable,
    variant
  } = ownerState;
  const slots = {
    root: ['root', variant, disabled && 'disabled', `size${(0,capitalize/* default */.Z)(size)}`, `color${(0,capitalize/* default */.Z)(color)}`, clickable && 'clickable', clickable && `clickableColor${(0,capitalize/* default */.Z)(color)}`, onDelete && 'deletable', onDelete && `deletableColor${(0,capitalize/* default */.Z)(color)}`, `${variant}${(0,capitalize/* default */.Z)(color)}`],
    label: ['label', `label${(0,capitalize/* default */.Z)(size)}`],
    avatar: ['avatar', `avatar${(0,capitalize/* default */.Z)(size)}`, `avatarColor${(0,capitalize/* default */.Z)(color)}`],
    icon: ['icon', `icon${(0,capitalize/* default */.Z)(size)}`, `iconColor${(0,capitalize/* default */.Z)(iconColor)}`],
    deleteIcon: ['deleteIcon', `deleteIcon${(0,capitalize/* default */.Z)(size)}`, `deleteIconColor${(0,capitalize/* default */.Z)(color)}`, `deleteIcon${(0,capitalize/* default */.Z)(variant)}Color${(0,capitalize/* default */.Z)(color)}`]
  };
  return (0,composeClasses/* default */.Z)(slots, getChipUtilityClass, classes);
};
const ChipRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiChip',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    const {
      color,
      iconColor,
      clickable,
      onDelete,
      size,
      variant
    } = ownerState;
    return [{
      [`& .${Chip_chipClasses.avatar}`]: styles.avatar
    }, {
      [`& .${Chip_chipClasses.avatar}`]: styles[`avatar${(0,capitalize/* default */.Z)(size)}`]
    }, {
      [`& .${Chip_chipClasses.avatar}`]: styles[`avatarColor${(0,capitalize/* default */.Z)(color)}`]
    }, {
      [`& .${Chip_chipClasses.icon}`]: styles.icon
    }, {
      [`& .${Chip_chipClasses.icon}`]: styles[`icon${(0,capitalize/* default */.Z)(size)}`]
    }, {
      [`& .${Chip_chipClasses.icon}`]: styles[`iconColor${(0,capitalize/* default */.Z)(iconColor)}`]
    }, {
      [`& .${Chip_chipClasses.deleteIcon}`]: styles.deleteIcon
    }, {
      [`& .${Chip_chipClasses.deleteIcon}`]: styles[`deleteIcon${(0,capitalize/* default */.Z)(size)}`]
    }, {
      [`& .${Chip_chipClasses.deleteIcon}`]: styles[`deleteIconColor${(0,capitalize/* default */.Z)(color)}`]
    }, {
      [`& .${Chip_chipClasses.deleteIcon}`]: styles[`deleteIcon${(0,capitalize/* default */.Z)(variant)}Color${(0,capitalize/* default */.Z)(color)}`]
    }, styles.root, styles[`size${(0,capitalize/* default */.Z)(size)}`], styles[`color${(0,capitalize/* default */.Z)(color)}`], clickable && styles.clickable, clickable && color !== 'default' && styles[`clickableColor${(0,capitalize/* default */.Z)(color)})`], onDelete && styles.deletable, onDelete && color !== 'default' && styles[`deletableColor${(0,capitalize/* default */.Z)(color)}`], styles[variant], styles[`${variant}${(0,capitalize/* default */.Z)(color)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  const textColor = theme.palette.mode === 'light' ? theme.palette.grey[700] : theme.palette.grey[300];
  return (0,esm_extends/* default */.Z)({
    maxWidth: '100%',
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(13),
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    color: (theme.vars || theme).palette.text.primary,
    backgroundColor: (theme.vars || theme).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: 'nowrap',
    transition: theme.transitions.create(['background-color', 'box-shadow']),
    // label will inherit this from root, then `clickable` class overrides this for both
    cursor: 'default',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: 'none',
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: 'middle',
    boxSizing: 'border-box',
    [`&.${Chip_chipClasses.disabled}`]: {
      opacity: (theme.vars || theme).palette.action.disabledOpacity,
      pointerEvents: 'none'
    },
    [`& .${Chip_chipClasses.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: theme.vars ? theme.vars.palette.Chip.defaultAvatarColor : textColor,
      fontSize: theme.typography.pxToRem(12)
    },
    [`& .${Chip_chipClasses.avatarColorPrimary}`]: {
      color: (theme.vars || theme).palette.primary.contrastText,
      backgroundColor: (theme.vars || theme).palette.primary.dark
    },
    [`& .${Chip_chipClasses.avatarColorSecondary}`]: {
      color: (theme.vars || theme).palette.secondary.contrastText,
      backgroundColor: (theme.vars || theme).palette.secondary.dark
    },
    [`& .${Chip_chipClasses.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: theme.typography.pxToRem(10)
    },
    [`& .${Chip_chipClasses.icon}`]: (0,esm_extends/* default */.Z)({
      marginLeft: 5,
      marginRight: -6
    }, ownerState.size === 'small' && {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    }, ownerState.iconColor === ownerState.color && (0,esm_extends/* default */.Z)({
      color: theme.vars ? theme.vars.palette.Chip.defaultIconColor : textColor
    }, ownerState.color !== 'default' && {
      color: 'inherit'
    })),
    [`& .${Chip_chipClasses.deleteIcon}`]: (0,esm_extends/* default */.Z)({
      WebkitTapHighlightColor: 'transparent',
      color: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / 0.26)` : (0,colorManipulator/* alpha */.Fq)(theme.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: 'pointer',
      margin: '0 5px 0 -6px',
      '&:hover': {
        color: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / 0.4)` : (0,colorManipulator/* alpha */.Fq)(theme.palette.text.primary, 0.4)
      }
    }, ownerState.size === 'small' && {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4
    }, ownerState.color !== 'default' && {
      color: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].contrastTextChannel} / 0.7)` : (0,colorManipulator/* alpha */.Fq)(theme.palette[ownerState.color].contrastText, 0.7),
      '&:hover, &:active': {
        color: (theme.vars || theme).palette[ownerState.color].contrastText
      }
    })
  }, ownerState.size === 'small' && {
    height: 24
  }, ownerState.color !== 'default' && {
    backgroundColor: (theme.vars || theme).palette[ownerState.color].main,
    color: (theme.vars || theme).palette[ownerState.color].contrastText
  }, ownerState.onDelete && {
    [`&.${Chip_chipClasses.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : (0,colorManipulator/* alpha */.Fq)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  }, ownerState.onDelete && ownerState.color !== 'default' && {
    [`&.${Chip_chipClasses.focusVisible}`]: {
      backgroundColor: (theme.vars || theme).palette[ownerState.color].dark
    }
  });
}, ({
  theme,
  ownerState
}) => (0,esm_extends/* default */.Z)({}, ownerState.clickable && {
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : (0,colorManipulator/* alpha */.Fq)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
  },
  [`&.${Chip_chipClasses.focusVisible}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : (0,colorManipulator/* alpha */.Fq)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
  },
  '&:active': {
    boxShadow: (theme.vars || theme).shadows[1]
  }
}, ownerState.clickable && ownerState.color !== 'default' && {
  [`&:hover, &.${Chip_chipClasses.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette[ownerState.color].dark
  }
}), ({
  theme,
  ownerState
}) => (0,esm_extends/* default */.Z)({}, ownerState.variant === 'outlined' && {
  backgroundColor: 'transparent',
  border: theme.vars ? `1px solid ${theme.vars.palette.Chip.defaultBorder}` : `1px solid ${theme.palette.mode === 'light' ? theme.palette.grey[400] : theme.palette.grey[700]}`,
  [`&.${Chip_chipClasses.clickable}:hover`]: {
    backgroundColor: (theme.vars || theme).palette.action.hover
  },
  [`&.${Chip_chipClasses.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`& .${Chip_chipClasses.avatar}`]: {
    marginLeft: 4
  },
  [`& .${Chip_chipClasses.avatarSmall}`]: {
    marginLeft: 2
  },
  [`& .${Chip_chipClasses.icon}`]: {
    marginLeft: 4
  },
  [`& .${Chip_chipClasses.iconSmall}`]: {
    marginLeft: 2
  },
  [`& .${Chip_chipClasses.deleteIcon}`]: {
    marginRight: 5
  },
  [`& .${Chip_chipClasses.deleteIconSmall}`]: {
    marginRight: 3
  }
}, ownerState.variant === 'outlined' && ownerState.color !== 'default' && {
  color: (theme.vars || theme).palette[ownerState.color].main,
  border: `1px solid ${theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.7)` : (0,colorManipulator/* alpha */.Fq)(theme.palette[ownerState.color].main, 0.7)}`,
  [`&.${Chip_chipClasses.clickable}:hover`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0,colorManipulator/* alpha */.Fq)(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity)
  },
  [`&.${Chip_chipClasses.focusVisible}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.focusOpacity})` : (0,colorManipulator/* alpha */.Fq)(theme.palette[ownerState.color].main, theme.palette.action.focusOpacity)
  },
  [`& .${Chip_chipClasses.deleteIcon}`]: {
    color: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.7)` : (0,colorManipulator/* alpha */.Fq)(theme.palette[ownerState.color].main, 0.7),
    '&:hover, &:active': {
      color: (theme.vars || theme).palette[ownerState.color].main
    }
  }
}));
const ChipLabel = (0,styled/* default */.ZP)('span', {
  name: 'MuiChip',
  slot: 'Label',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    const {
      size
    } = ownerState;
    return [styles.label, styles[`label${(0,capitalize/* default */.Z)(size)}`]];
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.Z)({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: 'nowrap'
}, ownerState.size === 'small' && {
  paddingLeft: 8,
  paddingRight: 8
}));
function isDeleteKeyboardEvent(keyboardEvent) {
  return keyboardEvent.key === 'Backspace' || keyboardEvent.key === 'Delete';
}

/**
 * Chips represent complex entities in small blocks, such as a contact.
 */
const Chip = /*#__PURE__*/react.forwardRef(function Chip(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiChip'
  });
  const {
      avatar: avatarProp,
      className,
      clickable: clickableProp,
      color = 'default',
      component: ComponentProp,
      deleteIcon: deleteIconProp,
      disabled = false,
      icon: iconProp,
      label,
      onClick,
      onDelete,
      onKeyDown,
      onKeyUp,
      size = 'medium',
      variant = 'filled',
      tabIndex,
      skipFocusWhenDisabled = false
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const chipRef = react.useRef(null);
  const handleRef = (0,useForkRef/* default */.Z)(chipRef, ref);
  const handleDeleteIconClick = event => {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation();
    if (onDelete) {
      onDelete(event);
    }
  };
  const handleKeyDown = event => {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
      // Will be handled in keyUp, otherwise some browsers
      // might init navigation
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  const handleKeyUp = event => {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target) {
      if (onDelete && isDeleteKeyboardEvent(event)) {
        onDelete(event);
      } else if (event.key === 'Escape' && chipRef.current) {
        chipRef.current.blur();
      }
    }
    if (onKeyUp) {
      onKeyUp(event);
    }
  };
  const clickable = clickableProp !== false && onClick ? true : clickableProp;
  const component = clickable || onDelete ? ButtonBase/* default */.Z : ComponentProp || 'div';
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    component,
    disabled,
    size,
    color,
    iconColor: /*#__PURE__*/react.isValidElement(iconProp) ? iconProp.props.color || color : color,
    onDelete: !!onDelete,
    clickable,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  const moreProps = component === ButtonBase/* default */.Z ? (0,esm_extends/* default */.Z)({
    component: ComponentProp || 'div',
    focusVisibleClassName: classes.focusVisible
  }, onDelete && {
    disableRipple: true
  }) : {};
  let deleteIcon = null;
  if (onDelete) {
    deleteIcon = deleteIconProp && /*#__PURE__*/react.isValidElement(deleteIconProp) ? /*#__PURE__*/react.cloneElement(deleteIconProp, {
      className: (0,clsx_m/* default */.Z)(deleteIconProp.props.className, classes.deleteIcon),
      onClick: handleDeleteIconClick
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Cancel, {
      className: (0,clsx_m/* default */.Z)(classes.deleteIcon),
      onClick: handleDeleteIconClick
    });
  }
  let avatar = null;
  if (avatarProp && /*#__PURE__*/react.isValidElement(avatarProp)) {
    avatar = /*#__PURE__*/react.cloneElement(avatarProp, {
      className: (0,clsx_m/* default */.Z)(classes.avatar, avatarProp.props.className)
    });
  }
  let icon = null;
  if (iconProp && /*#__PURE__*/react.isValidElement(iconProp)) {
    icon = /*#__PURE__*/react.cloneElement(iconProp, {
      className: (0,clsx_m/* default */.Z)(classes.icon, iconProp.props.className)
    });
  }
  if (false) {}
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ChipRoot, (0,esm_extends/* default */.Z)({
    as: component,
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    disabled: clickable && disabled ? true : undefined,
    onClick: onClick,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    ref: handleRef,
    tabIndex: skipFocusWhenDisabled && disabled ? -1 : tabIndex,
    ownerState: ownerState
  }, moreProps, other, {
    children: [avatar || icon, /*#__PURE__*/(0,jsx_runtime.jsx)(ChipLabel, {
      className: (0,clsx_m/* default */.Z)(classes.label),
      ownerState: ownerState,
      children: label
    }), deleteIcon]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const Chip_Chip = (Chip);

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
//# sourceMappingURL=chip-src-lib-chip-stories-mdx.71e1bfe5.iframe.bundle.js.map