import{a as f,j as i}from"./emotion-react-jsx-runtime.browser.esm-780ca0af.js";import{r as p}from"./index-ebeaab24.js";import{b as y}from"./formik.esm-42e74a6c.js";import{M as _}from"./InputBase-9e542a6c.js";import{M as h}from"./FormControl-87aec177.js";import{a as g}from"./styled-daddfde7.js";import{M as N,F as q}from"./FormLabel-5c9463c1.js";const V=e=>{const a=[];return e.size==="large"&&a.push(g("NuiInputField","sizeLarge")),e.className&&a.push(e.className),a.join(" ")},m=e=>{const{label:a,error:l,required:r,hint:t,size:n,withTextHelper:u=!0,...o}=e,d=V(e);let s=t;return l&&typeof l!="boolean"&&(s=l),f(h,{children:[i(N,{required:r,focused:!1,children:a}),i(_,{error:!!l,required:r,size:n==="large"?"medium":n,...o,className:d}),u||s?i(q,{error:!!l,sx:{minHeight:"17px"},children:s}):null]})};try{m.displayName="InputField",m.__docgenInfo={description:"",displayName:"InputField",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},withTextHelper:{defaultValue:null,description:"",name:"withTextHelper",required:!1,type:{name:"boolean"}}}}}catch{}try{inputfield.displayName="inputfield",inputfield.__docgenInfo={description:"",displayName:"inputfield",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},withTextHelper:{defaultValue:null,description:"",name:"withTextHelper",required:!1,type:{name:"boolean"}}}}}catch{}try{getOutlinedInputUtilityClass.displayName="getOutlinedInputUtilityClass",getOutlinedInputUtilityClass.__docgenInfo={description:"",displayName:"getOutlinedInputUtilityClass",props:{}}}catch{}const c=e=>{const a=p.useCallback(r=>e.required?!r:!1,[e.required]),l=p.useMemo(()=>e.label?e.label:e.name,[e.label,e.name]);return i(y,{validate:a,...e,children:r=>{const{field:t,form:n,meta:u}=r,o=(n.touched||u.touched)&&(u.error||!!n.errors[t.name]);return i(m,{...e,error:o,label:l,value:t.value,onChange:d=>{t.onChange(d),e.onChange&&e.onChange(d)}})}})};try{c.displayName="InputFormikField",c.__docgenInfo={description:"",displayName:"InputFormikField",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},withTextHelper:{defaultValue:null,description:"",name:"withTextHelper",required:!1,type:{name:"boolean"}}}}}catch{}try{inputformikfield.displayName="inputformikfield",inputformikfield.__docgenInfo={description:"",displayName:"inputformikfield",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},withTextHelper:{defaultValue:null,description:"",name:"withTextHelper",required:!1,type:{name:"boolean"}}}}}catch{}export{m as I,c as a};
//# sourceMappingURL=input-formik-field-f69b44c5.js.map