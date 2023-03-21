---
sidebar_position: 1
---

# 快速了解 Docker

Docker是一种开源的容器化平台，可以帮助开发者更高效地构建、打包、发布和运行应用程序。Docker的基本原理是将应用程序和其所有依赖项（如库、运行时环境等）封装在一个独立的容器中，使得这个容器可以在任何地方运行，并且保证运行时环境的一致性和可移植性。

## Docker的优势

- 轻量级：Docker容器相对于传统虚拟机来说更轻量级，因为它们不需要模拟整个操作系统，而只需要模拟应用程序和其依赖项所需要的运行时环境即可。

- 可移植性：Docker容器可以在任何支持Docker的环境中运行，包括本地开发环境、云平台、数据中心等，从而实现应用程序的可移植性。

- 灵活性：Docker容器可以非常快速地启动、停止、扩容和缩容，从而提供了更高的灵活性和可用性。

- 隔离性：Docker容器提供了隔离的环境，从而避免了应用程序之间的相互干扰和影响。

- 易于管理：Docker容器可以通过命令行或者Docker API进行管理，从而提供了更方便和高效的管理方式

容器与虚拟机对比
![容器与虚拟机对比](/img/doc/docker/containers-vs-virtualMachines.webp)

## Docker的基本概念

- 镜像（Image）：Docker镜像是一个包含应用程序和其依赖项的只读模板，可以用来创建Docker容器。

- 容器（Container）：Docker容器是一个运行着的Docker镜像的实例，可以被启动、停止、删除等。

- 仓库（Repository）：Docker仓库是用来存储和分享Docker镜像的地方，可以通过Docker Hub等公共仓库或者私有仓库来访问。

- Dockerfile：Dockerfile是一个包含创建Docker镜像的指令的文本文件，可以用来自动化地构建Docker镜像。

- Docker Compose：Docker Compose是一个用于定义和运行多个容器的工具，可以通过一个单独的配置文件来定义多个容器之间的关系和依赖关系。
