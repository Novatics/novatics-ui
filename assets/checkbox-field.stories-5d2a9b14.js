import"./blocks-2646952b.js";import{F as g,a as y}from"./formik.esm-42e74a6c.js";import{C as i,a as s}from"./checkbox-formik-field-4e32558a.js";import{j as e}from"./jsx-runtime-5926aa06.js";import{S as r}from"./Stack-b78562b3.js";import{T as n}from"./Typography-03224099.js";import{G as l}from"./Grid-3ab5f678.js";import{B as d}from"./Button-485fab6a.js";import{u as k}from"./index-bda0bad7.js";import{M as F,C as p,S as u,A as C}from"./index-5a895560.js";import"./index-ebeaab24.js";import"./emotion-react.browser.esm-3c2a4d00.js";import"./useThemeProps-d5e886d2.js";import"./emotion-react-jsx-runtime.browser.esm-780ca0af.js";import"./checkbox-0d6ecd1c.js";import"./Check-a99e6c97.js";import"./createSvgIcon-fb2bd28f.js";import"./createSvgIcon-e0922175.js";import"./styled-3acb32b8.js";import"./ownerWindow-74a9cc60.js";import"./useForkRef-3ff4e0b8.js";import"./useControlled-5355145e.js";import"./isMuiElement-b72c78c9.js";import"./useId-b93361cb.js";import"./TransitionGroupContext-8ebc3921.js";import"./ButtonBase-de99d671.js";import"./fonts-570bed1b.js";import"./typography-6dc0827f.js";import"./styled-4c5f4679.js";import"./SwitchBase-0559c5d6.js";import"./useFormControl-0ef100e1.js";import"./FormControlLabel-86638211.js";import"./formControlState-a1fb9590.js";import"./useTheme-c6adb93a.js";import"./FormControl-8d8b9d81.js";import"./styled-70ec36a2.js";import"./extendSxProp-f682d789.js";import"./iframe-d29d3a02.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ce6f85b9.js";import"./index-356e4a49.js";const T="@novatics/checkbox-field",w="0.3.4",G="./index.js",q="./index.d.ts",O={".":{import:"./index.mjs",require:"./index.js"}},P={formik:"^2.2.9"},D={name:T,version:w,main:G,types:q,exports:O,peerDependencies:P};function B(c={}){const{wrapper:t}=Object.assign({},k(),c.components);return t?e.jsx(t,{...c,children:e.jsx(o,{})}):o();function o(){const a=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre",a:"a",ul:"ul",li:"li",div:"div"},k(),c.components);return e.jsxs(e.Fragment,{children:[e.jsx(F,{title:"CheckboxField",component:i}),`
`,e.jsxs(a.h1,{id:"checkboxfield-",children:["CheckboxField ",e.jsx("img",{src:`https://img.shields.io/badge/Version-v${D.version}-brightgreenn`})]}),`
`,e.jsx(a.h3,{id:"installation",children:"Installation"}),`
`,e.jsxs(a.p,{children:["First install the latest version of the package from ",e.jsx(a.code,{children:"@novatics/checkbox-field"}),"."]}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-shell",children:`  yarn add -D @novatics/checkbox-field
`})}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-shell",children:`  npm install --dev @novatics/checkbox-field
`})}),`
`,e.jsx(a.p,{children:"and use it"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`import ... from '@novatics/checkbox-field';

  ...


`})}),`
`,e.jsx(a.h3,{id:"dependencies",children:"Dependencies"}),`
`,e.jsxs(a.p,{children:["This component extends ",e.jsx(a.a,{href:"https://mui.com/material-ui/react-checkbox/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Material UI React Checkbox"}),". Therefore is needed to install Material UI:"]}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-bash",children:`yarn add @mui/material
`})}),`
`,e.jsx(a.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(p,{children:e.jsx(u,{name:"Basic Usage",children:e.jsxs(r,{children:[e.jsx(n,{variant:"h6",children:"All states and variants"}),e.jsxs(l,{container:!0,spacing:2,children:[e.jsx(l,{item:!0,xxs:2,children:e.jsxs(r,{spacing:0,children:[e.jsx(n,{variant:"bodySmall",children:"Default"}),e.jsx(i,{}),e.jsx(i,{checked:!0}),e.jsx(i,{disabled:!0}),e.jsx(i,{checked:!0,disabled:!0}),e.jsx(i,{color:"error"})]})}),e.jsx(l,{item:!0,xxs:2,children:e.jsxs(r,{spacing:0,children:[e.jsx(n,{variant:"bodySmall",children:"Outlined"}),e.jsx(i,{variant:"outlined"}),e.jsx(i,{variant:"outlined",checked:!0}),e.jsx(i,{variant:"outlined",checked:!0,disabled:!0})]})}),e.jsx(l,{item:!0,xxs:2,children:e.jsxs(r,{spacing:0,children:[e.jsx(n,{variant:"bodySmall",children:"Indeterminate Default"}),e.jsx(i,{indeterminate:!0}),e.jsx(i,{indeterminate:!0,disabled:!0})]})}),e.jsx(l,{item:!0,xxs:2,children:e.jsxs(r,{spacing:0,children:[e.jsx(n,{variant:"bodySmall",children:"Indeterminate Outlined"}),e.jsx(i,{variant:"outlined",indeterminate:!0}),e.jsx(i,{variant:"outlined",indeterminate:!0,disabled:!0})]})}),e.jsx(l,{item:!0,xxs:2,children:e.jsxs(r,{spacing:0,children:[e.jsx(n,{variant:"bodySmall",children:"Color Variations"}),e.jsxs(r,{direction:"row",spacing:0,children:[e.jsx(i,{color:"primary",checked:!0}),e.jsx(i,{color:"primary"})]}),e.jsxs(r,{direction:"row",spacing:0,children:[e.jsx(i,{color:"secondary",checked:!0}),e.jsx(i,{color:"secondary"})]}),e.jsxs(r,{direction:"row",spacing:0,children:[e.jsx(i,{color:"error",checked:!0}),e.jsx(i,{color:"error"})]}),e.jsxs(r,{direction:"row",spacing:0,children:[e.jsx(i,{color:"info",checked:!0}),e.jsx(i,{color:"info"})]}),e.jsxs(r,{direction:"row",spacing:0,children:[e.jsx(i,{color:"success",checked:!0}),e.jsx(i,{color:"success"})]}),e.jsxs(r,{direction:"row",spacing:0,children:[e.jsx(i,{color:"warning",checked:!0}),e.jsx(i,{color:"warning"})]})]})})]}),e.jsx(n,{variant:"h6",children:"Labels"}),e.jsxs(l,{container:!0,spacing:2,children:[e.jsx(l,{item:!0,xxs:2,children:e.jsxs(r,{spacing:0,children:[e.jsx(n,{variant:"bodySmall",children:"Default(end)"}),e.jsx(i,{label:"label",labelPlacement:"end"})]})}),e.jsx(l,{item:!0,xxs:2,children:e.jsxs(r,{spacing:0,children:[e.jsx(n,{variant:"bodySmall",children:"Start"}),e.jsx(i,{label:"label",labelPlacement:"start"})]})}),e.jsx(l,{item:!0,xxs:2,children:e.jsxs(r,{spacing:0,children:[e.jsx(n,{variant:"bodySmall",children:"Top"}),e.jsx(i,{label:"label",labelPlacement:"top"})]})}),e.jsx(l,{item:!0,xxs:2,children:e.jsxs(r,{spacing:0,children:[e.jsx(n,{variant:"bodySmall",children:"Bottom"}),e.jsx(i,{label:"label",labelPlacement:"bottom"})]})}),e.jsx(l,{item:!0,xxs:2,children:e.jsxs(r,{spacing:0,children:[e.jsx(n,{variant:"bodySmall",children:"Required"}),e.jsx(i,{label:"label",required:!0})]})})]})]})})}),`
`,e.jsx(a.h3,{id:"using-formik",children:"Using Formik"}),`
`,e.jsxs(a.p,{children:["We also provide a integrated component using ",e.jsx(a.a,{href:"https://formik.org/docs/api/field",target:"_blank",rel:"nofollow noopener noreferrer",children:"Field"}),` from Formik!
Some default behaviors of our component are:`]}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:"Automatic label using field name. If you want to replace or hide the label you can use the label property."}),`
`,e.jsx(a.li,{children:"Autimatic validation if the field is required (html5 )."}),`
`]}),`
`,e.jsx(p,{children:e.jsx(u,{name:"Using Formik",children:b=>e.jsx(r,{direction:"row",spacing:0,children:e.jsx(g,{initialValues:{isChecked:!1,required:!1,toggle:!1,checked:[]},onSubmit:async h=>{await new Promise(m=>setTimeout(m,500)),alert(JSON.stringify(h,null,2))},children:({values:h,validateForm:m})=>e.jsx(y,{children:e.jsxs(r,{children:[e.jsx(s,{id:"isChecked",name:"isChecked"}),e.jsx(s,{id:"toggle",name:"toggle",label:`${h.toggle}`,validate:f=>!f}),e.jsx(s,{type:"checkbox",name:"required",label:"Required",required:!0}),e.jsxs(a.div,{role:"group","aria-labelledby":"checkbox-group",children:[e.jsx(s,{type:"checkbox",name:"checked",value:"One",label:"One"}),e.jsx(s,{type:"checkbox",name:"checked",value:"Two",label:"Two"}),e.jsx(s,{type:"checkbox",name:"checked",value:"Three",label:"Three"})]}),e.jsxs(r,{direction:"row",spacing:1,children:[e.jsx(d,{variant:"outlined",onClick:()=>m(),children:"Validate"}),e.jsx(d,{variant:"contained",type:"submit",children:"Submit"})]})]})})})})})}),`
`,e.jsx(p,{children:e.jsx(u,{name:"Playground",argTypes:{error:!1,checked:!1},children:b=>e.jsx(a.div,{children:e.jsx(i,{...b})})})}),`
`,e.jsx(C,{story:"Playground"}),`
`,e.jsx(a.p,{children:"made by Novatics ❤"})]})}}const v=()=>e.jsxs(r,{children:[e.jsx(n,{variant:"h6",children:"All states and variants"}),e.jsxs(l,{container:!0,spacing:2,children:[e.jsx(l,{item:!0,xxs:2,children:e.jsxs(r,{spacing:0,children:[e.jsx(n,{variant:"bodySmall",children:"Default"}),e.jsx(i,{}),e.jsx(i,{checked:!0}),e.jsx(i,{disabled:!0}),e.jsx(i,{checked:!0,disabled:!0}),e.jsx(i,{color:"error"})]})}),e.jsx(l,{item:!0,xxs:2,children:e.jsxs(r,{spacing:0,children:[e.jsx(n,{variant:"bodySmall",children:"Outlined"}),e.jsx(i,{variant:"outlined"}),e.jsx(i,{variant:"outlined",checked:!0}),e.jsx(i,{variant:"outlined",checked:!0,disabled:!0})]})}),e.jsx(l,{item:!0,xxs:2,children:e.jsxs(r,{spacing:0,children:[e.jsx(n,{variant:"bodySmall",children:"Indeterminate Default"}),e.jsx(i,{indeterminate:!0}),e.jsx(i,{indeterminate:!0,disabled:!0})]})}),e.jsx(l,{item:!0,xxs:2,children:e.jsxs(r,{spacing:0,children:[e.jsx(n,{variant:"bodySmall",children:"Indeterminate Outlined"}),e.jsx(i,{variant:"outlined",indeterminate:!0}),e.jsx(i,{variant:"outlined",indeterminate:!0,disabled:!0})]})}),e.jsx(l,{item:!0,xxs:2,children:e.jsxs(r,{spacing:0,children:[e.jsx(n,{variant:"bodySmall",children:"Color Variations"}),e.jsxs(r,{direction:"row",spacing:0,children:[e.jsx(i,{color:"primary",checked:!0}),e.jsx(i,{color:"primary"})]}),e.jsxs(r,{direction:"row",spacing:0,children:[e.jsx(i,{color:"secondary",checked:!0}),e.jsx(i,{color:"secondary"})]}),e.jsxs(r,{direction:"row",spacing:0,children:[e.jsx(i,{color:"error",checked:!0}),e.jsx(i,{color:"error"})]}),e.jsxs(r,{direction:"row",spacing:0,children:[e.jsx(i,{color:"info",checked:!0}),e.jsx(i,{color:"info"})]}),e.jsxs(r,{direction:"row",spacing:0,children:[e.jsx(i,{color:"success",checked:!0}),e.jsx(i,{color:"success"})]}),e.jsxs(r,{direction:"row",spacing:0,children:[e.jsx(i,{color:"warning",checked:!0}),e.jsx(i,{color:"warning"})]})]})})]}),e.jsx(n,{variant:"h6",children:"Labels"}),e.jsxs(l,{container:!0,spacing:2,children:[e.jsx(l,{item:!0,xxs:2,children:e.jsxs(r,{spacing:0,children:[e.jsx(n,{variant:"bodySmall",children:"Default(end)"}),e.jsx(i,{label:"label",labelPlacement:"end"})]})}),e.jsx(l,{item:!0,xxs:2,children:e.jsxs(r,{spacing:0,children:[e.jsx(n,{variant:"bodySmall",children:"Start"}),e.jsx(i,{label:"label",labelPlacement:"start"})]})}),e.jsx(l,{item:!0,xxs:2,children:e.jsxs(r,{spacing:0,children:[e.jsx(n,{variant:"bodySmall",children:"Top"}),e.jsx(i,{label:"label",labelPlacement:"top"})]})}),e.jsx(l,{item:!0,xxs:2,children:e.jsxs(r,{spacing:0,children:[e.jsx(n,{variant:"bodySmall",children:"Bottom"}),e.jsx(i,{label:"label",labelPlacement:"bottom"})]})}),e.jsx(l,{item:!0,xxs:2,children:e.jsxs(r,{spacing:0,children:[e.jsx(n,{variant:"bodySmall",children:"Required"}),e.jsx(i,{label:"label",required:!0})]})})]})]});v.storyName="Basic Usage";v.parameters={storySource:{source:'<Stack><Typography variant="h6">{"All states and variants"}</Typography><Grid container spacing={2}><Grid item xxs={2}><Stack spacing={0}><Typography variant="bodySmall">{"Default"}</Typography><CheckboxField /><CheckboxField checked /><CheckboxField disabled /><CheckboxField checked disabled /><CheckboxField color="error" /></Stack></Grid><Grid item xxs={2}><Stack spacing={0}><Typography variant="bodySmall">{"Outlined"}</Typography><CheckboxField variant="outlined" /><CheckboxField variant="outlined" checked /><CheckboxField variant="outlined" checked disabled /></Stack></Grid><Grid item xxs={2}><Stack spacing={0}><Typography variant="bodySmall">{"Indeterminate Default"}</Typography><CheckboxField indeterminate /><CheckboxField indeterminate disabled /></Stack></Grid><Grid item xxs={2}><Stack spacing={0}><Typography variant="bodySmall">{"Indeterminate Outlined"}</Typography><CheckboxField variant="outlined" indeterminate /><CheckboxField variant="outlined" indeterminate disabled /></Stack></Grid><Grid item xxs={2}><Stack spacing={0}><Typography variant="bodySmall">{"Color Variations"}</Typography><Stack direction="row" spacing={0}><CheckboxField color="primary" checked /><CheckboxField color="primary" /></Stack><Stack direction="row" spacing={0}><CheckboxField color="secondary" checked /><CheckboxField color="secondary" /></Stack><Stack direction="row" spacing={0}><CheckboxField color="error" checked /><CheckboxField color="error" /></Stack><Stack direction="row" spacing={0}><CheckboxField color="info" checked /><CheckboxField color="info" /></Stack><Stack direction="row" spacing={0}><CheckboxField color="success" checked /><CheckboxField color="success" /></Stack><Stack direction="row" spacing={0}><CheckboxField color="warning" checked /><CheckboxField color="warning" /></Stack></Stack></Grid></Grid><Typography variant="h6">{"Labels"}</Typography><Grid container spacing={2}><Grid item xxs={2}><Stack spacing={0}><Typography variant="bodySmall">{"Default(end)"}</Typography><CheckboxField label="label" labelPlacement="end" /></Stack></Grid><Grid item xxs={2}><Stack spacing={0}><Typography variant="bodySmall">{"Start"}</Typography><CheckboxField label="label" labelPlacement="start" /></Stack></Grid><Grid item xxs={2}><Stack spacing={0}><Typography variant="bodySmall">{"Top"}</Typography><CheckboxField label="label" labelPlacement="top" /></Stack></Grid><Grid item xxs={2}><Stack spacing={0}><Typography variant="bodySmall">{"Bottom"}</Typography><CheckboxField label="label" labelPlacement="bottom" /></Stack></Grid><Grid item xxs={2}><Stack spacing={0}><Typography variant="bodySmall">{"Required"}</Typography><CheckboxField label="label" required /></Stack></Grid></Grid></Stack>'}};const S=c=>e.jsx(r,{direction:"row",spacing:0,children:e.jsx(g,{initialValues:{isChecked:!1,required:!1,toggle:!1,checked:[]},onSubmit:async t=>{await new Promise(o=>setTimeout(o,500)),alert(JSON.stringify(t,null,2))},children:({values:t,validateForm:o})=>e.jsx(y,{children:e.jsxs(r,{children:[e.jsx(s,{id:"isChecked",name:"isChecked"}),e.jsx(s,{id:"toggle",name:"toggle",label:`${t.toggle}`,validate:a=>!a}),e.jsx(s,{type:"checkbox",name:"required",label:"Required",required:!0}),e.jsxs("div",{role:"group","aria-labelledby":"checkbox-group",children:[e.jsx(s,{type:"checkbox",name:"checked",value:"One",label:"One"}),e.jsx(s,{type:"checkbox",name:"checked",value:"Two",label:"Two"}),e.jsx(s,{type:"checkbox",name:"checked",value:"Three",label:"Three"})]}),e.jsxs(r,{direction:"row",spacing:1,children:[e.jsx(d,{variant:"outlined",onClick:()=>o(),children:"Validate"}),e.jsx(d,{variant:"contained",type:"submit",children:"Submit"})]})]})})})});S.storyName="Using Formik";S.parameters={storySource:{source:`args => {
  return <Stack direction="row" spacing={0}>
          <Formik initialValues={{
      isChecked: false,
      required: false,
      toggle: false,
      checked: []
    }} onSubmit={async values => {
      await new Promise(r => setTimeout(r, 500));
      alert(JSON.stringify(values, null, 2));
    }}>
            {({
        values,
        validateForm
      }) => <Form>
                <Stack>
                  <CheckboxFormikField id="isChecked" name="isChecked" />
                  <CheckboxFormikField id="toggle" name="toggle" label={\`\${values.toggle}\`} validate={val => !val} />
                  <CheckboxFormikField type="checkbox" name="required" label="Required" required />
                  <div role="group" aria-labelledby="checkbox-group">
                    <CheckboxFormikField type="checkbox" name="checked" value="One" label="One" />
                    <CheckboxFormikField type="checkbox" name="checked" value="Two" label="Two" />
                    <CheckboxFormikField type="checkbox" name="checked" value="Three" label="Three" />
                  </div>
                  <Stack direction="row" spacing={1}>
                    <Button variant="outlined" onClick={() => validateForm()}>
                      Validate
                    </Button>
                    <Button variant="contained" type="submit">
                      Submit
                    </Button>
                  </Stack>
                </Stack>
              </Form>}
          </Formik>
        </Stack>;
}`}};const j=c=>e.jsx("div",{children:e.jsx(i,{...c})});j.storyName="Playground";j.argTypes={error:!1,checked:!1};j.parameters={storySource:{source:`args => {
  return <div>
          <CheckboxField {...args} />
        </div>;
}`}};const x={title:"CheckboxField",component:i,tags:["stories-mdx"],includeStories:["basicUsage","usingFormik","playground"]};x.parameters=x.parameters||{};x.parameters.docs={...x.parameters.docs||{},page:B};const Se=["basicUsage","usingFormik","playground"];export{Se as __namedExportsOrder,v as basicUsage,x as default,j as playground,S as usingFormik};
//# sourceMappingURL=checkbox-field.stories-5d2a9b14.js.map