"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69761],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=i,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58442:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o={title:"Global rule"},c={unversionedId:"architecture-design/global-rule",id:"version-2.7/architecture-design/global-rule",isDocsHomePage:!1,title:"Global rule",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.7/architecture-design/global-rule.md",sourceDirName:"architecture-design",slug:"/architecture-design/global-rule",permalink:"/zh/docs/apisix/2.7/architecture-design/global-rule",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/architecture-design/global-rule.md",version:"2.7",frontMatter:{title:"Global rule"},sidebar:"version-2.7/docs",previous:{title:"Upstream",permalink:"/zh/docs/apisix/2.7/architecture-design/upstream"},next:{title:"Plugin Config",permalink:"/zh/docs/apisix/2.7/architecture-design/plugin-config"}},l=[],u={toc:l};function p(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.7/architecture-design/plugin"},"Plugin")," \u53ea\u80fd\u7ed1\u5b9a\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.7/architecture-design/service"},"Service")," \u6216\u8005 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.7/architecture-design/route"},"Route")," \u4e0a\uff0c\u5982\u679c\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u80fd\u4f5c\u7528\u4e8e\u6240\u6709\u8bf7\u6c42\u7684 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.7/architecture-design/plugin"},"Plugin")," \u8be5\u600e\u4e48\u529e\u5462\uff1f\n\u8fd9\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"GlobalRule")," \u6765\u6ce8\u518c\u4e00\u4e2a\u5168\u5c40\u7684 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.7/architecture-design/plugin"},"Plugin"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \\\n  https://{apisix_listen_address}/apisix/admin/global_rules/1 \\\n  -H \'Content-Type: application/json\' \\\n  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n  -d \'{\n        "plugins": {\n            "limit-count": {\n                "time_window": 60,\n                "policy": "local",\n                "count": 2,\n                "key": "remote_addr",\n                "rejected_code": 503\n            }\n        }\n    }\'\n')),(0,a.kt)("p",null,"\u5982\u4e0a\u6240\u6ce8\u518c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"limit-count")," \u63d2\u4ef6\u5c06\u4f1a\u4f5c\u7528\u4e8e\u6240\u6709\u7684\u8bf7\u6c42\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u63a5\u53e3\u67e5\u770b\u6240\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"GlobalRule"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://{apisix_listen_address}/apisix/admin/global_rules -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1'\n")))}p.isMDXComponent=!0}}]);