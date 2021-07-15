(self.webpackChunk=self.webpackChunk||[]).push([[70558],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,h=m["".concat(o,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(h,p(p({ref:t},c),{},{components:a})):n.createElement(h,p({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var s=2;s<i;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},11423:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return o},default:function(){return c}});var n=a(22122),r=a(19756),i=(a(67294),a(3905)),p={title:"\u5feb\u901f\u5165\u95e8\u6307\u5357"},l={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"\u5feb\u901f\u5165\u95e8\u6307\u5357",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/zh/docs/apisix/next/getting-started",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/getting-started.md",version:"current",frontMatter:{title:"\u5feb\u901f\u5165\u95e8\u6307\u5357"},sidebar:"docs",previous:{title:"Debug Mode",permalink:"/zh/docs/apisix/next/architecture-design/debug-mode"},next:{title:"\u5982\u4f55\u6784\u5efa Apache APISIX",permalink:"/zh/docs/apisix/next/how-to-build"}},o=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",children:[]},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",children:[]},{value:"\u7b2c\u4e00\u6b65\uff1a\u5b89\u88c5 Apache APISIX",id:"\u7b2c\u4e00\u6b65\uff1a\u5b89\u88c5-apache-apisix",children:[]},{value:"\u7b2c\u4e8c\u6b65\uff1a\u521b\u5efa\u8def\u7531",id:"\u7b2c\u4e8c\u6b65\uff1a\u521b\u5efa\u8def\u7531",children:[{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",children:[]},{value:"\u521b\u5efa\u4e0a\u6e38\u670d\u52a1\uff08Upstream\uff09",id:"\u521b\u5efa\u4e0a\u6e38\u670d\u52a1\uff08upstream\uff09",children:[]},{value:"\u7ed1\u5b9a\u8def\u7531\u4e0e\u4e0a\u6e38\u670d\u52a1",id:"\u7ed1\u5b9a\u8def\u7531\u4e0e\u4e0a\u6e38\u670d\u52a1",children:[]}]},{value:"\u7b2c\u4e09\u6b65\uff1a\u9a8c\u8bc1",id:"\u7b2c\u4e09\u6b65\uff1a\u9a8c\u8bc1",children:[]},{value:"\u8fdb\u9636\u64cd\u4f5c",id:"\u8fdb\u9636\u64cd\u4f5c",children:[{value:"\u6dfb\u52a0\u8eab\u4efd\u9a8c\u8bc1",id:"\u6dfb\u52a0\u8eab\u4efd\u9a8c\u8bc1",children:[]},{value:"\u4e3a\u8def\u7531\u6dfb\u52a0\u524d\u7f00",id:"\u4e3a\u8def\u7531\u6dfb\u52a0\u524d\u7f00",children:[]},{value:"APISIX Dashboard",id:"apisix-dashboard",children:[]},{value:"\u5e38\u89c1\u95ee\u9898\u6392\u67e5",id:"\u5e38\u89c1\u95ee\u9898\u6392\u67e5",children:[]}]}],s={toc:o};function c(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,i.kt)("p",null,"\u672c\u6587\u662f Apache APISIX \u7684\u5feb\u901f\u5165\u95e8\u6307\u5357\u3002\u5feb\u901f\u5165\u95e8\u5206\u4e3a\u4e09\u4e2a\u6b65\u9aa4\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"Docker Compose")," \u5b89\u88c5 Apache APISIX\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u521b\u5efa\u8def\u7531\u5e76\u7ed1\u5b9a\u4e0a\u6e38\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u547d\u4ee4\u884c\u8bed\u53e5 ",(0,i.kt)("inlineCode",{parentName:"li"},"curl")," \u9a8c\u8bc1\u7ed1\u5b9a\u4e4b\u540e\u8fd4\u56de\u7684\u7ed3\u679c\u662f\u5426\u7b26\u5408\u9884\u671f\u3002")),(0,i.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u672c\u6587\u4e5f\u63d0\u4f9b\u4e86 Apache APISIX \u7684\u4e00\u4e9b\u8fdb\u9636\u64cd\u4f5c\u6280\u5de7\uff0c\u5305\u62ec\uff1a\u6dfb\u52a0\u8eab\u4efd\u9a8c\u8bc1\u3001\u4e3a\u8def\u7531\u6dfb\u52a0\u524d\u7f00\u3001\u4f7f\u7528 APISIX Dashboard \u4ee5\u53ca\u5e38\u89c1\u95ee\u9898\u6392\u67e5\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u5c06\u4ee5\u4e0b\u9762\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"echo")," \u7aef\u70b9\u4e3a\u4f8b\uff0c\u5b83\u5c06\u8fd4\u56de\u6211\u4eec\u4f20\u9012\u7684\u53c2\u6570\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u5185\u5bb9")),(0,i.kt)("p",null,"\u8bf7\u6c42 URL \u7531\u4ee5\u4e0b\u8fd9\u4e9b\u53c2\u6570\u6784\u6210\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Protocol\uff1a\u5373\u7f51\u7edc\u4f20\u8f93\u534f\u8bae\uff0c\u793a\u4f8b\u4e2d\u4f7f\u7528\u7684\u662f\u6700\u5e38\u89c1\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"HTTP")," \u534f\u8bae\u3002"),(0,i.kt)("li",{parentName:"ul"},"Port\uff1a\u5373\u7aef\u53e3\uff0c\u793a\u4f8b\u4e2d\u4f7f\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"80")," \u7aef\u53e3\u3002"),(0,i.kt)("li",{parentName:"ul"},"Host\uff1a\u5373\u5bbf\u4e3b\u673a\uff0c\u793a\u4f8b\u4e2d\u7684\u4e3b\u673a\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"httpbin.org"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"Path\uff1a\u5373\u8def\u5f84\uff0c\u793a\u4f8b\u4e2d\u7684\u8def\u5f84\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"/get"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"Query Parameters\uff1a\u5373\u67e5\u8be2\u5b57\u7b26\u4e32\uff0c\u8fd9\u91cc\u6709\u4e24\u4e2a\u5b57\u7b26\u4e32\uff0c\u5206\u522b\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"foo1"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"foo2"),"\u3002")),(0,i.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u53d1\u9001\u8bf7\u6c42\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request GET "http://httpbin.org/get?foo1=bar1&foo2=bar2"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u5185\u5bb9")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "args": {\n    "foo1": "bar1",\n    "foo2": "bar2"\n  },\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.29.0",\n    "X-Amzn-Trace-Id": "Root=1-6088fe84-24f39487166cce1f0e41efc9"\n  },\n  "origin": "58.152.81.42",\n  "url": "http://httpbin.org/get?foo1=bar1&foo2=bar2"\n}\n')),(0,i.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5df2\u5b89\u88c5",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose \u7ec4\u4ef6"),"\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u672c\u6587\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://curl.se/docs/manpage.html"},"curl")," \u547d\u4ee4\u884c\u8fdb\u884c API \u6d4b\u8bd5\u3002\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u5de5\u5177\u4f8b\u5982 ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/"},"Postman"),"\u7b49\uff0c\u8fdb\u884c\u6d4b\u8bd5\u3002"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u8bf4\u660e")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u60a8\u5df2\u7ecf\u5b89\u88c5\u4e86 Apache APISIX\uff0c\u8bf7\u76f4\u63a5\u9605\u8bfb ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/getting-started#%E7%AC%AC%E4%BA%8C%E6%AD%A5%EF%BC%9A%E5%88%9B%E5%BB%BA%E8%B7%AF%E7%94%B1"},"\u7b2c\u4e8c\u6b65")))),(0,i.kt)("h2",{id:"\u7b2c\u4e00\u6b65\uff1a\u5b89\u88c5-apache-apisix"},"\u7b2c\u4e00\u6b65\uff1a\u5b89\u88c5 Apache APISIX"),(0,i.kt)("p",null,"\u5f97\u76ca\u4e8e Docker\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u542f\u52a8 Apache APISIX \u5e76\u542f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/admin-api"},"Admin API"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#\u5c06 Apache APISIX \u7684 Docker \u955c\u50cf\u4e0b\u8f7d\u5230\u672c\u5730\ngit clone https://github.com/apache/apisix-docker.git\n# \u5c06\u5f53\u524d\u7684\u76ee\u5f55\u5207\u6362\u5230 apisix-docker/example \u8def\u5f84\u4e0b\ncd apisix-docker/example\n# \u8fd0\u884c docker-compose \u547d\u4ee4\uff0c\u5b89\u88c5 Apache APISIX\ndocker-compose -p docker-apisix up -d\n")),(0,i.kt)("p",null,"\u4e0b\u8f7d\u6240\u9700\u7684\u6240\u6709\u6587\u4ef6\u5c06\u82b1\u8d39\u4e00\u4e9b\u65f6\u95f4\uff0c\u8fd9\u53d6\u51b3\u4e8e\u60a8\u7684\u7f51\u7edc\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\u3002"),(0,i.kt)("p",null,"\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u5728\u8fd0\u884c Docker \u7684\u5bbf\u4e3b\u673a\u4e0a\u6267\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"curl"),"\u547d\u4ee4\u8bbf\u95ee Admin API\uff0c\u6839\u636e\u8fd4\u56de\u6570\u636e\u5224\u65ad Apache APISIX \u662f\u5426\u6210\u529f\u542f\u52a8\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6ce8\u610f\uff1a\u8bf7\u5728\u8fd0\u884c Docker \u7684\u5bbf\u4e3b\u673a\u4e0a\u6267\u884c curl \u547d\u4ee4\u3002\ncurl \"http://127.0.0.1:9080/apisix/admin/services/\" -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1'\n")),(0,i.kt)("p",null,"\u8fd4\u56de\u6570\u636e\u5982\u4e0b\u6240\u793a\uff0c\u8868\u793aApache APISIX \u6210\u529f\u542f\u52a8\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count":1,\n  "action":"get",\n  "node":{\n    "key":"/apisix/services",\n    "nodes":{},\n    "dir":true\n  }\n}\n')),(0,i.kt)("h2",{id:"\u7b2c\u4e8c\u6b65\uff1a\u521b\u5efa\u8def\u7531"},"\u7b2c\u4e8c\u6b65\uff1a\u521b\u5efa\u8def\u7531"),(0,i.kt)("p",null,"\u60a8\u73b0\u5728\u5df2\u7ecf\u62e5\u6709\u4e00\u4e2a\u8fd0\u884c\u4e2d\u7684 Apache APISIX \u5b9e\u4f8b\u4e86\uff01\u63a5\u4e0b\u6765\uff0c\u8ba9\u6211\u4eec\u6765\u521b\u5efa\u4e00\u4e2a\u8def\u7531\uff08Route\uff09\u3002"),(0,i.kt)("h3",{id:"\u5de5\u4f5c\u539f\u7406"},"\u5de5\u4f5c\u539f\u7406"),(0,i.kt)("p",null,"Apache APISIX \u63d0\u4f9b\u4e86\u5f3a\u5927\u7684 ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/admin-api"},"Admin API")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard"},"Dashboard")," \u53ef\u4f9b\u6211\u4eec\u4f7f\u7528\u3002\u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528 Admin API \u6765\u505a\u6f14\u793a\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/architecture-design/route"},"Route")," \u5e76\u4e0e\u4e0a\u6e38\u670d\u52a1\uff08\u901a\u5e38\u4e5f\u88ab\u79f0\u4e3a",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/architecture-design/upstream"},"Upstream"),"\u6216\u540e\u7aef\u670d\u52a1\uff09\u7ed1\u5b9a\uff0c\u5f53\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"\u8bf7\u6c42\uff08Request\uff09")," \u5230\u8fbe Apache APISIX \u65f6\uff0cApache APISIX \u5c31\u4f1a\u660e\u767d\u8fd9\u4e2a\u8bf7\u6c42\u5e94\u8be5\u8f6c\u53d1\u5230\u54ea\u4e2a\u4e0a\u6e38\u670d\u52a1\u4e2d\u3002"),(0,i.kt)("p",null,"\u56e0\u4e3a\u6211\u4eec\u4e3a Route \u5bf9\u8c61\u914d\u7f6e\u4e86\u5339\u914d\u89c4\u5219\uff0c\u6240\u4ee5 Apache APISIX \u53ef\u4ee5\u5c06\u8bf7\u6c42\u8f6c\u53d1\u5230\u5bf9\u5e94\u7684\u4e0a\u6e38\u670d\u52a1\u3002\u4ee5\u4e0b\u4ee3\u7801\u662f\u4e00\u4e2a Route \u914d\u7f6e\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "methods": ["GET"],\n  "host": "example.com",\n  "uri": "/services/users/*",\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "httpbin.org:80": 1\n    }\n  }\n}\n')),(0,i.kt)("p",null,"\u8fd9\u6761\u8def\u7531\u914d\u7f6e\u610f\u5473\u7740\uff0c\u5f53\u5b83\u4eec\u6ee1\u8db3\u4e0b\u8ff0\u7684 ",(0,i.kt)("strong",{parentName:"p"},"\u6240\u6709")," \u89c4\u5219\u65f6\uff0c\u6240\u6709\u5339\u914d\u7684\u5165\u7ad9\u8bf7\u6c42\u90fd\u5c06\u88ab\u8f6c\u53d1\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"httpbin.org:80")," \u8fd9\u4e2a\u4e0a\u6e38\u670d\u52a1\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u7684 HTTP \u65b9\u6cd5\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"GET"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u5934\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"li"},"host")," \u5b57\u6bb5\uff0c\u4e14\u5b83\u7684\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"example.com"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u8def\u5f84\u5339\u914d ",(0,i.kt)("inlineCode",{parentName:"li"},"/services/users/*"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"*")," \u610f\u5473\u7740\u4efb\u610f\u7684\u5b50\u8def\u5f84\uff0c\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"li"},"/services/users/getAll?limit=10"),"\u3002")),(0,i.kt)("p",null,"\u5f53\u8fd9\u6761\u8def\u7531\u521b\u5efa\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 Apache APISIX \u5bf9\u5916\u66b4\u9732\u7684\u5730\u5740\u53bb\u8bbf\u95ee\u4e0a\u6e38\u670d\u52a1\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -i -X GET "http://{APISIX_BASE_URL}/services/users/getAll?limit=10" -H "Host: example.com"\n')),(0,i.kt)("p",null,"\u8fd9\u5c06\u4f1a\u88ab Apache APISIX \u8f6c\u53d1\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"http://httpbin.org:80/services/users/getAll?limit=10"),"\u3002"),(0,i.kt)("h3",{id:"\u521b\u5efa\u4e0a\u6e38\u670d\u52a1\uff08upstream\uff09"},"\u521b\u5efa\u4e0a\u6e38\u670d\u52a1\uff08Upstream\uff09"),(0,i.kt)("p",null,"\u8bfb\u5b8c\u4e0a\u4e00\u8282\uff0c\u6211\u4eec\u77e5\u9053\u5fc5\u987b\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Route")," \u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"Upstream"),"\u3002\u53ea\u9700\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u5373\u53ef\u521b\u5efa\u4e00\u4e2a\u4e0a\u6e38\u670d\u52a1\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl "http://127.0.0.1:9080/apisix/admin/upstreams/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "type": "roundrobin",\n  "nodes": {\n    "httpbin.org:80": 1\n  }\n}\'\n')),(0,i.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"roundrobin")," \u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\u673a\u5236\uff0c\u5e76\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"httpbin.org:80")," \u8bbe\u7f6e\u4e3a\u6211\u4eec\u7684\u4e0a\u6e38\u670d\u52a1\uff0c\u5176 ID \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"\u3002\u66f4\u591a\u5b57\u6bb5\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/admin-api"},"Admin API"),"\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u521b\u5efa\u4e0a\u6e38\u670d\u52a1\u5b9e\u9645\u4e0a\u5e76\u4e0d\u662f\u5fc5\u9700\u7684\uff0c\u56e0\u4e3a\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/architecture-design/plugin"},"\u63d2\u4ef6")," \u62e6\u622a\u8bf7\u6c42\uff0c\u7136\u540e\u76f4\u63a5\u54cd\u5e94\u3002\u4f46\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5047\u8bbe\u9700\u8981\u8bbe\u7f6e\u81f3\u5c11\u4e00\u4e2a\u4e0a\u6e38\u670d\u52a1\u3002"))),(0,i.kt)("h3",{id:"\u7ed1\u5b9a\u8def\u7531\u4e0e\u4e0a\u6e38\u670d\u52a1"},"\u7ed1\u5b9a\u8def\u7531\u4e0e\u4e0a\u6e38\u670d\u52a1"),(0,i.kt)("p",null,"\u6211\u4eec\u521a\u521a\u521b\u5efa\u4e86\u4e00\u4e2a\u4e0a\u6e38\u670d\u52a1\uff0c\u73b0\u5728\u8ba9\u6211\u4eec\u4e3a\u5b83\u7ed1\u5b9a\u4e00\u4e2a\u8def\u7531\uff01"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl "http://127.0.0.1:9080/apisix/admin/routes/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "uri": "/get",\n  "host": "httpbin.org",\n  "upstream_id": "1"\n}\'\n')),(0,i.kt)("h2",{id:"\u7b2c\u4e09\u6b65\uff1a\u9a8c\u8bc1"},"\u7b2c\u4e09\u6b65\uff1a\u9a8c\u8bc1"),(0,i.kt)("p",null,"\u6211\u4eec\u5df2\u521b\u5efa\u4e86\u8def\u7531\u4e0e\u4e0a\u6e38\u670d\u52a1\uff0c\u5e76\u5c06\u5b83\u4eec\u8fdb\u884c\u4e86\u7ed1\u5b9a\u3002\u73b0\u5728\u8ba9\u6211\u4eec\u8bbf\u95ee Apache APISIX \u6765\u6d4b\u8bd5\u8fd9\u6761\u8def\u7531\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -i -X GET "http://127.0.0.1:9080/get?foo1=bar1&foo2=bar2" -H "Host: httpbin.org"\n')),(0,i.kt)("p",null,"\u5b83\u4ece\u6211\u4eec\u7684\u4e0a\u6e38\u670d\u52a1\uff08\u5b9e\u9645\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"httpbin.org"),"\uff09\u8fd4\u56de\u6570\u636e\uff0c\u5e76\u4e14\u7ed3\u679c\u7b26\u5408\u9884\u671f\u3002"),(0,i.kt)("h2",{id:"\u8fdb\u9636\u64cd\u4f5c"},"\u8fdb\u9636\u64cd\u4f5c"),(0,i.kt)("p",null,"\u672c\u8282\u63d0\u4f9b\u4e86 Apache APISIX \u7684\u4e00\u4e9b\u8fdb\u9636\u64cd\u4f5c\u6280\u5de7\uff0c\u5305\u62ec\uff1a\u6dfb\u52a0\u8eab\u4efd\u9a8c\u8bc1\u3001\u4e3a\u8def\u7531\u6dfb\u52a0\u524d\u7f00\u3001\u4f7f\u7528 APISIX Dashboard \u4ee5\u53ca\u5e38\u89c1\u95ee\u9898\u6392\u67e5\u3002"),(0,i.kt)("h3",{id:"\u6dfb\u52a0\u8eab\u4efd\u9a8c\u8bc1"},"\u6dfb\u52a0\u8eab\u4efd\u9a8c\u8bc1"),(0,i.kt)("p",null,"\u6211\u4eec\u5728\u7b2c\u4e8c\u6b65\u4e2d\u521b\u5efa\u7684\u8def\u7531\u662f\u516c\u5171\u7684\uff0c\u53ea\u8981\u77e5\u9053 Apache APISIX \u5bf9\u5916\u66b4\u9732\u7684\u5730\u5740\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u4efb\u4f55\u4eba")," \u90fd\u53ef\u4ee5\u8bbf\u95ee\u8fd9\u4e2a\u4e0a\u6e38\u670d\u52a1\uff0c\u8fd9\u79cd\u8bbf\u95ee\u65b9\u5f0f\u6ca1\u6709\u4fdd\u62a4\u63aa\u65bd\uff0c\u5b58\u5728\u4e00\u5b9a\u7684\u5b89\u5168\u9690\u60a3\u3002\u5728\u5b9e\u9645\u5e94\u7528\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u4e3a\u8def\u7531\u6dfb\u52a0\u8eab\u4efd\u9a8c\u8bc1\u3002"),(0,i.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5e0c\u671b\u53ea\u6709\u7279\u5b9a\u7684\u7528\u6237 ",(0,i.kt)("inlineCode",{parentName:"p"},"John")," \u53ef\u4ee5\u8bbf\u95ee\u8fd9\u4e2a\u4e0a\u6e38\u670d\u52a1\uff0c\u9700\u8981\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/architecture-design/consumer"},"\u6d88\u8d39\u8005\uff08Consumer\uff09")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/architecture-design/plugin"},"\u63d2\u4ef6\uff08Plugin\uff09")," \u6765\u5b9e\u73b0\u8eab\u4efd\u9a8c\u8bc1\u3002"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/plugins/key-auth"},"key-auth")," \u63d2\u4ef6\u521b\u5efa\u4e00\u4e2a ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/architecture-design/consumer"},"\u6d88\u8d39\u8005\uff08Consumer\uff09")," ",(0,i.kt)("inlineCode",{parentName:"p"},"John"),"\uff0c\u6211\u4eec\u9700\u8981\u63d0\u4f9b\u4e00\u4e2a\u6307\u5b9a\u7684\u5bc6\u94a5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl "http://127.0.0.1:9080/apisix/admin/consumers" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "username": "john",\n  "plugins": {\n    "key-auth": {\n      "key": "key-of-john"\n    }\n  }\n}\'\n')),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u8ba9\u6211\u4eec\u7ed1\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"\u6d88\u8d39\u8005\uff08John\uff09")," \u5230\u8def\u7531\u4e0a\uff0c\u6211\u4eec\u53ea\u9700\u8981\u4e3a\u8def\u7531 ",(0,i.kt)("strong",{parentName:"p"},"\u542f\u7528")," ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/plugins/key-auth"},"key-auth")," \u63d2\u4ef6\u5373\u53ef\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl "http://127.0.0.1:9080/apisix/admin/routes/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "uri": "/get",\n  "host": "httpbin.org",\n  "plugins": {\n    "key-auth": {}\n  },\n  "upstream_id": "1"\n}\'\n')),(0,i.kt)("p",null,"\u73b0\u5728\u5f53\u6211\u4eec\u8bbf\u95ee\u7b2c\u4e8c\u6b65\u521b\u5efa\u7684\u8def\u7531\u65f6\uff0c\u4f1a\u89e6\u53d1 ",(0,i.kt)("strong",{parentName:"p"},"Unauthorized Error\uff08\u672a\u7ecf\u6388\u6743\u7684\u9519\u8bef\uff09"),"\u3002"),(0,i.kt)("p",null,"\u8bbf\u95ee\u90a3\u4e2a\u8def\u7531\u7684\u6b63\u786e\u65b9\u5f0f\u662f\u6dfb\u52a0\u4e00\u4e2a\u5e26\u6709\u6b63\u786e\u5bc6\u94a5\u7684\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"apikey")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Header"),"\uff0c\u5982\u4e0b\u65b9\u4ee3\u7801\u6240\u793a\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -i -X GET http://127.0.0.1:9080/get -H \"Host: httpbin.org\" -H 'apikey: superSecretAPIKey'\n")),(0,i.kt)("h3",{id:"\u4e3a\u8def\u7531\u6dfb\u52a0\u524d\u7f00"},"\u4e3a\u8def\u7531\u6dfb\u52a0\u524d\u7f00"),(0,i.kt)("p",null,"\u73b0\u5728\uff0c\u5047\u8bbe\u60a8\u8981\u5411\u8def\u7531\u6dfb\u52a0\u524d\u7f00\uff08\u4f8b\u5982\uff1asamplePrefix\uff09\uff0c\u5e76\u4e14\u4e0d\u60f3\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"host")," \u5934\uff0c \u5219\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"proxy-rewrite")," \u63d2\u4ef6\u6765\u5b8c\u6210\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl "http://127.0.0.1:9080/apisix/admin/routes/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "uri": "/samplePrefix/get",\n  "plugins": {\n    "proxy-rewrite": {\n      "regex_uri": ["^/samplePrefix/get(.*)", "/get$1"]\n    },\n    "key-auth": {}\n  },\n  "upstream_id": "1"\n}\'\n')),(0,i.kt)("p",null,"\u73b0\u5728\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6765\u8c03\u7528\u8def\u7531\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -i -X GET "http://127.0.0.1:9080/samplePrefix/get?param1=foo&param2=bar" -H "apikey: key-of-john"\n')),(0,i.kt)("h3",{id:"apisix-dashboard"},"APISIX Dashboard"),(0,i.kt)("p",null,"Apache APISIX \u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard"},"Dashboard"),"\uff0c\u8ba9\u6211\u4eec\u7684\u64cd\u4f5c\u66f4\u76f4\u89c2\u66f4\u8f7b\u677e\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/dashboard.jpeg",alt:"Dashboard"})),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"APISIX Dashboard \u76ee\u524d\u4ecd\u7136\u662f\u4e00\u4e2a\u5b9e\u9a8c\u6027\u529f\u80fd\u3002"))),(0,i.kt)("h3",{id:"\u5e38\u89c1\u95ee\u9898\u6392\u67e5"},"\u5e38\u89c1\u95ee\u9898\u6392\u67e5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u786e\u4fdd\u6240\u9700\u7684\u6240\u6709\u7aef\u53e3\uff08",(0,i.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u7684 9080/9443/2379"),"\uff09\u672a\u88ab\u5176\u4ed6\u7cfb\u7edf/\u8fdb\u7a0b\u4f7f\u7528\u3002"),(0,i.kt)("p",{parentName:"li"},"  \u4e0b\u9762\u662f\u7ec8\u6b62\u6b63\u5728\u4fa6\u542c\u7279\u5b9a\u7aef\u53e3\uff08\u57fa\u4e8e unix \u7684\u7cfb\u7edf\uff09\u7684\u8fdb\u7a0b\u7684\u547d\u4ee4\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo fuser -k 9443/tcp\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c Docker \u5bb9\u5668\u6301\u7eed\u4e0d\u65ad\u5730\u91cd\u542f\u6216\u5931\u8d25\uff0c\u8bf7\u767b\u5f55\u5bb9\u5668\u5e76\u89c2\u5bdf\u65e5\u5fd7\u4ee5\u8bca\u65ad\u95ee\u9898\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f --tail container_id\n")))))}c.isMDXComponent=!0}}]);