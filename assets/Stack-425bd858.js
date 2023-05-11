import{c as T,b as V,a as F,s as B}from"./styled-76b355c1.js";import{l as D,m as M,_ as k,n as v,r as p,o as $,e as E,p as G,q as N,s as h,d as _}from"./useThemeProps-92c88c91.js";import{r as m}from"./index-ebeaab24.js";import{s as O}from"./styled-9f9a5769.js";import{j as U}from"./jsx-runtime-5926aa06.js";import{e as A}from"./extendSxProp-e0c0e6ad.js";const L=["component","direction","spacing","divider","children","className","useFlexGap"],q=D(),I=O("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root});function W(e){return M({props:e,name:"MuiStack",defaultTheme:q})}function z(e,s){const n=m.Children.toArray(e).filter(Boolean);return n.reduce((c,a,t)=>(c.push(a),t<n.length-1&&c.push(m.cloneElement(s,{key:`separator-${t}`})),c),[])}const H=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],J=({ownerState:e,theme:s})=>{let n=k({display:"flex",flexDirection:"column"},v({theme:s},p({values:e.direction,breakpoints:s.breakpoints.values}),c=>({flexDirection:c})));if(e.spacing){const c=$(s),a=Object.keys(s.breakpoints.values).reduce((o,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(o[r]=!0),o),{}),t=p({values:e.direction,base:a}),d=p({values:e.spacing,base:a});typeof t=="object"&&Object.keys(t).forEach((o,r,i)=>{if(!t[o]){const u=r>0?t[i[r-1]]:"column";t[o]=u}}),n=E(n,v({theme:s},d,(o,r)=>e.useFlexGap?{gap:h(c,o)}:{"& > :not(style) + :not(style)":{margin:0,[`margin${H(r?t[r]:e.direction)}`]:h(c,o)}}))}return n=G(s.breakpoints,n),n};function K(e={}){const{createStyledComponent:s=I,useThemeProps:n=W,componentName:c="MuiStack"}=e,a=()=>V({root:["root"]},o=>F(c,o),{}),t=s(J);return m.forwardRef(function(o,r){const i=n(o),l=A(i),{component:u="div",direction:x="column",spacing:S=0,divider:y,children:g,className:j,useFlexGap:P=!1}=l,C=N(l,L),b={direction:x,spacing:S,useFlexGap:P},R=a();return U.jsx(t,k({as:u,ownerState:b,ref:r,className:T(R.root,j)},C,{children:y?z(g,y):g}))})}const Q=K({createStyledComponent:B("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root}),useThemeProps:e=>_({props:e,name:"MuiStack"})}),oe=Q;export{oe as S};
//# sourceMappingURL=Stack-425bd858.js.map
