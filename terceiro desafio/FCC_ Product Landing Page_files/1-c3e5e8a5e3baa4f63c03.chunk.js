((self||this).webpackJsonp=(self||this).webpackJsonp||[]).push([[1],{13:function(n,t,r){"use strict";r.d(t,"c",(function(){return e.c})),r.d(t,"d",(function(){return e.d})),r.d(t,"b",(function(){return e.b})),r.d(t,"a",(function(){return e.a})),r.d(t,"e",(function(){return u}));var e=r(224),u={TEAM:"TEAM",USER:"USER"};r(147)},131:function(n,t,r){"use strict";r.d(t,"b",(function(){return e})),r.d(t,"a",(function(){return u}));r(51);function e(n){return"[object Object]"===Object.prototype.toString.call(n)}function u(n){var t={};return function n(r,e){Object.keys(r).forEach((function(u){var o,i=r[u],c=Array.isArray(i),a=Object.prototype.toString.call(i),s=(o=i)&&o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o),f=e?e+"."+u:u;if(!c&&!s&&("[object Object]"===a||"[object Array]"===a)&&Object.keys(i).length)return n(i,f);t[f]=i}))}(n),t}},147:function(n,t,r){"use strict";r.d(t,"d",(function(){return e})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return i}));var e=[1280,800,512,320],u=512,o=["webp","jpg"],i="jpg"},193:function(n,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"a",(function(){return o}));var e=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement),u=!e,o=e},224:function(n,t,r){"use strict";r.d(t,"c",(function(){return e})),r.d(t,"d",(function(){return u})),r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var e={PEN:"PEN",PROJECT:"PROJECT",POST:"POST",COLLECTION:"COLLECTION"},u={PEN:"pen",EDITOR:"editor",FULL:"full",DETAILS:"details",DEBUG:"debug",LIVE:"live",COLLAB:"collab",PRESENTATION:"pres",PROFESSOR:"professor",POPUP:"popup"},o={LOVES:"LOVES",FORKS:"FORKS",COMMENTS:"COMMENTS"},i={GRID:6,GRID_LARGE:12,FANCY_GRID:4,LIST:20,COLLECTION_PREVIEW:4}},271:function(n,t,r){"use strict";r.d(t,"a",(function(){return e}));var e=function(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if("string"!=typeof n)return"";var r=n;return t&&(r=n.toLowerCase()),r.replace(/^[a-z]/,(function(n){return n.toUpperCase()}))}},6:function(n,t,r){"use strict";r.d(t,"A",(function(){return u})),r.d(t,"f",(function(){return o})),r.d(t,"g",(function(){return i})),r.d(t,"h",(function(){return c.a})),r.d(t,"t",(function(){return a})),r.d(t,"J",(function(){return s})),r.d(t,"D",(function(){return f})),r.d(t,"p",(function(){return d})),r.d(t,"q",(function(){return b})),r.d(t,"l",(function(){return y})),r.d(t,"m",(function(){return m})),r.d(t,"n",(function(){return E})),r.d(t,"o",(function(){return x})),r.d(t,"r",(function(){return P})),r.d(t,"H",(function(){return k})),r.d(t,"s",(function(){return N})),r.d(t,"E",(function(){return U})),r.d(t,"v",(function(){return F})),r.d(t,"u",(function(){return $})),r.d(t,"w",(function(){return G})),r.d(t,"x",(function(){return K})),r.d(t,"y",(function(){return _})),r.d(t,"k",(function(){return V.a})),r.d(t,"B",(function(){return H})),r.d(t,"C",(function(){return W})),r.d(t,"d",(function(){return nn})),r.d(t,"e",(function(){return tn})),r.d(t,"a",(function(){return rn})),r.d(t,"b",(function(){return en})),r.d(t,"c",(function(){return un})),r.d(t,"F",(function(){return cn})),r.d(t,"G",(function(){return e})),r.d(t,"j",(function(){return pn})),r.d(t,"I",(function(){return dn})),r.d(t,"z",(function(){return gn})),r.d(t,"i",(function(){return vn}));var e={};r.r(e),r.d(e,"buildShotsPictureData",(function(){return sn})),r.d(e,"buildShotUrl",(function(){return fn}));var u=function(n){var t,r,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=e.page||0,o=e.pageLength||20,i=[];if(n&&n.length){var c=o*(u||0),a=c+o;i=n.slice(c,a),t=n.length>a,r=c>0}return[i,{hasNextPage:t,hasPreviousPage:r}]};function o(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];r.forEach((function(t){return n[t]=n[t].bind(n)}))}r(8);var i=function(n){return n.replace(/_\w/g,(function(n){return n[1].toUpperCase()}))},c=r(271);function a(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)||(n.which||void 0===n.button?2===n.which:1&!n.button&&2&!n.button&&4&n.button)}var s=function(n,t,r){if(void 0!==t){if(null===t&&(r.expires=-1),"number"==typeof r.expires){var e=r.expires,u=r.expires=new Date;u.setDate(u.getDate()+e)}var o=[n,"=",t,r.expires?"; expires="+r.expires.toUTCString():"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",r.secure?"; secure":"",r.samesite?"; SameSite="+r.samesite:""].join("");window.document.cookie=o}},f=function(n){for(var t=document.cookie.split("; "),r=0,e=t.length;r<e;r++){var u=t[r].split("=");if(u.shift()===n)return u.join("=")}return null},p=r(224),d=function(n){var t=n.title,r=n.description,e=n.url,u=n.itemType===p.c.PEN?"{% codepen ".concat(e," %}"):e,o="\n---\ntitle: ".concat(t,"\npublished: true\ntags: codepen\n---\n\n").concat(r,"\n\n").concat(u,"\n");return"https://dev.to/new?prefill=".concat(encodeURIComponent(o.trim()))},l=r(5),g=r.n(l);function v(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.push.apply(r,e)}return r}function h(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){g()(n,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))}))}return n}var b=function(){return Math.floor(Date.now()/1e3)};function y(n,t){return w(n).toLocaleDateString("en-US",h({month:"long",day:"numeric",year:"numeric"},t))}function m(n,t,r){var e=w(n);return"".concat(function(n,t){return w(n).toLocaleDateString("en-US",h({month:"numeric",day:"numeric",year:"numeric"},t))}(n,t)," — ").concat(e.toLocaleTimeString("en-US",r))}function w(n){var t=new Date(n);return isNaN(t.getDate())?new Date(n.substr(0,4),n.substr(5,2)-1,n.substr(8,2)):t}function O(n){return Number.prototype.toLocaleString?Number(n).toLocaleString():n}var E=O,S=function(n){return n.replace(/([\/\\\*\?\+\.\(\)\[\]\{\}\$\!])/g,"\\$1")},R=function(n,t){for(var r=new RegExp(n,"g").exec(t),e=[],u=!1,o=0,i=0,c=1;c<r.length;c++)r[c]&&e.push({str:r[c],match:u}),r[c]||1===c||c===r.length-1||o++,r[c]||1!==c||i++,u=!u;return{substrings:e,score:o+i}},T=function(n,t){return n.score<t.score?1:n.score>t.score?-1:0},x=function(n,t){if(!n)return{error:"No term provided in fuzzySearch(term, lib)"};if(!t)return{error:"No lib provided in fuzzySearch(term, lib)"};var r,e,u={bullseye:null,exact:[],fuzzy:[]},o=null,i=[],c=[],a=new RegExp("^"+S(n)+"$","i");r="(.+)?(".concat(S(n),")(.+)?$");var s=new RegExp(r,"g"),f=n.split("").map((function(n){return"(".concat(S(n),")")}));e="(.+)?".concat(f.join("(.+)?"),"(.+)?$");var p=new RegExp(e,"g");return t.forEach((function(n){n.string.match(a)?o=n:n.string.match(s)?i.push(n):n.string.match(p)&&c.push(n)})),o&&(u.bullseye={key:o.key,string:o.string,matchType:"bullseye"}),i.forEach((function(n){var t=R(r,n.string);u.exact.push({key:n.key,string:n.string,matchType:"exact",substrings:t.substrings,score:t.score})})),c.forEach((function(n){var t=R(e,n.string);u.fuzzy.push({key:n.key,string:n.string,matchType:"fuzzy",substrings:t.substrings,score:t.score})})),{success:!0,count:u.exact.concat(u.fuzzy).length,term:n,bullseye:u.bullseye,exact:u.exact.sort(T),fuzzy:u.fuzzy.sort(T),_regex:{exact:r,fuzzy:e}}},j=function n(){var t=Date.now();return t<=n.previous?t=++n.previous:n.previous=t,t.toString()};j.previous=Date.now();var P=j;var k=function(n){var t=n.url,r=n.width,e=n.height,u=new URL(t);return u.searchParams.set("width",r),u.searchParams.set("height",e||r),u.href},D=r(26),L=r.n(D),A=r(16),C=r.n(A),z="https://cdn.skypack.dev/",I=/(import(\(\s*|\s+)|\sfrom\s*)["'`](?!http|\.|\/)([^"'`\n]+)["'`]/;function N(n){return"string"==typeof n&&-1!==n.indexOf("import")&&I.test(n)}function U(n){return q.apply(this,arguments)}function q(){return q=L()(C.a.mark((function n(t){var r,e,u,o=arguments;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=o.length>1&&void 0!==o[1]?o[1]:z,u=new RegExp(I,"g"),null===(r=window)||void 0===r||!r.SkypackImports){n.next=6;break}return n.next=5,M(t,u,L()(C.a.mark((function n(){var t,r,u,o,i,c=arguments;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=Array.prototype.slice.call(c),r=t[1],u=t[3],n.next=3,window.SkypackImports.getPackageData({name:u});case 3:return o=n.sent,i=window.SkypackImports.generateModuleUrl(o,e),n.abrupt("return","".concat(r,'"').concat(i,'"'));case 6:case"end":return n.stop()}}),n)}))));case 5:return n.abrupt("return",n.sent);case 6:return n.abrupt("return",t.replace(u,'$1"'.concat(e,'$3"')));case 7:case"end":return n.stop()}}),n)}))),q.apply(this,arguments)}function M(n,t,r){return B.apply(this,arguments)}function B(){return B=L()(C.a.mark((function n(t,r,e){var u,o;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u=[],t.replace(r,(function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];var i=e.apply(void 0,[n].concat(r));u.push(i)})),n.next=4,Promise.all(u);case 4:return o=n.sent,n.abrupt("return",t.replace(r,(function(){return o.shift()})));case 6:case"end":return n.stop()}}),n)}))),B.apply(this,arguments)}var F=function(n){var t=n&&n.toUpperCase().slice(0,-1);return Object.values(p.c).includes(t)||console.warn("Invalid url fragment supplied to itemUrlToEnum"),t},$=function(n){return Object.values(p.c).includes(n)||console.warn("Invalid item enum supplied to itemEnumToUrl"),n&&"".concat(n.toLowerCase(),"s")};function G(n,t){return new Promise((function(r,e){var u=document.createElement(n);for(var o in u.onload=function(){return r(u)},u.onerror=e,t)u.setAttribute(o,t[o]);document.body.appendChild(u)}))}var K={error:function(){},info:function(){},logDuration:function(n,t){}},J=r(51),Y=r.n(J);var _=function(n,t){return function(n,t){if(Array.isArray(t))return Array.isArray(n);if(null==n)return!1;return Y()(n)===Y()(t)}(n,t)?n:t},V=r(131);r(193);function H(n,t,r){return 1===t?n:r||n+"s"}function W(n,t,r){return O(t)+" "+H(n,t,r)}var Q=r(1),X=r.n(Q),Z=r(13),nn=X.a.oneOf(Object.values(Z.c)),tn=X.a.oneOf(Object.values(Z.e)),rn=X.a.oneOfType([X.a.func,X.a.node,X.a.object]),en=X.a.oneOfType([X.a.elementType,X.a.string]),un=X.a.shape({id:X.a.string.isRequired,title:X.a.string.isRequired,updatedAt:X.a.string.isRequired,owner:X.a.shape({id:X.a.string.isRequired,username:X.a.string.isRequired}).isRequired});X.a.shape({title:X.a.string.isRequired,number:X.a.number.isRequired,year:X.a.number.isRequired,published:X.a.bool.isRequired,theme:X.a.string.isRequired,description:X.a.string.isRequired,collectionSlug:X.a.string});function on(){return window.scrollY||window.pageYOffset?window:document.body}function cn(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;if(n){var r=n.getBoundingClientRect(),e=r.y-t;if(e<0){var u=on(),o=u.scrollY||u.pageYOffset||u.scrollTop;u.scrollTo({top:o+e,behavior:"smooth"})}}}var an=r(147);function sn(n,t){return n?{formats:{webp:{src:fn(n,t,"webp"),type:"image/webp"}},defaultSrc:fn(n,t,"jpg")}:null}function fn(n,t,r){if(!n)return null;var e=an.c.includes(r)?r:an.a,u=an.d.includes(t)?t:an.b;return n.replace("{{ FORMAT }}",e).replace("{{ WIDTH }}",u)}function pn(n,t){var r;return function(){for(var e=arguments.length,u=new Array(e),o=0;o<e;o++)u[o]=arguments[o];var i=function(){return n.apply(void 0,u)};clearTimeout(r),r=setTimeout(i,t)}}function dn(n,t){var r;return function(){r||(n.apply(void 0,arguments),r=!0,setTimeout((function(){r=!1}),t))}}var ln=function(n){return Math.floor(n/1e3)},gn=function(){return ln(Date.now())};function vn(n){return-1!==(n=(n=n.replace("https://","")).replace("http://","")).indexOf("/")&&(n=n.substring(0,n.indexOf("/"))),n}}}]);