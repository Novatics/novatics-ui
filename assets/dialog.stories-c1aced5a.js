import{r as l}from"./index-f1f2c4b1.js";import"./blocks-2646952b.js";import{j as e}from"./jsx-runtime-d079401a.js";import{d as le}from"./Close-06dba215.js";import{B as de}from"./button-2d6e2350.js";import{i as A}from"./index-2762f82b.js";import{h as y,c as x,f as S,g as B}from"./useThemeProps-09ff92e7.js";import{g as W,a as O,s as C,b as D,d as M}from"./styled-96cb1edf.js";import{u as ce}from"./useTheme-f6b5a289.js";import{B as pe,M as ue,F as me}from"./Modal-86e2ebb5.js";import{P as H}from"./Paper-f9935f84.js";import{u as he}from"./useId-e3465fec.js";import{T as h}from"./Typography-40911622.js";import{B as ge}from"./Box-c76f688f.js";import{I as xe}from"./IconButton-8c3cc54d.js";import{M as F}from"./Divider-7eb85a4a.js";import{S as p}from"./Stack-1cdd4a28.js";import{G as u}from"./Grid-3aa7fff4.js";import{B as g}from"./Button-056a99df.js";import{u as E}from"./index-59d6410c.js";import{M as fe,C as N,b as q}from"./index-ed052fae.js";import"./createSvgIcon-0d9f24f7.js";import"./createSvgIcon-1b71b914.js";import"./useControlled-953564ff.js";import"./ownerWindow-fbe9f185.js";import"./useForkRef-f4ecef3a.js";import"./isMuiElement-c6f52415.js";import"./useEnhancedEffect-b6928b87.js";import"./TransitionGroupContext-f23bfbbc.js";import"./useIsFocusVisible-86ab9ba9.js";import"./emotion-react.browser.esm-ea340576.js";import"./index-1c885437.js";import"./objectWithoutPropertiesLoose-6c5c234b.js";import"./useSlotProps-0150403e.js";import"./isHostComponent-73d6e646.js";import"./extendSxProp-2d0de5c8.js";import"./ButtonBase-9787c033.js";import"./dividerClasses-cd6afa55.js";import"./styled-e68bd8d0.js";import"./iframe-7a310c27.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";function ve(t){return O("MuiDialog",t)}const Ce=W("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),V=Ce,ye=l.createContext({}),L=ye,De=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],ke=C(pe,{name:"MuiDialog",slot:"Backdrop",overrides:(t,n)=>n.backdrop})({zIndex:-1}),je=t=>{const{classes:n,scroll:i,maxWidth:o,fullWidth:s,fullScreen:r}=t,a={root:["root"],container:["container",`scroll${y(i)}`],paper:["paper",`paperScroll${y(i)}`,`paperWidth${y(String(o))}`,s&&"paperFullWidth",r&&"paperFullScreen"]};return M(a,ve,n)},be=C(ue,{name:"MuiDialog",slot:"Root",overridesResolver:(t,n)=>n.root})({"@media print":{position:"absolute !important"}}),Se=C("div",{name:"MuiDialog",slot:"Container",overridesResolver:(t,n)=>{const{ownerState:i}=t;return[n.container,n[`scroll${y(i.scroll)}`]]}})(({ownerState:t})=>x({height:"100%","@media print":{height:"auto"},outline:0},t.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},t.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),Be=C(H,{name:"MuiDialog",slot:"Paper",overridesResolver:(t,n)=>{const{ownerState:i}=t;return[n.paper,n[`scrollPaper${y(i.scroll)}`],n[`paperWidth${y(String(i.maxWidth))}`],i.fullWidth&&n.paperFullWidth,i.fullScreen&&n.paperFullScreen]}})(({theme:t,ownerState:n})=>x({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},n.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},n.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!n.maxWidth&&{maxWidth:"calc(100% - 64px)"},n.maxWidth==="xs"&&{maxWidth:t.breakpoints.unit==="px"?Math.max(t.breakpoints.values.xs,444):`max(${t.breakpoints.values.xs}${t.breakpoints.unit}, 444px)`,[`&.${V.paperScrollBody}`]:{[t.breakpoints.down(Math.max(t.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},n.maxWidth&&n.maxWidth!=="xs"&&{maxWidth:`${t.breakpoints.values[n.maxWidth]}${t.breakpoints.unit}`,[`&.${V.paperScrollBody}`]:{[t.breakpoints.down(t.breakpoints.values[n.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},n.fullWidth&&{width:"calc(100% - 64px)"},n.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${V.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),We=l.forwardRef(function(n,i){const o=S({props:n,name:"MuiDialog"}),s=ce(),r={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{"aria-describedby":a,"aria-labelledby":d,BackdropComponent:c,BackdropProps:f,children:v,className:K,disableEscapeKeyDown:$=!1,fullScreen:J=!1,fullWidth:Q=!1,maxWidth:Z="sm",onBackdropClick:U,onClose:P,open:_,PaperComponent:ee=H,PaperProps:G={},scroll:ne="paper",TransitionComponent:te=me,transitionDuration:I=r,TransitionProps:oe}=o,ie=B(o,De),j=x({},o,{disableEscapeKeyDown:$,fullScreen:J,fullWidth:Q,maxWidth:Z,scroll:ne}),T=je(j),w=l.useRef(),ae=k=>{w.current=k.target===k.currentTarget},se=k=>{w.current&&(w.current=null,U&&U(k),P&&P(k,"backdropClick"))},R=he(d),re=l.useMemo(()=>({titleId:R}),[R]);return e.jsx(be,x({className:D(T.root,K),closeAfterTransition:!0,components:{Backdrop:ke},componentsProps:{backdrop:x({transitionDuration:I,as:c},f)},disableEscapeKeyDown:$,onClose:P,open:_,ref:i,onClick:se,ownerState:j},ie,{children:e.jsx(te,x({appear:!0,in:_,timeout:I,role:"presentation"},oe,{children:e.jsx(Se,{className:D(T.container),onMouseDown:ae,ownerState:j,children:e.jsx(Be,x({as:ee,elevation:24,role:"dialog","aria-describedby":a,"aria-labelledby":R},G,{className:D(T.paper,G.className),ownerState:j,children:e.jsx(L.Provider,{value:re,children:v})}))})}))}))}),Oe=We;function Me(t){return O("MuiDialogActions",t)}W("MuiDialogActions",["root","spacing"]);const Pe=["className","disableSpacing"],Te=t=>{const{classes:n,disableSpacing:i}=t;return M({root:["root",!i&&"spacing"]},Me,n)},we=C("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:i}=t;return[n.root,!i.disableSpacing&&n.spacing]}})(({ownerState:t})=>x({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),Re=l.forwardRef(function(n,i){const o=S({props:n,name:"MuiDialogActions"}),{className:s,disableSpacing:r=!1}=o,a=B(o,Pe),d=x({},o,{disableSpacing:r}),c=Te(d);return e.jsx(we,x({className:D(c.root,s),ownerState:d,ref:i},a))}),Ne=Re;function qe(t){return O("MuiDialogContent",t)}W("MuiDialogContent",["root","dividers"]);function Ve(t){return O("MuiDialogTitle",t)}const $e=W("MuiDialogTitle",["root"]),Ue=$e,_e=["className","dividers"],Ge=t=>{const{classes:n,dividers:i}=t;return M({root:["root",i&&"dividers"]},qe,n)},Ie=C("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:i}=t;return[n.root,i.dividers&&n.dividers]}})(({theme:t,ownerState:n})=>x({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},n.dividers?{padding:"16px 24px",borderTop:`1px solid ${(t.vars||t).palette.divider}`,borderBottom:`1px solid ${(t.vars||t).palette.divider}`}:{[`.${Ue.root} + &`]:{paddingTop:0}})),Ae=l.forwardRef(function(n,i){const o=S({props:n,name:"MuiDialogContent"}),{className:s,dividers:r=!1}=o,a=B(o,_e),d=x({},o,{dividers:r}),c=Ge(d);return e.jsx(Ie,x({className:D(c.root,s),ownerState:d,ref:i},a))}),Fe=Ae,Ee=["className","id"],He=t=>{const{classes:n}=t;return M({root:["root"]},Ve,n)},Le=C(h,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(t,n)=>n.root})({padding:"16px 24px",flex:"0 0 auto"}),Xe=l.forwardRef(function(n,i){const o=S({props:n,name:"MuiDialogTitle"}),{className:s,id:r}=o,a=B(o,Ee),d=o,c=He(d),{titleId:f=r}=l.useContext(L);return e.jsx(Le,x({component:"h2",className:D(c.root,s),ownerState:d,ref:i,variant:"h6",id:r??f},a))}),Ye=Xe,m=t=>{const{onClose:n,children:i,title:o,description:s,actionButtons:r,dialogActions:a,headerDivider:d,footerDivider:c,...f}=t;return e.jsxs(Oe,{...f,children:[e.jsxs(Ye,{sx:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[e.jsxs(ge,{sx:{display:"flex",flexDirection:"column"},children:[o?e.jsx(h,{variant:"h5",color:"grey.85",children:o}):null,s?e.jsx(h,{mt:"4px",variant:"bodySmall",color:"grey.70",children:s}):null]}),n?e.jsx(xe,{color:"inherit",onClick:n,"aria-label":"close",children:e.jsx(le,{})}):null]}),d?e.jsx(F,{}):null,e.jsx(Fe,{children:i}),c?e.jsx(F,{}):null,A(a)?A(r)?null:e.jsx(Ne,{children:r==null?void 0:r.map(v=>e.jsx(de,{...v}))}):a]})};try{m.displayName="Dialog",m.__docgenInfo={description:"",displayName:"Dialog",props:{onClose:{defaultValue:null,description:"Callback fired when the component requests to be closed.",name:"onClose",required:!1,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Dialog children, usually the included sub-components.",name:"children",required:!1,type:{name:"React.ReactNode"}},actionButtons:{defaultValue:null,description:"",name:"actionButtons",required:!1,type:{name:"ButtonProps[]"}},dialogActions:{defaultValue:null,description:"",name:"dialogActions",required:!1,type:{name:"React.ReactNode"}},headerDivider:{defaultValue:null,description:"",name:"headerDivider",required:!1,type:{name:"boolean"}},footerDivider:{defaultValue:null,description:"",name:"footerDivider",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"@ignore",name:"className",required:!1,type:{name:"string"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside the Modal.",name:"slotProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", ModalComponentsPropsOverrides, ModalOwnerState>; backdrop?: SlotComponentProps<OverridableComponent<BackdropTypeMap<{}, "div">>, ModalComponentsPropsOverrides, ModalOwnerState>; }'}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},components:{defaultValue:{value:"{}"},description:"The components used for each slot inside.\n\nThis prop is an alias for the `slots` prop.\nIt's recommended to use the `slots` prop instead.",name:"components",required:!1,type:{name:"{ Root?: ElementType<any>; Backdrop?: ElementType<any>; }"}},componentsProps:{defaultValue:{value:"{}"},description:"The extra props for the slot components.\nYou can override the existing props or add new ones.\n\nThis prop is an alias for the `slotProps` prop.\nIt's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.",name:"componentsProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", ModalComponentsPropsOverrides, ModalOwnerState>; backdrop?: SlotComponentProps<OverridableComponent<BackdropTypeMap<{}, "div">>, ModalComponentsPropsOverrides, ModalOwnerState>; }'}},BackdropComponent:{defaultValue:{value:`styled(Backdrop, {
name: 'MuiModal',
slot: 'Backdrop',
overridesResolver: (props, styles) => {
return styles.backdrop;
},
})({
zIndex: -1,
})`},description:"A backdrop component. This prop enables custom backdrop rendering.\n@deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.\nUse the `slots.backdrop` prop to make your application ready for the next version of Material UI.",name:"BackdropComponent",required:!1,type:{name:"ElementType<BackdropProps>"}},BackdropProps:{defaultValue:null,description:"Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.\n@deprecated Use `slotProps.backdrop` instead.",name:"BackdropProps",required:!1,type:{name:"Partial<BackdropProps>"}}}}}catch{}try{dialog.displayName="dialog",dialog.__docgenInfo={description:"",displayName:"dialog",props:{onClose:{defaultValue:null,description:"Callback fired when the component requests to be closed.",name:"onClose",required:!1,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Dialog children, usually the included sub-components.",name:"children",required:!1,type:{name:"React.ReactNode"}},actionButtons:{defaultValue:null,description:"",name:"actionButtons",required:!1,type:{name:"ButtonProps[]"}},dialogActions:{defaultValue:null,description:"",name:"dialogActions",required:!1,type:{name:"React.ReactNode"}},headerDivider:{defaultValue:null,description:"",name:"headerDivider",required:!1,type:{name:"boolean"}},footerDivider:{defaultValue:null,description:"",name:"footerDivider",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"@ignore",name:"className",required:!1,type:{name:"string"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside the Modal.",name:"slotProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", ModalComponentsPropsOverrides, ModalOwnerState>; backdrop?: SlotComponentProps<OverridableComponent<BackdropTypeMap<{}, "div">>, ModalComponentsPropsOverrides, ModalOwnerState>; }'}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},components:{defaultValue:{value:"{}"},description:"The components used for each slot inside.\n\nThis prop is an alias for the `slots` prop.\nIt's recommended to use the `slots` prop instead.",name:"components",required:!1,type:{name:"{ Root?: ElementType<any>; Backdrop?: ElementType<any>; }"}},componentsProps:{defaultValue:{value:"{}"},description:"The extra props for the slot components.\nYou can override the existing props or add new ones.\n\nThis prop is an alias for the `slotProps` prop.\nIt's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.",name:"componentsProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", ModalComponentsPropsOverrides, ModalOwnerState>; backdrop?: SlotComponentProps<OverridableComponent<BackdropTypeMap<{}, "div">>, ModalComponentsPropsOverrides, ModalOwnerState>; }'}},BackdropComponent:{defaultValue:{value:`styled(Backdrop, {
name: 'MuiModal',
slot: 'Backdrop',
overridesResolver: (props, styles) => {
return styles.backdrop;
},
})({
zIndex: -1,
})`},description:"A backdrop component. This prop enables custom backdrop rendering.\n@deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.\nUse the `slots.backdrop` prop to make your application ready for the next version of Material UI.",name:"BackdropComponent",required:!1,type:{name:"ElementType<BackdropProps>"}},BackdropProps:{defaultValue:null,description:"Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.\n@deprecated Use `slotProps.backdrop` instead.",name:"BackdropProps",required:!1,type:{name:"Partial<BackdropProps>"}}}}}catch{}const ze="@novatics/dialog",Ke="0.1.1",Je="./index.js",Qe="./index.d.ts",Ze={".":{import:"./index.mjs",require:"./index.js"}},en={"lodash.isempty":"^4.4.0","lodash.isnil":"^4.0.0"},nn={name:ze,version:Ke,main:Je,types:Qe,exports:Ze,dependencies:en};function tn(t={}){const{wrapper:n}=Object.assign({},E(),t.components);return n?e.jsx(n,{...t,children:e.jsx(i,{})}):i();function i(){const o=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre"},E(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(fe,{title:"Components/Dialog",component:m}),`
`,e.jsxs(o.h1,{id:"dialog-",children:["Dialog ",e.jsx("img",{src:`https://img.shields.io/badge/Version-v${nn.version}-brightgreenn`})]}),`
`,e.jsx(o.h3,{id:"installation",children:"Installation"}),`
`,e.jsxs(o.p,{children:["First install the latest version of the package from ",e.jsx(o.code,{children:"@novatics/dialog"}),"."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-shell",children:`  yarn add -D @novatics/dialog
`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-shell",children:`  npm install --dev @novatics/dialog
`})}),`
`,e.jsx(o.p,{children:"and use it"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import ... from '@novatics/dialog';

  ...


`})}),`
`,e.jsx(o.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"Dialog"})," is a simple modal component. It can have multiple actions, title with description and display a content as children."]}),`
`,e.jsx(N,{children:e.jsx(q,{name:"Basic Usage",children:s=>{const[r,a]=l.useState(!1),[d,c]=l.useState(!1);return e.jsxs(p,{spacing:3,children:[e.jsxs(u,{container:!0,spacing:2,children:[e.jsx(u,{item:!0,xs:4,children:e.jsxs(p,{spacing:2,children:[e.jsx(h,{variant:"body",children:"Multiples actions"}),e.jsx(g,{variant:"contained",onClick:()=>a(!r),children:"Open dialog"})]})}),e.jsx(u,{item:!0,xs:4,children:e.jsxs(p,{spacing:2,children:[e.jsx(h,{variant:"body",children:"Without close icon"}),e.jsx(g,{variant:"contained",onClick:()=>c(!d),children:"Open dialog"})]})})]}),e.jsx(m,{fullWidth:!0,maxWidth:"sm",title:"Dialog title",open:r,onClose:()=>a(!r),actionButtons:[{variant:"contained",onClick:()=>a(!r),children:"Cancel"},{variant:"contained",onClick:()=>{},children:"Save"}],children:"Dialog content"}),e.jsx(m,{fullWidth:!0,maxWidth:"sm",title:"Dialog title",open:d,actionButtons:[{variant:"contained",onClick:()=>c(!d),children:"Cancel"},{variant:"contained",onClick:()=>{},children:"Save"}],children:"Dialog content"})]})}})}),`
`,e.jsx(o.h3,{id:"description",children:"Description"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"Dialog"})," can have an option description below its title."]}),`
`,e.jsx(N,{children:e.jsx(q,{name:"Description usage",children:s=>{const[r,a]=l.useState(!1),[d,c]=l.useState(!1);return e.jsxs(p,{spacing:3,children:[e.jsxs(u,{container:!0,spacing:2,children:[e.jsx(u,{item:!0,xs:4,children:e.jsxs(p,{spacing:2,children:[e.jsx(h,{variant:"body",children:"Without description"}),e.jsx(g,{variant:"contained",onClick:()=>a(!0),children:"Open dialog"})]})}),e.jsx(u,{item:!0,xs:4,children:e.jsxs(p,{spacing:2,children:[e.jsx(h,{variant:"body",children:"With description"}),e.jsx(g,{variant:"contained",onClick:()=>c(!0),children:"Open dialog"})]})})]}),e.jsx(m,{fullWidth:!0,maxWidth:"sm",title:"Dialog title",open:r,onClose:()=>a(!1),actionButtons:[{variant:"contained",onClick:()=>a(!1),children:"Cancel"}],children:"Dialog content"}),e.jsx(m,{fullWidth:!0,maxWidth:"sm",title:"Dialog title",description:"Some description here.",open:d,onClose:()=>c(!1),actionButtons:[{variant:"contained",onClick:()=>c(!1),children:"Cancel"}],children:"Dialog content"})]})}})}),`
`,e.jsx(o.h3,{id:"dividers",children:"Dividers"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"Dialog"})," can have two dividers, header and footer."]}),`
`,e.jsx(N,{children:e.jsx(q,{name:"Dividers",children:s=>{const[r,a]=l.useState(!1),[d,c]=l.useState(!1),[f,v]=l.useState(!1);return e.jsxs(p,{spacing:3,children:[e.jsxs(u,{container:!0,spacing:2,children:[e.jsx(u,{item:!0,xs:4,children:e.jsxs(p,{spacing:2,children:[e.jsx(h,{variant:"body",children:"Header divider"}),e.jsx(g,{variant:"contained",onClick:()=>a(!0),children:"Open dialog"})]})}),e.jsx(u,{item:!0,xs:4,children:e.jsxs(p,{spacing:2,children:[e.jsx(h,{variant:"body",children:"Footer divider"}),e.jsx(g,{variant:"contained",onClick:()=>c(!0),children:"Open dialog"})]})}),e.jsx(u,{item:!0,xs:4,children:e.jsxs(p,{spacing:2,children:[e.jsx(h,{variant:"body",children:"Header and Footer divider"}),e.jsx(g,{variant:"contained",onClick:()=>v(!0),children:"Open dialog"})]})})]}),e.jsx(m,{fullWidth:!0,maxWidth:"sm",title:"Dialog title",headerDivider:!0,open:r,onClose:()=>a(!1),actionButtons:[{variant:"contained",onClick:()=>a(!1),children:"Cancel"}],children:"Dialog content"}),e.jsx(m,{fullWidth:!0,maxWidth:"sm",title:"Dialog title",description:"Some description here.",footerDivider:!0,open:d,onClose:()=>c(!1),actionButtons:[{variant:"contained",onClick:()=>c(!1),children:"Cancel"}],children:"Dialog content"}),e.jsx(m,{fullWidth:!0,maxWidth:"sm",title:"Dialog title",description:"Some description here.",headerDivider:!0,footerDivider:!0,open:f,onClose:()=>v(!1),actionButtons:[{variant:"contained",onClick:()=>v(!1),children:"Cancel"}],children:"Dialog content"})]})}})}),`
`,e.jsx(o.p,{children:"made by Novatics ❤"})]})}}const X=t=>{const[n,i]=l.useState(!1),[o,s]=l.useState(!1);return e.jsxs(p,{spacing:3,children:[e.jsxs(u,{container:!0,spacing:2,children:[e.jsx(u,{item:!0,xs:4,children:e.jsxs(p,{spacing:2,children:[e.jsx(h,{variant:"body",children:"Multiples actions"}),e.jsx(g,{variant:"contained",onClick:()=>i(!n),children:"Open dialog"})]})}),e.jsx(u,{item:!0,xs:4,children:e.jsxs(p,{spacing:2,children:[e.jsx(h,{variant:"body",children:"Without close icon"}),e.jsx(g,{variant:"contained",onClick:()=>s(!o),children:"Open dialog"})]})})]}),e.jsx(m,{fullWidth:!0,maxWidth:"sm",title:"Dialog title",open:n,onClose:()=>i(!n),actionButtons:[{variant:"contained",onClick:()=>i(!n),children:"Cancel"},{variant:"contained",onClick:()=>{},children:"Save"}],children:"Dialog content"}),e.jsx(m,{fullWidth:!0,maxWidth:"sm",title:"Dialog title",open:o,actionButtons:[{variant:"contained",onClick:()=>s(!o),children:"Cancel"},{variant:"contained",onClick:()=>{},children:"Save"}],children:"Dialog content"})]})};X.storyName="Basic Usage";X.parameters={storySource:{source:`args => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  return <Stack spacing={3}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Typography variant="body">Multiples actions</Typography>
                <Button variant="contained" onClick={() => setOpen1(!open1)}>
                  Open dialog
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Typography variant="body">Without close icon</Typography>
                <Button variant="contained" onClick={() => setOpen2(!open2)}>
                  Open dialog
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <Dialog fullWidth maxWidth="sm" title="Dialog title" open={open1} onClose={() => setOpen1(!open1)} actionButtons={[{
      variant: "contained",
      onClick: () => setOpen1(!open1),
      children: "Cancel"
    }, {
      variant: "contained",
      onClick: () => undefined,
      children: "Save"
    }]}>
            Dialog content
          </Dialog>
          <Dialog fullWidth maxWidth="sm" title="Dialog title" open={open2} actionButtons={[{
      variant: "contained",
      onClick: () => setOpen2(!open2),
      children: "Cancel"
    }, {
      variant: "contained",
      onClick: () => undefined,
      children: "Save"
    }]}>
            Dialog content
          </Dialog>
        </Stack>;
}`}};const Y=t=>{const[n,i]=l.useState(!1),[o,s]=l.useState(!1);return e.jsxs(p,{spacing:3,children:[e.jsxs(u,{container:!0,spacing:2,children:[e.jsx(u,{item:!0,xs:4,children:e.jsxs(p,{spacing:2,children:[e.jsx(h,{variant:"body",children:"Without description"}),e.jsx(g,{variant:"contained",onClick:()=>i(!0),children:"Open dialog"})]})}),e.jsx(u,{item:!0,xs:4,children:e.jsxs(p,{spacing:2,children:[e.jsx(h,{variant:"body",children:"With description"}),e.jsx(g,{variant:"contained",onClick:()=>s(!0),children:"Open dialog"})]})})]}),e.jsx(m,{fullWidth:!0,maxWidth:"sm",title:"Dialog title",open:n,onClose:()=>i(!1),actionButtons:[{variant:"contained",onClick:()=>i(!1),children:"Cancel"}],children:"Dialog content"}),e.jsx(m,{fullWidth:!0,maxWidth:"sm",title:"Dialog title",description:"Some description here.",open:o,onClose:()=>s(!1),actionButtons:[{variant:"contained",onClick:()=>s(!1),children:"Cancel"}],children:"Dialog content"})]})};Y.storyName="Description usage";Y.parameters={storySource:{source:`args => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  return <Stack spacing={3}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Typography variant="body">Without description</Typography>
                <Button variant="contained" onClick={() => setOpen1(true)}>
                  Open dialog
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Typography variant="body">With description</Typography>
                <Button variant="contained" onClick={() => setOpen2(true)}>
                  Open dialog
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <Dialog fullWidth maxWidth="sm" title="Dialog title" open={open1} onClose={() => setOpen1(false)} actionButtons={[{
      variant: "contained",
      onClick: () => setOpen1(false),
      children: "Cancel"
    }]}>
            Dialog content
          </Dialog>
          <Dialog fullWidth maxWidth="sm" title="Dialog title" description="Some description here." open={open2} onClose={() => setOpen2(false)} actionButtons={[{
      variant: "contained",
      onClick: () => setOpen2(false),
      children: "Cancel"
    }]}>
            Dialog content
          </Dialog>
        </Stack>;
}`}};const z=t=>{const[n,i]=l.useState(!1),[o,s]=l.useState(!1),[r,a]=l.useState(!1);return e.jsxs(p,{spacing:3,children:[e.jsxs(u,{container:!0,spacing:2,children:[e.jsx(u,{item:!0,xs:4,children:e.jsxs(p,{spacing:2,children:[e.jsx(h,{variant:"body",children:"Header divider"}),e.jsx(g,{variant:"contained",onClick:()=>i(!0),children:"Open dialog"})]})}),e.jsx(u,{item:!0,xs:4,children:e.jsxs(p,{spacing:2,children:[e.jsx(h,{variant:"body",children:"Footer divider"}),e.jsx(g,{variant:"contained",onClick:()=>s(!0),children:"Open dialog"})]})}),e.jsx(u,{item:!0,xs:4,children:e.jsxs(p,{spacing:2,children:[e.jsx(h,{variant:"body",children:"Header and Footer divider"}),e.jsx(g,{variant:"contained",onClick:()=>a(!0),children:"Open dialog"})]})})]}),e.jsx(m,{fullWidth:!0,maxWidth:"sm",title:"Dialog title",headerDivider:!0,open:n,onClose:()=>i(!1),actionButtons:[{variant:"contained",onClick:()=>i(!1),children:"Cancel"}],children:"Dialog content"}),e.jsx(m,{fullWidth:!0,maxWidth:"sm",title:"Dialog title",description:"Some description here.",footerDivider:!0,open:o,onClose:()=>s(!1),actionButtons:[{variant:"contained",onClick:()=>s(!1),children:"Cancel"}],children:"Dialog content"}),e.jsx(m,{fullWidth:!0,maxWidth:"sm",title:"Dialog title",description:"Some description here.",headerDivider:!0,footerDivider:!0,open:r,onClose:()=>a(!1),actionButtons:[{variant:"contained",onClick:()=>a(!1),children:"Cancel"}],children:"Dialog content"})]})};z.storyName="Dividers";z.parameters={storySource:{source:`args => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return <Stack spacing={3}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Typography variant="body">Header divider</Typography>
                <Button variant="contained" onClick={() => setOpen1(true)}>
                  Open dialog
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Typography variant="body">Footer divider</Typography>
                <Button variant="contained" onClick={() => setOpen2(true)}>
                  Open dialog
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Typography variant="body">
                  Header and Footer divider
                </Typography>
                <Button variant="contained" onClick={() => setOpen3(true)}>
                  Open dialog
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <Dialog fullWidth maxWidth="sm" title="Dialog title" headerDivider open={open1} onClose={() => setOpen1(false)} actionButtons={[{
      variant: "contained",
      onClick: () => setOpen1(false),
      children: "Cancel"
    }]}>
            Dialog content
          </Dialog>
          <Dialog fullWidth maxWidth="sm" title="Dialog title" description="Some description here." footerDivider open={open2} onClose={() => setOpen2(false)} actionButtons={[{
      variant: "contained",
      onClick: () => setOpen2(false),
      children: "Cancel"
    }]}>
            Dialog content
          </Dialog>
          <Dialog fullWidth maxWidth="sm" title="Dialog title" description="Some description here." headerDivider footerDivider open={open3} onClose={() => setOpen3(false)} actionButtons={[{
      variant: "contained",
      onClick: () => setOpen3(false),
      children: "Cancel"
    }]}>
            Dialog content
          </Dialog>
        </Stack>;
}`}};const b={title:"Components/Dialog",component:m,tags:["stories-mdx"],includeStories:["basicUsage","descriptionUsage","dividers"]};b.parameters=b.parameters||{};b.parameters.docs={...b.parameters.docs||{},page:tn};const Xn=["basicUsage","descriptionUsage","dividers"];export{Xn as __namedExportsOrder,X as basicUsage,b as default,Y as descriptionUsage,z as dividers};
//# sourceMappingURL=dialog.stories-c1aced5a.js.map
