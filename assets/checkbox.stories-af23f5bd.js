import"./blocks-2646952b.js";import{C as i}from"./checkbox-8f4c202b.js";import{j as e}from"./jsx-runtime-5926aa06.js";import{u as x}from"./index-bda0bad7.js";import{M as u,C as l,S as t,A as j}from"./index-e93baae4.js";import"./emotion-react-jsx-runtime.browser.esm-3f442687.js";import"./index-ebeaab24.js";import"./useThemeProps-92c88c91.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-724eea7b.js";import"./emotion-react.browser.esm-74ad867f.js";import"./Check-a6c5a43e.js";import"./createSvgIcon-6ad52f8f.js";import"./createSvgIcon-55b24205.js";import"./styled-5a683ef2.js";import"./useId-50ce759f.js";import"./TransitionGroupContext-9e5a73a2.js";import"./useControlled-5355145e.js";import"./isMuiElement-b72c78c9.js";import"./ButtonBase-ee415021.js";import"./fonts-a80bcdbc.js";import"./typography-6dc0827f.js";import"./SwitchBase-319f100c.js";import"./useFormControl-0ef100e1.js";import"./iframe-8e6dde36.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ce6f85b9.js";import"./index-356e4a49.js";const y="@novatics/checkbox",f="0.2.2",m="./index.js",v="./index.d.ts",k={".":{import:"./index.mjs",require:"./index.js"}},b={name:y,version:f,main:m,types:v,exports:k};function D(n={}){const{wrapper:d}=Object.assign({},x(),n.components);return d?e.jsx(d,{...n,children:e.jsx(a,{})}):a();function a(){const r=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre",a:"a",div:"div"},x(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Checkbox",component:i}),`
`,e.jsxs(r.h1,{id:"checkbox-",children:["Checkbox ",e.jsx("img",{src:`https://img.shields.io/badge/Version-v${b.version}-brightgreenn`})]}),`
`,e.jsx(r.h3,{id:"installation",children:"Installation"}),`
`,e.jsxs(r.p,{children:["First install the latest version of the package from ",e.jsx(r.code,{children:"@novatics/checkbox"}),"."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-shell",children:`  yarn add -D @novatics/checkbox
`})}),`
`,e.jsx(r.h3,{id:"dependencies",children:"Dependencies"}),`
`,e.jsxs(r.p,{children:["This component extends ",e.jsx(r.a,{href:"https://mui.com/material-ui/react-checkbox/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Material UI React Checkbox"}),". Therefore is needed to install Material UI:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-bash",children:`yarn add @mui/material
`})}),`
`,e.jsx(r.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(l,{children:e.jsx(t,{name:"Basic Usage",children:o=>e.jsx(r.div,{style:{display:"flex",flexDirection:"row"},children:e.jsx(i,{...o})})})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import ... from '@novatics/checkbox';

  ...


`})}),`
`,e.jsx(r.h3,{id:"variations",children:"Variations"}),`
`,e.jsx(l,{children:e.jsx(t,{name:"Variations",children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("span",{children:"Default"}),e.jsx(i,{}),e.jsx(i,{checked:!0}),e.jsx(i,{disabled:!0}),e.jsx(i,{checked:!0,disabled:!0}),e.jsx(i,{color:"error"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("span",{children:"Outlined"}),e.jsx(i,{variant:"outlined"}),e.jsx(i,{variant:"outlined",checked:!0}),e.jsx(i,{variant:"outlined",checked:!0,disabled:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("span",{children:"Indeterminate Default"}),e.jsx(i,{indeterminate:!0}),e.jsx(i,{indeterminate:!0,disabled:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("span",{children:"Indeterminate Outlined"}),e.jsx(i,{variant:"outlined",indeterminate:!0}),e.jsx(i,{variant:"outlined",indeterminate:!0,disabled:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("span",{children:"Color Variations"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"primary",checked:!0}),e.jsx(i,{color:"primary"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"secondary",checked:!0}),e.jsx(i,{color:"secondary"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"error",checked:!0}),e.jsx(i,{color:"error"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"info",checked:!0}),e.jsx(i,{color:"info"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"success",checked:!0}),e.jsx(i,{color:"success"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"warning",checked:!0}),e.jsx(i,{color:"warning"})]})]})]})})}),`
`,e.jsx(r.h3,{id:"playground",children:"Playground"}),`
`,e.jsx(l,{children:e.jsx(t,{name:"Playground",argTypes:{error:!1,checked:!1},children:o=>e.jsx(r.div,{style:{display:"flex",flexDirection:"row"},children:e.jsx(i,{...o})})})}),`
`,e.jsx(j,{story:"Playground"}),`
`,e.jsx(r.p,{children:"made by Novatics ❤"})]})}}const h=n=>e.jsx("div",{style:{display:"flex",flexDirection:"row"},children:e.jsx(i,{...n})});h.storyName="Basic Usage";h.parameters={storySource:{source:`args => {
  return <div style={{
    display: "flex",
    flexDirection: "row"
  }}>
          <Checkbox {...args} />
        </div>;
}`}};const p=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("span",{children:"Default"}),e.jsx(i,{}),e.jsx(i,{checked:!0}),e.jsx(i,{disabled:!0}),e.jsx(i,{checked:!0,disabled:!0}),e.jsx(i,{color:"error"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("span",{children:"Outlined"}),e.jsx(i,{variant:"outlined"}),e.jsx(i,{variant:"outlined",checked:!0}),e.jsx(i,{variant:"outlined",checked:!0,disabled:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("span",{children:"Indeterminate Default"}),e.jsx(i,{indeterminate:!0}),e.jsx(i,{indeterminate:!0,disabled:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("span",{children:"Indeterminate Outlined"}),e.jsx(i,{variant:"outlined",indeterminate:!0}),e.jsx(i,{variant:"outlined",indeterminate:!0,disabled:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("span",{children:"Color Variations"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"primary",checked:!0}),e.jsx(i,{color:"primary"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"secondary",checked:!0}),e.jsx(i,{color:"secondary"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"error",checked:!0}),e.jsx(i,{color:"error"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"info",checked:!0}),e.jsx(i,{color:"info"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"success",checked:!0}),e.jsx(i,{color:"success"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"warning",checked:!0}),e.jsx(i,{color:"warning"})]})]})]});p.storyName="Variations";p.parameters={storySource:{source:`<div style={{
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around"
}}><div style={{
    display: "flex",
    flexDirection: "column"
  }}><span>{"Default"}</span><Checkbox /><Checkbox checked /><Checkbox disabled /><Checkbox checked disabled /><Checkbox color="error" /></div><div style={{
    display: "flex",
    flexDirection: "column"
  }}><span>{"Outlined"}</span><Checkbox variant="outlined" /><Checkbox variant="outlined" checked /><Checkbox variant="outlined" checked disabled /></div><div style={{
    display: "flex",
    flexDirection: "column"
  }}><span>{"Indeterminate Default"}</span><Checkbox indeterminate /><Checkbox indeterminate disabled /></div><div style={{
    display: "flex",
    flexDirection: "column"
  }}><span>{"Indeterminate Outlined"}</span><Checkbox variant="outlined" indeterminate /><Checkbox variant="outlined" indeterminate disabled /></div><div style={{
    display: "flex",
    flexDirection: "column"
  }}><span>{"Color Variations"}</span><div style={{
      display: "flex",
      flexDirection: "row"
    }}><Checkbox color="primary" checked /><Checkbox color="primary" /></div><div style={{
      display: "flex",
      flexDirection: "row"
    }}><Checkbox color="secondary" checked /><Checkbox color="secondary" /></div><div style={{
      display: "flex",
      flexDirection: "row"
    }}><Checkbox color="error" checked /><Checkbox color="error" /></div><div style={{
      display: "flex",
      flexDirection: "row"
    }}><Checkbox color="info" checked /><Checkbox color="info" /></div><div style={{
      display: "flex",
      flexDirection: "row"
    }}><Checkbox color="success" checked /><Checkbox color="success" /></div><div style={{
      display: "flex",
      flexDirection: "row"
    }}><Checkbox color="warning" checked /><Checkbox color="warning" /></div></div></div>`}};const c=n=>e.jsx("div",{style:{display:"flex",flexDirection:"row"},children:e.jsx(i,{...n})});c.storyName="Playground";c.argTypes={error:!1,checked:!1};c.parameters={storySource:{source:`args => {
  return <div style={{
    display: "flex",
    flexDirection: "row"
  }}>
          <Checkbox {...args} />
        </div>;
}`}};const s={title:"Checkbox",component:i,tags:["stories-mdx"],includeStories:["basicUsage","variations","playground"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:D};const W=["basicUsage","variations","playground"];export{W as __namedExportsOrder,h as basicUsage,s as default,c as playground,p as variations};
//# sourceMappingURL=checkbox.stories-af23f5bd.js.map
