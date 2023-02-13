System.register(["jimu-core","jimu-arcgis","esri/layers/WebTileLayer","esri/core/reactiveUtils","jimu-ui","calcite-components","jimu-core/react"],(function(f,e){var t={},a={},r={},n={},i={},c={},o={};return{setters:[function(f){t.React=f.React},function(f){a.JimuMapViewComponent=f.JimuMapViewComponent},function(f){r.default=f.default},function(f){n.default=f.default},function(f){i.Alert=f.Alert,i.Loading=f.Loading,i.Slider=f.Slider},function(f){c.CalciteButton=f.CalciteButton},function(f){o.useEffect=f.useEffect}],execute:function(){f((()=>{var f={984:(f,e,t)=>{"use strict";t.d(e,{Z:()=>c});var a=t(81),r=t.n(a),n=t(645),i=t.n(n)()(r());i.push([f.id,".date-grid{display:grid;grid-template-columns:45px 137px 45px;column-gap:16px;background-color:white;padding:5px 16px 12px}.text-slide-div{margin-bottom:8px}.text-div{display:grid;grid-template-columns:97px 40px;padding:0;margin-bottom:3px;height:25px}.label-text{margin:0;align-self:end}.date-text{font-size:12px;font-weight:900}.now-text{font-size:x-small}.time-slider{margin:0;background:linear-gradient(var(--calcite-ui-border-input), var(--calcite-ui-border-input));background-size:3px 110%;background-repeat:no-repeat;background-position:105px}.play-button{justify-self:center;align-self:flex-end}input[type='range'].time-slider::-webkit-slider-runnable-track{height:5px;border-radius:20px}input[type='range'].time-slider::-webkit-slider-thumb{margin-top:-5px}input[type='range'].time-slider::-moz-range-track{height:5px;border-radius:20px}input[type='range'].time-slider::-moz-range-thumb{margin-top:-5px}\n",""]);const c=i},232:(f,e,t)=>{"use strict";t.d(e,{Z:()=>c});var a=t(81),r=t.n(a),n=t(645),i=t.n(n)()(r());i.push([f.id,".table-color{width:100%;height:10px;align-self:end;margin-bottom:2px}.color-grid{display:grid;grid-template-columns:40px 205px 40px;column-gap:3px;margin-bottom:10px}.color-dropdown{overflow-y:scroll;height:500px}.color-dropdown-item:hover{background:rgba(0,127,148,0.2) !important}.div-dropdown-item{width:100%;z-index:-99}.main-grid{display:grid;grid-template-columns:292px;margin-bottom:30px;column-gap:5px}\n",""]);const c=i},645:f=>{"use strict";f.exports=function(f){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=f(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(f,t,a,r,n){"string"==typeof f&&(f=[[null,f,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var o=this[c][0];null!=o&&(i[o]=!0)}for(var l=0;l<f.length;l++){var s=[].concat(f[l]);a&&i[s[0]]||(void 0!==n&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=n),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},81:f=>{"use strict";f.exports=function(f){return f[1]}},379:f=>{"use strict";var e=[];function t(f){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===f){t=a;break}return t}function a(f,a){for(var n={},i=[],c=0;c<f.length;c++){var o=f[c],l=a.base?o[0]+a.base:o[0],s=n[l]||0,u="".concat(l," ").concat(s);n[l]=s+1;var d=t(u),m={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};if(-1!==d)e[d].references++,e[d].updater(m);else{var p=r(m,a);a.byIndex=c,e.splice(c,0,{identifier:u,updater:p,references:1})}i.push(u)}return i}function r(f,e){var t=e.domAPI(e);return t.update(f),function(e){if(e){if(e.css===f.css&&e.media===f.media&&e.sourceMap===f.sourceMap&&e.supports===f.supports&&e.layer===f.layer)return;t.update(f=e)}else t.remove()}}f.exports=function(f,r){var n=a(f=f||[],r=r||{});return function(f){f=f||[];for(var i=0;i<n.length;i++){var c=t(n[i]);e[c].references--}for(var o=a(f,r),l=0;l<n.length;l++){var s=t(n[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}n=o}}},569:f=>{"use strict";var e={};f.exports=function(f,t){var a=function(f){if(void 0===e[f]){var t=document.querySelector(f);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(f){t=null}e[f]=t}return e[f]}(f);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:f=>{"use strict";f.exports=function(f){var e=document.createElement("style");return f.setAttributes(e,f.attributes),f.insert(e,f.options),e}},565:(f,e,t)=>{"use strict";f.exports=function(f){var e=t.nc;e&&f.setAttribute("nonce",e)}},795:f=>{"use strict";f.exports=function(f){var e=f.insertStyleElement(f);return{update:function(t){!function(f,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var n=t.sourceMap;n&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleTagTransform(a,f,e.options)}(e,f,t)},remove:function(){!function(f){if(null===f.parentNode)return!1;f.parentNode.removeChild(f)}(e)}}}},589:f=>{"use strict";f.exports=function(f,e){if(e.styleSheet)e.styleSheet.cssText=f;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(f))}}},145:f=>{"use strict";f.exports=c},135:f=>{"use strict";f.exports=n},474:f=>{"use strict";f.exports=r},826:f=>{"use strict";f.exports=a},891:f=>{"use strict";f.exports=t},315:f=>{"use strict";f.exports=o},726:f=>{"use strict";f.exports=i}},e={};function l(t){var a=e[t];if(void 0!==a)return a.exports;var r=e[t]={id:t,exports:{}};return f[t](r,r.exports,l),r.exports}l.n=f=>{var e=f&&f.__esModule?()=>f.default:()=>f;return l.d(e,{a:e}),e},l.d=(f,e)=>{for(var t in e)l.o(e,t)&&!l.o(f,t)&&Object.defineProperty(f,t,{enumerable:!0,get:e[t]})},l.o=(f,e)=>Object.prototype.hasOwnProperty.call(f,e),l.r=f=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(f,"__esModule",{value:!0})},l.p="",l.nc=void 0;var s={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(s),l.d(s,{default:()=>O});var f=l(891),e=l(826),t=l(474),a=l(135),r=l(726);const n={1:["#dfdfdfff","#9bea8fff","#58ff42ff","#47c278ff","#4793f9ff","#0c59ffff","#6153c1ff","#ff93a3ff","#ff3f35ff","#c20511ff","#ffeb0aff","#ff9811ff","#a84c06ff","#dda8ffff","#ffffffff"],2:["#79746044","#92887188","#cec087cc","#88ddeeff","#0099ccff","#0077aaff","#005588ff","#ffee00ff","#ffaa00ff","#ff7700ff","#ff4400ff","#ee0000ff","#ffaaffff","#ff44ffff","#ff00ffff","#aa00aaff"],3:["#353535ff","#757575ff","#005a00ff","#007e00ff","#087fdbff","#1c47e8ff","#6e0dc6ff","#c80f86ff","#c06487ff","#d2883bff","#fac431ff","#fefb02ff","#fe9a58ff","#fe5f05ff","#fd341cff","#bebebeff"],4:["#01b714ff","#088915ff","#0c7617ff","#007e00ff","#106218ff","#074407ff","#3b6707ff","#859a07ff","#ffee07ff","#f7b708ff","#f38b08ff","#ef7008ff","#ea5e09ff","#e95d09ff","#df370aff","#dc2e0aff"],5:["#3ffefcff","#1790f9ff","#0000f3ff","#41ff50ff","#32c23dff","#4b8339ff","#ffff50ff","#fdbb3cff","#df5e0bff","#fd8788ff","#e90000ff","#a80000ff","#ef5beeff","#924cbeff","#502a68ff"],6:["#04e9e7ff","#00efe7ff","#009cf7ff","#0000f7ff","#00ff00ff","#03b703ff","#087305ff","#ffff00ff","#ecce00ff","#fe9300ff","#ff0000ff","#bd0000ff","#fe00feff","#9c52c6ff","#fefefeff","#ffffffff"],7:["#009f9fff","#009047ff","#00b031ff","#00ff00ff","#00d319ff","#10e81dff","#92fd1eff","#fffd1bff","#ffd400ff","#ffab00ff","#fe6d00ff","#ef0f02ff","#d00523ff","#e503b5ff","#ff66ffff","#ffaaffff"],8:["#005eb617","#005eb628","#005eb639","#005eb64e","#005eb670","#075cb4a6","#1c59b0cf","#3955abe3","#6350a3f1","#8e4b9bff","#d04f81ff","#fc676fff","#fd8f6eff","#ffb76eff","#ffe12eff","#fffd05ff"]},i={1:["#efffffff","#dfffffff","#cfffffff","#bfffffff","#afffffff","#9fffffff","#8fffffff","#7fefffff","#6fdfffff","#5fcfffff","#4fafffff","#3f9fffff","#2f8fffff","#1f7fffff","#0f6fffff","#005fffff","#004fffff","#003fffff","#002fffff","#001fffff","#000fffff"],2:["#efffffff","#dfffffff","#cfffffff","#bfffffff","#afffffff","#9fffffff","#bfffffff","#9fdfffff","#7fbfffff","#5f9fffff","#4f8fffff","#3f7fffff","#2f6fffff","#1f5fffff","#002fffff","#001fffff","#000fffff"],3:["#efffffff","#dfffffff","#cfffffff","#bfffffff","#afffffff","#9fffffff","#8fffffff","#7fefffff","#6fdfffff","#5fcfffff","#4fafffff","#3f9fffff","#2f8fffff","#1f7fffff","#0f6fffff","#005fffff","#004fffff","#003fffff","#002fffff","#001fffff","#000fffff"],4:["#efffffff","#dfffffff","#cfffffff","#bfffffff","#afffffff","#9fffffff","#8fffffff","#7fefffff","#6fdfffff","#5fcfffff","#4fafffff","#3f9fffff","#2f8fffff","#1f7fffff","#0f6fffff","#005fffff","#004fffff","#003fffff","#002fffff","#001fffff","#000fffff"],5:["#3ffefcff","#1790f9ff","#0000f3ff","#41ff50ff","#32c23dff","#4b8339ff","#ffff50ff","#fdbb3cff","#df5e0bff","#fd8788ff","#e90000ff","#a80000ff","#ef5beeff","#924cbeff","#502a68ff"],6:["#e5fefeff","#a3f3ffff","#51cffdff","#0d99fcff","#0f75fbff","#1053fbff","#0b32cfff","#0726a4ff","#031875ff","#010940ff"],7:["#efffffff","#dfffffff","#cfffffff","#bfffffff","#afffffff","#9fffffff","#8fffffff","#7fefffff","#6fdfffff","#5fcfffff","#4fafffff","#3f9fffff","#2f8fffff","#1f7fffff","#0f6fffff","#005fffff","#004fffff","#003fffff","#002fffff","#001fffff","#000fffff"],8:["#efffffff","#dfffffff","#cfffffff","#bfffffff","#afffffff","#9fffffff","#8fffffff","#7fefffff","#6fdfffff","#5fcfffff","#4fafffff","#3f9fffff","#2f8fffff","#1f7fffff","#0f6fffff","#005fffff","#004fffff","#003fffff","#002fffff","#001fffff","#000fffff"]};var c=l(379),o=l.n(c),u=l(795),d=l.n(u),m=l(569),p=l.n(m),g=l(565),b=l.n(g),v=l(216),h=l.n(v),x=l(589),y=l.n(x),w=l(232),E={};E.styleTagTransform=y(),E.setAttributes=b(),E.insert=p().bind(null,"head"),E.domAPI=d(),E.insertStyleElement=h(),o()(w.Z,E),w.Z&&w.Z.locals&&w.Z.locals;const R=(f,e)=>f.filter((f=>f.id.includes(e))).toArray(),T=()=>{var f;return(f=6e5,e=>Math.floor(e/f)*f)((new Date).getTime())/1e3},M=f=>f<10?`0${f}`:`${f}`,C=f=>{const e=new Date(1e3*f);return`${e.getFullYear()}${M(e.getMonth()+1)}${M(e.getDate())}${M(e.getHours())}${M(e.getMinutes())}`};var S=l(145),N=l(984),$={};$.styleTagTransform=y(),$.setAttributes=b(),$.insert=p().bind(null,"head"),$.domAPI=d(),$.insertStyleElement=h(),o()(N.Z,$),N.Z&&N.Z.locals&&N.Z.locals;var P=l(315);const{useCallback:A,useLayoutEffect:k,useRef:I}=f.React,j=({timePath:e,setTimePath:t,play:a,setPlay:n,timePathList:i,relativeTime:c})=>{const o=I(12),l=I(0),s=A((()=>{o.current=o.current===i.length-1?0:o.current+1,t(i[o.current])}),[t,i]);return(0,P.useEffect)((()=>{o.current=i.findIndex((f=>f.time===e.time))}),[e,i]),k((()=>{let f;const e=()=>{f=setTimeout((()=>{s(),l.current=requestAnimationFrame(e)}),200)};return a?l.current=requestAnimationFrame(e):(clearTimeout(f),cancelAnimationFrame(l.current)),()=>{clearTimeout(f),cancelAnimationFrame(l.current)}}),[s,a]),f.React.createElement("div",{className:"date-grid"},f.React.createElement(S.CalciteButton,{title:"Play Pause",iconStart:a?"pause-f":"play-f",round:!0,onClick:()=>{n(!a)},className:"play-button"}),f.React.createElement("div",{className:"text-slide-div"},f.React.createElement("div",{className:"text-div"},f.React.createElement("p",{className:"label-text date-text","aria-label":"Date Text"},((f,e)=>{if(e){const e=(new Date).getTime()/1e3-f,t=Math.floor(e/60);return t>0?`${t} minutes ago`:`In ${Math.abs(t)} minutes`}return new Date(1e3*f).toLocaleString([],{hour:"numeric",minute:"numeric",hour12:!0})})(e.time,c)),f.React.createElement("p",{className:"label-text now-text"},"Now")),f.React.createElement(r.Slider,{"aria-label":"Time Slider",className:"time-slider",max:i.length-1,min:0,step:1,defaultValue:o.current,value:i.findIndex((f=>f.time===e.time)),onChange:f=>{t(i[f.target.valueAsNumber])}})),f.React.createElement(S.CalciteButton,{title:"Next Time",iconStart:"end-f",round:!0,onClick:()=>{s()},className:"play-button"}))};const{useEffect:L,useRef:Z,useState:D,useCallback:z}=f.React,O=c=>{var o;const l=T(),s={time:l,path:`v2/radar/${l}`},{coverageURL:u,colorScheme:d,playOnLoad:m,opacity:p,relativeTime:g,dataSource:b}=c.config,[v,h]=D(s),[x,y]=D([s]),[w,E]=D(!0),[M,S]=D(m),[N,$]=D(!1),P=Z(null),A=Z(null),k=z((f=>{const e=`rainfall-radar-base-${f.time}`,a="1"===b?`https://tilecache.rainviewer.com/${f.path}/256/{z}/{x}/{y}/${d}/1_0.png`:`https://api.weather.bom.gov.au/v1/rainradar/tiles/${f.path}/{z}/{y}/{x}.png`,r="1"===b?'<a href="https://www.rainviewer.com/api.html">Rainviewer</a>':'<a href="http://www.bom.gov.au/">Bureau of Meteorology Australia</a>',n=new t.default({urlTemplate:a,copyright:r,title:`Rainfall Radar for ${e}`,listMode:"hide",visible:!1,opacity:p,id:e});return n.on("layerview-create-error",(()=>{n.refresh()})),n}),[d,b,p]),I=z((f=>{if(null!==P.current){const e=k(f);P.current.view.map.add(e,0)}}),[k]),O=z((()=>{if(null!==P.current){const f=R(P.current.view.map.layers,"rainfall-radar-base-");P.current.view.map.removeMany(f)}}),[]);return L((()=>{let f;const e=()=>{"1"===b&&fetch(u).then((f=>{return e=void 0,t=void 0,r=function*(){return f.json()},new((a=void 0)||(a=Promise))((function(f,n){function i(f){try{o(r.next(f))}catch(f){n(f)}}function c(f){try{o(r.throw(f))}catch(f){n(f)}}function o(e){var t;e.done?f(e.value):(t=e.value,t instanceof a?t:new a((function(f){f(t)}))).then(i,c)}o((r=r.apply(e,t||[])).next())}));var e,t,a,r})).then((f=>{const e=[...f.radar.past,...f.radar.nowcast];y(e),h(f.radar.past[f.radar.past.length-1]),A.current=f.radar.past[f.radar.past.length-2]})).catch((f=>console.log(f))),"2"===b&&(()=>{let f=T();const e=[];for(let t=0;t<16;t++)e.push({path:C(f),time:f}),f-=600;e.sort(((f,e)=>f.time-e.time)),y(e),h(e[e.length-1]),A.current=e[e.length-2]})()};if(w){e();let a=(t=6e5,f=>Math.ceil(f/t)*t)((new Date).getTime())/1e3-(new Date).getTime()/1e3;a=Math.round(1e3*a+6e4),f=setTimeout((()=>{e(),E(!1)}),a)}else f=setInterval((()=>{e()}),6e5);var t;return()=>{clearTimeout(f),clearInterval(f)}}),[u,b,w]),L((()=>(x.length>1&&x.forEach((f=>{I(f)})),()=>{O()})),[I,O,x]),L((()=>((f=>{if(null!==P.current){let e=[];const t=R(P.current.view.map.layers,`${f.time}`);A.current&&A.current.time!==f.time&&(e=R(P.current.view.map.layers,`${A.current.time}`)),0!==t.length&&(t[0].listMode="show",t[0].visible=!0,0!==e.length&&setTimeout((()=>{e[0].listMode="hide",e[0].visible=!1}),80))}})(v),()=>{A.current=v})),[v]),f.React.createElement("div",{className:"jimu-widget"},c.useMapWidgetIds&&1===c.useMapWidgetIds.length&&f.React.createElement(e.JimuMapViewComponent,{useMapWidgetId:null===(o=c.useMapWidgetIds)||void 0===o?void 0:o[0],onActiveViewChange:f=>{P.current=f,a.default.whenOnce((()=>P.current.view.ready)).then((()=>{console.log("MapView is ready.")})),$(!0)}}),f.React.createElement("div",{className:"alert-box"},f.React.createElement(r.Alert,{form:"basic",onClose:()=>{},open:!N,text:"Please select a map in settings",type:"info",withIcon:!0})),null!==P.current&&f.React.createElement("div",{className:"main-grid"},((e,t=!0,a=!0)=>{const r=t?n[e]:i[e],c=t?1:2,o=f.React.createElement("table",{className:"table-color"},f.React.createElement("tr",null,r.map((t=>f.React.createElement("td",{key:`${e}-${t}`,style:{backgroundColor:t}})))));return a?f.React.createElement("div",{className:`color-grid color-grid-${c}`},f.React.createElement("small",{className:"text-left text-start text-white align-self-end"},"Light"),o,f.React.createElement("small",{className:"text-right text-end text-white align-self-end"},"Heavy")):o})(d,!0),f.React.createElement(j,{timePath:v,setTimePath:h,play:M,setPlay:S,timePathList:x,relativeTime:g})),null===P.current&&f.React.createElement("div",null,f.React.createElement(r.Loading,null)))}})(),s})())}}}));