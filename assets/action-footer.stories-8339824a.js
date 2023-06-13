import"./blocks-2646952b.js";import{A as e}from"./action-footer-219abbbd.js";import{j as n}from"./jsx-runtime-5926aa06.js";import{B as r}from"./Button-7962ca15.js";import{M as j,C as a,S as c,A as u}from"./index-556e75ec.js";import{u as x}from"./index-bda0bad7.js";import"./emotion-react-jsx-runtime.browser.esm-780ca0af.js";import"./useThemeProps-d5e886d2.js";import"./index-ebeaab24.js";import"./emotion-react.browser.esm-3c2a4d00.js";import"./Stack-aa64a183.js";import"./styled-93da1200.js";import"./styled-7be655c7.js";import"./extendSxProp-f682d789.js";import"./ButtonBase-c6f85155.js";import"./TransitionGroupContext-8ebc3921.js";import"./useForkRef-3ff4e0b8.js";import"./iframe-1f5f0c57.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ce6f85b9.js";import"./index-356e4a49.js";const y="@novatics/action-footer",v="0.2.1",g="./index.js",f="./index.d.ts",C={".":{import:"./index.mjs",require:"./index.js"}},k={name:y,version:v,main:g,types:f,exports:C};function B(o={}){const{wrapper:d}=Object.assign({},x(),o.components);return d?n.jsx(d,{...o,children:n.jsx(p,{})}):p();function p(){const i=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre",a:"a",div:"div"},x(),o.components);return n.jsxs(n.Fragment,{children:[n.jsx(j,{title:"ActionFooter",component:e}),`
`,n.jsxs(i.h1,{id:"actionfooter-",children:["ActionFooter ",n.jsx("img",{src:`https://img.shields.io/badge/Version-v${k.version}-brightgreenn`})]}),`
`,n.jsx(i.h3,{id:"installation",children:"Installation"}),`
`,n.jsxs(i.p,{children:["First install the latest version of the package from ",n.jsx(i.code,{children:"@novatics/action-footer"}),"."]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-shell",children:`  yarn add -D @novatics/action-footer
`})}),`
`,n.jsx(i.h3,{id:"dependencies",children:"Dependencies"}),`
`,n.jsxs(i.p,{children:["This component extends ",n.jsx(i.a,{href:"https://mui.com/material-ui/react-stack",target:"_blank",rel:"nofollow noopener noreferrer",children:"Material UI React Stack"}),". Therefore is needed to install Material UI:"]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-bash",children:`yarn add @mui/material
`})}),`
`,n.jsx(i.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(a,{children:n.jsx(c,{name:"Basic Usage",children:s=>n.jsx(i.div,{style:{display:"flex",flexDirection:"row"},children:n.jsx(e,{...s})})})}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`import ... from '@novatics/action-footer';

  ...


`})}),`
`,n.jsx(i.h3,{id:"variations",children:"Variations"}),`
`,n.jsx(a,{children:n.jsx(c,{name:"Variations",children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"},children:[n.jsxs("div",{children:[n.jsx(i.p,{children:"Using as children Behavior"}),n.jsxs(e,{spacing:2,children:[n.jsx(r,{variant:"outlined",color:"primary",children:n.jsx(i.p,{children:"Click"})}),n.jsx(r,{variant:"contained",color:"primary",children:n.jsx(i.p,{children:"Click"})})]})]}),n.jsxs("div",{children:[n.jsx(i.p,{children:"Using as action Prop Behavior"}),n.jsx(e,{spacing:2,action:[n.jsx(r,{variant:"outlined",color:"primary",children:"Click"}),n.jsx(r,{variant:"contained",color:"primary",children:"Click"})]})]})]})})}),`
`,n.jsx(i.h3,{id:"playground",children:"Playground"}),`
`,n.jsx(a,{children:n.jsx(c,{name:"Playground",argTypes:{error:!1,checked:!1},children:s=>n.jsx(i.div,{style:{display:"flex",flexDirection:"row"},children:n.jsxs(e,{style:{width:"100%"},...s,children:[n.jsx(r,{variant:"outlined",color:"primary",children:"Click"}),n.jsx(r,{variant:"contained",color:"primary",children:"Click"})]})})})}),`
`,n.jsx(u,{story:"Playground"}),`
`,n.jsx(i.p,{children:"made by Novatics ❤"})]})}}const h=o=>n.jsx("div",{style:{display:"flex",flexDirection:"row"},children:n.jsx(e,{...o})});h.storyName="Basic Usage";h.parameters={storySource:{source:`args => {
  return <div style={{
    display: "flex",
    flexDirection: "row"
  }}>
          <ActionFooter {...args} />
        </div>;
}`}};const m=()=>n.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"},children:[n.jsxs("div",{children:[n.jsx("p",{children:"Using as children Behavior"}),n.jsxs(e,{spacing:2,children:[n.jsx(r,{variant:"outlined",color:"primary",children:n.jsx("p",{children:"Click"})}),n.jsx(r,{variant:"contained",color:"primary",children:n.jsx("p",{children:"Click"})})]})]}),n.jsxs("div",{children:[n.jsx("p",{children:"Using as action Prop Behavior"}),n.jsx(e,{spacing:2,action:[n.jsx(r,{variant:"outlined",color:"primary",children:"Click"}),n.jsx(r,{variant:"contained",color:"primary",children:"Click"})]})]})]});m.storyName="Variations";m.parameters={storySource:{source:`<div style={{
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around"
}}><div><p>{"Using as children Behavior"}</p><ActionFooter spacing={2}><Button variant="outlined" color="primary"><p>{"Click"}</p></Button><Button variant="contained" color="primary"><p>{"Click"}</p></Button></ActionFooter></div><div><p>{"Using as action Prop Behavior"}</p><ActionFooter spacing={2} action={[<Button variant="outlined" color="primary">
              Click
            </Button>, <Button variant="contained" color="primary">
              Click
            </Button>]} /></div></div>`}};const l=o=>n.jsx("div",{style:{display:"flex",flexDirection:"row"},children:n.jsxs(e,{style:{width:"100%"},...o,children:[n.jsx(r,{variant:"outlined",color:"primary",children:"Click"}),n.jsx(r,{variant:"contained",color:"primary",children:"Click"})]})});l.storyName="Playground";l.argTypes={error:!1,checked:!1};l.parameters={storySource:{source:`args => {
  return <div style={{
    display: "flex",
    flexDirection: "row"
  }}>
          <ActionFooter style={{
      width: "100%"
    }} {...args}>
            <Button variant="outlined" color="primary">
              Click
            </Button>
            <Button variant="contained" color="primary">
              Click
            </Button>
          </ActionFooter>
        </div>;
}`}};const t={title:"ActionFooter",component:e,tags:["stories-mdx"],includeStories:["basicUsage","variations","playground"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:B};const G=["basicUsage","variations","playground"];export{G as __namedExportsOrder,h as basicUsage,t as default,l as playground,m as variations};
//# sourceMappingURL=action-footer.stories-8339824a.js.map
