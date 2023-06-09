import"./blocks-2646952b.js";import{a as S,j as f}from"./emotion-react-jsx-runtime.browser.esm-780ca0af.js";import{R as G,a as _}from"./radio-fea09b05.js";import"./fonts-570bed1b.js";import{s as M}from"./styled-c3137343.js";import{M as C}from"./FormControl-3b21ba3b.js";import{a as N,c as k}from"./useThemeProps-d5e886d2.js";import{r as x}from"./index-ebeaab24.js";import{j as e}from"./jsx-runtime-5926aa06.js";import{u as L}from"./useId-b93361cb.js";import{M as B}from"./FormGroup-ad2d9ccb.js";import{u as D}from"./useControlled-5355145e.js";import{a as I}from"./useForkRef-3ff4e0b8.js";import{M as W}from"./FormControlLabel-6855556c.js";import{M as E,F as U}from"./FormLabel-67756245.js";import{S as T}from"./Stack-240bb8e0.js";import{u as H}from"./index-bda0bad7.js";import{M as O,C as v,S as g}from"./index-d8b4cc73.js";import"./emotion-react.browser.esm-3c2a4d00.js";import"./styled-567cb11a.js";import"./SwitchBase-f63d9b85.js";import"./useFormControl-0ef100e1.js";import"./ButtonBase-5cfd7616.js";import"./TransitionGroupContext-8ebc3921.js";import"./createSvgIcon-3d4a6cff.js";import"./typography-6dc0827f.js";import"./isMuiElement-b72c78c9.js";import"./formControlState-a1fb9590.js";import"./Typography-2327c7c0.js";import"./extendSxProp-f682d789.js";import"./styled-ae380605.js";import"./iframe-fd3d5880.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ce6f85b9.js";import"./index-356e4a49.js";const X=["actions","children","defaultValue","name","onChange","value"],Y=x.forwardRef(function(t,i){const{actions:l,children:n,defaultValue:c,name:y,onChange:p,value:w}=t,s=N(t,X),m=x.useRef(null),[b,h]=D({controlled:w,default:c,name:"RadioGroup"});x.useImperativeHandle(l,()=>({focus:()=>{let o=m.current.querySelector("input:not(:disabled):checked");o||(o=m.current.querySelector("input:not(:disabled)")),o&&o.focus()}}),[]);const F=I(i,m),d=L(y),u=x.useMemo(()=>({name:d,onChange(o){h(o.target.value),p&&p(o,o.target.value)},value:b}),[d,p,h,b]);return e.jsx(G.Provider,{value:u,children:e.jsx(B,k({role:"radiogroup",ref:F},s,{children:n}))})}),$=Y,z=M(C)(({direction:a="column"})=>({".MuiFormGroup-root":{flexDirection:a,gap:"0 24px"},".MuiFormLabel-root":{fontWeight:"600",letterSpacing:"1.25px"},".MuiFormControlLabel-root":{margin:"8px 0"},".MuiFormControlLabel-label":{marginLeft:"4px",marginRight:"4px"}})),r=a=>{const{label:t,children:i,direction:l,required:n,options:c,disabled:y,loading:p,hint:w,error:s,labelPlacement:m="end",withTextHelper:b=!0,...h}=a,F=y||p;let d=w;return s&&typeof s!="boolean"&&(d=s),S(z,{direction:l,required:n,children:[t&&f(E,{children:t}),S($,{...h,children:[c==null?void 0:c.map(u=>f(W,{value:u.value,control:f(_,{}),label:u.label,labelPlacement:m,disabled:u.disabled||F},u.value)),i]}),b||d?f(U,{error:!!s,sx:{minHeight:"17px"},children:d}):null]})};try{r.displayName="RadioGroupField",r.__docgenInfo={description:"",displayName:"RadioGroupField",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"{ label: string; value: string; disabled?: boolean; }[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"ReactNode"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'}]}},labelPlacement:{defaultValue:null,description:"",name:"labelPlacement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"end"'},{value:'"start"'}]}},withTextHelper:{defaultValue:null,description:"",name:"withTextHelper",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}try{radiogroupfield.displayName="radiogroupfield",radiogroupfield.__docgenInfo={description:"",displayName:"radiogroupfield",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"{ label: string; value: string; disabled?: boolean; }[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"ReactNode"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'}]}},labelPlacement:{defaultValue:null,description:"",name:"labelPlacement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"end"'},{value:'"start"'}]}},withTextHelper:{defaultValue:null,description:"",name:"withTextHelper",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const A="@novatics/radio-group-field",J="0.0.1",K="./index.js",Q="./index.d.ts",Z={".":{import:"./index.mjs",require:"./index.js"}},ee={name:A,version:J,main:K,types:Q,exports:Z};function le(a={}){const{wrapper:t}=Object.assign({},H(),a.components);return t?e.jsx(t,{...a,children:e.jsx(i,{})}):i();function i(){const l=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre"},H(),a.components);return e.jsxs(e.Fragment,{children:[e.jsx(O,{title:"RadioGroupField",component:r}),`
`,e.jsxs(l.h1,{id:"radiogroupfield-",children:["RadioGroupField ",e.jsx("img",{src:`https://img.shields.io/badge/Version-v${ee.version}-brightgreenn`})]}),`
`,e.jsx(l.h3,{id:"installation",children:"Installation"}),`
`,e.jsxs(l.p,{children:["First install the latest version of the package from ",e.jsx(l.code,{children:"@novatics/radio-group-field"}),"."]}),`
`,e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-shell",children:`  yarn add -D @novatics/radio-group-field
`})}),`
`,e.jsx(l.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsxs(l.p,{children:["The ",e.jsx(l.code,{children:"RadioGroupField"})," component allows the creation of a field composed of radio buttons."]}),`
`,e.jsx(v,{children:e.jsx(g,{name:"Basic Usage",children:n=>e.jsx(r,{label:"Is this a radio group?",withTextHelper:!1,options:[{label:"Yes",value:"yes"},{label:"Probably",value:"probably"},{label:"No",value:"no",disabled:!0}],...n})})}),`
`,e.jsx(l.h3,{id:"direction",children:"Direction"}),`
`,e.jsxs(l.p,{children:["The ",e.jsx(l.code,{children:"direction"})," prop allows the user to change the direction of the radio buttons. The default value is ",e.jsx(l.code,{children:"column"})]}),`
`,e.jsx(v,{children:e.jsx(g,{name:"Direction",children:n=>e.jsx(r,{label:"Radio Group Field",direction:"row",withTextHelper:!1,options:[{label:"First",value:"1"},{label:"Second",value:"2"},{label:"Third",value:"3"}],...n})})}),`
`,e.jsx(l.h3,{id:"helper-text",children:"Helper Text"}),`
`,e.jsxs(l.p,{children:["The ",e.jsx(l.code,{children:"withTextHelper"})," prop allows the user to add a hint or show an error to the field. By default, it is set to ",e.jsx(l.code,{children:"true"}),"."]}),`
`,e.jsx(v,{children:e.jsx(g,{name:"Helper Text",children:n=>e.jsxs(T,{spacing:5,direction:"row",children:[e.jsx(r,{label:"With Hint",hint:"This is a hint",withTextHelper:!0,options:[{label:"First",value:"1"},{label:"Second",value:"2"},{label:"Third",value:"3"}],...n}),e.jsx(r,{label:"With Error",error:"This is an error",withTextHelper:!0,options:[{label:"First",value:"1"},{label:"Second",value:"2"},{label:"Third",value:"3"}],...n})]})})}),`
`,e.jsx(l.h3,{id:"label-placement",children:"Label Placement"}),`
`,e.jsxs(l.p,{children:["The ",e.jsx(l.code,{children:"labelPlacement"})," prop allows the user to change the position of the label. The default value is ",e.jsx(l.code,{children:"end"}),"."]}),`
`,e.jsx(v,{children:e.jsx(g,{name:"Label Placement",children:n=>e.jsxs(T,{spacing:5,children:[e.jsx(r,{label:"Start",withTextHelper:!1,direction:"row",labelPlacement:"start",options:[{label:"First",value:"1"},{label:"Second",value:"2"},{label:"Third",value:"3"}],...n}),e.jsx(r,{label:"Bottom",withTextHelper:!1,direction:"row",labelPlacement:"bottom",options:[{label:"First",value:"1"},{label:"Second",value:"2"},{label:"Third",value:"3"}],...n}),e.jsx(r,{label:"Top",withTextHelper:!1,direction:"row",labelPlacement:"top",options:[{label:"First",value:"1"},{label:"Second",value:"2"},{label:"Third",value:"3"}],...n})]})})}),`
`,e.jsx(l.p,{children:"made by Novatics ❤"})]})}}const R=a=>e.jsx(r,{label:"Is this a radio group?",withTextHelper:!1,options:[{label:"Yes",value:"yes"},{label:"Probably",value:"probably"},{label:"No",value:"no",disabled:!0}],...a});R.storyName="Basic Usage";R.parameters={storySource:{source:`args => {
  return <RadioGroupField label="Is this a radio group?" withTextHelper={false} options={[{
    label: "Yes",
    value: "yes"
  }, {
    label: "Probably",
    value: "probably"
  }, {
    label: "No",
    value: "no",
    disabled: true
  }]} {...args} />;
}`}};const q=a=>e.jsx(r,{label:"Radio Group Field",direction:"row",withTextHelper:!1,options:[{label:"First",value:"1"},{label:"Second",value:"2"},{label:"Third",value:"3"}],...a});q.storyName="Direction";q.parameters={storySource:{source:`args => {
  return <RadioGroupField label="Radio Group Field" direction="row" withTextHelper={false} options={[{
    label: "First",
    value: "1"
  }, {
    label: "Second",
    value: "2"
  }, {
    label: "Third",
    value: "3"
  }]} {...args} />;
}`}};const P=a=>e.jsxs(T,{spacing:5,direction:"row",children:[e.jsx(r,{label:"With Hint",hint:"This is a hint",withTextHelper:!0,options:[{label:"First",value:"1"},{label:"Second",value:"2"},{label:"Third",value:"3"}],...a}),e.jsx(r,{label:"With Error",error:"This is an error",withTextHelper:!0,options:[{label:"First",value:"1"},{label:"Second",value:"2"},{label:"Third",value:"3"}],...a})]});P.storyName="Helper Text";P.parameters={storySource:{source:`args => {
  return <Stack spacing={5} direction="row">
          <RadioGroupField label="With Hint" hint="This is a hint" withTextHelper options={[{
      label: "First",
      value: "1"
    }, {
      label: "Second",
      value: "2"
    }, {
      label: "Third",
      value: "3"
    }]} {...args} />
          <RadioGroupField label="With Error" error="This is an error" withTextHelper options={[{
      label: "First",
      value: "1"
    }, {
      label: "Second",
      value: "2"
    }, {
      label: "Third",
      value: "3"
    }]} {...args} />
        </Stack>;
}`}};const V=a=>e.jsxs(T,{spacing:5,children:[e.jsx(r,{label:"Start",withTextHelper:!1,direction:"row",labelPlacement:"start",options:[{label:"First",value:"1"},{label:"Second",value:"2"},{label:"Third",value:"3"}],...a}),e.jsx(r,{label:"Bottom",withTextHelper:!1,direction:"row",labelPlacement:"bottom",options:[{label:"First",value:"1"},{label:"Second",value:"2"},{label:"Third",value:"3"}],...a}),e.jsx(r,{label:"Top",withTextHelper:!1,direction:"row",labelPlacement:"top",options:[{label:"First",value:"1"},{label:"Second",value:"2"},{label:"Third",value:"3"}],...a})]});V.storyName="Label Placement";V.parameters={storySource:{source:`args => {
  return <Stack spacing={5}>
          <RadioGroupField label="Start" withTextHelper={false} direction="row" labelPlacement="start" options={[{
      label: "First",
      value: "1"
    }, {
      label: "Second",
      value: "2"
    }, {
      label: "Third",
      value: "3"
    }]} {...args} />
          <RadioGroupField label="Bottom" withTextHelper={false} direction="row" labelPlacement="bottom" options={[{
      label: "First",
      value: "1"
    }, {
      label: "Second",
      value: "2"
    }, {
      label: "Third",
      value: "3"
    }]} {...args} />
          <RadioGroupField label="Top" withTextHelper={false} direction="row" labelPlacement="top" options={[{
      label: "First",
      value: "1"
    }, {
      label: "Second",
      value: "2"
    }, {
      label: "Third",
      value: "3"
    }]} {...args} />
        </Stack>;
}`}};const j={title:"RadioGroupField",component:r,tags:["stories-mdx"],includeStories:["basicUsage","direction","helperText","labelPlacement"]};j.parameters=j.parameters||{};j.parameters.docs={...j.parameters.docs||{},page:le};const Be=["basicUsage","direction","helperText","labelPlacement"];export{Be as __namedExportsOrder,R as basicUsage,j as default,q as direction,P as helperText,V as labelPlacement};
//# sourceMappingURL=radio-group-field.stories-7e362617.js.map
