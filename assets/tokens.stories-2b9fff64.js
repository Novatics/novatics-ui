import"./blocks-2646952b.js";import{g as y,c as p}from"./index-ebeaab24.js";import{c as Zr,b as _r,r as Hr,t as Kr}from"./typography-6dc0827f.js";import{j as e}from"./jsx-runtime-5926aa06.js";import{G as x}from"./Grid-7bd32655.js";import{S as u}from"./Stack-ae757ee3.js";import{P as or}from"./Paper-b045a6d1.js";import{T as c}from"./Typography-fce9109d.js";import{B as d}from"./Box-a31e21f7.js";import{u as W}from"./index-bda0bad7.js";import{M as Yr,C as f,S as b}from"./index-eaae69d8.js";import"./useThemeProps-5b804fee.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-724eea7b.js";import"./styled-fe648b23.js";import"./useTheme-e2e39805.js";import"./extendSxProp-618f47f1.js";import"./styled-b66026d8.js";import"./iframe-87f9550e.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ce6f85b9.js";import"./index-356e4a49.js";const Vr={1:{px:8,rem:.5},2:{px:16,rem:1},3:{px:24,rem:1.5},4:{px:32,rem:2},5:{px:40,rem:2.5},6:{px:48,rem:3},7:{px:56,rem:3.5},8:{px:64,rem:4},10:{px:80,rem:5},12:{px:96,rem:6},"0.5":{px:4,rem:.25},"1.5":{px:12,rem:.75},"2.5":{px:20,rem:1.25}},a={colors:Zr,borderRadius:_r,shadows:Hr,spacings:Vr,typography:Kr};var sr=9007199254740991,Xr="[object Arguments]",Jr="[object Function]",qr="[object GeneratorFunction]",Qr=/^(?:0|[1-9]\d*)$/;function re(r,n){for(var o=-1,s=Array(r);++o<r;)s[o]=n(o);return s}function ee(r,n){return function(o){return r(n(o))}}var $=Object.prototype,O=$.hasOwnProperty,ir=$.toString,ne=$.propertyIsEnumerable,oe=ee(Object.keys,Object);function se(r,n){var o=ue(r)||ce(r)?re(r.length,String):[],s=o.length,t=!!s;for(var i in r)(n||O.call(r,i))&&!(t&&(i=="length"||te(i,s)))&&o.push(i);return o}function ie(r){if(!ae(r))return oe(r);var n=[];for(var o in Object(r))O.call(r,o)&&o!="constructor"&&n.push(o);return n}function te(r,n){return n=n??sr,!!n&&(typeof r=="number"||Qr.test(r))&&r>-1&&r%1==0&&r<n}function ae(r){var n=r&&r.constructor,o=typeof n=="function"&&n.prototype||$;return r===o}function ce(r){return de(r)&&O.call(r,"callee")&&(!ne.call(r,"callee")||ir.call(r)==Xr)}var ue=Array.isArray;function tr(r){return r!=null&&pe(r.length)&&!xe(r)}function de(r){return he(r)&&tr(r)}function xe(r){var n=le(r)?ir.call(r):"";return n==Jr||n==qr}function pe(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=sr}function le(r){var n=typeof r;return!!r&&(n=="object"||n=="function")}function he(r){return!!r&&typeof r=="object"}function ge(r){return tr(r)?se(r):ie(r)}var fe=ge;const S=y(fe);var F=1/0,ar=9007199254740991,be=17976931348623157e292,P=0/0,me="[object Arguments]",je="[object Function]",ye="[object GeneratorFunction]",$e="[object String]",Se="[object Symbol]",ke=/^\s+|\s+$/g,Te=/^[-+]0x[0-9a-f]+$/i,ve=/^0b[01]+$/i,Re=/^0o[0-7]+$/i,we=/^(?:0|[1-9]\d*)$/,Ce=parseInt;function Oe(r,n){for(var o=-1,s=r?r.length:0,t=Array(s);++o<s;)t[o]=n(r[o],o,r);return t}function Ae(r,n,o,s){for(var t=r.length,i=o+(s?1:-1);s?i--:++i<t;)if(n(r[i],i,r))return i;return-1}function Le(r,n,o){if(n!==n)return Ae(r,Ee,o);for(var s=o-1,t=r.length;++s<t;)if(r[s]===n)return s;return-1}function Ee(r){return r!==r}function Ie(r,n){for(var o=-1,s=Array(r);++o<r;)s[o]=n(o);return s}function Ne(r,n){return Oe(n,function(o){return r[o]})}function Ue(r,n){return function(o){return r(n(o))}}var k=Object.prototype,A=k.hasOwnProperty,T=k.toString,Ge=k.propertyIsEnumerable,Be=Ue(Object.keys,Object),Me=Math.max;function We(r,n){var o=cr(r)||Ze(r)?Ie(r.length,String):[],s=o.length,t=!!s;for(var i in r)(n||A.call(r,i))&&!(t&&(i=="length"||Pe(i,s)))&&o.push(i);return o}function Fe(r){if(!ze(r))return Be(r);var n=[];for(var o in Object(r))A.call(r,o)&&o!="constructor"&&n.push(o);return n}function Pe(r,n){return n=n??ar,!!n&&(typeof r=="number"||we.test(r))&&r>-1&&r%1==0&&r<n}function ze(r){var n=r&&r.constructor,o=typeof n=="function"&&n.prototype||k;return r===o}function De(r,n,o,s){r=L(r)?r:rn(r),o=o&&!s?Je(o):0;var t=r.length;return o<0&&(o=Me(t+o,0)),Ye(r)?o<=t&&r.indexOf(n,o)>-1:!!t&&Le(r,n,o)>-1}function Ze(r){return _e(r)&&A.call(r,"callee")&&(!Ge.call(r,"callee")||T.call(r)==me)}var cr=Array.isArray;function L(r){return r!=null&&Ke(r.length)&&!He(r)}function _e(r){return E(r)&&L(r)}function He(r){var n=R(r)?T.call(r):"";return n==je||n==ye}function Ke(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=ar}function R(r){var n=typeof r;return!!r&&(n=="object"||n=="function")}function E(r){return!!r&&typeof r=="object"}function Ye(r){return typeof r=="string"||!cr(r)&&E(r)&&T.call(r)==$e}function Ve(r){return typeof r=="symbol"||E(r)&&T.call(r)==Se}function Xe(r){if(!r)return r===0?r:0;if(r=qe(r),r===F||r===-F){var n=r<0?-1:1;return n*be}return r===r?r:0}function Je(r){var n=Xe(r),o=n%1;return n===n?o?n-o:n:0}function qe(r){if(typeof r=="number")return r;if(Ve(r))return P;if(R(r)){var n=typeof r.valueOf=="function"?r.valueOf():r;r=R(n)?n+"":n}if(typeof r!="string")return r===0?r:+r;r=r.replace(ke,"");var o=ve.test(r);return o||Re.test(r)?Ce(r.slice(2),o?2:8):Te.test(r)?P:+r}function Qe(r){return L(r)?We(r):Fe(r)}function rn(r){return r?Ne(r,Qe(r)):[]}var en=De;const w=y(en);var nn=1/0,on="[object Symbol]",sn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,tn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ur="\\ud800-\\udfff",an="\\u0300-\\u036f\\ufe20-\\ufe23",cn="\\u20d0-\\u20f0",dr="\\u2700-\\u27bf",xr="a-z\\xdf-\\xf6\\xf8-\\xff",un="\\xac\\xb1\\xd7\\xf7",dn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",xn="\\u2000-\\u206f",pn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",pr="A-Z\\xc0-\\xd6\\xd8-\\xde",ln="\\ufe0e\\ufe0f",lr=un+dn+xn+pn,I="['’]",z="["+lr+"]",hr="["+an+cn+"]",gr="\\d+",hn="["+dr+"]",fr="["+xr+"]",br="[^"+ur+lr+gr+dr+xr+pr+"]",gn="\\ud83c[\\udffb-\\udfff]",fn="(?:"+hr+"|"+gn+")",bn="[^"+ur+"]",mr="(?:\\ud83c[\\udde6-\\uddff]){2}",jr="[\\ud800-\\udbff][\\udc00-\\udfff]",l="["+pr+"]",mn="\\u200d",D="(?:"+fr+"|"+br+")",jn="(?:"+l+"|"+br+")",Z="(?:"+I+"(?:d|ll|m|re|s|t|ve))?",_="(?:"+I+"(?:D|LL|M|RE|S|T|VE))?",yr=fn+"?",$r="["+ln+"]?",yn="(?:"+mn+"(?:"+[bn,mr,jr].join("|")+")"+$r+yr+")*",$n=$r+yr+yn,Sn="(?:"+[hn,mr,jr].join("|")+")"+$n,kn=RegExp(I,"g"),Tn=RegExp(hr,"g"),vn=RegExp([l+"?"+fr+"+"+Z+"(?="+[z,l,"$"].join("|")+")",jn+"+"+_+"(?="+[z,l+D,"$"].join("|")+")",l+"?"+D+"+"+Z,l+"+"+_,gr,Sn].join("|"),"g"),Rn=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,wn={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"ss"},Cn=typeof p=="object"&&p&&p.Object===Object&&p,On=typeof self=="object"&&self&&self.Object===Object&&self,An=Cn||On||Function("return this")();function Ln(r,n,o,s){var t=-1,i=r?r.length:0;for(s&&i&&(o=r[++t]);++t<i;)o=n(o,r[t],t,r);return o}function En(r){return r.match(sn)||[]}function In(r){return function(n){return r==null?void 0:r[n]}}var Nn=In(wn);function Un(r){return Rn.test(r)}function Gn(r){return r.match(vn)||[]}var Bn=Object.prototype,Mn=Bn.toString,H=An.Symbol,K=H?H.prototype:void 0,Y=K?K.toString:void 0;function Wn(r){if(typeof r=="string")return r;if(zn(r))return Y?Y.call(r):"";var n=r+"";return n=="0"&&1/r==-nn?"-0":n}function Fn(r){return function(n){return Ln(_n(Dn(n).replace(kn,"")),r,"")}}function Pn(r){return!!r&&typeof r=="object"}function zn(r){return typeof r=="symbol"||Pn(r)&&Mn.call(r)==on}function Sr(r){return r==null?"":Wn(r)}function Dn(r){return r=Sr(r),r&&r.replace(tn,Nn).replace(Tn,"")}var Zn=Fn(function(r,n,o){return r+(o?"_":"")+n.toLowerCase()});function _n(r,n,o){return r=Sr(r),n=o?void 0:n,n===void 0?Un(r)?Gn(r):En(r):r.match(n)||[]}var Hn=Zn;const Kn=y(Hn);var Yn=1/0,Vn="[object Symbol]",Xn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Jn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,v="\\ud800-\\udfff",kr="\\u0300-\\u036f\\ufe20-\\ufe23",Tr="\\u20d0-\\u20f0",vr="\\u2700-\\u27bf",Rr="a-z\\xdf-\\xf6\\xf8-\\xff",qn="\\xac\\xb1\\xd7\\xf7",Qn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ro="\\u2000-\\u206f",eo=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",wr="A-Z\\xc0-\\xd6\\xd8-\\xde",Cr="\\ufe0e\\ufe0f",Or=qn+Qn+ro+eo,N="['’]",no="["+v+"]",V="["+Or+"]",m="["+kr+Tr+"]",Ar="\\d+",oo="["+vr+"]",Lr="["+Rr+"]",Er="[^"+v+Or+Ar+vr+Rr+wr+"]",C="\\ud83c[\\udffb-\\udfff]",so="(?:"+m+"|"+C+")",Ir="[^"+v+"]",U="(?:\\ud83c[\\udde6-\\uddff]){2}",G="[\\ud800-\\udbff][\\udc00-\\udfff]",h="["+wr+"]",Nr="\\u200d",X="(?:"+Lr+"|"+Er+")",io="(?:"+h+"|"+Er+")",J="(?:"+N+"(?:d|ll|m|re|s|t|ve))?",q="(?:"+N+"(?:D|LL|M|RE|S|T|VE))?",Ur=so+"?",Gr="["+Cr+"]?",to="(?:"+Nr+"(?:"+[Ir,U,G].join("|")+")"+Gr+Ur+")*",Br=Gr+Ur+to,ao="(?:"+[oo,U,G].join("|")+")"+Br,co="(?:"+[Ir+m+"?",m,U,G,no].join("|")+")",uo=RegExp(N,"g"),xo=RegExp(m,"g"),po=RegExp(C+"(?="+C+")|"+co+Br,"g"),lo=RegExp([h+"?"+Lr+"+"+J+"(?="+[V,h,"$"].join("|")+")",io+"+"+q+"(?="+[V,h+X,"$"].join("|")+")",h+"?"+X+"+"+J,h+"+"+q,Ar,ao].join("|"),"g"),ho=RegExp("["+Nr+v+kr+Tr+Cr+"]"),go=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,fo={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"ss"},bo=typeof p=="object"&&p&&p.Object===Object&&p,mo=typeof self=="object"&&self&&self.Object===Object&&self,jo=bo||mo||Function("return this")();function yo(r,n,o,s){var t=-1,i=r?r.length:0;for(s&&i&&(o=r[++t]);++t<i;)o=n(o,r[t],t,r);return o}function $o(r){return r.split("")}function So(r){return r.match(Xn)||[]}function ko(r){return function(n){return r==null?void 0:r[n]}}var To=ko(fo);function Mr(r){return ho.test(r)}function vo(r){return go.test(r)}function Ro(r){return Mr(r)?wo(r):$o(r)}function wo(r){return r.match(po)||[]}function Co(r){return r.match(lo)||[]}var Oo=Object.prototype,Ao=Oo.toString,Q=jo.Symbol,rr=Q?Q.prototype:void 0,er=rr?rr.toString:void 0;function Lo(r,n,o){var s=-1,t=r.length;n<0&&(n=-n>t?0:t+n),o=o>t?t:o,o<0&&(o+=t),t=n>o?0:o-n>>>0,n>>>=0;for(var i=Array(t);++s<t;)i[s]=r[s+n];return i}function Eo(r){if(typeof r=="string")return r;if(Bo(r))return er?er.call(r):"";var n=r+"";return n=="0"&&1/r==-Yn?"-0":n}function Io(r,n,o){var s=r.length;return o=o===void 0?s:o,!n&&o>=s?r:Lo(r,n,o)}function No(r){return function(n){n=B(n);var o=Mr(n)?Ro(n):void 0,s=o?o[0]:n.charAt(0),t=o?Io(o,1).join(""):n.slice(1);return s[r]()+t}}function Uo(r){return function(n){return yo(Po(Mo(n).replace(uo,"")),r,"")}}function Go(r){return!!r&&typeof r=="object"}function Bo(r){return typeof r=="symbol"||Go(r)&&Ao.call(r)==Vn}function B(r){return r==null?"":Eo(r)}function Mo(r){return r=B(r),r&&r.replace(Jn,To).replace(xo,"")}var Wo=Uo(function(r,n,o){return r+(o?" ":"")+Fo(n)}),Fo=No("toUpperCase");function Po(r,n,o){return r=B(r),n=o?void 0:n,n===void 0?vo(r)?Co(r):So(r):r.match(n)||[]}var zo=Wo;const Do=y(zo),Zo="@novatics/tokens",_o="0.2.1",Ho="./index.js",Ko="./index.d.ts",Yo={".":{import:"./index.mjs",require:"./index.js"}},Vo={name:Zo,version:_o,main:Ho,types:Ko,exports:Yo},Xo=["newMoon","halo","supernova"],M=r=>Do(Kn(r)).replace("_"," "),g=r=>w(r,"--light")||w(Xo,r)?"#000000":"#FFFFFF",nr=S(a.colors).filter(r=>!w(r,"--")).map(r=>M(r)),Jo=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}),Wr=S(a.spacings).sort(Jo.compare);function qo(r={}){const{wrapper:n}=Object.assign({},W(),r.components);return n?e.jsx(n,{...r,children:e.jsx(o,{})}):o();function o(){const s=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",h3:"h3",span:"span"},W(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(Yr,{title:"Tokens",component:a}),`
`,e.jsxs(s.h1,{id:"tokens-",children:["Tokens ",e.jsx("img",{src:`https://img.shields.io/badge/Version-v${Vo.version}-brightgreenn`})]}),`
`,e.jsx(s.p,{children:"Here we provide the novatics tokens stylesheet. This package is used on our style component to create components with our brand!"}),`
`,e.jsx(s.p,{children:"You can install the package with"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-shell",children:`  yarn add -D @novatics/tokens
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-shell",children:`  npm install --dev @novatics/tokens
`})}),`
`,e.jsx(s.p,{children:"and use it"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import Tokens, { colors, borderRadius, shadows, spacing, typography } from '@novatics/tokens';

  ...
  color: Tokens.colors.nebula.main
  backgroundColor: colors.nebula.light
  ...

`})}),`
`,e.jsx(s.h3,{id:"colors",children:"Colors"}),`
`,e.jsxs("p",{children:[e.jsx(s.p,{children:"We have some awesome colors in our theme:"}),nr.map((t,i)=>i===nr.length-1?`and ${t}`:`${t}, `).join(""),e.jsx(s.p,{children:"Some of the colors have variants."}),e.jsx("br",{}),e.jsxs(s.p,{children:["The variant can be accessed by adding '--variant' to the token. For example:"," ",`
`,e.jsx("strong",{children:'"nebula--dark": "#5D23C9"'})]})]}),`
`,e.jsx(f,{children:e.jsx(b,{name:"Colors",children:t=>e.jsx(x,{container:!0,spacing:2,children:S(a.colors).map(i=>e.jsx(x,{item:!0,xs:3,children:e.jsx(u,{spacing:1,children:e.jsx(or,{square:!0,sx:{padding:3,height:"106px",backgroundColor:a.colors[i]},children:e.jsxs(u,{children:[e.jsx(c,{variant:"body",fontWeight:"700",color:g(i),children:M(i)}),e.jsxs(c,{variant:"bodySmall",color:g(i),children:[e.jsx(s.span,{style:{opacity:.7},children:"HEX"})," ",a.colors[i]]}),e.jsxs(c,{variant:"bodySmall",color:g(i),children:[e.jsx(s.span,{style:{opacity:.7},children:"TOKEN"})," ",i]})]})})})}))})})}),`
`,e.jsx(s.h3,{id:"border-radius",children:"Border Radius"}),`
`,e.jsxs("p",{children:[e.jsxs(s.p,{children:[`Our round corners are defined here with three options: small, regular and
large. We provide the `,e.jsx("strong",{children:"number"})," option for pixel or rem."]}),e.jsx("br",{}),e.jsxs(s.p,{children:["The values can be retrived by"," ",`
`,e.jsxs("strong",{children:['"borderRadius.small": ','{ "px": 8, "rem": 0.5 }',"'"]})]})]}),`
`,e.jsx(f,{children:e.jsx(b,{name:"Border Radius",children:t=>e.jsxs(x,{container:!0,spacing:4,children:[e.jsx(x,{item:!0,xs:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(c,{variant:"h5",fontWeight:"700",children:"Small"}),e.jsx(c,{variant:"caption",children:"borderRadius.small"}),e.jsxs(u,{direction:"row",spacing:3,children:[e.jsx(d,{height:"108px",width:"256px",borderRadius:`${a.borderRadius.small.px}px`,backgroundColor:a.colors.cosmos}),e.jsxs(u,{spacing:1,children:[e.jsx(c,{variant:"bodySmall",children:"Corner Radius"}),e.jsx(d,{borderLeft:"1px solid black",height:"40px",pl:1,children:e.jsx(c,{variant:"caption",children:`${a.borderRadius.small.px}px`})})]})]})]})}),e.jsx(x,{item:!0,xs:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(c,{variant:"h5",fontWeight:"700",children:"Regular"}),e.jsx(c,{variant:"caption",children:"borderRadius.regular"}),e.jsxs(u,{direction:"row",spacing:3,children:[e.jsx(d,{height:"108px",width:"256px",borderRadius:`${a.borderRadius.regular.px}px`,backgroundColor:a.colors.cosmos}),e.jsxs(u,{spacing:1,children:[e.jsx(c,{variant:"bodySmall",children:"Corner Radius"}),e.jsx(d,{borderLeft:"1px solid black",height:"40px",pl:1,children:e.jsx(c,{variant:"caption",children:`${a.borderRadius.regular.px}px`})})]})]})]})}),e.jsx(x,{item:!0,xs:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(c,{variant:"h5",fontWeight:"700",children:"Large"}),e.jsx(c,{variant:"caption",children:"borderRadius.large"}),e.jsxs(u,{direction:"row",spacing:3,children:[e.jsx(d,{height:"108px",width:"256px",borderRadius:`${a.borderRadius.large.px}px`,backgroundColor:a.colors.cosmos}),e.jsxs(u,{spacing:1,children:[e.jsx(c,{variant:"bodySmall",children:"Corner Radius"}),e.jsx(d,{borderLeft:"1px solid black",height:"40px",pl:1,children:e.jsx(c,{variant:"caption",children:`${a.borderRadius.large.px}px`})})]})]})]})})]})})}),`
`,e.jsx(s.h3,{id:"spacings",children:"Spacings"}),`
`,e.jsxs("p",{children:[e.jsxs(s.p,{children:[`All of our spacings are a multiple of 8. The initial value is 0.5 and goes to
12. Be aware that we `,e.jsx("strong",{children:"don't"})," have each step of the series."]}),e.jsx("br",{}),e.jsxs(s.p,{children:["Values can be retrived by"," ",`
`,e.jsxs("strong",{children:['"spacings["0.5"]: ','{ "px": 4, "rem": 0.25 }',"'"]})]})]}),`
`,e.jsx(f,{children:e.jsx(b,{name:"Spacings",children:t=>e.jsx(u,{spacing:1,children:Wr.map(i=>e.jsxs(d,{display:"flex",alignItems:"center",children:[e.jsx(d,{height:`${a.spacings[i].px}px`,width:"40%",backgroundColor:a.colors["nebula--light"],borderTop:`1px dashed ${a.colors.nebula}`,borderBottom:`1px dashed ${a.colors.nebula}`,mr:3}),e.jsxs(u,{direction:"row",spacing:2,children:[e.jsx(d,{width:"100px",children:e.jsxs(c,{variant:"body",children:["spacings[",i,"]"]})}),e.jsxs(c,{variant:"body",sx:{opacity:"0.7"},children:[i," * 8 = ",Number(i)*8,"px"]})]})]}))})})}),`
`,e.jsx(s.h3,{id:"shadows",children:"Shadows"}),`
`,e.jsxs("p",{children:[e.jsx(s.p,{children:`For shadows, we create two entities: Blackhole and Cosmos. Both have four
variants: low, medium, intermediate and high.`}),e.jsx("br",{}),e.jsxs(s.p,{children:["To get the values combine the desired name with the '--variant'"," "]}),e.jsx("strong",{children:e.jsx(s.p,{children:'"shadows["blackhole--high"]: "0px 16px 32px 4px rgba(37, 37, 37, 0.13)""'})})]}),`
`,e.jsx(f,{children:e.jsx(b,{name:"Shadows",children:t=>e.jsxs(x,{container:!0,spacing:4,children:[e.jsx(x,{item:!0,xs:6,children:e.jsx(u,{spacing:5,children:["low","medium","intermediate","high"].map(i=>e.jsxs(u,{spacing:1,children:[e.jsx(c,{variant:"bodySmall",children:`blackhole--${i}`}),e.jsx(d,{height:"108px",width:"90%",sx:{boxShadow:a.shadows[`blackhole--${i}`]}})]}))})}),e.jsx(x,{item:!0,xs:6,children:e.jsx(u,{spacing:5,children:["low","medium","intermediate","high"].map(i=>e.jsxs(u,{spacing:1,children:[e.jsx(c,{variant:"bodySmall",children:`cosmos--${i}`}),e.jsx(d,{height:"108px",width:"90%",sx:{boxShadow:a.shadows[`cosmos--${i}`]}})]}))})})]})})})]})}}const Fr=r=>e.jsx(x,{container:!0,spacing:2,children:S(a.colors).map(n=>e.jsx(x,{item:!0,xs:3,children:e.jsx(u,{spacing:1,children:e.jsx(or,{square:!0,sx:{padding:3,height:"106px",backgroundColor:a.colors[n]},children:e.jsxs(u,{children:[e.jsx(c,{variant:"body",fontWeight:"700",color:g(n),children:M(n)}),e.jsxs(c,{variant:"bodySmall",color:g(n),children:[e.jsx("span",{style:{opacity:.7},children:"HEX"})," ",a.colors[n]]}),e.jsxs(c,{variant:"bodySmall",color:g(n),children:[e.jsx("span",{style:{opacity:.7},children:"TOKEN"})," ",n]})]})})})}))});Fr.storyName="Colors";Fr.parameters={storySource:{source:`args => {
  return <Grid container spacing={2}>
          {keys(Tokens.colors).map(name => <Grid item xs={3}>
              <Stack spacing={1}>
                <Paper square sx={{
          padding: 3,
          height: "106px",
          backgroundColor: Tokens.colors[name]
        }}>
                  <Stack>
                    <Typography variant="body" fontWeight="700" color={getColorTextColor(name)}>
                      {formatColorName(name)}
                    </Typography>
                    <Typography variant="bodySmall" color={getColorTextColor(name)}>
                      <span style={{
                opacity: 0.7
              }}>HEX</span>{" "}
                      {Tokens.colors[name]}
                    </Typography>
                    <Typography variant="bodySmall" color={getColorTextColor(name)}>
                      <span style={{
                opacity: 0.7
              }}>TOKEN</span> {name}
                    </Typography>
                  </Stack>
                </Paper>
              </Stack>
            </Grid>)}
        </Grid>;
}`}};const Pr=r=>e.jsxs(x,{container:!0,spacing:4,children:[e.jsx(x,{item:!0,xs:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(c,{variant:"h5",fontWeight:"700",children:"Small"}),e.jsx(c,{variant:"caption",children:"borderRadius.small"}),e.jsxs(u,{direction:"row",spacing:3,children:[e.jsx(d,{height:"108px",width:"256px",borderRadius:`${a.borderRadius.small.px}px`,backgroundColor:a.colors.cosmos}),e.jsxs(u,{spacing:1,children:[e.jsx(c,{variant:"bodySmall",children:"Corner Radius"}),e.jsx(d,{borderLeft:"1px solid black",height:"40px",pl:1,children:e.jsx(c,{variant:"caption",children:`${a.borderRadius.small.px}px`})})]})]})]})}),e.jsx(x,{item:!0,xs:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(c,{variant:"h5",fontWeight:"700",children:"Regular"}),e.jsx(c,{variant:"caption",children:"borderRadius.regular"}),e.jsxs(u,{direction:"row",spacing:3,children:[e.jsx(d,{height:"108px",width:"256px",borderRadius:`${a.borderRadius.regular.px}px`,backgroundColor:a.colors.cosmos}),e.jsxs(u,{spacing:1,children:[e.jsx(c,{variant:"bodySmall",children:"Corner Radius"}),e.jsx(d,{borderLeft:"1px solid black",height:"40px",pl:1,children:e.jsx(c,{variant:"caption",children:`${a.borderRadius.regular.px}px`})})]})]})]})}),e.jsx(x,{item:!0,xs:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(c,{variant:"h5",fontWeight:"700",children:"Large"}),e.jsx(c,{variant:"caption",children:"borderRadius.large"}),e.jsxs(u,{direction:"row",spacing:3,children:[e.jsx(d,{height:"108px",width:"256px",borderRadius:`${a.borderRadius.large.px}px`,backgroundColor:a.colors.cosmos}),e.jsxs(u,{spacing:1,children:[e.jsx(c,{variant:"bodySmall",children:"Corner Radius"}),e.jsx(d,{borderLeft:"1px solid black",height:"40px",pl:1,children:e.jsx(c,{variant:"caption",children:`${a.borderRadius.large.px}px`})})]})]})]})})]});Pr.storyName="Border Radius";Pr.parameters={storySource:{source:`args => {
  return <Grid container spacing={4}>
          <Grid item xs={4}>
            <Stack spacing={1}>
              <Typography variant="h5" fontWeight="700">
                Small
              </Typography>
              <Typography variant="caption">borderRadius.small</Typography>
              <Stack direction="row" spacing={3}>
                <Box height="108px" width="256px" borderRadius={\`\${Tokens.borderRadius.small.px}px\`} backgroundColor={Tokens.colors.cosmos} />
                <Stack spacing={1}>
                  <Typography variant="bodySmall">Corner Radius</Typography>
                  <Box borderLeft="1px solid black" height="40px" pl={1}>
                    <Typography variant="caption">
                      {\`\${Tokens.borderRadius.small.px}px\`}
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={1}>
              <Typography variant="h5" fontWeight="700">
                Regular
              </Typography>
              <Typography variant="caption">borderRadius.regular</Typography>
              <Stack direction="row" spacing={3}>
                <Box height="108px" width="256px" borderRadius={\`\${Tokens.borderRadius.regular.px}px\`} backgroundColor={Tokens.colors.cosmos} />
                <Stack spacing={1}>
                  <Typography variant="bodySmall">Corner Radius</Typography>
                  <Box borderLeft="1px solid black" height="40px" pl={1}>
                    <Typography variant="caption">
                      {\`\${Tokens.borderRadius.regular.px}px\`}
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={1}>
              <Typography variant="h5" fontWeight="700">
                Large
              </Typography>
              <Typography variant="caption">borderRadius.large</Typography>
              <Stack direction="row" spacing={3}>
                <Box height="108px" width="256px" borderRadius={\`\${Tokens.borderRadius.large.px}px\`} backgroundColor={Tokens.colors.cosmos} />
                <Stack spacing={1}>
                  <Typography variant="bodySmall">Corner Radius</Typography>
                  <Box borderLeft="1px solid black" height="40px" pl={1}>
                    <Typography variant="caption">
                      {\`\${Tokens.borderRadius.large.px}px\`}
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>;
}`}};const zr=r=>e.jsx(u,{spacing:1,children:Wr.map(n=>e.jsxs(d,{display:"flex",alignItems:"center",children:[e.jsx(d,{height:`${a.spacings[n].px}px`,width:"40%",backgroundColor:a.colors["nebula--light"],borderTop:`1px dashed ${a.colors.nebula}`,borderBottom:`1px dashed ${a.colors.nebula}`,mr:3}),e.jsxs(u,{direction:"row",spacing:2,children:[e.jsx(d,{width:"100px",children:e.jsxs(c,{variant:"body",children:["spacings[",n,"]"]})}),e.jsxs(c,{variant:"body",sx:{opacity:"0.7"},children:[n," * 8 = ",Number(n)*8,"px"]})]})]}))});zr.storyName="Spacings";zr.parameters={storySource:{source:`args => {
  return <Stack spacing={1}>
          {sortedSpacings.map(spacing => <Box display="flex" alignItems="center">
              <Box height={\`\${Tokens.spacings[spacing].px}px\`} width="40%" backgroundColor={Tokens.colors["nebula--light"]} borderTop={\`1px dashed \${Tokens.colors.nebula}\`} borderBottom={\`1px dashed \${Tokens.colors.nebula}\`} mr={3} />
              <Stack direction="row" spacing={2}>
                <Box width="100px">
                  <Typography variant="body">spacings[{spacing}]</Typography>
                </Box>
                <Typography variant="body" sx={{
          opacity: "0.7"
        }}>
                  {spacing} * 8 = {Number(spacing) * 8}px
                </Typography>
              </Stack>
            </Box>)}
        </Stack>;
}`}};const Dr=r=>e.jsxs(x,{container:!0,spacing:4,children:[e.jsx(x,{item:!0,xs:6,children:e.jsx(u,{spacing:5,children:["low","medium","intermediate","high"].map(n=>e.jsxs(u,{spacing:1,children:[e.jsx(c,{variant:"bodySmall",children:`blackhole--${n}`}),e.jsx(d,{height:"108px",width:"90%",sx:{boxShadow:a.shadows[`blackhole--${n}`]}})]}))})}),e.jsx(x,{item:!0,xs:6,children:e.jsx(u,{spacing:5,children:["low","medium","intermediate","high"].map(n=>e.jsxs(u,{spacing:1,children:[e.jsx(c,{variant:"bodySmall",children:`cosmos--${n}`}),e.jsx(d,{height:"108px",width:"90%",sx:{boxShadow:a.shadows[`cosmos--${n}`]}})]}))})})]});Dr.storyName="Shadows";Dr.parameters={storySource:{source:`args => {
  return <Grid container spacing={4}>
          <Grid item xs={6}>
            <Stack spacing={5}>
              {["low", "medium", "intermediate", "high"].map(variant => <Stack spacing={1}>
                  <Typography variant="bodySmall">{\`blackhole--\${variant}\`}</Typography>
                  <Box height="108px" width="90%" sx={{
            boxShadow: Tokens.shadows[\`blackhole--\${variant}\`]
          }} />
                </Stack>)}
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={5}>
              {["low", "medium", "intermediate", "high"].map(variant => <Stack spacing={1}>
                  <Typography variant="bodySmall">{\`cosmos--\${variant}\`}</Typography>
                  <Box height="108px" width="90%" sx={{
            boxShadow: Tokens.shadows[\`cosmos--\${variant}\`]
          }} />
                </Stack>)}
            </Stack>
          </Grid>
        </Grid>;
}`}};const j={title:"Tokens",component:a,tags:["stories-mdx"],includeStories:["colors","borderRadius","spacings","shadows"]};j.parameters=j.parameters||{};j.parameters.docs={...j.parameters.docs||{},page:qo};const $s=["colors","borderRadius","spacings","shadows"];export{$s as __namedExportsOrder,Pr as borderRadius,Fr as colors,j as default,Dr as shadows,zr as spacings};
//# sourceMappingURL=tokens.stories-2b9fff64.js.map
