"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31707],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=l(r),f=o,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||i;return r?n.createElement(m,u(u({ref:t},p),{},{components:r})):n.createElement(m,u({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,u=new Array(i);u[0]=s;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var l=2;l<i;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},70655:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},metadata:function(){return a},toc:function(){return c},default:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),u={title:"Developer Guide"},a={unversionedId:"developer-guide",id:"developer-guide",isDocsHomePage:!1,title:"Developer Guide",description:"\x3c!--",source:"@site/docs/apisix-go-plugin-runner/developer-guide.md",sourceDirName:".",slug:"/developer-guide",permalink:"/docs/go-plugin-runner/next/developer-guide",editUrl:"https://github.com/apache/apisix-go-plugin-runner/edit/master/docs/en/latest/developer-guide.md",version:"current",frontMatter:{title:"Developer Guide"},sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/go-plugin-runner/next/getting-started"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Build",id:"build",children:[]},{value:"Test",id:"test",children:[]}],l={toc:c};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This documentation explains how to develop this project."),(0,i.kt)("h2",{id:"build"},"Build"),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"make build"),". Then you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"APISIX_LISTEN_ADDRESS=unix:/tmp/runner.sock ./go-runner run"),"\nto start it."),(0,i.kt)("h2",{id:"test"},"Test"),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"make test"),"."))}p.isMDXComponent=!0}}]);