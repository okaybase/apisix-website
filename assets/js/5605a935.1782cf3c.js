"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13526],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=u(a),m=n,d=h["".concat(o,".").concat(m)]||h[m]||s[m]||i;return a?r.createElement(d,l(l({ref:t},c),{},{components:a})):r.createElement(d,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},29084:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return o},default:function(){return c}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l={title:"Release Apache APISIX 2.1",tags:["APISIX"]},p={permalink:"/releases/2020/12/01/release-apache-apisix-2.1",source:"@site/releases/2020-12-1-release-apache-apisix-2.1.md",title:"Release Apache APISIX 2.1",description:"Core",date:"2020-12-01T00:00:00.000Z",formattedDate:"December 1, 2020",tags:[{label:"APISIX",permalink:"/releases/tags/apisix"}],readingTime:1.3,truncated:!1,prevItem:{title:"Release Apache APISIX Dashboard 2.2",permalink:"/releases/2020/12/16/release-apache-apisix-dashboard-2.2"},nextItem:{title:"Release Apache APISIX 2.0",permalink:"/releases/2020/10/28/release-apache-apisix-2.0"}},o=[{value:"Core",id:"core",children:[]},{value:"Plugin",id:"plugin",children:[]},{value:"Bugfix",id:"bugfix",children:[]},{value:"Not downward compatible features in future versions",id:"not-downward-compatible-features-in-future-versions",children:[]}],u={toc:o};function c(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"core"},"Core"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 ",(0,i.kt)("strong",{parentName:"li"},"support ENV variable in configuration.")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2743"},"#2743")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 ",(0,i.kt)("strong",{parentName:"li"},"support TLS connection with etcd.")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2548"},"#2548")),(0,i.kt)("li",{parentName:"ul"},"generate create/update_time automatically. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2740"},"#2740")),(0,i.kt)("li",{parentName:"ul"},"add a deprecate log for enable_websocket in upstream.",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2691"},"#2691")),(0,i.kt)("li",{parentName:"ul"},"add a deprecate log for consumer id.",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2829"},"#2829")),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"X-APISIX-Upstream-Status")," header to distinguish 5xx errors from upstream or APISIX itself. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2817"},"#2817")),(0,i.kt)("li",{parentName:"ul"},"support Nginx configuration snippet. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2803"},"#2803"))),(0,i.kt)("h3",{id:"plugin"},"Plugin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 ",(0,i.kt)("strong",{parentName:"li"},"Upgrade protocol to support Apache Skywalking 8.0"),(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2389"},"#2389"),". So this version only supports skywalking 8.0 protocol. This plugin is disabled by default, you need to modify config.yaml to enable, which is not backward compatible."),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 add aliyun sls logging plugin.",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/issues/2169"},"#2169")),(0,i.kt)("li",{parentName:"ul"},"proxy-cache: the cache_zone field in the schema should be optional.",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2776"},"#2776")),(0,i.kt)("li",{parentName:"ul"},"fix: validate plugin configuration in the DP ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2856"},"#2856"))),(0,i.kt)("h3",{id:"bugfix"},"Bugfix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc1b fix(etcd): handle etcd compaction.",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2687"},"#2687")),(0,i.kt)("li",{parentName:"ul"},"fix: move ",(0,i.kt)("inlineCode",{parentName:"li"},"conf/cert")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"t/certs")," and disable ssl by default, which is not backward compatible. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2112"},"#2112")),(0,i.kt)("li",{parentName:"ul"},"fix: check decrypt key to prevent lua thread aborted ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2815"},"#2815"))),(0,i.kt)("h3",{id:"not-downward-compatible-features-in-future-versions"},"Not downward compatible features in future versions"),(0,i.kt)("p",null,"-In the 2.3 release, the consumer will only support user names and discard the id. The consumer needs to manually clean up the id field in etcd, otherwise the schema verification will report an error during use\n-In the 2.3 release, opening websocket on upstream will no longer be supported\n-In version 3.0, the data plane and control plane will be separated into two independent ports, that is, the current port 9080 will only process data plane requests, and no longer process admin API requests"),(0,i.kt)("p",null,"For more changes, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/milestone/8"},"Milestone")))}c.isMDXComponent=!0}}]);