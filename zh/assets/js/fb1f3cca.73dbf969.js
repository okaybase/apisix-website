"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50043],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2138:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return o},default:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l={title:"Admin API TLS \u53cc\u5411\u8ba4\u8bc1"},c={unversionedId:"mtls",id:"version-2.6/mtls",isDocsHomePage:!1,title:"Admin API TLS \u53cc\u5411\u8ba4\u8bc1",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.6/mtls.md",sourceDirName:".",slug:"/mtls",permalink:"/zh/docs/apisix/2.6/mtls",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/mtls.md",version:"2.6",frontMatter:{title:"Admin API TLS \u53cc\u5411\u8ba4\u8bc1"}},o=[{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528",children:[]},{value:"\u5982\u4f55\u5f00\u542f",id:"\u5982\u4f55\u5f00\u542f",children:[]},{value:"\u5ba2\u6237\u7aef\u5982\u4f55\u8c03\u7528",id:"\u5ba2\u6237\u7aef\u5982\u4f55\u8c03\u7528",children:[]}],s={toc:o};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528"),(0,i.kt)("p",null,"\u53cc\u5411\u8ba4\u8bc1\u53ef\u4ee5\u66f4\u597d\u7684\u9632\u6b62\u672a\u7ecf\u6388\u6743\u8bbf\u95ee APISIX \uff0c\u5ba2\u6237\u7aef\u5c06\u5411\u670d\u52a1\u5668\u63d0\u4f9b\u5176\u8bc1\u4e66\uff0c\u670d\u52a1\u5668\u5c06\u68c0\u67e5\u8bc1\u4e66\u662f\u5426\u7531\u63d0\u4f9b\u7684 CA \u7b7e\u540d\u5e76\u51b3\u5b9a\u662f\u5426\u54cd\u5e94\u8bf7\u6c42\u3002"),(0,i.kt)("h3",{id:"\u5982\u4f55\u5f00\u542f"},"\u5982\u4f55\u5f00\u542f"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u751f\u6210\u81ea\u7b7e\u8bc1\u4e66\u5bf9\uff0c\u5305\u62ec ca\u3001server\u3001client \u8bc1\u4e66\u5bf9\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\u7684\u914d\u7f6e\u9879:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'  port_admin: 9180\n  https_admin: true\n\n  admin_api_mtls:\n    admin_ssl_ca_cert: "/data/certs/mtls_ca.crt"              # Path of your self-signed ca cert.\n    admin_ssl_cert: "/data/certs/mtls_server.crt"             # Path of your self-signed server side cert.\n    admin_ssl_cert_key: "/data/certs/mtls_server.key"         # Path of your self-signed server side key.\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u6267\u884c\u547d\u4ee4:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"apisix init\napisix reload\n")),(0,i.kt)("h3",{id:"\u5ba2\u6237\u7aef\u5982\u4f55\u8c03\u7528"},"\u5ba2\u6237\u7aef\u5982\u4f55\u8c03\u7528"),(0,i.kt)("p",null,"\u8bf7\u5c06\u4ee5\u4e0b\u8bc1\u4e66\u53ca\u57df\u540d\u66ff\u6362\u4e3a\u60a8\u7684\u771f\u5b9e\u5185\u5bb9\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u9700\u8981\u548c\u670d\u52a1\u5668\u4f7f\u7528\u76f8\u540c\u7684 CA \u8bc1\u4e66 *")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl --cacert /data/certs/mtls_ca.crt --key /data/certs/mtls_client.key --cert /data/certs/mtls_client.crt  https://admin.apisix.dev:9180/apisix/admin/routes -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1'\n")))}p.isMDXComponent=!0}}]);