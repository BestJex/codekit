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
