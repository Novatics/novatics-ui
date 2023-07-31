import"./blocks-2646952b.js";import{p as x}from"./package-e5a96903.js";import{F as t}from"./index-45a4cf85.js";import{j as r}from"./jsx-runtime-d079401a.js";import{S as s}from"./Stack-1cdd4a28.js";import{u as l}from"./index-59d6410c.js";import{M as u,C as i,b as c,A as j}from"./index-ed052fae.js";import"./index-f1f2c4b1.js";import"./fonts-0fc9e249.js";import"./typography-18a122d3.js";import"./colors-4f758d22.js";import"./styled-e9f7a44f.js";import"./styled-96cb1edf.js";import"./useThemeProps-09ff92e7.js";import"./Box-c76f688f.js";import"./extendSxProp-2d0de5c8.js";import"./button-2d6e2350.js";import"./Button-056a99df.js";import"./ButtonBase-9787c033.js";import"./emotion-react.browser.esm-ea340576.js";import"./TransitionGroupContext-f23bfbbc.js";import"./useEnhancedEffect-b6928b87.js";import"./useForkRef-f4ecef3a.js";import"./useIsFocusVisible-86ab9ba9.js";import"./Typography-40911622.js";import"./TextField-562a9be1.js";import"./FormControl-b2fd4c8f.js";import"./useFormControl-1157a7e5.js";import"./isMuiElement-c6f52415.js";import"./useId-e3465fec.js";import"./formControlState-a1fb9590.js";import"./FormLabel-1a8f0a37.js";import"./Select-0e8fc70c.js";import"./react-is.production.min-a192e302.js";import"./useTheme-f6b5a289.js";import"./Modal-86e2ebb5.js";import"./index-1c885437.js";import"./objectWithoutPropertiesLoose-6c5c234b.js";import"./ownerWindow-fbe9f185.js";import"./useControlled-953564ff.js";import"./useSlotProps-0150403e.js";import"./isHostComponent-73d6e646.js";import"./Paper-f9935f84.js";import"./List-62a86315.js";import"./createSvgIcon-1b71b914.js";import"./InputBase-97d323da.js";import"./GlobalStyles-03b46f00.js";import"./FormHelperText-51c75e4a.js";import"./styled-e68bd8d0.js";import"./iframe-7a310c27.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";function b(o={}){const{wrapper:p}=Object.assign({},l(),o.components);return p?r.jsx(p,{...o,children:r.jsx(d,{})}):d();function d(){const e=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre"},l(),o.components);return r.jsxs(r.Fragment,{children:[r.jsx(u,{title:"Components/File Upload/FromUrl",component:t}),`
`,r.jsxs(e.h1,{id:"fromurl-",children:["FromUrl ",r.jsx("img",{src:`https://img.shields.io/badge/Version-v${x.version}-brightgreenn`})]}),`
`,r.jsx(e.h3,{id:"installation",children:"Installation"}),`
`,r.jsxs(e.p,{children:["First install the latest version of the package from ",r.jsx(e.code,{children:"@novatics/file-upload"}),"."]}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-bash",children:`yarn add @novatics/file-upload
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
//# sourceMappingURL=from-url.stories-75a62022.js.map
