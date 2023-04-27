"use strict";
(self["webpackChunknovatics"] = self["webpackChunknovatics"] || []).push([[498],{

/***/ 23930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "breakpoints": () => (/* binding */ breakpoints),
  "createTheme": () => (/* binding */ createTheme),
  "default": () => (/* binding */ styles_stories),
  "styledFunction": () => (/* binding */ styledFunction)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(89526);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(18380);
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/dist/blocks.mjs
var blocks = __webpack_require__(88843);
// EXTERNAL MODULE: ./node_modules/@storybook/react/dist/index.mjs
var dist = __webpack_require__(70019);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 2 modules
var Button = __webpack_require__(38864);
;// CONCATENATED MODULE: ./packages/styles/package.json
const package_namespaceObject = {"i8":"0.3.0"};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__(21496);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(33130);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styles_styled = __webpack_require__(82500);
;// CONCATENATED MODULE: ./packages/styles/src/lib/styled.ts



var transientOptions = {
  shouldForwardProp: function shouldForwardProp(propName) {
    return !propName.startsWith('$');
  }
};
var styled = function styled(component, options) {
  return (0,styles_styled/* default */.ZP)(component, Object.assign({}, transientOptions, options));
};
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(50871);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(98356);
// EXTERNAL MODULE: ./packages/tokens/src/index.ts
var src = __webpack_require__(18971);
// EXTERNAL MODULE: ./packages/styles/src/index.ts + 12 modules
var styles_src = __webpack_require__(39406);
// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var emotion_react_jsx_runtime_browser_esm = __webpack_require__(28179);
;// CONCATENATED MODULE: ./packages/styles/src/lib/stories/grid-breakpoints.tsx






var StyledBox = (0,styles_src/* styled */.zo)(Box/* default */.Z)(function () {
  return {
    border: '2px solid',
    borderColor: src/* colors.penumbra */.O9.penumbra,
    padding: '10px',
    borderRadius: '4px',
    textAlign: 'center',
    fontWeight: 'bold'
  };
});
var GridBreakpoints = function GridBreakpoints() {
  return (0,emotion_react_jsx_runtime_browser_esm/* jsxs */.BX)(Grid/* default */.ZP, {
    container: true,
    spacing: 2,
    padding: 1,
    children: [(0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(Grid/* default */.ZP, {
      xxs: 4,
      xs: 6,
      sm: 1,
      md: 5,
      lg: 2,
      xl: 4,
      xxl: 1,
      padding: 1,
      children: (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(StyledBox, {
        sx: {
          backgroundColor: 'tertiary.light'
        },
        children: "1"
      })
    }), (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(Grid/* default */.ZP, {
      xxs: 8,
      xs: 6,
      sm: 11,
      md: 7,
      lg: 10,
      xl: 8,
      xxl: 11,
      padding: 1,
      children: (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(StyledBox, {
        sx: {
          backgroundColor: 'secondary.light'
        },
        children: "2"
      })
    }), (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(Grid/* default */.ZP, {
      xxs: 8,
      xs: 6,
      sm: 11,
      md: 7,
      lg: 10,
      xl: 8,
      xxl: 11,
      padding: 1,
      children: (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(StyledBox, {
        sx: {
          backgroundColor: 'success.light'
        },
        children: "3"
      })
    }), (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(Grid/* default */.ZP, {
      xxs: 4,
      xs: 6,
      sm: 1,
      md: 5,
      lg: 2,
      xl: 4,
      xxl: 1,
      padding: 1,
      children: (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(StyledBox, {
        sx: {
          backgroundColor: 'warning.light'
        },
        children: "4"
      })
    })]
  });
};
GridBreakpoints.displayName = "GridBreakpoints";
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(67557);
;// CONCATENATED MODULE: ./packages/styles/src/lib/styles.stories.mdx














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
      p: "p",
      h3: "h3",
      code: "code",
      pre: "pre",
      a: "a",
      div: "div",
      ul: "ul",
      h2: "h2",
      li: "li",
      strong: "strong"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);

    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Meta */.h_, {
        title: "Styles"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.h1, {
        id: "styles-",
        children: ["Styles ", /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: `https://img.shields.io/badge/Version-v${package_namespaceObject.i8}-brightgreenn`
        })]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
        children: "Basic functions to create a MUI theme with our default colors, spacings, border radius, shadows and typography."
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "installation",
        children: "Installation"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["First install the latest version of the package from ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "@novatics/<%= fileName %>"
        }), "."]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-shell",
          children: "  yarn add -D @novatics/styles\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-shell",
          children: "  npm install --dev @novatics/styles\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
        children: "and use it"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-tsx",
          children: "import { ThemeProvider, createTheme, styled } from '@novatics/styles';\n\nconst theme = createTheme();\nconst Button = styled('button')({ background: 'red' });\n\nreturn (\n  <ThemeProvider theme={theme}>\n    <Button>Click me</Button>\n  </ThemeProvider>\n);\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "dependencies",
        children: "Dependencies"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["This component extends ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.a, {
          href: "https://mui.com/material-ui/customization/theming/",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "Material UI"
        }), ". Therefore is needed to install Material UI:"]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "yarn add @mui/material @emotion/react @emotion/styled\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "create-theme",
        children: "Create Theme"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["Our package provide a custon createTheme function that creates a MUI theme based in our ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/tokens--colors",
          children: "tokens"
        }), "\nTo use it follow the documentation at Material-UI"]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-tsx",
          children: "import { ThemeProvider, createTheme, styled } from '@novatics/styles';\n\nconst App = ({ children }) => {\n  const theme = createTheme();\n\n  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;\n};\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Create Theme",
          children: args => {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(_components.div, {
              style: {
                display: 'flex',
                justifyContent: 'center'
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.Z, {
                variant: "contained",
                children: "Click me"
              })
            });
          }
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "styled-function",
        children: "Styled function"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["We also provide a custom styled function. It extends the styled from MUI but has transient props built in.\nThis means that we can pass props not recognized by DOM using the dollar sign ($) as a prefix. More like we have in ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.a, {
          href: "https://styled-components.com/docs/api#using-custom-props",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "styled-components"
        }), "\nThis is useful when we are using @emotion/styled as our styling engine."]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-tsx",
          children: "import { styled } from '@novatics/styles';\n\nexport const ListItem = styled('li')(({ $isFirst, $isLast }) => ({\n  borderStyle: 'solid',\n  borderColor: 'black',\n  padding: '16px',\n  borderTopRightRadius: $isFirst ? '16px' : undefined,\n  borderTopLeftRadius: $isFirst ? '16px' : undefined,\n  borderBottomRightRadius: $isLast ? '16px' : undefined,\n  borderBottomLeftRadius: $isLast ? '16px' : undefined,\n  borderTop: $isFirst ? undefined : 'none',\n}));\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
        children: "In the code above you can pass the properties $isFirst and $isLast without worry of warnings in console saying that isFirst is not a valid DOM element prop"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Styled Function",
          children: args => {
            const ListItem = styled('li')(({
              $isFirst,
              $isLast
            }) => ({
              borderStyle: 'solid',
              borderColor: 'black',
              padding: '16px',
              borderTopRightRadius: $isFirst ? '16px' : undefined,
              borderTopLeftRadius: $isFirst ? '16px' : undefined,
              borderBottomRightRadius: $isLast ? '16px' : undefined,
              borderBottomLeftRadius: $isLast ? '16px' : undefined,
              borderTop: $isFirst ? undefined : 'none'
            }));
            return /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.ul, {
              style: {
                listStyleType: 'none'
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ListItem, {
                $isFirst: true,
                children: "This is First"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem, {
                children: "This is middle"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem, {
                $isLast: true,
                children: "This is last"
              })]
            });
          }
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h2, {
        id: "breakpoints",
        children: "Breakpoints"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
        children: "Each breakpoint [key] matches with a fixed screen width [value]:"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.li, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(_components.strong, {
            children: "xxs"
          }), ": extra-extra-small: 0px"]
        }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.li, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(_components.strong, {
            children: "xs"
          }), ": extra-small: 600px"]
        }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.li, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(_components.strong, {
            children: "sm"
          }), ": small: 960px"]
        }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.li, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(_components.strong, {
            children: "md"
          }), ": medium: 1024px"]
        }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.li, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(_components.strong, {
            children: "lg"
          }), ": large: 1200px"]
        }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.li, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(_components.strong, {
            children: "xl"
          }), ": extra-large: 1440px"]
        }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.li, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(_components.strong, {
            children: "xxl"
          }), ": extra-extra-large: 1728px"]
        }), "\n"]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Breakpoints",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(GridBreakpoints, {})
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.strong, {
          children: "Breakpoints Applied:"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.li, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(_components.strong, {
            children: "1 & 4"
          }), " -> ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.strong, {
            children: "xxs"
          }), ": 4 ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.strong, {
            children: "xs"
          }), ": 6 ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.strong, {
            children: "sm"
          }), ": 1 ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.strong, {
            children: "md"
          }), ": 5 ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.strong, {
            children: "lg"
          }), ": 2 ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.strong, {
            children: "xl"
          }), ": 4 ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.strong, {
            children: "xxl"
          }), ": 1"]
        }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.li, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(_components.strong, {
            children: "2 & 3"
          }), " -> ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.strong, {
            children: "xxs"
          }), ": 8 ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.strong, {
            children: "xs"
          }), ": 6 ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.strong, {
            children: "sm"
          }), ": 11 ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.strong, {
            children: "md"
          }), ": 7 ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.strong, {
            children: "lg"
          }), ": 10 ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.strong, {
            children: "xl"
          }), ": 8 ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.strong, {
            children: "xxl"
          }), ": 11"]
        }), "\n"]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
        children: "made by Novatics ❤"
      })]
    });
  }
}
/* ========= */


