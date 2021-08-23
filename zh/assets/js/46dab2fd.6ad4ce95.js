(self.webpackChunk=self.webpackChunk||[]).push([[74814],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=p(r),f=n,d=h["".concat(c,".").concat(f)]||h[f]||u[f]||o;return r?a.createElement(d,i(i({ref:t},l),{},{components:r})):a.createElement(d,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},42746:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var a=r(22122),n=r(19756),o=(r(67294),r(3905)),i={title:"Release Apache APISIX Dashboard 2.6.1",keywords:["APISIX","api6","API gateway","API hosting","Security","Apache APISIX","apisix gateway","Ingress Controller","Service Mesh","Microservices","Release Notes","Apache APISIX Dashboard 2.6.1","APISIX Dashboard 2.6.1"],description:"Apache APISIX Dashboard 2.6.1 is released on May 27th, 2021. This article is the release notes for Apache APISIX Dashboard 2.6.1, it contains bug fixes information of Apache APISIX Dashboard 2.6.1."},s={permalink:"/zh/events/2021/05/27/release-apache-apisix-dashboard-2.6.1",source:"@site/events/2021-05-27-release-apache-apisix-dashboard-2.6.1.md",title:"Release Apache APISIX Dashboard 2.6.1",description:"Apache APISIX Dashboard 2.6.1 is released on May 27th, 2021. This article is the release notes for Apache APISIX Dashboard 2.6.1, it contains bug fixes information of Apache APISIX Dashboard 2.6.1.",date:"2021-05-27T00:00:00.000Z",formattedDate:"2021\u5e745\u670827\u65e5",tags:[],readingTime:.23,truncated:!0,prevItem:{title:"Release Apache APISIX Dashboard 2.7",permalink:"/zh/events/2021/06/15/release-apache-apisix-dashboard-2.7"},nextItem:{title:"Release Apache APISIX 2.6",permalink:"/zh/events/2021/05/24/release-apache-apisix-2.6"}},c=[{value:"Bugfix",id:"bugfix",children:[]}],p={toc:c};function l(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This release mainly contains bugfixes."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Manager API")," 2.6.1 should be used with ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/downloads/"},"Apache APISIX 2.5"),". It is not recommended to use with other Apache APISIX versions."),(0,o.kt)("h3",{id:"bugfix"},"Bugfix"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fix: use remote address instead of client ip ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1831"},"#1831")),(0,o.kt)("li",{parentName:"ul"},"Fix: turn off online debug ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1903"},"#1903"))))}l.isMDXComponent=!0}}]);