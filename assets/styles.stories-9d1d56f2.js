import"./blocks-2646952b.js";import{s as u}from"./styled-098b8791.js";import{a as k,j as t}from"./emotion-react-jsx-runtime.browser.esm-3f442687.js";import{c as L}from"./typography-6dc0827f.js";import"./fonts-a80bcdbc.js";import{B as R}from"./Box-e00ca5da.js";import{G as o}from"./Grid-4a0c837a.js";import{j as e}from"./jsx-runtime-5926aa06.js";import{B as g}from"./Button-d3194025.js";import{u as m}from"./index-bda0bad7.js";import{M as B,C as x,S as h}from"./index-1899973a.js";import"./useThemeProps-92c88c91.js";import"./index-ebeaab24.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-724eea7b.js";import"./emotion-react.browser.esm-74ad867f.js";import"./extendSxProp-e0c0e6ad.js";import"./useTheme-242fb5c2.js";import"./ButtonBase-da9039e1.js";import"./TransitionGroupContext-9e5a73a2.js";import"./iframe-2e1fc9fb.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ce6f85b9.js";import"./index-356e4a49.js";const C="@novatics/styles",F="0.3.0",S="./index.js",$="./index.d.ts",I={".":{import:"./index.mjs",require:"./index.js"}},w={name:C,version:F,main:S,types:$,exports:I},M={shouldForwardProp:s=>!s.startsWith("$")},j=(s,r)=>u(s,{...M,...r}),d=u(R)(()=>({border:"2px solid",borderColor:L.penumbra,padding:"10px",borderRadius:"4px",textAlign:"center",fontWeight:"bold"})),y=()=>k(o,{container:!0,spacing:2,padding:1,children:[t(o,{xxs:4,xs:6,sm:1,md:5,lg:2,xl:4,xxl:1,padding:1,children:t(d,{sx:{backgroundColor:"tertiary.light"},children:"1"})}),t(o,{xxs:8,xs:6,sm:11,md:7,lg:10,xl:8,xxl:11,padding:1,children:t(d,{sx:{backgroundColor:"secondary.light"},children:"2"})}),t(o,{xxs:8,xs:6,sm:11,md:7,lg:10,xl:8,xxl:11,padding:1,children:t(d,{sx:{backgroundColor:"success.light"},children:"3"})}),t(o,{xxs:4,xs:6,sm:1,md:5,lg:2,xl:4,xxl:1,padding:1,children:t(d,{sx:{backgroundColor:"warning.light"},children:"4"})})]});function N(s={}){const{wrapper:r}=Object.assign({},m(),s.components);return r?e.jsx(r,{...s,children:e.jsx(i,{})}):i();function i(){const n=Object.assign({h1:"h1",p:"p",h3:"h3",code:"code",pre:"pre",a:"a",div:"div",ul:"ul",h2:"h2",li:"li",strong:"strong"},m(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(B,{title:"Styles"}),`
`,e.jsxs(n.h1,{id:"styles-",children:["Styles ",e.jsx("img",{src:`https://img.shields.io/badge/Version-v${w.version}-brightgreenn`})]}),`
`,e.jsx(n.p,{children:"Basic functions to create a MUI theme with our default colors, spacings, border radius, shadows and typography."}),`
`,e.jsx(n.h3,{id:"installation",children:"Installation"}),`
`,e.jsxs(n.p,{children:["First install the latest version of the package from ",e.jsx(n.code,{children:"@novatics/<%= fileName %>"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`  yarn add -D @novatics/styles
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`  npm install --dev @novatics/styles
`})}),`
`,e.jsx(n.p,{children:"and use it"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ThemeProvider, createTheme, styled } from '@novatics/styles';

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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ThemeProvider, createTheme, styled } from '@novatics/styles';

const App = ({ children }) => {
  const theme = createTheme();

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
`})}),`
`,e.jsx(x,{children:e.jsx(h,{name:"Create Theme",children:v=>e.jsx(n.div,{style:{display:"flex",justifyContent:"center"},children:e.jsx(g,{variant:"contained",children:"Click me"})})})}),`
`,e.jsx(n.h3,{id:"styled-function",children:"Styled function"}),`
`,e.jsxs(n.p,{children:[`We also provide a custom styled function. It extends the styled from MUI but has transient props built in.
This means that we can pass props not recognized by DOM using the dollar sign ($) as a prefix. More like we have in `,e.jsx(n.a,{href:"https://styled-components.com/docs/api#using-custom-props",target:"_blank",rel:"nofollow noopener noreferrer",children:"styled-components"}),`
This is useful when we are using @emotion/styled as our styling engine.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { styled } from '@novatics/styles';

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
`,e.jsx(x,{children:e.jsx(h,{name:"Styled Function",children:v=>{const a=j("li")(({$isFirst:c,$isLast:p})=>({borderStyle:"solid",borderColor:"black",padding:"16px",borderTopRightRadius:c?"16px":void 0,borderTopLeftRadius:c?"16px":void 0,borderBottomRightRadius:p?"16px":void 0,borderBottomLeftRadius:p?"16px":void 0,borderTop:c?void 0:"none"}));return e.jsxs(n.ul,{style:{listStyleType:"none"},children:[e.jsx(a,{$isFirst:!0,children:"This is First"}),e.jsx(a,{children:"This is middle"}),e.jsx(a,{$isLast:!0,children:"This is last"})]})}})}),`
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
`,e.jsx(x,{children:e.jsx(h,{name:"Breakpoints",children:e.jsx(y,{})})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Breakpoints Applied:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"1 & 4"})," -> ",e.jsx(n.strong,{children:"xxs"}),": 4 ",e.jsx(n.strong,{children:"xs"}),": 6 ",e.jsx(n.strong,{children:"sm"}),": 1 ",e.jsx(n.strong,{children:"md"}),": 5 ",e.jsx(n.strong,{children:"lg"}),": 2 ",e.jsx(n.strong,{children:"xl"}),": 4 ",e.jsx(n.strong,{children:"xxl"}),": 1"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"2 & 3"})," -> ",e.jsx(n.strong,{children:"xxs"}),": 8 ",e.jsx(n.strong,{children:"xs"}),": 6 ",e.jsx(n.strong,{children:"sm"}),": 11 ",e.jsx(n.strong,{children:"md"}),": 7 ",e.jsx(n.strong,{children:"lg"}),": 10 ",e.jsx(n.strong,{children:"xl"}),": 8 ",e.jsx(n.strong,{children:"xxl"}),": 11"]}),`
`]}),`
`,e.jsx(n.p,{children:"made by Novatics ❤"})]})}}const f=s=>e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(g,{variant:"contained",children:"Click me"})});f.storyName="Create Theme";f.parameters={storySource:{source:`args => {
  return <div style={{
    display: "flex",
    justifyContent: "center"
  }}>
          <Button variant="contained">Click me</Button>
        </div>;
}`}};const b=s=>{const r=j("li")(({$isFirst:i,$isLast:n})=>({borderStyle:"solid",borderColor:"black",padding:"16px",borderTopRightRadius:i?"16px":void 0,borderTopLeftRadius:i?"16px":void 0,borderBottomRightRadius:n?"16px":void 0,borderBottomLeftRadius:n?"16px":void 0,borderTop:i?void 0:"none"}));return e.jsxs("ul",{style:{listStyleType:"none"},children:[e.jsx(r,{$isFirst:!0,children:"This is First"}),e.jsx(r,{children:"This is middle"}),e.jsx(r,{$isLast:!0,children:"This is last"})]})};b.storyName="Styled Function";b.parameters={storySource:{source:`args => {
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
}`}};const T=()=>e.jsx(y,{});T.storyName="Breakpoints";T.parameters={storySource:{source:"<GridBreakpoints />"}};const l={title:"Styles",tags:["stories-mdx"],includeStories:["createTheme","styledFunction","breakpoints"]};l.parameters=l.parameters||{};l.parameters.docs={...l.parameters.docs||{},page:N};const ie=["createTheme","styledFunction","breakpoints"];export{ie as __namedExportsOrder,T as breakpoints,f as createTheme,l as default,b as styledFunction};
//# sourceMappingURL=styles.stories-9d1d56f2.js.map
