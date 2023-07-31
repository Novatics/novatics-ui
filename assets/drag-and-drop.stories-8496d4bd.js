import"./blocks-2646952b.js";import{p as x}from"./package-e5a96903.js";import{D as n}from"./index-0a69784f.js";import{j as e}from"./jsx-runtime-d079401a.js";import{S as t}from"./Stack-1cdd4a28.js";import{B as g}from"./Box-c76f688f.js";import{u as m}from"./index-59d6410c.js";import{M as j,C as o,b as d,A as G}from"./index-ed052fae.js";import"./index-f1f2c4b1.js";import"./fonts-0fc9e249.js";import"./typography-18a122d3.js";import"./colors-4f758d22.js";import"./styled-e9f7a44f.js";import"./styled-96cb1edf.js";import"./useThemeProps-09ff92e7.js";import"./button-2d6e2350.js";import"./Button-056a99df.js";import"./ButtonBase-9787c033.js";import"./emotion-react.browser.esm-ea340576.js";import"./TransitionGroupContext-f23bfbbc.js";import"./useEnhancedEffect-b6928b87.js";import"./useForkRef-f4ecef3a.js";import"./useIsFocusVisible-86ab9ba9.js";import"./Typography-40911622.js";import"./extendSxProp-2d0de5c8.js";import"./createSvgIcon-1b71b914.js";import"./styled-e68bd8d0.js";import"./iframe-7a310c27.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-1c885437.js";import"./index-356e4a49.js";function b(a={}){const{wrapper:p}=Object.assign({},m(),a.components);return p?e.jsx(p,{...a,children:e.jsx(l,{})}):l();function l(){const r=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre"},m(),a.components);return e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Components/File Upload/DragAndDrop",component:n}),`
`,e.jsxs(r.h1,{id:"draganddrop-",children:["DragAndDrop ",e.jsx("img",{src:`https://img.shields.io/badge/Version-v${x.version}-brightgreenn`})]}),`
`,e.jsx(r.h3,{id:"installation",children:"Installation"}),`
`,e.jsxs(r.p,{children:["First install the latest version of the package from ",e.jsx(r.code,{children:"@novatics/file-upload"}),"."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-bash",children:`yarn add @novatics/file-upload
`})}),`
`,e.jsx(r.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsxs(r.p,{children:["The DragAndDrop component is part of the FileUpload component. It can be used to upload files by dragging and drop files or by clicking on the button to select them. It has two variants: ",e.jsx(r.code,{children:"fullscreen"})," and ",e.jsx(r.code,{children:"inline"}),"."]}),`
`,e.jsx(o,{children:e.jsx(d,{name:"Basic Usage",children:i=>e.jsxs(t,{width:"50rem",spacing:2,children:[e.jsx(n,{variant:"fullscreen",multiple:!0,acceptedLabels:"JPG, PNG and GIF"}),e.jsx(n,{variant:"inline",acceptedLabels:"JPG, PNG and GIF"})]})})}),`
`,e.jsx(r.h3,{id:"states",children:"States"}),`
`,e.jsxs(r.p,{children:["In addition to the default state, the DragAndDop component has a disabled and an error state, defined by the ",e.jsx(r.code,{children:"disabled"})," and ",e.jsx(r.code,{children:"error"})," props respectively."]}),`
`,e.jsx(o,{children:e.jsx(d,{name:"States",children:i=>e.jsxs(t,{spacing:2,width:"50rem",children:[e.jsx(n,{variant:"inline",disabled:!0,acceptedLabels:"JPG, PNG and GIF"}),e.jsx(n,{variant:"inline",acceptedLabels:"JPG, PNG and GIF",error:"An error occurred."})]})})}),`
`,e.jsx(r.h3,{id:"playground",children:"Playground"}),`
`,e.jsx(o,{children:e.jsx(d,{name:"Playground",argTypes:{},children:i=>e.jsx(g,{width:"50rem",children:e.jsx(n,{...i})})})}),`
`,e.jsx(G,{story:"Playground"})]})}}const h=a=>e.jsxs(t,{width:"50rem",spacing:2,children:[e.jsx(n,{variant:"fullscreen",multiple:!0,acceptedLabels:"JPG, PNG and GIF"}),e.jsx(n,{variant:"inline",acceptedLabels:"JPG, PNG and GIF"})]});h.storyName="Basic Usage";h.parameters={storySource:{source:`args => {
  return <Stack width="50rem" spacing={2}>
          <DragAndDrop variant="fullscreen" multiple acceptedLabels="JPG, PNG and GIF" />
          <DragAndDrop variant="inline" acceptedLabels="JPG, PNG and GIF" />
        </Stack>;
}`}};const u=a=>e.jsxs(t,{spacing:2,width:"50rem",children:[e.jsx(n,{variant:"inline",disabled:!0,acceptedLabels:"JPG, PNG and GIF"}),e.jsx(n,{variant:"inline",acceptedLabels:"JPG, PNG and GIF",error:"An error occurred."})]});u.storyName="States";u.parameters={storySource:{source:`args => {
  return <Stack spacing={2} width="50rem">
          <DragAndDrop variant="inline" disabled acceptedLabels="JPG, PNG and GIF" />
          <DragAndDrop variant="inline" acceptedLabels="JPG, PNG and GIF" error="An error occurred." />
        </Stack>;
}`}};const c=a=>e.jsx(g,{width:"50rem",children:e.jsx(n,{...a})});c.storyName="Playground";c.argTypes={};c.parameters={storySource:{source:`args => {
  return <Box width="50rem">
          <DragAndDrop {...args} />
        </Box>;
}`}};const s={title:"Components/File Upload/DragAndDrop",component:n,tags:["stories-mdx"],includeStories:["basicUsage","states","playground"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:b};const Y=["basicUsage","states","playground"];export{Y as __namedExportsOrder,h as basicUsage,s as default,c as playground,u as states};
//# sourceMappingURL=drag-and-drop.stories-8496d4bd.js.map
