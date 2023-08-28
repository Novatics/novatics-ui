import"./blocks-2646952b.js";import{j as e}from"./jsx-runtime-d079401a.js";import"./fonts-0fc9e249.js";import{s as T}from"./styled-b40b467a.js";import{d as se}from"./Close-175068ab.js";import{r as ie,i as oe}from"./createSvgIcon-1429b7e8.js";import{I as O}from"./IconButton-1ab95360.js";import{B as I}from"./Box-78d8e914.js";import{h as D,v as E,t as B,c as x,f as ae,g as le}from"./useThemeProps-09ff92e7.js";import{r as ce}from"./index-f1f2c4b1.js";import{g as de,a as pe,s as v,b as xe,d as he}from"./styled-f4c85dcf.js";import{c as m}from"./createSvgIcon-2a61c0ab.js";import{P as ue}from"./Paper-21529610.js";import{T as i}from"./Typography-ff175671.js";import{S as o}from"./Stack-94b624b7.js";import{G as a}from"./Grid-d121f362.js";import{u as N}from"./index-59d6410c.js";import{M as me,C as b,b as S}from"./index-3b08d913.js";import"./typography-18a122d3.js";import"./colors-4f758d22.js";import"./useControlled-953564ff.js";import"./ownerWindow-fbe9f185.js";import"./useForkRef-f4ecef3a.js";import"./useId-e3465fec.js";import"./isMuiElement-c6f52415.js";import"./useEnhancedEffect-b6928b87.js";import"./TransitionGroupContext-f23bfbbc.js";import"./useIsFocusVisible-86ab9ba9.js";import"./ButtonBase-14f96990.js";import"./emotion-react.browser.esm-ea340576.js";import"./extendSxProp-2d0de5c8.js";import"./styled-035c2fe9.js";import"./useTheme-f6b5a289.js";import"./iframe-85435973.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-1c885437.js";import"./index-356e4a49.js";function ge(n){return pe("MuiAlert",n)}const je=de("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),P=je,ye=m(e.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),ve=m(e.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),fe=m(e.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),Ae=m(e.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),Ce=m(e.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),be=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],Se=n=>{const{variant:s,color:c,severity:r,classes:t}=n,d={root:["root",`${s}${D(c||r)}`,`${s}`],icon:["icon"],message:["message"],action:["action"]};return he(d,ge,t)},Te=v(ue,{name:"MuiAlert",slot:"Root",overridesResolver:(n,s)=>{const{ownerState:c}=n;return[s.root,s[c.variant],s[`${c.variant}${D(c.color||c.severity)}`]]}})(({theme:n,ownerState:s})=>{const c=n.palette.mode==="light"?E:B,r=n.palette.mode==="light"?B:E,t=s.color||s.severity;return x({},n.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},t&&s.variant==="standard"&&{color:n.vars?n.vars.palette.Alert[`${t}Color`]:c(n.palette[t].light,.6),backgroundColor:n.vars?n.vars.palette.Alert[`${t}StandardBg`]:r(n.palette[t].light,.9),[`& .${P.icon}`]:n.vars?{color:n.vars.palette.Alert[`${t}IconColor`]}:{color:n.palette[t].main}},t&&s.variant==="outlined"&&{color:n.vars?n.vars.palette.Alert[`${t}Color`]:c(n.palette[t].light,.6),border:`1px solid ${(n.vars||n).palette[t].light}`,[`& .${P.icon}`]:n.vars?{color:n.vars.palette.Alert[`${t}IconColor`]}:{color:n.palette[t].main}},t&&s.variant==="filled"&&x({fontWeight:n.typography.fontWeightMedium},n.vars?{color:n.vars.palette.Alert[`${t}FilledColor`],backgroundColor:n.vars.palette.Alert[`${t}FilledBg`]}:{backgroundColor:n.palette.mode==="dark"?n.palette[t].dark:n.palette[t].main,color:n.palette.getContrastText(n.palette[t].main)}))}),Ie=v("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(n,s)=>s.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),ke=v("div",{name:"MuiAlert",slot:"Message",overridesResolver:(n,s)=>s.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),w=v("div",{name:"MuiAlert",slot:"Action",overridesResolver:(n,s)=>s.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),R={success:e.jsx(ye,{fontSize:"inherit"}),warning:e.jsx(ve,{fontSize:"inherit"}),error:e.jsx(fe,{fontSize:"inherit"}),info:e.jsx(Ae,{fontSize:"inherit"})},Me=ce.forwardRef(function(s,c){var r,t,d,h,g,j;const f=ae({props:s,name:"MuiAlert"}),{action:A,children:F,className:X,closeText:M="Close",color:Z,components:_={},componentsProps:G={},icon:$,iconMapping:J=R,onClose:W,role:K="alert",severity:C="success",slotProps:z={},slots:L={},variant:Q="standard"}=f,Y=le(f,be),p=x({},f,{color:Z,severity:C,variant:Q}),u=Se(p),ee=(r=(t=L.closeButton)!=null?t:_.CloseButton)!=null?r:O,ne=(d=(h=L.closeIcon)!=null?h:_.CloseIcon)!=null?d:Ce,re=(g=z.closeButton)!=null?g:G.closeButton,te=(j=z.closeIcon)!=null?j:G.closeIcon;return e.jsxs(Te,x({role:K,elevation:0,ownerState:p,className:xe(u.root,X),ref:c},Y,{children:[$!==!1?e.jsx(Ie,{ownerState:p,className:u.icon,children:$||J[C]||R[C]}):null,e.jsx(ke,{ownerState:p,className:u.message,children:F}),A!=null?e.jsx(w,{ownerState:p,className:u.action,children:A}):null,A==null&&W?e.jsx(w,{ownerState:p,className:u.action,children:e.jsx(ee,x({size:"small","aria-label":M,title:M,color:"inherit",onClick:W},re,{children:e.jsx(ne,x({fontSize:"small"},te))}))}):null]}))}),_e=Me;var k={},Ge=oe;Object.defineProperty(k,"__esModule",{value:!0});var U=k.default=void 0,$e=Ge(ie()),We=e,ze=(0,$e.default)((0,We.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"CheckCircleOutline");U=k.default=ze;const Le=T(O)`
  padding: 4px;
  border-radius: 5px;
  color: black;
`,Ee=T(I)`
  display: flex;
  flex-direction: column;
  padding-top: 2px;
`,Be=T(I)`
  display: flex;
  align-items: center;
  padding-left: 12px;
`,l=n=>{const{children:s,title:c,severity:r="info",variant:t="outlined",onClose:d,action:h,...g}=n,j={success:e.jsx(U,{fontSize:"small"})};return e.jsx(_e,{variant:t,severity:r,icon:j[r],action:e.jsxs(Be,{children:[h?e.jsx(I,{mr:"4px",children:h}):null,d?e.jsx(Le,{onClick:d,children:e.jsx(se,{})}):null]}),sx:{alignItems:c?"start":"center"},...g,children:c?e.jsxs(Ee,{children:[e.jsx(i,{variant:"body",fontWeight:"500",color:"grey.85",children:c}),e.jsx(i,{variant:"bodySmall",color:"grey.70",children:s})]}):e.jsx(i,{variant:"body",fontWeight:"500",color:"grey.85",children:s})})};try{l.displayName="Alert",l.__docgenInfo={description:"",displayName:"Alert",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!1,type:{name:'"div"'}}}}}catch{}try{alert.displayName="alert",alert.__docgenInfo={description:"",displayName:"alert",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!1,type:{name:'"div"'}}}}}catch{}const Ne="@novatics-ui/alert",Pe="0.2.2",we="./index.js",Re="./index.d.ts",Oe={".":{import:"./index.mjs",require:"./index.js"}},De={"@mui/icons-material":"^5.14.1"},Ue={name:Ne,version:Pe,main:we,types:Re,exports:Oe,peerDependencies:De};function He(n={}){const{wrapper:s}=Object.assign({},N(),n.components);return s?e.jsx(s,{...n,children:e.jsx(c,{})}):c();function c(){const r=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre"},N(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(me,{title:"Components/Alert",component:l}),`
`,e.jsxs(r.h1,{id:"alert-",children:["Alert ",e.jsx("img",{src:`https://img.shields.io/badge/Version-v${Ue.version}-brightgreenn`})]}),`
`,e.jsx(r.h3,{id:"installation",children:"Installation"}),`
`,e.jsxs(r.p,{children:["First install the latest version of the package from ",e.jsx(r.code,{children:"@novatics-ui/alert"}),"."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-shell",children:`  yarn add -D @novatics-ui/alert
`})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-shell",children:`  npm install --dev @novatics-ui/alert
`})}),`
`,e.jsx(r.p,{children:"and use it"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import ... from '@novatics-ui/alert';

  ...


`})}),`
`,e.jsx(r.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"Alert"})," component supports three type variants: persistent, dispensable and action alerts."]}),`
`,e.jsx(b,{children:e.jsx(S,{name:"Basic Usage",children:t=>e.jsx(o,{spacing:3,children:e.jsxs(a,{container:!0,spacing:2,children:[e.jsx(a,{item:!0,xxs:4,children:e.jsxs(o,{spacing:2,children:[e.jsx(i,{variant:"body",children:"Persistent"}),e.jsx(l,{severity:"info",children:"This is a persistent alert."})]})}),e.jsx(a,{item:!0,xxs:4,children:e.jsxs(o,{spacing:2,children:[e.jsx(i,{variant:"body",children:"Dispensable"}),e.jsx(l,{onClose:()=>{},children:"This is a dispensable alert."})]})}),e.jsx(a,{item:!0,xxs:4,children:e.jsxs(o,{spacing:2,children:[e.jsx(i,{variant:"body",children:"Action"}),e.jsx(l,{action:e.jsx(i,{variant:"body2",children:"Action"}),children:"This is an alert with some action!"})]})})]})})})}),`
`,e.jsx(r.h3,{id:"severity",children:"Severity"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"Alert"})," component have four variants: success, error, info and warning."]}),`
`,e.jsx(b,{children:e.jsx(S,{name:"Severity",children:t=>e.jsx(o,{spacing:4,children:e.jsxs(a,{container:!0,spacing:4,children:[e.jsx(a,{item:!0,xs:3,children:e.jsxs(o,{spacing:1,children:[e.jsx(i,{variant:"body",children:"Success"}),e.jsx(l,{severity:"success",onClose:()=>{},children:"Success alert!"})]})}),e.jsx(a,{item:!0,xs:3,children:e.jsxs(o,{spacing:1,children:[e.jsx(i,{variant:"body",children:"Warning"}),e.jsx(l,{severity:"warning",onClose:()=>{},children:"Warning alert!"})]})}),e.jsx(a,{item:!0,xs:3,children:e.jsxs(o,{spacing:1,children:[e.jsx(i,{variant:"body",children:"Error"}),e.jsx(l,{severity:"error",onClose:()=>{},children:"Error alert!"})]})}),e.jsx(a,{item:!0,xs:3,children:e.jsxs(o,{spacing:1,children:[e.jsx(i,{variant:"body",children:"Infomartive"}),e.jsx(l,{severity:"info",onClose:()=>{},children:"Infomartive alert!"})]})})]})})})}),`
`,e.jsx(r.h3,{id:"title",children:"Title"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"Alert"})," could have title and description."]}),`
`,e.jsx(b,{children:e.jsx(S,{name:"Title",children:t=>e.jsx(o,{spacing:4,children:e.jsxs(a,{container:!0,spacing:4,children:[e.jsx(a,{item:!0,xs:3,children:e.jsxs(o,{spacing:1,children:[e.jsx(i,{variant:"body",children:"Without title"}),e.jsx(l,{action:e.jsx(i,{variant:"body2",children:"Action"}),onClose:()=>{},children:"Alert without title"})]})}),e.jsx(a,{item:!0,xs:3,children:e.jsxs(o,{spacing:1,children:[e.jsx(i,{variant:"body",children:"With title"}),e.jsx(l,{title:"Title",onClose:()=>{},children:"Alert content"})]})})]})})})}),`
`,e.jsx(r.p,{children:"made by Novatics ❤"})]})}}const H=n=>e.jsx(o,{spacing:3,children:e.jsxs(a,{container:!0,spacing:2,children:[e.jsx(a,{item:!0,xxs:4,children:e.jsxs(o,{spacing:2,children:[e.jsx(i,{variant:"body",children:"Persistent"}),e.jsx(l,{severity:"info",children:"This is a persistent alert."})]})}),e.jsx(a,{item:!0,xxs:4,children:e.jsxs(o,{spacing:2,children:[e.jsx(i,{variant:"body",children:"Dispensable"}),e.jsx(l,{onClose:()=>{},children:"This is a dispensable alert."})]})}),e.jsx(a,{item:!0,xxs:4,children:e.jsxs(o,{spacing:2,children:[e.jsx(i,{variant:"body",children:"Action"}),e.jsx(l,{action:e.jsx(i,{variant:"body2",children:"Action"}),children:"This is an alert with some action!"})]})})]})});H.storyName="Basic Usage";H.parameters={storySource:{source:`args => {
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
}`}};const q=n=>e.jsx(o,{spacing:4,children:e.jsxs(a,{container:!0,spacing:4,children:[e.jsx(a,{item:!0,xs:3,children:e.jsxs(o,{spacing:1,children:[e.jsx(i,{variant:"body",children:"Success"}),e.jsx(l,{severity:"success",onClose:()=>{},children:"Success alert!"})]})}),e.jsx(a,{item:!0,xs:3,children:e.jsxs(o,{spacing:1,children:[e.jsx(i,{variant:"body",children:"Warning"}),e.jsx(l,{severity:"warning",onClose:()=>{},children:"Warning alert!"})]})}),e.jsx(a,{item:!0,xs:3,children:e.jsxs(o,{spacing:1,children:[e.jsx(i,{variant:"body",children:"Error"}),e.jsx(l,{severity:"error",onClose:()=>{},children:"Error alert!"})]})}),e.jsx(a,{item:!0,xs:3,children:e.jsxs(o,{spacing:1,children:[e.jsx(i,{variant:"body",children:"Infomartive"}),e.jsx(l,{severity:"info",onClose:()=>{},children:"Infomartive alert!"})]})})]})});q.storyName="Severity";q.parameters={storySource:{source:`args => {
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
}`}};const V=n=>e.jsx(o,{spacing:4,children:e.jsxs(a,{container:!0,spacing:4,children:[e.jsx(a,{item:!0,xs:3,children:e.jsxs(o,{spacing:1,children:[e.jsx(i,{variant:"body",children:"Without title"}),e.jsx(l,{action:e.jsx(i,{variant:"body2",children:"Action"}),onClose:()=>{},children:"Alert without title"})]})}),e.jsx(a,{item:!0,xs:3,children:e.jsxs(o,{spacing:1,children:[e.jsx(i,{variant:"body",children:"With title"}),e.jsx(l,{title:"Title",onClose:()=>{},children:"Alert content"})]})})]})});V.storyName="Title";V.parameters={storySource:{source:`args => {
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
}`}};const y={title:"Components/Alert",component:l,tags:["stories-mdx"],includeStories:["basicUsage","severity","title"]};y.parameters=y.parameters||{};y.parameters.docs={...y.parameters.docs||{},page:He};const Gn=["basicUsage","severity","title"];export{Gn as __namedExportsOrder,H as basicUsage,y as default,q as severity,V as title};
//# sourceMappingURL=alert.stories-28c7f9ff.js.map
