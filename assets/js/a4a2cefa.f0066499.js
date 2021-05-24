(self.webpackChunk=self.webpackChunk||[]).push([[8554],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return o},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},o=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),k=u(r),m=a,h=k["".concat(p,".").concat(m)]||k[m]||c[m]||l;return r?n.createElement(h,s(s({ref:t},o),{},{components:r})):n.createElement(h,s({ref:t},o))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<l;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},11778:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p},default:function(){return o}});var n=r(22122),a=r(19756),l=(r(67294),r(3905)),s={title:"\u521d\u63a2 Kubernetes Service APIs",author:"Wei Jin",authorURL:"https://github.com/gxthrj",authorImageURL:"https://avatars2.githubusercontent.com/u/4413028?s=400&u=e140a6d2bf19c426da6498b8888edc96509be649&v=4"},i={permalink:"/blog/2020/12/18/a-first-look-at-kubernetes-service-api",source:"@site/blog/2020-12-18-a-first-look-at-kubernetes-service-api.md",title:"\u521d\u63a2 Kubernetes Service APIs",description:"@gxthrj, Apache APISIX PMC & Apache apisix-ingress-controller Founder from Shenzhen Zhiliu Technology Co.",date:"2020-12-18T00:00:00.000Z",formattedDate:"December 18, 2020",tags:[],readingTime:2.145,truncated:!0,prevItem:{title:"Run Ingress APISIX on Amazon EKS",permalink:"/blog/2021/01/21/run-ingress-apisix-on-amazon-eks"},nextItem:{title:"Envoy and Apache APISIX: Another way to implement the Envoy filter",permalink:"/blog/2020/12/16/another-way-to-implement-envoy-filter"}},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"\u4e3b\u9898\u63cf\u8ff0",id:"\u4e3b\u9898\u63cf\u8ff0",children:[]},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",children:[{value:"Kubernetes Service APIs \u53f7\u79f0\u7b2c\u4e8c\u4ee3 Ingress \u6280\u672f\uff0c\u5230\u5e95\u5728\u54ea\u4e9b\u65b9\u9762\u4f18\u4e8e\u7b2c\u4e00\u4ee3\uff1f",id:"kubernetes-service-apis-\u53f7\u79f0\u7b2c\u4e8c\u4ee3-ingress-\u6280\u672f\uff0c\u5230\u5e95\u5728\u54ea\u4e9b\u65b9\u9762\u4f18\u4e8e\u7b2c\u4e00\u4ee3\uff1f",children:[]}]},{value:"Kubernetes Service APIs \u62bd\u8c61\u51fa\u4e86\u54ea\u4e9b\u8d44\u6e90\u5bf9\u8c61\uff1f",id:"kubernetes-service-apis-\u62bd\u8c61\u51fa\u4e86\u54ea\u4e9b\u8d44\u6e90\u5bf9\u8c61\uff1f",children:[]},{value:"Kubernetes Service APIs \u7684\u63a8\u884c\u4f1a\u5e26\u6765\u54ea\u4e9b\u6539\u53d8\uff1f",id:"kubernetes-service-apis-\u7684\u63a8\u884c\u4f1a\u5e26\u6765\u54ea\u4e9b\u6539\u53d8\uff1f",children:[]},{value:"\u76ee\u524d\u6709\u54ea\u4e9b ingress \u5b9e\u73b0\u4e86 Kubernetes Service APIs \uff1f",id:"\u76ee\u524d\u6709\u54ea\u4e9b-ingress-\u5b9e\u73b0\u4e86-kubernetes-service-apis-\uff1f",children:[]},{value:"Kubernetes Service APIs \u5982\u4f55\u7ba1\u7406\u8d44\u6e90\u8bfb\u5199\u6743\u9650\uff1f",id:"kubernetes-service-apis-\u5982\u4f55\u7ba1\u7406\u8d44\u6e90\u8bfb\u5199\u6743\u9650\uff1f",children:[]},{value:"Kubernetes Service APIs \u6709\u54ea\u4e9b\u6269\u5c55\u70b9\uff1f",id:"kubernetes-service-apis-\u6709\u54ea\u4e9b\u6269\u5c55\u70b9\uff1f",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],u={toc:p};function o(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/gxthrj"},"@gxthrj"),", Apache APISIX PMC & Apache apisix-ingress-controller Founder from ",(0,l.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"Shenzhen Zhiliu Technology Co."))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Source:"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix"},"https://github.com/apache/apisix")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller"},"https://github.com/apache/apisix-ingress-controller")))),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("p",null,"\u7b14\u8005\u662f Apache APISIX PMC\uff0c\u4e5f\u662f Apache APISIX Ingress Controller Founder\uff0c\u901a\u8fc7\u8c03\u7814\u548c\u793e\u533a\u4ea4\u6d41\uff0c\u6253\u7b97\u5728 Apache APISIX Ingress Controller \u7684\u540e\u671f\u7248\u672c\u4e2d\u9010\u6b65\u652f\u6301 Kubernetes Service APIs."),(0,l.kt)("p",null,"\u6211\u4eec\u77e5\u9053 Kubernetes \u4e3a\u4e86\u5c06\u96c6\u7fa4\u5185\u90e8\u670d\u52a1\u66b4\u9732\u51fa\u53bb\uff0c\u6709\u591a\u79cd\u65b9\u6848\u5b9e\u73b0\uff0c\u5176\u4e2d\u4e00\u4e2a\u6bd4\u8f83\u53d7\u5927\u4f17\u63a8\u5d07\u7684\u5c31\u662f Ingress\u3002Ingress \u4f5c\u4e3a\u4e00\u79cd\u5bf9\u5916\u66b4\u9732\u670d\u52a1\u7684\u6807\u51c6\uff0c\u6709\u76f8\u5f53\u591a\u7684\u7b2c\u4e09\u65b9\u5b9e\u73b0\uff0c\u6bcf\u79cd\u5b9e\u73b0\u90fd\u6709\u5404\u81ea\u7684\u6280\u672f\u6808 \u548c \u6240\u4f9d\u8d56\u7684\u7f51\u5173\u7684\u5f71\u5b50\uff0c\u76f8\u4e92\u4e4b\u95f4\u5e76\u4e0d\u517c\u5bb9\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u7edf\u4e00\u5404\u79cd Ingress \u7684\u5b9e\u73b0\uff0c\u4fbf\u4e8e Kubernetes \u4e0a\u7edf\u4e00\u7ba1\u7406\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/community/tree/master/sig-network"},"SIG-NETWORK")," \u793e\u533a\u63a8\u51fa\u4e86",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes-sigs.github.io/service-apis/"},"Kubernetes Service APIs")," \u4e00\u5957\u6807\u51c6\u5b9e\u73b0\uff0c\u79f0\u4e3a\u7b2c\u4e8c\u4ee3 Ingress \u3002"),(0,l.kt)("h2",{id:"\u4e3b\u9898\u63cf\u8ff0"},"\u4e3b\u9898\u63cf\u8ff0"),(0,l.kt)("p",null,"\u672c\u6587\u4ece\u51e0\u4e2a\u95ee\u9898\u5165\u624b\uff0c\u5bf9 Kubernetes Service APIs \u7684\u57fa\u672c\u6982\u5ff5\u8fdb\u884c\u4ecb\u7ecd\u3002"),(0,l.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,l.kt)("h3",{id:"kubernetes-service-apis-\u53f7\u79f0\u7b2c\u4e8c\u4ee3-ingress-\u6280\u672f\uff0c\u5230\u5e95\u5728\u54ea\u4e9b\u65b9\u9762\u4f18\u4e8e\u7b2c\u4e00\u4ee3\uff1f"},"Kubernetes Service APIs \u53f7\u79f0\u7b2c\u4e8c\u4ee3 Ingress \u6280\u672f\uff0c\u5230\u5e95\u5728\u54ea\u4e9b\u65b9\u9762\u4f18\u4e8e\u7b2c\u4e00\u4ee3\uff1f"),(0,l.kt)("p",null,"Kubernetes Service APIs \u8bbe\u8ba1\u4e4b\u521d\uff0c\u76ee\u6807\u5e76\u6ca1\u6709\u5c40\u9650\u5728 Ingress\uff0c \u800c\u662f\u4e3a\u4e86\u589e\u5f3a service networking\uff0c\u7740\u91cd\u901a\u8fc7\u4ee5\u4e0b\u51e0\u70b9\u6765\u589e\u5f3a\uff1a\u8868\u8fbe\u6027\u3001\u6269\u5c55\u6027\u3001RBAC\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u66f4\u5f3a\u7684\u8868\u8fbe\u80fd\u529b\uff0c\u4f8b\u5982 \u53ef\u4ee5\u6839\u636e header \u3001weighting \u6765\u7ba1\u7406\u6d41\u91cf")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'kind: HTTPRoute\napiVersion: networking.x-k8s.io/v1alpha1\n...\nmatches:\n  - path:\n      value: "/foo"\n    headers:\n      values:\n        version: "2"\n  - path:\n      value: "/v2/foo"\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u589e\u5f3a\u4e86\u6269\u5c55\u80fd\u529b\uff0cService APIs \u63d0\u51fa\u591a\u5c42 API \u7684\u6982\u5ff5\uff0c\u5404\u5c42\u72ec\u7acb\u66b4\u9732\u63a5\u53e3\uff0c\u65b9\u4fbf\u5176\u4ed6\u81ea\u5b9a\u4e49\u8d44\u6e90\u4e0e API \u5bf9\u63a5\uff0c\u505a\u5230\u66f4\u7ec6\u7c92\u5ea6\uff08API \u7c92\u5ea6\uff09\u7684\u63a7\u5236\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://gateway-api.sigs.k8s.io/images/api-model.png",alt:"api-model"})),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u9762\u5411\u89d2\u8272 RBAC\uff1a\u591a\u5c42 API \u7684\u5b9e\u73b0\uff0c\u5176\u4e2d\u4e00\u4e2a\u601d\u60f3\u5c31\u662f\u4ece\u4f7f\u7528\u8005\u7684\u89d2\u5ea6\u53bb\u8bbe\u8ba1\u8d44\u6e90\u5bf9\u8c61\u3002\u8fd9\u4e9b\u8d44\u6e90\u6700\u7ec8\u4f1a\u4e0e Kubernetes \u4e0a\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u7684\u5e38\u89c1\u89d2\u8272\u8fdb\u884c\u6620\u5c04\u3002")),(0,l.kt)("h2",{id:"kubernetes-service-apis-\u62bd\u8c61\u51fa\u4e86\u54ea\u4e9b\u8d44\u6e90\u5bf9\u8c61\uff1f"},"Kubernetes Service APIs \u62bd\u8c61\u51fa\u4e86\u54ea\u4e9b\u8d44\u6e90\u5bf9\u8c61\uff1f"),(0,l.kt)("p",null,"Kubernetes Service APIs \u57fa\u4e8e\u4f7f\u7528\u8005\u89d2\u8272\uff0c\u5c06\u5b9a\u4e49\u4e86\u4ee5\u4e0b\u51e0\u79cd\u8d44\u6e90\uff1a"),(0,l.kt)("p",null,"GatewayClass, Gateway, Route"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"GatewayClass \u5b9a\u4e49\u4e86\u4e00\u7ec4\u5177\u6709\u901a\u7528\u914d\u7f6e\u548c\u884c\u4e3a\u7684\u7f51\u5173\u7c7b\u578b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e0e Gateway \u7684\u5173\u7cfb\uff0c\u7c7b\u4f3c ingress \u4e2d\u7684 ingress.class annotation\uff1b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"GatewayClass \u5b9a\u4e49\u4e86\u4e00\u7ec4\u5171\u4eab\u76f8\u540c\u914d\u7f6e\u548c\u884c\u4e3a\u7684\u7f51\u5173\u3002\u6bcf\u4e2a GatewayClass \u5c06\u7531\u5355\u4e2a controller \u5904\u7406\uff0ccontroller \u4e0e GatewayClass \u662f\u4e00\u5bf9\u591a\u7684\u5173\u7cfb\uff1b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"GatewayClass \u662f cluster \u8d44\u6e90\u3002\u5fc5\u987b\u81f3\u5c11\u5b9a\u4e49\u4e00\u4e2a GatewayClass \u624d\u80fd\u5177\u6709\u529f\u80fd\u7f51\u5173\u3002"))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Gateway \u8bf7\u6c42\u4e00\u4e2a\u53ef\u4ee5\u5c06\u6d41\u91cf\u8f6c\u6362\u4e3a\u7fa4\u96c6\u5185\u670d\u52a1\u7684\u70b9\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f5c\u7528\uff1a\u628a\u96c6\u7fa4\u5916\u7684\u6d41\u91cf\u5f15\u5165\u96c6\u7fa4\u5185\u90e8\u3002\u8fd9\u4e2a\u624d\u662f\u771f\u6b63\u7684 ingress \u5b9e\u4f53\uff1b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5b83\u5b9a\u4e49\u4e86\u5bf9\u7279\u5b9a LB \u914d\u7f6e\u7684\u8bf7\u6c42\uff0c\u8be5\u914d\u7f6e\u4e5f\u662f GatewayClass \u7684\u914d\u7f6e\u548c\u884c\u4e3a\u7684\u5b9e\u73b0\uff1b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Gateway \u8d44\u6e90\u53ef\u4ee5\u7531\u64cd\u4f5c\u5458\u76f4\u63a5\u521b\u5efa\uff0c\u4e5f\u53ef\u4ee5\u7531\u5904\u7406 GatewayClass \u7684 controller \u521b\u5efa\uff1b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Gateway \u4e0e Route \u662f\u591a\u5bf9\u591a\u7684\u5173\u7cfb\uff1b"))),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Route \u63cf\u8ff0\u4e86\u901a\u8fc7\u7f51\u5173\u7684\u6d41\u91cf\u5982\u4f55\u6620\u5c04\u5230\u670d\u52a1\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://gateway-api.sigs.k8s.io/images/schema-uml.svg",alt:"schema-uml"})),(0,l.kt)("p",null,"\u53e6\u5916\uff0cKubernetes Service APIs \u4e3a\u4e86\u80fd\u591f\u7075\u6d3b\u7684\u914d\u7f6e\u540e\u7aef\u670d\u52a1\uff0c\u7279\u5730\u5b9a\u4e49\u4e86\u4e00\u4e2a BackendPolicy \u8d44\u6e90\u5bf9\u8c61\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7 BackendPolicy \u5bf9\u8c61\uff0c\u53ef\u4ee5\u914d\u7f6e TLS\u3001\u5065\u5eb7\u68c0\u67e5 \u4ee5\u53ca\u6307\u5b9a\u540e\u7aef\u670d\u52a1\u7c7b\u578b\uff0c\u6bd4\u5982 service \u8fd8\u662f pod\u3002"),(0,l.kt)("h2",{id:"kubernetes-service-apis-\u7684\u63a8\u884c\u4f1a\u5e26\u6765\u54ea\u4e9b\u6539\u53d8\uff1f"},"Kubernetes Service APIs \u7684\u63a8\u884c\u4f1a\u5e26\u6765\u54ea\u4e9b\u6539\u53d8\uff1f"),(0,l.kt)("p",null,"Kubernetes Service APIs \u4f5c\u4e3a\u4e00\u79cd\u5b9e\u73b0\u6807\u51c6\uff0c\u5e26\u6765\u4e86\u4ee5\u4e0b\u6539\u53d8\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u901a\u7528\u6027\uff1a \u53ef\u4ee5\u6709\u591a\u79cd\u5b9e\u73b0\uff0c\u5c31\u50cf ingress \u6709\u591a\u79cd\u5b9e\u73b0\u4e00\u6837\uff0c\u53ef\u4ee5\u6839\u636e\u7f51\u5173\u7684\u7279\u70b9\u53bb\u81ea\u5b9a\u4e49 ingress controller\uff0c\u4f46\u662f\u4ed6\u4eec\u90fd\u6709\u4e00\u81f4\u7684\u914d\u7f6e\u7ed3\u6784\u3002\u4e00\u79cd\u6570\u636e\u7ed3\u6784\uff0c\u53ef\u4ee5\u914d\u7f6e\u591a\u79cd ingress controller\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Class \u6982\u5ff5\uff1aGatewayClasses \u53ef\u4ee5\u914d\u7f6e\u4e0d\u540c\u8d1f\u8f7d\u5747\u8861\u5b9e\u73b0\u7684\u7c7b\u578b\u3002\u8fd9\u4e9b\u7c7b class \u4f7f\u7528\u6237\u53ef\u4ee5\u8f7b\u677e\u800c\u660e\u786e\u5730\u4e86\u89e3\u54ea\u4e9b\u529f\u80fd\u53ef\u4ee5\u7528\u4f5c\u8d44\u6e90\u6a21\u578b\u672c\u8eab\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5171\u4eab\u7f51\u5173\uff1a\u901a\u8fc7\u5141\u8bb8\u72ec\u7acb\u7684\u8def\u7531\u8d44\u6e90 HTTPRoute \u7ed1\u5b9a\u5230\u540c\u4e00\u4e2a GatewayClass\uff0c\u5b83\u4eec\u53ef\u4ee5\u5171\u4eab\u8d1f\u8f7d\u5e73\u8861\u5668\u548c VIP\u3002\u6309\u7167\u4f7f\u7528\u8005\u5206\u5c42\uff0c\u8fd9\u4f7f\u5f97\u56e2\u961f\u53ef\u4ee5\u5b89\u5168\u5730\u5171\u4eab\u57fa\u7840\u7ed3\u6784\uff0c\u800c\u65e0\u9700\u5173\u5fc3\u4e0b\u5c42 Gateway \u7684\u5177\u4f53\u5b9e\u73b0\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5e26\u7c7b\u578b\u7684\u540e\u7aef\u5f15\u7528: \u4f7f\u7528\u5e26\u7c7b\u578b\u7684\u540e\u7aef\u5f15\u7528\uff0c\u8def\u7531\u53ef\u4ee5\u5f15\u7528 Kubernetes Services\uff0c\u4e5f\u53ef\u4ee5\u5f15\u7528\u4efb\u4f55\u7c7b\u578b\u7684\u8bbe\u8ba1\u4e3a\u7f51\u5173\u540e\u7aef\u7684 Kubernetes \u8d44\u6e90\uff0c\u6bd4\u5982 pod\uff0c\u53c8\u6216\u8005\u662f statefulset \u6bd4\u5982 DB\uff0c \u751a\u81f3\u662f\u53ef\u8bbf\u95ee\u7684\u96c6\u7fa4\u5916\u90e8\u8d44\u6e90\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8de8\u547d\u540d\u7a7a\u95f4\u5f15\u7528\uff1a\u8de8\u4e0d\u540c\u547d\u540d\u7a7a\u95f4\u7684\u8def\u7531\u53ef\u4ee5\u7ed1\u5b9a\u5230 Gateway\u3002\u5141\u8bb8\u8de8\u547d\u540d\u7a7a\u95f4\u7684\u4e92\u76f8\u8bbf\u95ee\u3002\u540c\u65f6\u4e5f\u53ef\u4ee5\u9650\u5236\u67d0\u4e2a Gateway \u4e0b\u7684 Route \u53ef\u4ee5\u8bbf\u95ee\u7684\u547d\u540d\u7a7a\u95f4\u8303\u56f4\u3002"))),(0,l.kt)("h2",{id:"\u76ee\u524d\u6709\u54ea\u4e9b-ingress-\u5b9e\u73b0\u4e86-kubernetes-service-apis-\uff1f"},"\u76ee\u524d\u6709\u54ea\u4e9b ingress \u5b9e\u73b0\u4e86 Kubernetes Service APIs \uff1f"),(0,l.kt)("p",null,"\u76ee\u524d\u5df2\u77e5\u7684\u4ece\u4ee3\u7801\u5c42\u9762\u80fd\u770b\u5230\u5bf9 Kubernetes Service APIs \u8d44\u6e90\u5bf9\u8c61\u652f\u6301\u7684 Ingress \u6709 Contour, ingress-gce\u3002"),(0,l.kt)("h2",{id:"kubernetes-service-apis-\u5982\u4f55\u7ba1\u7406\u8d44\u6e90\u8bfb\u5199\u6743\u9650\uff1f"},"Kubernetes Service APIs \u5982\u4f55\u7ba1\u7406\u8d44\u6e90\u8bfb\u5199\u6743\u9650\uff1f"),(0,l.kt)("p",null,"Kubernetes Service APIs \u6309\u7167\u4f7f\u7528\u8005\u7684\u7ef4\u5ea6\u5206\u4e3a 3 \u4e2a\u89d2\u8272"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u57fa\u7840\u8bbe\u65bd\u63d0\u4f9b\u65b9 GatewayClass")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u96c6\u7fa4\u64cd\u4f5c\u4eba\u5458 Gateway")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5e94\u7528\u5f00\u53d1\u8005 Route"))),(0,l.kt)("p",null,"RBAC\uff08\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236\uff09\u662f\u7528\u4e8e Kubernetes \u6388\u6743\u7684\u6807\u51c6\u3002\u5141\u8bb8\u7528\u6237\u914d\u7f6e\u8c01\u53ef\u4ee5\u5bf9\u7279\u5b9a\u8303\u56f4\u5185\u7684\u8d44\u6e90\u6267\u884c\u64cd\u4f5c\u3002 RBAC \u53ef\u7528\u4e8e\u542f\u7528\u4e0a\u9762\u5b9a\u4e49\u7684\u6bcf\u4e2a\u89d2\u8272\u3002"),(0,l.kt)("p",null,"\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u5e0c\u671b\u6240\u6709\u89d2\u8272\u90fd\u53ef\u4ee5\u8bfb\u53d6\u6240\u6709\u8d44\u6e90"),(0,l.kt)("p",null,"\u4e09\u5c42\u6a21\u578b\u7684\u5199\u6743\u9650\u5982\u4e0b\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"GatewayClass"),(0,l.kt)("th",{parentName:"tr",align:null},"Gateway"),(0,l.kt)("th",{parentName:"tr",align:null},"Route"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Infrastructure Provider"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cluster Operators"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Application Developers"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,l.kt)("h2",{id:"kubernetes-service-apis-\u6709\u54ea\u4e9b\u6269\u5c55\u70b9\uff1f"},"Kubernetes Service APIs \u6709\u54ea\u4e9b\u6269\u5c55\u70b9\uff1f"),(0,l.kt)("p",null,"\u7f51\u5173\u7684\u9700\u6c42\u975e\u5e38\u4e30\u5bcc\uff0c\u540c\u4e00\u4e2a\u573a\u666f\u5b9e\u73b0\u7684\u65b9\u5f0f\u591a\u79cd\u591a\u6837\uff0c\u5404\u6709\u5229\u5f0a\u3002Kubernetes Service APIs \u63d0\u70bc\u51fa \u591a\u5c42 \u8d44\u6e90\u5bf9\u8c61\uff0c\u540c\u65f6\u4e5f\u9884\u7559\u4e86\u4e00\u4e9b\u6269\u5c55\u70b9\u3002"),(0,l.kt)("p",null,"\u76ee\u524d Kubernetes Service APIs \u7684\u6269\u5c55\u70b9\u57fa\u672c\u96c6\u4e2d\u5728 Route \u4e0a\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"RouteMatch \u53ef\u4ee5\u6269\u5c55 Route \u5339\u914d\u89c4\u5219\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"specify Backend \u53ef\u4ee5\u6269\u5c55\u7279\u5b9a\u7c7b\u578b\u7684 \u540e\u7aef\u670d\u52a1\uff0c \u9664\u4e86\u4e0a\u9762\u63d0\u5230\u7684 Kubernetes \u8d44\u6e90\u5916\uff0c\u8fd8\u53ef\u4ee5\u6269\u5c55\u6bd4\u5982 \u6587\u4ef6\u7cfb\u7edf\uff0c\u51fd\u6570\u8868\u8fbe\u5f0f\u7b49\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Route filter \u53ef\u4ee5\u5728 Route \u7684\u751f\u547d\u5468\u671f\u4e2d\u589e\u52a0\u6269\u5c55\u70b9\uff0c\u5904\u7406 request/response \u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Custom Route \u4ee5\u4e0a\u6269\u5c55\u70b9\u90fd\u4e0d\u80fd\u6ee1\u8db3\u65f6\uff0c\u53ef\u4ee5\u5b8c\u5168\u81ea\u5b9a\u4e49\u4e00\u4e2a Route\u3002"))),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"\u672c\u6587\u901a\u8fc7\u63d0\u95ee\u7684\u65b9\u5f0f\uff0c\u5bf9 Kubernetes Service APIs \u505a\u4e86\u4e00\u4e9b\u57fa\u672c\u4ecb\u7ecd\uff0c\u4ece\u6574\u4f53\u6765\u770b\uff0cKubernetes Service APIs \u63d0\u70bc\u4e86\u5f88\u591a ingress \u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u6bd4\u5982\u8868\u8fbe\u80fd\u529b\u7684\u589e\u5f3a\uff0c\u5176\u5b9e\u5c31\u662f\u6269\u5c55\u4e86 Route \u7684\u80fd\u529b\uff0c\u518d\u6bd4\u5982 BackendPolicy \u5bf9\u8c61\uff0c\u53ef\u4ee5\u4e3a upstream \u6307\u5b9a\u51e0\u4e4e\u6240\u6709\u7684 Kubernetes \u540e\u7aef\u8d44\u6e90\u3002\u5f53\u7136\uff0c\u9879\u76ee\u521d\u671f\u4e5f\u6709\u4e0d\u8db3\u7684\u5730\u65b9\uff0c\u76ee\u524d Kubernetes Service APIs \u867d\u7136\u5df2\u7ecf\u4ece\u5927\u7684\u5c42\u9762\u4e0a\u89c4\u5b9a\u4e86\u8d44\u6e90\u5bf9\u8c61\uff0c\u4f46\u8d44\u6e90\u5bf9\u8c61\u5185\u90e8\u8fd8\u6709\u4e0d\u5c11\u7ec6\u8282\u9700\u8981\u8ba8\u8bba\u4e4b\u540e\u518d\u786e\u5b9a\uff0c\u4ee5\u9632\u6b62\u53ef\u80fd\u51fa\u73b0\u7684\u51b2\u7a81\u573a\u666f\uff0c\u7ed3\u6784\u4e0a\u5b58\u5728\u4e00\u5b9a\u53d8\u6570\u3002"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\u53c2\u8003:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes-sigs.github.io/service-apis/"},"https://kubernetes-sigs.github.io/service-apis/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.apiseven.com/zh/blog/a-first-look-at-kubernetes-service-api"},"https://www.apiseven.com/zh/blog/a-first-look-at-kubernetes-service-api"))))}o.isMDXComponent=!0}}]);