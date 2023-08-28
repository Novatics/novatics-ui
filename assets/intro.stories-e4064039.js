import"./blocks-2646952b.js";import{j as e}from"./jsx-runtime-d079401a.js";import{u as i}from"./index-59d6410c.js";import{M as a}from"./index-3b08d913.js";import"./index-f1f2c4b1.js";import"./iframe-85435973.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-1c885437.js";import"./index-356e4a49.js";function l(s={}){const{wrapper:o}=Object.assign({},i(),s.components);return o?e.jsx(o,{...s,children:e.jsx(t,{})}):t();function t(){const n=Object.assign({p:"p",strong:"strong",a:"a",em:"em",h2:"h2",h3:"h3",pre:"pre",code:"code",ol:"ol",li:"li"},i(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Intro"}),`
`,e.jsx("h1",{align:"center",children:"NOVATICS UI"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"NOVATICS UI"})," contains simple and complex React components, is based on ",e.jsx(n.a,{href:"https://mui.com/material-ui/getting-started/overview/",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(n.em,{children:"Material UI"})})]}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.h3,{id:"novatics-ui",children:"Novatics UI"}),`
`,e.jsxs(n.p,{children:["Install Novatics UI, it is available as an ",e.jsx(n.a,{href:"https://www.npmjs.com/package/novatics",target:"_blank",rel:"nofollow noopener noreferrer",children:"npm package"})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"npm:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npm install @novatics-ui/core
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"yarn:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`yarn add @novatics-ui/core
`})}),`
`,e.jsx(n.h2,{id:"getting-started-with-novatics-ui",children:"Getting started with Novatics UI"}),`
`,e.jsxs(n.p,{children:["Here is an example of a basic app using Novatics UI's ",e.jsx(n.code,{children:"CurrencyTextField"})," component:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import * as React from 'react';
import CurrencyTextField from '@novatics-ui/currency-text-field';

function App() {
  return (
    <CurrencyTextField
      value={123456}
      onChange={() => {
        /* setup on change */
      }}
    />
  );
}
`})}),`
`,e.jsxs(n.p,{children:["In this ",e.jsx(n.a,{href:"https://components.novatics.com.br/?path=/docs/currency-textfield--playground",target:"_blank",rel:"nofollow noopener noreferrer",children:"playground"}),", try changing the props and see how it affects the output and the code."]}),`
`,e.jsx(n.h2,{id:"contributing",children:"Contributing"}),`
`,e.jsx(n.h3,{id:"developing",children:"Developing"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Download the project and install dependencies"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`yarn install
`})}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsxs(n.li,{children:["Use nx generators to create the component and the storybook documentation. Visit the ",e.jsx(n.a,{href:"https://nx.dev",target:"_blank",rel:"nofollow noopener noreferrer",children:"Nx Documentation"})," to learn more."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`yarn component:generate
`})}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsx(n.li,{children:"Run the storybook to start developing"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`yarn dev

`})}),`
`,e.jsxs(n.ol,{start:"4",children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Sign-up all commits, Here is ",e.jsx(n.a,{href:"https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits",target:"_blank",rel:"nofollow noopener noreferrer",children:"How to Sign using gpg, ssh or S/MIME"})]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Create a Pull request and wait for approval."}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"local-publishing-on-docker",children:"Local Publishing on Docker"}),`
`,e.jsx(n.p,{children:"Deploy Verdaccio on local Docker"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`yarn verdaccio:up
`})}),`
`,e.jsx(n.p,{children:"Add user to verdaccio"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`yarn verdaccio:addUser
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"note"})," On linux, there may be a permission error, in this case it is necessary to give permission on the sudo folder."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`sudo chown 10001:65533 -R storage
`})}),`
`,e.jsx(n.p,{children:"Create versions, push to git and deploy."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`yarn versions:create:push:deploy
`})}),`
`,e.jsx(n.h2,{id:"license",children:"License"}),`
`,e.jsxs(n.p,{children:[`This project is licensed under the terms of the
`,e.jsx(n.a,{href:"/LICENSE",children:"MIT license"}),"."]})]})}}const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const r={title:"Intro",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:l};const y=["__page"];export{y as __namedExportsOrder,c as __page,r as default};
//# sourceMappingURL=intro.stories-e4064039.js.map
