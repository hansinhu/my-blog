---
sidebar_position: 2
---

# 部署Node Web应用

## 创建一个node web应用程序

在本地计算机上创建一个node web应用程序，并确保它可以在本地运行。

例如使用 `create-react-app` + `koa` 创建一个node web 应用

```bash
npx create-react-app@latest my-app
cd my-app
touch server.js
npm install koa @koa/router koa-static
```

编写 server.js 文件

```js title="./server.js"
const Koa = require("koa");
const Router = require('@koa/router')
const fs = require("fs");
const koaStatic = require('koa-static');

const app = new Koa();
const router = new Router();

router
  .get('/', (ctx, next) => {
    ctx.set("Content-Type", "text/html");
    ctx.body = fs.readFileSync("dist/index.html");
  })

app.use(koaStatic('dist'))
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log(`API proxy start: http://localhost:3000`)
});

```

更改package.json script 启动命令

```json
{
  "start": "node server.js",
}
```

然后测试能否正常打包、启动

```bash
npm run build
npm run start
```

启动后看到一下画面

![node-web](/img/doc/docker/node-web-page.png)


## 创建一个Dockerfile 文件

在应用程序根目录中创建一个名为 Dockerfile 的文件，并编写以下内容：

```bash
# 从Docker Hub上面拉取指定node版本的镜像
FROM node:18

# 设置应用程序的工作目录
WORKDIR /app

# 将本地的 package.json 和 package-lock.json 复制到容器中
# 如果使用yarn 则把 yarn.lock 复制到容器中
COPY package*.json ./
COPY yarn.lock ./

# 安装依赖项: 运行 yarn 或 npm install 
RUN yarn

# 将本地应用程序复制到容器中
COPY . .

# 打包 yarn build 或 npm run build
RUN yarn build

# 暴露应用程序使用的端口
EXPOSE 3000

# 运行应用程序 yarn start 或 npm start
CMD ["yarn", "start"]
```

### 添加 .dockerignore 文件

.dockerignore 文件的语法类似于 .gitignore 文件，可以使用通配符和目录名来指定要排除的文件和目录。这可以减小镜像大小，提高构建速度和安全性。

```
node_modules
npm-debug.log
```

## 构建Docker镜像

在命令行中进入应用程序根目录，并运行以下命令来构建Docker镜像：

```bash
docker build -t my-node-app .
```

其中，my-node-app是镜像的名称，可以根据实际情况进行更改。

## 运行Docker容器

运行以下命令来启动Docker容器并运行应用程序：

```bash
docker run -p 3000:3000 my-node-app
```

其中，3000:3000指定了容器内部的端口和本地计算机的端口之间的映射关系。如果应用程序使用的是不同的端口号，需要相应地进行更改。

## 测试应用程序

在浏览器中访问http://localhost:3000，如果一切正常，则应该可以看到应用程序的页面。

通过以上步骤，就可以使用Docker部署一个node web应用程序了。注意，为了简化示例，以上步骤并没有涉及到Docker Compose、Docker Swarm等更高级的功能，这些功能可以帮助更好地管理多个Docker容器。