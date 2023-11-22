# Website

https://www.hansinhu.top

This website is built using [Docusaurus 2](https://docusaurus.io/)

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


### Deployment By Docker

构建镜像

```
$ docker build . -t hansinhu/my-blog
```

运行镜像

```
$ docker run -p 3000:3000 -p 3001:3001 -d hansinhu/my-blog
```

把你应用程序的输出打印出来：
```
$ docker ps
$ docker logs <container id>
```

如果你需要进入容器中，请运行 exec 命令：

```
# Enter the container
$ docker exec -it <container id> /bin/bash

# Exit the container
$ exit
```

关闭镜像

```
$ docker kill <container id>
```

修改nginx配置
.doker/nginx.conf => /etc/nginx/conf.d/*.conf
