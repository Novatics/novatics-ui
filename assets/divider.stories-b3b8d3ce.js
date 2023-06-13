import"./blocks-2646952b.js";import{j as ae}from"./emotion-react-jsx-runtime.browser.esm-780ca0af.js";import{c as l,h as B,d as H,a as q}from"./useThemeProps-d5e886d2.js";import{r as b}from"./index-ebeaab24.js";import{s as V,c as $,b as z,g as J,a as oe}from"./styled-074962e9.js";import{g as be,l as re,a as Ie}from"./listItemTextClasses-9e4cd206.js";import{j as e}from"./jsx-runtime-5926aa06.js";import{T as x}from"./Typography-84c93c33.js";import{L as U,a as I}from"./List-541314d9.js";import{u as Le,a as Te}from"./useForkRef-3ff4e0b8.js";import{i as Ce}from"./isMuiElement-b72c78c9.js";import{i as ne}from"./isHostComponent-73d6e646.js";import{B as De}from"./ButtonBase-a56cfea7.js";import{G as p}from"./Grid-39f09131.js";import{S as u}from"./Stack-6c8dd1e1.js";import{P as g}from"./Paper-85e5ec57.js";import{B as C}from"./Box-48cb0356.js";import{C as le}from"./Chip-288f4914.js";import{u as se}from"./index-bda0bad7.js";import{M as Se,C as G,S as M,A as Pe}from"./index-38aef0ac.js";import"./emotion-react.browser.esm-3c2a4d00.js";import"./extendSxProp-f682d789.js";import"./TransitionGroupContext-8ebc3921.js";import"./useTheme-c6adb93a.js";import"./styled-6c77f610.js";import"./createSvgIcon-edd23920.js";import"./iframe-7661a1a3.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ce6f85b9.js";import"./index-356e4a49.js";const We=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],we=t=>{const{absolute:i,children:n,classes:s,flexItem:c,light:m,orientation:d,textAlign:h,variant:j}=t;return z({root:["root",i&&"absolute",j,m&&"light",d==="vertical"&&"vertical",c&&"flexItem",n&&"withChildren",n&&d==="vertical"&&"withChildrenVertical",h==="right"&&d!=="vertical"&&"textAlignRight",h==="left"&&d!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",d==="vertical"&&"wrapperVertical"]},be,s)},Ae=V("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:n}=t;return[i.root,n.absolute&&i.absolute,i[n.variant],n.light&&i.light,n.orientation==="vertical"&&i.vertical,n.flexItem&&i.flexItem,n.children&&i.withChildren,n.children&&n.orientation==="vertical"&&i.withChildrenVertical,n.textAlign==="right"&&n.orientation!=="vertical"&&i.textAlignRight,n.textAlign==="left"&&n.orientation!=="vertical"&&i.textAlignLeft]}})(({theme:t,ownerState:i})=>l({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},i.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},i.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:B(t.palette.divider,.08)},i.variant==="inset"&&{marginLeft:72},i.variant==="middle"&&i.orientation==="horizontal"&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},i.variant==="middle"&&i.orientation==="vertical"&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},i.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},i.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:t})=>l({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:t,ownerState:i})=>l({},i.children&&i.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`}}),({theme:t,ownerState:i})=>l({},i.children&&i.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`}}),({ownerState:t})=>l({},t.textAlign==="right"&&t.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},t.textAlign==="left"&&t.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),Ne=V("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,i)=>{const{ownerState:n}=t;return[i.wrapper,n.orientation==="vertical"&&i.wrapperVertical]}})(({theme:t,ownerState:i})=>l({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},i.orientation==="vertical"&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})),Re=b.forwardRef(function(i,n){const s=H({props:i,name:"MuiDivider"}),{absolute:c=!1,children:m,className:d,component:h=m?"div":"hr",flexItem:j=!1,light:f=!1,orientation:D="horizontal",role:S=h!=="hr"?"separator":void 0,textAlign:w="center",variant:A="fullWidth"}=s,y=q(s,We),v=l({},s,{absolute:c,component:h,flexItem:j,light:f,orientation:D,role:S,textAlign:w,variant:A}),T=we(v);return e.jsx(Ae,l({as:h,className:$(T.root,d),role:S,ref:n,ownerState:v},y,{children:m?e.jsx(Ne,{className:T.wrapper,ownerState:v,children:m}):null}))}),$e=Re;function Ve(t){return oe("MuiListItem",t)}const ke=J("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),R=ke,_e=J("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),Ge=_e;function Me(t){return oe("MuiListItemSecondaryAction",t)}J("MuiListItemSecondaryAction",["root","disableGutters"]);const Be=["className"],Ue=t=>{const{disableGutters:i,classes:n}=t;return z({root:["root",i&&"disableGutters"]},Me,n)},qe=V("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:n}=t;return[i.root,n.disableGutters&&i.disableGutters]}})(({ownerState:t})=>l({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),de=b.forwardRef(function(i,n){const s=H({props:i,name:"MuiListItemSecondaryAction"}),{className:c}=s,m=q(s,Be),d=b.useContext(U),h=l({},s,{disableGutters:d.disableGutters}),j=Ue(h);return e.jsx(qe,l({className:$(j.root,c),ownerState:h,ref:n},m))});de.muiName="ListItemSecondaryAction";const Oe=de,Ee=["className"],Fe=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],He=(t,i)=>{const{ownerState:n}=t;return[i.root,n.dense&&i.dense,n.alignItems==="flex-start"&&i.alignItemsFlexStart,n.divider&&i.divider,!n.disableGutters&&i.gutters,!n.disablePadding&&i.padding,n.button&&i.button,n.hasSecondaryAction&&i.secondaryAction]},ze=t=>{const{alignItems:i,button:n,classes:s,dense:c,disabled:m,disableGutters:d,disablePadding:h,divider:j,hasSecondaryAction:f,selected:D}=t;return z({root:["root",c&&"dense",!d&&"gutters",!h&&"padding",j&&"divider",m&&"disabled",n&&"button",i==="flex-start"&&"alignItemsFlexStart",f&&"secondaryAction",D&&"selected"],container:["container"]},Ve,s)},Xe=V("div",{name:"MuiListItem",slot:"Root",overridesResolver:He})(({theme:t,ownerState:i})=>l({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!i.disablePadding&&l({paddingTop:8,paddingBottom:8},i.dense&&{paddingTop:4,paddingBottom:4},!i.disableGutters&&{paddingLeft:16,paddingRight:16},!!i.secondaryAction&&{paddingRight:48}),!!i.secondaryAction&&{[`& > .${Ge.root}`]:{paddingRight:48}},{[`&.${R.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${R.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:B(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${R.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:B(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${R.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},i.alignItems==="flex-start"&&{alignItems:"flex-start"},i.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},i.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${R.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:B(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:B(t.palette.primary.main,t.palette.action.selectedOpacity)}}},i.hasSecondaryAction&&{paddingRight:48})),Ye=V("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,i)=>i.container})({position:"relative"}),Je=b.forwardRef(function(i,n){const s=H({props:i,name:"MuiListItem"}),{alignItems:c="center",autoFocus:m=!1,button:d=!1,children:h,className:j,component:f,components:D={},componentsProps:S={},ContainerComponent:w="li",ContainerProps:{className:A}={},dense:y=!1,disabled:v=!1,disableGutters:T=!1,disablePadding:k=!1,divider:ue=!1,focusVisibleClassName:he,secondaryAction:Q,selected:ve=!1,slotProps:je={},slots:fe={}}=s,ge=q(s.ContainerProps,Ee),ye=q(s,Fe),Z=b.useContext(U),X=b.useMemo(()=>({dense:y||Z.dense||!1,alignItems:c,disableGutters:T}),[c,Z.dense,y,T]),Y=b.useRef(null);Le(()=>{m&&Y.current&&Y.current.focus()},[m]);const N=b.Children.toArray(h),ee=N.length&&Ce(N[N.length-1],["ListItemSecondaryAction"]),O=l({},s,{alignItems:c,autoFocus:m,button:d,dense:X.dense,disabled:v,disableGutters:T,disablePadding:k,divider:ue,hasSecondaryAction:ee,selected:ve}),te=ze(O),ie=Te(Y,n),E=fe.root||D.Root||Xe,_=je.root||S.root||{},P=l({className:$(te.root,_.className,j),disabled:v},ye);let W=f||"li";return d&&(P.component=f||"div",P.focusVisibleClassName=$(R.focusVisible,he),W=De),ee?(W=!P.component&&!f?"div":W,w==="li"&&(W==="li"?W="div":P.component==="li"&&(P.component="div")),e.jsx(U.Provider,{value:X,children:e.jsxs(Ye,l({as:w,className:$(te.container,A),ref:ie,ownerState:O},ge,{children:[e.jsx(E,l({},_,!ne(E)&&{as:W,ownerState:l({},O,_.ownerState)},P,{children:N})),N.pop()]}))})):e.jsx(U.Provider,{value:X,children:e.jsxs(E,l({},_,{as:W,ref:ie},!ne(E)&&{ownerState:l({},O,_.ownerState)},P,{children:[N,Q&&e.jsx(Oe,{children:Q})]}))})}),a=Je,Ke=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],Qe=t=>{const{classes:i,inset:n,primary:s,secondary:c,dense:m}=t;return z({root:["root",n&&"inset",m&&"dense",s&&c&&"multiline"],primary:["primary"],secondary:["secondary"]},Ie,i)},Ze=V("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:n}=t;return[{[`& .${re.primary}`]:i.primary},{[`& .${re.secondary}`]:i.secondary},i.root,n.inset&&i.inset,n.primary&&n.secondary&&i.multiline,n.dense&&i.dense]}})(({ownerState:t})=>l({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})),et=b.forwardRef(function(i,n){const s=H({props:i,name:"MuiListItemText"}),{children:c,className:m,disableTypography:d=!1,inset:h=!1,primary:j,primaryTypographyProps:f,secondary:D,secondaryTypographyProps:S}=s,w=q(s,Ke),{dense:A}=b.useContext(U);let y=j??c,v=D;const T=l({},s,{disableTypography:d,inset:h,primary:!!y,secondary:!!v,dense:A}),k=Qe(T);return y!=null&&y.type!==x&&!d&&(y=e.jsx(x,l({variant:A?"body2":"body1",className:k.primary,component:f!=null&&f.variant?void 0:"span",display:"block"},f,{children:y}))),v!=null&&v.type!==x&&!d&&(v=e.jsx(x,l({variant:"body2",className:k.secondary,color:"text.secondary",display:"block"},S,{children:v}))),e.jsxs(Ze,l({className:$(k.root,m),ownerState:T,ref:n},w,{children:[y,v]}))}),o=et,tt="@novatics/divider",it="0.2.2",rt="./index.js",nt="./index.d.ts",st={".":{import:"./index.mjs",require:"./index.js"}},at={name:tt,version:it,main:rt,types:nt,exports:st},r=t=>ae($e,{...t});try{r.displayName="Divider",r.__docgenInfo={description:"",displayName:"Divider",props:{absolute:{defaultValue:{value:"false"},description:"Absolutely position the element.",name:"absolute",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<DividerClasses> & Partial<ClassNameMap<never>>"}},flexItem:{defaultValue:{value:"false"},description:"If `true`, a vertical divider will have the correct height when used in flex container.\n(By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)",name:"flexItem",required:!1,type:{name:"boolean"}},light:{defaultValue:{value:"false"},description:"If `true`, the divider will have a lighter color.",name:"light",required:!1,type:{name:"boolean"}},orientation:{defaultValue:{value:"'horizontal'"},description:"The component orientation.",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},textAlign:{defaultValue:{value:"'center'"},description:"The text alignment.",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"center"'}]}},variant:{defaultValue:{value:"'fullWidth'"},description:"The variant to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"inset"'},{value:'"fullWidth"'},{value:'"middle"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLHRElement>"}}}}}catch{}try{divider.displayName="divider",divider.__docgenInfo={description:"",displayName:"divider",props:{absolute:{defaultValue:{value:"false"},description:"Absolutely position the element.",name:"absolute",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<DividerClasses> & Partial<ClassNameMap<never>>"}},flexItem:{defaultValue:{value:"false"},description:"If `true`, a vertical divider will have the correct height when used in flex container.\n(By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)",name:"flexItem",required:!1,type:{name:"boolean"}},light:{defaultValue:{value:"false"},description:"If `true`, the divider will have a lighter color.",name:"light",required:!1,type:{name:"boolean"}},orientation:{defaultValue:{value:"'horizontal'"},description:"The component orientation.",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},textAlign:{defaultValue:{value:"'center'"},description:"The text alignment.",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"center"'}]}},variant:{defaultValue:{value:"'fullWidth'"},description:"The variant to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"inset"'},{value:'"fullWidth"'},{value:'"middle"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLHRElement>"}}}}}catch{}try{getDividerUtilityClass.displayName="getDividerUtilityClass",getDividerUtilityClass.__docgenInfo={description:"",displayName:"getDividerUtilityClass",props:{}}}catch{}const L=()=>ae(x,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed malesuada lobortis pretium."});function ot(t={}){const{wrapper:i}=Object.assign({},se(),t.components);return i?e.jsx(i,{...t,children:e.jsx(n,{})}):n();function n(){const s=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre",a:"a",div:"div"},se(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(Se,{title:"Divider",component:r}),`
`,e.jsxs(s.h1,{id:"divider-",children:["Divider ",e.jsx("img",{src:`https://img.shields.io/badge/Version-v${at.version}-brightgreenn`})]}),`
`,e.jsx(s.h3,{id:"installation",children:"Installation"}),`
`,e.jsxs(s.p,{children:["First install the latest version of the package from ",e.jsx(s.code,{children:"@novatics/divider"}),"."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-shell",children:`  yarn add -D @novatics/divider
`})}),`
`,e.jsx(s.h3,{id:"dependencies",children:"Dependencies"}),`
`,e.jsxs(s.p,{children:["This component extends ",e.jsx(s.a,{href:"https://mui.com/material-ui/react-divider/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Material UI React Divider"}),". Therefore is needed to install Material UI:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-bash",children:`yarn add @mui/material
`})}),`
`,e.jsx(s.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(G,{children:e.jsx(M,{name:"Basic Usage",children:e.jsxs("div",{children:[e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Inbox"})}),e.jsx(r,{variant:"fullWidth"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Drafts"})})]})})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import Divider from '@novatics/divider';

...
       <div>
          <Divider {...args} />
        </div>
...

`})}),`
`,e.jsx(s.h3,{id:"variations",children:"Variations"}),`
`,e.jsx(G,{children:e.jsx(M,{name:"Variations",children:e.jsxs(p,{container:!0,spacing:2,children:[e.jsx(p,{item:!0,xxs:6,sm:4,md:3,xl:2,xxl:1,children:e.jsxs(u,{children:[e.jsx(x,{children:"Full width"}),e.jsx(g,{elevation:5,children:e.jsxs(I,{component:"nav",children:[e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Inbox"})}),e.jsx(r,{variant:"fullWidth"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Drafts"})}),e.jsx(r,{variant:"fullWidth"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Trash"})}),e.jsx(r,{variant:"fullWidth"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Spam"})})]})})]})}),e.jsx(p,{item:!0,xxs:6,sm:4,md:3,xl:2,xxl:1,children:e.jsxs(u,{children:[e.jsx(x,{children:"Inset"}),e.jsx(g,{elevation:5,children:e.jsxs(I,{component:"nav",children:[e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Inbox"})}),e.jsx(r,{variant:"inset"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Drafts"})}),e.jsx(r,{variant:"inset"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Trash"})}),e.jsx(r,{variant:"inset"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Spam"})})]})})]})}),e.jsx(p,{item:!0,xxs:6,sm:4,md:3,xl:2,xxl:1,children:e.jsxs(u,{children:[e.jsx(x,{children:"Middle"}),e.jsx(g,{elevation:5,children:e.jsxs(I,{component:"nav",children:[e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Inbox"})}),e.jsx(r,{variant:"middle"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Drafts"})}),e.jsx(r,{variant:"middle"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Trash"})}),e.jsx(r,{variant:"middle"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Spam"})})]})})]})}),e.jsx(p,{item:!0,xxs:6,sm:4,md:3,xl:2,xxl:1,children:e.jsxs(u,{children:[e.jsx(x,{children:"String"}),e.jsx(g,{elevation:5,children:e.jsxs(I,{component:"nav",children:[e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Inbox"})}),e.jsx(r,{variant:"string"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Drafts"})}),e.jsx(r,{variant:"string"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Trash"})}),e.jsx(r,{variant:"string"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Spam"})})]})})]})})]})})}),`
`,e.jsx(s.h3,{id:"orientation",children:"Orientation"}),`
`,e.jsx(G,{children:e.jsx(M,{name:"Orientation",children:e.jsxs(p,{container:!0,spacing:2,children:[e.jsx(p,{item:!0,xxs:6,children:e.jsxs(u,{children:[e.jsx(x,{children:"Horizontal"}),e.jsx(g,{elevation:5,children:e.jsxs(I,{component:"nav",children:[e.jsx(a,{button:!0,children:e.jsx(o,{primary:"fullWidth"})}),e.jsx(r,{variant:"fullWidth"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"inset"})}),e.jsx(r,{variant:"inset"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"middle"})}),e.jsx(r,{variant:"middle"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"."})})]})})]})}),e.jsx(p,{item:!0,xxs:6,children:e.jsxs(u,{height:"100%",children:[e.jsx(x,{children:"Vertical"}),e.jsx(g,{elevation:5,sx:{flex:"1"},children:e.jsxs(u,{direction:"row",height:"100%",textAlign:"center",alignItems:"center",children:[e.jsx(C,{height:"50px",minWidth:"50px",width:"25%",children:e.jsx(s.p,{children:"fullWidth >"})}),e.jsx(r,{flexItem:!0,orientation:"vertical",variant:"fullWidth"}),e.jsx(C,{height:"50px",minWidth:"50px",width:"25%",children:e.jsx(s.p,{children:"middle >"})}),e.jsx(r,{flexItem:!0,orientation:"vertical",variant:"middle"}),e.jsx(C,{height:"50px",minWidth:"50px",width:"25%",children:e.jsx(s.p,{children:"string >"})}),e.jsx(r,{flexItem:!0,orientation:"vertical",variant:"string"}),e.jsx(C,{height:"50px",minWidth:"50px",width:"25%",children:e.jsx(s.p,{children:"."})})]})})]})})]})})}),`
`,e.jsx(s.h3,{id:"with-text",children:"With Text"}),`
`,e.jsx(G,{children:e.jsx(M,{name:"With Text",children:e.jsxs(u,{spacing:4,children:[e.jsx(L,{}),e.jsx(r,{children:"CENTER"}),e.jsx(L,{}),e.jsx(r,{textAlign:"left",children:"LEFT"}),e.jsx(L,{}),e.jsx(r,{textAlign:"right",children:"RIGHT"}),e.jsx(L,{}),e.jsx(r,{children:e.jsx(le,{label:"CHIP"})}),e.jsx(L,{})]})})}),`
`,e.jsx(s.h3,{id:"playground",children:"Playground"}),`
`,e.jsx(G,{children:e.jsx(M,{name:"Playground",argTypes:{error:!1,checked:!1},children:c=>e.jsxs(s.div,{children:[e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Inbox"})}),e.jsx(r,{variant:"fullWidth",...c}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Drafts"})})]})})}),`
`,e.jsx(Pe,{story:"Playground"}),`
`,e.jsx(s.p,{children:"made by Novatics ❤"})]})}}const ce=()=>e.jsxs("div",{children:[e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Inbox"})}),e.jsx(r,{variant:"fullWidth"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Drafts"})})]});ce.storyName="Basic Usage";ce.parameters={storySource:{source:'<div><ListItem button><ListItemText primary="Inbox" /></ListItem><Divider variant="fullWidth" /><ListItem button><ListItemText primary="Drafts" /></ListItem></div>'}};const me=()=>e.jsxs(p,{container:!0,spacing:2,children:[e.jsx(p,{item:!0,xxs:6,sm:4,md:3,xl:2,xxl:1,children:e.jsxs(u,{children:[e.jsx(x,{children:"Full width"}),e.jsx(g,{elevation:5,children:e.jsxs(I,{component:"nav",children:[e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Inbox"})}),e.jsx(r,{variant:"fullWidth"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Drafts"})}),e.jsx(r,{variant:"fullWidth"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Trash"})}),e.jsx(r,{variant:"fullWidth"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Spam"})})]})})]})}),e.jsx(p,{item:!0,xxs:6,sm:4,md:3,xl:2,xxl:1,children:e.jsxs(u,{children:[e.jsx(x,{children:"Inset"}),e.jsx(g,{elevation:5,children:e.jsxs(I,{component:"nav",children:[e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Inbox"})}),e.jsx(r,{variant:"inset"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Drafts"})}),e.jsx(r,{variant:"inset"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Trash"})}),e.jsx(r,{variant:"inset"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Spam"})})]})})]})}),e.jsx(p,{item:!0,xxs:6,sm:4,md:3,xl:2,xxl:1,children:e.jsxs(u,{children:[e.jsx(x,{children:"Middle"}),e.jsx(g,{elevation:5,children:e.jsxs(I,{component:"nav",children:[e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Inbox"})}),e.jsx(r,{variant:"middle"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Drafts"})}),e.jsx(r,{variant:"middle"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Trash"})}),e.jsx(r,{variant:"middle"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Spam"})})]})})]})}),e.jsx(p,{item:!0,xxs:6,sm:4,md:3,xl:2,xxl:1,children:e.jsxs(u,{children:[e.jsx(x,{children:"String"}),e.jsx(g,{elevation:5,children:e.jsxs(I,{component:"nav",children:[e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Inbox"})}),e.jsx(r,{variant:"string"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Drafts"})}),e.jsx(r,{variant:"string"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Trash"})}),e.jsx(r,{variant:"string"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Spam"})})]})})]})})]});me.storyName="Variations";me.parameters={storySource:{source:'<Grid container spacing={2}><Grid item xxs={6} sm={4} md={3} xl={2} xxl={1}><Stack><Typography>{"Full width"}</Typography><Paper elevation={5}><List component="nav"><ListItem button><ListItemText primary="Inbox" /></ListItem><Divider variant="fullWidth" /><ListItem button><ListItemText primary="Drafts" /></ListItem><Divider variant="fullWidth" /><ListItem button><ListItemText primary="Trash" /></ListItem><Divider variant="fullWidth" /><ListItem button><ListItemText primary="Spam" /></ListItem></List></Paper></Stack></Grid><Grid item xxs={6} sm={4} md={3} xl={2} xxl={1}><Stack><Typography>{"Inset"}</Typography><Paper elevation={5}><List component="nav"><ListItem button><ListItemText primary="Inbox" /></ListItem><Divider variant="inset" /><ListItem button><ListItemText primary="Drafts" /></ListItem><Divider variant="inset" /><ListItem button><ListItemText primary="Trash" /></ListItem><Divider variant="inset" /><ListItem button><ListItemText primary="Spam" /></ListItem></List></Paper></Stack></Grid><Grid item xxs={6} sm={4} md={3} xl={2} xxl={1}><Stack><Typography>{"Middle"}</Typography><Paper elevation={5}><List component="nav"><ListItem button><ListItemText primary="Inbox" /></ListItem><Divider variant="middle" /><ListItem button><ListItemText primary="Drafts" /></ListItem><Divider variant="middle" /><ListItem button><ListItemText primary="Trash" /></ListItem><Divider variant="middle" /><ListItem button><ListItemText primary="Spam" /></ListItem></List></Paper></Stack></Grid><Grid item xxs={6} sm={4} md={3} xl={2} xxl={1}><Stack><Typography>{"String"}</Typography><Paper elevation={5}><List component="nav"><ListItem button><ListItemText primary="Inbox" /></ListItem><Divider variant="string" /><ListItem button><ListItemText primary="Drafts" /></ListItem><Divider variant="string" /><ListItem button><ListItemText primary="Trash" /></ListItem><Divider variant="string" /><ListItem button><ListItemText primary="Spam" /></ListItem></List></Paper></Stack></Grid></Grid>'}};const xe=()=>e.jsxs(p,{container:!0,spacing:2,children:[e.jsx(p,{item:!0,xxs:6,children:e.jsxs(u,{children:[e.jsx(x,{children:"Horizontal"}),e.jsx(g,{elevation:5,children:e.jsxs(I,{component:"nav",children:[e.jsx(a,{button:!0,children:e.jsx(o,{primary:"fullWidth"})}),e.jsx(r,{variant:"fullWidth"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"inset"})}),e.jsx(r,{variant:"inset"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"middle"})}),e.jsx(r,{variant:"middle"}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"."})})]})})]})}),e.jsx(p,{item:!0,xxs:6,children:e.jsxs(u,{height:"100%",children:[e.jsx(x,{children:"Vertical"}),e.jsx(g,{elevation:5,sx:{flex:"1"},children:e.jsxs(u,{direction:"row",height:"100%",textAlign:"center",alignItems:"center",children:[e.jsx(C,{height:"50px",minWidth:"50px",width:"25%",children:e.jsx("p",{children:"fullWidth >"})}),e.jsx(r,{flexItem:!0,orientation:"vertical",variant:"fullWidth"}),e.jsx(C,{height:"50px",minWidth:"50px",width:"25%",children:e.jsx("p",{children:"middle >"})}),e.jsx(r,{flexItem:!0,orientation:"vertical",variant:"middle"}),e.jsx(C,{height:"50px",minWidth:"50px",width:"25%",children:e.jsx("p",{children:"string >"})}),e.jsx(r,{flexItem:!0,orientation:"vertical",variant:"string"}),e.jsx(C,{height:"50px",minWidth:"50px",width:"25%",children:e.jsx("p",{children:"."})})]})})]})})]});xe.storyName="Orientation";xe.parameters={storySource:{source:`<Grid container spacing={2}><Grid item xxs={6}><Stack><Typography>{"Horizontal"}</Typography><Paper elevation={5}><List component="nav"><ListItem button><ListItemText primary="fullWidth" /></ListItem><Divider variant="fullWidth" /><ListItem button><ListItemText primary="inset" /></ListItem><Divider variant="inset" /><ListItem button><ListItemText primary="middle" /></ListItem><Divider variant="middle" /><ListItem button><ListItemText primary="." /></ListItem></List></Paper></Stack></Grid><Grid item xxs={6}><Stack height="100%"><Typography>{"Vertical"}</Typography><Paper elevation={5} sx={{
        flex: "1"
      }}><Stack direction="row" height="100%" textAlign="center" alignItems="center"><Box height="50px" minWidth="50px" width="25%"><p>{"fullWidth >"}</p></Box><Divider flexItem orientation="vertical" variant="fullWidth" /><Box height="50px" minWidth="50px" width="25%"><p>{"middle >"}</p></Box><Divider flexItem orientation="vertical" variant="middle" /><Box height="50px" minWidth="50px" width="25%"><p>{"string >"}</p></Box><Divider flexItem orientation="vertical" variant="string" /><Box height="50px" minWidth="50px" width="25%"><p>{"."}</p></Box></Stack></Paper></Stack></Grid></Grid>`}};const pe=()=>e.jsxs(u,{spacing:4,children:[e.jsx(L,{}),e.jsx(r,{children:"CENTER"}),e.jsx(L,{}),e.jsx(r,{textAlign:"left",children:"LEFT"}),e.jsx(L,{}),e.jsx(r,{textAlign:"right",children:"RIGHT"}),e.jsx(L,{}),e.jsx(r,{children:e.jsx(le,{label:"CHIP"})}),e.jsx(L,{})]});pe.storyName="With Text";pe.parameters={storySource:{source:'<Stack spacing={4}><Content /><Divider>{"CENTER"}</Divider><Content /><Divider textAlign="left">{"LEFT"}</Divider><Content /><Divider textAlign="right">{"RIGHT"}</Divider><Content /><Divider><Chip label="CHIP" /></Divider><Content /></Stack>'}};const K=t=>e.jsxs("div",{children:[e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Inbox"})}),e.jsx(r,{variant:"fullWidth",...t}),e.jsx(a,{button:!0,children:e.jsx(o,{primary:"Drafts"})})]});K.storyName="Playground";K.argTypes={error:!1,checked:!1};K.parameters={storySource:{source:`args => {
  return <div>
          <ListItem button>
            <ListItemText primary="Inbox" />
          </ListItem>
          <Divider variant="fullWidth" {...args} />
          <ListItem button>
            <ListItemText primary="Drafts" />
          </ListItem>
        </div>;
}`}};const F={title:"Divider",component:r,tags:["stories-mdx"],includeStories:["basicUsage","variations","orientation","withText","playground"]};F.parameters=F.parameters||{};F.parameters.docs={...F.parameters.docs||{},page:ot};const Mt=["basicUsage","variations","orientation","withText","playground"];export{Mt as __namedExportsOrder,ce as basicUsage,F as default,xe as orientation,K as playground,me as variations,pe as withText};
//# sourceMappingURL=divider.stories-b3b8d3ce.js.map
