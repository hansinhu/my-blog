"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[6302],{876:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),i=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=i(t),k=o,m=d["".concat(p,".").concat(k)]||d[k]||u[k]||a;return t?r.createElement(m,l(l({ref:n},s),{},{components:t})):r.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=k;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[d]="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},7717:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var r=t(7896),o=(t(2784),t(876));const a={sidebar_position:2},l="\u90e8\u7f72Node Web\u5e94\u7528",c={unversionedId:"docker/deploy-node-web",id:"docker/deploy-node-web",title:"\u90e8\u7f72Node Web\u5e94\u7528",description:"\u521b\u5efa\u4e00\u4e2anode web\u5e94\u7528\u7a0b\u5e8f",source:"@site/docs/docker/deploy-node-web.md",sourceDirName:"docker",slug:"/docker/deploy-node-web",permalink:"/docs/docker/deploy-node-web",draft:!1,editUrl:"https://github.com/minma-hu/my-blog/tree/main/docs/docs/docker/deploy-node-web.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u4e86\u89e3 Docker",permalink:"/docs/docker/docker-intro"},next:{title:"Create a Blog Post",permalink:"/docs/docker/create-a-blog-post"}},p={},i=[{value:"\u521b\u5efa\u4e00\u4e2anode web\u5e94\u7528\u7a0b\u5e8f",id:"\u521b\u5efa\u4e00\u4e2anode-web\u5e94\u7528\u7a0b\u5e8f",level:2},{value:"\u521b\u5efa\u4e00\u4e2aDockerfile \u6587\u4ef6",id:"\u521b\u5efa\u4e00\u4e2adockerfile-\u6587\u4ef6",level:2},{value:"\u6dfb\u52a0 .dockerignore \u6587\u4ef6",id:"\u6dfb\u52a0-dockerignore-\u6587\u4ef6",level:3},{value:"\u6784\u5efaDocker\u955c\u50cf",id:"\u6784\u5efadocker\u955c\u50cf",level:2},{value:"\u8fd0\u884cDocker\u5bb9\u5668",id:"\u8fd0\u884cdocker\u5bb9\u5668",level:2},{value:"\u6d4b\u8bd5\u5e94\u7528\u7a0b\u5e8f",id:"\u6d4b\u8bd5\u5e94\u7528\u7a0b\u5e8f",level:2}],s={toc:i},d="wrapper";function u(e){let{components:n,...a}=e;return(0,o.kt)(d,(0,r.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u90e8\u7f72node-web\u5e94\u7528"},"\u90e8\u7f72Node Web\u5e94\u7528"),(0,o.kt)("h2",{id:"\u521b\u5efa\u4e00\u4e2anode-web\u5e94\u7528\u7a0b\u5e8f"},"\u521b\u5efa\u4e00\u4e2anode web\u5e94\u7528\u7a0b\u5e8f"),(0,o.kt)("p",null,"\u5728\u672c\u5730\u8ba1\u7b97\u673a\u4e0a\u521b\u5efa\u4e00\u4e2anode web\u5e94\u7528\u7a0b\u5e8f\uff0c\u5e76\u786e\u4fdd\u5b83\u53ef\u4ee5\u5728\u672c\u5730\u8fd0\u884c\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," + ",(0,o.kt)("inlineCode",{parentName:"p"},"koa")," \u521b\u5efa\u4e00\u4e2anode web \u5e94\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app@latest my-app\ncd my-app\ntouch server.js\nnpm install koa @koa/router koa-static\n")),(0,o.kt)("p",null,"\u7f16\u5199 server.js \u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./server.js"',title:'"./server.js"'},'const Koa = require("koa");\nconst Router = require(\'@koa/router\')\nconst fs = require("fs");\nconst koaStatic = require(\'koa-static\');\n\nconst app = new Koa();\nconst router = new Router();\n\nrouter\n  .get(\'/\', (ctx, next) => {\n    ctx.set("Content-Type", "text/html");\n    ctx.body = fs.readFileSync("dist/index.html");\n  })\n\napp.use(koaStatic(\'dist\'))\n  .use(router.routes())\n  .use(router.allowedMethods())\n\napp.listen(3000, () => {\n  console.log(`API proxy start: http://localhost:3000`)\n});\n\n')),(0,o.kt)("p",null,"\u66f4\u6539package.json script \u542f\u52a8\u547d\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "start": "node server.js",\n}\n')),(0,o.kt)("p",null,"\u7136\u540e\u6d4b\u8bd5\u80fd\u5426\u6b63\u5e38\u6253\u5305\u3001\u542f\u52a8"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\nnpm run start\n")),(0,o.kt)("p",null,"\u542f\u52a8\u540e\u770b\u5230\u4e00\u4e0b\u753b\u9762"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"node-web",src:t(8433).Z,width:"657",height:"439"})),(0,o.kt)("h2",{id:"\u521b\u5efa\u4e00\u4e2adockerfile-\u6587\u4ef6"},"\u521b\u5efa\u4e00\u4e2aDockerfile \u6587\u4ef6"),(0,o.kt)("p",null,"\u5728\u5e94\u7528\u7a0b\u5e8f\u6839\u76ee\u5f55\u4e2d\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a Dockerfile \u7684\u6587\u4ef6\uff0c\u5e76\u7f16\u5199\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# \u4eceDocker Hub\u4e0a\u9762\u62c9\u53d6\u6307\u5b9anode\u7248\u672c\u7684\u955c\u50cf\nFROM node:18\n\n# \u8bbe\u7f6e\u5e94\u7528\u7a0b\u5e8f\u7684\u5de5\u4f5c\u76ee\u5f55\nWORKDIR /app\n\n# \u5c06\u672c\u5730\u7684 package.json \u548c package-lock.json \u590d\u5236\u5230\u5bb9\u5668\u4e2d\n# \u5982\u679c\u4f7f\u7528yarn \u5219\u628a yarn.lock \u590d\u5236\u5230\u5bb9\u5668\u4e2d\nCOPY package*.json ./\nCOPY yarn.lock ./\n\n# \u5b89\u88c5\u4f9d\u8d56\u9879: \u8fd0\u884c yarn \u6216 npm install \nRUN yarn\n\n# \u5c06\u672c\u5730\u5e94\u7528\u7a0b\u5e8f\u590d\u5236\u5230\u5bb9\u5668\u4e2d\nCOPY . .\n\n# \u6253\u5305 yarn build \u6216 npm run build\nRUN yarn build\n\n# \u66b4\u9732\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528\u7684\u7aef\u53e3\nEXPOSE 3000\n\n# \u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f yarn start \u6216 npm start\nCMD ["yarn", "start"]\n')),(0,o.kt)("h3",{id:"\u6dfb\u52a0-dockerignore-\u6587\u4ef6"},"\u6dfb\u52a0 .dockerignore \u6587\u4ef6"),(0,o.kt)("p",null,".dockerignore \u6587\u4ef6\u7684\u8bed\u6cd5\u7c7b\u4f3c\u4e8e .gitignore \u6587\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528\u901a\u914d\u7b26\u548c\u76ee\u5f55\u540d\u6765\u6307\u5b9a\u8981\u6392\u9664\u7684\u6587\u4ef6\u548c\u76ee\u5f55\u3002\u8fd9\u53ef\u4ee5\u51cf\u5c0f\u955c\u50cf\u5927\u5c0f\uff0c\u63d0\u9ad8\u6784\u5efa\u901f\u5ea6\u548c\u5b89\u5168\u6027\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"node_modules\nnpm-debug.log\n")),(0,o.kt)("h2",{id:"\u6784\u5efadocker\u955c\u50cf"},"\u6784\u5efaDocker\u955c\u50cf"),(0,o.kt)("p",null,"\u5728\u547d\u4ee4\u884c\u4e2d\u8fdb\u5165\u5e94\u7528\u7a0b\u5e8f\u6839\u76ee\u5f55\uff0c\u5e76\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u6784\u5efaDocker\u955c\u50cf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t my-node-app .\n")),(0,o.kt)("p",null,"\u5176\u4e2d\uff0cmy-node-app\u662f\u955c\u50cf\u7684\u540d\u79f0\uff0c\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8fdb\u884c\u66f4\u6539\u3002"),(0,o.kt)("h2",{id:"\u8fd0\u884cdocker\u5bb9\u5668"},"\u8fd0\u884cDocker\u5bb9\u5668"),(0,o.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u542f\u52a8Docker\u5bb9\u5668\u5e76\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 3000:3000 my-node-app\n")),(0,o.kt)("p",null,"\u5176\u4e2d\uff0c3000:3000\u6307\u5b9a\u4e86\u5bb9\u5668\u5185\u90e8\u7684\u7aef\u53e3\u548c\u672c\u5730\u8ba1\u7b97\u673a\u7684\u7aef\u53e3\u4e4b\u95f4\u7684\u6620\u5c04\u5173\u7cfb\u3002\u5982\u679c\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528\u7684\u662f\u4e0d\u540c\u7684\u7aef\u53e3\u53f7\uff0c\u9700\u8981\u76f8\u5e94\u5730\u8fdb\u884c\u66f4\u6539\u3002"),(0,o.kt)("h2",{id:"\u6d4b\u8bd5\u5e94\u7528\u7a0b\u5e8f"},"\u6d4b\u8bd5\u5e94\u7528\u7a0b\u5e8f"),(0,o.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u4e2d\u8bbf\u95eehttp://localhost:3000\uff0c\u5982\u679c\u4e00\u5207\u6b63\u5e38\uff0c\u5219\u5e94\u8be5\u53ef\u4ee5\u770b\u5230\u5e94\u7528\u7a0b\u5e8f\u7684\u9875\u9762\u3002"),(0,o.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u6b65\u9aa4\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528Docker\u90e8\u7f72\u4e00\u4e2anode web\u5e94\u7528\u7a0b\u5e8f\u4e86\u3002\u6ce8\u610f\uff0c\u4e3a\u4e86\u7b80\u5316\u793a\u4f8b\uff0c\u4ee5\u4e0a\u6b65\u9aa4\u5e76\u6ca1\u6709\u6d89\u53ca\u5230Docker Compose\u3001Docker Swarm\u7b49\u66f4\u9ad8\u7ea7\u7684\u529f\u80fd\uff0c\u8fd9\u4e9b\u529f\u80fd\u53ef\u4ee5\u5e2e\u52a9\u66f4\u597d\u5730\u7ba1\u7406\u591a\u4e2aDocker\u5bb9\u5668\u3002"))}u.isMDXComponent=!0},8433:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/node-web-page-f39b8df2129ea0779a0336c26e849665.png"}}]);