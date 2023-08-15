import{c as i,f as F,g as L,h as x}from"./useThemeProps-09ff92e7.js";import{r as y}from"./index-f1f2c4b1.js";import{g as C,a as v,s as b,b as g,d as q}from"./styled-8d419bbb.js";import{f as k}from"./formControlState-a1fb9590.js";import{u as $}from"./useFormControl-1157a7e5.js";import{j as p}from"./jsx-runtime-d079401a.js";function R(r){return v("MuiFormLabel",r)}const j=C("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),t=j,M=["children","className","color","component","disabled","error","filled","focused","required"],S=r=>{const{classes:o,color:c,focused:s,disabled:d,error:a,filled:l,required:n}=r,m={root:["root",`color${x(c)}`,d&&"disabled",a&&"error",l&&"filled",s&&"focused",n&&"required"],asterisk:["asterisk",a&&"error"]};return q(m,R,o)},N=b("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:r},o)=>i({},o.root,r.color==="secondary"&&o.colorSecondary,r.filled&&o.filled)})(({theme:r,ownerState:o})=>i({color:(r.vars||r).palette.text.secondary},r.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${t.focused}`]:{color:(r.vars||r).palette[o.color].main},[`&.${t.disabled}`]:{color:(r.vars||r).palette.text.disabled},[`&.${t.error}`]:{color:(r.vars||r).palette.error.main}})),U=b("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(r,o)=>o.asterisk})(({theme:r})=>({[`&.${t.error}`]:{color:(r.vars||r).palette.error.main}})),w=y.forwardRef(function(o,c){const s=F({props:o,name:"MuiFormLabel"}),{children:d,className:a,component:l="label"}=s,n=L(s,M),m=$(),e=k({props:s,muiFormControl:m,states:["color","required","focused","disabled","error","filled"]}),u=i({},s,{color:e.color||"primary",component:l,disabled:e.disabled,error:e.error,filled:e.filled,focused:e.focused,required:e.required}),f=S(u);return p.jsxs(N,i({as:l,ownerState:u,className:g(f.root,a),ref:c},n,{children:[d,e.required&&p.jsxs(U,{ownerState:u,"aria-hidden":!0,className:f.asterisk,children:[" ","*"]})]}))}),H=w;export{H as F,t as f};
//# sourceMappingURL=FormLabel-fe793dd8.js.map