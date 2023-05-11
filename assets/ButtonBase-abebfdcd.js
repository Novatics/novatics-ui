import{d as Re,a as ye,c as H}from"./useThemeProps-5b804fee.js";import{r as a,R as W}from"./index-ebeaab24.js";import{c as x,a as Te,s as ie,g as ze,b as Oe}from"./styled-bb261b36.js";import{j as $}from"./jsx-runtime-5926aa06.js";import{k as re}from"./emotion-react.browser.esm-e8dd0f37.js";import{_ as Ae,T as pe,a as fe,b as Y}from"./TransitionGroupContext-9e5a73a2.js";import{_ as Xe,a as We,b as Ye}from"./index-218806c6.js";let G=!0,te=!1,de;const He={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Ge(e){const{type:t,tagName:r}=e;return!!(r==="INPUT"&&He[t]&&!e.readOnly||r==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function qe(e){e.metaKey||e.altKey||e.ctrlKey||(G=!0)}function ee(){G=!1}function Je(){this.visibilityState==="hidden"&&te&&(G=!0)}function Qe(e){e.addEventListener("keydown",qe,!0),e.addEventListener("mousedown",ee,!0),e.addEventListener("pointerdown",ee,!0),e.addEventListener("touchstart",ee,!0),e.addEventListener("visibilitychange",Je,!0)}function Ze(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return G||Ge(t)}function et(){const e=a.useCallback(n=>{n!=null&&Qe(n.ownerDocument)},[]),t=a.useRef(!1);function r(){return t.current?(te=!0,window.clearTimeout(de),de=window.setTimeout(()=>{te=!1},100),t.current=!1,!0):!1}function l(n){return Ze(n)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:l,onBlur:r,ref:e}}function oe(e,t){var r=function(i){return t&&a.isValidElement(i)?t(i):i},l=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=r(n)}),l}function tt(e,t){e=e||{},t=t||{};function r(d){return d in t?t[d]:e[d]}var l=Object.create(null),n=[];for(var i in e)i in t?n.length&&(l[i]=n,n=[]):n.push(i);var o,c={};for(var u in t){if(l[u])for(o=0;o<l[u].length;o++){var p=l[u][o];c[l[u][o]]=r(p)}c[u]=r(u)}for(o=0;o<n.length;o++)c[n[o]]=r(n[o]);return c}function S(e,t,r){return r[t]!=null?r[t]:e.props[t]}function nt(e,t){return oe(e.children,function(r){return a.cloneElement(r,{onExited:t.bind(null,r),in:!0,appear:S(r,"appear",e),enter:S(r,"enter",e),exit:S(r,"exit",e)})})}function it(e,t,r){var l=oe(e.children),n=tt(t,l);return Object.keys(n).forEach(function(i){var o=n[i];if(a.isValidElement(o)){var c=i in t,u=i in l,p=t[i],d=a.isValidElement(p)&&!p.props.in;u&&(!c||d)?n[i]=a.cloneElement(o,{onExited:r.bind(null,o),in:!0,exit:S(o,"exit",e),enter:S(o,"enter",e)}):!u&&c&&!d?n[i]=a.cloneElement(o,{in:!1}):u&&c&&a.isValidElement(p)&&(n[i]=a.cloneElement(o,{onExited:r.bind(null,o),in:p.props.in,exit:S(o,"exit",e),enter:S(o,"enter",e)}))}}),n}var rt=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},ot={component:"div",childFactory:function(t){return t}},se=function(e){Xe(t,e);function t(l,n){var i;i=e.call(this,l,n)||this;var o=i.handleExited.bind(We(i));return i.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},i}var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(n,i){var o=i.children,c=i.handleExited,u=i.firstRender;return{children:u?nt(n,c):it(n,o,c),firstRender:!1}},r.handleExited=function(n,i){var o=oe(this.props.children);n.key in o||(n.props.onExited&&n.props.onExited(i),this.mounted&&this.setState(function(c){var u=Ye({},c.children);return delete u[n.key],{children:u}}))},r.render=function(){var n=this.props,i=n.component,o=n.childFactory,c=Ae(n,["component","childFactory"]),u=this.state.contextValue,p=rt(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,i===null?W.createElement(pe.Provider,{value:u},p):W.createElement(pe.Provider,{value:u},W.createElement(i,c,p))},t}(W.Component);se.propTypes={};se.defaultProps=ot;const st=se;function at(e){const{className:t,classes:r,pulsate:l=!1,rippleX:n,rippleY:i,rippleSize:o,in:c,onExited:u,timeout:p}=e,[d,g]=a.useState(!1),b=x(t,r.ripple,r.rippleVisible,l&&r.ripplePulsate),w={width:o,height:o,top:-(o/2)+i,left:-(o/2)+n},h=x(r.child,d&&r.childLeaving,l&&r.childPulsate);return!c&&!d&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),$.jsx("span",{className:b,style:w,children:$.jsx("span",{className:h})})}const lt=Te("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=lt,ut=["center","classes","className"];let q=e=>e,he,me,be,ge;const ne=550,ct=80,pt=re(he||(he=q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),ft=re(me||(me=q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),dt=re(be||(be=q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),ht=ie("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),mt=ie(at,{name:"MuiTouchRipple",slot:"Ripple"})(ge||(ge=q`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,pt,ne,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,ft,ne,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,dt,({theme:e})=>e.transitions.easing.easeInOut),bt=a.forwardRef(function(t,r){const l=Re({props:t,name:"MuiTouchRipple"}),{center:n=!1,classes:i={},className:o}=l,c=ye(l,ut),[u,p]=a.useState([]),d=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),w=a.useRef(null),h=a.useRef(null),R=a.useRef(null);a.useEffect(()=>()=>{clearTimeout(w.current)},[]);const U=a.useCallback(f=>{const{pulsate:y,rippleX:T,rippleY:D,rippleSize:I,cb:K}=f;p(E=>[...E,$.jsx(mt,{classes:{ripple:x(i.ripple,m.ripple),rippleVisible:x(i.rippleVisible,m.rippleVisible),ripplePulsate:x(i.ripplePulsate,m.ripplePulsate),child:x(i.child,m.child),childLeaving:x(i.childLeaving,m.childLeaving),childPulsate:x(i.childPulsate,m.childPulsate)},timeout:ne,pulsate:y,rippleX:T,rippleY:D,rippleSize:I},d.current)]),d.current+=1,g.current=K},[i]),N=a.useCallback((f={},y={},T=()=>{})=>{const{pulsate:D=!1,center:I=n||y.pulsate,fakeElement:K=!1}=y;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const E=K?null:R.current,B=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let C,P,L;if(I||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)C=Math.round(B.width/2),P=Math.round(B.height/2);else{const{clientX:k,clientY:V}=f.touches&&f.touches.length>0?f.touches[0]:f;C=Math.round(k-B.left),P=Math.round(V-B.top)}if(I)L=Math.sqrt((2*B.width**2+B.height**2)/3),L%2===0&&(L+=1);else{const k=Math.max(Math.abs((E?E.clientWidth:0)-C),C)*2+2,V=Math.max(Math.abs((E?E.clientHeight:0)-P),P)*2+2;L=Math.sqrt(k**2+V**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{U({pulsate:D,rippleX:C,rippleY:P,rippleSize:L,cb:T})},w.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},ct)):U({pulsate:D,rippleX:C,rippleY:P,rippleSize:L,cb:T})},[n,U]),_=a.useCallback(()=>{N({},{pulsate:!0})},[N]),j=a.useCallback((f,y)=>{if(clearTimeout(w.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,w.current=setTimeout(()=>{j(f,y)});return}h.current=null,p(T=>T.length>0?T.slice(1):T),g.current=y},[]);return a.useImperativeHandle(r,()=>({pulsate:_,start:N,stop:j}),[_,N,j]),$.jsx(ht,H({className:x(m.root,i.root,o),ref:R},c,{children:$.jsx(st,{component:null,exit:!0,children:u})}))}),gt=bt;function Rt(e){return ze("MuiButtonBase",e)}const yt=Te("MuiButtonBase",["root","disabled","focusVisible"]),Tt=yt,Et=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Mt=e=>{const{disabled:t,focusVisible:r,focusVisibleClassName:l,classes:n}=e,o=Oe({root:["root",t&&"disabled",r&&"focusVisible"]},Rt,n);return r&&l&&(o.root+=` ${l}`),o},xt=ie("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Tt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Ct=a.forwardRef(function(t,r){const l=Re({props:t,name:"MuiButtonBase"}),{action:n,centerRipple:i=!1,children:o,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:w="a",onBlur:h,onClick:R,onContextMenu:U,onDragLeave:N,onFocus:_,onFocusVisible:j,onKeyDown:f,onKeyUp:y,onMouseDown:T,onMouseLeave:D,onMouseUp:I,onTouchEnd:K,onTouchMove:E,onTouchStart:B,tabIndex:C=0,TouchRippleProps:P,touchRippleRef:L,type:k}=l,V=ye(l,Et),z=a.useRef(null),M=a.useRef(null),Ee=fe(M,L),{isFocusVisibleRef:ae,onFocus:Me,onBlur:xe,ref:Ce}=et(),[F,A]=a.useState(!1);p&&F&&A(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{A(!0),z.current.focus()}}),[]);const[J,Ve]=a.useState(!1);a.useEffect(()=>{Ve(!0)},[]);const ve=J&&!d&&!p;a.useEffect(()=>{F&&b&&!d&&J&&M.current.pulsate()},[d,b,F,J]);function v(s,ue,Ke=g){return Y(ce=>(ue&&ue(ce),!Ke&&M.current&&M.current[s](ce),!0))}const we=v("start",T),Be=v("stop",U),Pe=v("stop",N),Le=v("stop",I),De=v("stop",s=>{F&&s.preventDefault(),D&&D(s)}),ke=v("start",B),Fe=v("stop",K),Se=v("stop",E),$e=v("stop",s=>{xe(s),ae.current===!1&&A(!1),h&&h(s)},!1),Ne=Y(s=>{z.current||(z.current=s.currentTarget),Me(s),ae.current===!0&&(A(!0),j&&j(s)),_&&_(s)}),Q=()=>{const s=z.current;return u&&u!=="button"&&!(s.tagName==="A"&&s.href)},Z=a.useRef(!1),je=Y(s=>{b&&!Z.current&&F&&M.current&&s.key===" "&&(Z.current=!0,M.current.stop(s,()=>{M.current.start(s)})),s.target===s.currentTarget&&Q()&&s.key===" "&&s.preventDefault(),f&&f(s),s.target===s.currentTarget&&Q()&&s.key==="Enter"&&!p&&(s.preventDefault(),R&&R(s))}),Ie=Y(s=>{b&&s.key===" "&&M.current&&F&&!s.defaultPrevented&&(Z.current=!1,M.current.stop(s,()=>{M.current.pulsate(s)})),y&&y(s),R&&s.target===s.currentTarget&&Q()&&s.key===" "&&!s.defaultPrevented&&R(s)});let X=u;X==="button"&&(V.href||V.to)&&(X=w);const O={};X==="button"?(O.type=k===void 0?"button":k,O.disabled=p):(!V.href&&!V.to&&(O.role="button"),p&&(O["aria-disabled"]=p));const Ue=fe(r,Ce,z),le=H({},l,{centerRipple:i,component:u,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:C,focusVisible:F}),_e=Mt(le);return $.jsxs(xt,H({as:X,className:x(_e.root,c),ownerState:le,onBlur:$e,onClick:R,onContextMenu:Be,onFocus:Ne,onKeyDown:je,onKeyUp:Ie,onMouseDown:we,onMouseLeave:De,onMouseUp:Le,onDragLeave:Pe,onTouchEnd:Fe,onTouchMove:Se,onTouchStart:ke,ref:Ue,tabIndex:p?-1:C,type:k},O,V,{children:[o,ve?$.jsx(gt,H({ref:Ee,center:i},P)):null]}))}),Ft=Ct;export{Ft as B,et as u};
//# sourceMappingURL=ButtonBase-abebfdcd.js.map
