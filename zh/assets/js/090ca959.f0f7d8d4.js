(self.webpackChunk=self.webpackChunk||[]).push([[6679],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return g}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),h=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=h(e.components);return a.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=h(t),g=r,m=u["".concat(o,".").concat(g)]||u[g]||p[g]||s;return t?a.createElement(m,i(i({ref:n},l),{},{components:t})):a.createElement(m,i({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=u;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var h=2;h<s;h++)i[h]=t[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},90029:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return o},default:function(){return l}});var a=t(22122),r=t(19756),s=(t(67294),t(3905)),i={title:"HMAC Generate Signature Examples"},c={unversionedId:"examples/plugins-hmac-auth-generate-signature",id:"version-2.5/examples/plugins-hmac-auth-generate-signature",isDocsHomePage:!1,title:"HMAC Generate Signature Examples",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.5/examples/plugins-hmac-auth-generate-signature.md",sourceDirName:"examples",slug:"/examples/plugins-hmac-auth-generate-signature",permalink:"/zh/docs/apisix/examples/plugins-hmac-auth-generate-signature",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/examples/plugins-hmac-auth-generate-signature.md",version:"2.5",frontMatter:{title:"HMAC Generate Signature Examples"}},o=[{value:"Python 3",id:"python-3",children:[]},{value:"Java",id:"java",children:[]},{value:"Go",id:"go",children:[]},{value:"Ruby",id:"ruby",children:[]},{value:"NodeJs",id:"nodejs",children:[]},{value:"JavaScript ES6",id:"javascript-es6",children:[]},{value:"PHP",id:"php",children:[]},{value:"Lua",id:"lua",children:[]},{value:"Shell",id:"shell",children:[]}],h={toc:o};function l(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"python-3"},"Python 3"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"import base64\nimport hashlib\nimport hmac\n\nsecret = bytes('the shared secret key here', 'utf-8')\nmessage = bytes('this is signature string', 'utf-8')\n\n\nhash = hmac.new(secret, message, hashlib.sha256)\n\n# to lowercase hexits\nhash.hexdigest()\n\n# to lowercase base64\nbase64.b64encode(hash.digest())\n")),(0,s.kt)("h2",{id:"java"},"Java"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'import javax.crypto.Mac;\nimport javax.crypto.spec.SecretKeySpec;\nimport java.security.InvalidKeyException;\nimport java.security.NoSuchAlgorithmException;\nimport javax.xml.bind.DatatypeConverter;\n\nclass Main {\n  public static void main(String[] args) {\n   try {\n     String secret = "the shared secret key here";\n     String message = "this is signature string";\n\n     Mac hasher = Mac.getInstance("HmacSHA256");\n     hasher.init(new SecretKeySpec(secret.getBytes(), "HmacSHA256"));\n\n     byte[] hash = hasher.doFinal(message.getBytes());\n\n     // to lowercase hexits\n     DatatypeConverter.printHexBinary(hash);\n\n     // to base64\n     DatatypeConverter.printBase64Binary(hash);\n   }\n   catch (NoSuchAlgorithmException e) {}\n   catch (InvalidKeyException e) {}\n  }\n}\n')),(0,s.kt)("h2",{id:"go"},"Go"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "crypto/hmac"\n    "crypto/sha256"\n    "encoding/base64"\n    "encoding/hex"\n)\n\nfunc main() {\n    secret := []byte("the shared secret key here")\n    message := []byte("this is signature string")\n\n    hash := hmac.New(sha256.New, secret)\n    hash.Write(message)\n\n    // to lowercase hexits\n    hex.EncodeToString(hash.Sum(nil))\n\n    // to base64\n    base64.StdEncoding.EncodeToString(hash.Sum(nil))\n}\n')),(0,s.kt)("h2",{id:"ruby"},"Ruby"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'base64'\nrequire 'openssl'\n\nsecret = 'the shared secret key here'\nmessage = 'this is signature string'\n\n# to lowercase hexits\nOpenSSL::HMAC.hexdigest('sha256', secret, message)\n\n# to base64\nBase64.encode64(OpenSSL::HMAC.digest('sha256', secret, message))\n")),(0,s.kt)("h2",{id:"nodejs"},"NodeJs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"var crypto = require('crypto');\n\nvar secret = 'the shared secret key here';\nvar message = 'this is signature string';\n\nvar hash = crypto.createHmac('sha256', secret).update(message);\n\n// to lowercase hexits\nhash.digest('hex');\n\n// to base64\nhash.digest('base64');\n")),(0,s.kt)("h2",{id:"javascript-es6"},"JavaScript ES6"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const secret = 'the shared secret key here';\nconst message = 'this is signature string';\n\nconst getUtf8Bytes = str =>\n  new Uint8Array(\n    [...unescape(encodeURIComponent(str))].map(c => c.charCodeAt(0))\n  );\n\nconst secretBytes = getUtf8Bytes(secret);\nconst messageBytes = getUtf8Bytes(message);\n\nconst cryptoKey = await crypto.subtle.importKey(\n  'raw', secretBytes, { name: 'HMAC', hash: 'SHA-256' },\n  true, ['sign']\n);\nconst sig = await crypto.subtle.sign('HMAC', cryptoKey, messageBytes);\n\n// to lowercase hexits\n[...new Uint8Array(sig)].map(b => b.toString(16).padStart(2, '0')).join('');\n\n// to base64\nbtoa(String.fromCharCode(...new Uint8Array(sig)));\n")),(0,s.kt)("h2",{id:"php"},"PHP"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$secret = 'the shared secret key here';\n$message = 'this is signature string';\n\n// to lowercase hexits\nhash_hmac('sha256', $message, $secret);\n\n// to base64\nbase64_encode(hash_hmac('sha256', $message, $secret, true));\n")),(0,s.kt)("h2",{id:"lua"},"Lua"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"local hmac = require(\"resty.hmac\")\nlocal secret = 'the shared secret key here'\nlocal message = 'this is signature string'\nlocal digest = hmac:new(secret, hmac.ALGOS.SHA256):final(message)\n\n--to lowercase hexits\nngx.say(digest)\n\n--to base64\nngx.say(ngx.encode_base64(digest))\n")),(0,s.kt)("h2",{id:"shell"},"Shell"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'SECRET="the shared secret key here"\nMESSAGE="this is signature string"\n\n# to lowercase hexits\necho -e $MESSAGE | openssl dgst -sha256 -hmac $SECRET\n\n# to base64\necho -e $MESSAGE | openssl dgst -sha256 -hmac $SECRET -binary | base64\n')))}l.isMDXComponent=!0}}]);