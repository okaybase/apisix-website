"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89058],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||i;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},51855:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u},default:function(){return c}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l={title:"Release Apache APISIX Java Plugin Runner 0.1.0",tags:["APISIX Java Plugin Runner"]},o={permalink:"/releases/2021/07/09/release-apache-apisix-java-plugin-runner-0.1.0",source:"@site/releases/2021-7-9-release-apache-apisix-java-plugin-runner-0.1.0.md",title:"Release Apache APISIX Java Plugin Runner 0.1.0",description:"This release mainly provides basic features and adds test cases.",date:"2021-07-09T00:00:00.000Z",formattedDate:"July 9, 2021",tags:[{label:"APISIX Java Plugin Runner",permalink:"/releases/tags/apisix-java-plugin-runner"}],readingTime:.35,truncated:!1,prevItem:{title:"Release Apache APISIX Ingress Controller 1.1.0",permalink:"/releases/2021/07/14/release-apache-apisix-ingress-controller-1.1.0"},nextItem:{title:"Release Apache APISIX 2.7",permalink:"/releases/2021/06/25/release-apache-apisix-2.7"}},u=[{value:"Core",id:"core",children:[]},{value:"Bugfix",id:"bugfix",children:[]}],p={toc:u};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This release mainly provides basic features and adds test cases."),(0,i.kt)("h3",{id:"core"},"Core"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"complete project skeleton and available features."),(0,i.kt)("li",{parentName:"ul"},"complete united test with ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix"},"APISIX"),"."),(0,i.kt)("li",{parentName:"ul"},"supported debug mode.")),(0,i.kt)("h3",{id:"bugfix"},"Bugfix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"set more headers and args. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-java-plugin-runner/pull/30"},"#30")),(0,i.kt)("li",{parentName:"ul"},"ensure correct encoding and decoding when data length is greater than 256. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-java-plugin-runner/pull/32"},"#32")),(0,i.kt)("li",{parentName:"ul"},"use netty's decoder to handle TCP half-packet issues that occur in custom protocols. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-java-plugin-runner/pull/26"},"#26"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#table-of-contents"},"Back to TOC")))}c.isMDXComponent=!0}}]);