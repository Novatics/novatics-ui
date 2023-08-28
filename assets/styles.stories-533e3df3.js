import"./blocks-2646952b.js";import{s as h}from"./styled-b40b467a.js";import{j as e}from"./jsx-runtime-d079401a.js";import{c as T}from"./colors-4f758d22.js";import{B as v}from"./Box-78d8e914.js";import{G as i}from"./Grid-d121f362.js";import{B as u}from"./Button-f97409ef.js";import{u as p}from"./index-59d6410c.js";import{M as k,C as c,b as x}from"./index-3b08d913.js";import"./styled-f4c85dcf.js";import"./useThemeProps-09ff92e7.js";import"./index-f1f2c4b1.js";import"./extendSxProp-2d0de5c8.js";import"./useTheme-f6b5a289.js";import"./ButtonBase-14f96990.js";import"./emotion-react.browser.esm-ea340576.js";import"./TransitionGroupContext-f23bfbbc.js";import"./useEnhancedEffect-b6928b87.js";import"./useForkRef-f4ecef3a.js";import"./useIsFocusVisible-86ab9ba9.js";import"./iframe-85435973.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-1c885437.js";import"./index-356e4a49.js";const L="@novatics-ui/styles",R="0.15.2",B="./index.js",C="./index.d.ts",I={".":{import:"./index.mjs",require:"./index.js"}},F={name:L,version:R,main:B,types:C,exports:I},o=h(v)(()=>({border:"2px solid",borderColor:T.penumbra,padding:"10px",borderRadius:"4px",textAlign:"center",fontWeight:"bold"})),j=()=>e.jsxs(i,{container:!0,children:[e.jsx(i,{item:!0,xxs:4,xs:6,sm:1,md:5,lg:2,xl:4,xxl:1,children:e.jsx(o,{sx:{backgroundColor:"tertiary.light"},children:"1"})}),e.jsx(i,{item:!0,xxs:8,xs:6,sm:11,md:7,lg:10,xl:8,xxl:11,children:e.jsx(o,{sx:{backgroundColor:"secondary.light"},children:"2"})}),e.jsx(i,{item:!0,xxs:8,xs:6,sm:11,md:7,lg:10,xl:8,xxl:11,children:e.jsx(o,{sx:{backgroundColor:"success.light"},children:"3"})}),e.jsx(i,{item:!0,xxs:4,xs:6,sm:1,md:5,lg:2,xl:4,xxl:1,children:e.jsx(o,{sx:{backgroundColor:"warning.light"},children:"4"})})]});function S(t={}){const{wrapper:s}=Object.assign({},p(),t.components);return s?e.jsx(s,{...t,children:e.jsx(r,{})}):r();function r(){const n=Object.assign({h1:"h1",p:"p",h3:"h3",code:"code",pre:"pre",a:"a",div:"div",ul:"ul",h2:"h2",li:"li",strong:"strong"},p(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(k,{title:"Styles/Intro"}),`
`,e.jsxs(n.h1,{id:"styles-",children:["Styles ",e.jsx("img",{src:`https://img.shields.io/badge/Version-v${F.version}-brightgreenn`})]}),`
`,e.jsx(n.p,{children:"Basic functions to create a MUI theme with our default colors, spacings, border radius, shadows and typography."}),`
`,e.jsx(n.h3,{id:"installation",children:"Installation"}),`
`,e.jsxs(n.p,{children:["First install the latest version of the package from ",e.jsx(n.code,{children:"@novatics-ui/<%= fileName %>"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`  yarn add -D @novatics-ui/styles
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`  npm install --dev @novatics-ui/styles
`})}),`
`,e.jsx(n.p,{children:"and use it"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ThemeProvider, createTheme, styled } from '@novatics-ui/styles';

const theme = createTheme();
const Button = styled('button')({ background: 'red' });

return (
  <ThemeProvider theme={theme}>
    <Button>Click me</Button>
  </ThemeProvider>
);
`})}),`
`,e.jsx(n.h3,{id:"dependencies",children:"Dependencies"}),`
`,e.jsxs(n.p,{children:["This component extends ",e.jsx(n.a,{href:"https://mui.com/material-ui/customization/theming/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Material UI"}),". Therefore is needed to install Material UI:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn add @mui/material @emotion/react @emotion/styled
`})}),`
`,e.jsx(n.h3,{id:"create-theme",children:"Create Theme"}),`
`,e.jsxs(n.p,{children:["Our package provide a custon createTheme function that creates a MUI theme based in our ",e.jsx(n.a,{href:"/docs/tokens--colors",children:"tokens"}),`
To use it follow the documentation at Material-UI`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ThemeProvider, createTheme, styled } from '@novatics-ui/styles';

const App = ({ children }) => {
  const theme = createTheme();

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
`})}),`
`,e.jsx(c,{children:e.jsx(x,{name:"Create Theme",children:b=>e.jsx(n.div,{style:{display:"flex",justifyContent:"center"},children:e.jsx(u,{variant:"contained",children:"Click me"})})})}),`
`,e.jsx(n.h3,{id:"styled-function",children:"Styled function"}),`
`,e.jsxs(n.p,{children:[`We also provide a custom styled function. It extends the styled from MUI but has transient props built in.
This means that we can pass props not recognized by DOM using the dollar sign ($) as a prefix. More like we have in `,e.jsx(n.a,{href:"https://styled-components.com/docs/api#using-custom-props",target:"_blank",rel:"nofollow noopener noreferrer",children:"styled-components"}),`
This is useful when we are using @emotion/styled as our styling engine.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { styled } from '@novatics-ui/styles';

export const ListItem = styled('li')(({ $isFirst, $isLast }) => ({
  borderStyle: 'solid',
  borderColor: 'black',
  padding: '16px',
  borderTopRightRadius: $isFirst ? '16px' : undefined,
  borderTopLeftRadius: $isFirst ? '16px' : undefined,
  borderBottomRightRadius: $isLast ? '16px' : undefined,
  borderBottomLeftRadius: $isLast ? '16px' : undefined,
  borderTop: $isFirst ? undefined : 'none',
}));
`})}),`
`,e.jsx(n.p,{children:"In the code above you can pass the properties $isFirst and $isLast without worry of warnings in console saying that isFirst is not a valid DOM element prop"}),`
`,e.jsx(c,{children:e.jsx(x,{name:"Styled Function",children:b=>{const l=h("li")(({$isFirst:a,$isLast:m})=>({borderStyle:"solid",borderColor:"black",padding:"16px",borderTopRightRadius:a?"16px":void 0,borderTopLeftRadius:a?"16px":void 0,borderBottomRightRadius:m?"16px":void 0,borderBottomLeftRadius:m?"16px":void 0,borderTop:a?void 0:"none"}));return e.jsxs(n.ul,{style:{listStyleType:"none"},children:[e.jsx(l,{$isFirst:!0,children:"This is First"}),e.jsx(l,{children:"This is middle"}),e.jsx(l,{$isLast:!0,children:"This is last"})]})}})}),`
`,e.jsx(n.h2,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsx(n.p,{children:"Each breakpoint [key] matches with a fixed screen width [value]:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"xxs"}),": extra-extra-small: 0px"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"xs"}),": extra-small: 600px"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"sm"}),": small: 960px"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"md"}),": medium: 1024px"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"lg"}),": large: 1200px"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"xl"}),": extra-large: 1440px"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"xxl"}),": extra-extra-large: 1728px"]}),`
`]}),`
`,e.jsx(c,{children:e.jsx(x,{name:"Breakpoints",children:e.jsx(j,{})})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Breakpoints Applied:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"1 & 4"})," -> ",e.jsx(n.strong,{children:"xxs"}),": 4 ",e.jsx(n.strong,{children:"xs"}),": 6 ",e.jsx(n.strong,{children:"sm"}),": 1 ",e.jsx(n.strong,{children:"md"}),": 5 ",e.jsx(n.strong,{children:"lg"}),": 2 ",e.jsx(n.strong,{children:"xl"}),": 4 ",e.jsx(n.strong,{children:"xxl"}),": 1"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"2 & 3"})," -> ",e.jsx(n.strong,{children:"xxs"}),": 8 ",e.jsx(n.strong,{children:"xs"}),": 6 ",e.jsx(n.strong,{children:"sm"}),": 11 ",e.jsx(n.strong,{children:"md"}),": 7 ",e.jsx(n.strong,{children:"lg"}),": 10 ",e.jsx(n.strong,{children:"xl"}),": 8 ",e.jsx(n.strong,{children:"xxl"}),": 11"]}),`
`]}),`
`,e.jsx(n.p,{children:"made by Novatics ❤"})]})}}const g=t=>e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(u,{variant:"contained",children:"Click me"})});g.storyName="Create Theme";g.parameters={storySource:{source:`args => {
  return <div style={{
    display: "flex",
    justifyContent: "center"
  }}>
          <Button variant="contained">Click me</Button>
        </div>;
}`}};const y=t=>{const s=h("li")(({$isFirst:r,$isLast:n})=>({borderStyle:"solid",borderColor:"black",padding:"16px",borderTopRightRadius:r?"16px":void 0,borderTopLeftRadius:r?"16px":void 0,borderBottomRightRadius:n?"16px":void 0,borderBottomLeftRadius:n?"16px":void 0,borderTop:r?void 0:"none"}));return e.jsxs("ul",{style:{listStyleType:"none"},children:[e.jsx(s,{$isFirst:!0,children:"This is First"}),e.jsx(s,{children:"This is middle"}),e.jsx(s,{$isLast:!0,children:"This is last"})]})};y.storyName="Styled Function";y.parameters={storySource:{source:`args => {
  const ListItem = styled("li")(({
    $isFirst,
    $isLast
  }) => ({
    borderStyle: "solid",
    borderColor: "black",
    padding: "16px",
    borderTopRightRadius: $isFirst ? "16px" : undefined,
    borderTopLeftRadius: $isFirst ? "16px" : undefined,
    borderBottomRightRadius: $isLast ? "16px" : undefined,
    borderBottomLeftRadius: $isLast ? "16px" : undefined,
    borderTop: $isFirst ? undefined : "none"
  }));
  return <ul style={{
    listStyleType: "none"
  }}>
          <ListItem $isFirst>This is First</ListItem>
          <ListItem>This is middle</ListItem>
          <ListItem $isLast>This is last</ListItem>
        </ul>;
}`}};const f=()=>e.jsx(j,{});f.storyName="Breakpoints";f.parameters={storySource:{source:"<GridBreakpoints />"}};const d={title:"Styles/Intro",tags:["stories-mdx"],includeStories:["createTheme","styledFunction","breakpoints"]};d.parameters=d.parameters||{};d.parameters.docs={...d.parameters.docs||{},page:S};const se=["createTheme","styledFunction","breakpoints"];export{se as __namedExportsOrder,f as breakpoints,g as createTheme,d as default,y as styledFunction};
//# sourceMappingURL=styles.stories-533e3df3.js.map
