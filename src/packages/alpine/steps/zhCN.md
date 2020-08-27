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
