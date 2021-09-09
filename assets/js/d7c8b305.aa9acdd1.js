"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35153],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(r),h=n,d=m["".concat(o,".").concat(h)]||m[h]||c[h]||i;return r?a.createElement(d,l(l({ref:t},s),{},{components:r})):a.createElement(d,l({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85103:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return o},default:function(){return s}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),l={title:"Release Apache APISIX 0.8",tags:["APISIX"]},p={permalink:"/releases/2019/09/29/release-apache-apisix-0.8",source:"@site/releases/2019-9-29-release-apache-apisix-0.8.md",title:"Release Apache APISIX 0.8",description:"Released on 2019/09/30",date:"2019-09-29T00:00:00.000Z",formattedDate:"September 29, 2019",tags:[{label:"APISIX",permalink:"/releases/tags/apisix"}],readingTime:1.025,truncated:!1,prevItem:{title:"Release Apache APISIX 0.9",permalink:"/releases/2019/11/15/release-apache-apisix-0.9"},nextItem:{title:"Release Apache APISIX 0.7",permalink:"/releases/2019/09/06/release-apache-apisix-0.7"}},o=[{value:"Core",id:"core",children:[]},{value:"Plugins",id:"plugins",children:[]},{value:"ARM",id:"arm",children:[]},{value:"lua-resty-*",id:"lua-resty-",children:[]},{value:"Bugfix",id:"bugfix",children:[]},{value:"Dependencies",id:"dependencies",children:[]}],u={toc:o};function s(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Released on 2019/09/30")),(0,i.kt)("p",null,"This release brings many new features, such as stream proxy, support MQTT protocol proxy,\nand support for ARM platform, and proxy rewrite plugin."),(0,i.kt)("h3",{id:"core"},"Core"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/apache/incubator-apisix/blob/master/docs/en/latest/stand-alone-cn.md"},"support stand-alone mode")),": using yaml to update configurations of APISIX, more friendly to kubernetes. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/464"},"#464")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/apache/incubator-apisix/blob/master/docs/en/latest/stream-proxy.md"},"support stream proxy")),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/513"},"#513")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 support consumer bind plugins. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/544"},"#544")),(0,i.kt)("li",{parentName:"ul"},"support domain name in upstream, not only IP. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/522"},"#522")),(0,i.kt)("li",{parentName:"ul"},"ignored upstream node when it's weight is 0. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/536"},"#536"))),(0,i.kt)("h3",{id:"plugins"},"Plugins"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/apache/incubator-apisix/blob/master/docs/en/latest/plugins/mqtt-proxy.md"},"MQTT Proxy")),": support to load balance MQTT by ",(0,i.kt)("inlineCode",{parentName:"li"},"client_id"),", both support MQTT 3.1 and 5.0. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/513"},"#513")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/blob/master/docs/en/latest/plugins/proxy-rewrite.md"},"proxy-rewrite"),": rewrite uri,\nschema, host for upstream. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/594"},"#594"))),(0,i.kt)("h3",{id:"arm"},"ARM"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 ",(0,i.kt)("strong",{parentName:"li"},"APISIX can run normally under Ubuntu 18.04 of ARM64 architecture"),", so you can use APISIX as IoT gateway with MQTT plugin.")),(0,i.kt)("h3",{id:"lua-resty-"},"lua-resty-*"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"lua-resty-ipmatcher",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"support IPv6"),(0,i.kt)("li",{parentName:"ul"},"IP white/black list, route."))),(0,i.kt)("li",{parentName:"ul"},"lua-resty-radixtree",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"allow to specify multiple host, remote_addr and uri."),(0,i.kt)("li",{parentName:"ul"},"allow to define user-function to filter request."),(0,i.kt)("li",{parentName:"ul"},"use ",(0,i.kt)("inlineCode",{parentName:"li"},"lua-resty-ipmatcher")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"lua-resty-iputils"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"lua-resty-ipmatcher")," matches fast and support IPv6.")))),(0,i.kt)("h3",{id:"bugfix"},"Bugfix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"healthcheck: the checker name is wrong if APISIX works under multiple processes. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/issues/568"},"#568"))),(0,i.kt)("h3",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"removed ",(0,i.kt)("inlineCode",{parentName:"li"},"lua-tinyyaml")," from source code base, and install through Luarocks.")))}s.isMDXComponent=!0}}]);