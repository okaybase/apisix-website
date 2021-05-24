(self.webpackChunk=self.webpackChunk||[]).push([[1345],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},20504:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),s={title:"Import OpenAPI Guide"},o={unversionedId:"IMPORT_OPENAPI_USER_GUIDE",id:"IMPORT_OPENAPI_USER_GUIDE",isDocsHomePage:!1,title:"Import OpenAPI Guide",description:"\x3c!--",source:"@site/docs/apisix-dashboard/IMPORT_OPENAPI_USER_GUIDE.md",sourceDirName:".",slug:"/IMPORT_OPENAPI_USER_GUIDE",permalink:"/zh/docs/dashboard/next/IMPORT_OPENAPI_USER_GUIDE",editUrl:"https://github.com/apache/apisix-dashboard/edit/master/docs/en/latest/IMPORT_OPENAPI_USER_GUIDE.md",version:"current",frontMatter:{title:"Import OpenAPI Guide"},sidebar:"docs",previous:{title:"User Guide",permalink:"/zh/docs/dashboard/next/USER_GUIDE"},next:{title:"API doc of Manager API.",permalink:"/zh/docs/dashboard/next/api/api"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Extended fields",id:"extended-fields",children:[]},{value:"OAS3.0 Compatibility",id:"oas30-compatibility",children:[]},{value:"Examples about how to Configure the OAS3.0 in different user scenarios",id:"examples-about-how-to-configure-the-oas30-in-different-user-scenarios",children:[{value:"Configure a basic published route",id:"configure-a-basic-published-route",children:[]},{value:"configure a route with plugins",id:"configure-a-route-with-plugins",children:[]},{value:"configure a route with parameters validation",id:"configure-a-route-with-parameters-validation",children:[]},{value:"configure a route with auth plugins",id:"configure-a-route-with-auth-plugins",children:[]},{value:"configure a route with exist service or upstream",id:"configure-a-route-with-exist-service-or-upstream",children:[]},{value:"configure more than one route",id:"configure-more-than-one-route",children:[]}]},{value:"FAQ",id:"faq",children:[]}],l={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The OpenAPI Specification (OAS) defines a standard, language-agnostic interface to RESTful APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection."),(0,i.kt)("p",null,"Apache APISIX Dashboard supports importing ",(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/specification/"},"OpenApi3.0"),"(we will use OAS3.0 for short) files, both ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"yaml")," are supported, to create one or more Routes. Currently we support most of the OpenApi specifications, but there are some differences, which are in terms of compatibility and extended fields."),(0,i.kt)("h2",{id:"extended-fields"},"Extended fields"),(0,i.kt)("p",null,"There are some fields required in APISIX Route but are not included in the properties of OAS3.0, in order to provide convenience for extending custom route entities based on OAS3.0, we added some extended fields such as upstream, plugins, hosts and so on. All extensions start with x-apisix."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Extended fields"),(0,i.kt)("th",{parentName:"tr",align:null},"APISIX Route Properties"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-plugins"),(0,i.kt)("td",{parentName:"tr",align:null},"plugins")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-script"),(0,i.kt)("td",{parentName:"tr",align:null},"script")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-upstream"),(0,i.kt)("td",{parentName:"tr",align:null},"upstream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-host"),(0,i.kt)("td",{parentName:"tr",align:null},"host")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-hosts"),(0,i.kt)("td",{parentName:"tr",align:null},"hosts")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-remote_addr"),(0,i.kt)("td",{parentName:"tr",align:null},"remote_addr")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-priority"),(0,i.kt)("td",{parentName:"tr",align:null},"priority")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-vars"),(0,i.kt)("td",{parentName:"tr",align:null},"vars")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-filter_func"),(0,i.kt)("td",{parentName:"tr",align:null},"filter_func")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-labels"),(0,i.kt)("td",{parentName:"tr",align:null},"labels")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-enable_websocket"),(0,i.kt)("td",{parentName:"tr",align:null},"enable_websocket")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-status"),(0,i.kt)("td",{parentName:"tr",align:null},"status")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-service_id"),(0,i.kt)("td",{parentName:"tr",align:null},"service_id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-upstream_id"),(0,i.kt)("td",{parentName:"tr",align:null},"upstream_id")))),(0,i.kt)("p",null,"Please pay attention that we only extended the first level of the field, and the sub level fields will still keep the same. Just take ",(0,i.kt)("inlineCode",{parentName:"p"},"x-apisix-upstream")," for an example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n# we add x-apisix-upstream as an extended field in OAS3.0 to stand for upstream\nx-apisix-upstream:\n  # the sub fields of x-apisix-upstream still keeps the same as upstream's sub fields\n  type: roundrobin\n  nodes:\n    - host: 172.16.238.20\n      port: 1980\n      weight: 1\n...\n")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/admin-api/#route"},"reference")," for more details of the APISIX Route Properties"),(0,i.kt)("h2",{id:"oas30-compatibility"},"OAS3.0 Compatibility"),(0,i.kt)("p",null,"When we import routes from OAS3.0, some fields in OAS3.0 will be missed because there are not corresponding fields in APISIX's Route:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://swagger.io/docs/specification/api-general-info/"},"API General Info"),": used to describe the general information about your API, some times, a OAS3.0 file contains a series of apis which belong to a app, so this info is different from the api's name and extra basic info.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# this part of information will be missed\nopenapi: 3.0.0\ninfo:\n  version: 1.0.0-oas3\n  description: test desc\n  license:\n    name: Apache License 2.0\n    url: 'http://www.apache.org/licenses/LICENSE-2.0'\n  title: test title\n...\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://swagger.io/docs/specification/api-host-and-base-path/"},"API server and base path"),": upsream url + url prefix(options).")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# this part of information will be missed\n...\nservers:\n  - url: https://api.example.com/v1\n...\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://swagger.io/docs/specification/describing-parameters/"},"Path params"),": api params described in path.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# no matter how many path parameters in the uri\n# we will got the route with uri like `/get/*` after import route from OAS3.0 file\n...\npaths:\n  /get/{id}/{name}:\n    delete:\n      operationId: api1DELETE\n...\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://swagger.io/docs/specification/describing-parameters/"},"Query params"),": api params described in query.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"...\npaths:\n  /users:\n    get:\n      summary: Get a user by ID\n      # this part of information will be missed\n      parameters:\n        - in: path\n          name: userId\n          schema:\n            type: integer\n          required: true\n          description: Numeric ID of the user to get\n...\n")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://swagger.io/docs/specification/describing-responses/"},"Responses description and links"),": Define the responses for a API operations.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"...\npaths:\n  /hello:\n    get:\n      description: hello world.\n      operationId: hello\n      x-apisix-service_id: service1\n      # this part of information will be missed\n      responses:\n        '200':\n          description: list response\n        default:\n          description: unexpected error\n...\n")),(0,i.kt)("h2",{id:"examples-about-how-to-configure-the-oas30-in-different-user-scenarios"},"Examples about how to Configure the OAS3.0 in different user scenarios"),(0,i.kt)("h3",{id:"configure-a-basic-published-route"},"Configure a basic published route"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"notice: the default ",(0,i.kt)("inlineCode",{parentName:"em"},"status")," of the imported route will be ",(0,i.kt)("inlineCode",{parentName:"em"},"unpublished"),", which means the route can not be accessed, if you want to import a ",(0,i.kt)("inlineCode",{parentName:"em"},"published")," route, you should add ",(0,i.kt)("inlineCode",{parentName:"em"},"x-apisix-status: 1")," in you OAS3.0 file")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.0\ninfo:\n  version: 1.0.0-oas3\n  description: test desc\n  license:\n    name: Apache License 2.0\n    url: 'http://www.apache.org/licenses/LICENSE-2.0'\n  title: test title\npaths:\n  /hello: # route uri\n    get: # route method\n      description: hello world. # route desc\n      operationId: hello # route name\n      x-apisix-upstream: # route upstream\n        type: roundrobin\n        nodes:\n          - host: 172.16.238.20\n            port: 1980\n            weight: 1\n      x-apisix-status: 1 # the route will be published after imported\n      responses:\n        '200':\n          description: list response\n        default:\n          description: unexpected error\n")),(0,i.kt)("h3",{id:"configure-a-route-with-plugins"},"configure a route with plugins"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"notice: most plugins supported by extended field ",(0,i.kt)("inlineCode",{parentName:"em"},"x-apisix-plugins"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.0\ninfo:\n  version: 1.0.0-oas3\n  description: test desc\n  license:\n    name: Apache License 2.0\n    url: 'http://www.apache.org/licenses/LICENSE-2.0'\n  title: test title\npaths:\n  /hello:\n    get:\n      description: hello world.\n      operationId: hello\n      x-apisix-upstream:\n        type: roundrobin\n        nodes:\n          - host: 172.16.238.20\n            port: 1980\n            weight: 1\n      x-apisix-plugins:\n        limit-count:\n          count: 2\n          time_window: 60\n          rejected_code: 503\n          key: remote_addr\n      responses:\n        '200':\n          description: list response\n        default:\n          description: unexpected error\n")),(0,i.kt)("h3",{id:"configure-a-route-with-parameters-validation"},"configure a route with parameters validation"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"notice: for plugin ",(0,i.kt)("a",{parentName:"em",href:"https://apisix.apache.org/docs/apisix/plugins/request-validation"},"request-validation"),", we will use ",(0,i.kt)("a",{parentName:"em",href:"https://swagger.io/docs/specification/serialization/"},"Parameter Serialization")," for header parameters validation and ",(0,i.kt)("a",{parentName:"em",href:"https://swagger.io/docs/specification/describing-request-body/"},"Describing Request Body")," for body parameters validation in OAS3.0")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'openapi: 3.0.0\ninfo:\n  version: "1"\n  description: |-\n    test desc\n  license:\n    name: Apache License 2.0\n    url: http://www.apache.org/licenses/LICENSE-2.0\n  title: |-\n    test title\npaths:\n  /hello:\n    post:\n      description: |-\n        hello world.\n      operationId: hello\n      x-apisix-upstream:\n        type: roundrobin\n        nodes:\n          - host: "172.16.238.20"\n            port: 1980\n            weight: 1\n      parameters:\n        - name: id\n          in: header\n          description: ID of pet to use\n          required: true\n          schema:\n            type: string\n          style: simple\n\n      requestBody:\n        content:\n          \'application/x-www-form-urlencoded\':\n            schema:\n              properties:\n                name:\n                  description: Update pet\'s name\n                  type: string\n                status:\n                  description: Updated status of the pet\n                  type: string\n              required:\n                - status\n      responses:\n        200:\n          description: list response\n        default:\n          description: unexpected error\n')),(0,i.kt)("h3",{id:"configure-a-route-with-auth-plugins"},"configure a route with auth plugins"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"notice: for plugin ",(0,i.kt)("a",{parentName:"em",href:"https://apisix.apache.org/docs/apisix/plugins/basic-auth"},"basic-auth"),"\u3001",(0,i.kt)("a",{parentName:"em",href:"https://apisix.apache.org/docs/apisix/plugins/jwt-auth"},"jwt-auth")," and ",(0,i.kt)("a",{parentName:"em",href:"https://apisix.apache.org/docs/apisix/plugins/key-auth"},"key-auth")," we will use ",(0,i.kt)("a",{parentName:"em",href:"https://swagger.io/docs/specification/authentication/"},"Authentication")," in OAS3.0")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'components:\n  securitySchemes:\n    basicAuth:\n      type: http\n      scheme: basic\n    BearerAuth:\n      type: http\n      scheme: bearer\n      bearerFormat: JWT\n    ApiKeyAuth:\n      type: apiKey\n      in: header\n      name: X-API-Key\nopenapi: 3.0.0\ninfo:\n  version: "1"\n  description: |-\n    test desc\n  license:\n    name: Apache License 2.0\n    url: http://www.apache.org/licenses/LICENSE-2.0\n  title: |-\n    test title\npaths:\n  /hello:\n    post:\n      description: |-\n        hello world.\n      operationId: hello\n      x-apisix-upstream:\n        type: roundrobin\n        nodes:\n          - host: "172.16.238.20"\n            port: 1980\n            weight: 1\n      security:\n        - basicAuth: []\n        - ApiKeyAuth: []\n        - BearerAuth: []\n      responses:\n        200:\n          description: list response\n        default:\n          description: unexpected error\n')),(0,i.kt)("h3",{id:"configure-a-route-with-exist-service-or-upstream"},"configure a route with exist service or upstream"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"notice: if the ",(0,i.kt)("inlineCode",{parentName:"em"},"service_id")," or ",(0,i.kt)("inlineCode",{parentName:"em"},"upstream_id")," does not exist in APISIX, import route from the config file will get an error")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.0\ninfo:\n  version: 1.0.0-oas3\n  description: test desc\n  license:\n    name: Apache License 2.0\n    url: 'http://www.apache.org/licenses/LICENSE-2.0'\n  title: test title\npaths:\n  /hello:\n    get:\n      description: hello world.\n      operationId: hello\n      x-apisix-service_id: service1\n      responses:\n        '200':\n          description: list response\n        default:\n          description: unexpected error\n")),(0,i.kt)("h3",{id:"configure-more-than-one-route"},"configure more than one route"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"info:\n  title: RoutesExport\n  version: 3.0.0\nopenapi: 3.0.0\npaths:\n  /get:\n    delete:\n      operationId: api1Delete\n      requestBody: {}\n      responses:\n        default:\n          description: ''\n      x-apisix-enableWebsocket: false\n      x-apisix-labels:\n        API_VERSION: v2\n        dev: test\n      x-apisix-plugins:\n        proxy-rewrite:\n          disable: false\n          scheme: https\n      x-apisix-priority: 0\n      x-apisix-status: 1\n      x-apisix-upstream:\n        nodes:\n          - host: httpbin.org\n            port: 443\n            weight: 1\n        type: roundrobin\n        pass_host: node\n      x-apisix-vars: []\n    get:\n      operationId: api1Get\n      requestBody: {}\n      responses:\n        default:\n          description: ''\n      x-apisix-enableWebsocket: false\n      x-apisix-labels:\n        API_VERSION: v2\n        dev: test\n      x-apisix-plugins:\n        proxy-rewrite:\n          disable: false\n          scheme: https\n      x-apisix-priority: 0\n      x-apisix-status: 1\n      x-apisix-upstream:\n        nodes:\n          - host: httpbin.org\n            port: 443\n            weight: 1\n        type: roundrobin\n        pass_host: node\n      x-apisix-vars: []\n  /post:\n    post:\n      operationId: test_post\n      requestBody: {}\n      responses:\n        default:\n          description: ''\n      security: []\n      x-apisix-enableWebsocket: false\n      x-apisix-labels:\n        API_VERSION: v1\n        version: v1\n      x-apisix-plugins:\n        proxy-rewrite:\n          disable: false\n          scheme: https\n      x-apisix-priority: 0\n      x-apisix-status: 1\n      x-apisix-upstream:\n        nodes:\n          - host: httpbin.org\n            port: 443\n            weight: 1\n        type: roundrobin\n        pass_host: node\n      x-apisix-vars: []\n")),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"What is the default strategy when import a duplicate route?")),(0,i.kt)("p",null,"Currently we reject import duplicate route, that is to say when you import a route which has the same attributes, all of the URI\u3001Host\u3001URIs\u3001Host\u3001RemoteAddrs\u3001RemoteAddr\u3001Priority\u3001Vars and FilterFunc, as the existing route, you will get an error while importing a route from OAS3.0."))}u.isMDXComponent=!0}}]);