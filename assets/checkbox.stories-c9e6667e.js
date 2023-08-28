import"./blocks-2646952b.js";import{C as i}from"./checkbox-e0babfdc.js";import{j as e}from"./jsx-runtime-d079401a.js";import{u as x}from"./index-59d6410c.js";import{M as u,C as l,b as t,A as j}from"./index-e3458e64.js";import"./Check-7a3c0f2a.js";import"./createSvgIcon-9d4b0241.js";import"./index-f1f2c4b1.js";import"./createSvgIcon-65b9e8ad.js";import"./useThemeProps-09ff92e7.js";import"./styled-feceba1a.js";import"./useControlled-953564ff.js";import"./ownerWindow-fbe9f185.js";import"./useForkRef-f4ecef3a.js";import"./useId-e3465fec.js";import"./isMuiElement-c6f52415.js";import"./useEnhancedEffect-b6928b87.js";import"./TransitionGroupContext-f23bfbbc.js";import"./useIsFocusVisible-86ab9ba9.js";import"./fonts-0fc9e249.js";import"./typography-18a122d3.js";import"./colors-4f758d22.js";import"./styled-28de6295.js";import"./SwitchBase-85ff8a2d.js";import"./useFormControl-1157a7e5.js";import"./ButtonBase-266b913a.js";import"./emotion-react.browser.esm-ea340576.js";import"./iframe-fe860a2a.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-1c885437.js";import"./index-356e4a49.js";const m="@novatics-ui/checkbox",y="0.3.7",f="./index.js",v="./index.d.ts",k={".":{import:"./index.mjs",require:"./index.js"}},b={"@mui/icons-material":"^5.14.1"},D={name:m,version:y,main:f,types:v,exports:k,peerDependencies:b};function g(n={}){const{wrapper:d}=Object.assign({},x(),n.components);return d?e.jsx(d,{...n,children:e.jsx(a,{})}):a();function a(){const r=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre",a:"a",div:"div"},x(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Components/Checkbox",component:i}),`
`,e.jsxs(r.h1,{id:"checkbox-",children:["Checkbox ",e.jsx("img",{src:`https://img.shields.io/badge/Version-v${D.version}-brightgreenn`})]}),`
`,e.jsx(r.h3,{id:"installation",children:"Installation"}),`
`,e.jsxs(r.p,{children:["First install the latest version of the package from ",e.jsx(r.code,{children:"@novatics-ui/checkbox"}),"."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-shell",children:`  yarn add -D @novatics-ui/checkbox
`})}),`
`,e.jsx(r.h3,{id:"dependencies",children:"Dependencies"}),`
`,e.jsxs(r.p,{children:["This component extends ",e.jsx(r.a,{href:"https://mui.com/material-ui/react-checkbox/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Material UI React Checkbox"}),". Therefore is needed to install Material UI:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-bash",children:`yarn add @mui/material
`})}),`
`,e.jsx(r.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(l,{children:e.jsx(t,{name:"Basic Usage",children:o=>e.jsx(r.div,{style:{display:"flex",flexDirection:"row"},children:e.jsx(i,{...o})})})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import ... from '@novatics-ui/checkbox';

  ...


`})}),`
`,e.jsx(r.h3,{id:"variations",children:"Variations"}),`
`,e.jsx(l,{children:e.jsx(t,{name:"Variations",children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("span",{children:"Default"}),e.jsx(i,{}),e.jsx(i,{checked:!0}),e.jsx(i,{disabled:!0}),e.jsx(i,{checked:!0,disabled:!0}),e.jsx(i,{color:"error"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("span",{children:"Outlined"}),e.jsx(i,{variant:"outlined"}),e.jsx(i,{variant:"outlined",checked:!0}),e.jsx(i,{variant:"outlined",checked:!0,disabled:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("span",{children:"Indeterminate Default"}),e.jsx(i,{indeterminate:!0}),e.jsx(i,{indeterminate:!0,disabled:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("span",{children:"Indeterminate Outlined"}),e.jsx(i,{variant:"outlined",indeterminate:!0}),e.jsx(i,{variant:"outlined",indeterminate:!0,disabled:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("span",{children:"Color Variations"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"primary",checked:!0}),e.jsx(i,{color:"primary"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"secondary",checked:!0}),e.jsx(i,{color:"secondary"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"error",checked:!0}),e.jsx(i,{color:"error"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"info",checked:!0}),e.jsx(i,{color:"info"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"success",checked:!0}),e.jsx(i,{color:"success"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"warning",checked:!0}),e.jsx(i,{color:"warning"})]})]})]})})}),`
`,e.jsx(r.h3,{id:"playground",children:"Playground"}),`
`,e.jsx(l,{children:e.jsx(t,{name:"Playground",argTypes:{error:!1,checked:!1},children:o=>e.jsx(r.div,{style:{display:"flex",flexDirection:"row"},children:e.jsx(i,{...o})})})}),`
`,e.jsx(j,{story:"Playground"}),`
`,e.jsx(r.p,{children:"made by Novatics ❤"})]})}}const p=n=>e.jsx("div",{style:{display:"flex",flexDirection:"row"},children:e.jsx(i,{...n})});p.storyName="Basic Usage";p.parameters={storySource:{source:`args => {
  return <div style={{
    display: "flex",
    flexDirection: "row"
  }}>
          <Checkbox {...args} />
        </div>;
}`}};const h=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("span",{children:"Default"}),e.jsx(i,{}),e.jsx(i,{checked:!0}),e.jsx(i,{disabled:!0}),e.jsx(i,{checked:!0,disabled:!0}),e.jsx(i,{color:"error"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("span",{children:"Outlined"}),e.jsx(i,{variant:"outlined"}),e.jsx(i,{variant:"outlined",checked:!0}),e.jsx(i,{variant:"outlined",checked:!0,disabled:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("span",{children:"Indeterminate Default"}),e.jsx(i,{indeterminate:!0}),e.jsx(i,{indeterminate:!0,disabled:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("span",{children:"Indeterminate Outlined"}),e.jsx(i,{variant:"outlined",indeterminate:!0}),e.jsx(i,{variant:"outlined",indeterminate:!0,disabled:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("span",{children:"Color Variations"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"primary",checked:!0}),e.jsx(i,{color:"primary"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"secondary",checked:!0}),e.jsx(i,{color:"secondary"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"error",checked:!0}),e.jsx(i,{color:"error"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"info",checked:!0}),e.jsx(i,{color:"info"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"success",checked:!0}),e.jsx(i,{color:"success"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(i,{color:"warning",checked:!0}),e.jsx(i,{color:"warning"})]})]})]});h.storyName="Variations";h.parameters={storySource:{source:`<div style={{
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
}`}};const s={title:"Components/Checkbox",component:i,tags:["stories-mdx"],includeStories:["basicUsage","variations","playground"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:g};const re=["basicUsage","variations","playground"];export{re as __namedExportsOrder,p as basicUsage,s as default,c as playground,h as variations};
//# sourceMappingURL=checkbox.stories-c9e6667e.js.map
