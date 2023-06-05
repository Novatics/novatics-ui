import"./blocks-2646952b.js";import{j as g}from"./emotion-react-jsx-runtime.browser.esm-780ca0af.js";import"./fonts-570bed1b.js";import{s as V}from"./styled-627292af.js";import{c as l,g as _,h as H,d as L,a as O,e as W}from"./useThemeProps-d5e886d2.js";import{r as d}from"./index-ebeaab24.js";import{s as x,g as X,a as Z,r as J,c as K,b as Q}from"./styled-476a8079.js";import{S as Y}from"./SwitchBase-38ad43cc.js";import{c as B}from"./createSvgIcon-859f09df.js";import{j as e}from"./jsx-runtime-5926aa06.js";import{c as ee}from"./useControlled-5355145e.js";import{u as R}from"./index-bda0bad7.js";import{M as oe,C as j,S as b,A as re}from"./index-f6c5e39b.js";import"./emotion-react.browser.esm-3c2a4d00.js";import"./typography-6dc0827f.js";import"./useFormControl-0ef100e1.js";import"./ButtonBase-3ed457c7.js";import"./TransitionGroupContext-8ebc3921.js";import"./useForkRef-3ff4e0b8.js";import"./iframe-e3424326.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ce6f85b9.js";import"./index-356e4a49.js";const ie=B(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),ne=B(e.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),se=x("span")({position:"relative",display:"flex"}),ae=x(ie)({transform:"scale(1)"}),te=x(ne)(({theme:o,ownerState:r})=>l({left:0,position:"absolute",transform:"scale(0)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeIn,duration:o.transitions.duration.shortest})},r.checked&&{transform:"scale(1)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeOut,duration:o.transitions.duration.shortest})}));function N(o){const{checked:r=!1,classes:s={},fontSize:n}=o,a=l({},o,{checked:r});return e.jsxs(se,{className:s.root,ownerState:a,children:[e.jsx(ae,{fontSize:n,className:s.background,ownerState:a}),e.jsx(te,{fontSize:n,className:s.dot,ownerState:a})]})}const le=d.createContext(void 0),ce=le;function de(){return d.useContext(ce)}function ue(o){return Z("MuiRadio",o)}const pe=X("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),D=pe,fe=["checked","checkedIcon","color","icon","name","onChange","size","className"],he=o=>{const{classes:r,color:s}=o,n={root:["root",`color${_(s)}`]};return l({},r,Q(n,ue,r))},xe=x(Y,{shouldForwardProp:o=>J(o)||o==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:s}=o;return[r.root,r[`color${_(s.color)}`]]}})(({theme:o,ownerState:r})=>l({color:(o.vars||o).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${r.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette[r.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:H(r.color==="default"?o.palette.action.active:o.palette[r.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},r.color!=="default"&&{[`&.${D.checked}`]:{color:(o.vars||o).palette[r.color].main}},{[`&.${D.disabled}`]:{color:(o.vars||o).palette.action.disabled}}));function me(o,r){return typeof r=="object"&&r!==null?o===r:String(o)===String(r)}const S=e.jsx(N,{checked:!0}),I=e.jsx(N,{}),ye=d.forwardRef(function(r,s){var n,a;const t=L({props:r,name:"MuiRadio"}),{checked:u,checkedIcon:$=S,color:z="primary",icon:E=I,name:F,onChange:U,size:m="medium",className:P}=t,A=O(t,fe),w=l({},t,{color:z,size:m}),C=he(w),c=de();let y=u;const G=ee(U,c&&c.onChange);let v=F;return c&&(typeof y>"u"&&(y=me(c.value,t.value)),typeof v>"u"&&(v=c.name)),e.jsx(xe,l({type:"radio",icon:d.cloneElement(E,{fontSize:(n=I.props.fontSize)!=null?n:m}),checkedIcon:d.cloneElement($,{fontSize:(a=S.props.fontSize)!=null?a:m}),ownerState:w,classes:C,name:v,checked:y,onChange:G,ref:s,className:K(C.root,P)},A))}),ve=ye,ge="@novatics/radio",je="0.2.3",be="./index.js",ke="./index.d.ts",we={".":{import:"./index.mjs",require:"./index.js"}},Ce={name:ge,version:je,main:be,types:ke,exports:we},p=o=>`radial-gradient(${o},${o} 40%,transparent 44%)`,f=o=>`0 0 0 1.5px ${o}`,T=V("span")(({colorType:o,theme:{palette:r},error:s})=>{var u;const n=r[o].medium||r[o].dark;let a=((u=r.grayScale)==null?void 0:u.spaceStation)||"black",t=r[o].dark||"black";return s&&(a=r.error.main,t=r.error.main),{borderRadius:"50%",width:16,height:16,boxShadow:f(a),backgroundColor:"transparent",".Mui-focusVisible &":{outline:`2px auto ${r.primary.main}`,outlineOffset:2},"input:hover ~ &":{boxShadow:f(t),"&:before":{display:"block",width:16,height:16,backgroundImage:s?"none":p(n),content:'""'}}}}),Re=V(T)(({colorType:o,theme:{palette:r},error:s})=>{let n=r[o].dark,a=r[o].main;const t=r.grayScale.spaceStation||"black";return s&&(a=r.error.main,n=r.error.main),{boxShadow:f(a),"&:before":{display:"block",width:16,height:16,backgroundImage:p(a),content:'""'},"input:disabled ~ &":{boxShadow:f(t),"&:before":{display:"block",width:16,height:16,content:'""',backgroundImage:p(t)}},"input:hover ~ &":{"&:before":{display:"block",width:16,height:16,backgroundImage:p(n),content:'""'}}}}),i=({color:o="primary",error:r,sx:s,...n})=>g(ve,{color:"default",disableFocusRipple:!0,disableRipple:!0,disableTouchRipple:!0,icon:g(T,{colorType:o,error:r}),checkedIcon:g(Re,{colorType:o,error:r}),sx:W({"&:hover":{backgroundColor:"transparent"}},s),...n});try{i.displayName="Radio",i.__docgenInfo={description:"",displayName:"Radio",props:{color:{defaultValue:{value:"primary"},description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).`,name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"info"'},{value:'"warning"'}]}},error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"boolean"}},checked:{defaultValue:null,description:"If `true`, the component is checked.",name:"checked",required:!0,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}}}}}catch{}try{radio.displayName="radio",radio.__docgenInfo={description:"",displayName:"radio",props:{color:{defaultValue:{value:"primary"},description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).`,name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"info"'},{value:'"warning"'}]}},error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"boolean"}},checked:{defaultValue:null,description:"If `true`, the component is checked.",name:"checked",required:!0,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}}}}}catch{}function De(o={}){const{wrapper:r}=Object.assign({},R(),o.components);return r?e.jsx(r,{...o,children:e.jsx(s,{})}):s();function s(){const n=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre",a:"a",div:"div"},R(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(oe,{title:"Radio",component:i}),`
`,e.jsxs(n.h1,{id:"radio-",children:["Radio ",e.jsx("img",{src:`https://img.shields.io/badge/Version-v${Ce.version}-brightgreenn`})]}),`
`,e.jsx(n.h3,{id:"installation",children:"Installation"}),`
`,e.jsxs(n.p,{children:["First install the latest version of the package from ",e.jsx(n.code,{children:"@novatics/radio"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`  yarn add -D @novatics/radio
`})}),`
`,e.jsx(n.h3,{id:"dependencies",children:"Dependencies"}),`
`,e.jsxs(n.p,{children:["This component extends ",e.jsx(n.a,{href:"https://mui.com/material-ui/react-radio-button",target:"_blank",rel:"nofollow noopener noreferrer",children:"Material UI React Radio"}),". Therefore is needed to install Material UI:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn add @mui/material
`})}),`
`,e.jsx(n.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(j,{children:e.jsx(b,{name:"Basic Usage",children:a=>e.jsx(n.div,{style:{display:"flex",flexDirection:"row"},children:e.jsx(i,{...a})})})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import ... from '@novatics/radio';

  ...


`})}),`
`,e.jsx(n.h3,{id:"variations",children:"Variations"}),`
`,e.jsx(j,{children:e.jsx(b,{name:"Variations",children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx(n.p,{children:"Default Behaviors"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{checked:!0}),e.jsx(i,{})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{disabled:!0,checked:!0}),e.jsx(i,{disabled:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{checked:!0,error:!0}),e.jsx(i,{error:!0})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx(n.p,{children:"Color Variations"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"primary",checked:!0}),e.jsx(i,{color:"primary"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"secondary",checked:!0}),e.jsx(i,{color:"secondary"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"error",checked:!0}),e.jsx(i,{color:"error"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"info",checked:!0}),e.jsx(i,{color:"info"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"success",checked:!0}),e.jsx(i,{color:"success"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"warning",checked:!0}),e.jsx(i,{color:"warning"})]})]})]})})}),`
`,e.jsx(n.h3,{id:"playground",children:"Playground"}),`
`,e.jsx(j,{children:e.jsx(b,{name:"Playground",argTypes:{error:!1,checked:!1},children:a=>e.jsx(n.div,{style:{display:"flex",flexDirection:"row"},children:e.jsx(i,{...a})})})}),`
`,e.jsx(re,{story:"Playground"}),`
`,e.jsx(n.p,{children:"made by Novatics ❤"})]})}}const M=o=>e.jsx("div",{style:{display:"flex",flexDirection:"row"},children:e.jsx(i,{...o})});M.storyName="Basic Usage";M.parameters={storySource:{source:`args => {
  return <div style={{
    display: "flex",
    flexDirection: "row"
  }}>
          <Radio {...args} />
        </div>;
}`}};const q=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("p",{children:"Default Behaviors"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{checked:!0}),e.jsx(i,{})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{disabled:!0,checked:!0}),e.jsx(i,{disabled:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{checked:!0,error:!0}),e.jsx(i,{error:!0})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("p",{children:"Color Variations"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"primary",checked:!0}),e.jsx(i,{color:"primary"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"secondary",checked:!0}),e.jsx(i,{color:"secondary"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"error",checked:!0}),e.jsx(i,{color:"error"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"info",checked:!0}),e.jsx(i,{color:"info"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"success",checked:!0}),e.jsx(i,{color:"success"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"warning",checked:!0}),e.jsx(i,{color:"warning"})]})]})]});q.storyName="Variations";q.parameters={storySource:{source:`<div style={{
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around"
}}><div style={{
    display: "flex",
    flexDirection: "column"
  }}><p>{"Default Behaviors"}</p><div style={{
      display: "flex",
      flexDirection: "row"
    }}><Radio checked /><Radio /></div><div style={{
      display: "flex",
      flexDirection: "row"
    }}><Radio disabled checked /><Radio disabled /></div><div style={{
      display: "flex",
      flexDirection: "row"
    }}><Radio checked error /><Radio error /></div></div><div style={{
    display: "flex",
    flexDirection: "column"
  }}><p>{"Color Variations"}</p><div style={{
      display: "flex",
      flexDirection: "row"
    }}><Radio color="primary" checked /><Radio color="primary" /></div><div style={{
      display: "flex",
      flexDirection: "row"
    }}><Radio color="secondary" checked /><Radio color="secondary" /></div><div style={{
      display: "flex",
      flexDirection: "row"
    }}><Radio color="error" checked /><Radio color="error" /></div><div style={{
      display: "flex",
      flexDirection: "row"
    }}><Radio color="info" checked /><Radio color="info" /></div><div style={{
      display: "flex",
      flexDirection: "row"
    }}><Radio color="success" checked /><Radio color="success" /></div><div style={{
      display: "flex",
      flexDirection: "row"
    }}><Radio color="warning" checked /><Radio color="warning" /></div></div></div>`}};const k=o=>e.jsx("div",{style:{display:"flex",flexDirection:"row"},children:e.jsx(i,{...o})});k.storyName="Playground";k.argTypes={error:!1,checked:!1};k.parameters={storySource:{source:`args => {
  return <div style={{
    display: "flex",
    flexDirection: "row"
  }}>
          <Radio {...args} />
        </div>;
}`}};const h={title:"Radio",component:i,tags:["stories-mdx"],includeStories:["basicUsage","variations","playground"]};h.parameters=h.parameters||{};h.parameters.docs={...h.parameters.docs||{},page:De};const Ke=["basicUsage","variations","playground"];export{Ke as __namedExportsOrder,M as basicUsage,h as default,k as playground,q as variations};
//# sourceMappingURL=radio.stories-787a2c3f.js.map
