"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59286],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,h=m["".concat(p,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(h,c(c({ref:t},l),{},{components:r})):n.createElement(h,c({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79635:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p},default:function(){return l}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c={title:"\u4ece\u65b0\u624b\u6751\u51fa\u6765\uff0c\u6211\u5728 Apache APISIX \u793e\u533a\u53d1\u51fa\u4e86\u7b2c\u4e00\u4e2a PR",author:"Peter Yang",authorURL:"https://github.com/Yangxiamao",authorImageURL:"https://avatars.githubusercontent.com/u/47442074?v=4",keywords:["API \u7f51\u5173","APISIX","Apache APISIX","\u5f00\u6e90\u793e\u533a","\u5f00\u6e90\u9879\u76ee"],description:"\u8fd9\u7bc7\u91c7\u8bbf\u7a3f\u8bb2\u8ff0\u4e86\u5c60\u6b63\u677e\u4ece\u5f00\u6e90\u793e\u533a\u5c0f\u767d\u6210\u957f\u4e3a Apache \u9876\u7ea7\u5f00\u6e90\u9879\u76ee APISIX committer \u7684\u5386\u7a0b\u3002\u5c60\u6b63\u677e\uff08GitHub ID\uff1atzssangglass\uff09\u56e0\u6df1\u5ea6\u53c2\u4e0e Apache APISIX \u7684\u5f00\u53d1\uff0c\u5728\u793e\u533a\u4e2d\u8d21\u732e\u5f88\u591a\uff0c2021 \u5e74 7 \u6708 22 \u65e5\u88ab\u63a8\u9009\u4e3a Apache APISIX committer\u3002",tags:["technology"]},i={permalink:"/zh/blog/2021/08/11/interview-TuZhengsong",source:"@site/blog/2021-08-11-interview-TuZhengsong.md",title:"\u4ece\u65b0\u624b\u6751\u51fa\u6765\uff0c\u6211\u5728 Apache APISIX \u793e\u533a\u53d1\u51fa\u4e86\u7b2c\u4e00\u4e2a PR",description:"\u8fd9\u7bc7\u91c7\u8bbf\u7a3f\u8bb2\u8ff0\u4e86\u5c60\u6b63\u677e\u4ece\u5f00\u6e90\u793e\u533a\u5c0f\u767d\u6210\u957f\u4e3a Apache \u9876\u7ea7\u5f00\u6e90\u9879\u76ee APISIX committer \u7684\u5386\u7a0b\u3002\u5c60\u6b63\u677e\uff08GitHub ID\uff1atzssangglass\uff09\u56e0\u6df1\u5ea6\u53c2\u4e0e Apache APISIX \u7684\u5f00\u53d1\uff0c\u5728\u793e\u533a\u4e2d\u8d21\u732e\u5f88\u591a\uff0c2021 \u5e74 7 \u6708 22 \u65e5\u88ab\u63a8\u9009\u4e3a Apache APISIX committer\u3002",date:"2021-08-11T00:00:00.000Z",formattedDate:"2021\u5e748\u670811\u65e5",tags:[{label:"technology",permalink:"/zh/blog/tags/technology"}],readingTime:1.235,truncated:!0,prevItem:{title:"Chaos Mesh Helps Apache APISIX Improve System Stability",permalink:"/zh/blog/2021/08/12/Chaos-Mesh-Helps-Apache-APISIX-Improve-System-Stability"},nextItem:{title:"Apache APISIX \u5728\u79fb\u52a8\u4e91\u7684\u5e94\u7528",permalink:"/zh/blog/2021/08/09/Apache-APISIX-in-China-Mobile-Cloud"}},p=[],u={toc:p};function l(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}))}l.isMDXComponent=!0}}]);