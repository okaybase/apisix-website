"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27987],{3905:function(e,a,t){t.d(a,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function p(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){p(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,p=function(e,a){if(null==e)return{};var t,r,p={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(p[t]=e[t]);return p}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var l=r.createContext({}),h=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=h(e.components);return r.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,p=e.mdxType,n=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=h(t),m=p,d=c["".concat(l,".").concat(m)]||c[m]||u[m]||n;return t?r.createElement(d,i(i({ref:a},s),{},{components:t})):r.createElement(d,i({ref:a},s))}));function m(e,a){var t=arguments,p=a&&a.mdxType;if("string"==typeof e||p){var n=t.length,i=new Array(n);i[0]=c;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:p,i[1]=o;for(var h=2;h<n;h++)i[h]=t[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2968:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return l},default:function(){return s}});var r=t(87462),p=t(63366),n=(t(67294),t(3905)),i={title:"Release Apache APISIX Dashboard 2.3",tags:["APISIX Dashboard"]},o={permalink:"/zh/releases/2021/01/11/release-apache-apisix-dashboard-2.3",source:"@site/releases/2021-1-11-release-apache-apisix-dashboard-2.3.md",title:"Release Apache APISIX Dashboard 2.3",description:"Core",date:"2021-01-11T00:00:00.000Z",formattedDate:"2021\u5e741\u670811\u65e5",tags:[{label:"APISIX Dashboard",permalink:"/zh/releases/tags/apisix-dashboard"}],readingTime:.785,truncated:!1,prevItem:{title:"Release Apache APISIX Ingress Controller 0.2.0",permalink:"/zh/releases/2021/01/19/release-apache-apisix-ingress-controller-0.2.0"},nextItem:{title:"Release Apache APISIX 2.2",permalink:"/zh/releases/2021/01/08/release-apache-apisix-2.2"}},l=[{value:"Core",id:"core",children:[]}],h={toc:l};function s(e){var a=e.components,t=(0,p.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,r.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"core"},"Core"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Support to use absolute path in conf.WebDir. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1055"},"#1055")),(0,n.kt)("li",{parentName:"ul"},"Support to search route by label. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1061"},"#1061")),(0,n.kt)("li",{parentName:"ul"},"Support server info preview. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/958"},"#958")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/949"},"#949")),(0,n.kt)("li",{parentName:"ul"},"Support custom port for Upstream module. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1078"},"#1078")),(0,n.kt)("li",{parentName:"ul"},"Support to show plugin type and other properties ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1111"},"#1111")),(0,n.kt)("li",{parentName:"ul"},"Support websocket for Route module. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1079"},"#1079")),(0,n.kt)("li",{parentName:"ul"},"Support Service module on the frontend. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1089"},"#1089")),(0,n.kt)("li",{parentName:"ul"},"Support group for Route module. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/999"},"#999")),(0,n.kt)("li",{parentName:"ul"},"Support Global Plugin. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1057"},"#1057")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1106"},"#1106")),(0,n.kt)("li",{parentName:"ul"},"Support Version Manager. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1157"},"#1157")),(0,n.kt)("li",{parentName:"ul"},"Use Cobra as the cli scaffold. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/773"},"#773")),(0,n.kt)("li",{parentName:"ul"},"Remove Lua dependency. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1083"},"#1083")),(0,n.kt)("li",{parentName:"ul"},"Improve E2E testcases for the backend. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1012"},"#1012"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1123"},"#1123")),(0,n.kt)("li",{parentName:"ul"},"Improve E2E testcases for the frontend. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1074"},"#1074")),(0,n.kt)("li",{parentName:"ul"},"Improve online debug. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/979"},"#979")),(0,n.kt)("li",{parentName:"ul"},"Improve Route publish/offline. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1081"},"#1081")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/991"},"#991")),(0,n.kt)("li",{parentName:"ul"},"Improve plugin module for the frontend. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1047"},"#1047")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/978"},"#978")),(0,n.kt)("li",{parentName:"ul"},"Fix error occurred when enable or disable existing SSL ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1064"},"#1064")),(0,n.kt)("li",{parentName:"ul"},"Fix the problem that route created by Admin API (without ID) cannot be shown in Manager API. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1063"},"#1063"))))}s.isMDXComponent=!0}}]);