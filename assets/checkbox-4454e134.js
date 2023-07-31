import{j as i}from"./jsx-runtime-d079401a.js";import{d as q}from"./Check-2a94defc.js";import"./fonts-0fc9e249.js";import{s as h}from"./styled-e9f7a44f.js";import{r as l}from"./index-f1f2c4b1.js";import{h as x,c as s,e as T,f as $,g as B}from"./useThemeProps-09ff92e7.js";import{g as R,a as j,s as E,r as F,b as H,d as M}from"./styled-96cb1edf.js";import{S}from"./SwitchBase-782b0ce7.js";import{c as f}from"./createSvgIcon-1b71b914.js";const L=f(i.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),N=f(i.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),P=f(i.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function A(o){return j("MuiCheckbox",o)}const W=R("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),m=W,U=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],G=o=>{const{classes:e,indeterminate:n,color:t}=o,a={root:["root",n&&"indeterminate",`color${x(t)}`]},r=M(a,A,e);return s({},e,r)},O=E(S,{shouldForwardProp:o=>F(o)||o==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.root,n.indeterminate&&e.indeterminate,n.color!=="default"&&e[`color${x(n.color)}`]]}})(({theme:o,ownerState:e})=>s({color:(o.vars||o).palette.text.secondary},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${e.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.hoverOpacity})`:T(e.color==="default"?o.palette.action.active:o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${m.checked}, &.${m.indeterminate}`]:{color:(o.vars||o).palette[e.color].main},[`&.${m.disabled}`]:{color:(o.vars||o).palette.action.disabled}})),D=i.jsx(N,{}),J=i.jsx(L,{}),K=i.jsx(P,{}),Q=l.forwardRef(function(e,n){var t,a;const r=$({props:e,name:"MuiCheckbox"}),{checkedIcon:d=D,color:u="primary",icon:V=J,indeterminate:c=!1,indeterminateIcon:b=K,inputProps:w,size:p="medium",className:_}=r,z=B(r,U),y=c?b:V,g=c?b:d,C=s({},r,{color:u,indeterminate:c,size:p}),k=G(C);return i.jsx(O,s({type:"checkbox",inputProps:s({"data-indeterminate":c},w),icon:l.cloneElement(y,{fontSize:(t=y.props.fontSize)!=null?t:p}),checkedIcon:l.cloneElement(g,{fontSize:(a=g.props.fontSize)!=null?a:p}),ownerState:C,ref:n,className:H(k.root,_)},z,{classes:k}))}),X=Q,Y=h("span")(({colorType:o,theme:{palette:e},variant:n,disabled:t})=>{const a=n==="filled",r=e[o],d=t?e.grey[20]:a?r.main:"transparent",u=t?e.grey[20]:r.main;return{width:14,height:14,backgroundColor:d,borderRadius:"2px",border:`2px solid ${u}`,"&:before":{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"block",width:8.89,height:1.78,content:'""',backgroundColor:a?e.grey[0]:r.main},"input:hover:not([disabled]) ~ &":{backgroundColor:a?r.dark:r.light,borderColor:r.dark,"&:before":{backgroundColor:a?e.grey[0]:r.medium}},"input:disabled ~ &":{backgroundColor:a?e.grey[20]:"transparent",border:`2px solid ${e.grey[20]}`,"&:before":{backgroundColor:a?e.grey[0]:e.grey[20]}}}}),I=h(q)(({colorType:o,theme:{palette:e},error:n,disabled:t})=>({width:14,height:14,borderRadius:"2px",border:`2px solid ${n?e.error.main:t?e.grey[20]:e.grey[35]}`,color:"transparent","input:hover:not([disabled]) ~ &":{backgroundColor:e[o].light,borderColor:e[o].dark,color:e[o].medium||e[o].dark}})),Z=h(I)(({colorType:o,theme:{palette:e},variant:n,disabled:t})=>{const a=n==="filled",r=l.useMemo(()=>t&&!a?{color:e.grey[20],borderColor:e.grey[20],backgroundColor:e.grey[0]}:t&&a?{color:e.grey[0],borderColor:e.grey[20],backgroundColor:e.grey[20]}:a?{color:e.grey[0],borderColor:e[o].main,backgroundColor:e[o].main}:{color:e[o].main,borderColor:e[o].main,backgroundColor:e.grey[0]},[o,t,a,e]);return{color:r.color,backgroundColor:r.backgroundColor,borderColor:r.borderColor,"input:hover:not([disabled]) ~ &":{color:r.color,backgroundColor:r.backgroundColor,borderColor:r.borderColor}}}),v=({variant:o="filled",color:e="primary",disabled:n,...t})=>i.jsx(X,{disableFocusRipple:!0,disableRipple:!0,disableTouchRipple:!0,disabled:n,icon:i.jsx(I,{colorType:e,error:e==="error",disabled:n}),checkedIcon:i.jsx(Z,{colorType:e,variant:o,disabled:n}),indeterminateIcon:i.jsx(Y,{colorType:e,variant:o,disabled:n}),...t});try{v.displayName="Checkbox",v.__docgenInfo={description:"",displayName:"Checkbox",props:{variant:{defaultValue:{value:"filled"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"filled"'}]}},color:{defaultValue:{value:"primary"},description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).`,name:"color",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"primary"'},{value:'"secondary"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!1,type:{name:'"button"'}}}}}catch{}try{checkbox.displayName="checkbox",checkbox.__docgenInfo={description:"",displayName:"checkbox",props:{variant:{defaultValue:{value:"filled"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"filled"'}]}},color:{defaultValue:{value:"primary"},description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).`,name:"color",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"primary"'},{value:'"secondary"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!1,type:{name:'"button"'}}}}}catch{}export{v as C};
//# sourceMappingURL=checkbox-4454e134.js.map
