> CentOS 是 Linux 发行版，提供免费的，社区支持的计算平台，该平台在功能上与其上游源 Red Hat Enterprise Linux 兼容。
[source](https://en.wikipedia.org/wiki/CentOS)

# 1 - 切换镜像源
打开命令行并执行以下命令：

```sh
sed -e 's|^mirrorlist=|#mirrorlist=|g' \
    -e 's|^#baseurl=http://mirror.centos.org/{{path}}|baseurl={{link}}|g' \
    -i.bak \
    /etc/yum.repos.d/CentOS-Base.repo {{extra}}
```

# 2 - 更新镜像源缓存
打开命令行并执行以下命令：

```sh
yum makecache
```

# 3 - 开始使用
现在便可以正常使用 `yum` 。

```sh
yum install <package name>
```
