(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>u});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),d=t.n(c),s=new URL(t(431),t.b),l=i()(r()),p=d()(s);l.push([n.id,`* {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n}\nh1 {\n  font-size: 1.8rem;\n}\nh2 {\n  font-size: 1.4rem;\n}\n#content {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\nheader {\n  background-color: rgb(34, 34, 34);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  padding: 2rem;\n\n  color: white;\n}\n.resto-name > h1 {\n  font-size: 4rem;\n  padding: 0px;\n  margin: 0px;\n}\n\nnav {\n  display: flex;\n  gap: 2rem;\n}\n\n/* TABS */\nul {\n  list-style: none;\n}\nli {\n  display: inline-block;\n  position: relative;\n  margin-right: 10px;\n  padding: 10px;\n}\nli a {\n  color: #d6d1e1;\n  font-size: 24px;\n  text-decoration: none;\n  transition: color 0.8s;\n}\nli::after {\n  content: "";\n  background-color: #fff;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 0;\n  height: 2px;\n  transition: color 3s, width 0.5s;\n}\nli a:hover {\n  color: #ba55ff;\n}\nli:hover::after {\n  width: 100%;\n  background-color: #ba55ff;\n}\n\n/* --------------------------- MAIN */\n\nmain {\n  background-color: rgb(34, 34, 34);\n  min-height: 450px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\nmain > h1 {\n  padding-top: 1rem;\n  color: white;\n  font-size: 2.5rem;\n}\n\n/*  HOME */\n\n.main-window {\n  background-color: #737374;\n  width: 600px;\n  min-height: 500px;\n  border-radius: 25px;\n  margin: 3rem;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.main-window > h1 {\n  width: 300px;\n}\n\n.logo {\n  background: url(${p});\n  background-position: center;\n  background-size: 103%;\n  height: 300px;\n  width: 300px;\n  border-radius: 400px;\n}\n\n/* MENU */\n\n.menu-window {\n  background-color: #737374;\n  width: 600px;\n  min-height: 500px;\n  border-radius: 25px;\n  margin: 3rem;\n  padding: 2rem;\n\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-items: center;\n  gap: 2rem;\n}\n.menu-item {\n  background-color: #333333c7;\n  color: white;\n  width: 20rem;\n  height: 30rem;\n  padding: 3rem;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n}\n\n.image-holder {\n  height: 13rem;\n  width: 13rem;\n\n  display: inline-block;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.image-holder > img {\n  height: 134%;\n  width: 134%;\n  object-fit: cover;\n}\n`,""]);const u=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],s=o.base?d[0]+o.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=o(n,r),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},431:(n,e,t)=>{n.exports=t.p+"9fbd533c0ec40275361c.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,t(431);const h=function(){const n=document.querySelector("main");n.innerHTML="";const e=document.createElement("div");e.classList.add("main-window");const t=document.createElement("div");return t.classList.add("logo"),e.append(t),n.append(e),n},g=t.p+"03f30c03d0fbe17f01af.jpg",v=t.p+"b8cbe7a41248c77f5eb9.jpg",b=t.p+"23e659da5eec486475ee.jpg";function x(n,e,t){const o=document.createElement("div");o.classList.add("menu-item");const r=document.createElement("h2");r.textContent=n,o.append(r);const a=document.createElement("div");a.classList.add("image-holder"),o.append(a);const i=new Image;i.src=e,a.append(i);const c=document.createElement("p");return c.textContent=t,o.append(c),o}function y(){const n=document.createElement("header"),e=document.createElement("div");e.classList.add("resto-name");const t=document.createElement("h1");return t.textContent="CookieJari",e.appendChild(t),n.appendChild(e),n.appendChild(function(){const n=document.createElement("nav"),e=document.createElement("li");n.appendChild(e);const t=document.createElement("div");e.appendChild(t),t.classList.add("home"),e.appendChild(t);const o=document.createElement("a");o.textContent="Home",o.addEventListener("click",(n=>{console.log("home"),h()})),t.appendChild(o);const r=document.createElement("li");n.appendChild(r);const a=document.createElement("div");r.appendChild(a),a.classList.add("menu"),r.appendChild(a);const i=document.createElement("a");i.textContent="Menu",i.addEventListener("click",(n=>{console.log("Menu"),function(){const n=document.querySelector("main");n.innerHTML="";const e=document.createElement("h1");e.textContent="Menu",n.append(e),n.append(function(){const n=document.createElement("div");return n.classList.add("menu-window"),n.append(x("Choco-Chip Cookies",g,"Eat our Oatmeal Chocolate Chip Cookies now 😡")),n.append(x("Crinkles",v,"Our cookies are better than ADB 🏦. You should eat it now 👍")),n.append(x("Banana-Cake",b,"Banana Cake is like a bread but its banana cake. It has wallnuts 🧱🥜")),n}())}()})),a.appendChild(i);const c=document.createElement("li");n.appendChild(c);const d=document.createElement("div");c.appendChild(d),d.classList.add("contact"),c.appendChild(d);const s=document.createElement("a");return s.textContent="Contact",s.addEventListener("click",(n=>{console.log("contact"),function(){const n=document.querySelector("main");n.innerHTML="";const e=document.createElement("h1");e.textContent="Contact",n.append(e),n.append(function(){const n=document.createElement("div");n.classList.add("main-window");const e=document.createElement("h1");e.textContent="☎️ 0955 456 7123",n.append(e);const t=document.createElement("h1");return t.textContent="📧 cookies@jari.com",n.append(t),n}())}()})),d.appendChild(s),n}()),n}document.body.appendChild(function(){const n=document.getElementById("content");return n.append(y()),n.append(document.createElement("main")),h(),n}())})()})();