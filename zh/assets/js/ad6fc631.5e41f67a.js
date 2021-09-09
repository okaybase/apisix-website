"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73040],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),l=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,_=d["".concat(o,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(_,s(s({ref:t},c),{},{components:n})):i.createElement(_,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var l=2;l<a;l++)s[l]=n[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91757:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return o},default:function(){return c}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),s={title:"prometheus"},p={unversionedId:"plugins/prometheus",id:"version-2.4/plugins/prometheus",isDocsHomePage:!1,title:"prometheus",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.4/plugins/prometheus.md",sourceDirName:"plugins",slug:"/plugins/prometheus",permalink:"/zh/docs/apisix/2.4/plugins/prometheus",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/prometheus.md",version:"2.4",frontMatter:{title:"prometheus"},sidebar:"version-2.4/docs",previous:{title:"traffic-split",permalink:"/zh/docs/apisix/2.4/plugins/traffic-split"},next:{title:"zipkin",permalink:"/zh/docs/apisix/2.4/plugins/zipkin"}},o=[{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u63a5\u53e3",id:"\u63a5\u53e3",children:[]},{value:"\u5982\u4f55\u5f00\u542f\u63d2\u4ef6",id:"\u5982\u4f55\u5f00\u542f\u63d2\u4ef6",children:[]},{value:"\u5982\u4f55\u63d0\u53d6\u6307\u6807\u6570\u636e",id:"\u5982\u4f55\u63d0\u53d6\u6307\u6807\u6570\u636e",children:[]},{value:"\u5982\u4f55\u4fee\u6539\u66b4\u9732\u6307\u6807\u7684uri",id:"\u5982\u4f55\u4fee\u6539\u66b4\u9732\u6307\u6807\u7684uri",children:[{value:"Grafana \u9762\u677f",id:"grafana-\u9762\u677f",children:[]},{value:"\u53ef\u6709\u7684\u6307\u6807",id:"\u53ef\u6709\u7684\u6307\u6807",children:[]}]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],l={toc:o};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6b64\u63d2\u4ef6\u662f\u63d0\u4f9b\u7b26\u5408prometheus\u6570\u636e\u683c\u5f0f\u7684\u76d1\u63a7\u6307\u6807\u6570\u636e\u3002"),(0,a.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h2",{id:"\u63a5\u53e3"},"\u63a5\u53e3"),(0,a.kt)("p",null,"\u63d2\u4ef6\u4f1a\u589e\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"/apisix/prometheus/metrics")," \u8fd9\u4e2a\u63a5\u53e3\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"../../plugin-interceptors.md"},"interceptors"),"\n\u6765\u4fdd\u62a4\u5b83\u3002"),(0,a.kt)("h2",{id:"\u5982\u4f55\u5f00\u542f\u63d2\u4ef6"},"\u5982\u4f55\u5f00\u542f\u63d2\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"prometheus")," \u63d2\u4ef6\u7528\u7a7a{}\u5c31\u53ef\u4ee5\u5f00\u542f\u4e86,\u4ed6\u6ca1\u6709\u4efb\u4f55\u7684\u9009\u9879\u3002"),(0,a.kt)("p",null,"\u4f8b\u5b50\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "prometheus":{}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u6d4f\u89c8\u5668\u6253\u5f00 dashboard\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9080/apisix/dashboard/"),"\uff0c\u901a\u8fc7 web \u754c\u9762\u6765\u5b8c\u6210\u4e0a\u9762\u7684\u64cd\u4f5c\uff0c\u5148\u589e\u52a0\u4e00\u4e2a route\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/prometheus-1.png",alt:null})),(0,a.kt)("p",null,"\u7136\u540e\u5728 route \u9875\u9762\u4e2d\u6dfb\u52a0 prometheus \u63d2\u4ef6\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/prometheus-2.png",alt:null})),(0,a.kt)("h2",{id:"\u5982\u4f55\u63d0\u53d6\u6307\u6807\u6570\u636e"},"\u5982\u4f55\u63d0\u53d6\u6307\u6807\u6570\u636e"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4ece\u6307\u5b9a\u7684 url \u4e2d\u63d0\u53d6\u6307\u6807\u6570\u636e ",(0,a.kt)("inlineCode",{parentName:"p"},"/apisix/prometheus/metrics"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -i http://127.0.0.1:9080/apisix/prometheus/metrics\n")),(0,a.kt)("p",null,"\u628a\u8be5uri\u5730\u5740\u914d\u7f6e\u5230 prometheus \u4e2d\u53bb,\u5c31\u4f1a\u81ea\u52a8\u5b8c\u6210\u6307\u6807\u6570\u636e\u63d0\u53d6."),(0,a.kt)("p",null,"\u4f8b\u5b50\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n  - job_name: 'apisix'\n    metrics_path: '/apisix/prometheus/metrics'\n    static_configs:\n    - targets: ['127.0.0.1:9080']\n")),(0,a.kt)("p",null,"\u6211\u4eec\u4e5f\u53ef\u4ee5\u5728 prometheus \u63a7\u5236\u53f0\u4e2d\u53bb\u68c0\u67e5\u72b6\u6001:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/prometheus01.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/prometheus02.png",alt:null})),(0,a.kt)("h2",{id:"\u5982\u4f55\u4fee\u6539\u66b4\u9732\u6307\u6807\u7684uri"},"\u5982\u4f55\u4fee\u6539\u66b4\u9732\u6307\u6807\u7684uri"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin_attr")," \u4fee\u6539\u9ed8\u8ba4\u7684uri"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"export_uri"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},'"/apisix/prometheus/metrics"'),(0,a.kt)("td",{parentName:"tr",align:null},"\u66b4\u9732\u6307\u6807\u7684uri")))),(0,a.kt)("p",null,"\u914d\u7f6e\u793a\u4f8b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"plugin_attr:\n  prometheus:\n    export_uri: /apisix/metrics\n")),(0,a.kt)("h3",{id:"grafana-\u9762\u677f"},"Grafana \u9762\u677f"),(0,a.kt)("p",null,"\u63d2\u4ef6\u5bfc\u51fa\u7684\u6307\u6807\u53ef\u4ee5\u5728 Grafana \u8fdb\u884c\u56fe\u5f62\u5316\u7ed8\u5236\u663e\u793a\u3002"),(0,a.kt)("p",null,"\u4e0b\u8f7d ",(0,a.kt)("a",{parentName:"p",href:"../../../assets/other/json/apisix-grafana-dashboard.json"},"Grafana dashboard \u5143\u6570\u636e")," \u5e76\u5bfc\u5165\u5230 Grafana \u4e2d\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5230 ",(0,a.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/11719"},"Grafana \u5b98\u65b9")," \u4e0b\u8f7d ",(0,a.kt)("inlineCode",{parentName:"p"},"Grafana")," \u5143\u6570\u636e."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/grafana_1.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/grafana_2.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/grafana_3.png",alt:null})),(0,a.kt)("h3",{id:"\u53ef\u6709\u7684\u6307\u6807"},"\u53ef\u6709\u7684\u6307\u6807"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Status codes"),": upstream \u670d\u52a1\u8fd4\u56de\u7684 HTTP \u72b6\u6001\u7801\uff0c\u6bcf\u4e2a\u670d\u52a1\u8fd4\u56de\u72b6\u6001\u7801\u7684\u6b21\u6570\u6216\u8005\u6240\u6709\u670d\u52a1\u7684\u72b6\u6001\u7801\u6b21\u6570\u603b\u548c\u90fd\u53ef\u4ee5\u7edf\u8ba1\u5230\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Bandwidth"),": \u6d41\u7ecfapisix\u7684\u603b\u5e26\u5bbd(\u53ef\u5206\u51fa\u53e3\u5e26\u5bbd\u548c\u5165\u53e3\u5e26\u5bbd). \u6bcf\u4e2a\u670d\u52a1\u6307\u6807\u6216\u8005\u662f\u6240\u6709\u670d\u52a1\u6307\u6807\u7684\u603b\u548c\u90fd\u53ef\u4ee5\u7edf\u8ba1\u5230\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"etcd reachability"),": apisix \u8fde\u63a5 etcd \u7684\u53ef\u7528\u6027\uff0c\u7528 0 \u548c 1\u6765\u8868\u793a\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Connections"),": \u5404\u79cd\u7684 Nginx \u8fde\u63a5\u6307\u6807\uff0c\u5982 active\uff08\u6b63\u5904\u7406\u7684\u6d3b\u52a8\u8fde\u63a5\u6570\uff09\uff0creading\uff08nginx \u8bfb\u53d6\u5230\u5ba2\u6237\u7aef\u7684 Header \u4fe1\u606f\u6570\uff09\uff0cwriting\uff08nginx \u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u7684 Header \u4fe1\u606f\u6570\uff09\uff0c\u5df2\u5efa\u7acb\u7684\u8fde\u63a5\u6570\u3002."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Batch process entries"),": \u6279\u5904\u7406\u672a\u53d1\u9001\u6570\u636e\u8ba1\u6570\u5668\uff0c\u5f53\u4f60\u4f7f\u7528\u4e86\u6279\u5904\u7406\u53d1\u9001\u63d2\u4ef6\uff0c\u6bd4\u5982\uff1asys logger, http logger, sls logger, tcp logger, udp logger and zipkin, \u90a3\u4e48\u4f60\u5c06\u4f1a\u5728\u6b64\u6307\u6807\u4e2d\u770b\u5230\u6279\u5904\u7406\u5f53\u524d\u5c1a\u672a\u53d1\u9001\u7684\u6570\u636e\u7684\u6570\u91cf\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Latency"),": \u6bcf\u4e2a\u670d\u52a1\u7684\u8bf7\u6c42\u7528\u65f6\u548c APISIX \u5904\u7406\u8017\u65f6\u7684\u76f4\u65b9\u56fe\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Info"),": \u5f53\u524d APISIX \u8282\u70b9\u4fe1\u606f\u3002")),(0,a.kt)("p",null,"\u8fd9\u91cc\u662fapisix\u7684\u539f\u59cb\u7684\u6307\u6807\u6570\u636e\u96c6:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ curl http://127.0.0.2:9080/apisix/prometheus/metrics\n# HELP apisix_bandwidth Total bandwidth in bytes consumed per service in Apisix\n# TYPE apisix_bandwidth counter\napisix_bandwidth{type="egress",service="127.0.0.2"} 183\napisix_bandwidth{type="egress",service="bar.com"} 183\napisix_bandwidth{type="egress",service="foo.com"} 2379\napisix_bandwidth{type="ingress",service="127.0.0.2"} 83\napisix_bandwidth{type="ingress",service="bar.com"} 76\napisix_bandwidth{type="ingress",service="foo.com"} 988\n# HELP apisix_etcd_modify_indexes Etcd modify index for APISIX keys\n# TYPE apisix_etcd_modify_indexes gauge\napisix_etcd_modify_indexes{key="consumers"} 0\napisix_etcd_modify_indexes{key="global_rules"} 0\napisix_etcd_modify_indexes{key="max_modify_index"} 222\napisix_etcd_modify_indexes{key="prev_index"} 35\napisix_etcd_modify_indexes{key="protos"} 0\napisix_etcd_modify_indexes{key="routes"} 222\napisix_etcd_modify_indexes{key="services"} 0\napisix_etcd_modify_indexes{key="ssls"} 0\napisix_etcd_modify_indexes{key="stream_routes"} 0\napisix_etcd_modify_indexes{key="upstreams"} 0\napisix_etcd_modify_indexes{key="x_etcd_index"} 223\n# HELP apisix_batch_process_entries batch process remaining entries\n# TYPE apisix_batch_process_entries gauge\napisix_batch_process_entries{name="http-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="sls-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="tcp-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="udp-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="sys-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="zipkin_report",route_id="9",server_addr="127.0.0.1"} 1\n# HELP apisix_etcd_reachable Config server etcd reachable from Apisix, 0 is unreachable\n# TYPE apisix_etcd_reachable gauge\napisix_etcd_reachable 1\n# HELP apisix_http_status HTTP status codes per service in Apisix\n# TYPE apisix_http_status counter\napisix_http_status{code="200",service="127.0.0.2"} 1\napisix_http_status{code="200",service="bar.com"} 1\napisix_http_status{code="200",service="foo.com"} 13\n# HELP apisix_nginx_http_current_connections Number of HTTP connections\n# TYPE apisix_nginx_http_current_connections gauge\napisix_nginx_http_current_connections{state="accepted"} 11994\napisix_nginx_http_current_connections{state="active"} 2\napisix_nginx_http_current_connections{state="handled"} 11994\napisix_nginx_http_current_connections{state="reading"} 0\napisix_nginx_http_current_connections{state="total"} 1191780\napisix_nginx_http_current_connections{state="waiting"} 1\napisix_nginx_http_current_connections{state="writing"} 1\n# HELP apisix_nginx_metric_errors_total Number of nginx-lua-prometheus errors\n# TYPE apisix_nginx_metric_errors_total counter\napisix_nginx_metric_errors_total 0\n# HELP apisix_http_latency HTTP request latency in milliseconds per service in APISIX\n# TYPE apisix_http_latency histogram\napisix_http_latency_bucket{type="request",service="",consumer="",node="127.0.0.1",le="00001.0"} 1\napisix_http_latency_bucket{type="request",service="",consumer="",node="127.0.0.1",le="00002.0"} 1\n...\n# HELP apisix_http_overhead HTTP request overhead added by APISIX in milliseconds per service in APISIX\n# TYPE apisix_http_overhead histogram\napisix_http_overhead_bucket{type="request",service="",consumer="",node="127.0.0.1",le="00001.0"} 1\napisix_http_overhead_bucket{type="request",service="",consumer="",node="127.0.0.1",le="00002.0"} 1\n...\n# HELP apisix_node_info Info of APISIX node\n# TYPE apisix_node_info gauge\napisix_node_info{hostname="desktop-2022q8f-wsl"} 1\n')),(0,a.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5728\u63d2\u4ef6\u8bbe\u7f6e\u9875\u9762\u4e2d\u5220\u9664\u76f8\u5e94\u7684 json \u914d\u7f6e\u5373\u53ef\u7981\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus")," \u63d2\u4ef6\u3002APISIX \u7684\u63d2\u4ef6\u662f\u70ed\u52a0\u8f7d\u7684\uff0c\u56e0\u6b64\u65e0\u9700\u91cd\u542f APISIX \u670d\u52a1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')))}c.isMDXComponent=!0}}]);