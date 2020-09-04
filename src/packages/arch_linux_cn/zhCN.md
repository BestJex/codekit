> Arch Linux 中文社区仓库是由 Arch Linux 中文社区驱动的非官方软件仓库，包含许多官方仓库未提供的额外的软件包，以及已有软件的 git 版本等变种。

# 1 - 切换镜像源

打开命令行并执行以下命令：

```bash
cat << EOF >> /etc/pacman.conf
[archlinuxcn]
Server = {{link}}/$arch
EOF
```

# 2 - 更新镜像源缓存并安装 keyring

打开命令行并执行以下命令：

```bash
pacman -Syyu archlinuxcn-keyring
```

# 3 - 开始使用

现在便可以正常使用 `pacman` 。

```bash
pacman -S <package name>
```
