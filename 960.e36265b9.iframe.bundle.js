"use strict";
(self["webpackChunknovatics"] = self["webpackChunknovatics"] || []).push([[960],{

/***/ 40960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DocsRenderer": () => (/* reexport */ DocsRenderer)
});

// UNUSED EXPORTS: defaultComponents

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(89526);
// EXTERNAL MODULE: ./node_modules/@storybook/react-dom-shim/dist/react-18.mjs
var react_18 = __webpack_require__(43253);
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 8 modules
var dist = __webpack_require__(88907);
;// CONCATENATED MODULE: ./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs
var defaultComponents={code:dist/* CodeOrSourceMdx */.bD,a:dist/* AnchorMdx */.Ct,...dist/* HeadersMdx */.lO},ErrorBoundary=class extends react.Component{constructor(){super(...arguments);this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise((resolve,reject)=>{__webpack_require__.e(/* import() */ 265).then(__webpack_require__.bind(__webpack_require__, 63592)).then(({MDXProvider})=>(0,react_18/* renderElement */.l)(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(dist/* Docs */.WI,{context,docsParameter}))),element)).then(resolve)})},this.unmount=element=>{(0,react_18/* unmountElement */.K)(element)}}};

// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs
var chunk_R4NKYYJA = __webpack_require__(68780);
;// CONCATENATED MODULE: ./node_modules/@storybook/addon-docs/dist/DocsRenderer-7FRJXR4N.mjs



/***/ })

}]);
//# sourceMappingURL=960.e36265b9.iframe.bundle.js.map