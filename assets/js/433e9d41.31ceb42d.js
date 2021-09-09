"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63273],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return I}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),f=u(r),I=o,m=f["".concat(l,".").concat(I)]||f[I]||s[I]||a;return r?n.createElement(m,c(c({ref:t},i),{},{components:r})):n.createElement(m,c({ref:t},i))}));function I(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},66395:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return i}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c={title:"Apache APISIX \xd7 KubeSphere\uff1a\u63d0\u4f9b\u66f4\u597d\u7528\u7684\u7f51\u5173\u53ca K8S Ingress Controller",author:"Jintao Zhang",authorURL:"https://github.com/tao12345666333",authorImageURL:"https://avatars.githubusercontent.com/u/3264292?v=4",keywords:["API \u7f51\u5173","APISIX","KubeSphere","Ingress"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5728 KubeSphere \u4e2d\u4f7f\u7528 Apache APISIX \u7684\u5b98\u65b9 Helm \u4ed3\u5e93\u76f4\u63a5\u90e8\u7f72 Apache APISIX \u548c APISIX Ingress Controller \u3002\u5e76\u4e14 Apache APISIX \u53ef\u901a\u8fc7\u4f5c\u4e3a\u7f51\u5173\uff0c\u6216\u8005 APISIX Ingress Controller \u7684\u6570\u636e\u9762\u6765\u627f\u8f7d\u4e1a\u52a1\u6d41\u91cf\u3002",tags:["technology"]},p={permalink:"/blog/2021/08/31/Apache APISIX \xd7 KubeSphere-a-better-gateway-and-K8S-Ingress-Controller",source:"@site/blog/2021-08-31-Apache APISIX \xd7 KubeSphere-a-better-gateway-and-K8S-Ingress-Controller.md",title:"Apache APISIX \xd7 KubeSphere\uff1a\u63d0\u4f9b\u66f4\u597d\u7528\u7684\u7f51\u5173\u53ca K8S Ingress Controller",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5728 KubeSphere \u4e2d\u4f7f\u7528 Apache APISIX \u7684\u5b98\u65b9 Helm \u4ed3\u5e93\u76f4\u63a5\u90e8\u7f72 Apache APISIX \u548c APISIX Ingress Controller \u3002\u5e76\u4e14 Apache APISIX \u53ef\u901a\u8fc7\u4f5c\u4e3a\u7f51\u5173\uff0c\u6216\u8005 APISIX Ingress Controller \u7684\u6570\u636e\u9762\u6765\u627f\u8f7d\u4e1a\u52a1\u6d41\u91cf\u3002",date:"2021-08-31T00:00:00.000Z",formattedDate:"August 31, 2021",tags:[{label:"technology",permalink:"/blog/tags/technology"}],readingTime:3.18,truncated:!0,prevItem:{title:"Python \u52a9\u4f60\u5feb\u901f\u4e0a\u624b Apache APISIX \u63d2\u4ef6\u5f00\u53d1",permalink:"/blog/2021/09/06/python-helps-you-quickly-with-Apache-APISIX-development"},nextItem:{title:"\u793e\u533a\u4f1a\u8bae\uff5c \u5468\u4e09\u4e0b\u5348 2 \u70b9\uff0cApache APISIX Ingress \u793e\u533a\u4f1a\u8bae\u4e0e\u4f60\u4e0d\u89c1\u4e0d\u6563",permalink:"/blog/2021/08/30/Ingress-Meeting"}},l=[],u={toc:l};function i(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/tao12345666333"},"@tao12345666333"),", Apache APISIX committer from ",(0,a.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"API7.AI"))))}i.isMDXComponent=!0}}]);