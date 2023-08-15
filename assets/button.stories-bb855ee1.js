import{r as w}from"./index-f1f2c4b1.js";import"./blocks-2646952b.js";import{r as _,i as N}from"./createSvgIcon-9f48787f.js";import{j as n}from"./jsx-runtime-d079401a.js";import{B as o}from"./button-90c30461.js";import{S as r}from"./Stack-525ce7da.js";import{F as $}from"./FormControlLabel-681f0705.js";import{h as u,c as p,e as f,t as E,v as T,f as U,g as O}from"./useThemeProps-09ff92e7.js";import{g as A,a as F,s as S,b as X,d as q}from"./styled-8d419bbb.js";import{S as V}from"./SwitchBase-bbec3ccf.js";import{u as C}from"./index-59d6410c.js";import{M as W,C as m,b as v}from"./index-7b3c0ff1.js";import"./createSvgIcon-631013b5.js";import"./useControlled-953564ff.js";import"./ownerWindow-fbe9f185.js";import"./useForkRef-f4ecef3a.js";import"./useId-e3465fec.js";import"./isMuiElement-c6f52415.js";import"./useEnhancedEffect-b6928b87.js";import"./TransitionGroupContext-f23bfbbc.js";import"./useIsFocusVisible-86ab9ba9.js";import"./Button-ffe75d99.js";import"./ButtonBase-37ab13bd.js";import"./emotion-react.browser.esm-ea340576.js";import"./styled-47292171.js";import"./extendSxProp-2d0de5c8.js";import"./formControlState-a1fb9590.js";import"./useFormControl-1157a7e5.js";import"./Typography-1e6be770.js";import"./iframe-f01a2f7f.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-1c885437.js";import"./index-356e4a49.js";function G(t){return F("MuiSwitch",t)}const H=A("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),s=H,J=["className","color","edge","size","sx"],K=t=>{const{classes:i,edge:e,size:a,color:l,checked:c,disabled:h}=t,b={root:["root",e&&`edge${u(e)}`,`size${u(a)}`],switchBase:["switchBase",`color${u(l)}`,c&&"checked",h&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},B=q(b,G,i);return p({},i,B)},Q=S("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:e}=t;return[i.root,e.edge&&i[`edge${u(e.edge)}`],i[`size${u(e.size)}`]]}})(({ownerState:t})=>p({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},t.edge==="start"&&{marginLeft:-8},t.edge==="end"&&{marginRight:-8},t.size==="small"&&{width:40,height:24,padding:7,[`& .${s.thumb}`]:{width:16,height:16},[`& .${s.switchBase}`]:{padding:4,[`&.${s.checked}`]:{transform:"translateX(16px)"}}})),Y=S(V,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,i)=>{const{ownerState:e}=t;return[i.switchBase,{[`& .${s.input}`]:i.input},e.color!=="default"&&i[`color${u(e.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${s.checked}`]:{transform:"translateX(20px)"},[`&.${s.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${s.checked} + .${s.track}`]:{opacity:.5},[`&.${s.disabled} + .${s.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${s.input}`]:{left:"-100%",width:"300%"}}),({theme:t,ownerState:i})=>p({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:f(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},i.color!=="default"&&{[`&.${s.checked}`]:{color:(t.vars||t).palette[i.color].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[i.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:f(t.palette[i.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${s.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${i.color}DisabledColor`]:`${t.palette.mode==="light"?E(t.palette[i.color].main,.62):T(t.palette[i.color].main,.55)}`}},[`&.${s.checked} + .${s.track}`]:{backgroundColor:(t.vars||t).palette[i.color].main}})),Z=S("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,i)=>i.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),nn=S("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,i)=>i.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),tn=w.forwardRef(function(i,e){const a=U({props:i,name:"MuiSwitch"}),{className:l,color:c="primary",edge:h=!1,size:b="medium",sx:B}=a,R=O(a,J),g=p({},a,{color:c,edge:h,size:b}),x=K(g),y=n.jsx(nn,{className:x.thumb,ownerState:g});return n.jsxs(Q,{className:X(x.root,l),sx:B,ownerState:g,children:[n.jsx(Y,p({type:"checkbox",icon:y,checkedIcon:y,ref:e,ownerState:g},R,{classes:p({},x,{root:x.switchBase})})),n.jsx(Z,{className:x.track,ownerState:g})]})}),z=tn;var k={},on=N;Object.defineProperty(k,"__esModule",{value:!0});var d=k.default=void 0,an=on(_()),rn=n,en=(0,an.default)((0,rn.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");d=k.default=en;const sn="@novatics-ui/button",cn="0.2.1",dn="./index.js",ln="./index.d.ts",un={".":{import:"./index.mjs",require:"./index.js"}},pn={name:sn,version:cn,main:dn,types:ln,exports:un};function hn(t={}){const{wrapper:i}=Object.assign({},C(),t.components);return i?n.jsx(i,{...t,children:n.jsx(e,{})}):e();function e(){const a=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre"},C(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(W,{title:"Components/Button",component:o}),`
`,n.jsxs(a.h1,{id:"button-",children:["Button ",n.jsx("img",{src:`https://img.shields.io/badge/Version-v${pn.version}-brightgreenn`})]}),`
`,n.jsx(a.h3,{id:"installation",children:"Installation"}),`
`,n.jsxs(a.p,{children:["First install the latest version of the package from ",n.jsx(a.code,{children:"@novatics-ui/button"}),"."]}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-shell",children:`  yarn add -D @novatics-ui/button
`})}),`
`,n.jsx(a.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsxs(a.p,{children:["The ",n.jsx(a.code,{children:"Button"})," component have three variants: it supports outlined, contained and only text styling. The default variant is ",n.jsx(a.code,{children:"text"}),"."]}),`
`,n.jsx(m,{children:n.jsx(v,{name:"Basic Usage",children:l=>n.jsxs(r,{spacing:3,children:[n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(o,{variant:"contained",children:"Button"}),n.jsx(o,{variant:"outlined",children:"Button"}),n.jsx(o,{variant:"text",children:"Button"})]}),n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(o,{disabled:!0,variant:"contained",children:"Disabled"}),n.jsx(o,{disabled:!0,variant:"outlined",children:"Disabled"}),n.jsx(o,{disabled:!0,variant:"text",children:"Disabled"})]})]})})}),`
`,n.jsx(a.h3,{id:"size",children:"Size"}),`
`,n.jsxs(a.p,{children:["A ",n.jsx(a.code,{children:"Button"})," can be small, medium or large. The default size is medium."]}),`
`,n.jsx(m,{children:n.jsx(v,{name:"Size",children:l=>n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(o,{variant:"contained",size:"small",children:"Button"}),n.jsx(o,{variant:"contained",children:"Button"}),n.jsx(o,{variant:"contained",size:"large",children:"Button"})]})})}),`
`,n.jsx(a.h3,{id:"icon",children:"Icon"}),`
`,n.jsxs(a.p,{children:["A ",n.jsx(a.code,{children:"Button"})," can also have icons, that can be placed on the left or right of the button."]}),`
`,n.jsx(m,{children:n.jsx(v,{name:"Icon",children:l=>n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(o,{variant:"contained",startIcon:n.jsx(d,{}),children:"Send"}),n.jsx(o,{variant:"contained",endIcon:n.jsx(d,{}),children:"Send"})]})})}),`
`,n.jsx(a.h3,{id:"colors",children:"Colors"}),`
`,n.jsx(a.p,{children:"A 'Button' can display a range of colors in addition to the default."}),`
`,n.jsx(m,{children:n.jsx(v,{name:"Colors",children:l=>n.jsxs(r,{spacing:3,children:[n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(o,{variant:"outlined",children:"Primary"}),n.jsx(o,{variant:"outlined",color:"error",children:"Error"}),n.jsx(o,{variant:"outlined",color:"success",children:"Success"})]}),n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(o,{variant:"text",children:"Primary"}),n.jsx(o,{variant:"text",color:"error",children:"Error"}),n.jsx(o,{variant:"text",color:"success",children:"Success"}),n.jsx(o,{variant:"text",color:"secondary",children:"Secondary"})]})]})})}),`
`,n.jsx(a.h3,{id:"loading",children:"Loading"}),`
`,n.jsxs(a.p,{children:["A 'Button' can also present a loading state. By default, it will present ",n.jsx(a.code,{children:"CircularProgress"})," in the center as the indicator."]}),`
`,n.jsx(m,{children:n.jsx(v,{name:"Loading",children:l=>{const[c,h]=w.useState(!0);return n.jsxs(r,{spacing:3,children:[n.jsx($,{sx:{display:"block"},control:n.jsx(z,{checked:c,onChange:()=>h(!c),name:"loading",color:"primary"}),label:"Loading"}),n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(o,{variant:"contained",loading:c,children:"Submit"}),n.jsx(o,{variant:"outlined",loading:c,children:"Submit"}),n.jsx(o,{variant:"text",loading:c,children:"Submit"})]}),n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(o,{variant:"contained",loading:c,loadingPosition:"center",loadingIndicator:"Loading...",children:"Submit"}),n.jsx(o,{variant:"contained",loading:c,loadingPosition:"start",startIcon:n.jsx(d,{}),children:"Submit"}),n.jsx(o,{variant:"contained",loading:c,loadingPosition:"end",endIcon:n.jsx(d,{}),children:"Submit"})]})]})}})}),`
`,n.jsx(a.p,{children:"made by Novatics ❤"})]})}}const I=t=>n.jsxs(r,{spacing:3,children:[n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(o,{variant:"contained",children:"Button"}),n.jsx(o,{variant:"outlined",children:"Button"}),n.jsx(o,{variant:"text",children:"Button"})]}),n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(o,{disabled:!0,variant:"contained",children:"Disabled"}),n.jsx(o,{disabled:!0,variant:"outlined",children:"Disabled"}),n.jsx(o,{disabled:!0,variant:"text",children:"Disabled"})]})]});I.storyName="Basic Usage";I.parameters={storySource:{source:`args => {
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
}`}};const P=t=>n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(o,{variant:"contained",size:"small",children:"Button"}),n.jsx(o,{variant:"contained",children:"Button"}),n.jsx(o,{variant:"contained",size:"large",children:"Button"})]});P.storyName="Size";P.parameters={storySource:{source:`args => {
  return <Stack spacing={2} direction="row">
          <Button variant="contained" size="small">
            Button
          </Button>
          <Button variant="contained">Button</Button>
          <Button variant="contained" size="large">
            Button
          </Button>
        </Stack>;
}`}};const D=t=>n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(o,{variant:"contained",startIcon:n.jsx(d,{}),children:"Send"}),n.jsx(o,{variant:"contained",endIcon:n.jsx(d,{}),children:"Send"})]});D.storyName="Icon";D.parameters={storySource:{source:`args => {
  return <Stack spacing={2} direction="row">
          <Button variant="contained" startIcon={<SendIcon />}>
            Send
          </Button>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Stack>;
}`}};const L=t=>n.jsxs(r,{spacing:3,children:[n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(o,{variant:"outlined",children:"Primary"}),n.jsx(o,{variant:"outlined",color:"error",children:"Error"}),n.jsx(o,{variant:"outlined",color:"success",children:"Success"})]}),n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(o,{variant:"text",children:"Primary"}),n.jsx(o,{variant:"text",color:"error",children:"Error"}),n.jsx(o,{variant:"text",color:"success",children:"Success"}),n.jsx(o,{variant:"text",color:"secondary",children:"Secondary"})]})]});L.storyName="Colors";L.parameters={storySource:{source:`args => {
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
}`}};const M=t=>{const[i,e]=w.useState(!0);return n.jsxs(r,{spacing:3,children:[n.jsx($,{sx:{display:"block"},control:n.jsx(z,{checked:i,onChange:()=>e(!i),name:"loading",color:"primary"}),label:"Loading"}),n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(o,{variant:"contained",loading:i,children:"Submit"}),n.jsx(o,{variant:"outlined",loading:i,children:"Submit"}),n.jsx(o,{variant:"text",loading:i,children:"Submit"})]}),n.jsxs(r,{spacing:2,direction:"row",children:[n.jsx(o,{variant:"contained",loading:i,loadingPosition:"center",loadingIndicator:"Loading...",children:"Submit"}),n.jsx(o,{variant:"contained",loading:i,loadingPosition:"start",startIcon:n.jsx(d,{}),children:"Submit"}),n.jsx(o,{variant:"contained",loading:i,loadingPosition:"end",endIcon:n.jsx(d,{}),children:"Submit"})]})]})};M.storyName="Loading";M.parameters={storySource:{source:`args => {
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
}`}};const j={title:"Components/Button",component:o,tags:["stories-mdx"],includeStories:["basicUsage","size","icon","colors","loading"]};j.parameters=j.parameters||{};j.parameters.docs={...j.parameters.docs||{},page:hn};const Hn=["basicUsage","size","icon","colors","loading"];export{Hn as __namedExportsOrder,I as basicUsage,L as colors,j as default,D as icon,M as loading,P as size};
//# sourceMappingURL=button.stories-bb855ee1.js.map
