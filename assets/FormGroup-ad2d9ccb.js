import{c as e,d as p,a as f}from"./useThemeProps-d5e886d2.js";import{r as w}from"./index-ebeaab24.js";import{a as x,g as F,s as d,c as G,b as C}from"./styled-567cb11a.js";import{u as M}from"./useFormControl-0ef100e1.js";import{f as y}from"./formControlState-a1fb9590.js";import{j as R}from"./jsx-runtime-5926aa06.js";function g(o){return x("MuiFormGroup",o)}F("MuiFormGroup",["root","row","error"]);const j=["className","row"],S=o=>{const{classes:r,row:t,error:s}=o;return C({root:["root",t&&"row",s&&"error"]},g,r)},U=d("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:t}=o;return[r.root,t.row&&r.row]}})(({ownerState:o})=>e({display:"flex",flexDirection:"column",flexWrap:"wrap"},o.row&&{flexDirection:"row"})),h=w.forwardRef(function(r,t){const s=p({props:r,name:"MuiFormGroup"}),{className:a,row:m=!1}=s,c=f(s,j),i=M(),l=y({props:s,muiFormControl:i,states:["error"]}),n=e({},s,{row:m,error:l.error}),u=S(n);return R.jsx(U,e({className:G(u.root,a),ownerState:n,ref:t},c))}),P=h;export{P as M};
//# sourceMappingURL=FormGroup-ad2d9ccb.js.map