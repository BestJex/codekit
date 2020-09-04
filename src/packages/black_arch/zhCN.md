> BlackArch 是基于 Arch Linux 的渗透测试发行版，提供大量的网络安全工具。 它是专门为渗透测试人员和安全研究人员创建的开源发行版。

# 1 - 切换镜像源

打开命令行并执行以下命令：

```bash
cat << EOF >> /etc/pacman.conf
[blackarch]
Server = {{link}}/$repo/os/$arch
EOF
```

# 2 - 更新镜像源缓存并安装 keyring

打开命令行并执行以下命令：

```bash
pacman -Syyu blackarch-keyring
```

# 3 - 开始使用

现在便可以正常使用 `pacman` 。

```bash
pacman -S <package name>
```
