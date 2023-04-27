"use strict";
(self["webpackChunknovatics"] = self["webpackChunknovatics"] || []).push([[602],{

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

/***/ 95881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__page": () => (/* binding */ __page),
  "default": () => (/* binding */ core_stories)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(89526);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(18380);
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/dist/blocks.mjs
var blocks = __webpack_require__(88843);
;// CONCATENATED MODULE: ./packages/core/package.json
const package_namespaceObject = {"i":"0.1.0"};
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(67557);
;// CONCATENATED MODULE: ./packages/core/src/lib/core.stories.mdx










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
      blockquote: "blockquote"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);

    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Meta */.h_, {
        title: "All Components/Core"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.h1, {
        id: "core-",
        children: ["Core ", /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: `https://img.shields.io/badge/Version-v${package_namespaceObject.i}-brightgreenn`
        })]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "basic-usage",
        children: "Basic Usage"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["First install the latest version of the package from ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "@novatics/core"
        }), "."]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-shell",
          children: "  yarn add -D @novatics/core\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-shell",
          children: "  npm install --dev @novatics/core\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
        children: "and use it"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-tsx",
          children: "import { Button, CurrencyTextField, ...} from '@novatics/core';\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
          children: "All components are exported by the core"
        }), "\n"]
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
  title: 'All Components/Core',
  tags: ['stories-mdx'],
  includeStories: ["__page"]
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = { ...(componentMeta.parameters.docs || {}),
  page: MDXContent
};
/* harmony default export */ const core_stories = (componentMeta);

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
//# sourceMappingURL=core-src-lib-core-stories-mdx.8d7b0c54.iframe.bundle.js.map