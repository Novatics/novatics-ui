import{r as I}from"./index-ebeaab24.js";import"./blocks-2646952b.js";import{r as ne,i as ae}from"./createSvgIcon-65744b59.js";import{j as e}from"./jsx-runtime-5926aa06.js";import{j as _}from"./emotion-react-jsx-runtime.browser.esm-ca0fbee5.js";import{B as ie}from"./Button-b344ecf4.js";import{g as u,c as d,d as F,a as A,h as z,l as oe,i as re}from"./useThemeProps-5b804fee.js";import{g as U,a as W,s as b,c as O,b as H}from"./styled-81efc89c.js";import{k as G,c as X}from"./emotion-react.browser.esm-e8dd0f37.js";import{S as r}from"./Stack-ed38ddae.js";import{M as K}from"./FormControlLabel-5ffb76e2.js";import{S as se}from"./SwitchBase-26cd9571.js";import{u as N}from"./index-bda0bad7.js";import{M as le,C as j,S}from"./index-9d6231e8.js";import"./createSvgIcon-b5d29c30.js";import"./useId-50ce759f.js";import"./TransitionGroupContext-9e5a73a2.js";import"./useControlled-5355145e.js";import"./isMuiElement-b72c78c9.js";import"./ButtonBase-98335413.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-724eea7b.js";import"./styled-43e0f763.js";import"./extendSxProp-618f47f1.js";import"./formControlState-a1fb9590.js";import"./useFormControl-0ef100e1.js";import"./Typography-83d108b6.js";import"./iframe-c40d720f.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ce6f85b9.js";import"./index-356e4a49.js";function ce(t){return U("MuiCircularProgress",t)}W("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const de=["className","color","disableShrink","size","style","thickness","value","variant"];let C=t=>t,M,E,D,L;const f=44,ue=G(M||(M=C`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),pe=G(E||(E=C`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),he=t=>{const{classes:n,variant:o,color:i,disableShrink:c}=t,s={root:["root",o,`color${u(i)}`],svg:["svg"],circle:["circle",`circle${u(o)}`,c&&"circleDisableShrink"]};return H(s,ce,n)},me=b("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:o}=t;return[n.root,n[o.variant],n[`color${u(o.color)}`]]}})(({ownerState:t,theme:n})=>d({display:"inline-block"},t.variant==="determinate"&&{transition:n.transitions.create("transform")},t.color!=="inherit"&&{color:(n.vars||n).palette[t.color].main}),({ownerState:t})=>t.variant==="indeterminate"&&X(D||(D=C`
      animation: ${0} 1.4s linear infinite;
    `),ue)),fe=b("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,n)=>n.svg})({display:"block"}),ge=b("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,n)=>{const{ownerState:o}=t;return[n.circle,n[`circle${u(o.variant)}`],o.disableShrink&&n.circleDisableShrink]}})(({ownerState:t,theme:n})=>d({stroke:"currentColor"},t.variant==="determinate"&&{transition:n.transitions.create("stroke-dashoffset")},t.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:t})=>t.variant==="indeterminate"&&!t.disableShrink&&X(L||(L=C`
      animation: ${0} 1.4s ease-in-out infinite;
    `),pe)),ve=I.forwardRef(function(n,o){const i=F({props:n,name:"MuiCircularProgress"}),{className:c,color:s="primary",disableShrink:g=!1,size:v=40,style:y,thickness:x=3.6,value:p=0,variant:m="indeterminate"}=i,k=A(i,de),w=d({},i,{color:s,disableShrink:g,size:v,thickness:x,value:p,variant:m}),R=he(w),V={},P={},T={};if(m==="determinate"){const $=2*Math.PI*((f-x)/2);V.strokeDasharray=$.toFixed(3),T["aria-valuenow"]=Math.round(p),V.strokeDashoffset=`${((100-p)/100*$).toFixed(3)}px`,P.transform="rotate(-90deg)"}return e.jsx(me,d({className:O(R.root,c),style:d({width:v,height:v},P,y),ownerState:w,ref:o,role:"progressbar"},T,k,{children:e.jsx(fe,{className:R.svg,ownerState:w,viewBox:`${f/2} ${f/2} ${f} ${f}`,children:e.jsx(ge,{className:R.circle,style:V,ownerState:w,cx:f,cy:f,r:(f-x)/2,fill:"none",strokeWidth:x})})}))}),be=ve;function xe(t){return U("MuiSwitch",t)}const ye=W("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),l=ye,je=["className","color","edge","size","sx"],Se=t=>{const{classes:n,edge:o,size:i,color:c,checked:s,disabled:g}=t,v={root:["root",o&&`edge${u(o)}`,`size${u(i)}`],switchBase:["switchBase",`color${u(c)}`,s&&"checked",g&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},y=H(v,xe,n);return d({},n,y)},ke=b("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:o}=t;return[n.root,o.edge&&n[`edge${u(o.edge)}`],n[`size${u(o.size)}`]]}})(({ownerState:t})=>d({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},t.edge==="start"&&{marginLeft:-8},t.edge==="end"&&{marginRight:-8},t.size==="small"&&{width:40,height:24,padding:7,[`& .${l.thumb}`]:{width:16,height:16},[`& .${l.switchBase}`]:{padding:4,[`&.${l.checked}`]:{transform:"translateX(16px)"}}})),we=b(se,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,n)=>{const{ownerState:o}=t;return[n.switchBase,{[`& .${l.input}`]:n.input},o.color!=="default"&&n[`color${u(o.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${l.checked}`]:{transform:"translateX(20px)"},[`&.${l.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${l.checked} + .${l.track}`]:{opacity:.5},[`&.${l.disabled} + .${l.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${l.input}`]:{left:"-100%",width:"300%"}}),({theme:t,ownerState:n})=>d({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:z(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},n.color!=="default"&&{[`&.${l.checked}`]:{color:(t.vars||t).palette[n.color].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[n.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:z(t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${l.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${n.color}DisabledColor`]:`${t.palette.mode==="light"?oe(t.palette[n.color].main,.62):re(t.palette[n.color].main,.55)}`}},[`&.${l.checked} + .${l.track}`]:{backgroundColor:(t.vars||t).palette[n.color].main}})),Be=b("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,n)=>n.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),Ie=b("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,n)=>n.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),Ce=I.forwardRef(function(n,o){const i=F({props:n,name:"MuiSwitch"}),{className:c,color:s="primary",edge:g=!1,size:v="medium",sx:y}=i,x=A(i,je),p=d({},i,{color:s,edge:g,size:v}),m=Se(p),k=e.jsx(Ie,{className:m.thumb,ownerState:p});return e.jsxs(ke,{className:O(m.root,c),sx:y,ownerState:p,children:[e.jsx(we,d({type:"checkbox",icon:k,checkedIcon:k,ref:o,ownerState:p},x,{classes:d({},m,{root:m.switchBase})})),e.jsx(Be,{className:m.track,ownerState:p})]})}),Z=Ce;var q={},Re=ae;Object.defineProperty(q,"__esModule",{value:!0});var h=q.default=void 0,Ve=Re(ne()),qe=e,Pe=(0,Ve.default)((0,qe.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");h=q.default=Pe;const a=t=>{const{loading:n=!1,loadingPosition:o="center"}=t;return _(ie,{...t,...(()=>{if(!n)return{};const c=t.loadingIndicator??_(be,{color:"inherit",size:16});return{disabled:!0,[o==="center"?"children":o+"Icon"]:c}})()})};try{a.displayName="Button",a.__docgenInfo={description:"",displayName:"Button",props:{loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},loadingIndicator:{defaultValue:null,description:"",name:"loadingIndicator",required:!1,type:{name:"ReactNode"}},loadingPosition:{defaultValue:null,description:"",name:"loadingPosition",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'}]}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ButtonClasses> & Partial<ClassNameMap<never>>"}},color:{defaultValue:{value:"'primary'"},description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).`,name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"info"'},{value:'"warning"'}]}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},disableElevation:{defaultValue:{value:"false"},description:"If `true`, no elevation is used.",name:"disableElevation",required:!1,type:{name:"boolean"}},disableFocusRipple:{defaultValue:{value:"false"},description:"If `true`, the  keyboard focus ripple is disabled.",name:"disableFocusRipple",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:null,description:"Element placed after the children.",name:"endIcon",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the button will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"The URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.\n`small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},startIcon:{defaultValue:null,description:"Element placed before the children.",name:"startIcon",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},variant:{defaultValue:{value:"'text'"},description:"The variant to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"outlined"'},{value:'"contained"'}]}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},centerRipple:{defaultValue:{value:"false"},description:"If `true`, the ripples are centered.\nThey won't start at the cursor interaction position.",name:"centerRipple",required:!1,type:{name:"boolean"}},disableRipple:{defaultValue:{value:"false"},description:"If `true`, the ripple effect is disabled.\n\n⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure\nto highlight the element by applying separate styles with the `.Mui-focusVisible` class.",name:"disableRipple",required:!1,type:{name:"boolean"}},disableTouchRipple:{defaultValue:{value:"false"},description:"If `true`, the touch ripple effect is disabled.",name:"disableTouchRipple",required:!1,type:{name:"boolean"}},focusRipple:{defaultValue:{value:"false"},description:"If `true`, the base button will have a keyboard focus ripple.",name:"focusRipple",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},TouchRippleProps:{defaultValue:null,description:"Props applied to the `TouchRipple` element.",name:"TouchRippleProps",required:!1,type:{name:"Partial<TouchRippleProps>"}},touchRippleRef:{defaultValue:null,description:"A ref that points to the `TouchRipple` element.",name:"touchRippleRef",required:!1,type:{name:"Ref<TouchRippleActions>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}}}}}catch{}try{button.displayName="button",button.__docgenInfo={description:"",displayName:"button",props:{loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},loadingIndicator:{defaultValue:null,description:"",name:"loadingIndicator",required:!1,type:{name:"ReactNode"}},loadingPosition:{defaultValue:null,description:"",name:"loadingPosition",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'}]}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ButtonClasses> & Partial<ClassNameMap<never>>"}},color:{defaultValue:{value:"'primary'"},description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).`,name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"info"'},{value:'"warning"'}]}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},disableElevation:{defaultValue:{value:"false"},description:"If `true`, no elevation is used.",name:"disableElevation",required:!1,type:{name:"boolean"}},disableFocusRipple:{defaultValue:{value:"false"},description:"If `true`, the  keyboard focus ripple is disabled.",name:"disableFocusRipple",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:null,description:"Element placed after the children.",name:"endIcon",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the button will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"The URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.\n`small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},startIcon:{defaultValue:null,description:"Element placed before the children.",name:"startIcon",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},variant:{defaultValue:{value:"'text'"},description:"The variant to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"outlined"'},{value:'"contained"'}]}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},centerRipple:{defaultValue:{value:"false"},description:"If `true`, the ripples are centered.\nThey won't start at the cursor interaction position.",name:"centerRipple",required:!1,type:{name:"boolean"}},disableRipple:{defaultValue:{value:"false"},description:"If `true`, the ripple effect is disabled.\n\n⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure\nto highlight the element by applying separate styles with the `.Mui-focusVisible` class.",name:"disableRipple",required:!1,type:{name:"boolean"}},disableTouchRipple:{defaultValue:{value:"false"},description:"If `true`, the touch ripple effect is disabled.",name:"disableTouchRipple",required:!1,type:{name:"boolean"}},focusRipple:{defaultValue:{value:"false"},description:"If `true`, the base button will have a keyboard focus ripple.",name:"focusRipple",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},TouchRippleProps:{defaultValue:null,description:"Props applied to the `TouchRipple` element.",name:"TouchRippleProps",required:!1,type:{name:"Partial<TouchRippleProps>"}},touchRippleRef:{defaultValue:null,description:"A ref that points to the `TouchRipple` element.",name:"touchRippleRef",required:!1,type:{name:"Ref<TouchRippleActions>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}}}}}catch{}try{getButtonUtilityClass.displayName="getButtonUtilityClass",getButtonUtilityClass.__docgenInfo={description:"",displayName:"getButtonUtilityClass",props:{}}}catch{}const Te="@novatics/button",$e="0.0.1",_e="./index.js",ze="./index.d.ts",Ne={".":{import:"./index.mjs",require:"./index.js"}},Me={name:Te,version:$e,main:_e,types:ze,exports:Ne};function Ee(t={}){const{wrapper:n}=Object.assign({},N(),t.components);return n?e.jsx(n,{...t,children:e.jsx(o,{})}):o();function o(){const i=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre"},N(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(le,{title:"Button",component:a}),`
`,e.jsxs(i.h1,{id:"button-",children:["Button ",e.jsx("img",{src:`https://img.shields.io/badge/Version-v${Me.version}-brightgreenn`})]}),`
`,e.jsx(i.h3,{id:"installation",children:"Installation"}),`
`,e.jsxs(i.p,{children:["First install the latest version of the package from ",e.jsx(i.code,{children:"@novatics/button"}),"."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-shell",children:`  yarn add -D @novatics/button
`})}),`
`,e.jsx(i.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"Button"})," component have three variants: it supports outlined, contained and only text styling. The default variant is ",e.jsx(i.code,{children:"text"}),"."]}),`
`,e.jsx(j,{children:e.jsx(S,{name:"Basic Usage",children:c=>e.jsxs(r,{spacing:3,children:[e.jsxs(r,{spacing:2,direction:"row",children:[e.jsx(a,{variant:"contained",children:"Button"}),e.jsx(a,{variant:"outlined",children:"Button"}),e.jsx(a,{variant:"text",children:"Button"})]}),e.jsxs(r,{spacing:2,direction:"row",children:[e.jsx(a,{disabled:!0,variant:"contained",children:"Disabled"}),e.jsx(a,{disabled:!0,variant:"outlined",children:"Disabled"}),e.jsx(a,{disabled:!0,variant:"text",children:"Disabled"})]})]})})}),`
`,e.jsx(i.h3,{id:"size",children:"Size"}),`
`,e.jsxs(i.p,{children:["A ",e.jsx(i.code,{children:"Button"})," can be small, medium or large. The default size is medium."]}),`
`,e.jsx(j,{children:e.jsx(S,{name:"Size",children:c=>e.jsxs(r,{spacing:2,direction:"row",children:[e.jsx(a,{variant:"contained",size:"small",children:"Button"}),e.jsx(a,{variant:"contained",children:"Button"}),e.jsx(a,{variant:"contained",size:"large",children:"Button"})]})})}),`
`,e.jsx(i.h3,{id:"icon",children:"Icon"}),`
`,e.jsxs(i.p,{children:["A ",e.jsx(i.code,{children:"Button"})," can also have icons, that can be placed on the left or right of the button."]}),`
`,e.jsx(j,{children:e.jsx(S,{name:"Icon",children:c=>e.jsxs(r,{spacing:2,direction:"row",children:[e.jsx(a,{variant:"contained",startIcon:e.jsx(h,{}),children:"Send"}),e.jsx(a,{variant:"contained",endIcon:e.jsx(h,{}),children:"Send"})]})})}),`
`,e.jsx(i.h3,{id:"colors",children:"Colors"}),`
`,e.jsx(i.p,{children:"A 'Button' can display a range of colors in addition to the default."}),`
`,e.jsx(j,{children:e.jsx(S,{name:"Colors",children:c=>e.jsxs(r,{spacing:3,children:[e.jsxs(r,{spacing:2,direction:"row",children:[e.jsx(a,{variant:"outlined",children:"Primary"}),e.jsx(a,{variant:"outlined",color:"error",children:"Error"}),e.jsx(a,{variant:"outlined",color:"success",children:"Success"})]}),e.jsxs(r,{spacing:2,direction:"row",children:[e.jsx(a,{variant:"text",children:"Primary"}),e.jsx(a,{variant:"text",color:"error",children:"Error"}),e.jsx(a,{variant:"text",color:"success",children:"Success"}),e.jsx(a,{variant:"text",color:"secondary",children:"Secondary"})]})]})})}),`
`,e.jsx(i.h3,{id:"loading",children:"Loading"}),`
`,e.jsxs(i.p,{children:["A 'Button' can also present a loading state. By default, it will present ",e.jsx(i.code,{children:"CircularProgress"})," in the center as the indicator."]}),`
`,e.jsx(j,{children:e.jsx(S,{name:"Loading",children:c=>{const[s,g]=I.useState(!0);return e.jsxs(r,{spacing:3,children:[e.jsx(K,{sx:{display:"block"},control:e.jsx(Z,{checked:s,onChange:()=>g(!s),name:"loading",color:"primary"}),label:"Loading"}),e.jsxs(r,{spacing:2,direction:"row",children:[e.jsx(a,{variant:"contained",loading:s,children:"Submit"}),e.jsx(a,{variant:"outlined",loading:s,children:"Submit"}),e.jsx(a,{variant:"text",loading:s,children:"Submit"})]}),e.jsxs(r,{spacing:2,direction:"row",children:[e.jsx(a,{variant:"contained",loading:s,loadingPosition:"center",loadingIndicator:"Loading...",children:"Submit"}),e.jsx(a,{variant:"contained",loading:s,loadingPosition:"start",startIcon:e.jsx(h,{}),children:"Submit"}),e.jsx(a,{variant:"contained",loading:s,loadingPosition:"end",endIcon:e.jsx(h,{}),children:"Submit"})]})]})}})}),`
`,e.jsx(i.p,{children:"made by Novatics ❤"})]})}}const J=t=>e.jsxs(r,{spacing:3,children:[e.jsxs(r,{spacing:2,direction:"row",children:[e.jsx(a,{variant:"contained",children:"Button"}),e.jsx(a,{variant:"outlined",children:"Button"}),e.jsx(a,{variant:"text",children:"Button"})]}),e.jsxs(r,{spacing:2,direction:"row",children:[e.jsx(a,{disabled:!0,variant:"contained",children:"Disabled"}),e.jsx(a,{disabled:!0,variant:"outlined",children:"Disabled"}),e.jsx(a,{disabled:!0,variant:"text",children:"Disabled"})]})]});J.storyName="Basic Usage";J.parameters={storySource:{source:`args => {
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
}`}};const Q=t=>e.jsxs(r,{spacing:2,direction:"row",children:[e.jsx(a,{variant:"contained",size:"small",children:"Button"}),e.jsx(a,{variant:"contained",children:"Button"}),e.jsx(a,{variant:"contained",size:"large",children:"Button"})]});Q.storyName="Size";Q.parameters={storySource:{source:`args => {
  return <Stack spacing={2} direction="row">
          <Button variant="contained" size="small">
            Button
          </Button>
          <Button variant="contained">Button</Button>
          <Button variant="contained" size="large">
            Button
          </Button>
        </Stack>;
}`}};const Y=t=>e.jsxs(r,{spacing:2,direction:"row",children:[e.jsx(a,{variant:"contained",startIcon:e.jsx(h,{}),children:"Send"}),e.jsx(a,{variant:"contained",endIcon:e.jsx(h,{}),children:"Send"})]});Y.storyName="Icon";Y.parameters={storySource:{source:`args => {
  return <Stack spacing={2} direction="row">
          <Button variant="contained" startIcon={<SendIcon />}>
            Send
          </Button>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Stack>;
}`}};const ee=t=>e.jsxs(r,{spacing:3,children:[e.jsxs(r,{spacing:2,direction:"row",children:[e.jsx(a,{variant:"outlined",children:"Primary"}),e.jsx(a,{variant:"outlined",color:"error",children:"Error"}),e.jsx(a,{variant:"outlined",color:"success",children:"Success"})]}),e.jsxs(r,{spacing:2,direction:"row",children:[e.jsx(a,{variant:"text",children:"Primary"}),e.jsx(a,{variant:"text",color:"error",children:"Error"}),e.jsx(a,{variant:"text",color:"success",children:"Success"}),e.jsx(a,{variant:"text",color:"secondary",children:"Secondary"})]})]});ee.storyName="Colors";ee.parameters={storySource:{source:`args => {
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
}`}};const te=t=>{const[n,o]=I.useState(!0);return e.jsxs(r,{spacing:3,children:[e.jsx(K,{sx:{display:"block"},control:e.jsx(Z,{checked:n,onChange:()=>o(!n),name:"loading",color:"primary"}),label:"Loading"}),e.jsxs(r,{spacing:2,direction:"row",children:[e.jsx(a,{variant:"contained",loading:n,children:"Submit"}),e.jsx(a,{variant:"outlined",loading:n,children:"Submit"}),e.jsx(a,{variant:"text",loading:n,children:"Submit"})]}),e.jsxs(r,{spacing:2,direction:"row",children:[e.jsx(a,{variant:"contained",loading:n,loadingPosition:"center",loadingIndicator:"Loading...",children:"Submit"}),e.jsx(a,{variant:"contained",loading:n,loadingPosition:"start",startIcon:e.jsx(h,{}),children:"Submit"}),e.jsx(a,{variant:"contained",loading:n,loadingPosition:"end",endIcon:e.jsx(h,{}),children:"Submit"})]})]})};te.storyName="Loading";te.parameters={storySource:{source:`args => {
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
}`}};const B={title:"Button",component:a,tags:["stories-mdx"],includeStories:["basicUsage","size","icon","colors","loading"]};B.parameters=B.parameters||{};B.parameters.docs={...B.parameters.docs||{},page:Ee};const gt=["basicUsage","size","icon","colors","loading"];export{gt as __namedExportsOrder,J as basicUsage,ee as colors,B as default,Y as icon,te as loading,Q as size};
//# sourceMappingURL=button.stories-eedd13c8.js.map
