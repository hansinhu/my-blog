# 从Docker Hub上面拉取指定node版本的镜像
FROM node:18

# 如果太慢可以使用下面阿里云镜像
# FROM registry.cn-hangzhou.aliyuncs.com/sblockchain/node

# 定义项目要上传的容器位置，也就是我们这个项目要放到那个容器中
WORKDIR /my-blog/app

# nginx 配置
ADD .docker/conf/blog_nginx.conf /etc/nginx/conf.d/default.conf

# 使用yarn
COPY package.json ./
COPY yarn.lock ./
# yarn workspace
COPY ./packages/client/package.json ./packages/client/
COPY ./packages/server/package.json ./packages/server/

# 运行安装指令
RUN yarn

# 复制当前app目录文件到上面定义的目录WORKDIR中
COPY . .

# 打包
RUN yarn build

# 容器内应用启动的端口
EXPOSE 3000
EXPOSE 3001

# 启动应用
CMD ["yarn", "start"]
