import"./blocks-2646952b.js";import{a as j,j as l}from"./emotion-react-jsx-runtime.browser.esm-780ca0af.js";import{r as g}from"./index-ebeaab24.js";import"./fonts-570bed1b.js";import{s as _}from"./styled-6ade0d20.js";import{B as u}from"./Box-501a0afd.js";import{B as C}from"./button-25333498.js";import{T as S}from"./TextField-45f3769c.js";import{T as U}from"./Typography-396d05b8.js";import{j as e}from"./jsx-runtime-5926aa06.js";import{u as P}from"./index-bda0bad7.js";import{M as B,C as h,S as y,A as M}from"./index-26a8b89b.js";import"./useThemeProps-d5e886d2.js";import"./emotion-react.browser.esm-3c2a4d00.js";import"./typography-6dc0827f.js";import"./styled-9c5f909d.js";import"./extendSxProp-f682d789.js";import"./Button-9b7d03e6.js";import"./ButtonBase-a1dff071.js";import"./TransitionGroupContext-8ebc3921.js";import"./useForkRef-3ff4e0b8.js";import"./FormControl-45abfa53.js";import"./useFormControl-0ef100e1.js";import"./isMuiElement-b72c78c9.js";import"./useId-b93361cb.js";import"./formControlState-a1fb9590.js";import"./FormLabel-c6d6ed4f.js";import"./Select-e8d98de6.js";import"./useSlotProps-4b2f8587.js";import"./objectWithoutPropertiesLoose-6c5c234b.js";import"./isHostComponent-73d6e646.js";import"./useTheme-c6adb93a.js";import"./index-ce6f85b9.js";import"./ownerWindow-74a9cc60.js";import"./useControlled-5355145e.js";import"./Paper-f1a8388d.js";import"./List-3a999537.js";import"./createSvgIcon-4639a7da.js";import"./InputBase-890c5761.js";import"./GlobalStyles-8191be96.js";import"./FormHelperText-79a40f5e.js";import"./iframe-f397f3e2.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";const E="@novatics/file-upload",I="0.0.1",k="./index.js",O="./index.d.ts",G={".":{import:"./index.mjs",require:"./index.js"}},J={name:E,version:I,main:k,types:O,exports:G},X=_(u)(n=>{const i=n.variant==="single"?"1px solid":"none",o=n.variant==="single"?"24px":"0";return{border:i,padding:o,display:"flex",flexDirection:"column",gap:"8px",borderColor:n.theme.palette.grey[20],width:"fit-content",minWidth:"500px"}});function p(n){const{acceptLabels:i,variant:o="single",disabled:r,buttonProps:s,textFieldProps:V,onAccept:w=()=>{},onReject:D=()=>{},handleValidation:b,error:c,clearOnAccept:T=!0}=n,[d,F]=g.useState(""),[f,x]=g.useState(c||"");g.useEffect(()=>{c&&x(c)},[c]);function q(t){try{return!!new URL(t)}catch{return!1}}const A=t=>b?b(t):t?q(t)?null:"Invalid URL":"URL is required",N=()=>{x("");const t=A(d);t===null?(w(d),T&&F("")):(D(d),x(t))};return j(X,{variant:o,disabled:r,children:[l(U,{variant:"overline",color:"grey.70",children:"Upload by URL"}),j(u,{sx:{display:"flex",gap:"8px"},children:[l(S,{variant:"outlined",placeholder:"Insert URL here",inputProps:{style:{padding:"0"}},sx:{flexGrow:1},value:d,onChange:t=>F(t.target.value),disabled:r,...V}),l(C,{variant:"outlined",disabled:!d||r,sx:{textTransform:"capitalize"},onClick:()=>N(),...s,children:"Submit"})]}),l(U,{variant:"caption",color:f?"error.main":"grey.70",children:f||(i?`Accepted formats: ${i}`:"All files are accepted")})]})}try{p.displayName="FromUrl",p.__docgenInfo={description:"",displayName:"FromUrl",props:{acceptLabels:{defaultValue:null,description:"",name:"acceptLabels",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"combined"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},buttonProps:{defaultValue:null,description:"",name:"buttonProps",required:!1,type:{name:"ButtonProps"}},textFieldProps:{defaultValue:null,description:"",name:"textFieldProps",required:!1,type:{name:"TextFieldProps"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},onAccept:{defaultValue:null,description:"",name:"onAccept",required:!1,type:{name:"(url: string) => void"}},onReject:{defaultValue:null,description:"",name:"onReject",required:!1,type:{name:"(url: string) => void"}},handleValidation:{defaultValue:null,description:"",name:"handleValidation",required:!1,type:{name:"(url: string) => string"}},clearOnAccept:{defaultValue:null,description:"",name:"clearOnAccept",required:!1,type:{name:"boolean"}}}}}catch{}const $=_(u)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  > div > *:first-of-type {
    margin: 10px 0;
  }

  > div:not(:first-of-type):before {
    content: '';
    display: block;
    height: 1px;
    background-color: lightgray;
  }
`;function a(n){const{fromUrlProps:i}=n;return l($,{children:j(u,{children:[l(U,{variant:"h6",children:"From URL:"}),l(p,{onAccept:o=>console.log("url",o),...i})]})})}try{a.displayName="FileUpload",a.__docgenInfo={description:"",displayName:"FileUpload",props:{fromUrlProps:{defaultValue:null,description:"",name:"fromUrlProps",required:!0,type:{name:"FromUrlProps"}}}}}catch{}function z(n={}){const{wrapper:i}=Object.assign({},P(),n.components);return i?e.jsx(i,{...n,children:e.jsx(o,{})}):o();function o(){const r=Object.assign({h1:"h1",p:"p",h3:"h3",code:"code",pre:"pre",a:"a",div:"div"},P(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(B,{title:"File Upload",component:a}),`
`,e.jsxs(r.h1,{id:"fileupload-",children:["FileUpload ",e.jsx("img",{src:`https://img.shields.io/badge/Version-v${J.version}-brightgreenn`})]}),`
`,e.jsx(r.p,{children:"Use this component for File Upload"}),`
`,e.jsx(r.h3,{id:"installation",children:"Installation"}),`
`,e.jsxs(r.p,{children:["First install the latest version of the package from ",e.jsx(r.code,{children:"@novatics/file-upload"}),"."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-bash",children:`yarn add @novatics/file-upload
`})}),`
`,e.jsx(r.h3,{id:"dependencies",children:"Dependencies"}),`
`,e.jsxs(r.p,{children:["This component extends ",e.jsx(r.a,{href:"https://mui.com/material-ui/react-text-field",target:"_blank",rel:"nofollow noopener noreferrer",children:"Material UI React Text Field"}),". Therefore is needed to install Material UI:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-bash",children:`yarn add @mui/material @emotion/react @emotion/styled
`})}),`
`,e.jsx(r.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(h,{children:e.jsx(y,{name:"Basic Usage",children:s=>e.jsx(r.div,{style:{display:"flex",flexDirection:"row"},children:e.jsx(a,{fromUrlProps:{accept:"image/jpeg",acceptLabels:".JPEG"}})})})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import FileUpload from '@novatics/file-upload';

<FileUpload />;
`})}),`
`,e.jsx(r.h3,{id:"from-url",children:"From URL"}),`
`,e.jsx(h,{children:e.jsx(y,{name:"From URL",children:s=>e.jsx(r.div,{style:{display:"flex",flexDirection:"row"},children:e.jsx(p,{})})})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { FromUrl, FromUrlProps } from '@novatics/file-upload';

<FromUrl />;
`})}),`
`,e.jsx(r.h3,{id:"playground",children:"Playground"}),`
`,e.jsx(h,{children:e.jsx(y,{name:"Playground",argTypes:{},children:s=>e.jsx(r.div,{style:{display:"flex",flexDirection:"row"},children:e.jsx(a,{...s})})})}),`
`,e.jsx(M,{story:"Playground"})]})}}const L=n=>e.jsx("div",{style:{display:"flex",flexDirection:"row"},children:e.jsx(a,{fromUrlProps:{accept:"image/jpeg",acceptLabels:".JPEG"}})});L.storyName="Basic Usage";L.parameters={storySource:{source:`args => {
  return <div style={{
    display: "flex",
    flexDirection: "row"
  }}>
          <FileUpload fromUrlProps={{
      accept: "image/jpeg",
      acceptLabels: ".JPEG"
    }} />
        </div>;
}`}};const R=n=>e.jsx("div",{style:{display:"flex",flexDirection:"row"},children:e.jsx(p,{})});R.storyName="From URL";R.parameters={storySource:{source:`args => {
  return <div style={{
    display: "flex",
    flexDirection: "row"
  }}>
          <FromUrl />
        </div>;
}`}};const v=n=>e.jsx("div",{style:{display:"flex",flexDirection:"row"},children:e.jsx(a,{...n})});v.storyName="Playground";v.argTypes={};v.parameters={storySource:{source:`args => {
  return <div style={{
    display: "flex",
    flexDirection: "row"
  }}>
          <FileUpload {...args} />
        </div>;
}`}};const m={title:"File Upload",component:a,tags:["stories-mdx"],includeStories:["basicUsage","fromUrl","playground"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:z};const Ie=["basicUsage","fromUrl","playground"];export{Ie as __namedExportsOrder,L as basicUsage,m as default,R as fromUrl,v as playground};
//# sourceMappingURL=file-upload.stories-660c1ad9.js.map
