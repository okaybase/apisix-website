"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43616],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||h[m]||i;return n?a.createElement(f,o(o({ref:t},l),{},{components:n})):a.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14130:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return l}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o={title:"\u6df1\u5ea6\u5256\u6790 Apache APISIX Mesh Agent",author:"tokers",authorURL:"https://github.com/tokers",authorImageURL:"https://avatars.githubusercontent.com/u/10428333?v=4",tags:["technology"]},p={permalink:"/zh/blog/2021/07/16/Analyze-Apache-APISIX-Mesh-Agent-deeply",source:"@site/blog/2021-07-16-Analyze-Apache-APISIX-Mesh-Agent-deeply.md",title:"\u6df1\u5ea6\u5256\u6790 Apache APISIX Mesh Agent",description:"@tokers, Apache APISIX PMC from Shenzhen Zhiliu Technology Co.",date:"2021-07-16T00:00:00.000Z",formattedDate:"2021\u5e747\u670816\u65e5",tags:[{label:"technology",permalink:"/zh/blog/tags/technology"}],readingTime:1.31,truncated:!0,prevItem:{title:"Apache APISIX x Kubernetes\uff1a\u6070\u5230\u597d\u5904\uff5c\u76f4\u64ad\u9884\u544a",permalink:"/zh/blog/2021/07/21/Apache-APISIX-Kubernetes"},nextItem:{title:"\u57fa\u4e8e Apache APISIX\uff0c\u65b0\u6d6a\u5fae\u535a API \u7f51\u5173\u7684\u5b9a\u5236\u5316\u5f00\u53d1\u4e4b\u8def",permalink:"/zh/blog/2021/07/14/the-road-to-customization-of-Sina-Weibo-API-gateway-based-on-Apache-APISIX"}},c=[{value:"\u4f7f\u7528\u5b9a\u4f4d",id:"\u4f7f\u7528\u5b9a\u4f4d",children:[]},{value:"\u83b7\u53d6\u914d\u7f6e\u53d8\u66f4",id:"\u83b7\u53d6\u914d\u7f6e\u53d8\u66f4",children:[]},{value:"\u6a21\u62df ETCD",id:"\u6a21\u62df-etcd",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],s={toc:c};function l(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/tokers"},"@tokers"),", Apache APISIX PMC from ",(0,i.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"Shenzhen Zhiliu Technology Co."))),(0,i.kt)("p",null,"\u5728\u4eca\u5e74 6 \u6708\uff0c\u652f\u6d41\u79d1\u6280\u63a8\u51fa\u4e86",(0,i.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/t7oga6xP2JpdcraixwSwVg"},"\u57fa\u4e8e Apache APISIX \u7684\u670d\u52a1\u7f51\u683c\u65b9\u6848"),"\uff0c\u5176\u4e2d Apache APISIX \u5c06\u4f5c\u4e3a\u670d\u52a1\u7f51\u683c\u7684\u6570\u636e\u9762\uff0c\u4e0e\u652f\u6301 ",(0,i.kt)("a",{parentName:"p",href:"https://www.envoyproxy.io/docs/envoy/latest/api-docs/xds_protocol"},"xDS")," \u534f\u8bae\u7684\u63a7\u5236\u9762\u914d\u5408\uff0c\u8fdb\u800c\u6258\u7ba1\u670d\u52a1\u95f4\u7684\u6d41\u91cf\u3002\u5728\u8be5\u65b9\u6848\u4e2d\u6709\u4e00\u4e2a\u4e0d\u53ef\u6216\u7f3a\u7684\u7ec4\u4ef6 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/api7/apisix-mesh-agent"},"apisix-mesh-agent"),"\uff0c\u5b83\u4f5c\u4e3a\u6570\u636e\u9762\u4e0e\u63a7\u5236\u9762\u7684\u4e2d\u95f4\u5c42\uff0c\u5b8c\u6210\u4e86\u5f88\u591a\u9002\u914d\u6027\u7684\u5de5\u4f5c\uff0c\u8fdb\u800c\u8ba9 Apache APISIX \u5728\u63a5\u8fd1\u96f6\u6539\u9020\u7684\u60c5\u51b5\u4e0b\u5373\u53ef\u5b8c\u7f8e\u5730\u5de5\u4f5c\u5728\u670d\u52a1\u7f51\u683c\u4e2d\u3002"),(0,i.kt)("p",null,"\u672c\u6587\u5c06\u5bf9 apisix-mesh-agent \u8fdb\u884c\u5206\u6790\uff0c\u4ecb\u7ecd\u5176\u4f7f\u7528\u5b9a\u4f4d\u53ca\u5176\u5b9e\u73b0\u7684\u529f\u80fd\u3002"),(0,i.kt)("h2",{id:"\u4f7f\u7528\u5b9a\u4f4d"},"\u4f7f\u7528\u5b9a\u4f4d"),(0,i.kt)("p",null,"\u4ece\u4f7f\u7528\u89d2\u5ea6\u4e0a\u8bb2\uff0capisix-mesh-agent \u5c06\u548c Apache APISIX \u5171\u540c\u8fd0\u884c\u5728\u540c\u4e00\u4e2a\uff08sidecar\uff09\u5bb9\u5668\u5185\uff0c\u4e8b\u5b9e\u4e0a Apache APISIX \u4e5f\u662f\u7531 apisix-mesh-agent fork \u5f97\u5230\uff0c\u8fd9\u6709\u70b9\u7c7b\u4f3c\u4e8e ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io"},"Istio")," \u4e2d ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/reference/commands/pilot-agent/"},"pilot-agent")," \u4e0e ",(0,i.kt)("a",{parentName:"p",href:"https://www.envoyproxy.io/"},"Envoy")," \u4e4b\u95f4\u7684\u5173\u7cfb\u3002\u53e6\u5916\uff0c\u5b83\u4e5f\u8d1f\u8d23\u5728 Pod \u542f\u52a8\u540e\u6ce8\u5165 iptables \u89c4\u5219\uff08\u62e6\u622a\u670d\u52a1\u5b9e\u4f8b\u7684\u51fa\u5165\u6d41\u91cf\uff09\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"2021-07-16-1",src:n(99899).Z})),(0,i.kt)("p",null,"\u4ece\u56fe\u4e2d\u53ef\u4ee5\u770b\u5230\uff0capisix-mesh-agent \u8d1f\u8d23\u548c\u63a7\u5236\u9762\u4ea4\u4e92\uff08\u83b7\u53d6\u914d\u7f6e\u53d8\u66f4\uff09\uff0cApache APISIX \u8d1f\u8d23\u5b9e\u9645\u7684\u6d41\u91cf\u5904\u7406\u548c\u8f6c\u53d1\u3002"),(0,i.kt)("h2",{id:"\u83b7\u53d6\u914d\u7f6e\u53d8\u66f4"},"\u83b7\u53d6\u914d\u7f6e\u53d8\u66f4"),(0,i.kt)("p",null,"\u524d\u9762\u6211\u4eec\u63d0\u5230\uff0capisix-mesh-agent \u5c06\u548c\u5b9e\u73b0\u4e86 xDS \u534f\u8bae\u7684\u63a7\u5236\u9762\u8fdb\u884c\u4ea4\u4e92\uff0c\u4ece\u63a7\u5236\u9762\u5904\u83b7\u53d6\u6700\u65b0\u7684\u914d\u7f6e\u53d8\u66f4\uff0c\u5177\u4f53\u6765\u8bf4\uff0capisix-mesh-agent \u4f1a\u901a\u8fc7 CDS \uff08Cluster Disocvery Service\uff09\u6765\u83b7\u53d6\u96c6\u7fa4\u5217\u8868\uff0c\u5e76\u8fdb\u4e00\u6b65\u901a\u8fc7 EDS\uff08Endpoint Discovery Service\uff09\u83b7\u53d6\u8fd9\u4e9b\u96c6\u7fa4\u7684\u6700\u65b0\u5b9e\u4f8b\u5217\u8868\uff1b\u96c6\u7fa4\u5217\u8868\u548c\u96c6\u7fa4\u5bf9\u5e94\u7684\u5b9e\u4f8b\u5217\u8868\u5c06\u5728 apisix-mesh-agent \u5185\u90e8\u8f6c\u6362\u4e3a Apache APISIX \u7684 ",(0,i.kt)("a",{parentName:"p",href:"http://apisix.apache.org/docs/apisix/architecture-design/upstream"},"Upstream")," \u5bf9\u8c61\uff08EDS \u7684\u6570\u636e\u5219\u662f\u8f6c\u6362\u4e3a Upstream \u7684\u8282\u70b9\u4fe1\u606f\uff09\u3002"),(0,i.kt)("p",null,"\u6b64\u5916\uff0capisix-mesh-agent \u901a\u8fc7 LDS\uff08Listener Discovery Service\uff09\u83b7\u53d6\u52a8\u6001\u76d1\u542c\u5668\uff0capisix-mesh-agent \u83b7\u53d6\u76d1\u542c\u5668\u540e\uff0c\u4e3b\u8981\u7684\u76ee\u7684\u662f\u83b7\u53d6\u5176\u4e2d\u7684 HTTP Connection Manager \u5185\u7684 RDS \u540d\u79f0\u8868\uff0c\u8fdb\u800c\u80fd\u591f\u53d1\u8d77 RDS \u8bf7\u6c42\uff08Route Discovery Service\uff09\uff0c\u83b7\u53d6\u5230\u5177\u4f53\u7684\u8def\u7531\u914d\u7f6e\uff0c\u8fd9\u90e8\u5206\u8def\u7531\u914d\u7f6e\u5c06\u88ab\u6620\u5c04\u5230 Apache APISIX \u7684 ",(0,i.kt)("a",{parentName:"p",href:"http://apisix.apache.org/docs/apisix/architecture-design/route"},"Route")," \u5bf9\u8c61\u3002\u81f3\u4e8e\u76d1\u542c\u5668\u672c\u8eab\uff0c\u5e76\u4e0d\u4f1a\u4e3a Apache APISIX \u6240\u7528\u3002"),(0,i.kt)("p",null,"\u7ec6\u5fc3\u7684\u8bfb\u8005\u53ef\u80fd\u4f1a\u53d1\u73b0\uff0c\u8fd9\u4e9b\u76d1\u542c\u5668\u672c\u8eab\u5c31\u662f\u4e00\u4e2a\u8def\u7531\u5339\u914d\u6761\u4ef6\uff0c\u5373\u76ee\u6807\u670d\u52a1\u7684\u5730\u5740\u548c\u7aef\u53e3\u4fe1\u606f\uff0c\u5982\u679c Apache APISIX \u5ffd\u7565\u4e86\u8fd9\u4e9b\u76d1\u542c\u5668\uff0c\u90a3\u4e48\u662f\u5426\u4f1a\u51fa\u73b0\u4e32\u8def\u7531\u7684\u60c5\u51b5\uff1f\u4e8b\u5b9e\u4e0a\uff0c\u6211\u4eec\u901a\u8fc7\u5728 Nginx \u6838\u5fc3\u4e2d\u6dfb\u52a0\u4e86\u4e00\u4e2a\u65b0\u7684\u53d8\u91cf ",(0,i.kt)("inlineCode",{parentName:"p"},"$connection_original_dst"),"\uff0c\u8fd9\u4e2a\u53d8\u91cf\u7684\u503c\u662f\u6d41\u91cf\u539f\u59cb\u7684\u5730\u5740\u548c\u7aef\u53e3\u4fe1\u606f\uff08\u6ca1\u6709\u88ab iptables \u52ab\u6301\u7684\u60c5\u51b5\u4e0b\uff09\uff0c\u6709\u4e86\u8fd9\u4e00\u5c42\u5224\u65ad\u4ee5\u540e\uff0c\u8def\u7531\u4e4b\u95f4\u5219\u4e0d\u4f1a\u51fa\u73b0\u4e71\u4e32\u7684\u60c5\u51b5\u3002\u611f\u5174\u8da3\u7684\u540c\u5b66\u53ef\u4ee5\u6233",(0,i.kt)("a",{parentName:"p",href:"https://github.com/api7/apisix-mesh-agent/blob/main/nginx/patches/nginx-1.19.3-connection-original-dst.patch"},"\u8fd9\u91cc"),"\u4e86\u89e3\u8fd9\u4e2a\u53d8\u91cf\u7684\u5b9e\u73b0\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'# 10.0.5.113:8000 \u76d1\u542c\u5668\u4e0b\u7684\u67d0\u8def\u7531\u914d\u7f6e\n{\n  "name": "vhost1",\n  "domains": [\n    "apisix.apache.org"\n  ],\n  "routes": [\n    {\n      "name": "route1",\n      "match": {\n        "path_specifier": {\n        "prefix": "/foo/baz"\n        }\n      },\n      "action": {\n        "route": {\n          "cluster_specifier": {\n            "cluster": "httpbin.default.svc.cluster.local"\n          }\n        }\n      }\n    }\n  ]\n}\n\n# \u8f6c\u6362\u6210 Apache APISIX \u7684\u914d\u7f6e\u540e\uff1a\n{\n  "uris": [\n    "/foo/baz*"\n  ],\n  "hosts": [\n    "apisix.apache.org"\n  ],\n\n  # \u8be5\u8def\u7531\u5339\u914d\u65f6\u9700\u8981\u5224\u65ad\u5bf9\u5e94\u8fde\u63a5\u539f\u59cb\u7684\u76ee\u6807\u5730\u5740\u662f\u5426\u662f "10.0.5.113:8000"\uff0c\u5373\n  # httpbin.default.svc.cluster.local \u8fd9\u4e00\u670d\u52a1\u7684 ClusterIP\uff08\u53ea\u8003\u8651 Kubernetes\n  # \u573a\u666f\uff09\u3002\n\n  "vars": [\n    ["connection_original_dst", "==", "10.0.5.113:8000"]\n  ]\n\n  # upstream_id \u5b9a\u4e49\u4e86 httpbin.default.svc.cluster.local \u8fd9\u4e00\u670d\u52a1\uff0c\n  # \u5305\u542b\u5176\u6700\u65b0\u7684\u5b9e\u4f8b\u5730\u5740\u548c\u5176\u4ed6\u76f8\u5173\u7684\u8d1f\u8f7d\u5747\u8861\u3001\u5065\u5eb7\u68c0\u67e5\u7b49\u914d\u7f6e\u3002\n  "upstream_id": "90ba12b92e2d417f6802536696431724d59856ea"\n}\n')),(0,i.kt)("p",null,"\u8f6c\u6362\u540e\u7684\u914d\u7f6e\u5c06\u88ab\u7f13\u5b58\u5728 apisix-mesh-agent \u7684\u5185\u5b58\u4e2d\u3002\u90a3\u4e48\u6570\u636e\u53c8\u8be5\u600e\u4e48\u4f20\u9012\u7ed9 Apache APISIX \u5462\uff1f"),(0,i.kt)("h2",{id:"\u6a21\u62df-etcd"},"\u6a21\u62df ETCD"),(0,i.kt)("p",null,"Apache APISIX \u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://etcd.io/"},"ETCD")," \u4f5c\u4e3a\u5176\u914d\u7f6e\u4e2d\u5fc3\uff0c\u901a\u8fc7 ETCD \u7684 watch \u673a\u5236\u4e0d\u65ad\u83b7\u53d6\u6700\u65b0\u7684\u914d\u7f6e\u4ece\u800c\u4fdd\u8bc1\u5176\u5904\u7406\u6b63\u786e\u6027\u3002\u4e3a\u4e86\u80fd\u8ba9 Apache APISIX \u5728\u4e0d\u505a\u4efb\u4f55\u6539\u53d8\u7684\u60c5\u51b5\u4e0b\u5c31\u80fd\u5de5\u4f5c\u4e8e\u670d\u52a1\u7f51\u683c\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u8ba9 apisix-mesh-agent \u6a21\u62df\u4e86 ",(0,i.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.4/learning/api/"},"ETCD V3 APIs"),"\uff0c\u4ece\u800c\u80fd\u591f\u5c06\u5176\u4ece\u63a7\u5236\u9762\u83b7\u53d6\u5230\u7684\u914d\u7f6e\uff08\u52a0\u4ee5\u8f6c\u6362\u540e\uff09\u4f20\u9012\u5230\u672c\u5730\u7684 Apache APISIX \u8fdb\u7a0b\u3002"),(0,i.kt)("p",null,"\u76ee\u524d apisix-mesh-agent \u4e3b\u8981\u5b9e\u73b0\u7684 API \u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"Range")," \uff08\u83b7\u53d6\u6307\u5b9a\u914d\u7f6e\uff09\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"Watch")," \uff08\u76d1\u542c\u6307\u5b9a\u914d\u7f6e\u53d8\u66f4\uff09\u4e24\u4e2a\u53ea\u8bfb\u7684 ETCD API \u63a5\u53e3\uff0c\u5e76\u4e14\u652f\u6301\u4e86\u6839\u636e\u952e\u503c\u6765\u83b7\u53d6\u4e0d\u540c\u7684\u8d44\u6e90\uff08\u5982\u8def\u7531\u548c\u4e0a\u6e38\u8d44\u6e90\uff09\u3002\u5bf9\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"Watch")," \u63a5\u53e3\uff0c\u6211\u4eec\u9700\u8981\u63a8\u9001\u589e\u91cf\u66f4\u65b0\u4e8b\u4ef6\uff0c\u800c\u7c7b\u4f3c Istio \u8fd9\u6837\u7684\u63a7\u5236\u9762\u4f7f\u7528\u7684\u662f xDS \u534f\u8bae\u4e2d\u7684 SotW\uff08State of the World\uff09\u53d8\u79cd\uff0c\u5373\u6bcf\u6b21\u90fd\u662f\u63a8\u9001\u5168\u91cf\u6570\u636e\uff0c\u4e3a\u4e86\u80fd\u591f\u83b7\u53d6\u5230\u66f4\u65b0\u4e8b\u4ef6\uff0capisix-mesh-agent \u4f1a\u5c06\u5f53\u524d\u83b7\u53d6\u5230\u7684\u6570\u636e\u4e0e\u4e0a\u4e00\u6b21\u7684\u6570\u636e\u72b6\u6001\u8fdb\u884c\u5bf9\u6bd4\uff0c\u4ece\u800c\u5bf9\u6bd4\u5f97\u5230\u589e\u91cf\u66f4\u65b0\u4e8b\u4ef6\u7136\u540e\u4f20\u9012\u5230 Apache APISIX\u3002"),(0,i.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,i.kt)("p",null,"\u901a\u8fc7\u5f15\u5165 apisix-mesh-agent \u8fd9\u4e00\u4e2d\u95f4\u5c42\uff0c\u6211\u4eec\u6210\u529f\u5730\u5c06 Apache APISIX \u90e8\u7f72\u5728\u670d\u52a1\u7f51\u683c\u4e2d\uff0c\u672a\u6765 apisix-mesh-agent \u4e5f\u5c06\u652f\u6301 xDS \u534f\u8bae\u4e2d\u66f4\u591a\u7684\u529f\u80fd\u4ee5\u53ca\u53ef\u89c2\u6d4b\u6027\u548c\u8bc1\u4e66\u7ba1\u7406\u7b49\u65b9\u9762\u7684\u80fd\u529b\uff0c\u4ece\u800c\u8ba9 APISIX Mesh \u53d8\u5f97\u66f4\u52a0\u6210\u719f\u4e0e\u5f3a\u5927\u3002"))}l.isMDXComponent=!0},99899:function(e,t,n){t.Z=n.p+"assets/images/2021-07-16-1-9692f5796757d6f45a0fa0d66629ef40.png"}}]);