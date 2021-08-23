(self.webpackChunk=self.webpackChunk||[]).push([[31031],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=r.createContext({}),o=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=o(a),m=i,f=h["".concat(c,".").concat(m)]||h[m]||s[m]||n;return a?r.createElement(f,p(p({ref:t},u),{},{components:a})):r.createElement(f,p({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,p=new Array(n);p[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var o=2;o<n;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},39264:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=a(22122),i=a(19756),n=(a(67294),a(3905)),p={title:"Release Apache APISIX 2.7",keywords:["APISIX","api6","API gateway","API hosting","Security","Apache APISIX","apisix gateway","Ingress Controller","Service Mesh","Microservices","Release Notes","Apache APISIX 2.7","APISIX 2.7"],description:"Apache APISIX 2.7 is released on June 25th, 2021. This article is the release notes for Apache APISIX 2.7, it contains changes, core feature updates, plugins updates and bug fixes information of Apache APISIX 2.7."},l={permalink:"/zh/events/2021/06/25/release-apache-apisix-2.7",source:"@site/events/2021-06-25-release-apache-apisix-2.7.md",title:"Release Apache APISIX 2.7",description:"Apache APISIX 2.7 is released on June 25th, 2021. This article is the release notes for Apache APISIX 2.7, it contains changes, core feature updates, plugins updates and bug fixes information of Apache APISIX 2.7.",date:"2021-06-25T00:00:00.000Z",formattedDate:"2021\u5e746\u670825\u65e5",tags:[],readingTime:.91,truncated:!0,prevItem:{title:"Apache APISIX \u793e\u533a\u5468\u62a5 \uff5c 2021\u5e748\u67089\u65e5\uff5e8\u670815\u65e5",permalink:"/zh/events/2021/08/19/weekly-report"},nextItem:{title:"Release Apache APISIX Dashboard 2.7",permalink:"/zh/events/2021/06/15/release-apache-apisix-dashboard-2.7"}},c=[{value:"Change",id:"change",children:[]},{value:"Core",id:"core",children:[]},{value:"Plugin",id:"plugin",children:[]},{value:"Bugfix",id:"bugfix",children:[]}],o={toc:c};function u(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"change"},"Change"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"change: check metadata_schema with check_schema like the other schema ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4381"},"#4381")),(0,n.kt)("li",{parentName:"ul"},"change(echo): remove odd auth_value ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4055"},"#4055")),(0,n.kt)("li",{parentName:"ul"},"fix(admin): correct the resources' count field and change its type to integer ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4385"},"#4385"))),(0,n.kt)("h3",{id:"core"},"Core"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(stream): support client certificate verification ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4445"},"#4445")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(stream): accept tls over tcp ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4409"},"#4409")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(stream): support domain in the upstream ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4386"},"#4386")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(cli): wrap nginx quit cmd ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4360"},"#4360")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: allow to set custom timeout for route ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4340"},"#4340")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: nacos discovery support group ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4325"},"#4325")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: nacos discovery support namespace ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4313"},"#4313"))),(0,n.kt)("h3",{id:"plugin"},"Plugin"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(client-control): set client_max_body_size dynamically ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4423"},"#4423")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(ext-plugin): stop the runner with SIGTERM ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4367"},"#4367")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(limit-req) support nodelay ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4395"},"#4395")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(mqtt-proxy): support domain ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4391"},"#4391")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(redirect): support appending query string ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4298"},"#4298"))),(0,n.kt)("h3",{id:"bugfix"},"Bugfix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fix: solve memory leak when the client aborts ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4405"},"#4405")),(0,n.kt)("li",{parentName:"ul"},"fix(etcd): check res.body.error before accessing the data ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4371"},"#4371")),(0,n.kt)("li",{parentName:"ul"},"fix(ext-plugin): when token is stale, refresh token and try again ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4345"},"#4345")),(0,n.kt)("li",{parentName:"ul"},"fix(ext-plugin): pass environment variables ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4349"},"#4349")),(0,n.kt)("li",{parentName:"ul"},"fix: ensure the plugin is always reloaded ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4319"},"#4319"))))}u.isMDXComponent=!0}}]);