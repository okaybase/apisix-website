"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[67417],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var i=a.createContext({}),o=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(i.Provider,{value:t},e.children)},I={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},A=a.forwardRef((function(e,t){var n=e.components,p=e.mdxType,r=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),A=o(n),h=p,s=A["".concat(i,".").concat(h)]||A[h]||I[h]||r;return n?a.createElement(s,l(l({ref:t},u),{},{components:n})):a.createElement(s,l({ref:t},u))}));function h(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=n.length,l=new Array(r);l[0]=A;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:p,l[1]=c;for(var o=2;o<r;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}A.displayName="MDXCreateElement"},14716:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return i},default:function(){return u}});var a=n(87462),p=n(63366),r=(n(67294),n(3905)),l={title:"\u8d1d\u58f3\u627e\u623f\uff1a\u5982\u4f55\u57fa\u4e8e Apache APISIX \u642d\u5efa\u7f51\u5173",author:"\u738b\u8f89",keywords:["API \u7f51\u5173","APISIX","Apache APISIX","Kong","Nginx"],description:"\u8d1d\u58f3\u627e\u623f\u4f7f\u7528 Apache APISIX \u4f5c\u4e3a\u751f\u4ea7\u7cfb\u7edf\u7684 API \u7f51\u5173\uff0c\u6bcf\u5929\u5904\u7406\u8fc7\u4ebf\u7684\u751f\u4ea7\u6d41\u91cf\uff0c\u6027\u80fd\u4f18\u5f02\uff0c\u800c\u4e14\u5f88\u7a33\u5b9a\u3002\u6b63\u597d Apache APISIX \u521a\u521a\u52a0\u5165 Apache \u5b75\u5316\u5668\uff0c\u9664\u4e86\u606d\u559c\u4e4b\u5916\uff0c\u6211\u60f3\u6765\u5206\u4eab\u4e0b\u8d1d\u58f3\u627e\u623f\u5f53\u521d\u4e3a\u4ec0\u4e48\u9009\u62e9 Apache APISIX\uff0c\u4ee5\u53ca\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u7684\u4e00\u4e9b\u5fc3\u5f97\u3002",tags:["technology","practical case"]},c={permalink:"/zh/blog/2020/12/11/beike-how-to-build-gateway-based-on-apache-apisix",source:"@site/blog/2020-12-11-beike-how-to-build-gateway-based-on-apache-apisix.md",title:"\u8d1d\u58f3\u627e\u623f\uff1a\u5982\u4f55\u57fa\u4e8e Apache APISIX \u642d\u5efa\u7f51\u5173",description:"\u8d1d\u58f3\u627e\u623f\u4f7f\u7528 Apache APISIX \u4f5c\u4e3a\u751f\u4ea7\u7cfb\u7edf\u7684 API \u7f51\u5173\uff0c\u6bcf\u5929\u5904\u7406\u8fc7\u4ebf\u7684\u751f\u4ea7\u6d41\u91cf\uff0c\u6027\u80fd\u4f18\u5f02\uff0c\u800c\u4e14\u5f88\u7a33\u5b9a\u3002\u6b63\u597d Apache APISIX \u521a\u521a\u52a0\u5165 Apache \u5b75\u5316\u5668\uff0c\u9664\u4e86\u606d\u559c\u4e4b\u5916\uff0c\u6211\u60f3\u6765\u5206\u4eab\u4e0b\u8d1d\u58f3\u627e\u623f\u5f53\u521d\u4e3a\u4ec0\u4e48\u9009\u62e9 Apache APISIX\uff0c\u4ee5\u53ca\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u7684\u4e00\u4e9b\u5fc3\u5f97\u3002",date:"2020-12-11T00:00:00.000Z",formattedDate:"2020\u5e7412\u670811\u65e5",tags:[{label:"technology",permalink:"/zh/blog/tags/technology"},{label:"practical case",permalink:"/zh/blog/tags/practical-case"}],readingTime:1.41,truncated:!0,prevItem:{title:"Envoy and Apache APISIX: Another way to implement the Envoy filter",permalink:"/zh/blog/2020/12/16/another-way-to-implement-envoy-filter"},nextItem:{title:"New website for Apache APISIX",permalink:"/zh/blog/2020/08/22/new-website"}},i=[{value:"\u9009\u62e9 Kong \u8fd8\u662f Apache APISIX\uff1f",id:"\u9009\u62e9-kong-\u8fd8\u662f-apache-apisix\uff1f",children:[]},{value:"Apache APISIX \u80fd\u63d0\u4f9b\u54ea\u4e9b\u80fd\u529b\uff1f",id:"apache-apisix-\u80fd\u63d0\u4f9b\u54ea\u4e9b\u80fd\u529b\uff1f",children:[]},{value:"\u96c6\u6210 APISIX \u7684\u70b9\u70b9\u6ef4\u6ef4",id:"\u96c6\u6210-apisix-\u7684\u70b9\u70b9\u6ef4\u6ef4",children:[]},{value:"\u672a\u6765\u89c4\u5212",id:"\u672a\u6765\u89c4\u5212",children:[]}],o={toc:i};function u(e){var t=e.components,n=(0,p.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u8bb2\u8ff0\u4e86\u8d1d\u58f3\u627e\u623f\u5f53\u521d\u4e3a\u4ec0\u4e48\u9009\u62e9 Apache APISIX \u4f5c\u4e3aAPI \u7f51\u5173\uff0c\u4ee5\u53ca\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u7684\u4e00\u4e9b\u5fc3\u5f97\u3002")),(0,r.kt)("p",null,"\u6211\u662f\u738b\u8f89\uff0c\u5728\u8d1d\u58f3\u627e\u623f\u8d1f\u8d23 API \u7f51\u5173\u7cfb\u7edf\u7684\u5f00\u53d1\uff0c\u8d1d\u58f3\u627e\u623f\u4f7f\u7528 Apache APISIX \u4f5c\u4e3a\u751f\u4ea7\u7cfb\u7edf\u7684 API \u7f51\u5173\uff0c\u6bcf\u5929\u5904\u7406\u8fc7\u4ebf\u7684\u751f\u4ea7\u6d41\u91cf\uff0c\u6027\u80fd\u4f18\u5f02\uff0c\u800c\u4e14\u5f88\u7a33\u5b9a\u3002\u6b63\u597d Apache APISIX \u521a\u521a\u52a0\u5165 Apache \u5b75\u5316\u5668\uff0c\u9664\u4e86\u606d\u559c\u4e4b\u5916\uff0c\u6211\u60f3\u6765\u5206\u4eab\u4e0b\u8d1d\u58f3\u627e\u623f\u5f53\u521d\u4e3a\u4ec0\u4e48\u9009\u62e9 Apache APISIX\uff0c\u4ee5\u53ca\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u7684\u4e00\u4e9b\u5fc3\u5f97\u3002"),(0,r.kt)("h2",{id:"\u9009\u62e9-kong-\u8fd8\u662f-apache-apisix\uff1f"},"\u9009\u62e9 Kong \u8fd8\u662f Apache APISIX\uff1f"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2020/05/1588752135-Snipaste_2020-05-06_16-02-04.png",alt:"Apache APISIX vs Kong in QPS"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2020/05/1588756665-Snipaste_2020-05-06_17-17-29.png",alt:"Apache APISIX \u67b6\u6784\u56fe"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2020/05/1588756618-Snipaste_2020-05-06_17-16-13.png",alt:"Apache APISIX \u6280\u672f\u4eae\u70b9"})),(0,r.kt)("p",null,"\u5bf9\u4e8e\u7f51\u5173\u7684\u6280\u672f\u8981\u6c42\uff0c\u4e00\u662f\u8981\u6027\u80fd\u597d\uff0c\u80fd\u591f\u652f\u6491\u5927\u6d41\u91cf\u7684\u63a5\u5165\uff0c\u4e8c\u662f\u8981\u7a33\u5b9a\uff0c\u4e0d\u80fd\u51fa\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u9009\u578b\u7684\u539f\u5219\u5c31\u662f\u57fa\u4e8e\u6216\u8005\u501f\u9274\u5f00\u6e90\u9879\u76ee\u91cd\u6784\u4e00\u4e2a\u66f4\u52a0\u7a33\u5b9a\u7684\u7248\u672c\uff0c\u80fd\u591f\u4fdd\u8bc1\u63a5\u5165\u66f4\u5927\u7684\u6d41\u91cf\uff0c\u521a\u5f00\u59cb\u7684\u6d41\u91cf\u8fd8\u5c11\uff0c\u505a\u8fd9\u6837\u7684\u5927\u52a8\u4f5c\u662f\u5b8c\u5168\u53ef\u4ee5\u63a5\u53d7\u7684\u3002\u8bc4\u4f30\u5b8c\u5229\u5f0a\u540e\u548c\u9886\u5bfc\u6c9f\u901a\u4e86\u4e00\u4e0b\u60f3\u6cd5\uff0c\u5f97\u5230\u9886\u5bfc\u7684\u80af\u5b9a\u540e\u5c31\u51b3\u5b9a\u641e\u8d77\uff0c\u8fd9\u65f6\u8111\u6d77\u60f3\u7684\u7b2c\u4e00\u4e2a\u5c31\u662f Kong \u4e86\uff0c\u5927\u540d\u9f0e\u9f0e\u7684\u5f00\u6e90\u7f51\u5173\u3002\u4e8e\u662f\u5c31\u53bb\u5b98\u7f51\u6d4f\u89c8\u4e86\u4e00\u756a\uff0c\u5468\u8fb9\u6587\u7ae0\u4e5f\u770b\u4e86\u4e9b\uff0c\u7b2c\u4e00\u5370\u8c61\u5c31\u662f\u8fd9\u4e2a\u9879\u76ee\u5f88\u4e0d\u9519\uff0c\u80fd\u591f\u6ee1\u8db3\u7528\u6237\u7684\u5927\u591a\u6570\u9700\u6c42\uff0c\u6027\u80fd\u8fd8\u7a33\u5b9a\uff0c\u5c31\u662f\u5b83\u4e86\u3002\u5174\u9ad8\u91c7\u70c8\u5730 clone \u4e86\u4ee3\u7801\u5f00\u59cb\u9605\u8bfb\u8d77\u6765\uff0c\u4e00\u5929\u4e24\u5929\u82e5\u5e72\u5929\u8fc7\u53bb\u4e86\uff0c\u8fd8\u662f\u4e00\u5934\u96fe\u6c34\u7684\u6837\u5b50\uff0c\u60f3\u60f3\u4e5f\u662f\uff0cKong \u80fd\u63d0\u4f9b\u8fd9\u4e48\u591a\u7684\u529f\u80fd\uff0c\u5176\u4ee3\u7801\u7684\u590d\u6742\u5ea6\u53ef\u60f3\u800c\u77e5\u3002"),(0,r.kt)("p",null,"\u8fd9\u65f6\u51e0\u4e2a\u95ee\u9898\u51fa\u73b0\u5728\u6211\u7684\u8111\u6d77\u91cc\uff0c\u6211\u4e00\u4e2a\u4eba\u591a\u4e45\u80fd\u5543\u4e0b\u6765 Kong \u5462\uff1f\u7136\u540e\u8fd8\u8981\u6784\u5efa\u4e00\u4e2a\u9002\u5408\u81ea\u5df1\u7684\u9879\u76ee\uff0c\u53c8\u9700\u8981\u591a\u4e45\u5462\uff1f\u8fd8\u6709\u5c31\u662f\u8fd9\u4e48\u591a\u7684\u529f\u80fd\u6211\u90fd\u9700\u8981\u4e48\uff1f"),(0,r.kt)("p",null,"\u521a\u597d\u90a3\u51e0\u5929 API \u7f51\u5173 Apache APISIX 0.5 \u7248\u672c\u53d1\u5e03\u4e86\uff0c\u62b1\u7740\u4e86\u89e3\u7684\u5fc3\u6001\u53bb\u770b\u4e86\u4e00\u773c\uff0c\u53d1\u73b0\u662f\u9662\u751f\u548c\u6e29\u94ed\u4e00\u8d77\u641e\u7684\u5f00\u6e90\u9879\u76ee\uff0c\u6709\u4e24\u4f4d\u6280\u672f\u5927\u4f6c\u7684\u80cc\u4e66\uff0c\u8ba9\u6211\u4e0d\u7981\u60f3\u8bd5\u8bd5\u770b\u3002"),(0,r.kt)("p",null,"\u62b1\u7740\u8bd5\u4e00\u8bd5\u7684\u6001\u5ea6\u5f00\u59cb\u8d70\u8fd1 Apache APISIX\uff0c\u7531\u4e8e\u5f00\u6e90\u65f6\u95f4\u8f83\u77ed\u6240\u4ee5\u652f\u6301\u7684\u529f\u80fd\u6709\u9650\uff0c\u4f46\u662f\u50cf\u52a8\u6001\u8d1f\u8f7d\u5747\u8861\u3001\u7194\u65ad\u3001\u8eab\u4efd\u8ba4\u8bc1\u3001\u9650\u901f\u7b49\u7b49\u8fd9\u4e9b\u57fa\u672c\u529f\u80fd\u90fd\u5df2\u5b9e\u73b0\u3002\u540c\u65f6\u4ee3\u7801\u91cf\u4e5f\u4e0d\u662f\u5f88\u5927\u964d\u4f4e\u4e86\u5b66\u4e60\u6210\u672c\uff0c\u5728\u8fd9\u4e00\u70b9\u4e0a PK \u6389\u4e86 Kong\u3002\u6240\u4ee5\u7efc\u5408\u6765\u770b Apache APISIX \u66f4\u9002\u5408\u6211\u5f53\u524d\u7684\u72b6\u51b5\uff0c\u6ee1\u8db3\u6211\u521d\u671f\u7684\u529f\u80fd\u89c4\u5212\uff0c\u4e5f\u4e0d\u7528\u8003\u8651\u4e0d\u9700\u8981\u7684\u529f\u80fd\u600e\u4e48\u5904\u7406\u95ee\u9898\u4e86\u3002"),(0,r.kt)("p",null,"\u6700\u5173\u952e\u7684\u95ee\u9898\uff0c\u5f00\u6e90\u65f6\u95f4\u8fd9\u4e48\u77ed\uff0c\u6027\u80fd\u600e\u4e48\u6837\uff1f\u770b\u4e86\u76f8\u540c\u73af\u5883\u7684\u538b\u6d4b\u6570\u636e\u5bf9\u6bd4\uff0cApache APISIX \u5b8c\u7206 Kong\uff0c\u867d\u7136\u8fd9\u6837\u4e0d\u592a\u516c\u5e73\uff0c\u6bd5\u7adf Kong \u662f\u4e2a\u5e9e\u7136\u5927\u7269\uff0c\u4f46\u5bf9\u4e8e\u6211\u7684\u751f\u4ea7\u73af\u5883\u6765\u8bf4\uff0c\u5b83\u4fe9\u662f\u4e00\u6837\u7684\u3002\u6839\u636e Apache APISIX \u7684\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a\uff0c\u5355\u6838 CPU \u53ef\u4ee5\u8fbe\u5230 24k QPS\uff0c\u540c\u65f6\u5ef6\u65f6\u53ea\u6709 0.7 \u6beb\u79d2\u3002"),(0,r.kt)("p",null,"\u6700\u7ec8\u9009\u62e9\u4e86 Apache APISIX\uff0c\u6211\u7684\u7406\u7531\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u90fd\u80fd\u6ee1\u8db3\u9879\u76ee\u9700\u6c42\u7684\u524d\u63d0\u4e0b\uff0cApache APISIX \u5b66\u4e60\u6210\u672c\u4f4e"),(0,r.kt)("li",{parentName:"ul"},"Kong \u7684\u4ee3\u7801\u91cf\u5e9e\u5927\uff0c\u540e\u671f\u7ef4\u62a4\u4e5f\u4f1a\u5e26\u6765\u96be\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"Apache APISIX \u4f5c\u8005\u7ecf\u5e38\u6d3b\u8dc3\u4e8e OpenResty \u793e\u533a\uff0c\u4ee3\u7801\u8d28\u91cf\u6709\u4fdd\u8bc1"),(0,r.kt)("li",{parentName:"ul"},"\u6700\u91cd\u8981\u7684\u4e00\u70b9\u5c31\u662f\u63a5\u89e6\u8fc7\u4f5c\u8005\uff0c\u6709\u4ec0\u4e48\u95ee\u9898\u90fd\u53ef\u4ee5\u5feb\u901f\u7684\u6c9f\u901a")),(0,r.kt)("p",null,"\u5b98\u7f51\u7684\u7406\u7531\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2020/05/1588756618-Snipaste_2020-05-06_17-16-13.png",alt:"Apache APISIX \u6280\u672f\u4eae\u70b9"})),(0,r.kt)("h2",{id:"apache-apisix-\u80fd\u63d0\u4f9b\u54ea\u4e9b\u80fd\u529b\uff1f"},"Apache APISIX \u80fd\u63d0\u4f9b\u54ea\u4e9b\u80fd\u529b\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u70ed\u66f4\u65b0\u548c\u70ed\u63d2\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u52a8\u6001\u8d1f\u8f7d\u5747\u8861"),(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u52a8\u548c\u88ab\u52a8\u5065\u5eb7\u68c0\u6d4b"),(0,r.kt)("li",{parentName:"ul"},"\u7194\u65ad\u5668"),(0,r.kt)("li",{parentName:"ul"},"\u8eab\u4efd\u8ba4\u8bc1"),(0,r.kt)("li",{parentName:"ul"},"\u9650\u6d41\u9650\u901f"),(0,r.kt)("li",{parentName:"ul"},"gRPC \u534f\u8bae\u8f6c\u6362"),(0,r.kt)("li",{parentName:"ul"},"\u52a8\u6001 TCP/UDP\u3001gRPC\u3001websocket\u3001MQTT \u4ee3\u7406"),(0,r.kt)("li",{parentName:"ul"},"\u63a7\u5236\u53f0"),(0,r.kt)("li",{parentName:"ul"},"\u9ed1\u767d\u540d\u5355"),(0,r.kt)("li",{parentName:"ul"},"Serverless")),(0,r.kt)("p",null,"Apache APISIX \u5df2\u7ecf\u53d1\u5e03\u4e86\u63a5\u8fd1\u5341\u4e2a\u7248\u672c\u4e86\uff0c\u5b83\u6240\u652f\u6301\u7684\u529f\u80fd\u8fdc\u4e0d\u6b62\u8fd9\u4e9b\u4e86\u3002\u7ed3\u5408\u4e1a\u52a1\u60c5\u51b5\u7ed8\u5236\u4e86\u67b6\u6784\u56fe\uff0c\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2020/05/1588756665-Snipaste_2020-05-06_17-17-29.png",alt:"Apache APISIX \u67b6\u6784\u56fe"})),(0,r.kt)("h2",{id:"\u96c6\u6210-apisix-\u7684\u70b9\u70b9\u6ef4\u6ef4"},"\u96c6\u6210 APISIX \u7684\u70b9\u70b9\u6ef4\u6ef4"),(0,r.kt)("p",null,"\u7ecf\u8fc7\u51e0\u5929\u7684\u4ee3\u7801\u9605\u8bfb\uff0c\u5bf9 Apache APISIX \u6709\u4e86\u4e00\u5b9a\u7684\u4e86\u89e3\u4e86\uff0c\u4f46\u7b2c\u4e00\u4e2a\u95ee\u9898\u51fa\u73b0\u4e86\uff1a\u4e4b\u524d\u6ca1\u6709\u57fa\u4e8e\u5f00\u6e90\u9879\u76ee\u5f00\u53d1\u7684\u7ecf\u9a8c\uff0c\u4e00\u65b9\u9762\u8981\u505a\u4e1a\u52a1\u9700\u6c42\u8fed\u4ee3\uff0c\u4e00\u65b9\u9762\u8fd8\u8981\u5347\u7ea7\u5f00\u6e90\u9879\u76ee\uff0c\u600e\u4e48\u641e\u5462\uff1f\u6211\u5728\u672c\u5730\u521b\u5efa\u4e86\u4e09\u4e2a\u5206\u652f\uff0c\u4e00\u4e2a Apache APISIX \u5206\u652f\u6307\u5411\u4e0a\u6e38\u5f00\u6e90\u4ed3\u5e93\uff0cdev \u7528\u6765\u5e38\u89c4\u7684\u4e1a\u52a1\u8fed\u4ee3\uff0c\u800c master \u5206\u652f\u7528\u6765\u4e0a\u7ebf\u5347\u7ea7\u3002"),(0,r.kt)("p",null,"\u5728\u952e\u76d8\u4e0a\u6572\u6253\u4e86\u4e24\u5468\uff0c\u6211\u7684\u201c\u5c0f\u91d1\u521a\u201d\u7ec8\u4e8e\u6709\u4e9b\u6a21\u6837\u4e86\uff0c\u8be5\u770b\u770b\u5b83\u8dd1\u7684\u6709\u591a\u5feb\u3001\u7701\u4e0d\u7701\u6cb9\u4e86\uff0c\u5c31\u8fd9\u6837\u538b\u6d4b\u5f00\u59cb\u4e86\u3002\u670d\u52a1\u90e8\u7f72\u5728 8CPU 32G \u5185\u5b58\u7684\u817e\u8baf\u4e91\u4e0a\u9762\u4e86\uff0c\u4e0a\u6e38\u662f\u771f\u5b9e\u7684\u7ebf\u4e0a\u751f\u4ea7\u73af\u5883\uff0c\u56e0\u6b64\u4e0d\u80fd\u538b\u7684\u592a\u72e0\uff0c\u6027\u80fd\u62a5\u544a\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2020/05/1588756713-Snipaste_2020-05-06_17-18-13.png",alt:"Apache APISIX \u6027\u80fd\u6d4b\u8bd5"})),(0,r.kt)("p",null,"\u6027\u80fd\u62a5\u544a\u5c0f\u7ed3\uff1a\u63a5\u53e3\u8017\u65f6\u51cf\u5c11\u4e86 47%\uff0c\u6ca1\u6709\u9519\u8bef\u4ea7\u751f\u7a33\u5b9a\u6027\u6709\u6240\u63d0\u5347\uff0cTPS \u5cf0\u503c\u63d0\u5347\u4e86 82%\uff0c\u6ca1\u6709\u9519\u8bef\u4ea7\u751f\uff0c\u7a33\u5b9a\u6027\u6709\u6240\u63d0\u5347\u3002"),(0,r.kt)("p",null,"\u5f00\u53d1\u73af\u5883\u6ca1\u95ee\u9898\u4e86\uff0c\u5f00\u59cb\u7814\u7a76\u7ebf\u4e0a\u90e8\u7f72\u3002Apache APISIX \u652f\u6301\u5404\u79cd\u5b89\u88c5\u7684\u65b9\u5f0f\uff1adocker\u3001rpm \u5305\u3001Luarocks \u548c\u6e90\u7801\u3002\u4f46\u662f\u7ebf\u4e0a\u73af\u5883\u4e0d\u8ba9\u5b89\u88c5\u4efb\u4f55\u4e1c\u897f\uff0c\u4ee3\u7801\u53ea\u80fd\u653e\u5230\u56fa\u5b9a\u7684\u8def\u5f84\u4e2d\uff0cApache APISIX \u652f\u6301\u7684\u5f88\u591a\u7279\u6027\u90fd\u662f\u57fa\u4e8e OpenResty 1.15.8 \u7684\uff0c\u548b\u641e\u5462\uff1f\u7f16\u8bd1\u5b8c\u4e86\u653e\u5728\u4ee3\u7801\u4ed3\u5e93\u4e2d\u5427\uff0c\u6309\u7167\u6307\u5b9a\u7684\u76ee\u5f55\u8fdb\u884c\u7f16\u8bd1\uff0c\u800c\u4e14\u4e0d\u80fd\u7528 pcre \u7684\u9759\u6001\u8054\u7f16\uff0c\u6298\u817e\u4e86\u4e00\u4e24\u5929\u624d\u641e\u5b9a\u3002\u8c03\u6574\u8d1f\u8f7d\u5f00\u59cb\u7070\u5ea6\uff0c\u4ece 2% \u7684\u6d41\u91cf\u5230\u5168\u91cf\u7ecf\u5386\u4e86\u51e0\u5468\uff0c\u597d\u5728\u4e00\u5207\u987a\u5229\u3002"),(0,r.kt)("p",null,"\u7ecf\u8fc7\u51e0\u5468\u7684\u89c2\u5bdf\u7ebf\u4e0a\u670d\u52a1\u5f88\u7a33\u5b9a\uff0cApache APISIX 0.5 \u7248\u672c\u7684\u5f88\u591a\u529f\u80fd\u90fd\u662f\u5f97\u7528\u901a\u8fc7 API \u63a5\u53e3\u8c03\u7528\u5b9e\u73b0\u7684\uff0c\u8bf7\u6c42\u53c2\u6570\u6bd4\u8f83\u5bb9\u6613\u51fa\u73b0\u8bed\u6cd5\u9519\u8bef\uff0c\u6ca1\u6709\u9875\u9762\u6765\u7684\u76f4\u89c2\u65b9\u4fbf\uff0c\u8fd8\u6709\u4e00\u70b9\u5c31\u662f\u6211\u7684\u4e1a\u52a1\u573a\u666f\u9700\u8981\u6709\u5bf9\u4e0a\u6e38\u670d\u52a1\u7684\u63a2\u6d3b\u529f\u80fd\u3002\u5c31\u662f\u8fd9\u4e48\u5de7 Apache APISIX 0.7 \u7248\u672c\u53d1\u5e03\u4e86\uff0c0.7 \u7248\u672c\u652f\u6301\u4e86\u63a7\u5236\u53f0\u548c\u4e0a\u6e38\u670d\u52a1\u63a2\u6d3b\uff0c\u771f\u662f\u4e2a\u559c\u5927\u666e\u5954\u7684\u597d\u6d88\u606f\u554a\uff0c\u5347\u7ea7\u3002"),(0,r.kt)("p",null,"Apache APISIX \u5206\u652f\u5347\u7ea7\u5230 0.7 \u5f88\u65b9\u4fbf\uff0c\u6211\u548b\u5408\u5e76\u4ee3\u7801\u5462\uff1f\u4e24\u4e2a\u7248\u672c\u4ee3\u7801\u6539\u52a8\u975e\u5e38\u5927\uff0c\u5148\u5c1d\u8bd5\u4e00\u4e0b\u5408\u5e76\uff0c\u6211\u7684\u5929\u554a\uff0c\u8fd9\u51b2\u7a81\u592a\u591a\u4e86\uff0c\u641e\u6b7b\u7684\u8282\u594f\u554a\uff0c\u666e\u901a\u7684\u89e3\u51b3\u51b2\u7a81\u7684\u65b9\u6cd5\u4e0d\u73b0\u5b9e\u4e86\uff0c\u8fd9\u4e48\u591a\u5904\u624b\u4e00\u6296\u8fd8\u4f1a\u51fa\u73b0\u4e00\u4e0b\u9690\u85cf\u7684 bug\uff0c\u6709\u6ca1\u6709\u5565\u9ad8\u6548\u7684\u65b9\u6cd5\u5462\uff1f\u641c\u7d22\u4e86\u4e00\u4e0b\u627e\u5230\u4e86\u5feb\u6377\u65b9\u6cd5 git checkout --ours \u548c git checkout --theirs\uff08\u6ca1\u7528\u8fc7\u7684\u81ea\u884c\u641c\u7d22\u54c8\uff09\uff0c\u51e0\u5206\u949f\u5b8c\u6210 APISIX  0.5 \u5230 0.7 \u7684\u5347\u7ea7\uff0c\u5f88\u75db\u5feb\u3002\u5f53\u7136\u8fd9\u4e5f\u662f\u5f97\u76ca\u4e8e APISIX \u4ee3\u7801\u7684\u5065\u58ee\uff0c\u6211\u53ea\u9700\u8981\u6dfb\u52a0\u4e1a\u52a1\u63d2\u4ef6\u5373\u53ef\uff0c\u5b8c\u5168\u96f6\u8026\u5408\u3002"),(0,r.kt)("p",null,"Apache APISIX 0.7 \u7248\u672c\u63d0\u4f9b\u4e86\u63a7\u5236\u53f0\u4e86\uff0c\u4e0d\u7528\u518d\u62fc json \u4e86\uff0c\u8212\u670d\u3002\u8d76\u7d27\u6d4b\u8bd5\u4e00\u4e0b\u81ea\u5df1\u5173\u5fc3\u7684\u5065\u5eb7\u68c0\u6d4b\u5427\uff0c\u4e00\u5f00\u59cb\u6ca1\u4ec0\u4e48\u95ee\u9898\uff0c\u80fd\u591f\u6e05\u6670\u7684\u611f\u77e5\u4e0a\u6e38\u670d\u52a1\u7684\u72b6\u6001\uff0c\u4f46\u6211\u89c2\u5bdf\u4e0a\u6e38\u670d\u52a1\u7684\u65e5\u5fd7\u53d1\u73b0\uff0c\u7ecf\u8fc7\u51e0\u6b21\u542f\u505c\uff0c\u5065\u5eb7\u68c0\u6d4b\u529f\u80fd\u63a2\u6d3b\u7684\u9891\u7387\u597d\u50cf\u53d8\u5feb\u4e86\uff0c\u5e94\u8be5\u662f\u5065\u5eb7\u68c0\u6d4b\u6709 bug\uff0c\u7b80\u5355\u7684\u9605\u8bfb\u4e00\u4e0b\u76f8\u5173\u7684\u4ee3\u7801\uff0c\u53d1\u73b0\u521b\u5efa\u7684\u6bcf\u4e2a\u8def\u7531\u7684 checker \u4e0d\u662f\u5168\u5c40\u552f\u4e00\u7684\uff0c\u800c\u662f\u6bcf\u4e2a work \u521b\u5efa\u4e86\u4e00\u4e2a\uff0c\u53d1\u73b0\u95ee\u9898\u5c31\u597d\u529e\u4e86\uff0c\u521b\u5efa\u7684 work \u90fd\u7528\u4e00\u4e2a name \u5c31\u80fd\u4fdd\u8bc1\u5168\u5c40\u552f\u4e00\u4e86\uff0c\u867d\u7136\u6539\u52a8\u5f88\u5c0f\uff0c\u4f46\u8fd8\u662f\u8d76\u7d27\u63d0\u4ea4\u4e86\u4e00\u4e2a PR\u3002"),(0,r.kt)("p",null,"\u628a\u7ebf\u4e0a\u4e1a\u52a1 APISIX \u5347\u7ea7\u5230\u4e86 0.7\uff0c\u7136\u540e\u89c2\u5bdf\u670d\u52a1\u8d44\u6e90\u5360\u7528\u60c5\u51b5\uff0c\u6bd5\u7adf\u662f\u5347\u7ea7\u4e86\u8f83\u5927\u7684\u7248\u672c\uff0c\u5934\u51e0\u4e2a\u5c0f\u65f6\u8fd8\u6ca1\u611f\u89c9\uff0c\u548c\u4e4b\u524d 0.5 \u5dee\u4e0d\u591a\u3002\u7b49\u4e0b\u73ed\u65f6\u518d\u770b\u4e00\u773c\uff0c\u597d\u50cf\u5185\u5b58\u8d44\u6e90\u5360\u7528\u597d\u50cf\u4e0d\u592a\u5bf9\uff0c0.5 \u7248\u672c\u4e00\u76f4\u6bd4\u8f83\u7a33\u5b9a\uff0c0.7 \u5374\u597d\u50cf\u6709\u6cc4\u6f0f\uff0c\u56e0\u4e3a\u5185\u5b58\u7684\u5360\u7528\u589e\u957f\u5f88\u6162\uff0c\u5c31\u51b3\u5b9a\u518d\u89c2\u5bdf\u4e00\u665a\u4e0a\u3002\u7b2c\u4e8c\u5929\u6765\u5bf9\u6bd4\u4e86\u76d1\u63a7\u6570\u636e\uff0c\u786e\u5b9a\u662f\u6709\u5185\u5b58\u6cc4\u6f0f\uff0c\u8d76\u7d27\u56de\u6eda\u5230\u4e0a\u4e00\u4e2a\u7248\u672c\u3002\u548c\u9662\u751f\u53cd\u9988\u4e86\u4e00\u4e0b\u95ee\u9898\uff0c\u6839\u636e\u6211\u63cf\u8ff0\u7684\u573a\u666f\u901a\u8fc7\u538b\u6d4b\u53d1\u73b0\u4e86\u95ee\u9898\u6240\u5728\uff0c\u662f radixtree \u7684\u95ee\u9898\uff0c\u9662\u751f\u53d1\u5e03\u4e86 radixtree \u7684\u65b0\u7248\u672c\uff0c\u6211\u5347\u7ea7\u4e86\u4e00\u4e0b\u4f9d\u8d56\uff0c\u7136\u540e\u5728\u8fdb\u884c\u538b\u6d4b\uff0c\u6ca1\u6709\u590d\u73b0\u95ee\u9898\uff0c\u7686\u5927\u6b22\u559c\u3002"),(0,r.kt)("p",null,"\u518d\u6b21\u4e0a\u7ebf\uff0cApache APISIX 0.7 \u7248\u672c\u8fd8\u662f\u7ed9\u4e86\u6211\u4e00\u4e9b\u60ca\u559c\u7684\uff0c\u4e4b\u524d Apache APISIX 0.5 \u7248\u672c\u4f7f\u7528\u7684\u8def\u7531\u4f9d\u8d56\u662f libr3\uff0c\u800c Apache APISIX 0.7 \u662f\u6362\u7528\u4e86 radixtree\uff0c\u8f83\u4e4b\u524d\u6709\u66f4\u597d\u7684\u8868\u73b0\uff0ccpu \u4f7f\u7528\u7387\u548c\u5185\u5b58\u90fd\u6709\u6240\u4e0b\u964d\uff0cApache APISIX 0.5 \u7248\u672c\u5355 work \u7684 cpu \u5728 1-10%\uff0c\u5185\u5b58 0.1%\uff0cApache APISIX 0.7 \u7248\u672c\u5355 work \u7684 cpu \u4f7f\u7528\u7387\u964d\u4f4e\u5230 1-2%\uff0c\u5185\u5b58\u4e5f\u4e0d\u8db3 0.1% \u4e86\uff0c\u4f18\u79c0\u3002"),(0,r.kt)("h2",{id:"\u672a\u6765\u89c4\u5212"},"\u672a\u6765\u89c4\u5212"),(0,r.kt)("p",null,"Apache APISIX \u5728\u7ebf\u4e0a\u5df2\u7ecf\u8dd1\u4e86\u4e24\u4e2a\u6708\u4e86\uff0c\u8fd8\u672a\u51fa\u73b0\u7ebf\u4e0a\u6545\u969c\uff0c\u7a83\u559c\u3002\u8fd9\u624d\u662f\u5f00\u59cb\uff0c\u540e\u7eed\u6211\u4eec\u8fd8\u80fd\u505a\u5f88\u591a\u4e1c\u897f\uff0c\u628a\u66f4\u591a\u7684\u80fd\u529b\u5c55\u73b0\u7ed9\u670d\u52a1\u65b9\u3002\u7f51\u5173\u63d0\u4f9b\u7684\u4e0d\u4ec5\u4ec5\u53ea\u662f\u53cd\u5411\u4ee3\u7406\uff0c\u53ef\u4ee5\u7ed9\u4e00\u4e9b\u6ca1\u6709\u66f4\u591a\u7cbe\u529b\u53bb\u5f00\u53d1\u4fdd\u8bc1\u670d\u52a1\u7a33\u5b9a\u529f\u80fd\u7684\u56e2\u961f\u63d0\u4f9b\u5e2e\u52a9\uff0c\u5305\u62ec\u9650\u6d41\u3001\u7194\u65ad\u3001\u76d1\u63a7\u7b49\u670d\u52a1\uff0c\u8fd8\u6709\u63a5\u5165\u7684\u5e73\u53f0\u3002\u6700\u540e\u611f\u8c22\u4e24\u4f4d\u5927\u4f6c\u63d0\u4f9b\u4e86\u8fd9\u4e48\u4f18\u79c0\u7684\u4ea7\u54c1\uff0c\u4e5f\u611f\u8c22 Apache APISIX \u793e\u533a\u8d21\u732e\u51fa\u7684\u8fed\u4ee3\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u73b0\u5728\u7f51\u5173\u6bcf\u65e5\u6d41\u91cf\u5df2\u7ecf\u8fc7\u4ebf\uff0c\u8fd8\u6ca1\u6709\u4ec0\u4e48\u6027\u80fd\u95ee\u9898\uff0c\u6d41\u91cf\u5982\u679c\u80fd\u8fbe\u5230\u5341\u4ebf\u7ea7\uff0c\u540e\u7eed\u8fd8\u4f1a\u518d\u5206\u4eab\u4e00\u4e0b Apache APISIX \u548c\u6211\u7684\u524d\u884c\u4e4b\u8def\uff0c\u6b22\u8fce\u5927\u5bb6\u5173\u6ce8\u3002"))}u.isMDXComponent=!0}}]);