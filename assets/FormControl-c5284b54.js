import{c as u,g as z,d as q,a as D}from"./useThemeProps-5b804fee.js";import{r as n}from"./index-ebeaab24.js";import{g as I,a as j,s as w,c as k,b as G}from"./styled-608cb78d.js";import{F as H}from"./useFormControl-0ef100e1.js";import{j as b}from"./jsx-runtime-5926aa06.js";import{i as F}from"./isMuiElement-b72c78c9.js";function P(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function U(e,r=!1){return e&&(P(e.value)&&e.value!==""||r&&P(e.defaultValue)&&e.defaultValue!=="")}function J(e){return e.startAdornment}function K(e){return I("MuiFormControl",e)}j("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const O=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],Q=e=>{const{classes:r,margin:a,fullWidth:s}=e,o={root:["root",a!=="none"&&`margin${z(a)}`,s&&"fullWidth"]};return G(o,K,r)},X=w("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},r)=>u({},r.root,r[`margin${z(e.margin)}`],e.fullWidth&&r.fullWidth)})(({ownerState:e})=>u({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},e.margin==="normal"&&{marginTop:16,marginBottom:8},e.margin==="dense"&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"})),Y=n.forwardRef(function(r,a){const s=q({props:r,name:"MuiFormControl"}),{children:o,className:B,color:d="primary",component:x="div",disabled:i=!1,error:m=!1,focused:v,fullWidth:c=!1,hiddenLabel:f=!1,margin:L="none",required:p=!1,size:g="medium",variant:h="outlined"}=s,T=D(s,O),S=u({},s,{color:d,component:x,disabled:i,error:m,fullWidth:c,hiddenLabel:f,margin:L,required:p,size:g,variant:h}),V=Q(S),[W,_]=n.useState(()=>{let l=!1;return o&&n.Children.forEach(o,t=>{if(!F(t,["Input","Select"]))return;const R=F(t,["Select"])?t.props.input:t;R&&J(R.props)&&(l=!0)}),l}),[y,A]=n.useState(()=>{let l=!1;return o&&n.Children.forEach(o,t=>{F(t,["Input","Select"])&&(U(t.props,!0)||U(t.props.inputProps,!0))&&(l=!0)}),l}),[E,C]=n.useState(!1);i&&E&&C(!1);const M=v!==void 0&&!i?v:E;let N;const $=n.useMemo(()=>({adornedStart:W,setAdornedStart:_,color:d,disabled:i,error:m,filled:y,focused:M,fullWidth:c,hiddenLabel:f,size:g,onBlur:()=>{C(!1)},onEmpty:()=>{A(!1)},onFilled:()=>{A(!0)},onFocus:()=>{C(!0)},registerEffect:N,required:p,variant:h}),[W,d,i,m,y,M,c,f,N,p,g,h]);return b.jsx(H.Provider,{value:$,children:b.jsx(X,u({as:x,ownerState:S,className:k(V.root,B),ref:a},T,{children:o}))})}),se=Y;export{se as F,U as i};
//# sourceMappingURL=FormControl-c5284b54.js.map
