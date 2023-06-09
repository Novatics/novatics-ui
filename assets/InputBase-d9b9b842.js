import{c as h,d as Be,a as Fe,g as me,j as Ie}from"./useThemeProps-d5e886d2.js";import{r as i}from"./index-ebeaab24.js";import{g as Ae,a as Ee,s as he,c as de,b as We}from"./styled-d38de62f.js";import{f as He}from"./formControlState-a1fb9590.js";import{u as Me,F as Pe}from"./useFormControl-0ef100e1.js";import{i as Le}from"./FormControl-315dbef9.js";import{j as S}from"./jsx-runtime-5926aa06.js";import{_ as Oe,a as ee}from"./objectWithoutPropertiesLoose-6c5c234b.js";import{r as Te}from"./index-ce6f85b9.js";import{a as be,u as ye}from"./useForkRef-3ff4e0b8.js";import{a as ce,d as Ne}from"./ownerWindow-74a9cc60.js";import{i as pe}from"./isHostComponent-73d6e646.js";import{G as je}from"./GlobalStyles-8191be96.js";const $e=["onChange","maxRows","minRows","style","value"];function _(t){return parseInt(t,10)||0}const De={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function fe(t){return t==null||Object.keys(t).length===0||t.outerHeightStyle===0&&!t.overflow}const Ue=i.forwardRef(function(e,o){const{onChange:p,maxRows:u,minRows:d=1,style:z,value:C}=e,I=Oe(e,$e),{current:v}=i.useRef(C!=null),b=i.useRef(null),k=be(o,b),w=i.useRef(null),y=i.useRef(0),[R,B]=i.useState({outerHeightStyle:0}),A=i.useCallback(()=>{const n=b.current,l=ce(n).getComputedStyle(n);if(l.width==="0px")return{outerHeightStyle:0};const a=w.current;a.style.width=l.width,a.value=n.value||e.placeholder||"x",a.value.slice(-1)===`
`&&(a.value+=" ");const L=l.boxSizing,O=_(l.paddingBottom)+_(l.paddingTop),T=_(l.borderBottomWidth)+_(l.borderTopWidth),N=a.scrollHeight;a.value="x";const E=a.scrollHeight;let g=N;d&&(g=Math.max(Number(d)*E,g)),u&&(g=Math.min(Number(u)*E,g)),g=Math.max(g,E);const W=g+(L==="border-box"?O+T:0),j=Math.abs(g-N)<=1;return{outerHeightStyle:W,overflow:j}},[u,d,e.placeholder]),P=(n,c)=>{const{outerHeightStyle:l,overflow:a}=c;return y.current<20&&(l>0&&Math.abs((n.outerHeightStyle||0)-l)>1||n.overflow!==a)?(y.current+=1,{overflow:a,outerHeightStyle:l}):n},f=i.useCallback(()=>{const n=A();fe(n)||B(c=>P(c,n))},[A]),K=()=>{const n=A();fe(n)||Te.flushSync(()=>{B(c=>P(c,n))})};i.useEffect(()=>{const n=Ne(()=>{y.current=0,b.current&&K()});let c;const l=b.current,a=ce(l);return a.addEventListener("resize",n),typeof ResizeObserver<"u"&&(c=new ResizeObserver(n),c.observe(l)),()=>{n.clear(),a.removeEventListener("resize",n),c&&c.disconnect()}}),ye(()=>{f()}),i.useEffect(()=>{y.current=0},[C]);const G=n=>{y.current=0,v||f(),p&&p(n)};return S.jsxs(i.Fragment,{children:[S.jsx("textarea",ee({value:C,onChange:G,ref:k,rows:d,style:ee({height:R.outerHeightStyle,overflow:R.overflow?"hidden":void 0},z)},I)),S.jsx("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:w,tabIndex:-1,style:ee({},De.shadow,z,{padding:0})})]})}),_e=Ue;function Ke(t){return Ee("MuiInputBase",t)}const Ge=Ae("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),te=Ge,Ve=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],qe=(t,e)=>{const{ownerState:o}=t;return[e.root,o.formControl&&e.formControl,o.startAdornment&&e.adornedStart,o.endAdornment&&e.adornedEnd,o.error&&e.error,o.size==="small"&&e.sizeSmall,o.multiline&&e.multiline,o.color&&e[`color${me(o.color)}`],o.fullWidth&&e.fullWidth,o.hiddenLabel&&e.hiddenLabel]},Ze=(t,e)=>{const{ownerState:o}=t;return[e.input,o.size==="small"&&e.inputSizeSmall,o.multiline&&e.inputMultiline,o.type==="search"&&e.inputTypeSearch,o.startAdornment&&e.inputAdornedStart,o.endAdornment&&e.inputAdornedEnd,o.hiddenLabel&&e.inputHiddenLabel]},Je=t=>{const{classes:e,color:o,disabled:p,error:u,endAdornment:d,focused:z,formControl:C,fullWidth:I,hiddenLabel:v,multiline:b,readOnly:k,size:w,startAdornment:y,type:R}=t,B={root:["root",`color${me(o)}`,p&&"disabled",u&&"error",I&&"fullWidth",z&&"focused",C&&"formControl",w==="small"&&"sizeSmall",b&&"multiline",y&&"adornedStart",d&&"adornedEnd",v&&"hiddenLabel",k&&"readOnly"],input:["input",p&&"disabled",R==="search"&&"inputTypeSearch",b&&"inputMultiline",w==="small"&&"inputSizeSmall",v&&"inputHiddenLabel",y&&"inputAdornedStart",d&&"inputAdornedEnd",k&&"readOnly"]};return We(B,Ke,e)},Qe=he("div",{name:"MuiInputBase",slot:"Root",overridesResolver:qe})(({theme:t,ownerState:e})=>h({},t.typography.body1,{color:(t.vars||t).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${te.disabled}`]:{color:(t.vars||t).palette.text.disabled,cursor:"default"}},e.multiline&&h({padding:"4px 0 5px"},e.size==="small"&&{paddingTop:1}),e.fullWidth&&{width:"100%"})),Xe=he("input",{name:"MuiInputBase",slot:"Input",overridesResolver:Ze})(({theme:t,ownerState:e})=>{const o=t.palette.mode==="light",p=h({color:"currentColor"},t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:o?.42:.5},{transition:t.transitions.create("opacity",{duration:t.transitions.duration.shorter})}),u={opacity:"0 !important"},d=t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:o?.42:.5};return h({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":p,"&::-moz-placeholder":p,"&:-ms-input-placeholder":p,"&::-ms-input-placeholder":p,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${te.formControl} &`]:{"&::-webkit-input-placeholder":u,"&::-moz-placeholder":u,"&:-ms-input-placeholder":u,"&::-ms-input-placeholder":u,"&:focus::-webkit-input-placeholder":d,"&:focus::-moz-placeholder":d,"&:focus:-ms-input-placeholder":d,"&:focus::-ms-input-placeholder":d},[`&.${te.disabled}`]:{opacity:1,WebkitTextFillColor:(t.vars||t).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},e.size==="small"&&{paddingTop:1},e.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},e.type==="search"&&{MozAppearance:"textfield"})}),Ye=S.jsx(je,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),et=i.forwardRef(function(e,o){var p;const u=Be({props:e,name:"MuiInputBase"}),{"aria-describedby":d,autoComplete:z,autoFocus:C,className:I,components:v={},componentsProps:b={},defaultValue:k,disabled:w,disableInjectingGlobalStyles:y,endAdornment:R,fullWidth:B=!1,id:A,inputComponent:P="input",inputProps:f={},inputRef:K,maxRows:G,minRows:n,multiline:c=!1,name:l,onBlur:a,onChange:L,onClick:O,onFocus:T,onKeyDown:N,onKeyUp:E,placeholder:g,readOnly:W,renderSuffix:j,rows:$,slotProps:oe={},slots:ne={},startAdornment:H,type:re="text",value:ge}=u,xe=Fe(u,Ve),D=f.value!=null?f.value:ge,{current:V}=i.useRef(D!=null),F=i.useRef(),we=i.useCallback(r=>{},[]),Se=be(F,K,f.ref,we),[q,Z]=i.useState(!1),s=Me(),m=He({props:u,muiFormControl:s,states:["color","disabled","error","hiddenLabel","size","required","filled"]});m.focused=s?s.focused:q,i.useEffect(()=>{!s&&w&&q&&(Z(!1),a&&a())},[s,w,q,a]);const J=s&&s.onFilled,Q=s&&s.onEmpty,M=i.useCallback(r=>{Le(r)?J&&J():Q&&Q()},[J,Q]);ye(()=>{V&&M({value:D})},[D,M,V]);const Ce=r=>{if(m.disabled){r.stopPropagation();return}T&&T(r),f.onFocus&&f.onFocus(r),s&&s.onFocus?s.onFocus(r):Z(!0)},ve=r=>{a&&a(r),f.onBlur&&f.onBlur(r),s&&s.onBlur?s.onBlur(r):Z(!1)},Re=(r,...le)=>{if(!V){const ue=r.target||F.current;if(ue==null)throw new Error(Ie(1));M({value:ue.value})}f.onChange&&f.onChange(r,...le),L&&L(r,...le)};i.useEffect(()=>{M(F.current)},[]);const ze=r=>{F.current&&r.currentTarget===r.target&&F.current.focus(),O&&!m.disabled&&O(r)};let X=P,x=f;c&&X==="input"&&($?x=h({type:void 0,minRows:$,maxRows:$},x):x=h({type:void 0,maxRows:G,minRows:n},x),X=_e);const ke=r=>{M(r.animationName==="mui-auto-fill-cancel"?F.current:{value:"x"})};i.useEffect(()=>{s&&s.setAdornedStart(!!H)},[s,H]);const U=h({},u,{color:m.color||"primary",disabled:m.disabled,endAdornment:R,error:m.error,focused:m.focused,formControl:s,fullWidth:B,hiddenLabel:m.hiddenLabel,multiline:c,size:m.size,startAdornment:H,type:re}),ie=Je(U),ae=ne.root||v.Root||Qe,Y=oe.root||b.root||{},se=ne.input||v.Input||Xe;return x=h({},x,(p=oe.input)!=null?p:b.input),S.jsxs(i.Fragment,{children:[!y&&Ye,S.jsxs(ae,h({},Y,!pe(ae)&&{ownerState:h({},U,Y.ownerState)},{ref:o,onClick:ze},xe,{className:de(ie.root,Y.className,I,W&&"MuiInputBase-readOnly"),children:[H,S.jsx(Pe.Provider,{value:null,children:S.jsx(se,h({ownerState:U,"aria-invalid":m.error,"aria-describedby":d,autoComplete:z,autoFocus:C,defaultValue:k,disabled:m.disabled,id:A,onAnimationStart:ke,name:l,placeholder:g,readOnly:W,required:m.required,rows:$,value:D,onKeyDown:N,onKeyUp:E,type:re},x,!pe(se)&&{as:X,ownerState:h({},U,x.ownerState)},{ref:Se,className:de(ie.input,x.className,W&&"MuiInputBase-readOnly"),onBlur:ve,onChange:Re,onFocus:Ce}))}),R,j?j(h({},m,{startAdornment:H})):null]}))]})}),mt=et;export{Qe as I,mt as M,Xe as a,Ze as b,te as i,qe as r};
//# sourceMappingURL=InputBase-d9b9b842.js.map
