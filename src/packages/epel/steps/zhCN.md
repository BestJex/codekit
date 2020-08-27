# 1 - 安装软件包
打开命令行并执行以下命令：

```sh
yum install -y epel-release
```

# 2 - 切换镜像源
打开命令行并执行以下命令：

```sh
sed -e 's|^metalink=|#metalink=|g' \
    -e 's|^#baseurl=https\?://download.fedoraproject.org/pub/epel/|baseurl={{link}}/|g' \
    -i.bak \
    /etc/yum.repos.d/epel.repo
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
