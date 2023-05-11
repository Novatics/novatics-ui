import"./blocks-2646952b.js";import{r as v,i as C}from"./createSvgIcon-cb46c984.js";import{j as e}from"./jsx-runtime-5926aa06.js";import{C as l}from"./Chip-1f16ee06.js";import{u as x}from"./index-bda0bad7.js";import{M as y,C as r,S as t}from"./index-54617b9e.js";import"./index-ebeaab24.js";import"./createSvgIcon-fa2b4ffe.js";import"./useThemeProps-92c88c91.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-724eea7b.js";import"./styled-8cd1cbaa.js";import"./useId-50ce759f.js";import"./TransitionGroupContext-9e5a73a2.js";import"./useControlled-5355145e.js";import"./isMuiElement-b72c78c9.js";import"./ButtonBase-abc267ae.js";import"./emotion-react.browser.esm-74ad867f.js";import"./iframe-56761c51.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ce6f85b9.js";import"./index-356e4a49.js";const D="@novatics/chip",f="0.2.1",I="./index.js",k="./index.d.ts",w={".":{import:"./index.mjs",require:"./index.js"}},S={name:D,version:f,main:I,types:k,exports:w};var c={},z=C;Object.defineProperty(c,"__esModule",{value:!0});var n=c.default=void 0,O=z(v()),_=e,M=(0,O.default)((0,_.jsx)("path",{d:"M20 8V6c0-1.65-1.35-3-3-3H7C5.35 3 4 4.35 4 6v2c-1.65 0-3 1.35-3 3v5c0 1.65 1.35 3 3 3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1c1.65 0 3-1.35 3-3v-5c0-1.65-1.35-3-3-3zM6 6c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v2.78c-.61.55-1 1.34-1 2.22v2H7v-2c0-.88-.39-1.67-1-2.22V6zm15 10c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v4h14v-4c0-.55.45-1 1-1s1 .45 1 1v5z"}),"ChairOutlined");n=c.default=M;try{getChipUtilityClass.displayName="getChipUtilityClass",getChipUtilityClass.__docgenInfo={description:"",displayName:"getChipUtilityClass",props:{}}}catch{}function N(a={}){const{wrapper:d}=Object.assign({},x(),a.components);return d?e.jsx(d,{...a,children:e.jsx(p,{})}):p();function p(){const i=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre",div:"div"},x(),a.components);return e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Chip",component:l}),`
`,e.jsxs(i.h1,{id:"chip-",children:["Chip ",e.jsx("img",{src:`https://img.shields.io/badge/Version-v${S.version}-brightgreenn`})]}),`
`,e.jsx(i.h3,{id:"installation",children:"Installation"}),`
`,e.jsxs(i.p,{children:["First install the latest version of the package from ",e.jsx(i.code,{children:"@novatics/chip"}),"."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-shell",children:`  yarn add -D @novatics/chip
`})}),`
`,e.jsx(i.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"Chip"})," component have two variants: it supports outlined and filled styling. The default variant is filled."]}),`
`,e.jsx(r,{children:e.jsx(t,{name:"Basic Usage",children:o=>e.jsxs(i.div,{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"},children:[e.jsx(l,{label:"Chip"}),e.jsx(l,{label:"Chip",variant:"outlined"})]})})}),`
`,e.jsx(i.h3,{id:"click-interaction",children:"Click interaction"}),`
`,e.jsxs(i.p,{children:["Chips can be clickable. In this case, it will have a hover and a click effect. It can be set by either passing the ",e.jsx(i.code,{children:"clickable"})," prop or by passing a function to ",e.jsx(i.code,{children:"onClick"})," prop."]}),`
`,e.jsx(r,{children:e.jsx(t,{name:"Click interaction",children:o=>e.jsxs(i.div,{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"},children:[e.jsx(l,{label:"Clickable Chip",clickable:!0}),e.jsx(l,{label:"Click Me",onClick:()=>window.alert("Hi! :)"),variant:"outlined"})]})})}),`
`,e.jsx(i.h3,{id:"delete-interaction",children:"Delete interaction"}),`
`,e.jsxs(i.p,{children:["A ",e.jsx(i.code,{children:"Chip"})," can present a delete icon by passing a ",e.jsx(i.code,{children:"onDelete"})," prop."]}),`
`,e.jsx(r,{children:e.jsx(t,{name:"Delete interaction",children:o=>e.jsxs(i.div,{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"},children:[e.jsx(l,{label:"Deletable Chip",onDelete:()=>{}}),e.jsx(l,{label:"Deletable Chip",onDelete:()=>{},variant:"outlined"}),e.jsx(l,{label:"Deletable and Clickable",onDelete:()=>{},clickable:!0,variant:"outlined"})]})})}),`
`,e.jsx(i.h3,{id:"size",children:"Size"}),`
`,e.jsxs(i.p,{children:["A ",e.jsx(i.code,{children:"Chip"})," can be small or medium. The default size is medium."]}),`
`,e.jsx(r,{children:e.jsx(t,{name:"Size",children:o=>e.jsxs(i.div,{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"},children:[e.jsx(l,{label:"Small",size:"small"}),e.jsx(l,{label:"Small",size:"small",variant:"outlined"}),e.jsx(l,{label:"Small",size:"small",onDelete:()=>{},clickable:!0}),e.jsx(l,{label:"Small",size:"small",onDelete:()=>{},variant:"outlined",clickable:!0})]})})}),`
`,e.jsx(i.h3,{id:"icon",children:"Icon"}),`
`,e.jsxs(i.p,{children:["A ",e.jsx(i.code,{children:"Chip"})," can also have an icon, always placed on left."]}),`
`,e.jsx(r,{children:e.jsx(t,{name:"Icon",children:o=>e.jsxs(i.div,{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"},children:[e.jsx(l,{label:"Icon",icon:e.jsx(n,{})}),e.jsx(l,{label:"Icon",icon:e.jsx(n,{}),variant:"outlined"}),e.jsx(l,{label:"Icon",icon:e.jsx(n,{}),size:"small"}),e.jsx(l,{label:"Icon",icon:e.jsx(n,{}),size:"small",variant:"outlined"})]})})}),`
`,e.jsx(i.h3,{id:"colors",children:"Colors"}),`
`,e.jsx(i.p,{children:"A 'Chip' can display a range of colors in addition to the default."}),`
`,e.jsx(r,{children:e.jsx(t,{name:"Colors",children:o=>e.jsxs(e.Fragment,{children:[e.jsxs(i.div,{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px",marginBottom:"10px"},children:[e.jsx(l,{label:"Primary",color:"primary",icon:e.jsx(n,{}),onDelete:()=>{},clickable:!0}),e.jsx(l,{label:"Info",color:"info",icon:e.jsx(n,{}),onDelete:()=>{},clickable:!0}),e.jsx(l,{label:"Success",color:"success",icon:e.jsx(n,{}),onDelete:()=>{},clickable:!0}),e.jsx(l,{label:"Error",color:"error",icon:e.jsx(n,{}),onDelete:()=>{},clickable:!0}),e.jsx(l,{label:"Warning",color:"warning",icon:e.jsx(n,{}),onDelete:()=>{},clickable:!0})]}),e.jsxs(i.div,{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"},children:[e.jsx(l,{label:"Primary",color:"primary",icon:e.jsx(n,{}),onDelete:()=>{},clickable:!0,variant:"outlined"}),e.jsx(l,{label:"Info",color:"info",icon:e.jsx(n,{}),onDelete:()=>{},clickable:!0,variant:"outlined"}),e.jsx(l,{label:"Success",color:"success",icon:e.jsx(n,{}),onDelete:()=>{},clickable:!0,variant:"outlined"}),e.jsx(l,{label:"Error",color:"error",icon:e.jsx(n,{}),onDelete:()=>{},clickable:!0,variant:"outlined"}),e.jsx(l,{label:"Warning",color:"warning",icon:e.jsx(n,{}),onDelete:()=>{},clickable:!0,variant:"outlined"})]})]})})}),`
`,e.jsx(i.p,{children:"made by Novatics ❤"})]})}}const h=a=>e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"},children:[e.jsx(l,{label:"Chip"}),e.jsx(l,{label:"Chip",variant:"outlined"})]});h.storyName="Basic Usage";h.parameters={storySource:{source:`args => {
  return <div style={{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px"
  }}>
          <Chip label="Chip" />
          <Chip label="Chip" variant="outlined" />
        </div>;
}`}};const u=a=>e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"},children:[e.jsx(l,{label:"Clickable Chip",clickable:!0}),e.jsx(l,{label:"Click Me",onClick:()=>window.alert("Hi! :)"),variant:"outlined"})]});u.storyName="Click interaction";u.parameters={storySource:{source:`args => {
  return <div style={{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px"
  }}>
          <Chip label="Clickable Chip" clickable />
          <Chip label="Click Me" onClick={() => window.alert("Hi! :)")} variant="outlined" />
        </div>;
}`}};const m=a=>e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"},children:[e.jsx(l,{label:"Deletable Chip",onDelete:()=>{}}),e.jsx(l,{label:"Deletable Chip",onDelete:()=>{},variant:"outlined"}),e.jsx(l,{label:"Deletable and Clickable",onDelete:()=>{},clickable:!0,variant:"outlined"})]});m.storyName="Delete interaction";m.parameters={storySource:{source:`args => {
  return <div style={{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px"
  }}>
          <Chip label="Deletable Chip" onDelete={() => {}} />
          <Chip label="Deletable Chip" onDelete={() => {}} variant="outlined" />
          <Chip label="Deletable and Clickable" onDelete={() => {}} clickable variant="outlined" />
        </div>;
}`}};const b=a=>e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"},children:[e.jsx(l,{label:"Small",size:"small"}),e.jsx(l,{label:"Small",size:"small",variant:"outlined"}),e.jsx(l,{label:"Small",size:"small",onDelete:()=>{},clickable:!0}),e.jsx(l,{label:"Small",size:"small",onDelete:()=>{},variant:"outlined",clickable:!0})]});b.storyName="Size";b.parameters={storySource:{source:`args => {
  return <div style={{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px"
  }}>
          <Chip label="Small" size="small" />
          <Chip label="Small" size="small" variant="outlined" />
          <Chip label="Small" size="small" onDelete={() => {}} clickable />
          <Chip label="Small" size="small" onDelete={() => {}} variant="outlined" clickable />
        </div>;
}`}};const j=a=>e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"},children:[e.jsx(l,{label:"Icon",icon:e.jsx(n,{})}),e.jsx(l,{label:"Icon",icon:e.jsx(n,{}),variant:"outlined"}),e.jsx(l,{label:"Icon",icon:e.jsx(n,{}),size:"small"}),e.jsx(l,{label:"Icon",icon:e.jsx(n,{}),size:"small",variant:"outlined"})]});j.storyName="Icon";j.parameters={storySource:{source:`args => {
  return <div style={{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px"
  }}>
          <Chip label="Icon" icon={<ChairOutlinedIcon />} />
          <Chip label="Icon" icon={<ChairOutlinedIcon />} variant="outlined" />
          <Chip label="Icon" icon={<ChairOutlinedIcon />} size="small" />
          <Chip label="Icon" icon={<ChairOutlinedIcon />} size="small" variant="outlined" />
        </div>;
}`}};const g=a=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px",marginBottom:"10px"},children:[e.jsx(l,{label:"Primary",color:"primary",icon:e.jsx(n,{}),onDelete:()=>{},clickable:!0}),e.jsx(l,{label:"Info",color:"info",icon:e.jsx(n,{}),onDelete:()=>{},clickable:!0}),e.jsx(l,{label:"Success",color:"success",icon:e.jsx(n,{}),onDelete:()=>{},clickable:!0}),e.jsx(l,{label:"Error",color:"error",icon:e.jsx(n,{}),onDelete:()=>{},clickable:!0}),e.jsx(l,{label:"Warning",color:"warning",icon:e.jsx(n,{}),onDelete:()=>{},clickable:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"},children:[e.jsx(l,{label:"Primary",color:"primary",icon:e.jsx(n,{}),onDelete:()=>{},clickable:!0,variant:"outlined"}),e.jsx(l,{label:"Info",color:"info",icon:e.jsx(n,{}),onDelete:()=>{},clickable:!0,variant:"outlined"}),e.jsx(l,{label:"Success",color:"success",icon:e.jsx(n,{}),onDelete:()=>{},clickable:!0,variant:"outlined"}),e.jsx(l,{label:"Error",color:"error",icon:e.jsx(n,{}),onDelete:()=>{},clickable:!0,variant:"outlined"}),e.jsx(l,{label:"Warning",color:"warning",icon:e.jsx(n,{}),onDelete:()=>{},clickable:!0,variant:"outlined"})]})]});g.storyName="Colors";g.parameters={storySource:{source:`args => {
  return <>
          <div style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "10px",
      marginBottom: "10px"
    }}>
            <Chip label="Primary" color="primary" icon={<ChairOutlinedIcon />} onDelete={() => {}} clickable />
            <Chip label="Info" color="info" icon={<ChairOutlinedIcon />} onDelete={() => {}} clickable />
            <Chip label="Success" color="success" icon={<ChairOutlinedIcon />} onDelete={() => {}} clickable />
            <Chip label="Error" color="error" icon={<ChairOutlinedIcon />} onDelete={() => {}} clickable />
            <Chip label="Warning" color="warning" icon={<ChairOutlinedIcon />} onDelete={() => {}} clickable />
          </div>
          <div style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "10px"
    }}>
            <Chip label="Primary" color="primary" icon={<ChairOutlinedIcon />} onDelete={() => {}} clickable variant="outlined" />
            <Chip label="Info" color="info" icon={<ChairOutlinedIcon />} onDelete={() => {}} clickable variant="outlined" />
            <Chip label="Success" color="success" icon={<ChairOutlinedIcon />} onDelete={() => {}} clickable variant="outlined" />
            <Chip label="Error" color="error" icon={<ChairOutlinedIcon />} onDelete={() => {}} clickable variant="outlined" />
            <Chip label="Warning" color="warning" icon={<ChairOutlinedIcon />} onDelete={() => {}} clickable variant="outlined" />
          </div>
        </>;
}`}};const s={title:"Chip",component:l,tags:["stories-mdx"],includeStories:["basicUsage","clickInteraction","deleteInteraction","size","icon","colors"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:N};const le=["basicUsage","clickInteraction","deleteInteraction","size","icon","colors"];export{le as __namedExportsOrder,h as basicUsage,u as clickInteraction,g as colors,s as default,m as deleteInteraction,j as icon,b as size};
//# sourceMappingURL=chip.stories-8d139efa.js.map
