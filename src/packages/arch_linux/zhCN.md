> Arch Linux 是用于具有 x86-64 处理器的计算机的Linux发行版。 Arch Linux 遵循五项原则：简单性，现代性，实用性，用户中心性和多功能性。
[source](https://en.wikipedia.org/wiki/Arch_Linux)

# 1 - 切换镜像源
打开命令行并执行以下命令：

```bash
sed -i '1s|^|Server = {{link}}/$repo/os/$arch\n|' /etc/pacman.d/mirrorlist
```

# 2 - 更新镜像源缓存
打开命令行并执行以下命令：

```bash
pacman -Syy
```

# 3 - 开始使用
现在便可以正常使用 `pacman` 。

```bash
pacman -S <package name>
```
