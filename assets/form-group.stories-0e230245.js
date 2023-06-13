import"./blocks-2646952b.js";import{F as i}from"./form-group-570be20b.js";import{I as t}from"./input-formik-field-ddb0b818.js";import{j as e}from"./jsx-runtime-5926aa06.js";import{u as p}from"./index-bda0bad7.js";import{M as g,C as s,S as c}from"./index-aede8984.js";import"./emotion-react-jsx-runtime.browser.esm-780ca0af.js";import"./useThemeProps-d5e886d2.js";import"./index-ebeaab24.js";import"./emotion-react.browser.esm-3c2a4d00.js";import"./FormGroup-22422e7f.js";import"./styled-7ccf6b9d.js";import"./useFormControl-0ef100e1.js";import"./formControlState-a1fb9590.js";import"./Stack-41f737ce.js";import"./styled-6978ccc8.js";import"./extendSxProp-f682d789.js";import"./Typography-ca488b04.js";import"./formik.esm-42e74a6c.js";import"./InputBase-6182c5a5.js";import"./FormControl-4693dbe6.js";import"./isMuiElement-b72c78c9.js";import"./objectWithoutPropertiesLoose-6c5c234b.js";import"./index-ce6f85b9.js";import"./useForkRef-3ff4e0b8.js";import"./ownerWindow-74a9cc60.js";import"./isHostComponent-73d6e646.js";import"./GlobalStyles-8191be96.js";import"./FormLabel-f6a506a2.js";import"./FormHelperText-e9f24eca.js";import"./iframe-a075aaff.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";const x="@novatics/form-group",j="0.1.0",S="./index.js",b="./index.d.ts",F={".":{import:"./index.mjs",require:"./index.js"}},q={name:x,version:j,main:S,types:b,exports:F};function f(n={}){const{wrapper:a}=Object.assign({},p(),n.components);return a?e.jsx(a,{...n,children:e.jsx(l,{})}):l();function l(){const r=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre"},p(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"FormGroup",component:i}),`
`,e.jsxs(r.h1,{id:"formgroup-",children:["FormGroup ",e.jsx("img",{src:`https://img.shields.io/badge/Version-v${q.version}-brightgreenn`})]}),`
`,e.jsx(r.h3,{id:"installation",children:"Installation"}),`
`,e.jsxs(r.p,{children:["First install the latest version of the package from ",e.jsx(r.code,{children:"@novatics/form-group"}),"."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-shell",children:`  yarn add -D @novatics/form-group
`})}),`
`,e.jsx(r.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"FormGroup"})," component groups input components together. It can be used to create sections in a form."]}),`
`,e.jsx(s,{children:e.jsx(c,{name:"Basic Usage",children:d=>e.jsxs(i,{title:"Project Settings",direction:"column",children:[e.jsx(t,{label:"Project's name",required:!0,hint:"Some important text"}),e.jsx(t,{label:"Key",required:!0})]})})}),`
`,e.jsx(r.h3,{id:"spacing",children:"Spacing"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"titleSpacing"})," prop can be used to regulate the spacing between the title and the children, and the ",e.jsx(r.code,{children:"childrenSpacing"})," component can be used to control the spacing between the children."]}),`
`,e.jsx(s,{children:e.jsx(c,{name:"Spacing",children:d=>e.jsxs(i,{title:"Smaller Title Spacing",titleSpacing:1,childrenSpacing:3.5,direction:"column",children:[e.jsx(t,{label:"First child",required:!0,hint:"Bigger spacing between children"}),e.jsx(t,{label:"Second child",required:!0})]})})}),`
`,e.jsx(r.h3,{id:"direction",children:"Direction"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"direction"})," prop can be used to change the direction of the children. The default value is ",e.jsx(r.code,{children:"column"}),"."]}),`
`,e.jsx(s,{children:e.jsx(c,{name:"Direction",children:d=>e.jsxs(i,{title:"Project Settings",direction:"row",children:[e.jsx(t,{label:"First",required:!0,hint:"Some important text"}),e.jsx(t,{label:"Second",required:!0}),e.jsx(t,{label:"Third",required:!0})]})})}),`
`,e.jsx(r.p,{children:"made by Novatics ❤"})]})}}const m=n=>e.jsxs(i,{title:"Project Settings",direction:"column",children:[e.jsx(t,{label:"Project's name",required:!0,hint:"Some important text"}),e.jsx(t,{label:"Key",required:!0})]});m.storyName="Basic Usage";m.parameters={storySource:{source:`args => {
  return <FormGroup title={"Project Settings"} direction="column">
          <InputField label="Project's name" required hint="Some important text" />
          <InputField label="Key" required />
        </FormGroup>;
}`}};const u=n=>e.jsxs(i,{title:"Smaller Title Spacing",titleSpacing:1,childrenSpacing:3.5,direction:"column",children:[e.jsx(t,{label:"First child",required:!0,hint:"Bigger spacing between children"}),e.jsx(t,{label:"Second child",required:!0})]});u.storyName="Spacing";u.parameters={storySource:{source:`args => {
  return <FormGroup title={"Smaller Title Spacing"} titleSpacing={1} childrenSpacing={3.5} direction="column">
          <InputField label="First child" required hint="Bigger spacing between children" />
          <InputField label="Second child" required />
        </FormGroup>;
}`}};const h=n=>e.jsxs(i,{title:"Project Settings",direction:"row",children:[e.jsx(t,{label:"First",required:!0,hint:"Some important text"}),e.jsx(t,{label:"Second",required:!0}),e.jsx(t,{label:"Third",required:!0})]});h.storyName="Direction";h.parameters={storySource:{source:`args => {
  return <FormGroup title={"Project Settings"} direction="row">
          <InputField label="First" required hint="Some important text" />
          <InputField label="Second" required />
          <InputField label="Third" required />
        </FormGroup>;
}`}};const o={title:"FormGroup",component:i,tags:["stories-mdx"],includeStories:["basicUsage","spacing","direction"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:f};const ie=["basicUsage","spacing","direction"];export{ie as __namedExportsOrder,m as basicUsage,o as default,h as direction,u as spacing};
//# sourceMappingURL=form-group.stories-0e230245.js.map
