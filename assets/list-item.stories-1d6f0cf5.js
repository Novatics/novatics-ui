import"./blocks-2646952b.js";import{p as j}from"./package-c7a7281d.js";import{L as r}from"./index-adaf5497.js";import{j as e}from"./jsx-runtime-d079401a.js";import{S as n}from"./Stack-525ce7da.js";import{B as h}from"./Box-dca936ab.js";import{u as p}from"./index-59d6410c.js";import{M as w,C as a,b as o,A as N}from"./index-7b3c0ff1.js";import"./fonts-0fc9e249.js";import"./typography-18a122d3.js";import"./colors-4f758d22.js";import"./styled-ba1ccae2.js";import"./styled-8d419bbb.js";import"./useThemeProps-09ff92e7.js";import"./index-f1f2c4b1.js";import"./linear-progress-58eb7a7d.js";import"./useTheme-f6b5a289.js";import"./emotion-react.browser.esm-ea340576.js";import"./Typography-1e6be770.js";import"./extendSxProp-2d0de5c8.js";import"./createSvgIcon-631013b5.js";import"./IconButton-702042d5.js";import"./ButtonBase-37ab13bd.js";import"./TransitionGroupContext-f23bfbbc.js";import"./useEnhancedEffect-b6928b87.js";import"./useForkRef-f4ecef3a.js";import"./useIsFocusVisible-86ab9ba9.js";import"./styled-47292171.js";import"./iframe-f01a2f7f.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-1c885437.js";import"./index-356e4a49.js";function b(t={}){const{wrapper:l}=Object.assign({},p(),t.components);return l?e.jsx(l,{...t,children:e.jsx(m,{})}):m();function m(){const s=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre"},p(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(w,{title:"Components/File Upload/ListItem",component:r}),`
`,e.jsxs(s.h1,{id:"listitem-",children:["ListItem ",e.jsx("img",{src:`https://img.shields.io/badge/Version-v${j.version}-brightgreenn`})]}),`
`,e.jsx(s.h3,{id:"installation",children:"Installation"}),`
`,e.jsxs(s.p,{children:["First install the latest version of the package from ",e.jsx(s.code,{children:"@novatics-ui/file-upload"}),"."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-bash",children:`yarn add @novatics-ui/file-upload
`})}),`
`,e.jsx(s.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(s.p,{children:"The ListItem component is part of the FileUpload component. It can be used to show wheter a file is being uploaded, has been uploaded or has failed to upload."}),`
`,e.jsx(a,{children:e.jsx(o,{name:"Basic Usage",children:i=>e.jsxs(n,{width:"50rem",spacing:2,children:[e.jsx(r,{fileName:"test.txt",loadingPercentage:25}),e.jsx(r,{fileName:"done.txt",succeeded:!0,onSuccessClick:()=>{},deleteAfterSuccess:!0}),e.jsx(r,{fileName:"failed.txt",error:"Upload failed."})]})})}),`
`,e.jsx(s.h3,{id:"progress",children:"Progress"}),`
`,e.jsxs(s.p,{children:["The ListItem uses the LinearProgress component to show the progress of the upload. The ",e.jsx(s.code,{children:"loadingPercentage"})," prop is used to set the progress value and the ",e.jsx(s.code,{children:"succeeded"})," prop is used to indicate that the upload has finished. Then, the ",e.jsx(s.code,{children:"onSuccessClick"})," prop can be used to set a callback function to be called when the user clicks on the file name. If no ",e.jsx(s.code,{children:"loadingPercentage"})," is passed, the component will render a indeterminated progress."]}),`
`,e.jsx(a,{children:e.jsx(o,{name:"Progress",children:i=>e.jsxs(n,{width:"50rem",spacing:2,children:[e.jsx(r,{fileName:"determinated.txt",loadingPercentage:25}),e.jsx(r,{fileName:"indeterminated.txt"}),e.jsx(r,{fileName:"success.pdf",succeeded:!0,onSuccessClick:()=>{}})]})})}),`
`,e.jsx(s.h3,{id:"icons",children:"Icons"}),`
`,e.jsxs(s.p,{children:["The ListItem can exhibit different icons depending on the filename. A personalized icon can also be passed to the component by using the ",e.jsx(s.code,{children:"fileIcon"})," prop. If a URL is passed to the ",e.jsx(s.code,{children:"imagePreview"})," prop, the component will render an image instead of an icon."]}),`
`,e.jsx(a,{children:e.jsx(o,{name:"Icons",children:i=>e.jsxs(n,{width:"50rem",spacing:2,children:[e.jsx(r,{fileName:"icon.pdf",loadingPercentage:25}),e.jsx(r,{fileName:"icon.png",loadingPercentage:50}),e.jsx(r,{fileName:"icon.xslx",loadingPercentage:75}),e.jsx(r,{fileName:"image.png",imagePreview:"https://images.unsplash.com/photo-1557180295-76eee20ae8aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",succeeded:!0,onSuccessClick:()=>{},deleteAfterSuccess:!0})]})})}),`
`,e.jsx(s.h3,{id:"error",children:"Error"}),`
`,e.jsxs(s.p,{children:["The error state can be set by passing the ",e.jsx(s.code,{children:"error"})," prop. The ",e.jsx(s.code,{children:"onRetry"})," prop can be used to set a callback function to be called when the user clicks on the retry button."]}),`
`,e.jsx(a,{children:e.jsx(o,{name:"Error",children:i=>e.jsx(n,{width:"50rem",spacing:2,children:e.jsx(r,{fileName:"error.pdf",error:"The error shows here."})})})}),`
`,e.jsx(s.h3,{id:"playground",children:"Playground"}),`
`,e.jsx(a,{children:e.jsx(o,{name:"Playground",argTypes:{},children:i=>e.jsx(h,{width:"50rem",children:e.jsx(r,{...i})})})}),`
`,e.jsx(N,{story:"Playground"})]})}}const g=t=>e.jsxs(n,{width:"50rem",spacing:2,children:[e.jsx(r,{fileName:"test.txt",loadingPercentage:25}),e.jsx(r,{fileName:"done.txt",succeeded:!0,onSuccessClick:()=>{},deleteAfterSuccess:!0}),e.jsx(r,{fileName:"failed.txt",error:"Upload failed."})]});g.storyName="Basic Usage";g.parameters={storySource:{source:`args => {
  return <Stack width="50rem" spacing={2}>
          <ListItem fileName="test.txt" loadingPercentage={25} />
          <ListItem fileName="done.txt" succeeded onSuccessClick={() => {}} deleteAfterSuccess />
          <ListItem fileName="failed.txt" error="Upload failed." />
        </Stack>;
}`}};const x=t=>e.jsxs(n,{width:"50rem",spacing:2,children:[e.jsx(r,{fileName:"determinated.txt",loadingPercentage:25}),e.jsx(r,{fileName:"indeterminated.txt"}),e.jsx(r,{fileName:"success.pdf",succeeded:!0,onSuccessClick:()=>{}})]});x.storyName="Progress";x.parameters={storySource:{source:`args => {
  return <Stack width="50rem" spacing={2}>
          <ListItem fileName="determinated.txt" loadingPercentage={25} />
          <ListItem fileName="indeterminated.txt" />
          <ListItem fileName="success.pdf" succeeded onSuccessClick={() => {}} />
        </Stack>;
}`}};const u=t=>e.jsxs(n,{width:"50rem",spacing:2,children:[e.jsx(r,{fileName:"icon.pdf",loadingPercentage:25}),e.jsx(r,{fileName:"icon.png",loadingPercentage:50}),e.jsx(r,{fileName:"icon.xslx",loadingPercentage:75}),e.jsx(r,{fileName:"image.png",imagePreview:"https://images.unsplash.com/photo-1557180295-76eee20ae8aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",succeeded:!0,onSuccessClick:()=>{},deleteAfterSuccess:!0})]});u.storyName="Icons";u.parameters={storySource:{source:`args => {
  return <Stack width="50rem" spacing={2}>
          <ListItem fileName="icon.pdf" loadingPercentage={25} />
          <ListItem fileName="icon.png" loadingPercentage={50} />
          <ListItem fileName="icon.xslx" loadingPercentage={75} />
          <ListItem fileName="image.png" imagePreview="https://images.unsplash.com/photo-1557180295-76eee20ae8aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" succeeded onSuccessClick={() => {}} deleteAfterSuccess />
        </Stack>;
}`}};const f=t=>e.jsx(n,{width:"50rem",spacing:2,children:e.jsx(r,{fileName:"error.pdf",error:"The error shows here."})});f.storyName="Error";f.parameters={storySource:{source:`args => {
  return <Stack width="50rem" spacing={2}>
          <ListItem fileName="error.pdf" error="The error shows here." />
        </Stack>;
}`}};const d=t=>e.jsx(h,{width:"50rem",children:e.jsx(r,{...t})});d.storyName="Playground";d.argTypes={};d.parameters={storySource:{source:`args => {
  return <Box width="50rem">
          <ListItem {...args} />
        </Box>;
}`}};const c={title:"Components/File Upload/ListItem",component:r,tags:["stories-mdx"],includeStories:["basicUsage","progress","icons","error","playground"]};c.parameters=c.parameters||{};c.parameters.docs={...c.parameters.docs||{},page:b};const re=["basicUsage","progress","icons","error","playground"];export{re as __namedExportsOrder,g as basicUsage,c as default,f as error,u as icons,d as playground,x as progress};
//# sourceMappingURL=list-item.stories-1d6f0cf5.js.map
