import{j as c}from"./emotion-react-jsx-runtime.browser.esm-780ca0af.js";import{r as s}from"./index-ebeaab24.js";import{b as p}from"./formik.esm-42e74a6c.js";import{C as g}from"./checkbox-11a577d5.js";import{s as _}from"./styled-476a8079.js";import{M as y}from"./FormControlLabel-6e3b84fa.js";import{u as b}from"./useTheme-c6adb93a.js";import{F as f}from"./FormControl-f9373798.js";const k=_(y)(({theme:e})=>({paddingTop:e.spacing(1),paddingBottom:e.spacing(1),"&.MuiFormControlLabel-root":{margin:0}})),d=e=>{var i;const r=b(),n=e.typography,o=n?r.typography[n]:void 0,a=!!e.error,l=a?"error":void 0,t={paddingRight:r.spacing(.5),paddingLeft:r.spacing(.5)};return e.required&&(e.labelPlacement==="start"?t.paddingLeft="0px":t.paddingRight="0px"),c(f,{children:c(k,{...e,control:c(g,{color:l,...e}),slotProps:{...e.slotProps,typography:{color:a?r.palette.error.main:void 0,...o,...t,...(i=e.slotProps)==null?void 0:i.typography}}})})};try{d.displayName="CheckboxField",d.__docgenInfo={description:"",displayName:"CheckboxField",props:{}}}catch{}try{checkboxfield.displayName="checkboxfield",checkboxfield.__docgenInfo={description:"",displayName:"checkboxfield",props:{}}}catch{}const m=e=>{const r=s.useCallback(o=>e.required?!o:!1,[e.required]),n=s.useMemo(()=>e.label?e.label:e.name,[e.label,e.name]);return c(p,{validate:r,...e,children:({field:o,form:a,meta:l})=>{const t=(a.touched||l.touched)&&(l.error||!!a.errors[o.name]);return c(d,{error:t,...e,label:n,value:o.value,onChange:(i,h)=>{o.onChange(i),e.onChange&&e.onChange(i,h)}})}})};try{m.displayName="CheckboxFormikField",m.__docgenInfo={description:"",displayName:"CheckboxFormikField",props:{}}}catch{}try{checkboxformikfield.displayName="checkboxformikfield",checkboxformikfield.__docgenInfo={description:"",displayName:"checkboxformikfield",props:{}}}catch{}export{d as C,m as a};
//# sourceMappingURL=checkbox-formik-field-eec5047c.js.map
