import"./blocks-2646952b.js";import{j as e}from"./jsx-runtime-d079401a.js";import{a as P,R as V}from"./radio-650db482.js";import"./fonts-0fc9e249.js";import{s as G}from"./styled-ba1ccae2.js";import{F as _}from"./FormControl-4bd10d07.js";import{F as C}from"./FormLabel-fe793dd8.js";import{g as M,c as N}from"./useThemeProps-09ff92e7.js";import{r as f}from"./index-f1f2c4b1.js";import{u as k}from"./useControlled-953564ff.js";import{u as L}from"./useForkRef-f4ecef3a.js";import{u as B}from"./useId-e3465fec.js";import{M as D}from"./FormGroup-ac0387a3.js";import{F as I}from"./FormControlLabel-681f0705.js";import{F as W}from"./FormHelperText-56609053.js";import{S as g}from"./Stack-525ce7da.js";import{u as F}from"./index-59d6410c.js";import{M as E,C as x,b as v}from"./index-7b3c0ff1.js";import"./styled-8d419bbb.js";import"./SwitchBase-bbec3ccf.js";import"./useFormControl-1157a7e5.js";import"./ButtonBase-37ab13bd.js";import"./emotion-react.browser.esm-ea340576.js";import"./TransitionGroupContext-f23bfbbc.js";import"./useEnhancedEffect-b6928b87.js";import"./useIsFocusVisible-86ab9ba9.js";import"./createSvgIcon-631013b5.js";import"./typography-18a122d3.js";import"./colors-4f758d22.js";import"./isMuiElement-c6f52415.js";import"./formControlState-a1fb9590.js";import"./Typography-1e6be770.js";import"./extendSxProp-2d0de5c8.js";import"./styled-47292171.js";import"./iframe-f01a2f7f.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-1c885437.js";import"./index-356e4a49.js";const U=["actions","children","defaultValue","name","onChange","value"],O=f.forwardRef(function(n,i){const{actions:l,children:t,defaultValue:p,name:T,onChange:c,value:y}=n,s=M(n,U),m=f.useRef(null),[b,h]=k({controlled:y,default:p,name:"RadioGroup"});f.useImperativeHandle(l,()=>({focus:()=>{let o=m.current.querySelector("input:not(:disabled):checked");o||(o=m.current.querySelector("input:not(:disabled)")),o&&o.focus()}}),[]);const w=L(i,m),d=B(T),u=f.useMemo(()=>({name:d,onChange(o){h(o.target.value),c&&c(o,o.target.value)},value:b}),[d,c,h,b]);return e.jsx(P.Provider,{value:u,children:e.jsx(D,N({role:"radiogroup",ref:w},s,{children:t}))})}),X=O,Y=G(_)(({direction:a="column"})=>({".MuiFormGroup-root":{flexDirection:a,gap:"0 24px"},".MuiFormLabel-root":{fontWeight:"600",letterSpacing:"1.25px"},".MuiFormControlLabel-root":{margin:"8px 0"},".MuiFormControlLabel-label":{marginLeft:"4px",marginRight:"4px"}})),r=a=>{const{label:n,children:i,direction:l,required:t,options:p,disabled:T,loading:c,hint:y,error:s,labelPlacement:m="end",withTextHelper:b=!0,...h}=a,w=T||c;let d=y;return s&&typeof s!="boolean"&&(d=s),e.jsxs(Y,{direction:l,required:t,children:[n&&e.jsx(C,{children:n}),e.jsxs(X,{...h,children:[p==null?void 0:p.map(u=>e.jsx(I,{value:u.value,control:e.jsx(V,{}),label:u.label,labelPlacement:m,disabled:u.disabled||w},u.value)),i]}),b||d?e.jsx(W,{error:!!s,sx:{minHeight:"17px"},children:d}):null]})};try{r.displayName="RadioGroupField",r.__docgenInfo={description:"",displayName:"RadioGroupField",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"{ label: string; value: string; disabled?: boolean; }[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"ReactNode"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},labelPlacement:{defaultValue:null,description:"",name:"labelPlacement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"start"'},{value:'"end"'}]}},withTextHelper:{defaultValue:null,description:"",name:"withTextHelper",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}try{radiogroupfield.displayName="radiogroupfield",radiogroupfield.__docgenInfo={description:"",displayName:"radiogroupfield",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"{ label: string; value: string; disabled?: boolean; }[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"ReactNode"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},labelPlacement:{defaultValue:null,description:"",name:"labelPlacement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"start"'},{value:'"end"'}]}},withTextHelper:{defaultValue:null,description:"",name:"withTextHelper",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const $="@novatics-ui/radio-group-field",z="0.2.7",A="./index.js",J="./index.d.ts",K={".":{import:"./index.mjs",require:"./index.js"}},Q={name:$,version:z,main:A,types:J,exports:K};function Z(a={}){const{wrapper:n}=Object.assign({},F(),a.components);return n?e.jsx(n,{...a,children:e.jsx(i,{})}):i();function i(){const l=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre"},F(),a.components);return e.jsxs(e.Fragment,{children:[e.jsx(E,{title:"Components/RadioGroupField",component:r}),`
`,e.jsxs(l.h1,{id:"radiogroupfield-",children:["RadioGroupField ",e.jsx("img",{src:`https://img.shields.io/badge/Version-v${Q.version}-brightgreenn`})]}),`
`,e.jsx(l.h3,{id:"installation",children:"Installation"}),`
`,e.jsxs(l.p,{children:["First install the latest version of the package from ",e.jsx(l.code,{children:"@novatics-ui/radio-group-field"}),"."]}),`
`,e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-shell",children:`  yarn add -D @novatics-ui/radio-group-field
`})}),`
`,e.jsx(l.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsxs(l.p,{children:["The ",e.jsx(l.code,{children:"RadioGroupField"})," component allows the creation of a field composed of radio buttons."]}),`
`,e.jsx(x,{children:e.jsx(v,{name:"Basic Usage",children:t=>e.jsx(r,{label:"Is this a radio group?",withTextHelper:!1,options:[{label:"Yes",value:"yes"},{label:"Probably",value:"probably"},{label:"No",value:"no",disabled:!0}],...t})})}),`
`,e.jsx(l.h3,{id:"direction",children:"Direction"}),`
`,e.jsxs(l.p,{children:["The ",e.jsx(l.code,{children:"direction"})," prop allows the user to change the direction of the radio buttons. The default value is ",e.jsx(l.code,{children:"column"})]}),`
`,e.jsx(x,{children:e.jsx(v,{name:"Direction",children:t=>e.jsx(r,{label:"Radio Group Field",direction:"row",withTextHelper:!1,options:[{label:"First",value:"1"},{label:"Second",value:"2"},{label:"Third",value:"3"}],...t})})}),`
`,e.jsx(l.h3,{id:"helper-text",children:"Helper Text"}),`
`,e.jsxs(l.p,{children:["The ",e.jsx(l.code,{children:"withTextHelper"})," prop allows the user to add a hint or show an error to the field. By default, it is set to ",e.jsx(l.code,{children:"true"}),"."]}),`
`,e.jsx(x,{children:e.jsx(v,{name:"Helper Text",children:t=>e.jsxs(g,{spacing:5,direction:"row",children:[e.jsx(r,{label:"With Hint",hint:"This is a hint",withTextHelper:!0,options:[{label:"First",value:"1"},{label:"Second",value:"2"},{label:"Third",value:"3"}],...t}),e.jsx(r,{label:"With Error",error:"This is an error",withTextHelper:!0,options:[{label:"First",value:"1"},{label:"Second",value:"2"},{label:"Third",value:"3"}],...t})]})})}),`
`,e.jsx(l.h3,{id:"label-placement",children:"Label Placement"}),`
`,e.jsxs(l.p,{children:["The ",e.jsx(l.code,{children:"labelPlacement"})," prop allows the user to change the position of the label. The default value is ",e.jsx(l.code,{children:"end"}),"."]}),`
`,e.jsx(x,{children:e.jsx(v,{name:"Label Placement",children:t=>e.jsxs(g,{spacing:5,children:[e.jsx(r,{label:"Start",withTextHelper:!1,direction:"row",labelPlacement:"start",options:[{label:"First",value:"1"},{label:"Second",value:"2"},{label:"Third",value:"3"}],...t}),e.jsx(r,{label:"Bottom",withTextHelper:!1,direction:"row",labelPlacement:"bottom",options:[{label:"First",value:"1"},{label:"Second",value:"2"},{label:"Third",value:"3"}],...t}),e.jsx(r,{label:"Top",withTextHelper:!1,direction:"row",labelPlacement:"top",options:[{label:"First",value:"1"},{label:"Second",value:"2"},{label:"Third",value:"3"}],...t})]})})}),`
`,e.jsx(l.p,{children:"made by Novatics ❤"})]})}}const S=a=>e.jsx(r,{label:"Is this a radio group?",withTextHelper:!1,options:[{label:"Yes",value:"yes"},{label:"Probably",value:"probably"},{label:"No",value:"no",disabled:!0}],...a});S.storyName="Basic Usage";S.parameters={storySource:{source:`args => {
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
}`}};const H=a=>e.jsx(r,{label:"Radio Group Field",direction:"row",withTextHelper:!1,options:[{label:"First",value:"1"},{label:"Second",value:"2"},{label:"Third",value:"3"}],...a});H.storyName="Direction";H.parameters={storySource:{source:`args => {
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
}`}};const R=a=>e.jsxs(g,{spacing:5,direction:"row",children:[e.jsx(r,{label:"With Hint",hint:"This is a hint",withTextHelper:!0,options:[{label:"First",value:"1"},{label:"Second",value:"2"},{label:"Third",value:"3"}],...a}),e.jsx(r,{label:"With Error",error:"This is an error",withTextHelper:!0,options:[{label:"First",value:"1"},{label:"Second",value:"2"},{label:"Third",value:"3"}],...a})]});R.storyName="Helper Text";R.parameters={storySource:{source:`args => {
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
}`}};const q=a=>e.jsxs(g,{spacing:5,children:[e.jsx(r,{label:"Start",withTextHelper:!1,direction:"row",labelPlacement:"start",options:[{label:"First",value:"1"},{label:"Second",value:"2"},{label:"Third",value:"3"}],...a}),e.jsx(r,{label:"Bottom",withTextHelper:!1,direction:"row",labelPlacement:"bottom",options:[{label:"First",value:"1"},{label:"Second",value:"2"},{label:"Third",value:"3"}],...a}),e.jsx(r,{label:"Top",withTextHelper:!1,direction:"row",labelPlacement:"top",options:[{label:"First",value:"1"},{label:"Second",value:"2"},{label:"Third",value:"3"}],...a})]});q.storyName="Label Placement";q.parameters={storySource:{source:`args => {
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
}`}};const j={title:"Components/RadioGroupField",component:r,tags:["stories-mdx"],includeStories:["basicUsage","direction","helperText","labelPlacement"]};j.parameters=j.parameters||{};j.parameters.docs={...j.parameters.docs||{},page:Z};const De=["basicUsage","direction","helperText","labelPlacement"];export{De as __namedExportsOrder,S as basicUsage,j as default,H as direction,R as helperText,q as labelPlacement};
//# sourceMappingURL=radio-group-field.stories-258cb4f3.js.map
