"use strict";
(self["webpackChunknovatics"] = self["webpackChunknovatics"] || []).push([[838],{

/***/ 90419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "borderRadius": () => (/* binding */ borderRadius),
  "colors": () => (/* binding */ colors),
  "default": () => (/* binding */ tokens_stories),
  "shadows": () => (/* binding */ shadows),
  "spacings": () => (/* binding */ spacings)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(89526);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(18380);
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/dist/blocks.mjs
var blocks = __webpack_require__(88843);
// EXTERNAL MODULE: ./node_modules/@storybook/react/dist/index.mjs
var dist = __webpack_require__(70019);
// EXTERNAL MODULE: ./node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(38882);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(50871);
// EXTERNAL MODULE: ./node_modules/@mui/material/Paper/Paper.js + 2 modules
var Paper = __webpack_require__(77290);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(19855);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(98356);
// EXTERNAL MODULE: ./node_modules/lodash.keys/index.js
var lodash_keys = __webpack_require__(91580);
var lodash_keys_default = /*#__PURE__*/__webpack_require__.n(lodash_keys);
// EXTERNAL MODULE: ./node_modules/lodash.includes/index.js
var lodash_includes = __webpack_require__(14400);
var lodash_includes_default = /*#__PURE__*/__webpack_require__.n(lodash_includes);
// EXTERNAL MODULE: ./node_modules/lodash.snakecase/index.js
var lodash_snakecase = __webpack_require__(73271);
var lodash_snakecase_default = /*#__PURE__*/__webpack_require__.n(lodash_snakecase);
// EXTERNAL MODULE: ./node_modules/lodash.startcase/index.js
var lodash_startcase = __webpack_require__(89067);
var lodash_startcase_default = /*#__PURE__*/__webpack_require__.n(lodash_startcase);
;// CONCATENATED MODULE: ./packages/tokens/package.json
const package_namespaceObject = {"i8":"0.1.0"};
// EXTERNAL MODULE: ./packages/tokens/src/lib/tokens.ts + 5 modules
var tokens = __webpack_require__(79000);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(39275);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(22321);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(73214);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(19701);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(10853);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(55281);
;// CONCATENATED MODULE: ./packages/tokens/src/lib/__stories__/constants.ts











var LIGHTER_COLORS = ['newMoon', 'halo', 'supernova'];
var formatColorName = function formatColorName(color) {
  return lodash_startcase_default()(lodash_snakecase_default()(color)).replace('_', ' ');
};
var getColorTextColor = function getColorTextColor(color) {
  if (lodash_includes_default()(color, '--light')) return '#000000';
  if (lodash_includes_default()(LIGHTER_COLORS, color)) return '#000000';
  return '#FFFFFF';
};
var defaultColors = lodash_keys_default()(tokens/* default.colors */.ZP.colors).filter(function (color) {
  return !lodash_includes_default()(color, '--');
}).map(function (color) {
  return formatColorName(color);
});
var collator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: 'base'
});
var sortedSpacings = lodash_keys_default()(tokens/* default.spacings */.ZP.spacings).sort(collator.compare);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(67557);
;// CONCATENATED MODULE: ./packages/tokens/src/lib/__stories__/tokens.stories.mdx






















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
      pre: "pre",
      code: "code",
      h3: "h3",
      span: "span"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);

    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Meta */.h_, {
        title: "Tokens",
        component: tokens/* default */.ZP
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.h1, {
        id: "tokens-",
        children: ["Tokens ", /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: `https://img.shields.io/badge/Version-v${package_namespaceObject.i8}-brightgreenn`
        })]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
        children: "Here we provide the novatics tokens stylesheet. This package is used on our style component to create components with our brand!"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
        children: "You can install the package with"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-shell",
          children: "  yarn add -D @novatics/tokens\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-shell",
          children: "  npm install --dev @novatics/tokens\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
        children: "and use it"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-tsx",
          children: "import Tokens, { colors, borderRadius, shadows, spacing, typography } from '@novatics/tokens';\n\n  ...\n  color: Tokens.colors.nebula.main\n  backgroundColor: colors.nebula.light\n  ...\n\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "colors",
        children: "Colors"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
          children: "We have some awesome colors in our theme:"
        }), defaultColors.map((c, i) => i === defaultColors.length - 1 ? `and ${c}` : `${c}, `).join(''), /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
          children: "Some of the colors have variants."
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
          children: ["The variant can be accessed by adding '--variant' to the token. For example:", ' ', "\n", /*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
            children: "\"nebula--dark\": \"#5D23C9\""
          })]
        })]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Colors",
          children: args => {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
              container: true,
              spacing: 2,
              children: lodash_keys_default()(tokens/* default.colors */.ZP.colors).map(name => /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 3,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(Stack/* default */.Z, {
                  spacing: 1,
                  children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                    square: true,
                    sx: {
                      padding: 3,
                      height: '106px',
                      backgroundColor: tokens/* default.colors */.ZP.colors[name]
                    },
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                      variant: "body",
                      fontWeight: "700",
                      color: getColorTextColor(name),
                      children: formatColorName(name)
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                      variant: "bodySmall",
                      color: getColorTextColor(name),
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(_components.span, {
                        style: {
                          opacity: 0.7
                        },
                        children: "HEX"
                      }), ' ', tokens/* default.colors */.ZP.colors[name]]
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                      variant: "bodySmall",
                      color: getColorTextColor(name),
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(_components.span, {
                        style: {
                          opacity: 0.7
                        },
                        children: "TOKEN"
                      }), " ", name]
                    })]
                  })
                })
              }))
            });
          }
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "border-radius",
        children: "Border Radius"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
          children: ["Our round corners are defined here with three options: small, regular and\nlarge. We provide the ", /*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
            children: "number"
          }), " option for pixel or rem."]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
          children: ["The values can be retrived by", ' ', "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)("strong", {
            children: ["\"borderRadius.small\": ", `{ "px": 8, "rem": 0.5 }`, "'"]
          })]
        })]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Border Radius",
          children: args => {
            return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
              container: true,
              spacing: 4,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 4,
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                  spacing: 1,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "h5",
                    fontWeight: "700",
                    children: "Small"
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "caption",
                    children: "borderRadius.small"
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                    direction: "row",
                    spacing: 3,
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
                      height: "108px",
                      width: "256px",
                      borderRadius: `${tokens/* default.borderRadius.small.px */.ZP.borderRadius.small.px}px`,
                      backgroundColor: tokens/* default.colors.cosmos */.ZP.colors.cosmos
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                      spacing: 1,
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "bodySmall",
                        children: "Corner Radius"
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
                        borderLeft: "1px solid black",
                        height: "40px",
                        pl: 1,
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                          variant: "caption",
                          children: `${tokens/* default.borderRadius.small.px */.ZP.borderRadius.small.px}px`
                        })
                      })]
                    })]
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 4,
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                  spacing: 1,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "h5",
                    fontWeight: "700",
                    children: "Regular"
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "caption",
                    children: "borderRadius.regular"
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                    direction: "row",
                    spacing: 3,
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
                      height: "108px",
                      width: "256px",
                      borderRadius: `${tokens/* default.borderRadius.regular.px */.ZP.borderRadius.regular.px}px`,
                      backgroundColor: tokens/* default.colors.cosmos */.ZP.colors.cosmos
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                      spacing: 1,
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "bodySmall",
                        children: "Corner Radius"
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
                        borderLeft: "1px solid black",
                        height: "40px",
                        pl: 1,
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                          variant: "caption",
                          children: `${tokens/* default.borderRadius.regular.px */.ZP.borderRadius.regular.px}px`
                        })
                      })]
                    })]
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 4,
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                  spacing: 1,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "h5",
                    fontWeight: "700",
                    children: "Large"
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "caption",
                    children: "borderRadius.large"
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                    direction: "row",
                    spacing: 3,
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
                      height: "108px",
                      width: "256px",
                      borderRadius: `${tokens/* default.borderRadius.large.px */.ZP.borderRadius.large.px}px`,
                      backgroundColor: tokens/* default.colors.cosmos */.ZP.colors.cosmos
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                      spacing: 1,
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "bodySmall",
                        children: "Corner Radius"
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
                        borderLeft: "1px solid black",
                        height: "40px",
                        pl: 1,
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                          variant: "caption",
                          children: `${tokens/* default.borderRadius.large.px */.ZP.borderRadius.large.px}px`
                        })
                      })]
                    })]
                  })]
                })
              })]
            });
          }
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "spacings",
        children: "Spacings"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
          children: ["All of our spacings are a multiple of 8. The initial value is 0.5 and goes to\n12. Be aware that we ", /*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
            children: "don't"
          }), " have each step of the series."]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
          children: ["Values can be retrived by", ' ', "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)("strong", {
            children: ["\"spacings[\"0.5\"]: ", `{ "px": 4, "rem": 0.25 }`, "'"]
          })]
        })]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Spacings",
          children: args => {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(Stack/* default */.Z, {
              spacing: 1,
              children: sortedSpacings.map(spacing => /*#__PURE__*/(0,jsx_runtime.jsxs)(Box/* default */.Z, {
                display: "flex",
                alignItems: "center",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
                  height: `${tokens/* default.spacings */.ZP.spacings[spacing].px}px`,
                  width: "40%",
                  backgroundColor: tokens/* default.colors.nebula--light */.ZP.colors["nebula--light"],
                  borderTop: `1px dashed ${tokens/* default.colors.nebula */.ZP.colors.nebula}`,
                  borderBottom: `1px dashed ${tokens/* default.colors.nebula */.ZP.colors.nebula}`,
                  mr: 3
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                  direction: "row",
                  spacing: 2,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
                    width: "100px",
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                      variant: "body",
                      children: ["spacings[", spacing, "]"]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    variant: "body",
                    sx: {
                      opacity: '0.7'
                    },
                    children: [spacing, " * 8 = ", Number(spacing) * 8, "px"]
                  })]
                })]
              }))
            });
          }
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "shadows",
        children: "Shadows"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
          children: "For shadows, we create two entities: Blackhole and Cosmos. Both have four\nvariants: low, medium, intermediate and high."
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
          children: ["To get the values combine the desired name with the '--variant'", ' ']
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
            children: "\"shadows[\"blackhole--high\"]: \"0px 16px 32px 4px rgba(37, 37, 37, 0.13)\"\""
          })
        })]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Shadows",
          children: args => {
            return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
              container: true,
              spacing: 4,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(Stack/* default */.Z, {
                  spacing: 5,
                  children: ['low', 'medium', 'intermediate', 'high'].map(variant => /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                    spacing: 1,
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                      variant: "bodySmall",
                      children: `blackhole--${variant}`
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
                      height: "108px",
                      width: "90%",
                      sx: {
                        boxShadow: tokens/* default.shadows */.ZP.shadows[`blackhole--${variant}`]
                      }
                    })]
                  }))
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(Stack/* default */.Z, {
                  spacing: 5,
                  children: ['low', 'medium', 'intermediate', 'high'].map(variant => /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                    spacing: 1,
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                      variant: "bodySmall",
                      children: `cosmos--${variant}`
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
                      height: "108px",
                      width: "90%",
                      sx: {
                        boxShadow: tokens/* default.shadows */.ZP.shadows[`cosmos--${variant}`]
                      }
                    })]
                  }))
                })
              })]
            });
          }
        })
      })]
    });
  }
}
/* ========= */


const colors = args => {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
    container: true,
    spacing: 2,
    children: lodash_keys_default()(tokens/* default.colors */.ZP.colors).map(name => /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
      item: true,
      xs: 3,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Stack/* default */.Z, {
        spacing: 1,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Paper/* default */.Z, {
          square: true,
          sx: {
            padding: 3,
            height: "106px",
            backgroundColor: tokens/* default.colors */.ZP.colors[name]
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "body",
            fontWeight: "700",
            color: getColorTextColor(name),
            children: formatColorName(name)
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Typography/* default */.Z, {
            variant: "bodySmall",
            color: getColorTextColor(name),
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              style: {
                opacity: 0.7
              },
              children: "HEX"
            }), " ", tokens/* default.colors */.ZP.colors[name]]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Typography/* default */.Z, {
            variant: "bodySmall",
            color: getColorTextColor(name),
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              style: {
                opacity: 0.7
              },
              children: "TOKEN"
            }), " ", name]
          })]
        })
      })
    }))
  });
};
colors.storyName = 'Colors';
colors.parameters = {
  storySource: {
    source: 'args => {\n  return <Grid container spacing={2}>\n          {keys(Tokens.colors).map(name => <Grid item xs={3}>\n              <Stack spacing={1}>\n                <Paper square sx={{\n          padding: 3,\n          height: \"106px\",\n          backgroundColor: Tokens.colors[name]\n        }}>\n                  <Typography variant=\"body\" fontWeight=\"700\" color={getColorTextColor(name)}>\n                    {formatColorName(name)}\n                  </Typography>\n                  <Typography variant=\"bodySmall\" color={getColorTextColor(name)}>\n                    <span style={{\n              opacity: 0.7\n            }}>HEX</span>{\" \"}\n                    {Tokens.colors[name]}\n                  </Typography>\n                  <Typography variant=\"bodySmall\" color={getColorTextColor(name)}>\n                    <span style={{\n              opacity: 0.7\n            }}>TOKEN</span> {name}\n                  </Typography>\n                </Paper>\n              </Stack>\n            </Grid>)}\n        </Grid>;\n}'
  }
};
const borderRadius = args => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
    container: true,
    spacing: 4,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
      item: true,
      xs: 4,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        spacing: 1,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
          variant: "h5",
          fontWeight: "700",
          children: "Small"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
          variant: "caption",
          children: "borderRadius.small"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
          direction: "row",
          spacing: 3,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
            height: "108px",
            width: "256px",
            borderRadius: `${tokens/* default.borderRadius.small.px */.ZP.borderRadius.small.px}px`,
            backgroundColor: tokens/* default.colors.cosmos */.ZP.colors.cosmos
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
            spacing: 1,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
              variant: "bodySmall",
              children: "Corner Radius"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
              borderLeft: "1px solid black",
              height: "40px",
              pl: 1,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "caption",
                children: `${tokens/* default.borderRadius.small.px */.ZP.borderRadius.small.px}px`
              })
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
      item: true,
      xs: 4,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        spacing: 1,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
          variant: "h5",
          fontWeight: "700",
          children: "Regular"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
          variant: "caption",
          children: "borderRadius.regular"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
          direction: "row",
          spacing: 3,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
            height: "108px",
            width: "256px",
            borderRadius: `${tokens/* default.borderRadius.regular.px */.ZP.borderRadius.regular.px}px`,
            backgroundColor: tokens/* default.colors.cosmos */.ZP.colors.cosmos
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
            spacing: 1,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
              variant: "bodySmall",
              children: "Corner Radius"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
              borderLeft: "1px solid black",
              height: "40px",
              pl: 1,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "caption",
                children: `${tokens/* default.borderRadius.regular.px */.ZP.borderRadius.regular.px}px`
              })
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
      item: true,
      xs: 4,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        spacing: 1,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
          variant: "h5",
          fontWeight: "700",
          children: "Large"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
          variant: "caption",
          children: "borderRadius.large"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
          direction: "row",
          spacing: 3,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
            height: "108px",
            width: "256px",
            borderRadius: `${tokens/* default.borderRadius.large.px */.ZP.borderRadius.large.px}px`,
            backgroundColor: tokens/* default.colors.cosmos */.ZP.colors.cosmos
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
            spacing: 1,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
              variant: "bodySmall",
              children: "Corner Radius"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
              borderLeft: "1px solid black",
              height: "40px",
              pl: 1,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "caption",
                children: `${tokens/* default.borderRadius.large.px */.ZP.borderRadius.large.px}px`
              })
            })]
          })]
        })]
      })
    })]
  });
};
borderRadius.storyName = 'Border Radius';
borderRadius.parameters = {
  storySource: {
    source: 'args => {\n  return <Grid container spacing={4}>\n          <Grid item xs={4}>\n            <Stack spacing={1}>\n              <Typography variant=\"h5\" fontWeight=\"700\">\n                Small\n              </Typography>\n              <Typography variant=\"caption\">borderRadius.small</Typography>\n              <Stack direction=\"row\" spacing={3}>\n                <Box height=\"108px\" width=\"256px\" borderRadius={`${Tokens.borderRadius.small.px}px`} backgroundColor={Tokens.colors.cosmos} />\n                <Stack spacing={1}>\n                  <Typography variant=\"bodySmall\">Corner Radius</Typography>\n                  <Box borderLeft=\"1px solid black\" height=\"40px\" pl={1}>\n                    <Typography variant=\"caption\">\n                      {`${Tokens.borderRadius.small.px}px`}\n                    </Typography>\n                  </Box>\n                </Stack>\n              </Stack>\n            </Stack>\n          </Grid>\n          <Grid item xs={4}>\n            <Stack spacing={1}>\n              <Typography variant=\"h5\" fontWeight=\"700\">\n                Regular\n              </Typography>\n              <Typography variant=\"caption\">borderRadius.regular</Typography>\n              <Stack direction=\"row\" spacing={3}>\n                <Box height=\"108px\" width=\"256px\" borderRadius={`${Tokens.borderRadius.regular.px}px`} backgroundColor={Tokens.colors.cosmos} />\n                <Stack spacing={1}>\n                  <Typography variant=\"bodySmall\">Corner Radius</Typography>\n                  <Box borderLeft=\"1px solid black\" height=\"40px\" pl={1}>\n                    <Typography variant=\"caption\">\n                      {`${Tokens.borderRadius.regular.px}px`}\n                    </Typography>\n                  </Box>\n                </Stack>\n              </Stack>\n            </Stack>\n          </Grid>\n          <Grid item xs={4}>\n            <Stack spacing={1}>\n              <Typography variant=\"h5\" fontWeight=\"700\">\n                Large\n              </Typography>\n              <Typography variant=\"caption\">borderRadius.large</Typography>\n              <Stack direction=\"row\" spacing={3}>\n                <Box height=\"108px\" width=\"256px\" borderRadius={`${Tokens.borderRadius.large.px}px`} backgroundColor={Tokens.colors.cosmos} />\n                <Stack spacing={1}>\n                  <Typography variant=\"bodySmall\">Corner Radius</Typography>\n                  <Box borderLeft=\"1px solid black\" height=\"40px\" pl={1}>\n                    <Typography variant=\"caption\">\n                      {`${Tokens.borderRadius.large.px}px`}\n                    </Typography>\n                  </Box>\n                </Stack>\n              </Stack>\n            </Stack>\n          </Grid>\n        </Grid>;\n}'
  }
};
const spacings = args => {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Stack/* default */.Z, {
    spacing: 1,
    children: sortedSpacings.map(spacing => /*#__PURE__*/(0,jsx_runtime.jsxs)(Box/* default */.Z, {
      display: "flex",
      alignItems: "center",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
        height: `${tokens/* default.spacings */.ZP.spacings[spacing].px}px`,
        width: "40%",
        backgroundColor: tokens/* default.colors.nebula--light */.ZP.colors["nebula--light"],
        borderTop: `1px dashed ${tokens/* default.colors.nebula */.ZP.colors.nebula}`,
        borderBottom: `1px dashed ${tokens/* default.colors.nebula */.ZP.colors.nebula}`,
        mr: 3
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        direction: "row",
        spacing: 2,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
          width: "100px",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Typography/* default */.Z, {
            variant: "body",
            children: ["spacings[", spacing, "]"]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Typography/* default */.Z, {
          variant: "body",
          sx: {
            opacity: "0.7"
          },
          children: [spacing, " * 8 = ", Number(spacing) * 8, "px"]
        })]
      })]
    }))
  });
};
spacings.storyName = 'Spacings';
spacings.parameters = {
  storySource: {
    source: 'args => {\n  return <Stack spacing={1}>\n          {sortedSpacings.map(spacing => <Box display=\"flex\" alignItems=\"center\">\n              <Box height={`${Tokens.spacings[spacing].px}px`} width=\"40%\" backgroundColor={Tokens.colors[\"nebula--light\"]} borderTop={`1px dashed ${Tokens.colors.nebula}`} borderBottom={`1px dashed ${Tokens.colors.nebula}`} mr={3} />\n              <Stack direction=\"row\" spacing={2}>\n                <Box width=\"100px\">\n                  <Typography variant=\"body\">spacings[{spacing}]</Typography>\n                </Box>\n                <Typography variant=\"body\" sx={{\n          opacity: \"0.7\"\n        }}>\n                  {spacing} * 8 = {Number(spacing) * 8}px\n                </Typography>\n              </Stack>\n            </Box>)}\n        </Stack>;\n}'
  }
};
const shadows = args => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
    container: true,
    spacing: 4,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
      item: true,
      xs: 6,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Stack/* default */.Z, {
        spacing: 5,
        children: ["low", "medium", "intermediate", "high"].map(variant => /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
          spacing: 1,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "bodySmall",
            children: `blackhole--${variant}`
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
            height: "108px",
            width: "90%",
            sx: {
              boxShadow: tokens/* default.shadows */.ZP.shadows[`blackhole--${variant}`]
            }
          })]
        }))
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.ZP, {
      item: true,
      xs: 6,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Stack/* default */.Z, {
        spacing: 5,
        children: ["low", "medium", "intermediate", "high"].map(variant => /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.Z, {
          spacing: 1,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "bodySmall",
            children: `cosmos--${variant}`
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
            height: "108px",
            width: "90%",
            sx: {
              boxShadow: tokens/* default.shadows */.ZP.shadows[`cosmos--${variant}`]
            }
          })]
        }))
      })
    })]
  });
};
shadows.storyName = 'Shadows';
shadows.parameters = {
  storySource: {
    source: 'args => {\n  return <Grid container spacing={4}>\n          <Grid item xs={6}>\n            <Stack spacing={5}>\n              {[\"low\", \"medium\", \"intermediate\", \"high\"].map(variant => <Stack spacing={1}>\n                  <Typography variant=\"bodySmall\">{`blackhole--${variant}`}</Typography>\n                  <Box height=\"108px\" width=\"90%\" sx={{\n            boxShadow: Tokens.shadows[`blackhole--${variant}`]\n          }} />\n                </Stack>)}\n            </Stack>\n          </Grid>\n          <Grid item xs={6}>\n            <Stack spacing={5}>\n              {[\"low\", \"medium\", \"intermediate\", \"high\"].map(variant => <Stack spacing={1}>\n                  <Typography variant=\"bodySmall\">{`cosmos--${variant}`}</Typography>\n                  <Box height=\"108px\" width=\"90%\" sx={{\n            boxShadow: Tokens.shadows[`cosmos--${variant}`]\n          }} />\n                </Stack>)}\n            </Stack>\n          </Grid>\n        </Grid>;\n}'
  }
};
const componentMeta = {
  title: 'Tokens',
  component: tokens/* default */.ZP,
  tags: ['stories-mdx'],
  includeStories: ["colors", "borderRadius", "spacings", "shadows"]
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = { ...(componentMeta.parameters.docs || {}),
  page: MDXContent
};
/* harmony default export */ const tokens_stories = (componentMeta);

/***/ })

}]);
//# sourceMappingURL=tokens-src-lib-__stories__-tokens-stories-mdx.3a3550ae.iframe.bundle.js.map