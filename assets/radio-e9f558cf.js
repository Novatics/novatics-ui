import{j as r}from"./jsx-runtime-d079401a.js";import"./fonts-0fc9e249.js";import{s as w}from"./styled-e9f7a44f.js";import{c as i,h as x,e as N,f as F,g as M,o as H}from"./useThemeProps-09ff92e7.js";import{r as l}from"./index-f1f2c4b1.js";import{s as f,g as L,a as A,r as G,b as P,d as W}from"./styled-96cb1edf.js";import{S as U}from"./SwitchBase-782b0ce7.js";import{c as I}from"./createSvgIcon-1b71b914.js";import{c as O}from"./useControlled-953564ff.js";const D=I(r.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),Z=I(r.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),J=f("span")({position:"relative",display:"flex"}),K=f(D)({transform:"scale(1)"}),Q=f(Z)(({theme:e,ownerState:o})=>i({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},o.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}));function S(e){const{checked:o=!1,classes:a={},fontSize:n}=e,t=i({},e,{checked:o});return r.jsxs(J,{className:a.root,ownerState:t,children:[r.jsx(K,{fontSize:n,className:a.background,ownerState:t}),r.jsx(Q,{fontSize:n,className:a.dot,ownerState:t})]})}const X=l.createContext(void 0),Y=X;function ee(){return l.useContext(Y)}function oe(e){return A("MuiRadio",e)}const ae=L("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),k=ae,ne=["checked","checkedIcon","color","icon","name","onChange","size","className"],te=e=>{const{classes:o,color:a}=e,n={root:["root",`color${x(a)}`]};return i({},o,W(n,oe,o))},re=f(U,{shouldForwardProp:e=>G(e)||e==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,o[`color${x(a.color)}`]]}})(({theme:e,ownerState:o})=>i({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:N(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${k.checked}`]:{color:(e.vars||e).palette[o.color].main}},{[`&.${k.disabled}`]:{color:(e.vars||e).palette.action.disabled}}));function se(e,o){return typeof o=="object"&&o!==null?e===o:String(e)===String(o)}const C=r.jsx(S,{checked:!0}),v=r.jsx(S,{}),ie=l.forwardRef(function(o,a){var n,t;const s=F({props:o,name:"MuiRadio"}),{checked:d,checkedIcon:_=C,color:q="primary",icon:B=v,name:T,onChange:$,size:m="medium",className:z}=s,j=M(s,ne),y=i({},s,{color:q,size:m}),g=te(y),c=ee();let h=d;const E=O($,c&&c.onChange);let b=T;return c&&(typeof h>"u"&&(h=se(c.value,s.value)),typeof b>"u"&&(b=c.name)),r.jsx(re,i({type:"radio",icon:l.cloneElement(B,{fontSize:(n=v.props.fontSize)!=null?n:m}),checkedIcon:l.cloneElement(_,{fontSize:(t=C.props.fontSize)!=null?t:m}),ownerState:y,classes:g,name:b,checked:h,onChange:E,ref:a,className:P(g.root,z)},j))}),ce=ie,u=e=>`radial-gradient(${e},${e} 40%,transparent 44%)`,p=e=>`0 0 0 1.5px ${e}`,V=w("span")(({colorType:e,theme:{palette:o},error:a})=>{var d;const n=o[e].medium||o[e].dark;let t=((d=o.grayScale)==null?void 0:d.spaceStation)||"black",s=o[e].dark||"black";return a&&(t=o.error.main,s=o.error.main),{borderRadius:"50%",width:16,height:16,boxShadow:p(t),backgroundColor:"transparent",".Mui-focusVisible &":{outline:`2px auto ${o.primary.main}`,outlineOffset:2},"input:hover:enabled ~ &":{boxShadow:p(s),"&:before":{display:"block",width:16,height:16,backgroundImage:a?"none":u(n),content:'""'}}}}),le=w(V)(({colorType:e,theme:{palette:o},error:a})=>{let n=o[e].dark,t=o[e].main;const s=o.grayScale.spaceStation||"black";return a&&(t=o.error.main,n=o.error.main),{boxShadow:p(t),"&:before":{display:"block",width:16,height:16,backgroundImage:u(t),content:'""'},"input:disabled ~ &":{boxShadow:p(s),"&:before":{display:"block",width:16,height:16,content:'""',backgroundImage:u(s)}},"input:hover ~ &":{"&:before":{display:"block",width:16,height:16,backgroundImage:u(n),content:'""'}}}}),R=({color:e="primary",error:o,sx:a,...n})=>r.jsx(ce,{color:"default",disableFocusRipple:!0,disableRipple:!0,disableTouchRipple:!0,icon:r.jsx(V,{colorType:e,error:!!o}),checkedIcon:r.jsx(le,{colorType:e,error:!!o}),sx:H({"&:hover":{backgroundColor:"transparent"}},a),...n});try{R.displayName="Radio",R.__docgenInfo={description:"",displayName:"Radio",props:{color:{defaultValue:{value:"primary"},description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).`,name:"color",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"primary"'},{value:'"secondary"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"If `true`, the component is checked.",name:"checked",required:!1,type:{name:"boolean"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!1,type:{name:'"button"'}}}}}catch{}try{radio.displayName="radio",radio.__docgenInfo={description:"",displayName:"radio",props:{color:{defaultValue:{value:"primary"},description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).`,name:"color",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"primary"'},{value:'"secondary"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"If `true`, the component is checked.",name:"checked",required:!1,type:{name:"boolean"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!1,type:{name:'"button"'}}}}}catch{}export{R,Y as a};
//# sourceMappingURL=radio-e9f558cf.js.map
