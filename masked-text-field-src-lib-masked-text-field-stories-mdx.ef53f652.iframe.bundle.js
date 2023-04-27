"use strict";
(self["webpackChunknovatics"] = self["webpackChunknovatics"] || []).push([[672],{

/***/ 70056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "basicUsage": () => (/* binding */ basicUsage),
  "default": () => (/* binding */ masked_text_field_stories),
  "playground": () => (/* binding */ playground),
  "presets": () => (/* binding */ presets)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(89526);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(18380);
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/dist/blocks.mjs
var blocks = __webpack_require__(88843);
// EXTERNAL MODULE: ./node_modules/@storybook/react/dist/index.mjs
var dist = __webpack_require__(70019);
;// CONCATENATED MODULE: ./packages/masked-text-field/package.json
const package_namespaceObject = {"i8":"0.1.0"};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(39446);
var objectWithoutPropertiesLoose_default = /*#__PURE__*/__webpack_require__.n(objectWithoutPropertiesLoose);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-string.js
var es_date_to_string = __webpack_require__(39180);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(10853);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(33290);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(33130);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 48 modules
var TextField = __webpack_require__(36043);
// EXTERNAL MODULE: ./node_modules/imask/esm/index.js + 25 modules
var esm = __webpack_require__(43199);
;// CONCATENATED MODULE: ./packages/masked-text-field/src/lib/mask-presets.ts
var MASK_PRESETS = {
  cpf: {
    mask: '000.000.000-00'
  },
  cnpj: {
    mask: '00.000.000/0000-00'
  },
  'cpf-cnpj': {
    mask: [{
      mask: '000.000.000-00',
      maxLength: 11
    }, {
      mask: '00.000.000/0000-00'
    }]
  },
  cep: {
    mask: '00.000-000'
  },
  zipcode: {
    mask: '00000-0000'
  },
  phone: {
    mask: '(#00) 000-0000',
    definitions: {
      '#': /[1-9]/
    }
  },
  'card-number': {
    mask: '0000 0000 0000 0000'
  }
};
// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var emotion_react_jsx_runtime_browser_esm = __webpack_require__(28179);
;// CONCATENATED MODULE: ./packages/masked-text-field/src/lib/masked-text-field.tsx

var _excluded = ["maskPreset", "iMaskProps", "initialValue", "onChange", "outputFormat"];









function MaskedTextField(props) {
  var maskPreset = props.maskPreset,
    iMaskProps = props.iMaskProps,
    _props$initialValue = props.initialValue,
    initialValue = _props$initialValue === void 0 ? '' : _props$initialValue,
    onChange = props.onChange,
    _props$outputFormat = props.outputFormat,
    outputFormat = _props$outputFormat === void 0 ? 'unmasked' : _props$outputFormat,
    rest = objectWithoutPropertiesLoose_default()(props, _excluded);
  var _useState = (0,react.useState)(''),
    maskedValue = _useState[0],
    setMaskedValue = _useState[1];
  var maskOptions = (0,react.useMemo)(function () {
    if (maskPreset) {
      return MASK_PRESETS[maskPreset];
    }
    if (iMaskProps) {
      return iMaskProps;
    }
    return {
      mask: String
    };
  }, [iMaskProps, maskPreset]);
  var masked = (0,react.useMemo)(function () {
    return esm/* default.createMask */.ZP.createMask(maskOptions);
  }, [maskOptions]);
  (0,react.useEffect)(function () {
    if (initialValue) {
      masked.resolve(initialValue.toString());
      setMaskedValue(masked.value);
    }
  }, [masked, initialValue]);
  var maskInput = (0,react.useCallback)(function (stgValue) {
    masked.resolve(stgValue);
    var onChangeValue = outputFormat === 'unmasked' ? masked.unmaskedValue : masked.value;
    onChange(onChangeValue || '');
    setMaskedValue(masked.value);
  }, [masked, outputFormat, onChange]);
  return (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(TextField/* default */.Z, Object.assign({
    value: maskedValue,
    onChange: function onChange(e) {
      return maskInput(e.target.value);
    }
  }, rest));
}
MaskedTextField.displayName = "MaskedTextField";
/* harmony default export */ const masked_text_field = ((/* unused pure expression or super */ null && (MaskedTextField)));
try {
    // @ts-ignore
    MaskedTextField.displayName = "MaskedTextField";
    // @ts-ignore
    MaskedTextField.__docgenInfo = { "description": "", "displayName": "MaskedTextField", "props": { "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": true, "type": { "name": "(value: string) => void" } }, "initialValue": { "defaultValue": null, "description": "", "name": "initialValue", "required": false, "type": { "name": "string" } }, "iMaskProps": { "defaultValue": null, "description": "", "name": "iMaskProps", "required": false, "type": { "name": "AnyMaskedOptions" } }, "maskPreset": { "defaultValue": null, "description": "", "name": "maskPreset", "required": false, "type": { "name": "enum", "value": [{ "value": "\"cpf\"" }, { "value": "\"cnpj\"" }, { "value": "\"cpf-cnpj\"" }, { "value": "\"cep\"" }, { "value": "\"zipcode\"" }, { "value": "\"phone\"" }, { "value": "\"card-number\"" }] } }, "outputFormat": { "defaultValue": null, "description": "", "name": "outputFormat", "required": false, "type": { "name": "enum", "value": [{ "value": "\"masked\"" }, { "value": "\"unmasked\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["packages/masked-text-field/src/lib/masked-text-field.tsx#MaskedTextField"] = { docgenInfo: MaskedTextField.__docgenInfo, name: "MaskedTextField", path: "packages/masked-text-field/src/lib/masked-text-field.tsx#MaskedTextField" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(67557);
;// CONCATENATED MODULE: ./packages/masked-text-field/src/lib/masked-text-field.stories.mdx



/*setup on change*/

/*setup on change*/









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
      div: "div"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);

    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Meta */.h_, {
        title: "Masked Textfield",
        component: MaskedTextField
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.h1, {
        id: "maskedtextfield-",
        children: ["MaskedTextField ", /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: `https://img.shields.io/badge/Version-v${package_namespaceObject.i8}-brightgreenn`
        })]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
        children: "Use this component for masked inputs"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "installation",
        children: "Installation"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["First install the latest version of the package from ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "@novatics/masked-text-field"
        }), "."]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "yarn add @novatics/masked-text-field\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "dependencies",
        children: "Dependencies"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["This component extends ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.a, {
          href: "https://mui.com/material-ui/react-text-field",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "Material UI React Text Field"
        }), ". Therefore is needed to install Material UI:"]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "yarn add @mui/material @emotion/react @emotion/styled\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "basic-usage",
        children: "Basic Usage"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["The imaskProps attribute is implemented as per the ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.a, {
          href: "https://imask.js.org/guide.html#masked-base",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "iMask documentation"
        })]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Basic Usage",
          children: args => {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(_components.div, {
              style: {
                display: 'flex',
                flexDirection: 'row'
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(MaskedTextField, {
                initialValue: 123456789,
                iMaskProps: {
                  mask: '000-000-000-000'
                },
                onChange: e => {
                  /*setup on change*/
                },
                ...args
              })
            });
          }
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-tsx",
          children: "import MaskedTextField from '@novatics/masked-text-field';\n\n<MaskedTextField\n  initialValue={123456789}\n  iMaskProps={{ mask: '000-000-000-000' }}\n  onChange={(e) => {\n    /* setup on change */\n  }}\n  {...args}\n/>;\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "presets",
        children: "Presets"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["It is possible to use the maskPreset attribute to use one of the ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/Novatics/novatics-ui/blob/master/packages/masked-text-field/src/lib/mask-presets.ts",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "pre-configured masks"
        }), "."]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Presets",
          children: args => {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(_components.div, {
              style: {
                display: 'flex',
                flexDirection: 'row'
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(MaskedTextField, {
                initialValue: 12345678901,
                maskPreset: "cpf",
                onChange: e => {
                  /*setup on change*/
                },
                ...args
              })
            });
          }
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-tsx",
          children: "import MaskedTextField from '@novatics/masked-text-field';\n\n<MaskedTextField\n  initialValue={12345678901}\n  maskPreset=\"cpf\"\n  onChange={(e) => {\n    /* setup on change */\n  }}\n  {...args}\n/>;\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "playground",
        children: "Playground"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Playground",
          argTypes: {
            onChange: {
              description: "Input's onChange method."
            },
            initialValue: {
              description: "Input's initial value."
            },
            maskPreset: {
              description: 'maskPreset has a higher priority than iMaskProps, this means that if the maskPreset is not null it will override iMaskProps'
            },
            outputFormat: {
              description: "Format type returned on onChange Method. 'masked' -> masked value, as shown. 'unmasked' -> unmasked number."
            }
          },
          children: args => {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(_components.div, {
              style: {
                display: 'flex',
                flexDirection: 'row'
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(MaskedTextField, { ...args
              })
            });
          }
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* ArgsTable */.$4, {
        story: "Playground"
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
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(MaskedTextField, {
      initialValue: 123456789,
      iMaskProps: {
        mask: "000-000-000-000"
      },
      onChange: e => {
        /* setup on change */
      },
      ...args
    })
  });
};
basicUsage.storyName = 'Basic Usage';
basicUsage.parameters = {
  storySource: {
    source: 'args => {\n  return <div style={{\n    display: \"flex\",\n    flexDirection: \"row\"\n  }}>\n          <MaskedTextField initialValue={123456789} iMaskProps={{\n      mask: \"000-000-000-000\"\n    }} onChange={e => {\n      /* setup on change */\n    }} {...args} />\n        </div>;\n}'
  }
};
const presets = args => {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    style: {
      display: "flex",
      flexDirection: "row"
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(MaskedTextField, {
      initialValue: 12345678901,
      maskPreset: "cpf",
      onChange: e => {
        /* setup on change */
      },
      ...args
    })
  });
};
presets.storyName = 'Presets';
presets.parameters = {
  storySource: {
    source: 'args => {\n  return <div style={{\n    display: \"flex\",\n    flexDirection: \"row\"\n  }}>\n          <MaskedTextField initialValue={12345678901} maskPreset=\"cpf\" onChange={e => {\n      /* setup on change */\n    }} {...args} />\n        </div>;\n}'
  }
};
const playground = args => {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    style: {
      display: "flex",
      flexDirection: "row"
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(MaskedTextField, { ...args
    })
  });
};
playground.storyName = 'Playground';
playground.argTypes = {
  onChange: {
    description: "Input's onChange method."
  },
  initialValue: {
    description: "Input's initial value."
  },
  maskPreset: {
    description: "maskPreset has a higher priority than iMaskProps, this means that if the maskPreset is not null it will override iMaskProps"
  },
  outputFormat: {
    description: "Format type returned on onChange Method. 'masked' -> masked value, as shown. 'unmasked' -> unmasked number."
  }
};
playground.parameters = {
  storySource: {
    source: 'args => {\n  return <div style={{\n    display: \"flex\",\n    flexDirection: \"row\"\n  }}>\n          <MaskedTextField {...args} />\n        </div>;\n}'
  }
};
const componentMeta = {
  title: 'Masked Textfield',
  component: MaskedTextField,
  tags: ['stories-mdx'],
  includeStories: ["basicUsage", "presets", "playground"]
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = { ...(componentMeta.parameters.docs || {}),
  page: MDXContent
};
/* harmony default export */ const masked_text_field_stories = (componentMeta);

/***/ })

}]);
//# sourceMappingURL=masked-text-field-src-lib-masked-text-field-stories-mdx.ef53f652.iframe.bundle.js.map