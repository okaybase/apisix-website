"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75275],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=l(r),m=a,f=h["".concat(p,".").concat(m)]||h[m]||s[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},39182:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o={title:"\u4f7f\u7528 ECharts \u5448\u73b0\u793e\u533a\u6d3b\u52a8\u7684\u6e32\u67d3\u56fe",date:new Date("2021-08-06T16:10:00.000Z"),keywords:["APISIX","ECharts","\u8d21\u732e\u8005","\u5f00\u6e90"],description:"\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5206\u6790\u4e86\u5f00\u6e90\u8d44\u6e90\u5e93\u7684\u60c5\u51b5\uff1a1.\u8d21\u732e\u8005\u589e\u957f\u66f2\u7ebf;2.\u6bcf\u6708\u7684\u8d21\u732e\u8005\u6d3b\u52a8,\u6765\u53cd\u6620\u5f00\u6e90\u9879\u76ee\u7684\u5065\u5eb7\u72b6\u51b5\uff0c\u8fd9\u91cc\u6211\u4eec\u5206\u4eab\u4e00\u4e9b\u5173\u4e8e\u5982\u4f55\u5236\u4f5c\u8fd9\u4e24\u5f20\u56fe\u7684\u7ecf\u9a8c\u548c\u4e00\u4e9b\u6709\u8da3\u7684\u4e8b\u60c5\u3002"},c={permalink:"/articles/Rendering-Community-Events-Using-ECharts",source:"@site/articles/Rendering-Community-Events-Using-ECharts.md",title:"\u4f7f\u7528 ECharts \u5448\u73b0\u793e\u533a\u6d3b\u52a8\u7684\u6e32\u67d3\u56fe",description:"\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5206\u6790\u4e86\u5f00\u6e90\u8d44\u6e90\u5e93\u7684\u60c5\u51b5\uff1a1.\u8d21\u732e\u8005\u589e\u957f\u66f2\u7ebf;2.\u6bcf\u6708\u7684\u8d21\u732e\u8005\u6d3b\u52a8,\u6765\u53cd\u6620\u5f00\u6e90\u9879\u76ee\u7684\u5065\u5eb7\u72b6\u51b5\uff0c\u8fd9\u91cc\u6211\u4eec\u5206\u4eab\u4e00\u4e9b\u5173\u4e8e\u5982\u4f55\u5236\u4f5c\u8fd9\u4e24\u5f20\u56fe\u7684\u7ecf\u9a8c\u548c\u4e00\u4e9b\u6709\u8da3\u7684\u4e8b\u60c5\u3002",date:"2021-08-06T16:10:00.000Z",formattedDate:"August 6, 2021",tags:[],readingTime:.245,truncated:!1,prevItem:{title:"\u4f9d\u6258\u793e\u533a\u8ba9 Apache APISIX \u9ad8\u901f\u53d1\u5c55",permalink:"/articles/Relying-On-The-Community-To-Get-Apache-APISIX-Up-Speed"},nextItem:{title:"\u4f7f\u7528 Apache APISIX \u8fdb\u884c\u8ba4\u8bc1\u548c\u6388\u6743",permalink:"/articles/Using-Apache-APISIX-To-Do-Authentication-and-Authorization"}},p=[{value:"\u5206\u4eab\u4eba\u7b80\u4ecb",id:"\u5206\u4eab\u4eba\u7b80\u4ecb",children:[]},{value:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd",id:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd",children:[]},{value:"PPT \u4e0b\u8f7d",id:"ppt-\u4e0b\u8f7d",children:[]}],l={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("iframe",{src:"//player.bilibili.com/player.html?aid=847253062&bvid=BV1fL4y1Y7rf&cid=388393914&page=1",frameborder:"0",scrolling:"no",allowfullscreen:"true",style:{width:"100%",maxHeight:"calc(100vw / 5 * 3)",height:"calc(100vh / 5 * 3)"}}),(0,i.kt)("h2",{id:"\u5206\u4eab\u4eba\u7b80\u4ecb"},"\u5206\u4eab\u4eba\u7b80\u4ecb"),(0,i.kt)("p",null,"\u5b59\u6bc5\uff0cApache APISIX committer\uff0c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"apache/apisix")," \u7684\u63d0\u4ea4\u8005\u3002\u4e3b\u8981\u8d1f\u8d23\u7ef4\u62a4 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard"},"apache/apisix-dashboard")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-website"},"apisix-website"),"\u3002"),(0,i.kt)("h2",{id:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd"},"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd"),(0,i.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5206\u6790\u4e86\u5f00\u6e90\u8d44\u6e90\u5e93\u7684\u60c5\u51b5\uff1a1.",(0,i.kt)("a",{parentName:"p",href:"https://github.com/api7/contributor-graph"},"\u8d21\u732e\u8005\u589e\u957f\u66f2\u7ebf"),";2.\u6bcf\u6708\u7684\u8d21\u732e\u8005\u6d3b\u52a8,\u6765\u53cd\u6620\u5f00\u6e90\u9879\u76ee\u7684\u5065\u5eb7\u72b6\u51b5\uff0c\u8fd9\u91cc\u6211\u4eec\u5206\u4eab\u4e00\u4e9b\u5173\u4e8e\u5982\u4f55\u5236\u4f5c\u8fd9\u4e24\u5f20\u56fe\u7684\u7ecf\u9a8c\u548c\u4e00\u4e9b\u6709\u8da3\u7684\u4e8b\u60c5\u3002"),(0,i.kt)("h2",{id:"ppt-\u4e0b\u8f7d"},"PPT \u4e0b\u8f7d"),(0,i.kt)("p",null,"\u5173\u6ce8 Apache APISIX \u516c\u4f17\u53f7\uff0c\u56de\u590d\u201cApacheCon\u201d\u4e0b\u8f7d PPT\u3002"),(0,i.kt)("img",{src:"../img/blog_img/APISIX-wechat.png",alt:"Apache APISIX WeChat",style:{width:"200px"}}))}u.isMDXComponent=!0}}]);