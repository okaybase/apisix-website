"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3826],{66337:function(i){i.exports=JSON.parse('{"pluginId":"docs-apisix","version":"2.6","label":"2.6","isLast":false,"docsSidebars":{"version-2.6/docs":[{"type":"link","label":"Apache APISIX","href":"https://apisix.apache.org/docs/apisix/getting-started"},{"collapsed":true,"type":"category","label":"Architecture Design","items":[{"type":"link","label":"APISIX","href":"/zh/docs/apisix/2.6/architecture-design/apisix"},{"type":"link","label":"Route","href":"/zh/docs/apisix/2.6/architecture-design/route"},{"type":"link","label":"Plugin","href":"/zh/docs/apisix/2.6/architecture-design/plugin"},{"type":"link","label":"Script","href":"/zh/docs/apisix/2.6/architecture-design/script"},{"type":"link","label":"Service","href":"/zh/docs/apisix/2.6/architecture-design/service"},{"type":"link","label":"Consumer","href":"/zh/docs/apisix/2.6/architecture-design/consumer"},{"type":"link","label":"Upstream","href":"/zh/docs/apisix/2.6/architecture-design/upstream"},{"type":"link","label":"Global rule","href":"/zh/docs/apisix/2.6/architecture-design/global-rule"},{"type":"link","label":"Plugin Config","href":"/zh/docs/apisix/2.6/architecture-design/plugin-config"},{"type":"link","label":"Router","href":"/zh/docs/apisix/2.6/architecture-design/router"},{"type":"link","label":"Debug Mode","href":"/zh/docs/apisix/2.6/architecture-design/debug-mode"}]},{"type":"link","label":"\u5feb\u901f\u5165\u95e8\u6307\u5357","href":"/zh/docs/apisix/2.6/getting-started"},{"type":"link","label":"\u5982\u4f55\u6784\u5efa Apache APISIX","href":"/zh/docs/apisix/2.6/how-to-build"},{"collapsed":true,"type":"category","label":"Plugins","items":[{"collapsed":true,"type":"category","label":"General","items":[{"type":"link","label":"batch-requests","href":"/zh/docs/apisix/2.6/plugins/batch-requests"},{"type":"link","label":"serverless","href":"/zh/docs/apisix/2.6/plugins/serverless"},{"type":"link","label":"redirect","href":"/zh/docs/apisix/2.6/plugins/redirect"},{"type":"link","label":"echo","href":"/zh/docs/apisix/2.6/plugins/echo"},{"type":"link","label":"server-info","href":"/zh/docs/apisix/2.6/plugins/server-info"}]},{"collapsed":true,"type":"category","label":"Transformation","items":[{"type":"link","label":"response-rewrite","href":"/zh/docs/apisix/2.6/plugins/response-rewrite"},{"type":"link","label":"proxy-rewrite","href":"/zh/docs/apisix/2.6/plugins/proxy-rewrite"},{"type":"link","label":"grpc-transcode","href":"/zh/docs/apisix/2.6/plugins/grpc-transcode"},{"type":"link","label":"fault-injection","href":"/zh/docs/apisix/2.6/plugins/fault-injection"}]},{"collapsed":true,"type":"category","label":"Authentication","items":[{"type":"link","label":"key-auth","href":"/zh/docs/apisix/2.6/plugins/key-auth"},{"type":"link","label":"jwt-auth","href":"/zh/docs/apisix/2.6/plugins/jwt-auth"},{"type":"link","label":"basic-auth","href":"/zh/docs/apisix/2.6/plugins/basic-auth"},{"type":"link","label":"authz-keycloak","href":"/zh/docs/apisix/2.6/plugins/authz-keycloak"},{"type":"link","label":"wolf-rbac","href":"/zh/docs/apisix/2.6/plugins/wolf-rbac"},{"type":"link","label":"openid-connect","href":"/zh/docs/apisix/2.6/plugins/openid-connect"},{"type":"link","label":"hmac-auth","href":"/zh/docs/apisix/2.6/plugins/hmac-auth"}]},{"collapsed":true,"type":"category","label":"Security","items":[{"type":"link","label":"cors","href":"/zh/docs/apisix/2.6/plugins/cors"},{"type":"link","label":"uri-blocker","href":"/zh/docs/apisix/2.6/plugins/uri-blocker"},{"type":"link","label":"ip-restriction","href":"/zh/docs/apisix/2.6/plugins/ip-restriction"},{"type":"link","label":"referer-restriction","href":"/zh/docs/apisix/2.6/plugins/referer-restriction"},{"type":"link","label":"consumer-restriction","href":"/zh/docs/apisix/2.6/plugins/consumer-restriction"}]},{"collapsed":true,"type":"category","label":"Traffic","items":[{"type":"link","label":"limit-req","href":"/zh/docs/apisix/2.6/plugins/limit-req"},{"type":"link","label":"limit-conn","href":"/zh/docs/apisix/2.6/plugins/limit-conn"},{"type":"link","label":"limit-count","href":"/zh/docs/apisix/2.6/plugins/limit-count"},{"type":"link","label":"proxy-cache","href":"/zh/docs/apisix/2.6/plugins/proxy-cache"},{"type":"link","label":"request-validation","href":"/zh/docs/apisix/2.6/plugins/request-validation"},{"type":"link","label":"proxy-mirror","href":"/zh/docs/apisix/2.6/plugins/proxy-mirror"},{"type":"link","label":"api-breaker","href":"/zh/docs/apisix/2.6/plugins/api-breaker"},{"type":"link","label":"traffic-split","href":"/zh/docs/apisix/2.6/plugins/traffic-split"},{"type":"link","label":"request-id","href":"/zh/docs/apisix/2.6/plugins/request-id"}]},{"collapsed":true,"type":"category","label":"Monitoring","items":[{"type":"link","label":"prometheus","href":"/zh/docs/apisix/2.6/plugins/prometheus"},{"type":"link","label":"zipkin","href":"/zh/docs/apisix/2.6/plugins/zipkin"},{"type":"link","label":"skywalking","href":"/zh/docs/apisix/2.6/plugins/skywalking"},{"type":"link","label":"node-status","href":"/zh/docs/apisix/2.6/plugins/node-status"}]},{"collapsed":true,"type":"category","label":"Loggers","items":[{"type":"link","label":"http-logger","href":"/zh/docs/apisix/2.6/plugins/http-logger"},{"type":"link","label":"tcp-logger","href":"/zh/docs/apisix/2.6/plugins/tcp-logger"},{"type":"link","label":"kafka-logger","href":"/zh/docs/apisix/2.6/plugins/kafka-logger"},{"type":"link","label":"udp-logger","href":"/zh/docs/apisix/2.6/plugins/udp-logger"},{"type":"link","label":"syslog","href":"/zh/docs/apisix/2.6/plugins/syslog"},{"type":"link","label":"log-rotate","href":"/zh/docs/apisix/2.6/plugins/log-rotate"},{"type":"link","label":"error-log-logger","href":"/zh/docs/apisix/2.6/plugins/error-log-logger"},{"type":"link","label":"sls-logger","href":"/zh/docs/apisix/2.6/plugins/sls-logger"}]},{"collapsed":true,"type":"category","label":"Other Protocols","items":[{"type":"link","label":"dubbo-proxy","href":"/zh/docs/apisix/2.6/plugins/dubbo-proxy"},{"type":"link","label":"mqtt-proxy","href":"/zh/docs/apisix/2.6/plugins/mqtt-proxy"}]}]},{"collapsed":true,"type":"category","label":"API","items":[{"type":"link","label":"Admin API","href":"/zh/docs/apisix/2.6/admin-api"},{"type":"link","label":"Control API","href":"/zh/docs/apisix/2.6/control-api"}]},{"type":"link","label":"\u5e38\u89c1\u95ee\u9898","href":"/zh/docs/apisix/2.6/FAQ"},{"collapsed":true,"type":"category","label":"Others","items":[{"collapsed":true,"type":"category","label":"Discovery","items":[{"type":"link","label":"\u96c6\u6210\u670d\u52a1\u53d1\u73b0\u6ce8\u518c\u4e2d\u5fc3","href":"/zh/docs/apisix/2.6/discovery"},{"type":"link","label":"DNS","href":"/zh/docs/apisix/2.6/discovery/dns"},{"type":"link","label":"consul_kv","href":"/zh/docs/apisix/2.6/discovery/consul_kv"},{"type":"link","label":"nacos","href":"/zh/docs/apisix/2.6/discovery/nacos"},{"type":"link","label":"eureka","href":"/zh/docs/apisix/2.6/discovery/eureka"}]},{"type":"link","label":"\u5065\u5eb7\u68c0\u67e5","href":"/zh/docs/apisix/2.6/health-check"},{"type":"link","label":"Router radixtree","href":"/zh/docs/apisix/2.6/router-radixtree"},{"type":"link","label":"Stand-alone mode","href":"/zh/docs/apisix/2.6/stand-alone"},{"type":"link","label":"TCP/UDP \u52a8\u6001\u4ee3\u7406","href":"/zh/docs/apisix/2.6/stream-proxy"},{"type":"link","label":"gRPC \u4ee3\u7406","href":"/zh/docs/apisix/2.6/grpc-proxy"},{"type":"link","label":"\u81ea\u5b9a\u4e49 Nginx \u914d\u7f6e","href":"/zh/docs/apisix/2.6/customize-nginx-configuration"},{"type":"link","label":"HTTPS","href":"/zh/docs/apisix/2.6/https"},{"type":"link","label":"\u6279\u5904\u7406\u673a","href":"/zh/docs/apisix/2.6/batch-processor"},{"type":"link","label":"\u538b\u529b\u6d4b\u8bd5","href":"/zh/docs/apisix/2.6/benchmark"},{"type":"link","label":"\u5b89\u88c5\u4f9d\u8d56","href":"/zh/docs/apisix/2.6/install-dependencies"},{"type":"link","label":"\u63d2\u4ef6\u5f00\u53d1","href":"/zh/docs/apisix/2.6/plugin-develop"},{"type":"link","label":"\u63d2\u4ef6\u62e6\u622a\u5668","href":"/zh/docs/apisix/2.6/plugin-interceptors"},{"type":"link","label":"CODE_STYLE","href":"https://github.com/apache/apisix/blob/master/CODE_STYLE.md"},{"type":"link","label":"\u8c03\u8bd5\u529f\u80fd","href":"/zh/docs/apisix/2.6/debug-function"}]},{"type":"link","label":"CHANGELOG","href":"https://github.com/apache/apisix/blob/master/CHANGELOG.md"}]},"permalinkToSidebar":{"/zh/docs/apisix/2.6/admin-api":"version-2.6/docs","/zh/docs/apisix/2.6/architecture-design/apisix":"version-2.6/docs","/zh/docs/apisix/2.6/architecture-design/consumer":"version-2.6/docs","/zh/docs/apisix/2.6/architecture-design/debug-mode":"version-2.6/docs","/zh/docs/apisix/2.6/architecture-design/global-rule":"version-2.6/docs","/zh/docs/apisix/2.6/architecture-design/plugin":"version-2.6/docs","/zh/docs/apisix/2.6/architecture-design/plugin-config":"version-2.6/docs","/zh/docs/apisix/2.6/architecture-design/route":"version-2.6/docs","/zh/docs/apisix/2.6/architecture-design/router":"version-2.6/docs","/zh/docs/apisix/2.6/architecture-design/script":"version-2.6/docs","/zh/docs/apisix/2.6/architecture-design/service":"version-2.6/docs","/zh/docs/apisix/2.6/architecture-design/upstream":"version-2.6/docs","/zh/docs/apisix/2.6/batch-processor":"version-2.6/docs","/zh/docs/apisix/2.6/benchmark":"version-2.6/docs","/zh/docs/apisix/2.6/control-api":"version-2.6/docs","/zh/docs/apisix/2.6/customize-nginx-configuration":"version-2.6/docs","/zh/docs/apisix/2.6/debug-function":"version-2.6/docs","/zh/docs/apisix/2.6/discovery":"version-2.6/docs","/zh/docs/apisix/2.6/discovery/consul_kv":"version-2.6/docs","/zh/docs/apisix/2.6/discovery/dns":"version-2.6/docs","/zh/docs/apisix/2.6/discovery/eureka":"version-2.6/docs","/zh/docs/apisix/2.6/discovery/nacos":"version-2.6/docs","/zh/docs/apisix/2.6/FAQ":"version-2.6/docs","/zh/docs/apisix/2.6/getting-started":"version-2.6/docs","/zh/docs/apisix/2.6/grpc-proxy":"version-2.6/docs","/zh/docs/apisix/2.6/health-check":"version-2.6/docs","/zh/docs/apisix/2.6/how-to-build":"version-2.6/docs","/zh/docs/apisix/2.6/https":"version-2.6/docs","/zh/docs/apisix/2.6/install-dependencies":"version-2.6/docs","/zh/docs/apisix/2.6/plugin-develop":"version-2.6/docs","/zh/docs/apisix/2.6/plugin-interceptors":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/api-breaker":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/authz-keycloak":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/basic-auth":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/batch-requests":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/consumer-restriction":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/cors":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/dubbo-proxy":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/echo":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/error-log-logger":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/fault-injection":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/grpc-transcode":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/hmac-auth":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/http-logger":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/ip-restriction":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/jwt-auth":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/kafka-logger":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/key-auth":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/limit-conn":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/limit-count":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/limit-req":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/log-rotate":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/mqtt-proxy":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/node-status":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/openid-connect":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/prometheus":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/proxy-cache":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/proxy-mirror":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/proxy-rewrite":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/redirect":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/referer-restriction":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/request-id":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/request-validation":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/response-rewrite":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/server-info":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/serverless":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/skywalking":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/sls-logger":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/syslog":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/tcp-logger":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/traffic-split":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/udp-logger":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/uri-blocker":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/wolf-rbac":"version-2.6/docs","/zh/docs/apisix/2.6/plugins/zipkin":"version-2.6/docs","/zh/docs/apisix/2.6/router-radixtree":"version-2.6/docs","/zh/docs/apisix/2.6/stand-alone":"version-2.6/docs","/zh/docs/apisix/2.6/stream-proxy":"version-2.6/docs"}}')}}]);