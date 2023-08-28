import"./blocks-2646952b.js";import{R as r}from"./radio-108e3c16.js";import{j as e}from"./jsx-runtime-d079401a.js";import{u as x}from"./index-59d6410c.js";import{M as f,C as l,b as d,A as j}from"./index-e3458e64.js";import"./fonts-0fc9e249.js";import"./typography-18a122d3.js";import"./colors-4f758d22.js";import"./styled-28de6295.js";import"./styled-feceba1a.js";import"./useThemeProps-09ff92e7.js";import"./index-f1f2c4b1.js";import"./SwitchBase-85ff8a2d.js";import"./useFormControl-1157a7e5.js";import"./ButtonBase-266b913a.js";import"./emotion-react.browser.esm-ea340576.js";import"./TransitionGroupContext-f23bfbbc.js";import"./useEnhancedEffect-b6928b87.js";import"./useForkRef-f4ecef3a.js";import"./useIsFocusVisible-86ab9ba9.js";import"./useControlled-953564ff.js";import"./createSvgIcon-65b9e8ad.js";import"./iframe-fe860a2a.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-1c885437.js";import"./index-356e4a49.js";const h="@novatics-ui/radio",m="0.3.7",u="./index.js",v="./index.d.ts",D={".":{import:"./index.mjs",require:"./index.js"}},g={name:h,version:m,main:u,types:v,exports:D};function w(s={}){const{wrapper:t}=Object.assign({},x(),s.components);return t?e.jsx(t,{...s,children:e.jsx(a,{})}):a();function a(){const i=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre",a:"a",div:"div"},x(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(f,{title:"Components/Radio",component:r}),`
`,e.jsxs(i.h1,{id:"radio-",children:["Radio ",e.jsx("img",{src:`https://img.shields.io/badge/Version-v${g.version}-brightgreenn`})]}),`
`,e.jsx(i.h3,{id:"installation",children:"Installation"}),`
`,e.jsxs(i.p,{children:["First install the latest version of the package from ",e.jsx(i.code,{children:"@novatics-ui/radio"}),"."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-shell",children:`  yarn add -D @novatics-ui/radio
`})}),`
`,e.jsx(i.h3,{id:"dependencies",children:"Dependencies"}),`
`,e.jsxs(i.p,{children:["This component extends ",e.jsx(i.a,{href:"https://mui.com/material-ui/react-radio-button",target:"_blank",rel:"nofollow noopener noreferrer",children:"Material UI React Radio"}),". Therefore is needed to install Material UI:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-bash",children:`yarn add @mui/material
`})}),`
`,e.jsx(i.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(l,{children:e.jsx(d,{name:"Basic Usage",children:n=>e.jsx(i.div,{style:{display:"flex",flexDirection:"row"},children:e.jsx(r,{...n})})})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import ... from '@novatics-ui/radio';

  ...


`})}),`
`,e.jsx(i.h3,{id:"variations",children:"Variations"}),`
`,e.jsx(l,{children:e.jsx(d,{name:"Variations",children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx(i.p,{children:"Default Behaviors"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(r,{checked:!0}),e.jsx(r,{})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(r,{disabled:!0,checked:!0}),e.jsx(r,{disabled:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(r,{checked:!0,error:!0}),e.jsx(r,{error:!0})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx(i.p,{children:"Color Variations"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(r,{color:"primary",checked:!0}),e.jsx(r,{color:"primary"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(r,{color:"secondary",checked:!0}),e.jsx(r,{color:"secondary"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(r,{color:"error",checked:!0}),e.jsx(r,{color:"error"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(r,{color:"info",checked:!0}),e.jsx(r,{color:"info"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(r,{color:"success",checked:!0}),e.jsx(r,{color:"success"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(r,{color:"warning",checked:!0}),e.jsx(r,{color:"warning"})]})]})]})})}),`
`,e.jsx(i.h3,{id:"playground",children:"Playground"}),`
`,e.jsx(l,{children:e.jsx(d,{name:"Playground",argTypes:{error:!1,checked:!1},children:n=>e.jsx(i.div,{style:{display:"flex",flexDirection:"row"},children:e.jsx(r,{...n})})})}),`
`,e.jsx(j,{story:"Playground"}),`
`,e.jsx(i.p,{children:"made by Novatics ❤"})]})}}const p=s=>e.jsx("div",{style:{display:"flex",flexDirection:"row"},children:e.jsx(r,{...s})});p.storyName="Basic Usage";p.parameters={storySource:{source:`args => {
  return <div style={{
    display: "flex",
    flexDirection: "row"
  }}>
          <Radio {...args} />
        </div>;
}`}};const y=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("p",{children:"Default Behaviors"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(r,{checked:!0}),e.jsx(r,{})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(r,{disabled:!0,checked:!0}),e.jsx(r,{disabled:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(r,{checked:!0,error:!0}),e.jsx(r,{error:!0})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("p",{children:"Color Variations"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(r,{color:"primary",checked:!0}),e.jsx(r,{color:"primary"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(r,{color:"secondary",checked:!0}),e.jsx(r,{color:"secondary"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(r,{color:"error",checked:!0}),e.jsx(r,{color:"error"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(r,{color:"info",checked:!0}),e.jsx(r,{color:"info"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(r,{color:"success",checked:!0}),e.jsx(r,{color:"success"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx(r,{color:"warning",checked:!0}),e.jsx(r,{color:"warning"})]})]})]});y.storyName="Variations";y.parameters={storySource:{source:`<div style={{
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around"
}}><div style={{
    display: "flex",
    flexDirection: "column"
  }}><p>{"Default Behaviors"}</p><div style={{
      display: "flex",
      flexDirection: "row"
    }}><Radio checked /><Radio /></div><div style={{
      display: "flex",
      flexDirection: "row"
    }}><Radio disabled checked /><Radio disabled /></div><div style={{
      display: "flex",
      flexDirection: "row"
    }}><Radio checked error /><Radio error /></div></div><div style={{
    display: "flex",
    flexDirection: "column"
  }}><p>{"Color Variations"}</p><div style={{
      display: "flex",
      flexDirection: "row"
    }}><Radio color="primary" checked /><Radio color="primary" /></div><div style={{
      display: "flex",
      flexDirection: "row"
    }}><Radio color="secondary" checked /><Radio color="secondary" /></div><div style={{
      display: "flex",
      flexDirection: "row"
    }}><Radio color="error" checked /><Radio color="error" /></div><div style={{
      display: "flex",
      flexDirection: "row"
    }}><Radio color="info" checked /><Radio color="info" /></div><div style={{
      display: "flex",
      flexDirection: "row"
    }}><Radio color="success" checked /><Radio color="success" /></div><div style={{
      display: "flex",
      flexDirection: "row"
    }}><Radio color="warning" checked /><Radio color="warning" /></div></div></div>`}};const c=s=>e.jsx("div",{style:{display:"flex",flexDirection:"row"},children:e.jsx(r,{...s})});c.storyName="Playground";c.argTypes={error:!1,checked:!1};c.parameters={storySource:{source:`args => {
  return <div style={{
    display: "flex",
    flexDirection: "row"
  }}>
          <Radio {...args} />
        </div>;
}`}};const o={title:"Components/Radio",component:r,tags:["stories-mdx"],includeStories:["basicUsage","variations","playground"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:w};const Q=["basicUsage","variations","playground"];export{Q as __namedExportsOrder,p as basicUsage,o as default,c as playground,y as variations};
//# sourceMappingURL=radio.stories-876de366.js.map
