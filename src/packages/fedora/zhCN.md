> Fedora 是由社区支持的 Fedora Project 开发的Linux发行版，该项目主要由 IBM 的子公司 Red Hat 赞助，并得到其他公司的额外支持。
[source](https://en.wikipedia.org/wiki/Fedora_(operating_system))

# 1 - 切换镜像源
打开命令行并执行以下命令：

```bash
sed -e 's|^metalink=|#metalink=|g' \
    -e 's|^#baseurl=http://download.fedoraproject.org/pub/fedora/linux|baseurl={{link}}|g' \
    -i.bak \
    /etc/yum.repos.d/fedora.repo \
    /etc/yum.repos.d/fedora-modular.repo \
    /etc/yum.repos.d/fedora-updates.repo \
    /etc/yum.repos.d/fedora-updates-modular.repo
```

# 2 - 更新镜像源缓存
打开命令行并执行以下命令：

```bash
dnf makecache
```

# 3 - 开始使用
现在便可以正常使用 `dnf` 。

```bash
dnf install <package name>
```
