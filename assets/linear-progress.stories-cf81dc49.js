import"./blocks-2646952b.js";import{L as n}from"./linear-progress-c4ec8995.js";import{j as e}from"./jsx-runtime-d079401a.js";import{u as o}from"./index-59d6410c.js";import{M as p,C as m,b as l}from"./index-e3458e64.js";import"./fonts-0fc9e249.js";import"./typography-18a122d3.js";import"./colors-4f758d22.js";import"./styled-28de6295.js";import"./styled-feceba1a.js";import"./useThemeProps-09ff92e7.js";import"./index-f1f2c4b1.js";import"./Box-a1fd7b4a.js";import"./extendSxProp-2d0de5c8.js";import"./useTheme-f6b5a289.js";import"./emotion-react.browser.esm-ea340576.js";import"./Typography-d9ea1df7.js";import"./iframe-fe860a2a.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-1c885437.js";import"./index-356e4a49.js";const h="@novatics-ui/linear-progress",g="0.2.7",x="./index.js",j="./index.d.ts",u={".":{import:"./index.mjs",require:"./index.js"}},v={name:h,version:g,main:x,types:j,exports:u};function b(s={}){const{wrapper:i}=Object.assign({},o(),s.components);return i?e.jsx(i,{...s,children:e.jsx(a,{})}):a();function a(){const r=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre",a:"a",div:"div"},o(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Components/LinearProgress",component:n}),`
`,e.jsxs(r.h1,{id:"linearprogress-",children:["LinearProgress ",e.jsx("img",{src:`https://img.shields.io/badge/Version-v${v.version}-brightgreenn`})]}),`
`,e.jsx(r.h3,{id:"installation",children:"Installation"}),`
`,e.jsxs(r.p,{children:["First install the latest version of the package from ",e.jsx(r.code,{children:"@novatics-ui/linear-progress"}),"."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-shell",children:`  yarn add -D @novatics-ui/linear-progress
`})}),`
`,e.jsx(r.p,{children:"and use it"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import ... from '@novatics-ui/linear-progress';

  ...


`})}),`
`,e.jsx(r.h3,{id:"dependencies",children:"Dependencies"}),`
`,e.jsxs(r.p,{children:["This component extends ",e.jsx(r.a,{href:"https://mui.com/material-ui/react-progress/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Material UI React Linear Progress"}),". Therefore is needed to install Material UI:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-bash",children:`yarn add @mui/material @emotion/react @emotion/styled
`})}),`
`,e.jsx(r.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsxs(r.p,{children:["The LinearProgress component is used to show a progress bar. The ",e.jsx(r.code,{children:"showPercentage"})," attribute is used to present a label with the percentage of the progress."]}),`
`,e.jsx(m,{children:e.jsx(l,{name:"Basic Usage",children:d=>e.jsx(r.div,{style:{width:"80%"},children:e.jsx(n,{showPercentage:!0,variant:"determinate",value:70,...d})})})}),`
`,e.jsx(r.p,{children:"made by Novatics ❤"})]})}}const c=s=>e.jsx("div",{style:{width:"80%"},children:e.jsx(n,{showPercentage:!0,variant:"determinate",value:70,...s})});c.storyName="Basic Usage";c.parameters={storySource:{source:`args => {
  return <div style={{
    width: "80%"
  }}>
          <LinearProgress showPercentage variant="determinate" value={70} {...args} />
        </div>;
}`}};const t={title:"Components/LinearProgress",component:n,tags:["stories-mdx"],includeStories:["basicUsage"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:b};const V=["basicUsage"];export{V as __namedExportsOrder,c as basicUsage,t as default};
//# sourceMappingURL=linear-progress.stories-cf81dc49.js.map
