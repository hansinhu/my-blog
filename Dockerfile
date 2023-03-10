# 从Docker Hub上面拉取指定node版本的镜像
FROM node:18

# 如果太慢可以使用下面阿里云镜像
# FROM registry.cn-hangzhou.aliyuncs.com/sblockchain/node

# 定义项目要上传的容器位置，也就是我们这个项目要放到那个容器中
WORKDIR /next/app

# 使用yarn
COPY package.json ./
COPY yarn.lock ./
# yarn workspace
COPY ./client/package.json ./client/
COPY ./server/package.json ./server/

# 运行安装指令
RUN yarn

# 复制当前app目录文件到上面定义的目录WORKDIR中
COPY . .

# 打包
RUN yarn build

# 容器内应用启动的端口
EXPOSE 3000

# 启动应用
CMD ["yarn", "start"]