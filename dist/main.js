(()=>{"use strict";var n,e,t,r,o,i,a,c,s,l,u,p,d,f,h={426:(n,e,t)=>{t.d(e,{Z:()=>d});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),s=t.n(c),l=new URL(t(431),t.b),u=a()(o()),p=s()(l);u.push([n.id,`* {\n  box-sizing: border-box;\n}\n#content {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\nheader {\n  background-color: rgb(34, 34, 34);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  padding: 2rem;\n\n  color: white;\n}\n.resto-name > h1 {\n  font-size: 4rem;\n  padding: 0px;\n  margin: 0px;\n}\n\nnav {\n  display: flex;\n  gap: 2rem;\n}\n\n/* TABS */\nul {\n  list-style: none;\n}\nli {\n  display: inline-block;\n  position: relative;\n  margin-right: 10px;\n  padding: 10px;\n}\nli a {\n  color: #d6d1e1;\n  font-size: 24px;\n  text-decoration: none;\n  transition: color 0.8s;\n}\nli::after {\n  content: "";\n  background-color: #fff;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 0;\n  height: 2px;\n  transition: color 3s, width 0.5s;\n}\nli a:hover {\n  color: #ba55ff;\n}\nli:hover::after {\n  width: 100%;\n  background-color: #ba55ff;\n}\n\n/* --------------------------- MAIN */\n\nmain {\n  background-color: rgb(34, 34, 34);\n  min-height: 450px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.main-window {\n  background-color: #737374;\n  width: 600px;\n  min-height: 500px;\n  border-radius: 25px;\n  margin: 3rem;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.logo {\n  background: url(${p});\n  background-position: center;\n  background-size: 103%;\n  height: 300px;\n  width: 300px;\n  border-radius: 400px;\n}\n`,""]);const d=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],u=i[l]||0,p="".concat(l," ").concat(u);i[l]=u+1;var d=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),l=0;l<i.length;l++){var u=t(i[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},431:(n,e,t)=>{n.exports=t.p+"9fbd533c0ec40275361c.jpg"}},m={};function g(n){var e=m[n];if(void 0!==e)return e.exports;var t=m[n]={id:n,exports:{}};return h[n](t,t.exports,g),t.exports}g.m=h,g.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return g.d(e,{a:e}),e},g.d=(n,e)=>{for(var t in e)g.o(e,t)&&!g.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),g.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;g.g.importScripts&&(n=g.g.location+"");var e=g.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!n;)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=n})(),g.b=document.baseURI||self.location.href,g.nc=void 0,n=g(379),e=g.n(n),t=g(795),r=g.n(t),o=g(569),i=g.n(o),a=g(565),c=g.n(a),s=g(216),l=g.n(s),u=g(589),p=g.n(u),d=g(426),(f={}).styleTagTransform=p(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals,g(431),document.body.appendChild(document.getElementById("content"))})();