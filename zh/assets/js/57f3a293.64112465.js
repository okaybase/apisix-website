"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53944],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,h=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(h,c(c({ref:t},l),{},{components:r})):n.createElement(h,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},14295:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return l}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c={title:"\u4f7f\u7528 Apache APISIX \u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u53ca\u8fdb\u9636\u73a9\u6cd5",author:"\u6731\u6b23\u6b23",authorURL:"https://github.com/starsz",authorImageURL:"https://avatars.githubusercontent.com/u/25628854?v=4",keywords:["APISIX","\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u7684\u8eab\u4efd\u8ba4\u8bc1\u529f\u80fd\uff0c\u4ece\u91cd\u8981\u6027\u548c\u73a9\u6cd5\u4f7f\u7528\u4e0a\u8fdb\u884c\u4e86\u8be6\u7ec6\u4ecb\u7ecd\u548c\u7ec6\u8282\u4f7f\u7528",tags:["technology"]},i={permalink:"/zh/blog/2021/09/07/how-to-use-apisix-auth",source:"@site/blog/2021-09-07-how-to-use-apisix-auth.md",title:"\u4f7f\u7528 Apache APISIX \u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u53ca\u8fdb\u9636\u73a9\u6cd5",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u7684\u8eab\u4efd\u8ba4\u8bc1\u529f\u80fd\uff0c\u4ece\u91cd\u8981\u6027\u548c\u73a9\u6cd5\u4f7f\u7528\u4e0a\u8fdb\u884c\u4e86\u8be6\u7ec6\u4ecb\u7ecd\u548c\u7ec6\u8282\u4f7f\u7528",date:"2021-09-07T00:00:00.000Z",formattedDate:"2021\u5e749\u67087\u65e5",tags:[{label:"technology",permalink:"/zh/blog/tags/technology"}],readingTime:1.565,truncated:!0,nextItem:{title:"\u57fa\u4e8e Apache APISIX\uff0c\u7231\u5947\u827a API \u7f51\u5173\u7684\u66f4\u65b0\u4e0e\u843d\u5730\u5b9e\u8df5",permalink:"/zh/blog/2021/09/07/iQIYI-usercase"}},u=[],p={toc:u};function l(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/starsz"},"@\u6731\u6b23\u6b23")," \uff0cApache APISIX \u9879\u76ee committer\uff0c\u5f00\u6e90\u7231\u597d\u8005\uff0c\u4e5f\u662f\u4e00\u4e2a Golang \u5f00\u53d1\u8005\u3002\u73b0\u5728\u4ed6\u6b63\u5728\u4e3a Apache APISIX \u7684 control plane \u8d21\u732e\u4ee3\u7801\u5e76\u6267\u884c code review\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u4ed6\u5728 Apache APISIX \u793e\u533a\u4e2d\u975e\u5e38\u6d3b\u8dc3\uff0c\u4e50\u4e8e\u56de\u7b54\u793e\u533a\u5185\u7684\u5404\u79cd\u95ee\u9898\u3002")))}l.isMDXComponent=!0}}]);