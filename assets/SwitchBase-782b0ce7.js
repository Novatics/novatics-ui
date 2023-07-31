import{c,g as W,h as A}from"./useThemeProps-09ff92e7.js";import{r as D}from"./index-f1f2c4b1.js";import{a as G,g as H,s as F,b as J,d as K}from"./styled-96cb1edf.js";import{u as M}from"./useFormControl-1157a7e5.js";import{j as x}from"./jsx-runtime-d079401a.js";import{B as Q}from"./ButtonBase-9787c033.js";import{u as T}from"./useControlled-953564ff.js";function V(e){return G("PrivateSwitchBase",e)}H("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const X=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Y=e=>{const{classes:o,checked:d,disabled:r,edge:a}=e,l={root:["root",d&&"checked",r&&"disabled",a&&`edge${A(a)}`],input:["input"]};return K(l,V,o)},Z=F(Q)(({ownerState:e})=>c({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),ee=F("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),te=D.forwardRef(function(o,d){const{autoFocus:r,checked:a,checkedIcon:l,className:y,defaultChecked:h,disabled:w,disableFocusRipple:p=!1,edge:S=!1,icon:R,id:I,inputProps:P,inputRef:j,name:z,onBlur:f,onChange:m,onFocus:g,readOnly:E,required:N=!1,tabIndex:U,type:i,value:b}=o,q=W(o,X),[k,v]=T({controlled:a,default:!!h,name:"SwitchBase",state:"checked"}),s=M(),L=t=>{g&&g(t),s&&s.onFocus&&s.onFocus(t)},O=t=>{f&&f(t),s&&s.onBlur&&s.onBlur(t)},_=t=>{if(t.nativeEvent.defaultPrevented)return;const C=t.target.checked;v(C),m&&m(t,C)};let n=w;s&&typeof n>"u"&&(n=s.disabled);const $=i==="checkbox"||i==="radio",u=c({},o,{checked:k,disabled:n,disableFocusRipple:p,edge:S}),B=Y(u);return x.jsxs(Z,c({component:"span",className:J(B.root,y),centerRipple:!0,focusRipple:!p,disabled:n,tabIndex:null,role:void 0,onFocus:L,onBlur:O,ownerState:u,ref:d},q,{children:[x.jsx(ee,c({autoFocus:r,checked:a,defaultChecked:h,className:B.input,disabled:n,id:$?I:void 0,name:z,onChange:_,readOnly:E,ref:j,required:N,ownerState:u,tabIndex:U,type:i},i==="checkbox"&&b===void 0?{}:{value:b},P)),k?l:R]}))}),re=te;export{re as S};
//# sourceMappingURL=SwitchBase-782b0ce7.js.map
