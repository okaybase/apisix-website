"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46812],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,h=d["".concat(u,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16988:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u},default:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i={title:"api-breaker"},o={unversionedId:"plugins/api-breaker",id:"version-2.7/plugins/api-breaker",isDocsHomePage:!1,title:"api-breaker",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.7/plugins/api-breaker.md",sourceDirName:"plugins",slug:"/plugins/api-breaker",permalink:"/docs/apisix/2.7/plugins/api-breaker",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/api-breaker.md",version:"2.7",frontMatter:{title:"api-breaker"},sidebar:"version-2.7/docs",previous:{title:"proxy-mirror",permalink:"/docs/apisix/2.7/plugins/proxy-mirror"},next:{title:"traffic-split",permalink:"/docs/apisix/2.7/plugins/traffic-split"}},u=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],p={toc:u};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#name"},(0,l.kt)("strong",{parentName:"a"},"Name"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#attributes"},(0,l.kt)("strong",{parentName:"a"},"Attributes"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#how-to-enable"},(0,l.kt)("strong",{parentName:"a"},"How To Enable"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#test-plugin"},(0,l.kt)("strong",{parentName:"a"},"Test Plugin"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disable-plugin"},(0,l.kt)("strong",{parentName:"a"},"Disable Plugin")))),(0,l.kt)("h2",{id:"name"},"Name"),(0,l.kt)("p",null,"The plugin implements API fuse functionality to help us protect our upstream business services."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"About the breaker timeout logic")),(0,l.kt)("p",null,"the code logic automatically ",(0,l.kt)("strong",{parentName:"p"},"triggers the unhealthy state")," incrementation of the number of operations."),(0,l.kt)("p",null,"Whenever the upstream service returns a status code from the ",(0,l.kt)("inlineCode",{parentName:"p"},"unhealthy.http_statuses")," configuration (e.g., 500), up to ",(0,l.kt)("inlineCode",{parentName:"p"},"unhealthy.failures")," (e.g., three times) and considers the upstream service to be in an unhealthy state."),(0,l.kt)("p",null,"The first time unhealthy status is triggered, ",(0,l.kt)("strong",{parentName:"p"},"broken for 2 seconds"),"."),(0,l.kt)("p",null,"Then, the request is forwarded to the upstream service again after 2 seconds, and if the ",(0,l.kt)("inlineCode",{parentName:"p"},"unhealthy.http_statuses")," status code is returned, and the count reaches ",(0,l.kt)("inlineCode",{parentName:"p"},"unhealthy.failures")," again, ",(0,l.kt)("strong",{parentName:"p"},"broken for 4 seconds"),"."),(0,l.kt)("p",null,"and so on, 2, 4, 8, 16, 32, 64, ..., 256, 300. ",(0,l.kt)("inlineCode",{parentName:"p"},"300")," is the maximum value of ",(0,l.kt)("inlineCode",{parentName:"p"},"max_breaker_sec"),", allow users to specify."),(0,l.kt)("p",null,"In an unhealthy state, when a request is forwarded to an upstream service and the status code in the ",(0,l.kt)("inlineCode",{parentName:"p"},"healthy.http_statuses")," configuration is returned (e.g., 200) that ",(0,l.kt)("inlineCode",{parentName:"p"},"healthy.successes")," is reached (e.g., three times), and the upstream service is considered healthy again."),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"break_response_code"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"[200, ..., 599]"),(0,l.kt)("td",{parentName:"tr",align:null},"Return error code when unhealthy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_breaker_sec"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"300"),(0,l.kt)("td",{parentName:"tr",align:null},">=60"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum breaker time(seconds)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"unhealthy.http_statuses"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[integer]"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"{500}"),(0,l.kt)("td",{parentName:"tr",align:null},"[500, ..., 599]"),(0,l.kt)("td",{parentName:"tr",align:null},"Status codes when unhealthy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"unhealthy.failures"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},">=1"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of consecutive error requests that triggered an unhealthy state")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthy.http_statuses"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[integer]"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"{200}"),(0,l.kt)("td",{parentName:"tr",align:null},"[200, ..., 499]"),(0,l.kt)("td",{parentName:"tr",align:null},"Status codes when healthy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthy.successes"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},">=1"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of consecutive normal requests that trigger health status")))),(0,l.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,l.kt)("p",null,"Here's an example, enable the ",(0,l.kt)("inlineCode",{parentName:"p"},"api-breaker")," plugin on the specified route."),(0,l.kt)("p",null,"Response 500 or 503 three times in a row to trigger a unhealthy. Response 200 once in a row to restore healthy."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://127.0.0.1:9080/apisix/admin/routes/1" -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "api-breaker": {\n            "break_response_code": 502,\n            "unhealthy": {\n                "http_statuses": [500, 503],\n                "failures": 3\n            },\n            "healthy": {\n                "http_statuses": [200],\n                "successes": 1\n            }\n        }\n    },\n    "uri": "/hello",\n    "host": "127.0.0.1",\n}\'\n')),(0,l.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,l.kt)("p",null,"Then. Like the configuration above, if your upstream service returns 500. 3 times in a row. The client will receive a 502 (break_response_code) response."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i -X POST "http://127.0.0.1:9080/get"\nHTTP/1.1 502 Bad Gateway\nContent-Type: application/octet-stream\nConnection: keep-alive\nServer: APISIX/1.5\n\n... ...\n')),(0,l.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,l.kt)("p",null,"When you want to disable the ",(0,l.kt)("inlineCode",{parentName:"p"},"api-breader")," plugin, it is very simple, you can delete the corresponding json configuration in the plugin configuration, no need to restart the service, it will take effect immediately:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"api-breaker")," plugin has been disabled now. It works for other plugins."))}s.isMDXComponent=!0}}]);