import{r as p}from"./index-ebeaab24.js";import"./blocks-2646952b.js";import{j as f,a as _}from"./emotion-react-jsx-runtime.browser.esm-780ca0af.js";import{B as R}from"./button-ad7065af.js";import{A as J,i as D}from"./action-footer-69c005a5.js";import{S as N}from"./Stack-0df3362c.js";import{T as G}from"./Typography-f24a8c92.js";import{F as W}from"./formik.esm-42e74a6c.js";import{I as l,a as w}from"./input-formik-field-b4cfe22f.js";import{C as F}from"./checkbox-formik-field-414a6c0c.js";import{F as h}from"./form-group-d8038640.js";import{j as n}from"./jsx-runtime-5926aa06.js";import{G as c}from"./Grid-652969e2.js";import{u as z}from"./index-bda0bad7.js";import{M as H,C as P,S,A as Y}from"./index-ba1e206a.js";import"./useThemeProps-d5e886d2.js";import"./emotion-react.browser.esm-3c2a4d00.js";import"./Button-ac99dc58.js";import"./styled-bb0aced6.js";import"./ButtonBase-7c7dbb15.js";import"./TransitionGroupContext-8ebc3921.js";import"./useForkRef-3ff4e0b8.js";import"./styled-321509f1.js";import"./extendSxProp-f682d789.js";import"./InputBase-8a5982c1.js";import"./formControlState-a1fb9590.js";import"./useFormControl-0ef100e1.js";import"./FormControl-c993efc0.js";import"./isMuiElement-b72c78c9.js";import"./objectWithoutPropertiesLoose-6c5c234b.js";import"./index-ce6f85b9.js";import"./ownerWindow-74a9cc60.js";import"./isHostComponent-73d6e646.js";import"./GlobalStyles-8191be96.js";import"./FormLabel-1a2b75ae.js";import"./FormHelperText-8906fdb6.js";import"./checkbox-b2642617.js";import"./Check-7058d2c7.js";import"./createSvgIcon-bd832c19.js";import"./createSvgIcon-09abee87.js";import"./useControlled-5355145e.js";import"./useId-b93361cb.js";import"./fonts-570bed1b.js";import"./typography-6dc0827f.js";import"./styled-1e5e30bd.js";import"./SwitchBase-6755cfe4.js";import"./FormControlLabel-75059315.js";import"./useTheme-c6adb93a.js";import"./FormGroup-1101fbc6.js";import"./iframe-ff4b8c5a.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";const Q=r=>{let i=null,o=null;return r.title&&(typeof r.title=="string"?i=f(G,{variant:"h4",children:r.title}):i=r.title),r.description&&(typeof r.description=="string"?o=f(G,{variant:"body",children:r.description}):o=r.description),{title:i,description:o}},X={children:"Submit",type:"submit",variant:"contained"},$={children:"Cancel",type:"reset",variant:"outlined"},K=r=>{let i=null,o=null;return r.submitButtonProps&&(i=f(R,{...X,onClick:t=>r.handleSubmit&&r.handleSubmit(t),disabled:r.disabled,loading:r.loading,...r.submitButtonProps})),r.resetButtonProps&&(o=f(R,{...$,onClick:t=>r.handleReset&&r.handleReset(t),...r.resetButtonProps})),{onSubmitButton:i,onResetButton:o}},Z=r=>{var i,o;return(i=r.slots)!=null&&i.stack?(o=r.slots)==null?void 0:o.stack:{}},k=(r,i)=>{const{handleSubmit:o,handleReset:t,children:a,loading:u,disabled:s,direction:d,buttonsPlacement:x="end",sx:g}=r,B=Z(r),{title:q,description:T}=Q(r),{onSubmitButton:v,onResetButton:j}=K(r),b=p.useMemo(()=>s||u,[u,s]),I=p.useMemo(()=>{if(a){const O=typeof a=="function"?a():a;return p.Children.toArray(O).map(y=>typeof y=="object"?p.cloneElement(y,{loading:u,disabled:b,direction:d}):y)}return[]},[a,d,b,u]);return f("form",{onSubmit:o,onReset:t,children:_(N,{spacing:2,sx:{maxWidth:"xs",...g},...B,ref:i,children:[_(N,{spacing:2,sx:{marginBottom:2},children:[q,T]}),I,v||j?_(J,{contentPosition:x,spacing:1,children:[j,v]}):null]})})},m=p.forwardRef(k);try{k.displayName="FormComponent",k.__docgenInfo={description:"",displayName:"FormComponent",props:{direction:{defaultValue:{value:"'column'"},description:"Defines the `flex-direction` style property.\nIt is applied for all screen sizes.",name:"direction",required:!1,type:{name:'ResponsiveStyleValue<"column" | "column-reverse" | "row" | "row-reverse">'}},sx:{defaultValue:null,description:"The system prop, which allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | Element"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | Element"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},submitButtonProps:{defaultValue:null,description:"",name:"submitButtonProps",required:!1,type:{name:"ButtonProps"}},resetButtonProps:{defaultValue:null,description:"",name:"resetButtonProps",required:!1,type:{name:"ButtonProps"}},buttonsPlacement:{defaultValue:null,description:"",name:"buttonsPlacement",required:!1,type:{name:"ActionFooterProps"}},slots:{defaultValue:null,description:"",name:"slots",required:!1,type:{name:"{ stack?: { props: StackProps; }; }"}}}}}catch{}try{m.displayName="Form",m.__docgenInfo={description:"",displayName:"Form",props:{direction:{defaultValue:{value:"'column'"},description:"Defines the `flex-direction` style property.\nIt is applied for all screen sizes.",name:"direction",required:!1,type:{name:'ResponsiveStyleValue<"column" | "column-reverse" | "row" | "row-reverse">'}},sx:{defaultValue:null,description:"The system prop, which allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | Element"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | Element"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},submitButtonProps:{defaultValue:null,description:"",name:"submitButtonProps",required:!1,type:{name:"ButtonProps"}},resetButtonProps:{defaultValue:null,description:"",name:"resetButtonProps",required:!1,type:{name:"ButtonProps"}},buttonsPlacement:{defaultValue:null,description:"",name:"buttonsPlacement",required:!1,type:{name:"ActionFooterProps"}},slots:{defaultValue:null,description:"",name:"slots",required:!1,type:{name:"{ stack?: { props: StackProps; }; }"}}}}}catch{}try{form.displayName="form",form.__docgenInfo={description:"",displayName:"form",props:{direction:{defaultValue:{value:"'column'"},description:"Defines the `flex-direction` style property.\nIt is applied for all screen sizes.",name:"direction",required:!1,type:{name:'ResponsiveStyleValue<"column" | "column-reverse" | "row" | "row-reverse">'}},sx:{defaultValue:null,description:"The system prop, which allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | Element"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | Element"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},submitButtonProps:{defaultValue:null,description:"",name:"submitButtonProps",required:!1,type:{name:"ButtonProps"}},resetButtonProps:{defaultValue:null,description:"",name:"resetButtonProps",required:!1,type:{name:"ButtonProps"}},buttonsPlacement:{defaultValue:null,description:"",name:"buttonsPlacement",required:!1,type:{name:"ActionFooterProps"}},slots:{defaultValue:null,description:"",name:"slots",required:!1,type:{name:"{ stack?: { props: StackProps; }; }"}}}}}catch{}const L=".Mui-error",ee=r=>{const{title:i,description:o,loading:t,disabled:a,submitButtonProps:u,resetButtonProps:s,buttonsPlacement:d}=r;return{title:i,description:o,loading:t,disabled:a,submitButtonProps:u,resetButtonProps:s,buttonsPlacement:d}},ne=({scrollOnError:r=!1})=>{if(r===!1)return{};let i={errorQuerySelector:L,behavior:"smooth",useParent:!0};return typeof r=="object"&&(i={...i,...r}),i},V=r=>{const{children:i,validateOnBlur:o=!1,validateOnChange:t=!1,validateOnMount:a=!1,...u}=r,s=p.useRef(),d=ee(r),x=ne(r);return f(W,{validateOnBlur:o,validateOnChange:t,validateOnMount:a,...u,children:g=>{var j;const{errors:B}=g,q=!D(x)&&!D(B),T=!!s.current,v=x.errorQuerySelector||L;if(q&&T){const b=(j=s.current)==null?void 0:j.querySelector(v);if(b){const y=(x.useParent&&b.parentElement?b.parentElement:b).getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:y,behavior:x.behavior})}}return f(m,{...d,ref:s,handleSubmit:g.handleSubmit,handleReset:g.handleReset,children:i(g)})}})};try{V.displayName="FormikForm",V.__docgenInfo={description:"",displayName:"FormikForm",props:{direction:{defaultValue:{value:"'column'"},description:"Defines the `flex-direction` style property.\nIt is applied for all screen sizes.",name:"direction",required:!1,type:{name:'ResponsiveStyleValue<"column" | "column-reverse" | "row" | "row-reverse">'}},sx:{defaultValue:null,description:"The system prop, which allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | Element"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},handleSubmit:{defaultValue:null,description:"",name:"handleSubmit",required:!1,type:{name:"(e?: FormEvent<HTMLFormElement>) => void"}},handleReset:{defaultValue:null,description:"",name:"handleReset",required:!1,type:{name:"(e?: SyntheticEvent<any, Event>) => void"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | Element"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},submitButtonProps:{defaultValue:null,description:"",name:"submitButtonProps",required:!1,type:{name:"ButtonProps"}},resetButtonProps:{defaultValue:null,description:"",name:"resetButtonProps",required:!1,type:{name:"ButtonProps"}},buttonsPlacement:{defaultValue:null,description:"",name:"buttonsPlacement",required:!1,type:{name:"ActionFooterProps"}},slots:{defaultValue:null,description:"",name:"slots",required:!1,type:{name:"{ stack?: { props: StackProps; }; }"}},scrollOnError:{defaultValue:{value:"false"},description:"",name:"scrollOnError",required:!1,type:{name:"boolean | Partial<ScrollOnErrorProps>"}}}}}catch{}try{formikform.displayName="formikform",formikform.__docgenInfo={description:"",displayName:"formikform",props:{direction:{defaultValue:{value:"'column'"},description:"Defines the `flex-direction` style property.\nIt is applied for all screen sizes.",name:"direction",required:!1,type:{name:'ResponsiveStyleValue<"column" | "column-reverse" | "row" | "row-reverse">'}},sx:{defaultValue:null,description:"The system prop, which allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | Element"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},handleSubmit:{defaultValue:null,description:"",name:"handleSubmit",required:!1,type:{name:"(e?: FormEvent<HTMLFormElement>) => void"}},handleReset:{defaultValue:null,description:"",name:"handleReset",required:!1,type:{name:"(e?: SyntheticEvent<any, Event>) => void"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | Element"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},submitButtonProps:{defaultValue:null,description:"",name:"submitButtonProps",required:!1,type:{name:"ButtonProps"}},resetButtonProps:{defaultValue:null,description:"",name:"resetButtonProps",required:!1,type:{name:"ButtonProps"}},buttonsPlacement:{defaultValue:null,description:"",name:"buttonsPlacement",required:!1,type:{name:"ActionFooterProps"}},slots:{defaultValue:null,description:"",name:"slots",required:!1,type:{name:"{ stack?: { props: StackProps; }; }"}},scrollOnError:{defaultValue:{value:"false"},description:"",name:"scrollOnError",required:!1,type:{name:"boolean | Partial<ScrollOnErrorProps>"}}}}}catch{}const te="@novatics/form",re="0.1.2",oe="./index.js",ae="./index.d.ts",se={".":{import:"./index.mjs",require:"./index.js"}},ie={"lodash.isempty":"^4.4.0"},le={formik:"^2.2.9"},ue={name:te,version:re,main:oe,types:ae,exports:se,dependencies:ie,peerDependencies:le};function me(r={}){const{wrapper:i}=Object.assign({},z(),r.components);return i?n.jsx(i,{...r,children:n.jsx(o,{})}):o();function o(){const t=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre",strong:"strong",div:"div",br:"br"},z(),r.components);return n.jsxs(n.Fragment,{children:[n.jsx(H,{title:"Form",component:m}),`
`,n.jsxs(t.h1,{id:"form-",children:["Form ",n.jsx("img",{src:`https://img.shields.io/badge/Version-v${ue.version}-brightgreenn`})]}),`
`,n.jsx(t.h3,{id:"installation",children:"Installation"}),`
`,n.jsxs(t.p,{children:["First install the latest version of the package from ",n.jsx(t.code,{children:"@novatics/form"}),"."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-shell",children:`  yarn add -D @novatics/form
`})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-shell",children:`  npm install --dev @novatics/form
`})}),`
`,n.jsx(t.p,{children:"and use it"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import ... from '@novatics/form';

  ...


`})}),`
`,n.jsx(t.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsxs(t.p,{children:["Our component has some cool features to be explored. We have a ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"title"})})," and ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"description"})}),` built in making easy to have basic forms.
You have submit and reset options out of the box. To use just implement `,n.jsx(t.strong,{children:n.jsx(t.code,{children:"handleSubmit"})})," and ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"handleReset"})}),` functions and pass the props to
`,n.jsx(t.strong,{children:n.jsx(t.code,{children:"submitButtonProps"})})," and ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"resetButtonProps"})}),". To be more flexible we has a ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"buttonsPlacement"})})," option from ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"'@novatics-ui/action-footer'"})}),"."]}),`
`,n.jsxs(t.p,{children:["We add global states ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"direction"})}),", ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"loading"})})," and ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"disabled"})}),", that we pass to all children components. Our maxWidth is 600px but is totally customizable."]}),`
`,n.jsx(P,{children:n.jsx(S,{name:"Basic Usage",children:()=>{const[a,u]=p.useState({name:"",email:""});return n.jsxs(c,{container:!0,spacing:2,children:[n.jsx(c,{item:!0,xs:6,children:n.jsxs(m,{title:"Create a Project",description:"Projects are where your repositories live. They are containers in which you can group similar repositories together for better code organizations.",handleSubmit:async s=>{s.preventDefault(),console.log("call handle submit"),await new Promise(d=>setTimeout(d,500)),alert(JSON.stringify(a,null,2))},submitButtonProps:{children:"Submit"},loading:!0,children:[n.jsx(l,{label:"Project's name",hint:"Some important text",value:a.name,onChange:s=>{u({...a,name:s.target.value})}}),n.jsx(l,{label:"email",value:a.email,onChange:s=>{u({...a,email:s.target.value})}})]})}),n.jsx(c,{item:!0,xs:6,children:n.jsxs(m,{title:"Create a Project",description:"Projects are where your repositories live. They are containers in which you can group similar repositories together for better code organizations.",handleSubmit:async s=>{s.preventDefault(),await new Promise(d=>setTimeout(d,500)),alert(JSON.stringify(a,null,2))},submitButtonProps:{children:"Submit"},handleReset:async s=>{u({name:"",email:""})},resetButtonProps:{children:"Cancel"},children:[n.jsx(l,{label:"Project's name",hint:"Some important text",value:a.name,onChange:s=>{u({...a,name:s.target.value})}}),n.jsx(l,{label:"email",value:a.email,onChange:s=>{u({...a,email:s.target.value})}})]})})]})}})}),`
`,n.jsx(t.h3,{id:"form-with-groups",children:"Form with groups"}),`
`,n.jsxs(t.p,{children:["Our component has some cool features to be explored. We have a ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"title"})})," and ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"description"})}),` built in making easy to have basic forms.
You have submit and reset options out of the box. To use just implement `,n.jsx(t.strong,{children:n.jsx(t.code,{children:"handleSubmit"})})," and ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"handleReset"})}),` functions and pass the props to
`,n.jsx(t.strong,{children:n.jsx(t.code,{children:"submitButtonProps"})})," and ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"resetButtonProps"})}),". To be more flexible we has a ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"buttonsPlacement"})})," option from ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"'@novatics-ui/action-footer'"})}),"."]}),`
`,n.jsxs(t.p,{children:["We add global states ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"direction"})}),", ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"loading"})})," and ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"disabled"})}),", that we pass to all children components. Our maxWidth is 600px but is totally customizable."]}),`
`,n.jsx(P,{children:n.jsx(S,{name:"Form with groups",children:()=>{const[a,u]=p.useState({name:"",email:"",project:""});return n.jsxs(c,{container:!0,spacing:2,children:[n.jsx(c,{item:!0,xs:6,children:n.jsxs(m,{title:"Create a Project",description:"Projects are where your repositories live. They are containers in which you can group similar repositories together for better code organizations.",handleSubmit:async s=>{s.preventDefault(),console.log("call handle submit"),await new Promise(d=>setTimeout(d,500)),alert(JSON.stringify(a,null,2))},submitButtonProps:{children:"Submit"},loading:!0,children:[n.jsx(l,{label:"Project's name",hint:"Some important text",value:a.project,onChange:s=>{u({...a,project:s.target.value})}}),n.jsxs(h,{title:"Personal Info",children:[n.jsx(l,{label:"name",value:a.name,onChange:s=>{u({...a,name:s.target.value})}}),n.jsx(l,{label:"email",value:a.email,onChange:s=>{u({...a,email:s.target.value})}}),n.jsx(F,{label:"agree with terms",labelPlacement:"end"})]}),n.jsx(h,{title:"Company Info",children:n.jsx(l,{label:"name",value:a.name,onChange:s=>{u({...a,name:s.target.value})}})})]})}),n.jsx(c,{item:!0,xs:6,children:n.jsxs(m,{title:"Create a Project",description:"Projects are where your repositories live. They are containers in which you can group similar repositories together for better code organizations.",direction:"row",handleSubmit:async s=>{s.preventDefault(),console.log("call handle submit"),await new Promise(d=>setTimeout(d,500)),alert(JSON.stringify(a,null,2))},submitButtonProps:{children:"Submit"},children:[n.jsx(l,{label:"Project's name",hint:"Some important text",value:a.project,onChange:s=>{u({...a,project:s.target.value})}}),n.jsxs(h,{title:"Personal Info",children:[n.jsx(l,{label:"name",value:a.name,onChange:s=>{u({...a,name:s.target.value})}}),n.jsx(l,{label:"email",value:a.email,onChange:s=>{u({...a,email:s.target.value})}}),n.jsx(F,{label:"agree with terms",labelPlacement:"end"})]}),n.jsx(h,{title:"Company Info",children:n.jsx(l,{label:"name",value:a.name,onChange:s=>{u({...a,name:s.target.value})}})})]})})]})}})}),`
`,n.jsx(t.h3,{id:"form-with-formik",children:"Form with Formik"}),`
`,n.jsxs(t.p,{children:["We create a component that integrates Formik and abstract most of the functions. Also we added a cool functionality: ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"scrollOnError"})}),` prop. If you are using our components @novatics-ui FormikFields it is all set.
but you can modify the selector, the scroll behavior etc.`]}),`
`,n.jsx(P,{children:n.jsx(S,{name:"Forkmik",children:()=>n.jsx(t.div,{style:{display:"flex",flexDirection:"row"},children:n.jsx(V,{title:"Create a Project",description:"Projects are where your repositories live. They are containers in which you can group similar repositories together for better code organizations.",onSubmit:a=>{e.preventDefault()},submitButtonProps:{children:"create"},initialValues:{name:"",email:""},scrollOnError:!0,children:()=>n.jsxs(n.Fragment,{children:[n.jsx(w,{id:"name",name:"name",required:!0}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),"Loooooonnnng",n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),"Loooooonnnng",n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),"Loooooonnnng",n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),"Loooooonnnng form",n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(w,{id:"email",name:"email"})]})})})})}),`
`,n.jsx(t.h3,{id:"playground",children:"Playground"}),`
`,n.jsx(P,{children:n.jsx(S,{name:"Playground",args:{title:"I am title!",description:"And I, description!",handleSubmit:a=>{a.preventDefault(),console.log("handleSubmit")},submitButtonProps:{children:"create"}},children:a=>n.jsx(m,{...a,children:n.jsx(l,{label:"name"})})})}),`
`,n.jsx(Y,{story:"Playground"}),`
`,n.jsx(t.p,{children:"made by Novatics ❤"})]})}}const M=()=>{const[r,i]=p.useState({name:"",email:""});return n.jsxs(c,{container:!0,spacing:2,children:[n.jsx(c,{item:!0,xs:6,children:n.jsxs(m,{title:"Create a Project",description:"Projects are where your repositories live. They are containers in which you can group similar repositories together for better code organizations.",handleSubmit:async o=>{o.preventDefault(),console.log("call handle submit"),await new Promise(t=>setTimeout(t,500)),alert(JSON.stringify(r,null,2))},submitButtonProps:{children:"Submit"},loading:!0,children:[n.jsx(l,{label:"Project's name",hint:"Some important text",value:r.name,onChange:o=>{i({...r,name:o.target.value})}}),n.jsx(l,{label:"email",value:r.email,onChange:o=>{i({...r,email:o.target.value})}})]})}),n.jsx(c,{item:!0,xs:6,children:n.jsxs(m,{title:"Create a Project",description:"Projects are where your repositories live. They are containers in which you can group similar repositories together for better code organizations.",handleSubmit:async o=>{o.preventDefault(),await new Promise(t=>setTimeout(t,500)),alert(JSON.stringify(r,null,2))},submitButtonProps:{children:"Submit"},handleReset:async o=>{i({name:"",email:""})},resetButtonProps:{children:"Cancel"},children:[n.jsx(l,{label:"Project's name",hint:"Some important text",value:r.name,onChange:o=>{i({...r,name:o.target.value})}}),n.jsx(l,{label:"email",value:r.email,onChange:o=>{i({...r,email:o.target.value})}})]})})]})};M.storyName="Basic Usage";M.parameters={storySource:{source:`() => {
  const [values, setValues] = useState({
    name: "",
    email: ""
  });
  return <Grid container spacing={2}>
          <Grid item xs={6}>
            <Form title={"Create a Project"} description={"Projects are where your repositories live. They are containers in which you can group similar repositories together for better code organizations."} handleSubmit={async e => {
        e.preventDefault();
        console.log("call handle submit");
        await new Promise(r => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }} submitButtonProps={{
        children: "Submit"
      }} loading>
              <InputField label="Project's name" hint="Some important text" value={values.name} onChange={e => {
          setValues({ ...values,
            name: e.target.value
          });
        }} />
              <InputField label="email" value={values.email} onChange={e => {
          setValues({ ...values,
            email: e.target.value
          });
        }} />
            </Form>
          </Grid>
          <Grid item xs={6}>
            <Form title={"Create a Project"} description={"Projects are where your repositories live. They are containers in which you can group similar repositories together for better code organizations."} handleSubmit={async e => {
        e.preventDefault();
        await new Promise(r => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }} submitButtonProps={{
        children: "Submit"
      }} handleReset={async e => {
        setValues({
          name: "",
          email: ""
        });
      }} resetButtonProps={{
        children: "Cancel"
      }}>
              <InputField label="Project's name" hint="Some important text" value={values.name} onChange={e => {
          setValues({ ...values,
            name: e.target.value
          });
        }} />
              <InputField label="email" value={values.email} onChange={e => {
          setValues({ ...values,
            email: e.target.value
          });
        }} />
            </Form>
          </Grid>
        </Grid>;
}`}};const A=()=>{const[r,i]=p.useState({name:"",email:"",project:""});return n.jsxs(c,{container:!0,spacing:2,children:[n.jsx(c,{item:!0,xs:6,children:n.jsxs(m,{title:"Create a Project",description:"Projects are where your repositories live. They are containers in which you can group similar repositories together for better code organizations.",handleSubmit:async o=>{o.preventDefault(),console.log("call handle submit"),await new Promise(t=>setTimeout(t,500)),alert(JSON.stringify(r,null,2))},submitButtonProps:{children:"Submit"},loading:!0,children:[n.jsx(l,{label:"Project's name",hint:"Some important text",value:r.project,onChange:o=>{i({...r,project:o.target.value})}}),n.jsxs(h,{title:"Personal Info",children:[n.jsx(l,{label:"name",value:r.name,onChange:o=>{i({...r,name:o.target.value})}}),n.jsx(l,{label:"email",value:r.email,onChange:o=>{i({...r,email:o.target.value})}}),n.jsx(F,{label:"agree with terms",labelPlacement:"end"})]}),n.jsx(h,{title:"Company Info",children:n.jsx(l,{label:"name",value:r.name,onChange:o=>{i({...r,name:o.target.value})}})})]})}),n.jsx(c,{item:!0,xs:6,children:n.jsxs(m,{title:"Create a Project",description:"Projects are where your repositories live. They are containers in which you can group similar repositories together for better code organizations.",direction:"row",handleSubmit:async o=>{o.preventDefault(),console.log("call handle submit"),await new Promise(t=>setTimeout(t,500)),alert(JSON.stringify(r,null,2))},submitButtonProps:{children:"Submit"},children:[n.jsx(l,{label:"Project's name",hint:"Some important text",value:r.project,onChange:o=>{i({...r,project:o.target.value})}}),n.jsxs(h,{title:"Personal Info",children:[n.jsx(l,{label:"name",value:r.name,onChange:o=>{i({...r,name:o.target.value})}}),n.jsx(l,{label:"email",value:r.email,onChange:o=>{i({...r,email:o.target.value})}}),n.jsx(F,{label:"agree with terms",labelPlacement:"end"})]}),n.jsx(h,{title:"Company Info",children:n.jsx(l,{label:"name",value:r.name,onChange:o=>{i({...r,name:o.target.value})}})})]})})]})};A.storyName="Form with groups";A.parameters={storySource:{source:`() => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    project: ""
  });
  return <Grid container spacing={2}>
          <Grid item xs={6}>
            <Form title={"Create a Project"} description={"Projects are where your repositories live. They are containers in which you can group similar repositories together for better code organizations."} handleSubmit={async e => {
        e.preventDefault();
        console.log("call handle submit");
        await new Promise(r => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }} submitButtonProps={{
        children: "Submit"
      }} loading>
              <InputField label="Project's name" hint="Some important text" value={values.project} onChange={e => {
          setValues({ ...values,
            project: e.target.value
          });
        }} />
              <FormGroup title="Personal Info">
                <InputField label="name" value={values.name} onChange={e => {
            setValues({ ...values,
              name: e.target.value
            });
          }} />
                <InputField label="email" value={values.email} onChange={e => {
            setValues({ ...values,
              email: e.target.value
            });
          }} />
                <CheckboxField label="agree with terms" labelPlacement="end" />
              </FormGroup>
              <FormGroup title="Company Info">
                <InputField label="name" value={values.name} onChange={e => {
            setValues({ ...values,
              name: e.target.value
            });
          }} />
              </FormGroup>
            </Form>
          </Grid>
          <Grid item xs={6}>
            <Form title={"Create a Project"} description={"Projects are where your repositories live. They are containers in which you can group similar repositories together for better code organizations."} direction="row" handleSubmit={async e => {
        e.preventDefault();
        console.log("call handle submit");
        await new Promise(r => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }} submitButtonProps={{
        children: "Submit"
      }}>
              <InputField label="Project's name" hint="Some important text" value={values.project} onChange={e => {
          setValues({ ...values,
            project: e.target.value
          });
        }} />
              <FormGroup title="Personal Info">
                <InputField label="name" value={values.name} onChange={e => {
            setValues({ ...values,
              name: e.target.value
            });
          }} />
                <InputField label="email" value={values.email} onChange={e => {
            setValues({ ...values,
              email: e.target.value
            });
          }} />
                <CheckboxField label="agree with terms" labelPlacement="end" />
              </FormGroup>
              <FormGroup title="Company Info">
                <InputField label="name" value={values.name} onChange={e => {
            setValues({ ...values,
              name: e.target.value
            });
          }} />
              </FormGroup>
            </Form>
          </Grid>
        </Grid>;
}`}};const U=()=>n.jsx("div",{style:{display:"flex",flexDirection:"row"},children:n.jsx(V,{title:"Create a Project",description:"Projects are where your repositories live. They are containers in which you can group similar repositories together for better code organizations.",onSubmit:r=>{e.preventDefault()},submitButtonProps:{children:"create"},initialValues:{name:"",email:""},scrollOnError:!0,children:()=>n.jsxs(n.Fragment,{children:[n.jsx(w,{id:"name",name:"name",required:!0}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),"Loooooonnnng",n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),"Loooooonnnng",n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),"Loooooonnnng",n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),"Loooooonnnng form",n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx(w,{id:"email",name:"email"})]})})});U.storyName="Forkmik";U.parameters={storySource:{source:`() => {
  return <div style={{
    display: "flex",
    flexDirection: "row"
  }}>
          <FormikForm title={"Create a Project"} description={"Projects are where your repositories live. They are containers in which you can group similar repositories together for better code organizations."} onSubmit={values => {
      e.preventDefault();
    }} submitButtonProps={{
      children: "create"
    }} initialValues={{
      name: "",
      email: ""
    }} scrollOnError>
            {() => {
        return <>
                  <InputFormikField id="name" name="name" required />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  Loooooonnnng
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  Loooooonnnng
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  Loooooonnnng
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  Loooooonnnng form
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <InputFormikField id="email" name="email" />
                </>;
      }}
          </FormikForm>
        </div>;
}`}};const E=r=>n.jsx(m,{...r,children:n.jsx(l,{label:"name"})});E.storyName="Playground";E.args={title:"I am title!",description:"And I, description!",handleSubmit:r=>{r.preventDefault(),console.log("handleSubmit")},submitButtonProps:{children:"create"}};E.parameters={storySource:{source:`args => {
  return <Form {...args}>
          <InputField label="name" />
        </Form>;
}`}};const C={title:"Form",component:m,tags:["stories-mdx"],includeStories:["basicUsage","formWithGroups","forkmik","playground"]};C.parameters=C.parameters||{};C.parameters.docs={...C.parameters.docs||{},page:me};const dn=["basicUsage","formWithGroups","forkmik","playground"];export{dn as __namedExportsOrder,M as basicUsage,C as default,U as forkmik,A as formWithGroups,E as playground};
//# sourceMappingURL=form.stories-34bc234d.js.map
