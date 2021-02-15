/*! For license information please see vue-ctx-injector.js.LICENSE.txt */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.VueCtxInjector=n():t.VueCtxInjector=n()}(self,(function(){return function(){var t={1719:function(t,n,e){"use strict";e.d(n,{default:function(){return i}});e(5395),e(3292);function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var i=function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,"_vueInstance",null),o(this,"_compDefs",{}),o(this,"_compConstructors",{}),o(this,"_compInstances",{}),o(this,"_compElements",{}),this._validateVueInstance(n)&&this._validateInitOptions(e)&&(this._vueInstance=n,this._compDefs=e.components,this._initStdlComponents())}var n,e,i;return n=t,(e=[{key:"_validateVueInstance",value:function(t){return t?!!(!t||t.hasOwnProperty("extend")&&t.hasOwnProperty("observable"))||(console.error("[VueCtxInjector] This is not a valid Vue instance."),!1):(console.error("[VueCtxInjector] You need to provide the Vue instance as 1st argument."),!1)}},{key:"_validateInitOptions",value:function(t){return!(!t||!t.components)||(console.error("[VueCtxInjector] This is not a valid options object."),!1)}},{key:"_initStdlComponents",value:function(){var t=this;document.querySelectorAll("[data-v-comp]").forEach((function(n){var e=n.getAttribute("data-v-comp");if(e){t._compElements[e]=n;var r=t._getParsedElementProps(n);t._mountStdlComponent(e,r),t._watchStdlComponent(e)}else console.error("[VueCtxInjector] No component name specified.")}))}},{key:"_mountStdlComponent",value:function(t,n){if(!t||this._compDefs.hasOwnProperty(t)){var e=this._compDefs[t],r=this._castProps(n,e);this._compConstructors[t]=this._vueInstance.extend(e),this._compInstances[t]=new this._compConstructors[t]({propsData:r}),this._compInstances[t]._props=this._vueInstance.observable(r);var o=this._compInstances[t].$mount();this._compElements[t].appendChild(o.$el)}else console.error("[VueCtxInjector] No component found with name: ".concat(t,"."))}},{key:"_watchStdlComponent",value:function(t){var n=this;new MutationObserver((function(e){e.forEach((function(e){if("attributes"===e.type){var r=n._getParsedElementProps(n._compElements[t]);n._compInstances[t]=new n._compConstructors[t]({propsData:r});var o=n._compInstances[t].$mount();n._compElements[t].innerHTML="",n._compElements[t].appendChild(o.$el)}}))})).observe(this._compElements[t],{attributes:!0})}},{key:"_getParsedElementProps",value:function(t){var n={};for(var e in t.attributes){var r=t.attributes[e];r.name&&r.name.includes("data-v:")&&(n[r.name.substr(r.name.indexOf("v:")+2).substr().toLowerCase().replace(/(\-[a-z])/g,(function(t){return t.charAt(t.length-1).toUpperCase()}))]=r.value)}return n}},{key:"_castProps",value:function(t,n){var e={};for(var r in t)if(r in n.props){var o=n.props[r].type,i=null;i=[Object,Array].includes(o)?JSON.parse(t[r]):o(t[r]),e[r]=i}return e}}])&&r(n.prototype,e),i&&r(n,i),t}()},3646:function(t,n,e){e(3949);var r=e(4934);t.exports=r("Array","includes")},5395:function(t,n,e){var r=e(3646);t.exports=r},3292:function(t,n,e){var r=e(1326);t.exports=r},3841:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},6278:function(t,n,e){var r=e(1398),o=e(4714),i=e(6337),u=r("unscopables"),c=Array.prototype;null==c[u]&&i.f(c,u,{configurable:!0,value:o(null)}),t.exports=function(t){c[u][t]=!0}},6302:function(t,n,e){var r=e(3196);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},9682:function(t,n,e){"use strict";var r=e(7265).forEach,o=e(9904),i=e(2114),u=o("forEach"),c=i("forEach");t.exports=u&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},452:function(t,n,e){var r=e(4721),o=e(6674),i=e(9625),u=function(t){return function(n,e,u){var c,f=r(n),a=o(f.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},7265:function(t,n,e){var r=e(9910),o=e(4015),i=e(7706),u=e(6674),c=e(9400),f=[].push,a=function(t){var n=1==t,e=2==t,a=3==t,s=4==t,p=6==t,l=7==t,v=5==t||p;return function(y,m,h,d){for(var b,S,x=i(y),g=o(x),w=r(m,h,3),O=u(g.length),_=0,j=d||c,E=n?j(y,O):e||l?j(y,0):void 0;O>_;_++)if((v||_ in g)&&(S=w(b=g[_],_,x),t))if(n)E[_]=S;else if(S)switch(t){case 3:return!0;case 5:return b;case 6:return _;case 2:f.call(E,b)}else switch(t){case 4:return!1;case 7:f.call(E,b)}return p?-1:a||s?s:E}};t.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6),filterOut:a(7)}},9904:function(t,n,e){"use strict";var r=e(3894);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},2114:function(t,n,e){var r=e(4244),o=e(3894),i=e(4361),u=Object.defineProperty,c={},f=function(t){throw t};t.exports=function(t,n){if(i(c,t))return c[t];n||(n={});var e=[][t],a=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:f,p=i(n,1)?n[1]:void 0;return c[t]=!!e&&!o((function(){if(a&&!r)return!0;var t={length:-1};a?u(t,1,{enumerable:!0,get:f}):t[1]=1,e.call(t,s,p)}))}},9400:function(t,n,e){var r=e(3196),o=e(5588),i=e(1398)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},1030:function(t){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},9129:function(t,n,e){var r=e(4361),o=e(6660),i=e(7872),u=e(6337);t.exports=function(t,n){for(var e=o(n),c=u.f,f=i.f,a=0;a<e.length;a++){var s=e[a];r(t,s)||c(t,s,f(n,s))}}},1831:function(t,n,e){var r=e(4244),o=e(6337),i=e(654);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},654:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},4244:function(t,n,e){var r=e(3894);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},3791:function(t,n,e){var r=e(4516),o=e(3196),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},3464:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},4934:function(t,n,e){var r=e(4516),o=e(9910),i=Function.call;t.exports=function(t,n,e){return o(i,r[t].prototype[n],e)}},2507:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},7330:function(t,n,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=e(4516),i=e(7872).f,u=e(1831),c=e(8875),f=e(8870),a=e(9129),s=e(2615);t.exports=function(t,n){var e,p,l,v,y,m=t.target,h=t.global,d=t.stat;if(e=h?o:d?o[m]||f(m,{}):(o[m]||{}).prototype)for(p in n){if(v=n[p],l=t.noTargetGet?(y=i(e,p))&&y.value:e[p],!s(h?p:m+(d?".":"#")+p,t.forced)&&void 0!==l){if(r(v)===r(l))continue;a(v,l)}(t.sham||l&&l.sham)&&u(v,"sham",!0),c(e,p,v,t)}}},3894:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},9910:function(t,n,e){var r=e(3841);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},2546:function(t,n,e){var r=e(1612),o=e(4516),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},4516:function(t,n,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=function(t){return t&&t.Math==Math&&t};t.exports=o("object"==("undefined"==typeof globalThis?"undefined":r(globalThis))&&globalThis)||o("object"==("undefined"==typeof window?"undefined":r(window))&&window)||o("object"==("undefined"==typeof self?"undefined":r(self))&&self)||o("object"==(void 0===e.g?"undefined":r(e.g))&&e.g)||function(){return this}()||Function("return this")()},4361:function(t){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},2570:function(t){t.exports={}},8970:function(t,n,e){var r=e(2546);t.exports=r("document","documentElement")},7320:function(t,n,e){var r=e(4244),o=e(3894),i=e(3791);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},4015:function(t,n,e){var r=e(3894),o=e(1030),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},1683:function(t,n,e){var r=e(4111),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},3023:function(t,n,e){var r,o,i,u=e(174),c=e(4516),f=e(3196),a=e(1831),s=e(4361),p=e(4111),l=e(6894),v=e(2570),y=c.WeakMap;if(u){var m=p.state||(p.state=new y),h=m.get,d=m.has,b=m.set;r=function(t,n){return n.facade=t,b.call(m,t,n),n},o=function(t){return h.call(m,t)||{}},i=function(t){return d.call(m,t)}}else{var S=l("state");v[S]=!0,r=function(t,n){return n.facade=t,a(t,S,n),n},o=function(t){return s(t,S)?t[S]:{}},i=function(t){return s(t,S)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},5588:function(t,n,e){var r=e(1030);t.exports=Array.isArray||function(t){return"Array"==r(t)}},2615:function(t,n,e){var r=e(3894),o=/#|\.prototype\./,i=function(t,n){var e=c[u(t)];return e==a||e!=f&&("function"==typeof n?r(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},3196:function(t){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(t){return"object"===n(t)?null!==t:"function"==typeof t}},3310:function(t){t.exports=!1},7449:function(t,n,e){var r=e(3894);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},174:function(t,n,e){var r=e(4516),o=e(1683),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},4714:function(t,n,e){var r,o=e(6302),i=e(8068),u=e(2507),c=e(2570),f=e(8970),a=e(3791),s=e(6894),p=s("IE_PROTO"),l=function(){},v=function(t){return"<script>"+t+"</"+"script>"},y=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;y=r?function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n}(r):((n=a("iframe")).style.display="none",f.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var e=u.length;e--;)delete y.prototype[u[e]];return y()};c[p]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(l.prototype=o(t),e=new l,l.prototype=null,e[p]=t):e=y(),void 0===n?e:i(e,n)}},8068:function(t,n,e){var r=e(4244),o=e(6337),i=e(6302),u=e(8201);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=u(n),c=r.length,f=0;c>f;)o.f(t,e=r[f++],n[e]);return t}},6337:function(t,n,e){var r=e(4244),o=e(7320),i=e(6302),u=e(9155),c=Object.defineProperty;n.f=r?c:function(t,n,e){if(i(t),n=u(n,!0),i(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},7872:function(t,n,e){var r=e(4244),o=e(2028),i=e(654),u=e(4721),c=e(9155),f=e(4361),a=e(7320),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=u(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},1019:function(t,n,e){var r=e(6406),o=e(2507).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},8586:function(t,n){n.f=Object.getOwnPropertySymbols},6406:function(t,n,e){var r=e(4361),o=e(4721),i=e(452).indexOf,u=e(2570);t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)!r(u,e)&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(a,e)||a.push(e));return a}},8201:function(t,n,e){var r=e(6406),o=e(2507);t.exports=Object.keys||function(t){return r(t,o)}},2028:function(t,n){"use strict";var e={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!e.call({1:2},1);n.f=o?function(t){var n=r(this,t);return!!n&&n.enumerable}:e},6660:function(t,n,e){var r=e(2546),o=e(1019),i=e(8586),u=e(6302);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(u(t)),e=i.f;return e?n.concat(e(t)):n}},1612:function(t,n,e){var r=e(4516);t.exports=r},8875:function(t,n,e){var r=e(4516),o=e(1831),i=e(4361),u=e(8870),c=e(1683),f=e(3023),a=f.get,s=f.enforce,p=String(String).split("String");(t.exports=function(t,n,e,c){var f,a=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),(f=s(e)).source||(f.source=p.join("string"==typeof n?n:""))),t!==r?(a?!v&&t[n]&&(l=!0):delete t[n],l?t[n]=e:o(t,n,e)):l?t[n]=e:u(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||c(this)}))},2191:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},8870:function(t,n,e){var r=e(4516),o=e(1831);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},6894:function(t,n,e){var r=e(8365),o=e(7025),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},4111:function(t,n,e){var r=e(4516),o=e(8870),i="__core-js_shared__",u=r[i]||o(i,{});t.exports=u},8365:function(t,n,e){var r=e(3310),o=e(4111);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.8.3",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},9625:function(t,n,e){var r=e(4001),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},4721:function(t,n,e){var r=e(4015),o=e(2191);t.exports=function(t){return r(o(t))}},4001:function(t){var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:n)(t)}},6674:function(t,n,e){var r=e(4001),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7706:function(t,n,e){var r=e(2191);t.exports=function(t){return Object(r(t))}},9155:function(t,n,e){var r=e(3196);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},7025:function(t){var n=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+e).toString(36)}},8477:function(t,n,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=e(7449);t.exports=o&&!Symbol.sham&&"symbol"==r(Symbol.iterator)},1398:function(t,n,e){var r=e(4516),o=e(8365),i=e(4361),u=e(7025),c=e(7449),f=e(8477),a=o("wks"),s=r.Symbol,p=f?s:s&&s.withoutSetter||u;t.exports=function(t){return i(a,t)||(c&&i(s,t)?a[t]=s[t]:a[t]=p("Symbol."+t)),a[t]}},3949:function(t,n,e){"use strict";var r=e(7330),o=e(452).includes,i=e(6278);r({target:"Array",proto:!0,forced:!e(2114)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},3923:function(t,n,e){var r=e(4516),o=e(3464),i=e(9682),u=e(1831);for(var c in o){var f=r[c],a=f&&f.prototype;if(a&&a.forEach!==i)try{u(a,"forEach",i)}catch(t){a.forEach=i}}},1326:function(t,n,e){e(3923);var r=e(9682);t.exports=r}},n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{}};return t[r](o,o.exports,e),o.exports}return e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e(1719)}().default}));