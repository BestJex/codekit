> Alpine Linux 是基于 musl 和 BusyBox 的 Linux 发行版，旨在提高安全性，简化性和资源效率。 由于其体积小，通常用于提供快速启动时间的容器中。
[source](https://en.wikipedia.org/wiki/Alpine_Linux)

# 1 - 切换镜像源
打开命令行并执行以下命令：

```sh
sed -i 's|http://dl-cdn.alpinelinux.org/alpine|{{link}}|g' /etc/apk/repositories
```

# 2 - 更新镜像源缓存
打开命令行并执行以下命令：

```sh
apk update
```

# 3 - 开始使用
现在便可以正常使用 `apk` 。

```sh
apk add <package name>
```
