import"./blocks-2646952b.js";import{p as f}from"./package-c7a7281d.js";import{F as a}from"./index-cfcb628c.js";import{D as s}from"./index-cdb77193.js";import{L as c}from"./index-7ca42f6f.js";import{j as e}from"./jsx-runtime-d079401a.js";import{S as n}from"./Stack-d7490fa0.js";import{M as g}from"./Divider-928cc6a1.js";import{u as h}from"./index-59d6410c.js";import{M as D,C as i,b as o}from"./index-c0bdbd3b.js";import"./index-f1f2c4b1.js";import"./fonts-0fc9e249.js";import"./typography-18a122d3.js";import"./colors-4f758d22.js";import"./styled-0386b13c.js";import"./styled-f07ce2e9.js";import"./useThemeProps-09ff92e7.js";import"./Box-7c49dd0b.js";import"./extendSxProp-2d0de5c8.js";import"./button-f4b7989b.js";import"./Button-ba6b9365.js";import"./ButtonBase-40d68cce.js";import"./emotion-react.browser.esm-ea340576.js";import"./TransitionGroupContext-f23bfbbc.js";import"./useEnhancedEffect-b6928b87.js";import"./useForkRef-f4ecef3a.js";import"./useIsFocusVisible-86ab9ba9.js";import"./Typography-75c90882.js";import"./TextField-5cfa8ee3.js";import"./FormControl-e1cad121.js";import"./useFormControl-1157a7e5.js";import"./isMuiElement-c6f52415.js";import"./useId-e3465fec.js";import"./formControlState-a1fb9590.js";import"./FormLabel-6cecdd6c.js";import"./Select-505e7da4.js";import"./react-is.production.min-a192e302.js";import"./useTheme-f6b5a289.js";import"./Modal-7e1f4584.js";import"./index-1c885437.js";import"./objectWithoutPropertiesLoose-6c5c234b.js";import"./ownerWindow-fbe9f185.js";import"./useControlled-953564ff.js";import"./useSlotProps-66d2b092.js";import"./isHostComponent-73d6e646.js";import"./Paper-eee3ba71.js";import"./List-298615ee.js";import"./createSvgIcon-1dd28336.js";import"./InputBase-c5fed7d7.js";import"./GlobalStyles-03b46f00.js";import"./FormHelperText-6e66810c.js";import"./linear-progress-109c6b64.js";import"./IconButton-f49de986.js";import"./styled-e9eabfd7.js";import"./dividerClasses-d8b208b9.js";import"./iframe-d03ddba5.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";function v(t={}){const{wrapper:l}=Object.assign({},h(),t.components);return l?e.jsx(l,{...t,children:e.jsx(d,{})}):d();function d(){const r=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre",a:"a",br:"br"},h(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(D,{title:"Components/File Upload/Intro"}),`
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
//# sourceMappingURL=file-upload.stories-0259d1ab.js.map
