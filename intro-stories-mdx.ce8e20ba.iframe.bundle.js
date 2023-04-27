"use strict";
(self["webpackChunknovatics"] = self["webpackChunknovatics"] || []).push([[36],{

/***/ 88843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$4": () => (/* reexport safe */ _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4),
/* harmony export */   "Xz": () => (/* reexport safe */ _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz),
/* harmony export */   "h_": () => (/* reexport safe */ _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_),
/* harmony export */   "oG": () => (/* reexport safe */ _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG)
/* harmony export */ });
/* harmony import */ var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6163);
/* harmony import */ var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88907);
(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.");


/***/ }),

/***/ 29383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__page": () => (/* binding */ __page),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89526);
/* harmony import */ var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18380);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88843);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70019);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67557);










function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, (0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__/* .useMDXComponents */ .ah)(), props.components);
  return MDXLayout ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout, { ...props,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent, {})
  }) : _createMdxContent();

  function _createMdxContent() {
    const _components = Object.assign({
      p: "p",
      strong: "strong",
      a: "a",
      em: "em",
      h2: "h2",
      h3: "h3",
      pre: "pre",
      code: "code",
      ol: "ol",
      li: "li"
    }, (0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__/* .useMDXComponents */ .ah)(), props.components);

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__/* .Meta */ .h_, {
        title: "Intro"
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
        align: "center",
        children: "NOVATICS UI"
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong, {
          children: "NOVATICS UI"
        }), " contains simple and complex React components, is based on ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
          href: "https://mui.com/material-ui/getting-started/overview/",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.em, {
            children: "Material UI"
          })
        })]
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2, {
        id: "installation",
        children: "Installation"
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3, {
        id: "novatics-ui",
        children: "Novatics UI"
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
        children: ["Install Novatics UI, it is available as an ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
          href: "https://www.npmjs.com/package/novatics",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "npm package"
        })]
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong, {
          children: "npm:"
        })
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          className: "language-sh",
          children: "npm install @novatics\n"
        })
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong, {
          children: "yarn:"
        })
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          className: "language-sh",
          children: "yarn add @novatics\n"
        })
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2, {
        id: "getting-started-with-novatics-ui",
        children: "Getting started with Novatics UI"
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
        children: ["Here is an example of a basic app using Novatics UI's ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          children: "CurrencyTextField"
        }), " component:"]
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          className: "language-jsx",
          children: "import * as React from 'react';\nimport CurrencyTextField from '@novatics/currency-text-field';\n\nfunction App() {\n  return (\n    <CurrencyTextField\n      value={123456}\n      onChange={() => {\n        /* setup on change */\n      }}\n    />\n  );\n}\n"
        })
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
        children: ["In this ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
          href: "https://components.novatics.com.br/?path=/docs/currency-textfield--playground",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "playground"
        }), ", try changing the props and see how it affects the output and the code."]
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2, {
        id: "contributing",
        children: "Contributing"
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3, {
        id: "developing",
        children: "Developing"
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ol, {
        children: ["\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li, {
          children: "Download the project and install dependencies"
        }), "\n"]
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          className: "language-shell",
          children: "yarn install\n"
        })
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ol, {
        start: "2",
        children: ["\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li, {
          children: ["Use nx generators to create the component and the storybook documentation. Visit the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
            href: "https://nx.dev",
            target: "_blank",
            rel: "nofollow noopener noreferrer",
            children: "Nx Documentation"
          }), " to learn more."]
        }), "\n"]
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          className: "language-shell",
          children: "yarn component:generate\n"
        })
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ol, {
        start: "3",
        children: ["\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li, {
          children: "Run the storybook to start developing"
        }), "\n"]
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          className: "language-shell",
          children: "yarn dev\n\n"
        })
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ol, {
        start: "4",
        children: ["\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li, {
          children: ["\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
            children: ["Sign-up all commits, Here is ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
              href: "https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits",
              target: "_blank",
              rel: "nofollow noopener noreferrer",
              children: "How to Sign using gpg, ssh or S/MIME"
            })]
          }), "\n"]
        }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li, {
          children: ["\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
            children: "Create a Pull request and wait for approval."
          }), "\n"]
        }), "\n"]
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3, {
        id: "local-publishing-on-docker",
        children: "Local Publishing on Docker"
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
        children: "Deploy Verdaccio on local Docker"
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          className: "language-shell",
          children: "yarn verdaccio:up\n"
        })
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
        children: "Add user to verdaccio"
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          className: "language-shell",
          children: "yarn verdaccio:addUser\n"
        })
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong, {
          children: "note"
        }), " On linux, there may be a permission error, in this case it is necessary to give permission on the sudo folder."]
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          className: "language-shell",
          children: "sudo chown 10001:65533 -R storage\n"
        })
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
        children: "Create versions, push to git and deploy."
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          className: "language-shell",
          children: "yarn versions:create:push:deploy\n"
        })
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2, {
        id: "license",
        children: "License"
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
        children: ["This project is licensed under the terms of the\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
          href: "/LICENSE",
          children: "MIT license"
        }), "."]
      })]
    });
  }
}
/* ========= */


