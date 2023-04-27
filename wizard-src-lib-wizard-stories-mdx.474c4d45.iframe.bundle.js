"use strict";
(self["webpackChunknovatics"] = self["webpackChunknovatics"] || []).push([[857],{

/***/ 40749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "basicUsage": () => (/* binding */ basicUsage),
  "componentsOverride": () => (/* binding */ componentsOverride),
  "default": () => (/* binding */ wizard_stories),
  "disabledTab": () => (/* binding */ disabledTab),
  "linear": () => (/* binding */ linear),
  "playground": () => (/* binding */ playground),
  "showCompleted": () => (/* binding */ showCompleted),
  "steps": () => (/* binding */ steps)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(89526);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(18380);
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/dist/blocks.mjs
var blocks = __webpack_require__(88843);
// EXTERNAL MODULE: ./node_modules/@storybook/react/dist/index.mjs
var dist = __webpack_require__(70019);
;// CONCATENATED MODULE: ./packages/wizard/package.json
const package_namespaceObject = {"i":"0.1.1"};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.every.js
var es_array_every = __webpack_require__(67443);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(10853);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(73214);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(33130);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tabs/Tabs.js + 8 modules
var Tabs = __webpack_require__(10278);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(98356);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(19855);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(39446);
var objectWithoutPropertiesLoose_default = /*#__PURE__*/__webpack_require__.n(objectWithoutPropertiesLoose);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Check.js
var Check = __webpack_require__(26021);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js
var taggedTemplateLiteralLoose = __webpack_require__(12883);
var taggedTemplateLiteralLoose_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteralLoose);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(82500);
;// CONCATENATED MODULE: ./packages/wizard/src/lib/Tab/styles.ts

var _templateObject, _templateObject2;


var Container = (0,styled/* default */.ZP)(Box/* default */.Z)(_templateObject || (_templateObject = taggedTemplateLiteralLoose_default()(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  white-space: normal;\n  cursor: ", ";\n\n  svg {\n    opacity: ", ";\n  }\n"])), function (_ref) {
  var disabled = _ref.disabled;
  return disabled ? 'no-drop' : 'cursor';
}, function (_ref2) {
  var showCompleted = _ref2.showCompleted;
  return showCompleted ? '1' : '0';
});
var TextContainer = (0,styled/* default */.ZP)(Box/* default */.Z)(_templateObject2 || (_templateObject2 = taggedTemplateLiteralLoose_default()(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"])));
// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var emotion_react_jsx_runtime_browser_esm = __webpack_require__(28179);
;// CONCATENATED MODULE: ./packages/wizard/src/lib/Tab/index.tsx

var _excluded = ["components", "title", "subtitle", "disabled"];






var Tab = function Tab(props) {
  var step = props.step,
    isCompleted = props.isCompleted,
    showCompleted = props.showCompleted,
    TabOverride = props.TabOverride,
    isActive = props.isActive;
  var components = step.components,
    title = step.title,
    subtitle = step.subtitle,
    disabled = step.disabled,
    others = objectWithoutPropertiesLoose_default()(step, _excluded);
  var tabOverrideProps = Object.assign({}, props);
  delete tabOverrideProps.TabOverride;
  var disabledTextColor = disabled ? 'gray' : '';
  if (components != null && components.Tab) {
    return components.Tab({
      step: Object.assign({
        title: title,
        subtitle: subtitle,
        disabled: disabled,
        isActive: isActive
      }, others)
    });
  }
  if (TabOverride) {
    return (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(TabOverride, Object.assign({}, tabOverrideProps));
  }
  return (0,emotion_react_jsx_runtime_browser_esm/* jsxs */.BX)(Container, {
    disabled: disabled,
    showCompleted: isCompleted && showCompleted,
    children: [(0,emotion_react_jsx_runtime_browser_esm/* jsxs */.BX)(TextContainer, {
      children: [(0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(Typography/* default */.Z, {
        variant: "body1",
        color: disabledTextColor,
        children: title ? title : ''
      }), (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(Typography/* default */.Z, {
        variant: "subtitle2",
        color: disabledTextColor,
        children: subtitle ? subtitle : ''
      })]
    }), (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(Check/* default */.Z, {
      sx: {
        marginLeft: '20px',
        marginRight: '10px'
      },
      fontSize: "small",
      color: "success"
    })]
  });
};
Tab.displayName = "Tab";
/* harmony default export */ const lib_Tab = (Tab);
try {
    // @ts-ignore
    Tab.displayName = "Tab";
    // @ts-ignore
    Tab.__docgenInfo = { "description": "", "displayName": "Tab", "props": { "TabOverride": { "defaultValue": null, "description": "", "name": "TabOverride", "required": false, "type": { "name": "FC<TabBaseProps>" } }, "isActive": { "defaultValue": null, "description": "", "name": "isActive", "required": true, "type": { "name": "boolean" } }, "step": { "defaultValue": null, "description": "", "name": "step", "required": true, "type": { "name": "Step" } }, "isCompleted": { "defaultValue": null, "description": "", "name": "isCompleted", "required": true, "type": { "name": "boolean" } }, "showCompleted": { "defaultValue": null, "description": "", "name": "showCompleted", "required": true, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["packages/wizard/src/lib/Tab/index.tsx#Tab"] = { docgenInfo: Tab.__docgenInfo, name: "Tab", path: "packages/wizard/src/lib/Tab/index.tsx#Tab" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./packages/wizard/src/lib/Header/index.tsx

var Header_excluded = ["components"];




var Header = function Header(_ref) {
  var step = _ref.step,
    ComponentOverride = _ref.ComponentOverride;
  var components = step.components,
    others = objectWithoutPropertiesLoose_default()(step, Header_excluded);
  if (components != null && components.Header) {
    return components.Header({
      step: others
    });
  }
  if (ComponentOverride) {
    return (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(ComponentOverride, {
      step: step
    });
  }
  return (0,emotion_react_jsx_runtime_browser_esm/* jsxs */.BX)(Box/* default */.Z, {
    children: [(0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(Typography/* default */.Z, {
      variant: "h6",
      children: step.title
    }), (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(Typography/* default */.Z, {
      variant: "subtitle2",
      children: step.subtitle
    })]
  });
};
Header.displayName = "Header";
/* harmony default export */ const lib_Header = (Header);
try {
    // @ts-ignore
    Header.displayName = "Header";
    // @ts-ignore
    Header.__docgenInfo = { "description": "", "displayName": "Header", "props": { "ComponentOverride": { "defaultValue": null, "description": "", "name": "ComponentOverride", "required": true, "type": { "name": "FC<HeaderBaseProps>" } }, "step": { "defaultValue": null, "description": "", "name": "step", "required": true, "type": { "name": "Step" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["packages/wizard/src/lib/Header/index.tsx#Header"] = { docgenInfo: Header.__docgenInfo, name: "Header", path: "packages/wizard/src/lib/Header/index.tsx#Header" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 2 modules
var Button = __webpack_require__(38864);
;// CONCATENATED MODULE: ./packages/wizard/src/lib/Footer/styles.tsx

var styles_templateObject;


var styles_Container = (0,styled/* default */.ZP)(Box/* default */.Z)(styles_templateObject || (styles_templateObject = taggedTemplateLiteralLoose_default()(["\n  margin-top: auto;\n  display: flex;\n  justify-content: space-between;\n\n  :has(button:only-child) {\n    justify-content: flex-end;\n  }\n"])));
try {
    // @ts-ignore
    styles_Container.displayName = "Container";
    // @ts-ignore
    styles_Container.__docgenInfo = { "description": "", "displayName": "Container", "props": { "p": { "defaultValue": null, "description": "", "name": "p", "required": false, "type": { "name": "ResponsiveStyleValue<Padding<string | number> | NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "color": { "defaultValue": null, "description": "", "name": "color", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | Color> | ((theme: Theme) => ResponsiveStyleValue<string[] | Color>)" } }, "border": { "defaultValue": null, "description": "", "name": "border", "required": false, "type": { "name": "ResponsiveStyleValue<number | \"hidden\" | (string & {}) | \"inset\" | \"inherit\" | \"none\" | \"medium\" | \"-moz-initial\" | \"initial\" | \"revert\" | \"revert-layer\" | \"unset\" | \"aliceblue\" | \"antiquewhite\" | ... 184 more ... | \"solid\"> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "boxShadow": { "defaultValue": null, "description": "", "name": "boxShadow", "required": false, "type": { "name": "ResponsiveStyleValue<number | BoxShadow> | ((theme: Theme) => ResponsiveStyleValue<number | BoxShadow>)" } }, "fontWeight": { "defaultValue": null, "description": "", "name": "fontWeight", "required": false, "type": { "name": "ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)" } }, "zIndex": { "defaultValue": null, "description": "", "name": "zIndex", "required": false, "type": { "name": "ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)" } }, "alignContent": { "defaultValue": null, "description": "", "name": "alignContent", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | AlignContent> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignContent>)" } }, "alignItems": { "defaultValue": null, "description": "", "name": "alignItems", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | AlignItems> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignItems>)" } }, "alignSelf": { "defaultValue": null, "description": "", "name": "alignSelf", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | AlignSelf> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignSelf>)" } }, "bottom": { "defaultValue": null, "description": "", "name": "bottom", "required": false, "type": { "name": "ResponsiveStyleValue<Bottom<string | number> | NonNullable<Bottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "boxSizing": { "defaultValue": null, "description": "", "name": "boxSizing", "required": false, "type": { "name": "ResponsiveStyleValue<BoxSizing | NonNullable<BoxSizing>[]> | ((theme: Theme) => ResponsiveStyleValue<BoxSizing | NonNullable<...>[]>)" } }, "columnGap": { "defaultValue": null, "description": "", "name": "columnGap", "required": false, "type": { "name": "ResponsiveStyleValue<ColumnGap<string | number> | NonNullable<ColumnGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "display": { "defaultValue": null, "description": "", "name": "display", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<string[] | Display>)" } }, "flexBasis": { "defaultValue": null, "description": "", "name": "flexBasis", "required": false, "type": { "name": "ResponsiveStyleValue<FlexBasis<string | number> | NonNullable<FlexBasis<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "flexDirection": { "defaultValue": null, "description": "", "name": "flexDirection", "required": false, "type": { "name": "ResponsiveStyleValue<FlexDirection | NonNullable<FlexDirection>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexDirection | NonNullable<...>[]>)" } }, "flexGrow": { "defaultValue": null, "description": "", "name": "flexGrow", "required": false, "type": { "name": "ResponsiveStyleValue<FlexGrow | NonNullable<FlexGrow>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexGrow | NonNullable<...>[]>)" } }, "flexShrink": { "defaultValue": null, "description": "", "name": "flexShrink", "required": false, "type": { "name": "ResponsiveStyleValue<FlexShrink | NonNullable<FlexShrink>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexShrink | NonNullable<...>[]>)" } }, "flexWrap": { "defaultValue": null, "description": "", "name": "flexWrap", "required": false, "type": { "name": "ResponsiveStyleValue<FlexWrap | NonNullable<FlexWrap>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexWrap | NonNullable<...>[]>)" } }, "fontFamily": { "defaultValue": null, "description": "", "name": "fontFamily", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | FontFamily> | ((theme: Theme) => ResponsiveStyleValue<string[] | FontFamily>)" } }, "fontSize": { "defaultValue": null, "description": "", "name": "fontSize", "required": false, "type": { "name": "ResponsiveStyleValue<FontSize<string | number> | NonNullable<FontSize<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "fontStyle": { "defaultValue": null, "description": "", "name": "fontStyle", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | FontStyle> | ((theme: Theme) => ResponsiveStyleValue<string[] | FontStyle>)" } }, "gridAutoColumns": { "defaultValue": null, "description": "", "name": "gridAutoColumns", "required": false, "type": { "name": "ResponsiveStyleValue<GridAutoColumns<string | number> | NonNullable<GridAutoColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "gridAutoFlow": { "defaultValue": null, "description": "", "name": "gridAutoFlow", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | GridAutoFlow> | ((theme: Theme) => ResponsiveStyleValue<string[] | GridAutoFlow>)" } }, "gridAutoRows": { "defaultValue": null, "description": "", "name": "gridAutoRows", "required": false, "type": { "name": "ResponsiveStyleValue<GridAutoRows<string | number> | NonNullable<GridAutoRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "gridTemplateAreas": { "defaultValue": null, "description": "", "name": "gridTemplateAreas", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | GridTemplateAreas> | ((theme: Theme) => ResponsiveStyleValue<string[] | GridTemplateAreas>)" } }, "gridTemplateColumns": { "defaultValue": null, "description": "", "name": "gridTemplateColumns", "required": false, "type": { "name": "ResponsiveStyleValue<GridTemplateColumns<string | number> | NonNullable<GridTemplateColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "gridTemplateRows": { "defaultValue": null, "description": "", "name": "gridTemplateRows", "required": false, "type": { "name": "ResponsiveStyleValue<GridTemplateRows<string | number> | NonNullable<GridTemplateRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "height": { "defaultValue": null, "description": "", "name": "height", "required": false, "type": { "name": "ResponsiveStyleValue<Height<string | number> | NonNullable<Height<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "justifyContent": { "defaultValue": null, "description": "", "name": "justifyContent", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | JustifyContent> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifyContent>)" } }, "justifyItems": { "defaultValue": null, "description": "", "name": "justifyItems", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | JustifyItems> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifyItems>)" } }, "justifySelf": { "defaultValue": null, "description": "", "name": "justifySelf", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | JustifySelf> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifySelf>)" } }, "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "ResponsiveStyleValue<Left<string | number> | NonNullable<Left<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Left<...> | NonNullable<...>[]>)" } }, "letterSpacing": { "defaultValue": null, "description": "", "name": "letterSpacing", "required": false, "type": { "name": "ResponsiveStyleValue<LetterSpacing<string | number> | NonNullable<LetterSpacing<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "lineHeight": { "defaultValue": null, "description": "", "name": "lineHeight", "required": false, "type": { "name": "ResponsiveStyleValue<LineHeight<string | number> | NonNullable<LineHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "marginBottom": { "defaultValue": null, "description": "", "name": "marginBottom", "required": false, "type": { "name": "ResponsiveStyleValue<MarginBottom<string | number> | NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "marginLeft": { "defaultValue": null, "description": "", "name": "marginLeft", "required": false, "type": { "name": "ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "marginRight": { "defaultValue": null, "description": "", "name": "marginRight", "required": false, "type": { "name": "ResponsiveStyleValue<MarginRight<string | number> | NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "marginTop": { "defaultValue": null, "description": "", "name": "marginTop", "required": false, "type": { "name": "ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "maxHeight": { "defaultValue": null, "description": "", "name": "maxHeight", "required": false, "type": { "name": "ResponsiveStyleValue<MaxHeight<string | number> | NonNullable<MaxHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "maxWidth": { "defaultValue": null, "description": "", "name": "maxWidth", "required": false, "type": { "name": "ResponsiveStyleValue<MaxWidth<string | number> | NonNullable<MaxWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "minHeight": { "defaultValue": null, "description": "", "name": "minHeight", "required": false, "type": { "name": "ResponsiveStyleValue<MinHeight<string | number> | NonNullable<MinHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "minWidth": { "defaultValue": null, "description": "", "name": "minWidth", "required": false, "type": { "name": "ResponsiveStyleValue<MinWidth<string | number> | NonNullable<MinWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "order": { "defaultValue": null, "description": "", "name": "order", "required": false, "type": { "name": "ResponsiveStyleValue<Order | NonNullable<Order>[]> | ((theme: Theme) => ResponsiveStyleValue<Order | NonNullable<Order>[]>)" } }, "paddingBottom": { "defaultValue": null, "description": "", "name": "paddingBottom", "required": false, "type": { "name": "ResponsiveStyleValue<PaddingBottom<string | number> | NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "paddingLeft": { "defaultValue": null, "description": "", "name": "paddingLeft", "required": false, "type": { "name": "ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "paddingRight": { "defaultValue": null, "description": "", "name": "paddingRight", "required": false, "type": { "name": "ResponsiveStyleValue<PaddingRight<string | number> | NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "paddingTop": { "defaultValue": null, "description": "", "name": "paddingTop", "required": false, "type": { "name": "ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "position": { "defaultValue": null, "description": "", "name": "position", "required": false, "type": { "name": "ResponsiveStyleValue<Position | NonNullable<Position>[]> | ((theme: Theme) => ResponsiveStyleValue<Position | NonNullable<...>[]>)" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "ResponsiveStyleValue<Right<string | number> | NonNullable<Right<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "rowGap": { "defaultValue": null, "description": "", "name": "rowGap", "required": false, "type": { "name": "ResponsiveStyleValue<RowGap<string | number> | NonNullable<RowGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "textAlign": { "defaultValue": null, "description": "", "name": "textAlign", "required": false, "type": { "name": "ResponsiveStyleValue<TextAlign | NonNullable<TextAlign>[]> | ((theme: Theme) => ResponsiveStyleValue<TextAlign | NonNullable<...>[]>)" } }, "textOverflow": { "defaultValue": null, "description": "", "name": "textOverflow", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | TextOverflow> | ((theme: Theme) => ResponsiveStyleValue<string[] | TextOverflow>)" } }, "textTransform": { "defaultValue": null, "description": "", "name": "textTransform", "required": false, "type": { "name": "ResponsiveStyleValue<TextTransform | NonNullable<TextTransform>[]> | ((theme: Theme) => ResponsiveStyleValue<TextTransform | NonNullable<...>[]>)" } }, "top": { "defaultValue": null, "description": "", "name": "top", "required": false, "type": { "name": "ResponsiveStyleValue<Top<string | number> | NonNullable<Top<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Top<string | number> | NonNullable<...>[]>)" } }, "visibility": { "defaultValue": null, "description": "", "name": "visibility", "required": false, "type": { "name": "ResponsiveStyleValue<Visibility | NonNullable<Visibility>[]> | ((theme: Theme) => ResponsiveStyleValue<Visibility | NonNullable<...>[]>)" } }, "whiteSpace": { "defaultValue": null, "description": "", "name": "whiteSpace", "required": false, "type": { "name": "ResponsiveStyleValue<WhiteSpace | NonNullable<WhiteSpace>[]> | ((theme: Theme) => ResponsiveStyleValue<WhiteSpace | NonNullable<...>[]>)" } }, "width": { "defaultValue": null, "description": "", "name": "width", "required": false, "type": { "name": "ResponsiveStyleValue<Width<string | number> | NonNullable<Width<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "borderBottom": { "defaultValue": null, "description": "", "name": "borderBottom", "required": false, "type": { "name": "ResponsiveStyleValue<BorderBottom<string | number> | NonNullable<BorderBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "borderColor": { "defaultValue": null, "description": "", "name": "borderColor", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | BorderColor> | ((theme: Theme) => ResponsiveStyleValue<string[] | BorderColor>)" } }, "borderLeft": { "defaultValue": null, "description": "", "name": "borderLeft", "required": false, "type": { "name": "ResponsiveStyleValue<BorderLeft<string | number> | NonNullable<BorderLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "borderRadius": { "defaultValue": null, "description": "", "name": "borderRadius", "required": false, "type": { "name": "ResponsiveStyleValue<BorderRadius<string | number> | NonNullable<BorderRadius<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "borderRight": { "defaultValue": null, "description": "", "name": "borderRight", "required": false, "type": { "name": "ResponsiveStyleValue<BorderRight<string | number> | NonNullable<BorderRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "borderTop": { "defaultValue": null, "description": "", "name": "borderTop", "required": false, "type": { "name": "ResponsiveStyleValue<BorderTop<string | number> | NonNullable<BorderTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "flex": { "defaultValue": null, "description": "", "name": "flex", "required": false, "type": { "name": "ResponsiveStyleValue<Flex<string | number> | NonNullable<Flex<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Flex<...> | NonNullable<...>[]>)" } }, "gap": { "defaultValue": null, "description": "", "name": "gap", "required": false, "type": { "name": "ResponsiveStyleValue<Gap<string | number> | NonNullable<Gap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Gap<string | number> | NonNullable<...>[]>)" } }, "gridArea": { "defaultValue": null, "description": "", "name": "gridArea", "required": false, "type": { "name": "ResponsiveStyleValue<GridArea | NonNullable<GridArea>[]> | ((theme: Theme) => ResponsiveStyleValue<GridArea | NonNullable<...>[]>)" } }, "gridColumn": { "defaultValue": null, "description": "", "name": "gridColumn", "required": false, "type": { "name": "ResponsiveStyleValue<GridColumn | NonNullable<GridColumn>[]> | ((theme: Theme) => ResponsiveStyleValue<GridColumn | NonNullable<...>[]>)" } }, "gridRow": { "defaultValue": null, "description": "", "name": "gridRow", "required": false, "type": { "name": "ResponsiveStyleValue<GridRow | NonNullable<GridRow>[]> | ((theme: Theme) => ResponsiveStyleValue<GridRow | NonNullable<GridRow>[]>)" } }, "margin": { "defaultValue": null, "description": "", "name": "margin", "required": false, "type": { "name": "ResponsiveStyleValue<Margin<string | number> | NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "overflow": { "defaultValue": null, "description": "", "name": "overflow", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | Overflow> | ((theme: Theme) => ResponsiveStyleValue<string[] | Overflow>)" } }, "padding": { "defaultValue": null, "description": "", "name": "padding", "required": false, "type": { "name": "ResponsiveStyleValue<Padding<string | number> | NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "bgcolor": { "defaultValue": null, "description": "", "name": "bgcolor", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | BackgroundColor> | ((theme: Theme) => ResponsiveStyleValue<string[] | BackgroundColor>)" } }, "m": { "defaultValue": null, "description": "", "name": "m", "required": false, "type": { "name": "ResponsiveStyleValue<Margin<string | number> | NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "mt": { "defaultValue": null, "description": "", "name": "mt", "required": false, "type": { "name": "ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "mr": { "defaultValue": null, "description": "", "name": "mr", "required": false, "type": { "name": "ResponsiveStyleValue<MarginRight<string | number> | NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "mb": { "defaultValue": null, "description": "", "name": "mb", "required": false, "type": { "name": "ResponsiveStyleValue<MarginBottom<string | number> | NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "ml": { "defaultValue": null, "description": "", "name": "ml", "required": false, "type": { "name": "ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "mx": { "defaultValue": null, "description": "", "name": "mx", "required": false, "type": { "name": "ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "marginX": { "defaultValue": null, "description": "", "name": "marginX", "required": false, "type": { "name": "ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "my": { "defaultValue": null, "description": "", "name": "my", "required": false, "type": { "name": "ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "marginY": { "defaultValue": null, "description": "", "name": "marginY", "required": false, "type": { "name": "ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "pt": { "defaultValue": null, "description": "", "name": "pt", "required": false, "type": { "name": "ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "pr": { "defaultValue": null, "description": "", "name": "pr", "required": false, "type": { "name": "ResponsiveStyleValue<PaddingRight<string | number> | NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "pb": { "defaultValue": null, "description": "", "name": "pb", "required": false, "type": { "name": "ResponsiveStyleValue<PaddingBottom<string | number> | NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "pl": { "defaultValue": null, "description": "", "name": "pl", "required": false, "type": { "name": "ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "px": { "defaultValue": null, "description": "", "name": "px", "required": false, "type": { "name": "ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "paddingX": { "defaultValue": null, "description": "", "name": "paddingX", "required": false, "type": { "name": "ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "py": { "defaultValue": null, "description": "", "name": "py", "required": false, "type": { "name": "ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "paddingY": { "defaultValue": null, "description": "", "name": "paddingY", "required": false, "type": { "name": "ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "typography": { "defaultValue": null, "description": "", "name": "typography", "required": false, "type": { "name": "ResponsiveStyleValue<string> | ((theme: Theme) => ResponsiveStyleValue<string>)" } }, "displayPrint": { "defaultValue": null, "description": "", "name": "displayPrint", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<string[] | Display>)" } }, "component": { "defaultValue": null, "description": "The component used for the root node.\nEither a string to use a HTML element or a component.", "name": "component", "required": false, "type": { "name": "ElementType<any>" } }, "ref": { "defaultValue": null, "description": "", "name": "ref", "required": false, "type": { "name": "Ref<unknown>" } }, "sx": { "defaultValue": null, "description": "The system prop that allows defining system overrides as well as additional CSS styles.", "name": "sx", "required": false, "type": { "name": "SxProps<Theme>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["packages/wizard/src/lib/Footer/styles.tsx#Container"] = { docgenInfo: styles_Container.__docgenInfo, name: "Container", path: "packages/wizard/src/lib/Footer/styles.tsx#Container" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./packages/wizard/src/lib/Footer/index.tsx

var Footer_excluded = ["components"];




var Footer = function Footer(_ref) {
  var handleBack = _ref.handleBack,
    handleNext = _ref.handleNext,
    handleFinish = _ref.handleFinish,
    _ref$backText = _ref.backText,
    backText = _ref$backText === void 0 ? 'Back' : _ref$backText,
    _ref$nextText = _ref.nextText,
    nextText = _ref$nextText === void 0 ? 'Next' : _ref$nextText,
    _ref$finishText = _ref.finishText,
    finishText = _ref$finishText === void 0 ? 'Finish' : _ref$finishText,
    _ref$isFirst = _ref.isFirst,
    isFirst = _ref$isFirst === void 0 ? false : _ref$isFirst,
    _ref$isLast = _ref.isLast,
    isLast = _ref$isLast === void 0 ? false : _ref$isLast,
    ComponentOverride = _ref.ComponentOverride,
    step = _ref.step;
  var components = step.components,
    others = objectWithoutPropertiesLoose_default()(step, Footer_excluded);
  if (components != null && components.Footer) {
    return components.Footer({
      step: others,
      isFirst: isFirst,
      isLast: isLast,
      handleBack: handleBack,
      handleNext: handleNext,
      handleFinish: handleFinish
    });
  }
  if (ComponentOverride) {
    return (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(ComponentOverride, {
      isFirst: isFirst,
      isLast: isLast,
      handleBack: handleBack,
      handleNext: handleNext,
      handleFinish: handleFinish,
      step: step
    });
  }
  return (0,emotion_react_jsx_runtime_browser_esm/* jsxs */.BX)(styles_Container, {
    children: [!isFirst && (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(Button/* default */.Z, {
      variant: "outlined",
      onClick: handleBack,
      children: backText
    }), !isLast ? (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(Button/* default */.Z, {
      variant: "contained",
      onClick: handleNext,
      children: nextText
    }) : (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(Button/* default */.Z, {
      variant: "contained",
      onClick: handleFinish,
      children: finishText
    })]
  });
};
Footer.displayName = "Footer";
/* harmony default export */ const lib_Footer = (Footer);
try {
    // @ts-ignore
    Footer.displayName = "Footer";
    // @ts-ignore
    Footer.__docgenInfo = { "description": "", "displayName": "Footer", "props": { "ComponentOverride": { "defaultValue": null, "description": "", "name": "ComponentOverride", "required": true, "type": { "name": "FC<FooterBaseProps>" } }, "handleBack": { "defaultValue": null, "description": "", "name": "handleBack", "required": true, "type": { "name": "() => void" } }, "handleNext": { "defaultValue": null, "description": "", "name": "handleNext", "required": true, "type": { "name": "() => void" } }, "handleFinish": { "defaultValue": null, "description": "", "name": "handleFinish", "required": true, "type": { "name": "() => void" } }, "backText": { "defaultValue": { value: "Back" }, "description": "", "name": "backText", "required": false, "type": { "name": "string" } }, "nextText": { "defaultValue": { value: "Next" }, "description": "", "name": "nextText", "required": false, "type": { "name": "string" } }, "finishText": { "defaultValue": { value: "Finish" }, "description": "", "name": "finishText", "required": false, "type": { "name": "string" } }, "isFirst": { "defaultValue": { value: "false" }, "description": "", "name": "isFirst", "required": false, "type": { "name": "boolean" } }, "isLast": { "defaultValue": { value: "false" }, "description": "", "name": "isLast", "required": false, "type": { "name": "boolean" } }, "step": { "defaultValue": null, "description": "", "name": "step", "required": true, "type": { "name": "Step" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["packages/wizard/src/lib/Footer/index.tsx#Footer"] = { docgenInfo: Footer.__docgenInfo, name: "Footer", path: "packages/wizard/src/lib/Footer/index.tsx#Footer" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js + 1 modules
var emotion_styled_base_browser_esm = __webpack_require__(53005);
// EXTERNAL MODULE: ./node_modules/@mui/material/Paper/Paper.js + 2 modules
var Paper = __webpack_require__(77290);
;// CONCATENATED MODULE: ./packages/wizard/src/lib/TabPanel/styles.ts

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var PaperContainer = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.Z)(Paper/* default */.Z,  true ? {
  target: "ev80d540"
} : 0)( true ? {
  name: "gmkocr",
  styles: "padding:30px;min-height:calc(100vh - 100px);display:flex;flex-direction:column"
} : 0);
;// CONCATENATED MODULE: ./packages/wizard/src/lib/TabPanel/index.tsx

var TabPanel_excluded = ["children", "value", "index"];



function TabPanel(props) {
  var children = props.children,
    value = props.value,
    index = props.index,
    other = objectWithoutPropertiesLoose_default()(props, TabPanel_excluded);
  return (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)("div", Object.assign({
    role: "tabpanel",
    hidden: value !== index,
    id: "vertical-tabpanel-" + index,
    "aria-labelledby": "vertical-tab-" + index
  }, other, {
    children: value === index && (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(PaperContainer, {
      variant: "outlined",
      children: children
    })
  }));
}
TabPanel.displayName = "TabPanel";
/* harmony default export */ const lib_TabPanel = (TabPanel);
try {
    // @ts-ignore
    TabPanel.displayName = "TabPanel";
    // @ts-ignore
    TabPanel.__docgenInfo = { "description": "", "displayName": "TabPanel", "props": { "index": { "defaultValue": null, "description": "", "name": "index", "required": true, "type": { "name": "number" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["packages/wizard/src/lib/TabPanel/index.tsx#TabPanel"] = { docgenInfo: TabPanel.__docgenInfo, name: "TabPanel", path: "packages/wizard/src/lib/TabPanel/index.tsx#TabPanel" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/styled.js
var esm_styled = __webpack_require__(43102);
;// CONCATENATED MODULE: ./packages/wizard/src/lib/styles.tsx

var lib_styles_templateObject;


var TabContainer = (0,esm_styled/* default */.Z)(Box/* default */.Z)(lib_styles_templateObject || (lib_styles_templateObject = taggedTemplateLiteralLoose_default()(["\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  height: 72px;\n  cursor: pointer;\n"])));
try {
    // @ts-ignore
    TabContainer.displayName = "TabContainer";
    // @ts-ignore
    TabContainer.__docgenInfo = { "description": "", "displayName": "TabContainer", "props": { "p": { "defaultValue": null, "description": "", "name": "p", "required": false, "type": { "name": "ResponsiveStyleValue<Padding<string | number> | NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "color": { "defaultValue": null, "description": "", "name": "color", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | Color> | ((theme: Theme) => ResponsiveStyleValue<string[] | Color>)" } }, "border": { "defaultValue": null, "description": "", "name": "border", "required": false, "type": { "name": "ResponsiveStyleValue<number | \"hidden\" | (string & {}) | \"inset\" | \"inherit\" | \"none\" | \"medium\" | \"-moz-initial\" | \"initial\" | \"revert\" | \"revert-layer\" | \"unset\" | \"aliceblue\" | \"antiquewhite\" | ... 184 more ... | \"solid\"> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "boxShadow": { "defaultValue": null, "description": "", "name": "boxShadow", "required": false, "type": { "name": "ResponsiveStyleValue<number | BoxShadow> | ((theme: Theme) => ResponsiveStyleValue<number | BoxShadow>)" } }, "fontWeight": { "defaultValue": null, "description": "", "name": "fontWeight", "required": false, "type": { "name": "ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)" } }, "zIndex": { "defaultValue": null, "description": "", "name": "zIndex", "required": false, "type": { "name": "ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)" } }, "alignContent": { "defaultValue": null, "description": "", "name": "alignContent", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | AlignContent> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignContent>)" } }, "alignItems": { "defaultValue": null, "description": "", "name": "alignItems", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | AlignItems> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignItems>)" } }, "alignSelf": { "defaultValue": null, "description": "", "name": "alignSelf", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | AlignSelf> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignSelf>)" } }, "bottom": { "defaultValue": null, "description": "", "name": "bottom", "required": false, "type": { "name": "ResponsiveStyleValue<Bottom<string | number> | NonNullable<Bottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "boxSizing": { "defaultValue": null, "description": "", "name": "boxSizing", "required": false, "type": { "name": "ResponsiveStyleValue<BoxSizing | NonNullable<BoxSizing>[]> | ((theme: Theme) => ResponsiveStyleValue<BoxSizing | NonNullable<...>[]>)" } }, "columnGap": { "defaultValue": null, "description": "", "name": "columnGap", "required": false, "type": { "name": "ResponsiveStyleValue<ColumnGap<string | number> | NonNullable<ColumnGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "display": { "defaultValue": null, "description": "", "name": "display", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<string[] | Display>)" } }, "flexBasis": { "defaultValue": null, "description": "", "name": "flexBasis", "required": false, "type": { "name": "ResponsiveStyleValue<FlexBasis<string | number> | NonNullable<FlexBasis<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "flexDirection": { "defaultValue": null, "description": "", "name": "flexDirection", "required": false, "type": { "name": "ResponsiveStyleValue<FlexDirection | NonNullable<FlexDirection>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexDirection | NonNullable<...>[]>)" } }, "flexGrow": { "defaultValue": null, "description": "", "name": "flexGrow", "required": false, "type": { "name": "ResponsiveStyleValue<FlexGrow | NonNullable<FlexGrow>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexGrow | NonNullable<...>[]>)" } }, "flexShrink": { "defaultValue": null, "description": "", "name": "flexShrink", "required": false, "type": { "name": "ResponsiveStyleValue<FlexShrink | NonNullable<FlexShrink>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexShrink | NonNullable<...>[]>)" } }, "flexWrap": { "defaultValue": null, "description": "", "name": "flexWrap", "required": false, "type": { "name": "ResponsiveStyleValue<FlexWrap | NonNullable<FlexWrap>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexWrap | NonNullable<...>[]>)" } }, "fontFamily": { "defaultValue": null, "description": "", "name": "fontFamily", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | FontFamily> | ((theme: Theme) => ResponsiveStyleValue<string[] | FontFamily>)" } }, "fontSize": { "defaultValue": null, "description": "", "name": "fontSize", "required": false, "type": { "name": "ResponsiveStyleValue<FontSize<string | number> | NonNullable<FontSize<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "fontStyle": { "defaultValue": null, "description": "", "name": "fontStyle", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | FontStyle> | ((theme: Theme) => ResponsiveStyleValue<string[] | FontStyle>)" } }, "gridAutoColumns": { "defaultValue": null, "description": "", "name": "gridAutoColumns", "required": false, "type": { "name": "ResponsiveStyleValue<GridAutoColumns<string | number> | NonNullable<GridAutoColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "gridAutoFlow": { "defaultValue": null, "description": "", "name": "gridAutoFlow", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | GridAutoFlow> | ((theme: Theme) => ResponsiveStyleValue<string[] | GridAutoFlow>)" } }, "gridAutoRows": { "defaultValue": null, "description": "", "name": "gridAutoRows", "required": false, "type": { "name": "ResponsiveStyleValue<GridAutoRows<string | number> | NonNullable<GridAutoRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "gridTemplateAreas": { "defaultValue": null, "description": "", "name": "gridTemplateAreas", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | GridTemplateAreas> | ((theme: Theme) => ResponsiveStyleValue<string[] | GridTemplateAreas>)" } }, "gridTemplateColumns": { "defaultValue": null, "description": "", "name": "gridTemplateColumns", "required": false, "type": { "name": "ResponsiveStyleValue<GridTemplateColumns<string | number> | NonNullable<GridTemplateColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "gridTemplateRows": { "defaultValue": null, "description": "", "name": "gridTemplateRows", "required": false, "type": { "name": "ResponsiveStyleValue<GridTemplateRows<string | number> | NonNullable<GridTemplateRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "height": { "defaultValue": null, "description": "", "name": "height", "required": false, "type": { "name": "ResponsiveStyleValue<Height<string | number> | NonNullable<Height<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "justifyContent": { "defaultValue": null, "description": "", "name": "justifyContent", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | JustifyContent> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifyContent>)" } }, "justifyItems": { "defaultValue": null, "description": "", "name": "justifyItems", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | JustifyItems> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifyItems>)" } }, "justifySelf": { "defaultValue": null, "description": "", "name": "justifySelf", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | JustifySelf> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifySelf>)" } }, "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "ResponsiveStyleValue<Left<string | number> | NonNullable<Left<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Left<...> | NonNullable<...>[]>)" } }, "letterSpacing": { "defaultValue": null, "description": "", "name": "letterSpacing", "required": false, "type": { "name": "ResponsiveStyleValue<LetterSpacing<string | number> | NonNullable<LetterSpacing<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "lineHeight": { "defaultValue": null, "description": "", "name": "lineHeight", "required": false, "type": { "name": "ResponsiveStyleValue<LineHeight<string | number> | NonNullable<LineHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "marginBottom": { "defaultValue": null, "description": "", "name": "marginBottom", "required": false, "type": { "name": "ResponsiveStyleValue<MarginBottom<string | number> | NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "marginLeft": { "defaultValue": null, "description": "", "name": "marginLeft", "required": false, "type": { "name": "ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "marginRight": { "defaultValue": null, "description": "", "name": "marginRight", "required": false, "type": { "name": "ResponsiveStyleValue<MarginRight<string | number> | NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "marginTop": { "defaultValue": null, "description": "", "name": "marginTop", "required": false, "type": { "name": "ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "maxHeight": { "defaultValue": null, "description": "", "name": "maxHeight", "required": false, "type": { "name": "ResponsiveStyleValue<MaxHeight<string | number> | NonNullable<MaxHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "maxWidth": { "defaultValue": null, "description": "", "name": "maxWidth", "required": false, "type": { "name": "ResponsiveStyleValue<MaxWidth<string | number> | NonNullable<MaxWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "minHeight": { "defaultValue": null, "description": "", "name": "minHeight", "required": false, "type": { "name": "ResponsiveStyleValue<MinHeight<string | number> | NonNullable<MinHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "minWidth": { "defaultValue": null, "description": "", "name": "minWidth", "required": false, "type": { "name": "ResponsiveStyleValue<MinWidth<string | number> | NonNullable<MinWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "order": { "defaultValue": null, "description": "", "name": "order", "required": false, "type": { "name": "ResponsiveStyleValue<Order | NonNullable<Order>[]> | ((theme: Theme) => ResponsiveStyleValue<Order | NonNullable<Order>[]>)" } }, "paddingBottom": { "defaultValue": null, "description": "", "name": "paddingBottom", "required": false, "type": { "name": "ResponsiveStyleValue<PaddingBottom<string | number> | NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "paddingLeft": { "defaultValue": null, "description": "", "name": "paddingLeft", "required": false, "type": { "name": "ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "paddingRight": { "defaultValue": null, "description": "", "name": "paddingRight", "required": false, "type": { "name": "ResponsiveStyleValue<PaddingRight<string | number> | NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "paddingTop": { "defaultValue": null, "description": "", "name": "paddingTop", "required": false, "type": { "name": "ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "position": { "defaultValue": null, "description": "", "name": "position", "required": false, "type": { "name": "ResponsiveStyleValue<Position | NonNullable<Position>[]> | ((theme: Theme) => ResponsiveStyleValue<Position | NonNullable<...>[]>)" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "ResponsiveStyleValue<Right<string | number> | NonNullable<Right<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "rowGap": { "defaultValue": null, "description": "", "name": "rowGap", "required": false, "type": { "name": "ResponsiveStyleValue<RowGap<string | number> | NonNullable<RowGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "textAlign": { "defaultValue": null, "description": "", "name": "textAlign", "required": false, "type": { "name": "ResponsiveStyleValue<TextAlign | NonNullable<TextAlign>[]> | ((theme: Theme) => ResponsiveStyleValue<TextAlign | NonNullable<...>[]>)" } }, "textOverflow": { "defaultValue": null, "description": "", "name": "textOverflow", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | TextOverflow> | ((theme: Theme) => ResponsiveStyleValue<string[] | TextOverflow>)" } }, "textTransform": { "defaultValue": null, "description": "", "name": "textTransform", "required": false, "type": { "name": "ResponsiveStyleValue<TextTransform | NonNullable<TextTransform>[]> | ((theme: Theme) => ResponsiveStyleValue<TextTransform | NonNullable<...>[]>)" } }, "top": { "defaultValue": null, "description": "", "name": "top", "required": false, "type": { "name": "ResponsiveStyleValue<Top<string | number> | NonNullable<Top<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Top<string | number> | NonNullable<...>[]>)" } }, "visibility": { "defaultValue": null, "description": "", "name": "visibility", "required": false, "type": { "name": "ResponsiveStyleValue<Visibility | NonNullable<Visibility>[]> | ((theme: Theme) => ResponsiveStyleValue<Visibility | NonNullable<...>[]>)" } }, "whiteSpace": { "defaultValue": null, "description": "", "name": "whiteSpace", "required": false, "type": { "name": "ResponsiveStyleValue<WhiteSpace | NonNullable<WhiteSpace>[]> | ((theme: Theme) => ResponsiveStyleValue<WhiteSpace | NonNullable<...>[]>)" } }, "width": { "defaultValue": null, "description": "", "name": "width", "required": false, "type": { "name": "ResponsiveStyleValue<Width<string | number> | NonNullable<Width<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "borderBottom": { "defaultValue": null, "description": "", "name": "borderBottom", "required": false, "type": { "name": "ResponsiveStyleValue<BorderBottom<string | number> | NonNullable<BorderBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "borderColor": { "defaultValue": null, "description": "", "name": "borderColor", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | BorderColor> | ((theme: Theme) => ResponsiveStyleValue<string[] | BorderColor>)" } }, "borderLeft": { "defaultValue": null, "description": "", "name": "borderLeft", "required": false, "type": { "name": "ResponsiveStyleValue<BorderLeft<string | number> | NonNullable<BorderLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "borderRadius": { "defaultValue": null, "description": "", "name": "borderRadius", "required": false, "type": { "name": "ResponsiveStyleValue<BorderRadius<string | number> | NonNullable<BorderRadius<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "borderRight": { "defaultValue": null, "description": "", "name": "borderRight", "required": false, "type": { "name": "ResponsiveStyleValue<BorderRight<string | number> | NonNullable<BorderRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "borderTop": { "defaultValue": null, "description": "", "name": "borderTop", "required": false, "type": { "name": "ResponsiveStyleValue<BorderTop<string | number> | NonNullable<BorderTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "flex": { "defaultValue": null, "description": "", "name": "flex", "required": false, "type": { "name": "ResponsiveStyleValue<Flex<string | number> | NonNullable<Flex<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Flex<...> | NonNullable<...>[]>)" } }, "gap": { "defaultValue": null, "description": "", "name": "gap", "required": false, "type": { "name": "ResponsiveStyleValue<Gap<string | number> | NonNullable<Gap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Gap<string | number> | NonNullable<...>[]>)" } }, "gridArea": { "defaultValue": null, "description": "", "name": "gridArea", "required": false, "type": { "name": "ResponsiveStyleValue<GridArea | NonNullable<GridArea>[]> | ((theme: Theme) => ResponsiveStyleValue<GridArea | NonNullable<...>[]>)" } }, "gridColumn": { "defaultValue": null, "description": "", "name": "gridColumn", "required": false, "type": { "name": "ResponsiveStyleValue<GridColumn | NonNullable<GridColumn>[]> | ((theme: Theme) => ResponsiveStyleValue<GridColumn | NonNullable<...>[]>)" } }, "gridRow": { "defaultValue": null, "description": "", "name": "gridRow", "required": false, "type": { "name": "ResponsiveStyleValue<GridRow | NonNullable<GridRow>[]> | ((theme: Theme) => ResponsiveStyleValue<GridRow | NonNullable<GridRow>[]>)" } }, "margin": { "defaultValue": null, "description": "", "name": "margin", "required": false, "type": { "name": "ResponsiveStyleValue<Margin<string | number> | NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "overflow": { "defaultValue": null, "description": "", "name": "overflow", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | Overflow> | ((theme: Theme) => ResponsiveStyleValue<string[] | Overflow>)" } }, "padding": { "defaultValue": null, "description": "", "name": "padding", "required": false, "type": { "name": "ResponsiveStyleValue<Padding<string | number> | NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "bgcolor": { "defaultValue": null, "description": "", "name": "bgcolor", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | BackgroundColor> | ((theme: Theme) => ResponsiveStyleValue<string[] | BackgroundColor>)" } }, "m": { "defaultValue": null, "description": "", "name": "m", "required": false, "type": { "name": "ResponsiveStyleValue<Margin<string | number> | NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "mt": { "defaultValue": null, "description": "", "name": "mt", "required": false, "type": { "name": "ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "mr": { "defaultValue": null, "description": "", "name": "mr", "required": false, "type": { "name": "ResponsiveStyleValue<MarginRight<string | number> | NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "mb": { "defaultValue": null, "description": "", "name": "mb", "required": false, "type": { "name": "ResponsiveStyleValue<MarginBottom<string | number> | NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "ml": { "defaultValue": null, "description": "", "name": "ml", "required": false, "type": { "name": "ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "mx": { "defaultValue": null, "description": "", "name": "mx", "required": false, "type": { "name": "ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "marginX": { "defaultValue": null, "description": "", "name": "marginX", "required": false, "type": { "name": "ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "my": { "defaultValue": null, "description": "", "name": "my", "required": false, "type": { "name": "ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "marginY": { "defaultValue": null, "description": "", "name": "marginY", "required": false, "type": { "name": "ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "pt": { "defaultValue": null, "description": "", "name": "pt", "required": false, "type": { "name": "ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "pr": { "defaultValue": null, "description": "", "name": "pr", "required": false, "type": { "name": "ResponsiveStyleValue<PaddingRight<string | number> | NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "pb": { "defaultValue": null, "description": "", "name": "pb", "required": false, "type": { "name": "ResponsiveStyleValue<PaddingBottom<string | number> | NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "pl": { "defaultValue": null, "description": "", "name": "pl", "required": false, "type": { "name": "ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "px": { "defaultValue": null, "description": "", "name": "px", "required": false, "type": { "name": "ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "paddingX": { "defaultValue": null, "description": "", "name": "paddingX", "required": false, "type": { "name": "ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "py": { "defaultValue": null, "description": "", "name": "py", "required": false, "type": { "name": "ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "paddingY": { "defaultValue": null, "description": "", "name": "paddingY", "required": false, "type": { "name": "ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)" } }, "typography": { "defaultValue": null, "description": "", "name": "typography", "required": false, "type": { "name": "ResponsiveStyleValue<string> | ((theme: Theme) => ResponsiveStyleValue<string>)" } }, "displayPrint": { "defaultValue": null, "description": "", "name": "displayPrint", "required": false, "type": { "name": "ResponsiveStyleValue<string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<string[] | Display>)" } }, "component": { "defaultValue": null, "description": "The component used for the root node.\nEither a string to use a HTML element or a component.", "name": "component", "required": false, "type": { "name": "ElementType<any>" } }, "ref": { "defaultValue": null, "description": "", "name": "ref", "required": false, "type": { "name": "Ref<unknown>" } }, "sx": { "defaultValue": null, "description": "The system prop that allows defining system overrides as well as additional CSS styles.", "name": "sx", "required": false, "type": { "name": "SxProps<Theme> & SxProps<Theme>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["packages/wizard/src/lib/styles.tsx#TabContainer"] = { docgenInfo: TabContainer.__docgenInfo, name: "TabContainer", path: "packages/wizard/src/lib/styles.tsx#TabContainer" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./packages/wizard/src/lib/Content/index.tsx

var Content_excluded = ["components"];


var Content = function Content(_ref) {
  var step = _ref.step,
    ComponentOverride = _ref.ComponentOverride;
  var components = step.components,
    others = objectWithoutPropertiesLoose_default()(step, Content_excluded);
  if (components != null && components.Content) {
    return components.Content({
      step: others
    });
  }
  if (ComponentOverride) {
    return (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(ComponentOverride, {
      step: step
    });
  }
  return (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(Box/* default */.Z, {
    sx: {
      mt: '20px'
    },
    children: step.content
  });
};
Content.displayName = "Content";
/* harmony default export */ const lib_Content = (Content);
try {
    // @ts-ignore
    Content.displayName = "Content";
    // @ts-ignore
    Content.__docgenInfo = { "description": "", "displayName": "Content", "props": { "ComponentOverride": { "defaultValue": null, "description": "", "name": "ComponentOverride", "required": true, "type": { "name": "FC<ContentBaseProps>" } }, "step": { "defaultValue": null, "description": "", "name": "step", "required": true, "type": { "name": "Step" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["packages/wizard/src/lib/Content/index.tsx#Content"] = { docgenInfo: Content.__docgenInfo, name: "Content", path: "packages/wizard/src/lib/Content/index.tsx#Content" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./packages/wizard/src/lib/wizard.tsx
















function setAccessibilityProps(index) {
  return {
    id: "vertical-tab-" + index,
    'aria-controls': "vertical-tabpanel-" + index
  };
}
var Wizard = function Wizard(_ref) {
  var onBack = _ref.onBack,
    onNext = _ref.onNext,
    onFinish = _ref.onFinish,
    onChange = _ref.onChange,
    _ref$isLinear = _ref.isLinear,
    isLinear = _ref$isLinear === void 0 ? false : _ref$isLinear,
    _ref$showCompleted = _ref.showCompleted,
    showCompleted = _ref$showCompleted === void 0 ? false : _ref$showCompleted,
    tabIndicatorColor = _ref.tabIndicatorColor,
    ContainerProps = _ref.ContainerProps,
    TabsProps = _ref.TabsProps,
    TabPanelContainerProps = _ref.TabPanelContainerProps,
    TabOverride = _ref.TabOverride,
    HeaderOverride = _ref.HeaderOverride,
    ContentOverride = _ref.ContentOverride,
    FooterOverride = _ref.FooterOverride,
    steps = _ref.steps;
  var _useState = (0,react.useState)(0),
    currentStep = _useState[0],
    setCurrentStep = _useState[1];
  var handleChange = function handleChange(newStep) {
    onChange && onChange(currentStep);
    var isNextStep = newStep === currentStep + 1;
    var isDisabled = steps[newStep] ? steps[newStep].disabled : false;
    if (isDisabled) return;
    if (isLinear && !isNextStep) return;
    setCurrentStep(newStep);
  };
  var handleFinish = function handleFinish() {
    onFinish && onFinish();
  };
  var handleNext = function handleNext() {
    var isLastStep = currentStep >= steps.length - 1;
    onNext && onNext(currentStep);
    if (isLastStep) return;
    handleChange(currentStep + 1);
  };
  var handleBack = function handleBack() {
    var isFirstStep = currentStep === 0;
    onBack && onBack(currentStep);
    if (isFirstStep) return;
    handleChange(currentStep - 1);
  };
  (0,react.useEffect)(function () {
    var allDisabled = steps.every(function (step) {
      return step.disabled === true;
    });
    if (steps.length === 0) {
      setCurrentStep(-2);
    } else if (steps[currentStep].disabled && !allDisabled) {
      handleNext();
    } else if (allDisabled) {
      setCurrentStep(-1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (0,emotion_react_jsx_runtime_browser_esm/* jsxs */.BX)(Box/* default */.Z, Object.assign({
    sx: {
      display: 'flex'
    },
    width: "100%"
  }, ContainerProps, {
    children: [(0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(Tabs/* default */.Z, Object.assign({
      orientation: "vertical",
      value: currentStep,
      "aria-label": "Vertical tabs",
      sx: {
        borderRight: 1,
        borderColor: 'divider'
      },
      TabIndicatorProps: {
        sx: {
          bgcolor: tabIndicatorColor
        }
      }
    }, TabsProps, {
      children: steps.map(function (step, index) {
        return (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(TabContainer, Object.assign({
          onClick: function onClick() {
            return handleChange(index);
          }
        }, setAccessibilityProps(index), {
          children: (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(lib_Tab, {
            isActive: index === currentStep,
            step: step,
            isCompleted: step.status === 'completed',
            showCompleted: showCompleted,
            TabOverride: TabOverride
          })
        }), step.title);
      })
    })), (0,emotion_react_jsx_runtime_browser_esm/* jsxs */.BX)(Box/* default */.Z, Object.assign({
      width: "80%"
    }, TabPanelContainerProps, {
      children: [(0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(lib_TabPanel, {
        value: currentStep,
        index: -2,
        children: (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(Box/* default */.Z, {
          sx: {
            textAlign: 'center'
          },
          children: (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(Typography/* default */.Z, {
            variant: "body1",
            children: "No steps available"
          })
        })
      }), (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(lib_TabPanel, {
        value: currentStep,
        index: -1,
        children: (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(Box/* default */.Z, {
          sx: {
            textAlign: 'center'
          },
          children: (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(Typography/* default */.Z, {
            variant: "body1",
            children: "All steps are disabled"
          })
        })
      }), steps.map(function (step, index) {
        return (0,emotion_react_jsx_runtime_browser_esm/* jsxs */.BX)(lib_TabPanel, {
          value: currentStep,
          index: index,
          children: [(0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(lib_Header, {
            step: step,
            ComponentOverride: HeaderOverride
          }), (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(lib_Content, {
            step: step,
            ComponentOverride: ContentOverride
          }), (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(lib_Footer, {
            isFirst: index === 0,
            isLast: index + 1 === steps.length,
            step: step,
            handleBack: handleBack,
            handleNext: handleNext,
            handleFinish: handleFinish,
            ComponentOverride: FooterOverride
          })]
        }, step.title);
      })]
    }))]
  }));
};
Wizard.displayName = "Wizard";
/* harmony default export */ const lib_wizard = (Wizard);
try {
    // @ts-ignore
    Wizard.displayName = "Wizard";
    // @ts-ignore
    Wizard.__docgenInfo = { "description": "", "displayName": "Wizard", "props": { "onBack": { "defaultValue": null, "description": "", "name": "onBack", "required": false, "type": { "name": "(stepIndex: number) => void" } }, "onNext": { "defaultValue": null, "description": "", "name": "onNext", "required": false, "type": { "name": "(stepIndex: number) => void" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "(stepIndex: number) => void" } }, "onFinish": { "defaultValue": null, "description": "", "name": "onFinish", "required": false, "type": { "name": "() => void" } }, "isLinear": { "defaultValue": { value: "false" }, "description": "", "name": "isLinear", "required": false, "type": { "name": "boolean" } }, "showCompleted": { "defaultValue": { value: "false" }, "description": "", "name": "showCompleted", "required": false, "type": { "name": "boolean" } }, "TabOverride": { "defaultValue": null, "description": "", "name": "TabOverride", "required": true, "type": { "name": "React.FC<TabBaseProps>" } }, "HeaderOverride": { "defaultValue": null, "description": "", "name": "HeaderOverride", "required": true, "type": { "name": "React.FC<HeaderBaseProps>" } }, "ContentOverride": { "defaultValue": null, "description": "", "name": "ContentOverride", "required": true, "type": { "name": "React.FC<ContentBaseProps>" } }, "FooterOverride": { "defaultValue": null, "description": "", "name": "FooterOverride", "required": true, "type": { "name": "React.FC<FooterBaseProps>" } }, "steps": { "defaultValue": null, "description": "", "name": "steps", "required": true, "type": { "name": "Step[]" } }, "tabIndicatorColor": { "defaultValue": null, "description": "", "name": "tabIndicatorColor", "required": false, "type": { "name": "string" } }, "ContainerProps": { "defaultValue": null, "description": "", "name": "ContainerProps", "required": false, "type": { "name": "object" } }, "TabsProps": { "defaultValue": null, "description": "", "name": "TabsProps", "required": false, "type": { "name": "{ action?: Ref<TabsActions>; allowScrollButtonsMobile?: boolean; 'aria-label'?: string; 'aria-labelledby'?: string; centered?: boolean; children?: ReactNode; classes?: Partial<...>; ... 14 more ...; sx?: SxProps<...>; } & CommonProps & Omit<...>" } }, "TabPanelContainerProps": { "defaultValue": null, "description": "", "name": "TabPanelContainerProps", "required": false, "type": { "name": "object" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["packages/wizard/src/lib/wizard.tsx#Wizard"] = { docgenInfo: Wizard.__docgenInfo, name: "Wizard", path: "packages/wizard/src/lib/wizard.tsx#Wizard" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    wizard.displayName = "wizard";
    // @ts-ignore
    wizard.__docgenInfo = { "description": "", "displayName": "wizard", "props": { "onBack": { "defaultValue": null, "description": "", "name": "onBack", "required": false, "type": { "name": "(stepIndex: number) => void" } }, "onNext": { "defaultValue": null, "description": "", "name": "onNext", "required": false, "type": { "name": "(stepIndex: number) => void" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "(stepIndex: number) => void" } }, "onFinish": { "defaultValue": null, "description": "", "name": "onFinish", "required": false, "type": { "name": "() => void" } }, "isLinear": { "defaultValue": { value: "false" }, "description": "", "name": "isLinear", "required": false, "type": { "name": "boolean" } }, "showCompleted": { "defaultValue": { value: "false" }, "description": "", "name": "showCompleted", "required": false, "type": { "name": "boolean" } }, "TabOverride": { "defaultValue": null, "description": "", "name": "TabOverride", "required": true, "type": { "name": "React.FC<TabBaseProps>" } }, "HeaderOverride": { "defaultValue": null, "description": "", "name": "HeaderOverride", "required": true, "type": { "name": "React.FC<HeaderBaseProps>" } }, "ContentOverride": { "defaultValue": null, "description": "", "name": "ContentOverride", "required": true, "type": { "name": "React.FC<ContentBaseProps>" } }, "FooterOverride": { "defaultValue": null, "description": "", "name": "FooterOverride", "required": true, "type": { "name": "React.FC<FooterBaseProps>" } }, "steps": { "defaultValue": null, "description": "", "name": "steps", "required": true, "type": { "name": "Step[]" } }, "tabIndicatorColor": { "defaultValue": null, "description": "", "name": "tabIndicatorColor", "required": false, "type": { "name": "string" } }, "ContainerProps": { "defaultValue": null, "description": "", "name": "ContainerProps", "required": false, "type": { "name": "object" } }, "TabsProps": { "defaultValue": null, "description": "", "name": "TabsProps", "required": false, "type": { "name": "{ action?: Ref<TabsActions>; allowScrollButtonsMobile?: boolean; 'aria-label'?: string; 'aria-labelledby'?: string; centered?: boolean; children?: ReactNode; classes?: Partial<...>; ... 14 more ...; sx?: SxProps<...>; } & CommonProps & Omit<...>" } }, "TabPanelContainerProps": { "defaultValue": null, "description": "", "name": "TabPanelContainerProps", "required": false, "type": { "name": "object" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["packages/wizard/src/lib/wizard.tsx#wizard"] = { docgenInfo: wizard.__docgenInfo, name: "wizard", path: "packages/wizard/src/lib/wizard.tsx#wizard" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(67557);
;// CONCATENATED MODULE: ./packages/wizard/src/lib/wizard.stories.mdx












const steps = [{
  title: '01. Select campaign settings',
  subtitle: 'Subtitle',
  content: 'For each ad campaign that you create, you can control how much ' + "you're willing to spend on clicks and conversions, which networks " + 'and geographical locations you want your ads to show on, and more.',
  disabled: false,
  status: undefined
}, {
  title: '02. Create an ad group',
  subtitle: 'You can write some cool information stuff here',
  content: `Small text content`,
  disabled: false,
  status: undefined
}, {
  title: '03. Create an ad',
  subtitle: 'Subtitle',
  content: 'Try out different ad text to see what brings in the most customers, ' + 'and learn how to enhance your ads using features like ad extensions.' + 'If you run into any problems with your ads, find out how to tell if ' + "they're running and how to resolve approval issues.",
  disabled: false,
  status: undefined
}];

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
        title: "Wizard",
        component: lib_wizard
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.h1, {
        id: "wizard-",
        children: ["Wizard ", /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: `https://img.shields.io/badge/Version-v${package_namespaceObject.i}-brightgreenn`
        })]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
        children: "Use this component for currency inputs"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "installation",
        children: "Installation"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["First install the latest version of the package from ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "@novatics/wizard"
        }), "."]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "yarn add @novatics/wizard\n\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "dependencies",
        children: "Dependencies"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["This component extends some ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.a, {
          href: "https://mui.com/material-ui/getting-started/overview/",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "Material UI"
        }), " components. Therefore is needed to install Material UI:"]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "yarn add @mui/material @emotion/react @emotion/styled\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "basic-usage",
        children: "Basic Usage"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-tsx",
          children: "import Wizard from '@novatics/wizard';\n\n<Wizard steps={['...']} />;\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Basic Usage",
          children: args => /*#__PURE__*/(0,jsx_runtime.jsx)(lib_wizard, {
            steps: steps
          })
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "linear",
        children: "Linear"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "isLinear"
        }), " prop defines whether the tabs will navigate in a linear way or not:"]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-tsx",
          children: "import Wizard from '@novatics/wizard';\n\n<Wizard steps={['...']} isLinear />;\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Linear",
          children: args => /*#__PURE__*/(0,jsx_runtime.jsx)(lib_wizard, {
            steps: steps,
            isLinear: true
          })
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "show-completed",
        children: "Show Completed"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "showCompleted"
        }), " prop defines whether the tab will show a checkmark when a step is completed or not."]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["To set a step completed, we have to set the value of ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "status"
        }), " key inside ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "steps"
        }), " to ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "'completed'"
        }), ":"]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Show Completed",
          children: args => {
            const [completeSteps, setCompleteSteps] = (0,react.useState)(steps);

            const completeStep = stepIndex => {
              setCompleteSteps(value => value.map((step, i) => i === stepIndex ? { ...step,
                status: 'completed'
              } : step));
            };

            return /*#__PURE__*/(0,jsx_runtime.jsx)(lib_wizard, {
              onChange: stepIndex => completeStep(stepIndex),
              steps: completeSteps,
              showCompleted: true
            });
          }
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "components-override",
        children: "Components Override"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
        children: "It is possible to override the whole Wizard component by using the following props:"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-tsx",
          children: "import Wizard from '@novatics/wizard';\n\nconst steps = ['...'];\n\n<Wizard\n  steps={steps}\n  TabOverride={() => <div>Tab</div>}\n  HeaderOverride={() => <div>Header</div>}\n  ContentOverride={() => <div>Content</div>}\n  FooterOverride={() => <div>Footer</div>}\n/>;\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["We can also override components for individual tabs by using the ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "components"
        }), " key inside ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "steps"
        }), " array:"]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-tsx",
          children: "import Wizard from '@novatics/wizard';\n\nconst steps = [\n  {\n    title: '01. Select campaign settings',\n    subtitle: 'Subtitle',\n    content: `...`,\n    disabled: false,\n    components: {\n      Tab: () => <div>Individual Tab</div>,\n      Header: () => <div>Individual Header</div>,\n      Content: () => <div>Individual Content</div>,\n      Footer: () => <div>Individual Footer</div>,\n    },\n  },\n];\n\n<Wizard steps={steps} />;\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Components Override",
          children: args => {
            const newSteps = steps.map((step, i) => {
              return i === 0 ? { ...step,
                components: {
                  Tab: () => /*#__PURE__*/(0,jsx_runtime.jsx)(_components.div, {
                    children: "Individual Tab"
                  }),
                  Header: () => /*#__PURE__*/(0,jsx_runtime.jsx)(_components.div, {
                    children: "Individual header"
                  }),
                  Content: () => /*#__PURE__*/(0,jsx_runtime.jsx)(_components.div, {
                    children: "Individual content"
                  }),
                  Footer: () => /*#__PURE__*/(0,jsx_runtime.jsx)(_components.div, {
                    children: "Individual footer"
                  })
                }
              } : step;
            });
            return /*#__PURE__*/(0,jsx_runtime.jsx)(lib_wizard, {
              steps: newSteps,
              HeaderOverride: () => /*#__PURE__*/(0,jsx_runtime.jsx)(_components.div, {
                children: "Header"
              }),
              ContentOverride: () => /*#__PURE__*/(0,jsx_runtime.jsx)(_components.div, {
                children: "Content"
              }),
              FooterOverride: () => /*#__PURE__*/(0,jsx_runtime.jsx)(_components.div, {
                children: "Footer"
              })
            });
          }
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "disabled-tab",
        children: "Disabled Tab"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "disabled"
        }), " key inside ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "steps"
        }), " array allows individual tabs to be disabled:"]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-tsx",
          children: "import Wizard from '@novatics/wizard';\n\nconst steps = [\n  {\n    title: '03. Create an ad',\n    subtitle: 'Subtitle',\n    content: `...`,\n    disabled: true,\n  },\n];\n\n<Wizard steps={steps} />;\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Disabled Tab",
          children: args => {
            const newSteps = steps.map((step, i) => {
              return i === 2 ? { ...step,
                disabled: true
              } : step;
            });
            return /*#__PURE__*/(0,jsx_runtime.jsx)(lib_wizard, {
              steps: newSteps
            });
          }
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "playground",
        children: "Playground"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          argTypes: {
            isLinear: {
              name: 'isLinear',
              description: 'isLinear',
              table: {
                type: {
                  summary: 'boolean'
                },
                defaultValue: {
                  summary: false
                }
              },
              control: {
                type: 'boolean'
              }
            },
            showCompleted: {
              name: 'showCompleted',
              description: 'showCompleted',
              table: {
                type: {
                  summary: 'boolean'
                },
                defaultValue: {
                  summary: false
                }
              },
              control: {
                type: 'boolean'
              }
            },
            tabIndicatorColor: {
              name: 'tabIndicatorColor',
              description: 'tabIndicatorColor',
              table: {
                type: {
                  summary: 'string'
                },
                defaultValue: {
                  summary: 'blue'
                }
              },
              control: {
                type: 'text'
              }
            },
            onNext: {
              description: 'Method called when next button is pressed'
            },
            onBack: {
              description: 'Method called when back button is pressed'
            },
            onFinish: {
              description: 'Method called when finish button is pressed'
            },
            onChange: {
              description: 'Method called when current step changes'
            },
            ContainerProps: {
              description: 'Container Props'
            },
            TabsProps: {
              description: 'Tabs Props'
            },
            TabPanelContainerProps: {
              description: 'Tab Panel Container Props'
            },
            TabOverride: {
              description: 'Tab Override'
            },
            HeaderOverride: {
              description: 'Header Override'
            },
            ContentOverride: {
              description: 'Content Override'
            },
            FooterOverride: {
              description: 'Footer Override'
            },
            steps: {
              description: 'steps'
            }
          },
          name: "Playground",
          children: args => {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(lib_wizard, {
              onNext: () => {},
              onBack: () => {},
              onFinish: () => {},
              steps: steps,
              ...args
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


const basicUsage = args => /*#__PURE__*/(0,jsx_runtime.jsx)(lib_wizard, {
  steps: steps
});
basicUsage.storyName = 'Basic Usage';
basicUsage.parameters = {
  storySource: {
    source: 'args => <Wizard steps={steps} />'
  }
};
const linear = args => /*#__PURE__*/(0,jsx_runtime.jsx)(lib_wizard, {
  steps: steps,
  isLinear: true
});
linear.storyName = 'Linear';
linear.parameters = {
  storySource: {
    source: 'args => <Wizard steps={steps} isLinear />'
  }
};
const showCompleted = args => {
  const [completeSteps, setCompleteSteps] = (0,react.useState)(steps);

  const completeStep = stepIndex => {
    setCompleteSteps(value => value.map((step, i) => i === stepIndex ? { ...step,
      status: "completed"
    } : step));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(lib_wizard, {
    onChange: stepIndex => completeStep(stepIndex),
    steps: completeSteps,
    showCompleted: true
  });
};
showCompleted.storyName = 'Show Completed';
showCompleted.parameters = {
  storySource: {
    source: 'args => {\n  const [completeSteps, setCompleteSteps] = useState(steps);\n\n  const completeStep = stepIndex => {\n    setCompleteSteps(value => value.map((step, i) => i === stepIndex ? { ...step,\n      status: \"completed\"\n    } : step));\n  };\n\n  return <Wizard onChange={stepIndex => completeStep(stepIndex)} steps={completeSteps} showCompleted />;\n}'
  }
};
const componentsOverride = args => {
  const newSteps = steps.map((step, i) => {
    return i === 0 ? { ...step,
      components: {
        Tab: () => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: "Individual Tab"
        }),
        Header: () => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: "Individual header"
        }),
        Content: () => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: "Individual content"
        }),
        Footer: () => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: "Individual footer"
        })
      }
    } : step;
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(lib_wizard, {
    steps: newSteps,
    HeaderOverride: () => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: "Header"
    }),
    ContentOverride: () => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: "Content"
    }),
    FooterOverride: () => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: "Footer"
    })
  });
};
componentsOverride.storyName = 'Components Override';
componentsOverride.parameters = {
  storySource: {
    source: 'args => {\n  const newSteps = steps.map((step, i) => {\n    return i === 0 ? { ...step,\n      components: {\n        Tab: () => <div>Individual Tab</div>,\n        Header: () => <div>Individual header</div>,\n        Content: () => <div>Individual content</div>,\n        Footer: () => <div>Individual footer</div>\n      }\n    } : step;\n  });\n  return <Wizard steps={newSteps} HeaderOverride={() => <div>Header</div>} ContentOverride={() => <div>Content</div>} FooterOverride={() => <div>Footer</div>} />;\n}'
  }
};
const disabledTab = args => {
  const newSteps = steps.map((step, i) => {
    return i === 2 ? { ...step,
      disabled: true
    } : step;
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(lib_wizard, {
    steps: newSteps
  });
};
disabledTab.storyName = 'Disabled Tab';
disabledTab.parameters = {
  storySource: {
    source: 'args => {\n  const newSteps = steps.map((step, i) => {\n    return i === 2 ? { ...step,\n      disabled: true\n    } : step;\n  });\n  return <Wizard steps={newSteps} />;\n}'
  }
};
const playground = args => {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(lib_wizard, {
    onNext: () => {},
    onBack: () => {},
    onFinish: () => {},
    steps: steps,
    ...args
  });
};
playground.storyName = 'Playground';
playground.argTypes = {
  isLinear: {
    name: "isLinear",
    description: "isLinear",
    table: {
      type: {
        summary: "boolean"
      },
      defaultValue: {
        summary: false
      }
    },
    control: {
      type: "boolean"
    }
  },
  showCompleted: {
    name: "showCompleted",
    description: "showCompleted",
    table: {
      type: {
        summary: "boolean"
      },
      defaultValue: {
        summary: false
      }
    },
    control: {
      type: "boolean"
    }
  },
  tabIndicatorColor: {
    name: "tabIndicatorColor",
    description: "tabIndicatorColor",
    table: {
      type: {
        summary: "string"
      },
      defaultValue: {
        summary: "blue"
      }
    },
    control: {
      type: "text"
    }
  },
  onNext: {
    description: "Method called when next button is pressed"
  },
  onBack: {
    description: "Method called when back button is pressed"
  },
  onFinish: {
    description: "Method called when finish button is pressed"
  },
  onChange: {
    description: "Method called when current step changes"
  },
  ContainerProps: {
    description: "Container Props"
  },
  TabsProps: {
    description: "Tabs Props"
  },
  TabPanelContainerProps: {
    description: "Tab Panel Container Props"
  },
  TabOverride: {
    description: "Tab Override"
  },
  HeaderOverride: {
    description: "Header Override"
  },
  ContentOverride: {
    description: "Content Override"
  },
  FooterOverride: {
    description: "Footer Override"
  },
  steps: {
    description: "steps"
  }
};
playground.parameters = {
  storySource: {
    source: 'args => {\n  return <Wizard onNext={() => {}} onBack={() => {}} onFinish={() => {}} steps={steps} {...args} />;\n}'
  }
};
const componentMeta = {
  title: 'Wizard',
  component: lib_wizard,
  tags: ['stories-mdx'],
  includeStories: ["basicUsage", "linear", "showCompleted", "componentsOverride", "disabledTab", "playground"]
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = { ...(componentMeta.parameters.docs || {}),
  page: MDXContent
};
/* harmony default export */ const wizard_stories = (componentMeta);

/***/ })

}]);
//# sourceMappingURL=wizard-src-lib-wizard-stories-mdx.474c4d45.iframe.bundle.js.map