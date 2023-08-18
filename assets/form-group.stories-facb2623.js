import"./blocks-2646952b.js";import{F as i}from"./form-group-6062504a.js";import{I as t}from"./input-formik-field-bbbea402.js";import{j as e}from"./jsx-runtime-d079401a.js";import{u as p}from"./index-59d6410c.js";import{M as g,C as s,b as c}from"./index-c0bdbd3b.js";import"./index-f1f2c4b1.js";import"./Stack-d7490fa0.js";import"./styled-f07ce2e9.js";import"./useThemeProps-09ff92e7.js";import"./styled-e9eabfd7.js";import"./extendSxProp-2d0de5c8.js";import"./Typography-75c90882.js";import"./FormGroup-99f7769d.js";import"./useFormControl-1157a7e5.js";import"./formControlState-a1fb9590.js";import"./formik.esm-6c9dd87e.js";import"./emotion-react.browser.esm-ea340576.js";import"./FormControl-e1cad121.js";import"./isMuiElement-c6f52415.js";import"./FormLabel-6cecdd6c.js";import"./InputBase-c5fed7d7.js";import"./useForkRef-f4ecef3a.js";import"./useEnhancedEffect-b6928b87.js";import"./objectWithoutPropertiesLoose-6c5c234b.js";import"./index-1c885437.js";import"./ownerWindow-fbe9f185.js";import"./isHostComponent-73d6e646.js";import"./GlobalStyles-03b46f00.js";import"./FormHelperText-6e66810c.js";import"./iframe-d03ddba5.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";const x="@novatics-ui/form-group",j="0.2.1",b="./index.js",S="./index.d.ts",F={".":{import:"./index.mjs",require:"./index.js"}},q={name:x,version:j,main:b,types:S,exports:F};function f(n={}){const{wrapper:a}=Object.assign({},p(),n.components);return a?e.jsx(a,{...n,children:e.jsx(l,{})}):l();function l(){const r=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre"},p(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Components/FormGroup",component:i}),`
`,e.jsxs(r.h1,{id:"formgroup-",children:["FormGroup ",e.jsx("img",{src:`https://img.shields.io/badge/Version-v${q.version}-brightgreenn`})]}),`
`,e.jsx(r.h3,{id:"installation",children:"Installation"}),`
`,e.jsxs(r.p,{children:["First install the latest version of the package from ",e.jsx(r.code,{children:"@novatics-ui/form-group"}),"."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-shell",children:`  yarn add -D @novatics-ui/form-group
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
}`}};const o={title:"Components/FormGroup",component:i,tags:["stories-mdx"],includeStories:["basicUsage","spacing","direction"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:f};const ie=["basicUsage","spacing","direction"];export{ie as __namedExportsOrder,m as basicUsage,o as default,h as direction,u as spacing};
//# sourceMappingURL=form-group.stories-facb2623.js.map
