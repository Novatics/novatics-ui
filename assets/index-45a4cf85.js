import{j as r}from"./jsx-runtime-d079401a.js";import{r as u}from"./index-f1f2c4b1.js";import"./fonts-0fc9e249.js";import{s as P}from"./styled-e9f7a44f.js";import{B as x}from"./Box-c76f688f.js";import{B as A}from"./button-2d6e2350.js";import{T as m}from"./Typography-40911622.js";import{T}from"./TextField-562a9be1.js";const _=P(x)(t=>{const l=t.variant==="single"?"1px solid":"none",o=t.variant==="single"?"24px":"0";return{border:l,padding:o,display:"flex",flexDirection:"column",gap:"8px",borderColor:t.theme.palette.grey[20],width:"fit-content",minWidth:"500px"}});function f(t){const{acceptLabels:l,variant:o="single",disabled:s,buttonProps:y,textFieldProps:b,onAccept:g=()=>{},onReject:v=()=>{},handleValidation:p,error:n,clearOnAccept:h=!0,title:V="Upload by URL",buttonLabel:q="Submit",formatsLabel:L="Accepted formats:",placeholder:U="Insert URL here"}=t,[a,c]=u.useState(""),[i,d]=u.useState(n||"");u.useEffect(()=>{n&&d(n)},[n]);function j(e){try{return!!new URL(e)}catch{return!1}}const R=e=>p?p(e):e?j(e)?null:"Invalid URL":"URL is required",F=()=>{d("");const e=R(a);e===null?(g(a),h&&c("")):(v(a),d(e))};return r.jsxs(_,{variant:o,disabled:s,children:[r.jsx(m,{variant:"overline",color:"grey.70",children:V}),r.jsxs(x,{sx:{display:"flex",gap:"8px"},children:[r.jsx(T,{variant:"outlined",placeholder:U,error:!!i,inputProps:{style:{padding:"0"}},sx:{flexGrow:1},value:a,onChange:e=>c(e.target.value),disabled:s,...b}),r.jsx(A,{variant:"outlined",disabled:!a||s,sx:{textTransform:"capitalize"},onClick:()=>F(),...y,children:q})]}),r.jsx(m,{variant:"caption",color:i?"error.main":"grey.70",children:i||(l?`${L} ${l}`:"All files are accepted")})]})}try{f.displayName="FromUrl",f.__docgenInfo={description:"",displayName:"FromUrl",props:{acceptLabels:{defaultValue:null,description:"",name:"acceptLabels",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"combined"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},buttonProps:{defaultValue:null,description:"",name:"buttonProps",required:!1,type:{name:"ButtonProps"}},textFieldProps:{defaultValue:null,description:"",name:"textFieldProps",required:!1,type:{name:"TextFieldProps"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},onAccept:{defaultValue:null,description:"",name:"onAccept",required:!1,type:{name:"(url: string) => void"}},onReject:{defaultValue:null,description:"",name:"onReject",required:!1,type:{name:"(url: string) => void"}},handleValidation:{defaultValue:null,description:"",name:"handleValidation",required:!1,type:{name:"(url: string) => string"}},clearOnAccept:{defaultValue:null,description:"",name:"clearOnAccept",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!1,type:{name:"string"}},formatsLabel:{defaultValue:null,description:"",name:"formatsLabel",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}export{f as F};
//# sourceMappingURL=index-45a4cf85.js.map
