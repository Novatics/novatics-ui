import{r as w}from"./index-ebeaab24.js";import"./blocks-2646952b.js";import{r as _,i as N}from"./createSvgIcon-aca9382c.js";import{j as n}from"./jsx-runtime-5926aa06.js";import{B as i}from"./button-128ba6f1.js";import{S as r}from"./Stack-0951922c.js";import{M as $}from"./FormControlLabel-4ff3eef3.js";import{g as u,c as p,h as f,l as E,i as T,d as U,a as O}from"./useThemeProps-d5e886d2.js";import{g as A,a as X,s as S,c as q,b as F}from"./styled-40610256.js";import{S as V}from"./SwitchBase-22bb3c60.js";import{u as C}from"./index-bda0bad7.js";import{M as W,C as m,S as v}from"./index-b80fc1b2.js";import"./createSvgIcon-96acddc5.js";import"./ownerWindow-74a9cc60.js";import"./useForkRef-3ff4e0b8.js";import"./useId-b93361cb.js";import"./useControlled-5355145e.js";import"./isMuiElement-b72c78c9.js";import"./TransitionGroupContext-8ebc3921.js";import"./ButtonBase-22f8a9f4.js";import"./emotion-react.browser.esm-3c2a4d00.js";import"./emotion-react-jsx-runtime.browser.esm-780ca0af.js";import"./Button-b530804d.js";import"./styled-3b7621b8.js";import"./extendSxProp-f682d789.js";import"./formControlState-a1fb9590.js";import"./useFormControl-0ef100e1.js";import"./Typography-2615a9c0.js";import"./iframe-5abeea0b.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ce6f85b9.js";import"./index-356e4a49.js";function G(t){return X("MuiSwitch",t)}const H=A("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),s=H,J=["className","color","edge","size","sx"],K=t=>{const{classes:o,edge:e,size:a,color:l,checked:c,disabled:h}=t,b={root:["root",e&&`edge${u(e)}`,`size${u(a)}`],switchBase:["switchBase",`color${u(l)}`,c&&"checked",h&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},B=F(b,G,o);return p({},o,B)},Q=S("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,e.edge&&o[`edge${u(e.edge)}`],o[`size${u(e.size)}`]]}})(({ownerState:t})=>p({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},t.edge==="start"&&{marginLeft:-8},t.edge==="end"&&{marginRight:-8},t.size==="small"&&{width:40,height:24,padding:7,[`& .${s.thumb}`]:{width:16,height:16},[`& .${s.switchBase}`]:{padding:4,[`&.${s.checked}`]:{transform:"translateX(16px)"}}})),Y=S(V,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.switchBase,{[`& .${s.input}`]:o.input},e.color!=="default"&&o[`color${u(e.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${s.checked}`]:{transform:"translateX(20px)"},[`&.${s.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${s.checked} + .${s.track}`]:{opacity:.5},[`&.${s.disabled} + .${s.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${s.input}`]:{left:"-100%",width:"300%"}}),({theme:t,ownerState:o})=>p({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:f(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${s.checked}`]:{color:(t.vars||t).palette[o.color].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[o.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:f(t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${s.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${o.color}DisabledColor`]:`${t.palette.mode==="light"?E(t.palette[o.color].main,.62):T(t.palette[o.color].main,.55)}`}},[`&.${s.checked} + .${s.track}`]:{backgroundColor:(t.vars||t).palette[o.color].main}})),Z=S("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,o)=>o.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),nn=S("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,o)=>o.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),tn=w.forwardRef(function(o,e){const a=U({props:o,name:"MuiSwitch"}),{className:l,color:c="primary",edge:h=!1,size:b="medium",sx:B}=a,R=O(a,J),g=p({},a,{color:c,edge:h,size:b}),x=K(g),y=n.jsx(nn,{className:x.thumb,ownerState:g});return n.jsxs(Q,{className:q(x.root,l),sx:B,ownerState:g,children:[n.jsx(Y,p({type:"checkbox",icon:y,checkedIcon:y,ref:e,ownerState:g},R,{classes:p({},x,{root:x.switchBase})})),n.jsx(Z,{className:x.track,ownerState:g})]})}),z=tn;var k={},on=N;Object.defineProperty(k,"__esModule",{value:!0});var d=k.default=void 0,an=on(_()),rn=n,en=(0,an.default)((0,rn.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");d=k.default=en;const sn="@novatics/button",cn="0.1.1",dn="./index.js",ln="./index.d.ts",un={".":{import:"./index.mjs",require:"./index.js"}},pn={name:sn,version:cn,main:dn,types:ln,exports:un};function hn(t={}){const{wrapper:o}=Object.assign({},C(),t.components);return o?n.jsx(o,{...t,children:n.jsx(e,{})}):e();function e(){const a=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre"},C(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(W,{title:"Button",component:i}),`
`,n.jsxs(a.h1,{id:"button-",children:["Button ",n.jsx("img",{src:`https://img.shields.io/badge/Version-v${pn.version}-brightgreenn`})]}),`
`,n.jsx(a.h3,{id:"installation",children:"Installation"}),`
`,n.jsxs(a.p,{children:["First install the latest version of the package from ",n.jsx(a.code,{children:"@novatics/button"}),"."]}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-shell",children:`  yarn add -D @novatics/button
`})}),`
`,n.jsx(a.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsxs(a.p,{children:["The ",n.jsx(a.code,{children:"Button"})," component have three variants: it supports outlined, contained and only text styling. The default variant is ",n.jsx(a.code,{children:"text"}),"."]}),`
`,n.jsx(m,{children:n.jsx(v,{name:"Basic Usage",children:l=>n.jsxs(r,{spacing:3,children:[n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(i,{variant:"contained",children:"Button"}),n.jsx(i,{variant:"outlined",children:"Button"}),n.jsx(i,{variant:"text",children:"Button"})]}),n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(i,{disabled:!0,variant:"contained",children:"Disabled"}),n.jsx(i,{disabled:!0,variant:"outlined",children:"Disabled"}),n.jsx(i,{disabled:!0,variant:"text",children:"Disabled"})]})]})})}),`
`,n.jsx(a.h3,{id:"size",children:"Size"}),`
`,n.jsxs(a.p,{children:["A ",n.jsx(a.code,{children:"Button"})," can be small, medium or large. The default size is medium."]}),`
`,n.jsx(m,{children:n.jsx(v,{name:"Size",children:l=>n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(i,{variant:"contained",size:"small",children:"Button"}),n.jsx(i,{variant:"contained",children:"Button"}),n.jsx(i,{variant:"contained",size:"large",children:"Button"})]})})}),`
`,n.jsx(a.h3,{id:"icon",children:"Icon"}),`
`,n.jsxs(a.p,{children:["A ",n.jsx(a.code,{children:"Button"})," can also have icons, that can be placed on the left or right of the button."]}),`
`,n.jsx(m,{children:n.jsx(v,{name:"Icon",children:l=>n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(i,{variant:"contained",startIcon:n.jsx(d,{}),children:"Send"}),n.jsx(i,{variant:"contained",endIcon:n.jsx(d,{}),children:"Send"})]})})}),`
`,n.jsx(a.h3,{id:"colors",children:"Colors"}),`
`,n.jsx(a.p,{children:"A 'Button' can display a range of colors in addition to the default."}),`
`,n.jsx(m,{children:n.jsx(v,{name:"Colors",children:l=>n.jsxs(r,{spacing:3,children:[n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(i,{variant:"outlined",children:"Primary"}),n.jsx(i,{variant:"outlined",color:"error",children:"Error"}),n.jsx(i,{variant:"outlined",color:"success",children:"Success"})]}),n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(i,{variant:"text",children:"Primary"}),n.jsx(i,{variant:"text",color:"error",children:"Error"}),n.jsx(i,{variant:"text",color:"success",children:"Success"}),n.jsx(i,{variant:"text",color:"secondary",children:"Secondary"})]})]})})}),`
`,n.jsx(a.h3,{id:"loading",children:"Loading"}),`
`,n.jsxs(a.p,{children:["A 'Button' can also present a loading state. By default, it will present ",n.jsx(a.code,{children:"CircularProgress"})," in the center as the indicator."]}),`
`,n.jsx(m,{children:n.jsx(v,{name:"Loading",children:l=>{const[c,h]=w.useState(!0);return n.jsxs(r,{spacing:3,children:[n.jsx($,{sx:{display:"block"},control:n.jsx(z,{checked:c,onChange:()=>h(!c),name:"loading",color:"primary"}),label:"Loading"}),n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(i,{variant:"contained",loading:c,children:"Submit"}),n.jsx(i,{variant:"outlined",loading:c,children:"Submit"}),n.jsx(i,{variant:"text",loading:c,children:"Submit"})]}),n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(i,{variant:"contained",loading:c,loadingPosition:"center",loadingIndicator:"Loading...",children:"Submit"}),n.jsx(i,{variant:"contained",loading:c,loadingPosition:"start",startIcon:n.jsx(d,{}),children:"Submit"}),n.jsx(i,{variant:"contained",loading:c,loadingPosition:"end",endIcon:n.jsx(d,{}),children:"Submit"})]})]})}})}),`
`,n.jsx(a.p,{children:"made by Novatics ❤"})]})}}const I=t=>n.jsxs(r,{spacing:3,children:[n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(i,{variant:"contained",children:"Button"}),n.jsx(i,{variant:"outlined",children:"Button"}),n.jsx(i,{variant:"text",children:"Button"})]}),n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(i,{disabled:!0,variant:"contained",children:"Disabled"}),n.jsx(i,{disabled:!0,variant:"outlined",children:"Disabled"}),n.jsx(i,{disabled:!0,variant:"text",children:"Disabled"})]})]});I.storyName="Basic Usage";I.parameters={storySource:{source:`args => {
  return <Stack spacing={3}>
          <Stack spacing={2} direction="row">
            <Button variant="contained">Button</Button>
            <Button variant="outlined">Button</Button>
            <Button variant="text">Button</Button>
          </Stack>
          <Stack spacing={2} direction="row">
            <Button disabled variant="contained">
              Disabled
            </Button>
            <Button disabled variant="outlined">
              Disabled
            </Button>
            <Button disabled variant="text">
              Disabled
            </Button>
          </Stack>
        </Stack>;
}`}};const P=t=>n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(i,{variant:"contained",size:"small",children:"Button"}),n.jsx(i,{variant:"contained",children:"Button"}),n.jsx(i,{variant:"contained",size:"large",children:"Button"})]});P.storyName="Size";P.parameters={storySource:{source:`args => {
  return <Stack spacing={2} direction="row">
          <Button variant="contained" size="small">
            Button
          </Button>
          <Button variant="contained">Button</Button>
          <Button variant="contained" size="large">
            Button
          </Button>
        </Stack>;
}`}};const M=t=>n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(i,{variant:"contained",startIcon:n.jsx(d,{}),children:"Send"}),n.jsx(i,{variant:"contained",endIcon:n.jsx(d,{}),children:"Send"})]});M.storyName="Icon";M.parameters={storySource:{source:`args => {
  return <Stack spacing={2} direction="row">
          <Button variant="contained" startIcon={<SendIcon />}>
            Send
          </Button>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Stack>;
}`}};const D=t=>n.jsxs(r,{spacing:3,children:[n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(i,{variant:"outlined",children:"Primary"}),n.jsx(i,{variant:"outlined",color:"error",children:"Error"}),n.jsx(i,{variant:"outlined",color:"success",children:"Success"})]}),n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(i,{variant:"text",children:"Primary"}),n.jsx(i,{variant:"text",color:"error",children:"Error"}),n.jsx(i,{variant:"text",color:"success",children:"Success"}),n.jsx(i,{variant:"text",color:"secondary",children:"Secondary"})]})]});D.storyName="Colors";D.parameters={storySource:{source:`args => {
  return <Stack spacing={3}>
          <Stack spacing={2} direction="row">
            <Button variant="outlined">Primary</Button>
            <Button variant="outlined" color="error">
              Error
            </Button>
            <Button variant="outlined" color="success">
              Success
            </Button>
          </Stack>
          <Stack spacing={2} direction="row">
            <Button variant="text">Primary</Button>
            <Button variant="text" color="error">
              Error
            </Button>
            <Button variant="text" color="success">
              Success
            </Button>
            <Button variant="text" color="secondary">
              Secondary
            </Button>
          </Stack>
        </Stack>;
}`}};const L=t=>{const[o,e]=w.useState(!0);return n.jsxs(r,{spacing:3,children:[n.jsx($,{sx:{display:"block"},control:n.jsx(z,{checked:o,onChange:()=>e(!o),name:"loading",color:"primary"}),label:"Loading"}),n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(i,{variant:"contained",loading:o,children:"Submit"}),n.jsx(i,{variant:"outlined",loading:o,children:"Submit"}),n.jsx(i,{variant:"text",loading:o,children:"Submit"})]}),n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(i,{variant:"contained",loading:o,loadingPosition:"center",loadingIndicator:"Loading...",children:"Submit"}),n.jsx(i,{variant:"contained",loading:o,loadingPosition:"start",startIcon:n.jsx(d,{}),children:"Submit"}),n.jsx(i,{variant:"contained",loading:o,loadingPosition:"end",endIcon:n.jsx(d,{}),children:"Submit"})]})]})};L.storyName="Loading";L.parameters={storySource:{source:`args => {
  const [loading, setLoading] = useState(true);
  return <Stack spacing={3}>
          <FormControlLabel sx={{
      display: "block"
    }} control={<Switch checked={loading} onChange={() => setLoading(!loading)} name="loading" color="primary" />} label="Loading" />
          <Stack spacing={2} direction="row">
            <Button variant="contained" loading={loading}>
              Submit
            </Button>
            <Button variant="outlined" loading={loading}>
              Submit
            </Button>
            <Button variant="text" loading={loading}>
              Submit
            </Button>
          </Stack>
          <Stack spacing={2} direction="row">
            <Button variant="contained" loading={loading} loadingPosition="center" loadingIndicator="Loading...">
              Submit
            </Button>
            <Button variant="contained" loading={loading} loadingPosition="start" startIcon={<SendIcon />}>
              Submit
            </Button>
            <Button variant="contained" loading={loading} loadingPosition="end" endIcon={<SendIcon />}>
              Submit
            </Button>
          </Stack>
        </Stack>;
}`}};const j={title:"Button",component:i,tags:["stories-mdx"],includeStories:["basicUsage","size","icon","colors","loading"]};j.parameters=j.parameters||{};j.parameters.docs={...j.parameters.docs||{},page:hn};const Gn=["basicUsage","size","icon","colors","loading"];export{Gn as __namedExportsOrder,I as basicUsage,D as colors,j as default,M as icon,L as loading,P as size};
//# sourceMappingURL=button.stories-28d190c9.js.map