const createTheme = args => {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.Z, {
      variant: "contained",
      children: "Click me"
    })
  });
};
createTheme.storyName = 'Create Theme';
createTheme.parameters = {
  storySource: {
    source: 'args => {\n  return <div style={{\n    display: \"flex\",\n    justifyContent: \"center\"\n  }}>\n          <Button variant=\"contained\">Click me</Button>\n        </div>;\n}'
  }
};
const styledFunction = args => {
  const ListItem = styled("li")(({
    $isFirst,
    $isLast
  }) => ({
    borderStyle: "solid",
    borderColor: "black",
    padding: "16px",
    borderTopRightRadius: $isFirst ? "16px" : undefined,
    borderTopLeftRadius: $isFirst ? "16px" : undefined,
    borderBottomRightRadius: $isLast ? "16px" : undefined,
    borderBottomLeftRadius: $isLast ? "16px" : undefined,
    borderTop: $isFirst ? undefined : "none"
  }));
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
    style: {
      listStyleType: "none"
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ListItem, {
      $isFirst: true,
      children: "This is First"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem, {
      children: "This is middle"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem, {
      $isLast: true,
      children: "This is last"
    })]
  });
};
styledFunction.storyName = 'Styled Function';
styledFunction.parameters = {
  storySource: {
    source: 'args => {\n  const ListItem = styled(\"li\")(({\n    $isFirst,\n    $isLast\n  }) => ({\n    borderStyle: \"solid\",\n    borderColor: \"black\",\n    padding: \"16px\",\n    borderTopRightRadius: $isFirst ? \"16px\" : undefined,\n    borderTopLeftRadius: $isFirst ? \"16px\" : undefined,\n    borderBottomRightRadius: $isLast ? \"16px\" : undefined,\n    borderBottomLeftRadius: $isLast ? \"16px\" : undefined,\n    borderTop: $isFirst ? undefined : \"none\"\n  }));\n  return <ul style={{\n    listStyleType: \"none\"\n  }}>\n          <ListItem $isFirst>This is First</ListItem>\n          <ListItem>This is middle</ListItem>\n          <ListItem $isLast>This is last</ListItem>\n        </ul>;\n}'
  }
};
const breakpoints = () => /*#__PURE__*/(0,jsx_runtime.jsx)(GridBreakpoints, {});
breakpoints.storyName = 'Breakpoints';
breakpoints.parameters = {
  storySource: {
    source: '<GridBreakpoints />'
  }
};
const componentMeta = {
  title: 'Styles',
  tags: ['stories-mdx'],
  includeStories: ["createTheme", "styledFunction", "breakpoints"]
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = { ...(componentMeta.parameters.docs || {}),
  page: MDXContent
};
/* harmony default export */ const styles_stories = (componentMeta);

/***/ })

}]);
//# sourceMappingURL=styles-src-lib-styles-stories-mdx.53b9b2a9.iframe.bundle.js.map