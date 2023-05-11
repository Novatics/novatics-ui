import"./blocks-2646952b.js";import{j as g}from"./emotion-react-jsx-runtime.browser.esm-3f442687.js";import"./fonts-a80bcdbc.js";import{c as l,g as V,h as G,d as H,a as L,e as O}from"./useThemeProps-92c88c91.js";import{r as u}from"./index-ebeaab24.js";import{s as c,g as W,a as X,r as Z,c as J,b as K}from"./styled-c5864509.js";import{S as Q}from"./SwitchBase-ed19d555.js";import{c as _}from"./createSvgIcon-59a34c4d.js";import{j as e}from"./jsx-runtime-5926aa06.js";import{c as Y}from"./useControlled-5355145e.js";import{u as R}from"./index-bda0bad7.js";import{M as ee,C as j,S as b,A as oe}from"./index-cd9b6687.js";import"./emotion-react.browser.esm-74ad867f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-724eea7b.js";import"./typography-6dc0827f.js";import"./useFormControl-0ef100e1.js";import"./ButtonBase-970df35f.js";import"./TransitionGroupContext-9e5a73a2.js";import"./iframe-1be38eb2.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ce6f85b9.js";import"./index-356e4a49.js";const re=_(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),ie=_(e.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),ne=c("span")({position:"relative",display:"flex"}),se=c(re)({transform:"scale(1)"}),ae=c(ie)(({theme:o,ownerState:r})=>l({left:0,position:"absolute",transform:"scale(0)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeIn,duration:o.transitions.duration.shortest})},r.checked&&{transform:"scale(1)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeOut,duration:o.transitions.duration.shortest})}));function B(o){const{checked:r=!1,classes:s={},fontSize:n}=o,a=l({},o,{checked:r});return e.jsxs(ne,{className:s.root,ownerState:a,children:[e.jsx(se,{fontSize:n,className:s.background,ownerState:a}),e.jsx(ae,{fontSize:n,className:s.dot,ownerState:a})]})}const te=u.createContext(void 0),le=te;function ce(){return u.useContext(le)}function de(o){return X("MuiRadio",o)}const ue=W("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),D=ue,pe=["checked","checkedIcon","color","icon","name","onChange","size","className"],fe=o=>{const{classes:r,color:s}=o,n={root:["root",`color${V(s)}`]};return l({},r,K(n,de,r))},he=c(Q,{shouldForwardProp:o=>Z(o)||o==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:s}=o;return[r.root,r[`color${V(s.color)}`]]}})(({theme:o,ownerState:r})=>l({color:(o.vars||o).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${r.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette[r.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:G(r.color==="default"?o.palette.action.active:o.palette[r.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},r.color!=="default"&&{[`&.${D.checked}`]:{color:(o.vars||o).palette[r.color].main}},{[`&.${D.disabled}`]:{color:(o.vars||o).palette.action.disabled}}));function xe(o,r){return typeof r=="object"&&r!==null?o===r:String(o)===String(r)}const S=e.jsx(B,{checked:!0}),I=e.jsx(B,{}),me=u.forwardRef(function(r,s){var n,a;const t=H({props:r,name:"MuiRadio"}),{checked:p,checkedIcon:q=S,color:$="primary",icon:z=I,name:E,onChange:F,size:m="medium",className:U}=t,P=L(t,pe),w=l({},t,{color:$,size:m}),C=fe(w),d=ce();let y=p;const A=Y(F,d&&d.onChange);let v=E;return d&&(typeof y>"u"&&(y=xe(d.value,t.value)),typeof v>"u"&&(v=d.name)),e.jsx(he,l({type:"radio",icon:u.cloneElement(z,{fontSize:(n=I.props.fontSize)!=null?n:m}),checkedIcon:u.cloneElement(q,{fontSize:(a=S.props.fontSize)!=null?a:m}),ownerState:w,classes:C,name:v,checked:y,onChange:A,ref:s,className:J(C.root,U)},P))}),ye=me,ve="@novatics/radio",ge="0.2.2",je="./index.js",be="./index.d.ts",ke={".":{import:"./index.mjs",require:"./index.js"}},we={name:ve,version:ge,main:je,types:be,exports:ke},f=o=>`radial-gradient(${o},${o} 40%,transparent 44%)`,h=o=>`0 0 0 1.5px ${o}`,N=c("span")(({colorType:o,theme:{palette:r},error:s})=>{var p;const n=r[o].medium||r[o].dark;let a=((p=r.grayScale)==null?void 0:p.spaceStation)||"black",t=r[o].dark||"black";return s&&(a=r.error.main,t=r.error.main),{borderRadius:"50%",width:16,height:16,boxShadow:h(a),backgroundColor:"transparent",".Mui-focusVisible &":{outline:`2px auto ${r.primary.main}`,outlineOffset:2},"input:hover ~ &":{boxShadow:h(t),"&:before":{display:"block",width:16,height:16,backgroundImage:s?"none":f(n),content:'""'}}}}),Ce=c(N)(({colorType:o,theme:{palette:r},error:s})=>{let n=r[o].dark,a=r[o].main;const t=r.grayScale.spaceStation||"black";return s&&(a=r.error.main,n=r.error.main),{boxShadow:h(a),"&:before":{display:"block",width:16,height:16,backgroundImage:f(a),content:'""'},"input:disabled ~ &":{boxShadow:h(t),"&:before":{display:"block",width:16,height:16,content:'""',backgroundImage:f(t)}},"input:hover ~ &":{"&:before":{display:"block",width:16,height:16,backgroundImage:f(n),content:'""'}}}}),i=({color:o="primary",error:r,sx:s,...n})=>g(ye,{color:"default",disableFocusRipple:!0,disableRipple:!0,disableTouchRipple:!0,icon:g(N,{colorType:o,error:r}),checkedIcon:g(Ce,{colorType:o,error:r}),sx:O({"&:hover":{backgroundColor:"transparent"}},s),...n});try{i.displayName="Radio",i.__docgenInfo={description:"",displayName:"Radio",props:{color:{defaultValue:{value:"primary"},description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).`,name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"error"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}},error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"boolean"}},checked:{defaultValue:null,description:"If `true`, the component is checked.",name:"checked",required:!0,type:{name:"boolean"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}}}}}catch{}try{radio.displayName="radio",radio.__docgenInfo={description:"",displayName:"radio",props:{color:{defaultValue:{value:"primary"},description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).`,name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"error"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}},error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"boolean"}},checked:{defaultValue:null,description:"If `true`, the component is checked.",name:"checked",required:!0,type:{name:"boolean"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}}}}}catch{}function Re(o={}){const{wrapper:r}=Object.assign({},R(),o.components);return r?e.jsx(r,{...o,children:e.jsx(s,{})}):s();function s(){const n=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre",a:"a",div:"div"},R(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(ee,{title:"Radio",component:i}),`
`,e.jsxs(n.h1,{id:"radio-",children:["Radio ",e.jsx("img",{src:`https://img.shields.io/badge/Version-v${we.version}-brightgreenn`})]}),`
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
`,e.jsx(oe,{story:"Playground"}),`
`,e.jsx(n.p,{children:"made by Novatics ❤"})]})}}const T=o=>e.jsx("div",{style:{display:"flex",flexDirection:"row"},children:e.jsx(i,{...o})});T.storyName="Basic Usage";T.parameters={storySource:{source:`args => {
  return <div style={{
    display: "flex",
    flexDirection: "row"
  }}>
          <Radio {...args} />
        </div>;
}`}};const M=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("p",{children:"Default Behaviors"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{checked:!0}),e.jsx(i,{})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{disabled:!0,checked:!0}),e.jsx(i,{disabled:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{checked:!0,error:!0}),e.jsx(i,{error:!0})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("p",{children:"Color Variations"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"primary",checked:!0}),e.jsx(i,{color:"primary"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"secondary",checked:!0}),e.jsx(i,{color:"secondary"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"error",checked:!0}),e.jsx(i,{color:"error"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"info",checked:!0}),e.jsx(i,{color:"info"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"success",checked:!0}),e.jsx(i,{color:"success"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"warning",checked:!0}),e.jsx(i,{color:"warning"})]})]})]});M.storyName="Variations";M.parameters={storySource:{source:`<div style={{
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
}`}};const x={title:"Radio",component:i,tags:["stories-mdx"],includeStories:["basicUsage","variations","playground"]};x.parameters=x.parameters||{};x.parameters.docs={...x.parameters.docs||{},page:Re};const Ze=["basicUsage","variations","playground"];export{Ze as __namedExportsOrder,T as basicUsage,x as default,k as playground,M as variations};
//# sourceMappingURL=radio.stories-10bbf1a8.js.map
