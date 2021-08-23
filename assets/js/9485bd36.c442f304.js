(self.webpackChunk=self.webpackChunk||[]).push([[30385],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),l=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},c=function(e){var a=l(e.components);return r.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(t),d=i,m=h["".concat(o,".").concat(d)]||h[d]||u[d]||n;return t?r.createElement(m,p(p({ref:a},c),{},{components:t})):r.createElement(m,p({ref:a},c))}));function d(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=t.length,p=new Array(n);p[0]=h;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,p[1]=s;for(var l=2;l<n;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},64607:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return o},default:function(){return c}});var r=t(22122),i=t(19756),n=(t(67294),t(3905)),p={title:"Release Apache APISIX Dashboard 2.7",keywords:["APISIX","api6","API gateway","API hosting","Security","Apache APISIX","apisix gateway","Ingress Controller","Service Mesh","Microservices","Release Notes","Apache APISIX Dashboard 2.7","APISIX Dashboard 2.7"],description:"Apache APISIX Dashboard 2.7 is released on June 15th, 2021. This article is the release notes for Apache APISIX Dashboard 2.7, it contains core features updates, bug fixes, and test cases updates information of Apache APISIX Dashboard 2.7."},s={permalink:"/events/2021/06/15/release-apache-apisix-dashboard-2.7",source:"@site/events/2021-06-15-release-apache-apisix-dashboard-2.7.md",title:"Release Apache APISIX Dashboard 2.7",description:"Apache APISIX Dashboard 2.7 is released on June 15th, 2021. This article is the release notes for Apache APISIX Dashboard 2.7, it contains core features updates, bug fixes, and test cases updates information of Apache APISIX Dashboard 2.7.",date:"2021-06-15T00:00:00.000Z",formattedDate:"June 15, 2021",tags:[],readingTime:1.095,truncated:!0,prevItem:{title:"Release Apache APISIX 2.7",permalink:"/events/2021/06/25/release-apache-apisix-2.7"},nextItem:{title:"Release Apache APISIX Dashboard 2.6.1",permalink:"/events/2021/05/27/release-apache-apisix-dashboard-2.6.1"}},o=[{value:"Core",id:"core",children:[]},{value:"Bugfix",id:"bugfix",children:[]},{value:"Test Case",id:"test-case",children:[]}],l={toc:o};function c(e){var a=e.components,t=(0,i.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,r.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This release mainly improves basic features, bugfix and adds test cases."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Manager API")," 2.7 should be used with ",(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/downloads/"},"Apache APISIX 2.6"),". It is not recommended to use with other Apache APISIX versions."),(0,n.kt)("h3",{id:"core"},"Core"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Feat: support HTTPS for Manager API ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1824"},"#1824")),(0,n.kt)("li",{parentName:"ul"},"Feat: run manager-api as an OS agnostic service ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1667"},"#1667")),(0,n.kt)("li",{parentName:"ul"},"Feat: refactor Plugin Orchestration ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1813"},"#1813")),(0,n.kt)("li",{parentName:"ul"},"Feat: add the service page upstream select option ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1633"},"#1633")),(0,n.kt)("li",{parentName:"ul"},"Feat: improve the Duplicate Route feature ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1833"},"#1833")),(0,n.kt)("li",{parentName:"ul"},"Feat: add api of config migrate, export and import ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1893"},"#1893"))),(0,n.kt)("h3",{id:"bugfix"},"Bugfix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fix: can not configure upstream with no nodes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1812"},"#1812")),(0,n.kt)("li",{parentName:"ul"},"Fix: add missing label in nodes component ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1823"},"#1823")),(0,n.kt)("li",{parentName:"ul"},"Fix: when create the upstream, some properties can still be edited on the preview page bug ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1828"},"#1828")),(0,n.kt)("li",{parentName:"ul"},"Fix: default cors plugin formdata validation error ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1855"},"#1855")),(0,n.kt)("li",{parentName:"ul"},"Fix: generate a uid when post a route without id ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1883"},"#1883")),(0,n.kt)("li",{parentName:"ul"},"Fix: route page Portable ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1887"},"#1887")),(0,n.kt)("li",{parentName:"ul"},"Fix: invalid import issues ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1899"},"#1899")),(0,n.kt)("li",{parentName:"ul"},"Fix: efficient error handling in manager-api including graceful shutdown, self contained methods. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1814"},"#1814")),(0,n.kt)("li",{parentName:"ul"},"Fix: regex & omit vars when no value ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1921"},"#1921"))),(0,n.kt)("h3",{id:"test-case"},"Test Case"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Test: fix unstable FE E2E test case ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1826"},"#1826")),(0,n.kt)("li",{parentName:"ul"},"CI: fix gitleaks not allowed running ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1897"},"#1897")),(0,n.kt)("li",{parentName:"ul"},"Test: refactor FE E2E test case (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1844"},"#1844")," to ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1878"},"#1878")," and a series of PRs)")))}c.isMDXComponent=!0}}]);