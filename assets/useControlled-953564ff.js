import{r as a}from"./index-f1f2c4b1.js";function d(...t){return t.reduce((n,u)=>u==null?n:function(...e){n.apply(this,e),u.apply(this,e)},()=>{})}function p({controlled:t,default:n,name:u,state:r="value"}){const{current:e}=a.useRef(t!==void 0),[o,s]=a.useState(n),l=e?t:o,i=a.useCallback(c=>{e||s(c)},[]);return[l,i]}export{d as c,p as u};
//# sourceMappingURL=useControlled-953564ff.js.map
