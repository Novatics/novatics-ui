import{c as i,d as x,a as L}from"./useThemeProps-d5e886d2.js";import{r}from"./index-ebeaab24.js";import{a as f,g as C,s as P,c as j,b as v}from"./styled-3acb32b8.js";import{j as u}from"./jsx-runtime-5926aa06.js";const M=r.createContext({}),R=M;function U(s){return f("MuiList",s)}C("MuiList",["root","padding","dense","subheader"]);const w=["children","className","component","dense","disablePadding","subheader"],y=s=>{const{classes:e,disablePadding:t,dense:o,subheader:a}=s;return v({root:["root",!t&&"padding",o&&"dense",a&&"subheader"]},U,e)},N=P("ul",{name:"MuiList",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:t}=s;return[e.root,!t.disablePadding&&e.padding,t.dense&&e.dense,t.subheader&&e.subheader]}})(({ownerState:s})=>i({listStyle:"none",margin:0,padding:0,position:"relative"},!s.disablePadding&&{paddingTop:8,paddingBottom:8},s.subheader&&{paddingTop:0})),S=r.forwardRef(function(e,t){const o=x({props:e,name:"MuiList"}),{children:a,className:d,component:c="ul",dense:n=!1,disablePadding:p=!1,subheader:m}=o,g=L(o,w),b=r.useMemo(()=>({dense:n}),[n]),l=i({},o,{component:c,dense:n,disablePadding:p}),h=y(l);return u.jsx(R.Provider,{value:b,children:u.jsxs(N,i({as:c,className:j(h.root,d),ref:t,ownerState:l},g,{children:[m,a]}))})}),B=S;export{R as L,B as a};
//# sourceMappingURL=List-06a4b039.js.map