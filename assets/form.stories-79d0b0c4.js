import{r as p}from"./index-f1f2c4b1.js";import"./blocks-2646952b.js";import{j as n}from"./jsx-runtime-d079401a.js";import{B as I}from"./button-be93c528.js";import{A}from"./action-footer-4ad338a1.js";import{S as O}from"./Stack-94b624b7.js";import{T as R}from"./Typography-ff175671.js";import{F as U}from"./formik.esm-6c9dd87e.js";import{i as D}from"./index-2762f82b.js";import{I as l,a as S}from"./input-formik-field-08f4f0be.js";import{C as w}from"./checkbox-formik-field-d086c07c.js";import{F as h}from"./form-group-63bfd565.js";import{G as c}from"./Grid-d121f362.js";import{u as N}from"./index-59d6410c.js";import{M as J,C as v,b as P,A as W}from"./index-3b08d913.js";import"./Button-f97409ef.js";import"./useThemeProps-09ff92e7.js";import"./styled-f4c85dcf.js";import"./ButtonBase-14f96990.js";import"./emotion-react.browser.esm-ea340576.js";import"./TransitionGroupContext-f23bfbbc.js";import"./useEnhancedEffect-b6928b87.js";import"./useForkRef-f4ecef3a.js";import"./useIsFocusVisible-86ab9ba9.js";import"./styled-035c2fe9.js";import"./extendSxProp-2d0de5c8.js";import"./FormControl-cf366d9f.js";import"./useFormControl-1157a7e5.js";import"./isMuiElement-c6f52415.js";import"./FormLabel-064fe925.js";import"./formControlState-a1fb9590.js";import"./InputBase-3c945130.js";import"./objectWithoutPropertiesLoose-6c5c234b.js";import"./index-1c885437.js";import"./ownerWindow-fbe9f185.js";import"./isHostComponent-73d6e646.js";import"./GlobalStyles-03b46f00.js";import"./FormHelperText-37e5d20e.js";import"./checkbox-85c87f7b.js";import"./Check-92775e68.js";import"./createSvgIcon-1429b7e8.js";import"./createSvgIcon-2a61c0ab.js";import"./useControlled-953564ff.js";import"./useId-e3465fec.js";import"./fonts-0fc9e249.js";import"./typography-18a122d3.js";import"./colors-4f758d22.js";import"./styled-b40b467a.js";import"./SwitchBase-fa07e534.js";import"./FormControlLabel-154d3826.js";import"./useTheme-f6b5a289.js";import"./FormGroup-72ffefea.js";import"./iframe-85435973.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";const H=r=>{let i=null,o=null;return r.title&&(typeof r.title=="string"?i=n.jsx(R,{variant:"h4",children:r.title}):i=r.title),r.description&&(typeof r.description=="string"?o=n.jsx(R,{variant:"body",children:r.description}):o=r.description),{title:i,description:o}},Y={children:"Submit",type:"submit",variant:"contained"},Q={children:"Cancel",type:"reset",variant:"outlined"},X=r=>{let i=null,o=null;return r.submitButtonProps&&(i=n.jsx(I,{...Y,onClick:t=>r.handleSubmit&&r.handleSubmit(t),disabled:r.disabled,loading:r.loading,...r.submitButtonProps})),r.resetButtonProps&&(o=n.jsx(I,{...Q,onClick:t=>r.handleReset&&r.handleReset(t),...r.resetButtonProps})),{onSubmitButton:i,onResetButton:o}},$=r=>{var i,o;return(i=r.slots)!=null&&i.stack?(o=r.slots)==null?void 0:o.stack:{}},T=(r,i)=>{const{handleSubmit:o,handleReset:t,children:a,loading:u,disabled:s,direction:d,buttonsPlacement:f="end",sx:x}=r,V=$(r),{title:B,description:q}=H(r),{onSubmitButton:y,onResetButton:j}=X(r),b=p.useMemo(()=>s||u,[u,s]),k=p.useMemo(()=>{if(a){const E=typeof a=="function"?a():a;return p.Children.toArray(E).map(g=>typeof g=="object"?p.cloneElement(g,{loading:u,disabled:b,direction:d}):g)}return[]},[a,d,b,u]);return n.jsx("form",{onSubmit:o,onReset:t,children:n.jsxs(O,{spacing:2,sx:{maxWidth:"xs",...x},...V,ref:i,children:[n.jsxs(O,{spacing:2,sx:{marginBottom:2},children:[B,q]}),k,y||j?n.jsxs(A,{contentPosition:f,spacing:1,children:[j,y]}):null]})})},m=p.forwardRef(T);try{T.displayName="FormComponent",T.__docgenInfo={description:"",displayName:"FormComponent",props:{sx:{defaultValue:null,description:"The system prop, which allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},direction:{defaultValue:{value:"'column'"},description:"Defines the `flex-direction` style property.\nIt is applied for all screen sizes.",name:"direction",required:!1,type:{name:'ResponsiveStyleValue<"row" | "column" | "column-reverse" | "row-reverse">'}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | Element"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | Element"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},submitButtonProps:{defaultValue:null,description:"",name:"submitButtonProps",required:!1,type:{name:"ButtonProps"}},resetButtonProps:{defaultValue:null,description:"",name:"resetButtonProps",required:!1,type:{name:"ButtonProps"}},buttonsPlacement:{defaultValue:null,description:"",name:"buttonsPlacement",required:!1,type:{name:"ActionFooterProps"}},slots:{defaultValue:null,description:"",name:"slots",required:!1,type:{name:"{ stack?: { props: StackProps; }; }"}}}}}catch{}try{m.displayName="Form",m.__docgenInfo={description:"",displayName:"Form",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | Element"}},slots:{defaultValue:null,description:"",name:"slots",required:!1,type:{name:"{ stack?: { props: StackProps; }; }"}},sx:{defaultValue:null,description:"The system prop, which allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},direction:{defaultValue:{value:"'column'"},description:"Defines the `flex-direction` style property.\nIt is applied for all screen sizes.",name:"direction",required:!1,type:{name:'ResponsiveStyleValue<"row" | "column" | "column-reverse" | "row-reverse">'}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | Element"}},submitButtonProps:{defaultValue:null,description:"",name:"submitButtonProps",required:!1,type:{name:"ButtonProps"}},resetButtonProps:{defaultValue:null,description:"",name:"resetButtonProps",required:!1,type:{name:"ButtonProps"}},buttonsPlacement:{defaultValue:null,description:"",name:"buttonsPlacement",required:!1,type:{name:"ActionFooterProps"}}}}}catch{}try{form.displayName="form",form.__docgenInfo={description:"",displayName:"form",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | Element"}},slots:{defaultValue:null,description:"",name:"slots",required:!1,type:{name:"{ stack?: { props: StackProps; }; }"}},sx:{defaultValue:null,description:"The system prop, which allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},direction:{defaultValue:{value:"'column'"},description:"Defines the `flex-direction` style property.\nIt is applied for all screen sizes.",name:"direction",required:!1,type:{name:'ResponsiveStyleValue<"row" | "column" | "column-reverse" | "row-reverse">'}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | Element"}},submitButtonProps:{defaultValue:null,description:"",name:"submitButtonProps",required:!1,type:{name:"ButtonProps"}},resetButtonProps:{defaultValue:null,description:"",name:"resetButtonProps",required:!1,type:{name:"ButtonProps"}},buttonsPlacement:{defaultValue:null,description:"",name:"buttonsPlacement",required:!1,type:{name:"ActionFooterProps"}}}}}catch{}const G=".Mui-error",K=r=>{const{title:i,description:o,loading:t,disabled:a,submitButtonProps:u,resetButtonProps:s,buttonsPlacement:d}=r;return{title:i,description:o,loading:t,disabled:a,submitButtonProps:u,resetButtonProps:s,buttonsPlacement:d}},Z=({scrollOnError:r=!1})=>{if(r===!1)return{};let i={errorQuerySelector:G,behavior:"smooth",useParent:!0};return typeof r=="object"&&(i={...i,...r}),i},F=r=>{const{children:i,validateOnBlur:o=!1,validateOnChange:t=!1,validateOnMount:a=!1,...u}=r,s=p.useRef(),d=K(r),f=Z(r);return n.jsx(U,{validateOnBlur:o,validateOnChange:t,validateOnMount:a,...u,children:x=>{var j;const{errors:V}=x,B=!D(f)&&!D(V),q=!!s.current,y=f.errorQuerySelector||G;if(B&&q){const b=(j=s.current)==null?void 0:j.querySelector(y);if(b){const g=(f.useParent&&b.parentElement?b.parentElement:b).getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:g,behavior:f.behavior})}}return n.jsx(m,{...d,ref:s,handleSubmit:x.handleSubmit,handleReset:x.handleReset,children:i(x)})}})};try{F.displayName="FormikForm",F.__docgenInfo={description:"",displayName:"FormikForm",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | Element"}},slots:{defaultValue:null,description:"",name:"slots",required:!1,type:{name:"{ stack?: { props: StackProps; }; }"}},sx:{defaultValue:null,description:"The system prop, which allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},direction:{defaultValue:{value:"'column'"},description:"Defines the `flex-direction` style property.\nIt is applied for all screen sizes.",name:"direction",required:!1,type:{name:'ResponsiveStyleValue<"row" | "column" | "column-reverse" | "row-reverse">'}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},handleSubmit:{defaultValue:null,description:"",name:"handleSubmit",required:!1,type:{name:"(e?: FormEvent<HTMLFormElement>) => void"}},handleReset:{defaultValue:null,description:"",name:"handleReset",required:!1,type:{name:"(e?: SyntheticEvent<any, Event>) => void"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | Element"}},submitButtonProps:{defaultValue:null,description:"",name:"submitButtonProps",required:!1,type:{name:"ButtonProps"}},resetButtonProps:{defaultValue:null,description:"",name:"resetButtonProps",required:!1,type:{name:"ButtonProps"}},buttonsPlacement:{defaultValue:null,description:"",name:"buttonsPlacement",required:!1,type:{name:"ActionFooterProps"}},scrollOnError:{defaultValue:{value:"false"},description:"",name:"scrollOnError",required:!1,type:{name:"boolean | Partial<ScrollOnErrorProps>"}}}}}catch{}try{formikform.displayName="formikform",formikform.__docgenInfo={description:"",displayName:"formikform",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | Element"}},slots:{defaultValue:null,description:"",name:"slots",required:!1,type:{name:"{ stack?: { props: StackProps; }; }"}},sx:{defaultValue:null,description:"The system prop, which allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},direction:{defaultValue:{value:"'column'"},description:"Defines the `flex-direction` style property.\nIt is applied for all screen sizes.",name:"direction",required:!1,type:{name:'ResponsiveStyleValue<"row" | "column" | "column-reverse" | "row-reverse">'}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},handleSubmit:{defaultValue:null,description:"",name:"handleSubmit",required:!1,type:{name:"(e?: FormEvent<HTMLFormElement>) => void"}},handleReset:{defaultValue:null,description:"",name:"handleReset",required:!1,type:{name:"(e?: SyntheticEvent<any, Event>) => void"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | Element"}},submitButtonProps:{defaultValue:null,description:"",name:"submitButtonProps",required:!1,type:{name:"ButtonProps"}},resetButtonProps:{defaultValue:null,description:"",name:"resetButtonProps",required:!1,type:{name:"ButtonProps"}},buttonsPlacement:{defaultValue:null,description:"",name:"buttonsPlacement",required:!1,type:{name:"ActionFooterProps"}},scrollOnError:{defaultValue:{value:"false"},description:"",name:"scrollOnError",required:!1,type:{name:"boolean | Partial<ScrollOnErrorProps>"}}}}}catch{}const ee="@novatics-ui/form",ne="0.3.2",te="./index.js",re="./index.d.ts",oe={".":{import:"./index.mjs",require:"./index.js"}},ae={"lodash.isempty":"^4.4.0"},se={formik:"^2.2.9"},ie={name:ee,version:ne,main:te,types:re,exports:oe,dependencies:ae,peerDependencies:se};function le(r={}){const{wrapper:i}=Object.assign({},N(),r.components);return i?n.jsx(i,{...r,children:n.jsx(o,{})}):o();function o(){const t=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre",strong:"strong",div:"div",br:"br"},N(),r.components);return n.jsxs(n.Fragment,{children:[n.jsx(J,{title:"Components/Form",component:m}),`
`,n.jsxs(t.h1,{id:"form-",children:["Form ",n.jsx("img",{src:`https://img.shields.io/badge/Version-v${ie.version}-brightgreenn`})]}),`
`,n.jsx(t.h3,{id:"installation",children:"Installation"}),`
`,n.jsxs(t.p,{children:["First install the latest version of the package from ",n.jsx(t.code,{children:"@novatics-ui/form"}),"."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-shell",children:`  yarn add -D @novatics-ui/form
`})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-shell",children:`  npm install --dev @novatics-ui/form
`})}),`
`,n.jsx(t.p,{children:"and use it"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import ... from '@novatics-ui/form';

  ...


`})}),`
`,n.jsx(t.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsxs(t.p,{children:["Our component has some cool features to be explored. We have a ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"title"})})," and ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"description"})}),` built in making easy to have basic forms.
You have submit and reset options out of the box. To use just implement `,n.jsx(t.strong,{children:n.jsx(t.code,{children:"handleSubmit"})})," and ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"handleReset"})}),` functions and pass the props to
`,n.jsx(t.strong,{children:n.jsx(t.code,{children:"submitButtonProps"})})," and ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"resetButtonProps"})}),". To be more flexible we has a ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"buttonsPlacement"})})," option from ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"'@novatics-ui-ui/action-footer'"})}),"."]}),`
`,n.jsxs(t.p,{children:["We add global states ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"direction"})}),", ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"loading"})})," and ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"disabled"})}),", that we pass to all children components. Our maxWidth is 600px but is totally customizable."]}),`
`,n.jsx(v,{children:n.jsx(P,{name:"Basic Usage",children:()=>{const[a,u]=p.useState({name:"",email:""});return n.jsxs(c,{container:!0,spacing:2,children:[n.jsx(c,{item:!0,xs:6,children:n.jsxs(m,{title:"Create a Project",description:"Projects are where your repositories live. They are containers in which you can group similar repositories together for better code organizations.",handleSubmit:async s=>{s.preventDefault(),console.log("call handle submit"),await new Promise(d=>setTimeout(d,500)),alert(JSON.stringify(a,null,2))},submitButtonProps:{children:"Submit"},loading:!0,children:[n.jsx(l,{label:"Project's name",hint:"Some important text",value:a.name,onChange:s=>{u({...a,name:s.target.value})}}),n.jsx(l,{label:"email",value:a.email,onChange:s=>{u({...a,email:s.target.value})}})]})}),n.jsx(c,{item:!0,xs:6,children:n.jsxs(m,{title:"Create a Project",description:"Projects are where your repositories live. They are containers in which you can group similar repositories together for better code organizations.",handleSubmit:async s=>{s.preventDefault(),await new Promise(d=>setTimeout(d,500)),alert(JSON.stringify(a,null,2))},submitButtonProps:{children:"Submit"},handleReset:async s=>{u({name:"",email:""})},resetButtonProps:{children:"Cancel"},children:[n.jsx(l,{label:"Project's name",hint:"Some important text",value:a.name,onChange:s=>{u({...a,name:s.target.value})}}),n.jsx(l,{label:"email",value:a.email,onChange:s=>{u({...a,email:s.target.value})}})]})})]})}})}),`
`,n.jsx(t.h3,{id:"form-with-groups",children:"Form with groups"}),`
`,n.jsxs(t.p,{children:["Our component has some cool features to be explored. We have a ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"title"})})," and ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"description"})}),` built in making easy to have basic forms.
You have submit and reset options out of the box. To use just implement `,n.jsx(t.strong,{children:n.jsx(t.code,{children:"handleSubmit"})})," and ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"handleReset"})}),` functions and pass the props to
`,n.jsx(t.strong,{children:n.jsx(t.code,{children:"submitButtonProps"})})," and ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"resetButtonProps"})}),". To be more flexible we has a ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"buttonsPlacement"})})," option from ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"'@novatics-ui-ui/action-footer'"})}),"."]}),`
`,n.jsxs(t.p,{children:["We add global states ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"direction"})}),", ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"loading"})})," and ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"disabled"})}),", that we pass to all children components. Our maxWidth is 600px but is totally customizable."]}),`
`,n.jsx(v,{children:n.jsx(P,{name:"Form with groups",children:()=>{const[a,u]=p.useState({name:"",email:"",project:""});return n.jsxs(c,{container:!0,spacing:2,children:[n.jsx(c,{item:!0,xs:6,children:n.jsxs(m,{title:"Create a Project",description:"Projects are where your repositories live. They are containers in which you can group similar repositories together for better code organizations.",handleSubmit:async s=>{s.preventDefault(),console.log("call handle submit"),await new Promise(d=>setTimeout(d,500)),alert(JSON.stringify(a,null,2))},submitButtonProps:{children:"Submit"},loading:!0,children:[n.jsx(l,{label:"Project's name",hint:"Some important text",value:a.project,onChange:s=>{u({...a,project:s.target.value})}}),n.jsxs(h,{title:"Personal Info",children:[n.jsx(l,{label:"name",value:a.name,onChange:s=>{u({...a,name:s.target.value})}}),n.jsx(l,{label:"email",value:a.email,onChange:s=>{u({...a,email:s.target.value})}}),n.jsx(w,{label:"agree with terms",labelPlacement:"end"})]}),n.jsx(h,{title:"Company Info",children:n.jsx(l,{label:"name",value:a.name,onChange:s=>{u({...a,name:s.target.value})}})})]})}),n.jsx(c,{item:!0,xs:6,children:n.jsxs(m,{title:"Create a Project",description:"Projects are where your repositories live. They are containers in which you can group similar repositories together for better code organizations.",direction:"row",handleSubmit:async s=>{s.preventDefault(),console.log("call handle submit"),await new Promise(d=>setTimeout(d,500)),alert(JSON.stringify(a,null,2))},submitButtonProps:{children:"Submit"},children:[n.jsx(l,{label:"Project's name",hint:"Some important text",value:a.project,onChange:s=>{u({...a,project:s.target.value})}}),n.jsxs(h,{title:"Personal Info",children:[n.jsx(l,{label:"name",value:a.name,onChange:s=>{u({...a,name:s.target.value})}}),n.jsx(l,{label:"email",value:a.email,onChange:s=>{u({...a,email:s.target.value})}}),n.jsx(w,{label:"agree with terms",labelPlacement:"end"})]}),n.jsx(h,{title:"Company Info",children:n.jsx(l,{label:"name",value:a.name,onChange:s=>{u({...a,name:s.target.value})}})})]})})]})}})}),`
`,n.jsx(t.h3,{id:"form-with-formik",children:"Form with Formik"}),`
`,n.jsxs(t.p,{children:["We create a component that integrates Formik and abstract most of the functions. Also we added a cool functionality: ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"scrollOnError"})}),` prop. If you are using our components @novatics-ui-ui FormikFields it is all set.
but you can modify the selector, the scroll behavior etc.`]}),`
`,n.jsx(v,{children:n.jsx(P,{name:"Forkmik",children:()=>n.jsx(t.div,{style:{display:"flex",flexDirection:"row"},children:n.jsx(F,{title:"Create a Project",description:"Projects are where your repositories live. They are containers in which you can group similar repositories together for better code organizations.",onSubmit:a=>{e.preventDefault()},submitButtonProps:{children:"create"},initialValues:{name:"",email:""},scrollOnError:!0,children:()=>n.jsxs(n.Fragment,{children:[n.jsx(S,{id:"name",name:"name",required:!0}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),"Loooooonnnng",n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),"Loooooonnnng",n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),"Loooooonnnng",n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),"Loooooonnnng form",n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(t.br,{}),n.jsx(S,{id:"email",name:"email"})]})})})})}),`
`,n.jsx(t.h3,{id:"playground",children:"Playground"}),`
`,n.jsx(v,{children:n.jsx(P,{name:"Playground",args:{title:"I am title!",description:"And I, description!",handleSubmit:a=>{a.preventDefault(),console.log("handleSubmit")},submitButtonProps:{children:"create"}},children:a=>n.jsx(m,{...a,children:n.jsx(l,{label:"name"})})})}),`
`,n.jsx(W,{story:"Playground"}),`
`,n.jsx(t.p,{children:"made by Novatics ❤"})]})}}const z=()=>{const[r,i]=p.useState({name:"",email:""});return n.jsxs(c,{container:!0,spacing:2,children:[n.jsx(c,{item:!0,xs:6,children:n.jsxs(m,{title:"Create a Project",description:"Projects are where your repositories live. They are containers in which you can group similar repositories together for better code organizations.",handleSubmit:async o=>{o.preventDefault(),console.log("call handle submit"),await new Promise(t=>setTimeout(t,500)),alert(JSON.stringify(r,null,2))},submitButtonProps:{children:"Submit"},loading:!0,children:[n.jsx(l,{label:"Project's name",hint:"Some important text",value:r.name,onChange:o=>{i({...r,name:o.target.value})}}),n.jsx(l,{label:"email",value:r.email,onChange:o=>{i({...r,email:o.target.value})}})]})}),n.jsx(c,{item:!0,xs:6,children:n.jsxs(m,{title:"Create a Project",description:"Projects are where your repositories live. They are containers in which you can group similar repositories together for better code organizations.",handleSubmit:async o=>{o.preventDefault(),await new Promise(t=>setTimeout(t,500)),alert(JSON.stringify(r,null,2))},submitButtonProps:{children:"Submit"},handleReset:async o=>{i({name:"",email:""})},resetButtonProps:{children:"Cancel"},children:[n.jsx(l,{label:"Project's name",hint:"Some important text",value:r.name,onChange:o=>{i({...r,name:o.target.value})}}),n.jsx(l,{label:"email",value:r.email,onChange:o=>{i({...r,email:o.target.value})}})]})})]})};z.storyName="Basic Usage";z.parameters={storySource:{source:`() => {
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
}`}};const L=()=>{const[r,i]=p.useState({name:"",email:"",project:""});return n.jsxs(c,{container:!0,spacing:2,children:[n.jsx(c,{item:!0,xs:6,children:n.jsxs(m,{title:"Create a Project",description:"Projects are where your repositories live. They are containers in which you can group similar repositories together for better code organizations.",handleSubmit:async o=>{o.preventDefault(),console.log("call handle submit"),await new Promise(t=>setTimeout(t,500)),alert(JSON.stringify(r,null,2))},submitButtonProps:{children:"Submit"},loading:!0,children:[n.jsx(l,{label:"Project's name",hint:"Some important text",value:r.project,onChange:o=>{i({...r,project:o.target.value})}}),n.jsxs(h,{title:"Personal Info",children:[n.jsx(l,{label:"name",value:r.name,onChange:o=>{i({...r,name:o.target.value})}}),n.jsx(l,{label:"email",value:r.email,onChange:o=>{i({...r,email:o.target.value})}}),n.jsx(w,{label:"agree with terms",labelPlacement:"end"})]}),n.jsx(h,{title:"Company Info",children:n.jsx(l,{label:"name",value:r.name,onChange:o=>{i({...r,name:o.target.value})}})})]})}),n.jsx(c,{item:!0,xs:6,children:n.jsxs(m,{title:"Create a Project",description:"Projects are where your repositories live. They are containers in which you can group similar repositories together for better code organizations.",direction:"row",handleSubmit:async o=>{o.preventDefault(),console.log("call handle submit"),await new Promise(t=>setTimeout(t,500)),alert(JSON.stringify(r,null,2))},submitButtonProps:{children:"Submit"},children:[n.jsx(l,{label:"Project's name",hint:"Some important text",value:r.project,onChange:o=>{i({...r,project:o.target.value})}}),n.jsxs(h,{title:"Personal Info",children:[n.jsx(l,{label:"name",value:r.name,onChange:o=>{i({...r,name:o.target.value})}}),n.jsx(l,{label:"email",value:r.email,onChange:o=>{i({...r,email:o.target.value})}}),n.jsx(w,{label:"agree with terms",labelPlacement:"end"})]}),n.jsx(h,{title:"Company Info",children:n.jsx(l,{label:"name",value:r.name,onChange:o=>{i({...r,name:o.target.value})}})})]})})]})};L.storyName="Form with groups";L.parameters={storySource:{source:`() => {
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
}`}};const M=()=>n.jsx("div",{style:{display:"flex",flexDirection:"row"},children:n.jsx(F,{title:"Create a Project",description:"Projects are where your repositories live. They are containers in which you can group similar repositories together for better code organizations.",onSubmit:r=>{e.preventDefault()},submitButtonProps:{children:"create"},initialValues:{name:"",email:""},scrollOnError:!0,children:()=>n.jsxs(n.Fragment,{children:[n.jsx(S,{id:"name",name:"name",required:!0}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),"Loooooonnnng",n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),"Loooooonnnng",n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),"Loooooonnnng",n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),"Loooooonnnng form",n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsx(S,{id:"email",name:"email"})]})})});M.storyName="Forkmik";M.parameters={storySource:{source:`() => {
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
}`}};const _=r=>n.jsx(m,{...r,children:n.jsx(l,{label:"name"})});_.storyName="Playground";_.args={title:"I am title!",description:"And I, description!",handleSubmit:r=>{r.preventDefault(),console.log("handleSubmit")},submitButtonProps:{children:"create"}};_.parameters={storySource:{source:`args => {
  return <Form {...args}>
          <InputField label="name" />
        </Form>;
}`}};const C={title:"Components/Form",component:m,tags:["stories-mdx"],includeStories:["basicUsage","formWithGroups","forkmik","playground"]};C.parameters=C.parameters||{};C.parameters.docs={...C.parameters.docs||{},page:le};const cn=["basicUsage","formWithGroups","forkmik","playground"];export{cn as __namedExportsOrder,z as basicUsage,C as default,M as forkmik,L as formWithGroups,_ as playground};
//# sourceMappingURL=form.stories-79d0b0c4.js.map
