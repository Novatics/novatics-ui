import{a as y,j as u}from"./emotion-react-jsx-runtime.browser.esm-780ca0af.js";import{r as l}from"./index-ebeaab24.js";import{M as g}from"./FormGroup-d88b603a.js";import{S as _}from"./Stack-b78562b3.js";import{T as h}from"./Typography-03224099.js";const d=r=>{const{title:i,direction:a="column",titleSpacing:p=2.5,childrenSpacing:s=2.5,children:e,loading:t,disabled:o,...c}=r,m=l.useMemo(()=>{if(e){const f=typeof e=="function"?e():e;return l.Children.toArray(f).map(n=>typeof n=="object"?l.cloneElement(n,{loading:t,disabled:o,direction:a}):n)}return[]},[e,a,o,t]);return y(_,{spacing:p,children:[i&&u(h,{variant:"h5",fontWeight:"500",children:i}),u(g,{sx:{gap:s},row:a==="row",...c}),m]})};try{d.displayName="FormGroup",d.__docgenInfo={description:"",displayName:"FormGroup",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'}]}},titleSpacing:{defaultValue:null,description:"",name:"titleSpacing",required:!1,type:{name:"number"}},childrenSpacing:{defaultValue:null,description:"",name:"childrenSpacing",required:!1,type:{name:"number"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}try{formgroup.displayName="formgroup",formgroup.__docgenInfo={description:"",displayName:"formgroup",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'}]}},titleSpacing:{defaultValue:null,description:"",name:"titleSpacing",required:!1,type:{name:"number"}},childrenSpacing:{defaultValue:null,description:"",name:"childrenSpacing",required:!1,type:{name:"number"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}try{getFormGroupUtilityClass.displayName="getFormGroupUtilityClass",getFormGroupUtilityClass.__docgenInfo={description:"",displayName:"getFormGroupUtilityClass",props:{}}}catch{}export{d as F};
//# sourceMappingURL=form-group-97b58ce9.js.map