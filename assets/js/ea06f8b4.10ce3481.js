"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9345],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},I={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},A=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),A=l(n),h=a,s=A["".concat(c,".").concat(h)]||A[h]||I[h]||p;return n?r.createElement(s,o(o({ref:t},u),{},{components:n})):r.createElement(s,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=A;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}A.displayName="MDXCreateElement"},35052:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c},default:function(){return u}});var r=n(87462),a=n(63366),p=(n(67294),n(3905)),o={title:"Apache APISIX Meetup \u4e0a\u6d77\u7ad9\u5168\u7a0b\u56de\u987e",keywords:["API \u7f51\u5173","APISIX","Meetup","\u4e0a\u6d77\u7ad9","\u56de\u987e"],description:"\u6d3b\u52a8\u56de\u987e\uff1aApache APISIX Meetup \u4e0a\u6d77\u7ad9\u8bae\u9898\u5206\u4eab\u53ca\u89c6\u9891\u56de\u987e\u3002",tags:["technology"]},i={permalink:"/blog/2021/08/24/shanghai-meetup-recap",source:"@site/blog/2021-08-24-shanghai-meetup-recap.md",title:"Apache APISIX Meetup \u4e0a\u6d77\u7ad9\u5168\u7a0b\u56de\u987e",description:"\u6d3b\u52a8\u56de\u987e\uff1aApache APISIX Meetup \u4e0a\u6d77\u7ad9\u8bae\u9898\u5206\u4eab\u53ca\u89c6\u9891\u56de\u987e\u3002",date:"2021-08-24T00:00:00.000Z",formattedDate:"August 24, 2021",tags:[{label:"technology",permalink:"/blog/tags/technology"}],readingTime:.5,truncated:!0,prevItem:{title:"\u4e3a\u4ec0\u4e48 Apache APISIX \u9009\u62e9 Nginx + Lua \u8fd9\u4e2a\u6280\u672f\u6808\uff1f",permalink:"/blog/2021/08/25/Why-Apache-APISIX-chose-Nginx-and-Lua"},nextItem:{title:"Go \u8ba9 Apache APISIX \u5982\u864e\u6dfb\u7ffc",permalink:"/blog/2021/08/19/go-makes-Apache-APISIX-better"}},c=[{value:"\u57fa\u4e8eApache APISIX\uff0c\u7231\u5947\u827a API \u7f51\u5173\u7684\u843d\u5730\u5b9e\u8df5",id:"\u57fa\u4e8eapache-apisix\uff0c\u7231\u5947\u827a-api-\u7f51\u5173\u7684\u843d\u5730\u5b9e\u8df5",children:[]},{value:"\u5982\u4f55\u4f7f\u7528 Apache APISIX \u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1",id:"\u5982\u4f55\u4f7f\u7528-apache-apisix-\u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1",children:[]},{value:"\u6570\u636e\u4e3b\u6743\u4e0e Apache APISIX \u7f51\u5173\u843d\u5730\u5b9e\u8df5",id:"\u6570\u636e\u4e3b\u6743\u4e0e-apache-apisix-\u7f51\u5173\u843d\u5730\u5b9e\u8df5",children:[]},{value:"\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\uff0cApache APISIX \u611f\u6069\u6709\u4f60",id:"\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\uff0capache-apisix-\u611f\u6069\u6709\u4f60",children:[]}],l={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Apache APISIX Meetup \u4e0a\u6d77\u7ad9\u5df2\u4e8e\u4e0a\u5468\u516d\uff088\u670821\u65e5\uff09\u987a\u5229\u4e3e\u529e\ud83c\udf89\ud83c\udf89\ud83c\udf89"),(0,p.kt)("p",null,"\u672c\u6b21 Meetup \u7531 ",(0,p.kt)("a",{parentName:"p",href:"https://www.apiseven.com/zh"},"API7.AI")," \u53d1\u8d77\uff0c\u9080\u8bf7\u4e86\u7231\u5947\u827a\u3001AirWallex \u7a7a\u4e2d\u4e91\u6c47\u7b49\u5408\u4f5c\u4f19\u4f34\uff0c\u4e0e Apache APISIX \u6280\u672f\u5927\u5496\u3001Apache APISIX PMC \u6210\u5458\u3001\u793e\u533a\u6280\u672f\u4e13\u5bb6\u6c47\u805a\u4e00\u5802\uff0c\u5171\u540c\u63a2\u8ba8\u4e86\u5173\u4e8e Apache APISIX \u793e\u533a\u53d1\u5c55\u3001\u884c\u4e1a\u5b9e\u8df5\u7b49\u8bdd\u9898\u3002"),(0,p.kt)("p",null,"\u4e00\u8d77\u6765\u56de\u987e\u4e0b\u5927\u4f1a\u4e2d\u4ee4\u4eba\u96be\u5fd8\u7684\u7cbe\u5f69\u6f14\u8bb2\u5427\uff01"),(0,p.kt)("h2",{id:"\u57fa\u4e8eapache-apisix\uff0c\u7231\u5947\u827a-api-\u7f51\u5173\u7684\u843d\u5730\u5b9e\u8df5"},"\u57fa\u4e8eApache APISIX\uff0c\u7231\u5947\u827a API \u7f51\u5173\u7684\u843d\u5730\u5b9e\u8df5"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u8bb2\u5e08"),"\uff1a\u4f55\u806a"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u4e2a\u4eba\u4ecb\u7ecd"),"\uff1a\u9ad8\u7ea7\u7814\u53d1\u5de5\u7a0b\u5e08\uff0cIIG \u57fa\u7840\u67b6\u6784\u90e8-\u8ba1\u7b97\u4e91\uff0c\u4e3b\u8981\u8d1f\u8d23\u7231\u5947\u827a\u7f51\u5173\u5f00\u53d1\u548c\u8fd0\u7ef4\u5de5\u4f5c\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u8bae\u9898\u8be6\u60c5"),"\uff1aAPI \u7f51\u5173\u5df2\u7ecf\u6210\u4e3a\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\u4e0d\u53ef\u6216\u7f3a\u7684\u4e00\u73af\u3002\u5b83\u65e2\u627f\u62c5\u7740\u670d\u52a1\u5bf9\u5916\u7684\u552f\u4e00\u95e8\u6237\uff0c\u53c8\u9700\u8981\u6ee1\u8db3\u8bb8\u591a\u5e94\u7528\u7684\u5171\u6027\u529f\u80fd\u3002\u7231\u5947\u827a\u4f5c\u4e3a\u4e00\u5bb6\u5728\u7ebf\u89c6\u9891\u516c\u53f8\uff0c\u6bcf\u5929\u9700\u8981\u627f\u8f7d\u5343\u4e07\u7ea7\u7684\u8c03\u7528\u91cf\uff0c\u5e76\u4e14\u5bf9\u6570\u636e\u7684\u5b89\u5168\u3001\u7528\u6237\u8bf7\u6c42\u54cd\u5e94\u65f6\u6548\u3001\u7cfb\u7edf\u7684\u7a33\u5b9a\u90fd\u6709\u7740\u6781\u5176\u4e25\u683c\u7684\u8981\u6c42\uff0c\u56e0\u6b64\u516c\u53f8\u9700\u8981\u6253\u9020\u4e00\u4e2a\u9ad8\u6027\u80fd\u3001\u9ad8\u53ef\u7528\u7684 API \u7f51\u5173\u3002\u672c\u6b21\u5206\u4eab\u7b80\u5355\u4ecb\u7ecd\u7231\u5947\u827a API \u7f51\u5173\u7684\u67b6\u6784\u4ee5\u53ca\u5b9e\u73b0\u7684\u529f\u80fd\uff0c\u5305\u62ec\u8bf7\u6c42\u5206\u53d1\u3001\u6761\u4ef6\u8def\u7531\u3001Api \u7ba1\u7406\u3001\u9650\u6d41\u7194\u65ad\u3001\u5b89\u5168\u4e09\u9632\u3001\u76d1\u63a7\u62a5\u8b66\u4ee5\u53ca\u5168\u94fe\u8def\u8ffd\u8e2a\u7b49\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u89c6\u9891\u56de\u987e"),"\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1Qq4y1M7bK"},"\u7231\u5947\u827a\u57fa\u4e8e Apache APISIX \u7684 API \u7f51\u5173\u843d\u5730\u5b9e\u8df5")),(0,p.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528-apache-apisix-\u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1"},"\u5982\u4f55\u4f7f\u7528 Apache APISIX \u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u8bb2\u5e08"),"\uff1a\u6731\u6b23\u6b23"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u4e2a\u4eba\u4ecb\u7ecd"),"\uff1aAPI7 \u5de5\u7a0b\u5e08\uff0cApache APISIX Committer"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u8bae\u9898\u8be6\u60c5"),"\uff1a\u8eab\u4efd\u8ba4\u8bc1\u662f\u96f6\u4fe1\u4efb\u67b6\u6784\u4e2d\u975e\u5e38\u91cd\u8981\u7684\u4e00\u73af\u3002\u901a\u8fc7\u8eab\u4efd\u8ba4\u8bc1\u53ef\u4ee5\u6709\u6548\u4fdd\u62a4\u670d\u52a1\uff0c\u907f\u514d\u672a\u7ecf\u6388\u6743\u7684\u6076\u610f\u8bbf\u95ee\uff0c\u6570\u636e\u6cc4\u6f0f\u4ee5\u53ca\u9ed1\u5ba2\u653b\u51fb\u3002APISIX \u4f5c\u4e3a\u4e00\u4e2a\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7684 API \u7f51\u5173\uff0c\u652f\u6301\u4e30\u5bcc\u7684\u8eab\u4efd\u8ba4\u8bc1\u63d2\u4ef6\uff0c\u672c\u6b21\u5206\u4eab\u5c06\u4ecb\u7ecd\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u7684\u4f18\u70b9\u548c\u5982\u4f55\u5728 APISIX \u4e0a\u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u89c6\u9891\u56de\u987e"),"\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1WA411c7pa"},"\u4f7f\u7528 API \u7f51\u5173 APISIX \u6765\u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1")),(0,p.kt)("h2",{id:"\u6570\u636e\u4e3b\u6743\u4e0e-apache-apisix-\u7f51\u5173\u843d\u5730\u5b9e\u8df5"},"\u6570\u636e\u4e3b\u6743\u4e0e Apache APISIX \u7f51\u5173\u843d\u5730\u5b9e\u8df5"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u8bb2\u5e08"),"\uff1a\u674e\u6768"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u4e2a\u4eba\u4ecb\u7ecd"),"\uff1aAirWallex \u7a7a\u4e2d\u4e91\u6c47\u6280\u672f\u5e73\u53f0\u8d1f\u8d23\u4eba"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u8bae\u9898\u8be6\u60c5"),"\uff1a\u6570\u636e\u65e0\u5904\u4e0d\u5728\uff0c\u6bcf\u65f6\u6bcf\u523b\u90fd\u6709\u6d77\u91cf\u6570\u636e\u5728\u4e16\u754c\u5404\u5730\u88ab\u5904\u7406\u3001\u4f20\u8f93\u3001\u5b58\u50a8\u3002\u7136\u800c\u6570\u636e\u4e16\u754c\u4e0d\u662f\u6cd5\u5916\u4e4b\u5730\uff0c\u6570\u636e\u7684\u6536\u96c6\u4e0e\u5904\u7406\u5fc5\u987b\u9075\u7167\u5404\u56fd\u6cd5\u5f8b\u6267\u884c\u3002\u8fd9\u4e3a\u4f01\u4e1a\u7684\u6280\u672f\u67b6\u6784\u63d0\u51fa\u4e86\u5de8\u5927\u7684\u6311\u6218\uff0c\u5982\u4f55\u517c\u987e\u7528\u6237\u4f53\u9a8c\u3001\u6574\u6d01\u67b6\u6784\u4e0e\u6570\u636e\u4e3b\u6743\uff1fAPI \u7f51\u5173\u5728\u4f01\u4e1a\u67b6\u6784\u4e2d\u5177\u6709\u7279\u6b8a\u5730\u4f4d\uff0c\u4e5f\u56e0\u6b64\u80fd\u5728\u6570\u636e\u4e3b\u6743\u573a\u666f\u4e0b\u8d77\u5230\u7279\u6b8a\u91cd\u8981\u7684\u4f5c\u7528\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u89c6\u9891\u56de\u987e"),"\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1GL4y1Y7sR"},"Apache APISIX \u4e0e\u6570\u636e\u4e3b\u6743\u7684\u843d\u5730\u5b9e\u8df5")),(0,p.kt)("h2",{id:"\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\uff0capache-apisix-\u611f\u6069\u6709\u4f60"},"\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\uff0cApache APISIX \u611f\u6069\u6709\u4f60"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u8bb2\u5e08"),"\uff1a\u738b\u9662\u751f"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u4e2a\u4eba\u4ecb\u7ecd"),"\uff1aAPI7.AI \u8054\u5408\u521b\u59cb\u4eba & CTO"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u8bae\u9898\u8be6\u60c5"),"\uff1aApache APISIX \u4ece\u5f00\u6e90\u7b2c\u4e00\u5929\u5c31\u4ee5\u793e\u533a\u65b9\u5f0f\u6210\u957f\uff0c\u77ed\u77ed\u4e24\u5e74\u65f6\u95f4\u4ea7\u54c1\u591a\u9879\u6280\u672f\u6307\u6807\u5305\u63fd\u7b2c\u4e00\uff0c\u8fc5\u901f\u6210\u4e3a\u5168\u4e16\u754c\u6700\u6d3b\u8dc3 API \u7f51\u5173\u9879\u76ee\uff0c\u5e76\u786e\u5b9a\u4e86\u4e13\u5c5e\u4e8e Apache APISIX \u7684\u9053\u8def\uff1a\u7edf\u4e00 7 \u5c42\u6d41\u91cf\u5904\u7406\u3002\u4e00\u4e2a\u4eba\u53ef\u80fd\u8d70\u7684\u5f88\u5feb\uff0c\u4e00\u7fa4\u4eba\u624d\u80fd\u8d70\u7684\u66f4\u8fdc\uff0cApache APISIX \u6210\u957f\u4e4b\u8def\u611f\u6069\u6709\u4f60\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u89c6\u9891\u56de\u987e"),"\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1Hh411q7eB"},"\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\uff0cApache APISIX \u611f\u6069\u6709\u4f60")))}u.isMDXComponent=!0}}]);