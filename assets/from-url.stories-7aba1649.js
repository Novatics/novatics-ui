import"./blocks-2646952b.js";import{p as u}from"./package-c7a7281d.js";import{F as t}from"./index-58d4a4b8.js";import{j as r}from"./jsx-runtime-d079401a.js";import{S as s}from"./Stack-525ce7da.js";import{u as l}from"./index-59d6410c.js";import{M as x,C as i,b as c,A as j}from"./index-7b3c0ff1.js";import"./index-f1f2c4b1.js";import"./fonts-0fc9e249.js";import"./typography-18a122d3.js";import"./colors-4f758d22.js";import"./styled-ba1ccae2.js";import"./styled-8d419bbb.js";import"./useThemeProps-09ff92e7.js";import"./Box-dca936ab.js";import"./extendSxProp-2d0de5c8.js";import"./button-90c30461.js";import"./Button-ffe75d99.js";import"./ButtonBase-37ab13bd.js";import"./emotion-react.browser.esm-ea340576.js";import"./TransitionGroupContext-f23bfbbc.js";import"./useEnhancedEffect-b6928b87.js";import"./useForkRef-f4ecef3a.js";import"./useIsFocusVisible-86ab9ba9.js";import"./Typography-1e6be770.js";import"./TextField-46844b9e.js";import"./FormControl-4bd10d07.js";import"./useFormControl-1157a7e5.js";import"./isMuiElement-c6f52415.js";import"./useId-e3465fec.js";import"./formControlState-a1fb9590.js";import"./FormLabel-fe793dd8.js";import"./Select-73599480.js";import"./react-is.production.min-a192e302.js";import"./useTheme-f6b5a289.js";import"./Modal-8a4c8b86.js";import"./index-1c885437.js";import"./objectWithoutPropertiesLoose-6c5c234b.js";import"./ownerWindow-fbe9f185.js";import"./useControlled-953564ff.js";import"./useSlotProps-22d1629f.js";import"./isHostComponent-73d6e646.js";import"./Paper-5a10c0f2.js";import"./List-3aafad03.js";import"./createSvgIcon-631013b5.js";import"./InputBase-f760cab3.js";import"./GlobalStyles-03b46f00.js";import"./FormHelperText-56609053.js";import"./styled-47292171.js";import"./iframe-f01a2f7f.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";function b(o={}){const{wrapper:p}=Object.assign({},l(),o.components);return p?r.jsx(p,{...o,children:r.jsx(d,{})}):d();function d(){const e=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre"},l(),o.components);return r.jsxs(r.Fragment,{children:[r.jsx(x,{title:"Components/File Upload/FromUrl",component:t}),`
`,r.jsxs(e.h1,{id:"fromurl-",children:["FromUrl ",r.jsx("img",{src:`https://img.shields.io/badge/Version-v${u.version}-brightgreenn`})]}),`
`,r.jsx(e.h3,{id:"installation",children:"Installation"}),`
`,r.jsxs(e.p,{children:["First install the latest version of the package from ",r.jsx(e.code,{children:"@novatics-ui/file-upload"}),"."]}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-bash",children:`yarn add @novatics-ui/file-upload
`})}),`
`,r.jsx(e.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,r.jsxs(e.p,{children:["The FromUrl component is part of the FileUpload component. It can be used to upload files from an URL. It has two variants: ",r.jsx(e.code,{children:"single"})," and ",r.jsx(e.code,{children:"combined"}),"."]}),`
`,r.jsx(i,{children:r.jsx(c,{name:"Basic Usage",children:a=>r.jsxs(s,{spacing:2,children:[r.jsx(t,{variant:"single"}),r.jsx(t,{acceptLabels:".CSV, .XLSX",variant:"combined"})]})})}),`
`,r.jsx(e.h3,{id:"states",children:"States"}),`
`,r.jsxs(e.p,{children:["In addition to the default state, the FromUrl component has a disabled and an error state, defined by the ",r.jsx(e.code,{children:"disabled"})," and ",r.jsx(e.code,{children:"error"})," props respectively."]}),`
`,r.jsx(i,{children:r.jsx(c,{name:"States",children:a=>r.jsxs(s,{spacing:2,children:[r.jsx(t,{variant:"combined",placeholder:"Disabled",disabled:!0}),r.jsx(t,{variant:"combined",error:"An error occurred."})]})})}),`
`,r.jsx(e.h3,{id:"playground",children:"Playground"}),`
`,r.jsx(i,{children:r.jsx(c,{name:"Playground",argTypes:{},children:a=>r.jsx(t,{...a})})}),`
`,r.jsx(j,{story:"Playground"})]})}}const h=o=>r.jsxs(s,{spacing:2,children:[r.jsx(t,{variant:"single"}),r.jsx(t,{acceptLabels:".CSV, .XLSX",variant:"combined"})]});h.storyName="Basic Usage";h.parameters={storySource:{source:`args => {
  return <Stack spacing={2}>
          <FromUrl variant="single" />
          <FromUrl acceptLabels=".CSV, .XLSX" variant="combined" />
        </Stack>;
}`}};const g=o=>r.jsxs(s,{spacing:2,children:[r.jsx(t,{variant:"combined",placeholder:"Disabled",disabled:!0}),r.jsx(t,{variant:"combined",error:"An error occurred."})]});g.storyName="States";g.parameters={storySource:{source:`args => {
  return <Stack spacing={2}>
          <FromUrl variant="combined" placeholder="Disabled" disabled />
          <FromUrl variant="combined" error="An error occurred." />
        </Stack>;
}`}};const m=o=>r.jsx(t,{...o});m.storyName="Playground";m.argTypes={};m.parameters={storySource:{source:`args => {
  return <FromUrl {...args} />;
}`}};const n={title:"Components/File Upload/FromUrl",component:t,tags:["stories-mdx"],includeStories:["basicUsage","states","playground"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:b};const br=["basicUsage","states","playground"];export{br as __namedExportsOrder,h as basicUsage,n as default,m as playground,g as states};
//# sourceMappingURL=from-url.stories-7aba1649.js.map
