(self.webpackChunk=self.webpackChunk||[]).push([[1494],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(h,s(s({ref:t},c),{},{components:n})):i.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<r;l++)s[l]=n[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82230:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return p},default:function(){return c}});var i=n(22122),a=n(19756),r=(n(67294),n(3905)),s={title:"prometheus"},o={unversionedId:"plugins/prometheus",id:"version-2.4/plugins/prometheus",isDocsHomePage:!1,title:"prometheus",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.4/plugins/prometheus.md",sourceDirName:"plugins",slug:"/plugins/prometheus",permalink:"/zh/docs/apisix/2.4/plugins/prometheus",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/prometheus.md",version:"2.4",frontMatter:{title:"prometheus"},sidebar:"version-2.4/docs",previous:{title:"traffic-split",permalink:"/zh/docs/apisix/2.4/plugins/traffic-split"},next:{title:"Zipkin",permalink:"/zh/docs/apisix/2.4/plugins/zipkin"}},p=[{value:"Attributes",id:"attributes",children:[]},{value:"API",id:"api",children:[]},{value:"How to enable it",id:"how-to-enable-it",children:[]},{value:"How to fetch the metric data",id:"how-to-fetch-the-metric-data",children:[]},{value:"How to specify export uri",id:"how-to-specify-export-uri",children:[{value:"Grafana dashboard",id:"grafana-dashboard",children:[]},{value:"Available metrics",id:"available-metrics",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],l={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This plugin exposes metrics in Prometheus Exposition format."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("p",null,"none."),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"This plugin will add ",(0,r.kt)("inlineCode",{parentName:"p"},"/apisix/prometheus/metrics")," to expose the metrics.\nYou may need to use ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.4/plugin-interceptors"},"interceptors")," to protect it."),(0,r.kt)("h2",{id:"how-to-enable-it"},"How to enable it"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"prometheus")," plugin can be enable with empty table, because it doesn't have\nany options yet."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "prometheus":{}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"You can open dashboard with a browser: ",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9080/apisix/dashboard/"),", to complete the above operation through the web interface, first add a route:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/prometheus-1.png",alt:null})),(0,r.kt)("p",null,"Then add prometheus plugin:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/prometheus-2.png",alt:null})),(0,r.kt)("h2",{id:"how-to-fetch-the-metric-data"},"How to fetch the metric data"),(0,r.kt)("p",null,"We fetch the metric data from the specified url ",(0,r.kt)("inlineCode",{parentName:"p"},"/apisix/prometheus/metrics"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -i http://127.0.0.1:9080/apisix/prometheus/metrics\n")),(0,r.kt)("p",null,"Puts this URL address into prometheus, and it will automatically fetch\nthese metric data."),(0,r.kt)("p",null,"For example like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n  - job_name: 'apisix'\n    metrics_path: '/apisix/prometheus/metrics'\n    static_configs:\n    - targets: ['127.0.0.1:9080']\n")),(0,r.kt)("p",null,"And we can check the status at prometheus console:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/prometheus01.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/prometheus02.png",alt:null})),(0,r.kt)("h2",{id:"how-to-specify-export-uri"},"How to specify export uri"),(0,r.kt)("p",null,"We can change the default export uri in the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin_attr")," section of ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"export_uri"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"/apisix/prometheus/metrics"'),(0,r.kt)("td",{parentName:"tr",align:null},"uri to get the prometheus metrics")))),(0,r.kt)("p",null,"Here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"plugin_attr:\n  prometheus:\n    export_uri: /apisix/metrics\n")),(0,r.kt)("h3",{id:"grafana-dashboard"},"Grafana dashboard"),(0,r.kt)("p",null,"Metrics exported by the plugin can be graphed in Grafana using a drop in dashboard."),(0,r.kt)("p",null,"Downloads ",(0,r.kt)("a",{parentName:"p",href:"../../../assets/other/json/apisix-grafana-dashboard.json"},"Grafana dashboard meta")," and imports it to Grafana\u3002"),(0,r.kt)("p",null,"Or you can goto ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/11719"},"Grafana official")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"Grafana")," meta data."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/grafana_1.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/grafana_2.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/grafana_3.png",alt:null})),(0,r.kt)("h3",{id:"available-metrics"},"Available metrics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Status codes"),": HTTP status codes returned by upstream services. These are available per service and across all services."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Bandwidth"),": Total Bandwidth (egress/ingress) flowing through apisix. This metric is available per service and as a sum across all services."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"etcd reachability"),": A gauge type with a value of 0 or 1, representing if etcd can be reached by a apisix or not."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Connections"),": Various Nginx connection metrics like active, reading, writing, and number of accepted connections."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Batch process entries"),": A gauge type, when we use plugins and the plugin used batch process to send data, such as: sys logger, http logger, sls logger, tcp logger, udp logger and zipkin, then the entries which hasn't been sent in batch process will be counted in the metrics."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Latency"),": The per service histogram of request time and the overhead added by APISIX (request time - upstream response time)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Info"),": the information of APISIX node.")),(0,r.kt)("p",null,"Here is the original metric data of apisix:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ curl http://127.0.0.1:9080/apisix/prometheus/metrics\n# HELP apisix_bandwidth Total bandwidth in bytes consumed per service in Apisix\n# TYPE apisix_bandwidth counter\napisix_bandwidth{type="egress",service="127.0.0.2"} 183\napisix_bandwidth{type="egress",service="bar.com"} 183\napisix_bandwidth{type="egress",service="foo.com"} 2379\napisix_bandwidth{type="ingress",service="127.0.0.2"} 83\napisix_bandwidth{type="ingress",service="bar.com"} 76\napisix_bandwidth{type="ingress",service="foo.com"} 988\n# HELP apisix_etcd_modify_indexes Etcd modify index for APISIX keys\n# TYPE apisix_etcd_modify_indexes gauge\napisix_etcd_modify_indexes{key="consumers"} 0\napisix_etcd_modify_indexes{key="global_rules"} 0\napisix_etcd_modify_indexes{key="max_modify_index"} 222\napisix_etcd_modify_indexes{key="prev_index"} 35\napisix_etcd_modify_indexes{key="protos"} 0\napisix_etcd_modify_indexes{key="routes"} 222\napisix_etcd_modify_indexes{key="services"} 0\napisix_etcd_modify_indexes{key="ssls"} 0\napisix_etcd_modify_indexes{key="stream_routes"} 0\napisix_etcd_modify_indexes{key="upstreams"} 0\napisix_etcd_modify_indexes{key="x_etcd_index"} 223\n# HELP apisix_batch_process_entries batch process remaining entries\n# TYPE apisix_batch_process_entries gauge\napisix_batch_process_entries{name="http-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="sls-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="tcp-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="udp-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="sys-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="zipkin_report",route_id="9",server_addr="127.0.0.1"} 1\n# HELP apisix_etcd_reachable Config server etcd reachable from Apisix, 0 is unreachable\n# TYPE apisix_etcd_reachable gauge\napisix_etcd_reachable 1\n# HELP apisix_http_status HTTP status codes per service in Apisix\n# TYPE apisix_http_status counter\napisix_http_status{code="200",service="127.0.0.2"} 1\napisix_http_status{code="200",service="bar.com"} 1\napisix_http_status{code="200",service="foo.com"} 13\n# HELP apisix_nginx_http_current_connections Number of HTTP connections\n# TYPE apisix_nginx_http_current_connections gauge\napisix_nginx_http_current_connections{state="accepted"} 11994\napisix_nginx_http_current_connections{state="active"} 2\napisix_nginx_http_current_connections{state="handled"} 11994\napisix_nginx_http_current_connections{state="reading"} 0\napisix_nginx_http_current_connections{state="total"} 1191780\napisix_nginx_http_current_connections{state="waiting"} 1\napisix_nginx_http_current_connections{state="writing"} 1\n# HELP apisix_nginx_metric_errors_total Number of nginx-lua-prometheus errors\n# TYPE apisix_nginx_metric_errors_total counter\napisix_nginx_metric_errors_total 0\n# HELP apisix_http_latency HTTP request latency in milliseconds per service in APISIX\n# TYPE apisix_http_latency histogram\napisix_http_latency_bucket{type="request",service="",consumer="",node="127.0.0.1",le="00001.0"} 1\napisix_http_latency_bucket{type="request",service="",consumer="",node="127.0.0.1",le="00002.0"} 1\n...\n# HELP apisix_http_overhead HTTP request overhead added by APISIX in milliseconds per service in APISIX\n# TYPE apisix_http_overhead histogram\napisix_http_overhead_bucket{type="request",service="",consumer="",node="127.0.0.1",le="00001.0"} 1\napisix_http_overhead_bucket{type="request",service="",consumer="",node="127.0.0.1",le="00002.0"} 1\n...\n# HELP apisix_node_info Info of APISIX node\n# TYPE apisix_node_info gauge\napisix_node_info{hostname="desktop-2022q8f-wsl"} 1\n')),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"Remove the corresponding json configuration in the plugin configuration to disable ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus"),".\nAPISIX plugins are hot-reloaded, therefore no need to restart APISIX."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')))}c.isMDXComponent=!0}}]);