import"./blocks-2646952b.js";import{p as f}from"./package-c7a7281d.js";import{F as a}from"./index-58d4a4b8.js";import{D as s}from"./index-fcd38ae3.js";import{L as c}from"./index-adaf5497.js";import{j as e}from"./jsx-runtime-d079401a.js";import{S as n}from"./Stack-525ce7da.js";import{M as g}from"./Divider-6954239c.js";import{u as h}from"./index-59d6410c.js";import{M as D,C as i,b as o}from"./index-7b3c0ff1.js";import"./index-f1f2c4b1.js";import"./fonts-0fc9e249.js";import"./typography-18a122d3.js";import"./colors-4f758d22.js";import"./styled-ba1ccae2.js";import"./styled-8d419bbb.js";import"./useThemeProps-09ff92e7.js";import"./Box-dca936ab.js";import"./extendSxProp-2d0de5c8.js";import"./button-90c30461.js";import"./Button-ffe75d99.js";import"./ButtonBase-37ab13bd.js";import"./emotion-react.browser.esm-ea340576.js";import"./TransitionGroupContext-f23bfbbc.js";import"./useEnhancedEffect-b6928b87.js";import"./useForkRef-f4ecef3a.js";import"./useIsFocusVisible-86ab9ba9.js";import"./Typography-1e6be770.js";import"./TextField-46844b9e.js";import"./FormControl-4bd10d07.js";import"./useFormControl-1157a7e5.js";import"./isMuiElement-c6f52415.js";import"./useId-e3465fec.js";import"./formControlState-a1fb9590.js";import"./FormLabel-fe793dd8.js";import"./Select-73599480.js";import"./react-is.production.min-a192e302.js";import"./useTheme-f6b5a289.js";import"./Modal-8a4c8b86.js";import"./index-1c885437.js";import"./objectWithoutPropertiesLoose-6c5c234b.js";import"./ownerWindow-fbe9f185.js";import"./useControlled-953564ff.js";import"./useSlotProps-22d1629f.js";import"./isHostComponent-73d6e646.js";import"./Paper-5a10c0f2.js";import"./List-3aafad03.js";import"./createSvgIcon-631013b5.js";import"./InputBase-f760cab3.js";import"./GlobalStyles-03b46f00.js";import"./FormHelperText-56609053.js";import"./linear-progress-58eb7a7d.js";import"./IconButton-702042d5.js";import"./styled-47292171.js";import"./dividerClasses-bf6b98db.js";import"./iframe-f01a2f7f.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";function v(t={}){const{wrapper:l}=Object.assign({},h(),t.components);return l?e.jsx(l,{...t,children:e.jsx(d,{})}):d();function d(){const r=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre",a:"a",br:"br"},h(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(D,{title:"Components/File Upload/Intro"}),`
`,e.jsxs(r.h1,{id:"fileupload-",children:["FileUpload ",e.jsx("img",{src:`https://img.shields.io/badge/Version-v${f.version}-brightgreenn`})]}),`
`,e.jsx(r.h3,{id:"installation",children:"Installation"}),`
`,e.jsxs(r.p,{children:["First install the latest version of the package from ",e.jsx(r.code,{children:"@novatics-ui/file-upload"}),"."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-bash",children:`yarn add @novatics-ui/file-upload
`})}),`
`,e.jsx(r.h3,{id:"dependencies",children:"Dependencies"}),`
`,e.jsxs(r.p,{children:["This component extends ",e.jsx(r.a,{href:"https://mui.com/material-ui/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Material UI React"})," components. Therefore is needed to install Material UI:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-bash",children:`yarn add @mui/material @emotion/react @emotion/styled
`})}),`
`,e.jsx(r.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsxs(r.p,{children:["The FileUpload is composed by 3 components: ",e.jsx(r.code,{children:"FromUrl"}),", ",e.jsx(r.code,{children:"DragAndDrop"})," and ",e.jsx(r.code,{children:"ListItem"}),". They can be used separately or combined."]}),`
`,e.jsx(i,{children:e.jsx(o,{name:"Basic Usage",children:m=>e.jsxs(n,{width:500,spacing:2,children:[e.jsx(s,{variant:"inline",multiple:!0,acceptedLabels:"JPG, PNG and GIF"}),e.jsx(g,{children:"or"}),e.jsx(a,{accept:"image/jpeg",acceptLabels:".JPEG",variant:"combined"}),e.jsx(r.br,{}),e.jsx(c,{fileName:"Test.png",loadingPercentage:25})]})})}),`
`,e.jsx(r.h3,{id:"from-url",children:"From URL"}),`
`,e.jsxs(r.p,{children:["The FromUrl component receives an URL and a callback function to be called when the user clicks on the button to upload the file. More about FromUrl ",e.jsx(r.a,{href:"https://components.novatics.com.br/?path=/docs/fromurl--docs",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]}),`
`,e.jsx(i,{children:e.jsx(o,{name:"From URL",children:m=>e.jsx(n,{spacing:2,children:e.jsx(a,{variant:"single"})})})}),`
`,e.jsx(r.h3,{id:"drag-and-drop",children:"Drag and Drop"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"DragAndDrop"})," component can be used for selecting files by both draggin and dropping them or clicking on the button to select. More about DragAndDrop ",e.jsx(r.a,{href:"https://components.novatics.com.br/?path=/docs/draganddrop--docs",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]}),`
`,e.jsx(i,{children:e.jsx(o,{name:"Drag and Drop",children:m=>e.jsx(n,{width:"50rem",spacing:2,children:e.jsx(s,{variant:"inline",acceptedLabels:"JPG, PNG and GIF"})})})}),`
`,e.jsx(r.h3,{id:"list-item",children:"List Item"}),`
`,e.jsxs(r.p,{children:["A list item can be used to show the status of a file upload. More about ListItem ",e.jsx(r.a,{href:"https://components.novatics.com.br/?path=/docs/listitem--docs",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]}),`
`,e.jsx(i,{children:e.jsx(o,{name:"List Item",children:m=>e.jsx(n,{width:"50rem",children:e.jsx(c,{fileName:"Test.jpg",loadingPercentage:25})})})})]})}}const j=t=>e.jsxs(n,{width:500,spacing:2,children:[e.jsx(s,{variant:"inline",multiple:!0,acceptedLabels:"JPG, PNG and GIF"}),e.jsx(g,{children:"or"}),e.jsx(a,{accept:"image/jpeg",acceptLabels:".JPEG",variant:"combined"}),e.jsx("br",{}),e.jsx(c,{fileName:"Test.png",loadingPercentage:25})]});j.storyName="Basic Usage";j.parameters={storySource:{source:`args => {
  return <Stack width={500} spacing={2}>
          <DragAndDrop variant="inline" multiple acceptedLabels="JPG, PNG and GIF" />
          <Divider>or</Divider>
          <FromUrl accept="image/jpeg" acceptLabels=".JPEG" variant="combined" />
          <br />
          <ListItem fileName="Test.png" loadingPercentage={25} />
        </Stack>;
}`}};const x=t=>e.jsx(n,{spacing:2,children:e.jsx(a,{variant:"single"})});x.storyName="From URL";x.parameters={storySource:{source:`args => {
  return <Stack spacing={2}>
          <FromUrl variant="single" />
        </Stack>;
}`}};const u=t=>e.jsx(n,{width:"50rem",spacing:2,children:e.jsx(s,{variant:"inline",acceptedLabels:"JPG, PNG and GIF"})});u.storyName="Drag and Drop";u.parameters={storySource:{source:`args => {
  return <Stack width="50rem" spacing={2}>
          <DragAndDrop variant="inline" acceptedLabels="JPG, PNG and GIF" />
        </Stack>;
}`}};const b=t=>e.jsx(n,{width:"50rem",children:e.jsx(c,{fileName:"Test.jpg",loadingPercentage:25})});b.storyName="List Item";b.parameters={storySource:{source:`args => {
  return <Stack width="50rem">
          <ListItem fileName="Test.jpg" loadingPercentage={25} />
        </Stack>;
}`}};const p={title:"Components/File Upload/Intro",tags:["stories-mdx"],includeStories:["basicUsage","fromUrl","dragAndDrop","listItem"]};p.parameters=p.parameters||{};p.parameters.docs={...p.parameters.docs||{},page:v};const Pe=["basicUsage","fromUrl","dragAndDrop","listItem"];export{Pe as __namedExportsOrder,j as basicUsage,p as default,u as dragAndDrop,x as fromUrl,b as listItem};
//# sourceMappingURL=file-upload.stories-3dc199e5.js.map
