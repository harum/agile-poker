!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js")})},function(e,t,n){var o=n(2),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});e.exports=a},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],s=t.base?i[0]+t.base:i[0],u=n[s]||0,d="".concat(s," ").concat(u);n[s]=u+1;var l=c(d),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(f)):a.push({identifier:d,updater:b(f,t),references:1}),o.push(d)}return o}function u(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var v=null,m=0;function b(e,t){var n,o,r;if(t.singleton){var i=m++;n=v||(v=u(t)),o=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0)}else n=u(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=c(n[o]);a[r].references--}for(var i=s(e,t),u=0;u<n.length;u++){var d=c(n[u]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=i}}}},function(e,t,n){(t=n(4)(!1)).push([e.i,"",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var a,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";n.r(t);n(0);const o={infinity:n.p+"5e4535b82ae57ca49f883e6cef214fb2.png",question:n.p+"aa301c22e5dcf98134fe3895e3cd0b4b.png",break:n.p+"5918da2639ecc6d93808d8bef6824804.png"};let r="";function i(e){!function(e){e.addEventListener("click",(function(e){e.stopPropagation();const t=e.target.closest(".js-card");t&&(t.className.includes("c-card--full")?(r&&(r="",window.history.back()),t.setAttribute("style",`\n        left: ${t.dataset.left}px;\n        top: ${t.dataset.top}px;\n        position: fixed;\n      `),t.classList.remove("c-card--full"),window.setTimeout((function(){t.setAttribute("style","")}),500)):(r=t.dataset.value,window.history.pushState({option:r},document.title,`?option=${r}`),t.setAttribute("data-top",t.offsetTop),t.setAttribute("data-left",t.offsetLeft),t.setAttribute("style",`\n        left: ${t.dataset.left}px;\n        top: ${t.dataset.top}px;\n        position: fixed;\n      `),window.setTimeout((function(){t.classList.add("c-card--full"),t.setAttribute("style","\n          left: 0px;\n          top: 0px;\n          position: absolute\n        ")}),200)))}))}(e),window.onpopstate=function(){if(r){const e=r;r="",document.querySelector(`[data-value="${e}"]`).click()}}}var a=function(e=[]){const t=document.createElement("div");return t.classList.add("c-cards"),i(t),e.forEach((function(e){const n=document.createElement("div");n.classList.add("c-cards__item"),n.appendChild(function(e){const t=document.createElement("div");t.classList.add("c-card","js-card"),t.setAttribute("data-value",e);const n=document.createElement("div");if(n.classList.add("c-card__content"),["question","infinity","break"].includes(e)){const t=new Image;t.src=o[e],t.classList.add("c-card__icon"),n.appendChild(t)}else{const t=document.createElement("div");t.classList.add("c-card__text"),t.textContent=e,n.appendChild(t)}return t.appendChild(n),t}(e)),t.appendChild(n)})),t};const c=["0","0.5","1","2","3","5","8","13","20","40","100","question","infinity","break"];n(1);document.getElementById("app").appendChild(a(c))}]);
//# sourceMappingURL=index-9c0de6510096036f0d94.js.map