"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55018],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(r),m=n,f=h["".concat(o,".").concat(m)]||h[m]||u[m]||i;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},31314:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return o},default:function(){return c}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),l={title:"Release Apache APISIX Ingress Controller 0.5.0",tags:["APISIX Ingress Controller"]},s={permalink:"/releases/2021/04/13/release-apache-apisix-ingress-controller-0.5.0",source:"@site/releases/2021-4-13-release-apache-apisix-ingress-controller-0.5.0.md",title:"Release Apache APISIX Ingress Controller 0.5.0",description:"A lot of important features are supported in this release, it makes apisix-ingress-controller more powerful and flexible.",date:"2021-04-13T00:00:00.000Z",formattedDate:"April 13, 2021",tags:[{label:"APISIX Ingress Controller",permalink:"/releases/tags/apisix-ingress-controller"}],readingTime:1.045,truncated:!1,prevItem:{title:"Release Apache APISIX Dashboard 2.6",permalink:"/releases/2021/04/22/release-apache-apisix-dashboard-2.6"},nextItem:{title:"Release Apache APISIX 2.5",permalink:"/releases/2021/04/05/release-apache-apisix-2.5"}},o=[{value:"Core",id:"core",children:[]},{value:"Fix",id:"fix",children:[]},{value:"Test",id:"test",children:[]}],p={toc:o};function c(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A lot of important features are supported in this release, it makes apisix-ingress-controller more powerful and flexible.\nAlso, several bugs are fixed so the robustness is also enhanced."),(0,i.kt)("p",null,"We recommend you to use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases/tag/2.5"},"Apache APISIX 2.5")," with this release. Note since CRDs are updated, when\nyou upgrade your old release, ",(0,i.kt)("strong",{parentName:"p"},"manual steps are required to apply the new ApisixRoute"),". Please see the instruction ",(0,i.kt)("inlineCode",{parentName:"p"},"7")," in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/blob/master/docs/en/latest/FAQ.md"},"FAQ")," for more details."),(0,i.kt)("h2",{id:"core"},"Core"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support traffic split feature (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/308"},"#308"),")"),(0,i.kt)("li",{parentName:"ul"},"Support route match exprs (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/304"},"#304"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/306"},"#306"),")"),(0,i.kt)("li",{parentName:"ul"},"Support to configure ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Ingress")," resources in version ",(0,i.kt)("inlineCode",{parentName:"li"},"extensions/v1beta1")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/296"},"#296"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/315"},"#315"),")"),(0,i.kt)("li",{parentName:"ul"},"Add name fields when generating APISIX Routes and Upstreams (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/333"},"#333"),")"),(0,i.kt)("li",{parentName:"ul"},"Support to use remote addrs as route match conditions (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/347"},"#347"),")"),(0,i.kt)("li",{parentName:"ul"},"Schema for ApisixRoute CRD (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/345"},"#345"),")")),(0,i.kt)("h2",{id:"fix"},"Fix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sometimes ApisixRoute update is ineffective (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/319"},"#319"),")"),(0,i.kt)("li",{parentName:"ul"},"Priority field is not passed to APISIX (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/329"},"#329"),")"),(0,i.kt)("li",{parentName:"ul"},"Route rule name in ApisixRoute can be duplicated (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/330"},"#330"),")"),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"PUT")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"PATCH")," method when updating resources (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/353"},"#353"),")"),(0,i.kt)("li",{parentName:"ul"},"Secrets controller doesn't push the newest cert and priv key to APISIX (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/337"},"#337"),")")),(0,i.kt)("h2",{id:"test"},"Test"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"Kind")," to run e2e suites (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/331"},"#331"),")"),(0,i.kt)("li",{parentName:"ul"},"Add e2e test cases for plugins redirect, uri-blocker, fault-injection, request-id, limit-count, echo, cors, response-rewrite, proxy-rewrite (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/320"},"#320"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/327"},"#327"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/328"},"#328"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/334"},"#334"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/336"},"#336"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/342"},"#342"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/341"},"#341"),")")))}c.isMDXComponent=!0}}]);