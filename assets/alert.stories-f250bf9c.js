import"./blocks-2646952b.js";import{j as e}from"./jsx-runtime-d079401a.js";import"./fonts-0fc9e249.js";import{s as T}from"./styled-ba1ccae2.js";import{d as se}from"./Close-bcfdcca6.js";import{r as ie,i as oe}from"./createSvgIcon-9f48787f.js";import{I as P}from"./IconButton-702042d5.js";import{B as k}from"./Box-dca936ab.js";import{h as V,v as L,t as N,c as u,f as ae,g as le}from"./useThemeProps-09ff92e7.js";import{r as ce}from"./index-f1f2c4b1.js";import{g as de,a as pe,s as j,b as ue,d as he}from"./styled-8d419bbb.js";import{c as m}from"./createSvgIcon-631013b5.js";import{P as xe}from"./Paper-5a10c0f2.js";import{T as i}from"./Typography-1e6be770.js";import{S as o}from"./Stack-525ce7da.js";import{G as a}from"./Grid-f93ff8ae.js";import{u as E}from"./index-59d6410c.js";import{M as me,C as b,b as S}from"./index-7b3c0ff1.js";import"./typography-18a122d3.js";import"./colors-4f758d22.js";import"./useControlled-953564ff.js";import"./ownerWindow-fbe9f185.js";import"./useForkRef-f4ecef3a.js";import"./useId-e3465fec.js";import"./isMuiElement-c6f52415.js";import"./useEnhancedEffect-b6928b87.js";import"./TransitionGroupContext-f23bfbbc.js";import"./useIsFocusVisible-86ab9ba9.js";import"./ButtonBase-37ab13bd.js";import"./emotion-react.browser.esm-ea340576.js";import"./extendSxProp-2d0de5c8.js";import"./styled-47292171.js";import"./useTheme-f6b5a289.js";import"./iframe-f01a2f7f.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-1c885437.js";import"./index-356e4a49.js";function ge(n){return pe("MuiAlert",n)}const ye=de("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),R=ye,ve=m(e.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),je=m(e.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),fe=m(e.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),Ce=m(e.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),Ae=m(e.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),be=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],Se=n=>{const{variant:s,color:c,severity:t,classes:r}=n,d={root:["root",`${s}${V(c||t)}`,`${s}`],icon:["icon"],message:["message"],action:["action"]};return he(d,ge,r)},Te=j(xe,{name:"MuiAlert",slot:"Root",overridesResolver:(n,s)=>{const{ownerState:c}=n;return[s.root,s[c.variant],s[`${c.variant}${V(c.color||c.severity)}`]]}})(({theme:n,ownerState:s})=>{const c=n.palette.mode==="light"?L:N,t=n.palette.mode==="light"?N:L,r=s.color||s.severity;return u({},n.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},r&&s.variant==="standard"&&{color:n.vars?n.vars.palette.Alert[`${r}Color`]:c(n.palette[r].light,.6),backgroundColor:n.vars?n.vars.palette.Alert[`${r}StandardBg`]:t(n.palette[r].light,.9),[`& .${R.icon}`]:n.vars?{color:n.vars.palette.Alert[`${r}IconColor`]}:{color:n.palette[r].main}},r&&s.variant==="outlined"&&{color:n.vars?n.vars.palette.Alert[`${r}Color`]:c(n.palette[r].light,.6),border:`1px solid ${(n.vars||n).palette[r].light}`,[`& .${R.icon}`]:n.vars?{color:n.vars.palette.Alert[`${r}IconColor`]}:{color:n.palette[r].main}},r&&s.variant==="filled"&&u({fontWeight:n.typography.fontWeightMedium},n.vars?{color:n.vars.palette.Alert[`${r}FilledColor`],backgroundColor:n.vars.palette.Alert[`${r}FilledBg`]}:{backgroundColor:n.palette.mode==="dark"?n.palette[r].dark:n.palette[r].main,color:n.palette.getContrastText(n.palette[r].main)}))}),ke=j("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(n,s)=>s.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),Ie=j("div",{name:"MuiAlert",slot:"Message",overridesResolver:(n,s)=>s.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),q=j("div",{name:"MuiAlert",slot:"Action",overridesResolver:(n,s)=>s.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),B={success:e.jsx(ve,{fontSize:"inherit"}),warning:e.jsx(je,{fontSize:"inherit"}),error:e.jsx(fe,{fontSize:"inherit"}),info:e.jsx(Ce,{fontSize:"inherit"})},Me=ce.forwardRef(function(s,c){var t,r,d,h,g,y;const f=ae({props:s,name:"MuiAlert"}),{action:C,children:F,className:X,closeText:M="Close",color:Z,components:_={},componentsProps:G={},icon:$,iconMapping:J=B,onClose:w,role:K="alert",severity:A="success",slotProps:W={},slots:z={},variant:Q="standard"}=f,Y=le(f,be),p=u({},f,{color:Z,severity:A,variant:Q}),x=Se(p),ee=(t=(r=z.closeButton)!=null?r:_.CloseButton)!=null?t:P,ne=(d=(h=z.closeIcon)!=null?h:_.CloseIcon)!=null?d:Ae,te=(g=W.closeButton)!=null?g:G.closeButton,re=(y=W.closeIcon)!=null?y:G.closeIcon;return e.jsxs(Te,u({role:K,elevation:0,ownerState:p,className:ue(x.root,X),ref:c},Y,{children:[$!==!1?e.jsx(ke,{ownerState:p,className:x.icon,children:$||J[A]||B[A]}):null,e.jsx(Ie,{ownerState:p,className:x.message,children:F}),C!=null?e.jsx(q,{ownerState:p,className:x.action,children:C}):null,C==null&&w?e.jsx(q,{ownerState:p,className:x.action,children:e.jsx(ee,u({size:"small","aria-label":M,title:M,color:"inherit",onClick:w},te,{children:e.jsx(ne,u({fontSize:"small"},re))}))}):null]}))}),_e=Me;var I={},Ge=oe;Object.defineProperty(I,"__esModule",{value:!0});var O=I.default=void 0,$e=Ge(ie()),we=e,We=(0,$e.default)((0,we.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"CheckCircleOutline");O=I.default=We;const ze=T(P)`
  padding: 4px;
  border-radius: 5px;
  color: black;
`,Le=T(k)`
  display: flex;
  flex-direction: column;
  padding-top: 2px;
`,Ne=T(k)`
  display: flex;
  align-items: center;
  padding-left: 12px;
`,l=n=>{const{children:s,title:c,severity:t="info",variant:r="outlined",onClose:d,action:h,...g}=n,y={success:e.jsx(O,{fontSize:"small"})};return e.jsx(_e,{variant:r,severity:t,icon:y[t],action:e.jsxs(Ne,{children:[h?e.jsx(k,{mr:"4px",children:h}):null,d?e.jsx(ze,{onClick:d,children:e.jsx(se,{})}):null]}),sx:{alignItems:c?"start":"center"},...g,children:c?e.jsxs(Le,{children:[e.jsx(i,{variant:"body",fontWeight:"500",color:"grey.85",children:c}),e.jsx(i,{variant:"bodySmall",color:"grey.70",children:s})]}):e.jsx(i,{variant:"body",fontWeight:"500",color:"grey.85",children:s})})};try{l.displayName="Alert",l.__docgenInfo={description:"",displayName:"Alert",props:{severity:{defaultValue:null,description:"The severity of the alert. This defines the color and icon used.",name:"severity",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}},onClose:{defaultValue:null,description:"Callback fired when the component requests to be closed.\nWhen provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.",name:"onClose",required:!1,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},action:{defaultValue:null,description:"The action to display. It renders after the message, at the end of the alert.",name:"action",required:!1,type:{name:"ReactNode"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!1,type:{name:'"div"'}}}}}catch{}try{alert.displayName="alert",alert.__docgenInfo={description:"",displayName:"alert",props:{severity:{defaultValue:null,description:"The severity of the alert. This defines the color and icon used.",name:"severity",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}},onClose:{defaultValue:null,description:"Callback fired when the component requests to be closed.\nWhen provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.",name:"onClose",required:!1,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},action:{defaultValue:null,description:"The action to display. It renders after the message, at the end of the alert.",name:"action",required:!1,type:{name:"ReactNode"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!1,type:{name:'"div"'}}}}}catch{}const Ee="@novatics-ui/alert",Re="0.1.5",qe="./index.js",Be="./index.d.ts",Pe={".":{import:"./index.mjs",require:"./index.js"}},Ve={name:Ee,version:Re,main:qe,types:Be,exports:Pe};function Oe(n={}){const{wrapper:s}=Object.assign({},E(),n.components);return s?e.jsx(s,{...n,children:e.jsx(c,{})}):c();function c(){const t=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre"},E(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(me,{title:"Components/Alert",component:l}),`
`,e.jsxs(t.h1,{id:"alert-",children:["Alert ",e.jsx("img",{src:`https://img.shields.io/badge/Version-v${Ve.version}-brightgreenn`})]}),`
`,e.jsx(t.h3,{id:"installation",children:"Installation"}),`
`,e.jsxs(t.p,{children:["First install the latest version of the package from ",e.jsx(t.code,{children:"@novatics-ui/alert"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-shell",children:`  yarn add -D @novatics-ui/alert
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-shell",children:`  npm install --dev @novatics-ui/alert
`})}),`
`,e.jsx(t.p,{children:"and use it"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import ... from '@novatics-ui/alert';

  ...


`})}),`
`,e.jsx(t.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Alert"})," component supports three type variants: persistent, dispensable and action alerts."]}),`
`,e.jsx(b,{children:e.jsx(S,{name:"Basic Usage",children:r=>e.jsx(o,{spacing:3,children:e.jsxs(a,{container:!0,spacing:2,children:[e.jsx(a,{item:!0,xxs:4,children:e.jsxs(o,{spacing:2,children:[e.jsx(i,{variant:"body",children:"Persistent"}),e.jsx(l,{severity:"info",children:"This is a persistent alert."})]})}),e.jsx(a,{item:!0,xxs:4,children:e.jsxs(o,{spacing:2,children:[e.jsx(i,{variant:"body",children:"Dispensable"}),e.jsx(l,{onClose:()=>{},children:"This is a dispensable alert."})]})}),e.jsx(a,{item:!0,xxs:4,children:e.jsxs(o,{spacing:2,children:[e.jsx(i,{variant:"body",children:"Action"}),e.jsx(l,{action:e.jsx(i,{variant:"body2",children:"Action"}),children:"This is an alert with some action!"})]})})]})})})}),`
`,e.jsx(t.h3,{id:"severity",children:"Severity"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Alert"})," component have four variants: success, error, info and warning."]}),`
`,e.jsx(b,{children:e.jsx(S,{name:"Severity",children:r=>e.jsx(o,{spacing:4,children:e.jsxs(a,{container:!0,spacing:4,children:[e.jsx(a,{item:!0,xs:3,children:e.jsxs(o,{spacing:1,children:[e.jsx(i,{variant:"body",children:"Success"}),e.jsx(l,{severity:"success",onClose:()=>{},children:"Success alert!"})]})}),e.jsx(a,{item:!0,xs:3,children:e.jsxs(o,{spacing:1,children:[e.jsx(i,{variant:"body",children:"Warning"}),e.jsx(l,{severity:"warning",onClose:()=>{},children:"Warning alert!"})]})}),e.jsx(a,{item:!0,xs:3,children:e.jsxs(o,{spacing:1,children:[e.jsx(i,{variant:"body",children:"Error"}),e.jsx(l,{severity:"error",onClose:()=>{},children:"Error alert!"})]})}),e.jsx(a,{item:!0,xs:3,children:e.jsxs(o,{spacing:1,children:[e.jsx(i,{variant:"body",children:"Infomartive"}),e.jsx(l,{severity:"info",onClose:()=>{},children:"Infomartive alert!"})]})})]})})})}),`
`,e.jsx(t.h3,{id:"title",children:"Title"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Alert"})," could have title and description."]}),`
`,e.jsx(b,{children:e.jsx(S,{name:"Title",children:r=>e.jsx(o,{spacing:4,children:e.jsxs(a,{container:!0,spacing:4,children:[e.jsx(a,{item:!0,xs:3,children:e.jsxs(o,{spacing:1,children:[e.jsx(i,{variant:"body",children:"Without title"}),e.jsx(l,{action:e.jsx(i,{variant:"body2",children:"Action"}),onClose:()=>{},children:"Alert without title"})]})}),e.jsx(a,{item:!0,xs:3,children:e.jsxs(o,{spacing:1,children:[e.jsx(i,{variant:"body",children:"With title"}),e.jsx(l,{title:"Title",onClose:()=>{},children:"Alert content"})]})})]})})})}),`
`,e.jsx(t.p,{children:"made by Novatics ❤"})]})}}const D=n=>e.jsx(o,{spacing:3,children:e.jsxs(a,{container:!0,spacing:2,children:[e.jsx(a,{item:!0,xxs:4,children:e.jsxs(o,{spacing:2,children:[e.jsx(i,{variant:"body",children:"Persistent"}),e.jsx(l,{severity:"info",children:"This is a persistent alert."})]})}),e.jsx(a,{item:!0,xxs:4,children:e.jsxs(o,{spacing:2,children:[e.jsx(i,{variant:"body",children:"Dispensable"}),e.jsx(l,{onClose:()=>{},children:"This is a dispensable alert."})]})}),e.jsx(a,{item:!0,xxs:4,children:e.jsxs(o,{spacing:2,children:[e.jsx(i,{variant:"body",children:"Action"}),e.jsx(l,{action:e.jsx(i,{variant:"body2",children:"Action"}),children:"This is an alert with some action!"})]})})]})});D.storyName="Basic Usage";D.parameters={storySource:{source:`args => {
  return <Stack spacing={3}>
          <Grid container spacing={2}>
            <Grid item xxs={4}>
              <Stack spacing={2}>
                <Typography variant="body">Persistent</Typography>
                <Alert severity="info">This is a persistent alert.</Alert>
              </Stack>
            </Grid>
            <Grid item xxs={4}>
              <Stack spacing={2}>
                <Typography variant="body">Dispensable</Typography>
                <Alert onClose={() => undefined}>
                  This is a dispensable alert.
                </Alert>
              </Stack>
            </Grid>
            <Grid item xxs={4}>
              <Stack spacing={2}>
                <Typography variant="body">Action</Typography>
                <Alert action={<Typography variant="body2">Action</Typography>}>
                  This is an alert with some action!
                </Alert>
              </Stack>
            </Grid>
          </Grid>
        </Stack>;
}`}};const U=n=>e.jsx(o,{spacing:4,children:e.jsxs(a,{container:!0,spacing:4,children:[e.jsx(a,{item:!0,xs:3,children:e.jsxs(o,{spacing:1,children:[e.jsx(i,{variant:"body",children:"Success"}),e.jsx(l,{severity:"success",onClose:()=>{},children:"Success alert!"})]})}),e.jsx(a,{item:!0,xs:3,children:e.jsxs(o,{spacing:1,children:[e.jsx(i,{variant:"body",children:"Warning"}),e.jsx(l,{severity:"warning",onClose:()=>{},children:"Warning alert!"})]})}),e.jsx(a,{item:!0,xs:3,children:e.jsxs(o,{spacing:1,children:[e.jsx(i,{variant:"body",children:"Error"}),e.jsx(l,{severity:"error",onClose:()=>{},children:"Error alert!"})]})}),e.jsx(a,{item:!0,xs:3,children:e.jsxs(o,{spacing:1,children:[e.jsx(i,{variant:"body",children:"Infomartive"}),e.jsx(l,{severity:"info",onClose:()=>{},children:"Infomartive alert!"})]})})]})});U.storyName="Severity";U.parameters={storySource:{source:`args => {
  return <Stack spacing={4}>
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <Stack spacing={1}>
                <Typography variant="body">Success</Typography>
                <Alert severity="success" onClose={() => undefined}>
                  Success alert!
                </Alert>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={1}>
                <Typography variant="body">Warning</Typography>
                <Alert severity="warning" onClose={() => undefined}>
                  Warning alert!
                </Alert>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={1}>
                <Typography variant="body">Error</Typography>
                <Alert severity="error" onClose={() => undefined}>
                  Error alert!
                </Alert>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={1}>
                <Typography variant="body">Infomartive</Typography>
                <Alert severity="info" onClose={() => undefined}>
                  Infomartive alert!
                </Alert>
              </Stack>
            </Grid>
          </Grid>
        </Stack>;
}`}};const H=n=>e.jsx(o,{spacing:4,children:e.jsxs(a,{container:!0,spacing:4,children:[e.jsx(a,{item:!0,xs:3,children:e.jsxs(o,{spacing:1,children:[e.jsx(i,{variant:"body",children:"Without title"}),e.jsx(l,{action:e.jsx(i,{variant:"body2",children:"Action"}),onClose:()=>{},children:"Alert without title"})]})}),e.jsx(a,{item:!0,xs:3,children:e.jsxs(o,{spacing:1,children:[e.jsx(i,{variant:"body",children:"With title"}),e.jsx(l,{title:"Title",onClose:()=>{},children:"Alert content"})]})})]})});H.storyName="Title";H.parameters={storySource:{source:`args => {
  return <Stack spacing={4}>
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <Stack spacing={1}>
                <Typography variant="body">Without title</Typography>
                <Alert action={<Typography variant="body2">Action</Typography>} onClose={() => undefined}>
                  Alert without title
                </Alert>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={1}>
                <Typography variant="body">With title</Typography>
                <Alert title="Title" onClose={() => undefined}>
                  Alert content
                </Alert>
              </Stack>
            </Grid>
          </Grid>
        </Stack>;
}`}};const v={title:"Components/Alert",component:l,tags:["stories-mdx"],includeStories:["basicUsage","severity","title"]};v.parameters=v.parameters||{};v.parameters.docs={...v.parameters.docs||{},page:Oe};const _n=["basicUsage","severity","title"];export{_n as __namedExportsOrder,D as basicUsage,v as default,U as severity,H as title};
//# sourceMappingURL=alert.stories-f250bf9c.js.map