const __page = () => {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
const componentMeta = {
  title: 'Intro',
  tags: ['stories-mdx'],
  includeStories: ["__page"]
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = { ...(componentMeta.parameters.docs || {}),
  page: MDXContent
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (componentMeta);

/***/ }),

/***/ 70019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports composeStories, composeStory, configure, forceReRender, raw, setGlobalConfig, setProjectAnnotations, storiesOf */
/* harmony import */ var _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23116);
/* harmony import */ var _chunk_R4NKYYJA_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60034);
/* harmony import */ var _storybook_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25934);
/* harmony import */ var _storybook_preview_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59149);
/* harmony import */ var _storybook_preview_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_storybook_preview_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6163);
/* harmony import */ var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_storybook_client_logger__WEBPACK_IMPORTED_MODULE_4__);
var{window:globalWindow}=_storybook_global__WEBPACK_IMPORTED_MODULE_2__.global;globalWindow&&(globalWindow.STORYBOOK_ENV="react");var RENDERER="react",api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_3__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__/* .renderToCanvas */ .b,{render: _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__/* .render */ .s}),storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:RENDERER}),configure=(...args)=>api.configure(RENDERER,...args),forceReRender=api.forceReRender,raw=api.clientApi.raw;function setProjectAnnotations(projectAnnotations){originalSetProjectAnnotations(projectAnnotations)}function setGlobalConfig(projectAnnotations){deprecate("setGlobalConfig is deprecated. Use setProjectAnnotations instead."),setProjectAnnotations(projectAnnotations)}var defaultProjectAnnotations={render: _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__/* .render */ .s};function composeStory(story,componentAnnotations,projectAnnotations,exportsName){return originalComposeStory(story,componentAnnotations,projectAnnotations,defaultProjectAnnotations,exportsName)}function composeStories(csfExports,projectAnnotations){return originalComposeStories(csfExports,projectAnnotations,composeStory)} true&& undefined;


/***/ }),

/***/ 18380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NF": () => (/* binding */ withMDXComponents),
/* harmony export */   "Zo": () => (/* binding */ MDXProvider),
/* harmony export */   "ah": () => (/* binding */ useMDXComponents),
/* harmony export */   "pC": () => (/* binding */ MDXContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89526);
/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('mdx/types.js').MDXComponents} Components
 *
 * @typedef Props
 *   Configuration.
 * @property {Components | MergeComponents | null | undefined} [components]
 *   Mapping of names for JSX components to React components.
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context.
 * @property {ReactNode | null | undefined} [children]
 *   Children.
 *
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Components} currentComponents
 *   Current components from the context.
 * @returns {Components}
 *   Merged components.
 */



/**
 * @type {import('react').Context<Components>}
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components and
 *   `MDXProvider` to set context based components instead.
 */
const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({})

/**
 * @param {import('react').ComponentType<any>} Component
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components instead.
 */
function withMDXComponents(Component) {
  return boundMDXComponent

  /**
   * @param {Record<string, unknown> & {components?: Components | null | undefined}} props
   * @returns {JSX.Element}
   */
  function boundMDXComponent(props) {
    const allComponents = useMDXComponents(props.components)
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, {...props, allComponents})
  }
}

/**
 * Get current components from the MDX Context.
 *
 * @param {Components | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that takes the current
 *   components and filters/merges/changes them.
 * @returns {Components}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    // Custom merge via a function prop
    if (typeof components === 'function') {
      return components(contextComponents)
    }

    return {...contextComponents, ...components}
  }, [contextComponents, components])
}

/** @type {Components} */
const emptyObject = {}

/**
 * Provider for MDX context
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
function MDXProvider({components, children, disableParentContext}) {
  /** @type {Components} */
  let allComponents

  if (disableParentContext) {
    allComponents =
      typeof components === 'function'
        ? components({})
        : components || emptyObject
  } else {
    allComponents = useMDXComponents(components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    children
  )
}


/***/ })

}]);
//# sourceMappingURL=intro-stories-mdx.ce8e20ba.iframe.bundle.js.map